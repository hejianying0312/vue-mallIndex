
import 'wc-messagebox/style.css'
<style>

    .swiper-container-horizontal>*>.slider-pagination-bullet{
      background:  #fff none repeat scroll 0 0 !important; 
      opacity: .6 !important;
    }
    .swiper-container-horizontal .slider-pagination-bullet-active{
       background: #e01212 none repeat scroll 0 0 !important; 
       opacity: 1 !important;
    }
</style>
<style scoped>
  .header {
    width: 100%;
    box-sizing: border-box;
    padding: 0.24rem 0.2rem;
    display: flex;
    justify-content:space-between;
  }
  .header .red_packet{
    width: 0.38rem;
    height: 0.52rem;
    background: url("../assets/image/hongbao.png") no-repeat center/contain;
  }
  .header_header{
    width: 2.58rem;
    height: 0.62rem;
    background: url("../assets/image/logo.png") no-repeat center/contain;
  }
  .clock{
    width: 0.4rem;
    height: 0.42rem;
    background: url("../assets/image/xitongxiaoxi.png") no-repeat center/contain;
  }
  .swiper{
    width: 100%;
    height: 3rem;
  }
  /* 爆款排行 */
  .hot_sall{
    box-sizing: border-box;
    width: 100%;
    padding: 0.1rem 0.2rem 0 0.2rem;
  }
 .nav{
    width: 6.95rem;
    height: 1.06rem;
  }
 .nav_hot_sell{
  background: url("../assets/image/baokuan.png") no-repeat center/contain;
 }
 .hot_sall_main{
   width: 7.1rem;
  display: flex;
  justify-content: space-between;
 }
 .hot_sall_main .left{
  width: 2.8rem;
	height: 3.92rem;
  background-color: #fff3f5;
  overflow: hidden;
 }
 .hot_sall_top1{
   font-family: MicrosoftYaHei;
   margin-left: 0.25rem;
 }
 .top1{
  color: #e01212;
  font:0.38rem MicrosoftYaHei;
  margin-top: 0.14rem;
 }
 .capacity{
  color: #8e9198;
  font:0.26rem MicrosoftYaHei;
  margin-top: 0.12rem;
 }
 .rush_buy{
  margin-top: 0.1rem;
  width: 1.27rem;
	height: 0.32rem;
  background-color:transparent;
  background:url('../assets/image/lijigoumaim.png') no-repeat center/contain; 
  font:0.18rem MicrosoftYaHei;
  line-height: 0.32rem;
  color: #ffffff;
  box-sizing: border-box;
  padding-left: 0.09rem;
  text-align: left; 
 }
 .coupon{
  margin-top: 0.04rem;
  color: #ff4d4f;
  font-size:0.24rem;
 }
 .oprice{
  margin-top: 0.04rem;
  color: #cccccc;
  font-size: 0.24rem;
 }
 .top1_img{
  width: 2.62rem;
	height: 1.52rem;
  margin-left: 0.1rem;
  margin-top: 0.1rem;
 }
 .hot_sall_main .right{
  width: 4.1rem;
  height: 3.92rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  }
  .right .common{
    width: 100%;
    box-sizing: border-box;
    padding-left: 0.23rem;
    padding-right: 0.1rem;
    background-color: #f6f6ff;
    display: flex;
    justify-content: space-around;
  }
  .right .top2{
    height: 1.94rem;
  }
  .top2_img{
    margin: 0 auto;
    width: 0.77rem;
	  max-height: 1.48rem
  }
  .right .top3{
    height: 1.78rem;
  }
  /* 主播推荐 */
  .recommed{
    box-sizing: border-box;
    width: 100%;
    padding: 0.33rem 0.2rem 0 0.2rem;
  }
.nav_recommend{
  background:url('../assets/image/zhubo.png') no-repeat center/contain; 
}

@keyframes scaleDraw {
    0%{
        transform: scale(1);
    }
    25%{
        transform: scale(1.5);
    }
    50%{
        transform: scale(1);
    }
    75%{
        transform: scale(1.5);
    }
}
.ballon{
    width: 150px;
    height: 200px;
    animation-name: scaleDraw;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 5s;
}
</style>

<template>
<div class="index">
  <Loadmore
            @reachBottom="reach"
            :limit = "20"
            :loadState="loadState"
        >
      <header class="header">
          <a class="red_packet ballon"></a>
          <a class="header_header"></a>
          <a class="clock"></a>
        </header>
        <article class="swiper">
          <slider ref="slider" :options="options">
              <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">{{item.html}}</slideritem>
              <div slot="loading">loading...</div>
          </slider>
       </article>
       <!-- 爆款排行 -->
       <article class="hot_sall">
        <aside class="nav nav_hot_sell"></aside>
        <aside class="hot_sall_main">
          <aside class="left">
           <div class="hot_sall_top1">
              <article class="top1">TOP1</article>
              <article class="capacity">每日坚果25g*7</article>
              <div class="rush_buy">立即抢购</div>
              <article class="coupon"><span>券后</span> <span>¥ 399</span></article>
              <article class="oprice"><span>原价</span> <span>¥ 499</span></article>
           </div>
            <figure >
              <img src="../../static/swiperImage/ere.jpg" alt="" class="top1_img">
            </figure>
          </aside>
          <aside class="right">
            <aside class="top2 common">
                <aside class="top2_left">
                  <article class="top1">TOP2</article>
                  <article class="capacity">每日坚果25g*7</article>
                  <article class="coupon"><span>券后</span> <span>¥ 399</span>
                    <span class="oprice"> &nbsp;&nbsp;<span>原价</span> <span>¥ 499</span></span>
                  </article>
                  <div class="rush_buy" style="margin: 0.1rem 0">立即抢购</div>
                </aside>
                <figure class="top2_right">
                    <img src="../../static/swiperImage/ere.jpg" alt="" class="top2_img">
                </figure>
            </aside>
            <aside class="top3 common">
                <aside class="top2_left">
                  <article class="top1" style="margin-top:0.12rem">TOP3</article>
                  <article class="capacity" style="margin-top:0rem">每日坚果25g*7</article>
                  <article class="coupon" style="margin-top:0.04rem"><span>券后</span> <span>¥ 399</span>
                    <span class="oprice"> &nbsp;&nbsp;<span>原价</span> <span>¥ 499</span></span>
                  </article>
                  <div class="rush_buy" style="margin:0.06rem 0 0.1rem">立即抢购</div>
                </aside>
                <figure class="top2_right">
                    <img src="../../static/swiperImage/ere.jpg" alt="" class="top2_img">
                </figure>
            </aside>
          </aside>
        </aside>
       </article>
       <!-- 主播推荐 -->
        
       <article class="recommed">
        <aside class="nav nav_recommend"></aside>
    
        <Recommend></Recommend>
       </article>
  <!-- </div> -->
  </Loadmore>
</div>
</template>

<script>
  import {swiper} from '../api/index'
 import { slider, slideritem } from 'vue-concise-slider';
 import Recommend from './recommend'
 import Loadmore from './loadeMore'

export default {
name: 'Index',
components: {
  slider,
  slideritem,
  Recommend,
  Loadmore
},
data () {
  return {
    someList:[
      {
        html: 'slide1',
        style: {
          'background': 'red'
        }
      },
      {
        html: 'slide2',
        style: {
          'background': 'yellow'
        }
      },
      {
        html: 'slide3',
        style: {
          'background': 'blue'
        }
      }
    ],
    options: {
      currentPage: 0,
      autoplay:2500,
      loop:true,
    },
    loadState:0,
  }
},
created(){
  this.getSwiper()
},
methods: {
  reach(){
    console.log('111')
  },
  getSwiper(){
    swiper().then(res=>{
      console.log(res,'res')
    })
  }
}
}
</script>
