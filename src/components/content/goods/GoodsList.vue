<template>
  <div class="goods-list">
    <goods-item class="goods-item"
    v-for="(goods, index) in goods" 
    :key="index"
    :goodsItem="goods" />
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem"
export default {
  name: "GoodsList",
  components: {
    GoodsItem
  },
  props: {
    goods: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
}
.goods-item {
  width: 49.5%;
  
}
</style>