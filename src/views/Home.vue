<template>
  <div class="home">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from "../components/ProductListOne";
import ProductListTwo from "../components/ProductListTwo";

export default {
  name: "Home",
  components: {
    "product-list-one": ProductListOne,
    "product-list-two": ProductListTwo
  },
  data() {
    return {};
  }
};
</script>

<style>
body {
  font-family: Ubuntu;
  color: #555;
}
</style>