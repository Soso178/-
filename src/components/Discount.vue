<template>
  <div>
    <top></top>
    <div class="m-couponActivateForm">
      <div class="m-ipt">
        <input type="text" placeholder="请输入优惠码" />
      </div>
      <div class="btn">兑换</div>
    </div>
    <div class="instructions">
      <span>&#xe63c; </span><label>使用说明</label>
    </div>
    <div class="coupons-wrap">
      <ul class="m-couponList">
        <li class="item" v-for="item in DisList" :key="item.id">
          <div class="tag">
            <div class="tag-money">
              <span>{{ item.cash }}</span
              >元
            </div>
            <div class="tag-time">
              <span>{{ item.name }}</span
              ><br /><span class="tag-timer">{{ item.timeDesc }}</span>
            </div>
          </div>
          <div class="couponLine"></div>
          <div class="bottom1" :class="{box:item.buttonFlag}">
            <!-- <div class="useCondition"> -->
            <span class="txt" :class="{content:item.buttonFlag}">{{ item.useCondition }}</span>
            <span class="u-icon" @click='exhibition(item.id)' :class="{rotate:item.buttonFlag}">&#xe61a;</span>
            <!-- </div>              -->
          </div>
          <div class="title">新人专享</div>
        </li>
      </ul>
    </div>
    <div class="coupon-titleWrap">
       <div class="coupon-line"><hr></div> 
       <div class="coupon-title">已失效</div>
    </div>
    <div class="coupons-wrap">
      <ul class="m-couponList">
        <li class="item" v-for="item in unDisList" :key="item.id">
          <div class="tag tagpast">
            <div class="tag-money">
              <span>{{ item.cash }}</span
              >元
            </div>
            <div class="tag-time">
              <span>{{ item.name }}</span
              ><br /><span class="tag-timer">{{ item.timeDesc }}</span>
            </div>
          </div>
          <div class="couponLine couponLinepast"></div>
          <div class="bottom1 bottom1past" :class="{box:item.buttonFlag}">
            <!-- <div class="useCondition"> -->
            <span class="txt" :class="{content:item.buttonFlag}">{{ item.useCondition }}</span>
            <span class="u-icon" @click='exhibition(item.id)' :class="{rotate:item.buttonFlag}">&#xe61a;</span>
            <!-- </div>              -->
          </div>
          <div class="title titlepast">新人专享</div>
        </li>
      </ul>
    </div>
  </div>
  
</template>
<script>
import Top from "@/components/Top.vue";
export default {
  name: "Discount",
  data() {
    return {
      DisList: [
        {
          id: 1,
          cash: 25,
          buttonFlag:false,
          hasCoupon: false,
          name: "满299减25",
          timeDesc: "2021.01.22-2021.01.24",
          unit: "元",
          usable: false,
          useCondition:
            "新用户专享；全场通用；限时购、特价等特惠商品不可使用；严选线下店不可用限时购、特价等特惠商品，新品及详情页标注不可用券的商品除外;严选线下门店不可用",
        },
        {
          id: 2,
          cash: 25,
          buttonFlag:false,
          hasCoupon: false,
          name: "满299减25",
          timeDesc: "2021.01.22-2021.01.24",
          unit: "元",
          usable: false,
          useCondition:
            "新用户专享；全场通用；限时购、特价等特惠商品不可使用；严选线下店不可用限时购、特价等特惠商品，新品及详情页标注不可用券的商品除外;严选线下门店不可用",
        },
      ],
      unDisList: [
        {
          id: 3,
          cash: 25,
          buttonFlag:false,
          hasCoupon: false,
          name: "满299减25",
          timeDesc: "2021.01.17  已过期",
          unit: "元",
          usable: false,
          useCondition:
            "新用户专享；全场通用；限时购、特价等特惠商品不可使用；严选线下店不可用限时购、特价等特惠商品，新品及详情页标注不可用券的商品除外;严选线下门店不可用",
        },
      ],
    };
  },
  methods:{
    exhibition(id){
      if(this.DisList.filter((item) => item.id == id)[0])
      this.DisList.filter((item) => item.id == id)[0].buttonFlag = !this.DisList.filter(
        (item) => item.id == id
      )[0].buttonFlag;
      else{
        this.unDisList.filter((item) => item.id == id)[0].buttonFlag = !this.unDisList.filter(
        (item) => item.id == id
      )[0].buttonFlag;
    }
      }
  },
  components: {
    Top,
  },
};
</script>
<style scoped lang='less'>
@font-face {
  font-family: "iconfont"; /* project id 2329520 */
  src: url("//at.alicdn.com/t/font_2329520_swbv1hst6q.eot");
  src: url("//at.alicdn.com/t/font_2329520_swbv1hst6q.eot?#iefix")
    format("embedded-opentype"),
    url("//at.alicdn.com/t/font_2329520_swbv1hst6q.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_2329520_swbv1hst6q.woff") format("woff"),
    url("//at.alicdn.com/t/font_2329520_swbv1hst6q.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_2329520_swbv1hst6q.svg#iconfont") format("svg");
}
.bottom1 .u-icon,.instructions span {
  font-family: "iconfont" !important;
  font-size: 28px;
}
* {
  padding: 0;
  margin: 0;
}
.m-couponActivateForm {
  width: 684px;
  height: 74px;
  padding: 20px 33px;
  .m-ipt {
    width: 472px;
    height: 70px;
    border: 1px solid #d9d9d9;
    line-height: 70px;
    box-sizing: border-box;
    text-align: center;
    border-radius: 10px;
    float: left;
    input {
      width: 448px;
      height: 40px;
      color: #999999;
      font-size: 30px;
      border: none;
      outline: none;
    }
  }
  .btn {
    width: 168px;
    height: 74px;
    background-color: #cccccc;
    color: white;
    float: right;
    font-size: 30px;
    line-height: 74px;
    text-align: center;
    border-radius: 10px;
  }
}
.instructions {
  width: 720px;
  height: 40px;
  padding: 20px 30px 20px 0;
  line-height: 40px;
  text-align: right;
  font-size: 24px;
  color: #9c9c9c;
  background-color: #eeeeee;
}
.coupons-wrap {
  width: 750px;
  background-color: #eeeeee;
  .m-couponList {
    width: 750px;
    list-style: none;
    
    .item {
      width: 690px;
      margin: auto;
      // height: 256px;      
      position: relative;
      
      .tag {
        width: 690px;
        height: 131px;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        background-color: #e1ba75;
        padding-top: 40px;
        .tag-money {
          width: 216px;
          height: 130px;
          float: left;
          color: white;
          font-size: 36px;
          text-align: center;
          line-height: 130px;
          span {
            font-size: 64px;
          }
        }
        .tag-time {
          width: 429px;
          float: left;
          font-size: 28px;
          color: white;
          margin-top: 25px;
          .tag-timer {
            font-size: 20px;
          }
        }
      }
      .tagpast{
      background-color: #b7bbc3;
      }
      .couponLine {
        width: 690px;
        height: 7px;            
            background: #c9a667;
            background-image: radial-gradient(5px at 7px 7px, transparent, transparent, transparent, transparent, #e1ba75);
            background-size: 14px 14px;
            background-repeat: repeat-x;
            background-position: 0px 0px;
      }
      .couponLinepast{
        background: #a9acb3;
        // background-image-color:reda9acb3
        background-image: radial-gradient(5px at 7px 7px, transparent, transparent, transparent, transparent,#b7bbc3);
        background-size: 14px 14px;
            background-repeat: repeat-x;
            background-position: 0px 0px;
      }
      .box{
        height: auto;
      }
      .bottom1 {
        width: 650px;
        // height: 54px;
        font-size: 24px;
        background-color: #c9a667;
        padding:20px 0 20px 40px;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        .txt { 
          color: white;
          width: 540px;
          display: block;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .content{
          overflow: visible;
          white-space: pre-wrap;
          text-overflow: none;
          height: auto;          
        }
        .u-icon{
            display: block;
            width: 30px;
            position: absolute;
            top: 200px;
            left: 620px;
            color: white;
            transform-origin: center center;
            transition: 0.5s;
            transform: rotateZ(0deg);
        }
        .rotate{          
          transform: rotateZ(180deg);         
        }
      }
      .bottom1past{
        background-color: #a9acb3;
      }
      .title{
          position: absolute;
          width: 112px;
          height: 32px;
          background-color: #a58143;
          top:10px;
          left: -10px;
          border-radius: 5px;
          color:white;
          text-align: center;
      }
      .titlepast{
        background-color: #a2a5ae;
      }
    }
    
    .item:not(:first-child){
      margin-top: 30px;
    }
  }
}
.coupon-titleWrap{
  width: 750px;
  height: 50px;
  padding-top: 50px;
  background-color: #eeeeee;
  position: relative;
  .coupon-line{
    width: 690px;
    margin: 0 auto;
    hr{
      border:1px solid #d9d9d9
    }
  }
  .coupon-title{
    width: 120px;
    height: 30px;
    background-color: white;
    position: absolute;
    left:315px;
    top: 36px;
    color: #666666;
    text-align: center;
    line-height: 30px;
  }
}
</style>
