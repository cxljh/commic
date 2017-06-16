<template>
   <div class="register">
    <mt-header title="立即注册">
      <div slot="left">
        <router-link to="/login">
          <mt-button  icon="back">返回</mt-button>
        </router-link> 
        
      </div>
    </mt-header>
    <mt-field class="userautor" label="手机号"  placeholder="请输入手机号" type="tel"></mt-field>
    <mt-field class="mima" label="密码"  placeholder="请输入密码" type="password"></mt-field>
    <mt-field label="确认密码" v-model="list" placeholder="请再次输入密码" type="password"></mt-field>
    <mt-button class="registering" @click="reg" type="danger" size="large">注册</mt-button>
    
  </div>
  
</template>

<script>
import Vue from "vue"
export default {
  name: 'register',
  data () {
    return {
      user: "",
      password:"",
      list:"",
      art:"",

    }
  },
  methods:{
    reg(){
      var $userName = $(".userautor .mint-field-core").val();
      var $password = $(".mima .mint-field-core").val();
      console.log($password)
      $.ajax({
        url: 'http://datainfo.duapp.com/shopdata/userinfo.php',
        type: 'POST',
        dataType: '',
        data: {
          status: 'register',
          userID:$userName,
          password:$password
        },
      })
      .done(function(res) {
        switch (res) {
          case "0": alert("重名啦，换个名字吧");
            break;
          case "2": alert("数据库出错");
            break;
            default: alert("恭喜你，注册成功");
        }
        console.log("success");
      })
      .fail(function() {
        console.log("error");
      })
      
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
