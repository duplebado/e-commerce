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
    #footer{
      float: left;
      background-color: dimgray;
      width: 98.79vw;
      min-height: 100px;
    }
</style>