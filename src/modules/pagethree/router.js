import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { 
        path: '/', 
        name: 'home', 
        component: ()=>import('./views/Home.vue'), 
        meta: { title: '首页' }}
]

export default new VueRouter({
    routes: routes
})