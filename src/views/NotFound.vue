<template>
    <main class="not-found">
        <div class="nf-code">404</div>
        <i class="bi bi-compass nf-icon"></i>
        <h1>Page not found</h1>
        <p>The page you're looking for doesn't exist or was moved.</p>
        <router-link to="/" class="btn home-btn">
            <i class="bi bi-house-door"></i> Back to Home
        </router-link>
    </main>
</template>

<style scoped>
    .not-found {
        min-height: 70vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 150px 20px 40px;
        color: #fff;
    }

    .nf-code {
        position: absolute;
        font-size: clamp(7rem, 20vw, 14rem);
        font-weight: 900;
        color: rgba(255, 255, 255, 0.05);
        line-height: 1;
        z-index: 0;
        pointer-events: none;
    }

    .nf-icon {
        position: relative;
        font-size: 4rem;
        color: #bdf466;
        margin-bottom: 18px;
        animation: spin 6s linear infinite;
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }

    h1 {
        position: relative;
        font-size: clamp(1.8rem, 4vw, 2.6rem);
        font-weight: 900;
        margin-bottom: 10px;
    }

    p {
        position: relative;
        color: rgba(255, 255, 255, 0.65);
        font-size: 1.05rem;
        margin-bottom: 26px;
    }

    .home-btn {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        min-height: 48px;
        padding: 10px 24px;
        border-radius: 999px;
        background: #96e00b;
        color: #102129;
        font-weight: 800;
        border: 0;
        box-shadow: 0 14px 30px rgba(150, 224, 11, 0.25);
    }

    .home-btn:hover {
        color: #102129;
        transform: translateY(-2px);
    }
</style>