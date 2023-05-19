const S = require("sequelize");
const db = require("../config/db");

class UserFavourite extends S.Model {}

UserFavourite.init(
  {
    id_fav: {
      type: S.INTEGER,
    },
    title: {
      type: S.STRING,
      allowNull: false,
    },
    overview: {
      type: S.TEXT,
      allowNull: false,
    },
    poster_path: {
      type: S.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "userFavourite" }
);

module.exports = UserFavourite;
