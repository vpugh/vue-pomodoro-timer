import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PomodoroTimer from '@/components/PomodoroTimer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PomodoroTimer',
      component: PomodoroTimer
    }
  ]
})
