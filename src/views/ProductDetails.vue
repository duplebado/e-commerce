<template>
    <div id="contain">
        <router-link to="/"><div id="cancel">  X </div></router-link>
        
      
       <div id="carousel-container">
        <b-carousel
          id="carousel-1"
          :interval="4000"
          controls
          indicators
          style="text-shadow: 1px 1px 2px #333;"
        >
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58" class="sizer"></b-carousel-slide>
        </b-carousel>
      </div>
      <div id="right-of-carousel">
          <div id="car-name">g- wagon</div>
          <div id="car-price"> ₦20,000{{ $route.params.carProductDetails }}</div>
      </div>
      <div id="bottom-sub-container">
          <div id="one">BEAR WITH US</div>
          <div id="two">THIS WEBSITE IS STILL IN PROGRESS</div>
          <div id="three">I AM HAVING DIFFULTY LINKING EACH PRODUCT TO ITS PRODUCT DYNAMICALLY</div>

      </div>
    </div> 
    
</template>

<script>
  export default {
    
    // props: [
    //     "carProductDetail"
    // ]
    // data(){
    //   return{
    //     productDescription:[
    //       {id:1,
    //       name: "fucking brabus",
    //       price: "34,000,000"
    //       },
    //       {id:2,
    //       name: "toyota hilux",
    //       price: "18,000,000"
    //       }
    //     ]
    //   }
    // },
    // methods:{
     
    // }
  }
</script>

<style scoped>
.shadow-lee{
    box-shadow: 1px 1px 10px dimgrey;
    color: rebeccapurple;
}
.sizer{
    width: 100%;
    height: 100%;
}
#cancel{
    position: absolute;
    font-size: 30px;
    font-weight: bold;
    top:78px;
    right: 5px;
    background-color: rgb(108,117,125);
    color:rebeccapurple;
    border-radius: 30px;
    width: 50px;
    height: 46px;
    text-align: center;
}
#contain{
    float: left;
    /* background-color: yellow; */
    width: 1349px;
    height: 586px;
}

#carousel-container{
    /* background-color: red; */
    float: left;
    margin-left: 7px;
    margin-top: 7px;
    width:730px;
    height: 342px;
}
#right-of-carousel{
    float: left         ;
    background-color: yellow;
    margin-left: 7px;
    margin-top: 7px;
    width: 600px;
    height: 342px;
}
#car-name{
    background-color: royalblue;
    float: left;
    width: 320px;
    height: 35px;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 20px;

}
#car-price{
    background-color: royalblue;
    float: left;
    width: 200px;
    height: 35px;
    margin-bottom: 5px;
    margin-left: 7px;
    font-weight: bold;
    font-size: 20px;
}

#bottom-sub-container{
    float: left;
    /* background-color: red; */
    width: 1349px;
    height:237px;

}
#one, #two{
    float: left;
    background-color: royalblue;
    width: 570px;
    height: 223px;
    margin-left: 7px;
    margin-top: 7px;
}
#three{
    float: left;
    background-color: royalblue;
    width: 182px;
    height: 223px;
    margin-left: 7px;
    margin-top: 7px;
}
</style>