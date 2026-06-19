<template>
    <main class="container">
        <div class="row  mt-5 " v-if="cartItem.cart.length === 0">
            <div class="col-lg-12 col-md-12 col-12 mt-5 text-center ">
                <div class="icons">
                    <i class="bi bi-cart-x "></i>
                </div>
                <div class="title">
                    <h1>Your cart is empty...!!</h1>
                    <p>Looks like you haven't added anything to your cart yet.</p>
                </div>
                <div>
                    <router-link to="/ProductList"
                        class="btn btn-warning text-dark py-2 mt-5 px-4 rounded-5 fw-bold">Continue
                        Shopping
                    </router-link>
                </div>
                <div class="mt-3  d-flex justify-content-center align-item-center secur ">
                    <div class="d-flex   p-3">
                        <i class="bi bi-truck px-2"> </i>
                        <p> Free shipping over $50</p>
                    </div>
                    <div class="d-flex p-3">
                        <i class="bi bi-shield px-2"> </i>
                        <p> Secure checkout</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row navs" v-else>
            <div class="col-lg-12 col-md-12 col-12 d-flex justify-content-between adv">
                <div class="left">
                    <h1>Shopping Cart</h1>
                    <p>( {{ cartItem.countQty }} ) items in your cart</p>
                </div>
                <div class="right">
                    <router-link class="text-decoration-none links" to="/productList">🔙 Continue Shopping</router-link>
                </div>
            </div>
            <div class="col-lg-12 col-md-12 col-12 cart-all">
                <div class="product-summary col-lg-7 col-md-8 col-12  cart-left">
                    <div class="cart-header">
                        <div>
                            <h3>Cart Items</h3>
                        </div>
                        <div>
                            <button class="clear-cart btn"><i class="bi bi-trash3" @click="cartItem.clearCart()"></i> 
                                Clear All
                            </button>
                        </div>
                    </div>
                    <div class="block-left ">
                        <div class="cart-row " v-for="item in cartItem.cart" :key="item.id">
                            <div class="cart-item-info">
                                <div class="s-img">
                                    <img :src="`${item.image}`" :alt="item.name">
                                </div>
                                <div class="d-img">
                                    <h3>{{ item.name }}</h3>
                                    <p>${{ item.price }} each</p>
                                    <div class="qty-box">
                                        <button @click="cartItem.decreaseQty(item.id)" class="qty-btn">-</button>
                                        <span class="qty-number">{{ item.qty }}</span>
                                        <button @click="cartItem.increaseQty(item.id)" class="qty-btn">+</button>
                                    </div>
                                </div>
                            </div>
                            <div class="cart-item-total">
                                <button class="remove-btn" aria-label="Remove item" @click="cartItem.removeItem(item.id)">
                                    <i class="bi bi-trash3"></i>
                                </button>
                                <strong>${{ (item.price * item.qty).toFixed(2) }}</strong>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="cart-right product-summary1 col-lg-4 col-md-4 col-12">
                    <div>
                        <div>
                            <h3>Order Summary</h3>
                        </div>
                        <div class="order">
                            <div class="order-left">
                                <p class="text-dark">Subtotal ( {{ cartItem.countQty }} itmes )</p>
                                <p class="text-dark">Shipping</p>
                                <p class="text-dark">Tax</p>
                            </div>
                            <div class="order-right">
                                <h4>$ {{ cartItem.countTotal }}</h4>
                                <p class="text-dark">Free</p>
                                <h4 class="text-danger">$ {{ cartItem.tax }}</h4>
                            </div>
                        </div>
                        <hr>
                        <div class="order">
                            <div class="order-left">
                                <p class="text-dark">Total</p>

                            </div>
                            <div class="order-right">
                                <h4>$ {{ cartItem.grandTotal }}</h4>

                            </div>
                        </div>
                        <!-- Checkout Button -->
                        <button class="btn btn-warning w-100 rounded-5" data-bs-toggle="modal"
                            data-bs-target="#paymentModal">
                            <i class="bi bi-credit-card text-dark me-2"></i>
                            Proceed to Checkout
                        </button>
                    </div>
                    <hr>

                    <p class="text-dark">
                        <i class="text-success px-2 bi bi-shield"></i>
                        Secure SSL checkout
                    </p>
                    <p class="text-dark">
                        <i class="text-primary px-2 bi bi-car-front"></i>
                        Free returns within 30 days
                    </p>
                    <p class="text-dark">
                                <i class="text-danger px-2 bi bi-heart"></i>
                                24/7 customer support
                            </p>
                    <!-- Info Section -->
                    <div class="text-center mt-3">
                        <!-- Modal -->
                        <Teleport to="body">
                            <div class="modal fade" id="paymentModal" tabindex="-1" aria-labelledby="paymentModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content rounded-4 shadow">
                                        <!-- Header -->
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="paymentModalLabel">
                                                Payment
                                            </h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                        </div>
                                        <!-- Body -->
                                        <div class="modal-body text-center p-4">
                                            <img src="/Image/qr.jpg" alt="QR Code" class="img-fluid mb-3 rounded-3"
                                                style="max-width: 220px">

                                            <h4 class="mt-3">

                                                Total: ${{ cartItem.grandTotal }}
                                            </h4>


                                            <p class="text-muted">
                                                Scan this QR Code to complete your payment.
                                            </p>

                                        </div>

                                        <!-- Footer -->
                                        <div class="modal-footer">
                                            <button class="btn btn-secondary" data-bs-dismiss="modal">
                                                Close
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Teleport>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>

import useCartItem from '../stores/Cardstore';
const cartItem = useCartItem();

</script>

<style scoped>
.line-h {
    line-height: 5px;
}

.order {
    display: flex;
    margin-top: 10px;
}

.order-left {
    width: 50%;
}

.order-right {
    width: 50%;

    text-align: end;
}

.cart-header {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: space-between;

}

.qty-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 116px;
    height: 38px;
    padding: 0 12px;
    border: 1px solid #e5e7eb;
    border-radius: 999px;
    background: #fff;
}

.qty-btn {
    border: none;
    background: transparent;
    color: #111827;
    font-size: 0;
    font-weight: 500;
    line-height: 1;
    cursor: pointer;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    transition: color 0.2s ease, transform 0.2s ease;
}

.qty-btn::before {
    content: "+";
    font-size: 20px;
}

.qty-btn:first-child::before {
    content: "-";
}

.qty-btn:hover {
    color: #0d6efd;
}

.qty-btn:active {
    transform: scale(0.92);
}

.qty-number {
    color: #063a8f;
    font-weight: 500;
    min-width: 24px;
    text-align: center;
    font-size: 14px;
}

.block-img {
    display: flex;
    justify-content: center;
    column-gap: 50px;
    align-items: center;
}

.block-img .d-img {
    margin-top: 15px;
}

.cart-all {
    display: flex;
    justify-content: space-between;
}

/* .product-summary {
    padding: clamp(10px, 4vw, 20px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 22px;
    background:
        linear-gradient(135deg, rgba(255, 255, 255, 0.258), rgba(255, 255, 255, 0.03)),
        rgba(12, 14, 18, 0.187);
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
    backdrop-filter: blur(14px);
    min-height: 100px;
     */
/* } */

.product-summary1 {
    padding: clamp(24px, 4vw, 48px);
    /* border: 1px solid rgba(255, 255, 255, 0.12); */
    border-radius: 22px;
    height: 480px;
    background:
        linear-gradient(135deg, rgb(255, 255, 255), rgba(255, 255, 255, 0.03)),
        rgba(12, 14, 18, 0.443);
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
    backdrop-filter: blur(14px);
}

.links {
    color: rgb(13, 13, 13);
    padding: 15px 15px;


}

.links:hover {

    background: rgba(48, 46, 46, 0.1);
    border-radius: 20px;
}

.navs {
    padding-top: 150px;
}

@media (max-width: 576px) {
    .block-img {
        display: flex;
        justify-content: center;
        column-gap: 20px;
        align-items: center;
    }

    .cart-all {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }

    .product-summary1 {
        padding: clamp(24px, 4vw, 48px);
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 22px;
        background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.258), rgba(255, 255, 255, 0.03)),
            rgba(12, 14, 18, 0.187);
        box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
        backdrop-filter: blur(14px);
    }



    .left {
        width: 40%;
    }

    .links {
        color: rgb(239, 229, 229);
        padding: 15px 15px;
    }

    .links:hover {

        background: rgba(195, 148, 148, 0.1);
        border-radius: 20px;
    }
}

.left p {
    color: rgba(247, 247, 247, 0.652);
}

.icons i {
    font-size: 150px;
    color: rgba(240, 248, 255, 0.556);
}

.title h1,
p,
i {
    color: rgba(54, 109, 227, 0.423);
}

.title p {
    font-size: 20px;
}

.secur {
    font-size: 18px;
}

.navs {
    padding-top: 100px;
}

.left h1 {
    color: #e7eaf0;
    font-size: 32px;
    font-weight: 500;
    letter-spacing: 0;
    margin-bottom: 6px;
}

.left p {
    color: #ffffff;

    font-size: 18px;
    /* margin: 10px; */
}

.product-summary.cart-left {
    /* background: #ffffff;
    border: 1px solid #e5e7eb; */
    border-radius: 22px;
    box-shadow: 0 8px 22px rgba(15, 23, 42, 0.12);
    padding: 28px 24px 24px;
    background:
        linear-gradient(135deg, rgba(255, 255, 255, 0.258), rgba(255, 255, 255, 0.03)),
        rgba(12, 14, 18, 0.187);
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
    backdrop-filter: blur(14px);
    min-height: 200px !important;
}

.cart-header {
    align-items: center;
    display: flex;
    height: auto;
    justify-content: space-between;
    margin-bottom: 12px;
    width: 100%;
}

.cart-header h3 {
    color: #f6f7f8;
    font-size: 20px;
    font-weight: 500;
    margin: 0;
}

.clear-cart {
    align-items: center;
    color: #fefeff;
    display: inline-flex;
    gap: 12px;
    font-size: 15px;
    padding: 6px 8px;
}

.clear-cart i,
.remove-btn i {
    color: #f9f9fa;
    font-size: 15px;
}

.block-left {
    display: flex;
    flex-direction: column;
}

.cart-row {
    align-items: center;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    justify-content: space-between;
    min-height: 135px;
    padding: 16px 0;
}

.cart-row:last-child {
    border-bottom: 0;
    padding-bottom: 0;
}

.cart-item-info {
    align-items: center;
    display: flex;
    gap: 16px;
    min-width: 0;
}

.cart-left .s-img {
    border-radius: 18px;
    flex: 0 0 100px;
    height: 100px;
    overflow: hidden;
}

.cart-left .s-img img {
    display: block;
    height: 100%;
    object-fit: cover;
    width: 100%;
}

.cart-left .d-img {
    margin-top: 0;
}

.cart-left .d-img h3 {
    color: #e3e5e9;
    font-size: 20px;
    font-weight: 500;
    margin: 0 0 4px;
}

.cart-left .d-img p {
    color: #f7f9fb;
    font-size: 14px;
    margin: 0 0 16px;
}

.cart-left .qty-box {
    align-items: center;
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 999px;
    display: flex;
    height: 38px;
    justify-content: space-between;
    padding: 0 12px;
    width: 116px;
}

.cart-left .qty-btn {
    color: #4b5563;
    font-size: 22px;
    font-weight: 400;
}

.cart-left .qty-btn::before {
    content: none;
}

.cart-left .qty-btn:hover {
    color: #111827;
}

.cart-left .qty-number {
    color: #111827;
    font-weight: 700;
}

.cart-item-total {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 110px;
    text-align: right;
}

.remove-btn {
    align-self: flex-end;
    background: transparent;
    border: 0;
    line-height: 1;
    padding: 0;
}

.cart-item-total strong {
    color: #111827;
    font-size: 20px;
    font-weight: 800;
}

@media (max-width: 576px) {
    .left {

        width: 50%;
    }

    .right {
        margin-top: 20px;
        width: 60%;
    }

    .left h1 {
        font-size: 28px;
    }

    .links {
        text-align: end;
        color: #dee1e8;

    }

    .product-summary.cart-left {
        padding: 22px 18px;
    }

    .cart-row {
        align-items: flex-start;
        gap: 12px;
        min-height: 120px;
    }

    .cart-item-info {
        align-items: flex-start;
        gap: 12px;
    }

    .cart-left .s-img {
        flex-basis: 76px;
        height: 76px;
    }

    .cart-item-total {
        min-width: 84px;
    }

    .cart-item-total strong {
        font-size: 17px;
    }
}
</style>
