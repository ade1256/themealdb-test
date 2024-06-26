const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

module.exports = axiosInstance;
