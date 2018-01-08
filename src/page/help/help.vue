<template>
  <div class="help">
      <app-comhed :name="headername" :operation="operation" :flag="false"></app-comhed>
      <div class="common">
        <h2>常见问题</h2>
        <ul>
            <li>
                <router-link to="/"><img src="../../assets/img/icn_dis.png" alt=""> 配送相关问题<i class="iconfont icon-enter"></i></router-link>
            </li>
            <li>
                <router-link to="/"><img src="../../assets/img/icn_way.png" alt=""> 运单申诉相关问题<i class="iconfont icon-enter"></i></router-link>
            </li>
            <li>
                <router-link to="/"><img src="../../assets/img/icn_abn.png" alt=""> 异常问题处理<i class="iconfont icon-enter"></i></router-link>
            </li>
        </ul>
      </div>
      <div class="more">
          <h2>更多问题分类</h2>
          <ul>
              <li>
                  <router-link to="/">
                      <p>APP使用问题</p>
                      <p>账号登录等问题</p>
                  </router-link>
              </li>
              <li>
                  <router-link to="/">
                      <p>意外事故及保险</p>
                      <p>保险内容、事故处理等</p>
                  </router-link>
              </li>
          </ul>
          <ul>
              <li>
                  <router-link to="/">
                      <p>APP使用问题</p>
                      <p>账号登录等问题</p>
                  </router-link>
              </li>
              <li>
                  <router-link to="/">
                      <p>意外事故及保险</p>
                      <p>保险内容、事故处理等</p>
                  </router-link>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headername: "帮助中心",
      operation: ""
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../../components/stylus/mixins.styl';

zCL = #383838;

// 常见问题
.common {
    width: 100%;
    box-sizing: border-box;

    h2 {
        font-size: 15px;
        color: #939393;
        height: px2rem(70px);
        line-height: px2rem(70px);
        font-weight: normal;
        padding-left: px2rem(20px);
        border-bottom: 1px solid #d9d9d9;
    }

    ul {
        width: 100%;
        padding-left: px2rem(20px);
        box-sizing: border-box;
        border-bottom: 1px solid #d9d9d9;

        li {
            border-bottom: 1px solid #d9d9d9;
            width: 100%;
            height: px2rem(100px);

            a {
                display: inline-block;
                overflow: hidden;
                width: 100%;
                height: px2rem(100px);
                line-height: px2rem(100px);
                color: zCL;
                font-size: 15px;

                i {
                    float: right;
                    margin-right: px2rem(20px);
                }
            }
        }

        li:last-child {
            border: none;
        }
    }
}

// 更多问题分类
.more {
    width: 100%;

    h2 {
        width: 100%;
        padding-left: px2rem(20px);
        font-size: 15px;
        font-weight: normal;
        color: #939393;
        border-bottom: 1px solid #d9d9d9;
        height: px2rem(70px);
        line-height: px2rem(70px);
        box-sizing: border-box;
    }

    ul {
        width: 100%;
        // box-sizing border-box
        overflow: hidden;

        li {
            width: 50%;
            float: left;
            box-sizing: border-box;
            text-align: center;
            height: px2rem(150px);
            position: relative;
            border-bottom: 1px solid #d9d9d9;
            border-left: 1px solid #d9d9d9;
            padding-top px2rem(30px)
            p:first-child {
                font-size: 15px;
                color: zCL;
            }

            p:last-child {
                font-size: 12px;
                color: #939393;
            }

        }
    }
}
</style>


