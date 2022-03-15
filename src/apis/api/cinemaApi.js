import axios from "axios";

export default {

    queryBrandApi(params){
        return axios({
            url:"cinema/queryBrand",
            method:"GET",
        });
    },
    queryCinemaDistrictApi(){
        return axios({
            url:"cinema/queryCinemaDistrict",
            method:"GET",
        });
    },
    queryRoomNameApi(){
        return axios({
            url:"cinema/queryRoomName",
            method:"GET",
        });
    },

    queryAllCinemaApi(params){
        //console.log("params",params)
        return axios({
            url:"cinema/queryAllCinema",
            method:"GET",
            params
        });
    },

    queryCinemaByFilmIdApi(filmId){
        //console.log("params",params)
        return axios({
            url:"cinema/queryCinemaByFilmId",
            method:"GET",
            params:filmId
        });
    },


    queryCinemaByIdApi(_id){
        return axios({
            url:"cinema/queryCinemaById",
            method:"GET",
            params:{_id}
        });
    },
    queryRoomByIdApi(params){
        return axios({
            url:"cinema/queryRoomById",
            method:"GET",
            params
        });
    },

    querySessionApi(obj){
        console.log("obj1",obj)
        return axios({
            url:"cinema/querySession",
            method:"GET",
            params: obj

        })
    },







}