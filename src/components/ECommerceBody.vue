<template>
    <div>
      <b-card id="custom"
      v-for="info in productDisplayOnHomePage" :key="info.id"
      >
        <img v-bind:src="info.imageLink"  class="img-size"/>
        <b-card-text class="product-text">
          <p class="carName">{{info.name}}</p>
          <p> ₦{{info.price}}
              
          </p>
        </b-card-text>

        <a href="#" @click="redirectToCorrespondingProductDetailsPage(info)">
          <b-button id="custom-style" >
            DETAILS
          </b-button>
        </a>
      </b-card>
    </div>
</template>

<script>


export default {
  name: 'EcommerceBody',
  computed:{
  productDisplayOnHomePage(){
    return this.$store.state.productDisplay;
    }
  },
  methods:{
    redirectToCorrespondingProductDetailsPage(info){
      this.$store.commit('putSomethingInproductDetailsDisplay', info)

      this.$router.push({path: '/car-details'})
    }
  }

}
</script>

<style scoped>
.img-size{
    /* margin-left: 70px; */
    width: 300px;
    height: 250px;
}
.product-text{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', 'Arial, sans-serif';
    font-weight: bold;
    color: dimgray;
    text-align: center;
}
.carName{
  color:dimgrey
}
#custom{
    /* border:1px solid grey; */
    box-shadow: 1px 1px 10px dimgrey;
    float: left;
    margin: 10px;
    height: 400px;
    width: 344px;
}

#custom-style{
  background-color: rebeccapurple;
}

</style>

