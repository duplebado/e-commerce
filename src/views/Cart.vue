<template>
  <div id="container">
    <div class="center" v-if="isSomethingInCart">
      <div id="ordersbox">
        <h4>Cart ({{ numberOfCarsInCart }} items)</h4>
        <b-container class="bv-example-row mb-3">
          <b-row>
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
        <div>
          <shoppingCart v-for="car in carsInCart" :key="car.id" :car="car" />
        </div>
      </div>
    </div>
    <div id="sub-container" v-else>
      <h4>
        shopping cart is empty. Please continue shopping and click "BUY" to add
        to Cart
      </h4>
    </div>
  </div>
</template>

<script>
import shoppingCart from "../components/ShoppingCart.vue";

export default {
  components: {
    shoppingCart,
  },

  computed: {
    carsInCart() {
      console.log(JSON.parse(localStorage.getItem("userCart")));
      return JSON.parse(localStorage.getItem("userCart"));
      //   // return this.$store.state.shoppingCart;
    },
    numberOfCarsInCart() {
      // console.log(JSON.parse(localStorage.getItem("userCart")));
      return JSON.parse(localStorage.getItem("userCart")).length;
      // return this.$store.state.shoppingCart;
    },
    isSomethingInCart() {
      console.log(!!JSON.parse(localStorage.getItem("userCart")));
      return !!JSON.parse(localStorage.getItem("userCart")).length > 0;
    },
  },
  // methods: {
  //   deleteCar(id) {
  //     console.log(id);
  //     let cart = JSON.parse(localStorage.getItem("userCart"));
  //     cart.forEach((item, index) => {
  //       if (item.id === id) {
  //         cart.splice(index, 1);
  //       }
  //     });
  //     localStorage.setItem("userCart", JSON.stringify(cart));
  //   },
  // },
};
</script>

<style scoped>
#container {
  font-family: "Franklin Gothic Medium", "Arial Narrow", "Arial, sans-serif";
  /* background-color: whitesmoke; */
  width: 100vw;
  min-height: 350px;
}
h4 {
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
#sub-container {
  float: left;
  width: 850px;
  height: 30px;
  margin-top: 150px;
  margin-left: 250px;
  /* color: grey; */
  /* text-align: center; */
  background-color: whitesmoke;
}
</style>
