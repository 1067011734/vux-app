<template>
 <div class="login">
  <div class="login-header">
    <i slot="icon" class="icon-weibiaoti1 iconfont"></i>
  </div>
  <group title="账号密码为admin">
      <x-input title="账号" placeholder="请填入帐号" v-model="loginData.userID"></x-input>
      <x-input title="密码" type="password" placeholder="请填入密码" v-model="loginData.passWord"></x-input>
      <x-button  type="primary" @click.native="_login">登入</x-button>
  </group>
 </div>
</template>

<script type="text/ecmascript-6">
import {XInput, Group, XButton, Cell, Alert, AlertModule, Selector} from 'vux'
import {serverURL} from 'utils'

export default {
  components: {
    XInput,
    XButton,
    Group,
    Cell,
    Alert,
    AlertModule,
    Selector
  },
  data () {
    return {
      loginData: {
        userID: '',
        passWord: ''
      }
    }
  },
  beforeRouteLeave (to, form, next) {
    next()
    this.loginData.userID = ''
    this.loginData.passWord = ''
  },
  mounted () {

  },
  methods: {
    _login () {
      if (!this.loginData.userID || !this.loginData.passWord) {
        this.$vux.alert.show({
          title: '警告',
          content: '用户和密码不能为空!'
        })
        return
      }
      const params = Object.assign({}, this.loginData)
      this._query(params)
    },
    _query (params) {
      this.$axios.get(`${serverURL}/login`, {
        params
      })
      .then((response) => {
        const json = response.data
        const {data, errno} = json
        if (errno) {
          this.$vux.alert.show({
            title: '警告',
            content: '用户名密码账号不匹配!'
          })
          return
        }
        const loginInfo = {...params}
        this.$root.loginInfo = loginInfo
        this.$router.push({name: 'home', params: {data: data}})
      })
      .catch(() => {
        // this.$router.push({name: 'homeMain', params: {}})
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.login
 position fixed
 left 0
 right 0
 width 100%
 height 100%
 background :#fbfbfb
 z-index :101
 .login-header
  padding :10px
  text-align :center
 .icon-weibiaoti1
  font-size :55px
  color: #1AAD19
 
 
</style>
