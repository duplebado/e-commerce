<template>
  <div id="contain">
    <!-- <router-link to="/"
      ><div id="cancel" variant="outline-danger">-</div></router-link
    > -->

    <div id="carousel-container">
      <b-carousel
        id="carousel-1"
        :interval="4000"
        controls
        indicators
        style="text-shadow: 1px 1px 2px #333;"
      >
        <b-carousel-slide
          :img-src="`${productDetails.productPageCarousel_1}`"
          class="sizer"
        ></b-carousel-slide>
        <b-carousel-slide
          :img-src="`${productDetails.productPageCarousel_2}`"
          class="sizer"
        ></b-carousel-slide>
        <b-carousel-slide
          :img-src="`${productDetails.productPageCarousel_3}`"
          class="sizer"
        ></b-carousel-slide>
        <b-carousel-slide
          :img-src="`${productDetails.productPageCarousel_4}`"
          class="sizer"
        ></b-carousel-slide>
        <b-carousel-slide
          :img-src="`${productDetails.productPageCarousel_5}`"
          class="sizer"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <div id="right-of-carousel">
      <div id="car-name">{{ productDetails.name }}</div>
      <div id="car-price">
        Price: ₦ {{ changeToReadableFormat(productDetails.price) }}
      </div>
      <div id="general-info">
        <h6>GENERAL INFORMATION</h6>
        <hr />
        <h6>
          Make (Model)<span style="padding-right:150px"></span
          >{{ productDetails.name }}
        </h6>
        <hr />
        <h6>
          Year<span style="padding-right:217px"></span>{{ productDetails.year }}
        </h6>
        <hr />
        <h6>
          Fuel<span style="padding-right:215px"></span>{{ productDetails.fuel }}
        </h6>
        <hr />
        <h6>
          Engine<span style="padding-right:195px"></span
          >{{ productDetails.engine }}
        </h6>
        <hr />
        <h6>
          Transmission<span style="padding-right:150px"></span
          >{{ productDetails.transmission }}
        </h6>
        <hr />
      </div>
    </div>
    <div id="bottom-sub-container">
      <div id="one">
        <peculiar-information v-if="noShow" />
        <other-details v-if="show" />
      </div>
      <div id="three">
        <b-button
          variant="outline-warning"
          class="buy-btn"
          id="show-btn"
          @click="showModal(productDetails)"
          >BUY NOW</b-button
        >
        <transition name="fade">
          <b-modal ref="my-modal" hide-footer title="Cart">
            <div class="d-block text-center">
              <h5>{{ productDetails.name }} added to cart</h5>
            </div>
            <b-button
              class="mt-3"
              variant="outline-warning"
              id="modal-top"
              @click="hideModal"
              block
              >CONTINUE SHOPPING</b-button
            >
            <b-button
              class="mt-3"
              variant="outline-success"
              id="modal-bottom"
              block
              @click="proceedToCart()"
              >VIEW CART AND CHECKOUT</b-button
            >
          </b-modal>
        </transition>
      </div>

      <div id="two">
        <div id="policy-header">
          <h6 style="margin-top:5px">Delivery & Return Policy</h6>
          <hr />
        </div>
        <div id="policy-info">
          <div id="pdiv">
            <span>
              <img
                src="../assets/images/policyIcons/download.png"
                id="policy-icons"
              />
            </span>
          </div>

          <div id="policy-actual-info">
            <p class="fnt-size">Delivery Infomation</p>
            <p class="fnt-size2">
              Express delivery in Abuja and Lagos.<br />
              Normally delivered between 2-3 days for orders in other cities.
              Please check exact dates in the Checkout page
              <a class="sakamanje">See more</a>
            </p>
          </div>
        </div>

        <div id="policy-info">
          <div id="pdiv">
            <span>
              <img
                src="../assets/images/policyIcons/return.png"
                id="policy-icons"
              />
            </span>
          </div>

          <div id="policy-actual-info">
            <p class="fnt-size">Return Policy</p>
            <p class="fnt-size2">
              Free return within 30 days for Super and Luxury cars and 7 days
              for other cars
            </p>
          </div>
        </div>

        <div id="policy-info">
          <div id="pdiv">
            <span>
              <img
                src="../assets/images/policyIcons/warranty.png"
                id="policy-icons"
              />
            </span>
          </div>

          <div id="policy-actual-info">
            <p class="fnt-size">Warranty</p>
            <p class="fnt-size2">Yes</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OtherDetails from "../components/OtherDetails.vue";
import PeculiarInformation from "../components/PeculiarInformation";

export default {
  components: {
    OtherDetails,
    PeculiarInformation,
  },
  computed: {
    productDetails() {
      return this.$store.state.productDetailsDisplay;
    },
    show() {
      return this.$store.state.show;
    },
    noShow() {
      return this.$store.state.noShow;
    },
  },
  methods: {
    showModal(productDetails) {
      this.$refs["my-modal"].show();
      this.$store.commit("AddToLocalStorageShoppingCart", productDetails);
    },
    hideModal() {
      // this.$refs["my-modal"].hide();
      this.$router.push({ path: "/" });
    },
    proceedToCart() {
      this.$router.push({ path: "/cart" });
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
.fade-enter {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease-out;
}
.fade-leave {
  opacity: 0;
}
.shadow-lee {
  box-shadow: 1px 1px 10px dimgrey;
  color: rebeccapurple;
}
.sizer {
  width: 710px;
  height: 339px;
}
#modal-top {
  border: 1px solid grey;
  color: gray;
}
#modal-top:hover {
  background-color: grey;
  color: white;
}
#contain {
  float: left;
  background-color: white;
  width: 1349px;
  height: 586px;
}

#carousel-container {
  /* background-color: red; */
  border: 2px solid rebeccapurple;
  box-shadow: 1px 1px 15px dimgray;
  float: left;
  margin-left: 7px;
  margin-top: 7px;
  margin-right: 20px;
  width: 710px;
  height: 342px;
}
#right-of-carousel {
  float: left;
  /* background-color: yellow; */
  color: rgb(108, 117, 125);

  margin-left: 7px;
  margin-top: 7px;
  width: 600px;
  height: 342px;
}
#car-name {
  /* background-color: royalblue; */
  float: left;
  width: 320px;
  height: 35px;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 20px;
}
#car-price {
  /* background-color: royalblue; */
  color: rgb(108, 117, 125);
  float: left;
  width: 200px;
  height: 35px;
  margin-bottom: 5px;
  margin-left: 7px;
  font-weight: bold;
  font-size: 20px;
}
#general-info {
  /* background-color: cornflowerblue; */
  border-top: 2px solid rebeccapurple;
  float: left;
  width: 545px;
  height: 302px;
}

#bottom-sub-container {
  float: left;
  /* background-color: red; */
  width: 1349px;
  height: 237px;
}
#one {
  float: left;
  /* background-color: rebeccapurple; */
  border: 2px solid rebeccapurple;
  box-shadow: 1px 1px 15px dimgray;
  color: dimgray;
  width: 710px;
  height: 223px;
  margin-left: 7px;
  margin-top: 7px;
}

#two {
  float: left;
  /* background-color: rebeccapurple; */
  border: 2px solid rebeccapurple;
  box-shadow: 1px 1px 15px dimgray;
  color: dimgray;
  width: 430px;
  height: 223px;
  margin-left: 7px;
  margin-top: 7px;
}
#policy-header {
  margin-left: 6px;
  margin-right: 6px;
  height: 35px;
}
#policy-info {
  /* background-color: tomato; */
  margin-bottom: 7px;
  margin-left: 4px;
  float: left;
  height: 62px;
  width: 98%;
}
#policy-icons {
  color: rebeccapurple;
  font-weight: bold;
  width: 45px;
  height: 38px;
}
#pdiv {
  float: left;
  margin-top: 2px;
  margin-right: 4px;
  width: 45px;
  height: 38px;
}
#policy-actual-info {
  float: left;
  /* background-color: red; */
  height: 100%;
  width: 365px;
}

#three {
  float: left;
  border: 2px solid rebeccapurple;
  box-shadow: 1px 1px 15px dimgray;
  /* background-color:rebeccapurple; */
  width: 182px;
  height: 223px;
  margin-left: 7px;
  margin-top: 7px;
}
#compare-btn {
  float: left;
  background-color: whitesmoke;
  border: 2px solid dimgray;
  border-radius: 30px;
  box-shadow: 1px 1px 15px dimgray;
  color: rebeccapurple;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 8.5px;
  margin-top: 28.5px;
  margin-left: 8.5px;
  padding-top: 10px;
  height: 60px;
  text-align: center;
  width: 160px;
  background-color: tomato;
}
#buy-btn {
  float: left;
  background-color: whitesmoke;
  border: 2px solid dimgray;
  border-radius: 30px;
  box-shadow: 1px 1px 15px dimgray;
  color: rebeccapurple;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 38.5px;
  margin-top: 70.5px;
  margin-left: 8.5px;
  padding-top: 10px;
  height: 60px;
  text-align: center;
  width: 160px;
  background-color: tomato;
}
.buy-btn {
  float: left;
  background-color: whitesmoke;
  border: 2px solid dimgray;
  border-radius: 30px;
  box-shadow: 1px 1px 15px dimgray;
  color: rebeccapurple;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 38.5px;
  margin-top: 70.5px;
  margin-left: 8.5px;
  padding-top: 10px;
  height: 60px;
  text-align: center;
  width: 160px;
  background-color: rgb(255, 193, 7);
}
.fnt-size {
  font-size: 11px;
  font-weight: bold;
}
.fnt-size2 {
  margin-top: -16px;
  font-size: 11px;
}
.sakamanje {
  text-decoration: underline;
  color: blue;
}
</style>
