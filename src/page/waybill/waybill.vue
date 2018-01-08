<template>
  <div class="waybill">
      <app-header></app-header>
      <div class="header">
          			<!-- tab栏切换 -->
            <div class="tap">

					<router-link to="/task" @click.native="clk1(0)">
               
						全部
						<span></span>
				
					</router-link>
					<router-link to="/estate" @click.native="clk1(1)">

						未签收
						<span></span>

					</router-link>
					<router-link to="/usual" @click.native="clk1(2)">
						已签收
						<span></span>
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
  components: {
    "way-card": CardCompontent
  },
  methods: {
    clk1(index) {
      let arr = document.querySelectorAll(".tap span");
      for (var i = 0; i < arr.length; i++) {
        arr[i].style.display = "none";
      }
      arr[index].style.display = "block";
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../components/stylus/mixins.styl';

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


