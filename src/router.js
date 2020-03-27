import Vue from 'vue';
import VueRouter from 'vue-router'


import HomePage from './views/HomePage.vue'
import ProductDetails from './views/ProductDetails.vue'
import OtherDetails from './components/OtherDetails.vue'

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
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
  })
  
  export default router;