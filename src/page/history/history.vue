<template>
  <div class="history">
    <app-comhed :name='headerName' :operation="operation" :flag="false"></app-comhed>
    <div class="cardview">
        <!-- 卡片视图 -->
      <div class="card">
        <div class="titlt">
          <div class="til">任务编号：01669</div>
          <div class="adress">
            <span>已完成</span>
          </div>
        </div>
        <div class="xing">
          <div class="left">
            <ul>
              <li>
                <img src="../../assets/img/icn_site.png" alt="">
                <span>站点数量:
                  <strong>6</strong>
                </span>
              </li>
              <li>
                <img src="../../assets/img/icn_time.png" alt="">
                <span>任务开始时间:
                  <strong>今天13:30</strong>
                </span>
              </li>
              <li>
                <img src="../../assets/img/inc_travel.png" alt="">
                <span>大约行驶：
                  <strong>20公里</strong>
                </span>
              </li>
            </ul>
            <ul>
              <li>两件货物</li>
              <li>120立方</li>
              <li>1100公斤</li>
            </ul>
          </div>
        </div>
        <div class="chakan">
          <i></i>
          <a href="javascript:;">
            <span>查看详情</span>
            <span>
              <img src="../../assets/img/inc_r.png" alt="">
            </span>
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      headerName: "历史任务",
      operation: "",
      cardmation: {
        cardnumber: "01669",
        somenumber: 6,
        time: "今天13:30",
        run: 20,
        piece: 2,
        square: 120,
        jin: 1100
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../../components/stylus/mixins.styl';

.history {
    .cardview {
        padding: 0 px2rem(20px);
        box-sizing: border-box;
    }
}

bg-col = #343d50; // 背景色
col = #383838; // 字体颜色

.card {
    margin-top: px2rem(20px);
    height: px2rem(400px);
    border-radius: px2rem(20px);
    overflow: hidden;
    box-shadow: px2rem(0px) px2rem(1px) px2rem(1px) #ccc;

    // 卡片标题
    .titlt {
        width: 100%;
        box-sizing: border-box;
        padding: 0 px2rem(20px);
        height: px2rem(70px);
        line-height: px2rem(70px);
        background-color: bg-col;
        overflow: hidden;

        .til {
            float: left;
            font-size: 15px;
            color: #ffffff;
        }

        .adress {
            float: right;
            color: #ffffff;
            font-size: 13px;
        }
    }

    // 卡片内容区域
    .xing {
        padding: 0 px2rem(20px);
        overflow: hidden;
        width: 100%;
        height: px2rem(260px);

        .left {
            float: left;

            ul:first-child {
                li {
                    color: col;
                    margin-top: px2rem(20px);
                    font-size: 15px;

                    span {
                        margin-left: px2rem(20px);
                    }
                }
            }

            ul:last-child {
                margin-top: px2rem(20px);
                padding-left: px2rem(50px);

                li {
                    display: inline-block;
                    border: 1px solid #999ea7;
                    padding: px2rem(2px);
                    border-radius: px2rem(6px);
                }
            }
        }
    }

    // 查看详情
    .chakan {
        position: relative;
        height: px2rem(70px);
        line-height: px2rem(70px);
        box-sizing: border-box;
        padding: 0 px2rem(20px);

        i {
            position: absolute;
            top: 0;
            left: px2rem(20px);
            width: px2rem(670px);
            height: 1px;
            background-color: #d9d9d9;
        }

        a {
            color: col;
            font-size: 15px;

            span:last-child {
                float: right;
            }
        }
    }
}
</style>


