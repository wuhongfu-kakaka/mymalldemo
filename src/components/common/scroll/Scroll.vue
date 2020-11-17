<template>
  <div class="pullup">
    <div ref="scroll" class="pullup-wrapper">
      <div class="pullup-content">
        <slot></slot>

        <!-- <div class="pullup-tips">
          <div v-if="!isPullUpLoad" class="before-trigger">
            <span class="pullup-txt">Pull up and load more</span>
          </div>
          <div v-else class="after-trigger">
            <span class="pullup-txt">Loading...</span>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'

BScroll.use(Pullup)


export default {
  name: "Scroll",
  data(){
    return {
      isPullUpLoad: false
    }
  },
  mounted(){
    this.initBscroll()
  },
  methods: {
    initBscroll(){
      this.bscroll = new BScroll(this.$refs.scroll, {
          pullUpLoad: true,
          click: true,
          probeType: 3
      })
      this.bscroll.on('pullingUp', this.pullingUpHandler)
      this.bscroll.on('scroll', (position) => {
        // console.log(position)
        this.$emit('scroll', position)
      })
    },
    pullingUpHandler(){
      this.$emit("pullingUp")
    }
  }
}
</script>

<style scoper>
.pullup {
  height: 100%;
}
.pullup-wrapper{
  height: calc(100vh - 44px - 49px);
  overflow: hidden
}
</style>