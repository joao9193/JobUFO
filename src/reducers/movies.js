import {
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
   REQUEST_REMOVE_MOVIE_FAVOURITES_SUCCESS
} from "../actions/actionTypes";


const getMoviesGenre = {
    fetchingStarted: false,
    fetchingSuccess: false,
    fetchingFail: false,
    fetchingCompleted: false,
    payload: null
}


export function getMoviesGenreFun(state = getMoviesGenre,actions){

    switch (actions.type) {

        case REQUEST_GENRE: return Object.assign({}, state, {
            fetchingStarted: true,
            fetchingSuccess: false,
            fetchingFail: false,
            fetchingCompleted: false,
            payload: null
        });
            break;
        case REQUEST_GENRE_SUCCESS: return Object.assign({}, state, {
            fetchingStarted: false,
            fetchingSuccess: true,
            fetchingFail: false,
            fetchingCompleted: false,
            payload: actions.payload.data
        });
            break;
        case REQUEST_GENRE_FAIL: return Object.assign({}, state, {
            fetchingStarted: false,
            fetchingSuccess: false,
            fetchingFail: true,
            fetchingCompleted: false,
            payload: null
        });
            break;
        case REQUEST_GENRE_COMPLETED: return Object.assign({}, state, {
            fetchingStarted: false,
            fetchingSuccess: false,
            fetchingFail: false,
            fetchingCompleted: true,
            payload: null
        });
            break;
        default: return state;
            break;

    }

}



const getAllPopularMovies = {
    fetchingStarted: false,
    fetchingSuccess: false,
    fetchingFail: false,
    fetchingCompleted: false,
    payload: null
}


export function getAllPopularMoviesFun(state = getAllPopularMovies,actions){

    switch (actions.type) {

        case REQUEST_POPULAR_MOVIES: return Object.assign({}, state, {
            fetchingStarted: true,
            fetchingSuccess: false,
            fetchingFail: false,
            fetchingCompleted: false,
            payload: null
        });
            break;
        case REQUEST_POPULAR_MOVIES_SUCCESS: return Object.assign({}, state, {
            fetchingStarted: false,
            fetchingSuccess: true,
            fetchingFail: false,
            fetchingCompleted: false,
            payload: actions.payload.data
        });
            break;
        case REQUEST_POPULAR_MOVIES_FAIL: return Object.assign({}, state, {
            fetchingStarted: false,
            fetchingSuccess: false,
            fetchingFail: true,
            fetchingCompleted: false,
            payload: null
        });
            break;
        case REQUEST_POPULAR_MOVIES_COMPLETED: return Object.assign({}, state, {
            fetchingStarted: false,
            fetchingSuccess: false,
            fetchingFail: false,
            fetchingCompleted: true,
            payload: null
        });
            break;
        default: return state;
            break;

    }

}



const getMovieDetails = {
    fetchingStarted: false,
    fetchingSuccess: false,
    fetchingFail: false,
    fetchingCompleted: false,
    payload: null
}
   

export function getMovieDetailsFun(state = getMovieDetails,actions){

    switch (actions.type) {

        case REQUEST_MOVIE_DETAILS: return Object.assign({}, state, {
            fetchingStarted: true,
            fetchingSuccess: false,
            fetchingFail: false,
            fetchingCompleted: false,
            payload: null
        });
            break;
        case REQUEST_MOVIE_DETAILS_SUCCESS: return Object.assign({}, state, {
            fetchingStarted: false,
            fetchingSuccess: true,
            fetchingFail: false,
            fetchingCompleted: false,
            payload: actions.payload.data
        });
            break;
        case REQUEST_MOVIE_DETAILS_FAIL: return Object.assign({}, state, {
            fetchingStarted: false,
            fetchingSuccess: false,
            fetchingFail: true,
            fetchingCompleted: false,
            payload: null
        });
            break;
        case REQUEST_MOVIE_DETAILS_COMPLETED: return Object.assign({}, state, {
            fetchingStarted: false,
            fetchingSuccess: false,
            fetchingFail: false,
            fetchingCompleted: true,
            payload: null
        });
            break;
        default: return state;
            break;

    }

}


const getMovieRecommendations = {
    fetchingStarted: false,
    fetchingSuccess: false,
    fetchingFail: false,
    fetchingCompleted: false,
    payload: null
}
   

export function getMovieRecommendationsFun(state = getMovieRecommendations,actions){

    switch (actions.type) {

        case REQUEST_MOVIE_RECOMMENDATION: return Object.assign({}, state, {
                                                        fetchingStarted: true,
                                                        fetchingSuccess: false,
                                                        fetchingFail: false,
                                                        fetchingCompleted: false,
                                                        payload: null
                                                    });
            break;
        case REQUEST_MOVIE_RECOMMENDATION_SUCCESS: return Object.assign({}, state, {
                                                        fetchingStarted: false,
                                                        fetchingSuccess: true,
                                                        fetchingFail: false,
                                                        fetchingCompleted: false,
                                                        payload: actions.payload.data
                                                    });
            break;
        case REQUEST_MOVIE_RECOMMENDATION_FAIL: return Object.assign({}, state, {
                                                        fetchingStarted: false,
                                                        fetchingSuccess: false,
                                                        fetchingFail: true,
                                                        fetchingCompleted: false,
                                                        payload: null
                                                    });
            break;
        case REQUEST_MOVIE_RECOMMENDATION_COMPLTED: return Object.assign({}, state, {
                                                    fetchingStarted: false,
                                                    fetchingSuccess: false,
                                                    fetchingFail: false,
                                                    fetchingCompleted: true,
                                                    payload: null
                                                });
            break;
        default: return state;
            break;

    }

}





const listMoviesFavourites = {
    fetchingStarted: false,
    fetchingSuccess: false,
    fetchingFail: false,
    fetchingCompleted: false,
    payload:  null
}



export function listMoviesFavouritesFun(state = listMoviesFavourites,actions){

    switch (actions.type) {       
        
                case REQUEST_LIST_MOVIE_FAVOURITES: return Object.assign({}, state, {
                                                        fetchingStarted: true,
                                                        fetchingSuccess: false,
                                                        fetchingFail: false,
                                                        fetchingCompleted: false,
                                                        payload: null
                                                    });
                                                    break;
                case REQUEST_LIST_MOVIE_FAVOURITES_SUCCESS:
                                                       
                                                        return Object.assign({}, state, {
                                                        fetchingStarted: false,
                                                        fetchingSuccess: true,
                                                        fetchingFail: false,
                                                        fetchingCompleted: false,
                                                        payload: actions.payload
                                                    });
                                                    break; 
                case REQUEST_LIST_MOVIE_FAVOURITES_COMPLETED:
                                                       
                                                    return Object.assign({}, state, {
                                                    fetchingStarted: false,
                                                    fetchingSuccess: false,
                                                    fetchingFail: false,
                                                    fetchingCompleted: true,
                                                    payload: null
                                                });
                                                break;                                    
                default: return state;
                break;

    }

}


const addToMoviesFavourites = {
    fetchingStarted: false,
    fetchingSuccess: false,
    fetchingFail: false,
    fetchingCompleted: false,
    payload:  null
}  


export function addMoviesFavouritesFun(state = addToMoviesFavourites,actions){

    switch (actions.type) {       
        
                case REQUEST_ADD_MOVIE_FAVOURITES: return Object.assign({}, state, {
                                                        fetchingStarted: true,
                                                        fetchingSuccess: false,
                                                        fetchingFail: false,
                                                        fetchingCompleted: false,
                                                        payload: null
                                                    });
                                                    break;
                case REQUEST_ADD_MOVIE_FAVOURITES_SUCCESS:
                                                        return Object.assign({}, state, {
                                                        fetchingStarted: false,
                                                        fetchingSuccess: true,
                                                        fetchingFail: false,
                                                        fetchingCompleted: false,
                                                        payload: actions.payload
                                                    });

                case REQUEST_ADD_MOVIE_FAVOURITES_COMPLETED:
                                                    return Object.assign({}, state, {
                                                        fetchingStarted: false,
                                                        fetchingSuccess: false,
                                                        fetchingFail: false,
                                                        fetchingCompleted: true,
                                                        payload: actions.payload
                                                    });

                break;
                default: return state;
                break;

    }

}



const removeMoviesFromFavourites = {
    fetchingStarted: false,
    fetchingSuccess: false,
    fetchingFail: false,
    fetchingCompleted: false,
    payload:  null
} 

export function removeMovieFromFavouritesFun(state = removeMoviesFromFavourites,actions){

    switch (actions.type) {       
        
                case REQUEST_REMOVE_MOVIE_FAVOURITES: return Object.assign({}, state, {
                                                        fetchingStarted: true,
                                                        fetchingSuccess: false,
                                                        fetchingFail: false,
                                                        fetchingCompleted: false,
                                                        payload: null
                                                    });
                                                    break;
                case REQUEST_REMOVE_MOVIE_FAVOURITES_SUCCESS:
                                                        return Object.assign({}, state, {
                                                        fetchingStarted: false,
                                                        fetchingSuccess: true,
                                                        fetchingFail: false,
                                                        fetchingCompleted: false,
                                                        payload: actions.payload
                                                    });

               
                default: return state;
                break;

    }

}



