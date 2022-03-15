/*
 * @Author: TanGuangZhi
 * @Date: 2022-03-10 16:22:34 Thu
 * @LastEditTime: 2022-03-10 16:55:02 Thu
 * @LastEditors: TanGuangZhi
 * @Description: 
 * @KeyWords: Vue, Web-Server, ElementUI
 */
import axios from "axios";

export default {
    queryFilmApi(params) {
        return axios({
            url: "film/queryFilm",
            method: "GET",
            params
        });
    },
    deleteFilmApi(_id) {
        return axios({
            url: "film/deleteFilm",
            method: "GET",
            params: {_id}
        });
    },
    updateFilmApi(film) {
        return axios({
            url: "film/updateFilm",
            method: "POST",
            data: film
        });
    },
    addFilmApi(film) {
        return axios({
            url: "film/addFilm",
            method: "POST",
            data: film
        });
    },
    deleteManyFilmApi(idArray) {
        return axios({
            url: "film/deleteManyFilm",
            method: "GET",
            params: {idArray}
        });
    },

    //查询最受期待前10部
    queryFilmExpectApi() {
        return axios({
            url: "film/queryFilmExpect",
            method: "GET"
        })
    },
    queryAllFilmExpectApi() {
        return axios({
            url: "film/queryAllFilmExpect",
            method: "GET"
        })
    },
    queryFilmByFilmIdApi(filmId) {
        return axios({
            url: "film/queryFilmByFilmId",
            method: "GET",
            params: {filmId}
        })
    },
    queryFilmByFilmTypeIdApi(filmTypeId) {
        return axios({
            url: "film/queryFilmByFilmTypeId",
            method: "GET",
            params: {filmTypeId}
        })
    },

    queryManyFilmApi(params) {
        return axios({
            url: "film/queryManyFilm",
            method: "GET",
            params,
        })

    },

    queryFutureFilmApi() {
        return axios({
            url: "film/queryFutureFilm",
            method: "GET"
        });
    },

}

