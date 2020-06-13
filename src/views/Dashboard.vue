<template>
  <div id="dash-container">
    This is the Dashboard

    <!-- <h4>Logged in successfully</h4> -->
    <h4>
      Hi {{ user.firstname }} {{ user.lastname }}, you have successfully logged.
    </h4>
    <p>
      This website is a demo website that has been built for learning purposes
      only. Thank you for checking it out, feel free to explore!
    </p>
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
