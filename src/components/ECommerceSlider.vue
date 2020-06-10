<template>
  <div style="color: red">
    <b-carousel
      class="shadow-lee"
      id="carousel-1"
      :interval="3000"
      controls
      indicators
    >
      <b-carousel-slide
        v-for="slider in sliderImages"
        v-bind:key="slider.id"
        v-bind:img-src="slider.imageLink"
        class="sizer"
      >
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  computed: {
    sliderImages() {
      return this.$store.state.sliderDisplay;
    },
  },
};
</script>

<style scoped>
.shadow-lee {
  box-shadow: 1px 1px 10px dimgrey;
  color: rebeccapurple;
}
.sizer {
  width: 1066px;
  height: 330px;
}
</style>
