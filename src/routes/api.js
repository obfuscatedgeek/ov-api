const express = require('express');
const co_express_router = require('co-express-router');

const router = express.Router();
co_express_router(router);

router.get('/stats', function * (res, res, next) {
  res.json({success: "API 4500 /stats"});
});

router.post('/:username', function * (req, res, next) {
  res.json({succes: "API 4500 post /username"});
});

module.exports = router;
