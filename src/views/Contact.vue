<template>
    <main class="contact-page">
        <section class="container">
            <div class="row g-4 g-lg-5 align-items-stretch">
                <div class="col-lg-5">
                    <div class="contact-info">
                        <span class="eyebrow">Contact E-SHOP</span>
                        <h1>Need help choosing gear?</h1>
                        <p>
                            Send us a message about products, delivery, returns, or anything you want to check before buying.
                        </p>

                        <div class="contact-list">
                            <a href="mailto:sarayneang271@email.com" class="contact-item">
                                <i class="bi bi-envelope"></i>
                                <div>
                                    <span>Email</span>
                                    <strong>sarayneang271@email.com</strong>
                                </div>
                            </a>
                            <a href="tel:+855 712794004" class="contact-item">
                                <i class="bi bi-telephone"></i>
                                <div>
                                    <span>Phone</span>
                                    <strong>+855 712 740 04</strong>
                                </div>
                            </a>
                            <a href="https://t.me/Sarayzz" class="contact-item" target="_blank">
                                <i class="bi bi-telegram"></i>
                                <div>
                                    <span>Telegram</span>
                                    <strong>Sarayzz Genz IT</strong>
                                </div>
                            </a>
                            <div class="contact-item">
                                <i class="bi bi-geo-alt"></i>
                                <div>
                                    <span>Store</span>
                                    <strong>Phnom Penh, Cambodia</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-7">
                    <form class="contact-form">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label for="name" class="form-label">Name</label>
                                <input id="name" type="text" class="form-control" placeholder="Your name">
                            </div>
                            <div class="col-md-6">
                                <label for="email" class="form-label">Email</label>
                                <input id="email" type="email" class="form-control" placeholder="your@email.com">
                            </div>
                            <div class="col-12">
                                <label for="subject" class="form-label">Subject</label>
                                <input id="subject" type="text" class="form-control" placeholder="How can we help?">
                            </div>
                            <div class="col-12">
                                <label for="message" class="form-label">Message</label>
                                <textarea id="message" class="form-control" rows="6" placeholder="Write your message"></textarea>
                            </div>
                            <div class="col-12">
                                <button type="button" class="btn send-btn">
                                    <i class="bi bi-send"></i>
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
</script>

<style scoped>
    .contact-page{
        padding: 150px 0 90px;
        color: #f7f8f2;
    }

    .contact-info,
    .contact-form{
        height: 100%;
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 26px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.03)), rgba(12, 14, 18, 0.72);
        box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
        backdrop-filter: blur(14px);
    }

    .contact-info{
        padding: clamp(24px, 4vw, 42px);
    }

    .contact-form{
        padding: clamp(22px, 4vw, 38px);
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

    .contact-info h1{
        margin-bottom: 18px;
        font-size: clamp(2.2rem, 5vw, 4.5rem);
        font-weight: 900;
        line-height: 1;
    }

    .contact-info p{
        color: rgba(255, 255, 255, 0.76);
        font-size: 1.08rem;
        line-height: 1.75;
    }

    .contact-list{
        display: grid;
        gap: 14px;
        margin-top: 34px;
    }

    .contact-item{
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 16px;
        border-radius: 18px;
        color: #ffffff;
        text-decoration: none;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.12);
    }

    .contact-item i{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 42px;
        width: 42px;
        height: 42px;
        border-radius: 14px;
        background: rgba(150, 224, 11, 0.14);
        color: #b9f15a;
        font-size: 1.25rem;
    }

    .contact-item span{
        display: block;
        color: rgba(255, 255, 255, 0.58);
        font-size: 0.86rem;
        font-weight: 700;
    }

    .contact-item strong{
        font-size: 1rem;
    }

    .form-label{
        color: #ffffff;
        font-weight: 700;
    }

    .form-control{
        min-height: 48px;
        border-radius: 16px;
        border: 1px solid rgba(255, 255, 255, 0.16);
        background: rgba(255, 255, 255, 0.09);
        color: #ffffff;
        box-shadow: none;
    }

    textarea.form-control{
        min-height: 160px;
        resize: vertical;
    }

    .form-control::placeholder{
        color: rgba(255, 255, 255, 0.46);
    }

    .form-control:focus{
        border-color: rgba(150, 224, 11, 0.72);
        background: rgba(255, 255, 255, 0.13);
        color: #ffffff;
    }

    .send-btn{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        min-height: 48px;
        border: 0;
        border-radius: 999px;
        padding: 10px 24px;
        background: #96e00b;
        color: #102129;
        font-weight: 900;
    }

    @media (max-width: 768px){
        .contact-page{
            padding-top: 125px;
        }

        .send-btn{
            width: 100%;
        }
    }

    @media (max-width: 576px){
        .contact-info,
        .contact-form{
            border-radius: 20px;
        }

        .contact-item{
            align-items: flex-start;
        }
    }
</style>
