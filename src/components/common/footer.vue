<template>
  <div class="foot">
      <ul>
          <li>
              <router-link to="/">
                  <img src="../../assets/img/footer/foot_home_d.png" alt="">
                  <p>首页</p>
              </router-link>
          </li>
          <li>
              <router-link to="/">
                  <img src="../../assets/img/footer/foot_home_d.png" alt="">
                  <p>查单</p>
              </router-link>
          </li>
          <li>
              <router-link to="/me">
                  <img src="../../assets/img/footer/foot_home_d.png" alt="">
                  <p>我的</p>
              </router-link>
          </li>
      </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
@import '../stylus/mixins.styl'

.foot {
    position fixed
    bottom 0
    left 0
    z-index 2
    height: px2rem(98px);
    width 100%
    box-sizing border-box
    background-color #ffffff
    ul {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display flex
        li {
            flex 1
            text-align: center;
        }
    }
}
</style>


