# E-SHOP — Vue 3 + Vite + Pinia + Axios

A modern single-page e-commerce storefront built with the **Vue 3 + Vite** toolchain, **Pinia** for state, **Vue Router** for navigation, and **Axios** for data fetching.

## Tech Stack

- **Vue 3** (`<script setup>` SFCs) + **Vite**
- **Pinia** — cart & product stores
- **Vue Router** — typed-ish routes, lazy loading, 404 fallback
- **Axios** — API client with interceptors & error handling
- **Bootstrap 5** + **Bootstrap Icons** — layout & iconography
- **AOS** — scroll reveal animations

## Features

- 🏷️ Category browsing (Laptops, Headphones, Controllers, Smart Watches)
- 🔎 Live search with suggestion dropdown (navbar) + query-driven filtering
- 🛒 Add to cart, quantity controls, order summary with tax, persistent cart (`localStorage`)
- 💳 QR payment modal
- 📱 Fully responsive, focus-visible accessibility styling, skeleton loading states
- 📄 Home, About, Contact (validated form), Product Detail, Cart, and a 404 page

## Getting Started

```bash
npm install
npm run dev        # start the dev server
npm run build      # production build
npm run preview    # preview the production build
```

## Project Structure

```
src/
├── api/            # axios client + products API
├── components/     # Navbar, Hero, Footer, Productcard, CardItem, Detail, ...
├── stores/         # Pinia stores (ProductStore, Cardstore)
├── views/          # Home, ProductList, About, Contact, NotFound
├── routers/        # router config
└── main.js         # app entry (Bootstrap, icons, AOS)
```

## API

Product data lives in `public/data/products.json` and is fetched through the Axios client at `src/api/client.js`. Point `VITE_API_BASE_URL` at a real backend to swap the local JSON for live endpoints.