const express = require("express");
const router = express.Router();
const moviesControllers = require("../controllers/moviesControllers");

router.get("/", moviesControllers.movies);
router.get("/list", moviesControllers.moviesGenresList);
router.get("/:id", moviesControllers.moviesId);
router.get("/search/:title", moviesControllers.moviesTitle);
router.get("/genres/:id", moviesControllers.moviesGenres);

module.exports = router;