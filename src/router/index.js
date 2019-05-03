import Vue from 'vue';
import VueRouter from 'vue-router';

import Header from '../components/Header.vue';
import Todo from '../components/todo.vue';
import Done from '../components/Done.vue';
import MemoInput from '../components/MemoInput.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      component: {},
    },
    {
      path: '/memoinput',
      component: MemoInput,
    }
  ]
});

export default router;
