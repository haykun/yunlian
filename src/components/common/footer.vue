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
              <router-link to="/">
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
    position: fixed;
    bottom: 0;
    left: 0;
    height: px2rem(98px);

    ul {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        li {
            display: inline-block;
            width: 33.333%;
            text-align: center;
        }
    }
}
</style>


