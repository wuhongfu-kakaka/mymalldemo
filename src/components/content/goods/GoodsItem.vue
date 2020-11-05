<template>
<div>
    <a href="javascript:;">
      <div class="goods-item">
        <img :src="goodsItem.show.img" alt="" class="item">
        <div class="item-info item">
          <p>{{goodsItem.title}}</p>
          <div>
            <span class="price">{{goodsItem.price}}</span>
            <span class="collect">{{goodsItem.cfav}}</span>
          </div>
        </div>
      </div>
    </a>
</div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
}
</script>

<style scoped>
.goods-item {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
}
.item-img a
,.item-img img{
  display: block;
}
.item {
  flex: 1;
  
}
img{
  width: 100%;
  border-radius: 5px;
}
.item-info{
  font-size: 12px;
   text-align: center;
   color: var(--color-tex);
}
.item-info p{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-align: left;
}
.price{
  color: var(--color-high-text);
  margin-right: 20px;
}
.price::before{
  content: "$";

}
.collect{
  position: relative;
}
.collect::before {
  content: '收集';
  position: absolute;
  left: -15px;
  top: 0px;
  width: 14px;
  height: 14px;
  text-indent: -44px;
  overflow: hidden;
  background: url("~@assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>