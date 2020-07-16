// 导入mock.js模拟假数据
import Mock from 'mockjs'
// 菜单假数据
Mock.mock('/getmenu', 'get', () => {
  return [
    {
      title: '首页',
      key: 'home',
    },
    {
      title: '产品中心',
      key: 'product_center',
    },
    {
      title: '帮助中心',
      key: 'help_center',
    },
    {
      title: '服务订购',
      key: 'serve_order',
    },
    {
      title: '软件下载',
      key: 'software_down',
    },
    {
      title: '诚招代理',
      key: 'agency',
    },
    {
      title: '关于我们',
      key: 'about_user',
    }
  ]
})
// 轮播图数据
Mock.mock('/getimg', 'get', () => {
  return [
    {
      image: 'http://data.miandoudou.com/file/upload/202002/06/154526202953.png'
  },
  {
      image: 'http://data.miandoudou.com/file/upload/201911/20/142001562953.png'
  },
  {
      image: 'http://data.miandoudou.com/file/upload/201905/15/143141741.png'
  },
  {
    image: 'http://data.miandoudou.com/file/upload/201905/15/143141741.png'
  }
  ]
})