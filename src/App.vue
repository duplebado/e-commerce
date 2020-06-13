<template>
  <div id="app">
    <div id="header-div">
      <ECommerceHeader />
    </div>

    <div id="body">
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
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
};
</script>

<style scoped>
#app {
  background-image: url("https://ng.jumia.is/cms/Homepage/2020/W21/BG.jpg");
  background-repeat: repeat-y;
  background-size: auto;
  float: left;
  min-width: 1vw;
  min-height: 1vh;
}
#header-div {
  position: fixed;
  top: 0;
  z-index: 2000;
  width: 10vw;
}
#body {
  margin-top: 70px;
  min-width: 1vw;
  min-height: 1vh;
}
#footer {
  float: left;
  background-color: dimgray;
  min-width: 100vw;
  /* min-width: 1349px; */
  min-height: 100px;
}

/* TRANSITIONS */
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.1s ease;
}
.slide-fade-leave {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
