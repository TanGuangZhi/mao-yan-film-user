/*
 * @Author: TanGuangZhi
 * @Date: 2022-03-09 13:18:34 Wed
 * @LastEditTime: 2022-03-09 13:18:35 Wed
 * @LastEditors: TanGuangZhi
 * @Description: 
 * @KeyWords: Vue, Web-Server, ElementUI
 */

import api from "../../apis/indexApi.js";


export default {
    namespaced: true,
    state: {

    },
    mutations: {

    },
    actions: {
        async queryBrandAsync(context) {
            let data = await api.cinema.queryBrandApi();
            //    console.log(data.data)
            return data.data;
        },
        async queryCinemaDistrictAsync(context) {
            let data = await api.cinema.queryCinemaDistrictApi();
            // console.log(data.data)
            return data.data;
        },
        async queryRoomNameAsync(context) {
            let data = await api.cinema.queryRoomNameApi();
            return data.data;
        },
        async queryAllCinemaAsync(context, params) {
            let data = await api.cinema.queryAllCinemaApi(params);

            return data.data;
        },


        async queryCinemaByFilmIdAsync(context, filmId) {
            let data = await api.cinema.queryCinemaByFilmIdApi(filmId);

            return data.data;
        },







        async queryCinemaByIdAsync(context, _id) {
            //console.log("__id",_id)
            let data = await api.cinema.queryCinemaByIdApi(_id);
            //console.log("111",data.data)
            return data.data;
        },
        async queryRoomByIdAsync(context, params){
            let data = await api.cinema.queryCinemaByIdApi(params);
            return data.data;
        },

        async querySessionAsync(context, obj) {
            //console.log("obj",obj)
            let data = await api.cinema.querySessionApi(obj);
            console.log("sessionList",data.data)
            return data.data;
        },



    }

}