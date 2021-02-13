<template>
<div>
  <top></top>
  <div class="login" v-if="isflag2">
    <div class="logo">
      <img src="../../../public/img/login.png" />
    </div>
    <div class="register">
      <button @click="phoneenter"><span>&#xe71f;</span>手机号快捷登录</button>
      <button @click="emailenter"><span>&#xe631;</span>邮箱账号登录</button>
    </div>
    <div class="register-method">
      <span>&#xe6b9; </span><label>微信</label> <span>&#xe882;</span
      ><label>QQ</label> <span>&#xe643; </span><label>微博</label>
    </div>  
  </div>
  <loginemail v-if="isflag3" @postc='getb'></loginemail>
  <loginphone v-if="isflag4" @postb='getb'></loginphone>
  </div>
</template>
<script>
import Loginemail from './Loginemail.vue';
import Loginphone from './LoginPhone.vue';
import Top from '../Top.vue';

export default {
  name:'Login',
  data(){
    return{
      isflag2:true,
      isflag3:false,
      isflag4:false
    }
  },
  methods:{
    emailenter(){
      this.isflag2=!this.isflag2
      this.isflag3=!this.isflag3
    },
    phoneenter(){
      this.isflag2=!this.isflag2
      this.isflag4=!this.isflag4
    },
    getb(flag){
      this.isflag2=!flag
      this.isflag3=flag
      this.isflag4=flag
    }
  },
  components:{
    Loginemail,
    Loginphone,
    Top
    }
};
</script>
<style scoped>
@font-face {
  font-family: "iconfont"; /* project id 2326857 */
  src: url("//at.alicdn.com/t/font_2326857_v3lo3h3gr0p.eot");
  src: url("//at.alicdn.com/t/font_2326857_v3lo3h3gr0p.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_2326857_v3lo3h3gr0p.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_2326857_v3lo3h3gr0p.woff") format("woff"),
    url("//at.alicdn.com/t/font_2326857_v3lo3h3gr0p.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_2326857_v3lo3h3gr0p.svg#iconfont") format("svg");
}
.register span {
  font-family: "iconfont" !important;
  margin-right: 5px;
  font-size: 35px;
  vertical-align: middle;
}
.register-method span {
  font-family: "iconfont" !important;
  color: #7f7f7f;
  font-size: 45px;
  vertical-align: middle;
  padding-left: 17px;
}
* {
  padding: 0;
  margin: 0;
}
.logo {
  width: 100%;
  height:482px;
  text-align: center;
  line-height: 482px;
}
.logo img {
  width: 270px;
  height: 100px;
}
.register {
  height: 215px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
}
.register button {
  width: 90%;
  height: 94px;
  border-radius: 5px;
  font-size: 28px;
  line-height: 50px;
}
.register button:first-child {
  color: white;
  border: none;
  background-color: #dd1b21;
}
.register button:last-child {
  color: #dd1b21;
  border: 1px solid #dd1b21;
}
.register-method {
  width: 100%;
  height: 400px;
  text-align: center;
  line-height:900px;
  color: #7f7f7f;
  font-size: 27px;
}
.register-method label {
  padding-right: 40px;
  border-right: 1px solid #7f7f7f;
  padding-top: 2px;
  padding-bottom: 2px;
}
.register-method label:last-child { 
  border-right: none
}
</style>