import axios from 'axios';

const quoteLoader = axios.create({
  baseURL: 'https://api.quotable.io/',
});

export const apiGetRandomQuote = () => quoteLoader().get('/random');
