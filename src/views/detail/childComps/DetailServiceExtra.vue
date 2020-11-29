<template>
  <div class="service-extra list">
    <div class="list-item">快递 0.00元</div>
  </div>
</template>

<script>
export default {
  name: "DetailServiceExtra",
  props: {

  },
  components:{

  },
  data() {
    return {}
  },
  methods: {

  }
}
</script>

<style scoped>
.service-extra {
  padding: 0 16px;

  font-size: 11px;
  line-height: 34.5px;
  color: #999;

  background-color: #fff;
  border-bottom: 1px solid #eeeeee;
}
.list {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}
.list .list-item{
  flex: 1;
  white-space: nowrap;
}
.list .list-item:last-child{
  text-align: right;
}
.list .list-item:first-child{
  text-align: left;
}
</style>