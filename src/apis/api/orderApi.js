/*
 * @Author: TanGuangZhi
 * @Date: 2022-03-09 14:06:07 Wed
 * @LastEditTime: 2022-03-10 12:57:08 Thu
 * @LastEditors: TanGuangZhi
 * @Description: 
 * @KeyWords: Vue, Web-Server, ElementUI
 */
import axios from "axios";

export default {
    queryTodayBoxOfficeApi(params) {
        return axios({
            url: "order/queryTodayBoxOffice",
            method: "GET",
            params
        });
    },
    queryTodayMarketApi(params) {
        return axios({
            url: "order/queryTodayMarket",
            method: "GET",
            params
        });
    },
    payApi(params) {
        return axios({
            url: "order/pay",
            method: "GET",
            params
        })
    }
}
