module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    username: DataTypes.STRING,
    provider: DataTypes.STRING,
    provider_profile_url: DataTypes.STRING,
    provider_url: DataTypes.STRING,
    display_name: DataTypes.STRING,
    provider_bio: DataTypes.STRING,
    pinterest_id: DataTypes.STRING
  });

  return User;
};
