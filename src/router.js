import Vue from 'vue';
import VueRouter from 'vue-router'


import HomePage from './views/HomePage.vue'
import ProductDetails from './views/ProductDetails.vue'
import OtherDetails from './components/OtherDetails.vue'
import DesignInterior from './components/DesignInterior.vue'

Vue.use(VueRouter )

export const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/car-details',
        component: ProductDetails
    },
    {
        path:'/car-detailsx',
        component: OtherDetails
    },
    {
        path: '/de',
        componenent: DesignInterior
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
  })
  
  export default router;