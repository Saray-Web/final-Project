<template>
    <main class="container py-5">
        <div class="row ">
            <div class="col-lg-6 col-12 d-flex align-items-center justify-content-center">
                <div class="right w-lg-75">
                    <h2 class="text-white">Welcome to</h2>
                    <h1 class="shop fs-1" data-aos="fade-right"
                        data-aos-duration="4000"
                        data-aos-delay="500"
                        data-aos-easing="ease-in-out">E-SHOP</h1>
                    <p class="text-white fs-4 text-white w-60 fst-italic pt-3">Find the best deals on the latest electronics and gadgets! </p>
                    <router-link to="/productList" class="btn btn-info text-light rounded-5 px-4"><span><i class="bi bi-cart4"></i></span>  Shop Now</router-link>
                </div>
            </div>
            <div class="col-lg-6 col-12 image d-flex justify-content-end " data-aos="fade-left"
                data-aos-duration="4000"
                data-aos-delay="500"
                data-aos-easing="ease-in-out"> 
                <img :src="p1" alt="">
            </div>
            <div class="col-12 product-grid row row-cols-2 row-cols-lg-4 g-2 g-md-4 mt-4 mt-md-5">
                <div 
                    v-for="product in store.products.slice(0, 4)"
                    :key="product.id"
                    class="col"
                    data-aos="fade-up"
                    data-aos-duration="300"
                    data-aos-delay="100"
                    data-aos-anchor-placement="center-bottom"
                >
                    <div class="product-image card h-100 border-0 shadow-lg">
                        <router-link :to="`/detail/${product.id}`" class="product-card">
                            <img :src="product.image" :alt="product.name">
                            <button class="btn quick-view rounded-4 fs-6 fst-italic">Quick View</button>
                        </router-link>
                        <div class="card-body text-center">
                            <span class="promo-badge">{{ product.promo }}</span>
                            <h1 class="product-name">{{ product.name }}</h1>
                            <p class="product-price">${{ product.price }}</p>
                        </div>
                        <div class="card-footer border-0 bg-transparent pt-0">
                            <button @click="handleClick(product)"  class="btn w-100 rounded-5 text-white"
                            :class="added.has(product.id) ?' bg-success' : 'bg-warning'">
                                <span v-if="!added.has(product.id)">
                                    <i class="bi bi-cart4"></i>  Add to Cart
                                </span>
                               
                                <span v-else >
                                    <i class="bi bi-check-lg"></i> Added
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-12 col-12 col-md-12 d-flex justify-content-center align-items-center my-5">
                <router-link to="/productList" class="btn btn-info text-light shadow-lg rounded-4 px-5 py-2 view_more"><span><i class="bi bi-cart4"></i></span> View More</router-link>
            </div>
        </div>
    </main>
</template>
<script setup>
import { onMounted } from 'vue';
import { useProductstore } from '../stores/ProductStore';
import cartItem from '../stores/Cardstore';
import { ref } from 'vue';
import p1 from '../Images/p1.png'


const store = useProductstore();
const added = ref(new Set());
const cartitem = cartItem();

function handleClick(product){
        cartitem.addtoCart(product);
        added.value.add(product.id);

        setTimeout(() => {
            added.value.delete(product.id)
        }, 1500)
        
    }

onMounted (() => {
    store.fetchProducts();
})
</script>

<style scoped>
    .container .shop{
        color: #96e00b;
    }

    .right{
        width: min(100%, 520px);
    }

    .image img{
        width: 100%;
        max-height: 520px;
        object-fit: contain;
    }

    .product-grid{
        margin-left: 0;
        margin-right: 0;
    }

    .product-image{
        width: 100%;
        border-radius: 24px;
        background: #ffffff;
        transition: transform 0.25s ease, box-shadow 0.25s ease;
    }

    .product-card {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        isolation: isolate;
        overflow: hidden;
        min-height: 210px;
        padding: 28px;
        border-radius: 19px 19px 24px 24px;
        background: radial-gradient(
                circle at 50% 42%,
                rgba(255, 196, 0, 0.9),
                rgba(255, 196, 0, 0.22) 35%,
                transparent 58%
            ),
            linear-gradient(
                135deg,
                #0f2027 0%,
                #254f5c 48%,
                #13272f 100%
            );
        text-decoration: none;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }

    .product-card::before{
        content: "";
        position: absolute;
        inset: 12px;
        z-index: -1;
        border-radius: 18px;
        background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.18),
            rgba(255, 255, 255, 0.03)
        );
        border: 1px solid rgba(255, 255, 255, 0.14);
    }

    .product-card::after{
        content: "";
        position: absolute;
        width: 150px;
        height: 150px;
        right: -52px;
        top: -52px;
        z-index: -1;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.14);
    }

    .product-card img{
        width: 100%;
        max-width: 400px;
        height: 150px;
        object-fit: contain;
        filter: drop-shadow(0 18px 22px rgba(0, 0, 0, 0.32));
        transition: transform 0.3s ease, filter 0.3s ease;
    }

    .product-card:hover img{
        transform: translateY(-6px) scale(1.04);
        filter: drop-shadow(0 24px 28px rgba(0, 0, 0, 0.38));
    }

    .quick-view {
        opacity: 0;
        transition: opacity 0.3s ease, background-color 0.3s ease, color 0.3s ease;
        position: absolute;
        bottom: 40%;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
    }

    .product-card:hover .quick-view {
        opacity: 1;
        color: #10232b;
        background-color: rgba(255, 255, 255, 0.9);
        border: none;
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.22);
    }

    .product-image:hover{
        transform: translateY(-6px);
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.18) !important;
    }

    .view_more{
        transition: transform 0.25s ease, box-shadow 0.25s ease;
    }

    .view_more:hover{
        transform: translateY(-2px);
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.18) !important;
    }

    .promo-badge{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 28px;
        padding: 4px 14px;
        border-radius: 999px;
        background: #e9f9d2;
        color: #4f8600;
        font-size: 0.8rem;
        font-weight: 700;
        margin-bottom: 14px;
    }
    .product-name{
        min-height: 48px;
        margin: 0;
        color: #17202a;
        font-size: 1.15rem;
        font-weight: 700;
        line-height: 1.3;
    }
    .product-price{
        margin: 10px 0 0;
        color: #ff9800;
        font-size: 1.35rem;
        font-weight: 800;
    }

    .product-image .btn{
        min-height: 44px;
        font-weight: 700;
    }

    @media (max-width: 992px){
        .right{
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            justify-content: center;
            width: 100%;
            padding-top: 80px;
        }
    }

    @media (max-width: 576px){
        .product-card{
            min-height: 95px;
            padding: 10px;
            border-radius: 15px;
            overflow: hidden;
        }
        .product-image{
            border-radius: 25px 25px 16px 16px;
            
        }
        .product-card img{
            max-width: 100%;
            height: 150px;
        }
        .product-image .card-body{
            padding: 10px 8px;
        }
        .promo-badge{
            min-height: 20px;
            padding: 2px 8px;
            font-size: 0.65rem;
            margin-bottom: 8px;
        }
        .product-name{
            min-height: auto;
            font-size: 0.85rem;
        }
        .product-price{
            margin-top: 6px;
            font-size: 1rem;
        }
        .product-image .card-footer{
            padding: 0 8px 10px;
        }
        .product-image .btn{
            min-height: 34px;
            font-size: 0.72rem;
            padding-left: 8px;
            padding-right: 8px;
        }
    }
</style>
