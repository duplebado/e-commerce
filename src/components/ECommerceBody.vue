<template>
    <div>
      <b-card id="custom">
        <img v-bind:src="carprop.imageLink"  class="img-size"/>
        <b-card-text class="product-text">
          <p class="carName">{{carprop.name}}</p>
          <p> ₦{{carprop.price}}
              
          </p>
        </b-card-text>

        <b-button href="#" id="custom-style" >BUY</b-button>
      </b-card>
    </div>
</template>

<script>
export default {
    name: 'EcommerceBody',
    props: [
        "carprop"
    ]
}
</script>

<style scoped>
.img-size{
    /* margin-left: 70px; */
    width: 300px;
    height: 250px;
}
.product-text{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bold;
    color: dimgray;
    text-align: center;
}
.carName{
  color:rebeccapurple
}
#custom{
    /* border:1px solid grey; */
    box-shadow: 1px 1px 10px rebeccapurple;
    float: left;
    margin: 10px;
    height: 400px;
    width: 344px;
}

#custom-style{
  background-color: palevioletred;
}

</style>

