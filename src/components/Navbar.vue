<template>
    <nav class="navbar navbar-expand-lg glass-navbar sticky-top">
        <div class="container">
            <router-link class="navbar-brand shop" to="/" @click="closeMenu">
                <span class="brand-mark"><i class="bi bi-shop"></i></span>
                E-SHOP
            </router-link>

            <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#glassNav" aria-controls="glassNav" aria-expanded="false" aria-label="Toggle navigation"
                :aria-expanded="menuOpen ? 'true' : 'false'">
                <span class="burger" :class="{ open: menuOpen }" aria-hidden="true">
                    <span></span><span></span><span></span>
                </span>
            </button>

            <div class="collapse navbar-collapse" id="glassNav">
                <ul class="navbar-nav mx-auto gap-lg-3 text-center">
                    <li class="nav-item">
                        <router-link class="nav-link nav-hover" to="/" @click="closeMenu">
                            <i class="bi bi-house-door me-1"></i> Home
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link nav-hover" :class="{ active: route.path.startsWith('/productList') }"
                            to="/productList" @click="closeMenu">
                            <i class="bi bi-grid me-1"></i> Products
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link nav-hover" to="/about" @click="closeMenu">
                            <i class="bi bi-info-circle me-1"></i> About
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link nav-hover" to="/contact" @click="closeMenu">
                            <i class="bi bi-envelope me-1"></i> Contact
                        </router-link>
                    </li>
                </ul>

                <div class="nav-tools">
                    <div class="search-wrap">
                        <form class="search-form" role="search" @submit.prevent="submitSearch">
                            <i class="bi bi-search search-icon"></i>
                            <input type="search" v-model="query" class="form-control glass-input"
                                placeholder="Search products..." aria-label="Search products"
                                @focus="showResults = true" @blur="hideResultsDelayed" @input="runSearch"
                                @keydown.esc="hideResults">
                        </form>

                        <div v-if="showResults && query" class="search-results">
                            <div class="search-head">
                                <span class="search-head-title">
                                    <i class="bi bi-magic"></i> Results
                                </span>
                                <span v-if="suggestions.length" class="search-head-count">{{ suggestions.length }}</span>
                            </div>

                            <p v-if="searching" class="search-status">
                                <span class="spinner-border spinner-border-sm me-2"></span> Searching...
                            </p>
                            <p v-else-if="suggestions.length === 0 && query" class="search-status">
                                <i class="bi bi-search me-2"></i> No products found
                            </p>
                            <router-link v-for="p in suggestions" :key="p.id" :to="`/detail/${p.id}`"
                                class="search-result" @mousedown.prevent @click.prevent="goToDetail(p)">
                                <img :src="p.image" :alt="p.name">
                                <span class="search-result-body">
                                    <strong>{{ p.name }}</strong>
                                    <small><i class="bi bi-currency-dollar"></i>{{ p.price }}</small>
                                </span>
                                <i class="bi bi-arrow-right-short search-result-go"></i>
                            </router-link>
                            <router-link v-if="suggestions.length" :to="{ path: '/productList/all', query: { q: query } }"
                                class="search-view-all" @mousedown.prevent @click.prevent="submitSearch">
                                View all results <i class="bi bi-arrow-right"></i>
                            </router-link>
                        </div>
                    </div>

                    <div class="m-noti">
                        <router-link class="btn glass-btn" :class="{ active: route.path === '/cart' }" to="/cart"
                            @click="closeMenu" aria-label="Open cart">
                            <i class="bi bi-cart4"></i>
                            <span class="d-none d-sm-inline">Cart</span>
                            <span v-if="cartItem.countQty" class="noti">{{ cartItem.countQty }}</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useCartItem from '../stores/Cardstore';
import { useProductstore } from '../stores/ProductStore';

const cartItem = useCartItem();
const store = useProductstore();
const route = useRoute();
const router = useRouter();

const query = ref('');
const showResults = ref(false);
const searching = ref(false);
const suggestions = ref([]);
const menuOpen = ref(false);

let hideTimer = null;

onMounted(() => {
    store.fetchProducts();
    const collapseEl = document.getElementById('glassNav');
    if (collapseEl) {
        collapseEl.addEventListener('shown.bs.collapse', () => (menuOpen.value = true));
        collapseEl.addEventListener('hidden.bs.collapse', () => (menuOpen.value = false));
    }
});

function runSearch() {
    if (!query.value.trim()) {
        suggestions.value = [];
        return;
    }
    searching.value = true;
    clearTimeout(hideTimer);
    setTimeout(() => {
        const q = query.value.toLowerCase().trim();
        suggestions.value = store.products
            .filter((p) => (p.name + p.category + p.promo).toLowerCase().includes(q))
            .slice(0, 5);
        searching.value = false;
    }, 150);
}

function submitSearch() {
    const q = query.value.trim();
    if (q) {
        hideResults();
        closeMenu();
        router.push({ path: '/productList/all', query: { q } });
    }
}

function goToDetail(p) {
    hideResults();
    closeMenu();
    router.push(`/detail/${p.id}`);
}

function hideResults() {
    query.value = '';
    suggestions.value = [];
    showResults.value = false;
}

function hideResultsDelayed() {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => (showResults.value = false), 200);
}

function closeMenu() {
    query.value = '';
    suggestions.value = [];
    const collapseEl = document.getElementById('glassNav');
    if (collapseEl && collapseEl.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(collapseEl).hide();
    }
}

watch(() => route.fullPath, () => {
    query.value = '';
    suggestions.value = [];
});
</script>

<style scoped>
    .shop {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        color: #96e00b;
        font-size: 1.4rem;
        font-weight: 900;
        letter-spacing: 0;
    }

    .brand-mark {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 38px;
        border-radius: 12px;
        background: rgba(150, 224, 11, 0.16);
        color: #b9f15a;
        font-size: 1.15rem;
    }

    .glass-navbar {
        background: rgba(7, 23, 29, 0.78);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        padding: 12px 0;
        box-shadow: 0 18px 50px rgba(0, 0, 0, 0.18);
    }

    .navbar-toggler {
        position: relative;
        padding: 0.45rem 0.55rem;
    }

    .burger {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        width: 30px;
        height: 30px;
    }

    .burger span {
        display: block;
        width: 100%;
        height: 2px;
        border-radius: 999px;
        background: #fff;
        transition: transform 0.28s ease, opacity 0.2s ease, width 0.28s ease;
    }

    .burger span:nth-child(2) {
        width: 70%;
    }

    .burger.open span:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
    }

    .burger.open span:nth-child(2) {
        opacity: 0;
        width: 100%;
    }

    .burger.open span:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
    }

    .nav-hover {
        position: relative;
        color: rgba(255, 255, 255, 0.78) !important;
        border-radius: 999px;
        padding: 9px 14px;
        font-size: 0.98rem;
        font-weight: 700;
        transition: color 0.2s ease, background-color 0.2s ease;
    }

    .nav-hover:hover,
    .nav-hover.router-link-active,
    .nav-hover.active {
        color: #fff;
        background: rgba(255, 255, 255, 0.1);
    }

    .nav-tools {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .search-wrap {
        position: relative;
    }

    .search-form {
        position: relative;
        display: flex;
        align-items: center;
    }

    .search-icon {
        position: absolute;
        left: 15px;
        color: #cfd8d3;
        font-size: 0.95rem;
        pointer-events: none;
    }

    .glass-input {
        width: 225px;
        min-height: 42px;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.18);
        color: white;
        border-radius: 999px;
        padding-left: 40px;
        transition: border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
    }

    .glass-input::placeholder {
        color: #b9c4bf;
    }

    .glass-input:focus {
        background: rgba(255, 255, 255, 0.16);
        color: white;
        box-shadow: 0 0 0 3px rgba(150, 224, 11, 0.22);
        border-color: rgba(150, 224, 11, 0.72);
    }

    .search-results {
        position: absolute;
        top: calc(100% + 10px);
        left: 0;
        right: 0;
        z-index: 60;
        max-height: min(360px, 60svh);
        overflow-y: auto;
        padding: 8px;
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.14);
        background:
            linear-gradient(160deg, rgba(150, 224, 11, 0.08), transparent 40%),
            rgba(7, 23, 29, 0.98);
        box-shadow: 0 28px 70px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.06);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        animation: dropIn 0.22s ease;
        scrollbar-width: thin;
        scrollbar-color: rgba(150, 224, 11, 0.5) transparent;
    }

    .search-results::-webkit-scrollbar {
        width: 6px;
    }

    .search-results::-webkit-scrollbar-track {
        background: transparent;
    }

    .search-results::-webkit-scrollbar-thumb {
        background: rgba(150, 224, 11, 0.4);
        border-radius: 999px;
    }

    @keyframes dropIn {
        from {
            opacity: 0;
            transform: translateY(-8px) scale(0.98);
        }

        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    .search-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4px 10px 8px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        margin-bottom: 4px;
    }

    .search-head-title {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        color: rgba(255, 255, 255, 0.55);
        font-size: 0.72rem;
        font-weight: 800;
        letter-spacing: 0.14em;
        text-transform: uppercase;
    }

    .search-head-title i {
        color: #b9f15a;
        font-size: 0.9rem;
    }

    .search-head-count {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 22px;
        height: 22px;
        padding: 0 7px;
        border-radius: 999px;
        background: rgba(150, 224, 11, 0.16);
        color: #bdf466;
        font-size: 0.75rem;
        font-weight: 800;
    }

    .search-status {
        display: flex;
        align-items: center;
        margin: 0;
        padding: 12px;
        color: rgba(255, 255, 255, 0.65);
        font-size: 0.9rem;
    }

    .search-result {
        display: flex;
        align-items: center;
        gap: 12px;
        min-height: 56px;
        padding: 8px 10px;
        border-radius: 14px;
        color: #fff;
        text-decoration: none;
        transition: background-color 0.15s ease, transform 0.15s ease;
    }

    .search-result:hover,
    .search-result:focus-visible {
        background: rgba(255, 255, 255, 0.1);
        transform: translateX(3px);
    }

    .search-result img {
        flex: 0 0 auto;
        width: 44px;
        height: 44px;
        object-fit: contain;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.08);
        padding: 4px;
    }

    .search-result-body {
        display: flex;
        flex-direction: column;
        min-width: 0;
    }

    .search-result-body strong {
        font-size: 0.92rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .search-result-body small {
        color: #b9f15a;
        font-weight: 700;
    }

    .search-result-go {
        margin-left: auto;
        color: rgba(255, 255, 255, 0.35);
        font-size: 1.3rem;
        transition: color 0.15s ease, transform 0.15s ease;
    }

    .search-result:hover .search-result-go {
        color: #b9f15a;
        transform: translateX(2px);
    }

    .search-view-all {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        margin-top: 6px;
        padding: 11px;
        border-radius: 12px;
        background: rgba(150, 224, 11, 0.14);
        color: #bdf466;
        font-weight: 700;
        font-size: 0.9rem;
        text-decoration: none;
        transition: background-color 0.15s ease;
    }

    .search-view-all:hover {
        background: rgba(150, 224, 11, 0.24);
    }

    .m-noti {
        position: relative;
    }

    .noti {
        background-color: #ff4757;
        width: 20px;
        height: 20px;
        position: absolute;
        border-radius: 50%;
        top: -5px;
        right: -5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.7rem;
        font-weight: 800;
        color: #fff;
    }

    .glass-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        min-height: 42px;
        background: #96e00b;
        color: #102129;
        border: 0;
        border-radius: 999px;
        padding: 8px 18px;
        font-weight: 800;
        transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease, filter 0.2s ease;
    }

    .glass-btn i {
        transition: transform 0.2s ease;
    }

    .glass-btn:hover {
        background: #a9f21f;
        color: #102129;
        transform: translateY(-2px);
        /* box-shadow: 0 14px 28px rgba(150, 224, 11, 0.38); */
    }

    .glass-btn:hover i {
        transform: scale(1.15) rotate(-6deg);
    }

    .glass-btn:active {
        transform: translateY(0) scale(0.97);
        box-shadow: 0 6px 14px rgba(150, 224, 11, 0.25);
    }

    .glass-btn.active {
        background: #d6ff9a;
        box-shadow: inset 0 0 0 2px rgba(16, 33, 41, 0.15);
    }

    @media (max-width: 991px) {
        .glass-navbar {
            padding: 10px 0;
        }

        .navbar-collapse {
            width: min(100%, 540px);
            margin: 14px auto 0;
            padding: 14px;
            border-radius: 24px;
            background:
                linear-gradient(160deg, rgba(150, 224, 11, 0.07), transparent 42%),
                rgba(9, 26, 33, 0.92);
            border: 1px solid rgba(255, 255, 255, 0.14);
            box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(18px);
            -webkit-backdrop-filter: blur(18px);
        }

        .navbar-nav {
            flex-direction: column;
            justify-content: center;
            gap: 4px;
        }

        .nav-tools {
            width: 100%;
            margin-top: 14px;
            flex-direction: column;
            align-items: stretch;
        }

        .glass-input {
            width: 100%;
        }

        .search-wrap {
            width: 100%;
        }

        .search-results {
            max-height: min(300px, 55svh);
        }

        .glass-btn {
            width: 100%;
        }

        .nav-hover {
            padding: 11px 14px;
        }
    }

    @media (max-width: 575px) {
        .glass-navbar {
            padding: 8px 0;
        }

        .shop {
            font-size: 1.2rem;
        }

        .brand-mark {
            width: 32px;
            height: 32px;
            font-size: 1rem;
        }

        .navbar-toggler {
            padding: .35rem .45rem;
        }

        .navbar-collapse {
            margin-top: 10px;
            padding: 10px;
            border-radius: 20px;
        }

        .glass-input,
        .glass-btn {
            min-height: 42px;
        }

        .glass-btn {
            padding: 8px 14px;
        }

        .search-results {
            border-radius: 18px;
            padding: 6px;
        }

        .search-result {
            min-height: 52px;
            padding: 6px 8px;
        }

        .search-result img {
            width: 40px;
            height: 40px;
        }
    }
</style>