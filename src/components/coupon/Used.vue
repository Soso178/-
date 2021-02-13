<template>
  <div>
    <div class="ticketbody">
      <div
        v-for="item in list"
        :key="item.id"
        class="ticket-one"
        :class="{ ticket: item.isflag, ticket1: item.isflag1 }"
      >
        <span class="fir">{{ item.hongbao }}</span>
        <span class="sec">{{ item.price }}元<br /></span>
        <span class="three">{{ item.starttime }}时-{{ item.endtime }}时</span>
        <span class="four"><hr /></span>
        <span class="five" :class="{ t4: item.isrotation1, t5: item.isrotation }">{{ item.content }}</span>
        <div class="btn1" :class="{ t3: item.isrotation}">
          <div
            @click="toggledown(item.id)"
            class="lb1"
            :class="{ t1: item.isrotation, t2: item.isrotation1 }"
          >
            <span class="ew">&#xe61a;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
import $ from "jquery";
export default {
  name: "used",
  data() {
    return {
      list: [
        {
          id: "1",
          hongbao: "新人红包",
          price: "10",
          starttime: "2020.7.13 18",
          endtime: "2020.7.13 18",
          content:
            "满99元可用；限新人首单使用；礼品卡、猪肉卡、黑胶唱片、部分新品、秒杀商品和加价购等商品不可使用秒杀商品和加价购等商品不可使用",
        },
        {
          id: "2",
          hongbao: "新人红包",
          price: "10",
          starttime: "2020.7.13 18",
          endtime: "2020.7.13 18",
          content:
            "满99元可用；限新人首单使用；礼品卡、猪肉卡、黑胶唱片、部分新品、秒杀商品和加价购等商品不可使用秒杀商品和加价购等商品不可使用",
        },
        {
          id: "3",
          hongbao: "新人红包",
          price: "10",
          starttime: "2020.7.13 18",
          endtime: "2020.7.13 18",
          content:
            "满99元可用；限新人首单使用；礼品卡、猪肉卡、黑胶唱片、部分新品、秒杀商品和加价购等商品不可使用秒杀商品和加价购等商品不可使用",
        },
        {
          id: "4",
          hongbao: "新人红包",
          price: "10",
          starttime: "2020.7.13 18",
          endtime: "2020.7.13 18",
          content:
            "满99元可用；限新人首单使用；礼品卡、猪肉卡、黑胶唱片、部分新品、秒杀商品和加价购等商品不可使用秒杀商品和加价购等商品不可使用",
        },
        {
          id: "5",
          hongbao: "新人红包",
          price: "10",
          starttime: "2020.7.13 18",
          endtime: "2020.7.13 18",
          content:
            "满99元可用；限新人首单使用；礼品卡、猪肉卡、黑胶唱片、部分新品、秒杀商品和加价购等商品不可使用秒杀商品和加价购等商品不可使用",
        },
      ],
    };
  },
  methods: {
    toggledown(id, b, c) {
      this.list.filter((item) => item.id == id)[0].isflag = !this.list.filter(
        (item) => item.id == id
      )[0].isflag;
      this.list.filter((item) => item.id == id)[0].isflag1 = !this.list.filter(
        (item) => item.id == id
      )[0].isflag1;
      this.list.filter(
        (item) => item.id == id
      )[0].isrotation = !this.list.filter((item) => item.id == id)[0]
        .isrotation;
      this.list.filter(
        (item) => item.id == id
      )[0].isrotation1 = !this.list.filter((item) => item.id == id)[0]
        .isrotation1;
    },
  },
  mounted() {
    this.list.forEach((item) => {
      this.$set(item, "isflag", true);
      this.$set(item, "isflag1", false);
      this.$set(item, "isrotation", false);
      this.$set(item, "isrotation1", true);
    });
    // this.list.push();
    console.log(this.list);
  },

  //     created(){
  //       axios.get('http://127.0.0.1:7000/category/ ').then(function(response){
  //           console.log(response);
  //       })
  // }
};
</script>
<style scoped>
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
.btn1 span {
  font-family: "iconfont" !important;
  width: 20px;
  height: 20px;
}
* {
  padding: 0;
  margin: 0;
}

.ticketbody {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.ticket-one {
  margin-top: 35px;
  margin-left: 35px;
  width: 320px;
  height: 410px;
  background-color: #b7bcc6;
  color: #ffffff;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.ticketbody div {
  text-align: center;
}
.ticketbody div .sec {
  font-size: 50px;
  display: block;
  margin-top: 5px;
}
.ticketbody div .three {
  font-size: 18px;
}
.ticketbody div .four hr {
  margin-top: 45px;
}
.ticketbody div .fir {
  display: block;
  margin-top: 100px;
  font-size: 25px;
}
hr {
  height: 1px;
  border: none;
  border-top: 1px dashed white;
  width: 250px;
  margin: 25px auto;
  margin-bottom: 15px;
}
.ticket-one .btn1 {
  height: 50px;
  width: 100%;
  z-index: 99;
  background-color:  #b7bcc6;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.ticketbody .ticket1 {
  height: auto;
  
}
.btn1 .lb1 {
  margin:0 auto;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  transition: 0.5s;
}
.t1 {
  transform-origin: center center;
  transform: rotateZ(180deg);
}
.t2 {
  transform-origin: center center;
  transform: rotateZ(0deg);
}
.ticket-one .t4{
  width: 240px;
  display: block;
  margin-left: 30px;
  font-size: 24px;
  text-align:left;
  overflow: hidden; 
  text-overflow: ellipsis; /*可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 。*/
  display: -webkit-box; /*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。*/
  -webkit-line-clamp: 2; /*用来限制在一个块元素显示的文本的行数。*/
  -webkit-box-orient: vertical;
}
.ticket-one .t5{
  width: 240px;
  display: block;
  margin-left: 30px;
  text-align:left;
  font-size: 24px;
}
</style>