<template>
  <div id="cart-container">
    <form action="" method="post">
      <div class="div-border-1">
        <div id="image"></div>
        <div id="product-name"></div>
        <div id="buttons"><button>Delete from cart</button></div>
      </div>
      <div id="div-border-2">
        <div id="select-div">
          <b-form-select class="sizer" v-model="selected" :options="options"></b-form-select>
        </div>
      </div>
      <div class="div-border-3">
          <div id="unit-price"> ₦100,000,000</div>
      </div>
      <div class="div-border-4">
          <div id="sub-total">₦100,000,000</div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "shoppingCart",
  data() {
    return {
      selected: null,
      options: [
        { value: "a", text: 1 },
        { value: "b", text: 2 },
        { value: "c", text: 3 },
        { value: "d", text: 4 },
        { value: "e", text: 5 },
      ],
    };
  },
};
</script>

<style scoped>
#cart-container {
  /* background-color: yellow; */
  width: 100%;
  height: 110px;
  text-align: left;
  margin-bottom: 10px;
  /* border-radius: 200px; */
}

.div-border-1 {
  background-color: white;
  width: 500px;
  height: 110px;
  border-right: 1px solid black;
  display: inline-block;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
}
#image {
  background-color: yellow;
  float: left;
  margin-top: 9.5px;
  margin-left: 9.5px;
  width: 100px;
  height: 90px;
}
#product-name {
  background-color: turquoise;
  float: left;
  width: 372px;
  height: 60px;
  margin-top: 9.5px;
  margin-left: 9.5px;
}
#buttons {
  /* background-color: tomato; */
  float: left;
  width: 372px;
  height: 24px;
  margin-left: 9.5px;
}
button {
  margin-left: 221.5px;
  /* background-color: red; */
  color:red;
  font-size: 15px;
  font-weight: normal;
  width: 150px;
  height: 25px;
}
#div-border-2 {
  background-color: white;
  width: 167px;
  height: 110px;
  border-right: 1px solid black;
  display: inline-block;
}
#select-div {
  /* background-color: violet; */
  /* margin-top: 28px; */
  margin-left: 44px;
  width: 70px;
  height: 50px;
  margin-top: -40px;
  float:left;
}
.sizer {
  width: 70px;
  height: 50px;
  margin-top: 70px;
  /* padding-top: 30px; */
}
.div-border-3 {
  background-color: white;
  width: 240px;
  height: 110px;
  border-right: 1px solid black;
  display: inline-block;
}
#unit-price{
    float: left;
    font-size: 20px;
    text-align: center;
    margin-top: 35px;
    margin-left: 19px;
    /* background: red;3 */
    width:200px;
    height: 44px;
}
.div-border-4 {
  background-color: white;
  width: 240.4px;
  height: 110px;
  display: inline-block;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
}
#sub-total{
    float: left;
    font-size: 20px;
    text-align: center;
    margin-top: 35px;
    margin-left: 19px;
    /* background: red; */
    width:200px;
    height: 44px;
}
</style>
