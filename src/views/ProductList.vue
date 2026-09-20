<template>
    <div>
        <Hero />

        <section class="category-section container">
            <div class="section-head">
                <span class="section-kicker"><i class="bi bi-collection me-1"></i> Browse by</span>
                <h1 class="categ-title">Our Categories</h1>
            </div>

            <nav class="category-nav" aria-label="Product categories">
                <router-link v-for="cat in categories" :key="cat.id" :to="`/productList/${cat.id}`"
                    class="cat-pill" :class="{ active: activeCategory === cat.id }"
                    :aria-current="activeCategory === cat.id ? 'page' : null">
                    <i :class="cat.icon"></i>
                    {{ cat.label }}
                </router-link>
            </nav>

            <p v-if="searchTerm" class="search-banner">
                <i class="bi bi-search me-2"></i>
                Showing results for
                <strong>"{{ searchTerm }}"</strong>
                <button type="button" class="clear-search" aria-label="Clear search" @click="clearSearch">
                    <i class="bi bi-x-lg"></i>
                </button>
            </p>

            <p v-if="!store.loading" class="result-count">
                <i :class="'bi bi-' + (results.length ? 'box-seam' : 'inbox')"></i>
                {{ results.length }} product{{ results.length === 1 ? '' : 's' }} found
            </p>
        </section>

        <section v-if="store.error" class="container text-center py-5">
            <i class="bi bi-cloud-slash text-danger" style="font-size: 3rem;"></i>
            <p class="text-white-50 fs-5 mt-3">{{ store.error }}</p>
            <button class="btn btn-outline-light rounded-pill mt-2 px-4" @click="store.fetchProducts()">
                <i class="bi bi-arrow-clockwise"></i> Retry
            </button>
        </section>

        <section v-else>
            <Productcard :products="results" :loading="store.loading" />
        </section>
    </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Hero from '../components/Hero.vue';
import Productcard from '../components/Productcard.vue';
import { useProductstore } from '../stores/ProductStore.js';

const route = useRoute();
const router = useRouter();
const store = useProductstore();

const categories = [
    { id: 'all', label: 'All', icon: 'bi-grid' },
    { id: 'laptop', label: 'Laptops', icon: 'bi-laptop' },
    { id: 'headphone', label: 'Headphones', icon: 'bi-headphones' },
    { id: 'controller', label: 'Controllers', icon: 'bi-controller' },
    { id: 'watch', label: 'Smart Watches', icon: 'bi-smartwatch' },
];

const activeCategory = computed(() => store.categories.includes(route.params.category) ? route.params.category : 'all');
const searchTerm = computed(() => (route.query.q || '').trim());
const results = computed(() => store.filterBycategory(activeCategory.value));

function clearSearch() {
    router.replace({ path: `/productList/${activeCategory.value}` });
}

onMounted(() => store.fetchProducts());

watch(searchTerm, (val) => (store.searchTerm = val), { immediate: true });
</script>

<style scoped>
    .category-section {
        padding: 60px 0 10px;
    }

    .section-head {
        text-align: center;
        margin-bottom: 28px;
    }

    .section-kicker {
        display: inline-flex;
        align-items: center;
        color: #bdf466;
        font-weight: 800;
        font-size: 0.85rem;
        letter-spacing: 0.04em;
        text-transform: uppercase;
    }

    .categ-title {
        margin: 8px 0 0;
        color: #96e00b;
        font-size: clamp(2rem, 4vw, 2.8rem);
        font-weight: 900;
    }

    .category-nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 12px;
    }

    .cat-pill {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 20px;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, 0.16);
        background: rgba(255, 255, 255, 0.07);
        color: rgba(255, 255, 255, 0.78);
        font-size: 0.98rem;
        font-weight: 700;
        text-decoration: none;
        transition: all 0.2s ease;
    }

    .cat-pill:hover {
        color: #fff;
        background: rgba(255, 255, 255, 0.14);
        transform: translateY(-2px);
    }

    .cat-pill.active,
    .cat-pill:focus-visible.active {
        background: #96e00b;
        border-color: #96e00b;
        color: #102129;
        box-shadow: 0 12px 26px rgba(150, 224, 11, 0.3);
    }

    .search-banner {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        margin: 26px auto 0;
        max-width: 420px;
        padding: 10px 18px;
        border-radius: 999px;
        background: rgba(150, 224, 11, 0.12);
        border: 1px solid rgba(150, 224, 11, 0.3);
        color: #fff;
        font-size: 0.95rem;
    }

    .search-banner strong {
        color: #bdf466;
    }

    .clear-search {
        border: 0;
        background: transparent;
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.9rem;
        padding: 2px 6px;
        border-radius: 50%;
    }

    .clear-search:hover {
        color: #ff6b6b;
    }

    .result-count {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        margin: 18px 0 6px;
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.9rem;
        font-weight: 600;
    }

    .result-count i {
        color: #bdf466;
    }

    @media (max-width: 576px) {
        .category-section {
            padding-top: 40px;
        }

        .category-nav {
            gap: 8px;
        }

        .cat-pill {
            padding: 8px 14px;
            font-size: 0.86rem;
        }
    }
</style>