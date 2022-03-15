/*
 * @Author: TanGuangZhi
 * @Date: 2022-03-09 13:18:25 Wed
 * @LastEditTime: 2022-03-10 17:07:04 Thu
 * @LastEditors: TanGuangZhi
 * @Description: 
 * @KeyWords: Vue, Web-Server, ElementUI
 */


import api from "../../apis/indexApi";

export default {
    namespaced: true,
    state: {
        filmPageInfo: {},
        // hotPraiseFilm: {},
        futureFilmList: {},
        classicPageInfo:{},
    },
    mutations: {
        SET_FILM_PAGE_INFO(state, filmPageInfo) {
            state.filmPageInfo = filmPageInfo;
        },

        SET_FUTURE_FILM_LIST(state, futureFilmList) {
            state.futureFilmList = futureFilmList;
        },
        SET_CLASSIC_FILM_LIST(state,classicPageInfo){
            state.classicPageInfo=classicPageInfo
        }
    },
    actions: {
        async queryManyFilmAsync(context, params) {
            if (params.status=="1"){
                let data = await api.film.queryManyFilmApi(params);
                context.commit("SET_FILM_PAGE_INFO", data.data);
            }else if(params.status=="3"){
                let data = await api.film.queryManyFilmApi(params);
                context.commit("SET_CLASSIC_FILM_LIST", data.data);
            }else {
                let data = await api.film.queryManyFilmApi(params);
                context.commit("SET_FILM_PAGE_INFO", data.data);
            }

        },

        async queryFutureFilmAsync(context) {

            let data = await api.film.queryFutureFilmApi()
            // console.log(data.data)
            context.commit("SET_FUTURE_FILM_LIST", data.data)
        },

        async queryFIlmExpectAsync(context) {
            let res = await api.film.queryFilmExpectApi()
            return res.data

        },
        async queryFilmByFilmIdAsync(context, filmId) {
            let res = await api.film.queryFilmByFilmIdApi(filmId)
            return res.data
            //console.log("res",res.data)
        },
        async queryFilmByFilmTypeIdAsync(context, filmTypeId) {
            // console.log("222",filmTypeId)
            let res = await api.film.queryFilmByFilmTypeIdApi(filmTypeId)
            return res.data

        }
    }
}