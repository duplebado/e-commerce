<template>
  <div id="app">
    <div id="container">
      <div id="left-content">
        <ECommerceCategory />
      </div>

      <div id="slider">
        <ECommerceSlider />
      </div>

      <div id="right-content">
        <ECommerceBody v-for="info in cars" :key="info.id" :info="info" />
      </div>
    </div>
  </div>
</template>

<script>
import ECommerceCategory from "../components/ECommerceCategory.vue";
import ECommerceBody from "../components/ECommerceBody.vue";
import ECommerceSlider from "../components/ECommerceSlider.vue";

export default {
  name: "App",
  components: {
    ECommerceCategory,
    ECommerceBody,
    ECommerceSlider,
  },
  computed: {
    cars() {
      // console.log("Home page: ", this.$store.state.carsFromAPI);

      return this.$store.state.carsFromAPI;
    },
  },
};
</script>

<style scoped>
#container {
  width: 1349px;
  min-height: 600px;
}
#slider {
  background-color: dimgray;
  float: right;
  width: 79.3%;
  min-height: 20px;
  border-radius: 5px;
  margin: 4px 2px 2px 2px;
  margin-right: 15px;
}
#left-content,
#right-content {
  border-radius: 5px;
  margin: 4px 2px 2px 2px;
}
#left-content {
  margin-top: 5px;
  border: 1px solid dimgrey;
  float: left;
  width: 18%;
  min-height: 30px;
  padding-bottom: 3px;
  margin-left: 10px;
}
#right-content {
  float: right;
  width: 81%;
  min-height: 596px;
}
#footer {
  float: left;
  background-color: dimgray;
  width: 98.79vw;
  min-height: 100px;
}
</style>
