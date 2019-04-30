import Vue from 'vue'
import Router from 'vue-router'
import welcomePage from '../components/welcomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: welcomePage
    }
  ]
})
