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
  // GET_USER(state, users) {
  //   state.currentUser = users;
  // },
  SET_CARS(state, products) {
    state.carsFromAPI = products;
  },
  SET_USER_DATA(state, userData) {
    state.user = userData.userData;
    state.isUserLoggedIn = false;
    console.log(axios);
    localStorage.setItem("user", JSON.stringify(userData.userData));
    localStorage.setItem("token", JSON.stringify(userData.token));
    axios.defaults.headers.common["Authorization"] = `Bearer ${userData.token}`;
    // location.reload();
  },
  CLEAR_USER_DATA() {
    console.log("Inside-mutationsklkjdj");
    localStorage.removeItem("user");
    location.reload();
  },
  SET_ERROR_MESSAGE(state, errorMessage) {
    state.errorMessage = errorMessage;
  },
  AddToLocalStorageShoppingCart(state, data) {
    // localStorage.removeItem("userCart");
    // console.log(state, data);
    if (!JSON.parse(localStorage.getItem("userCart"))) {
      let newCart = [];
      newCart.push(data);
      localStorage.setItem("userCart", JSON.stringify(newCart));
      state.shoppingCart = JSON.parse(localStorage.getItem("userCart"));
      // console.log(state.shoppingCart);
    } else if (JSON.parse(localStorage.getItem("userCart")).length >= 1) {
      let cart = JSON.parse(localStorage.getItem("userCart"));
      cart.push(data);
      localStorage.setItem("userCart", JSON.stringify(cart));
      state.shoppingCart = JSON.parse(localStorage.getItem("userCart"));
      // console.log(state.shoppingCart);
    } else {
      let newCart = [];
      newCart.push(data);
      localStorage.setItem("userCart", JSON.stringify(newCart));
      state.shoppingCart = JSON.parse(localStorage.getItem("userCart"));
    }
  },
  deleteFromLocalStorageShoppinCart(state, itemId) {
    console.log("in the delete");
    let cart = JSON.parse(localStorage.getItem("userCart"));
    cart.forEach((item, index) => {
      if (item.id === itemId) {
        cart.splice(index, 1);
      }
    });
    localStorage.setItem("userCart", JSON.stringify(cart));
    state.shoppingCart = JSON.parse(localStorage.getItem("userCart"));
    location.reload();
  },
  createCategoryArrayThatMatchesCurrentCategoryName(
    state,
    currentCategoryName
  ) {
    let AllCars = state.carsFromAPI;
    let carsThatFitIntoCurrentCategory = [];
    AllCars.forEach((car) => {
      if (car.category === currentCategoryName) {
        carsThatFitIntoCurrentCategory.push(car);
      }
    });

    state.category = carsThatFitIntoCurrentCategory;
  },
};
