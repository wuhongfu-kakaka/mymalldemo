<template>
  <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" :title="item.title" @load="homeSwiperImgLoad">
        </a>
      </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "@components/common/swiper"
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
    homeSwiperImgLoad(){
      if(!this.isLoad){
        this.$emit('homeSwiperImgLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style scoped>

</style>