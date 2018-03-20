<template>
 <div>
   <x-header>{{titleFlag==='1'?'提交':'驳回'}}</x-header>
   <group>
     <cell title="评分">
       <rater v-model="rateData"></rater>
     </cell>
     <x-textarea title="意见" v-model="notes" :rows="5"></x-textarea>

   </group>
         <x-button  type="primary" @click.native="_ok">确定</x-button>
 </div>
</template>

<script type="text/ecmascript-6">
import {XHeader, Group, Cell, XButton, XInput, XTextarea, Rater} from 'vux'
// import {serverURL} from 'utils'
export default {
  data () {
    return {
      groupData: [],
      mdid: '',
      djid: '',
      notes: '',
      postParam: {},
      titleFlag: '',
      rateData: 0
    }
  },
  components: {
    XHeader,
    Group,
    Cell,
    XButton,
    XInput,
    XTextarea,
    Rater
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      const {titleFlag} = to.params
      vm.titleFlag = titleFlag
    })
  },
  watch: {
  },
  mounted () {

  },
  methods: {
    _ok () {
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
