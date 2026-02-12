/* ============================================
   PeriodGuide.com — Insights Engine
   Charts, trends, pattern detection (non-diagnostic)
   ============================================ */

const PG_INSIGHTS = (() => {
  function getColorForValue(value, max = 10) {
    const ratio = value / max;
    if (ratio <= 0.3) return '#2ECC71';
    if (ratio <= 0.6) return '#F5A623';
    return '#E85D75';
  }

  // Simple bar chart renderer (pure CSS/HTML, no library)
  function renderBarChart(container, data, options = {}) {
    if (!container || !data.length) return;
    const { label = 'Value', maxVal = 10, color = 'var(--color-primary)', height = 200 } = options;

    const barWidth = Math.max(8, Math.min(30, (container.offsetWidth - 40) / data.length - 4));

    container.innerHTML = `
      <div class="chart-bars" style="display:flex;align-items:flex-end;gap:3px;height:${height}px;padding:0 4px;" role="img" aria-label="${label} chart">
        ${data.map((d, i) => {
          const h = (d.value / maxVal) * (height - 30);
          const barColor = options.colorByValue ? getColorForValue(d.value, maxVal) : color;
          return `
            <div class="chart-bar" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;min-width:${barWidth}px;">
              <span class="text-xs font-semibold" style="color:${barColor};margin-bottom:2px;">${d.value}</span>
              <div style="width:100%;max-width:${barWidth}px;height:${Math.max(2, h)}px;background:${barColor};border-radius:4px 4px 0 0;transition:height 0.5s ease;opacity:0.85;"></div>
              ${d.label ? `<span class="text-xs text-muted" style="margin-top:4px;white-space:nowrap;font-size:9px;">${d.label}</span>` : ''}
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // Mini sparkline renderer
  function renderSparkline(container, values, color = 'var(--color-primary)') {
    if (!container || !values.length) return;
    const width = container.offsetWidth || 200;
    const height = 50;
    const max = Math.max(...values, 1);
    const min = Math.min(...values, 0);
    const range = max - min || 1;

    const points = values.map((v, i) => {
      const x = (i / (values.length - 1)) * width;
      const y = height - ((v - min) / range) * (height - 10) - 5;
      return `${x},${y}`;
    }).join(' ');

    container.innerHTML = `
      <svg viewBox="0 0 ${width} ${height}" width="100%" height="${height}" role="img" aria-label="Trend line">
        <polyline points="${points}" fill="none" stroke="${color}" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="${(values.length - 1) / (values.length - 1) * width}" cy="${height - ((values[values.length - 1] - min) / range) * (height - 10) - 5}"
          r="4" fill="${color}" />
      </svg>
    `;
  }

  // Cycle overlay visualization
  function renderCycleOverlay(container, entries) {
    if (!container || !entries.length) return;
    const t = typeof PG_I18N !== 'undefined' ? PG_I18N.t : (k) => k;

    // Group entries by cycle day
    const byDay = {};
    entries.forEach(e => {
      if (e.cycle_day) {
        if (!byDay[e.cycle_day]) byDay[e.cycle_day] = [];
        byDay[e.cycle_day].push(e);
      }
    });

    const days = Object.keys(byDay).map(Number).sort((a, b) => a - b);
    if (!days.length) {
      container.innerHTML = `<p class="text-muted text-center p-6">${t('insights_not_enough')}</p>`;
      return;
    }

    const data = days.map(day => {
      const dayEntries = byDay[day];
      const avgPain = dayEntries.reduce((s, e) => s + (e.pain || 0), 0) / dayEntries.length;
      return { label: `D${day}`, value: Math.round(avgPain * 10) / 10 };
    });

    renderBarChart(container, data, {
      label: t('track_pain'),
      maxVal: 10,
      colorByValue: true,
      height: 160
    });
  }

  // Pattern detection (non-diagnostic)
  function detectPatterns(entries) {
    if (entries.length < 14) return [];
    const patterns = [];
    const t = typeof PG_I18N !== 'undefined' ? PG_I18N.t : (k) => k;

    // Check for consistent high pain
    const highPainDays = entries.filter(e => e.pain >= 7);
    if (highPainDays.length >= 3) {
      patterns.push({
        type: 'pain',
        severity: 'attention',
        title_en: 'Recurring High Pain',
        title_es: 'Dolor Alto Recurrente',
        title_fr: 'Douleur Elevee Recurrente',
        desc_en: `You've logged pain level 7+ on ${highPainDays.length} days. Consider discussing pain management options with a healthcare provider.`,
        desc_es: `Has registrado dolor nivel 7+ en ${highPainDays.length} dias. Considera discutir opciones de manejo del dolor con un profesional de salud.`,
        desc_fr: `Vous avez enregistre une douleur de niveau 7+ sur ${highPainDays.length} jours. Envisagez de discuter des options de gestion de la douleur avec un professionnel de sante.`
      });
    }

    // Check for sleep-mood correlation
    const withSleepMood = entries.filter(e => e.sleep > 0 && e.mood > 0);
    if (withSleepMood.length >= 7) {
      const lowSleepBadMood = withSleepMood.filter(e => e.sleep < 6 && e.mood < 4).length;
      const ratio = lowSleepBadMood / withSleepMood.length;
      if (ratio > 0.3) {
        patterns.push({
          type: 'correlation',
          severity: 'info',
          title_en: 'Sleep-Mood Connection',
          title_es: 'Conexion Sueno-Animo',
          title_fr: 'Lien Sommeil-Humeur',
          desc_en: 'Your data suggests lower mood on days with less sleep. Prioritizing sleep hygiene during your luteal phase may help.',
          desc_es: 'Tus datos sugieren peor animo en dias con menos sueno. Priorizar la higiene del sueno durante tu fase lutea puede ayudar.',
          desc_fr: 'Vos donnees suggerent une humeur plus basse les jours avec moins de sommeil. Prioriser l\'hygiene du sommeil pendant votre phase luteale peut aider.'
        });
      }
    }

    // Check for heavy bleeding pattern
    const heavyDays = entries.filter(e => e.bleeding === 'heavy');
    if (heavyDays.length >= 3) {
      patterns.push({
        type: 'bleeding',
        severity: 'attention',
        title_en: 'Heavy Bleeding Pattern',
        title_es: 'Patron de Sangrado Abundante',
        title_fr: 'Schema de Saignement Abondant',
        desc_en: `You've logged heavy bleeding on ${heavyDays.length} days. If this persists, it may be worth discussing with a healthcare provider to rule out underlying causes.`,
        desc_es: `Has registrado sangrado abundante en ${heavyDays.length} dias. Si esto persiste, puede valer la pena discutirlo con un profesional de salud.`,
        desc_fr: `Vous avez enregistre des saignements abondants sur ${heavyDays.length} jours. Si cela persiste, cela peut valoir la peine d'en discuter avec un professionnel de sante.`
      });
    }

    return patterns;
  }

  // Render insights dashboard
  function renderInsightsDashboard(container) {
    if (!container) return;
    const t = typeof PG_I18N !== 'undefined' ? PG_I18N.t : (k) => k;
    const lang = typeof PG_I18N !== 'undefined' ? PG_I18N.getLang() : 'en';
    const stats = PG_TRACKING.getStats(90);

    if (!stats || stats.totalEntries < 3) {
      container.innerHTML = `
        <div class="text-center p-8">
          <div style="font-size:3rem;margin-bottom:1rem;">📊</div>
          <h3>${t('insights_title')}</h3>
          <p class="text-muted">${t('insights_not_enough')}</p>
          <a href="track.html" class="btn btn--primary mt-4">${t('tg_track_today')}</a>
        </div>
      `;
      return;
    }

    const entries = PG_TRACKING.getEntriesForRange(90);
    const patterns = detectPatterns(entries);

    container.innerHTML = `
      <div class="insights-dashboard">
        <!-- Stats Grid -->
        <div class="grid grid-4 mb-8">
          <div class="stat-card">
            <div class="stat-card__value">${stats.totalEntries}</div>
            <div class="stat-card__label">Days Tracked</div>
          </div>
          <div class="stat-card">
            <div class="stat-card__value" style="color:var(--color-menstrual)">${stats.avgPain}</div>
            <div class="stat-card__label">Avg Pain</div>
          </div>
          <div class="stat-card">
            <div class="stat-card__value" style="color:var(--color-secondary)">${stats.avgMood}</div>
            <div class="stat-card__label">Avg Mood</div>
          </div>
          <div class="stat-card">
            <div class="stat-card__value" style="color:var(--color-follicular)">${stats.avgEnergy}</div>
            <div class="stat-card__label">Avg Energy</div>
          </div>
        </div>

        <!-- Cycle Overlay -->
        <div class="card mb-6">
          <div class="card__body">
            <h3>${t('insights_cycle_overview')}</h3>
            <div id="cycle-overlay-chart"></div>
          </div>
        </div>

        <!-- Symptom Trends -->
        <div class="card mb-6">
          <div class="card__body">
            <h3>${t('insights_symptom_trends')}</h3>
            <div class="grid grid-2 gap-4">
              <div>
                <p class="text-sm font-semibold mb-2">Pain</p>
                <div id="pain-sparkline"></div>
              </div>
              <div>
                <p class="text-sm font-semibold mb-2">Mood</p>
                <div id="mood-sparkline"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Patterns -->
        ${patterns.length ? `
          <div class="mb-6">
            <h3 class="mb-4">${t('insights_pattern_found')}</h3>
            ${patterns.map(p => `
              <div class="alert alert--${p.severity === 'attention' ? 'warning' : 'info'} mb-4">
                <div class="alert__content">
                  <div class="alert__title">${p['title_' + lang] || p.title_en}</div>
                  <p>${p['desc_' + lang] || p.desc_en}</p>
                </div>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `;

    // Render charts after DOM update
    requestAnimationFrame(() => {
      const overlayEl = document.getElementById('cycle-overlay-chart');
      if (overlayEl) renderCycleOverlay(overlayEl, entries);

      const painEl = document.getElementById('pain-sparkline');
      if (painEl) {
        const painVals = entries.slice(-14).map(e => e.pain || 0);
        renderSparkline(painEl, painVals, 'var(--color-menstrual)');
      }

      const moodEl = document.getElementById('mood-sparkline');
      if (moodEl) {
        const moodVals = entries.slice(-14).map(e => e.mood || 5);
        renderSparkline(moodEl, moodVals, 'var(--color-secondary)');
      }
    });
  }

  return {
    renderBarChart,
    renderSparkline,
    renderCycleOverlay,
    detectPatterns,
    renderInsightsDashboard
  };
})();
