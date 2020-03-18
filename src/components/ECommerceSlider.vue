<template>
    <carousel-3d>
        <slide
         v-for="slider in sliderDisplay"
         v-bind:key="slider.id"
         v-bind:index="slider.id"
        >
          <img v-bind:src="slider.imageLink" class="sizer" />
        </slide>
    </carousel-3d>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
    name:'ECommerceSlider',
    components: {Carousel3d,Slide},
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
.sizer{
    width: 360px;
    height: 270px;
}
</style>