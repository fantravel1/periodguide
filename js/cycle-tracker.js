/* ============================================
   PeriodGuide.com — Cycle Tracker Engine
   Interactive cycle wheel, day finder, phase logic
   ============================================ */

const PG_CYCLE = (() => {
  const PHASES = {
    menstrual:  { start: 1,  end: 5,  color: '#E85D75', label: 'phase_menstrual' },
    follicular: { start: 6,  end: 13, color: '#56B870', label: 'phase_follicular' },
    ovulation:  { start: 14, end: 16, color: '#F5A623', label: 'phase_ovulation' },
    luteal:     { start: 17, end: 28, color: '#7C5CFC', label: 'phase_luteal' }
  };

  const PHASE_ACTIONS = {
    menstrual: [
      { key: 'action_heat',    icon: '\uD83D\uDD25' },
      { key: 'action_rest',    icon: '\uD83D\uDCA4' },
      { key: 'action_nourish', icon: '\uD83C\uDF75' }
    ],
    follicular: [
      { key: 'action_move',    icon: '\uD83C\uDFC3' },
      { key: 'action_nourish', icon: '\uD83E\uDD57' },
      { key: 'action_track',   icon: '\uD83D\uDCDD' }
    ],
    ovulation: [
      { key: 'action_hydrate', icon: '\uD83D\uDCA7' },
      { key: 'action_move',    icon: '\u26A1' },
      { key: 'action_track',   icon: '\uD83D\uDCCA' }
    ],
    luteal: [
      { key: 'action_rest',    icon: '\uD83E\uDDD8' },
      { key: 'action_nourish', icon: '\uD83C\uDF36\uFE0F' },
      { key: 'action_hydrate', icon: '\uD83C\uDF3F' }
    ]
  };

  function getPhase(day, cycleLength = 28) {
    if (day < 1) day = 1;
    const ratio = day / cycleLength;
    if (ratio <= 0.18) return 'menstrual';
    if (ratio <= 0.46) return 'follicular';
    if (ratio <= 0.57) return 'ovulation';
    return 'luteal';
  }

  function getPhaseInfo(phase) {
    return PHASES[phase] || PHASES.menstrual;
  }

  function getPhaseActions(phase) {
    return PHASE_ACTIONS[phase] || PHASE_ACTIONS.menstrual;
  }

  function calculateDayFromLastPeriod(lastPeriodDate) {
    const today = new Date();
    const last = new Date(lastPeriodDate);
    const diffTime = today.getTime() - last.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return Math.max(1, diffDays);
  }

  function getPhasePercentages(cycleLength = 28) {
    return {
      menstrual:  (5 / cycleLength) * 100,
      follicular: (8 / cycleLength) * 100,
      ovulation:  (3 / cycleLength) * 100,
      luteal:     ((cycleLength - 16) / cycleLength) * 100
    };
  }

  // --- Cycle Wheel SVG Renderer ---
  function renderCycleWheel(container, selectedDay, cycleLength = 28) {
    if (!container) return;
    const size = container.offsetWidth || 300;
    const cx = size / 2;
    const cy = size / 2;
    const outerR = (size / 2) - 8;
    const innerR = outerR * 0.6;
    const ringWidth = outerR - innerR;

    const phase = getPhase(selectedDay, cycleLength);
    const phaseInfo = getPhaseInfo(phase);
    const t = typeof PG_I18N !== 'undefined' ? PG_I18N.t : (k) => k;

    const percentages = getPhasePercentages(cycleLength);
    const phaseOrder = ['menstrual', 'follicular', 'ovulation', 'luteal'];
    let cumulativeAngle = -90;

    let arcs = '';
    phaseOrder.forEach(p => {
      const angle = (percentages[p] / 100) * 360;
      const startAngle = cumulativeAngle;
      const endAngle = cumulativeAngle + angle;
      const largeArc = angle > 180 ? 1 : 0;

      const startRad = (startAngle * Math.PI) / 180;
      const endRad = (endAngle * Math.PI) / 180;

      const midR = innerR + ringWidth / 2;
      const x1 = cx + midR * Math.cos(startRad);
      const y1 = cy + midR * Math.sin(startRad);
      const x2 = cx + midR * Math.cos(endRad);
      const y2 = cy + midR * Math.sin(endRad);

      const isActive = p === phase;
      const opacity = isActive ? 1 : 0.35;
      const strokeW = isActive ? ringWidth + 4 : ringWidth - 2;

      arcs += `<path d="M ${x1} ${y1} A ${midR} ${midR} 0 ${largeArc} 1 ${x2} ${y2}"
        fill="none" stroke="${PHASES[p].color}" stroke-width="${strokeW}"
        stroke-linecap="round" opacity="${opacity}"
        style="transition: all 0.4s ease; cursor: pointer;"
        data-phase="${p}" />`;

      cumulativeAngle = endAngle;
    });

    // Day marker position
    const dayAngle = -90 + ((selectedDay - 1) / cycleLength) * 360;
    const dayRad = (dayAngle * Math.PI) / 180;
    const markerR = innerR + ringWidth / 2;
    const markerX = cx + markerR * Math.cos(dayRad);
    const markerY = cy + markerR * Math.sin(dayRad);

    container.innerHTML = `
      <svg viewBox="0 0 ${size} ${size}" width="100%" height="100%" role="img"
        aria-label="${t('cdf_day')} ${selectedDay} - ${t(phaseInfo.label)}">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="4" flood-opacity="0.15"/>
          </filter>
        </defs>

        <!-- Background ring -->
        <circle cx="${cx}" cy="${cy}" r="${innerR + ringWidth/2}" fill="none"
          stroke="var(--color-gray-200)" stroke-width="${ringWidth}" opacity="0.3" />

        <!-- Phase arcs -->
        ${arcs}

        <!-- Day marker -->
        <circle cx="${markerX}" cy="${markerY}" r="12" fill="white"
          stroke="${phaseInfo.color}" stroke-width="3" filter="url(#glow)"
          style="transition: all 0.4s ease;" />
        <text x="${markerX}" y="${markerY}" text-anchor="middle" dominant-baseline="central"
          font-size="9" font-weight="700" fill="${phaseInfo.color}">${selectedDay}</text>

        <!-- Center circle -->
        <circle cx="${cx}" cy="${cy}" r="${innerR - 8}" fill="var(--color-white)"
          filter="url(#shadow)" />

        <!-- Center content -->
        <text x="${cx}" y="${cy - 18}" text-anchor="middle" font-family="var(--font-display)"
          font-size="42" font-weight="800" fill="${phaseInfo.color}">${selectedDay}</text>
        <text x="${cx}" y="${cy + 8}" text-anchor="middle" font-family="var(--font-primary)"
          font-size="11" font-weight="600" fill="var(--color-gray-600)">${t('cdf_day').toUpperCase()}</text>
        <text x="${cx}" y="${cy + 28}" text-anchor="middle" font-family="var(--font-primary)"
          font-size="13" font-weight="600" fill="${phaseInfo.color}">${t(phaseInfo.label)}</text>
      </svg>
    `;
  }

  // --- Day Grid Renderer ---
  function renderDayGrid(container, selectedDay, cycleLength = 28, onSelect) {
    if (!container) return;
    container.innerHTML = '';
    for (let i = 1; i <= cycleLength; i++) {
      const phase = getPhase(i, cycleLength);
      const btn = document.createElement('button');
      btn.className = 'day-grid__cell';
      btn.textContent = i;
      btn.setAttribute('data-day', i);
      btn.setAttribute('data-phase', phase);
      btn.setAttribute('aria-label', `Day ${i}`);
      if (i === selectedDay) btn.classList.add('selected');
      btn.addEventListener('click', () => {
        container.querySelectorAll('.day-grid__cell').forEach(c => c.classList.remove('selected'));
        btn.classList.add('selected');
        if (onSelect) onSelect(i);
      });
      container.appendChild(btn);
    }
  }

  // --- Action Cards Renderer ---
  function renderActions(container, phase) {
    if (!container) return;
    const actions = getPhaseActions(phase);
    const t = typeof PG_I18N !== 'undefined' ? PG_I18N.t : (k) => k;

    container.innerHTML = actions.map(action => `
      <div class="action-card animate-on-scroll">
        <div class="action-card__icon">${action.icon}</div>
        <div class="action-card__content">
          <h4 class="action-card__title">${t(action.key)}</h4>
          <p class="action-card__desc">${t(action.key + '_desc')}</p>
        </div>
      </div>
    `).join('');
  }

  // --- Storage ---
  function saveState(state) {
    try {
      localStorage.setItem('pg_cycle_state', JSON.stringify({
        ...state,
        updatedAt: new Date().toISOString()
      }));
    } catch (e) { /* silent */ }
  }

  function loadState() {
    try {
      const raw = localStorage.getItem('pg_cycle_state');
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  return {
    getPhase,
    getPhaseInfo,
    getPhaseActions,
    getPhasePercentages,
    calculateDayFromLastPeriod,
    renderCycleWheel,
    renderDayGrid,
    renderActions,
    saveState,
    loadState,
    PHASES
  };
})();
