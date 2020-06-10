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
            :text="userFirstname"
            right
            v-if="!stateOfUser"
          >
            <b-dropdown-item
              ><router-link id="no-color2" to="/dashboard"
                ><div>Account</div></router-link
              ></b-dropdown-item
            >
            <b-dropdown-item
              ><router-link id="no-color2" to="/login"
                ><div>Logout</div></router-link
              ></b-dropdown-item
            >
          </b-nav-item-dropdown>

          <b-nav-item-dropdown
            id="no-color"
            text="Login"
            right
            v-if="stateOfUser"
          >
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
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  name: "ECommerceHeader",
  computed: {
    stateOfUser() {
      if (JSON.parse(localStorage.getItem("user"))) {
        return false;
      }
      return true;
    },
    userFirstname() {
      return "Hi, " + JSON.parse(localStorage.getItem("user")).firstname;
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
