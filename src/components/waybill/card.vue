<template>
          <!-- 卡片视图 -->
      <div class="card">
        <div class="titlt">
          <div class="til">运单号：01669</div>
          <div class="adress">
            <span>已签收</span>
          </div>
        </div>
        <div class="xing">
          <div class="left">
            <ul>
              <li>
                <img src="../../assets/img/icn_site.png" alt="">
                <span>发货地:
                  <strong>广州花都</strong>
                </span>
              </li>
              <li>
                <img src="../../assets/img/icn_time.png" alt="">
                <span>收货地:
                  <strong>广州天河</strong>
                </span>
              </li>
              <li>
                <img src="../../assets/img/inc_travel.png" alt="">
                <span>开始时间
                  <strong>2017-12-15</strong>
                </span>
              </li>
              <li>
                <img src="../../assets/img/inc_travel.png" alt="">
                <span>结束时间
                  <strong>2017-12-15</strong>
                </span>
              </li>
            </ul>
            <!-- 方块视图 -->
            <ul>
              <li>两件货物</li>
              <li>120立方</li>
              <li>1100公斤</li>
            </ul>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  props:['cardName']
};
</script>

<style lang="stylus" scoped>
@import '../stylus/mixins.styl';

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

        li:last-child img {
          opacity: 0;
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
          margin-left: px2rem(10px);
        }
      }
    }
  }
}
</style>


