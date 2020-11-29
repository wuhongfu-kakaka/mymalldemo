<template>
  <div class="dialog" >
    <div class="dialog-mask" @click="dialogColse"></div>
    <!-- :style="isShow ? '': { display: 'none'}" -->
    <div class="dialog-core" >
      <div class="base-sku">
        <div class="close-btn" @click="dialogColse">
          <!-- <img src="" alt=""> -->
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-guanbi"></use>
          </svg>
        </div>
        <div class="mian-info">
          <img src="@/assets/img/cart/2.jpg_128x999.jpg" class="sku-image">
          <div class="right-origin">
            <div>
              <span class="now-price">
                <span class="unit">￥</span>
                <span class="num">29.40</span>
              </span>
            </div>
            <div class="stock">库存34452件</div>
            <div class="sku-text">请选择:颜色 尺码</div>
          </div>
        </div>
        <div class="scroll-view">
          <div class="sku-info">
            <div>
              <div class="label">颜色</div>
              <ul class="sku-list">
                <li class="active">白色</li>
                <li>灰色</li>
                <li>黑色</li>
                <li>绿色</li>
                <li>卡其色</li>
                <li>卡其色</li>
                <li>卡其色</li>
              </ul>
            </div>
            <div>
              <div class="label">尺码</div>
              <ul class="sku-list">
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>XXL</li>
              </ul>
            </div>
            <div>
              <div class="label">数量</div>
              <div class="number-calculator">
                <span class="btn-reduce" :class="{ disabled: isDisabled }" @click="reduceYI">-</span>
                <span class="view-value">{{ quantity }}</span>
                <span class="btn-add" @click="addYI">+</span>
              </div>
            </div>
          </div>
        </div>
        <div class="comfirm-btn">
          <div class="btn-red" @click="comfirmAddCart">确认</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/font/iconfont"

export default {
  name: "DetailDialog",
  props: {
   
  },
  data() {
    return {
      quantity: 1,
      isDisabled: true
    }
  },
  computed: {
    
  },
  methods: {
    comfirmAddCart() {
      this.$emit("comfirmAddCart", this.quantity)
    },
    dialogColse() {
      this.$emit("dialogColse")
    },
    reduceYI() {
      if(this.quantity > 1) {
        this.quantity--
      }
      if(this.quantity <= 1) {
        this.isDisabled = true
      }
    },
    addYI() {
      // this.quantity++
      if(this.quantity++ === 1) {
        this.isDisabled = false
      }
    }
  }
}
</script>

<style scoped>
.dialog {
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 1001;

  align-items: flex-end;
  /* display: none; */
}


.dialog-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .4);
  z-index: 9901;
}

.dialog-core {
  position: relative;
  z-index: 9902;
  width: 100%;
}
.icon {
  width: 20px;
  height: 20px;
  vertical-align: -0.15em;
  /* fill: currentColor; */
  overflow: hidden;
  fill: #ed4566;
}

.base-sku {
  position: relative;
  background: white;
  width: 100%;
}
.close-btn {
  position: absolute;
  right: 16px;
  top: 12px;
  z-index: 1;
}

.mian-info {
  position: relative;
  background: #fff;
  height: 100px;
  padding: 15px 7.5px;
}
.sku-image {
  max-height: 150px;
  width: 80px;
  margin-left: 8.5px;
  border-radius: 2px;
  position: absolute;
  bottom: 15px;

}
.right-origin {
  margin-left: 103.5px ;
  color: #333;
}
.now-price {
  font-size: 28px;
  line-height: 30px;
}
.now-price .unit {
  display: inline-block;
  font-size: 12px;
  vertical-align: 9px;
}
.stock {
  font-size: 12px;
  line-height: 18px;
}
.sku-text {
  line-height: 18px;
  font-size: 12px;
  color: #333;
  max-width: 225px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
/* mian-info end */
.scroll-view {
  max-height: 375px;
  padding: 0 7.5px 15px 7.5px;
  overflow: auto;
}
.label {
  line-height: 12px;
  font-size: 12px;
  margin: 7.5px 0 5px 0;
}
.sku-list li {
  display: inline-block;
  padding: 0 15px;
  border: 1px solid #bbb;
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  line-height: 26px;
  color: #5e5e5e;
  cursor: pointer;
}
.sku-list li.active {
  color: #ed4566;
  border-color: #ed4566;
}
/* scroll-view end */
.number-calculator {
  display: flex;
  width: 90px;
  height: 25px;
  line-height: 25px;
  margin-top: 7.5px;
  text-align: center;
  border: 1px solid #bbb;
  border-radius: 3px;

}
.number-calculator .btn-reduce,
.number-calculator .btn-add {
  width: 28px;
  display: block;
  color: #ed4566;
  cursor: pointer;
  font-size: 16px;
}
.number-calculator .btn-reduce.disabled {
  color: #333;
}
.number-calculator .view-value {
  flex: 1;
  border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    color: #333;
    font-size: 14px;
}

.btn-red {
  text-align: center;
  color: #fff;
  background: linear-gradient(90deg,#ff5777,#ff468f);
  height: 50px;
  line-height: 50px;
   border-radius: 3px;
}
</style>