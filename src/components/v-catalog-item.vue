<template>
  <div class="v-catalog-item">
      <img class="v-catalog-item__image" :src=" require('../assets/images/' + product_data.image) " alt="img">
      <p class="v-catalog-item__name">{{product_data.name}}</p>
      <p class="v-catalog-item__price">{{product_data.price}} P.</p>
      <button
        class="v-catalog-item__add_to_cart_btn btn"
        @click="addToCart">
          Add to cart
        </button>
  </div>
</template>

<script>
export default {
    props: {
        product_data: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.product_data);
        }
    }
}
</script>

<style lang="scss">
 
    .v-catalog-item {
        width: 250px;
        flex-basis: 25%;    // каждый дочерний элемент контейнера будет занимать 25% от ширины максимум
        box-shadow: 0 0 8px 0 #e0e0e0;
        border-radius: $radius;
        padding: $padding * 2;
        margin-bottom: $margin * 2;
        &__name {
            font-size: 18px;
        }
        &__image {
            width: 100px;
        }
    }
</style>