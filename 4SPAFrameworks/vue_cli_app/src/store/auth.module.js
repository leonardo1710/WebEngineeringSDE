import { userService } from "@/services";

const state = {
  errors: null,
  user: {},
  isAuthenticated: false
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  login(context, credentials) {
    return new Promise((resolve, reject) => {
      userService.login(credentials)
          .then(response => {
              if(response.data.message.token){
                localStorage.setItem('token', JSON.stringify(response.data.message.token));
                context.commit("setAuth", response.data.message.user);
                resolve(response.data.message.user);
              }
          })
          .catch(response =>{
            let error = "Some error occurred.";
            if(response.error){
              error = response.error;
              context.commit("setError", error);
            } else {
              context.commit("setError", error)
            }
            
            reject(error);
          })
    });
  },
  logout(context) {
    return new Promise((resolve, reject) => {
      context.commit("destroyAuth");
      localStorage.removeItem('token');
      
      userService.logout()
        .then(response => {
            resolve(response.data.message);
        })
        .catch(error =>{
          console.log(error);
          reject(error);
        })
    });
    
  }
};

const mutations = {
  setError(state, error) {
    state.errors = error;
  },
  setAuth(state, user) {
    console.log("setAuth");
    console.log('user :>> ', user);
    console.log('state :>> ', state);
    state.isAuthenticated = true;
    state.user = user;
    state.errors = {};
  },
  destroyAuth(state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
