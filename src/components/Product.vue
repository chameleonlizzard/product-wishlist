<template>
  <div class="product v-list-item elevation-1">
    <v-btn small icon type="button" @click="addProductToWishlist()"><v-icon>mdi-plus-box</v-icon></v-btn>
    <div class="v-list-item__content px-4">
      {{ product.productName }}
    </div>
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
      if (!this.productAlreadyInWishlist) {
        this.$store.commit("addToWishlist", this.product);
      } else {
        let item = this.wishlist.find(wishlistItem =>  wishlistItem.productName === this.product.productName);
        item.quantity = item.quantity + 1;
        this.$store.commit("updateWishlistItem", item);
      }
    },
  },
};
</script>

<style scoped>
</style>