<template>
    <div id="app">
    <header id="header" class="">
      <div class="touxiang">
        <img src="http://img0.imgtn.bdimg.com/it/u=1215645982,1659373920&fm=214&gp=0.jpg" alt="">
      </div>
      <router-link  to="/login"><mt-button type="primary" size="small">立即登录</mt-button></router-link>
      <router-link to="/register"><mt-button type="default" size="small">快速注册</mt-button>
      </router-link>
    </header>
    <main>
      <ul>
        <li>
          <i class="iconfont icon-bendi"></i>
          <span>本地漫画</span>
        </li>
        <li>
          <i class="iconfont icon-circularframeshijian"></i>
          <span>历史观看</span>
        </li>
        <li>
          <i class="iconfont icon-xiazai"></i>
          <span>下载记录</span>
        </li>
        <li>
          <i class="iconfont icon-yikeapp16"></i>
          <span>个人中心</span>
        </li>
        <li>
          <i class="iconfont icon-icon-vip"></i>
          <span>我的vip</span>
        </li>
        <li>
          <i class="iconfont icon-qianbao"></i>
          <span>我的钱包</span>
        </li>
        <li>
          <i class="iconfont icon-ic_confirmation_number_px"></i>
          <span>我的门票</span>
        </li>
        <li>
          <i class="iconfont icon-gouwuche"></i>
          <span>我的订单</span>
        </li>
        <li>
          <i class="iconfont icon-shezhi"></i>
          <span>设置</span>
        </li>
      </ul>
      
    </main>
      
  </div>
  
</template>

<script>
import Vue from "vue"
export default {
  name: 'home',
  data () {
    return {
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
  li{
    list-style: none;
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
    border-radius: 100%;
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


  main ul{
    width: 100%; 
    padding: 0 .1rem;
  }
  main ul li{
    width: 90%;
    height: 6vh;
    font-size: .1rem;
    border-bottom: 1px solid #bcbcbc;
    display: flex;
    align-items: center;
  }
  main ul li i{
    margin: 0 .1rem;
  }
  main ul li span{
    font-size: .2rem;
  }
  .touxiang img{
    width: 100%;
    border-radius: 100%;
  }
</style>
