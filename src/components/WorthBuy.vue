<template>
  <div>
    <!-- //触底加载插件element ui -->
    <div
      class="swiper-wrapperr infinite-list"
      infinite-scroll-disabled="busy"
      v-infinite-scroll="load"
       infinite-scroll-distance="50"
      style="overflow: auto"
    >
      <div class="m-swiperTab-container">
        <div class="m-swiperTab-title">
          <img src="../../public/img/buylogo.png" class="u-title" />
          <div class="u-text">严选好物 用心生活</div>
          <img src="../../public/img/topic_title_bg.png" class="u-bg" />
        </div>
        <div class="u-swiperPage swiper-container">
          <!-- 白底整体 -->
          <div class="swiper-wrapper">
            <div
              class="u-group swiper-slide"
              v-for="(item, index) in oddPicList"
              :key="item.id"
            >
              <div class="u-item">
                <img :src="item.picUrl" class="u-topPic" />
                <div class="u-mainText">{{ item.mainTitle }}</div>
                <div class="u-descText">{{ item.viceTitle }}</div>
              </div>
              <div class="u-item">
                <img :src="unevenPicList[index].picUrl" class="u-topPic" />
                <div class="u-mainText">
                  {{ unevenPicList[index].mainTitle }}
                </div>
                <div class="u-descText">
                  {{ unevenPicList[index].viceTitle }}
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-pagination" slot="pagination">
            <span></span><span></span><span></span><span></span>
          </div>
        </div>
      </div>
      <!-- 下面用户 -->
      <div v-if="lookWrapper.length != 0">
        <div class="m-lookList">
          <div class="m-lookColumn">
            <div class="m-lookImageWrapper">
              <img :src="lookWrapper[0].newAppBanner" />
              <div class="lookImageWrapper-text">
                {{ lookWrapper[0].title }}
              </div>
              <div class="lookImageWrapper-user">
                <img :src="lookWrapper[0].avatar" />&nbsp;
                <span>{{ lookWrapper[0].nickname }}</span
                ><span class="span-r"
                  ><span>&#xe602;</span>{{ lookWrapper[0].readCount }}</span
                >
              </div>
            </div>
            <!-- 左边循环 -->
            <div
              class="m-lookImageWrapper"
              v-for="item in updateWrapperLeft"
              :key="item.topicId"
            >
              <img :src="item.picUrl" />
              <div class="lookImageWrapper-text">
                {{ item.title }}
              </div>
              <div class="lookImageWrapper-user">
                <img :src="item.avatar" />&nbsp; <span>{{ item.nickname }}</span
                ><span class="span-r"
                  ><span>&#xe602;</span>{{ item.readCount }}</span
                >
              </div>
              <div v-if="item.buyNow">
                {{ item.buyNow.itemName }}
              </div>
            </div>
          </div>

          <div class="m-lookColumn">
            <div class="m-lookImageWrapper">
              <img :src="lookWrapper[1].picUrl" />
              <div class="lookImageWrapper-text">
                <span>{{ lookWrapper[1].title }}</span>
              </div>
              <div class="lookImageWrapper-user">
                <img :src="lookWrapper[1].avatar" />&nbsp;
                <span>{{ lookWrapper[1].nickname }}</span
                ><span class="span-r"
                  ><span>&#xe602;</span>{{ lookWrapper[1].readCount }}</span
                >
              </div>
            </div>
            <!-- 右边循环 -->
            <div
              class="m-lookImageWrapper"
              v-for="item in updateWrapperRight"
              :key="item.topicId"
            >
              <img :src="item.picUrl" />
              <div class="lookImageWrapper-text">
                {{ item.title }}
              </div>
              <div class="lookImageWrapper-user">
                <img :src="item.avatar" />&nbsp; <span>{{ item.nickname }}</span
                ><span class="span-r"
                  ><span>&#xe602;</span>{{ item.readCount }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>
<script>
import Swiper from "swiper";
import { GetWorthBuyPic } from "@/api/method";
import service from "@/api/request";
import bottom from './bottom.vue';
export default {
  components: { bottom },
  name: "worthbuy",
  data() {
    return {
      PicList: [],
      unevenPicList: [],
      oddPicList: [],
      lookWrapper: [],
      updateWrapperLeft: [],
      updateWrapperRight: [],
      num: 0,
      // count: 0
      busy: false,
    };
  },
  methods: {
    //触底回弹
    load() {
      // this.count += 6
      this.busy = true;
      this.num++;
      var that = this;
      
      function GetWorthBuyBottom(data) {
        return service.request({
          method: "post",
          url:
            "/item/topic/v1/find/recAuto.json?page=" +
            that.num +
            "&size=2&exceptIds=119144,119146",
          data,
        });
      }
      GetWorthBuyBottom().then((response) => {
        this.busy = false;
        response.data.data.result[0].topics.forEach((item) => {
          this.updateWrapperLeft.push(item);
        });
        response.data.data.result[1].topics.forEach((item) => {
          this.updateWrapperRight.push(item);
        });
      });
    },
  },
  mounted() {
    GetWorthBuyPic().then((response) => {
      var PicList = response.data.data.navList;
      
  
      this.oddPicList = PicList.filter(
        (item) => item.rank <= PicList.length / 2
      );
      this.unevenPicList = PicList.filter(
        (item) => item.rank > PicList.length / 2
      );
    });
    //固定中间请求
    function GetWorthBuyCenter(data) {
      return service.request({
        method: "get",
        url: "/item/topic/v1/find/recManual.json",
        data,
      });
    }
    GetWorthBuyCenter().then((response) => {      
      this.lookWrapper = response.data.data[0].topics;
      this.lookWrapper.forEach(item=>{
          if(parseInt(item.readCount)>1000){
            var str=item.readCount.toString()
             item.readCount=str.substring(0,str.length-3)+'k'
          }
      })
    });
    //滑块
    var mySwiper = new Swiper(".swiper-container", {
      loop: false, // 循环模式选项
      speed: 500, //切换时长
      slidesPerView: 4,
      observer: true,
      observeParents: true,
      autoplay: {
        delay: 1000, //自动切换延时
        stopOnLastSlide: false, //如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）。
        disableOnInteraction: false, //用户操作swiper之后，是否禁止autoplay。默认为true：停止。
      },
      pagination: {
        el: ".swiper-pagination",
        // clickable:true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};
</script>
<style  lang='less'>
@font-face {
  font-family: "iconfont"; /* project id 2329520 */
  src: url("//at.alicdn.com/t/font_2329520_23crdiexgha.eot");
  src: url("//at.alicdn.com/t/font_2329520_23crdiexgha.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_2329520_23crdiexgha.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_2329520_23crdiexgha.woff") format("woff"),
    url("//at.alicdn.com/t/font_2329520_23crdiexgha.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_2329520_23crdiexgha.svg#iconfont") format("svg");
}
.span-r span {
  font-family: "iconfont" !important;
  font-size: 30px;
  vertical-align: middle;
}
.swiper-wrapperr {
  width: 750px;
  height: 1334px;
  background-color: #eeeeee;
  .m-swiperTab-container {
    width: 750px;
    height: 685px;
    position: relative;
    .u-swiperPage {
      width: 710px;
      margin-left: 20px;
      height: 540px;
      border-radius: 20px;
      display: flex;
      flex-wrap: nowrap;
      overflow: hidden;
      position: absolute;
      background-color: white;
      top: 150px;
      .u-group {
        width: 177px;
        height: 470px;
        flex-shrink: 0;
        text-align: center;
        .u-item {
          padding-top: 35px;
          .u-topPic {
            width: 126px;
            height: 126px;
          }
          .u-mainText {
            font-size: 28px;
            font-weight: bold;
          }
          .u-descText {
            font-size: 20px;
            color: #999999;
          }
        }
      }
      .swiper-pagination {
        text-align: center;
        width: 100%;
        height: 30px;
        line-height: 0px;
        .swiper-pagination-bullet {
          // margin-left: 5px;
          margin-left: -4px;
          width: 45px;
          height: 5px;
          border-radius: 0;
        }
        .swiper-pagination-bullet-active {
          background-color: red;
        }
      }
    }
  }
}
.m-swiperTab-title {
  height: 518px;
  width: 750px;
  .u-bg {
    height: 518px;
    width: 750px;
  }
  .u-title {
    height: 69px;
    width: 130px;
    position: absolute;
    top: 60px;
    left: 10px;
  }
  .u-text {
    position: absolute;
    top: 80px;
    left: 145px;
    color: white;
    font-size: 30px;
  }
}
.m-lookList {
  // height: auto;
  overflow-y: scroll;
  width: 710px;
  margin-top: 30px;
  margin-left: 20px;
  display: flex;
  justify-content: space-around;

  .m-lookColumn {
    width: 335px;
    height: auto;
    font-size: 22px;
    border-radius: 10px;
    // position: unset;
    .m-lookImageWrapper {
      background-color: white;
      border-radius: 20px;
      img {
        width: 335px;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
      }
      .lookImageWrapper-user {
        width: 315px;
        margin: 25px auto;
        color: #7f7f7f;

        height: 80px;
        line-height: 80px;
        img {
          width: 48px;
          border-radius: 50%;
          vertical-align: middle;
        }
        .span-r {
          float: right;
        }
      }
      .lookImageWrapper-text {
        width: 315px;
        font-size: 28px;
        margin: 15px auto;
        overflow: hidden; /*必须结合的属性,当内容溢出元素框时发生的事情*/
        text-overflow: ellipsis; /*可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 。*/
        display: -webkit-box; /*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。*/
        -webkit-line-clamp: 2; /*用来限制在一个块元素显示的文本的行数。*/
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>