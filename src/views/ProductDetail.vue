<template>
  <div class="container mt-4">
    <h1 class="text-center pt-5 mt-5 " v-if="isLoading">
      Loading...
    </h1>
    <div v-else class="row">
      <div class="col-md-4">
        <img :src="product.image" class="img-fluid" alt="" />
      </div>
      <div class="col-md-8 p-5">
        <h1 class="display-4">{{ product.title }}</h1>
        <div class="h3 text-muted mt-5">{{ product.price }} KS</div>
        <div class="mt-5">{{ product.description }}</div>
        <div class="mt-5">
          <router-link class="btn btn-outline-secondary" to="/products"
            >Go Back</router-link
          >
          <button class="btn btn-primary float-right">Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductDetail",
  data() {
    return {
      isLoading: false,
      product: {}
    };
  },
  created() {
    this.isLoading = true;
    axios
      .get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
      .then(response => {
        this.product = response.data;
        this.isLoading = false;
      })
      .catch(err => {
        this.isLoading = false;
        console.log(err);
      });
  }
};
</script>

<style>
</style>