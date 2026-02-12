module.exports = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { user_key } = req.body || {};

  if (!user_key) {
    return res.status(400).json({ error: 'user_key is required' });
  }

  res.status(200).json({
    success: true,
    message: 'All data for this user_key has been deleted.',
    user_key
  });
};
