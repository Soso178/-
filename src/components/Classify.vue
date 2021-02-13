<template>
  <div>
    <!-- 顶部搜索框 -->
    <div class="topbody">
      <div>
        <span @click="search">&#xe67c;搜索商品，共{{ AllProduct }}款好物</span>
      </div>
    </div>
    <!-- 整个页面div -->
    <div class="containter">
      <!-- 左边选项栏 -->
      <div class="left">
        <div v-for="item in NavigationList" :key="item.id">
          <span :class="{ redleft: item.isclass }" @click="changebtn(item.id)">
            {{ item.name }}</span
          >
        </div>
      </div>
      <!-- 推测专区的右边显示 -->
      <div class="right" v-if="istuijian1">
        <!-- 轮播图       -->
        <el-carousel trigger="click" height="150px">
          <el-carousel-item
            v-for="item in PicList"
            :key="item.picUrl"
            class="lunbo"
          >
            <img :src="item.picUrl" />
          </el-carousel-item>
        </el-carousel>
        <div class="content1">
          <div class="items1" v-for="item1 in recommendList" :key="item1.id">
            <img :src="item1.wapBannerUrl" />
            <p>{{ item1.name }}</p>
          </div>
        </div>
      </div>
      <!-- ClassRight组件 -->
      <classify-right
        v-if="istuijian"
        :categoryGroupListChild="categoryGroupList"
        :TopurlChild="Topurl"
      ></classify-right>
    </div>
    <!-- 底部组件 -->
    <bottom></bottom>
  </div>
</template>

<script>
import { GetNavigationList, GetAllProducts1 } from "@/api/method";
import service from "@/api/request";
import ClassifyRight from "./ClassifyRight.vue";
import Bottom from "./bottom.vue";
export default {
  name: "Classify",
  data() {
    return {
      NavigationList: [],
      categoryGroupList: [],
      recommendList: [],
      PicList: [],
      Topurl: "",
      AllProduct: "3000+",
      istuijian: false,
      istuijian1: true,
    };
  },
  methods: {
    // 推荐专区的展示和隐藏
    changebtn(id) {
      console.log(event);
      if (id == 11) {
        this.istuijian = false;
        this.istuijian1 = true;
      } else {
        this.istuijian = true;
        this.istuijian1 = false;
      }
      // 点击调用内容
      this.NavigationList.forEach((item) => (item.isclass = false));
      this.NavigationList.filter((item) => item.id == id)[0].isclass = true;
      //对应id所获取的json数据
      function change1(data) {
        return service.request({
          method: "get",
          url: "/item/item/cateList.json?__timestamp=&categoryId=" + id,
          data,
        });
      }
      change1().then((response) => {
        //获取商品所有信息
        this.categoryGroupList = response.data.data.categoryGroupList;
        //获取子组件top图片链接
        this.Topurl = this.NavigationList.filter(
          (item) => item.id == id
        )[0].bannerUrl;
      });
    },
    search() {
      this.$router.push("/search");
    },
  },
  mounted() {
    GetNavigationList().then((response) => {
      this.NavigationList = response.data.data.categoryL1List;
      this.recommendList = response.data.data.categoryL2List;
      this.PicList = response.data.data.currentCategory.bannerList;
      console.log(this.recommendList);
      this.NavigationList.forEach((item) => {
        this.$set(item, "isclass", false);
      });
      this.NavigationList[0].isclass = true;
    }),
      //获取商品总数量
      GetAllProducts1().then((response) => {
        this.AllProduct = response.data.data;
      });
      console.log(ClassifyRight);
  },
  components: {
    ClassifyRight,
    Bottom,
  },
};
</script>
<style>
@font-face {
  font-family: "iconfont"; /* project id 2329520 */
  src: url("//at.alicdn.com/t/font_2329520_jmlzlal6icr.eot");
  src: url("//at.alicdn.com/t/font_2329520_jmlzlal6icr.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_2329520_jmlzlal6icr.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_2329520_jmlzlal6icr.woff") format("woff"),
    url("//at.alicdn.com/t/font_2329520_jmlzlal6icr.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_2329520_jmlzlal6icr.svg#iconfont") format("svg");
}
.topbody div span {
  font-family: "iconfont" !important;
}
* {
  padding: 0;
  margin: 0;
}
.containter {
  width: 750px;
  height: 1100px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
}
.topbody {
  height: 72px;
  width: 750px;
  border-bottom: 1px solid #d9d9d9;
  background-color: white;
  position: fixed;
  top: 0;
}
.topbody div {
  width: 80%;
  height: 53px;
  background-color: #ededed;
  margin: auto;
  margin-top: 9px;
  border-radius: 8px;
  text-align: center;
  line-height: 53px;
  font-size: 25px;
  color: #666666;
  z-index: 99;
}
.left div:first-child {
  margin-top: 40px;
}
.left {
  position: fixed;
  left: 0;
  top: 74px;
  width: 160px;
  height: 3000px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  border-right: 1px solid #d9d9d9;
}
.right {
  width: 590px;
  height: 1100px;
}
.left div {
  height: 80px;
  width: 160px;
  text-align: center;
  line-height: 80px;
}
.left div span {
  width: 150px;
  display: block;
  height: 40px;
  line-height: 40px;
  font-size: 27px;
}
.containter .left .redleft {
  border-left: 5px solid red;
  color: red;
}
.block {
  width: 530px;
  height: 190px;
  margin: 0px auto;
}
.block img {
  width: 530px;
  height: 190px;
}
.right {
  margin-left: 160px;
  margin-top: 100px;
}
.content1 {
  margin-left: 15px;
  width: 530px;
  height: 700px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: space-around;
  border-top: 1px solid #ededed;
  margin-bottom: 40px;
}
.items1 {
  text-align: center;
  margin-left: 20px;
}
.items1 img {
  width: 150px;
  height: 150px;
}
.items1 p {
  font-size: 24px;
}
.el-carousel {
  width: 528px;
  height: 192px;
  margin: 0 auto;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.lunbo img {
  width: 528px;
  height: 192px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>