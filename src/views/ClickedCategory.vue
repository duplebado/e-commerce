<template>
  <div id="category-container">
    <!-- {{ this.$route.params.link }} -->
    <div id="left"><ECommerceCategory /></div>
    <div id="right">
      <div id="name-of-category">
        <h6>{{ this.$route.params.link }}</h6>
      </div>
      <div id="number-of-products-found">
        <h6>{{ productItem.length }} product(s) found</h6>
      </div>
      <div id="category-content">
        <e-commerce-body v-for="car in productItem" :key="car.id" :info="car" />
      </div>
    </div>
  </div>
</template>

<script>
import ECommerceCategory from "../components/ECommerceCategory.vue";
import ECommerceBody from "../components/ECommerceBody.vue";

export default {
  components: {
    ECommerceCategory,
    ECommerceBody,
  },
  computed: {
    productItem() {
      return this.$store.state.category;
    },
  },
  // data() {
  //   return {
  //     productItem: null,
  //   };
  // },
  // computed(){
  //   console.log()
  // },
  // created() {
  //   console.log(this.$store.state.carsFromAPI);
  //   this.productItem = this.$store.state.carsFromAPI.filter((item) => {
  //     return item.categoryLink === this.$route.params.link;
  //   });
  //   console.log(
  //     "these are the cars available in this category: ",
  //     this.productItem
  //   );
  // },

  // data() {
  //   return {
  //     productItem: "",
  //   };
  // },
  // computed: {
  //   currentCarsThatBelongToThisCategory() {
  //     if (!this.$store.state.category.length) {
  //       return null;
  //     } else {
  //       return this.$store.state.category;
  //     }
  //     // return this.$store.state.category;
  //   },
  //   numberOfCarsInCategory() {
  //     return this.$store.state.category.length;
  //   },
  //   nameOfCategory() {
  //     return this.$store.state.category[0].category;
  //   },
  // },
};
</script>

<style>
#category-container {
  color: dimgray;

  width: 100vw;
  min-height: 100px;
  /* background-color: yellow; */
}
#left {
  margin-top: 5px;
  border: 1px solid dimgrey;
  float: left;
  width: 18%;
  min-height: 30px;
  margin: 4px 2px 2px 2px;
  padding-bottom: 3px;
  margin-left: 10px;
  border-radius: 5px;
}
#right {
  float: left;
  width: 80%;
  margin-top: 5px;
  margin-left: 6px;
  min-height: 300px;
  background-color: transparent;
  border-radius: 5px;
  margin-bottom: 5px;
}
#name-of-category {
  width: 100%;
  height: 30px;
  background-color: white;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  margin-bottom: 2px;
}
#number-of-products-found {
  width: 100%;
  height: 30px;
  background-color: white;
  margin-bottom: 2px;
}
#category-content {
  float: left;
  min-width: 100%;
  min-height: 20px;
  margin-top: -4px;
  margin-left: -6px;
  /* background-color: white; */
}
h6 {
  padding-top: 4.5px;
  padding-left: 12px;
}
</style>
