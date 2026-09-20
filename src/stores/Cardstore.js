import { defineStore } from 'pinia'

const STORAGE_KEY = 'eshop_cart'

function hydrate() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY)
        return raw ? JSON.parse(raw) : []
    } catch {
        return []
    }
}

const cartItem = defineStore('card', {
    state: () => ({
        cart: hydrate(),
    }),

    getters: {
        countCart: (state) => state.cart.length,

        countTotal: (state) => state.cart.reduce((total, item) => total + item.price * item.qty, 0),

        countQty: (state) => state.cart.reduce((total, item) => total + item.qty, 0),

        tax() {
            return this.countTotal * 0.1
        },

        grandTotal() {
            return this.countTotal + this.tax
        },

        totalFormatted() {
            return this.countTotal.toFixed(2)
        },

        taxFormatted() {
            return this.tax.toFixed(2)
        },

        grandTotalFormatted() {
            return this.grandTotal.toFixed(2)
        },
    },

    actions: {
        persist() {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.cart))
        },

        addtoCart(product) {
            const existing = this.cart.find((item) => item.id === product.id)
            if (existing) {
                existing.qty += 1
            } else {
                this.cart.push({ ...product, qty: 1 })
            }
            this.persist()
        },

        increaseQty(id) {
            const item = this.cart.find((item) => item.id == id)
            if (item) {
                item.qty += 1
                this.persist()
            }
        },

        decreaseQty(id) {
            const item = this.cart.find((item) => item.id == id)
            if (item && item.qty > 1) {
                item.qty -= 1
                this.persist()
            }
        },

        removeItem(id) {
            this.cart = this.cart.filter((item) => item.id !== id)
            this.persist()
        },

        clearCart() {
            this.cart = []
            this.persist()
        },
    },
})

export default cartItem