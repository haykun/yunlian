<template>
  <div class="waybill">
      <app-comhed :name="headerName" :operation = "operation" :flag = "false"></app-comhed>
      <div class="header">
          	<!-- tab栏切换 -->
            <div class="tap">
                <router-link to="/wayall" @click.native="clk1(0)">
                    全部<span></span>
                </router-link>
                <router-link to="/waynot" @click.native="clk1(1)">
                    未签收<span></span>
                </router-link>
                <router-link to="/wayyes" @click.native="clk1(2)">
                    已签收<span></span>
                </router-link>
            </div>
      </div>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import CardCompontent from "../../components/waybill/card.vue";
export default {
    data () {
        return {
            headerName:'运单管理',
            operation:''
        }
    },
  components: {
    "way-card": CardCompontent
  },
  methods: {
    clk1(index) {
      let arr = document.querySelectorAll(".tap span");
      let arr1 = document.querySelectorAll(".tap a")
      for (var i = 0; i < arr.length; i++) {
        arr[i].style.display = "none";
        arr1[i].style.fontWeight = 'normal';
      }
      arr[index].style.display = "block";
      arr1[index].style.fontWeight = 'bold';
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../components/stylus/mixins.styl';
// 头部tab栏
bg-col = #101a30;
// tab栏切换
.tap {
    position: fixed;
    top: px2rem(70px);
    left: 0;
    z-index: 2;
    width: 100%;
    box-sizing: border-box;
    background-color: bg-col;
    height: px2rem(80px);
    line-height: px2rem(80px);
    text-align: center;
    padding: 0 px2rem(60px);
    overflow: hidden;

    a {
        position: relative;
        top: 0;
        left: 0;
        color: #ffffff;
        font-size: 15px;
        display: inline-block;
        width: px2rem(122px);
        text-align: center;
    }

    a span {
        position: absolute;
        bottom: px2rem(-1px);
        left: 0;
        content: '';
        background-color: #ffffff;
        display: inline-block;
        height: px2rem(8px);
        width: 100%;
        display: none;
    }

    a:first-child {
        float: left;

        span {
            display: block;
        }
    }

    a:last-child {
        float: right;
    }
}
</style>


