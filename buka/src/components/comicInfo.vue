<template>
  <div>
  <header>
    <mt-header title="" class= "top">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
  </header>     
      <section>
          <img :src="newarr.cover_url" alt="">
          <div>
            <h2>{{newarr.title}}</h2>

            标签：<span>{{newarr.tags.bq1}}</span>
                  <span>{{newarr.tags.bq2}}</span>
                  <span>{{newarr.tags.bq3}}</span>
            作者：<span>{{newarr.anth}}</span>
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
            <div class="center">{{ newarr.short_desc }}</div>
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
            <ul class="myInfo">
                  <li v-for="item in infoList" class="myli">
                    <router-link to="/watch">
                      <span>{{ item.name }}</span>
                    </router-link> 
                  </li>                             
            </ul>
            <h2>骚年们都在看</h2>
              <ul>
                <li v-for="item in arr">
                  <img :src="item.cover_url" alt="">
                  <span>{{item.title}}</span>
                  <p>{{item.short_desc}}</p>
                </li>
              </ul>
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
      selected:"2",
      arr:"",
      list:"",
      infoList:"",
       newarr:{
          "id": 549572,
          "cover_url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497588103749&di=80ed138d7733ce207a5b49bf0fbf3abf&imgtype=0&src=http%3A%2F%2Fpic23.nipic.com%2F20120912%2F10645060_104206979000_2.jpg",
          "title": "火影忍者",
          "short_desc": "这是一个忍者的世界。从小身上封印着邪恶的九尾妖狐， 鸣人受尽了村人的冷落，只是拼命用各种恶作剧试图吸引大家的注意力。好在还是有依鲁卡老师关心他，鸣人的性格才没有变得扭曲，他总是干劲十足，超级乐观。为了让更多的人认可自己，鸣人的目标是成为第六代火影!鸣人的同伴，是由老师确定的同班同学，随着共同的战斗，终于成了互相认可、信赖的好伙伴",
          "tags": {
              "bq1": "热血",
              "bq2": "友情",
              "bq3": "格斗"
            },
            anth:"日籍|岸本齐史"
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
      }),
      Vue.axios.get("../../static/data1.json").then((res)=> {
        return res.data.result.chapterList
      }).then((data)=> {
        this.infoList = data
        console.log(this.infoList)
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
      margin: 1rem 0;
      color: #000;
      font-size: .1rem;
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
  .myInfo{
    display: flex;
    
    justify-content: space-around;
    flex-flow: wrap;
  }
  .myli{
    font-size: .1rem;
    width: 25%;
    height: 5vh;
    border: 2px solid #bcbcbc;
    border-radius: 60%;
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
  .mint-navbar .mint-tab-item.is-selected{
    margin-top: 0;
  }
  header .top{
    position: fixed;
    top: 40px;
    width: 100vw;
    background: #bcbcbc;
    color: #fff;
  }
  section img{
    width: 35vw;
    height: 25vh;
  }
</style>
