<template>
<div class="wrap">
  <div class="header">
    <div class="link">
      <router-link to="/">首頁</router-link>
      <router-link :to="{name:'order'}">點餐</router-link>
      <router-link :to="{name:'sale'}">優惠</router-link>
      <router-link :to="{name:'suprice'}">禮物</router-link>
      <router-view></router-view>
    </div>
  </div>
  <div class="clearfix"></div>
  <div class="content">
  <h2>歡迎光臨</h2>
  </div>
</div>
</template>

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
h2{
  font-size: 100px;
  color: yellow;
  position: absolute;
  left: 300px;
  top: 70px;
}
</style>