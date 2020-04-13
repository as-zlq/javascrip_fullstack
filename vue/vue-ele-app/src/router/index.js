import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Goods from '@/components/goods/goods'
import Rating from '@/components/rating/rating'
import Seller from '@/components/seller/seller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/rating',
      name: 'Rating',
      component: Rating
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller
    }
  ]
})
