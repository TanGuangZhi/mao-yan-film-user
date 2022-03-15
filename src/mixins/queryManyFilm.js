export default {
    data(){
        return {
            pageData:{
                currentPage:1,
                pageSize:12,
            },
            pageSizeList:[12,24,36,48,60,72],
            filmType: [
                {
                    "_id": "1",
                    "filmType": "爱情"
                },
                {
                    "_id": "2",
                    "filmType": "喜剧"
                },
                {
                    "_id": "3",
                    "filmType": "动画"
                },
                {
                    "_id": "4",
                    "filmType": "剧情"
                },
                {
                    "_id": "5",
                    "filmType": "惊悚"
                },
                {
                    "_id": "6",
                    "filmType": "科幻"
                },
                {
                    "_id": "7",
                    "filmType": "动作"
                },
                {
                    "_id": "8",
                    "filmType": "悬疑"
                },
                {
                    "_id": "9",
                    "filmType": "犯罪"
                },
                {
                    "_id": "10",
                    "filmType": "冒险"
                },
                {
                    "_id": "11",
                    "filmType": "战争"
                },
                {
                    "_id": "12",
                    "filmType": "奇幻"
                },
                {
                    "_id": "13",
                    "filmType": "运动"
                },
                {
                    "_id": "14",
                    "filmType": "武侠"
                },
                {
                    "_id": "15",
                    "filmType": "历史"
                }
            ],
        }
    },
    methods:{
        changePageSize(pageSize){
            this.pageData.pageSize=pageSize;
            this.queryManyFilm();
        },
        changeCurrentPage(currentPage){
            this.pageData.currentPage=currentPage;
            this.queryManyFilm();
        },
        getFilmScore(val){
            return val?.filmScore??"暂无评分"
        },
        getFilmListLength(val){
            return val?.length??null
        }
    }
}