/*eslint-disable*/

import axios from "axios";
import router from "../router";

export default {
  getCars({ commit }) {
    return axios
      .get("https://my-ecommercev1.herokuapp.com/car")
      .then((res) => {
        console.log(res);
        let products = res.data;
        commit("SET_CARS", products);
      })
      .catch((err) => {
        console.log("error occurred", err);
      });
  },
  createAccount({ commit }, credentials) {
    return axios
      .post("https://my-ecommercev1.herokuapp.com/create-account", credentials)
      .then(({ data }) => {
        commit("SET_USER_DATA", data);
      });
  },
  async confirmAccount({ commit }, payload) {
    let { data } = await axios.post(
      `https://my-ecommercev1.herokuapp.com/confirm-email/${payload.token}`
    );
    if (
      data.success &&
      data.message == "Email confirmation succesful" &&
      data.decoded.user
    ) {
      router.push("/login");
    } else {
      router.push("/email-confirmation");
    }
    console.log(data);
  },
  login({ commit }, credentials) {
    return axios
      .post("https://my-ecommercev1.herokuapp.com/login", credentials)
      .then(({ data }) => {
        commit("SET_USER_DATA", data);
        // location.reload();
        router.push({ path: "/dashboard" });
        // router.reload();
      })
      .catch((err) => {
        // console.log(err.response.data.message);
        commit("SET_ERROR_MESSAGE", err.response.data.message);
      });
  },
  logoutUser({ commit }) {
    commit("CLEAR_USER_DATA");
  },
};
