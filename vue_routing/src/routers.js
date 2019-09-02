import Login from './components/login.vue';
import Home from './components/Home.vue';
import About from './components/aboutPage.vue'
import UserDetails from './components/userDetails.vue'
import Products from './components/products.vue'
import Productfirst from './components/productFirst.vue'
import ProductSecond from './components/productSecond.vue'

export const routes=[
    {path:'/login', component:Login},
    {path:'', component:Home},
    {path:'/about',component:About},
    {path:'/user/:userdetail',component:UserDetails},
    {path:'/products', component:Products,children:[
        {path:'first', component:Productfirst},
        {path:'second', component:ProductSecond}
    ]}
]