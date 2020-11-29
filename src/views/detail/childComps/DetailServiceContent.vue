<template>
  <div class="detail-service-content">
    <div class="service-content">

      <div class="service-content--item" 
      v-for="index in len"
      :key="index"
      >
        <span class="item-icon">
          <div class="item-icon--image">
            <img src="@/assets/img/detail/red_gou.webp" style="width: 15px; height: 15px;">
          </div>
        </span>
        <span class="item-name">{{shopServices[shopServices.length - index].name}}</span>
      </div>


      <!-- <div class="service-content--item">
        <span class="item-icon">
          <div class="item-icon--image">
            <img src="@/assets/img/detail/red_gou.webp" style="width: 15px; height: 15px;">
          </div>
        </span>
        <span class="item-name">72天无理由退货</span>
      </div> -->

     

      <span class="arrow-right"></span>

    </div>
  </div>
</template>

<script>
export default {
  name: "DetailServiceContent",
  components: {

  },
  props: {
    shopServices: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    len() {
      const l = this.shopServices.length
      if(l > 3) {
        return 3
      } else {
        return this.shopServices.length
      }
    },

  },
  methods: {

  }
}
</script>

<style scoped>
.detail-service-content {
  background-color: #fff;
  margin: 10px 0;
}
.service-content {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0 16px;
  height: 38px;
}
.service-content--item {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
}
.item-name {
  display: block;
  font-size: 11px;
  white-space: nowrap;
  color: #666;
  margin-left: 2px;
}
.item-icon{
  display: block;
  width: 15px;
  height: 15px;
}
.item-icon img {
  border: none;
  /* vertical-align: middle; */
}
/* .item-icon--image {
  display: flex;
} */

.arrow-right::before {
  content: "";
  display: inline-block;
  width: 9px;
  height: 9px;
  border-top: 1.5px solid black;
  border-right: 1.5px solid black;
  transform: rotate(45deg)
}
</style>