<template>
  <div>
    <div class="bottom">
      <div v-for="item in list" :key='item.id' @click="qiehuan(item.id)">
          <span v-html="item.to"></span>
          <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:'bottom',
    data(){
        return{
            list:[
                {id:1,to:'&#xe652;',name:'首页',path:'/shouye'},
                {id:2,to:'&#xe601;',name:'分类',path:'/classify'},
                {id:3,to:'&#xe73a;',name:'值得买',path:'/worthbuy'},
                {id:4,to:'&#xe661;',name:'购物车',path:'/cart'},
                {id:5,to:'&#xe680;',name:'个人',path:'/Login'}
                ]
        }
    },
    methods:{
        qiehuan(id){
            // this.list.filter(item.id==id)[0].path
            
            this.$router.push(this.list.filter(item=>item.id==id)[0].path)
        }
    }
};
</script>
<style>
@font-face {
  font-family: 'iconfont';  /* project id 2329520 */
  src: url('//at.alicdn.com/t/font_2329520_o6nlc0szvzm.eot');
  src: url('//at.alicdn.com/t/font_2329520_o6nlc0szvzm.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2329520_o6nlc0szvzm.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2329520_o6nlc0szvzm.woff') format('woff'),
  url('//at.alicdn.com/t/font_2329520_o6nlc0szvzm.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2329520_o6nlc0szvzm.svg#iconfont') format('svg');
}
.bottom div span{
    font-family: "iconfont" !important;
    font-size: 40px;
}
* {
  padding: 0;
  margin: 0;
}
.bottom {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  color: #7f7f7f;
  position: fixed;
  bottom: 0;
  background-color: white;
}
.bottom div {
  margin-top: 15px;
  width: 150px;
  height: 100px;
  box-sizing: border-box;
  text-align: center;
}
.bottom div p{
    font-size: 24px;
}
</style>