import { combineReducers } from 'redux';
import {
  getAllPopularMoviesFun,
  getMoviesGenreFun,
  getMovieDetailsFun,
  getMovieRecommendationsFun,
  listMoviesFavouritesFun,
  addMoviesFavouritesFun,
  removeMovieFromFavouritesFun
} from './movies';
import { loaderFun } from './loader';

export const rootReducer = combineReducers({
  getAllPopularMovies: getAllPopularMoviesFun,
  getMoviesGenre: getMoviesGenreFun,
  getMovieDetails: getMovieDetailsFun,
  getMovieRecommendations: getMovieRecommendationsFun,
  listMoviesFavourites: listMoviesFavouritesFun,
  addMoviesFavourites: addMoviesFavouritesFun,
  removeMovieFromFavourites: removeMovieFromFavouritesFun,
  statusOfLoading: loaderFun
});
