<template>
    <main class="hero-section">
        <div class="container">
            <div class="row align-items-center g-4 g-lg-5">
                <div class="col-lg-5">
                    <div class="hero-copy">
                        <span class="hero-kicker" data-aos="fade-right">
                            <i class="bi bi-lightning-charge-fill me-2"></i> Smart tech store
                        </span>
                        <h1 data-aos="fade-up" data-aos-delay="100">Upgrade your everyday devices.</h1>
                        <p data-aos="fade-up" data-aos-delay="200">
                            Shop curated electronics, fresh gadgets, and limited promos in one clean experience.
                        </p>
                        <div class="hero-actions" data-aos="fade-up" data-aos-delay="300">
                            <router-link to="/productList" class="btn hero-btn">
                                <i class="bi bi-bag-check"></i> Shop Now
                            </router-link>
                            <router-link to="/about" class="btn hero-link">
                                Explore <i class="bi bi-arrow-right"></i>
                            </router-link>
                        </div>
                        <div class="hero-reassurance" data-aos="fade-up" data-aos-delay="400">
                            <span><i class="bi bi-truck"></i> Free shipping over $50</span>
                            <span><i class="bi bi-shield-check"></i> Secure checkout</span>
                            <span><i class="bi bi-arrow-counterclockwise"></i> 30-day returns</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7" data-aos="fade-left" data-aos-delay="150">
                    <div id="heroCarousel" class="carousel slide hero-carousel" data-bs-ride="carousel"
                        data-bs-interval="3000" delay="100">
                        <div class="carousel-indicators">
                            <button v-for="(img, i) in heroImages" :key="i" type="button"
                                data-bs-target="#heroCarousel" :data-bs-slide-to="i"
                                :class="{ active: i === 0 }" :aria-current="i === 0 ? 'true' : null"
                                :aria-label="`Slide ${i + 1}`"></button>
                        </div>
                        <div class="carousel-inner">
                            <div v-for="(img, i) in heroImages" :key="i" class="carousel-item"
                                :class="{ active: i === 0 }">
                                <img :src="img" alt="E-SHOP promotion banner" class="hero-img">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel"
                            data-bs-slide="prev" aria-label="Previous slide">
                            <i class="bi bi-chevron-left carousel-arrow"></i>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel"
                            data-bs-slide="next" aria-label="Next slide">
                            <i class="bi bi-chevron-right carousel-arrow"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import h1 from "../Images/hero1.png";
import h2 from "../Images/hero2.png";
import h3 from "../Images/hero3.png";
import h4 from "../Images/hero4.png";

const heroImages = [h1, h2, h3, h4];
</script>

<style scoped>
    .hero-section {
        padding: 7.5rem 0 3rem;
        color: #ffffff;
    }

    .hero-copy {
        max-width: 540px;
    }

    .hero-kicker {
        display: inline-flex;
        align-items: center;
        min-height: 32px;
        padding: 5px 14px;
        border-radius: 999px;
        background: rgba(150, 224, 11, 0.16);
        color: #bdf466;
        font-size: 0.8rem;
        font-weight: 800;
        letter-spacing: 0;
        text-transform: uppercase;
    }

    .hero-copy h1 {
        margin: 18px 0 16px;
        font-size: clamp(2.6rem, 5vw, 3.5rem);
        font-weight: 900;
        line-height: 1.02;
    }

    .hero-copy p {
        margin: 0;
        color: rgba(255, 255, 255, 0.78);
        font-size: 1.1rem;
        line-height: 1.7;
    }

    .hero-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 28px;
    }

    .hero-btn,
    .hero-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        min-height: 48px;
        border-radius: 999px;
        padding: 10px 22px;
        font-weight: 800;
    }

    .hero-btn {
        background: #96e00b;
        color: #102129;
        border: 0;
        box-shadow: 0 18px 32px rgba(150, 224, 11, 0.22);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .hero-btn:hover {
        color: #102129;
        transform: translateY(-2px);
        box-shadow: 0 22px 40px rgba(150, 224, 11, 0.3);
    }

    .hero-link {
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.22);
        background: rgba(255, 255, 255, 0.08);
    }

    .hero-link:hover {
        color: #fff;
        background: rgba(255, 255, 255, 0.14);
    }

    .hero-reassurance {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        margin-top: 26px;
        padding-top: 22px;
        border-top: 1px solid rgba(255, 255, 255, 0.14);
    }

    .hero-reassurance span {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        color: rgba(255, 255, 255, 0.66);
        font-size: 0.88rem;
        font-weight: 600;
    }

    .hero-reassurance i {
        color: #bdf466;
        font-size: 1.05rem;
    }

    .hero-carousel {
        overflow: hidden;
        border-radius: 28px;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.16);
        box-shadow: 0 30px 80px rgba(0, 0, 0, 0.28);
    }

    .carousel-inner,
    .carousel-item {
        aspect-ratio: 16 / 9;
    }

    .hero-img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .carousel-indicators {
        margin-bottom: 14px;
    }

    .carousel-indicators [data-bs-target] {
        width: 9px;
        height: 9px;
        border-radius: 999px;
        border: 0;
    }

    .carousel-control-prev,
    .carousel-control-next {
        width: 44px;
        height: 44px;
        top: 50%;
        transform: translateY(-50%);
        bottom: auto;
        margin: auto 14px;
        border-radius: 50%;
        background: rgba(15, 32, 39, 0.55);
        opacity: 1;
        border: 1px solid rgba(255, 255, 255, 0.2);
        transition: background-color 0.2s ease;
    }

    .carousel-control-prev:hover,
    .carousel-control-next:hover {
        background: rgba(150, 224, 11, 0.8);
    }

    .carousel-arrow {
        font-size: 1.6rem;
        color: #fff;
    }

    @media (max-width: 991px) {
        .hero-section {
            padding-top: 6.5rem;
            text-align: center;
        }

        .hero-copy {
            margin: 0 auto;
        }

        .hero-actions,
        .hero-reassurance {
            justify-content: center;
        }
    }

    @media (max-width: 575px) {
        .hero-section {
            padding-top: 5.75rem;
            padding-bottom: 2rem;
        }

        .hero-copy p {
            font-size: 1rem;
        }

        .hero-actions .btn {
            width: 100%;
        }

        .hero-btn,
        .hero-link {
            min-height: 44px;
        }

        .hero-reassurance {
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }

        .hero-carousel {
            border-radius: 18px;
        }

        .carousel-control-prev,
        .carousel-control-next {
            width: 34px;
            height: 34px;
            margin: auto 8px;
        }

        .carousel-arrow {
            font-size: 1.2rem;
        }
    }
</style>