<template>
  <div id="account-container">
    <div id="center-da-div">
      <form
        action=""
        method="post"
        id="form-container"
        @submit.prevent="createAccount"
      >
        <h4>Create Account</h4>
        <div id="first-and-lastname">
          <div id="first">
            <b-form-group
              id="input-group-2"
              label="First Name:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model.trim="form.firstname"
                required
                placeholder="Enter first name"
                @blur="$v.form.firstname.$touch()"
              ></b-form-input>
              <div v-if="$v.form.firstname.$error">
                <p v-if="!$v.form.firstname.required" class="errorMessage">
                  Firstname is required ****
                </p>
              </div>
            </b-form-group>
          </div>
          <div id="last">
            <b-form-group
              id="input-group-2"
              label="Last Name:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model.trim="form.lastname"
                required
                placeholder="Enter last name"
                @blur="$v.form.lastname.$touch()"
              ></b-form-input>
              <div v-if="$v.form.lastname.$error">
                <p v-if="!$v.form.lastname.required" class="errorMessage">
                  Lastname is required ****
                </p>
              </div>
            </b-form-group>
          </div>
        </div>
        <div id="email-and-password">
          <div id="email">
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model.trim="form.email"
                type="email"
                required
                placeholder="Enter email"
                @blur="$v.form.email.$touch()"
              ></b-form-input>
              <div v-if="$v.form.email.$error" class="errorMessage">
                <p v-if="!$v.form.email.email">Please enter a valid email</p>
                <p v-if="!$v.form.email.required">Email is required ****</p>
              </div>
            </b-form-group>
          </div>
          <div id="password">
            <b-form-group
              id="input-group-1"
              label="Password:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model.trim="form.password"
                type="password"
                required
                @blur="$v.form.password.$touch()"
                placeholder="Enter password"
              ></b-form-input>
              <div v-if="$v.form.password.$error" class="errorMessage">
                <p v-if="!$v.form.password.required">
                  Password is required ****
                </p>
              </div>
            </b-form-group>
          </div>
        </div>
        <div id="number">
          <div id="phone-number">
            <b-form-group
              id="input-group-1"
              label="Number:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model.number="form.number"
                type="number"
                required
                @blur="$v.form.number.$touch()"
                placeholder="Enter phone number"
              ></b-form-input>
              <div v-if="$v.form.number.$error" class="errorMessage">
                <p v-if="!$v.form.number.required">
                  Phone Number is required ****
                </p>
              </div>
            </b-form-group>
          </div>
        </div>
        <div id="newsletter">
          <div id="news-letter">
            <b-form-group id="input-group-4">
              <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                <b-form-checkbox value="yes"
                  >I want to recieve Gbogbonise Newsletter with the best deals
                  and and offers</b-form-checkbox
                >
              </b-form-checkbox-group>
            </b-form-group>
          </div>
        </div>
        <div id="create-account">
          <div id="create-button">
            <b-button
              :disabled="$v.$invalid"
              type="submit"
              block
              variant="primary"
              >CREATE ACCOUNT</b-button
            >
            <p class="errorMessagee" v-if="show">
              Please fill out the required fields
            </p>
            <h5>OR</h5>
          </div>
        </div>
        <div id="gmail">
          <div id="create-button">
            <b-button block variant="danger">CONTINUE WITH GMAIL</b-button>
          </div>
        </div>
        <div id="existingUser-login">
          <p>Already have an account?</p>
          <router-link to="/login"><a>LOGIN</a></router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      form: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        number: null,
        checked: null,
      },
      show: false,
    };
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      firstname: {
        required,
      },
      lastname: {
        required,
      },
      password: {
        required,
      },
      number: {
        required,
      },
    },
  },
  methods: {
    // onSubmit(evt) {
    //   evt.preventDefault();
    //   alert(JSON.stringify(this.form));
    // },
    // onReset(evt) {
    //   evt.preventDefault();
    //   // Reset our form values
    //   this.form.firstname = "";
    //   this.form.lastname = "";
    //   this.form.email = "";
    //   this.form.password = "";
    //   this.form.number = null;
    //   this.form.checked = [];
    //   // Trick to reset/clear native browser form validation state
    //   this.show = false;
    //   this.$nextTick(() => {
    //     this.show = true;
    //   });
    // },
    createAccount() {
      this.$v.$touch();

      if (!this.$v.invalid && !this.$v.$anyError) {
        this.$store
          .dispatch("createAccount", {
            firstname: this.form.firstname,
            lastname: this.form.lastname,
            email: this.form.email,
            password: this.form.password,
            number: this.form.number,
            checked: this.form.checked,
          })
          .then(() => {
            this.$router.push({ path: "/dashboard" });
            // console.log('Just5 now')
          });
      } else {
        this.show = true;
      }

      // this.$router.push({ path: "/dashboard" });

      // console.log(JSON.stringify(this.form));

      // this.form.firstname = "";
      // this.form.lastname = "";
      // this.form.email = "";
      // this.form.password = "";
      // this.form.number = null;
      // this.form.checked = [];
    },
  },
};
</script>

<style scoped>
#account-container {
  background-color: whitesmoke;
  width: 100vw;
  min-height: 600px;
}
#center-da-div {
  text-align: center;
}

#form-container {
  /* background-color: red; */
  width: 55vw;
  min-height: 600px;
  margin-top: 55px;
  display: inline-block;
  margin-bottom: 50px;
}
h4 {
  text-align: left;
}
#first-and-lastname,
#email-and-password,
#number,
#newsletter {
  width: 98.5%;
  margin: auto;
  height: 87px;
  /* background-color: yellow; */
}
#first,
#last,
#email,
#password {
  float: left;
  width: 50%;
  height: 87px;
  /* background-color: white; */
  /* margin-right: 10px; */
  padding-right: 10px;
  padding-left: 10px;
  text-align: left;
}
#phone-number {
  float: left;
  width: 50%;
  height: 87px;
  /* background-color: white; */
  /* margin-right: 10px; */
  padding-right: 10px;
  padding-left: 10px;
  text-align: left;
}
#create-account,
#gmail {
  width: 98.5%;
  margin: auto;
  height: 70px;
  /* background-color: royalblue; */
}
#news-letter {
  float: left;
  width: 90%;
  height: 87px;
  /* background-color: white; */
  /* margin-right: 10px; */
  padding-top: 30px;
  padding-right: 10px;
  padding-left: 10px;
  text-align: left;
}
#create-button {
  float: left;
  width: 100%;
  height: 87px;
  /* background-color: white; */
  /* margin-right: 10px; */
  padding-top: 15px;
  padding-right: 10px;
  padding-left: 10px;
  text-align: left;
}
h5 {
  text-align: center;
  margin-top: 10px;
}
#existingUser-login {
  width: 98.5%;
  margin: auto;
  height: 99px;
  /* background-color: palevioletred; */
}
.showRed {
  background-color: red;
  color: white;
  font-size: 10px;
}
.errorMessage {
  /* margin-bottom: 5px; */
  margin-left: 15px;
  font-size: 10px;
  color: red;
}
.errorMessagee {
  margin-bottom: -11px;
  margin-left: 15px;
  font-size: 10px;
  color: red;
}
</style>
