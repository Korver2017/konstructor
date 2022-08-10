import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { apiLogin, apiGetUsers } from '@/api/usersLoader';
import router from '@/router';
import Cookies from 'js-cookie';

export const useUserStore = defineStore('users', () => {
  const userInputs = reactive({
    account: 'korver@konstructor.com',
    password: 'admin',
  });

  const user = reactive({ account: {}, isAuthenticated: false });

  const login = async () => {
    const result = await apiLogin(userInputs);
    const account = result.data.filter(
      (user) => user.account === userInputs.account
    )[0];

    user.account = account;
    user.isAuthenticated = true;
    Cookies.set('konstructor-token', `${userInputs.account}-fake-token`);
    router.push('/');
  };

  const getUser = async () => {
    const token = Cookies.get('konstructor-token');
    const account = token.split('-')[0];
    const result = await apiGetUsers();
    user.account = result.data.filter((user) => user.account === account)[0];
    user.isAuthenticated = true;
  };

  const logout = () => {
    user.account = {};
    user.isAuthenticated = false;
    Cookies.remove('konstructor-token');
    router.push('/login');
  };

  return {
    userInputs,
    login,
    user,
    getUser,
    logout,
  };
});
