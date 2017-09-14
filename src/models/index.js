const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

const config = {
  host: process.env.MYSQL_HOST,
  dialect: "mysql",
  logging: function () {},
  pool: {
      max: 5,
      min: 0,
      idle: 10000
  },
  define: {
      paranoid: true
  }
}
const sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USERNAME, process.env.MYSQL_PASSWORD, config);
const db = {};

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize

db.init = function () {
  try {
    db.sequelize.sync().then(function() {
      console.log('> Syncing database done!');
    });
  } catch (e) {
    console.log('> Error initing database!', e);
  }
};

module.exports = db;

