import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Boutique from '../views/Boutique.vue'
import PContact from '../views/PContact.vue'
import Page404 from '../views/Page404.vue'

Vue.use(VueRouter)

const routes = [
    {
        path : '*',
        component : Page404
    },
    {
        path:'/',
        redirect :'/accueil'
    },
    {
        path: '/accueil',
        name: 'Accueil',
        component: Accueil
    },
    {
        path: '/boutique',
        name: 'Boutique',
        component: Boutique
    },
    {
        path: '/contact',
        name: 'Pcontact',
        component: PContact
    }
];

const router = new VueRouter({
    mode: 'history',
    base : process.env.BASE_URL,
    routes
})

export default router;


