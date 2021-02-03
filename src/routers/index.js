import Vue from 'vue'
import Router from 'vue-router'
import Navigation from '../demos/navigation/Navigation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:id',
      name: Navigation.name,
      component: Navigation
    },
    {
      path: '*',
      redirect: '/1'
    }
  ]
})
