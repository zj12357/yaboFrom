<template>
  <div id="app" class="app">
    <header>
      <img src="../src/assets/img/logo.png" class="logo">
      <p>五大联赛赞助商</p>
      <div class="intr">
        <img src="../src/assets/img/line.png">
        <div>亚博香港上市，股票代码:08279</div>
        <img src="../src/assets/img/line.png" class="deg180"></div>
    </header>
    <transition name="router-transition">
      <router-view v-if="!$route.meta.keepAlive" class="router-view"></router-view>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" class="router-view"></router-view>
      </keep-alive>
    </transition>
    <footer>
      <div>
        <p>亚博数据安全由赛门铁克公司(Symantec)提供技术支持，为您的数据安全保驾护航</p>
        <p>
          <a href="https://www.cnzz.com/stat/website.php?web_id=1278687757" target="_blank">
            <img src="../src/assets/img/tongji.svg" class="logo">
          </a>
          亚博体育为欧洲体育安全协会（ESSA）的成员之一
        </p>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: ''
    }
  },
  watch: {
    '$route' (to, from) {
      this.transitionName = 'slide-right'
    }
  }
}
</script>

<style lang="less">
@import './assets/css/reset.css';
@import './assets/css/common.css';
#app {
  height: 100%;
  overflow: auto;
  position: relative;
}
@media only screen and (max-width: 1199px) {
  .app {
    height: 100%;
    background: url(../src/assets/img/mBG.jpg) no-repeat;
    background-size: contain;
    text-align: center;
  }
  .app header{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
    -ms-flex-direction:column;
    flex-direction:column;
    height:1.8rem
  }
  .app header .logo{
    width:1.3rem;
    height:0.5rem;
    margin:0.3rem auto;
    margin-bottom:0.25rem
  }
  .app header p{
    font-size:0.24rem
  }
  .app header .intr{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-align:center;
    -ms-flex-align:center;
    align-items:center;
    -webkit-box-pack:center;
    -ms-flex-pack:center;
    justify-content:center
  }
  .app header .intr img{
    width:0.7rem
  }
  .app header .intr .deg180{
    -webkit-transform:rotate(180deg);
    -ms-transform:rotate(180deg);
    transform:rotate(180deg)
  }
  .app header .intr div{
    font-size:0.12rem;
    text-align:center;
    padding:0.1rem 0.2rem;
    color:#B1987F
  }
  .app footer{
    width:100%;
    height:0.6rem;
    position:relative;
    bottom:0;
    background:#151419
  }
  .app footer div{
    height:100%
  }
  .app footer div p{
    text-align:center;
    font-size:0.12rem;
    color:#737680;
    position:absolute;
    left:50%;
    display:block;
    white-space:nowrap;
    -webkit-transform:translate3d(-50%, 0, 0) scaleX(0.8) scaleY(0.8);
    transform:translate3d(-50%, 0, 0) scaleX(0.8) scaleY(0.8)
  }
  .app footer div p:nth-child(1){
    top:25%
  }
  .app footer div p:nth-child(2){
    top:60%
  }
  .app footer div p a{
    display:inline-block
  }
  .app footer div p a img{
    width:0.15rem;
    vertical-align:middle;
    -webkit-transform:translateY(-0.01rem);
    -ms-transform:translateY(-0.01rem);
    transform:translateY(-0.01rem)
  }
}

@media only screen and (min-width: 1199px) {
  .app {
    height: 100%;
    background: url(../src/assets/img/pcBG.jpg) no-repeat;
    background-size: cover;
    text-align: center;
  }
  .app header{display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
    -ms-flex-direction:column;
    flex-direction:column
  }
  .app header .logo{width:1.5rem;
    height:0.6rem;
    margin:0.2rem auto
  }
  .app header p{
    font-size:0.24rem
  }
  .app header .intr{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-align:center;
    -ms-flex-align:center;
    align-items:center;
    -webkit-box-pack:center;
    -ms-flex-pack:center;
    justify-content:center
  }
  .app header .intr img{
    width:0.7rem
  }
  .app header .intr .deg180{
    -webkit-transform:rotate(180deg);
    -ms-transform:rotate(180deg);
    transform:rotate(180deg)
  }
  .app header .intr div{
    font-size:0.12rem;
    text-align:center;
    padding:0.1rem 0.2rem;
    color:#B1987F
  }
  .app .router-view{
    width:75%;
    margin:auto
  }
  .app footer{
    width:100%;
    height:0.6rem;
    position:relative;
    bottom:0;
    background:#151419
  }
  .app footer div{
    height:100%
  }
  .app footer div p{
    text-align:center;
    font-size:0.09rem;
    color:#737680;
    position:absolute;
    left:50%;
    display:block;
    white-space:nowrap;
    -webkit-transform:translate3d(-50%, 0, 0) scaleX(1) scaleY(1);
    transform:translate3d(-50%, 0, 0) scaleX(1) scaleY(1)
  }
  .app footer div p:nth-child(1){
    top:25%
  }
  .app footer div p:nth-child(2){
    top:60%
  }
  .app footer div p a{
    display:inline-block
  }
  .app footer div p a img{
    width:0.15rem;
    vertical-align:middle;
    -webkit-transform:translateY(-0.01rem);
    -ms-transform:translateY(-0.01rem);
    transform:translateY(-0.01rem)
  }
}

.router-transition-enter-active{-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease
}
.router-transition-leave-active{-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease
}
.router-transition-enter,.router-transition-leave-to{-webkit-transform:translateX(50px);-ms-transform:translateX(50px);transform:translateX(50px);opacity:0
}
</style>
