import axios from 'axios';

const toolsLoader = axios.create({
  baseURL: 'https://api.quotable.io/random',
});

export const apiGetRandomQuote = () => toolsLoader();
