<template>
  <div class="wishlist">
    <h2>Wishlist</h2>
    <p v-if="wishlist.length === 0">There are no products on the wishlist</p>

    <v-list>
      <v-list-item v-for="item in wishlist" :key="item.productName">
        <v-list-item-content>
          <v-list-item-title>
            {{ item.productName }}
            <v-badge
              ><span slot="badge">{{ item.quantity }}</span></v-badge
            >
          </v-list-item-title>
          <v-list-item-subtitle>
            <v-btn small type="button" @click="removeItem(item)">X</v-btn>
            <v-btn small type="button" @click="changeQuantity(item)">+</v-btn>
            <v-btn small type="button" @click="changeQuantity(item, 'decrease')"
              >-</v-btn
            >
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Wishlist",
  computed: {
    ...mapState({
      wishlist: (state) => state.wishlist,
    }),
  },
  methods: {
    changeQuantity(item, action = "increase") {
      if (action === "increase") {
        item.quantity = item.quantity + 1;
        this.$store.commit("updateWishlistItem", item);
      } else {
        if (item.quantity > 1) {
          item.quantity = item.quantity - 1;
          this.$store.commit("updateWishlistItem", item);
        } else {
          this.$store.commit("removeWishlistItem", item);
        }
      }
    },
    removeItem(item) {
      this.$store.commit("removeWishlistItem", item);
    },
  },
};
</script>

<style scoped>
</style>