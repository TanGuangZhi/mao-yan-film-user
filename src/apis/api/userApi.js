/*
 * @Author: TanGuangZhi
 * @Date: 2022-03-09 13:24:00 Wed
 * @LastEditTime: 2022-03-11 21:34:16 Fri
 * @LastEditors: TanGuangZhi
 * @Description: 
 * @KeyWords: Vue, Web-Server, ElementUI
 */
import axios from "axios";

export default {
    userLoginApi(user) {
        return axios({
            url: "user/userLogin",
            method: "GET",
            params: user
        });
    },
    loginApi(user) {
        return axios({
            url: "user/userLogin",
            method: "get",
            params: user
        })
    },
    userRegisterApi(user) {
        return axios({
            url: "user/register",
            method: "GET",
            params: user
        });
    },
    checkTokenApi(token) {
        return axios({
            url: "user/checkToken",
            method: "POST",
            data: { token }
        });
    },
    //通过userId查询用户信息
    queryUserByUserIdApi(_id) {
        return axios({
            url: "user/queryUserByUserId",
            method: "GET",
            params: { _id }
        })
    }
}
