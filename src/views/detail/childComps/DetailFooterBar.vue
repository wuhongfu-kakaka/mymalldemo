<template>
  <div class="footbar-wrapper ">
    <div class="detail-footbar-content">

      <div class="occupying"></div>
      <div class="footbar fixed">
        <div class="footer-icons">
          <div class="icon-wrapper">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shoucang"></use>
            </svg>
            <span class="text">店铺</span>
          </div>
          <div class="icon-wrapper">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-kefu"></use>
            </svg>
            <span class="text">客服</span>
          </div>
          <div class="icon-wrapper">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shoucang"></use>
            </svg>
            <span class="text">收藏</span>
          </div>
        </div>
        <div class="footbar-btns">
          <div class="footbar-btns--item addCart btn-pink" @click="showCartItemInfo">
            <span>加入购物车</span>
          </div> 
          <div class="footbar-btns--item buy btn-red" >
            <span>立即购买</span>
          </div>
        </div>
      </div>
    </div>

    <detail-dialog 
    @comfirmAddCart="comfirmAddCart" 
    @dialogColse="dialogColse"
    :style="isShowDialog ? '': { display: 'none'}"/>
  </div>
</template>

<script>
import '@/assets/font/iconfont.js'
import DetailDialog from './DetailDialog'
import { Toast } from 'vant'

export default {
  name: "DetailFooterBar",
  props: {
    toCartItemInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    DetailDialog
  },
  data() {
    return {
      isShowDialog: false
    }
  },
  methods: {
    showCartItemInfo() {
      this.isShowDialog = true
    },
    dialogColse() {
      this.isShowDialog = false
    },
    comfirmAddCart(quantity) {

      const cartItemInfo = JSON.parse(JSON.stringify(this.toCartItemInfo))
      cartItemInfo.quantity = quantity
      
      this.$store.dispatch({
        type: 'addCart',
        produce: cartItemInfo
      }).then( (msg) => {
        Toast("添加成功")
      })

      this.isShowDialog = false
    }
  }

}
</script>




<style scoped>
/* icon start */
.icon {
  width: 17px;
  height: 25px;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
  color: #666;
}
.active {
  color: red;

}
/* icon end */

.fixed {
  /* position: relative; */
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 119;
}
.footbar-wrapper,
.footbar {
  background-color: #fff;
}
.occupying {
  height: 50px;
}

.footbar {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* footer-icons start */
.footer-icons {
  display: flex;
  flex-flow: row nowrap;
  flex: none;
  align-items: center;
}
.icon-wrapper {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 58px;
  border-right: 1px solid #ededed;
  border-top: 1px solid #ededed;
}
.icon-wrapper .text {
  color: #666;
  font-size: 10px;
}
/* footer-icons end */
/* footbar-btns start */
.footbar-btns {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footbar-btns--item {
  flex: 1;
  height: 50px;
  font-size: 14px;
  text-align: center;
  line-height: 50px;
 
}
.footbar-btns .btn-pink{
  color: #ff5777;
  background-color: #ffe6e8;
}
.footbar-btns .btn-red {
  color: #fff;
    background: -webkit-linear-gradient(left,#ff5777,#ff468f);
    background: linear-gradient(90deg,#ff5777,#ff468f);
}
/* footbar-btns end */

</style>