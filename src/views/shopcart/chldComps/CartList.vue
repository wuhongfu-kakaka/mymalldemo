<template>
  <div>
    <cart-list-item v-for="(item, index) in $store.state.cartItems"
    :key="index"
    :cartItem="item"></cart-list-item>
  </div>
</template>

<script>
import CartListItem from "./CartListItem"

export default {
  name: "CartList",
  components: {CartListItem},
  props: {

  }
  

}
</script>

<style>

</style>