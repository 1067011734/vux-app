<template>
 <div class="home-content">
   <x-header :right-options="{showMore: true}" @on-click-more="meuns.isShow = true" style="position:fixed;top:0;left:0;z-index:99;width:100%">{{title}}</x-header>
   <div class="router-content">
     <group>
      <div v-for="item in groupData" >
       <cell :title="item.title" :value="item.value"></cell>
      </div>
       <x-switch title="详情" :value-map="[false, true]" v-model="groupData2IsShow"></x-switch>
     </group>
      <div v-if="groupData2IsShow">
       <form-preview v-for="item in groupData2"  :key="item.elem_id" :body-items="item"></form-preview>
      </div>
   </div>
         <actionsheet v-model="meuns.isShow" :menus="meuns.list" @on-click-menu="menuClick"></actionsheet>
 </div>
</template>

<script type="text/ecmascript-6">
import {XHeader, Group, Cell, XSwitch, FormPreview, Actionsheet} from 'vux'
// import {serverURL} from 'utils'
export default {
  data () {
    return {
      groupData: [

      ],
      title: '消息',
      groupData2: [

      ],
      groupData2IsShow: false,
      meuns: {
        isShow: false,
        list: {
          1: '提交',
          2: '驳回'
        }
      },
      mdid: '',
      djid: '',
      vou_no: ''
    }
  },
  components: {
    XHeader,
    XSwitch,
    Group,
    Cell,
    FormPreview,
    Actionsheet
  },
  beforeRouteEnter (to, from, next) {
    const {data, title} = to.params
    next(vm => {
      vm.groupData = data
      vm.title = title
    })
  },
  watch: {
    groupData2IsShow (val) {
      console.info(this.groupData)
      // if (!this.groupData2.length) {
      //   let {mdid, djid, vou_no} = this.$data
      //   this.$axios.get(`${serverURL}/phone/P${mdid + djid}/P${mdid + djid}_c`, {
      //     params: {
      //       vou_no
      //     }
      //   })
      // .then((response) => {
      //   console.info(response.data.elems[0])
      //   this.groupData2 = response.data.elems
      // })
      // }
    }
  },
  mounted () {

  },
  methods: {
    menuClick (menuKey, menuItem) {
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.home-content
 .vux-form-preview
  margin-top :10px
 .weui-form-preview__hd
  display :none
</style>
