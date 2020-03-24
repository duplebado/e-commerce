<template>
  <div>
    <b-carousel
      class="shadow-lee"
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      style="text-shadow: 1px 1px 2px #333;"

    >

      <!-- Slides with image only -->
      <b-carousel-slide 
          v-for="slider in sliderDisplay"
         v-bind:key="slider.id"
         v-bind:index="slider.id"
      v-bind:img-src="slider.imageLink" class="sizer"
      text="Gbogbonise Month. 20% OFF!!!"
      ></b-carousel-slide>
      
    </b-carousel>

   
  </div>
</template>

<script>
  export default {
    name:'EcommerceSlider',
        data(){
        return{
          sliderDisplay: [
            {id: 0,
             imageLink:require("../assets/images/1.jpg")
            },
             {id: 1,
             imageLink:require("../assets/images/2.png")
            },
             {id: 2,
             imageLink:require("../assets/images/3.jpg")
            },
             {id: 3,
             imageLink:require("../assets/images/4.png")
            },
             {id: 4,
             imageLink:require("../assets/images/5.jpg")
            },
             {id: 5,
             imageLink:require("../assets/images/6.jpg")
            },
             {id: 6,
             imageLink:require("../assets/images/7.jpg")
            }
          ]
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