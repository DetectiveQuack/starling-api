import axios from 'axios';

const request = axios.create({
  baseURL: process.env.STARLING_API,
  headers: {
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
  }
});

export default request;
