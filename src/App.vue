<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center"></div>

      <v-spacer></v-spacer>
      <v-btn icon @click="drawer = true">
        <v-icon>mdi-star</v-icon>
        <v-badge>
          <span :slot="badge">{{totalQuantity}}</span>
        </v-badge>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute right temporary>
      <Wishlist></Wishlist>
    </v-navigation-drawer>
    <v-main>
      <ProductPage />
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import Wishlist from "./components/Wishlist.vue";
import ProductPage from "./pages/ProductPage";

export default {
  name: "App",

  components: {
    ProductPage,
    Wishlist,
  },
  computed: {
    ...mapState({
      wishlist: (state) => state.wishlist,
    }),
    totalQuantity() {
      return this.wishlist.reduce((total, next) => {
        return total + next.quantity
      }, 0)
    }
  },
  data: () => ({
    drawer: false,
  }),
};
</script>
