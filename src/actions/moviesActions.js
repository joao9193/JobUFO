//import axios from "axios";

import {
  START_LOADER,
  STOP_LOADER,
  REQUEST_GENRE,
  REQUEST_GENRE_SUCCESS,
  REQUEST_GENRE_FAIL,
  REQUEST_GENRE_COMPLETED,
  REQUEST_POPULAR_MOVIES,
  REQUEST_POPULAR_MOVIES_SUCCESS,
  REQUEST_POPULAR_MOVIES_FAIL,
  REQUEST_POPULAR_MOVIES_COMPLETED,
  REQUEST_MOVIE_DETAILS,
  REQUEST_MOVIE_DETAILS_SUCCESS,
  REQUEST_MOVIE_DETAILS_FAIL,
  REQUEST_MOVIE_DETAILS_COMPLETED,
  REQUEST_MOVIE_RECOMMENDATION,
  REQUEST_MOVIE_RECOMMENDATION_SUCCESS,
  REQUEST_MOVIE_RECOMMENDATION_FAIL,
  REQUEST_MOVIE_RECOMMENDATION_COMPLTED,
  REQUEST_LIST_MOVIE_FAVOURITES,
  REQUEST_LIST_MOVIE_FAVOURITES_SUCCESS,
  REQUEST_LIST_MOVIE_FAVOURITES_COMPLETED,
  REQUEST_ADD_MOVIE_FAVOURITES,
  REQUEST_ADD_MOVIE_FAVOURITES_SUCCESS,
  REQUEST_ADD_MOVIE_FAVOURITES_COMPLETED,
  REQUEST_REMOVE_MOVIE_FAVOURITES,
  REQUEST_REMOVE_MOVIE_FAVOURITES_SUCCESS,
  REQUEST_REMOVE_MOVIE_FAVOURITES_COMPLTED
} from './actionTypes';
import { asyncRequesting, asyncRequestSuccess, asyncRequestFail, asyncRequestCompleted, startLoading, stopLoading } from './asyncRequests';

var qs = require('qs');
var axios = require('../apiConf');

export function getMovieGenre() {
  return dispatch => {
    dispatch(startLoading(START_LOADER));
    dispatch(asyncRequesting(REQUEST_GENRE));
    axios
      .get('genre/movie/list?&language=en-US')
      .then(function(res) {
        dispatch(asyncRequestSuccess(REQUEST_GENRE_SUCCESS, res));
        dispatch(asyncRequestCompleted(REQUEST_GENRE_COMPLETED));
        dispatch(stopLoading(STOP_LOADER));
      })
      .catch(function(err) {
        dispatch(asyncRequestFail(REQUEST_GENRE_FAIL, err));
        dispatch(asyncRequestCompleted(REQUEST_GENRE_COMPLETED));
        dispatch(stopLoading(STOP_LOADER));
      });
  };
}

export function getAllPopularMovies(data) {
  return dispatch => {
    dispatch(startLoading(START_LOADER));
    dispatch(asyncRequesting(REQUEST_POPULAR_MOVIES));
    axios
      .get('movie/popular?&page=' + data.page)
      .then(function(res) {
        dispatch(asyncRequestSuccess(REQUEST_POPULAR_MOVIES_SUCCESS, res));
        dispatch(asyncRequestCompleted(REQUEST_POPULAR_MOVIES_COMPLETED));
        dispatch(stopLoading(STOP_LOADER));
      })
      .catch(function(err) {
        dispatch(asyncRequestFail(REQUEST_POPULAR_MOVIES_FAIL, err));
        dispatch(asyncRequestCompleted(REQUEST_POPULAR_MOVIES_COMPLETED));
        dispatch(stopLoading(STOP_LOADER));
      });
  };
}

export function getMoviesWithNames(data) {
  return dispatch => {
    dispatch(startLoading(START_LOADER));
    dispatch(asyncRequesting(REQUEST_POPULAR_MOVIES));
    axios
      .get('search/movie?&page=' + data.page + '&query=' + data.searchName)
      .then(function(res) {
        dispatch(asyncRequestSuccess(REQUEST_POPULAR_MOVIES_SUCCESS, res));
        dispatch(asyncRequestCompleted(REQUEST_POPULAR_MOVIES_COMPLETED));
        dispatch(stopLoading(STOP_LOADER));
      })
      .catch(function(err) {
        dispatch(asyncRequestFail(REQUEST_POPULAR_MOVIES_FAIL, err));
        dispatch(asyncRequestCompleted(REQUEST_POPULAR_MOVIES_COMPLETED));
        dispatch(stopLoading(STOP_LOADER));
      });
  };
}

export function getMovieDetails(data) {
  return dispatch => {
    dispatch(startLoading(START_LOADER));
    dispatch(asyncRequesting(REQUEST_MOVIE_DETAILS));
    axios
      .get('movie/' + data.id)
      .then(function(res) {
        dispatch(asyncRequestSuccess(REQUEST_MOVIE_DETAILS_SUCCESS, res));
        dispatch(asyncRequestCompleted(REQUEST_MOVIE_DETAILS_COMPLETED));
        dispatch(stopLoading(STOP_LOADER));
      })
      .catch(function(err) {
        dispatch(asyncRequestFail(REQUEST_MOVIE_DETAILS_FAIL, err));
        dispatch(asyncRequestCompleted(REQUEST_MOVIE_DETAILS_COMPLETED));
        dispatch(stopLoading(STOP_LOADER));
      });
  };
}

export function getRecommendation(data) {
  return dispatch => {
    dispatch(startLoading(START_LOADER));
    dispatch(asyncRequesting(REQUEST_MOVIE_RECOMMENDATION));
    axios
      .get('/movie/' + data.id + '/recommendations')
      .then(function(res) {
        dispatch(asyncRequestSuccess(REQUEST_MOVIE_RECOMMENDATION_SUCCESS, res));
        dispatch(asyncRequestCompleted(REQUEST_MOVIE_RECOMMENDATION_COMPLTED));
        dispatch(stopLoading(STOP_LOADER));
      })
      .catch(function(err) {
        dispatch(asyncRequestFail(REQUEST_MOVIE_RECOMMENDATION_FAIL, err));
        dispatch(asyncRequestCompleted(REQUEST_MOVIE_RECOMMENDATION_COMPLTED));
        dispatch(stopLoading(STOP_LOADER));
      });
  };
}

export function listMovieFromFavourite() {
  return dispatch => {
    dispatch(startLoading(START_LOADER));
    dispatch(asyncRequesting(REQUEST_LIST_MOVIE_FAVOURITES));
    let currData = [];
    if (localStorage.getItem('favoutites1')) {
      currData = JSON.parse(localStorage.getItem('favoutites1'));
    }
    dispatch(asyncRequestSuccess(REQUEST_LIST_MOVIE_FAVOURITES_SUCCESS, currData));
    dispatch(stopLoading(STOP_LOADER));
  };
}

export function addMovieToFavourite(data) {
  return dispatch => {
    dispatch(startLoading(START_LOADER));
    let currData = [];
    if (localStorage.getItem('favoutites1')) {
      currData = JSON.parse(localStorage.getItem('favoutites1'));
      currData.push(data);
      localStorage.setItem('favoutites1', JSON.stringify(currData));
    } else {
      currData.push(data);
      localStorage.setItem('favoutites1', JSON.stringify(currData));
    }
    dispatch(asyncRequestSuccess(REQUEST_ADD_MOVIE_FAVOURITES_SUCCESS, JSON.parse(localStorage.getItem('favoutites1'))));
    dispatch(asyncRequestCompleted(REQUEST_ADD_MOVIE_FAVOURITES_COMPLETED));
    dispatch(stopLoading(STOP_LOADER));

    //After adding need to list the data
    dispatch(asyncRequesting(REQUEST_LIST_MOVIE_FAVOURITES));
    let currDataList = [];
    if (localStorage.getItem('favoutites1')) {
      currDataList = JSON.parse(localStorage.getItem('favoutites1'));
    }
    dispatch(asyncRequestSuccess(REQUEST_LIST_MOVIE_FAVOURITES_SUCCESS, currDataList));
    dispatch(stopLoading(STOP_LOADER));
  };
}

export function removeMovieFromFavourite(index) {
  console.log('for remove ', index);

  return dispatch => {
    dispatch(startLoading(START_LOADER));
    let currData = [];
    if (localStorage.getItem('favoutites1')) {
      currData = JSON.parse(localStorage.getItem('favoutites1'));
      currData.splice(index, 1);
      localStorage.setItem('favoutites1', JSON.stringify(currData));
    }
    dispatch(asyncRequestSuccess(REQUEST_REMOVE_MOVIE_FAVOURITES_SUCCESS, JSON.parse(localStorage.getItem('favoutites1'))));
    dispatch(stopLoading(STOP_LOADER));

    //After deleting need to list the data
    dispatch(asyncRequesting(REQUEST_LIST_MOVIE_FAVOURITES));
    let currDataList = [];
    if (localStorage.getItem('favoutites1')) {
      currDataList = JSON.parse(localStorage.getItem('favoutites1'));
    }
    dispatch(asyncRequestSuccess(REQUEST_LIST_MOVIE_FAVOURITES_SUCCESS, currDataList));
    dispatch(stopLoading(STOP_LOADER));
  };
}

/*export function addToMovieFavourite(data){
    return dispatch => {
         dispatch(startLoading(START_LOADER));
         dispatch(asyncRequesting(REQUEST_ADD_MOVIE_FAVOURITES));
         let currData = [];
         if(localStorage.getItem("favoutites1")){
             currData = JSON.parse(localStorage.getItem("favoutites1"));
             currData.push(data);
             localStorage.setItem("favoutites1", JSON.stringify(currData) );
         }else{
             currData.push(data);
             localStorage.setItem("favoutites1", JSON.stringify(currData) );
         }           
         dispatch(asyncRequestSuccess(REQUEST_ADD_MOVIE_FAVOURITES_SUCCESS, JSON.parse(localStorage.getItem("favoutites1")) ));
         dispatch(asyncRequestCompleted(REQUEST_ADD_MOVIE_FAVOURITES_COMPLETED));
         dispatch(stopLoading(STOP_LOADER));
        }       
}*/
