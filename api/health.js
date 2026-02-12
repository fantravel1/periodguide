module.exports = (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'periodguide-api',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
};
