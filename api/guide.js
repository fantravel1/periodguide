module.exports = (req, res) => {
  const { cycle_day, phase, lang } = req.query;
  const day = parseInt(cycle_day) || 1;
  const cycleLength = 28;

  function getPhase(d) {
    const ratio = d / cycleLength;
    if (ratio <= 0.18) return 'menstrual';
    if (ratio <= 0.46) return 'follicular';
    if (ratio <= 0.57) return 'ovulation';
    return 'luteal';
  }

  const currentPhase = phase || getPhase(day);
  const language = lang || 'en';

  const actions = {
    menstrual: [
      { action: 'Apply heat therapy', evidence: 'strong', icon: 'heat' },
      { action: 'Prioritize rest and sleep', evidence: 'moderate', icon: 'rest' },
      { action: 'Anti-inflammatory nutrition', evidence: 'moderate', icon: 'nourish' }
    ],
    follicular: [
      { action: 'Increase exercise intensity', evidence: 'moderate', icon: 'move' },
      { action: 'Fuel with protein and phytoestrogens', evidence: 'emerging', icon: 'nourish' },
      { action: 'Plan creative work', evidence: 'moderate', icon: 'plan' }
    ],
    ovulation: [
      { action: 'Hydrate and electrolytes', evidence: 'moderate', icon: 'hydrate' },
      { action: 'Peak performance activities', evidence: 'emerging', icon: 'perform' },
      { action: 'Track ovulation signs', evidence: 'strong', icon: 'track' }
    ],
    luteal: [
      { action: 'Gentle movement and calm', evidence: 'moderate', icon: 'calm' },
      { action: 'Complex carbs and magnesium', evidence: 'moderate', icon: 'nourish' },
      { action: 'Support nervous system', evidence: 'emerging', icon: 'support' }
    ]
  };

  const safetyFlags = [
    'Sudden, severe abdominal or pelvic pain',
    'Soaking through a pad/tampon every hour for several hours',
    'Fever with pelvic pain',
    'Fainting or severe dizziness'
  ];

  res.status(200).json({
    cycle_day: day,
    phase: currentPhase,
    language,
    actions: actions[currentPhase] || actions.menstrual,
    safety_flags: safetyFlags,
    disclaimer: 'This is not medical advice. If concerned, contact a healthcare provider.'
  });
};
