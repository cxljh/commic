<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'jccomic',
  data(){
   return{
     selected:""
    } 
  }

  
}

</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  html{
    font-size: 15.625vw;
  }
  html,body{
    height: 100vh;
  }
  #comic{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 0;
  }
  .mint-header{
    background: #fff;
    color: #bcbcbc;
  }
  .mint-header .headerbg{
    width: .1rem;
    border-radius: 100%;
  }
  .mint-header .headerbg img{
    width: 100%;
  }
  #box{
    flex: 1;
    margin: 44px 0;

    overflow: auto;
  }
  .mint-swipe{
    width: 100%;
    height: 35vh;
  }
  .mint-swipe img{
    width: 100%;
  }
.mint-header.is-fixed{
  background:#fff url('http://m.buka.cn/static/img/logo_2x.png') no-repeat 0 5px;
  background-size: 23%;
}
  header .mint-header-button.is-right .right-btn{
      background: url('http://m.buka.cn/static/img/research_2x.png') no-repeat;
      background-size: 100%;
      width: 26px;
      height: 26px;
      display: block;
  }
  .mint-tabbar.is-fixed{
    height: 44px;
    flex-grow: 0;
  }
  .mint-tabbar.is-fixed a{
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
