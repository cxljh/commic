<template>
	<div id="comic">
    <mt-header fixed title="">          
        <mt-button  slot="right">
          <router-link to="/search"><span class="right-btn"></span></router-link>
        </mt-button>
      
    </mt-header>   
    <div id="box">
      <router-view></router-view>
    </div>
    <mt-tabbar fixed v-model="selected">
      
        <mt-tab-item id="主页">
          <router-link to="/">
             主页
          </router-link> 
        </mt-tab-item>
      
      
        <mt-tab-item id="分类">
          <router-link to="/info">
            分类
          </router-link>
        </mt-tab-item>
      
      
        <mt-tab-item id="我的">
         <router-link to="/about">
            我的
         </router-link>
        </mt-tab-item>
     
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'jccomic',
  data(){
   return{
     selected:"主页"
    } 
  }
}

</script>

<style>
	
</style>