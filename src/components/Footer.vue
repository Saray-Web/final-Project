<template>
    <footer class="footer">
        <div class="container py-5">
            <div class="row g-4 g-md-5">
                <div class="col-lg-4 col-md-6 col-12">
                    <router-link to="/" class="brand">
                        <span class="brand-mark"><i class="bi bi-shop"></i></span>
                        E-SHOP
                    </router-link>
                    <p class="footer-desc">
                        Find the best electronics and gadgets with amazing prices. Curated picks, fresh arrivals and
                        reliable support — all in one place.
                    </p>
                    <div class="d-flex gap-2">
                        <a href="#" class="social-icon" aria-label="Facebook" @click.prevent>
                            <i class="bi bi-facebook"></i>
                        </a>
                        <a href="#" class="social-icon" aria-label="Instagram" @click.prevent>
                            <i class="bi bi-instagram"></i>
                        </a>
                        <a href="#" class="social-icon" aria-label="Twitter" @click.prevent>
                            <i class="bi bi-twitter-x"></i>
                        </a>
                        <a href="#" class="social-icon" aria-label="Telegram" @click.prevent>
                            <i class="bi bi-telegram"></i>
                        </a>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6 col-6">
                    <h5 class="footer-heading"><i class="bi bi-link-45deg me-1"></i> Quick Links</h5>
                    <ul class="list-unstyled footer-list">
                        <li><router-link to="/" class="footer-link"><i class="bi bi-chevron-right"></i> Home</router-link></li>
                        <li><router-link to="/productList" class="footer-link"><i class="bi bi-chevron-right"></i> Products</router-link></li>
                        <li><router-link to="/cart" class="footer-link"><i class="bi bi-chevron-right"></i> Cart</router-link></li>
                        <li><router-link to="/about" class="footer-link"><i class="bi bi-chevron-right"></i> About</router-link></li>
                        <li><router-link to="/contact" class="footer-link"><i class="bi bi-chevron-right"></i> Contact</router-link></li>
                    </ul>
                </div>

                <div class="col-lg-3 col-md-6 col-6">
                    <h5 class="footer-heading"><i class="bi bi-collection me-1"></i> Categories</h5>
                    <ul class="list-unstyled footer-list">
                        <li><router-link to="/productList/laptop" class="footer-link"><i class="bi bi-chevron-right"></i> Laptops</router-link></li>
                        <li><router-link to="/productList/headphone" class="footer-link"><i class="bi bi-chevron-right"></i> Headphones</router-link></li>
                        <li><router-link to="/productList/controller" class="footer-link"><i class="bi bi-chevron-right"></i> Controllers</router-link></li>
                        <li><router-link to="/productList/watch" class="footer-link"><i class="bi bi-chevron-right"></i> Smart Watches</router-link></li>
                    </ul>
                </div>

                <div class="col-lg-3 col-md-6 col-12">
                    <h5 class="footer-heading"><i class="bi bi-envelope-open me-1"></i> Stay in the loop</h5>
                    <p class="footer-desc">
                        Get early access to deals and new arrivals.
                    </p>
                    <form class="newsletter" @submit.prevent="subscribe">
                        <div class="input-group">
                            <input v-model="email" type="email" class="form-control" placeholder="Your email"
                                aria-label="Email for newsletter" required>
                            <button class="btn news-btn" type="submit" aria-label="Subscribe">
                                <i class="bi bi-send-fill"></i>
                            </button>
                        </div>
                    </form>
                    <p v-if="subscribed" class="news-ok">
                        <i class="bi bi-check-circle me-1"></i> Subscribed — welcome to E-SHOP!
                    </p>
                </div>
            </div>

            <div class="footer-bottom">
                <p class="mb-0">
                    © 2026 E-SHOP — Smart Tech Store. All rights reserved.
                </p>
                <div class="footer-bottom-links">
                    <span><i class="bi bi-shield-check"></i> Secure SSL</span>
                    <span><i class="bi bi-arrow-counterclockwise"></i> 30-day returns</span>
                    <span><i class="bi bi-headset"></i> 24/7 support</span>
                </div>
                <button class="back-top" type="button" aria-label="Back to top" @click="scrollTop">
                    <i class="bi bi-arrow-up"></i>
                </button>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const subscribed = ref(false);

function subscribe() {
    if (email.value.trim()) {
        subscribed.value = true;
        email.value = '';
        setTimeout(() => (subscribed.value = false), 4000);
    }
}

function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<style scoped>
    .footer {
        background: linear-gradient(180deg, #0a1a22 0%, #07171d 100%);
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        position: relative;
        margin-top: 5rem;
    }

    .brand {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        color: #96e00b;
        font-size: 1.5rem;
        font-weight: 900;
        text-decoration: none;
        letter-spacing: 0;
    }

    .brand-mark {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 42px;
        height: 42px;
        border-radius: 13px;
        background: rgba(150, 224, 11, 0.16);
        color: #b9f15a;
        font-size: 1.25rem;
    }

    .footer-desc {
        margin-top: 16px;
        color: rgba(255, 255, 255, 0.55);
        font-size: 0.95rem;
        line-height: 1.7;
        max-width: 320px;
    }

    .footer-heading {
        color: #fff;
        font-weight: 800;
        margin-bottom: 18px;
    }

    .footer-list {
        margin: 0;
    }

    .footer-link {
        display: flex;
        align-items: center;
        gap: 6px;
        color: rgba(255, 255, 255, 0.62);
        text-decoration: none;
        line-height: 2.3;
        font-size: 0.95rem;
        transition: color 0.2s ease, transform 0.2s ease;
    }

    .footer-link i {
        font-size: 0.7rem;
        color: #96e00b;
        transition: transform 0.2s ease;
    }

    .footer-link:hover {
        color: #bdf466;
        transform: translateX(4px);
    }

    .social-icon {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.12);
        color: #fff;
        text-decoration: none;
        font-size: 1.15rem;
        transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
    }

    .social-icon:hover {
        background: #96e00b;
        color: #102129;
        transform: translateY(-4px);
    }

    .newsletter {
        display: flex;
        gap: 8px;
        max-width: 300px;
    }

    .newsletter .form-control {
        min-height: 46px;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, 0.16);
        background: rgba(255, 255, 255, 0.07);
        color: #fff;
        padding-left: 18px;
    }

    .newsletter .form-control:focus {
        border-color: #96e00b;
        background: rgba(255, 255, 255, 0.12);
        color: #fff;
        box-shadow: 0 0 0 3px rgba(150, 224, 11, 0.2);
    }

    .newsletter .form-control::placeholder {
        color: rgba(255, 255, 255, 0.45);
    }

    .news-btn {
        min-height: 46px;
        min-width: 48px;
        border-radius: 999px !important;
        background: #96e00b;
        color: #102129;
        font-weight: 800;
        border: 0;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .news-btn:hover {
        color: #102129;
        transform: translateX(2px);
        box-shadow: 0 10px 22px rgba(150, 224, 11, 0.3);
    }

    .news-ok {
        margin-top: 12px;
        color: #bdf466;
        font-size: 0.9rem;
        font-weight: 600;
    }

    .footer-bottom {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 14px;
        margin-top: 42px;
        padding-top: 22px;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.88rem;
        position: relative;
    }

    .footer-bottom-links {
        display: flex;
        flex-wrap: wrap;
        gap: 18px;
    }

    .footer-bottom-links span {
        display: inline-flex;
        align-items: center;
        gap: 5px;
    }

    .footer-bottom-links i {
        color: #bdf466;
    }

    .back-top {
        margin-left: auto;
        width: 46px;
        height: 46px;
        border-radius: 50%;
        border: 1px solid rgba(150, 224, 11, 0.4);
        background: rgba(150, 224, 11, 0.14);
        color: #bdf466;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s ease, transform 0.2s ease;
    }

    .back-top:hover {
        background: #96e00b;
        color: #102129;
        transform: translateY(-3px);
    }

    @media (max-width: 575px) {
        .footer {
            padding-bottom: 1rem;
        }

        .footer-bottom {
            justify-content: center;
            text-align: center;
        }

        .back-top {
            margin-left: 0;
            width: 40px;
            height: 40px;
        }
    }
</style>