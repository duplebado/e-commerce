<template>
  <div>
    
    <b-carousel
      class="shadow-lee"
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      style="text-shadow: 1px 1px 2px #333;">
      
      <b-carousel-slide 
          v-for="slider in sliderImages"
          v-bind:key="slider.id"
          v-bind:img-src="slider.imageLink" class="sizer"
          text="Gbogbonise Month. 20% OFF!!!">
      </b-carousel-slide>  
    
    </b-carousel> 
  </div>
</template>

<script>
  export default {
   computed: {
     sliderImages(){
       return this.$store.state.sliderDisplay;
     }
   } 
  }
</script>

<style scoped>
.shadow-lee{
    box-shadow: 1px 1px 10px dimgrey;
    color: rebeccapurple;
}
.sizer{
    width: 1066px;
    height: 330px;
}

</style>