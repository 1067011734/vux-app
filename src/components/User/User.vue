<template>
 <div>
  <div class="header">
   <div class="title">
     杭州xx有限公司
   </div>
   <div class="content-wrap">
    <div class="icon"><i slot="icon" class="icon-usered iconfont"></i></div>
    <div class="content">
       <div class="name">王经理</div>
       <div class="job"><i slot="icon" class="icon-job iconfont"></i>IT技术部门</div>
    </div>
   </div>
  </div>
  <group>
    <cell is-link>
        <span slot="title"><i slot="icon" class="icon-love iconfont cell-icon"></i>收藏</span>
    </cell>
    <cell is-link>
        <span slot="title"><i slot="icon" class="icon-lishihuisu iconfont cell-icon"></i>历史消息</span>
    </cell>
    <cell is-link>
        <span slot="title"><i slot="icon" class="icon-setting iconfont cell-icon"></i>设置</span>
    </cell>
  </group>
  <group>
    <cell class="logout"  @click.native="_logout">
        <span slot="title" ></i>退出登入</span>
    </cell>
  </group>
 </div>
</template>

<script type="text/ecmascript-6">
import {Group, Cell} from 'vux'
export default {
  data () {
    return {

    }
  },
  components: {
    Group,
    Cell
  },
  methods: {
    _logout () {
      const storage = window.localStorage
      storage.yousi = ''
      console.info(storage)
      this.$router.push({name: 'login', params: {}})
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.header
 background-image: radial-gradient(circle 248px at center, #3689de 0%, #3f8bd8 47%, #39699a 100%)
 color :#fff
 padding: 10px 10px 20px 10px
 font-size :0
 .title
  line-height: 33px
  margin-bottom: 15px
  font-size: 24px
  letter-spacing: 4px
 .content-wrap
  .icon
   display:inline-block
   vertical-align :top
   i
    font-size :55px
  .content
   display :inline-block
   vertical-align :top
   margin-left: 10px
   .name
    font-size :17px
    line-height: 30px
   .job
    font-size :14px 
    .icon-job
     margin-right :5px
.cell-icon
 color:#379ef1
 margin-right :10px  
.logout
 color :red
 text-align :center  
</style>
