<template>
  <div id="container">
    <b-navbar toggleable="lg" type="dark" id="custom-style">
      <b-navbar-brand class="header-text"
        ><router-link id="no-color" to="/"
          >Gbogbonise Online CarShop</router-link
        ></b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>
          <b-navbar-nav>
            <b-nav-item
              ><router-link id="no-color" to="/cart"
                >Cart</router-link
              ></b-nav-item
            >
          </b-navbar-nav>
          <b-nav-item-dropdown
            id="no-color2"
            right
            v-if="loggedIn"
            :text="userFirstname"
          >
            <b-dropdown-item
              ><router-link id="no-color2" to="/dashboard"
                ><div>Account</div></router-link
              ></b-dropdown-item
            >
            <b-dropdown-item
              ><router-link id="no-color2" to="/login"
                ><div @click="logOut">Logout</div></router-link
              ></b-dropdown-item
            >
          </b-nav-item-dropdown>

          <b-nav-item-dropdown id="no-color" text="Login" right v-else>
            <b-dropdown-item
              ><router-link id="no-color2" to="/login"
                ><div>Login</div></router-link
              ></b-dropdown-item
            >
            <!-- <b-dropdown-item ><router-link id="no-color2" to='/create-account'>Login</router-link></b-dropdown-item> -->
            <b-dropdown-item
              ><router-link id="no-color2" to="/create-account"
                ><div>Create An Account</div></router-link
              ></b-dropdown-item
            >
            <!-- <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item> -->
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { authComputed } from "../store/helpers.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  name: "ECommerceHeader",
  created() {},
  computed: {
    ...authComputed,
    userFirstname() {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user == null) {
        return null;
      } else {
        return "Hi, " + user.firstname;
      }
    },
  },
  methods: {
    logOut() {
      // this.stateOfUser = false;
      // this.$store.dispatch("logOutUser");
      this.$store.commit("CLEAR_USER_DATA");
    },
  },
};
</script>

<style scoped>
#container {
  width: 100vw;
}
#custom-style {
  background-color: rebeccapurple;
}
.header-text {
  font-size: 30px;
  color: whitesmoke;
}
#no-color {
  color: white;
  text-decoration: none;
}
#no-color2 {
  color: rebeccapurple;
  text-decoration: none;
}
</style>
