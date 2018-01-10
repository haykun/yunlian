<template>
  <div class="check">
    <div class="header">
      <div class="hed">查单</div>
      <div class="serch">
        <input type="text" placeholder="请输入关键字">
      </div>
    </div>

      <div class="content">
        <p>起始时间：2017年12月31</p>
        <p>截止时间：2018年01月11</p>
        <button>查询</button>
      </div>
      <app-footer></app-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerVisible: {
        year: "2017",
        mouth: "12",
        date: "12"
      }
    };
  },
  methods: {}
};
</script>

<style lang="stylus" scoped>
@import '../../components/stylus/mixins.styl';

zCL = #383838;

.check {
  width: 100%;
  margin-top: px2rem(220px);

  // 头部搜索框
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #08132a;

    .hed {
      width: 100%;
      height: px2rem(90px);
      line-height: px2rem(90px);
      text-align: center;
      color: #ffffff;
      font-size: 18px;
    }

    .serch {
      padding: px2rem(20px);
      box-sizing: border-box;

      input {
        width: 100%;
        height: px2rem(90px);
        box-sizing: border-box;
        padding-left: px2rem(40px);
        border-radius: px2rem(10px);
        font-size: 15px;
      }
    }
  }

  // 内容区域
  .content {
    padding: 0 px2rem(20px);
    padding-top: px2rem(40px);
    box-sizing: border-box;
    color: zCL;

    p:first-child {
      font-size: 18px;
      font-weight: 550;
    }

    p:nth-child(2) {
      margin-top: px2rem(40px);
      font-size: 18px;
      font-weight: 550;
    }

    button {
      width: 100%;
      height: px2rem(80px);
      line-height: px2rem(80px);
      text-align: center;
      background-color: #0f1a30;
      margin-top: px2rem(100px);
      color: #ffffff;
      border-radius px2rem(15px)
    }
  }
}
</style>


