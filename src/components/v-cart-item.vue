<template>
  <div class="v-cart-item">
    <img class="v-cart-item__image" :src=" require('../assets/images/' + cart_item_data.image) " alt="img">
    <div class="v-cart-item__info">
      <p>{{cart_item_data.name}}</p>
      <p class="v-cart-item__price">{{cart_item_data.price}}</p>
      <p>{{cart_item_data.article}}</p>
    </div>
    <div class="v-cart-item_quantity">
      <p>
        Quantity:
      </p>
        {{cart_item_data.quantity}}
    </div>
    <button class="btn" @click="removeFromCart">delete</button>
  </div>
</template>

<script>
export default {
    props: {
      cart_item_data: {
        type: Object,
        default() {
          return {}
        }
      },
      index: {
        type: Number,
        default() {
          return 0;
        }
      }
    },
    methods: {
      removeFromCart() {
        this.$emit('remove-item-from-cart', this.index);
      }
    },
    mounted() {
      this.$set(this.cart_item_data, 'quantity', 1);
    }
}
</script>

<style lang="scss">
  .v-cart-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding: $padding * 2;
    margin-bottom: $margin * 2;
    box-shadow: 0 0 8px 0 #e0e0e0;
    border-radius: $radius;

    &__image {
      max-width: 50px;
    }
  }

</style>