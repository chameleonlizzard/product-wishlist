<template>
  <div class="wishlist">
    <h2 class="pa-2">Wishlist</h2>
    <p v-if="wishlist.length === 0">There are no products on the wishlist</p>

    <v-list>
      <v-list-item v-for="item in wishlist" :key="item.productName">
        <v-list-item-content>
          <v-list-item-title class="pr-3">
            {{ item.productName }}
            <v-badge
              ><span slot="badge">{{ item.quantity }}</span></v-badge
            >
          </v-list-item-title>
          <v-list-item-subtitle>
            <v-btn small icon type="button" color="primary" @click="changeQuantity(item)"><v-icon>mdi-plus-box</v-icon></v-btn>
            <v-btn small icon type="button" color="primary" @click="changeQuantity(item, 'decrease')"><v-icon>mdi-minus-box</v-icon></v-btn>
            <v-btn small icon type="button" color="error" @click="removeItem(item)"><v-icon>mdi-trash-can-outline</v-icon></v-btn>
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