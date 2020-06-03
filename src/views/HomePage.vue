<template>
  <div id="app">
    <div id="container">
      <div id="left-content">
        <ECommerceCategory />
      </div>

      <div id="slider" style="margin-right: 15px">
        <ECommerceSlider />
      </div>

      <div id="right-content">
        <ECommerceBody />
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
};
</script>

<style scoped>
#container {
  width: 100% vw;
  min-height: 600px;
}
#slider {
  background-color: dimgray;
  float: right;
  width: 79%;
  min-height: 20px;
  border-radius: 5px;
  margin: 4px 2px 2px 2px;
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
