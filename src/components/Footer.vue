<template>
    <footer class="footer mt-5">
    <div class="container py-5">

        <div class="row g-4">

            <!-- Logo -->
            <div class="col-lg-4 col-md-6 col-12">
                <h1 class="text-white fw-bold">E-Shop</h1>

                <p class="text-light mt-3">
                    Find the best electronics and gadgets with amazing prices.
                </p>
            </div>

            <!-- Quick Links -->
            <div class="col-lg-2 col-md-6 col-6">
                <h5 class="text-white mb-3">Links</h5>

                <ul class="list-unstyled">
                    <li><router-link to="/" class="footer-link">Home</router-link></li>
                    <li><router-link to="/productList" class="footer-link">Products</router-link></li>
                    <li><router-link to="/cart" class="footer-link">Cart</router-link></li>
                </ul>
            </div>

            <!-- Support -->
            <div class="col-lg-3 col-md-6 col-6">
                <h5 class="text-white mb-3">Support</h5>

                <ul class="list-unstyled">
                    <li><a href="" class="footer-link">Help Center</a></li>
                    <li><a href="" class="footer-link">Privacy Policy</a></li>
                    <li><a href="" class="footer-link">Terms</a></li>
                </ul>
            </div>

            <!-- Social -->
            <div class="col-lg-3 col-md-6 col-12">
                <h5 class="text-white mb-3">Follow Us</h5>

                <div class="d-flex gap-3">

                    <a href="" class="social-icon">
                        <i class="bi bi-facebook"></i>
                    </a>

                    <a href="" class="social-icon">
                        <i class="bi bi-instagram"></i>
                    </a>

                    <a href="" class="social-icon">
                        <i class="bi bi-twitter-x"></i>
                    </a>

                </div>
            </div>

        </div>

        <!-- Bottom -->
        <div class="border-top border-secondary mt-5 pt-3 text-center">
            <p class="text-light">
                © 2026 E-Shop. All Rights Reserved.
            </p>
        </div>

    </div>
</footer>
</template>

<script setup>

</script>

<style scoped>
    .footer{
    background: #111827;
}

.footer-link{
    color: #d1d5db;
    text-decoration: none;
    line-height: 2.2;
    transition: 0.3s;
}

.footer-link:hover{
    color: #0dcaf0;
    padding-left: 5px;
}

.social-icon{
    width: 45px;
    height: 45px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background: #1f2937;

    color: white;
    text-decoration: none;
    font-size: 1.2rem;

    transition: 0.3s;
}

.social-icon:hover{
    background: #0dcaf0;
    transform: translateY(-5px);
}

@media (max-width: 575px){
    .footer{
        padding-bottom: 1rem;
    }

    .footer h1{
        font-size: 1.5rem;
    }

    .footer-link{
        line-height: 1.9;
    }

    .social-icon{
        width: 40px;
        height: 40px;
        font-size: 1.05rem;
    }
}
</style>