<template>
  <div class="wrapper">
    <div class="cart-list-item">
      <div class="cart-item-img">
        <div class="gouxuan-icon"  @click="pickCartItem">
          <svg class="icon pos-icon" :class="{ active: isPick}" aria-hidden="true">
          <use xlink:href="#icon-gouxuan"></use>
        </svg>
        </div>
        <div class="goods-img">
          <img :src="cartItem.image" alt="">
        </div>
      </div>
      <div class="cart-item-content">
        <h3 class="title ellipsis-2" :title="cartItem.title">{{ cartItem.title }}</h3>
        <div class="goods-desc ellipsis-1" :title="cartItem.title">
        {{ cartItem.desc }}  
        </div>
        <div class="goods-price-and-num">
          <div class="price">
            <span class="price-currency">￥</span>
            <span class="price-int">{{ price[0] }}</span>
            .
            <span class="price-decimal">{{ price[1] }}</span>
          </div>
          <div class="goods-num">
            <span>x{{ cartItem.quantity}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import "@/assets/font/iconfont"

export default {
  name: 'cartListItem',
  props: {
    cartItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    price() {
      return this.cartItem.lowNowPrice.split(".")
    },
    isPick() {
      return this.cartItem.flags.isPick
    }
  },
  methods: {
    pickCartItem() {
      this.$store.dispatch({
        type: "pickCartItem",
        id: this.cartItem.id
      })
    }
  }
}
</script>

<style scoped>
.icon {
  width: 16px;
  height: 16px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.icon.active {
  fill:#f30600;
}
.goods-img {
  width: 76px;
  height: 76px;
  overflow: hidden;
  border-radius: 5%;
}
.goods-img img{
  width: 76px;
  height: 76px;
}

.wrapper {
  background-color: #ccc;
  margin-bottom: 15px;
}
.cart-list-item {
  
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  background-color: #fff;
}
.cart-item-img {
  flex: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gouxuan-icon {
  padding: 0 3px 0;
  height: 76px;
  line-height: 76px;
}

.goods-img {
  margin-left: 1px;
}
.ellipsis-1 {
    /* overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.ellipsis-2 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

/* cart-item-content start */
.cart-item-content {
  flex: 1;
  margin-left: 3px;
  padding: 0px 3px;
}
.title {
  padding-top: 2px;
  font-size: 16px;
  color: #000;
}
.goods-desc {
  font-size: 12px;
  line-height: 14px;
  background-color: #ccc;
  padding: 1px 0;
  margin-top: 5px;
  width: 70%;

}

.goods-price-and-num {
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
}
.price {
  color: #f30600;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  justify-content:space-around;
  align-items: center;

}
.price-decimal {
  align-self: center;
}
.price-int {
  font-size: 18px;
  align-self:flex-end;
}
.price-currency {
  align-self: center;
}
.goods-num {
  font-size: 10px;
  border: 1px solid #ccc;
  padding: 2.5px;
  border-radius: 15%;
}
/* cart-item-content end */
</style>