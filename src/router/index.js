import Vue from 'vue';
import VueRouter from 'vue-router';

import LoginComponent from '../components/login/login.vue'
import root from '../components/RootComponent/RootComponent.vue'
import Administrator from '../components/Administrator/Administrator'
import Company from '../components/company/company'


Vue.use(VueRouter);

var router = new VueRouter({
    routes:[
        {
            path: '/' || '/login',
            name: '' ||'login',
            component: LoginComponent
        },{
            path: '/root',
            name: 'root',
            component: root,
            children:[
                {
                    path: '/company',
                    name:'company',
                    component: Company
                },{
                    path: '/admin',
                    name: 'admin',
                    component: Administrator
                }
            ]
        }
    ]
 })
export default router;