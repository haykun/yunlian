<template>

    <main>
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

					<router-link to="/task" @click.native="clk1(0)">
               
						新任务
						<span></span>
				
					</router-link>
					<router-link to="/estate" @click.native="clk1(1)">

						配送中
						<span></span>

					</router-link>
					<router-link to="/usual" @click.native="clk1(2)">
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
    return {};
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

// 头部tab栏
bg-col = #101a30;

.main {
	background-color: #ececec;
}

.content {
	margin-top: px2rem(-2px);

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

