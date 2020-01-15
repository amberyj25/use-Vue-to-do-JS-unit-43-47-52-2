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
    <h2>六角西餐廳-壽星折扣</h2>
    <p>服務生 : HELLO,請問您的生日月份,幫您確認有無壽星的優惠
    <p>顧客 : <input type="text" v-model="a">月 ;  服務生 : {{checka}} </p>
    <p>服務生 : 請問預約的人數是不是還沒到齊?看預約名單是2個人</p>
    <p>顧客 : 現在來到現場人數<input type="text" v-model="number"> 人 ; 服務生 :{{checkb}} </p>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data(){
    return{
            a:"",
            number:"",
    }
  },
  computed:{
    checka(){
      if(this.a == 2 ){
        return "有優惠喔！";
      }else if(this.a == ""){
        return 
      }else{
        return "沒有優惠喔！"
      }
    },
    checkb(){
      if(this.number == 2){
        return "好的,將為您帶位"
      }else if(this.number == ""){
        return
      }else if(this.number > 2){  
        return "因為人數變多,麻煩您稍等一下,幫您確認一下有無位置"
      }else{
        return "麻煩您稍等一下,等您人到齊將為您帶位"
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
input[type="text"]{
  width:50px;
  height:20px;
}
</style>