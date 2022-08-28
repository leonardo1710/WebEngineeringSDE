var DataTypes = require("sequelize").DataTypes;
var _authors = require("./authors");
var _followers = require("./followers");
var _posts = require("./posts");

function initModels(sequelize) {
  var authors = _authors(sequelize, DataTypes);
  var followers = _followers(sequelize, DataTypes);
  var posts = _posts(sequelize, DataTypes);


  return {
    authors,
    followers,
    posts,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
