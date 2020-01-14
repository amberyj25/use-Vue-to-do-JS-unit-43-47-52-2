import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
import order from "./order.vue"
import sale from "./sale.vue"
import suprice from "./suprice.vue"

Vue.use(VueRouter)
export default new VueRouter({
    routes:[
        {
            path:"/",
            component: App,
        },{
            path:"/order",
            name:"order",
            component: order
        },{
            path:"/sale",
            name:"sale",
            component:sale
        },{
            path:"/suprice",
            name:"suprice",
            component: suprice
        }
    ]
})