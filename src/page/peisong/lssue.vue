<template>
  <div class="lssue">
      <!-- 头部 -->
     <app-comhed :name="headerName" :operation = "operation"></app-comhed>
      <!-- 用户信息 -->
      <div class="user">
          <div class="img">
              <img src="" alt="">
          </div>
          <div class="usname">
              <ul>
                  <li>车牌号：粤A68458</li>
                  <li>司机：老司机</li>
                  <li>手机：16848522499</li>
              </ul>
          </div>
      </div>
      <!-- 货物信息 -->
      <div class="information">
          <table>
              <tr>
                  <td>始发地</td>
                  <td>货物类型</td>
                  <td>计划发货</td>
                  <td>实际发货</td>
              </tr>
              <tr>
                  <td>花都仓库</td>
                  <td>汽车配件</td>
                  <td>2件3方1吨</td>
                  <td>2件3方1吨<img src="../../assets/img/icn_modify.png"></td>
              </tr>
              <tr>
                  <td>花都仓库</td>
                  <td>汽车配件</td>
                  <td>2件10方1吨</td>
                  <td>2件10方1吨<img src="../../assets/img/icn_modify.png"></td>
              </tr>
          </table>
      </div>
      <!-- 表单提交 -->
      <div class="form">
          <div>
              <span>发货人姓名：</span>
              <input type="text" placeholder="请输入发货人姓名">
          </div>
          <div>
              <span>身份证号码：</span>
               <input type="text" placeholder="请输入你的身份证号码">
          </div>
         
          <div>
              <span>验证码:</span>
              <input type="text" placeholder="输入验证码">
              <button @click="verification">获取验证码</button>
          </div>
      </div>
      <!-- 签名版 -->
      <app-canvas></app-canvas>
  </div>
</template>

<script>
import canvas from "../../components/peisong/canvas.vue";

export default {
  data() {
    return {
      username: "",
      usercode: "",
      code: "",
      headerName: "签发",
      operation:'返回'
    };
  },
  components: {
    "app-canvas": canvas
  },
  methods: {
    //获取验证码事件
    verification() {
      console.log(1);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../components/stylus/mixins.styl';

bg-col = #061128;
zCl = #383838;

字体颜色, .lssue {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    // 头部
    .header {
        width: 100%;
        height: px2rem(80px);
        background-color: bg-col;
    }

    // 用户信息
    .user {
        position: relative;
        width: 100%;
        background-color: #ffffff;
        height: px2rem(168px);
        overflow: hidden;
        color: zCl;

        // 头像
        .img {
            position: absolute;
            top: 50%;
            left: px2rem(40px);
            transform: translateY(-50%);
            width: px2rem(140px);
            height: px2rem(140px);
            border-radius: 50%;
            background-color: skyblue;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .usname {
            position: absolute;
            top: 50%;
            left: px2rem(200px);
            transform: translateY(-50%);
            font-size: 15px;
        }
    }

    // 货物信息
    .information {
        width: 100%;
        font-size: 12px;

        table {
            width: 100%;
            text-align: center;
            border-bottom: 1px solid #d9d9d9;
        }

        tr {
            display: flex;
            height: px2rem(60px);
            line-height: px2rem(60px);

            td {
                box-sizing: border-box;
                border-right: 1px solid #dedede;
            }

            td:first-child {
                width: px2rem(166px);
            }

            td:nth-child(2) {
                width: px2rem(166px);
            }

            td:nth-child(3) {
                width: px2rem(210px);
            }

            td:last-child {
                width: px2rem(212px);

                img {
                    margin-bottom: px2rem(8px);
                    margin-left: px2rem(6px);
                }
            }
        }

        tr:first-child {
            background-color: bg-col;
            color: #ffffff;

            td {
                border-right: 1px solid #ffffff;
            }
        }

        tr:nth-child(2) {
            border-bottom: 1px solid #dedede;
        }
    }

    // 表单提交
    .form {
        margin-top: px2rem(20px);
        width: 100%;
        color: zCl;

        div {
            position: relative;
            font-size: 15px;
            color: zCl;

            input {
                width: 100%;
                height: px2rem(80px);
                box-sizing: border-box;
                border-top: 1px solid #d9d9d9;
                font-size: 15px;
                padding-left: px2rem(200px);
            }

            span {
                position: absolute;
                top: 50%;
                left: px2rem(20px);
                transform: translateY(-50%);
            }

            button {
                position: absolute;
                right: 0;
                top: 0;
                width: px2rem(202px);
                height: 100%;
                line-height: 100%;
                font-size: 12px;
                background-color: bg-col;
                text-align: center;
                color: #ffffff;
            }
        }

        div:last-child {
            border-bottom: 1px solid #d9d9d9;

            input {
                height: px2rem(96px);
                padding-left: px2rem(140px);
            }
        }
    }
}
</style>


