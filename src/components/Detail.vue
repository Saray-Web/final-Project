<template>
    <main class="container">
        <div class="row">
            <nav class="returns">
                <router-link to="/productList" class="fs-5 text-decoration-none links"> 🔙 Return Back</router-link>
            </nav>

            <div class="image-cover row">
                <div class="col-lg-5 col-md-12 col-12 image mt-0 ">
                    <img :src="`${getsingleproduct.product.image}`" alt="without image" class="">
                </div>
                <div class="col-lg-7 col-12 col-md-12 product-summary">
                    <span class="product-label">Classic Court Sneaker</span>
                    <h1 class="titles">{{ getsingleproduct.product.name }}</h1>
                    <div class="rating-row">
                        <span class="stars">&starf;&starf;&starf;&starf;&starf;</span>
                        <span class="reviews">(4.8) &bull; 127 reviews</span>
                    </div>
                    <h1 class="product-price">$ {{ getsingleproduct.product.price }}</h1>
                    <p class="desc">Retro-inspired sneakers with a tennis court vibe. Perfect balance between comfort and style.</p>
                    <hr class="summary-line">
                    <div>
                        <p class="text-white">Quantity</p>
                    </div>
                    <div class="row">
                        <div class="d-flex gap-5 order col-12 col-md-6 col-lg-12">
                            <button @click="cartitem.addtoCart(getsingleproduct.product)" class="btn bg-warning rounded-4 buy-now col-5 col-lg-5 col-md-5"><span><i class="bi bi-cart4"></i></span> Add to Cart</button>
                            <button class="btn btn-buy rounded-4 buy-now col-5 col-lg-5 col-md-5">Buy Now</button>
                        </div>
                    </div>
                    
                </div> 
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-12 border-0 rounded-5 aba" data-aos="fade-up">
                    <div class="block1 gap-4   rounded-4">
                        <div class="icons">
                            <i class="bi bi-truck text-warning"></i>
                        </div>
                        <div class="secur-title">
                            <h3>Free Shipping</h3>
                            <p>On orders over $50</p>
                        </div>
                    </div>
                    <div class="block1 gap-4 rounded-4">
                        <div class="icons">
                            <i class="bi bi-shield  text-warning"></i>
                        </div>
                        <div class="secur-title">
                            <h3>Warranty</h3>
                            <p>1 year guarantee</p>
                        </div>
                    </div>
                    <div class="block1 gap-4  rounded-4">
                        <div class="icons">
                            <i class="bi bi-arrow-counterclockwise text-warning"></i>
                        </div>
                        <div class="secur-title">
                            <h3>Easy Returns</h3>
                            <p>30-day return policy</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </main>
</template>

<script setup>
    import { onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { useProductstore } from '../stores/ProductStore';
    import cartItem from '../stores/Cardstore';

    const cartitem = cartItem();
    const route = useRoute();
    const getsingleproduct = useProductstore();
    onMounted (() => {
        getsingleproduct.fetchProducts();
        getsingleproduct.fetchProduct(route.params.id);
    })
</script>
    
<style scoped>
    .returns{
        margin-top: 120px;
        
    }
    .links{
        color: rgb(239, 229, 229);
        padding: 15px 15px;


    }
    .links:hover{
        
        background: rgba(195, 148, 148, 0.1);
        border-radius: 20px;
    }
    .image-cover{
        display: flex;
        margin-top: 50px;
        justify-content: space-between;
    }
    .image{
        width: 400px;
        /* height: 500px; */
        object-fit: cover;
    }
    .image{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        isolation: isolate;
        overflow: hidden;
        min-height: 210px;
        padding: 28px;
        border-radius: 19px 19px 24px 24px;            
        box-shadow: inset  1px 1px 5px 1px rgba(255, 255, 255, 0.2);
        
    }
    .image img{
        opacity: none;
        width: 90%;
    }
    .product-summary{
        padding: clamp(24px, 4vw, 48px);
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 22px;
        background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.03)),
            rgba(12, 14, 18, 0.7);
        box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
        backdrop-filter: blur(14px);
    }
    .product-label{
        display: inline-flex;
        align-items: center;
        margin-bottom: 14px;
        padding: 7px 14px;
        border-radius: 999px;
        background: rgba(150, 224, 11, 0.12);
        color: #b9f15a;
        font-size: 0.8rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }
    .titles{
        max-width: 620px;
        margin: 0 0 14px;
        color: #f7f8f2;
        font-size: clamp(2rem, 2vw, 4.5rem);
        font-weight: 500;
        line-height: 0.95;
    }
    .rating-row{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 10px;
        margin-bottom: 24px;
    }
    .stars{
        color: #ffc847;
        font-size: 1.2rem;
        letter-spacing: 0.08em;
        line-height: 1;
    }
    .reviews{
        color: #ff7d7d;
        font-weight: 600;
    }
    .product-price{
        margin-bottom: 18px;
        color: #ffffff;
        font-size: clamp(2.2rem, 2vw, 3.5rem);
        font-weight: 500;
    }
    .desc{
        /* max-width: 560px; */
        margin-bottom: 28px;
        color: #c9d4ca;
        font-size: clamp(1rem, 0.5vw, 1.3rem);
        font-weight: 500;
        line-height: 1.5;
        font-family: Arial, Helvetica, sans-serif;
    }
    .summary-line{
        width: min(100%, 650px);
        margin: 0;
        border: 0;
        border-top: 1px solid rgba(255, 255, 255, 0.16);
    }
    @media (max-width: 991px){
        .product-summary{
            margin-top: 28px;
        }
    }
     @media (max-width: 576px) {
        .image-cover{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .product-summary{
           margin: 25px 15px;
             
        }
    }
     .block1{
        display: flex;
        justify-content: space-between;
        align-items: center;
     }
    .order .buy-now{
        
        color: #ffffff;
        font-weight: 600;
    }
    .order .btn-buy{
        padding:9px 10px;
        background-color: #0237f6;
        color: #ffffff;
    }
    .aba{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.03)),
            rgba(12, 14, 18, 0.7);
        box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.28);
        backdrop-filter: blur(14px);
        color: #f7f8f2;
        margin-top: 100px;
        padding: 20px 24px;
    }
    .aba p{
        color: #c5c6c3;
    }
    .aba .icons{
        font-size: 30px;
        background-color: rgba(213, 170, 69, 0.5);
        border-radius: 40%;
        padding: 8px 10px;
        margin-top: -5px;
        
    }
    .icons, .secur-title{
        margin-top: 10px;
    }
    .secur-title h3{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    @media (max-width: 768px){
        .aba{
            margin-top: 70px;
            padding: 18px;
            gap: 16px;
        }
    }
    @media (max-width: 576px){
        .aba{
            margin: 0px 12px ;
        }
        .aba .block1{
            width: 100%;
            justify-content: flex-start;
            gap: 16px;
            padding: 10px 0;
        }
        .aba .icons{
            flex: 0 0 auto;
            font-size: 25px;
        }
        .aba .secur-title h3{
            font-size: 1.5rem;
            margin-bottom: 4px;
        }
        .aba .secur-title p{
            margin-bottom: 0;
        }
    }


</style>
