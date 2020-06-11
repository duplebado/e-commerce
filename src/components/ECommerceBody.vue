<template>
  <div>
    <b-card id="custom">
      <img :src="img[0]" class="img-size" />
      <b-card-text class="product-text">
        <p class="carName">{{ info.name }}</p>
        <p>₦ {{ changeToReadableFormat(info.price) }}</p>
      </b-card-text>

      <a href="#" @click="redirectToCorrespondingProductDetailsPage(info)">
        <b-button id="custom-style">
          DETAILS
        </b-button>
      </a>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "EcommerceBody",
  props: {
    info: {
      type: Object,
    },
  },
  data() {
    return {
      img: [
        {
          imgUrl: require("https://my-ecommercev1.herokuapp.com/uploads/2020-06-10T16-32-30.038Z0.jpg"),
        },
      ],
    };
  },
  methods: {
    redirectToCorrespondingProductDetailsPage(info) {
      this.$store.commit("putSomethingInproductDetailsDisplay", info);

      this.$router.push({ path: "/car-details" });
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
  },
};
</script>

<style scoped>
.img-size {
  /* margin-left: 70px; */
  width: 300px;
  height: 250px;
}
.product-text {
  font-family: "Franklin Gothic Medium", "Arial Narrow", "Arial, sans-serif";
  font-weight: bold;
  color: dimgray;
  text-align: center;
}
.carName {
  color: dimgrey;
}
#custom {
  /* border:1px solid grey; */
  box-shadow: 1px 1px 10px dimgrey;
  float: left;
  /* display: inline-block; */
  margin: 10px;
  height: 400px;
  width: 344px;
}

#custom-style {
  background-color: rebeccapurple;
}
</style>
