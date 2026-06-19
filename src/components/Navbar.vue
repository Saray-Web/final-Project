<template>
    <nav class="navbar navbar-expand-lg glass-navbar fixed-top">
        <div class="container">
            <router-link class="navbar-brand shop" to="/">
                <i class="bi bi-shop"></i>
                E-SHOP
            </router-link>
            <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#glassNav" aria-controls="glassNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> 
            <div class="collapse navbar-collapse" id="glassNav">
                <ul class="navbar-nav mx-auto gap-lg-4 text-center">
                    <li class="nav-item">
                        <router-link class="nav-link nav-hover" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link nav-hover" to="/productList"
                        :class="{ active: route.path.startsWith('/productList') }"
                        >Products</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link nav-hover" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link nav-hover" to="/contact">Contact</router-link>
                    </li>
                </ul>
                <div class="nav-tools">
                    <input type="search" class="form-control glass-input" placeholder="Search...">
                    <div class="m-noti">
                        <router-link class="btn glass-btn" to="/cart">
                            <i class="bi bi-cart4"></i>
                            Cart
                            <p class="noti">
                                {{ cartItem.countQty }}
                            </p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    import useCartItem from '../stores/Cardstore';
    const cartItem = useCartItem();
    const route = useRoute();
</script>

<style scoped>
    .m-noti{
        position: relative;
    }
    .noti{
        background-color: red;
            width: 20px;
            height: 20px;
            position: absolute;
            border-radius: 50%;
            top: -5px;
            right: -5px;
            display: flex;
            justify-content: center;
            align-items: center;
    }
    .shop{
        display: inline-flex;
        align-items: center;
        gap: 10px;
        color: #96e00b;
        font-size: 1.5rem;
        font-weight: 900;
        letter-spacing: 0;
    }

    .glass-navbar {
        background: rgba(7, 23, 29, 0.76);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        padding: 12px 0;
        box-shadow: 0 18px 50px rgba(0, 0, 0, 0.18);
    }

    .navbar-toggler-icon{
        filter: invert(1);
    }

    .nav-hover {
        position: relative;
        color: rgba(255, 255, 255, 0.78) !important;
        border-radius: 999px;
        padding: 9px 14px;
        font-size: 0.98rem;
        font-weight: 700;
        transition: color 0.2s ease, background-color 0.2s ease;
    }

/* .nav-hover {
    color: rgba(255, 255, 255, 0.78) !important;
    border-radius: 999px;
    padding: 9px 14px;
    font-weight: 700;
} */

.nav-hover:hover,
.nav-hover.router-link-active,
.nav-hover.active {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    }
    .nav-tools{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .glass-input {
        width: 210px;
        min-height: 42px;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.18);
        color: white;
        border-radius: 999px;
        padding-left: 16px;
    }

    .glass-input::placeholder {
        color: #ddd;
    }

    .glass-input:focus {
        background: rgba(255, 255, 255, 0.15);
        color: white;
        box-shadow: none;
        border-color: rgba(150, 224, 11, 0.72);
    }

    .glass-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        min-height: 42px;
        background: #96e00b;
        color: #102129;
        border: 0;
        border-radius: 999px;
        padding: 8px 18px;
        font-weight: 800;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .glass-btn:hover {
        color: #102129;
        transform: translateY(-1px);
        box-shadow: 0 12px 24px rgba(150, 224, 11, 0.24);
    }

    @media (max-width: 991px){
        .glass-navbar{
            padding: 10px 0;
        }

        .navbar-collapse{
            width: min(100%, 520px);
            margin: 12px auto 0;
            padding: 14px;
            border-radius: 22px;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.12);
            box-shadow: 0 18px 40px rgba(0, 0, 0, 0.22);
        }

        .navbar-nav{
            flex-direction: column;
            justify-content: center;
            gap: 4px;
        }

        .nav-tools{
            width: 100%;
            margin-top: 14px;
            flex-direction: column;
            align-items: stretch;
        }

        .glass-input{
            width: 100%;
        }

        .glass-btn{
            width: 100%;
        }

        .nav-hover{
            padding: 11px 14px;
        }
    }

    @media (max-width: 575px){
        .glass-navbar{
            padding: 8px 0;
        }

        .shop{
            font-size: 1.28rem;
        }

        .navbar-toggler{
            padding: .35rem .45rem;
        }

        .navbar-collapse{
            margin-top: 10px;
            padding: 10px;
            border-radius: 18px;
        }

        .nav-tools{
            gap: 8px;
        }

        .glass-input,
        .glass-btn{
            min-height: 40px;
        }

        .glass-btn{
            padding: 8px 14px;
        }
    }
</style>
