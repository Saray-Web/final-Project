<script setup>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';



</script>

<template >
    <div class="app ">
        <Navbar/>
        <router-view/>
        <Footer/>
    </div>
</template> 
<style scoped>
    .app{
        min-height: 100vh;
        background:
            radial-gradient(circle at top left, rgba(150, 224, 11, 0.16), transparent 28rem),
            linear-gradient(135deg, #07171d 0%, #12313a 48%, #eef5f2 48%, #eef5f2 100%);
    }
</style>
