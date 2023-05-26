const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const moviesRouter = require("./movies");

router.use("/users", userRouter);
router.use("/movies", moviesRouter);

module.exports = router;