<template>
    <main class="container cart-page">
        <div v-if="cartItem.cart.length === 0" class="empty-state">
            <div class="empty-icon">
                <i class="bi bi-cart-x"></i>
            </div>
            <h1>Your cart is empty</h1>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <router-link to="/productList" class="btn home-btn">
                <i class="bi bi-bag-check"></i> Continue Shopping
            </router-link>
            <div class="empty-perks">
                <span><i class="bi bi-truck"></i> Free shipping over $50</span>
                <span><i class="bi bi-shield-check"></i> Secure checkout</span>
            </div>
        </div>

        <div v-else class="cart-content">
            <div class="cart-head">
                <div>
                    <h1>Shopping Cart</h1>
                    <p>{{ cartItem.countQty }} item{{ cartItem.countQty === 1 ? '' : 's' }} in your cart</p>
                </div>
                <router-link to="/productList" class="back-link">
                    <i class="bi bi-arrow-left"></i> Continue Shopping
                </router-link>
            </div>

            <div class="row g-4">
                <div class="col-lg-7">
                    <div class="panel cart-panel">
                        <div class="panel-head">
                            <h3><i class="bi bi-basket"></i> Cart Items</h3>
                            <button class="clear-btn" @click="cartItem.clearCart()">
                                <i class="bi bi-trash3"></i> Clear All
                            </button>
                        </div>

                        <div class="cart-list">
                            <div v-for="item in cartItem.cart" :key="item.id" class="cart-row">
                                <div class="cart-item-info">
                                    <router-link :to="`/detail/${item.id}`" class="s-img" :aria-label="`View ${item.name}`">
                                        <img :src="item.image" :alt="item.name">
                                    </router-link>
                                    <div class="d-img">
                                        <router-link :to="`/detail/${item.id}`" class="d-name-link">
                                            <h3>{{ item.name }}</h3>
                                        </router-link>
                                        <p>${{ item.price }} each</p>
                                        <div class="qty-box">
                                            <button @click="cartItem.decreaseQty(item.id)" class="qty-btn" aria-label="Decrease quantity">
                                                <i class="bi bi-dash-lg"></i>
                                            </button>
                                            <span class="qty-number">{{ item.qty }}</span>
                                            <button @click="cartItem.increaseQty(item.id)" class="qty-btn" aria-label="Increase quantity">
                                                <i class="bi bi-plus-lg"></i>
                                            </button>
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
                </div>

                <div class="col-lg-5">
                    <div class="panel summary-panel">
                        <h3 class="summary-title"><i class="bi bi-receipt"></i> Order Summary</h3>

                        <div class="summary-row">
                            <span>Subtotal ({{ cartItem.countQty }} items)</span>
                            <strong>${{ cartItem.totalFormatted }}</strong>
                        </div>
                        <div class="summary-row">
                            <span>Shipping</span>
                            <strong class="free">Free</strong>
                        </div>
                        <div class="summary-row">
                            <span>Tax (10%)</span>
                            <strong>${{ cartItem.taxFormatted }}</strong>
                        </div>

                        <hr class="summary-divider">

                        <div class="summary-row total">
                            <span>Total</span>
                            <strong>${{ cartItem.grandTotalFormatted }}</strong>
                        </div>

                        <button class="btn checkout-btn w-100" data-bs-toggle="modal" data-bs-target="#paymentModal">
                            <i class="bi bi-credit-card-2-front"></i> Proceed to Checkout
                        </button>

                        <div class="summary-perks">
                            <p><i class="bi bi-shield-check text-success"></i> Secure SSL checkout</p>
                            <p><i class="bi bi-arrow-counterclockwise text-primary"></i> Free returns within 30 days</p>
                            <p><i class="bi bi-heart text-danger"></i> 24/7 customer support</p>
                        </div>
                    </div>
                </div>
            </div>

            <Teleport to="body">
                <div class="modal fade" id="paymentModal" tabindex="-1" aria-labelledby="paymentModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content rounded-4 shadow">
                            <div class="modal-header">
                                <h5 class="modal-title" id="paymentModalLabel">
                                    <i class="bi bi-qr-code me-2"></i> Payment
                                </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body text-center p-4">
                                <img src="/Image/qr.jpg" alt="Scan QR to pay" class="img-fluid mb-3 rounded-3 qr-img">
                                <h4 class="mt-3">Total: ${{ cartItem.grandTotalFormatted }}</h4>
                                <p class="text-muted mb-0">Scan this QR code to complete your payment securely.</p>
                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-primary rounded-pill w-100" data-bs-dismiss="modal">
                                    <i class="bi bi-check-lg me-1"></i> I've completed payment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Teleport>
        </div>
    </main>
</template>

<script setup>
import useCartItem from '../stores/Cardstore';

const cartItem = useCartItem();
</script>

<style scoped>
    .cart-page {
        padding-top: 130px;
        min-height: 60vh;
    }

    /* Empty state */
    .empty-state {
        text-align: center;
        padding: 60px 16px;
        max-width: 520px;
        margin: 0 auto;
    }

    .empty-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background: rgba(150, 224, 11, 0.1);
        border: 1px solid rgba(150, 224, 11, 0.3);
        margin-bottom: 22px;
    }

    .empty-icon i {
        font-size: 3.2rem;
        color: #bdf466;
    }

    .empty-state h1 {
        color: #fff;
        font-weight: 800;
        font-size: clamp(1.6rem, 4vw, 2.2rem);
    }

    .empty-state p {
        color: rgba(255, 255, 255, 0.6);
        font-size: 1.05rem;
        margin-top: 10px;
    }

    .home-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        min-height: 48px;
        border-radius: 999px;
        padding: 10px 24px;
        background: #96e00b;
        color: #102129;
        font-weight: 800;
        border: 0;
        margin-top: 26px;
        box-shadow: 0 14px 30px rgba(150, 224, 11, 0.25);
        transition: transform 0.2s ease;
    }

    .home-btn:hover {
        color: #102129;
        transform: translateY(-2px);
    }

    .empty-perks {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        margin-top: 34px;
        color: rgba(255, 255, 255, 0.55);
        font-size: 0.95rem;
    }

    .empty-perks span {
        display: inline-flex;
        align-items: center;
        gap: 6px;
    }

    .empty-perks i {
        color: #bdf466;
    }

    /* Filled cart */
    .cart-head {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 26px;
    }

    .cart-head h1 {
        color: #fff;
        font-weight: 900;
        font-size: clamp(1.7rem, 3vw, 2.3rem);
        margin-bottom: 4px;
    }

    .cart-head p {
        color: rgba(255, 255, 255, 0.6);
        margin: 0;
    }

    .back-link {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: #bdf466;
        font-weight: 700;
        text-decoration: none;
        padding: 9px 16px;
        border-radius: 999px;
        background: rgba(150, 224, 11, 0.1);
        border: 1px solid rgba(150, 224, 11, 0.3);
        transition: background 0.2s ease;
    }

    .back-link:hover {
        background: rgba(150, 224, 11, 0.2);
    }

    .panel {
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 22px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02)), rgba(12, 14, 18, 0.85);
        box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
    }

    .cart-panel {
        padding: 26px 22px;
    }

    .panel-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .panel-head h3,
    .summary-title {
        color: #fff;
        font-size: 1.15rem;
        font-weight: 800;
        margin: 0;
    }

    .panel-head h3 i,
    .summary-title i {
        color: #bdf466;
        margin-right: 8px;
    }

    .clear-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        border: 0;
        background: transparent;
        color: #ff8a8a;
        font-weight: 700;
        font-size: 0.9rem;
        padding: 6px 10px;
        border-radius: 999px;
        transition: background 0.15s ease;
    }

    .clear-btn:hover {
        background: rgba(255, 107, 107, 0.14);
    }

    .cart-list {
        display: flex;
        flex-direction: column;
    }

    .cart-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 18px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .cart-row:last-child {
        border-bottom: 0;
        padding-bottom: 0;
    }

    .cart-item-info {
        display: flex;
        align-items: center;
        gap: 14px;
        min-width: 0;
        flex: 1;
    }

    .s-img {
        flex: 0 0 92px;
        width: 92px;
        height: 92px;
        border-radius: 16px;
        overflow: hidden;
        background: linear-gradient(135deg, #1a3340, #0f2027);
        border: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: transform 0.2s ease, border-color 0.2s ease;
    }

    .s-img:hover {
        transform: scale(1.03);
        border-color: rgba(150, 224, 11, 0.5);
    }

    .s-img img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        padding: 8px;
    }

    .d-img {
        min-width: 0;
    }

    .d-name-link {
        display: block;
        text-decoration: none;
    }

    .d-name-link:hover h3 {
        color: #bdf466;
    }

    .d-img h3 {
        color: #fff;
        font-size: 1rem;
        font-weight: 700;
        margin: 0 0 3px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        transition: color 0.15s ease;
    }

    .d-img p {
        color: #bdf466;
        font-size: 0.85rem;
        margin: 0 0 10px;
        font-weight: 600;
    }

    .qty-box {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.16);
        border-radius: 999px;
        padding: 3px;
    }

    .qty-btn {
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        color: #fff;
        font-size: 0.85rem;
        transition: background 0.15s ease;
    }

    .qty-btn:hover {
        background: #96e00b;
        color: #102129;
    }

    .qty-number {
        min-width: 30px;
        text-align: center;
        color: #fff;
        font-weight: 800;
        font-size: 0.95rem;
    }

    .cart-item-total {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
        align-self: stretch;
        min-width: 96px;
    }

    .remove-btn {
        border: 0;
        background: transparent;
        color: rgba(255, 255, 255, 0.5);
        font-size: 1rem;
        line-height: 1;
        padding: 4px;
        transition: color 0.15s ease;
    }

    .remove-btn:hover {
        color: #ff6b6b;
    }

    .cart-item-total strong {
        color: #fff;
        font-size: 1.05rem;
        font-weight: 800;
    }

    /* Summary */
    .summary-panel {
        padding: 26px 22px;
        position: sticky;
        top: 110px;
    }

    .summary-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: rgba(255, 255, 255, 0.75);
        font-size: 0.95rem;
        padding: 9px 0;
    }

    .summary-row strong {
        color: #fff;
        font-weight: 700;
    }

    .summary-row .free {
        color: #bdf466;
    }

    .summary-row.total {
        font-size: 1.2rem;
        color: #fff;
        font-weight: 800;
        padding: 12px 0;
    }

    .summary-row.total strong {
        color: #bdf466;
        font-size: 1.35rem;
        font-weight: 900;
    }

    .summary-divider {
        border-color: rgba(255, 255, 255, 0.12);
        opacity: 1;
        margin: 8px 0;
    }

    .checkout-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        min-height: 50px;
        border-radius: 999px;
        background: #96e00b;
        color: #102129;
        font-weight: 800;
        border: 0;
        margin-top: 8px;
        box-shadow: 0 14px 28px rgba(150, 224, 11, 0.24);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .checkout-btn:hover {
        color: #102129;
        transform: translateY(-2px);
        box-shadow: 0 18px 34px rgba(150, 224, 11, 0.32);
    }

    .summary-perks {
        margin-top: 18px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .summary-perks p {
        display: flex;
        align-items: center;
        gap: 8px;
        color: rgba(255, 255, 255, 0.62);
        font-size: 0.88rem;
        margin: 0;
    }

    .qr-img {
        max-width: 210px;
        border: 1px solid rgba(0, 0, 0, 0.08);
    }

    @media (max-width: 991px) {
        .summary-panel {
            position: static;
        }
    }

    @media (max-width: 576px) {
        .cart-page {
            padding-top: 115px;
        }

        .cart-head {
            flex-direction: column;
            align-items: flex-start;
        }

        .cart-panel,
        .summary-panel {
            padding: 20px 16px;
        }

        .cart-row {
            align-items: flex-start;
            flex-wrap: wrap;
        }

        .cart-item-total {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            min-width: 0;
        }

        .s-img {
            flex-basis: 72px;
            width: 72px;
            height: 72px;
        }
    }
</style>