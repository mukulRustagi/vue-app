import Login from './components/login.vue';
import Home from './components/Home.vue';
import About from './components/aboutPage.vue'

export const routes=[
    {path:'/login', component:Login},
    {path:'', component:Home},
    {path:'/about',component:About}
]