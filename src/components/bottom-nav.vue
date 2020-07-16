<template>
  <div class='bottom-nav'>
    <Menu :datas="data" mode="horizontal"></Menu>
    <div class="footer">
     <p>友情链接：拼多多上货&nbsp;助手微店上货助手&nbsp;拼多多快递打单助手&nbsp;面兜兜官网拼多多代购下单助手&nbsp;虾皮上货助手-台湾版&nbsp;整店采集&nbsp;下载之家&nbsp;绿色资源&nbsp;网飞翔下载&nbsp;天极下载&nbsp;JZ5U绿色下载站&nbsp;3322下载站&nbsp;心愿下载&nbsp;绿点软件&nbsp;极速下载&nbsp;99软件站&nbsp;吾爱易&nbsp;游侠下载&nbsp;当客软件园&nbsp;绿盟市场&nbsp;好特下载&nbsp;拼多多上货助理&nbsp;虾皮上货助手&nbsp;虾皮上货助理&nbsp;</p>
     <p> ©2013-2020面兜兜(COMSENZ INC)版权所有，并保留所有权利（津ICP备12007879号</p>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      // 底部导航栏数据
      data:[]
    }
  },
  created(){
    this.getMenu()
  },
  methods:{
    getMenu(){
        this.$axios.get('/getmenu').then((res) => {
        this.data = res.data
      })
    }
  }
}
</script>

<style scoped lang='less'>
.bottom-nav{
  width: 100%;
  height: 300px;
  background-color:gray;
  .h-menu{
    height: 60px;
    line-height: 60px;
    text-align: center;
    background-color: gray;
    color: #333;
    font-size: 16px;
    /deep/.h-menu-li{
      margin: 0 30px;
      font-size: 18px;
    }
    
  }
  .footer{
    p{
      text-align: center;
      padding: 0 100px;
      height: 40px;
      line-height: 40px;
    }
    p:nth-child(1){
      font-size: 15px;
      margin: 50px 0 ;
    }
     p:nth-child(2){
        font-size: 13px;
        margin-top: 75px;
      }
  }
}
</style>