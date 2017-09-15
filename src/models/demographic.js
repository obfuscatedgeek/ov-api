module.exports = function(sequelize, DataTypes) {
  var Demographic = sequelize.define("demographic", {
    username: DataTypes.STRING,
    city: DataTypes.STRING
  });

  return Demographic;
};
