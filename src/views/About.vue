<template>
    <main class="about-page">
        <section class="container">
            <div class="row align-items-center g-4 g-lg-5">
                <div class="col-lg-6">
                    <div class="about-copy">
                        <span class="eyebrow">About E-SHOP</span>
                        <h1>Smart gear, simple shopping.</h1>
                        <p>
                            We bring together everyday tech, gaming accessories, audio gear, and wearable essentials in one clean store experience.
                        </p>
                        <div class="about-actions">
                            <router-link to="/productList" class="btn shop-btn">
                                <i class="bi bi-bag-check"></i>
                                Shop Products
                            </router-link>
                            <router-link to="/contact" class="btn outline-btn">
                                <i class="bi bi-chat-dots"></i>
                                Contact Us
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="showcase-panel">
                        <div class="stat-card">
                            <span>250+</span>
                            <p>Curated products</p>
                        </div>
                        <div class="stat-card">
                            <span>24h</span>
                            <p>Fast support</p>
                        </div>
                        <div class="stat-card wide">
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
            <div class="row g-3 g-md-4">
                <div class="col-md-4">
                    <article class="value-card">
                        <i class="bi bi-stars"></i>
                        <h3>Quality First</h3>
                        <p>Products are selected for useful features, clean design, and reliable everyday performance.</p>
                    </article>
                </div>
                <div class="col-md-4">
                    <article class="value-card">
                        <i class="bi bi-truck"></i>
                        <h3>Easy Delivery</h3>
                        <p>Clear shipping options help you get your order without confusion or unnecessary waiting.</p>
                    </article>
                </div>
                <div class="col-md-4">
                    <article class="value-card">
                        <i class="bi bi-arrow-counterclockwise"></i>
                        <h3>Simple Returns</h3>
                        <p>Need to change your mind? Our return process is designed to stay quick and friendly.</p>
                    </article>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
</script>

<style scoped>
    .about-page{
        padding: 150px 0 90px;
        color: #f7f8f2;
    }

    .about-copy{
        max-width: 620px;
    }

    .eyebrow{
        display: inline-flex;
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

    .about-copy h1{
        margin-bottom: 18px;
        font-size: clamp(2.4rem, 6vw, 5.2rem);
        font-weight: 900;
        line-height: 0.98;
    }

    .about-copy p{
        max-width: 560px;
        color: rgba(255, 255, 255, 0.78);
        font-size: 1.15rem;
        line-height: 1.8;
    }

    .about-actions{
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 28px;
    }

    .shop-btn,
    .outline-btn{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        min-height: 46px;
        border-radius: 999px;
        padding: 10px 20px;
        font-weight: 800;
    }

    .shop-btn{
        background: #96e00b;
        color: #102129;
    }

    .outline-btn{
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: #ffffff;
        background: rgba(255, 255, 255, 0.08);
    }

    .showcase-panel{
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;
        padding: 24px;
        border-radius: 26px;
        border: 1px solid rgba(255, 255, 255, 0.12);
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.03)), rgba(12, 14, 18, 0.72);
        box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
        backdrop-filter: blur(14px);
    }

    .stat-card,
    .value-card{
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.12);
        background: rgba(255, 255, 255, 0.08);
    }

    .stat-card{
        padding: 24px;
    }

    .stat-card span{
        color: #96e00b;
        font-size: 2.6rem;
        font-weight: 900;
    }

    .stat-card p{
        margin: 8px 0 0;
        color: rgba(255, 255, 255, 0.76);
    }

    .stat-card.wide{
        grid-column: 1 / -1;
        display: flex;
        gap: 18px;
        align-items: center;
    }

    .stat-card.wide i,
    .value-card i{
        color: #ffc847;
        font-size: 2rem;
    }

    .stat-card h3,
    .value-card h3{
        margin-bottom: 8px;
        color: #ffffff;
        font-size: 1.3rem;
        font-weight: 800;
    }

    .values-section{
        margin-top: 70px;
    }

    .value-card{
        height: 100%;
        padding: 26px;
        background: rgba(12, 14, 18, 0.86);
        box-shadow: 0 18px 42px rgba(0, 0, 0, 0.22);
    }

    .value-card p{
        margin: 0;
        color: rgba(255, 255, 255, 0.86);
        line-height: 1.7;
    }

    @media (max-width: 768px){
        .about-page{
            padding-top: 125px;
        }

        .about-actions{
            flex-direction: column;
        }

        .shop-btn,
        .outline-btn{
            width: 100%;
        }
    }

    @media (max-width: 576px){
        .showcase-panel{
            grid-template-columns: 1fr;
            padding: 16px;
            border-radius: 20px;
        }

        .stat-card.wide{
            grid-column: auto;
            align-items: flex-start;
        }
    }
</style>
