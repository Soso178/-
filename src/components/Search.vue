<template>
  <div class="searchAll">
    <div class="search-top">
      <div class="search-top-left">
        <span>&#xe67c;</span>&nbsp;
        <input
          type="text"
          placeholder="请输入商品名称"
          @keyup="search"
          v-model="SearchName"
        />
      </div>
      <div class="search-top-right" @click="cancel">取消</div>
    </div>
    <div>
      <div class="hot-search" v-if="isflag1">热门搜索</div>
      <div class="search-bottom" v-if="isflag1">
        <div class="search-content" v-for="item in HotList" :key="item.keyword">
          <div :class="{ redboder: item.algSort }">{{ item.keyword }}</div>
        </div>
      </div>
      <div v-if="isflag">
        <div v-for="item in SearchList" :key="item" class="show">
          <div>
            <span>{{ item }}</span
            ><span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import service from "@/api/request";
import { GetHotSearch } from "@/api/method";
import qs from "qs";
export default {
  name: "Search",
  data() {
    return {
      HotList: [],
      SearchName: "",
      SearchList: "",
      isflag: false,
      isflag1: true,
    };
  },
  methods: {
    search() {
      if (this.SearchName == "") {
        this.isflag1 = true;
        this.isflag = false;
      } else {
        this.isflag1 = false;
        this.isflag = true;
      }
      var that = this;
      console.log(this.SearchName);
      function PostSearchName(data) {
        return service.request({
          method: "post",
          url: "/item/xhr/search/searchAutoComplete.json",
          data: qs.stringify({ keywordPrefix: that.SearchName }),
        });
      }
      PostSearchName().then((response) => {
        //   this.HotList = response.data.data.hotKeywordVOList;
        console.log(response.data.data);
        this.SearchList = response.data.data;
      });
    },
    cancel() {
      this.$router.go(-1);
    },
  },
  mounted() {
    GetHotSearch().then((response) => {
      this.HotList = response.data.data.hotKeywordVOList;
      console.log(response.data);
    });
  },
};
</script>
<style scoped>
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
* {
  padding: 0;
  margin: 0;
}
.searchAll{
  width: 750px;
}
.search-top {
  margin: 0px auto;
  width: 750px;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.search-top-left {
  background-color: #f4f4f4;
  width: 620px;
  height: 55px;
}
.search-top-left span {
  font-family: "iconfont" !important;
  font-size: 35px;
  padding-left: 20px;
  padding-right: 10px;
  vertical-align: middle;
  color: #656862;
}
.search-top-left input {
  outline: none;
  border: none;
  height: 55px;
  width: 500px;
  background-color: #f4f4f4;
}
.search-top-right {
  width: 100px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 28px;
}
.hot-search {
  width: 680px;
  height: 70px;
  margin: auto;
  color: #999999;
  line-height: 90px;
  font-size: 28px;
}
.search-bottom {
  width: 680px;
  margin: 20px auto;
  height: auto;
}
.search-content div {
  height: 40px;
  width: auto;
  line-height: 40px;
  float: left;
  margin-right: 32px;
  border: 3px solid #dbcece;
  border-radius: 10px;
  padding: 0px 15px;
  margin-bottom: 32px;
  font-size: 24px;
}
.search-content .redboder {
  border: 3px solid red;
  color: red;
}
.show {
  width: 715px;
  height: 52px;
  margin-left: 30px;
  border-bottom: 1px solid #f2f2f2;
  font-size: 28px;
  padding: 30px 0px 20px 0;
  line-height: 70px;
}
.show div span:first-child {
  height: 30px;
}
.show div span:last-child {
  color: #848071;
  display: block;
  height: 15px;
  width: 15px;
  border-width: 0 0 2px 2px;
  border-color: #848071;
  border-style: solid;
  transform: matrix(-0.71, 0.71, 0.71, 0.71, -15, 10);
  float: right;
}
</style>