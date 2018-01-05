<template>
  <div class="pinglun">
      <!-- 人物评价 -->
      <div class="character">
          <div><span>收货人评价<i></i></span></div>
          <div><span>发货人评价<i></i></span></div>
      </div>
      <!-- 评价程度 -->
      <div class="evaluate">
          <ul>
              <li>全部（4）</li>
              <li>满意（2）</li>
              <li>不满意（0）</li>
          </ul>
      </div>
      <!-- 评论详情 -->
      <div class="main"></div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
@import '../stylus/mixins.styl'

zCl = #383838;  //字体颜色
    .pinflun{
        width 100%
        height px2rem(88px)
        .character{
            overflow hidden
            div{
                width 50%;
                color zCl
                font-size 15px
                font-weight bold
            }
            div:first-child{
                float left
            }
            div:last-child{
                float right 
            }
        }
    }
</style>


