<template>
  <!-- 签收弹框 -->
  <div class="modify" @click.self="$store.state.modifyBox = false">
      <div class="card">
          <div class="title">发货实际信息</div>
          <div class="main">
              <ul>
                  <li><input type="text">件</li>
                  <li><input type="text">方</li>
                  <li><input type="text">吨</li>
              </ul>
          </div>
          <div class="but">
              <button @click="modify">确认修改</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        // 修改货物信息提交
        modify(){
            this.$store.state.modifyBox = false
        }
    }
};
</script>

<style lang="stylus" scoped>
@import '../stylus/mixins.styl';

til-col = #061128;
zCl = #383838;
bord-CL = #2166ff;

.modify {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    z-index: 11;
    background-color: rgba(0, 0, 0, 0.3);

    .card {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        z-index: 22;
        width: px2rem(640px);
        height: px2rem(320px);
        border-radius: px2rem(20px);
        overflow: hidden;
        background-color #ffffff

        .title {
            height: px2rem(70px);
            width: 100%;
            background-color: til-col;
            font-size: 15px;
            color: #ffffff;
            text-align: center;
            line-height: px2rem(70px);
        }

        .main {
            width: 100%;

            ul {
                overflow: hidden;
                margin-top: px2rem(30px);
            }

            li {
                float: left;
                font-size: 15px;
                padding-left: px2rem(20px);
                color: zCl;

                input {
                    display: inline-block;
                    width: px2rem(80px);
                    height: px2rem(50px);
                    font-size: 15px;
                    margin-left: px2rem(10px);
                    color: zCl;
                }
            }
        }

        .but {
            position: absolute;
            left: 0;
            bottom: px2rem(40px);
            box-sizing: border-box;
            padding: 0 px2rem(30px);
            width: 100%;

            button {
                width: 100%;
                height: px2rem(60px);
                line-height: px2rem(60px);
                text-align: center;
                background-color: bord-CL;
                color: #ffffff;
                font-size: 15px;
                border-radius: px2rem(10px);
            }
        }
    }
}
</style>


