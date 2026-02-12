module.exports = (req, res) => {
  if (req.method === 'POST') {
    const { user_key, cycle_day, pain, bleeding, mood, energy, sleep, stress, notes } = req.body || {};

    if (!user_key) {
      return res.status(400).json({ error: 'user_key is required' });
    }

    const entry = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2, 9),
      user_key,
      timestamp: new Date().toISOString(),
      cycle_day: cycle_day || null,
      pain: Math.min(10, Math.max(0, parseInt(pain) || 0)),
      bleeding: ['none', 'light', 'medium', 'heavy'].includes(bleeding) ? bleeding : 'none',
      mood: Math.min(10, Math.max(0, parseInt(mood) || 5)),
      energy: Math.min(10, Math.max(0, parseInt(energy) || 5)),
      sleep: Math.min(24, Math.max(0, parseFloat(sleep) || 7)),
      stress: Math.min(10, Math.max(0, parseInt(stress) || 3)),
      notes: typeof notes === 'string' ? notes.slice(0, 500) : ''
    };

    return res.status(201).json({ success: true, entry });
  }

  if (req.method === 'GET') {
    return res.status(200).json({
      entries: [],
      message: 'Connect a database to persist entries. Currently using client-side localStorage.'
    });
  }

  res.status(405).json({ error: 'Method not allowed' });
};
