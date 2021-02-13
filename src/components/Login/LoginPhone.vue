<template>
 <div>
    
  <div class="content" v-if='isflag'>
    <div class="logo">
      <img src="../../../public/img/login.png" />
    </div>
    <div class="body">
      <input type="text" class="email" placeholder="手机号" />
      <input type="password" class="password" placeholder="请输入短信验证码" />
      <button>获取验证码</button>
    </div>
    <div class="bodymethod">
      <span>遇到问题?</span><span @click="toggleinter">使用密码登录</span>
    </div>
    <div class="clickmethod"><button>登录</button></div>
    <div class="serve">
      <input type="checkbox" /> <span
        >我同意<label>《服务条款》</label> 和<label
          > 《网易隐私政策》</label
        ></span
      >
    </div>
    <div class="other" @click="otherenter">其他登录方式<span></span></div>
    </div>
     <!-- 密码登录 -->
    <div class="content" v-if='isflag1'>
    <div class="logo">
      <img src="../../../public/img/login.png" />
    </div>
    <div class="body">
      <input type="text" class="email" placeholder="请输入手机号" />
      <input type="password" class="password" placeholder="请输入密码" />
    </div>
    <div class="bodymethod">
      <span>忘记密码?</span><span @click="toggleinter">短信快捷登录</span>
    </div>
    <div class="clickmethod"><button>登录</button></div>
    <div class="other" @click="otherenter">其他登录方式<span></span></div>
  </div>
   </div>
    
</template>
<script>

export default {
    name:'loginphone',
    data(){
        return {
            isflag:false,
            isflag1:true,
            isflag2:false
        }
    },
    methods:{
        toggleinter(){
            this.isflag=!this.isflag
            this.isflag1=!this.isflag1
        },
        otherenter(){
            // this.$router.push('/login')
            this.$emit('postb',this.isflag2)
        }
    },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.logo {
  width: 100%;
  height: 300px;
  text-align: center;
  line-height: 300px;
}
.logo img {
  width: 270px;
  height: 90px;
}
.body {
  text-align: center;
  position: relative;
}
.body button {
  position: absolute;
  right: 50px;
  bottom: 10px;
  background-color: white;
  border: 1px solid black;
  height: 53px;
  width: 162px;
}
.body input {
  width: 90%;
  border: none;
  border-bottom: 1px solid #ececec;
  height: 90px;
  outline: none;
  font-size: 30px;
}
.bodymethod {
  font-size: 30px;
  color: #7f7f7f;
  width: 90%;
  margin: 0px auto;
  height: 120px;
  line-height: 120px;
}
.bodymethod span:last-child {
  float: right;
}
.clickmethod {
  width: 90%;
  height: 90px;
  text-align: center;
  margin: 0px auto;
}
.clickmethod button {
  border: none;
  border-radius: 8px;
  width: 100%;
  background-color: #dd1b21;
  line-height: 90px;
  color: #f08684;
  font-size: 30px;
}
.other {
  width: 100%;
  height: 170px;
  line-height: 170px;
  text-align: center;
  color: #333333;
  font-size: 30px;
}
.other span {
  color: #848071;
  display: inline-block;
  height: 20px;
  width: 20px;
  border-width: 0 0 2px 2px;
  border-color: #848071;
  border-style: solid;
  transform: matrix(-0.71, 0.71, 0.71, 0.71, 0, 0);
}
.bodymethod span:last-child {
  color: black;
}
.serve {
  height: 80px;
  width: 90%;
  margin: 0 auto;
  line-height: 80px;
  color: #7f7f7f;
}
.serve label{
    color: #007afe;
}
input{
    vertical-align: middle;
}
</style>