<template>
  <div class="lssue">
      <!-- 头部 -->
      <div class="header"></div>
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
          <mt-field label="发货人姓名:" placeholder="请输入发货人姓名" v-model="username"></mt-field>
          <mt-field label="身份证号码:" placeholder="请输入你的身份证号码" v-model="usercode"></mt-field>
          <mt-field label="验证码:" placeholder="请输入用户名" v-model="code"></mt-field>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      usercode: "",
      code: ""
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../../components/stylus/mixins.styl';

bg-col = #061128;

.lssue {
    width: 100%;
    box-sizing: border-box;

    // 头部
    .header {
        width: 100%;
        height: px2rem(80px);
        background-color: bg-col;
    }
    //用户信息
    
}
</style>


