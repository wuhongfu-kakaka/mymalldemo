<template>
  <div class="detail-base-rate-wrap">
    <div class="detail-base-rate">
      <a href="#" class="head">
        <span class="head-title">
          买家评价&nbsp;{{ rate.cRate }}&nbsp;|&nbsp;销量&nbsp;{{ rate.cSell ?  rate.cSell : 333}}&nbsp;
        </span>
        <div class="head-more">
          <span class="head-more--text">更多</span>
          <span class="head-more--icon"></span>
        </div>
      </a>
      <div class="tags">
        <!-- <span class="tags-tag tags-tag--positive">有图片(26)</span> -->
        <!-- <span class="tags-tag tags-tag--positive">图片描述一致(28)</span> -->
        <span class="tags-tag tags-tag--positive">没有色差(24)</span>
        <span class="tags-tag tags-tag--positive">款式好看(222)</span>
        <!-- <span class="tags-tag tags-tag--positive">上身好看(260)</span> -->
        <span class="tags-tag tags-tag--positive">发货快(213)</span>
      </div>

      <!-- <div class="list" >
        <div class="list-item">
          <div class="list-item--user">
            <div class="user-info">
              <div class="user-info--avatar">
                <img src="@/assets/img/detail/avatar.webp"
                style="width: 100%; height: auto;visibility: inherit;display: inherit;">
              </div>
              <span class="user-info--name">W**3</span>
            </div>
          </div>
          <div class="list-item--content">好显嫩的颜色啊，特别显白，衣服质量很好，比实体店便宜还好看</div>
          <div class="list-item--time item-base">2020-11-11</div>
          <div class="list-item--imgs item-base"></div>
        </div>
      </div> -->

      <div class="list">
        <div class="list-item" 
        v-for="index in listLen"
        :key="index"
        >
          <div class="list-item--user">
            <div class="user-info">
              <div class="user-info--avatar">
                <img :src="rate.list[index - 1].user.avatar"
                style="width: 100%; height: auto;visibility: inherit;display: inherit;">
              </div>
              <span class="user-info--name">{{rate.list[index - 1].user.uname}}</span>
            </div>
          </div>
          <div class="list-item--content">{{ rate.list[index - 1].content}}</div>
          <div class="list-item--time item-base">{{ rate.list[index - 1].created |  fDate}}</div>
          <div class="list-item--style item-base">{{ rate.list[index - 1].style}}</div>
          <div class="list-item--extraInfo item-base ellipsis-1">
            <span v-for="(value, index) in rate.list[index - 1].extraInfo" 
            :key="index + 'extra'">
            {{value}}
            </span>
             
          
          </div>
          <div class="list-item--imgs">
            <ul >
              <li v-for="(value, indey) in rate.list[index - 1].images" :key="indey + 'image'">
                <div class="imgitem-wrapper">
                  <img :src="value" >
                </div>
              </li>
            </ul>
          </div>
          <div class="list-item--explain" v-show="rate.list[index - 1].explain">{{ rate.list[index - 1].explain}}</div>

        </div>
      </div>

      <div class="dialog"></div>
    </div>
  </div>
</template>

<script>
import { dateFormat } from "@utils/utils.js"

export default {
  name: "DetailBaseRate",
  props: {
    rate: {
      type: Object,
      default() {
        return {list:[]}
      }
    }
  },
  data() {
    return {
    }
  },
  computed: {
    isListShow() {
      return this.rate.list && this.rate.list.length > 0
    },
    listLen() {
      return this.rate.list && this.rate.list.length > 0 ? this.rate.list.length: 0
    },

  },
  filters: {
    fDate(v) {
      //1、将服务器返回过来的时间戳转化为Date对象
      let date = new Date(v*1000) //因为服务器返回的时间是秒，所以要乘以1000;
      return dateFormat("yyyy-MM-dd" , new Date(date))
    }
  },
  mounted() {

    // console.log(this.rate);
    //  this.cRate = this.rate.cRate

    // if (this.rate.list && this.rete.list.length > 0) {
    //   for(let i = 0; i < this.rete.list.length; i++) {
    //     this.list[i].content = this.rete.list[i].content//买家留言内容
    //     this.list[i].time = dateFormat("yyyy-MM-dd" ,new Date(this.rete.list[i].created)) //留言时间
    //     this.list[i].style = this.rete.list[i].style//商品样式
    //     this.list[i].explain = this.rete.list[i].explain//商家回复内容

    //     this.list[i].user = {}//买家
    //     this.list[i].user.avatar = this.rete.list[i].user.avatar//买家图片
    //     this.list[i].user.uname = this.rete.list[i].user.uname//买家名字
        
    //   }

    // }
    // console.log(this.list);
  }
   
}
</script>

<style scoped>
.detail-base-rate-wrap {
  margin: 10px 0;
  padding: 0 15px;
  background-color: #fff;
}
/* head start*/
.head {
  height: 45px;
  padding: 20px 0 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.head-title {
  display: block;
  color: #999;
  font-size: 12px;
  flex: 1;
}
.head-more {
  display: flex;
  align-items: center;
  /* color: #666;
  font-size: 15px; */
}
.head-more--text {
  color: #666;
  font-size: 12px;
  line-height: 12px;
  text-align: center;
}
.head-more--icon {
  margin-left: 3px;
}
/* head end */

/* 标签部分tags start*/
.tags{
  display: flex;
  flex-flow: row wrap;
}
.tags-tag {
  display: inline-block;
  height: 24px;
  line-height: 24px;
  border-radius: 2px;
  font-size: 12px;
  padding: 0 6px;
  margin-top: 5px;
  margin-right: 5px;
}
.tags-tag--positive{
  color: #FF2255;
  background-color: #FFE8EE;
}
/* 标签部分tags end*/
.head-more--icon::before {
  content: "";
  display: flex;
  width: 8px;
  height: 8px;
  border-top: 1px solid black;
  border-right: 1px solid black;
  transform: rotate(45deg);
}

/* list评论列表 start */
.list-item {
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}
.user-info {
  display: flex;
  line-height: 41px;
}
.user-info--name {
  margin-left: 10px;
  color: #424242;
  font-size: 12px;
}
.user-info--avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #efefef;
  overflow: hidden;
}
.list-item--content {
  margin-top: 5px;
  color: #727272;
  font-size: 14px;
  line-height: 17px;
}
.list-item--time {
  line-height: 12px;
  margin-top: 7.5px;
}
.item-base {
  font-size: 12px;
  color: #999;
}
.list-item--imgs {
  margin-top: 12.5px;
  margin-bottom: 12.5px;
}
.list-item--explain {
  font-size: 14px;
  color: #999;
  border-top: 1px dotted #d9d9d9;
  padding-top: 15px;
  line-height: 17px;
}
.list-item--imgs ul li {
  display: inline-block;
  width: 110px;
  margin-right: 7.5px;
  margin-bottom: 7.5px;
}
.list-item--imgs ul li:nth-child(3n) {
  margin-right: 0px;
}
.imgitem-wrapper {
  height: 125px;
}
.list-item--imgs .imgitem-wrapper img {
  width: 100%;
  height: 100%;
}
.list-item--extraInfo span::after{
 content: "";
 margin-right: 5px;
}
.ellipsis-1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
/* list评论列表 end */

</style>