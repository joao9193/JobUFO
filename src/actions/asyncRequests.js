import axios from 'axios';
var qs = require('qs');
export function asyncRequesting(type){  
    if(localStorage.getItem("Auth")){
        //axios.defaults.headers.common['Authorization'] = localStorage.getItem("Auth"); 
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    }
      
    return {
        type:type,
        payload:null
    }
} 

export function asyncRequestSuccess(type,data){
    return {
        type:type,
        payload:data
    }
}

export function asyncRequestFail(type,data){
    return {
        type:type,
        payload:data
    }
}

export function asyncRequestCompleted(type){
    return {
        type:type,
        payload:null
    }
}


export function startLoading(type){
    return{
        type:type,
        payload:null
    }
}

export function stopLoading(type){
    return{
        type:type,
        payload:null
    }
}