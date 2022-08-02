import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { apiPostUserRequest } from '@/api/index.js';
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
    Cookies.set('konstructor-token', 'konstructor-fake-token');
    router.push('/');
  };

  const logout = () => {
    postUserResult.user = {};
    Cookies.remove('konstructor-token');
    router.push('/login');
  };

  return { userInputs, postUserRequest, postUserResult, logout };
});
