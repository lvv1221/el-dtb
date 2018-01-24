import Vue from 'vue'
import Router from 'vue-router'
// import RandomSelectPerson from '@/components/RandomSelectPerson/RandomSelectPerson'
// import TopBar from '@/components/RandomSelectPerson/TopBar'
// import Comment from '@/components/RandomSelectPerson/Comment'
// import Ready from '@/components/WholeClassAnswer/Ready'
// import ClassTopBar from '@/components/WholeClassAnswer/ClassTopBar'
// import AnswerDetails from '@/components/WholeClassAnswer/AnswerDetails'
// import Answers from '@/components/WholeClassAnswer/Answers'
// import setAnswer from '@/components/WholeClassAnswer/setAnswer'
// import SelectCount from '@/components/WholeClassAnswer/SelectCount'
// import AnswerRaceTopBar from '@/components/AnswerRace/AnswerRaceTopBar'
// import QuickAnswer from '@/components/QuickAnswer/QuickAnswer'
// import SetQuestionCount from '@/components/QuickAnswer/SetQuestionCount'
// import QuickTopBar from '@/components/QuickAnswer/QuickTopBar'
// import AnswerDetail from '@/components/QuickAnswer/AnswerDetail'
// import SetAnswersList from '@/components/QuickAnswer/SetAnswersList'
// import ConnectionInfo from '@/components/LivePage/ConnectionInfo'
import LiveTopBar from '@/components/LivePage/LiveTopBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ready',
      // component: require('@/components/LandingPage').default
      // component: RandomSelectPerson
      component: LiveTopBar
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
