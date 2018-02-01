<template>
 <div>
  <div class="home-content">
   <x-header :right-options="{showMore: true}" @on-click-more="meuns.isShow = true">{{title}}</x-header>
     <group>
      <div v-for="item in groupData" >
       <cell :title="item.title" :value="item.value"></cell>
      </div>
       <x-switch title="详情" :value-map="[false, true]" v-model="groupData2IsShow"></x-switch>
     </group>
      <div v-if="groupData2IsShow">
       <br>
       <form-preview header-label='付款金额' header-value="¥2400.00" :body-items="list" :footer-buttons="buttons1"></form-preview>
       <br>
       <form-preview header-label='付款金额' header-value="¥2400.00" :body-items="list" :footer-buttons="buttons1"></form-preview>
       <br>
       <form-preview header-label='付款金额' header-value="¥2400.00" :body-items="list" :footer-buttons="buttons1"></form-preview>
      </div>
      <transition name="move">
       <router-view class="router-view"></router-view>
      </transition>
      <actionsheet v-model="meuns.isShow" :menus="meuns.list" @on-click-menu="menuClick"></actionsheet>
 </div>
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
      list: [{
        label: '货物',
        value: '纯棉'
      }, {
        label: '数量',
        value: '24'
      }, {
        label: '单价',
        value: '100'
      }, {
        label: '甲方',
        value: '浙江滴滴滴滴有限公司'
      },
      {
        label: '备注',
        value: '这趟货要尽快使用'
      }],
      buttons1: [{
        style: 'primary',
        text: '查看更多'
      }]
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
  },
  mounted () {

  },
  methods: {
    menuClick (menuKey, menuItem) {
      this.$router.push({name: 'homeSubmit', params: {titleFlag: menuKey}})
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.home-content
 .content-wrap
  flex 1
 .weui-form-preview__btn_primary 
  color: #FF9900
  letter-spacing: 4px
</style>
