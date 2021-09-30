import {ApiService} from '../common/api.service';
import Vue from "vue";
import { CONFIG } from "@/common/config";

export const userService = {
  register,
  getAll,
  login
};

function register(user){
  console.log(user);
}

function login(user){
  return new Promise(function (resolve, reject) {
    return Vue.axios.post(`${CONFIG.API_BASE_URL}/login`, user)
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            reject(error);
        })
  });
}

function logout(){
  return new Promise(function (resolve, reject) {
    return Vue.axios.post(`${CONFIG.API_BASE_URL}/logout`)
        .then(data => {
          console.log(data);
          resolve(data);
        })
        .catch(error => {
          reject(error);
        })
  });
}

function getAll(slug = ""){
  return ApiService.get("user", slug);
}