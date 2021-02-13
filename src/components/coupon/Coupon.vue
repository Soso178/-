<template>
  <div>
    <top></top>
    <div class="togglemenu">
      <router-link
        v-for="item in list"
        :key="item.id"
        :to="item.to"
        class="a"
        :class="{ use: item.istoggle }"
        @click.native="toggleuse(item.id)"
        >{{ item.name }}</router-link
      >
    </div>
    <div class="instructions"><span>&#xe63c; </span><label>使用说明</label></div>
    <div>
      <router-view />
    </div>
  </div>
</template>
<script>
import Top from "@/components/Top.vue";
export default {
  data() {
    return {
      istoggle: true,
      list: [
        { id: 1, to: "/unused", istoggle: true, name: "未使用" },
        { id: 2, to: "/used", istoggle: false, name: "已使用" },
        { id: 3, to: "/failed", istoggle: false, name: "已失效" },
      ],
    };
  },
  methods: {
    toggleuse(id) {
      this.list.filter((item) => item.id == id)[0].istoggle = true;
      this.list
        .filter((item) => item.id != id)
        .forEach((item1) => {
          item1.istoggle = false;
        });
    },
  }, 
  components:{
    Top
  } 
};
</script>
<style scoped>
@font-face {
  font-family: 'iconfont';  /* project id 2329520 */
  src: url('//at.alicdn.com/t/font_2329520_swbv1hst6q.eot');
  src: url('//at.alicdn.com/t/font_2329520_swbv1hst6q.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2329520_swbv1hst6q.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2329520_swbv1hst6q.woff') format('woff'),
  url('//at.alicdn.com/t/font_2329520_swbv1hst6q.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2329520_swbv1hst6q.svg#iconfont') format('svg');
}
.instructions span {
  font-family: "iconfont" !important;
  font-size: 35px;
}
* {
  padding: 0;
  margin: 0;
}
.a {
  text-decoration: none;
  color: black;
  height: 58px;
}
.togglemenu {
  border: 1px solid #d9d9d9;
  border-left: none;
  border-right: none;
  font-size: 28px;
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-around;
  line-height: 60px;
  font-weight: bolder;
}
.instructions {
  width: 100%;
  height: 40px;
  line-height: 70px;
  text-align: right;
}
.instructions label {
  margin-right: 10px;
}
.togglemenu .use {
  border-bottom: 2px solid red;
  color: red;
}
</style>