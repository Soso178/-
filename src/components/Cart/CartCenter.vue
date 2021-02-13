<template>
  <div>
    <div class="cart-center">
      <div
        class="commodity"
        v-for="(item, index) in CartList"
        :key="item.skuId"
      >
        <div class="com-left">
          <!-- true 白-->
          <div class="com-left-img" v-if='item.canSwitchSpec' @click="chuxian(item.id)"></div>
         <!-- false 红-->
          <div class="com-left-img1" v-if='item.cartItemInvalid' @click="xiaoshi(item.id)"></div>
        </div>
        <div class="com-right">
          <div class="c-r-content">
            <img :src="item.pic" />
            <div class="product">
              <span class="introduce">{{ item.itemName }}</span
              ><br />
              <select class="title">
                <option>{{ item.specList[0].specValue }}</option></select
              ><br />
              <span class="price">¥{{ item.preSellPrice }}</span>
              <div class="action">
                <div class="reduce" @click="reduce(item.id, index)">-</div>
                <div class="number">{{ item.cnt }}</div>
                <div class="increase" @click="increase(item.id)">+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="total">
      <div class="t-left">
        <div class="t-t-left">
          <input type="checkbox" @click="totalcheck" :checked="Allcheck" />
          已选({{ total }})
        </div>
        <div class="t-total">合计:¥<span>{{ totalmoney }}</span></div>
      </div>
      <div class="btnsubmit">下单</div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "CartCenter",
  data() {
    return {
      CartList: [],
      Allcheck: false,
    };
  },
  methods: {
    chuxian(id){
      this.CartList.filter((item) => item.id == id)[0].cartItemInvalid=true;
      this.CartList.filter((item) => item.id == id)[0].canSwitchSpec=false;
      this.CartList.filter((item) => item.id == id)[0].checked = true;
      this.ck();
    },
    xiaoshi(id){
      this.CartList.filter((item) => item.id == id)[0].cartItemInvalid=false
      this.CartList.filter((item) => item.id == id)[0].canSwitchSpec=true
      this.CartList.filter((item) => item.id == id)[0].checked = false;
        this.ck();
    },
    reduce(id, index) {
      if (this.CartList.filter((item) => item.id == id)[0].cnt == 1) {
        this.CartList.splice(index, 1);
        this.$emit('postman',this.total)
      } else {
        this.CartList.filter((item) => item.id == id)[0].cnt--;
      }
    },
    increase(id) {
      this.CartList.filter((item) => item.id == id)[0].cnt++;
    },
    ck() {
      var a = this.CartList.filter((item) => item.checked == true);
      var b = this.CartList.filter((item) => item.checked == false);
      if (a.length == [] || a.length < this.CartList.length) {
        this.Allcheck = false;
      }
      if (b.length == []) {
        this.Allcheck = true;
      }
    },
    totalcheck() {
      if (this.Allcheck) {
        this.CartList.forEach((item) => {
          console.log(item);
          item.checked = false;
          this.Allcheck = false;
        });
      } else {
        this.CartList.forEach((item) => {
          item.checked = true;
          this.Allcheck = true;
        });
      }
    },
  },
  computed: {
    total() {
      return this.CartList.filter((item) => item.checked == true).length;
    },
    totalmoney() {
      var totalmoney = 0;
      this.CartList.forEach((item) => {
        if (item.checked == true) {
          console.log(item.preSellPrice);
          // totalmoney += parseInt(item.preSellPrice) * item.cnt;
          totalmoney += item.preSellPrice * item.cnt;
          totalmoney=Math.floor(totalmoney*10)/10
        }
      });
      if(totalmoney==""){
        totalmoney=0
      }
      console.log(totalmoney);
      return totalmoney;
    },
  },
  created() {
    axios.get("http://localhost:8080/netEase.json").then((response) => {
      console.log(response.data.data);
      this.CartList = response.data.data.cartGroupList[1].cartItemList;
      this.CartList.forEach(item=>{
        if(item.id==809966894){
          item.canSwitchSpec=false
          item.cartItemInvalid=true          
        }
      })

    });
  },
};
</script>
<style scoped lang='less'>
.com-left-img{
  background-image: url('../../../public/icons/1d547ff8-3988-4bbf-acc4-d58485740435.png');
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  background-position: 0px -518px;
  background-size: cover;
  margin-top: 90px;
  margin-left: 20px;
}
.com-left-img1{
  background-image: url('../../../public/icons/1d547ff8-3988-4bbf-acc4-d58485740435.png');
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  background-position: 0px -247px;
  background-size: cover;
  margin-top: 90px;
  margin-left: 20px;
}
* {
  padding: 0;
  margin: 0;
}
.cart-center {
  width: 750px;
  height: 780px;
  margin-top: 20px;
  background-color: #eeeeee;
  .commodity {
    width: 750px;
    height: 220px;
    border-bottom: 1px solid #eeeeee;
    background-color: white;
    .com-left {
      width: 84px;
      height: 220px;
      // line-height: 220px;
      margin: 0 auto;
      float: left;
    }
    .com-right {
      width: 666px;
      height: 205px;
      padding-top: 15px;
      float: right;
      position: relative;
      .c-r-content {
        width: 666px;
        height: 150px;
        img {
          background-color: rebeccapurple;
          width: 173px;
          height: 173px;
          float: left;
        }
        .product {
          width: 473px;
          height: 180px;
          float: right;
          margin-left: 20px;
          .introduce {
            font-size: 30px;
          }
          .title {
            font-size: 25px;
            background-color: #fafafa;
            border-color: #efefef;
            color: #7f7f7f;
            margin-top: 10px;
            width: 300px;
            height: 40px;
            white-space: nowrap; 
            overflow: hidden; 
            text-overflow: ellipsis; 
          }
          .price {
            display: block;
            margin-top: 19px;
            font-size: 30px;
            font-weight: bolder;
          }
          .action {
            position: absolute;
            bottom: 20px;
            right: 30px;
            width: 175px;
            height: 50px;

            .reduce,
            .number,
            .increase {
              line-height: 45px;
              text-align: center;
              font-size: 30px;
              width: 55px;
              height: 50px;
              border: 1px solid #78857d;
              float: left;
              box-sizing: border-box;
            }
          }
        }
      }
    }
  }
}
.total {
  width: 750px;
  height: 120px;
  border: 1px solid #d9d9d9;
  border-left: none;
  border-right: none;
  .t-left {
    width: 500px;
    height: 120px;
    float: left;
    .t-t-left {
      width: 150px;
      height: 120px;
      float: left;
      font-size: 30px;
      line-height: 120px;
      margin-left: 20px;
      color: #7f7f7f;
      input {
        color: #c0c9bd;
        vertical-align: middle;
        margin-top: -7px;
      }
    }
    .t-total {
      width: 173px;
      height: 120px;
      text-align: center;
      float: right;
      font-size: 30px;
      line-height: 120px;
      color: red;
      span{
        font-size: 22px;
      }
    }
  }
  .btnsubmit {
    width: 227px;
    height: 120px;
    background-color: red;
    float: right;
    text-align: center;
    line-height: 120px;
    font-size: 30px;
    color: white;
  }
}
</style>