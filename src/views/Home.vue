<template>
  <div class="home">
    <!-- 顶部导航 -->
      <topNav></topNav>
    <!-- 轮播图 -->
     <div class="carousel">
      <Carousel :datas="banner" :height="636" pageTheme="circle" ></Carousel>
    </div>
    <!-- 圆圈信息 -->
    <div class="counter">
      <Row type="flex" justify="space-around" :space="10">
        <Cell :width='4'>
          <div class="flex-center">
            <span class="counter-value">50000</span>
            <span class="add">+</span>
          </div>
          <p class="numAddTitle">客户信赖首选</p>
        </Cell>
        <Cell :width='4'>
          <div class="flex-center">
            <span class="counter-value">100亿</span>
            <span class="add">+</span>
          </div>
          <p class="numAddTitle">服务商家年销售额</p>
        </Cell>
        <Cell :width='4'>
          <div class="flex-center">
            <span class="counter-value">365x15h</span>
            <span class="add">+</span>
          </div>
          <p class="numAddTitle">客服优质服务</p>
        </Cell>
        <Cell :width='4'>
          <div class="flex-center">
            <span class="counter-value">6年</span>
            <span class="add">+</span>
          </div>
          <p class="numAddTitle">电商行业经验</p>
        </Cell>
        
      </Row>
    </div>
    <p class="interval"></p>
    <!-- 实时信息 -->
    <div class="message">
      <h2>实时信息</h2>
      <hr>
      <div class="msg">
        <Row type="flex" >
          <Cell :width="8">
            <div class="news-top">最新公告</div>
            <div class="news-bottom">
              <a href="javascript:;">[20-15]&nbsp;&nbsp;通知:面兜兜上货助手和采购助手(拼多多版)订单显示...</a>
              <a href="javascript:;">[20-44]&nbsp;&nbsp;面兜兜2020端午节放假通知</a>
              <a href="javascript:;">[20-08]&nbsp;&nbsp;公告:面兜兜上货助手全能版功能拆分通知</a>
              <a href="javascript:;">[20-03]&nbsp;&nbsp;紧急通知:2020.5.3日上午10点屁拼多多系统出现...</a>
              <a class="more" href="javascript:;W">查看更多>></a>
            </div>
          </Cell>
          <Cell :width="8">
            <div class="news-top">最新更新</div>
            <div class="news-bottom">
              <a href="javascript:;">[20-15]&nbsp;&nbsp;通知:面兜兜上货助手和采购助手(拼多多版)订单显示...</a>
              <a href="javascript:;">[20-44]&nbsp;&nbsp;面兜兜2020端午节放假通知</a>
              <a href="javascript:;">[20-08]&nbsp;&nbsp;公告:面兜兜上货助手全能版功能拆分通知</a>
              <a href="#">[20-03]&nbsp;&nbsp;紧急通知:2020.5.3日上午10点屁拼多多系统出现...</a>
              <a class="more" href="javascript:;">查看更多>></a>
            </div>
          </Cell>
          <Cell :width="8">
            <div class="news-top">开店攻略</div>
            <div class="news-bottom">
              <a href="javascript:;">[20-15]&nbsp;&nbsp;通知:面兜兜上货助手和采购助手(拼多多版)订单显示...</a>
              <a href="javascript:;">[20-44]&nbsp;&nbsp;面兜兜2020端午节放假通知</a>
              <a href="javascript:;">[20-08]&nbsp;&nbsp;公告:面兜兜上货助手全能版功能拆分通知</a>
              <a href="javascript:;">[20-03]&nbsp;&nbsp;紧急通知:2020.5.3日上午10点屁拼多多系统出现...</a>
              <a class="more" href="javascript:;">查看更多>></a>
            </div>
          </Cell>
        </Row>
      </div>


    </div>
    <!-- 核心产品 -->
    <div class="product">
      <div class="core_p">
        <h2>核心产品</h2>
        <hr>
        <div class="core_content">
          <Row type='flex'>
            <Cell :width="6">
              <div class="core-content-top">
                <div class="img"></div>
                <h4>上货软件</h4>
              </div>
              <div class="core-content-bottom">
                <span>查看更多</span>
              </div>
              <div class="core-content-more">
                  <div class="more">
                      <span>整店搬家</span>&nbsp;&nbsp;<span>急速上传</span>
                  </div>
                  <div class="more">
                     <span>商品管理</span>&nbsp;&nbsp;<span>自动修图</span>
                  </div>
                  <div class="more">
                    <span>一键采集</span>&nbsp;&nbsp;<span>批量打折</span>
                  </div>

              </div>
            </Cell>
            <Cell :width="6">
              <div class="core-content-top">
                <div class="img"></div>
                <h4>打单软件</h4>
              </div>
              <div class="core-content-bottom">
                <span>查看更多</span>
              </div>
              <div class="core-content-more">
                    <div class="more">
                      <span>支持多平台</span>&nbsp;&nbsp;<span>任意平台打印</span>
                  </div>
                  <div class="more">
                     <span>快递单打印</span>&nbsp;&nbsp;<span>自动发货</span>
                  </div>
                  <div class="more">
                     <span>提货单打印</span>&nbsp;&nbsp;<span>订单管理</span>
                  </div>
                  <div class="more">
                     <span>发货单打印</span>&nbsp;&nbsp;<span>物流追踪</span>
                  </div>
              </div>
            </Cell>
            <Cell :width="6">
              <div class="core-content-top">
                <div class="img"></div>
                <h4>代购软件</h4>
              </div>
              <div class="core-content-bottom">
                <span>查看更多</span>
              </div>
              <div class="core-content-more">
                  <div class="more"><span>一件代发</span></div>
                  <div class="more"><span>自动发货</span></div>
                  <div class="more"><span>订单查询</span></div>
                  <div class="more"><span>利润统计</span></div>
              </div>
            </Cell>
            <Cell :width="6">
              <div class="core-content-top">
                <div class="img"></div>
                <!-- <img src="../assets/tubiao.png" alt=""> -->
                <h4>客户集成软件</h4>
              </div>
              <div class="core-content-bottom">
                <span>查看更多</span>
              </div>
              <div class="core-content-more">
                  <div class="more"><span>多店铺集成</span></div>
                  <div class="more"><span>多店后台集成</span></div>
                   <div class="more"><span>新消息提醒</span></div>
                  <div class="more"><span>店铺掉线提示</span></div>
                  <div class="more"><span>自定义提示音</span></div>
              </div>
            </Cell>
          </Row>
        </div>
      </div>
    </div>
    <!-- 产品优势 -->
    <div class="advantage">
      <h2>产品优势</h2>
      <hr>
      <div class="product-a">
        <Row type="flex">
          <Cell :width="8">
            <div class="icon">
              <i class="h-icon-bell"></i>
            </div>
            <h3>资深经验</h3>
            <span>八年沉淀专注电商行业</span>
          </Cell>
          <Cell :width="8">
            <div class="icon">
              <i class="h-icon-bell"></i>
            </div>
            <h3>专业技术</h3>
            <span>强大的开发团队不断优化升级软件</span>
          </Cell>
          <Cell :width="8">
            <div class="icon">
              <i class="h-icon-bell"></i>
            </div>
            <h3>行业领跑</h3>
            <span>多款软件全网首发独立功能领跑</span>
          </Cell>
        </Row>
      </div>
      <div class="product-a">
        <Row type="flex">
          <Cell :width="8">
            <div class="icon">
              <i class="h-icon-bell"></i>
            </div>
            <h3>业界口碑</h3>
            <span>多年积累大量忠实用户口碑相传</span>
          </Cell>
          <Cell :width="8">
            <div class="icon">
              <i class="h-icon-bell"></i>
            </div>
            <h3>优质搭档</h3>
            <span>与多家电商平台深度合作</span>
          </Cell>
          <Cell :width="8">
            <div class="icon">
              <i class="h-icon-bell"></i>
            </div>
            <h3>全年服务</h3>
            <span>优质的售后服务7x15小时及时回复</span>
          </Cell>
        </Row>
      </div>
    </div>
    <!-- 底部导航 -->
       <bottomNav></bottomNav>
  </div>
</template>

<script>
// 导入组件
import topNav from '../components/top-nav'
import bottomNav from '../components/bottom-nav'
export default {
  name: 'Home',
  data(){
    return{
      // 轮播图
        banner:[]
    }
  },
  components:{
    topNav,
    bottomNav
  },
  created(){
    // 渲染轮播图数据
    this.getImg()
  },
  methods:{
    // 获取轮播图数据
    getImg(){
        this.$axios.get('/getimg').then((res) => {
        // console.log(res.data)
        this.banner = res.data
      })
    }
  }
}
</script>
<style scoped lang='less'>
.carousel{
  margin-top: 70px;
}
// 圆圈信息
.counter{
  width: 100%;
  height: 210px;
  // margin-left: 300px;
  padding-top: 30px;
  padding-left: 400px;
  box-sizing: border-box;
  // margin: 0 auto;
  text-align: center;
  .h-row-flex{
    width: 1142px;
    height: 186px;
    .h-col{
      border: 4px solid blue;
      border-radius: 50%;
      .flex-center{
        width: 116px;
        height: 70px;
        margin-left: 40px;
        margin-top: 40px;
        margin: 40px auto 0;
        .counter-value{
          // margin: 0 auto;
          // text-align: center;
          font-size: 30px;
          line-height: 70px;
          font-weight: 700;
          color: #512bff;
        }
        .add{
          color: #512bff;
          font-size: 30px;
          font-weight: 700;
        }
      }
      .numAddTitle{
        text-align: center;
        font-size: 16px;
        color: #5b616e;
        margin: 0;
        margin-bottom: 20px;
      }
    }
  }
}
.interval{
  width: 100%;
  height: 30px;
  background-color: #f4f5f6;
  margin-top: 20px;
}
// 实时信息
.message{
  width: 100%;
  height: 398px;
  h2{
    color: #333;
    font-weight: 700;
    text-align: center;
    margin-top: 30px;
  }
  hr{
     width: 50px;
      height: 3px;
      background-color: blue;
  }
  .msg{
    width: 1332px;
    height: 225px;
    // background-color: red;
    margin: 0 auto;
    margin-top: 30px;
    .news-top{
      width: 430px;
      color: #fff;
      font-size: 20px;
      height: 50px;
      font-weight: 700;
      padding: 10px;
      background-color: blue;
    }
    .news-bottom{
      width: 430px;
      height: 200px;
      background-color: #fafafa;
      padding: 10px;
      a{
        height: 30px;
        line-height: 30px;
        display: block;
        color: #333;
        margin: 6px 0;
      }
      .more{
        float: right;
        color: blue;
      }
    }
  }
}
// 核心产品
.product{
  width: 100%;
  height: 550px;
  background-color: #f4f5f6;
  .core_p{
    height: 494px;
    margin: 0 18%;
    padding: 20px 0 40px 0;
    h2{
    color: #333;
    font-weight: 700;
    text-align: center;
    margin-top: 30px;
    }
    hr{
     width: 50px;
      height: 3px;
      background-color: blue;
    }
    .core_content{
      width: 100%;
      margin-top: 15px;
      background-color: #fff;
      .h-col{
        height: 386px;
        border-right: 1px solid gainsboro;
        .core-content-top{
          width: 184px;
          height: 200px;
          margin: 0 auto;
          text-align: center;
          border-bottom: 1px solid gainsboro;
          // margin: 15px 60px 0 60pxs;
          .img{
            width: 100px;
            height: 100px;
            border: 3px solid blue;
            border-radius: 50%;
            margin: 0 auto;
            margin-top: 30px;
            margin-bottom: 30px;
            box-sizing: border-box;
            // 
          }
          h4{
            font-size: 16px;
            font-weight: 600;
            display: block;
          }

        }
        .core-content-bottom{
          display: block;
          height: 150px;
          line-height: 150px;
          text-align: center;
        }
        .core-content-more{
          display: none;
          width: 303px;
          height: 150px;
          text-align: center;
          padding-top: 30px;
          .more{
            height: 25px;
            margin: 0 auto;
            color: white;
          }
        }

      }
      .h-col:hover{
        background-color: blue;
        .core-content-top{
          border-bottom: 1px solid white;
          .img{
              border: 3px solid white;
          }
          h4{
            color: white;
          }
        }
        .core-content-bottom{
          display: none;
        }
        .core-content-more{
          display: block;
        }
      }
    }

  }
}
// 产品优势
.advantage{
  width: 1142px;
  height: 508px;
  margin: 0 auto;
   h2{
    color: #333;
    font-weight: 700;
    text-align: center;
    margin-top: 30px;
    }
    hr{
     width: 50px;
      height: 3px;
      background-color: blue;
    }
    .product-a{
      width: 1142px;
      height: 198px;
      padding: 30px 15px;
      .h-col:hover{
        margin-top: 5px;
        transition: all 0.5s;
        .icon{
          width: 70px;
          height: 70px;
          box-sizing: border-box;
          text-align: center;
          i{
            font-size: 26px;
          }
        }
        h3{
          font-size: 21px;
        }
        span{
          font-size: 19px;
        }

      }
      .h-col{
        height: 198px;
        // padding: 30px 15px;
        box-sizing: border-box;
        text-align: center;
        .icon{
          margin: 0 auto;
          width: 60px;
          height: 60px;
          line-height: 60px;
          border: 2px solid gainsboro;
          border-radius: 50%;
          i{
            font-size: 22px;
          }
        }
        h3{
          font-size: 20px;
          font-weight: 600;
          margin: 15px 0 8px 0;
        }
        span{
          color: #515050;
          font-size: 18px;
        }
      }
    }
}
</style>
