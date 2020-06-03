<template>
  <div>
    <!-- <b-dropdown id="dropdown-offset" offset="25" text="Category" class="m-2">
          <b-dropdown-item href="#">Sedan</b-dropdown-item>
          <b-dropdown-item href="#">Saloon</b-dropdown-item>
          <b-dropdown-item href="#">Coupe</b-dropdown-item>
          <b-dropdown-item href="#">Trucks</b-dropdown-item>
          <b-dropdown-item href="#">SUV</b-dropdown-item>
          <b-dropdown-item href="#">Mini Van</b-dropdown-item>
          <b-dropdown-item href="#">Super Cars</b-dropdown-item>
          <b-dropdown-item href="#">Bus</b-dropdown-item>
        </b-dropdown> -->
    <div id="menu-container" v-for="item in menu" :key="item">
      <div id="menu-option">{{ item }}</div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  name: "ECommerceCategory",
  data() {
    return {
      menu: {
        1: "Sedan",
        2: "Saloon",
        3: "Coupe",
        4: "Trucks",
        5: "SUV",
        6: "Mini",
        7: "Super Cars",
        8: "Bus",
      },
    };
  },
};
</script>

<style scoped>
#menu-container {
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 2px;
  padding-top: 2.7px;
  padding-left: 5.5px;
  width: 230px;
  height: 33.6px;
  background-color: grey;
  text-align: left;
  border-radius: 4px;
}
#menu-option {
  width: 219px;
  height: 28px;
  padding-top: 2px;
  /* background-color: yellow; */
  color: white;
}
</style>
