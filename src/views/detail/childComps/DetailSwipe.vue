<template>
  <!-- Swipe轮播  -->
    <van-swipe :loop="false" class="detail-swipe" @change="onChange">
      <van-swipe-item 
      v-for="(image, index) in detailImages" 
      :key="index"
      class="detail-swipe-item">
        <img :src="image" />
      </van-swipe-item>

      <template #indicator>
        <div class="custom-indicator">
        {{ current + 1 }}/{{length}}
        </div>
      </template>
    </van-swipe>
</template>

<script>
//引入Vant组件库中的NavBar导航栏，Toast 、、、
import { Swipe, SwipeItem } from "vant"

export default {
  name: "DetailSwipe",
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  props:{
    detailImages: {
      type: Array,
      default: []
    }
  },
  data(){
    return {
      current: 0
    }
  },
  computed:{
    length(){
      return this.detailImages.length
    }
  }
  ,
  methods: {
    onChange(index){
      this.current = index
    }
  }
}
</script>

<style scoped>

.detail-swipe-item{
  width: 375px;
}
.detail-swipe-item img{
  width: 375px;
  height: 444px;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  color: var(--color-tint);
  border-radius: 5px;
  background: rgba(231, 20, 59, 0.777);
}
</style>