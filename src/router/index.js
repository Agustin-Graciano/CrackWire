import { createRouter, createWebHistory } from 'vue-router';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Account from '../views/Account.vue';
import MainPage from '../views/MainPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/Account',
      name: 'Account',
      component: Account,
    },
    {
      path: '/MainPage',
      name: 'MainPage',
      component: MainPage,
    }
  ],
});

export default router;