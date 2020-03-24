<template>
  <div id="app">
    <ECommerceHeader/>

    <router-view></router-view>
      
    <div id="footer">
      <ECommerceFooter/>
    </div>
  </div> 
</template>

<script>
import ECommerceHeader from './components/ECommerceHeader.vue'
import ECommerceFooter from './components/ECommerceFooter.vue'




export default {
  name: 'App',
  components: {
    ECommerceHeader,
    ECommerceFooter
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
        margin-top: 15px;
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