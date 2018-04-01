<template>
 <div>
   <vue-pull-refresh :on-refresh="_onRefresh">
    <x-header :left-options="{showBack: false}">
      <span>消息</span>
    </x-header>
     <group>
         <cell is-link :title="item.title"  v-for="item in groupData" :key="item.id"  @click.native="_go(item)">
           <div class="badge-value">
            <!-- <span class="vertical-middle">{{item.value}}</span> -->
            <badge :text="item.badge"></badge>
           </div>
         </cell>
     </group>
    <transition name="move">
      <router-view class="router-view"></router-view>
    </transition>  
  </vue-pull-refresh>
 </div>
</template>

<script type="text/ecmascript-6">
import { Group, Cell, XHeader, Badge } from 'vux'
import { serverURL } from 'utils'
import VuePullRefresh from 'vue-pull-refresh'
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
    Badge,
    'vue-pull-refresh': VuePullRefresh
  },
  beforeRouteEnter (to, from, next) {
    let { data } = to.params
    if (data) {
      console.info(data)
      next(vm => {
        let result = 0
        for (let item of data) {
          result += Number(item.badge)
        }
        vm.$store.state.app.badge = result
        vm.groupData = data
      })
    } else {
      next()
    }
  },
  activated () {},
  mounted () {},
  methods: {
    _go (item) {
      const { task_a_id, title } = item
      this.$axios
        .get(`${serverURL}/task_b`, { params: { task_a_id } })
        .then(response => {
          const json = response.data
          const { data } = json
          this.$router.push({ name: 'homeMenu', params: { data, title } })
        })
    },
    _onRefresh: function () {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve()
        }, 1000)
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

