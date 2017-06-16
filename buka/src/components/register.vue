<template>
   <div class="register">
    <mt-header title="立即注册">
      <div slot="left">
        <router-link to="/login">
          <mt-button  icon="back">返回</mt-button>
        </router-link> 
        
      </div>
    </mt-header>
    <mt-field label="手机号" v-model="arr.msg" placeholder="请输入手机号" type="tel"></mt-field>
    <mt-field label="密码" v-model="arr.password" placeholder="请输入密码" type="password"></mt-field>
    <mt-field label="确认密码" v-model="arr.list" placeholder="请再次输入密码" type="password"></mt-field>
    <router-link to="/login"><mt-button class="registering" @click="reg" type="danger" size="large">注册</mt-button>
    </router-link>
  </div>
  
</template>

<script>
import Vue from "vue"
export default {
  name: 'register',
  data () {
    return {
      arr:[
      {msg: "",
      password:"",
      list:""}
      ],
      art:[],

    }
  },
  methods:{
    reg(){
      var re = /^[0-9]{11}$/g;
      var qw = /^[0-9a-zA-Z]{6,12}$/g;
      if(re.test(this.arr.msg)&&qw.test(this.arr.password)&&this.arr.password == this.arr.list){
        this.art.push(this.arr[0]);
        console.log(this.art)
        console.log(typeof this.art)
        alert("注册成功");
      }
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
  .register{
    width: 100%;
    overflow: auto;
    height:100vh;
  }
  .registering{
    margin: 10vh 10%;
    width: 80%;
  }
  
</style>
