import { useUserStore } from '@/stores/users';
import Cookies from 'js-cookie';

const autoAuth = async () => {
  const userStore = useUserStore();
  const cookie = Cookies.get('konstructor-token');
  const isCorrect = cookie === 'korver@konstructor.com-fake-token';
  const notAuthenticated = !userStore.user.data.isAuthenticated;

  if (isCorrect) {
    if (notAuthenticated) await userStore.getUser();
    return true;
  } else userStore.clearUser();

  return false;
};

const permitRouter = (to, from, next, state) => {
  if (state) {
    to.name === 'login' ? next('/') : next();
  } else {
    to.name !== 'login' ? next('login') : next();
  }
};

export default (router) => {
  router.beforeEach(async (to, from, next) => {
    const state = await autoAuth();
    permitRouter(to, from, next, state);
  });
};
