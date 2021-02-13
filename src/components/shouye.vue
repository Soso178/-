<template>
  <div>
    <div class="g-bd">
      <div class="hdWraper">
        <img src="@/assets/logo.png" />
        <div class="m-topSearchIpt" @click="search">
          <span>&#xe67c;</span><span>搜索商品，共51937款好物</span>
        </div>
        <div class="topSearchIpt" @click="enter">登录</div>
      </div>
      <div class="haha">
        <div class="list swiper-container">
          <div class="All" v-if="!isflag1">全部频道</div>
          <div class="swiper-wrapper" v-show="isflag1">
            <div
              class="txt swiper-slide"
              :class="{ active: current == 10 }"
              @click="tabtoggle(10)"
            >
              <span class="tuijian">推荐</span>
            </div>
            <div
              class="tab swiper-slide"
              v-for="(item, index) in TabList"
              @click="tabtoggle(index)"
              :class="{ active: current == index }"
              :key="item.id"
            >
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
        <div class="toggle" >
          <span class="icon"  @click="toggle" :class="{ t1: isflag }">&#xe61a;</span>
        </div>
      </div>
      <div class="Alltab" v-show="!isflag1">
        <div
          class="tabs"
          :class="{ active1: current == 10 }"
          @click="tabtoggle(10)"
        >
          推荐
        </div>
        <div
          class="tabs1"
          v-for="(item, index) in TabList"
          :key="item.id"
          @click="tabtoggle(index)"
          :class="{ active1: current == index }"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="shadow" v-if="isflag"></div>
    </div>
    <!-- 变化区域 -->
    <div class="lunbo swiper-container1">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="item in lunboList"
          :key="item.materialContentFrom"
        >
          <img :src="item.picUrl" />
        </div>
      </div>
      <div class="ab swiper-pagination" slot="pagination">
        <span></span><span></span><span></span><span></span>
      </div>
    </div>
    <div class="m-indexServicePolicy">
      <ul class="g-grow">
        <li><span>&#xe666;</span> 网易自营品牌</li>
        <li><span>&#xe609;</span> 30天无忧退货</li>
        <li><span>&#xe615;</span> 48小时快速退款</li>
      </ul>
    </div>
    <div class="m-carousel">
      <div class="tip" v-for="item in carousel" :key="item.picUrl">
        <img :src="item.picUrl" />
        <p>{{ item.text }}</p>
      </div>
    </div>
    <div class="updown" v-if="floorList[0]">
      <div class="floortop">
        <img :src="floorList[0].cells[0].picUrl" />
      </div>
      <div class="promItem">
        <img :src="floorList[1].cells[0].picUrl" />
      </div>
      <div class="promItem">
        <img :src="floorList[1].cells[1].picUrl" />
      </div>     
    </div>
    <div class="m-freshmanModule">
      <div class="moduleTitle">新人专享礼</div>
      <div class="content">
        <div class="left1">
          <div class="name">新人专享礼包</div>
          <img src="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png">
        </div>
        <div class="right1" v-if='newList[0]'>
          <div class="m-activityItem">
            <div class="cnt">
            <div class="title">{{newList[0].title}}</div>
            <div class="subTitle">{{newList[0].subTitle}}</div>
            </div>
            <div class="m-lazyload"><img :src="newList[0].showPicUrl"></div>
            <div class="discount"><span>{{newList[0].activityPrice}}</span><p>{{newList[0].originPrice}}</p></div>
          </div>
          <div class="m-activityItem">
            <div class="cnt">
            <div class="title">{{newList[1].title}}</div>
            <div class="subTitle" style="backgroundColor:#CBB693;color:white;text-align:center">{{newList[1].tag}}</div>
            </div>
            <div class="m-lazyload"><img :src="newList[1].showPicUrl"></div>
            <div class="discount"><span>{{newList[1].activityPrice}}</span><p>{{newList[1].originPrice}}</p></div>
          </div>
        </div>
      </div>
    </div>
    <div class="hengxian"></div>
    <div class="m-categoryHotSellModule">
      <div class="moduleTitle">类目热销榜</div>
      <div class="content">
        <div class="line1">
          <div class="item-big" v-for="item in hottwolist" :key='item.categoryName'>
            <div class="txt">{{item.categoryName}}</div>
            <div class="image"><img :src="item.showPicUrl"></div>
          </div>
        </div>
        <div class="line2">
          <div class="item" v-for="item in hotList" :key="item.categoryName">
            <p>{{item.categoryName}}</p>
            <img :src='item.showPicUrl'>
          </div>
        </div>
      </div>
    </div>
    <div class="hengxian"></div>
  <div class="newproduct">
    <div class="txt">新品首发<div class="ag">更多<span>&#xe6b0;</span></div></div>
    <div class="content">
      <div class="item" v-for='item in newproList' :key='item.simpleDesc'>
        <div class="image"><img :src="item.listPicUrl"></div>
        <div class="name">{{item.simpleDesc}}</div>
        <div class="priceInner">￥{{item.retailPrice}}</div>
        <div class="tag" v-if='item.itemTagList[1]!=null'><span>{{item.itemTagList[1].name}}</span></div>
      </div>
    </div>
  </div>
  <div class="hengxian"></div>
  <div class="jingxuan">
    <div class="item" v-for="item in sceneList" :key='item.itenForm'>
      <div class="cnt">
        <div class="title">{{item.styleItem.title}}</div>
        <div class="pie">{{item.styleItem.desc}}</div>
      </div>
      <div class="image">
        <img :src="item.styleItem.picUrlList[0]">
        <img :src="item.styleItem.picUrlList[1]">
      </div>
    </div>
  </div>
  <div class="hengxian"></div>
  <div class="m-ftWrap">
    <div class="btn">
      <div>下载APP</div>
      <div>电脑版</div>
    </div>
    <div class="txt">
        网易公司版权所有 © 1997-<br>
        食品经营许可证：JY13301080111719
    </div>
  </div>
    <bottom></bottom>
  </div>
</template>
<script>
import Swiper from "swiper";
import Bottom from "./bottom.vue";
import { GetIndex, GetLunbo } from "@/api/method";
export default {
  methods: {},
  data() {
    return {
      TabList: [],
      isflag: false,
      isflag1: true,
      lunboList: [],
      carousel: [],
      floorList: [],
      newList:[],
      hotList:[],
      hottwolist:[],
      newproList:[],
      sceneList:[],
      current: 10,
    };
  },
  methods: {
    toggle(index) {
      this.isflag = !this.isflag;
      this.isflag1 = !this.isflag1;
    },
    tabtoggle(index) {
      this.current = index;
    },
    search(){
      this.$router.push('/search')
    },
    enter(){
      this.$router.push('/login')
    },
  },
  mounted() {
    GetIndex().then((response) => {
      this.TabList = response.data.data.cateList;
    });
    GetLunbo().then((response) => {
      this.lunboList = response.data.data.data.focusList;
      this.carousel = response.data.data.data.kingKongModule.kingKongList;
      this.floorList = response.data.data.data.bigPromotionModule.floorList;
      this.newList=response.data.data.data.indexActivityModule
      this.newproList=response.data.data.data.newItemList.slice(0,6)
      var hotList=response.data.data.data.categoryHotSellModule.categoryList
      this.sceneList=response.data.data.data.sceneLightShoppingGuideModule
      this.hottwolist=hotList.slice(0,2)
      this.hotList=hotList.slice(2.8) 
    });
    var mySwiper = new Swiper(".swiper-container", {
      loop: false, // 循环模式选项
      speed: 0, //切换时长
      slidesPerView: 4,
      spaceBetween: 10,
      observer: true,
      observeParents: true,
    });
    var mySwiper1 = new Swiper(".swiper-container1", {
      loop: false, // 循环模式选项
      speed: 1000, //切换时长
      slidesPerView: 1,
      observer: true,
      observeParents: true,
      autoplay: {
        delay: 2000, //自动切换延时
        stopOnLastSlide: false, //如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）。
        disableOnInteraction: false, //用户操作swiper之后，是否禁止autoplay。默认为true：停止。
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
  components: { Bottom },
};
</script>
<style  lang="less">
@font-face {
  font-family: 'iconfont';  /* project id 2326857 */
  src: url('//at.alicdn.com/t/font_2326857_oh2krjfw4pe.eot');
  src: url('//at.alicdn.com/t/font_2326857_oh2krjfw4pe.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2326857_oh2krjfw4pe.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2326857_oh2krjfw4pe.woff') format('woff'),
  url('//at.alicdn.com/t/font_2326857_oh2krjfw4pe.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2326857_oh2krjfw4pe.svg#iconfont') format('svg');
}
.bottom {
  width: 100% !important;
}
.m-topSearchIpt span,
.toggle .icon,.newproduct .txt span{
  font-family: "iconfont" !important;
}
.g-grow li span {
  font-family: "iconfont" !important;
  color: red;
}
.newproduct .txt span{
  font-family: "iconfont" !important;
  color: #767676;
}
.g-bd {
  // padding: 0 30px;  
  .hdWraper {
    position: fixed;
    // top: 100px;
    width: 98%;
    top: 0;
    padding: 12px;
    padding-top: 20px;
    z-index: 99;
    background-color: white;
    display: flex;
    align-items: center;
    img {
      width: 140px;
      height: 45px;
    }
    .m-topSearchIpt {
      flex: 1;
      text-align: center;
      margin: 0 20px;
      background-color: #ededed;
      border-radius: 10px;
      span {
        line-height: 55px;
        font-size: 28px;
        color: #767676;
      }
    }
    .topSearchIpt {
      width: 74px;
      height: 40px;
      margin-right: 20px;
      text-align: center;
      font-size: 24px;
      color: red;
      line-height: 40px;
      border: 1px solid red;
      border-radius: 10px;
    }
  }
  .Alltab {
    height: 322px;
    width: 100% !important;
    position: fixed;
    top:140px;
    float: left;
    display: flex;
    flex-wrap: wrap;
    padding-left: 37px;
    text-align: center;
    padding-top: 20px;
    background-color: white;
    z-index: 99;
    .tabs,
    .tabs1 {
      width: 150px;
      height: 56px;
      margin-right: 19.2px;
      font-size: 24px;
      border-radius: 5px;
      border: 1px solid gainsboro;
      // border: 1px solid red;
      line-height: 56px;
      z-index: 99;
    }
  }
  .shadow {
    position: fixed;
    margin-top: -20px;
    width: 100%;
    height: 860px;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .list {
    position: fixed;
    top: 72px;
    z-index: 99;
    background-color: white;
    padding-top: 20px;
    width: 90%;
    float: left;
    .All {
      height: 50px;
      padding-left: 40px;
      font-size: 28px;
    }
    .swiper-wrapper {
      text-align: center;
      padding-left: 30px;
      .txt {
        font-size: 28px;
        width: 100px !important;
        padding-bottom: 10px;
      }
      .tab {
        font-size: 28px;
        padding-bottom: 10px;
      }
    }
  }
  .toggle {
    width: 10.5%;
    position: fixed;
    background-color: white;
    right: 0px;
    z-index: 99;
    top: 71.5px;
    text-align: center;
    line-height: 73px;
    font-size: 35px;
    float: right;
    span {
      transition: 0.5s;
      display: block;
    }
  }
}
.active {
  border-bottom: 5px solid red;
  color: red;
}
.Alltab .active1 {
  border: none;
  border: 1px solid red !important;
  border-radius: 50px;
  color: red;
}
.t1 {
  transform-origin: center center;
  transform: rotateZ(180deg);
}
.lunbo {
  width: 100%;
  position: absolute;
  top: 145px;
  z-index: -1;
  overflow: hidden;
  display: flex;
  .swiper-wrapper {
    div {
      width: 100%;
      img {
        width: 100%;
        height: 300px;
      }
    }
  }
  .swiper-pagination {
    margin-bottom: 15px;
    span {
      display: inline-block;
      height: 7px;
      outline: none;
      width: 40px;
      border-radius: 0;
      background-color: white;
      margin-left: 15px;
    }
  }
}
.m-indexServicePolicy {
  // padding-bottom: 10px;
  width: 100%;
  margin-top: 470px;
  .g-grow {
    list-style: none;
    li {
      float: left;
      margin-left: 40px;
    }
  }
}
.m-carousel {
  width: 98%;
  margin-left: 15px;
  padding-top: 20px;
  height: 350px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-content: space-around;
  justify-content: space-around;
  .tip {
    width: 110px;
    height: 156px;
    margin-right: 19px;
    img {
      width: 110px;
      height: 110px;
    }
    p {
      margin-top: 5px;
    }
  }
}
.updown {
  .floortop {
    padding-top: 10px;
    width: 100%;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
  .promItem {
    float: left;
    background-color: #eeeeee;
    margin-top: -5px;
    padding-top: 20px;
    padding-right: 17.5px;
    padding-left: 20px;
    padding-bottom: 30px;
      width: 45%;
      img{
        width: 100%;
      }
    }
}
.m-freshmanModule{
  margin-top: 230px;
  height: 560px;
  position: relative;
  .moduleTitle{
    height: 90px;
    font-size: 32px;
    text-align: center;
    line-height: 90px;
    // height: 110px;
  }
  .moduleTitle::before{
    content: '';
    width: 24px;
    height: 3px;
    background-color: black;
    position: absolute;
    top: 43px;
    left: 260px;
  }
  .moduleTitle::after{
    content: '';
    width: 24px;
    height: 3px;
    background-color: black;
    position: absolute;
    top: 43px;
    right: 260px;
  }
  .content{    
    width: 93.5%;
    margin:0 auto;
    .left1{
      float: left;
      font-size: 32px;
      padding: 30px 0 0 30px;
      background-color: #f9e9cf;
      width: 313px;
      height: 404px;
      border-radius: 5px;
      img{
        width: 258px;
        height: 258px;
        margin: 50px 0 0 15px;
      }
    }
    .right1{
      height: 430px;
      .m-activityItem:first-child{
        background-color: #FBE2D3;
      }
      .m-activityItem:last-child{
        background-color: #FFECC2
      }
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 10px;
      float: left;
      .m-activityItem{
        border-radius: 5px;
        position: relative;
        width: 348px;
        height: 210px;
        .m-lazyload{
          width: 200px;
          height: 200px;
          float: right;
          img{
            width: 200px;
            height: 200px;
          }
        }
        .cnt{
          float: left;
          padding: 20px 0 0 20px;
          width: 128px;
          .title{
            font-size: 32px;
          }
          .subTitle{
            color: gray;
            
          }
        }
        .discount{
          position: absolute;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: #F7A644;
          opacity: 0.8;
          left: 240px;
          top: 20px;
          padding-top: 10px;
          text-align: center;
          span{
            font-size: 24px;
            color: white;
          }
          p{
             font-size: 20px;
             text-decoration: line-through;
             color: white;
          }
        }
      }
    }
  }
}
.hengxian{
  height: 20px;
  background-color: #efefef;
}
.m-categoryHotSellModule{
  padding: 0 30px 30px 30px;
  .moduleTitle{
    font-size: 32px;
    
    line-height: 90px;
  }
  .content{
    .line1{
      .item-big:first-child{
        background-color: #f9f3e4;
      }
      .item-big:last-child{
        background-color: #ebeff6;
      }
      display: flex;
      justify-content: space-between;
      .item-big{
        position: relative;
        width: 49%;
        height: 200px;
        line-height: 170px;
        .txt{
          font-size: 28px;
          float: left;
          padding-left: 20px;
        }
        .txt::before{
          content: '';
          position: absolute;
          top: 120px;
          width: 50px;
          height: 5px;
          background-color: black;
        }
        .image{
          float: right;
          img{            
            width: 200px;
            height: 200px;
          }
        }
      }
    }
    .line2{
      height: 350px;
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: space-between;
      .item{
        width: 23.5%;
        height: 170px;
        background-color: #f5f5f5;
        font-size: 24px;
        text-align: center;
        p{
          padding-top: 10px;
        }
        img{
          width: 120px;
          height: 120px;
        }
      }
    }
  }
}
.newproduct{
  padding: 0 30px;
  .txt{
    font-size: 32px;
    line-height: 100px;
    .ag{
      float: right;
      line-height: 100px;
      font-size: 28px;
    }
  }
  .content{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item{
      width: 32%;
      height: 440px;
      .image{
        background-color: #f5f5f5;
        img{
          width: 216px;
          height: 216px;
        }
      }
      .name{
        font-size: 24px;
      }
      .priceInner{
        font-size: 32px;
        color: red;
      }
      .tag{
        span{
        font-size: 18px;
        color: red;
        border-radius:30px;
        border: 1px solid red;
        padding: 2px 10px;
        }
      }
    }
  }
}
.jingxuan{
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  .item{
    background-color: #f5f5f5;
    width: 46.5%;
    padding: 20px 0 0 20px;
    .cnt{
      .title{
        font-size: 32px;
      }
      .pie{
        font-size: 24px;
        color: #767676;
      }
    }
    .image{
      img{
        width: 150px;
        height: 150px;
      }
    }
  }
}
.m-ftWrap{
  height: 340px;
  background-color: #414141;
  .btn{
    width: 55%;
    height: 64px;
    margin: 0px auto;
    padding-top: 50px;
    background-color: #414141;
    display: flex;
    justify-content: space-between;
    div{
      width: 42%;
      text-align: center;
      line-height: 64px;
      border: 1px solid white;
      color: white;
    }
  }
  .txt{
    text-align: center;
    color: gray;
    margin-top: 30px;
  }
}
</style>