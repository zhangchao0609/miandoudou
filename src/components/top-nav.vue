<template>
  <div class='heard'>
    <span class="logo">
      <img src="../assets/logo.jpg" alt="">
    </span>
    <div class="menu" v-padding="20">
      <Menu :datas="menuDatas" mode="horizontal"></Menu>
    </div>
    <div class="unlogin">
      <a href="" class="login">登录</a>
      <a href="" class="register">注册</a>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      // 菜单导航数据
      menuDatas:[]
    }
  },
  created(){
    // 渲染菜单数据
    this.getMenu()
  },
  methods:{
    // 获取菜单数据
    getMenu(){
        this.$axios.get('/getmenu').then((res) => {
        // console.log(res.data)
        this.menuDatas = res.data
      })
    },
  }
}
</script>

<style scoped lang='less'>
.heard{
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  z-index: 100;
  margin: 0 auto;
  background-color: white;
  box-sizing: border-box;
  .logo{
    width: 134px;
    float: left;
    margin-left: 300px;
    box-sizing: border-box;
    
    img{
      width: 134px;
      height: 70px;
    }
  }
  .menu{
    width: 768px;
    height: 70px;
    float: left;
    .h-menu{
      background: transparent;
      // background-color: white;
      color: #333;
    }

  }
  .unlogin{
    width: 220px;
    height: 70px;
    padding-top: 30px;
    float: left;
    a{
      display: inline-block;
      width: 50px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 13px;
      border: 1px solid blue;
      border-radius: 5px;
      margin-left: 20px;
      color: blue;
    }
  }
}
</style>