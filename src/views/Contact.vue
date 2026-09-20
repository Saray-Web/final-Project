<template>
    <main class="contact-page">
        <section class="container">
            <div class="row g-4 g-lg-5 align-items-stretch">
                <div class="col-lg-5">
                    <div class="contact-info">
                        <span class="eyebrow" data-aos="fade-right">
                            <i class="bi bi-chat-heart"></i> Contact E-SHOP
                        </span>
                        <h1 data-aos="fade-up" data-aos-delay="100">Need help choosing gear?</h1>
                        <p data-aos="fade-up" data-aos-delay="200">
                            Send us a message about products, delivery, returns, or anything you want to check before buying.
                        </p>

                        <div class="contact-list" data-aos="fade-up" data-aos-delay="250">
                            <a href="mailto:sarayneang271@email.com" class="contact-item">
                                <span class="contact-icon"><i class="bi bi-envelope"></i></span>
                                <div>
                                    <span>Email</span>
                                    <strong>sarayneang271@email.com</strong>
                                </div>
                            </a>
                            <a href="tel:+85571274004" class="contact-item">
                                <span class="contact-icon"><i class="bi bi-telephone"></i></span>
                                <div>
                                    <span>Phone</span>
                                    <strong>+855 712 740 04</strong>
                                </div>
                            </a>
                            <a href="https://t.me/Sarayzz" class="contact-item" target="_blank" rel="noopener">
                                <span class="contact-icon"><i class="bi bi-telegram"></i></span>
                                <div>
                                    <span>Telegram</span>
                                    <strong>Sarayzz Genz IT</strong>
                                </div>
                            </a>
                            <div class="contact-item">
                                <span class="contact-icon"><i class="bi bi-geo-alt"></i></span>
                                <div>
                                    <span>Store</span>
                                    <strong>Phnom Penh, Cambodia</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-7">
                    <form class="contact-form" novalidate @submit.prevent="submitForm">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label for="name" class="form-label">Name</label>
                                <input id="name" v-model.trim="form.name" type="text" class="form-control"
                                    :class="{ 'is-invalid': errors.name }" placeholder="Your name">
                                <div v-if="errors.name" class="invalid-feedback">{{ errors.name }}</div>
                            </div>
                            <div class="col-md-6">
                                <label for="email" class="form-label">Email</label>
                                <input id="email" v-model.trim="form.email" type="email" class="form-control"
                                    :class="{ 'is-invalid': errors.email }" placeholder="your@email.com">
                                <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
                            </div>
                            <div class="col-12">
                                <label for="subject" class="form-label">Subject</label>
                                <input id="subject" v-model.trim="form.subject" type="text" class="form-control"
                                    :class="{ 'is-invalid': errors.subject }" placeholder="How can we help?">
                                <div v-if="errors.subject" class="invalid-feedback">{{ errors.subject }}</div>
                            </div>
                            <div class="col-12">
                                <label for="message" class="form-label">Message</label>
                                <textarea id="message" v-model.trim="form.message" class="form-control" rows="6"
                                    :class="{ 'is-invalid': errors.message }" placeholder="Write your message"></textarea>
                                <div v-if="errors.message" class="invalid-feedback">{{ errors.message }}</div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn send-btn" :disabled="sending">
                                    <span v-if="sending" class="spinner-border spinner-border-sm me-2"></span>
                                    <i v-else class="bi bi-send"></i>
                                    {{ sending ? 'Sending...' : 'Send Message' }}
                                </button>
                            </div>
                            <transition name="fade">
                                <div v-if="sent" class="alert sent-alert">
                                    <i class="bi bi-check-circle-fill me-2"></i>
                                    Thanks {{ form.name || 'there' }}! Your message has been received. We'll reply shortly.
                                </div>
                            </transition>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { reactive, ref } from 'vue';

const form = reactive({ name: '', email: '', subject: '', message: '' });
const errors = reactive({});
const sending = ref(false);
const sent = ref(false);

function validate() {
    errors.name = form.name ? '' : 'Please enter your name.';
    errors.subject = form.subject ? '' : 'Please add a subject.';
    errors.message = form.message ? '' : 'Please write a message.';
    errors.email = '';
    if (!form.email) {
        errors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errors.email = 'Please enter a valid email address.';
    }
    return !Object.values(errors).some(Boolean);
}

function submitForm() {
    sent.value = false;
    if (!validate()) return;
    sending.value = true;
    setTimeout(() => {
        sending.value = false;
        sent.value = true;
        Object.assign(form, { name: '', email: '', subject: '', message: '' });
        setTimeout(() => (sent.value = false), 6000);
    }, 900);
}
</script>

<style scoped>
    .contact-page {
        padding: 150px 0 90px;
        color: #f7f8f2;
    }

    .contact-info,
    .contact-form {
        height: 100%;
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 26px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.03)), rgba(12, 14, 18, 0.72);
        box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
    }

    .contact-info {
        padding: clamp(24px, 4vw, 42px);
    }

    .contact-form {
        padding: clamp(22px, 4vw, 38px);
    }

    .eyebrow {
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

    .eyebrow i {
        flex: 0 0 auto;
        font-size: 0.95rem;
        line-height: 1;
        letter-spacing: 0;
    }

    .contact-info h1 {
        margin-bottom: 18px;
        font-size: clamp(2.2rem, 5vw, 4.2rem);
        font-weight: 900;
        line-height: 1;
    }

    .contact-info p {
        color: rgba(255, 255, 255, 0.76);
        font-size: 1.08rem;
        line-height: 1.75;
    }

    .contact-list {
        display: grid;
        gap: 14px;
        margin-top: 34px;
    }

    .contact-item {
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 14px 16px;
        border-radius: 18px;
        color: #ffffff;
        text-decoration: none;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.12);
        transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
    }

    .contact-item:hover {
        border-color: rgba(150, 224, 11, 0.5);
        background: rgba(150, 224, 11, 0.08);
        transform: translateX(4px);
    }

    .contact-icon {
        flex: 0 0 44px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        border-radius: 14px;
        background: rgba(150, 224, 11, 0.14);
        color: #b9f15a;
        font-size: 1.25rem;
        line-height: 1;
    }

    .contact-item > div span {
        display: block;
        color: rgba(255, 255, 255, 0.58);
        font-size: 0.86rem;
        font-weight: 700;
    }

    .contact-item strong {
        font-size: 1rem;
    }

    .form-label {
        color: #ffffff;
        font-weight: 700;
    }

    .form-control {
        min-height: 48px;
        border-radius: 16px;
        border: 1px solid rgba(255, 255, 255, 0.16);
        background: rgba(255, 255, 255, 0.09);
        color: #ffffff;
        box-shadow: none;
    }

    textarea.form-control {
        min-height: 160px;
        resize: vertical;
    }

    .form-control::placeholder {
        color: rgba(255, 255, 255, 0.46);
    }

    .form-control:focus {
        border-color: rgba(150, 224, 11, 0.72);
        background: rgba(255, 255, 255, 0.13);
        color: #ffffff;
        box-shadow: 0 0 0 3px rgba(150, 224, 11, 0.2);
    }

    .invalid-feedback {
        color: #ff9d9d;
    }

    .send-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        min-height: 48px;
        border: 0;
        border-radius: 999px;
        padding: 10px 26px;
        background: #96e00b;
        color: #102129;
        font-weight: 900;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .send-btn:hover:not(:disabled) {
        color: #102129;
        transform: translateY(-2px);
        box-shadow: 0 16px 30px rgba(150, 224, 11, 0.3);
    }

    .send-btn:disabled {
        opacity: 0.8;
    }

    .sent-alert {
        border: 1px solid rgba(150, 224, 11, 0.4);
        background: rgba(150, 224, 11, 0.12);
        color: #d6ff9a;
        border-radius: 16px;
        font-weight: 600;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.35s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    @media (max-width: 768px) {
        .contact-page {
            padding-top: 125px;
        }

        .send-btn {
            width: 100%;
        }
    }

    @media (max-width: 576px) {
        .contact-info,
        .contact-form {
            border-radius: 20px;
        }
    }
</style>