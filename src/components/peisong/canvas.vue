<template>
  <div class="canvas" @touchstart="isshow = false">
		<vueSignature ref="signature" :sigOption="option" :w="'100%'" :h="'100%'"></vueSignature> 
        <span v-show="isshow">手写签名</span>
        <div class="but">
            <button @click="save">确认发货</button>
        </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      option: {
        penColor: "#000"
      },
      isshow: true
    };
  },
  methods: {
    save() {
      var _this = this;
      var png = _this.$refs.signature.save();
      _this.$refs.signature.clear();
      Toast({
        message: "操作成功"
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../stylus/mixins.styl';

bg-col = #2166ff;

.canvas {
  width: 100%;
  height: px2rem(550px);
  position: relative;
  border-top: 1px solid #d9d9d9;
  margin-top: px2rem(42px);

  span {
    position: absolute;
    top: px2rem(20px);
    left: px2rem(20px);
    font-size: 15px;
    color: #d9d9d9;
  }

  .but {
    position: absolute;
    bottom: px2rem(40px);
    left: 0;
    padding: 0 px2rem(60px);
    width: 100%;
    box-sizing: border-box;

    button {
      width: 100%;
      height: px2rem(80px);
      line-height: px2rem(80px);
      background-color: bg-col;
      border-radius: px2rem(10px);
      color: #ffffff;
      font-size: 18px;
    }
  }
}
</style>

