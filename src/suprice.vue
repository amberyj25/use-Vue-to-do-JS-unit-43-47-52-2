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
        <h2>六角西餐廳 - 贈品篇</h2>
          <p>服務生：請問你是 VIP 嗎？帳單滿千元嗎？兩者達到可送贈品哦！</p>
          <p>顧客：
          <input type="checkbox" v-model="twoVip" id="twoVip">
          <label for="twoVip" name="twoVip" value="twoVip">vip</label>
          <input type="checkbox" v-model="twoMoney" id="twoMoney">
          <label for="twoMoney" name="twoMoney" value="twoMoney">滿千元</label>
          <span> ; 服務生：{{checkTwo}}</span>
          </p>
          <p>服務生：抱歉我記錯了，只要一個有達到就送贈品嘍，再麻煩幫我確認一下？</p>
          <p>顧客：
          <input type="checkbox" id="oneVip" v-model="oneVip">
          <label for="oneVip">vip</label>
          <input type="checkbox" id="oneMoney" v-model="oneMoney">
          <label for="oneMoney">滿千元</label>
          <span>; 服務生：{{checkone}}</span>
          </p>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data(){
    return {
      twoVip:"",
      twoMoney:"",
      oneVip:"",
      oneMoney:""
    }
  },
  computed:{
    checkTwo(){
      if(this.twoVip == true & this.twoMoney == true){
        return "將有禮物送給你"
      }else{
        return "歡迎之後還可以再來消費"
      }
    },
    checkone(){
      if(this.oneVip == true || this.oneMoney == true){
        return "將有禮物送給你"
      }else{
        return "歡迎之後還可以再來消費"
      }
    }
  }
}
</script>
<style>
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
    height:300px;
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