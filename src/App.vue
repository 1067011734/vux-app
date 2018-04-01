<template>
 <div id="app">
   <keep-alive>
     <router-view class="page"></router-view>
   </keep-alive>
    <tabbar style="position:fixed;z-index:99">
      <tabbar-item selected :link="{path:'/home'}"  :badge='badge? String(badge) : "" '>
      <i slot="icon" class="icon-msg iconfont"></i>
      <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/dashboard'}">
      <i slot="icon" class="icon-dashboard iconfont"></i>
      <span slot="label" >报表</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/atlas'}">
      <i slot="icon" class="icon-tupian iconfont"></i>
      <span slot="label" >图集</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/user'}">
      <i slot="icon" class="icon-weibiaoti1 iconfont"></i>
        <span slot="label">我的</span>
      </span>
      </tabbar-item>
    </tabbar>
 </div>
</template>

<script type="text/ecmascript-6">
import { Tabbar, TabbarItem, Group, Cell, Badge } from 'vux'
import { mapState } from 'vuex'
export default {
  data () {
    return {}
  },
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    Badge
  },
  mounted () {},
  methods: {},
  computed: {
    ...mapState({
      badge: state => state.app.badge
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
html, body, .router-view
  background-color: #fbfbfb;
#app 
  margin-bottom: 55px;
  .page
   position absolute
   width 100%
   top 0
   bottom  54px
   .router-view
    position fixed
    left 0
    top 0
    bottom 48px
    z-index 101
    width 100%
    height 100%
    overflow auto
    &.move-enter-active, &.move-leave-active
      transition all 0.2s linear
    &.move-enter, &.move-leave-active
      transform translate3d(100%, 0, 0)
  .router-view::-webkit-scrollbar
    width 0
    height 0
  .badge-value
    display: inline-block !important;
  .vertical-middle 
    vertical-align: middle;
  .weui-tabbar 
    background-color: #fff;
  .vux-header 
    background-image: radial-gradient(circle 248px at center, #3689de 0%, #3f8bd8 47%, #39699a 100%);
    background-color: #3689de;
    .vux-header-title 
      letter-spacing: 0.2em;
  .weui-tabbar__item.weui-bar__item_on
    .weui-tabbar__label
      color: #5E86AF
    .weui-tabbar__icon
      i
       color: #5E86AF;
</style>
