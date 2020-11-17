<template>
  <div>

    <!-- NavBar导航栏 start-->
    <van-nav-bar
    left-arrow
    @click-left="onClickLeft">
      <template v-slot:title>
        <div class="navBatTitle">
          <span 
          v-for="(title, index) in navBatTitles" 
          v-bind:key="index">
            {{title}}
          </span>
        </div>
      </template>
    </van-nav-bar>
    <!-- Navbar end -->

    <!-- DetailSwipe start-->
    <detail-swipe :detailImages="detailImages"/>
    <!-- DetailSwipe end-->





  </div>
</template>

<script>
//网络请求
import {getDetailByIid} from "@/network/detail"

//引入Vant组件库中的NavBar导航栏，Toast 、、、
import { NavBar, Toast, Swipe, SwipeItem } from "vant"

import DetailSwipe from "./childComps/DetailSwipe"


export default {
  name: "Detail",
  components:{
    [NavBar.name]: NavBar,
    DetailSwipe
    
  },
  data(){
    return {
      navBatTitles: ["商品","参数","评论","推荐"],
      detailImages: [],//轮播图数据
    }
  },
  created(){
    //保存商品的iid
    this.iid = this.$route.params.iid

    //网络请求
    getDetailByIid(this.iid).then(res => {
      console.log(res);
      const {result} = res
      console.log(result);

      this.detailImages = result.itemInfo.topImages
      

    })

  },
  methods: {
    // 后退一步
    onClickLeft() {
      this.$router.go(-1)
    },
    
  },

}
</script>

<style scoped>
.navBatTitle{
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  color: gray;
}
.navBatTitle span{
  padding: 8px 18px;
}


</style>