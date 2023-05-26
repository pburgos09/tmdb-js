const axios = require("axios");

exports.movies = async (req, res, next) => {
  try {
    const allMovies = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=05d2a3c2e2647c04d5017c46245adfec&language=es"
    );
    res.status(200).send(allMovies.data.results);
  } catch (error) {
    next(error);
  }
};

exports.moviesId = async (req, res, next) => {
  try {
    const singleMovie = await axios.get(
      `https://api.themoviedb.org/3/movie/${req.params.id}?api_key=05d2a3c2e2647c04d5017c46245adfec&language=es`
    );
    res.status(200).send(singleMovie.data);
  } catch (error) {
    next(error);
  }
};

exports.moviesTitle = async (req, res, next) => {
  try {
    const titleMovie = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=05d2a3c2e2647c04d5017c46245adfec&language=es&query=${req.params.title}`
    );
    res.status(200).send(titleMovie.data.results);
  } catch (error) {
    next(error);
  }
};

exports.moviesGenres = async (req, res, next) => {
  try {
    const genresMovie = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=05d2a3c2e2647c04d5017c46245adfec&with_genres=${req.params.id}&language=es`
    );
    res.status(200).send(genresMovie.data.results);
  } catch (error) {
    next(error);
  }
};
