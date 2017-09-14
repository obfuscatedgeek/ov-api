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

  //  provider: 'pinterest',
  // id: '31455034805848432',
  // username: 'obfuscatedgeek',
  // url: 'https://www.pinterest.com/obfuscatedgeek/',
  // profileUrl: 'https://www.pinterest.com/obfuscatedgeek/',
  // profileImage:
  //  { url: 'https://s-media-cache-ak0.pinimg.com/avatars/obfuscatedgeek_1328275387_60.jpg',
  //    width: 60,
  //    height: 60 },
  // bio: '',
  // displayName: 'obfuscatedgeek',

  return User;
};
