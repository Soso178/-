<template>
  <div class="content">
    <div class="logo">
      <img src="../../../public/img/login.png" />
    </div>
    <div class="body">
      <input type="text" class="email" placeholder="邮箱账号" />
      <input type="password" class="password" placeholder="密码" />
    </div>
    <div class="bodymethod"><span>注册账号</span><span>忘记密码</span></div>
    <div class="clickmethod"><button>登录</button></div>
    <div class="other" @click="otherenter">其他登录方式<span></span></div>
  </div>
</template>
<script>
export default {
  name: "LoginPhone",
  data(){
    return{
       isflag2:false
    }
  },
  methods: {
    otherenter() {
      this.$emit('postc',this.isflag2)
    },
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
}
.body input {
  width: 80%;
  border: none;
  border-bottom: 1px solid #ececec;
  height: 90px;
  outline: none;
  font-size: 30px;
}
.bodymethod {
  font-size: 20px;
  color: #7f7f7f;
  width: 80%;
  margin: 0px auto;
  height: 120px;
  line-height: 120px;
  font-size: 30px;
}
.bodymethod span:last-child {
  float: right;
}
.clickmethod {
  width: 80%;
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
</style>