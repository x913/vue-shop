<template>
  <div class="v-catalog">
    <router-link :to="{ name: 'cart', params: {cart_data: CART} }">
      <div class="v-catalog__link_to_cart">Cart: {{ CART.length }}</div>
    </router-link>
    <h1>Catalog {{ title }}</h1>
    <div class="v-catalog__list">
      <vCatalogItem
        @add-to-cart="addToCart"
        v-for="product_data in PRODUCTS"
        :key="product_data.id"
        v-bind:product_data="product_data"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS", "ADD_TO_CART"]),
    addToCart(product) {
      this.ADD_TO_CART(product);
    },
  },
  data() {
    return {
      title: "",
    };
  },
  mounted() {
    this.GET_PRODUCTS();
  },
};
</script>

<style lang="scss">
.v-catalog {
  &__link_to_cart {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding * 2;
    border: 1px solid black;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
}
</style>