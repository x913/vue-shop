<template>
<!-- eslint-disable -->
  <div class="v-cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="v-cart__link-to-catalog">Back to catalog</div>
    </router-link>
    <h1>Cart</h1>

    <p v-if="cart_data.length === 0">There are no products in your cart</p>

    <vCartItem 
      v-for="(item, index) in cart_data" 
      :key="index" 
      :index="index"
      :cart_item_data="item"
      @remove-item-from-cart="removeItemFromCart"
      />
 

  </div>
</template>

<script>

import vCartItem from './v-cart-item';
import { mapActions } from 'vuex';

export default {
    components: { vCartItem },
    methods: {
      ...mapActions([
        'DELETE_FROM_CART'
      ]),
      removeItemFromCart(index) {
        this.DELETE_FROM_CART(index);
      }
    },
    props: {
      cart_data: {
        type: Array,
        default() {
          return []
        }
      }
    }
}
</script>

<style lang="scss">
  .v-cart {
    &__link-to-catalog {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: $padding * 2;
      border: 1px solid black;
    }
  }
</style>