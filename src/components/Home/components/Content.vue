<template>
 <div>
  <div class="home-content">
   <x-header :right-options="{showMore: true}" @on-click-more="meuns.isShow = true">{{title}}</x-header>
     <group>
      <div v-for="item in contentList" >
       <cell :title="item.title" :value="item.value"></cell>
      </div>
       <x-switch title="详情" :value-map="[false, true]" v-model="goodsFlag"></x-switch>
     </group>
      <div v-if="goodsFlag">
        <div v-for="item in goodsList" >
          <br>
          <form-preview header-label='付款金额' :header-value="item.title" :body-items="item.list" :footer-buttons="buttons1"></form-preview>
        </div>
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
      contentList: [

      ],
      goodsList: [],
      title: '消息',
      goodsFlag: false,
      meuns: {
        isShow: false,
        list: {
          1: '提交',
          2: '驳回'
        }
      },
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
    const {content, goods} = data
    console.info(content, goods)
    const goodsList = []
    for (let item of goods) {
      const {customer, name, notes, number, price} = item
      const title = `¥${item.price * item.number}`
      const list = [{
        label: '货物',
        value: name
      }, {
        label: '数量',
        value: number
      }, {
        label: '单价',
        value: price
      }, {
        label: '甲方',
        value: customer
      },
      {
        label: '备注',
        value: notes
      }]
      goodsList.push({title, list})
    }
    next(vm => {
      vm.contentList = content
      vm.goodsList = goodsList
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
