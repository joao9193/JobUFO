import {combineReducers} from "redux";
import {getAllPopularMoviesFun,getMoviesGenreFun,getMovieDetailsFun,getMovieRecommendationsFun} from "./movies";
import {loaderFun} from "./loader";

export const rootReducer = combineReducers({
    getAllPopularMovies:getAllPopularMoviesFun,
    getMoviesGenre:getMoviesGenreFun,
    getMovieDetails:getMovieDetailsFun,
    getMovieRecommendations:getMovieRecommendationsFun,
    statusOfLoading:loaderFun
});