import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { apiPostUserRequest, apiGetUserRequest } from '@/api/index.js';
import router from '@/router';
import Cookies from 'js-cookie';

export const useUserStore = defineStore('users', () => {
  const userInputs = reactive({
    account: 'korver@konstructor.com',
    password: 'admin',
  });

  const postUserResult = reactive({ user: {} });

  const postUserRequest = async () => {
    const result = await apiPostUserRequest(userInputs);
    const userInfo = result.data.filter(
      (user) => user.account === userInputs.account
    )[0];

    postUserResult.user = userInfo;
    postUserResult.user.isAuthenticated = true;
    Cookies.set('konstructor-token', `${userInputs.account}-fake-token`);
    router.push('/');
  };

  const getUserRequest = async () => {
    const token = Cookies.get('konstructor-token');
    const account = token.split('-')[0];
    console.log(account);
    const result = await apiGetUserRequest();
    console.log(result.data);
    postUserResult.user = result.data.filter(
      (user) => user.account === account
    )[0];
    postUserResult.user.isAuthenticated = true;
    console.log(postUserResult);
  };

  const logout = () => {
    postUserResult.user = {};
    postUserResult.user.isAuthenticated = false;
    Cookies.remove('konstructor-token');
    router.push('/login');
  };

  return {
    userInputs,
    postUserRequest,
    postUserResult,
    getUserRequest,
    logout,
  };
});
