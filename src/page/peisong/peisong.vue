<template>
  <div class="peisong" >
    <!-- 数字视图 -->
    <div class="number">
      <ul>
        <li>1</li>
      </ul>
    </div>
    <!-- 卡片视图 -->
    <div class="card" v-for="(item,index) in arr" :key="index">
        <div class="title">
          <span>提货</span>
          <span>要求提货时间：今天13:00</span>
        </div>
        <!-- 卡片信息 -->
        <div class="detail">
          <div class="address">广州市</div>
          <div class="tail">
            <ul>
              <li><img src="../../assets/img/icn_Waybill.png" alt=""><span>运单号：000001、000002</span><span></span></li>
              <li><img src="../../assets/img/icn_position.png" alt=""><span>广州市-花都区风神物流</span></li>
              <li><img src="../../assets/img/inc_distance.png" alt=""><span>距你：60公里</span></li>
              <li><img src="../../assets/img/icn_moy.png" alt=""><span>代收贷款金额：999元</span></li>
            </ul>
            <ul>
              <li>6件货物</li>
              <li>60立方</li>
              <li>400公斤</li>
            </ul>
          </div>
        </div>
        <div class="tain">
            <div><span><img src="../../assets/img/icn_map.png" alt=""></span><i></i><span>查看地图</span> </div>
            <div><span><img src="../../assets/img/icn_phone2.png" alt=""></span><span>李小姐</span></div>
        </div>
        <div class="opertain"><button>签发</button><button>起运</button></div>
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
@import '../../components/stylus/mixins.styl'

// 卡片视图颜色
cardcol = #ffffff
bordercol = #343d50 //边框颜色
col = #383838
.peisong{
  width 100%
  box-sizing border-box
  overflow hidden
  margin-top px2rem(160px)
  margin-bottom px2rem(98px)
  // 数字视图
  .number{
    float left
    margin-top px2rem(30px)
    margin-left px2rem(12px)
    width px2rem(40px)
    height px2rem(40px)
    line-height px2rem(40px)
    text-align center
    border-radius 50%
    border px2rem(4px) solid #2166ff
    color #2166ff
  }
  // 卡片视图
  .card{
    float right 
    width (100% - px2rem(680px))
    height px2rem(566px)
    box-shadow px2rem(0px) px2rem(1px) px2rem(1px) #ccc
    border-top-left-radius px2rem(20px)
    border-bottom-left-radius px2rem(20px)
    overflow hidden
    margin-top px2rem(20)
    // 标题栏
    .title{
      height px2rem(70px)
      line-height px2rem(70px)
      color cardcol
      font-size 20px
      padding 0 px2rem(20px)
      background-color #2166ff 
      overflow hidden
      box-sizing border-box
      span:last-child{
        float right 
        margin-right px2rem(24px)
        font-size 13px
      }
    }
    // 卡片信息
    .detail{
      height px2rem(294px)
      position relative
      overflow hidden
      .address{
        position absolute
        top 50%
        left 0
        transform translateY(-50%)
        margin-left px2rem(20px)
        width px2rem(140px)
        height px2rem(140px)
        line-height px2rem(140px)
        text-align center
        background-image url('../../assets/img/icn_black.png')
        background-size 100% 100%
        color #ffffff
        font-size 20px
        font-weight 500
      }
      .tail{
        margin-left px2rem(190px)
        font-size 15px
        ul:first-child{
          margin-top px2rem(30px)
          li{
            margin-top px2rem(10px)
          }
          span{
            margin-left px2rem(20px)
          }
        }
        ul:last-child{
          margin-top px2rem(10px)
          li{
            display inline-block
            border 1px solid #ccc
            padding px2rem(4px)
            border-radius px2rem(6px)
          }
        }
      }
    }
    //查看地图，电话
    .tain{
      width 100%
      height px2rem(82px)
      line-height px2rem(82px)
      padding 0 px2rem(20px)
      box-sizing border-box
      div{
        border-top 1px solid #eee
        border-bottom  1px solid #eee
        text-align center
        color col
        box-sizing border-box
        span:last-child{
          margin-left px2rem(20px)
        }
      }
      div:first-child{
        float left
        width 50%
        position relative
        overflow hidden
        i{
          position absolute
          top 50%
          right -1px
          transform translateY(-50%)
          width 1px
          height 60%
          border 1px solid #eee
        }
      }
      div:last-child{
        float right 
        width 50%
      }
    }
    //签发起运
    .opertain{
      width 100%
      padding px2rem(20px)
      box-sizing border-box
      overflow hidden
      button{
        width px2rem(300px)
        height px2rem(80px)
        line-height px2rem(80px)
        text-align center
        background-color #08132a
        font-size 15px
        font-weight 500
        border-radius px2rem(10px)
        color #ffffff
      }
      button:first-child{
        margin-right px2rem(40px)
      }
    }
    
  }
}
</style>



