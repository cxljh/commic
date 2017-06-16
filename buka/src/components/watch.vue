<template>
  <div>
    <mt-header title="火影忍者">
      <router-link to="comicInfo/:id" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <section>
      <ul>
        <li v-for="item in infoList">
          <img  :src="item.imageUrl" alt="">
        </li>
      </ul>
      
    </section>
  </div>
</template>

<script>
import Vue from "vue"
export default {
  name: 'watch',
  data () {
    return {
      infoList:""
  }
},
created(){
      Vue.axios.get("../../static/data2.json").then((res)=> {
        return res.data.result.imageList
      }).then((data)=> {
        this.infoList = data
      })
  }
 }
</script>

<style scoped>
  html{
      font-size: 15.625vw;  
    }
 section img{
  width: 100vw;
 }
 image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
