<template>
    <main class="hero-section">
        <div class="container">
            <div class="row align-items-center g-4">
                <div class="col-lg-5">
                    <div class="hero-copy">
                        <span class="hero-kicker">Smart tech store</span>
                        <h1>Upgrade your everyday devices.</h1>
                        <p>Shop curated electronics, fresh gadgets, and limited promos in one clean experience.</p>
                        <div class="hero-actions">
                            <router-link to="/productList" class="btn hero-btn">
                                <i class="bi bi-bag-check"></i>
                                Shop Now
                            </router-link>
                            <router-link to="/about" class="btn hero-link">Explore</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div id="heroCarousel" class="carousel slide hero-carousel" data-bs-ride="carousel" data-bs-interval="3000" delay="100">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img :src="h1" alt="Featured electronics promotion" class="hero-img">
                        </div>
                        <div class="carousel-item">
                            <img :src="h2" alt="Gadget sale promotion" class="hero-img">
                        </div>
                        <div class="carousel-item">
                            <img :src="h3" alt="New tech arrivals promotion" class="hero-img">
                        </div>
                        <div class="carousel-item">
                            <img :src="h4" alt="Shopping deal promotion" class="hero-img">
                        </div>
                    </div>
                    <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#heroCarousel"
                        data-bs-slide="prev"> 
                        <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#heroCarousel"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
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
</script>

<style scoped>
    .hero-section{
        padding: 7.5rem 0 3rem;
        color: #ffffff;
    }

    .hero-copy{
        max-width: 520px;
    }

    .hero-kicker{
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

    .hero-copy h1{
        margin: 18px 0 16px;
        font-size: 3.3rem;
        font-weight: 900;
        line-height: 1.02;
    }

    .hero-copy p{
        margin: 0;
        color: rgba(255, 255, 255, 0.78);
        font-size: 1.1rem;
        line-height: 1.7;
    }

    .hero-actions{
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 28px;
    }

    .hero-btn,
    .hero-link{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        min-height: 48px;
        border-radius: 999px;
        padding: 10px 22px;
        font-weight: 800;
    }

    .hero-btn{
        background: #96e00b;
        color: #102129;
        border: 0;
        box-shadow: 0 18px 32px rgba(150, 224, 11, 0.22);
    }

    .hero-link{
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.22);
        background: rgba(255, 255, 255, 0.08);
    }

    .hero-carousel{
        overflow: hidden;
        border-radius: 28px;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.16);
        box-shadow: 0 30px 80px rgba(0, 0, 0, 0.28);
    }

    .carousel-inner,
    .carousel-item{
        aspect-ratio: 16 / 9;
    }

    .hero-img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .carousel-indicators{
        margin-bottom: 14px;
    }

    .carousel-indicators [data-bs-target]{
        width: 9px;
        height: 9px;
        border-radius: 999px;
        border: 0;
    }

    @media (max-width: 991px){
        .hero-section{
            padding-top: 6.5rem;
            text-align: center;
        }

        .hero-copy{
            margin: 0 auto;
        }

        .hero-copy h1{
            font-size: 2.45rem;
        }

        .hero-actions{
            justify-content: center;
        }
    }

    @media (max-width: 575px){
        .hero-section{
            padding-top: 5.75rem;
            padding-bottom: 2rem;
        }

        .hero-copy h1{
            font-size: 2rem;
        }

        .hero-copy p{
            font-size: 1rem;
        }

        .hero-actions .btn{
            width: 100%;
        }

        .hero-btn,
        .hero-link{
            min-height: 44px;
        }

        .hero-carousel{
            border-radius: 18px;
        }

        .carousel-control-prev,
        .carousel-control-next{
            width: 34px;
            height: 34px;
            border-radius: 50%;
            background: rgba(15, 32, 39, 0.45);
            opacity: 1;
        }

        .carousel-control-prev{
            left: 8px;
        }

        .carousel-control-next{
            right: 8px;
        }

        .carousel-control-prev-icon,
        .carousel-control-next-icon{
            width: 16px;
            height: 16px;
        }

        .carousel-indicators{
            margin-bottom: 8px;
        }
    }
</style>
