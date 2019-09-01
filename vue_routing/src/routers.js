import Login from './components/login.vue';
import Home from './components/Home.vue';
import About from './components/aboutPage.vue'
import UserDetails from './components/userDetails.vue'
export const routes=[
    {path:'/login', component:Login},
    {path:'', component:Home},
    {path:'/about',component:About},
    {path:'/user/:userdetail',component:UserDetails}
]