<template>
    <div>
      <mt-header title="" class="top">
        <router-link to="info" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button  slot="right"></mt-button>
      </mt-header>
      <ul>
        <li v-for="item in arr">
              <router-link :to="{ name: 'comicInfo', params:{id:item.mid}}">
                 <img :src="item.logo" alt=""> 
              </router-link>          
            <span>{{item.cname}}</span>
            <p>更新至第{{item.lastup}}</p>
        </li>
      </ul>
    </div> 
</template>

<script>
import Vue from "vue"
export default {
  name: 'classify',
  data () {
    return {
      arr:""
    }
  },
  created(){
      // 每周推荐 http://m.buka.cn/category/ajax_group
      Vue.axios.get("../../static/classify.json").then((res)=> {
        return res.data.datas.items
        
      }).then((data)=> {
        this.arr = data
        console.log(this.arr)
      })
    }
}
</script>

<style scoped>
  html{
    font-size: 15.625vw;  
  }
  ul{
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
    margin-top: .2rem;
  }
  li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    margin: .1rem;
  }
  li img{
    width: 100%;
  }
  span{
      font-size: .15rem;
      width: 100%;
      height: .3rem;
  }
  p{
      font-size: .1rem;
      width: 100%;
      color: #bcbcbc;
  }
.top{
  position: fixed;
  top: 40px;
  width: 100vw;
}
</style>
