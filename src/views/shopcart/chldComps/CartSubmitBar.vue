<template>
  <div class="cart-submitbar">
    <!-- price 以一分钱为单位 -->
    <van-submit-bar :price="pickedCartItemsTotalPrices * 100" button-text="提交订单" @submit="onSubmit" >
      <!-- <van-checkbox v-model="allChecked"> -->
      
        <template #default>
          <div @click="quanxuanCart">
          <svg class="icon" :class="{ active: allCartItemsPickFlag}" aria-hidden="true">
            <use xlink:href="#icon-gouxuan"></use>
          </svg>
          <span class="quanxuan-text">全选</span>
          </div>
          
        </template>

    <!-- </van-checkbox> -->
    </van-submit-bar>
    </div>
</template>

<script>
import { Checkbox, SubmitBar } from "vant"
import { mapGetters, mapActions } from "vuex"

export default {
  name: "CartSubmitBar",
  components: {
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name]: Checkbox,
  },
  data() {
    return {
      allChecked: true,
    }
  },
  methods: {
    onSubmit() {
      console.log("onSubmit")
      console.log(this.pickedCartItemsTotalPrices);
      console.log(this.allCartItemsPickFlag);
      
    },
    ...mapActions([
      'quanxuanCart'
    ])
  },
  computed: {
    ...mapGetters([
      'pickedCartItemsTotalPrices', 'allCartItemsPickFlag'
    ]),

  }


}
</script>

<style>
.van-submit-bar {
  bottom: 50px;
}

.icon {
  width: 18px;
  height: 18px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.quanxuan-text {
  font-size: 14px;
  margin-left: 5px;
}
.icon.active {
  fill: red;
}
</style>