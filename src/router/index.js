import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/inicio'
    },
    {
        path:'/',
        component: {
            render(c) {
                return c('router-view')
            },
        },
        children:[
            {
                path: '/inicio',
                name: 'inicio',
                component: () => import('../components/pages/form1.vue')
            },
            {
                path: '/form2',
                name: 'form2',
                component: () => import('../components/pages/form2.vue')
            },
            {
                path: '/form3',
                name: 'form3',
                component: () => import('../components/pages/form3.vue')
            },
            {
                path: '/form4',
                name: 'form4',
                component: () => import('../components/pages/form4.vue')
            },
            {
                path: '/form5',
                name: 'form5',
                component: () => import('../components/pages/form5.vue')
            },
            {
                path: '/form6',
                name: 'form6',
                component: () => import('../components/pages/form6.vue')
            },
            

        ]
    }
]

const router = new VueRouter({ routes, })


export default router;

