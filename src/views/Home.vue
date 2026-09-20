<template>
    <main>
        <section class="home-hero">
            <div class="container">
                <div class="row align-items-center g-4 g-lg-5">
                    <div class="col-lg-6 d-flex align-items-center justify-content-center">
                        <div class="right">
                            <span class="eyebrow" data-aos="fade-right">
                                <i class="bi bi-stars me-2"></i> Welcome to E-SHOP
                            </span>
                            <h1 data-aos="fade-right" data-aos-delay="100">
                                Your one-stop shop for <span class="accent">smart tech</span>
                            </h1>
                            <p data-aos="fade-right" data-aos-delay="200">
                                Find the best deals on the latest electronics and gadgets — curated for performance,
                                style and everyday life.
                            </p>
                            <div class="hero-actions" data-aos="fade-right" data-aos-delay="300">
                                <router-link to="/productList" class="btn shop-now">
                                    <i class="bi bi-bag-check"></i> Shop Now
                                </router-link>
                                <router-link to="/about" class="btn explore-btn">
                                    Explore Store <i class="bi bi-arrow-right"></i>
                                </router-link>
                            </div>
                            <div class="stat-row" data-aos="fade-up" data-aos-delay="350">
                                <div>
                                    <strong>26+</strong>
                                    <span>Products</span>
                                </div>
                                <div>
                                    <strong>4.8</strong>
                                    <span>Avg. rating</span>
                                </div>
                                <div>
                                    <strong>24h</strong>
                                    <span>Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 image d-flex justify-content-center justify-content-lg-end"
                        data-aos="fade-left" data-aos-delay="150">
                        <div class="hero-visual">
                            <img :src="p1" alt="Featured gadget">
                            <span class="float-chip chip-1"><i class="bi bi-lightning-charge-fill"></i> Fast ship</span>
                            <span class="float-chip chip-2"><i class="bi bi-gift"></i> -20% weekly</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="featured-section container">
            <div class="d-flex flex-wrap align-items-end justify-content-between gap-3 section-head">
                <div>
                    <span class="section-kicker">
                        <i class="bi bi-fire me-1"></i> Hot right now
                    </span>
                    <h2 class="section-title">Featured Products</h2>
                </div>
                <router-link to="/productList" class="btn view-more">
                    View all <i class="bi bi-arrow-right"></i>
                </router-link>
            </div>
            <Productcard :products="store.products.slice(0, 4)" :loading="store.loading" />
        </section>
    </main>
</template>

<script setup>
import { onMounted } from 'vue';
import Productcard from '../components/Productcard.vue';
import { useProductstore } from '../stores/ProductStore';
import p1 from '../Images/p1.png';

const store = useProductstore();

onMounted(() => {
    store.fetchProducts();
});
</script>

<style scoped>
    .home-hero {
        padding: 150px 0 60px;
        color: #fff;
    }

    .right {
        width: min(100%, 540px);
    }

    .eyebrow {
        display: inline-flex;
        align-items: center;
        padding: 7px 15px;
        border-radius: 999px;
        background: rgba(150, 224, 11, 0.14);
        color: #bdf466;
        font-size: 0.82rem;
        font-weight: 800;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        margin-bottom: 18px;
    }

    h1 {
        font-size: clamp(2.3rem, 5vw, 3.6rem);
        font-weight: 900;
        line-height: 1.05;
        margin-bottom: 18px;
    }

    .accent {
        color: #96e00b;
    }

    .right p {
        color: rgba(255, 255, 255, 0.75);
        font-size: 1.1rem;
        line-height: 1.7;
        max-width: 460px;
        font-style: italic;
    }

    .hero-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 28px;
    }

    .shop-now,
    .explore-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        min-height: 48px;
        border-radius: 999px;
        padding: 10px 22px;
        font-weight: 800;
    }

    .shop-now {
        background: #96e00b;
        color: #102129;
        border: 0;
        box-shadow: 0 18px 34px rgba(150, 224, 11, 0.24);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .shop-now:hover {
        color: #102129;
        transform: translateY(-2px);
        box-shadow: 0 22px 40px rgba(150, 224, 11, 0.32);
    }

    .explore-btn {
        color: #fff;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .explore-btn:hover {
        color: #fff;
        background: rgba(255, 255, 255, 0.14);
    }

    .stat-row {
        display: flex;
        gap: 34px;
        margin-top: 34px;
    }

    .stat-row > div {
        display: flex;
        flex-direction: column;
    }

    .stat-row strong {
        color: #bdf466;
        font-size: 1.7rem;
        font-weight: 900;
        line-height: 1;
    }

    .stat-row span {
        margin-top: 4px;
        color: rgba(255, 255, 255, 0.55);
        font-size: 0.85rem;
        font-weight: 600;
    }

    .hero-visual {
        position: relative;
        max-width: 460px;
    }

    .hero-visual img {
        width: 100%;
        max-height: 440px;
        object-fit: contain;
        filter: drop-shadow(0 30px 50px rgba(0, 0, 0, 0.4));
    }

    .float-chip {
        position: absolute;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 9px 16px;
        border-radius: 999px;
        background: rgba(20, 44, 54, 0.92);
        border: 1px solid rgba(255, 255, 255, 0.14);
        color: #fff;
        font-size: 0.85rem;
        font-weight: 700;
        box-shadow: 0 14px 30px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(8px);
    }

    .float-chip i {
        color: #bdf466;
    }

    .chip-1 {
        top: 8%;
        left: -4%;
        animation: float 4s ease-in-out infinite;
    }

    .chip-2 {
        bottom: 12%;
        right: 0;
        animation: float 4s ease-in-out 2s infinite;
    }

    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }

    .featured-section {
        padding: 40px 0 80px;
    }

    .section-head {
        margin-bottom: 34px;
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

    .section-title {
        color: #fff;
        font-weight: 900;
        font-size: clamp(1.7rem, 3vw, 2.4rem);
        margin: 6px 0 0;
    }

    .view-more {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: #bdf466;
        background: rgba(255, 255, 255, 0.08);
        font-weight: 700;
        padding: 8px 18px;
        transition: background-color 0.2s ease, transform 0.2s ease;
    }

    .view-more:hover {
        color: #bdf466;
        background: rgba(150, 224, 11, 0.14);
        border-color: rgba(150, 224, 11, 0.4);
        transform: translateY(-2px);
    }

    @media (max-width: 991px) {
        .home-hero {
            padding-top: 130px;
        }

        .right {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .right p {
            margin-left: auto;
            margin-right: auto;
        }

        .hero-actions,
        .stat-row {
            justify-content: center;
        }

        .hero-visual {
            margin-top: 10px;
        }
    }

    @media (max-width: 575px) {
        .home-hero {
            padding-top: 115px;
            padding-bottom: 30px;
        }

        .hero-actions .btn {
            width: 100%;
        }

        .stat-row {
            gap: 26px;
        }

        .float-chip {
            font-size: 0.75rem;
            padding: 7px 12px;
        }

        .chip-1 {
            left: 0;
        }

        .featured-section {
            padding-top: 20px;
        }
    }
</style>