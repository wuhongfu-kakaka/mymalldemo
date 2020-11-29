<template>
  <div>

    <!-- NavBar导航栏 start-->
    <van-nav-bar
    left-arrow
    @click-left="onClickLeft" 
    title="详情页">
    </van-nav-bar>
    <!-- Navbar end -->

    <!-- DetailSwipe轮播图 start-->
    <detail-swipe :detailImages="detailImages"/>
    <!-- DetailSwipe end-->

    <!-- PriceContent价格内容 start -->
    <detail-price-content :priceContent="priceContent"/>
    <!-- PriceContent end -->
    <!-- DetailTitleAndDesc标题描述 start -->
    <detail-title-and-desc :title="title" />
    <!-- DetailTitleAndDesc end -->

    <!-- DetailServiceExtra额外服务 start -->
    <!-- <detail-service-extra /> -->
    <!-- DetailServiceExtra end -->

    <!-- DetailServiceContent服务内容 start -->
    <detail-service-content :shopServices = "shopServices"/>
    <!-- DetailServiceContent end -->

    <!-- DetailSelectContent选择内容 start -->
    <detail-select-content />
    <!-- DetailSelectContent end -->

    <!-- DetailBaseRate基本评价内容 start -->
    <detail-base-rate :rate = "rate"/>
    <!-- DetailBaseRate end -->

    <!-- DetailShop 商品信息 start -->
    <detail-shop :shopInfo = "shopInfo"/>
    <!-- DetailShop 商品信息 end -->

    <!-- DetailTab 滚动标签页 start -->
    <detail-tab 
    :detailInfo = "detailInfo"
    :itemParams="itemParams"
    :recommendList="recommendList"
    />
    <!-- DetailTab end -->

    <!-- DetailFooterBar start -->
    <detail-footer-bar :toCartItemInfo="toCartItemInfo"/>
    <!-- DetailFooterBar end -->
  </div>
</template>

<script>
//网络请求
import {getDetailByIid, getRecommend, PriceContent, ShopInfo} from "@/network/detail"

//引入Vant组件库中的NavBar导航栏，Toast 、、、
import { NavBar, Toast, Swipe, SwipeItem } from "vant"

//引入Detail详情页子组件
import DetailSwipe from "./childComps/DetailSwipe"
import DetailPriceContent from "./childComps/DetailPriceContent"
import DetailTitleAndDesc from './childComps/DetailTitleAndDesc'
import DetailServiceExtra from './childComps/DetailServiceExtra'
import DetailServiceContent from './childComps/DetailServiceContent'
import DetailSelectContent from './childComps/DetailSelectContent'
import DetailBaseRate from './childComps/DetailBaseRate'
import DetailShop from './childComps/DetailShop'
import DetailTab from './childComps/DetailTab'
import DetailFooterBar from "./childComps/DetailFooterBar"

export default {
  name: "Detail",
  components:{
    //Vant组件
    [NavBar.name]: NavBar,
    //Detail详情页子组件
    DetailSwipe,
    DetailPriceContent,
    DetailTitleAndDesc,
    DetailServiceExtra,
    DetailServiceContent,
    DetailSelectContent,
    DetailBaseRate,
    DetailShop,
    DetailTab,
    DetailFooterBar,






  },
  data(){
    return {
      // navBatTitles: ["商品","参数","评论","推荐"],
      detailImages: [],//轮播图数据
      priceContent: {},//价格内容
      title: "", //标题
      shopServices: [] ,//商家服务信息
      rate: {},//客户评论信息
      shopInfo: {},//店铺信息
      detailInfo: {},// 图文详情信息
      itemParams: {}, //产品参数&尺码说明
      recommendList: [],//推荐数据

    }
  },
  created(){
    //保存商品的iid
    this.iid = this.$route.params.iid

    //网络请求
    getDetailByIid(this.iid).then(res => {
      const {result} = res
      //轮播图数据
      this.detailImages = result.itemInfo.topImages
      //价格数据
      this.priceContent =  new PriceContent(result.itemInfo)
      //标题
      this.title = result.itemInfo.title
      

      //商家服务信息
      this.shopServices = result.shopInfo.services
      //客户评论信息
      this.rate = result.rate

      //店铺信息
      this.shopInfo = new ShopInfo(result.shopInfo)
      // 图文详情信息
      this.detailInfo = result.detailInfo
      
      //产品参数&尺码说明
      this.itemParams = result.itemParams
    })

    //获取推荐数据
    getRecommend().then( res => {
      const {list} = res.data
      this.recommendList = list
    })

  },
  computed: {
    toCartItemInfo() {
      return {
        id: this.iid,
        price: this.priceContent.price,
        lowNowPrice: this.priceContent.lowNowPrice,
        title: this.title,
        desc: this.detailInfo.desc,
        image: this.detailImages[0],
        flags: {isPick: false},
      }
    }
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


</style>