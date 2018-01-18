import Vue from 'vue'
import Router from 'vue-router'
// import RandomSelectPerson from '@/components/RandomSelectPerson/RandomSelectPerson'
// import TopBar from '@/components/RandomSelectPerson/TopBar'
import Comment from '@/components/RandomSelectPerson/Comment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'comment',
      // component: require('@/components/LandingPage').default
      // component: RandomSelectPerson
      component: Comment
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
