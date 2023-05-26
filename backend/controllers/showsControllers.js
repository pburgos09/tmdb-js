const axios = require("axios");

module.exports = {

  shows : async (req, res, next) => {
    try {
      const allShows = await axios.get(
        "https://api.themoviedb.org/3/discover/tv?api_key=05d2a3c2e2647c04d5017c46245adfec&language=es"
      );
      res.status(200).send(allShows.data.results);
    } catch (error) {
      next(error);
    }
  },
  
  showsId : async (req, res, next) => {
    try {
      const singleShows = await axios.get(
        `https://api.themoviedb.org/3/tv/${req.params.id}?api_key=05d2a3c2e2647c04d5017c46245adfec&language=es`
      );
      res.status(200).send(singleShows.data);
    } catch (error) {
      next(error);
    }
  },
  
  showsTitle : async (req, res, next) => {
    try {
      const titleShows = await axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=05d2a3c2e2647c04d5017c46245adfec&language=es&query=${req.params.title}`
      );
      res.status(200).send(titleShows.data.results);
    } catch (error) {
      next(error);
    }
  },
  
  showsGenres : async (req, res, next) => {
    try {
      const genresShows = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=05d2a3c2e2647c04d5017c46245adfec&language=es&with_genres=${req.params.id}`
      );
      res.status(200).send(genresShows.data.results);
    } catch (error) {
      next(error);
    }
  },
  
  showsGenresList : async (req, res, next) => {
    try {
      const genresShowsList = await axios.get(
        `https://api.themoviedb.org/3/genre/tv/list?api_key=05d2a3c2e2647c04d5017c46245adfec&language=es`
      );
      res.status(200).send(genresShowsList.data.genres);
    } catch (error) {
      next(error);
    }
  }
}

