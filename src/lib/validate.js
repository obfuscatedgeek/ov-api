module.exports = function (req, res, next) {
  if (!req.headers['x-outvio']) {
    res.status(401).send('Unauthorized!');
    return;
  }

  next();
}
