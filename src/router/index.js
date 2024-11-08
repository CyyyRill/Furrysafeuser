import { createRouter, createWebHistory } from "vue-router";

import dashboard from '../pages/master/dashboard.vue';
import home from '../pages/home.vue';
import explore from '../pages/Explore.vue';
import login from '../pages/login.vue';
import Regis from '../pages/Regis.vue';
import upload from '../pages/upload.vue';
import Regisshel from '../pages/Regisshel.vue';
import Profile from '../pages/Profile.vue';
import petProfile from '../pages/Petprofile.vue';
import Timeline from '../pages/Timeline.vue';
import Message from "../pages/Messages.vue";

const routes = [
    {
        name: 'Dashboard',
        path: '/',
        component: dashboard,
        children: [
            {
                name: 'Home',
                path: 'home',
                component: home
            },
            {
                name: 'Explore',
                path: '/explore',
                component: explore
            },
        ]
    },
    {
        name: 'login',
        path: '/login',
        component: login
    },
    {
        name: 'Regis',
        path: '/Regis',
        component: Regis
    },
    {
        name: 'upload',
        path: '/upload',
        component: upload
    },
    {
        name: 'Regisshel',
        path: '/Regisshel',
        component: Regisshel
    } ,
    {
        name: 'profile',
        path: '/profile',
        component: Profile
    },  
    {
        name: 'timeline',
        path: '/timeline',
        component: Timeline
    }, 
     {
        name: 'petprofile',
        path: '/petprofile',
        component: petProfile
    },
   {
       name: 'message',
        path: '/message',
        component: Message
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
