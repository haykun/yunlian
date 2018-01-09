<template>
  <div class="canvas" @touchstart="isshow = false">
		<vueSignature ref="signature" :sigOption="option" :w="'100%'" :h="'100%'"></vueSignature> 
        <span v-show="isshow">手写签名</span>
        <div class="but" v-if="qianfa">
            <button @click="save">确认发货</button>
        </div>
        <div class="bnt" v-if="fahuo">
          <button @click="save">确认发货</button>
          <button @click="$store.state.dropBox = true">拍照留证</button>
        </div>
        <transition name="fade">
          <app-drop v-show="$store.state.dropBox"></app-drop>
        </transition>
        <div class="zezhao" v-show="$store.state.dropBox"></div>

        
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import DropCompontent from "../../components/peisong/dropdown.vue";

export default {
  props:['fahuo','qianfa'],
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
    },
    photo() {
      this.sheetVisible = true;
    }
  },
  components: {
    'app-drop':DropCompontent
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
  background-color: #ffffff;

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

  .bnt {
    position: absolute;
    bottom: px2rem(40px);
    left: 0;
    padding: 0 px2rem(20px);
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;

    button {
      width: 48%;
      height: px2rem(80px);
      line-height: px2rem(80px);
      border-radius: px2rem(10px);
      color: #ffffff;
      font-size: 18px;
    }

    button:first-child {
      float: left;
      background-color: bg-col;
    }

    button:last-child {
      float: right;
      background-color: #061128;
    }
  }
}

.zezhao {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
}
//控制弹框操作
.fade-enter-active {
	transition: all 0.5s;
}

.fade-leave-active {
	transition: all 0.5s;
}

.fade-enter {
	transform: translateY(100%);
}

.fade-leave-to {
	transform: translateY(100%);
}


</style>

