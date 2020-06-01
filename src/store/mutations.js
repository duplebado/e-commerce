import axios from "axios";

export default {
  putSomethingInproductDetailsDisplay(state, data) {
    state.productDetailsDisplay = data;
  },

  changeShow(state) {
    let saka = state.show;
    state.show = !saka;
  },
  changeNoShow(state) {
    let manje = state.noShow;
    state.noShow = !manje;
  },
  updateCurrentHeader(state, data) {
    state.currentHeader = data;
  },
  updateToBeUsedByPeculiarInfoPage(state, data) {
    state.toBeUsedByPeculiarInfoPage = data;
  },
  GET_USER(state, users) {
    state.currentUser = users;
  },
  SET_CARS(state, products) {
    state.apiData = products;
  },
  SET_CART(state, data) {
    state.apiCart = data;
  },
  SET_USER_DATA(state, userData) {
    state.user = userData.userData;
    console.log(axios);
    localStorage.setItem("user", JSON.stringify(userData.userData));
    localStorage.setItem("token", JSON.stringify(userData.token));
    axios.defaults.headers.common["Authorization"] = `Bearer ${userData.token}`;
  },
  SET_ERROR_MESSAGE(state, errorMessage) {
    state.errorMessage = errorMessage;
  },
};
