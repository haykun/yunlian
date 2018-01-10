<template>
<div>
    <app-login></app-login>
    <div class="login">
    
    <div class="logon">
        <img src="../../assets/img/icn_logo@2x.png">
    </div>
    <div class="inpt">
        <div class="int1">
            <span>手机号</span>
            <input type="text" placeholder="输入手机号码">
        </div>
        <div class="int2">
            <span>验证码</span>
            <input type="text" placeholder="输入验证码">
            <button v-if="flag" @click="code" :disabled="!flag">获取验证码</button>
            <dd class="munt" v-if="!flag">{{ time }}</dd>
        </div>
    </div>
    <div class="point">
        <span>收不到短信?</span>
        <a href="javascript:;">点击获取语言验证码</a>
    </div>
    <div class="but">
        <button @click="logi">登录</button>
    </div>
</div>
</div>

    
</template>

<script>
export default {
  data() {
    return {
      flag: true,
      time: ""
    };
  },
  methods: {
    logi() {
      // 通过路由跳转页面的两种方式
      // this.$router.push('/task');   //会有历史记录
      this.$router.replace("/task"); //不会有历史记录
      // console.log(location.host);
    },
    // 获取验证码
    code() {
      this.time = 60;
      this.flag = !this.flag;
      var laoz = setInterval(() => {
        if (this.time <= 0) {
          this.flag = true;
          clearInterval(laoz);
        }
        this.time = --this.time;
      }, 1000);
    }
  }
};
</script>

<style scoped lang="stylus">
@import '../../components/stylus/mixins.styl';

.login {
    margin-top: px2rem(80px);
    text-align: center;

    .logon img {
        width: px2rem(182px);
    }
}

// 输入框
col = #383838;

.inpt {
    margin-top: px2rem(100px);
    padding: 0 px2rem(60rem);

    div {
        position: relative;
        top: 0;
        left: 0;
        overflow: hidden;
    }

    input {
        width: 100%;
        height: px2rem(80px);
        line-height: px2rem(80px);
        padding-left: px2rem(100px);
        border: none;
        border-bottom: 1px solid #d9d9d9;
        font-size: 15px;
    }

    span {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-60%);
        font-size: 15px;
        font-weight: 500;
    }

    .int2 {
        margin-top: px2rem(50px);

        button {
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            border: 1px solid #d9d9d9;
            font-size: 12px;
            border-radius: px2rem(2px);
            background-color: #fff;
            color: col;
            padding: px2rem(5px);
        }

        .munt {
            position: absolute;
            top: 50%;
            right: 0;
            width: px2rem(120px);
            transform: translateY(-50%);
            border: 1px solid #d9d9d9;
            font-size: 12px;
            border-radius: px2rem(4px);
            background-color: #fff;
            color: col;
        }
    }
}

// 提示
.point {
    width: 100%;
    margin-top: px2rem(30px);
    font-size: 12px;
    text-align: center;
    color: col;

    a {
        color: #3070ff;
    }
}

// 登录按钮
bg-col = #2166ff;

.but {
    width: 100%;
    margin-top: px2rem(40px);

    button {
        width: px2rem(630px);
        height: px2rem(80px);
        line-height: px2rem(80px);
        background-color: bg-col;
        color: #ffffff;
        font-size: 15px;
        border-radius: px2rem(10px);
    }
}
</style>



