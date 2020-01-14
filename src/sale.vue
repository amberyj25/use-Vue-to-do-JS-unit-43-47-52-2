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
    </div>
  </div>
</div>
</template>
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
</style>