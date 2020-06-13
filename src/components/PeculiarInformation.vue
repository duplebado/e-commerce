<template>
  <div id="main-container">
    <div id="header" @click="changeShowStatus">
      <div id="actual-header">
        <h5>{{ currentHeader }}</h5>
      </div>

      <div id="drop-down"><span id="drop-down-icon">_</span></div>
    </div>
    <div id="list-div">
      <ul>
        <li v-for="details in carFeaturesForTheCurrentPage" :key="details.id">
          {{ details.description }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "peculiarInformation",
  computed: {
    currentHeader() {
      return this.$store.state.currentHeader;
    },
    carFeaturesForTheCurrentPage() {
      return this.$store.state.toBeUsedByPeculiarInfoPage;
    },
  },
  methods: {
    changeShowStatus() {
      // console.log(this.$store.state.productDetailsDisplay)

      this.$store.commit("changeShow");

      this.$store.commit("changeNoShow");
    },
  },
};
</script>

<style>
#main-container {
  /* background-color: red; */
  height: 219px;
  width: 706px;
}
#header {
  /* background-color: yellow; */
  border-bottom: 1px solid dimgray;
  margin-left: 20px;
  margin-right: 20px;
  height: 40px;
  width: 666px;
  padding-top: 3px;
  text-align: left;
}
#actual-header {
  float: left;
  /* background-color: red; */
  width: 600px;
  height: 40px;
}
#list-div {
  background-color: whitesmoke;
  margin-left: 60px;
  margin-right: 60px;
  height: 179px;
  width: 586px;
  text-align: left;
}
#drop-down {
  float: left;
  /* background-color: violet; */
  /* margin-left: 20px; */
  /* padding-bottom: 700px; */
  font-size: 50px;
  font-weight: bold;
  width: 66px;
  height: 40px;
}
#drop-down-icon {
  float: left;
  width: 60px;
  height: 40px;
  /* background-color:tomato; */
  margin-top: -46px;
  margin-left: 40px;
}
</style>
