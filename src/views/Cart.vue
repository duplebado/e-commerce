<template>
  <div id="container">
    <!-- <div>
      <h1>.......Oops, shopping cart is empty</h1>
    </div> -->
    <div class="center">
      <div id="ordersbox">
        <h4>Cart (n items)</h4>
        <b-container class="bv-example-row mb-3">
          <b-row >
            <b-col cols="12" md="5">
              <div style="text-align: left; color:rgb(63,66,68)">CAR</div>
            </b-col>
            <b-col cols="12" md="2">
              <div style=":rgb(63,66,68)">QUANTITY</div>
            </b-col>
            <b-col>
              <div style="color:rgb(63,66,68)">UNIT PRICE</div>
            </b-col>
            <b-col>
              <div style="color:rgb(63,66,68)">SUBTOTAL</div>
            </b-col>
          </b-row>
        </b-container>
        <shoppingCart />
        <shoppingCart />

      </div>
    </div>
  </div>
</template>

<script>
import shoppingCart from "../components/ShoppingCart.vue";

export default {
  components: {
    shoppingCart,
  },
};
</script>

<style scoped>
#container {
  font-family: "Franklin Gothic Medium", "Arial Narrow", "Arial, sans-serif";
  background-color: whitesmoke;
  width: 100vw;
  min-height: 350px;
}
h4{
    text-align: left;
}
.center {
  text-align: center;
}
#ordersbox {
  margin-top: 20px;
  background-color: whitesmoke;
  width: 84%;
  height: 300px;
  display: inline-block;
  /* padding-top: 150px; */
}
</style>
