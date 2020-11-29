<template>
  <div >
    <van-tabs v-model="active" scrollspy sticky line-height="1px">

      <van-tab  :title="'图文详情'" v-show="detailInfo">
        <div class="graphic">
          <div class="desc">
            <div class="desc--start lineBar">
              <i class="lineBar--dot"></i>
            </div>
            <div class="desc--text">
              <!-- 新款加绒加厚卫衣女休闲百搭秋冬潮韩版学生宽松长袖上衣帽衫外套 -->
              {{ detailInfo.desc }}
            </div>
            <div class="desc--end lineBar">
              <i class="lineBar--dot"></i>
            </div>
          </div>
          <div class="list" v-for="(v, index) in detailImage"
          :key="'list'+index">
            <div class="list-item">
              <div class="list-item--title">{{v.key}}</div>
            </div>

            <div class="list-img" v-for="(valve,indey) in v.list"
              :key="'listimg' + indey">
              <!-- <img src="@/assets/img/detail/img001.webp" alt="" style="width: 375px; heigth: auto"> -->
              <img :src="valve" 
              style="width: 375px; heigth: auto"
              >
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab  :title="'商品参数'" v-show="itemParams">
        <div class="parameter" v-show="itemParams.rule">
          <table class="size-table" >

            <tr v-for="(valuy, indey) in table0"
            :key="'tr' + indey">

              <td v-for="(valuz, indez) in table0[indey]"
              :key="'td'+indez">{{table0[indey][indez]}}</td>
            </tr> 

            
          </table>

          <ul class="params" v-show="itemParams.info">
            <li class="params-item" 
            v-for="(value, index) in set"
            :key="'set' + index">
              <span class="params-item--key">{{value.key}}</span>
              <span class="params-item--value">{{value.value}}</span>
            </li>


             <!-- <li class="params-item">
              <span class="params-item--key">颜色</span>
              <span class="params-item--value">615杏色,604杏色,615牛油果绿,601杏色,601蓝色,
                604牛油果绿,604蓝色,615蓝色,601牛油果绿,609蓝色,609粉色,
                604粉色,615粉色,609牛油果绿,609杏色,601粉色</span>
            </li>
             <li class="params-item">
              <span class="params-item--key">衣长</span>
              <span class="params-item--value">常规款（51-65cm）</span>
            </li> -->

          </ul>
        </div>
      </van-tab>

      <van-tab  :title="'热卖推荐'">
        <div class="recommend">
          <ul>
            <li v-for="(v,x) in recommendList"
            :key="'recomLi'+x">
              <a  @click="recommendListClick(v,$event)">
                <div class="img-wrapper">
                  <img :src="v.image" alt="">
                </div>
                <div class="info-wrapper">
                  <p class="title">{{v.title}}</p>
                  <p class="meta">
                    <span>￥{{v.discountPrice}}</span>
                  </p>
                </div>
              </a>
            </li>
            <!-- <li>
               <a href="##">
                <div class="img-wrapper">
                  <img src="@/assets/img/detail/recom02.jpg_320x999.webp" alt="">
                </div>
                <div class="info-wrapper">
                  <p class="title">秋装2020年新款卫衣女宽松潮长袖上衣炸街外套韩版中长款春秋</p>
                  <p class="meta">
                    <span>￥49.9</span>
                  </p>
                </div>
              </a>
            </li>
            <li> -->
          </ul>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs } from 'vant'

export default {
  name: "DetailTab",
  components: {
    [Tab.name] : Tab,
    [Tabs.name] : Tabs,
  },
  props: {
    detailInfo: {},//图文详情信息
    itemParams: {},//产品参数&尺码说明
    recommendList: {
      type: Array,
      default() {
        return []
      }
    },//推荐数据
  },
  data() {
    return {
      active: 0
    }
  },
  computed: {
    rule() {

    },
    detailImage() {
      return this.detailInfo.detailImage && this.detailInfo.detailImage.length > 0 
      ? this.detailInfo.detailImage : []
    },
    table0() {
      if(this.itemParams.rule && this.itemParams.rule.tables && this.itemParams.rule.tables[0]) {
        let t0 = this.itemParams.rule.tables[0],
        columns = t0[0].length,
        rows = t0.length 
        let result = []
        for (let i = 0; i < columns; i++) {
          result[i] = []
          for(let ii = 0; ii < rows; ii++) {
            result[i][ii] = t0[ii][i]
          }
        }
        
        return result
      }else {
        return []
      }
    },
    set() {
      return this.itemParams.info && this.itemParams.info.set && this.itemParams.info.set.length > 0
      ? this.itemParams.info.set : []
    }
  },methods: {
    recommendListClick(v,event) {
      event.preventDefault()

      // if(window.history.length > 0) {
      //   this.$router.push({name: "detail", params: {iid: v.item_id}})
      // }
      
    }
  }
}
</script>

<style scoped>
/* graphic start */
.graphic {
  margin-top: 20px;
}
.desc {
  padding: 0 15px;
  margin-bottom: 7.5px;
  font-size: 15px;
  color: #727272;
}
.desc--text {
  white-space: pre-wrap;
  color: #727272;
  padding: 15px 0;
  font-size: 14px;
}
.desc--start {
  float: left;
}
.desc--end {
  float: right;
}
.desc--start i{
  position: absolute;
  left: 0;
  top: -2px;
}
.desc--end i{
  position: absolute;
  right: 0;
  top: -2px;
}
.lineBar {
  width: 54px;
  height: 1px;
  background: #a3a3a5;
  position: relative;
}
.lineBar--dot {
  display: inline-block;
  width: 5px;
  height: 5px;
  background: #000;
  border-radius: 50%;
}
.list-item--title {
  margin-top: 7.5px;
  height: 25px;
  text-indent: 15px;
  font-weight: 400;
  font-size: 15px;
  color: #303030;
  line-height: 25px;
}
.list-img img {
  width: 375px;
}
/* graphic end */
/* parameter start  */
.parameter {
  font-size: 14px;
  padding: 0 15px;
  margin-top: 20px;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
.size-table {
  width: 100%;
}
.size-table tr{
  border-bottom: 0.5px solid #f4f4f4;
}
.size-table tr td {
    line-height: 40px;
    text-align: left;
    color: #eb4868;
}
.size-table tr:first-child td {
  color: #727272;
}
.params-item {
  border-bottom: 0.5px solid #f4f4f4; 
  white-space: nowrap;
}
.params-item span {
  display: inline-block;
  padding: 6px 0;
  vertical-align: middle;
  white-space: normal;
}
.params-item--key {
  width: 100px;
  color: #727272;
}
.params-item--value {
  width: 245px;
  color: #eb4868;
}
/* parameter end  */

/* recommend start */
.recommend ul {
  padding: 15px;
}
.recommend ul li {
  display: inline-block;
  width: 110px;
  margin-right: 7.5px;
  margin-bottom: 15px;
}
.recommend ul li:nth-child(3n){
  margin-right: 0px;
}
.recommend ul li a {
  display: block;
  position: relative;
  overflow: hidden;
}
.recommend .img-wrapper {
  height: 165px;
}
.recommend .img-wrapper img {
  width: 100%;
}
.recommend .info-wrapper .title {
  height: 25px;
  line-height: 25px;
  font-size: 12.5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.recommend .info-wrapper .meta {
  height: 15px;
  line-height: 15px;
  font-size: 12px;
}
/* recommend end */
</style>
<style >
.van-tabs__line {
  width: 60px;
}

.van-tabs__content{
  background: #fff;
}
</style>