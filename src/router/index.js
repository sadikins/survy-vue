
import App from '../components/layout/App.vue';
import Dashboard from '../views/Dashboard.vue';
import Survey from '../views/Survey.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

import {  createRouter, createWebHistory } from 'vue-router';
import { useAuth } from '../store/auth';


const routes = [
    {
        path: '/',
        component: App,
        redirect: '/dashboard',
        children: [
            {path: '/dashboard', name: 'Dashboard', component: Dashboard},
            {path: '/survey', name: 'Survey', component: Survey},
        ],

        meta: {
            requireAuth: true,
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
       
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            authPage: true,
        },
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;
