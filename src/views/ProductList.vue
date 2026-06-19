<template>
  <div>
    <Hero/>
  </div>
  <div class="">
    <h1 class="text-center Categ">Our Categories</h1>
  </div>
  <div class="container mt-5">
    <div class="row ">
        <div class="col-lg-12 col-md-12 col-12 ">
            <ul class="list-unstyled mt-5 mb-0 lists ">
              <li>
                <router-link class="list-rout lists-hover focus-ring" to="/productList/all">All</router-link>
              </li>
              <li>
                  <router-link class="list-rout lists-hover focus-ring" to="/productList/laptop">Laptop</router-link>
              </li>
              <li>
                <router-link class="list-rout lists-hover focus-ring" to="/productList/headphone">Headphone</router-link>
              </li>
              <li>
                <router-link class="list-rout lists-hover focus-ring" to="/productList/controller">Controller</router-link>
              </li>
              <li>
                <router-link class="list-rout lists-hover focus-ring" to="/productList/watch">iWatch</router-link>
              </li>
            </ul>
        </div>
    </div>
  </div>
  <div>
      <Productcard
        :products = 'filterProducts'
        
      />
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router';  
  import Hero from '../components/Hero.vue';
  import Productcard from '../components/Productcard.vue';
  import { useProductstore } from '../stores/ProductStore.js';
  import { computed, onMounted } from 'vue';

  const route = useRoute();
  const store = useProductstore();
  onMounted(() => {
    store.fetchProducts();
  });

  const filterProducts = computed(() => {
    return store.filterBycategory(route.params.category);
  })
  
</script>

<style scoped>
  .Categ{
    margin-top: 200px;
    color: #96e00b;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-shadow: 2px 2px 5px;
  }
  .lists{
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 40px;
    font-size: 23px;
    font-weight: 500;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
  .lists .list-rout{
    text-decoration: none;
    color: #96e00b;
  }
  .lists .lists-hover {
        position: relative;
        color: rgba(87, 209, 12, 0.78);
        border-radius: 999px;
        padding: 9px 14px;
        /* font-size: 0.98rem; */
        /* font-weight: 700; */
        transition: color 0.2s ease, background-color 0.2s ease;
    }
  .lists-hover:hover,
  .lists-hover.active {
      color: #121111;
      background: rgba(88, 209, 12, 0.354);
  }
  .focus-ring:focus{
    color: #121111;
    background: rgba(88, 209, 12, 0.354);
    
  }
  @media (max-width: 576px){
  .lists .list-rout{
    margin: 0;
    padding: 0;
    padding: 9px 14px;
    font-size: 18px;

   
  }
  .lists{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* grid-template-columns: repeat(4, 3fr); ✅ កែពី fr ទៅ 1fr */
    text-align: center;
    justify-items: center;
    row-gap: 15px;      
    
    font-weight: 500;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
  .list-rout{
    font-size: 15px;
  }
}

</style>