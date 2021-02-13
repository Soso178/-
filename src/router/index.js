import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login/Login.vue'  
import Coupon from "@/components/coupon/Coupon.vue";
import Used from "@/components/coupon/Used.vue";
import Unused from "@/components/coupon/Unused.vue";
import Failed from "@/components/coupon/Failed.vue";
import Personal from "@/components/Personal.vue";
import shouye from "@/components/shouye.vue";
import Classify from "@/components/Classify.vue";
import Search from "@/components/Search.vue";
import WorthBuy from "@/components/WorthBuy.vue";
import hukuai from "@/components/hukuai.vue";
import Discount from "@/components/Discount.vue";
import Cart from "@/components/Cart/Cart.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: shouye,
  },{
    path: '/coupon',
    name: 'Coupon',
    component: Coupon,
    children:[{
      path:'/used',
      name:'Used',
      component:Used
    },{
      path:'/unused',
      name:'Unused',
      component:Unused
    },{
      path:'/failed',
      name:'Failed',
      component:Failed
    }]},{
    path:'/login',
    name:'Login',
    component:Login
    },{
    path:'/classify',
    name:'Classify',
    component:Classify
    },
    {
      path:'/shouye',
      name:'Shouye',
      component:shouye
    },{
      path:'/search',
      name:'Search',
      component:Search
    },{
      path:'/worthbuy',
      name:'WorthBuy',
      component:WorthBuy
    }
    ,{
      path:'/cart',
      name:'Cart',
      component:Cart
    }
]

const router = new VueRouter({
  routes
})

export default router
