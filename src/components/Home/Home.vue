<template>
 <div>
    <x-header :left-options="{showBack: false}">
      <span>消息</span>
    </x-header>
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
      usr_id: '',
      com_id: ''
    }
  },
  components: {
    XHeader,
    Group,
    Cell,
    Badge
  },
  beforeRouteEnter (to, from, next) {
    let {data} = to.params
    if (data) {
      next(vm => {
        let _badgeFlag = vm.$store.state.app.badgeFlag
        let _canGroupData = Boolean(data.length)
        if (_canGroupData !== _badgeFlag) {
          vm.$store.commit('appBadgeFlagToggle')
        }
        vm.groupData = data
      })
    } else {
      next()
    }
  },
  activated () {

  },
  mounted () {

  },
  methods: {
    _go (item) {
      const {task_a_id, title} = item
      this.$axios.get(`${serverURL}/task_b`, {params: {task_a_id}}).then(response => {
        const json = response.data
        const {data} = json
        this.$router.push({name: 'homeMenu', params: {data, title}})
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .router-view
    position: fixed
    left: 0
    top: 0
    bottom: 48px
    z-index: 101
    width: 100%
    height :100%
    &.move-enter-active, &.move-leave-active
      transition: all 0.2s linear
    &.move-enter, &.move-leave-active
      transform: translate3d(100%, 0, 0)
</style>

