<template>
   <div class="login">
    <mt-header title="登录">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <router-link to="/register" slot="right">
        <mt-button >快速注册</mt-button>
      </router-link>
    </mt-header>
    <mt-field class="mg1" label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-button class="logining" @click="lin" type="danger" size="large">登录</mt-button>
    
  </div>
  
</template>

<script>
import Vue from "vue"
export default {
  name: 'login',
  data () {
    return {
      msg: '',
      arr:[],
      list:"",
      phone:"",
      password:""

    }
  },
  methods:{
    lin(){
      this.arr = window.location.search.replace(/\?/g,"");
      console.log(this.arr)
      
    }
    
  }

 }
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  .mint-header{
    background: #ccc;
    color: #fff;
  }
  .login{
    width: 100%;
    overflow: auto;
    height:100vh;
  }
  .mint-header-button.is-left{
    background: #fff;
    height: 40px!important;
  }
  .mint-header-button.is-right{
    
  }
  .logining{
    margin: 10vh 10%;
  }
  .mint-button--large{
    width: 80%;
  }
  .mg1{
    margin-top: 10vh;
  }

</style>
