<template>
  <div class="code">
      <div class="box">
          <div class="title"><h4>扫码签发</h4><i class="iconfont icon-close" @click="codeShow"></i></div>
          <div class="main">
              <vue-q-art :config="config"></vue-q-art>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      config: {
        value: "https://www.tengxun.com",
        imagePath: require("../../assets/img/code.jpg"),
        filter: 'skyblue',
        size:100
      }
    };
  },
  methods: {
    codeShow() {
      this.$store.state.codeShow = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../stylus/mixins.styl';

.code {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.3);

    .box {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: px2rem(440px);
        height: px2rem(500px);
        border-radius: px2rem(30px);
        overflow: hidden;

        .title {
            height: px2rem(70px);
            line-height: px2rem(70px);
            text-align: center;
            background-color: #061128;
            color: #ffffff;
            box-sizing: border-box;

            h4 {
                color: #ffffff;
                display: inline-block;
                font-size: 18px;
                font-weight: normal;
            }

            i {
                float: right;
                margin-right: px2rem(30px);
                font-size: 18px;
            }
        }

        .main {
            width: 100%;
            height: px2rem(430px);
            padding 0 px2rem(10px)
            padding-left px2rem(14px)
            box-sizing: border-box;
            background-color: #ffffff;
        }
    }
}
</style>

