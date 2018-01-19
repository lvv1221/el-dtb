import Vue from 'vue'
import Router from 'vue-router'
// import RandomSelectPerson from '@/components/RandomSelectPerson/RandomSelectPerson'
// import TopBar from '@/components/RandomSelectPerson/TopBar'
// import Comment from '@/components/RandomSelectPerson/Comment'
// import Ready from '@/components/WholeClassAnswer/Ready'
// import ClassTopBar from '@/components/WholeClassAnswer/ClassTopBar'
// import AnswerDetails from '@/components/WholeClassAnswer/AnswerDetails'
import Answers from '@/components/WholeClassAnswer/Answers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ready',
      // component: require('@/components/LandingPage').default
      // component: RandomSelectPerson
      component: Answers
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
