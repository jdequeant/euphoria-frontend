import Vue from 'vue'
import VueRouter from 'vue-router'
import InputsView from '@/views/input/InputsView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/input'
  },
  {
    path: '/input',
    name: 'InputList',
    component: InputsView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
