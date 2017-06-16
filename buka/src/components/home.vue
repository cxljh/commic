<template>
    <main>
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in swipeImg">
          <router-link :to="{ name: 'comicInfo', params:{id:123}}">
             <img :src="item" alt="" >
          </router-link> 
        </mt-swipe-item>
      </mt-swipe>
      <section>
      <h2>每周推荐</h2>
          <ul>
            <li v-for="item in arr">
            <router-link :to="{ name: 'comicInfo', params:{id:item.id}}">
              <img :src="item.cover_url"  alt=""> 
            </router-link>
              <p> {{ item.title }}</p>
              <p class="tit">{{ item.short_desc }}</p>
            </li>          
          </ul>
      </section>
      <section>
      <h2>VIP特权</h2>
          <ul>
            <li v-for="item in list">
              <router-link :to="{ name: 'comicInfo', params:{id:item.id}}">
                <img :src="item.cover_url"  alt=""> 
              </router-link>
              <p> {{ item.title }}</p>
              <p class="tit">{{ item.short_desc }}</p>
            </li>          
          </ul>
      </section>
      <section>
      <h2>新作上线</h2>
          <ul>
            <li v-for="item in newarr">
              <router-link :to="{ name: 'comicInfo', params:{id:item.id}}">
                <img :src="item.cover_url"  alt=""> 
              </router-link> 
              <p> {{ item.title }}</p>
              <p class="tit">{{ item.short_desc }}</p>
            </li>          
          </ul>
      </section>

    </main>
  
</template>

<script>
import Vue from "vue"
export default {
  name: 'home',
  data () {
    return {
      arr:"",
      list:"",
      newarr:"",
      swipeImg:[
        "https://manhua.qpic.cn/operation/0/13_11_03_19d810c614ca3a9069bb069fd605464a_1497323026453.jpg/0",
        "https://manhua.qpic.cn/operation/0/12_11_36_10555c36b3cc2337b9170a6cb5a6b683_1497238594225.jpg/0",
        "https://manhua.qpic.cn/operation/0/12_11_04_5d9085437b1e5981613a69dc720bb2f7_1497236682870.jpg/0",
        "https://manhua.qpic.cn/operation/0/12_11_05_2fe671238ef1665a2e000bd769844639_1497236718355.jpg/0",
        "https://manhua.qpic.cn/operation/0/13_11_07_e93d19e68fc868777ef0c1c84184fdac_1497323257255.jpg/0"
      ]

    }
  },
  created(){
      // 每周推荐 http://m.ac.qq.com/Recommend/get/?num=6&adpos=910&t=1497313867284&
      Vue.axios.get("http://m.ac.qq.com/Recommend/get/?num=6&adpos=910&t=1497313867284&").then((res)=> {
        return res.data.list
      }).then((data)=> {
        this.arr = data
      }),
      //vip http://m.ac.qq.com/Recommend/get/?num=6&adpos=1242&pool_id=204&t=1497313867286&
      Vue.axios.get("http://m.ac.qq.com/Recommend/get/?num=6&adpos=1242&pool_id=204&t=1497313867286&").then((res)=> {
        return res.data.list
      }).then((data)=> {
        this.list = data

      }),
      //http://m.ac.qq.com/Recommend/get/?num=3&adpos=49985&t=1497313867286&
      Vue.axios.get("http://m.ac.qq.com/Recommend/get/?num=3&adpos=49985&t=1497313867286&").then((res)=> {
        return res.data.list
      }).then((data)=> {
        this.newarr = data
      })
    },
   
}
</script>

<style scoped>
  main{
    width: 100vw;
    overflow: auto;
  }

  main section h2{
    font-size: .1rem;
    border-left: 3px solid #ff9966;
    padding-left: .1rem;
    margin-left:5px;
  }
  main section ul{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap:wrap;
  }
   main section ul li{
    width: 45%;
    margin: 5px;
    list-style: none;
    background: #fff;
   }
   main section ul li p{
    font-size: .1rem;
   }
    main section ul li .tit{
      font-size: .06rem;
      color: #dcdcdc;
    }
    main section ul li img{
      width: 100%;
      height: 30vh;
    }
  
</style>
