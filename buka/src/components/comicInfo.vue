<template>
  <div>
      <mt-header title="">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <section>
          <img :src="newarr.cover_url" alt="">
          <div>
            <h2>{{newarr.title}}</h2>
            标签：<span>{{newarr.tags.bq1}}</span>
                  <span>{{newarr.tags.bq2}}</span>
                  <span>{{newarr.tags.bq3}}</span>
            人气：<span>{{newarr.id}}万</span>
          </div>
      </section>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">详情</mt-tab-item>
        <mt-tab-item id="2">目录</mt-tab-item>
        <mt-tab-item id="3">评论</mt-tab-item>
      </mt-navbar>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
            <p class="center">{{ newarr.short_desc }}</p>
              <h2>骚年们都在看</h2>
              <ul>
                <li v-for="item in arr">
                  <img :src="item.cover_url" alt="">
                  <span>{{item.title}}</span>
                  <p>{{item.short_desc}}</p>
                </li>
              </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
            
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
            <mt-cell :title="item.nick_name" v-for="item in list">
              <span class="right">{{ item.good }}</span>
              <img slot="icon" :src="item.qq_head" width="24" height="24">
              <div class="float">
                  <p class="comment">{{ item.content }}</p>  
              </div>                               
            </mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
</template>

<script>
import Vue from "vue"
export default {
  name: 'comicInfo',
  data () {
    return {
      selected:"3",
      arr:"",
      list:"",
       newarr:{
          "id": 549572,
          "cover_url": "https://manhua.qpic.cn/vertical/0/17_17_18_ca4baafa05f55de2474f310f2c03764c.jpg/210",
          "title": "无妄之灾",
          "short_desc": "与实验品的畸形之恋",
          "tags": {
              "bq1": "魔幻",
              "bq2": "悬疑",
              "bq3": "都市"
          }
        },
    }
  },
  created(){
    // http://m.ac.qq.com/Recommend/get/?num=3&adpos=911&comic_id=550368&t=1497495818470&
      Vue.axios.get("http://m.ac.qq.com/Recommend/get/?num=3&adpos=911&comic_id=550368&t=1497495818470&").then((res)=> {
        return res.data.list
      }).then((data)=> {
        this.arr = data
      }),
      // http://m.ac.qq.com/comment/getCommentList/id/550368?t=1497495818486&page=1&pageSize=10
      Vue.axios.get("http://m.ac.qq.com/comment/getCommentList/id/550368?t=1497495818486&page=1&pageSize=10").then((res)=> {
        return res.data.data.commentList     
      }).then((data)=> {
        this.list = data
        console.log(this.list)
      })
  }
 }
</script>

<style scoped>
  html{
      font-size: 15.625vw;  
    }
    section{
      background: #69665e;
      height: 35vh;
    }
    section img{
      width: 40vw;
      position: absolute;
      left: 5vw;
      top: 17vh;
    }
    section div{
      width: 40vw;
      position: absolute;
      right: 5vw;
      top: 17vh;
      font-size: .3rem;
      color: #fff;
    }
    section div h2{
      font-size: .4rem;
      margin-bottom: .4rem;
    }
    section div span{
      margin: .3rem 0;
      color: #fdc;
    }
    .center{
      width: 100vw;
      height: 10vh;
      text-align: center;
      margin: 1rem 0;
      color: #000;
    }
    h2{
      font-size: .3rem;
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
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      height: .3rem;
  }
  p{
      font-size: .1rem;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #bcbcbc;

  }
  .mint-cell{
    width: 100vw;
    height: 20vh;
  }
  .mint-cell img{
    border-radius: 100%;
  }
  .right{
    width: .4rem;
    background: url('../assets/bg.png') no-repeat left;
    padding-left: .4rem;
  }
  .float{
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 100vw;
    height: 10vh;
  }
  .timer{
  margin-bottom: .5rem 0;
  }
</style>
