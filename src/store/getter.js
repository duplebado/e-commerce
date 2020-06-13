export default {
  loggedIn() {
    return !!localStorage.getItem("user");
    // return !!state.user;
  },
};
