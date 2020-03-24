import HomePage from './views/HomePage.vue'
import ProductDetails from './views/ProductDetails.vue'



export const routes = [
    {path: '',component: HomePage},
    {path: '/details/:carProductDetails',component: ProductDetails} 
]