<template>
  <div>
    <div id="menu-container" v-for="item in menu" :key="item.link">
      <router-link :to="`/category/${item.link}`" class="no-underline">
        <div id="menu-option">
          {{ item.name }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ECommerceCategory",
  data() {
    return {
      menu: [
        { name: "Coupe", link: "coupe" },
        { name: "Mini Bus", link: "mini-bus" },
        { name: "Mini Van", link: "mini-van" },
        { name: "Pick-up Truck", link: "pickup" },
        { name: "Sedan", link: "sedan" },
        { name: "Sport Car", link: "sport-car" },
        { name: "SUV", link: "suv" },
      ],
    };
  },
  methods: {
    whatisGonnaBeDisplayedInCategoryPage(currentCategory) {
      this.$store.commit(
        "createCategoryArrayThatMatchesCurrentCategoryName",
        currentCategory
      );
    },
  },
};
</script>

<style scoped>
#menu-container {
  margin-left: 6px;
  margin-right: 5px;
  margin-top: 2px;
  padding-top: 2.7px;
  padding-left: 5.5px;
  width: 230px;
  height: 33.6px;
  background-color: grey;
  text-align: left;
  border-radius: 4px;
}
#menu-option {
  width: 219px;
  height: 28px;
  padding-top: 2px;
  /* background-color: pink; */
  color: white;
}
#menu-container:hover {
  background-color: rebeccapurple;
}
.no-underline {
  text-decoration: none;
}
</style>
