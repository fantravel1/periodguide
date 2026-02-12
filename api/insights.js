module.exports = (req, res) => {
  const { user_key, days } = req.query;

  if (!user_key) {
    return res.status(400).json({ error: 'user_key is required' });
  }

  res.status(200).json({
    user_key,
    range_days: parseInt(days) || 90,
    insights: {
      cycle_overview: null,
      symptom_trends: null,
      correlations: null,
      suggestions: []
    },
    message: 'Connect a database for server-side insights. Currently computed client-side.'
  });
};
