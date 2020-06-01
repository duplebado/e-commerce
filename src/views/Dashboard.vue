<template>
  <div id="dash-container">
    This is the Dashboard

    <!-- <h4>Logged in successfully</h4> -->
    <h4>{{ user.firstname }} {{ user.lastname }} is logged in successfully</h4>
  </div>
</template>

<script>
// import {mapState} from 'vuex'
export default {
  //   computed:{
  //       ...mapState(["user"])
  //   },
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
  },
};
</script>

<style scoped>
#dash-container {
  width: 100vw;
  height: 400px;
  background-color: cornflowerblue;
}
</style>
