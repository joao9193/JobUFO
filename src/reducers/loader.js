import {
  START_LOADER,
  STOP_LOADER
 } from "../actions/actionTypes";
 
 
 const getAllPopularMovies = {
     fetchingStarted: false,
     fetchingCompleted:true
 }
 
 
 export function loaderFun(state = getAllPopularMovies,actions){
 
     switch (actions.type) {
 
         case START_LOADER: return Object.assign({}, state, {
            fetchingStarted: true,
            fetchingCompleted:false
         });
             break;
         case STOP_LOADER: return Object.assign({}, state, {
            fetchingStarted: false,
            fetchingCompleted:true
         });
             break;
         
         default: return state;
             break;
 
     }
 
 }