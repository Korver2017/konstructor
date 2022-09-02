import axios from 'axios';

const packagesLoader = axios.create({
  baseURL: '/data',
});

export const apiGetPackages = () => packagesLoader.get('/packages.json');
