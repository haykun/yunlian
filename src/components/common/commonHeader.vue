<template>
  <div class="comhed">
      <span @click="backnone"> <i class="iconfont icon-back"></i> {{ operation }}</span>
      <h2>{{ name }}</h2>
      <span v-if="flag"><i class="iconfont icon-more"></i></span>
  </div>
</template>  

<script>
export default {
    props:['name','operation','flag'],
    methods: {
        backnone(){
            this.$router.go(-1);
        }
    }
};
</script>

<style lang="stylus" scoped>
@import '../stylus/mixins.styl';

// @import './iconfont.css'
bgCol = #061128;

.comhed {
    position: relative;
    width: 100%;
    height: px2rem(80px);
    line-height: px2rem(80px);
    background-color: bgCol;
    overflow: hidden;
    color: #ffffff;
    font-size: 15px;

    h2 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        font-size: 15px;
        font-weight: normal;
    }

    span:first-child {
        float: left;
    }

    span:last-child {
        float: right;
        margin-right: px2rem(20px);
        font-weight: bold;
    }
}
</style>


