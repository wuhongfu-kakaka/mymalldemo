<template>
  <div class="detail-price-content">
    <div class="price">
      <div class="price-now">
          <span class="price-now--unit">
            ￥
          </span>
          <span class="price-now--price">
            {{priceContent.lowNowPrice}}
          </span>
      </div>
      <div class="price-old" v-show="isSelf">
        <span class="price-old--price">
          {{ priceContent.oldPrice }}
        </span>
        <div class="price-old-tags" >
          <span class="tag price-old-tag" >
          {{priceContent.discountDesc}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailPriceContent",
  props: {
    priceContent: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components:{

  },
  data(){
    return {

    }
  },
  computed: {
    isSelf(){
      return this.priceContent.oldPrice || this.priceContent.discountDesc !== ""
    }
  },
  created(){

  },
  methods: {

  }

}
</script>

<style scoped>
.detail-price-content{
  padding: 8px 12px 0px;

  line-height: 30px;
  background-color: #fff;
}
.price{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.price-now{
  display: flex;
  align-items: flex-start;
  color: #333;
}
.price-now--unit{
  display: inline-block;
  font-size: 12px;
  line-height: 15px;
}
.price-now--price{
  font-size: 36px;
}

.price-old{
  display: flex;
  flex-flow: column nowrap;
  margin-left: 5px;

}
.price-old--price{
  display: block;
  font-size: 12px;
  text-decoration: line-through;
  color: #999;
}
.price-old-tags{
  display: flex;
  flex-flow: row nowrap;

}
.price-old-tag{
  display: block;
  margin-left: 5px;

  height: 16px;
  line-height: 16px;
  padding: 0 4px;
}
.tag {
  font-size: 10px;
  text-align: center;
  color: rgb(255, 34, 85);
  background-color: rgb(255, 232, 238);;
}
</style>