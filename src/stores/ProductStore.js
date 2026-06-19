import { defineStore } from "pinia";
import Data from "../data/data.json";

export const useProductstore = defineStore ( "product", {
    state : () =>({
        products: [],
        product: {},
        loading: false

    }),
    getters: {
        filterBycategory: (state)=>{
            return (category) => {
                if(category === 'all'){
                   return state.products;
                }
                return state.products.filter(
                    item => item.category === category
                );
            }   
        }
    },
    actions: {
        //fetch all products
        fetchProducts() {
            try {
                this.products = Data;
                this.loading = true;
            } catch (err) {
                console.error('Product Not Fount', err)
            }  
        },

        // fetch single product by id
        fetchProduct(id) {
            this.product = this.products.find(
                p => p.id === Number(id)

            );
        }

    }
})