<template>
 <div class="swiper-item">
    <slot></slot>
   </div>
</template>

<script type="text/ecmascript-6">
 export default {
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.swiper-item
   flex-basis: 100%
   height: 150px
   flex-shrink: 0
   img
    width: 100%
    height: 100%
</style>
