<template>
 <div class="home-content">
   <x-header  style="position:fixed;top:0;left:0;z-index:99;width:100%">驳回</x-header>
   <div class="router-content">
     <divider>驳回环节</divider>
     <group v-for="(item, index) in groupData" :key="item.id">
      <cell title="业务名称" :value="item.djname"></cell>
      <cell title="操作内容" :value="item.act_type"></cell>
      <cell title="承担部门" :value="item.curr_dept"></cell>
      <cell title="部门名称" :value="item.dept_name"></cell>
      <cell title="作业人员" :value="item.zgxm"></cell>
      <cell title="状态" :value="item.st_name"></cell>
      <cell title="状态标记" :value="item.st_flag"></cell>
      <radio :options="_getOption(index)"  v-model="radioIndex"></radio>
     </group>
     <group title="意见">
         <x-textarea v-model="notes" :rows="5"></x-textarea>
         <x-button  type="primary" @click.native="_ok">确定</x-button>
     </group>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
import {XHeader, Group, Cell, XButton, XInput, XTextarea, Divider, Radio} from 'vux'
import {serverURL} from 'utils'
export default {
  data () {
    return {
      groupData: [],
      mdid: '',
      djid: '',
      notes: '',
      postParam: {},
      radioIndex: null,
      options: [{key: 0, value: '勾选'}]
    }
  },
  components: {
    XHeader,
    Group,
    Cell,
    XButton,
    XInput,
    XTextarea,
    Divider,
    Radio
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
      let radioIndex = this.radioIndex
      console.info(radioIndex)
      if (radioIndex === null) {
        this.$vux.alert.show({
          title: '警告',
          content: '请勾选!'
        })
        return
      }
      let {mdid, djid, notes, postParam, groupData} = this.$data
      let {curr_usr_id, curr_act_name, ret_ci} = groupData[radioIndex]
      postParam = {...postParam, notes, curr_usr_id, curr_act_name, ret_ci}
      console.info(postParam)
      this.$axios.post(`${serverURL}/phone/P${mdid + djid}/reject`, postParam)
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
    },
    _getOption (key) {
      const option = [{key: 0, value: '勾选'}]
      option[0]['key'] = key
      return option
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
