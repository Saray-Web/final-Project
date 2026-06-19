import { defineStore } from "pinia";

const cartItem = defineStore ('card', {
    state: (state) => ({
        cart: []
    }),

    getters: {
        countCart: (state) => {
            return state.cart.length;
        },
        countTotal: (state) => {
            return state.cart.reduce((total, item) => {
                return total + (item.price * item.qty)
            }, 0)
        },
        countQty: (state) => {
            return state.cart.reduce((total, item) => {
                return total + item.qty;
            }, 0);
        },
        tax() {
            return this.countTotal * 0.10;
        },

        grandTotal() {
            return this.countTotal + this.tax;
        }
        

    },

    actions: {
        addtoCart(product) {
            const exiting = this.cart.find(item => (
                item.id === product.id
            ))
            if(exiting){
                exiting.qty ++
            } else {
                this.cart.push ({
                    ...product,
                    qty: 1
                })
            }
        },
        increaseQty(id){
            const item = this.cart.find(item => item.id == id);
            if(item){
                item.qty++
            }
        }, 
        decreaseQty(id){
            const item = this.cart.find(item => item.id == id);
            if(item && item.qty > 1){
                item.qty--
            }
        },
        // Delete Product មួយ
        removeItem(id) {
            this.cart = this.cart.filter(item => item.id !== id);
        },

        // Delete ទាំងអស់
        clearCart() {
            this.cart = [];
        } 
    }
})
export default cartItem;