<template>
  <div class="uate">
    <app-comhed :name="name" :operation="operation" :flag="false"></app-comhed>
    <div class="user">
      <div class="hed">
        <img src="../../assets/img/pic_my.png" alt="">
        <div class="name">
          <p>张司机</p>
          <p>粤S6598</p>
        </div>
      </div>
      <div class="star">
        <!-- 评价控件 -->
        <app-star :size="{ type : 4 }" :score="{ type : 4 }" ></app-star>
        <p>点这里，为运输服务满意度评分</p>
      </div>
    </div>
    <div class="text">
      <textarea placeholder="对车主意见描述"></textarea>
    </div>
    <div class="but">
      <button>提交评价</button>
    </div>

  </div>
</template>

<script>
import Star from "../../components/peisong/star.vue";
export default {
  data() {
    return {
      name: "评价",
      operation: ""
    };
  },
  components: {
    "app-star": Star
  }
};
</script>


<style lang="stylus" scoped>
@import '../../components/stylus/mixins.styl';

rdCl = #ececec; // 边框颜色
ZCL = #383838; // 字体颜色
bgl = #0f1a30; // 按钮颜色

.uate {
  width: 100%;
  height: 100%;

  .user {
    position: relative;
    padding: px2rem(30px);
    box-sizing: border-box;
    height: px2rem(160px);
    overflow: hidden;

    .hed {
      float: left;
      font-size: 15px;
      color: ZCL;

      img {
        width: px2rem(100px);
        height: px2rem(100px);
        border-radius: 50%;
        background-color: hotpink;
      }

      .name {
        float: right;
        margin-left: px2rem(20px);

        p:last-child {
          border: 1px solid rdCl;
          text-align: center;
          padding: 0 px2rem(4px);
          font-size: 12px;
          margin-top: px2rem(10px);
        }
      }
    }

    .star {
      position: absolute;
      right: px2rem(110px);
      top: 50%;
      transform: translateY(-50%);

      // height: px2rem(160px);
      p {
        font-size: 9px;
        color: #dcdcdc;
      }
    }
  }

  .text {
    margin-top: px2rem(50px);
    width: 100%;
    height: px2rem(500px);
    padding: 0 px2rem(20px);
    box-sizing: border-box;

    textarea {
      width: 100%;
      height: 100%;
      border: 1px solid rdCl;
      padding: px2rem(20px);
    }
  }

  .but {
    position: absolute;
    bottom: px2rem(100px);
    left: 0;
    padding: 0 px2rem(20px);
    height: px2rem(80px);
    width: 100%;
    line-height: px2rem(80px);
    box-sizing border-box

    button {
      width: 100%;
      height: 100%;
      text-align: center;
      color: #ffffff;
      font-size: 15px;
      background-color: #0f1a30;
      border-radius px2rem(12px)
    }
  }
}
</style>
