const { User } = require("../models");

module.exports = {
  //   getAll: async()=>{
  //     try {
  //         const allUsers = await User.findAll()
  //         return allUsers
  //     } catch (error) {
  //         throw new Error("Error getting users")
  //     }
  //   },
  register: async (userData) => {
    const userCreated = await User.create(userData);
    return userCreated;
  },
  logIn: async (userData) => {
    try {
      const userLogged = await User.findOne({
        where: { email: userData.email },
      });
      return userLogged;
    } catch (err) {
      return err
    }
  },
};
