import Vue from 'vue'
import VueRouter from 'vue-router'
import news from '../views/news.vue'
import oilPrice from '../views/oilPrice.vue'
import weather from '../views/weather.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'news',
    redirect: 'oilPrice',
  },
  {
    path: '/news',
    name: 'news',
    component: news
  },
  {
    path: '/oilPrice',
    name: 'oilPrice',
    component: oilPrice
  },
  {
    path: '/weather',
    name: 'weather',
    component: weather
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
