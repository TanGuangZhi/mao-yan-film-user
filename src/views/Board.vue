<template>
  <div id="board">
    <!-- 榜单 -->
    <div class="header">
      <ul>
        <li>
          <a :class="jump=='HotPlay'?'active':''"  href="javascript:void(0);" @click="changeFilmType('HotPlay')">热映口碑榜</a>
        </li>
        <li>
          <a :class="jump=='Expect'?'active':''"  href="javascript:void(0);" @click="changeFilmType('Expect')">最受期待榜</a>
        </li>
        <li>
          <a :class="jump=='ViewCount'?'active':''"  href="javascript:void(0);" @click="changeFilmType('ViewCount')">国内票房榜</a>
        </li>
        <li>
          <a :class="jump=='NorthAmerica'?'active':''"  href="javascript:void(0);" @click="changeFilmType('NorthAmerica')">北美票房榜</a>
        </li>
        <li>
          <a :class="jump=='Top100'?'active':''"  href="javascript:void(0);" @click="changeFilmType('Top100')">TOP100榜</a>
        </li>
      </ul>
    </div>
    <!--    电影显示区-->
    <keep-alive>
      <component :is="jump"></component>
    </keep-alive>
  </div>

</template>

<script>
import Top100 from "./board/Top100";
import Expect from "./board/Expect";
import HotPlay from "./board/HotPlay";
import ViewCount from "./board/ViewCount";
import NorthAmerica from "./board/NorthAmerica";
export default {
  name: "Board",
  components:{
    Top100,
    Expect,
    HotPlay,
    ViewCount,
    NorthAmerica
  },
  data(){
    return {
      jump:"HotPlay"
    }
  },
  methods:{
    changeFilmType(val){
      this.jump=val;
    },
  },
  created() {
  },
  computed: {
  },
}
</script>

<style scoped>
@import "../assets/css/board.css";
</style>