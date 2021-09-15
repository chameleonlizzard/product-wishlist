<template>
  <div class="product">
    {{ product.productName }}
    <v-btn small type="button" @click="addProductToWishlist()">Add</v-btn>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Product",
  props: ["product"],
  computed: {
    ...mapState({
      wishlist: (state) => state.wishlist,
    }),
    productAlreadyInWishlist() {
      let inWishlist = false;

      this.wishlist.forEach((item) => {
        if (item.productName === this.product.productName) {
          inWishlist = true;
        }
      });

      return inWishlist;
    },
  },
  methods: {
    addProductToWishlist() {
        if(!this.productAlreadyInWishlist) {
            this.$store.commit("addToWishlist", this.product);
        } else {
            alert("Product is already added to the wishlist");
        }
    },
  },
};
</script>

<style scoped>
</style>