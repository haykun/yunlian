<template>

    <main>

			<scroller :on-refresh="refresh" :on-infinite="infinite" :loadingLayerColor="bgCol"></scroller>
		<!-- 头部 -->
        <app-header></app-header> 
		<transition name="move">
			<app-aside v-show="$store.state.toggleaside"></app-aside>
		</transition>
		<!-- 遮罩层 -->
		<div class="ceng" v-show="$store.state.toggleaside"></div>
        <div class="content">
			<!-- tab栏切换 -->
            <div class="tap">

					<router-link to="/task">
               
						新任务
						<span></span>
				
					</router-link>
					<router-link to="/estate">

						配送中
						<span></span>

					</router-link>
					<router-link to="/usual">
						异常单
						<span></span>
					</router-link>

            </div>
        </div>
		<!-- 主体内容区域 -->
		<div class="main">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<app-footer></app-footer>
    </main>

</template>

<script>
export default {
  data() {
    return {
			bgCol:'#383838'
		};
  },
  methods: {
    //   切换导航栏
    clk1(index) {
      let arr = document.querySelectorAll(".tap span");
      let arr1 = document.querySelectorAll(".tap a");
      for (var i = 0; i < arr.length; i++) {
        arr[i].style.display = "none";
        arr1[i].style.fontWeight = "normal";
      }
      arr[index].style.display = "block";
      arr1[index].style.fontWeight = "bold";
    },
    navToggle() {
      if (this.$route.name == "task") {
        this.clk1(0);
      } else if (this.$route.name == "esate") {
        this.clk1(1);
      } else {
        this.clk1(2);
      }
		},
		refresh(){
			console.log(1)
		},
		infinite(){
			console.log(2)
		}
  },
  watch: {
    $route() {
			this.navToggle();
    }
  },
  mounted() {
    this.navToggle();
  }
};
</script>

<style lang="stylus" scoped>
@import '../../components/stylus/mixins.styl';

// 头部tab栏
bg-col = #101a30;

.content {
	margin-top: px2rem(-2px);
	overflow: hidden;

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
}

.ceng {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 5;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.2);
}

.move-enter-active {
	transition: all 1s;
}

.move-leave-active {
	transition: all 1s;
}

.move-enter {
	transform: translateX(-100%);
}

.move-leave-to {
	transform: translateX(-100%);
}
</style>

