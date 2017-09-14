const stats = module.exports = {};
const model = require('../models');

stats.create = function * (options) {
  const rec = yield model.demographic.create(options);
  return rec;
}


stats.stats = function * (options) {
  const rec = yield model.demographic.findAll({
    group: ['city'],
    attributes: ['city', [model.sequelize.fn('COUNT', 'city'), 'city_count']],
    order: [model.sequelize.literal('city_count DESC')]
  });

  return rec;
}
