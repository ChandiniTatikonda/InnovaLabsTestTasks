import Vue from 'vue'
import VueRouter from 'vue-router'
import WelcomePage from '@/components/LandingLayout/WelcomePage.vue'
import QuestionA from '@/views/QuestionA.vue'
import QuestionB from '@/views/QuestionB.vue'
import QuestionC from '@/views/QuestionC.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'welcomePage',
    component: WelcomePage
  },
  {
    path: '/questionA',
    name: 'QuestionA',
    component: QuestionA
  },
  {
    path: '/questionB',
    name: 'QuestionB',
    component: QuestionB
  },
  {
    path: '/questionC',
    name: 'QuestionC',
    component: QuestionC
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
