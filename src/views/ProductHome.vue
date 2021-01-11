<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-4 mb-4" v-for="product in products" :key="product.id">
        <div class="card">
          <div class="card-body text-center">
            <img :src="product.image" class="img-fluid p-img" alt="" />
            <h3 class="font-weight-bold">{{ product.title }}</h3>
            <div class="text-muted my-4">{{ product.price }} KS</div>
            <router-link
              class="btn btn-primary btn-block"
              :to="`/products/${product.id}`"
              >More Detail</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProductHome",
  data() {
    return {
      products: []
    };
  },
  created() {
    axios
      .get("https://fakestoreapi.com/products")
      .then(res => {
        this.products = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style>
.p-img {
  height: 100px;
}
</style>