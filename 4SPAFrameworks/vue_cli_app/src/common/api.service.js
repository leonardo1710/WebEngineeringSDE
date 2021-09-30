import Vue from "vue";
import axios from 'axios';
import VueAxios from "vue-axios";
import { CONFIG } from "@/common/config";

export const ApiService = {
  init,
  setHeader,
  query,
  get,
  post,
  update,
  put,
  delete: deleteRec
};


function init() {
  Vue.use(VueAxios, axios);
  Vue.axios.defaults.baseURL = CONFIG.API_URL;
}

function setHeader() {
    /*
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `Token ${JwtService.getToken()}`;
    */
}

function query(resource, params) {
    return new Promise(function(resolve, reject) {
      return Vue.axios.get(resource, params)
          .then(data => {
              resolve(data);
          })
          .catch(error => {
              reject(error);
          })
    });
}

function get(resource, slug = "") {
    return new Promise(function(resolve, reject) {
      return Vue.axios.get(`${resource}/${slug}`)
          .then(data => {
              resolve(data);
          })
          .catch(error => {
              reject(error);
          })
    });
}

function post(resource, params) {
    return new Promise(function (resolve, reject) {
      return Vue.axios.post(`${resource}`, params)
          .then(data => {
              resolve(data);
          })
          .catch(error => {
              reject(error);
          })
    });
}

function update(resource, slug, params) {
    return new Promise(function (resolve, reject) {
      return Vue.axios.put(`${resource}/${slug}`, params)
          .then(data => {
              resolve(data);
          })
          .catch(error => {
              reject(error);
          })
    });
}

function put(resource, params) {
    return new Promise(function (resolve, reject) {
      return Vue.axios.put(`${resource}`, params)
          .then(data => {
              resolve(data);
          })
          .catch(error => {
              reject(error);
          })
    });
}

function deleteRec(resource) {
  return new Promise(function (resolve, reject) {
    return Vue.axios.delete(resource)
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            reject(error);
        })
  });
}


