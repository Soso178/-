<template>
  <div>
    <div class="bg">
      <div class="header">
        <img src="../../public/img/Avatar.png" />
        <div>
          <span>严选用户55755499</span>
          <span><p>普通用户</p></span>
        </div>
      </div>
      <div class="gift"><span>&#xe656;</span></div>
      <div class="vip"><span>&#xe715;</span></div>
      <div class="pro"><span class="pro-huiyuan">Pro会员</span>立即试用<span>&#xe68f;</span></div>
    </div>
    <div class="myasset">我的资产</div>
    <div class="myasset-content">
      <div>
        <h3>¥0</h3>
        <span>回馈金</span>
      </div>
      <div>
        <h3>10</h3>
        <span>红包</span>
      </div>
      <div>
        <h3>10</h3>
        <span>优惠券</span>
      </div>
      <div>
        <h3>¥0</h3>
        <span>津贴</span>
      </div>
      <div>
        <h3>0</h3>
        <span>礼品卡</span>
      </div>
    </div>
    <div class="fengexian"></div>
    <div class="menu">
      <div v-for="item in list" :key="item.id">
        <div>
          <span v-html="item.src"></span>
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
    <div class="fengexian1"></div>
    <div class="exit">退出登录</div>
  </div>
</template>
<script>
export default {
  name: "Personal",
  data() {
    return {
      list: [
        { id: 1, src: "&#xe6ab;", name: "我的订单" },
        { id: 2, src: "&#xe60f;", name: "周六一起拼" },
        { id: 3, src: "&#xe60d;", name: "售后服务" },
        { id: 4, src: "&#xe611;", name: "邀请返利" },
        { id: 5, src: "&#xe60e;", name: "优先购" },
        { id: 6, src: "&#xe649;", name: "积分中心" },
        { id: 7, src: "&#xe67e;", name: "会员俱乐部" },
        { id: 8, src: "&#xe694;", name: "地址管理" },
        { id: 9, src: "&#xe66d;", name: "账号安全" },
        { id: 10, src: "&#xe602;", name: "帮助与客服" },
        { id: 11, src: "&#xe662;", name: "意见反馈" },
      ],
    };
  },
};
</script>
<style scoped>
@font-face {
  font-family: "iconfont"; /* project id 2326857 */
  src: url("//at.alicdn.com/t/font_2326857_geiuzslsntb.eot");
  src: url("//at.alicdn.com/t/font_2326857_geiuzslsntb.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_2326857_geiuzslsntb.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_2326857_geiuzslsntb.woff") format("woff"),
    url("//at.alicdn.com/t/font_2326857_geiuzslsntb.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_2326857_geiuzslsntb.svg#iconfont") format("svg");
}
.gift span {
  font-family: "iconfont" !important;
  font-size: 50px;
  color: red;
  font-weight: bolder;
}
.vip span {
  font-family: "iconfont" !important;
  font-size: 60px;
  line-height: 80px;
}
.pro span {
  font-family: "iconfont" !important;
  font-size: 20px;
}
* {
  padding: 0;
  margin: 0;
}
.bg {
  width: 100%;
  height: 270px;
  background-image: url("../../public/img/back.png");
  background-size: cover;
  position: relative;
}
.header {
  position: absolute;
  left: 30px;
  top: 60px;
  width: 500px;
  height: 140px;
  vertical-align: middle;
}
.header div {
  position: absolute;
  left: 170px;
  top: 30px;
  font-size: 35px;
  color: white;
}
.gift {
  position: absolute;
  right: 40px;
  top: 70px;
}
.header img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  z-index: 3;
}
.vip {
  text-align: center;
  width: 80px;
  height: 80px;
  background-color: #453f37;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  position: absolute;
  right: 120px;
  bottom: 40px;
}
.pro {
  width: 121px;
  height: 80px;
  background-color: #453f37;
  position: absolute;
  right: 0px;
  bottom: 40px;
  color: #fae0c0;
  font-size: 24px;
}
.pro-huiyuan{
  display: block;
  width: 120px;
  height: 30px;
  margin-top: 10px;
}
.myasset {
  height: 104px;
  width: 90%;
  margin: 0 auto;
  line-height: 104px;
  border-bottom: 1px solid #d9d9d9;
  font-size: 28px;
}
.myasset-content {
  display: flex;
  height: 160px;
  width: 90%;
  margin: 0 auto;
  justify-content: space-around;
}
.myasset-content div {
  width: 95px;
  height: 115px;
  text-align: center;
  padding-top: 45px;
}
.myasset-content div span {
  display: block;
  margin-top: 13px;
  font-size: 25px;
  color: #333333;
}
.fengexian {
  width: 100%;
  background-color: #f4f4f4;
  height: 20px;
}
.menu {
  height: 724px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  color: #65686a;
}
.menu div {
  text-align: center;
  width: 250px;
  height: 182px;
  border: 1px solid #d9d9d9;
  border-left: none;
  border-top: none;
  box-sizing: border-box;
}
.menu div span {
  font-family: "iconfont" !important;
  font-size: 60px;
  padding-top: 35px;
  display: block;
}
.fengexian1 {
  height: 40px;
  width: 100%;
  background-color: #f4f4f4;
}
.menu div:nth-last-of-type(1),
.menu div:nth-last-of-type(2) {
  border-bottom: none;
}
.exit {
  width: 100%;
  height: 96px;
  color: #333333;
  font-size: 35px;
  text-align: center;
  line-height: 96px;
}
.menu div p {
  margin-top: 10px;
}
.header div span:first-child{
  width: 300px;
  display: block;
  overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
  
}
</style>