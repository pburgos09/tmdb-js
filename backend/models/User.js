const S = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");

class User extends S.Model {
  async encryptPassword(password, salt) {
    return bcrypt.hash(password, salt);
  }
  async comparePassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

User.init(
  {
    name: {
      type: S.STRING,
      validate: {
        notEmpty: true,
        is: [/^[A-Za-z ]+$/g],
      },
    },
    last_name: {
      type: S.STRING,
      validate: {
        notEmpty: true,
        is: /^[a-zA-Z0-9 ]+$/,
      },
    },
    alias: {
      type: S.STRING,
      validate: {
        notEmpty: true,
        is: /^[a-zA-Z0-9 ]+$/,
      },
    },
    email: {
      type: S.STRING,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    password: {
      type: S.STRING,
      validate: {
        notEmpty: true,
        is: /^[a-zA-Z0-9]+$/,
      },
    },
    salt: {
      type: S.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "user",
  }
);

User.beforeCreate(async (user) => {
  if (!user.password) return;
  try {
    const salt = bcrypt.genSaltSync(16);
    user.salt = salt;
    const passwordHash = await user.encryptPassword(user.password, salt);
    user.password = passwordHash;
  } catch (err) {
    return err;
  }
});

module.exports = User;
