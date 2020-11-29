<template>
  <div>
    <div class="page-header">
      <div class="titlebar">
        <h2 class="title">购物车({{ cartItemsLength }})</h2>
      </div>
    </div>
    <div class="page-content">

      <cart-list />
      <!-- <cart-list-item /> -->

    </div>
    <cart-submit-bar />
  </div>
</template>

<script>
import { mapGetters } from "vuex"

import CartListItem from './chldComps/CartListItem'
import CartList from './chldComps/CartList'
import CartSubmitBar from './chldComps/CartSubmitBar'
import CartDialog from './chldComps/CartDialog'

export default {
  name: "Shopcart",
  components: {
    CartListItem,
    CartList,
    CartSubmitBar,
    CartDialog,
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'cartItemsLength'
    ])
  },
  methods: {
    
  }
}
</script>

<style scoped>
.page-header {
  position: fixed;
  top:0;
  right: 0;
  left: 0;
  background: #fff;
}
.titlebar {
  padding: 16px 12px 10px 12px;
  background-color: rgb(233, 101, 123);
  border: none
}
.title{
  text-align: center;  
  font-size: 18px;
  line-height: 22px;
  color: #fff;
}
.page-content {
  margin-top: 60px;
}
</style>