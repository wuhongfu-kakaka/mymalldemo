<template>
  <div class="recommend">
    <div class="recommend-item" :key="index" v-for="(item, index) in recommends">
      <a :href="item.link">
        <div><img :src="item.image" alt=""></div>
        <span>{{ item.title }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props:{
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  text-align: center;
  font-size: 12px;
  margin-top: 5px;
  
  padding-bottom: 7px;
  border-bottom: 5px solid #eee ;
}
.recommend-item {
  flex: 1;
  width: 25%;
}
.recommend-item img {
  width: 88px;
  margin-bottom: 5px;
}
</style>