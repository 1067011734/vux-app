<template>
 <div class="home-content">
   <x-header  style="position:fixed;top:0;left:0;z-index:99;width:100%">提交</x-header>
   <div class="router-content">
     <divider>下一环节</divider>
     <group v-for="item in groupData" :key="item.id">
      <cell title="业务环节" :value="item.nxt_act_type"></cell>
      <cell title="员工编号" :value="item.usr_id"></cell>
      <cell title="姓名" :value="item.usr_name"></cell>
      <cell title="所属部门" :value="item.dept_name"></cell>
     </group>
     <group title="意见">
         <x-textarea v-model="notes" :rows="5"></x-textarea>
         <x-button  type="primary" @click.native="_ok">确定</x-button>
     </group>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
import {XHeader, Group, Cell, XButton, XInput, XTextarea, Divider} from 'vux'
import {serverURL} from 'utils'
export default {
  data () {
    return {
      groupData: [],
      mdid: '',
      djid: '',
      notes: '',
      postParam: {}
    }
  },
  components: {
    XHeader,
    Group,
    Cell,
    XButton,
    XInput,
    XTextarea,
    Divider
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      const {data, mdid, djid, postParam} = to.params
      vm.groupData = data
      vm.mdid = mdid
      vm.djid = djid
      vm.postParam = postParam
    })
  },
  beforeRouteLeave (to, from, next) {
    this.notes = ''
    next()
  },
  watch: {
  },
  mounted () {

  },
  methods: {
    _ok () {
      let {mdid, djid, notes, postParam} = this.$data
      postParam.notes = notes
      postParam.json_next = JSON.stringify(postParam.json_next)
      postParam.json_usr = JSON.stringify(postParam.json_usr)
      this.$axios.post(`${serverURL}/phone/P${mdid + djid}/submit`, postParam)
      .then((response) => {
        const data = response.data
        console.info(response.data)
        if (data === 1) {
          let {com_id, com_name, userID, passWord} = this.$root.loginInfo
          const params = {com_id, com_name, userID, passWord}
          console.info(data, 'response', notes, params)

          this.$axios.get(`${serverURL}/phoneHome/Login0`, {
            params
          })
           .then((response) => {
             const data = response.data
             console.info(params, 'params', data.tasks)
             this.$router.push({name: 'homeMain', params: {tasks: data.tasks}})
           })
        }
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
