const express = require('express');
const co_express_router = require('co-express-router');

const UserService = require('../services/users');

const router = express.Router();
co_express_router(router);

router.get('/', function * (req, res, next) {
  const options = {
    pinterest_id: req.query.pinterest_id
  };

  const user = yield UserService.find(options);

  res.json(user);
});

router.post('/', function * (req, res, next) {
  const body = req.body;

  const options = {
    username: body.user.username,
    provider: body.user.provider,
    provider_profile_url: body.user.provider_profile_url,
    display_name: body.user.display_name,
    provider_bio: body.user.provider_bio,
    pinterest_id: body.user.pinterest_id
  }

  try {
    const user = yield UserService.create(options);
    res.json(user.dataValues);
  } catch (e) {
    console.error(e);
    res.status(401).send('Unauthorized');
  }
});

module.exports = router;
