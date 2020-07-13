<template>
  <div id="product-list-one">
    <div class="non-sale-products">
      <h2>Product List One NON-SALE PRODUCT</h2>
      <ul>
        <li v-for="product in products" v-bind:key="product.name">
          <span class="name">{{ product.name }}</span>
          <span class="price">${{ product.price }}</span>
        </li>
      </ul>
    </div>
    <div class="sale-products">
      <h2>Product List One SALE PRODUCT</h2>
      <ul>
        <li v-for="product in saleProductsOne" v-bind:key="product.name">
          <span class="name">{{ product.name }}</span>
          <span class="price">${{ product.price }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductListOne",
  data() {
    return {};
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    saleProductsOne() {
      return this.$store.getters.saleProductsOne;
    }
  }
};
</script>

<style scoped>
#product-list-one {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-one ul {
  padding: 0;
}
#product-list-one li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #e8800c;
}
</style>