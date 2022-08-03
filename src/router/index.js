import { createRouter, createWebHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
import { useUserStore } from '@/stores/users';
import Cookies from 'js-cookie';

const routes = setupLayouts(generatedRoutes);
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();
  const cookie = Cookies.get('konstructor-token');

  console.log(cookie);
  console.log(to.name);

  if (
    cookie === 'korver@konstructor.com-fake-token' &&
    !userStore.postUserResult.user.isAuthenticated
  ) {
    await userStore.postUserRequest();
  }

  if (!cookie && !userStore.postUserResult.user.isAuthenticated) {
    // await userStore.logout();
    if (from.name === 'login') {
      next();
    }
  }

  if (to.name !== 'login' && !userStore.postUserResult.user.isAuthenticated)
    next({ name: 'login' });
  else next();
});

export default router;
