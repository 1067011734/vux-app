<template>
 <div>
   <xHeader :left-options="{showBack: false}">主控面板</xHeader>
  <!-- <swiper :autoplay="true"> -->
  <swiper>
    <swiper-item>
       <img src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" alt="" srcset="">
    </swiper-item>
    <swiper-item>
      <img src="http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg" alt="" srcset="">
    </swiper-item>
    <swiper-item>
      <img src="http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg" alt="" srcset="">
    </swiper-item>
  </swiper>
  <div id="myChart" style="height:300px"></div>
 </div>

</template>

<script type="text/ecmascript-6">
import { XHeader } from 'vux'
import { Swiper, SwiperItem } from 'components/Swiper'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: {
        a: 1
      }
    }
  },
  components: {
    XHeader,
    Swiper,
    SwiperItem
  },
  mounted () {
    this.drawBar()
  },
  methods: {
    drawBar () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['利润', '支出', '收入']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'value'
          }
        ],
        yAxis: [
          {
            type: 'category',
            axisTick: { show: false },
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        series: [
          {
            name: '利润',
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'inside'
              }
            },
            data: [200, 170, 240, 244, 200, 220, 210]
          },
          {
            name: '收入',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true
              }
            },
            data: [320, 302, 341, 374, 390, 450, 420]
          },
          {
            name: '支出',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'left'
              }
            },
            data: [-120, -132, -101, -134, -190, -230, -210]
          }
        ]
      }
      // 绘制图表
      myChart.setOption(option)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.VueCarousel-slide {
  height: 150px;

  img {
    height: 100%;
    width: 100%;
  }
}

.VueCarousel-pagination {
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>