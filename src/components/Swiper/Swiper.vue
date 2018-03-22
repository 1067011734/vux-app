<template>
 <div class="swiper-wrap">
  <div class="swiper-inner" ref="inner" :class="{'swiper-inner-transition':isTransition}"
  v-bind:style="`
          transform: translate3d(${translateX}px, 0, 0);
        `"
  >
    <slot></slot>
  </div>
  <div class="pagination" v-if="pageLength">
   <div class="pagination-container">
    <div class="pagination-item"  v-for="(item, index) in pageLength"  :class="{'pagination-item-active':index==pageIndex}"></div>
   </div>
 </div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      width: document.documentElement.clientWidth,
      pageIndex: 0,
      pageLength: 0,
      isTransition: false,
      translateX: 0,
      autoplayInterval: null
    }
  },
  mounted () {
    this.pageLength = this.$refs.inner.children.length
    this._tab()
    if (this.autoplay) {
      this._autoplay()
    }
  },
  props: {
    autoplay: {
      type: Boolean,
      default: false
    }
  },
  watch: {

  },
  methods: {
    _autoplay () {
      this.isTransition = true
      let pageLength = this.pageLength - 1
      this.autoplayInterval = setInterval(() => {
        this.pageIndex < pageLength ? this.pageIndex++ : this.pageIndex = 0
        this.translateX = -this.pageIndex * this.width
      }, 2000)
    },
    _tab () {
      let xStart = 0
      let xMove = 0
      let xEnd = 0
      let width = this.width
      let pageLength = this.pageLength - 1
      const dom = this.$refs.inner
      dom.addEventListener('touchstart', ev => {
        this.isTransition = false
        ev = ev.changedTouches[0]
        xStart = ev.pageX
        if (this.autoplay) {
          clearInterval(this.autoplayInterval)
        }
      })
      dom.addEventListener('touchmove', ev => {
        ev = ev.changedTouches[0]
        xMove = ev.pageX - xStart
        if ((xMove > 0 && this.pageIndex > 0) || (xMove < 0 && this.pageIndex < pageLength)) {
          this.translateX = xMove + xEnd
        }
      })
      dom.addEventListener('touchend', ev => {
        this.isTransition = true
        let scale = Math.round(this.translateX / width)
        xEnd = scale * width
        this.translateX = xEnd
        this.pageIndex = -scale
        if (this.autoplay) {
          this._autoplay()
        }
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.swiper-wrap 
 width :100%
 position :relative
 overflow :hidden
 .swiper-inner-transition
  transition: transform 0.5s ease
 .swiper-inner
  flex-basis: 100%
  display: flex
  .swiper-item
   flex-basis: 100%
   height: 150px
   flex-shrink: 0
   img
    width: 100%
    height: 100%
 .pagination
  left: 0
  bottom: 0
  width: 100%
  position :absolute
  text-align :center
  .pagination-container
   display :inline-block
   .pagination-item
    width: 10px;
    height: 10px;
    background: rgb(239, 239, 239)
    border-radius: 50% 
    margin :10px
    float :left
   .pagination-item-active
    background :#000
</style>
