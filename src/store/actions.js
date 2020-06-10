import axios from "axios";
import loginPage from "../router";

export default {
  getUser({ commit }) {
    axios
      .get("http://localhost:2500/dashboard")
      .then((res) => {
        console.log(res);
        let users = res.data;
        commit("GET_USER", users);
      })
      .catch((err) => {
        console.log("error occurred", err);
      });
  },
  getCars({ commit }) {
    axios
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
      .post("http://localhost:2500/create-account", credentials)
      .then(({ data }) => {
        commit("SET_USER_DATA", data);
      });
  },
  login({ commit }, credentials) {
    return axios
      .post("http://localhost:2500/login", credentials)
      .then(({ data }) => {
        console.log("successful");
        commit("SET_USER_DATA", data);
        console.log(loginPage);
        loginPage.push({ path: "/dashboard" });
      })
      .catch((err) => {
        // console.log(err.response.data.message);
        commit("SET_ERROR_MESSAGE", err.response.data.message);
      });
  },
};
