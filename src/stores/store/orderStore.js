/*
 * @Author: TanGuangZhi
 * @Date: 2022-03-09 14:05:59 Wed
 * @LastEditTime: 2022-03-09 15:05:25 Wed
 * @LastEditors: TanGuangZhi
 * @Description: 
 * @KeyWords: Vue, Web-Server, ElementUI
 */
import indexApi from "../../apis/indexApi.js";

export default {
    namespaced: true,
    state: {
        pageInfo: { orderList: [], lastPage: 0 },
    },
    mutations: {
        SET_PAGE_INFO(state, pageInfo) {
            state.pageInfo = pageInfo;
        },
    },
    actions: {
        async queryTodayBoxOfficeAsync(context, queryData) {
            let data = await indexApi.order.queryTodayBoxOfficeApi(queryData);
            return data.data;
        },
        async queryTodayMarketAsync(context, queryData) {
            let data = await indexApi.order.queryTodayMarketApi(queryData);
            return data.data;
        },
    }
}
