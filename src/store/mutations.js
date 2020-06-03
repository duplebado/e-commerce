import axios from "axios";

export default {
  putSomethingInproductDetailsDisplay(state, data) {
    state.productDetailsDisplay = data;
  },

  changeShow(state) {
    let displayIt = state.show;
    state.show = !displayIt;
  },
  changeNoShow(state) {
    let doNotDisplayIt = state.noShow;
    state.noShow = !doNotDisplayIt;
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
    state.carsFromAPI = products;
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
