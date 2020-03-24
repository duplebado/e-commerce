<template>
    <div id="app">

    <div id="container" >
    
      <div id="left-content">
        <ECommerceCategory />
      </div>
      
      <div id="slider" style="margin-right: 15px">
        <ECommerceSlider/>
      </div>
      
      <div id="right-content">
        <ECommerceBody
          v-for="product in productDisplay"
          v-bind:key="product.id"
          v-bind:carprop = "product"        
        />
      </div>

    </div>

    


  </div>
</template>

<script>
import ECommerceCategory from '../components/ECommerceCategory.vue'
import ECommerceBody from '../components/ECommerceBody.vue'
import ECommerceSlider from '../components/ECommerceSlider.vue'




export default {
  name: 'App',
  components: {
    ECommerceCategory,
    ECommerceBody,
    ECommerceSlider
  },
  data: function(){
    return{
      productDisplay: [
        {id : 1,
         imageLink: require("../assets/images/Brabus.jpg"),
         name: "Brabus G700 (2015)",
         price: "35,560,000"
        },

        {id : 2,
         imageLink: require("../assets/images/Toyota-Hilux.jpg"),
         name: "Toyota Hilux (2019)",
         price: "22,000,000"
        },
        {id : 3,
         imageLink: require("../assets/images/gle.jpg"),
         name: "GLE 63 AMG (2018)",
         price: "25,000,000"
        },
        {id : 4,
         imageLink: require("../assets/images/challenger.jpg"),
         name: "Challenger R/T (2018)",
         price: "19,000,000"
        },
        {id : 5,
         imageLink: require("../assets/images/range.jpg"),
         name: "Range Rover Sport (2019)",
         price: "42,000,000"
        },
        {id : 6,
         imageLink: require("../assets/images/gl (1).jpg"),
         name: "GLE 43 AMG (2016)",
         price: "31,000,000"
        },
        {id : 7,
         imageLink: require("../assets/images/gl (3).jpg"),
         name: "Mercedes Benz E350 (2014)",
         price: "14,000,000"
        },
        {id : 8,
         imageLink: require("../assets/images/gl (4).jpg"),
         name: "Toyota Avalon (2015)",
         price: "13,000,000"
        },
        {id : 9,
         imageLink: require("../assets/images/gl (2).jpg"),
         name: "Lexus LX 570 (2017)",
         price: "37,000,000"
        }
      ]
    }
  }
}
</script>

<style scoped>
    #container{
        width: 100% vw;
        min-height: 600px;
    }
    #slider{

      background-color: dimgray;
      float: right;
      width: 79%;
      min-height: 20px;
      border-radius: 5px;
      margin: 4px 2px 2px 2px;
    }
    #left-content, #right-content{
        border-radius: 5px;
        margin: 4px 2px 2px 2px;
    }
    #left-content{
        margin-top: 5px;
        border: 1px solid dimgrey;
        float: left;
        width: 18%;
        min-height: 340px;
    } 
    #right-content{
        float: right;
        width: 81%;
        min-height: 596px;
    } 
    #footer{
      float: left;
      background-color: dimgray;
      width: 98.79vw;
      min-height: 100px;
    }
</style>

