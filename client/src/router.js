import Vue from 'vue'
import Router from 'vue-router'

import Index from './components/Index'
import Registration from './components/Registration'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/profile',
            component: () => import('./components/Profile')
        },
        {
            path: '/registration',
            component: Registration
        },
        {
            path: '/practic',
            component: () => import('./components/Practic')
        },
        {
            path: '/theory',
            component: () => import('./components/Theory')
        },
        {
            name: 'lesson',
            path: '/theory/:lesson_id',
            component: () => import('./components/LessonDetail')
        },
        {
            name: 'practic',
            path: '/practic/:practic_id',
            component: () => import('./components/PracticDetail')
        }
    ]
});