const express = require('express');
const co_express_router = require('co-express-router');

const validate = require('../lib/validate');
const StatService = require('../services/stats');

const router = express.Router();
co_express_router(router);



router.get('/stats', validate, function * (res, res, next) {
  const stats = yield StatService.stats({});
  const result = {};

  for (const stat of stats) {
    result[stat.dataValues.city] = stat.dataValues.city_count;
  };

  res.json(result);
});

router.get('/api/:username', validate, function * (req, res, next) {
  const stats = yield StatService.aggregateByUsername({username: req.params.username});
  const result = {};

  for (const stat of stats) {
    const val = stat.dataValues;
    const date = val.createdAt.toISOString().substr(0,10);

    const arr = result[date] || {};
    arr[val.city] = val.city_count;
    result[date] = arr;
  };

  res.json(result);
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
