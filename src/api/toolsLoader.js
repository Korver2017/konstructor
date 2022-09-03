import axios from 'axios';

const BASE_URL = import.meta.env.BASE_URL;
const toolsLoader = axios.create({
  baseURL: `${BASE_URL}data`,
});

export const apiGetTools = () => toolsLoader.get('/tools.json');
