import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'
import Singer from 'components/singer/singer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      complement: Recommend
    },
    {
      path: '/rank',
      complement: Rank
    },
    {
      path: '/search',
      complement: Search
    },
    {
      path: '/singer',
      complement: Singer
    }
  ]
})
