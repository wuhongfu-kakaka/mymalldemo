<template>
  <tabbar>
    <tabbar-item path="/home">
      <template v-slot:item-icon>
        <img src="@assets/img/tabbar/home.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="@assets/img/tabbar/home_active.svg" alt="">
      </template>
      <template v-slot:item-text>
        <span>首页</span>
      </template>
    </tabbar-item>

    <tabbar-item path="/category">
      <template v-slot:item-icon>
        <img src="@assets/img/tabbar/category.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="@assets/img/tabbar/category_active.svg" alt="">
      </template>
      <template v-slot:item-text>
        <span>目录</span>
      </template>
    </tabbar-item>

    <tabbar-item path="/shopcart">
      <template v-slot:item-icon>
        <img src="@assets/img/tabbar/shopcart.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="@assets/img/tabbar/shopcart_active.svg" alt="">
      </template>
      <template v-slot:item-text>
        <span>购物车</span>
      </template>
    </tabbar-item>

    <tabbar-item path="/profile">
      <template v-slot:item-icon>
        <img src="@assets/img/tabbar/profile.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="@assets/img/tabbar/profile_active.svg" alt="">
      </template>
      <template v-slot:item-text>
        <span>我的</span>
      </template>
    </tabbar-item>
  </tabbar>
</template>

<script>
import Tabbar from "@components/common/tabbar/Tabbar"
import TabbarItem from "@components/common/tabbar/TabbarItem"

export default {
  name: "MainTabbar",
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style>

</style>