<template>
  <div id="cinema">
    <div class="container">
      <div class="tags-panel">
        <ul class="tags-lines">
          <form class="form-inline" id="searchForm">
            <input type="hidden" name="nowPage" value="1" />
          </form>

          <li class="tags-line" data-type="brand">
            <div class="tags-title">品牌:</div>
            <ul class="tags" id="cinemaId">
              <li
                  :class="search.brandId == '' ? 'active' : ''"
                  @click="queryAllCinema((search.brandId = ''))"
              >
                <a href="javascript:void(0)">全部</a>
              </li>
              <li
                  :class="search.brandId == brand._id ? 'active' : ''"
                  v-for="brand in BrandList"
                  @click="queryAllCinema((search.brandId = brand._id))"
              >
                <a href="javascript:void(0)">{{ brand.brandName }}</a>
              </li>
              <!--              <li>-->
              <!--                <a href="javascript:void(0)">大地影院</a>-->
              <!--              </li>-->
              <!--              <li>-->
              <!--                <a href="javascript:void(0)">博纳国际影城</a>-->
              <!--              </li>-->
              <!--              <li>-->
              <!--                <a href="javascript:void(0)">耀莱成龙国际影城</a>-->
              <!--              </li>-->
              <!--              <li>-->
              <!--                <a href="javascript:void(0)">保利国际影城</a>-->
              <!--              </li>-->
            </ul>
          </li>

          <li class="tags-line" data-type="brand">
            <div class="tags-title">区域:</div>
            <ul class="tags" id="distractId">
              <li
                  :class="search.districtId == '' ? 'active' : ''"
                  @click="queryAllCinema((search.districtId = ''))"
              >
                <a href="javascript:void(0)">全部</a>
              </li>
              <li
                  :class="search.districtId == cinemaDistrict._id ? 'active' : ''"
                  v-for="cinemaDistrict in cinemaDistrictList"
                  @click="
                  queryAllCinema((search.districtId = cinemaDistrict._id))
                "
              >
                <a href="javascript:void(0)">
                  {{ cinemaDistrict.cinemaDistrict }}
                </a>
              </li>
              <!--              <li>-->
              <!--                <a href="javascript:void(0)">大地影院</a>-->
              <!--              </li>-->
              <!--              <li>-->
              <!--                <a href="javascript:void(0)">博纳国际影城</a>-->
              <!--              </li>-->
              <!--              <li>-->
              <!--                <a href="javascript:void(0)">耀莱成龙国际影城</a>-->
              <!--              </li>-->
              <!--              <li>-->
              <!--                <a href="javascript:void(0)">保利国际影城</a>-->
              <!--              </li>-->
            </ul>
          </li>

          <li class="tags-line" data-type="brand">
            <div class="tags-title">影厅:</div>
            <ul class="tags" id="roomId">
              <li
                  :class="search.roomId == '' ? 'active' : ''"
                  @click="queryAllCinema((search.roomId = ''))"
              >
                <a href="javascript:void(0)">全部</a>
              </li>
              <li
                  :class="search.roomId == room._id ? 'active' : ''"
                  v-for="room in roomNameList"
                  @click="queryAllCinema((search.roomId = room._id))"
              >
                <a href="javascript:void(0)">{{ room.roomName }}</a>
              </li>
              <!--              <li>-->
              <!--                <a href="javascript:void(0)">大地影院</a>-->
              <!--              </li>-->
              <!--              <li>-->
              <!--                <a href="javascript:void(0)">博纳国际影城</a>-->
              <!--              </li>-->
              <!--              <li>-->
              <!--                <a href="javascript:void(0)">耀莱成龙国际影城</a>-->
              <!--              </li>-->
              <!--              <li>-->
              <!--                <a href="javascript:void(0)">保利国际影城</a>-->
              <!--              </li>-->
            </ul>
          </li>
        </ul>
      </div>

      <div class="cinemas-list">
        <h2 class="cinemas-list-header">
          <span>影院列表</span>
        </h2>
        <!--        v-for="cinemaList in cinemaPageInfo.cinemaList"-->
        <div id="cinemaList" v-for="cinema in cinemaPageInfo.cinemaList">
          <div class="cinema-info" v-for="brand in cinema.brand">
            <router-link
                :to="'/cinemaDetail?cinemaId=' + cinema.cinemaId"
                class="font1"
            >
              {{ brand.brandName }}
            </router-link>
            <p class="cinema-address font2" v-for="address in cinema.cinema">
              {{ address.cinemaAddress }}
            </p>
            <span
                class="cinema-tags-item font3"
                v-for="address in cinema.cinema"
            >
              {{ address.cinemaDistrict }}
            </span>
            <span
                class="cinema-tags-item font3"
                v-for="address in cinema.cinema"
            >
              {{ address.cinemaPhone }}
            </span>
            <!--            <span class="cinema-tags-item">-----</span>-->
          </div>
          <div class="buy-btn">
            <router-link :to="'/cinemaDetail?cinemaId='+cinema.cinemaId+'&filmId='+search.filmId">购票</router-link>
          </div>
          <div class="price">
            <span class="rmb red"></span>
            <span class="price-num red stonefont"></span>
            <span class="money">{{ cinema.roomPrice }}起</span>
          </div>
        </div>
        <div class="movies-pager" style="text-align: center">
          <ul class="list-pager" id="pageList">
            <li class="active">
              <a
                  class="page_1"
                  href="javascript:void(0);"
                  @click="changePage(-1)"
                  style="cursor: pointer"
              >
                上一页
              </a>
            </li>
            <li v-for="page in cinemaPageInfo.lastPage">
              <a
                  class="page_1"
                  href="javascript:void(0);"
                  @click="changePage(page)"
                  style="cursor: pointer"
              >
                {{ page }}
              </a>
            </li>
            <!--        <li>-->
            <!--          <a class="page_1" href="javascript:void(0);" style="cursor: pointer">2</a>-->
            <!--        </li>-->
            <!--        <li>-->
            <!--          <a class="page_1" href="javascript:void(0);" style="cursor: pointer">3</a>-->
            <!--        </li>-->
            <li class="active">
              <a
                  class="page_1"
                  href="javascript:void(0);"
                  @click="changePage(-2)"
                  style="cursor: pointer"
              >
                下一页
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>


<!--    <div class="movies-pager" style="text-align: center">
      <ul class="list-pager" id="pageList">
        <li class="active">
          <a
              class="page_1"
              href="javascript:void(0);"
              @click="changePage(-1)"
              style="cursor: pointer"
          >
            上一页
          </a>
        </li>
        <li v-for="page in cinemaPageInfo.lastPage">
          <a
              class="page_1"
              href="javascript:void(0);"
              @click="changePage(page)"
              style="cursor: pointer"
          >
            {{ page }}
          </a>
        </li>
        &lt;!&ndash;        <li>&ndash;&gt;
        &lt;!&ndash;          <a class="page_1" href="javascript:void(0);" style="cursor: pointer">2</a>&ndash;&gt;
        &lt;!&ndash;        </li>&ndash;&gt;
        &lt;!&ndash;        <li>&ndash;&gt;
        &lt;!&ndash;          <a class="page_1" href="javascript:void(0);" style="cursor: pointer">3</a>&ndash;&gt;
        &lt;!&ndash;        </li>&ndash;&gt;
        <li class="active">
          <a
              class="page_1"
              href="javascript:void(0);"
              @click="changePage(-2)"
              style="cursor: pointer"
          >
            下一页
          </a>
        </li>
      </ul>
    </div>-->

  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("cinemaStore");

export default {
  name: "Cinema",
  data() {
    return {
      BrandList: [],//首页回显影厅品牌名称
      cinemaDistrictList: [],//首页回显影厅区域
      roomNameList: [],//首页回显影厅级别
      pageData:{currentPage:1,
        pageSize:1,},
      cinemaPageInfo:{},
      search:{
        brandId:"",
        districtId:"",
        roomId:"",
        filmId:"",
      }
    }

  },
  methods: {
    ...mapActions([
      "queryBrandAsync",
      "queryCinemaDistrictAsync",
      "queryRoomNameAsync",
      "queryAllCinemaAsync",
      "queryCinemaByIdAsync",
    ]),
    async queryBrand() {
      this.BrandList = await this.queryBrandAsync();
    },
    async queryCinemaDistrict() {
      this.cinemaDistrictList = await this.queryCinemaDistrictAsync();
    },
    async queryRoomName() {
      this.roomNameList = await this.queryRoomNameAsync();
      // console.log(this.roomNameList)
    },

    async queryAllCinema() {
      this.cinemaPageInfo = await this.queryAllCinemaAsync({...this.pageData, ...this.search});
      console.log("this.cinemaPageInfo12", this.cinemaPageInfo);
    },
    /*async queryAllCinema1() {
      this.cinemaPageInfo = await this.queryAllCinemaAsync({
        ...this.pageData,
        ...this.search,
      });
      //console.log(this.cinemaPageInfo);
    },*/
    changePage(page) {
      //console.log(page)
      this.pageData.currentPage = page;
      this.queryAllCinema();
    },

  },
  computed: {},
  created(){
    this.search.filmId=this.$route.query.filmId
    this.queryBrand();
    this.queryCinemaDistrict();
    this.queryRoomName();
    this.queryAllCinema();
    console.log(this.$route.query.filmImg)
  }
};

</script>

<style scoped>
@import "../assets/css/cinema.css";
</style>
