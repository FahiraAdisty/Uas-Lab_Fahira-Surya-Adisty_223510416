import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Task1 from '../pages/Task1.vue';
import Task2 from '../pages/Task2.vue';
import Task3 from '../pages/Task3.vue';
import Task4 from '../pages/Task4.vue';
import Task5 from '../pages/Task5.vue';
import Task6 from '../pages/Task6.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/task1', component: Task1 },
  { path: '/task2', component: Task2 },
  { path: '/task3', component: Task3 },
  { path: '/task4', component: Task4 },
  { path: '/task5', component: Task5 },
  { path: '/task6', component: Task6 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
