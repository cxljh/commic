<template>
    <div id="serbox">
      <header>
        <router-link to="/" slot="left"><mt-button  icon="back">返回</mt-button>
        </router-link>
      <input v-model="txt" type="text" placeholder="热门">
      <mt-button @click="getsearch" slot="right">搜索</mt-button>
      </header>
      <ol class="ulo">
        <router-link to="/comicInfo"><li v-for="it in list">
          {{it.title}}
        </li>
        </router-link>
      </ol>
      <main>
        <h1>热门推荐</h1>
        <ul>
          <li v-for="item in arr">
          <router-link :to="{ name:'xtx', params:{id:item.title} }"><span>{{item.title}}</span></router-link>
          </li>
        </ul>
      </main>
      
    </div>
</template>

<script>
import Vue from "vue"
export default {
  name: 'search',
  data () {
    return {
      value:"",
      arr:"",
      txt:"",
      list:""
    }
  },
  created(){
    var _this = this;
    Vue.axios.get("http://m.ac.qq.com/Recommend/get/?num=6&adpos=910&t=1497313867284&").then((res)=> {
        return res.data.list
      }).then((data)=> {
        _this.arr = data
       
      })
  },
  methods:{
    getsearch(){
      // http://m.ac.qq.com/search/smart?t=1497577934147&word=
      var this_ = this;
      Vue.axios.get("http://m.ac.qq.com/search/smart?t=1497577934147&word=" + this.txt).then((res)=> {
        return res.data.data
      }).then((data)=> {
        this_.list = data
       console.log(this_.list)
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
  #serbox{
    width: 100vw;
    overflow: auto;
    height:100%;
  }
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #b8bbbf;
    font-size: 16px;
  }
  input{
    height: 33px;
    border-radius: 5px
  }
  .mint-button::after{
    background-color: #ccc!important;
  }
 .mint-button--default{
  background-color: #b8bbbf;
 }
 .ulo{
 
  position: absolute;
  top: 44px;
  left: 25%;
  width: 65%;
  list-style: none;
 }
 .ulo li{
  list-style: none;
  font-size: 14px;
 }
 main{
  min-height: 80vh;
 }
 h1{
  font-size: 20px;
  color: #add;
 }
 main ul{
  list-style: none;
  height: 80vh;
 }
 main li{
  float: left;
  font-size: 16px;
  margin: 10px 15px;
  
 }
 span{
  color: #999;
  display: block;
  height: 25px;
  border: 5px solid #ccc;
  border-radius: 10px;
 }
  a{
    text-decoration: none;
  }
</style>
