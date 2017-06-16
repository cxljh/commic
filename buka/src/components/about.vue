<template>
    <div id="app">
    <header id="header" class="">
      <div class="touxiang"></div>
      <router-link  to="/login"><mt-button type="primary" size="small">立即登录</mt-button></router-link>
      <router-link to="/register"><mt-button type="default" size="small">快速注册</mt-button>
      </router-link>
    </header>
    <main>
      <mt-cell title="本地漫画">
        <img slot="icon" src="../../static/images/1.jpg" width="20" height="21">
        
      </mt-cell>
      <mt-cell title="我的vip">
        <img slot="icon" src="../../static/images/1.jpg" width="20" height="21">
        
      </mt-cell>
      <mt-cell title="我的钱包">
        <img slot="icon" src="../../static/images/1.jpg" width="20" height="21">
        
      </mt-cell>
      <mt-cell title="我的收藏">
        <img slot="icon" src="../../static/images/1.jpg" width="20" height="21">
        
      </mt-cell>
      <mt-cell title="我的缓存">
        <img slot="icon" src="../../static/images/1.jpg" width="20" height="21">
        
      </mt-cell>
      <mt-cell title="我的订单">
        <img slot="icon" src="../../static/images/1.jpg" width="20" height="21">
        
      </mt-cell>
      <mt-cell title="夜间模式">
        <img slot="icon" src="../../static/images/1.jpg" width="20" height="21">
        <mt-switch v-model="value" @change="getnight"></mt-switch>
      </mt-cell>
      <mt-cell title="设置">
        <img slot="icon" src="../../static/images/1.jpg" width="20" height="21">
       
      </mt-cell>
      
    </main>
      
  </div>
  
</template>

<script>
import Vue from "vue"
export default {
  name: 'home',
  data () {
    return {
      msg: '',
      arr:"",
      list:"",
      value:false,
      status:""
    }
  },
  methods:{
    getnight(){
      if(this.value){
        this.status = "ok";
      }else{
        this.status = "";
      }
    }
  }
 
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #app{
    width: 100vw;
    display: flex;
    flex-direction: column;
    height:100vh;
  }
  header{
    width: 100%;
    height: 27vh;
    display: flex;
    flex-grow: 0;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    background: url('http://img4.imgtn.bdimg.com/it/u=2401463050,1544189802&fm=26&gp=0.jpg') no-repeat 100%;
  }
  .touxiang{
    width: 70px;
    height: 70px;
    background: #ccc;
    border-radius: 25px;
  }
  .mint-button--small{
    padding: 0 10px;
    margin-top: 5px;
    height: 20px!important;
    font-size: 12px
  }
  a{
    font-size: 14px;
  }
  .blackbox{
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: rgba(103, 89, 88, .5)

  }
  main{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
  }
  mt-cell{
    width: 100%;
   
  }
  mt-cell img{
    display: inline-block;
    float: left;
    padding-left: 20px;
  }
  
</style>
