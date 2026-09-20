import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/Home.vue"),
        meta: { title: "Home" },
    },
    {
        path: "/contact",
        name: "contact",
        component: () => import("../views/Contact.vue"),
        meta: { title: "Contact" },
    },
    {
        path: "/productList",
        redirect: "/productList/all",
    },
    {
        path: "/productList/:category",
        name: "products",
        alias: "/ProductList",
        component: () => import("../views/ProductList.vue"),
        meta: { title: "Products" },
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../views/About.vue"),
        meta: { title: "About" },
    },
    {
        path: "/detail/:id",
        name: "detail",
        component: () => import("../components/Detail.vue"),
        meta: { title: "Product Detail" },
    },
    {
        path: "/cart",
        name: "cart",
        alias: "/CardItem",
        component: () => import("../components/CardItem.vue"),
        meta: { title: "Cart" },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: () => import("../views/NotFound.vue"),
        meta: { title: "Page Not Found" },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 };
    },
});

export default router;