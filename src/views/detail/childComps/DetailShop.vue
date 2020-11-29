<template>
  <div class="detail-shop-wrap">
    <a href="#">
      <div class="shop-head">
        <div class="shop-head--avatar">
          <div class="avatar--img">
            <!-- <img src="@/assets/img/detail/shop.jpg_120x120.webp" alt="旗舰店"> -->
            <img :src="shopInfo.shopLogo" alt="shopInfo.name">
          </div>
        </div>
        <div class="shop-head--info">
          <div class="shop--entry">
            <div class="flex module-base-righticon color-dim-tx">
              <span class="shop--entry-right-text">进店</span>
              <span class="shop--entry-right-arrow"></span>
            </div>
          </div>
          <div class="shop--title">
            <span class="shop--title--name">{{ shopInfo.name }}</span>
          </div>
          <div class="shop--star">

            <img src="@/assets/img/detail/star_44x44.png" 
            class="shop--star--leval"
            v-for="index in shopInfo.level"
            :key="index">

            <div class="shop-goods-num">
              <div class="info-divider"></div>
              在架商品&nbsp; {{ shopInfo.cGoods }} &nbsp;
            </div>
          </div>
          <div class="shop--labels color-main-tx">
            <div class="shop--labels-item">{{shopInfo.cFans}}人关注</div>
            <div class="shop--labels-item">累计销量{{shopInfo.cSells}}</div>
            <!-- <div class="shop--labels-item">3年老字号</div> -->
            <!-- <div class="shop--labels-item">3年老字号</div> -->
            <!-- <div class="shop--labels-item">3年老字号</div> -->
            <!-- <div class="shop--labels-item">3年老字号</div> -->
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "DetailShop",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.detail-shop-wrap {
  background-color: #fff;
  padding: 15px 12px;
  margin: 10px 0;
}
.detail-shop-wrap a {
  display: block;
}

/* shop-head start */
.shop-head {
  display: flex;

}
/* shop-head end */
/* shop-head--avatar start */
.shop-head--avatar {
  margin-right: 10px;
  border-radius: 2px;
}
.avatar--img {
  width: 60px;
  height: 60px;
  overflow: hidden;
}
.avatar--img img {
  width: 100%;
}
/* shop-head--avatar end */

/* shop-head--info start */
.shop-head--info {
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: space-around;
  position: relative;
}
.shop--entry {
  position: absolute;
  top: 0;
  right: 0;
}
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.module-base-righticon {
  height: 18px;
}
.color-dim-tx {
  color: #999;
}
.module-base-righticon .shop--entry-right-text {
  font-size: 13px;
  color: #666;
  margin-right: 5px;
} 
.shop--entry-right-arrow::before {
  content: "";
  display: flex;
  width: 10px;
  height: 10px;
  border-top: 2px solid black;
  border-right: 2px solid black;
  transform: rotate(45deg);

}

.shop--title--name {
  color: #333;
  font-size: 14px;
  line-height: 14px;
}

.shop--star {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.shop--star .shop--star--leval {
  width: 10px;
  height: 10px;
  margin-right: 3px;
}
.shop--star img {
  width: 10px;
  height: 10px;
  margin-right: 3px;
}


.shop-goods-num {
  font-size: 11px;
  line-height: 11px;
  color: #666;
}
.shop-goods-num .info-divider {
  display: inline-block;
  margin: 0 12px;
  height: 10px;
  width: 1px;background-color: #ccc;
}

.shop--labels {
  max-height: 17px;
  display: flex;
  font-size: 10px;
  width: 100%;
  flex-wrap: wrap;
  overflow: hidden;
}
.shop--labels .shop--labels-item {
  display: inline-block;
  height: 17px;
  line-height: 17px;
  padding: 0 6px;
  border-radius: 8.5px;
  border: 1px solid #d6d6d6;
  margin-right: 6px;
  color: #f46;
}
.color-main-tx {
    color: #f46;
}
/* shop-head--info end */
</style>