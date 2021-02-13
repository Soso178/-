<template>
  <div>
    <div class="right">
    <!-- 右上角图片 -->
      <div class="right-top">
        <img :src="TopurlChild" />
      </div>
    <!-- 右中间的商品展示 -->
      <div class="right-center">
        <div class="bodys" v-for='item in categoryGroupListChild' :key='item.id'>
          <div class="title">{{item.name}}</div>
          <div class="content">
              <div class="items" v-for='item1 in item.categoryList' :key='item1.id'>
                  <img :src='item1.wapBannerUrl'>
                  <p>{{item1.name}}</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ClassifyRight",
  props: ["categoryGroupListChild", "TopurlChild"],
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.right{
    margin-left: 160px;
    margin-top: 100px;
}
.right-top {
  width: 530px;
  height: 190px;
  background-color: #ededed;
  margin: 0 auto;
  margin-top: 30px;
}
.right-top img {
  width: 530px;
  height: 190px;
}
.right-center {
  height: auto;
  width: 530px;
  margin:30px auto;
}
.title {
  width: 530px;
  height: 30px;
  font-size: 25px;
  font-weight: bold;
  margin: 10px auto;
}
.content{
    width: 530px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    border-top: 1px solid #ededed; 
    margin-bottom: 40px;
}
.items{
    text-align: center;
}
.items img{
    width: 170px;
    height: 170px;
}
.items p{
    font-size: 24px;
}
</style>