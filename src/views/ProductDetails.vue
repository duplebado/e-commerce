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
           <b-carousel-slide v-bind:img-src="productDetails.view1" class="sizer"></b-carousel-slide>
           <b-carousel-slide v-bind:img-src="productDetails.view2" class="sizer"></b-carousel-slide>
           <b-carousel-slide v-bind:img-src="productDetails.view3" class="sizer"></b-carousel-slide>
           <b-carousel-slide v-bind:img-src="productDetails.view4" class="sizer"></b-carousel-slide>
           <b-carousel-slide v-bind:img-src="productDetails.view5" class="sizer"></b-carousel-slide>

         </b-carousel>
        </div>
        <div id="right-of-carousel">
           <div id="car-name">{{productDetails.name}} </div>
           <div id="car-price">₦{{productDetails.price}} </div>
           <div id="general-info">
               <h6>GENERAL INFORMATION</h6>
               <hr>
               <h6>Make (Mode)<span style="padding-right:150px"></span>{{productDetails.make}}</h6> 
               <hr>
               <h6>Year<span style="padding-right:217px"></span>{{productDetails.year}}</h6>
               <hr>
               <h6>Fuel<span style="padding-right:215px"></span>{{productDetails.fuel}}</h6>
               <hr>
               <h6>Engine<span style="padding-right:195px"></span>{{productDetails.engine}}</h6>
               <hr>
               <h6>Transmission<span style="padding-right:150px"></span>{{productDetails.transmission}}</h6>
               <hr>
           </div>
        </div>
        <div id="bottom-sub-container">
           <div id="one">COMING SOON</div>
           <div id="two">COMING SOON</div>
           <div id="three">COMING SOON</div>

        </div>
    </div> 
    
</template>

<script>
  export default {
    computed:{
        productDetails(){
            return this.$store.state.productDetailsDisplay
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
    width: 100%;
    height: 342px;
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
    /* background-color: yellow; */
    color: rgb(108,117,125);

    margin-left: 7px;
    margin-top: 7px;
    width: 600px;
    height: 342px;
}
#car-name{
    /* background-color: royalblue; */
    float: left;
    width: 320px;
    height: 35px;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 20px;

}
#car-price{
    /* background-color: royalblue; */
    color: rgb(108,117,125);
    float: left;
    width: 200px;
    height: 35px;
    margin-bottom: 5px;
    margin-left: 7px;
    font-weight: bold;
    font-size: 20px;
}
#general-info{
    /* background-color: cornflowerblue; */
    border-top: 2px solid rebeccapurple;
    float: left;
    width: 545px;
    height: 302px;
}

#bottom-sub-container{
    float: left;
    /* background-color: red; */
    width: 1349px;
    height:237px;

}
#one, #two{
    float: left;
    background-color: rebeccapurple;
    width: 570px;
    height: 223px;
    margin-left: 7px;
    margin-top: 7px;
}
#three{
    float: left;
    background-color:rebeccapurple;
    width: 182px;
    height: 223px;
    margin-left: 7px;
    margin-top: 7px;
}
</style>