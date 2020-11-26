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
 
      <div class="v-cart">
        <div class="v-cart__total">
          <p class="v-cart__total_name">Total:&nbsp;</p>
          <p>{{ cartTotalCost }} Р.</p>
        </div>
      </div>



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
    computed: {
      cartTotalCost() {
        if(this.cart_data.length !== 0) {
          let totalCosts = [];
          for(let item of this.cart_data) {
            totalCosts.push(item.price * item.quantity);
          }
          return totalCosts.reduce((p, c) => { return p + c; }, 0);
        }
        return 0;
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
      padding: $padding * 3;
      border: 1px solid black;
    }
  }

  .v-cart {
    &__total {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      padding: $padding * 3;
      display: flex;
      justify-content: center;
      background: #26ae68;
    }
    &_total_name {
      margin-right: $margin * 2;
    }
  }

</style>