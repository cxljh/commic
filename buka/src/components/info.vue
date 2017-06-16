<template>
    <div>
      <ul class="one">
        <li  v-for="item in arr">
          <router-link to="classify">
            <span></span>
          </router-link>
          <p>{{item.tit }}</p>
        </li>
      </ul>
      <ul class="tow">
        <li v-for="item in list">
          <router-link to="classify">
            <span><img :src="item.myUrl" alt=""></span>
          </router-link>          
          <p>{{ item.tit }}</p>
        </li>
      </ul>
    </div>
   
</template>

<script>
import Vue from "vue"
export default {
  name: 'info',
  data () {
    return {
      list:[
        {tit:"最近上新",myUrl:"http://i-r6.sosobook.cn/logo/group/20170424145626_58fda19accdd9.jpg"},
        {tit:"日韩",myUrl:"http://i-r6.sosobook.cn/logo/group/20160314180045_56e68bcdc7193.jpg"},
        {tit:"动漫",myUrl:"http://i-r6.sosobook.cn/logo/group/20151013151320_561caf1078614.jpg"},
        {tit:"联合出品",myUrl:"http://i-r6.sosobook.cn/logo/group/20150925183512_5605236047829.jpg"},
        {tit:"少女",myUrl:"http://i-r6.sosobook.cn/logo/group/20150909165607_55eff4276f9a7.jpg"},
        {tit:"百合",myUrl:"http://i-r6.sosobook.cn/logo/group/20151120172131_564ee61b425c6.jpg"},
        {tit:"肥皂",myUrl:"http://i-r6.sosobook.cn/logo/group/20160314180433_56e68cb162845.jpg"},
        {tit:"恋爱",myUrl:"http://i-r6.sosobook.cn/logo/group/20150925183521_56052368e6ef1.jpg"},
        {tit:"玄幻",myUrl:"http://i-r6.sosobook.cn/logo/group/20151109155620_564051a421997.jpg"},
        {tit:"污污污",myUrl:"http://i-r6.sosobook.cn/logo/group/20170225150904_58b12d90b2274.jpg"},
        {tit:"游戏",myUrl:"http://i-r6.sosobook.cn/logo/group/20150925183527_5605236f5c819.jpg"},
        {tit:"治愈",myUrl:"http://i-r6.sosobook.cn/logo/group/20150925183530_56052372a8309.jpg"},
        {tit:"恐怖",myUrl:"http://i-r6.sosobook.cn/logo/group/20170213181733_58a187bdbcb4c.png"},
        {tit:"科幻",myUrl:"http://i-r6.sosobook.cn/logo/group/20150925183535_56052376e7e91.jpg"},
        {tit:"搞笑",myUrl:"http://i-r6.sosobook.cn/logo/group/20150925183542_5605237e62da9.jpg"},       
        {tit:"鬼怪",myUrl:"http://i-r6.sosobook.cn/logo/group/20150925183546_5605238298cf1.jpg"},
        {tit:"励志",myUrl:"http://i-r6.sosobook.cn/logo/group/20150925183549_56052385c6f39.jpg"},
        {tit:"格斗",myUrl:"http://i-r6.sosobook.cn/logo/group/20150925183557_5605238dab5d1.jpg"},
        {tit:"布卡娘",myUrl:"http://i-r6.sosobook.cn/logo/group/20150810121934_55c8265664a82.jpg"},
      ],
      arr:[
        {tit:"最近更新"},
        {tit:"今日热搜"},
        {tit:"月票榜"},
        {tit:"漫展周边"},
        {tit:"vip"},
        {tit:"已完结"}
      ],
      selected:"2"
    }
  }
 }
</script>

<style scoped>
  html{
    font-size: 15.625vw;
   
  }
  div{
     background: #f7f7f7;
  }
  li{
    list-style: none;
  }
  ul{
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
  }
  li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33%;
  }
  .one li{   
    height: 3rem;
    background:linear-gradient(to right top, #fff,#fcfcfc);

  }
  span{
    margin: .2rem 0;
    display: block;
    width: 1.45rem;
    height: 1.45rem;
    border-radius: 100%;
  }
  .one li:nth-child(1) span{   
    background: #e94e7a url(../assets/1.png) no-repeat center;   
  }
  .one li:nth-child(2) span{   
    background: #f26d5c url(../assets/2.png) no-repeat center;   
  }
  .one li:nth-child(3) span{   
    background: #fe912c url(../assets/3.png) no-repeat center;   
  }
  .one li:nth-child(4) span{   
    background: #d791d0 url(../assets/6.png) no-repeat center;   
  }
  .one li:nth-child(5) span{   
    background: #969deb url(../assets/4.png) no-repeat center;   
  }
  .one li:nth-child(6) span{   
    background: #61d2cc url(../assets/5.png) no-repeat center;   
  }
  .tow span img{
    width: 100%;
    border-radius: 100%;
  }
  p{
      font-size: .1rem;
      width: 100%;
      text-align: center;
  }

</style>
