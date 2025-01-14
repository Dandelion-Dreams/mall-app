import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/home',
    component: () => import('../views/HomePage.vue'),
    children: [
      {
        path: 'classify',
        component: () => import('../views/Classify.vue'),
      },
      {
        path: 'shopping',
        component: () => import('../views/Shopping.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/home',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
