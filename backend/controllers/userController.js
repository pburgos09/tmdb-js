const userServices = require("../services/userService");
const { generateToken } = require("../config/jwt");

module.exports = {
    // getAll: async (req,res,next)=>{
    //   try{
    //     const allUsers = await userServices.getAll()
    //     if (!allUsers) return res.status(404).json({message:"Users not found"})
    //     return res.json(allUsers)
    //   }catch(e){
    //     next(e)
    //   }
    // },
  
    logIn: async (req, res, next) => {
      try {
        const userLogged = await userServices.logIn(req.body);
        if (!userLogged) res.status(401).send("No valid user");
        const userValidate = await userLogged.comparePassword(req.body.password);
        if (!userValidate) res.status(401).send("No valid user");
        const payload = {
          email: userLogged.email,
          name: userLogged.first_name,
          lastname: userLogged.last_name,
          alias: userLogged.alias,
        };
        const token = generateToken(payload);
        res.cookie("TOKEN", token);
        res.send(payload);
      } catch (err) {
        next(err);
      }
    },
  
    logOut: async (req, res, next) => {
      try {
        res.clearCookie("TOKEN");
        res.sendStatus(204);
      } catch (err) {
        next(err);
      }
    },
  
    register: async (req, res, next) => {
      try {
        const userCreated = await userServices.register(req.body);
        res.status(201).json(userCreated);
      } catch (err) {
        console.log(err);
        next(err);
      }
    },
  };