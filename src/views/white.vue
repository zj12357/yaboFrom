<template>
  <div class="gift">
    <vue-element-loading :active="loading" spinner="bar-fade-scale" color="#B29881" :is-full-screen="true" background-color="transparent"/>
    <div class="swiper-container" id="promosContent">
      <div class="swiper-wrapper">
        <div class="promosContent swiper-slide">
          <div class="reg58">
            <ul>
              <li><span >手机号码 :</span>
                <input maxlength="11"  v-model="tel" type="text" placeholder="需要加白的手机号" class="tel"></li>
              <li>
                <a>
                  <button class="mint-button button mint-button--default mint-button--normal" @click="WhiteFrom">
                    <label class="mint-button-text">提交号码白名单</label>
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="tableBox" style="margin-top: 20px">
      <table>
        <thead>
          <tr>
            <td style="text-align: center">白名单介绍</td>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>为了防止过度营销影响到您的正常工作或生活，特设立手机号白名单功能，如果您不需要收到此类短信，请提交您的手机号，提交后我们将不再推送此类短信。</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="goIndex">
      <span class="tap-effect bgColor-effect" @click="toIndex">返回首页</span>
    </div>
  </div>
</template>

<script>
  import '../assets/css/index.css'
  import '../assets/css/proms.css'
  import {WhiteFrom} from '../model/index.js'

  export default {
    data () {
      return {
        tel: '',
        loading: false
      }
    },
    methods: {
      toIndex () {
        this.$router.push({name: 'index'})
      },
      WhiteFrom () {
        // 提交白名单
        this.loading = true
        WhiteFrom(this.tel).then(res => {
          // eslint-disable-next-line eqeqeq
          this.loading = false
          this.tel = ''
          alert(res.data.msg)
        })
      }
    }
  }
</script>

<style scoped lang="less">

</style>
