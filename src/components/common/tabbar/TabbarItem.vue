<template>
  <div class="tabbar-item" @click="tabbarItemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  data(){
    return {
      
    }
  },
  props: {
    path: {
      type: String
    },
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    tabbarItemClick(){
      if(this.$route.path !== this.path){
        this.$router.replace(this.path)
      }

    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1;
      
    },
    activeStyle(){
      return this.isActive ? { color: this.activeColor} : {}
    }
  }
}
</script>

<style>
.tabbar-item{
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}
.tabbar-item img{
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>