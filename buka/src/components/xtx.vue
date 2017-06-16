<template>
    <main>
     {{arr}}
    </main>
  
</template>

<script>
import Vue from "vue"
export default {
  name: 'xtx',
  data () {
    return {
      msg: '',
      arr:"",
      list:""
    }
  },
  created(){
    this.arr = window.location.hash.replace("#/xtx/"," ");
    this.arr = decodeURI(this.arr.substring(0,100))
    console.log(this.arr)
  }
 }
</script>

<style scoped>
  main{
    width: 100vw;
    overflow: auto;
    height:100%;
  }


  
</style>
