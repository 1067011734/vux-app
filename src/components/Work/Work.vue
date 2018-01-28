<template>
 <div>
   <xHeader :left-options="{showBack: false}">工作台</xHeader>
   <group>
      <cell is-link title="公告"></cell>
      <cell is-link title="个人中心" ></cell>
      <cell is-link title="我的项目"></cell>
   </group>
 </div>
 </div>
</template>

<script type="text/ecmascript-6">
import {Tabbar, TabbarItem, Group, Cell, XHeader} from 'vux'
export default {
  data () {
    return {

    }
  },
  components: {
    XHeader,
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
 
</style>
