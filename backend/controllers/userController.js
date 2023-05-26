const userServices = require("../services/userService");
const { generateToken } = require("../config/jwt");

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const allUsers = await userServices.getAll();
      if (!allUsers)
        return res.status(404).send({ message: "Users not found" });
      res.send(allUsers);
    } catch (err) {
      next(err);
    }
  },

  logIn: async (req, res, next) => {
    try {
      const userLogged = await userServices.logIn(req.body.email);
      if (!userLogged) res.status(401).send("No valid user");
      const userValidate = await userLogged.comparePassword(req.body.password);
      if (!userValidate) res.status(401).send("No valid user");
      const payload = {
        id: userLogged.id,
        email: userLogged.email,
        firstName: userLogged.firstName,
        lastName: userLogged.lastName,
        alias: userLogged.alias,
      };
      const token = generateToken(payload);
      res.cookie("TOKEN", token);
      res.send(payload);
    } catch (err) {
      console.log(err);
      next(err);
    }
  },

  logOut: async (req, res, next) => {
    try {
      res.clearCookie("TOKEN");
      res.sendStatus(204);
    } catch (err) {
      console.log(err);
      next(err);
    }
  },

  register: async (req, res, next) => {
    try {
      const userCreated = await userServices.register(req.body);
      const payload = {
        email: userCreated.email,
        firstName: userCreated.firstName,
        lastName: userCreated.lastName,
        alias: userCreated.alias,
      };
      res.status(201).send(payload);
    } catch (err) {
      console.log(err);
      next(err);
    }
  },

  deleteUser: async (req, res, next) => {
    try {
      const userDeleted = await userServices.deleteUser(req.params.id);
      if (!userDeleted)
        return res.status(404).send({ message: "User not found" });
      res.status(202).send("User deleted");
    } catch (err) {
      next(err);
    }
  },

  editUser: async (req, res, next) => {
    try {
      const userEdit = await userServices.editUser(req.params.id, req.body);
      const payload = {
        id: userEdit.id,
        email: userEdit.email,
        firstName: userEdit.firstName,
        lastName: userEdit.lastName,
        alias: userEdit.alias,
      };
      res.status(201).send(payload);
    } catch (err) {
      next(err);
    }
  },
};
