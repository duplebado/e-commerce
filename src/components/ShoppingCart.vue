<template>
  <div id="cart-container">
    <div class="div-border-1">
      <div id="image">
        <img :src="`${car.homePageImageDisplay}`" />
      </div>
      <div id="product-name">{{ car.name }}</div>
      <div id="buttons">
        <button type="button" id="delete-button" @click="deleteItem(car.id)">
          delete
        </button>
      </div>
    </div>
    <div id="div-border-2">
      <div id="select-div">
        <b-form-select
          class="sizer"
          v-model="selected"
          :options="options"
        ></b-form-select>
      </div>
    </div>
    <div class="div-border-3">
      <div id="unit-price">{{ changeToReadableFormat(car.price) }}</div>
    </div>
    <div class="div-border-4">
      <div id="sub-total">
        {{ changeToReadableFormat(changeCountNumber(car.price)) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    car: {
      type: Object,
    },
  },
  data() {
    return {
      selected: "1",
      options: [
        { value: "1", text: 1 },
        { value: "2", text: 2 },
        { value: "3", text: 3 },
        { value: "4", text: 4 },
        { value: "5", text: 5 },
        { value: "6", text: 6 },
        { value: "7", text: 7 },
        { value: "8", text: 8 },
        { value: "9", text: 9 },
        { value: "10", text: 10 },
      ],
    };
  },
  methods: {
    changeCountNumber(price) {
      return this.selected * price;
    },
    changeToReadableFormat(price) {
      let stringedPrice = String(price).split("");
      let count = 0;

      if (stringedPrice.length % 3 == 0) {
        let numberOfCommasToInsert = stringedPrice.length / 3 - 1;

        for (let i = 1; i <= numberOfCommasToInsert; i++) {
          if (count == 0) {
            stringedPrice.splice(3, 0, " ");
            count++;
          } else {
            let whereToInsertTheComma = i * 3 + count;
            stringedPrice.splice(whereToInsertTheComma, 0, " ");
            count++;
          }
        }
        return stringedPrice.join("");
      } else {
        let whereTheFirstCommaShouldBe = stringedPrice.length % 3;
        let numberOfCommasToInsert =
          (stringedPrice.length - whereTheFirstCommaShouldBe) / 3;

        for (let i = 0; i < numberOfCommasToInsert; i++) {
          if (count == 0) {
            stringedPrice.splice(whereTheFirstCommaShouldBe, 0, " ");
            count++;
          } else {
            let whereToInsertTheComma =
              i * 3 + whereTheFirstCommaShouldBe + count;

            stringedPrice.splice(whereToInsertTheComma, 0, " ");
            count++;
          }
        }
        return stringedPrice.join("");
      }
    },
    deleteItem(id) {
      // this.$emit("delete");
      // state.shoppingCart = JSON.parse(localStorage.getItem("userCart"));
      this.$store.commit("deleteFromLocalStorageShoppinCart", id);
    },
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
  /* background-color: yellow; */
  float: left;
  margin-top: 9.5px;
  margin-left: 9.5px;
  width: 100px;
  height: 90px;
}
img {
  width: 100px;
  height: 90px;
}
#product-name {
  /* background-color: turquoise; */
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
  color: red;
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
  float: left;
}
.sizer {
  /* background-color: pink; */
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
#unit-price {
  float: left;
  font-size: 20px;
  text-align: center;
  margin-top: 35px;
  margin-left: 19px;
  /* background: red;3 */
  width: 200px;
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
#sub-total {
  float: left;
  font-size: 20px;
  text-align: center;
  margin-top: 35px;
  margin-left: 19px;
  /* background: red; */
  width: 200px;
  height: 44px;
}
#delete-button {
  background-color: red;
  color: white;
  width: 60px;
  border: 0.1px solid red;
}
</style>
