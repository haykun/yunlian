<template>

    <main>
        <app-header></app-header>
        <div class="content">
					<!-- tab栏切换 -->
            <div class="tap">
                <ul>
                    <li @click="clk1(0)">
						<router-link to="/task">新任务</router-link>
						<span></span>
					</li>
                    <li @click="clk1(1)">
						<router-link to="/estate">配送中</router-link>
						<span></span>
					</li>
                    <li @click="clk1(2)">
						<router-link to="/usual">异常单</router-link>
						<span></span>
					</li>
                </ul>
            </div>
        </div>
		<div class="main">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
    </main>

</template>

<script>
export default {
  data() {
    return {
      
    };
	},
	methods: {
		clk1(index){
			let arr = document.querySelectorAll('.tap li span')
			for(var i =0;i<arr.length;i++){
				arr[i].style.display = 'none'
			}
			arr[index].style.display = 'block'
		}
	}
};
</script>

<style lang="stylus" scoped>
@import '../../components/stylus/mixins.styl';

// 头部tab栏
bg-col = #101a30;

.content {
	margin-top px2rem(-2px)
	//tab栏切换
	.tap {
		background-color: bg-col;
		height: px2rem(80px);
		line-height: px2rem(80px);
		text-align: center;
		padding: 0 px2rem(60px);

		li {
			position: relative;
			top: 0;
			left: 0;
			display: inline-block;
			width: px2rem(122px);
			text-align: center;
			a{
				color: #ffffff;
				font-size: 15px;
			}
		}

		li span {
			position: absolute;
			bottom: px2rem(-1px);
			left: 0;
			content: '';
			background-color: #ffffff;
			display: inline-block;
			height: px2rem(8px);
			width: 100%;
			display none
		}

		li:first-child {
			float: left;
			span {
				display block
			}
		}

		li:last-child {
			float: right;
		}
	}
}
</style>

