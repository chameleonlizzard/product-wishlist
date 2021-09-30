<template>
  <div class="ProductPage v-list">
    <ProductList :products="products" />
  </div>
</template>

<script>
import ProductData from "../data/products.json";
import ProductList from "../components/ProductList.vue";

export default {
  name: "ProductPage",
  components: {
    ProductList
  },
  data() {
    return {
      products: ProductData,
    };
  },
};
</script>

<style scoped>
</style>