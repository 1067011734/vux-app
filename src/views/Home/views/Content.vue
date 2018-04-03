<template>
 <div  class="wrap">
   <x-header :right-options="{showMore: true}" @on-click-more="meuns.isShow = true">{{title}}</x-header>
   <div class="content-wrap" ref="scroll">
     <div class="content">
       
      <group>
        <cell title="责任人" :value="contentList.name"></cell>
        <cell title="岗位" :value="contentList.dept"></cell>
        <cell title="时间" :value="contentList.date"></cell>
        <cell title="主题" :value="contentList.theme"></cell>
        <cell title="编号" :value="contentList.vou"></cell>
        
        <x-switch title="详情" :value-map="[false, true]" v-model="goodsFlag"></x-switch>
      </group>
      <div v-if="goodsFlag">
        <div v-for="item in goodsList" >
          <br>
          <form-preview header-label='付款金额' :header-value="item.title" :body-items="item.list" :footer-buttons="buttons1"></form-preview>
        </div>
      </div>
     </div>
   </div>  
      <transition name="move">
            <router-view class="router-view"></router-view>
      </transition>
      <actionsheet v-model="meuns.isShow" :menus="meuns.list" @on-click-menu="menuClick"></actionsheet>
</div>
</template>

<script type="text/ecmascript-6">
import {XHeader, Group, Cell, XSwitch, FormPreview, Actionsheet} from 'vux'
import BScroll from 'better-scroll'
// import {serverURL} from 'utils'
export default {
  data () {
    return {
      contentList: {},
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
      }],
      scroll: ''
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
    const {content, goods} = to.params
    next(vm => {
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
      vm.contentList = content
      vm.goodsList = goodsList
      vm.title = content.title
      if (vm.scroll) {
        vm.scroll.refresh()
      }
    })
  },
  watch: {
    goodsFlag () {
      this.$nextTick(() => {
        if (this.scroll) {
          this.scroll.refresh()
        }
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.scroll, {
        scrollbar: true
        // directionLockThreshold: 0
        // bounce: false,
        // momentum: false
      })
      // console.info(this.scroll)
    })
  },
  methods: {
    menuClick (menuKey, menuItem) {
      this.$router.push({name: 'homeSubmit', params: {titleFlag: menuKey}})
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.wrap
  .content-wrap
    width: 100%;
    height: 93%
    // height 300px
    overflow: hidden;
    .weui-cells
      margin-top 0 
    .weui-form-preview__btn_primary  
      color: #FF9900
      letter-spacing: 4px
</style>
