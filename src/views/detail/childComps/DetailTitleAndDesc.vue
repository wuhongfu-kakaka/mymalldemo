<template>
  <div class="detail-title-and-desc">
    <div class="title-wrape">
      <div class="title-and-tag">
        <span class="title ellipsis-2">
          {{ title }}
        </span>
      </div>
      <a href="#" class="pick-for-me">
        <img 
        src="@/assets/img/detail/help_me_select.png" 
        style="width:13px; heigth:13.5px"
        class="pick-for-me--icon">
        <span>帮我选</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailTitleAndDesc",
  components:{

  },
  props:{
    title: {
      type: String,
      default: ""
    }
  },
  data(){
    return {

    }
  },
  created(){

  },
  methods:{

  }
}
</script>

<style scoped>
.detail-title-and-desc{
  padding-top: 9px;
  text-align: left;
  color: #333;
  background-color: #fff;
}
.title-wrape{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title-and-tag{
  flex: 1;
  margin: 0 15px;
}
.title {
  font-size: 15px;
  line-height: 21px;
}
.ellipsis-2 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.pick-for-me{
  display: flex;
  align-items: center;

  background-color: #f8f8f8;
  color: #999;
  padding: 0 12px 0 13.5px;
  font-size: 12px;
  height: 24px;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
}
.pick-for-me--icon {
  margin-right: 3px;
}
.pick-for-me img{
  border: none;
  vertical-align: middle;
}
</style>