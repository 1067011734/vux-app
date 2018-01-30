<template>
 <div>
  <div class="header">
   <div class="title">
     杭州xx有限公司
   </div>
   <div class="content-wrap">
     <div class="picture">
       <label class="icon" for="ipt_upload">
        <input type="file" name="" class="upload" id="ipt_upload" @change="_upload">
        <div v-if="user_img" class="user_img_wrap">
        <img :src="user_img" alt="" class="user_img" accept="image/*" capture="camera"/>
        </div>
        <div v-else>
          <i  class="icon-usered iconfont"></i>
        </div>
       </label>
     </div>
    <div class="content">
       <div class="name">王经理</div>
       <div class="job">职位:<span>IT技术部门</span></div>
    </div>
   </div>
  </div>
  <group>
    <cell is-link>
        <span slot="title"><i  class="icon-love iconfont cell-icon"></i>收藏</span>
    </cell>
    <cell is-link>
        <span slot="title"><i  class="icon-lishihuisu iconfont cell-icon"></i>历史消息</span>
    </cell>
    <cell is-link>
        <span slot="title"><i  class="icon-setting iconfont cell-icon"></i>设置</span>
    </cell>
  </group>
  <group>
    <cell class="logout"  @click.native="_logout">
        <span slot="title" ></i>退出登入</span>
    </cell>
  </group>
 </div>
</template>

<script type="text/ecmascript-6">
import {Group, Cell} from 'vux'
export default {
  data () {
    return {
      user_img: ''
    }
  },
  components: {
    Group,
    Cell
  },
  methods: {
    _logout () {
      const storage = window.localStorage
      storage.yousi = ''
      console.info(storage)
      this.$router.push({name: 'login', params: {}})
    },
    _upload () {
      let that = this
      const file = event.target.files[0]
      if (file.length === 0) {
        return
      }
      if (/^image/.test(file.type)) {
                // 创建一个reader
        var reader = new FileReader()
                // 将图片将转成 base64 格式
        reader.readAsDataURL(file)
                // 读取成功后的回调
        reader.onloadend = function () {
          // self.dataUrl = this.result
          let imgData = this.result
          that.user_img = imgData
          function dealImage (path, callback) {
            let canvas = document.createElement('canvas')
            let img = new Image()
            img.src = path
            img.onload = function () {
              let scale = 1
              if (this.width > 1000 || this.height > 1000) {  // 1000只是示例，可以根据具体的要求去设定
                if (this.width > this.height) {
                  scale = 1000 / this.width
                } else {
                  scale = 1000 / this.height
                }
              }
              canvas.width = this.width * scale
              canvas.height = this.height * scale
              let quality = 0.5
              let ctx = canvas.getContext('2d')
              ctx.drawImage(this, 0, 0, canvas.width, canvas.height)
              let base64 = canvas.toDataURL('image/jpeg', quality)
              callback(base64)
            }
          }
          dealImage(imgData, function (base) {
            // console.log(base.length / 1024)
            that.user_img = base
          })
        }
      }
      // oFReader.readAsDataURL(oFile)
      console.info('change', file, file.type, /^image/.test(file.type), file.type)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.header
 background-image: radial-gradient(circle 248px at center, #3689de 0%, #3f8bd8 47%, #39699a 100%)
 color :#fff
 padding: 10px 10px 20px 10px
 font-size :0
 .title
  line-height: 33px
  margin-bottom: 15px
  font-size: 24px
  letter-spacing: 4px
 .content-wrap
  .picture
   display inline-block
  .user_img_wrap
   width :55px
   height :55px
   border-radius :50% 
   overflow hidden
   .user_img
    width :100%
  .upload
    display none
  .icon
   display:inline-block
   vertical-align :top
   i
    font-size :55px
  .content
   display :inline-block
   vertical-align :top
   margin-left: 10px
   .name
    font-size :17px
    line-height: 30px
   .job
    font-size :14px 
    span
     margin-left :5px
.cell-icon
 color:#379ef1
 margin-right :10px  
.logout
 color :red
 text-align :center  
</style>
