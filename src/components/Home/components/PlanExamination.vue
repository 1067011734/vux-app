<template>
 <div>
   <x-header style="position:fixed;top:0;left:0;z-index:99;width:100%">项目计划审批</x-header>
   <div style="padding-top:55px;padding-bottom:50px">
     <group>
      <div v-for="item in msg">
       <cell :title="item.title" :value="item.value"></cell>
      </div>
      <cell title="发起人" value="周燕"></cell>
      <cell title="发起时间" value="2017年12月01日"></cell>
      <cell title="业务部门" value="销售部"></cell>
      <cell title="业务员" value="胡阳洋"></cell>
      <cell title="项目部门" value="产品开发一部"></cell>
      <cell title="客户" value="美国特灵"></cell>
      <cell title="项目平台" value="北美"></cell>
      <cell title="等级" value="B"></cell>
      <cell title="流程信息" value="未审"></cell>
       <x-switch title="审核" :value-map="['0', '1']" ></x-switch>
     </group>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
import {XHeader, Grid, GridItem, Group, Cell, XSwitch} from 'vux'
export default {
  data () {
    return {
      msg: [
         {title: '发起人', value: '周燕'},
         {title: '发起时间', value: '2017年12月01日'},
         {title: '业务部门', value: '销售部'},
         {title: '业务员', value: '胡阳洋'},
         {title: '项目部门', value: '产品开发一部'},
         {title: '客户', value: '美国特灵'},
         {title: '项目平台', value: '北美'}
      ],
      scroll: ''
    }
  },
  components: {
    XHeader,
    XSwitch,
    Grid,
    GridItem,
    Group,
    Cell
  },
  mounted () {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
 
</style>
