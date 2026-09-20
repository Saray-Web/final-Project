<template>
    <main class="container detail-page">
        <nav class="breadcrumb-nav" aria-label="Breadcrumb">
            <i class="bi bi-house-door"></i>
            <router-link to="/" class="crumb">Home</router-link>
            <i class="bi bi-chevron-right crumb-sep"></i>
            <router-link to="/productList" class="crumb">Products</router-link>
            <i v-if="product.name" class="bi bi-chevron-right crumb-sep"></i>
            <span v-if="product.name" class="crumb current">{{ product.name }}</span>
        </nav>

        <section v-if="store.loading" class="text-center py-5">
            <div class="spinner-border text-warning" role="status"></div>
            <p class="text-white-50 mt-3">Loading product...</p>
        </section>

        <section v-else-if="!product.id" class="text-center py-5">
            <i class="bi bi-box2 text-secondary" style="font-size: 3.5rem;"></i>
            <p class="text-white-50 fs-5 mt-3">We couldn't find that product.</p>
            <router-link to="/productList" class="btn btn-outline-light rounded-pill mt-3 px-4">
                <i class="bi bi-arrow-left"></i> Back to products
            </router-link>
        </section>

        <section v-else class="product-layout">
            <div class="image-cover glass-img">
                <img :src="product.image" :alt="product.name">
                <span v-if="product.promo" class="card-badge badge-gold">{{ product.promo }}</span>
            </div>

            <div class="product-summary">
                <span class="chips">
                    <span class="product-label">
                        <i :class="categoryIcon"></i> {{ categoryLabel }}
                    </span>
                    <span v-if="product.oldPrice" class="save-label">
                        Save ${{ product.oldPrice - product.price }}
                    </span>
                </span>

                <h1 class="titles">{{ product.name }}</h1>

                <div class="rating-row">
                    <span class="stars" aria-hidden="true">
                        <i v-for="n in 5" :key="n" class="bi"
                            :class="n <= Math.round(product.rating) ? 'bi-star-fill' : 'bi-star'"></i>
                    </span>
                    <span class="reviews">({{ product.rating }}) &bull; {{ product.reviews }} reviews</span>
                </div>

                <div class="price-block">
                    <span class="product-price">${{ product.price }}</span>
                    <span v-if="product.oldPrice" class="old-price">${{ product.oldPrice }}</span>
                </div>

                <p class="desc">{{ product.description }}</p>

                <hr class="summary-line">

                <div class="qty-row">
                    <span class="qty-label">Quantity</span>
                    <div class="qty-box">
                        <button class="qty-btn" type="button" aria-label="Decrease quantity" @click="changeQty(-1)">
                            <i class="bi bi-dash-lg"></i>
                        </button>
                        <span class="qty-number">{{ quantity }}</span>
                        <button class="qty-btn" type="button" aria-label="Increase quantity" @click="changeQty(1)">
                            <i class="bi bi-plus-lg"></i>
                        </button>
                    </div>
                </div>

                <div class="actions-row">
                    <button @click="addToCart" class="btn add-btn">
                        <i class="bi bi-cart-plus"></i> Add to Cart
                    </button>
                    <button @click="buyNow" class="btn buy-btn">
                        <i class="bi bi-lightning-charge"></i> Buy Now
                    </button>
                </div>

                <div class="mini-perks">
                    <span><i class="bi bi-shield-check"></i> Secure SSL checkout</span>
                    <span><i class="bi bi-arrow-counterclockwise"></i> 30-day returns</span>
                </div>
            </div>
        </section>

        <section class="perks-strip">
            <div class="perk">
                <div class="perk-icon"><i class="bi bi-truck"></i></div>
                <div>
                    <h3>Free Shipping</h3>
                    <p>On orders over $50</p>
                </div>
            </div>
            <div class="perk">
                <div class="perk-icon"><i class="bi bi-shield-check"></i></div>
                <div>
                    <h3>Warranty</h3>
                    <p>1 year guarantee</p>
                </div>
            </div>
            <div class="perk">
                <div class="perk-icon"><i class="bi bi-arrow-counterclockwise"></i></div>
                <div>
                    <h3>Easy Returns</h3>
                    <p>30-day return policy</p>
                </div>
            </div>
            <div class="perk">
                <div class="perk-icon"><i class="bi bi-headset"></i></div>
                <div>
                    <h3>24/7 Support</h3>
                    <p>We're here to help</p>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProductstore } from '../stores/ProductStore';
import cartItem from '../stores/Cardstore';

const cartstore = cartItem();
const store = useProductstore();
const route = useRoute();
const router = useRouter();
const quantity = ref(1);

const product = computed(() => store.product);

const categoryMeta = {
    laptop: { label: 'Laptop', icon: 'bi-laptop' },
    headphone: { label: 'Headphones', icon: 'bi-headphones' },
    controller: { label: 'Controller', icon: 'bi-controller' },
    watch: { label: 'Smart Watch', icon: 'bi-smartwatch' },
};

const categoryLabel = computed(() => categoryMeta[product.value.category]?.label || product.value.category);
const categoryIcon = computed(() => categoryMeta[product.value.category]?.icon || 'bi-tag');

function changeQty(delta) {
    quantity.value = Math.max(1, quantity.value + delta);
}

function addToCart() {
    for (let i = 0; i < quantity.value; i++) {
        cartstore.addtoCart(product.value);
    }
    router.push('/cart');
}

function buyNow() {
    addToCart();
}

onMounted(() => {
    store.fetchProducts();
    store.fetchProduct(route.params.id);
});
</script>

<style scoped>
    .detail-page {
        padding-top: 130px;
    }

    .breadcrumb-nav {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
        color: rgba(255, 255, 255, 0.55);
        font-size: 0.92rem;
        padding: 10px 0;
        margin-bottom: 10px;
    }

    .breadcrumb-nav i:first-child {
        color: #bdf466;
    }

    .crumb {
        color: rgba(255, 255, 255, 0.6);
        text-decoration: none;
        transition: color 0.15s ease;
    }

    .crumb:hover {
        color: #bdf466;
    }

    .crumb.current {
        color: #fff;
        font-weight: 700;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 260px;
    }

    .crumb-sep {
        font-size: 0.7rem;
    }

    .product-layout {
        display: grid;
        grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
        gap: 28px;
        margin-top: 20px;
    }

    .glass-img {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        isolation: isolate;
        overflow: hidden;
        min-height: 320px;
        padding: 34px;
        border-radius: 24px;
        background:
            radial-gradient(circle at 50% 40%, rgba(255, 196, 0, 0.55), transparent 60%),
            linear-gradient(135deg, #0f2027, #1c3a45);
        border: 1px solid rgba(255, 255, 255, 0.14);
        box-shadow: 0 24px 60px rgba(0, 0, 0, 0.32);
    }

    .glass-img img {
        max-width: 100%;
        max-height: 380px;
        object-fit: contain;
        filter: drop-shadow(0 26px 34px rgba(0, 0, 0, 0.4));
    }

    .card-badge {
        position: absolute;
        top: 16px;
        left: 16px;
        padding: 6px 14px;
        border-radius: 999px;
        font-size: 0.75rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.03em;
    }

    .badge-gold {
        background: #ffc847;
        color: #3a2a00;
    }

    .product-summary {
        padding: clamp(24px, 4vw, 40px);
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 24px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.03)), rgba(12, 14, 18, 0.7);
        box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
    }

    .chips {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 14px;
    }

    .product-label {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 13px;
        border-radius: 999px;
        background: rgba(150, 224, 11, 0.12);
        color: #b9f15a;
        font-size: 0.78rem;
        font-weight: 800;
        letter-spacing: 0.06em;
        text-transform: uppercase;
    }

    .save-label {
        display: inline-flex;
        align-items: center;
        padding: 6px 13px;
        border-radius: 999px;
        background: rgba(255, 107, 107, 0.14);
        color: #ff8a8a;
        font-size: 0.78rem;
        font-weight: 800;
    }

    .titles {
        max-width: 620px;
        margin: 0 0 14px;
        color: #f7f8f2;
        font-size: clamp(1.9rem, 3vw, 2.9rem);
        font-weight: 800;
        line-height: 1.05;
    }

    .rating-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 10px;
        margin-bottom: 22px;
    }

    .stars {
        color: #ffc847;
        font-size: 1.1rem;
        letter-spacing: 0.05em;
        line-height: 1;
    }

    .stars i {
        color: #ffc847;
    }

    .reviews {
        color: #ff9d9d;
        font-weight: 600;
    }

    .price-block {
        display: flex;
        align-items: baseline;
        gap: 12px;
        margin-bottom: 18px;
    }

    .product-price {
        color: #bdf466;
        font-size: clamp(2rem, 3vw, 2.6rem);
        font-weight: 900;
    }

    .old-price {
        color: rgba(255, 255, 255, 0.4);
        font-size: 1.2rem;
        text-decoration: line-through;
    }

    .desc {
        margin-bottom: 26px;
        color: #c9d4ca;
        font-size: 1.02rem;
        line-height: 1.7;
    }

    .summary-line {
        width: min(100%, 650px);
        margin: 0 0 22px;
        border: 0;
        border-top: 1px solid rgba(255, 255, 255, 0.16);
    }

    .qty-row {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 20px;
    }

    .qty-label {
        color: #fff;
        font-weight: 700;
    }

    .qty-box {
        display: flex;
        align-items: center;
        gap: 4px;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.16);
        border-radius: 999px;
        padding: 4px;
    }

    .qty-btn {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.12);
        color: #fff;
        font-size: 1rem;
        transition: background 0.15s ease;
    }

    .qty-btn:hover {
        background: #96e00b;
        color: #102129;
    }

    .qty-number {
        min-width: 40px;
        text-align: center;
        color: #fff;
        font-weight: 800;
        font-size: 1.1rem;
    }

    .actions-row {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
    }

    .add-btn,
    .buy-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        min-height: 50px;
        border-radius: 999px;
        padding: 10px 26px;
        font-weight: 800;
        font-size: 1rem;
        flex: 1;
        min-width: 160px;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .add-btn {
        background: #96e00b;
        color: #102129;
        border: 0;
        box-shadow: 0 14px 28px rgba(150, 224, 11, 0.24);
    }

    .add-btn:hover {
        color: #102129;
        transform: translateY(-2px);
    }

    .buy-btn {
        background: linear-gradient(135deg, #2563eb, #3b82f6);
        color: #fff;
        border: 0;
        box-shadow: 0 14px 28px rgba(37, 99, 235, 0.3);
    }

    .buy-btn:hover {
        color: #fff;
        transform: translateY(-2px);
    }

    .mini-perks {
        display: flex;
        flex-wrap: wrap;
        gap: 18px;
        margin-top: 22px;
    }

    .mini-perks span {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.88rem;
        font-weight: 600;
    }

    .mini-perks i {
        color: #bdf466;
    }

    .perks-strip {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
        margin-top: 60px;
        padding: 22px;
        border-radius: 22px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02)), rgba(12, 14, 18, 0.85);
        border: 1px solid rgba(255, 255, 255, 0.12);
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(14px);
    }

    .perk {
        display: flex;
        align-items: center;
        gap: 14px;
    }

    .perk-icon {
        flex: 0 0 auto;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 52px;
        height: 52px;
        border-radius: 16px;
        background: rgba(255, 200, 71, 0.14);
        color: #ffc847;
        font-size: 1.4rem;
    }

    .perk h3 {
        margin: 0 0 3px;
        color: #fff;
        font-size: 1.05rem;
        font-weight: 800;
    }

    .perk p {
        margin: 0;
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.86rem;
    }

    @media (max-width: 991px) {
        .product-layout {
            grid-template-columns: 1fr;
        }

        .glass-img {
            min-height: 260px;
        }

        .problems {
            margin-top: 24px;
        }
    }

    @media (max-width: 768px) {
        .perks-strip {
            grid-template-columns: repeat(2, 1fr);
            margin-top: 44px;
        }
    }

    @media (max-width: 576px) {
        .detail-page {
            padding-top: 115px;
        }

        .glass-img {
            min-height: 210px;
            padding: 20px;
        }

        .actions-row .btn {
            flex-basis: 100%;
        }

        .perks-strip {
            grid-template-columns: 1fr;
            gap: 14px;
        }

        .crumb.current {
            max-width: 180px;
        }
    }
</style>