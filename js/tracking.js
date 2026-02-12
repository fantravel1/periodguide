/* ============================================
   PeriodGuide.com — Tracking Module
   Daily symptom tracking with local storage
   ============================================ */

const PG_TRACKING = (() => {
  const STORAGE_KEY = 'pg_tracking_entries';

  function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  }

  function getEntries() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
  }

  function saveEntry(entry) {
    const entries = getEntries();
    const newEntry = {
      id: generateId(),
      timestamp: new Date().toISOString(),
      date: new Date().toISOString().split('T')[0],
      cycle_day: entry.cycle_day || null,
      phase: entry.phase || null,
      pain: entry.pain ?? 0,
      bleeding: entry.bleeding || 'none',
      mood: entry.mood ?? 5,
      energy: entry.energy ?? 5,
      sleep: entry.sleep ?? 7,
      stress: entry.stress ?? 3,
      migraine: entry.migraine || false,
      gi_symptoms: entry.gi_symptoms || [],
      notes: entry.notes || '',
      life_stage: entry.life_stage || 'adult'
    };
    entries.push(newEntry);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch (e) { /* storage full */ }
    return newEntry;
  }

  function getEntriesForRange(days = 90) {
    const entries = getEntries();
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);
    return entries.filter(e => new Date(e.timestamp) >= cutoff);
  }

  function getTodayEntry() {
    const today = new Date().toISOString().split('T')[0];
    const entries = getEntries();
    return entries.find(e => e.date === today) || null;
  }

  function deleteAllEntries() {
    localStorage.removeItem(STORAGE_KEY);
  }

  function exportEntries(format = 'json') {
    const entries = getEntries();
    if (format === 'csv') {
      const headers = ['date','cycle_day','phase','pain','bleeding','mood','energy','sleep','stress','migraine','notes'];
      const rows = entries.map(e => headers.map(h => {
        const val = e[h];
        if (typeof val === 'string' && val.includes(',')) return `"${val}"`;
        return val ?? '';
      }).join(','));
      return headers.join(',') + '\n' + rows.join('\n');
    }
    return JSON.stringify(entries, null, 2);
  }

  function getStats(days = 90) {
    const entries = getEntriesForRange(days);
    if (entries.length === 0) return null;

    const avg = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
    const pains = entries.map(e => e.pain).filter(p => p > 0);
    const moods = entries.map(e => e.mood);
    const energies = entries.map(e => e.energy);
    const sleeps = entries.map(e => e.sleep).filter(s => s > 0);
    const stresses = entries.map(e => e.stress);

    return {
      totalEntries: entries.length,
      avgPain: pains.length ? avg(pains).toFixed(1) : 'N/A',
      avgMood: moods.length ? avg(moods).toFixed(1) : 'N/A',
      avgEnergy: energies.length ? avg(energies).toFixed(1) : 'N/A',
      avgSleep: sleeps.length ? avg(sleeps).toFixed(1) : 'N/A',
      avgStress: stresses.length ? avg(stresses).toFixed(1) : 'N/A',
      bleedingDays: entries.filter(e => e.bleeding && e.bleeding !== 'none').length,
      migraineDays: entries.filter(e => e.migraine).length,
      dateRange: {
        from: entries[0]?.date,
        to: entries[entries.length - 1]?.date
      }
    };
  }

  // Render the tracking form
  function renderTrackingForm(container, cycleDay, phase) {
    if (!container) return;
    const t = typeof PG_I18N !== 'undefined' ? PG_I18N.t : (k) => k;
    const today = getTodayEntry();

    container.innerHTML = `
      <form id="tracking-form" class="tracking-form" novalidate>
        <div class="form-group">
          <label class="form-label">${t('track_pain')} <span id="pain-value" class="text-primary font-bold">${today?.pain || 0}</span>/10</label>
          <input type="range" class="range-slider" name="pain" min="0" max="10" value="${today?.pain || 0}"
            aria-label="${t('track_pain')}" oninput="document.getElementById('pain-value').textContent=this.value">
          <div class="flex justify-between text-xs text-muted mt-1">
            <span>${t('none')}</span><span>${t('severe')}</span>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">${t('track_bleeding')}</label>
          <div class="flex gap-2 flex-wrap">
            ${['none', 'light', 'medium', 'heavy'].map(level => `
              <button type="button" class="chip ${today?.bleeding === level ? 'selected' : ''}"
                data-bleeding="${level}" onclick="this.parentElement.querySelectorAll('.chip').forEach(c=>c.classList.remove('selected'));this.classList.add('selected')">
                ${t('track_bleeding_' + level)}
              </button>
            `).join('')}
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">${t('track_mood')} <span id="mood-value" class="text-secondary font-bold">${today?.mood || 5}</span>/10</label>
          <input type="range" class="range-slider" name="mood" min="0" max="10" value="${today?.mood || 5}"
            aria-label="${t('track_mood')}" oninput="document.getElementById('mood-value').textContent=this.value">
          <div class="flex justify-between text-xs text-muted mt-1">
            <span>${t('low')}</span><span>${t('high')}</span>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">${t('track_energy')} <span id="energy-value" class="font-bold" style="color:var(--color-follicular)">${today?.energy || 5}</span>/10</label>
          <input type="range" class="range-slider" name="energy" min="0" max="10" value="${today?.energy || 5}"
            aria-label="${t('track_energy')}" oninput="document.getElementById('energy-value').textContent=this.value">
          <div class="flex justify-between text-xs text-muted mt-1">
            <span>${t('low')}</span><span>${t('high')}</span>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">${t('track_sleep')}</label>
          <input type="number" class="form-input" name="sleep" min="0" max="24" step="0.5"
            value="${today?.sleep || 7}" placeholder="7" aria-label="${t('track_sleep')}">
        </div>

        <div class="form-group">
          <label class="form-label">${t('track_stress')} <span id="stress-value" class="font-bold" style="color:var(--color-warning)">${today?.stress || 3}</span>/10</label>
          <input type="range" class="range-slider" name="stress" min="0" max="10" value="${today?.stress || 3}"
            aria-label="${t('track_stress')}" oninput="document.getElementById('stress-value').textContent=this.value">
          <div class="flex justify-between text-xs text-muted mt-1">
            <span>${t('low')}</span><span>${t('high')}</span>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">${t('track_notes')}</label>
          <textarea class="form-input" name="notes" rows="3" placeholder="${t('track_notes')}"
            aria-label="${t('track_notes')}">${today?.notes || ''}</textarea>
        </div>

        <button type="submit" class="btn btn--primary btn--full btn--lg">
          ${t('track_save')}
        </button>
      </form>
    `;

    const form = container.querySelector('#tracking-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const selectedBleeding = form.querySelector('.chip.selected');

      const entry = {
        cycle_day: cycleDay || null,
        phase: phase || null,
        pain: parseInt(fd.get('pain')) || 0,
        bleeding: selectedBleeding ? selectedBleeding.dataset.bleeding : 'none',
        mood: parseInt(fd.get('mood')) || 5,
        energy: parseInt(fd.get('energy')) || 5,
        sleep: parseFloat(fd.get('sleep')) || 7,
        stress: parseInt(fd.get('stress')) || 3,
        notes: fd.get('notes') || ''
      };

      saveEntry(entry);
      if (typeof PG_APP !== 'undefined') {
        PG_APP.showToast(t('track_saved'), 'success');
      }
    });
  }

  return {
    getEntries,
    saveEntry,
    getEntriesForRange,
    getTodayEntry,
    deleteAllEntries,
    exportEntries,
    getStats,
    renderTrackingForm
  };
})();
