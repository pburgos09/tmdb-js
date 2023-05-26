const express = require("express");
const router = express.Router();
const showControllers = require("../controllers/showsControllers");

router.get("/", showControllers.shows);
router.get("/:id", showControllers.showsId);
router.get("/search/:title", showControllers.showsTitle);
router.get("/genres/:id", showControllers.showsGenres);

module.exports = router;
