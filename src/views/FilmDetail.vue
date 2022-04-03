<template>
  <div id="filmDetail">
    <Banner />
    <Comment :dialogObj="dialogObj" :toCommentPageData="toCommentPageData" />
    <!-- 详情头 -->
    <article class="xiangding">
      <div class="beijing1">
        <div class="beijing1_1">
          <div>
            <i></i>
            <a href="#">
              <img
                :src="'http://localhost:3000/' + film.filmImg"
                alt=""
                style="height: 310px"
              />
            </a>
          </div>
          <div></div>
        </div>
        <div class="beijing1_2">
          <div class="beijing1_2_1">
            <ul>
              <li>
                <h3>{{ film.filmName }}</h3>
              </li>
              <li>
                <p>Venom</p>
              </li>
              <li>
                <p>
                  {{ film.filmType2Details[0].filmType }}
                </p>
              </li>
              <li>
                <p>{{ film.filmArea }}/ {{ film.timeCount }}分钟</p>
              </li>
              <li>
                <p>{{ film.startDate }}大陆上映</p>
              </li>
            </ul>
          </div>
          <div class="beijing1_2_2">
            <div class="beijing1_2_2_1">
              <a href="#">
                <i></i>
                <span>想看</span>
              </a>
            </div>
            <div class="beijing1_2_2_2" @click="judgeIsCanComment">
              <a href="#">
                <i></i>
                <span>评分</span>
              </a>
            </div>
            <div class="beijing1_2_2_3">
              <router-link
                :to="{
                  path: '/Cinema',
                  query: {
                    filmId: film._id,
                    filmImg: film.filmImg,
                    filmName: film.filmName,
                  },
                }"
              >
                特惠购票
              </router-link>
            </div>
          </div>
        </div>
        <div class="beijing1_3">
          <div class="beijing1_3_1">
            <p class="beijing1_3_11">用户评分</p>
            <div class="beijing1_3_1_2">
              <div class="beijing1_3_1_21">
                <span>{{ film.filmAvgScore[0].filmAvgScore.toFixed(1) }}</span>
              </div>
              <div class="beijing1_3_1_22">
                <div></div>
                <p>
                  <span>81.6</span>
                  <span>万人评分</span>
                </p>
              </div>
            </div>
          </div>
          <div class="beijing1_3_2">
            <p>累计票房</p>
            <p>
              <span>{{ film.viewFilmCount / 10000 }}</span>
              <span>亿</span>
            </p>
          </div>
        </div>
      </div>
    </article>
    <!-- 内容部分 -->
    <div class="content">
      <article>
        <div class="content_L1">
          <section class="content_L1_1">
            <ul>
              <li>
                <input type="radio" id="jieshao" name="lei" checked />
                <label for="jieshao">
                  <a>介绍</a>
                </label>
                <input type="radio" id="yanzhirenyuan" name="lei" />
                <label for="yanzhirenyuan">
                  <a>演职人员</a>
                </label>
                <input type="radio" id="jiangxiang" name="lei" />
                <label for="jiangxiang">
                  <a>奖项</a>
                </label>
                <input type="radio" id="tuji" name="lei" />
                <label for="tuji">
                  <a>图集</a>
                </label>
              </li>
            </ul>
          </section>
        </div>
        <div class="content_L2">
          <h3>剧情简介</h3>
          <p>{{ film.details }}</p>
        </div>
        <div class="content_L3">
          <div class="content_L3_1">
            <h3>演职人员</h3>
            <div class="content_L3_11">
              <a href="#">全部</a>
              <i></i>
            </div>
          </div>
          <div class="content_L3_2">
            <ul>
              <!-- 1 -->
              <li>
                <div>导演</div>
                <div>
                  <a href="#">
                    <img
                      :src="'http://localhost:3000/' + film.directorImg"
                      alt=""
                      style="width: 138px; height: 170px"
                    />
                  </a>
                </div>
                <div>
                  <a href="#">
                    {{ film.director }}
                  </a>
                </div>
              </li>

              <!-- 2 -->
              <li v-for="(actor, index) in film.filmActor" :key="index">
                <div>演员</div>
                <div>
                  <a href="#">
                    <img
                      :src="
                        'http://localhost:3000/' + film.filmActor[0].actorImg
                      "
                      alt=""
                      style="width: 138px; height: 170px"
                    />
                  </a>
                </div>
                <div>
                  <a href="#">
                    {{ film.filmActor[0].realName }}
                  </a>
                  <p
                    title="饰：埃迪·布洛克/毒液 Eddie Brock / Venom"
                    style="font-size: 10px"
                  >
                    饰：{{ film.filmActor[0].roleName }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="content_L4">
          <div class="content_L4_1">
            <h3>图集</h3>
            <div class="content_L4_11">
              <a href="#">全部</a>
              <i></i>
            </div>
          </div>
          <div class="content_L4_2">
            <div class="content_L4_2_1">
              <a href="#">
                <img src="../../public/images/1.jpg" alt="" />
              </a>
            </div>
            <div class="content_L4_2_2">
              <div>
                <a href="#">
                  <img src="../../public/images/2.jpg" alt="" />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src="../../public/images/3.jpg" alt="" />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src="../../public/images/4.jpg" alt="" />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src="../../public/images/5.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="content_L5">
          <div class="content_L5_1">
            <h3>热门短评</h3>
            <div class="content_L5_11">
              <a @click="judgeIsCanComment">写短评</a>
            </div>
          </div>
          <div class="content_L5_2">
            <ul>
              <!-- 1 -->
              <li v-for="(comment, index) in film.comment2Details" :key="index">
                <div class="content_L5_2_1">
                  <img
                    :src="
                      'http://localhost:3000/' +
                      comment.userId2Details[0].userImg
                    "
                    alt=""
                  />
                  <i class="v1"></i>
                </div>
                <div class="content_L5_2_2">
                  <div class="content_L5_2_2_1">
                    <span>
                      {{ comment.userId2Details[0].userName }}
                    </span>
                    <span class="content_L5_2_2_12">购</span>
                  </div>
                  <div class="content_L5_2_2_2">
                    <div>
                      <span>{{ comment.commentTime }}</span>
                      <i class="xin5"></i>
                    </div>
                    <div>
                      <a href="./login.html" target="blank"></a>
                      <span>{{ comment.filmScore }}</span>
                    </div>
                  </div>
                  <p>{{ comment.content }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </article>
      <aside>
        <div class="content_R2">
          <div class="content_R2_1">
            <h3>相关电影</h3>
          </div>
          <dl>
            <!-- 1 -->
            <!-- <dd v-for="film in similarFilm">
              <router-link
                :to="{ path: '/FilmDetail', query: { filmId: film._id } }"
              >
                <div>
                  <a href="#">
                    <img
                      :src="'http://localhost:3000/' + film.filmImg"
                      alt=""
                      style="width: 140px; height: 150px"
                    />
                  </a>
                </div>
                <div>
                  <a href="#" title="X战警：新变种人">{{ film.filmName }}.</a>
                </div>
              </router-link>
            </dd> -->
          </dl>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import Comment from "./Comment.vue";
import { createNamespacedHelpers } from "vuex";
const { mapActions: mapActionsForFilm, mapState } =
  createNamespacedHelpers("filmStore");

import api from "../apis/indexApi.js";

export default {
  name: "FilmDetail",
  components: { Banner, Comment },
  data() {
    return {
      film: {},
      userId: "",
      user: [],
      similarFilm: [],
      dialogObj: { comment: false },
      toCommentPageData: {},
    };
  },
  methods: {
    ...mapActionsForFilm([
      "queryFilmByFilmIdAsync",
      "queryFilmByFilmTypeIdAsync",
    ]),

    // ## film
    // 1.
    async queryFilmByFilmId(filmId) {
      let res = await this.queryFilmByFilmIdAsync(filmId);
      this.film = res[0];
      console.log(this.film);
    },

    // ## other
    // 1. query user
    async queryUserByUserId(_id) {
      let res = await api.user.queryUserByUserIdApi(_id);
      this.user = res.data;
    },

    // 2.
    judgeIsCanComment() {
      let loginUserInfo = localStorage.getItem("loginUserInfo");
      // console.log(loginUserInfo);
      let userId;
      if (loginUserInfo) {
        userId = JSON.parse(loginUserInfo).userInfo._id;
      } else {
        this.$router.push("./login");
        return;
      }
      this.toCommentPageData.userId = userId;
      this.toCommentPageData.filmId = this.$route.query.filmId;
      this.$http("http://localhost:3000/order/isCanComment", {
        params: { userId, filmId: this.film._id },
      }).then((res) => {
        // console.log(res);
        if (res.data == 0) {
          alert(`暂未查到您的购买信息,请购票后再评论~`);
        } else {
          this.dialogObj.comment = true;
        }
      });
    },
  },

  created() {
    //console.log(this.$route.query.filmId)
    this.queryFilmByFilmId(this.$route.query.filmId);
  },
};
</script>

<style scoped>
@import "../assets/css/filmDetail.css";
</style>
