<template>
  <div class="detail">
      <!-- 头部 -->
      <app-comhed :name="headerName" :operation="operation" :flag="false"></app-comhed>
      <div class="status">
          <div>状态：<span>待接单</span></div>
          <div>联系人：<span><img src="">张小姐</span></div>
          <div><img src="">12-01 20:00</div>
          <div><img src="">12-20 19:00</div>
          <div>备注：请按时发货</div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerName: "任务详情",
      operation: ""
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../../components/stylus/mixins.styl';

bgCol = #ececec;

.detail {
    background-color: bgCol;
    width: 100%;
    height: 100%;

    .status {
    }
}
</style>


