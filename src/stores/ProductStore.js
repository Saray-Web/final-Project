import { defineStore } from 'pinia'
import api from '../api/products'

export const useProductstore = defineStore('product', {
    state: () => ({
        products: [],
        product: {},
        loading: false,
        error: null,
        searchTerm: '',
    }),

    getters: {
        filterBycategory: (state) => {
            return (category) => {
                const source =
                    !category || category === 'all' ? state.products : state.products.filter((item) => item.category === category)
                return state.searchTerm ? filterBySearch(source, state.searchTerm) : source
            }
        },
        featured: (state) => state.products.slice(0, 4),
        categories: (state) => {
            const unique = [...new Set(state.products.map((p) => p.category))]
            return ['all', ...unique]
        },
    },

    actions: {
        async fetchProducts() {
            this.loading = true
            this.error = null
            try {
                this.products = await api.getProducts()
            } catch (err) {
                this.error = err.message
                this.products = []
            } finally {
                this.loading = false
            }
        },

        async fetchProduct(id) {
            this.loading = true
            this.error = null
            try {
                this.product = (await api.getProduct(id)) || {}
            } catch (err) {
                this.error = err.message
                this.product = {}
            } finally {
                this.loading = false
            }
        },
    },
})

function filterBySearch(list, term) {
    const q = term.toLowerCase().trim()
    return list.filter((item) => {
        const name = String(item.name || '').toLowerCase()
        const category = String(item.category || '').toLowerCase()
        const promo = String(item.promo || '').toLowerCase()
        return name.includes(q) || category.includes(q) || promo.includes(q)
    })
}