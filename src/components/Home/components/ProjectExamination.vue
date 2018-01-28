<template>
 <div>
   <x-header>文档审批</x-header>
   <div style="margin-top:20px">
     <div class="form">
       <group>
        <cell title="订单要货评审单" value="天加1-3p"></cell>
       </group>
       <group>
          <x-textarea title="主题" v-model="theme" readonly :rows="2"></x-textarea>
        </group>
       <group>
        <cell title="关键词" value="开发协议"></cell>
        <cell title="发起人" value="周晏"></cell>
        <cell title="发起时间" value="2017年12月01日"></cell>
        <cell title="流程信息" value="林成霖/已审"></cell>
       </group>
     </div>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
import {XHeader, Grid, GridItem, Group, Cell, XTextarea} from 'vux'
export default {
  data () {
    return {
      theme: '软件开发一部开发过程控制文档'
    }
  },
  components: {
    XHeader,
    Grid,
    GridItem,
    Group,
    Cell,
    XTextarea
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.form
 .weui-textarea
  color: #999999
  font-size :19px
  font-weight :400
  margin-left: 10px
</style>
