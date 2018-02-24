import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index-page',
      component: require('@/page/Index').default,
    },
    {
      path: '/successLog',
      name: 'successLog-page',
      component: require('@/page/SuccessLog').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
