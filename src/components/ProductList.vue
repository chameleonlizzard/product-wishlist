<template>
  <div class="productlist">      
    <v-list>
      <v-list-item v-for="product in products" :key="product.productName">
        <Product :product="product" />
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import Product from "./Product.vue";

export default {
  components: { Product },
  name: "ProductList",
  props: ['products'],
};
</script>

<style scoped>
</style>