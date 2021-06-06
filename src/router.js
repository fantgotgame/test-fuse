import { createRouter, createWebHashHistory } from 'vue-router'
import DevelopmentsComponent from "./components/DevelopmentsComponent";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'all-homes',
            component: DevelopmentsComponent
        },
        {
            path: '/details/:homeId',
            name: 'currentHome',
            component: DevelopmentsComponent
        },
    ]
})
