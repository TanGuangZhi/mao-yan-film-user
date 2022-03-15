/*
 * @Author: TanGuangZhi
 * @Date: 2022-03-09 13:18:13 Wed
 * @LastEditTime: 2022-03-10 15:03:48 Thu
 * @LastEditors: TanGuangZhi
 * @Description: 
 * @KeyWords: Vue, Web-Server, ElementUI
 */

import indexApi from "../../apis/indexApi.js";

export default {
    namespaced: true,
    state: {
        userList: []
    },
    mutations: {
        SET_USER_LIST(state, userList) {
            state.userList = userList;
        },
    },
    actions: {
        async userLoginAsync(context, queryData) {
            let data = await indexApi.user.userLoginApi(queryData);
            return data.data;
        },
        async loginAsync(context, user) {
            let data = await indexApi.user.loginApi(user);
            if (data.data.token) {
                localStorage.setItem("token", data.data.token);
            }
            return data.data;
        },
        async userRegisterAsync(context, queryData) {
            let data = await indexApi.user.userRegisterApi(queryData);
            return data.data;
        },

        async queryUserByUserIdAsync(context,userId){
            let res= await indexApi.user.queryUserByUserIdApi(userId)
            return res.data
        }


    }
}

