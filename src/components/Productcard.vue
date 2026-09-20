<template>
    <main class="container">
        <div class="row justify-content-center">
            <div class="col-12 product-grid row row-cols-2 row-cols-lg-4 g-3 g-md-4"
                :class="{ 'opacity-50 pointer-events-none': loading }">
                <div v-if="loading && products.length === 0" v-for="n in 8" :key="n" class="col">
                    <div class="card skeleton-card">
                        <div class="skeleton-img"></div>
                        <div class="skeleton-line"></div>
                        <div class="skeleton-line short"></div>
                    </div>
                </div>

                <div v-else-if="products.length === 0 && !loading" class="col-12 text-center py-5">
                    <i class="bi bi-inbox text-secondary" style="font-size: 3.5rem;"></i>
                    <p class="text-white-50 mt-3 mb-0 fs-5">No products match your search.</p>
                    <router-link to="/productList/all" class="btn btn-outline-light rounded-pill mt-3 px-4">
                        <i class="bi bi-arrow-left"></i> Browse all
                    </router-link>
                </div>

                <div v-for="product in products" :key="product.id" class="col"
                    data-aos="fade-up" data-aos-duration="300" data-aos-delay="100"
                    data-aos-anchor-placement="center-bottom">
                    <div class="product-image card h-100 border-0 shadow">
                        <router-link :to="`/detail/${product.id}`" class="product-card" :aria-label="`View ${product.name}`">
                            <img :src="product.image" :alt="product.name">
                            <span class="quick-view"><i class="bi bi-eye"></i> Quick View</span>
                            <span v-if="product.promo" class="card-badge"
                                :class="badgeTone(product.promo)">{{ product.promo }}</span>
                        </router-link>
                        <div class="card-body text-center">
                            <router-link :to="`/detail/${product.id}`" class="product-name-link">
                                <h1 class="product-name">{{ product.name }}</h1>
                            </router-link>
                            <div class="price-row">
                                <p class="product-price">${{ product.price }}</p>
                                <p v-if="product.oldPrice" class="old-price">${{ product.oldPrice }}</p>
                            </div>
                            <div class="rating-row">
                                <span class="stars" aria-hidden="true">
                                    <i v-for="n in 5" :key="n" class="bi"
                                        :class="n <= Math.round(product.rating) ? 'bi-star-fill' : 'bi-star'"></i>
                                </span>
                                <span class="reviews">({{ product.rating }})</span>
                            </div>
                        </div>
                        <div class="card-footer border-0 bg-transparent pt-0">
                            <button @click="handleClick(product)" class="btn w-100 rounded-pill text-white add-btn"
                                :class="added.has(product.id) ? 'bg-success' : 'bg-ink'" :disabled="busy.has(product.id)">
                                <span v-if="added.has(product.id)">
                                    <i class="bi bi-check-lg"></i> Added!
                                </span>
                                <span v-else>
                                    <i class="bi bi-cart-plus"></i> Add to Cart
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import cartItem from '../stores/Cardstore';

const props = defineProps({
    products: { type: Array, default: () => [] },
    loading: { type: Boolean, default: false },
});

const cartitem = cartItem();
const added = ref(new Set());
const busy = ref(new Set());

function badgeTone(promo) {
    const map = {
        'Best Seller': 'badge-gold',
        'Hot Deal': 'badge-red',
        'New Arrival': 'badge-green',
        'Premium': 'badge-blue',
    };
    return map[promo] || 'badge-green';
}

function handleClick(product) {
    cartitem.addtoCart(product);
    busy.value.add(product.id);
    added.value.add(product.id);

    setTimeout(() => {
        added.value.delete(product.id);
        busy.value.delete(product.id);
    }, 1400);
}
</script>

<style scoped>
    .product-grid {
        margin-left: 0;
        margin-right: 0;
    }

    .pointer-events-none {
        pointer-events: none;
    }

    .product-image {
        width: 100%;
        border-radius: 22px;
        background: #ffffff;
        overflow: hidden;
        transition: transform 0.25s ease, box-shadow 0.25s ease;
    }

    .product-image:hover {
        transform: translateY(-6px);
        box-shadow: 0 1.4rem 2.6rem rgba(0, 0, 0, 0.2) !important;
    }

    .product-card {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        isolation: isolate;
        overflow: hidden;
        min-height: 215px;
        padding: 28px;
        border-radius: 22px 22px 0 0;
        background: radial-gradient(circle at 50% 42%, rgba(255, 196, 0, 0.9), rgba(255, 196, 0, 0.22) 35%, transparent 58%),
            linear-gradient(135deg, #0f2027 0%, #254f5c 48%, #13272f 100%);
        text-decoration: none;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }

    .product-card::before {
        content: "";
        position: absolute;
        inset: 12px;
        z-index: -1;
        border-radius: 18px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.03));
        border: 1px solid rgba(255, 255, 255, 0.14);
    }

    .product-card::after {
        content: "";
        position: absolute;
        width: 150px;
        height: 150px;
        right: -52px;
        top: -52px;
        z-index: -1;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.14);
    }

    .product-card img {
        width: 100%;
        max-width: 400px;
        height: 150px;
        object-fit: contain;
        filter: drop-shadow(0 18px 22px rgba(0, 0, 0, 0.32));
        transition: transform 0.3s ease, filter 0.3s ease;
    }

    .product-card:hover img {
        transform: translateY(-6px) scale(1.04);
        filter: drop-shadow(0 24px 28px rgba(0, 0, 0, 0.38));
    }

    .quick-view {
        opacity: 0;
        transition: opacity 0.3s ease;
        position: absolute;
        bottom: 12px;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 7px 14px;
        border-radius: 999px;
        color: #10232b;
        background: rgba(255, 255, 255, 0.92);
        font-weight: 700;
        font-size: 0.85rem;
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.22);
    }

    .product-card:hover .quick-view,
    .product-card:focus-visible .quick-view {
        opacity: 1;
    }

    .card-badge {
        position: absolute;
        top: 14px;
        left: 14px;
        z-index: 2;
        display: inline-flex;
        align-items: center;
        padding: 5px 12px;
        border-radius: 999px;
        font-size: 0.72rem;
        font-weight: 800;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
    }

    .badge-gold { background: #ffc847; color: #3a2a00; }
    .badge-red { background: #ff6b6b; color: #4a0000; }
    .badge-green { background: #c8f578; color: #1d3d00; }
    .badge-blue { background: #6ec6ff; color: #002c47; }

    .product-name-link {
        text-decoration: none;
    }

    .product-name {
        min-height: 48px;
        margin: 12px 0 0;
        color: #17202a;
        font-size: 1.05rem;
        font-weight: 700;
        line-height: 1.3;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .price-row {
        display: flex;
        align-items: baseline;
        justify-content: center;
        gap: 8px;
        margin-top: 6px;
    }

    .product-price {
        margin: 0;
        color: #ff9800;
        font-size: 1.35rem;
        font-weight: 800;
    }

    .old-price {
        margin: 0;
        color: #9aa3ab;
        font-size: 0.9rem;
        text-decoration: line-through;
    }

    .rating-row {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        margin-top: 4px;
    }

    .stars {
        color: #ffc847;
        font-size: 0.8rem;
    }

    .stars i {
        color: #ffc847;
    }

    .reviews {
        color: #6b7680;
        font-size: 0.8rem;
        font-weight: 600;
    }

    .product-image .btn {
        min-height: 44px;
        font-weight: 800;
    }

    .btn.bg-ink {
        background: #f3c53b;
        color: #202a12;
    }

    .add-btn:hover:not(:disabled) {
        filter: brightness(1.05);
        transform: translateY(-1px);
        box-shadow: 0 10px 20px rgba(243, 197, 59, 0.3);
    }

    /* Skeleton */
    .skeleton-card {
        padding: 16px;
        border-radius: 22px;
        background: rgba(255, 255, 255, 0.06);
    }

    .skeleton-img {
        height: 180px;
        border-radius: 16px;
        background: linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.14), rgba(255,255,255,0.06));
        background-size: 200% 100%;
        animation: shimmer 1.4s infinite;
    }

    .skeleton-line {
        height: 14px;
        margin-top: 14px;
        border-radius: 999px;
        background: linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.14), rgba(255,255,255,0.06));
        background-size: 200% 100%;
        animation: shimmer 1.4s infinite;
    }

    .skeleton-line.short {
        width: 50%;
        margin-top: 8px;
    }

    @keyframes shimmer {
        to { background-position: -200% 0; }
    }

    @media (max-width: 576px) {
        .product-card {
            min-height: 95px;
            padding: 12px;
            border-radius: 16px 16px 0 0;
        }

        .product-image {
            border-radius: 16px 16px 12px 12px;
        }

        .product-card img {
            max-width: 100%;
            height: 120px;
        }

        .product-image .card-body {
            padding: 10px 8px;
        }

        .card-badge {
            top: 8px;
            left: 8px;
            padding: 3px 8px;
            font-size: 0.6rem;
        }

        .product-name {
            min-height: auto;
            font-size: 0.85rem;
            -webkit-line-clamp: 1;
        }

        .product-price {
            font-size: 1rem;
        }

        .old-price {
            font-size: 0.75rem;
        }

        .rating-row {
            display: none;
        }

        .product-image .card-footer {
            padding: 0 8px 10px;
        }

        .product-image .btn {
            min-height: 34px;
            font-size: 0.72rem;
            padding-left: 8px;
            padding-right: 8px;
        }
    }
</style>