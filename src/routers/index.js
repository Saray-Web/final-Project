import { createRouter, createWebHistory } from "vue-router";
import CardItem from "../components/CardItem.vue";
import Detail from "../components/Detail.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Home from "../views/Home.vue";
import ProductList from "../views/ProductList.vue";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/contact',
        // alias: '/Contact',
        component: Contact
    },
    {
        path: '/productList',
        redirect: '/productList/all'
    },
    {
        path: '/productList/:category',
        alias: '/ProductList',
        component: ProductList
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/detail/:id',
        component: Detail
    },
    {
        path: '/cart',
        alias: '/CardItem',
        component: CardItem
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;
