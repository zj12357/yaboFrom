<template xmlns:https="http://www.w3.org/1999/xhtml">
  <div class="index">
    <div class="index router-view">
      <vue-element-loading :active="loading" spinner="bar-fade-scale" color="#B29881" :is-full-screen="true" background-color="transparent"/>
      <div class="buttons" v-if="loaded">
        <a @click="toHref(btn1.url)" target="_blank" class="tap-effect bgColor-effect">
          <img src="../assets/img/reg.svg">
          <span></span>
          <div>
            <p>立即注册</p>
            <p>进入手机网页版</p>
          </div>
        </a>
        <a class="tap-effect bgColor-effect" @click="toUrl(btn2.url)">
          <img src="../assets/img/new.svg">
          <span></span>
          <div>
            <p>{{btn2.title}}</p>
            <p>{{btn2.desc}}</p>
          </div>
        </a>
        <a class="tap-effect bgColor-effect" @click="toUrl(btn3.url)">
          <img src="../assets/img/zuanshi.svg">
          <span></span>
          <div>
            <p>{{btn3.title}}</p>
            <p>{{btn3.desc}}</p>
          </div>
        </a>
        <a class="tap-effect bgColor-effect" @click="toHref('https://m.balltvs.com')">
          <img src="../assets/img/tuijian.svg">
          <span></span>
          <div>
            <p>红单推荐</p>
            <p>料先生大数据精准预测</p>
          </div>
        </a>
        <a class="tap-effect bgColor-effect" @click="toHref(sportBtn.url)" >
          <img src="../assets/img/ball.svg">
          <span></span>
          <div>
            <p>体育APP</p>
            <p>仅支持体育游戏</p>
          </div>
        </a>
        <a class="tap-effect bgColor-effect" @click="toHref(allBtn.url)" >
          <img src="../assets/img/hand.svg">
          <span></span>
          <div>
            <p>全站APP</p>
            <p>支持亚博所有游戏</p>
          </div>
        </a>
<!--        <a class="phoneShow downLoad">-->
<!--          <div style="width: 100%;height: 50%">-->
<!--            <a @click="toHref(sportBtn.url)" target="_blank" class="tap-effect bgColor-effect">-->
<!--              <img src="../assets/img/ball.svg">-->
<!--              <span></span>-->
<!--              <p>体育APP下载</p>-->
<!--            </a>-->
<!--            <a @click="toHref(gameBtn.url)" target="_blank" class="tap-effect bgColor-effect">-->
<!--              <img src="../assets/img/ball.svg">-->
<!--              <span></span>-->
<!--              <p>电竞APP下载</p>-->
<!--            </a>-->
<!--          </div>-->
<!--          <div style="width: 100%;height: 50%">-->
<!--            <div style="display: none"></div>-->
<!--            <div style="display: none"></div>-->
<!--            <a @click="toHref(pokerBtn.url)"-->
<!--               target="_blank" class="tap-effect bgColor-effect">-->
<!--              <img src="../assets/img/hand.svg">-->
<!--              <span></span>-->
<!--              <p>棋牌APP下载</p>-->
<!--            </a>-->
<!--            <a @click="toHref(allBtn.url)"-->
<!--               target="_blank" class="tap-effect bgColor-effect">-->
<!--              <img src="../assets/img/hand.svg">-->
<!--              <span></span>-->
<!--              <p>全站APP下载</p>-->
<!--            </a>-->
<!--          </div>-->
<!--        </a>-->
      </div>
<!--      <div class="buttons downLoad pcShow">-->
<!--        <a @click="toHref(sportBtn.url)"-->
<!--           target="_blank" class="tap-effect bgColor-effect">-->
<!--          <img src="../assets/img/ball.svg">-->
<!--          <span></span>-->
<!--          <p>体育APP下载</p></a>-->
<!--        <a @click="toHref(gameBtn.url)"-->
<!--           target="_blank" class="tap-effect bgColor-effect">-->
<!--          <img src="../assets/img/ball.svg">-->
<!--          <span></span>-->
<!--          <p>电竞APP下载</p>-->
<!--        </a>-->
<!--      </div>-->
<!--      <div class="buttons downLoad pcShow" style="height: 0;margin-top: -10px;margin-bottom:.1rem">-->
<!--        <a @click="toHref(sportBtn.url)"-->
<!--           target="_blank" class="tap-effect bgColor-effect">-->
<!--          <img src="../assets/img/hand.svg">-->
<!--          <span></span>-->
<!--          <p>全站APP下载</p></a>-->
<!--        <a @click="toHref(pokerBtn.url)"-->
<!--           target="_blank" class="tap-effect bgColor-effect">-->
<!--          <img src="../assets/img/hand.svg">-->
<!--          <span></span>-->
<!--          <p>棋牌APP下载</p>-->
<!--        </a>-->
<!--      </div>-->
<!--      <div class="tip">集团直营，信誉保障！超多奖励等你来拿，赶快加入我们吧！</div>-->
      <div class="tip">凡所应有，无所不有！</div>
      <div class="fav" >
        <span class="tap-effect bgColor-effect" @click="GoWhite">号码免打扰申请</span>
      </div>
      <a :href="kefu.url" target="_blank" class="kefu">
        <img src="../assets/img/kefu.svg" alt="" style="vertical-align: middle">
        <span style="vertical-align: middle">在线客服</span></a>
    </div>
  </div>
</template>

<script>
import '../assets/css/index.css'
import { Swiper } from 'vux'
import {getIndexData,getAgentExtendLink} from '../model/index.js'

export default {
  components: { Swiper },
  data () {
    return {
      loaded: false,
      loading: true,
      btn1: {url: ''},
      btn2: {url: '', title: '暂无活动', desc: '客官不妨先注册体验下'},
      btn3: {url: '', title: '暂无活动', desc: '客官不妨先注册体验下'},
      host: 'yabo.com',
      sportBtn: {url: ''},
      allBtn: {url: ''},
      gameBtn: {url: ''},
      pokerBtn: {url: ''},
      pcBtn: {url: ''},
      kefu: {url: ''}
    }
  },
  created () {
    this.init()
    this.host = window.location.host
    this.getLink()
  },
  methods: {
    init () {
      getIndexData().then(res => {
        for (var i = 0; i < res.data.data.List.length; i++) {
          this.loading = false
          switch (res.data.data.List[i].downkey) {
            // case 'Sports':
            //   this.sportBtn.url = res.data.data.List[i].downurl
            //   break
            // case 'TotalSite':
            //   this.allBtn.url = res.data.data.List[i].downurl
            //   break
            // case 'ToMobile':
            //   this.btn1.url = res.data.data.List[i].downurl
            //   break
            case 'ToComputer':
              this.pcBtn.url = res.data.data.List[i].downurl
              break
            case 'ToGame':
              this.gameBtn.url = res.data.data.List[i].downurl
              break
            case 'ToPoker':
              this.pokerBtn.url = res.data.data.List[i].downurl
              break
            // case 'goChatbot':
            //   this.kefu.url = res.data.data.List[i].downurl
            //   break
            default:
          }
        }
        if (res.data.data.activity != null) {
          this.btn2.title = res.data.data.activity.title
          this.btn2.desc = res.data.data.activity.desc
          this.btn2.url = '/gift'
          this.btn3.title = '豪礼盛宴'
          this.btn3.desc = '首存、VIP红包等福利'
          this.btn3.url = '/proms'
        }
        this.loaded = true
      })
    },
    getLink(){
      getAgentExtendLink({name:''}).then(res=>{
        let {data:{resultData}} =res
        if(resultData && resultData.list.length >0 ){
          this.loaded = true
          for (let i = 0; i < resultData.list.length; i++) {
            switch (resultData.list[i].linkType) {
              case 'app':
                this.sportBtn.url = resultData.list[i].linkUrl
                break
              case 'all':
                this.allBtn.url = resultData.list[i].linkUrl
                break
              case 'h5':
                this.btn1.url = resultData.list[i].linkUrl
                break
              case 'chatbot':
                this.kefu.url = resultData.list[i].linkUrl
                break
              default:
            }
          }
        }
      })
    },
    toUrl (url) {
      this.$router.push(url)
    },
    toHref (url) {
      window.location.href = url
    },
    AddFavorite () {
      var sURL = window.location.href
      var sTitle = '亚博体育'
      var ctrl = (navigator.userAgent.toLowerCase()).indexOf('mac') !== -1 ? 'Command/Cmd' : 'Ctrl'
      sURL = encodeURI(sURL)
      try {
        window.external.addFavorite(sURL, sTitle)
      } catch (e) {
        try {
          window.sidebar.addPanel(sTitle, sURL, '')
        } catch (e) {
          alert('加入收藏失败，请使用' + ctrl + '+D进行添加,或手动在浏览器里进行设置.')
        }
      }
    },
    GoWhite () {
      this.$router.push('/white')
    }
  }
}
</script>

<style scoped lang="less">

</style>
