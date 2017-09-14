const express = require('express');
const co_express_router = require('co-express-router');

const StatService = require('../services/stats');

const router = express.Router();
co_express_router(router);

router.get('/stats', function * (res, res, next) {
  const stats = yield StatService.stats({});
  const result = {};

  for (const stat of stats) {
    result[stat.dataValues.city] = stat.dataValues.city_count;
  };

  res.json(result);
});

router.post('/:username', function * (req, res, next) {
  res.json({succes: "API 4500 post /username"});
});


router.post('/', function * (req, res, next) {
  const options = {
    city: req.body.city,
    username: req.body.username
  };

  try {
    const rec = yield StatService.create(options);
    res.json(rec.dataValues);
  } catch (e) {
    res.status(500).send('Error saving stats');
  }
});
module.exports = router;
