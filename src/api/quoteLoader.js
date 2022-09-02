import axios from 'axios';

const toolsLoader = axios.create({
  baseURL: 'https://api.quotable.io',
});

export const apiGetRandomQuote = () => toolsLoader().get('/random');
