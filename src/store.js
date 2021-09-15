import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        wishlist: JSON.parse(localStorage.getItem('wishlist')) || []
    },
    mutations: {
        addToWishlist(state, item) {
            item.quantity = 1;
            state.wishlist.push(item)
            localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
        },
        updateWishlistItem(state, updatedItem) {
            state.wishlist = state.wishlist.map((wishlistItem) => {
                if (wishlistItem.productName == updatedItem.productName) {
                    return updatedItem;
                }

                return wishlistItem;
            });

            localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
        },
        removeWishlistItem(state, item) {
            state.wishlist = state.wishlist.filter((wishlistItem) => {
                return wishlistItem.productName != item.productName;
            })

            localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
        }
    }
})