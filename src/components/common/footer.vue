<template>
  <div class="foot">
      <ul>
          <li>
              <router-link to="/task">
                  <img :src="$store.state.home" alt="">
                  <p>首页</p>
              </router-link>
          </li>
          <li>
              <router-link to="/uate">
                  <img :src="$store.state.query" alt="">
                  <p>查单</p>
              </router-link>
          </li>
          <li>
              <router-link to="/me">
                  <img :src="$store.state.my" alt="">
                  <p>我的</p>
              </router-link>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
@import '../stylus/mixins.styl';

.foot {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;
    height: px2rem(98px);
    width: 100%;
    box-sizing: border-box;
    background-color: #ffffff;

    ul {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;

        li {
            flex: 1;
            text-align: center;

            a {
                width: 100%;
                height: 100%;
            }
        }

        li:nth-child(2) {
            a {
                position: absolute;
                top: px2rem(-50px);
                left: 50%;
                transform: translateX(-50%);
                width: px2rem(148px);
                height: px2rem(148px);
                border-radius: 50%;
                background-color: #ffffff;

                img {
                    margin-top: px2rem(30px);
                }
            }
        }
    }
}
</style>


