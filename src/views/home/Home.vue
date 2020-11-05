<template>
  <div id="home">
    <navbar>
      <template v-slot:center>
        <span>购物街</span>
      </template>
    </navbar>
    <home-swiper :banners="banners" />
    <home-recommend :recommends="recommends"/>
    <home-feature />
    <tab-control :titles="goods.tabControlTitles" 
    ref="tab"
    @tab-click="tabClick"
    class="tab-control"/>
    <goods-list :goods="goodsList"/>

    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
  </div>
  
</template>

<script>
import Navbar from "@components/common/navbar/Navbar"
import TabControl from "@components/content/tab_control/TabControl"

import GoodsList from "@components/content/goods/GoodsList"

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
    GoodsList
  },
  data(){
    return {
      banners: [],
      recommends: [],
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
    *
    * type, page
    * */
    getHomeGoods(type){
      let page = this.goods.data[type].page += 1
    
    getHomeGoods(type, page)
      .then(res =>  {
        this.goods.data[type].list = res.data.list
      })
    },
    tabClick(index){
      //点击切换商品数据类型
      this.currentDataType = this.goods.dataType[index]
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
