/*
 * @Author: TanGuangZhi
 * @Date: 2022-03-09 13:24:00 Wed
 * @LastEditTime: 2022-03-10 16:33:09 Thu
 * @LastEditors: TanGuangZhi
 * @Description: 
 * @KeyWords: Vue, Web-Server, ElementUI
 */
import Vue from 'vue'
import Vuex from 'vuex'
import filmStore from "../stores/store/filmStore.js";
import cinemaStore from "../stores/store/cinemaStore.js";
import orderStore from './store/orderStore.js';
import userStore from './store/userStore.js';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    filmStore,
    cinemaStore,
    orderStore,
    userStore,
  }
})
