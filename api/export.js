module.exports = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { user_key, format } = req.body || {};

  if (!user_key) {
    return res.status(400).json({ error: 'user_key is required' });
  }

  const exportFormat = format === 'csv' ? 'csv' : 'json';

  res.status(200).json({
    success: true,
    format: exportFormat,
    message: 'Export generated. Connect a database for server-side exports. Currently handled client-side.',
    data: []
  });
};
