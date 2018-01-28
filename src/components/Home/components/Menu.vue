<template>
 <div>
    <x-header style="position:fixed;top:0;left:0;z-index:99;width:100%">{{title}}</x-header>
    <div class="router-content">
     <group>
         <cell is-link :title="item.title"  v-for="item in groupData" :key="item.id"  @click.native="_go(item)">
           <div class="badge-value">
            <span class="vertical-middle">{{item.value}}</span>
            <badge :text="item.badge"></badge>
           </div>
         </cell>
     </group>
    </div>
    <transition name="move">
     <router-view class="router-view"></router-view>
  </transition> 
 </div>
</template>

<script type="text/ecmascript-6">
import {Group, Cell, XHeader, Badge} from 'vux'
import {serverURL} from 'utils'
export default {
  data () {
    return {
      groupData: '',
      title: '菜单'
    }
  },
  components: {
    XHeader,
    Group,
    Cell,
    Badge
  },
  beforeRouteEnter (to, from, next) {
    const {data, title} = to.params
    next(vm => {
      vm.title = title
      vm.groupData = data
    })
  },
  mounted () {

  },
  methods: {
    _go (item) {
      const {title} = item
      this.$axios.get(`${serverURL}/task_c`, {params: {}}).then(response => {
        const json = response.data
        const {data} = json
        this.$router.push({name: 'homeContent', params: {data: data[0], title}})
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>

