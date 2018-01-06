<template>
  <div class="pinglun">
      <!-- 人物评价 -->
      <div class="character">
          <div @click="togglerole(0)"><span>收货人评价<i></i></span></div>
          <div @click="togglerole(1)"><span>发货人评价<i></i></span></div>
      </div>
      <!-- 评价程度 -->
      <div class="evaluate">
          <ul>
              <li @click="toggleatti(0)">全部（4）</li>
              <li @click="toggleatti(1)">满意（2）</li>
              <li @click="toggleatti(2)">不满意（0）</li>
          </ul>
      </div>
      <!-- 评论详情 -->
      <div class="main">
          <div class="people">
              <img src="../../assets/img/icn_dis@3x.png" alt=""><span>A**K</span>
          </div>
          <div class="time">
              <span>2017-09-07</span>
          </div>
          <div class="text">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non voluptatibus accusantium ab aliquam amet impedit ullam nesciunt reiciendis, minima rerum assumenda, distinctio tempora eveniet excepturi illo suscipit repudiandae minus in! </p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    //角色评价切换
    togglerole(inx) {
      let roles = document.querySelectorAll(".character div");
      let spn = document.querySelectorAll(".character i");
      for (var i = 0; i < roles.length; i++) {
        roles[i].style.fontWeight = "normal";
        spn[i].style.display = "none";
      }
      roles[inx].style.fontWeight = "bold";
      spn[inx].style.display = "block";
    },
    //满意程度切换
    toggleatti(id) {
      let atti = document.querySelectorAll(".evaluate li");
      // console.log(atti)
      for (var i = 0; i < atti.length; i++) {
        atti[i].style.backgroundColor = "#fff";
        atti[i].style.color = "#383838";
      }
      atti[id].style.backgroundColor = "#061128";
      atti[id].style.color = "#fff";
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../stylus/mixins.styl';

zCl = #383838; // 字体颜色
bodCl = #061128; // 评论线框颜色

.pinglun {
    width: 100%;
    margin-bottom: px2rem(98px);
    // 角色评价
    .character {
        overflow: hidden;
        height: px2rem(88px);
        line-height: px2rem(88px);

        div {
            position: relative;
            width: 50%;
            color: zCl;
            font-size: 15px;
            font-weight: bold;
            text-align: center;

            i {
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                height: px2rem(8px);
                width: 35%;
                background-color: bodCl;
            }
        }

        div:first-child {
            float: left;
        }

        div:last-child {
            float: right;
            font-weight: normal;

            i {
                display: none;
            }
        }
    }

    // 满意程度
    .evaluate {
        padding: 0 px2rem(20px);
        height: px2rem(60px);
        line-height: px2rem(60px);
        margin-top: px2rem(20px);

        ul {
            width: 100%;
            overflow: hidden;
            border: 1px solid bodCl;
            box-sizing: border-box;
            border-radius: px2rem(10px);

            li {
                width: 33.333%;
                float: left;
                text-align: center;
                font-size: 13px;
                border-right: 1px solid bodCl;
                box-sizing: border-box;
                color: zCl;
            }

            li:last-child {
                border: none;
            }

            li:first-child {
                color: #ffffff;
                background-color: bodCl;
            }
        }
    }

    // 评论详情
    .main {
        width: 100%;
        padding: px2rem(30px) px2rem(20px);
        box-sizing: border-box;
        border-bottom: 1px solid #cccccc;

        .people {
            img {
                width: px2rem(40px);
                height: px2rem(40px);
                border-radius: 50%;
            }

            span {
                font-size: 15px;
                color: zCl;
                margin-left: px2rem(16px);
            }
        }

        .time {
            color: #999;
            font-size: 9px;
        }

        .text {
            font-size: 12px;
            color: zCl;
        }
    }
}
</style>


