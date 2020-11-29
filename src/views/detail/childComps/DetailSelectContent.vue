<template>
  <div class="detail-select-content m-b-t-20">
    <span class="text">请选择：&nbsp;颜色&nbsp;尺码&nbsp;</span>
    <span class="arrow-right"></span>
  </div>
</template>

<script>
export default {
  name: "DetailSelectContent"
}
</script>

<style scoped>
.detail-select-content{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row nowrap;
  padding: 0 15px;
  height: 45px;
  line-height: 45px;
  background-color: #fff;
}
.m-b-t-20 {
    margin: 10px 0;
}
.text {
  display: block;
  color: #666;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
}
.arrow-right::before {
  content: "";
  display: flex;
  width: 8px;
  height: 8px;
  border-top: 1.5px solid black;
  border-right: 1.5px solid black;
  transform: rotate(45deg)
}
</style>