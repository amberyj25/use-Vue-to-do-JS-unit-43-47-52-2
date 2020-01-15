<template>
<div class="wrap">
  <div class="header">
    <div class="link">
      <router-link to="/">首頁</router-link>
      <router-link :to="{name:'order'}">點餐</router-link>
      <router-link :to="{name:'sale'}">優惠</router-link>
      <router-link :to="{name:'suprice'}">禮物</router-link>
    </div>
  </div>
  <div class="clearfix"></div>
  <div class="content">
    <div class="content-inner">
    <div class="content-innerbox">
        <h2>六角西餐廳 - 點餐篇</h2>
        <p>服務生：A小姐您好請問您的飢餓程度<input type="text" placeholder="輸入後按enter" v-model="hungryA" @keydown.enter="A">,飢餓程度大於5比較想適合吃牛排,飢餓程度小於5比較想適合吃沙拉？</p>
        <p>顧客：
          <em v-if="text1">牛排</em>
          <em v-else-if="text2">沙拉</em>
          <em v-else></em>
        </p>
        <p>服務生：B先生您好請問您的飢餓程度<input type="text" v-model="hungryB" placeholder="輸入後按enter" @keydown.enter="B">,飢餓程度大於5比較想適合吃Aset,飢餓程度小於5比較想適合吃Bset？</p>
        <p>顧客：
            <em v-if="text3">Aset</em>
            <em v-else-if="text4">Bset</em>
            <em v-else></em>
        </p>
    </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
    data(){
      return{
        hungryA:"",
        hungryB:"",
        text1:false,
        text2:false,
        text3:false,
        text4:false,
      }
    },
    methods:{
      A(){
        if(parseInt(this.hungryA)>5){
          this.text1 = true;
          this.hungryA="";
        }else if(parseInt(this.hungryA)<=5){
          this.text2 =true;
          this.hungryA=""
        }else{
          this.hungryA= "";
          return
        }
      },
      B(){
        if(parseInt(this.hungryB)>5){
          this.text3 = true;
          this.hungryB=""
        }else if(parseInt(this.hungryB)<=5){
          this.text4 = true;
          this.hungryB=""
        }else{
          this.hungryB=""
          return
        }
      }
    },
}
</script>
<style scoped>
.wrap{
  width: 1000px;
  margin: auto;
}
.link{
  width:450px;
  float: right;
}
.link a{
  display: block;
  width:110px;
  float: left;
  text-decoration: none;
  font-size: 30px;
  text-align: center;
}
input[type="text"]{
  width:100px;
}
.clearfix{
  clear: both;
}
.content{
  width: 1000px;
  height: 1000px;
  margin: auto;
  background: url(./img/desktop.png) no-repeat ;
  position: relative;
}
.content-inner{
    width:800px;
    height: 335px;
    background: black;  
    opacity:0.7;
    position: absolute;
    left: 100px;
    top:70px;
}
.content-innerbox{
    padding-left: 50px;
    padding-right: 50px;
}
h2,p{
    color: yellow;
    opacity: 1;
}
h2{
    font-size: 30px;
    margin-left:180px;
}
p{
    font-size: 20px;
}
</style>