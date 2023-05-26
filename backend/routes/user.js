const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userController");

router.post("/register", userControllers.register);
router.post("/login", userControllers.logIn);
router.post("/logout", userControllers.logOut);
router.delete("/delete/:id", userControllers.deleteUser);
router.get("/all", userControllers.getAll);
router.put("/edit/:id", userControllers.editUser);

module.exports = router;
