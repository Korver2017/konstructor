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

  const user = reactive({ data: {} });

  const login = async () => {
    const result = await apiLogin(userInputs);
    const matched = result.data.find(
      (user) => user.account === userInputs.account
    );

    user.data = matched;
    Cookies.set('konstructor-token', `${userInputs.account}-fake-token`);
    router.push('/');
  };

  const getUser = async () => {
    const token = Cookies.get('konstructor-token');
    const account = token.split('-')[0];
    const result = await apiGetUsers();
    user.data = result.data.find((user) => user.account === account);
  };

  const logout = () => {
    user.data = {};
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
