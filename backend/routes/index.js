const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const moviesRouter = require("./movies");
const showsRouter = require("./shows");

router.use("/users", userRouter);
router.use("/movies", moviesRouter);
router.use("/shows", showsRouter);

module.exports = router;