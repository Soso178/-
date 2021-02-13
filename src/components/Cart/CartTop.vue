<template>
  <div class="cart-top" v-if='TopList.postageVO'>
    <div class="c-top">
      <div class="c-top-left">购物车</div>
      <div class="c-top-right">编辑</div>
      <div class="c-top-right"><span>领券</span></div>
    </div>
    <div class="hengxian"></div>
    <div class="free" >{{TopList.postageVO.postageTip}}</div>
    <div class="redemption">
      <div class="r-left">全场换购</div>
      <div class="r-center">{{TopList.cartGroupList[0].promTip}}</div>
      <div class="r-right">在逛逛<span></span></div>
    </div>
    <div class="gohuan">
      <div class="g-center">去换购商品<span></span></div>
    </div>
    <div class="hengxian1"></div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      TopList:[]
    }
  },
  created() {
    axios.get("http://localhost:8080/netEase.json").then((response) => {
      console.log(response.data.data);
      this.TopList = response.data.data;
    });
  },
};
</script>
<style scoped lang='less'>
* {
  padding: 0;
  margin: 0;
}
.cart-top {
  width: 750px;
  height: 325px;
  //   background-color: blue;
  .c-top {
    width: 750px;
    height: 87px;
    // background-color: red;
    line-height: 87px;
    .c-top-left {
      width: 120px;
      height: 87px;
      float: left;
      font-size: 35px;
      padding-left: 25px;
    }
    .c-top-right {
      width: 90px;
      height: 87px;
      float: right;
      font-size: 30px;
      padding-right: 10px;
      span{
        margin-top: 25px;
        display: block;
        width:  60px;
        height: 30px;
        font-size: 25px;
        line-height: 40px;
        color: white;
        padding: 0px 0px 5px 10px;
        background-color: #fc675f;
      }
    }
  }
  .hengxian {
    height: 10px;
    width: 750px;
    background-color: #eeeeee;
  }
  .free {
    width: 725px;
    height: 80px;
    background-color: #fff8d7;
    color: #f59427;
    font-size: 30px;
    line-height: 80px;
    padding-left: 25px;
  }
  .redemption {
    width: 750px;
    height: 50px;
    padding-top: 20px;
    .r-left {
      width: 112px;
      height: 33px;
      border-radius: 5px;
      background-color: #fd835f;
      color: white;
      text-align: center;
      float: left;
      margin-left: 20px;
    }
    .r-center {
      float: left;
      padding-left: 10px;
      font-size: 28px;
    }
    .r-right {
      color: red;
      float: right;
      padding-right: 20px;
      font-size: 28px;
      span {
        display: block;
        height: 13px;
        width: 13px;
        border-width: 0px 0px 2px 2px;
        border-color: red;
        border-style: solid;
        transform: matrix(-0.71, 0.71, 0.71, 0.71, 0, 6);
        float: right;
      }
    }
  }
  .gohuan {
    height: 67px;  
    width: 663px;
    margin-left: 87px;
    margin-top: 8px;
    .g-center {
      width: 620px;
      height: 55px;
      background-color: #fff8f7;
      font-size: 25px;
      line-height: 55px;
      padding-left:  20px;
      span {
        display: block;
        height: 13px;
        width: 13px;
        border-width: 0px 0px 2px 2px;
        border-color: #888d88;
        border-style: solid;
        transform: matrix(-0.71, 0.71, 0.71, 0.71, -8, 10);
        float: right;
      }
    }
  }
  .hengxian1{
      width: 750px;
      height: 20px;
      background-color: #eeeeee;
  }
}
</style>