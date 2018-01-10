<template>
  <div class="detail">
      <!-- 头部 -->
      <app-comhed :name="headerName" :operation="operation" :flag="false"></app-comhed>
      <!-- 状态栏 -->
      <div class="status">
          <div>状态：<span>待接单</span></div>
          <div>联系人：<a :href="'tel:'+110"><span><img src="../../assets/img/icn_phone.png">张小姐</span></a></div>
          <div>
              <span><img src="../../assets/img/icn_start.png">12-01 20:00</span>
              <img src="../../assets/img/inc_Arrow.png">
              <span><img src="../../assets/img/inc_end.png">12-20 19:00</span>
          </div>
          <div>备注：请按时发货</div>
      </div>
      <!-- 卡片视图 -->
      <div class="card">
          <tail-card v-for="(item,index) in 4" :key="index"></tail-card>
      </div>
      <!-- 底部按钮 -->
      <div class="footbut">
          <button @click="jujue">拒绝</button>
          <button @click="jiedan">接单</button>
      </div>  
  </div>
</template>

<script>
import Card from "../../components/task/taskCard.vue";
export default {
  data() {
    return {
      headerName: "任务详情",
      operation: ""
    };
  },
  components: {
    "tail-card": Card
  },
  methods: {
      //拒绝按钮的点击事件
      jujue(){
          this.$router.push('/usual')
      },
      //接单按钮的点击事件
      jiedan(){
          this.$router.push('/task')
      }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../components/stylus/mixins.styl';

bgCol = #ececec;
zCl = #383838;
zCl1 = #f68622;
zCl2 = #939393;

.detail {
    background-color: bgCol;
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin-bottom: px2rem(120);

    // 状态栏
    .status {
        padding: 0 px2rem(20px);
        box-sizing: border-box;
        overflow: hidden;
        background-color: #ffffff;
        box-shadow: px2rem(3px) px2rem(3px) px2rem(3px) rgba(0, 0, 0, 0.3);

        div {
            width: 50%;
            float: left;
            font-size: 13px;
            color: zCl;
            height: px2rem(60px);
            line-height: px2rem(60px);
            border-bottom: 1px solid #dcdcdc;
        }

        div:first-child span {
            color: zCl1;
        }

        div:nth-child(2) {
            text-align: right;

            img {
                vertical-align: middle;
                margin-bottom: px2rem(10px);
                margin-right: px2rem(10px);
            }
        }

        div:nth-child(3) {
            width: 100%;
            height: px2rem(80px);
            line-height: px2rem(80px);
            padding: 0 px2rem(28px);
            font-size: 15px;

            img:nth-child(2) {
                margin-left: px2rem(48px);
            }

            span:last-child {
                float: right;
                margin-right: px2rem(48px);
            }
        }

        div:last-child {
            color: zCl2;
            width: 100%;
            height: px2rem(80px);
            line-height: px2rem(80px);
            text-align: left;
            border: none;
            font-size: 13px;
        }
    }

    // 底部按钮
    .footbut {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 3;
        padding: px2rem(20px);
        box-sizing: border-box;
        width: 100%;
        height: px2rem(120px);
        background-color: #ffffff;
        font-size: 15px;
        overflow: hidden;
        box-shadow: px2rem(3px) px2rem(-2px) px2rem(2px) rgba(0, 0, 0, 0.3);

        button {
            display: inline-block;
            border-radius: px2rem(10px);
            text-align: center;
            height: 100%;
            line-height: 100%;
            background-color: #ffffff;
        }

        button:first-child {
            float: left;
            width: 38%;
            border: 1px solid #939393;
            color: zCl;
        }

        button:last-child {
            float: right;
            width: 55%;
            background-color: #2166ff;
            color: #ffffff;
        }
    }
}
</style>


