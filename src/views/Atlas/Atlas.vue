<template>
 <div ref="wrap" class="wrap">
    <div class="content">
        <div v-lazy-container="{ selector: 'img' }" v-for="item in imgList" class="img-item">
                <img :data-src="item"> 
        </div>
    </div>
 </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      imgList: [
        require('@/assets/bg1.jpg'),
        require('@/assets/bg2.jpg'),
        require('@/assets/bg3.jpg'),
        require('@/assets/bg4.jpg'),
        require('@/assets/bg5.jpg'),
        require('@/assets/bg6.jpg'),
        require('@/assets/bg7.jpg'),
        require('@/assets/bg8.jpg'),
        require('@/assets/bg9.jpg'),
        require('@/assets/bg10.jpg'),
        require('@/assets/bg11.jpg'),
        require('@/assets/bg12.jpg'),
        require('@/assets/bg13.jpg'),
        require('@/assets/bg14.jpg')
      ],
      scroll: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrap)
    })
  },
  components: {}
}
</script>

<style scoped lang="stylus">
.wrap
 background-color: #3689de; 
.content
 display flex
 flex-wrap wrap
 .img-item
  width 50%
img
 width 100%
 height 100%
</style>
