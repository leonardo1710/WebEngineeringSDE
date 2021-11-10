var DataTypes = require("sequelize").DataTypes;
var _posts = require("./posts");

function initModels(sequelize) {
  var posts = _posts(sequelize, DataTypes);


  return {
    posts,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
