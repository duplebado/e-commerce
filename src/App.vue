<template>
  <div id="app">
    <!-- <div>
      {{cars}}
    </div> -->
    <ECommerceHeader id="fixed" />
    <div id="try">
      <router-view></router-view>
    </div>

    <div id="footer">
      <ECommerceFooter />
    </div>
  </div>
</template>

<script>
import ECommerceHeader from "./components/ECommerceHeader.vue";
import ECommerceFooter from "./components/ECommerceFooter.vue";

export default {
  name: "App",
  components: {
    ECommerceHeader,
    ECommerceFooter,
  },
  // computed: {
  //   cars() {
  //     return this.$store.state.apiData
  //   }
  // },
  // mounted(){
  //   this.$store.dispatch('getCars')
  // }
};
</script>

<style scoped>
#fixed{
  position: fixed;
  top: 0;
  padding-bottom: 100px;
  z-index: 2000;
  width:100vw;
}
#footer {
  float: left;
  background-color: dimgray;
  width: 100vw;
  min-height: 100px;
}
#try {
  background-image: url("https://ng.jumia.is/cms/Homepage/2020/W21/BG.jpg");
  background-repeat: repeat-x;
  background-size: auto;
  /* background-repeat: r; */
  margin-top: 68px;
}
</style>
