<template>
  <div class="header">
      <div class="bar" @click="$store.state.toggleaside = !$store.state.toggleaside">
          <img src="../../assets/img/inc_Navigation.png">
      </div>
      <div class="titlt">
          <h2>首页</h2>
      </div>
      <div class="main">
          <img src="../../assets/img/icn_news.png">
      </div>
  </div>
</template>

<script>
export default {
  methods: {
      //显示侧滑导航栏
      toggle(){
          console.log(1)
      }
  }
}
</script>

<style lang="stylus" scoped>
@import '../stylus/mixins.styl'
bg-col = #101a30; 
clo = #ffffff;
.header{
    position fixed
    top 0
    left 0
    z-index 2
    width 100%
    box-sizing border-box
    padding 0 px2rem(20px)
    height: px2rem(88px)
    line-height px2rem(88px)
    color clo
    text-align center
    background-color bg-col
    .bar{
        float left
    }
    .main{
        float right 
    }
    .titlt{
        display inline-block
        h2{
            font-size 20px
            font-weight normal
        }
    }
}
</style>


