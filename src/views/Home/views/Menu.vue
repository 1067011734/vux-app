<template>
 <div>
    <x-header>{{title}}</x-header>
     <group>
         <cell is-link :title="item.title"  v-for="item in groupData" :key="item.id"  @click.native="_go(item)">
           <div class="badge-value">
            <span class="vertical-middle">{{item.date}}</span>
            <badge :text="item.name"></badge>
           </div>
         </cell>
     </group>
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
      let {task_b_id} = item
      this.$axios.get(`${serverURL}/task_c`, {params: {task_b_id}}).then(response => {
        const json = response.data
        const {data} = json
        this.$router.push({name: 'homeContent', params: {content: item, goods: data}})
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

