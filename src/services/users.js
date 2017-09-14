const model = require('../models');

const users = module.exports = {};

users.find = function * (options) {
  const user = yield model.user.findOne({
    where: {
      pinterest_id: options.pinterest_id
    }
  });

  return user;
}

users.create = function * (options) {
  const rec = yield model.user.create(options);
  return rec;
}

