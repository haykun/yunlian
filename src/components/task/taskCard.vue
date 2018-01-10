<template>
     <div class="taskCard">
        <!-- 数字视图 -->
        <div class="number">
            <!-- 提货数字栏 -->
            <!-- <div class="tihuo">1</div> -->
            <!-- 卸货数字栏 -->
            <div class="xiehuo">2</div>
        </div>
        <!-- 线条 -->
        <div class="line"></div>
        <!-- 提货标题栏 -->
        <!-- <div class="title">
          <span>提货</span>
          <span>要求提货时间：今天13:00</span>
        </div> -->
        <!-- 卸货标题栏 -->
        <div class="cargo">
          <span>卸货</span>
          <span>要求卸货时间：今天18:00</span>
        </div>
        <!-- 背景图 -->
        <div class="ground"></div>
        <!-- 卡片信息 -->
        <div class="detail">
          <div class="address">广州市</div>
          <div class="tail">
            <ul>
              <li><img src="../../assets/img/icn_position.png" alt=""><span>广州市-花都区风神物流</span></li>
              <li><img src="../../assets/img/inc_distance.png" alt=""><span>距你：60公里</span></li>
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
            <div><a :href="'tel:'+110"><span><img src="../../assets/img/icn_phone2.png" alt=""></span><span>李小姐</span></a></div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
@import '../stylus/mixins.styl';

// 卡片视图颜色
cardcol = #ffffff;
bordercol = #343d50; // 边框颜色
col = #383838;

// 卡片视图
.taskCard {
    position: relative;
    float: right;
    width: 100% - px2rem(680px);
    box-shadow: px2rem(0px) px2rem(1px) px2rem(1px) #ccc;
    margin-top: px2rem(20);
    border-bottom-left-radius: px2rem(20px);

    // 数字视图
    .number {
        position: absolute;
        top: px2rem(10px);
        left: px2rem(-60px);

        div {
            width: px2rem(40px);
            height: px2rem(40px);
            line-height: px2rem(40px);
            text-align: center;
            border-radius: 50%;
        }

        // 卸货
        .xiehuo {
            border: px2rem(4px) solid #f68622;
            color: #f68622;
        }

        // 提货
        .tihuo {
            border: px2rem(4px) solid #2166ff;
            color: #2166ff;
        }
    }

    // 线条
    .line {
        position: absolute;
        top: px2rem(56px);
        left: px2rem(-37px);
        width: 2px;
        height: px2rem(350px);
        background: linear-gradient(#2166ff, #21cdff);
    }

    // 背景图
    .ground {
        position: absolute;
        bottom: px2rem(60px);
        right: px2rem(14px);
        width: px2rem(200px);
        height: px2rem(200px);
        z-index: 2;
        background-image: url('../../assets/img/icn_miao.png');
        background-repeat: no-repeat;
    }

    // 提货标题栏
    .title {
        height: px2rem(70px);
        border-top-left-radius: px2rem(20px);
        line-height: px2rem(70px);
        color: cardcol;
        font-size: 20px;
        padding: 0 px2rem(20px);
        background-color: #2166ff;
        overflow: hidden;
        box-sizing: border-box;

        span:last-child {
            float: right;
            margin-right: px2rem(24px);
            font-size: 13px;
        }
    }

    // 卸货标题栏
    .cargo {
        border-top-left-radius: px2rem(20px);
        height: px2rem(70px);
        line-height: px2rem(70px);
        color: cardcol;
        font-size: 20px;
        padding: 0 px2rem(20px);
        background-color: #f68622;
        overflow: hidden;
        box-sizing: border-box;

        span:last-child {
            float: right;
            margin-right: px2rem(24px);
            font-size: 13px;
        }
    }

    // 卡片信息
    .detail {
        height: px2rem(220px);
        position: relative;
        overflow: hidden;
        background-color: #ffffff;

        .address {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            margin-left: px2rem(20px);
            width: px2rem(140px);
            height: px2rem(140px);
            line-height: px2rem(140px);
            text-align: center;
            background-image: url('../../assets/img/icn_black.png');
            background-size: 100% 100%;
            color: #ffffff;
            font-size: 20px;
            font-weight: 500;
        }

        .tail {
            margin-left: px2rem(190px);
            font-size: 15px;

            ul:first-child {
                margin-top: px2rem(30px);

                li {
                    margin-top: px2rem(10px);
                }

                span {
                    margin-left: px2rem(20px);
                }
            }

            ul:last-child {
                margin-top: px2rem(20px);

                li {
                    display: inline-block;
                    border: 1px solid #ccc;
                    padding: px2rem(4px);
                    border-radius: px2rem(6px);
                }
            }
        }
    }

    // 查看地图，电话
    .tain {
        width: 100%;
        height: px2rem(82px);
        line-height: px2rem(82px);
        padding: 0 px2rem(20px);
        box-sizing: border-box;
        background-color: #ffffff;
        display: inline-block;

        div {
            border-top: 1px solid #eee;
            text-align: center;
            color: col;
            box-sizing: border-box;

            span:last-child {
                margin-left: px2rem(20px);
            }
        }

        div:first-child {
            float: left;
            width: 50%;
            position: relative;
            overflow: hidden;

            i {
                position: absolute;
                top: 50%;
                right: -1px;
                transform: translateY(-50%);
                width: 1px;
                height: 60%;
                border: 1px solid #eee;
            }
        }

        div:last-child {
            float: right;
            width: 50%;
        }
    }
}
</style>


