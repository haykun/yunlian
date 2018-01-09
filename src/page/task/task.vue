<template>
  <div class="content">
      <!-- 卡片视图 -->
    <div class="card">
        <div class="titlt">
            <div class="til">任务一</div>
            <div class="adress">
                <span><img src="../../assets/img/address01.png" alt=""></span>
                <span>距你600M</span> 
            </div>
        </div>
        <div class="xing">
            <div class="left">
                <ul>
                    <li><img src="../../assets/img/icn_site.png" alt=""><span>站点数量:6</span></li>
                    <li><img src="../../assets/img/icn_time.png" alt=""><span>任务开始时间:今天13:30</span></li>
                    <li><img src="../../assets/img/inc_travel.png" alt=""><span>大约行驶：20公里</span></li>
                </ul>
                <ul>
                    <li>两件货物</li>
                    <li>120立方</li>
                    <li>1100公斤</li>
                </ul>
            </div>
            <div class="right">
                <a href="javascript:;">接单</a>
            </div>
        </div>
        <div class="chakan">
            <i></i>
            <router-link to="/watch">
                <span>查看详情</span>
                <span><img src="../../assets/img/inc_r.png" alt=""></span>
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
      return {
          arr:[1,2,3,4]
      }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../components/stylus/mixins.styl';

//卡片视图
bg-col = #343d50    //背景色
col = #383838 //字体颜色
.content{
    padding 0 px2rem(20px)
    margin-top px2rem(160px)
    margin-bottom px2rem(98px)
    .card{
        margin-top px2rem(20px)
        height px2rem(400px)
        border-radius px2rem(20px)
        overflow hidden
        box-shadow px2rem(0px) px2rem(1px) px2rem(1px) #ccc
        //卡片标题
        .titlt{
            width 100%
            box-sizing border-box
            padding 0 px2rem(20px)
            height px2rem(70px)
            line-height px2rem(70px)
            background-color bg-col
            overflow hidden
            .til{
                float left
                font-size 20px
                color #ffffff
            }
            .adress{
                float right 
                color #ffffff
                font-size 13px
                span:first-child{

                    img {
                        vertical-align middle
                    }
                }
                span:last-child{
                    vertical-align middle
                }
            }
        }
        //卡片内容区域
        .xing{
            padding 0 px2rem(20px)
            overflow hidden
            width 100%
            height px2rem(260px)
            .left{
                float left
                ul:first-child{
                    li{
                        color col
                        margin-top px2rem(20px)
                        font-size  15px
                        span {
                            margin-left px2rem(20px)
                        }
                    }
                }
                ul:last-child{
                    margin-top px2rem(20px)
                    padding-left px2rem(50px)
                    li{
                        display inline-block
                        border 1px solid #999ea7
                        padding px2rem(2px)
                        border-radius px2rem(6px)
                    }
                }
            }
            .right{
                float right
                a{
                    display inline-block
                    width px2rem(140)
                    height px2rem(140)
                    line-height px2rem(140)
                    border-radius 50%
                    text-align center
                    background-color #2166ff
                    color #ffffff
                    font-size 20px
                    font-weight 500
                    margin-right px2rem(74px)
                    margin-top 50%
                    transform translateY(-50%)
                }
            }
        }
        //查看详情
        .chakan{
            position relative
            height px2rem(70px)
            line-height px2rem(70px)
            box-sizing border-box
            padding 0 px2rem(20px)
            i{
                position absolute
                top 0
                left px2rem(20px)
                width px2rem(670px)
                height 1px
                background-color #dedede
            }
            a{
                color col
                font-size 15px
                span:last-child{
                    float right 
                }
            }
        }
    }
}
</style>


