<template>
    <main class="about-page">
        <section class="container">
            <div class="row align-items-center g-4 g-lg-5">
                <div class="col-lg-6">
                    <div class="about-copy">
                        <span class="eyebrow" data-aos="fade-right">
                            <i class="bi bi-award"></i> About E-SHOP
                        </span>
                        <h1 data-aos="fade-up" data-aos-delay="100">Smart gear, simple shopping.</h1>
                        <p data-aos="fade-up" data-aos-delay="200">
                            We bring together everyday tech, gaming accessories, audio gear, and wearable essentials in
                            one clean store experience.
                        </p>
                        <div class="about-actions" data-aos="fade-up" data-aos-delay="300">
                            <router-link to="/productList" class="btn shop-btn">
                                <i class="bi bi-bag-check"></i> Shop Products
                            </router-link>
                            <router-link to="/contact" class="btn outline-btn">
                                <i class="bi bi-chat-dots"></i> Contact Us
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6" data-aos="fade-left" data-aos-delay="150">
                    <div class="showcase-panel">
                        <div class="stat-card bordered">
                            <span>26+</span>
                            <p>Curated products</p>
                        </div>
                        <div class="stat-card bordered">
                            <span>4.8<i class="bi bi-star-fill"></i></span>
                            <p>Average rating</p>
                        </div>
                        <div class="stat-card wide bordered">
                            <i class="bi bi-shield-check"></i>
                            <div>
                                <h3>Trusted checkout</h3>
                                <p>Secure shopping with clear delivery and return support.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="container values-section">
            <div class="section-head">
                <span class="section-kicker"><i class="bi bi-heart-fill me-1"></i> Why shop with us</span>
                <h2>Our Values</h2>
            </div>
            <div class="row g-3 g-md-4">
                <div v-for="value in values" :key="value.title" class="col-md-4" data-aos="fade-up" data-aos-delay="100">
                    <article class="value-card">
                        <div class="value-icon"><i :class="value.icon"></i></div>
                        <h3>{{ value.title }}</h3>
                        <p>{{ value.text }}</p>
                    </article>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
const values = [
    {
        icon: 'bi-stars',
        title: 'Quality First',
        text: 'Products are selected for useful features, clean design, and reliable everyday performance.',
    },
    {
        icon: 'bi-truck',
        title: 'Easy Delivery',
        text: 'Clear shipping options help you get your order without confusion or unnecessary waiting.',
    },
    {
        icon: 'bi-arrow-counterclockwise',
        title: 'Simple Returns',
        text: 'Need to change your mind? Our return process is designed to stay quick and friendly.',
    },
];
</script>

<style scoped>
    .about-page {
        padding: 150px 0 90px;
        color: #f7f8f2;
    }

    .about-copy {
        max-width: 620px;
    }

    .eyebrow,
    .section-kicker {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 16px;
        padding: 7px 14px;
        border-radius: 999px;
        background: rgba(150, 224, 11, 0.12);
        color: #b9f15a;
        font-size: 0.8rem;
        font-weight: 800;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    .eyebrow i,
    .section-kicker i {
        flex: 0 0 auto;
        font-size: 0.95rem;
        line-height: 1;
        letter-spacing: 0;
    }

    .about-copy h1 {
        margin-bottom: 18px;
        font-size: clamp(2.4rem, 6vw, 5rem);
        font-weight: 900;
        line-height: 0.98;
    }

    .about-copy p {
        max-width: 560px;
        color: rgba(255, 255, 255, 0.78);
        font-size: 1.15rem;
        line-height: 1.8;
    }

    .about-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 28px;
    }

    .shop-btn,
    .outline-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        min-height: 46px;
        border-radius: 999px;
        padding: 10px 20px;
        font-weight: 800;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .shop-btn {
        background: #96e00b;
        color: #102129;
    }

    .shop-btn:hover {
        color: #102129;
        transform: translateY(-2px);
        box-shadow: 0 16px 30px rgba(150, 224, 11, 0.3);
    }

    .outline-btn {
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: #ffffff;
        background: rgba(255, 255, 255, 0.08);
    }

    .outline-btn:hover {
        color: #fff;
        background: rgba(255, 255, 255, 0.14);
    }

    .showcase-panel {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;
        padding: 24px;
        border-radius: 26px;
        border: 1px solid rgba(255, 255, 255, 0.12);
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.03)), rgba(12, 14, 18, 0.72);
        box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
    }

    .bordered,
    .value-card {
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.12);
        background: rgba(255, 255, 255, 0.08);
    }

    .stat-card {
        padding: 24px;
    }

    .stat-card span {
        color: #96e00b;
        font-size: 2.2rem;
        font-weight: 900;
        display: inline-flex;
        align-items: center;
        gap: 6px;
    }

    .stat-card span i {
        color: #ffc847;
        font-size: 1.2rem;
    }

    .stat-card p {
        margin: 8px 0 0;
        color: rgba(255, 255, 255, 0.76);
    }

    .stat-card.wide {
        grid-column: 1 / -1;
        display: flex;
        gap: 18px;
        align-items: center;
        background: rgba(255, 200, 71, 0.06);
    }

    .stat-card.wide i,
    .value-icon {
        color: #ffc847;
        font-size: 2rem;
    }

    .stat-card h3,
    .value-card h3 {
        margin-bottom: 8px;
        color: #ffffff;
        font-size: 1.3rem;
        font-weight: 800;
    }

    .values-section {
        margin-top: 70px;
    }

    .section-head {
        text-align: center;
        margin-bottom: 34px;
    }

    .section-head h2 {
        color: #fff;
        font-weight: 900;
        font-size: clamp(1.8rem, 4vw, 2.6rem);
    }

    .value-card {
        height: 100%;
        padding: 28px;
        background: rgba(12, 14, 18, 0.86);
        box-shadow: 0 18px 42px rgba(0, 0, 0, 0.22);
        transition: transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease;
    }

    .value-card:hover {
        transform: translateY(-6px);
        border-color: rgba(150, 224, 11, 0.45);
        background: rgba(18, 32, 38, 0.92);
    }

    .value-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 58px;
        height: 58px;
        border-radius: 16px;
        background: rgba(255, 200, 71, 0.14);
        margin-bottom: 18px;
    }

    .value-card p {
        margin: 0;
        color: rgba(255, 255, 255, 0.86);
        line-height: 1.7;
    }

    @media (max-width: 768px) {
        .about-page {
            padding-top: 125px;
        }

        .about-actions {
            flex-direction: column;
        }

        .shop-btn,
        .outline-btn {
            width: 100%;
        }
    }

    @media (max-width: 576px) {
        .showcase-panel {
            grid-template-columns: 1fr;
            padding: 16px;
            border-radius: 20px;
        }

        .stat-card.wide {
            grid-column: auto;
            align-items: flex-start;
        }
    }
</style>