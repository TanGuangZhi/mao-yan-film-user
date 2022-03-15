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
                  {{ filmType }}
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
              <li>
                <div>演员</div>
                <div>
                  <a href="#">
                    <img
                      :src="'http://localhost:3000/' + filmActor.actorImg"
                      alt=""
                      style="width: 138px; height: 170px"
                    />
                  </a>
                </div>
                <div>
                  <a href="#">
                    {{ filmActor.realName }}
                  </a>
                  <p
                    title="饰：埃迪·布洛克/毒液 Eddie Brock / Venom"
                    style="font-size: 10px"
                  >
                    饰：{{ filmActor.roleName }}
                  </p>
                </div>
              </li>
              <!-- 3 -->
              <li>
                <div></div>
                <div>
                  <a href="#">
                    <img src="../../public/images/actor/4.jpg" alt="" />
                  </a>
                </div>
                <div>
                  <a href="#">米歇尔·威廉姆斯</a>
                  <p title="饰：安妮·韦英 Anne Weying">饰：安妮·韦英 An...</p>
                </div>
              </li>
              <!-- 4 -->
              <li>
                <div></div>
                <div>
                  <a href="#">
                    <img src="../../public/images/actor/5.jpg" alt="" />
                  </a>
                </div>
                <div>
                  <a href="#">里兹·阿迈德</a>
                  <p title="饰：德雷克博士 Dr. Carlton Drake">
                    饰：德雷克博士 D...
                  </p>
                </div>
              </li>
              <!-- 5 -->
              <li>
                <div></div>
                <div>
                  <a href="#">
                    <img src="../../public/images/actor/2.jpg" alt="" />
                  </a>
                </div>
                <div>
                  <a href="#">斯科特·黑兹</a>
                  <p title="饰：Security Chief Roland Treece">
                    饰：Security Chie...
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
              <a href="#">写短评</a>
            </div>
          </div>
          <div class="content_L5_2">
            <ul>
              <!-- 1 -->
              <li>
                <div class="content_L5_2_1">
                  <img
                    v-for="(item, index) in user"
                    v-if="index == 0"
                    :src="'http://localhost:3000/' + item.userImg"
                    alt=""
                  />
                  <i class="v1"></i>
                </div>
                <div class="content_L5_2_2">
                  <div class="content_L5_2_2_1">
                    <span
                      class="content_L5_2_2_11"
                      v-for="(item, index) in user"
                      v-if="index == 0"
                    >
                      {{ item.userName }}
                    </span>
                    <span class="content_L5_2_2_12">购</span>
                  </div>
                  <div class="content_L5_2_2_2">
                    <div>
                      <span>11-09</span>
                      <i class="xin5"></i>
                    </div>
                    <div>
                      <a href="./login.html" target="blank"></a>
                      <span>13690</span>
                    </div>
                  </div>
                  <p>{{ comment.content }}</p>
                </div>
              </li>
              2
              <li>
                <div class="content_L5_2_1">
                  <img src="../../public/images/6.jpg" alt="" />
                  <i class="v4"></i>
                </div>
                <div class="content_L5_2_2">
                  <div class="content_L5_2_2_1">
                    <span class="content_L5_2_2_11">
                      A名犬乐园 （定金选狗）款到发货
                    </span>
                    <span class="content_L5_2_2_12">购</span>
                  </div>
                  <div class="content_L5_2_2_2">
                    <div>
                      <span>11-09</span>
                      <i class="xin5"></i>
                    </div>
                    <div>
                      <a href="./login.html" target="blank"></a>
                      <span>7792</span>
                    </div>
                  </div>
                  <p>
                    真的太震撼了，漫威从来没有让我失望，虽然好多地方我感觉像是被删减过许多吓人的画面，但是真的还是太好看，好多地方从头到尾一直在笑，最后还有一点小感人。一直都是震撼幽默的画面。真希望可以能有第二部的上映。这个毒液系列希望像蜘蛛侠钢铁侠一样出一个系列有续集，真的没有看过瘾啊。（人生第一次评价话有点多）总之，大家可以去观看，我是电影迷这一部我给11分，强烈大家去观看！
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </article>
      <aside>
        <div class="content_R1">
          <div class="content_R1_1">
            <h3>热门短评</h3>
          </div>
          <ul>
            <li>
              <div>
                <a href="#">
                  <img src="../../public/images/6.jpg" alt="" />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  title="《毒液》票房破17亿，给抖森换上汤老湿的厚嘴唇，画风太诡异了"
                >
                  《毒液》票房破17亿，给抖森换上汤老湿的厚嘴唇，画...
                </a>
                <p>
                  <span>猫眼电影</span>
                  <i></i>
                  <span>9914</span>
                  <i></i>
                  <span>8</span>
                </p>
              </div>
            </li>
            <li>
              <div>
                <a href="#">
                  <img src="../../public/images/6.jpg" alt="" />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  title="《毒液》全球票房超《神奇女侠》，中国票房超16.8亿成最大票仓"
                >
                  《毒液》全球票房超《神奇女侠》，中国票房超16.8亿成...
                </a>
                <p>
                  <span>猫眼电影</span>
                  <i></i>
                  <span>14339</span>
                  <i></i>
                  <span>53</span>
                </p>
              </div>
            </li>
            <li>
              <div>
                <a href="#">
                  <img src="../../public/images/6.jpg" alt="" />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  title="钢铁侠晒图，毒液现身，还和复仇者联盟抢饭吃，是在暗示什么吗"
                >
                  钢铁侠晒图，毒液现身，还和复仇者联盟抢饭吃，是在暗...
                </a>
                <p>
                  <span>猫眼电影</span>
                  <i></i>
                  <span>19774</span>
                  <i></i>
                  <span>8</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="content_R2">
          <div class="content_R2_1">
            <h3>相关电影</h3>
          </div>
          <dl>
            <!-- 1 -->
            <dd v-for="film in similarFilm">
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
                  <!--                <p>暂无评分</p>-->
                </div>
              </router-link>
            </dd>
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
      filmType: {},
      filmActor: {},
      userId: "",
      user: [],
      filmTypeId: "",
      similarFilm: [],
      comment: [],
      filmDetail: [],
      dialogObj: { comment: false },
      toCommentPageData: {},
    };
  },
  methods: {
    ...mapActionsForFilm([
      "queryFilmByFilmIdAsync",
      "queryFilmByFilmTypeIdAsync",
    ]),
    async queryFilmByFilmId(filmId) {
      //console.log("filmId",filmId)
      let res = await this.queryFilmByFilmIdAsync(filmId);
      //console.log("res",res)
      this.film = res[0];
      //console.log("this.film",this.film)
      this.comment = this.film.comment[0];
      //console.log("this.comment",this.comment)

      this.filmActor = this.film.filmActor[0];
      //console.log("this.filmActor",this.filmActor)

      this.userId = this.comment.userId;

      this.filmType = this.film.filmType[0].filmType;
      this.filmTypeId = this.film.filmTypeId;
      // console.log(this.film)
    },
    async queryUserByUserId(_id) {
      let res = await api.user.queryUserByUserIdApi(_id);
      this.user = res.data;
    },
    async queryFilmByFilmTypeId(filmTypeId) {
      let res = await this.queryFilmByFilmTypeIdAsync(filmTypeId);
      this.similarFilm = res;
      // console.log("this.similarFilm",res)
    },

    // 1.
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
          alert(`未查到相关信息`);
        } else {
          this.dialogObj.comment = true;
        }
      });
    },
  },
  created() {
    //console.log(this.$route.query.filmId)
    this.queryFilmByFilmId(this.$route.query.filmId).then((res) => {
      this.queryUserByUserId(this.userId);
      this.queryFilmByFilmTypeId(this.filmTypeId);
    });
  },
};
</script>

<style scoped>
@import "../assets/css/filmDetail.css";
</style>
