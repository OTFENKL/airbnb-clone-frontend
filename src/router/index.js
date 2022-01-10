import Vue from "vue";
import VueRouter from "vue-router";

import Main from '@/views/Main.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: "main",
    component: Main
  }
];

export default new VueRouter({
  routes,
  mode: 'history'
});