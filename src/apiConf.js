var axios = require('axios');
const base_url = 'https://api.themoviedb.org/3/';
const api_key = '6dd99a258fc2156368063a336e0d03f8';

var axiosInstance = axios.create({
  baseURL: base_url,   
  params: {
    api_key: api_key
  }
  /* other custom settings */
});

module.exports = axiosInstance;