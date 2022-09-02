import axios from 'axios';

const BASE_URL = import.meta.env.BASE_URL;
const packagesLoader = axios.create({
  baseURL: `${BASE_URL}data`,
});

export const apiGetPackages = () => packagesLoader.get('/packages.json');
