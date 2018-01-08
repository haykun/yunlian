<template>
  <div class="set">
      <app-comhed :name="headerName" :operation = "operation" :flag = "false"></app-comhed>
      <div class="form">
          <div class="photo">
              <router-link to="/">
                <span>头像</span>
                <span><img src="" alt=""><i class="iconfont icon-enter"></i></span>
              </router-link>
          </div>
          <div class="name">
              <router-link to="/">
                <span>姓名</span>
                <span>老司机<i class="iconfont icon-enter"></i></span>
              </router-link>
          </div>
          <div class="gender">
              <router-link to="/">
                <span>性别</span>
                <span>男<i class="iconfont icon-enter"></i></span>
              </router-link>
          </div>
          <div class="jiashi">
                <span>驾驶证</span>
                <span>548***54</span>
          </div>
          <div class="phone">
              <router-link to="/">
                <span>手机号码</span>
                <span>134****2258<i class="iconfont icon-enter"></i></span>
              </router-link>
          </div>
          <div class="card">   
                <span>身份证号</span>
                <span>4419**********1589</span>
          </div>
      </div>
      <div class="back" @click="back">退出登录</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerName: "设置",
      operation: ""
    };
  },
  methods: {
    back() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../components/stylus/mixins.styl';

zCl = #383838;

.set {
    width: 100%;

    // 用户表单
    .form {
        width: 100%;
        margin-top: px2rem(20px);
        padding-left: px2rem(20px);
        border-bottom: 1px solid #d9d9d9;

        div {
            width: 100%;
            height: px2rem(100px);
            line-height: px2rem(100px);
            box-sizing: border-box;

            a {
                display: inline-block;
                width: 100%;
                height: 100%;
                font-size: 15px;
                overflow: hidden;
                border-bottom: 1px solid #d9d9d9;
                // padding-right: px2rem(20px);
                box-sizing: border-box;
            }
        }

        div:first-child {
            height: px2rem(140px);
            line-height: px2rem(140px);
        }

        span:first-child {
            float: left;
            color: zCl;
        }

        span:last-child {
            float: right;
            color: #939393;
            margin-right: px2rem(20px);
        }

        .jiashi, .card {
            border-bottom: 1px solid #d9d9d9;
            font-size: 15px;
            padding-right: px2rem(20px);
            box-sizing: border-box;
        }

        .card {
            border: none;
        }
    }

    // 退出登录
    .back {
        margin-top: px2rem(140px);
        font-size: 15px;
        color: zCl;
        text-align: center;
        height: px2rem(100px);
        line-height: px2rem(100px);
        box-sizing: border-box;
        border-top: 1px solid #d9d9d9;
        border-bottom: 1px solid #d9d9d9;
    }
}
</style>


