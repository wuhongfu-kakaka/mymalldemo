<template>
  <div id="home">
    <navbar>
      <template v-slot:center>
        <span>购物街</span>
      </template>
    </navbar>
    <scroll 
    ref="scroll"
    @pullingUp="loadMoreGoods"
    @scroll="contentScroll">
      <home-swiper :banners="banners" />
      <home-recommend :recommends="recommends"/>
      <home-feature />
      <tab-control :titles="goods.tabControlTitles" 
      ref="tab"
      @tab-click="tabClick"
      class="tab-control"/>
      <goods-list :goods="goodsList"/>
    </scroll>

    <back-top @click.native="backToTop" v-show="isShowBackTop"/>
  </div>
  
</template>

<script>
import Navbar from "@components/common/navbar/Navbar"
import TabControl from "@components/content/tab_control/TabControl"
import Scroll from "@components/common/scroll/Scroll"

import GoodsList from "@components/content/goods/GoodsList"
import BackTop from "@components/content/backtop/BackTop"


import HomeSwiper from "./childComps/HomeSwiper"
import HomeRecommend from "./childComps/HomeRecommend"
import HomeFeature from "./childComps/HomeFeature"

import {getHomeMultidata, getHomeGoods} from "@network/home"


export default {
  name: "Home",
  components: {
    Navbar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data(){
    return {
      banners: [],
      recommends: [],
      isShowBackTop: false,
      currentDataType: "pop",
      goods: {
        tabControlTitles: ["流行", "新款", "精选"],
        dataType: ["pop", "new", "sell"],
        data: {
          pop: {
            list:[],
            page: 0
            },
          new: {
            list:[],
            page: 0
          },
          sell: {
            list:[],
            page: 0
          }
        }
      },

    }
  },
  computed: {
    goodsList(){
        return this.goods.data[this.currentDataType].list
      }
  },
  created() {
    //请求banners和recommends数据
    this.getHomeMultidata()

    //请求商品数据
    this.goods.dataType.forEach( type => this.getHomeGoods(type))

  },
  activated(){
    this.$refs.scroll.bscroll.refresh()
    console.log(1)
  },
  methods: {
    getHomeMultidata(){
      getHomeMultidata()
      .then((res) => {
        
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
        
      })
      .catch((error) => console.log(error))
    },
    /*
    * 当下拉到底时，加载更多商品
    */
    async loadMoreGoods(){
      await this.getHomeGoods(this.currentDataType)

      this.$refs.scroll.bscroll.refresh()
      this.$refs.scroll.bscroll.finishPullUp()
      

    },
    /*
    * type, page
    * */
     async getHomeGoods(type){
      let page = this.goods.data[type].page + 1

      await getHomeGoods(type, page)
      .then(res =>  {
        this.goods.data[type].list.push(...res.data.list)
        this.goods.data[type].page++;
      })
      .catch((error) => console.log(error))

    },
    tabClick(index){
      //点击切换商品数据类型
      this.currentDataType = this.goods.dataType[index]

    },
    /**
     * 
     *  上拉的时候触发该函数
     * */    
    contentScroll(position){
      //1、判断是否显示返回top部位置图标
      this.isShowBackTop = position.y < -1000
    },
    backToTop(){
      this.$refs.scroll.bscroll.scrollTo(0,0)
    }

  }
}
</script>

<style scoped>
.navbar {
  background-color: var(--color-tint);
  color: aliceblue;
}
.tab-control {
  position: sticky;
  top: -1px;

  background-color: rgba(248, 246, 250, 0.444);
  z-index: 10;
}
</style>
