<template>
  <div>
    <div id="features-1" @click="showStatus('Design & Exterior')">
      <div class="writing-on-the-wall">Design & Exterior</div>
      <div class="drop-down-span">+</div>
    </div>

    <div id="features-1" @click="showStatus('Interior')">
      <div class="writing-on-the-wall">Interior</div>
      <div class="drop-down-span">+</div>
    </div>

    <div id="features-1" @click="showStatus('Power & Sound')">
      <div class="writing-on-the-wall">Power & Sound</div>
      <div class="drop-down-span">+</div>
    </div>

    <div id="features-1" @click="showStatus('Wheels & Chasis')">
      <div class="writing-on-the-wall">Wheels & Chassis</div>
      <div class="drop-down-span">+</div>
    </div>

    <div id="features-2" @click="showStatus('Performance & Fuel Economy')">
      <div class="writing-on-the-wall1">Performance & Fuel Economy</div>
      <div class="drop-down-span">+</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OtherDetails",
  computed: {
    theCurrentProductDisplay() {
      console.log("sakamanje: ", this.$store.state.productDetailsDisplay);
      return this.$store.state.productDetailsDisplay;
    },
  },

  methods: {
    showStatus(data) {
      let dataToBeUsed = this.theCurrentProductDisplay;
      let forPeculiarIfnoPage = [
        { id: 1, description: dataToBeUsed.info_1 },
        { id: 2, description: dataToBeUsed.info_2 },
        { id: 3, description: dataToBeUsed.info_3 },
        { id: 4, description: dataToBeUsed.info_4 },
        { id: 5, description: dataToBeUsed.info_5 },
        { id: 6, description: dataToBeUsed.info_6 },
        { id: 7, description: dataToBeUsed.info_7 },
      ];
      this.$store.commit("changeShow");
      this.$store.commit("updateCurrentHeader", data);
      this.$store.commit("changeNoShow");
      this.$store.commit(
        "updateToBeUsedByPeculiarInfoPage",
        forPeculiarIfnoPage
      );
    },
  },
};
</script>

<style>
#features-1 {
  border-bottom: 0.1px solid dimgray;
  margin-left: 15px;
  width: 675px;
  height: 44.6px;
}
#features-2 {
  margin-left: 15px;
  width: 675px;
  height: 44.6px;
}
.writing-on-the-wall {
  float: left;
  margin-top: 3px;
  width: 95%;
  height: 100%;
}
.writing-on-the-wall1 {
  float: left;
  margin-top: -4px;
  width: 95%;
  height: 100%;
}
.drop-down-span {
  float: left;
  font-size: 50px;
  margin-top: -29px;
  width: 5%;
  height: 90%;
}
</style>
