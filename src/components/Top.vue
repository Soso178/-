<template>
  <div>
    <div class="top">
      <span @click="toshouye">&#xe6d3;</span>
      <span>&#xe661;</span>
      <span @click="search" class="search">&#xe660;</span>
      <label>网易严选</label>
    </div>
  </div>
</template>
<script>
export default {
  name: "top",
  data() {
    return {};
  },
  methods: {
    toshouye() {
      this.$router.push("/shouye");
    },
    search() {
      this.$router.push("/search");
    },
  },
};
</script>
<style scoped lang="less">
@font-face {
  font-family: "iconfont"; /* project id 2326857 */
  src: url("//at.alicdn.com/t/font_2326857_klqx0ardskk.eot");
  src: url("//at.alicdn.com/t/font_2326857_klqx0ardskk.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_2326857_klqx0ardskk.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_2326857_klqx0ardskk.woff") format("woff"),
    url("//at.alicdn.com/t/font_2326857_klqx0ardskk.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_2326857_klqx0ardskk.svg#iconfont") format("svg");
}
span {
  font-family: "iconfont" !important;
  font-size: 60px;
  float: right;
  padding: 0 30px 0 30px;
}
.search{
  padding: 0 0px 0 30px;
}
div span:first-child {
  float: left;
}
div {
  line-height: 86px;
  text-align: center;
  /* border-bottom: 1px solid #d9d9d9; */
}
label {
  margin-left: 85px;
  font-size: 36px;
}
.top {
  width: 100%;
  height: 86px;
  background-color: #fafafa;
  border-bottom:1px solid #d9d9d9
}
</style>