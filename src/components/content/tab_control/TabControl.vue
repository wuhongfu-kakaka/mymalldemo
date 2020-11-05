<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" 
    :key="index"
    :class="{active: currentIndex === index}"
    @click="tabClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex: 0
    }
  },
  methods: {
    tabClick(index){
      this.currentIndex = index
      this.$emit("tab-click", index)
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  height: 40px;
  background-color: whitesmoke;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
}
.tab-control div {
  flex: 1;
}
.active{
  color: var(--color-high-text);
}
.active span{
  padding-bottom: 3px;
  border-bottom: 2px solid var(--color-high-text);
}
</style>