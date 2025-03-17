import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StepView01 from '../views/Step01.vue'
import StepView02 from '../views/Step02.vue'
import StepView03 from '../views/Step03.vue'
import StepView04 from '../views/Step04.vue'
import Count from '../views/CountView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/step01',
      name: 'step01',
      component: StepView01,
    },
    {
      path: '/step02',
      name: 'step02',
      component: StepView02,
    },
    {
      path: '/step03',
      name: 'step03',
      component: StepView03,
    },
    {
      path: '/step04',
      name: 'step04',
      component: StepView04,
    },
    {
      path: '/count',
      name: 'count',
      component: Count,
    },
  ],
})

export default router
