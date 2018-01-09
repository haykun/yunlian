<template>
  <div class="aside">
      <div class="main">
        <!-- 司机信息 -->
        <div class="user">
            <div class="photo">
                <img src="" alt="">
            </div>
            <div class="information">
                <div class="usname">
                    <span>老司机</span>
                    <button>修改</button>
                </div>
                <div class="phone">
                    <p>158******566</p>
                </div>
            </div>
        </div>
        <!-- 菜单栏 -->
        <div class="renwu">
            <ul>
                <li>
                    <router-link to="/history">
                        <img src="../../assets/img/侧边栏-我的/icn_task.png" alt=""><span>历史任务</span>
                    </router-link>
                    
                </li>
                <li>
                    <router-link to="/wayall">
                        <img src="../../assets/img/侧边栏-我的/icn_order.png" alt=""><span>运单管理</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
                            <img src="../../assets/img/侧边栏-我的/icn_account.png" alt=""><span>我的账户</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/help">
                        <img src="../../assets/img/侧边栏-我的/icn_help.png" alt=""><span>帮助中心</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
                        <img src="../../assets/img/侧边栏-我的/inc_Shopping.png" alt=""><span>积分商城</span>
                    </router-link>
                </li>   
                <li>
                    <router-link to="/setup">
                        <img src="../../assets/img/侧边栏-我的/icn_set.png" alt=""><span>设置</span>
                    </router-link>
                </li>
            </ul>
        </div>
      </div>
      <div class="zezhao" @click="$store.state.toggleaside = !$store.state.toggleaside"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
@import '../stylus/mixins.styl';

// 菜单导航栏背景色
bg-col = #ffffff;
col = #383838;

.aside {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    box-sizing: border-box;
    height 100%
    width 100%
    overflow hidden
    display flex
    .main {
        width: px2rem(500px);
        height: 100%;
        background-color bg-col
    }

    // 司机信息
    .user {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        box-sizing: border-box;
        height: px2rem(338px);
        overflow hidden
        background-image url('../../assets/img/侧边栏-我的/background01.png') 
        background-size 100% 
        // 头像
        .photo {
            position: absolute;
            bottom: px2rem(83px);
            left: px2rem(40px);
            width: px2rem(140px);
            height: px2rem(140px);
            border-radius: 50%;
            background-color: #ffffff;
            img {
                width: 100%;
                height: 100%;
            }
        }

        // 信息
        .information {
            position: absolute;
            bottom: px2rem(100px);
            left: px2rem(200px);
            color: #ffffff;
            font-size: 18px;

            .usname button {
                font-size: 10px;
                background-color: rgba(0, 0, 0, 0);
                border-radius: px2rem(10px);
                padding: px2rem(2px) px2rem(8px);
                border: 1px solid #ffffff;
                text-align: center;
                color: #ffffff;
            }

            .phone {
                margin-top: px2rem(20px);
            }
        }
    }

    // 菜单导航栏
    .renwu {
        height: 100%;
        background-color: bg-col;
        box-sizing border-box
        ul li {
            font-size: 20px;
            margin-top: px2rem(50px);
            margin-left: px2rem(40px);
            span {
                margin-left: px2rem(26px);
                color: col;
            }
        }
    }

    //遮罩层
    .zezhao{
        flex 1
        width 100%
        height 100%
    }
}
</style>


