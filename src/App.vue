<script setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

const route = useRoute();

watch(
    () => route.name || route.path,
    () => {
        const title = route.meta?.title;
        document.title = title ? `${title} — E-SHOP` : 'E-SHOP — Smart Tech Store';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    { immediate: true }
);
</script>

<template>
    <div class="app">
        <Navbar />
        <router-view v-slot="{ Component }">
            <transition name="page" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
        <Footer />
    </div>
</template>

<style scoped>
    .app {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background:
            radial-gradient(circle at top left, rgba(150, 224, 11, 0.16), transparent 28rem),
            linear-gradient(135deg, #07171d 0%, #12313a 48%, #eef5f2 48%, #eef5f2 100%);
    }

    .page-enter-active,
    .page-leave-active {
        transition: opacity 0.25s ease, transform 0.25s ease;
    }

    .page-enter-from {
        opacity: 0;
        transform: translateY(10px);
    }

    .page-leave-to {
        opacity: 0;
        transform: translateY(-8px);
    }
</style>