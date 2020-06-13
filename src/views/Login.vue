<template>
  <div id="login-container">
    <div id="main1">
      <div id="login-div">
        <form action="" method="post" @submit.prevent="login">
          <h4>Login</h4>
          <div id="login-params">
            <div id="email">
              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>
            </div>
            <div id="password">
              <b-form-group
                id="input-group-1"
                label="Password :"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.password"
                  type="password"
                  required
                  placeholder="Enter password"
                ></b-form-input>
              </b-form-group>
            </div>
            <div id="remember-password">
              <div id="remember">
                <b-form-group id="input-group-4">
                  <b-form-checkbox-group
                    v-model="form.checked"
                    id="checkboxes-4"
                  >
                    <b-form-checkbox value="me">Remember me</b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group>
              </div>
              <div id="forgot">
                <a href="">Forgot your password?</a>
              </div>
            </div>
          </div>
          <div v-if="errorMessage">
            <p style="color: red">{{ errorMessage }}</p>
          </div>
          <div id="login-btn">
            <b-button type="submit" block id="custom-color">LOGIN</b-button>
          </div>
          <div id="gmail-btn">
            <b-button block variant="danger">LOGIN WITH GMAIL</b-button>
          </div>
        </form>
      </div>
      <div id="create-div">
        <div>
          <h4>Create your Gbogbonise Account</h4>
          <div id="create-instructions">
            <div id="top-empty"></div>
            <div id="bottom-create-instruction">
              <p>
                Create your Gbogbonise customer account in just a few clicks!
                You can register either using your e-mail address or through
                your Facebook account.
              </p>
            </div>
          </div>
          <div id="login-btn">
            <div id="login-btn">
              <!-- <router-link to="/create-account"> -->

              <!-- </router-link> -->
              <router-link style="text-decoration: none" to="/create-account">
                <div style="width:340.25px">
                  <b-button block id="custom-color">
                    CREATE AN ACCOUNT
                  </b-button>
                </div></router-link
              >
            </div>
          </div>
          <div id="gmail-btn">
            <div id="gmail-btn">
              <b-button block variant="danger">CONTINUE WITH GMAIL</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["errorMessage"]),
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
        checked: null,
      },
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.form.email,
        password: this.form.password,
      });
    },
  },
};
</script>

<style scoped>
#login-container {
  text-align: center;
  width: 100vw;
  height: 500px;
  background-color: white;
}
#main1 {
  /* text-align: center; */
  margin-top: 32px;
  width: 950px;
  height: 436px;
  /* background-color: yellow; */
  display: inline-block;
}
#login-div {
  float: left;
  margin-top: 16px;
  border-right: 0.5px solid dimgray;
  width: 475px;
  height: 404px;
  /* background-color: red; */
  /* display: inline-block; */
}
h4 {
  font-weight: bold;
}
#login-params {
  width: 340.25px;
  height: 233px;
  /* background-color: teal; */
  display: inline-block;
}
#email,
#password {
  text-align: left;
  width: 340.25px;
  height: 87px;
  /* background: hotpink; */
}
/* #password {
  background-color: indigo; 
} */
#remember-password {
  text-align: left;
  width: 340.25px;
  height: 59px;
  /* background: hotpink; */
}
#remember,
#forgot {
  float: left;
  width: 50%;
  height: 100%;
  /* background-color: white; */
  padding-top: 16px;
}
#forgot {
  float: right;
}
a {
  float: right;
  color: black;
  font-size: 14.5px;
}
#login-btn {
  width: 340.25px;
  height: 48px;
  /* background-color: rosybrown; */
  display: inline-block;
}
#gmail-btn {
  width: 340.25px;
  height: 48px;
  /* background-color: green; */
  display: inline-block;
  text-decoration: none;
}
#create-div {
  float: right;
  margin-top: 16px;
  border-left: 0.5px solid dimgray;
  width: 475px;
  height: 404px;
  /* background-color: whitesmoke; */
  /* display: inline-block; */
}
#create-instructions {
  width: 340.25px;
  height: 233px;
  /* background-color: yellow; */
  display: inline-block;
}
#top-empty {
  width: 340.25px;
  height: 40px;
  /* background-color: blue; */
  /* float: left; */
}
#bottom-create-instruction {
  width: 340.25px;
  height: 193px;
  /* background-color: blue; */
  /* float: left; */
  text-align: justify;
}
#custom-color {
  background-color: rebeccapurple;
  border: 0.1px solid rebeccapurple;
  color: white;
}
</style>
