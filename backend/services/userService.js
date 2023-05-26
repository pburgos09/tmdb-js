const { User } = require("../models");

module.exports = {
  getAll: async () => {
    try {
      const allUsers = await User.findAll({
        attributes: ["id", "firstName", "lastName", "alias", "email"],
      });
      return allUsers;
    } catch (error) {
      throw new Error("Error getting users");
    }
  },
  register: async (userData) => {
    const userCreated = await User.create(userData);
    return userCreated;
  },
  logIn: async (email) => {
    try {
      const userLogged = await User.findOne({
        where: { email },
      });
      return userLogged;
    } catch (err) {
      throw new Error("Error finding user");
    }
  },
  deleteUser: async (id) => {
    try {
      const userDelete = await User.destroy({ where: { id } });
      return userDelete;
    } catch (error) {
      throw new Error("Error deleting user");
    }
  },
  editUser: async (id, infoUser) => {
    try {
      const [rowsUpdated, [updatedUser]] = await User.update(infoUser, {
        where: { id },
        returning: true,
      });
      return updatedUser;
    } catch (error) {
      throw new Error("Error editing user");
    }
  },
};
