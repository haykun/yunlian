<template>
  <div class="me">
      <!-- 头像 -->
    <div class="header">
        <div class="user">
            <img src="" alt="" class="hed">
            <div class="name">
                <p>老司机</p>
                <p>158******566</p>
            </div>
        </div>
        <!-- 积分签到 -->
        <div class="sign">
            <div class="num">
                <p>88</p>
                <p>当前积分</p>
            </div>
            <div class="sin">
                <p><img src="../../assets/img/icn_Sign.png" alt=""></p>
                <p>签到</p>
            </div>
        </div>
    </div>
    <!-- 内容主体 -->
    <div class="main">
        <div class="record">
            <div @click="toggleRecord(0)"><span>今日战绩<i></i></span></div>
            <div @click="toggleRecord(1)"><span>本月战绩<i></i></span></div>
        </div>
        <div class="achieve">
            <div>
                <p><span>0</span><span>单</span></p>
                <p>完成单量</p>
            </div>
            <div>
                <p><span>0</span><span>公里</span></p>
                <p>配送里程</p>
            </div>
        </div>
        <div class="rnking">
            <p>查看排行榜</p>
        </div>
    </div>
    <!-- 评论模块 -->
    <app-footer></app-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    //切换战绩的方法
    toggleRecord(id) {
      let arr = document.querySelectorAll(".record i");
      let arr1 = document.querySelectorAll(".record span");
      for (var i = 0; i < arr.length; i++) {
        arr[i].style.display = "none";
        arr1[i].style.fontWeight = "normal";
      }
      arr[id].style.display = "block";
      arr1[id].style.fontWeight = "bold";
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../components/stylus/mixins.styl';

bgCol = #061128; // 战绩线框颜色
zCl = #383838; // 字体颜色
derCol = #dedede; // 战绩线框颜色

.me {
    width: 100%;
    box-sizing: border-box;

    // 头部
    .header {
        position: relative;
        background-image: url('../../assets/img/pic_my.png');
        background-size: 100%;
        height: px2rem(360px);
        padding: 0 px2rem(20px);

        // 头像
        .user {
            position: absolute;
            left: 50%;
            bottom: px2rem(50px);
            transform: translateX(-50%);
            overflow: hidden;
            box-sizing: border-box;
            display: inline-block;

            .hed {
                float: left;
                width: px2rem(120px);
                height: px2rem(120px);
                border-radius: 50%;
                background-color: skyblue;
            }

            .name {
                float: right;
                color: #ffffff;
                font-size: 15px;
                height: px2rem(120px);
                margin-left: px2rem(20px);
                margin-top: px2rem(20px);

                p:last-child {
                    font-size: 12px;
                }
            }
        }

        // 积分签到
        .sign {
            position: absolute;
            bottom: px2rem(-55px);
            left: px2rem(20px);
            width: 95%;
            z-index: 2;
            height: px2rem(110px);
            background-color: #ffffff;
            box-shadow: px2rem(0px) px2rem(1px) px2rem(1px) #ccc;
            border-radius: px2rem(10px);

            div {
                width: 50%;
                box-sizing: border-box;
                text-align: center;

                p:first-child {
                    font-size: 25px;
                    margin-top: px2rem(16px);
                }

                p:last-child {
                    font-size: 15px;
                }
            }

            .num {
                float: left;
            }

            .sin {
                float: right;
            }
        }
    }

    // 内容主体
    .main {
        width: 100%;
        background-color: #ffffff;
        padding-top: px2rem(55px);

        // 战绩
        .record {
            margin-top: px2rem(20px);
            font-size: 15px;
            overflow: hidden;

            div {
                position: relative;
                width: 50%;
                height: px2rem(88px);
                line-height: px2rem(88px);
                text-align: center;
                border-bottom: 1px solid derCol;

                i {
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 30%;
                    height: px2rem(8px);
                    background-color: bgCol;
                    display: none;
                }
            }

            div:first-child {
                float: left;

                span {
                    font-weight: bold;
                }

                i {
                    display: block;
                }
            }

            div:last-child {
                float: right;
            }
        }

        // 单量
        .achieve {
            height: px2rem(165px);
            width: 100%;

            div {
                margin-top: px2rem(40px);
                width: 50%;
                color: zCl;
                text-align: center;
                font-size: 13px;

                p span:first-child {
                    font-size: 25px;
                }

                p:first-child {
                    font-weight: 500;
                }

                p:last-child {
                    font-size: 15px;
                }
            }

            div:first-child {
                float: left;
            }

            div:last-child {
                float: right;
            }
        }
        //排行榜
        // 排行榜
        .rnking {
            width: 100%;
            height: px2rem(68px);
            line-height px2rem(68px)
            box-sizing: border-box;
            box-shadow: px2rem(0px) px2rem(4px) px2rem(6px) #ddd;
            font-size: 15px;
            text-align: center;
        }
    }
}
</style>


