<template>
  <div class="recommend">
    <div class="tableBox" v-html="table"></div>
    <div class="goIndex tap-effect bgColor-effect">
      <span class="tap-effect bgColor-effect" @click="toIndex">返回首页</span></div>
  </div>
</template>

<script>
import '../assets/css/index.css'
import {getRemTable} from "../model";

export default {
  data () {
    return {
      table:''
    }
  },
  created () {
    this.init()
  },
  methods: {
    toIndex () {
      this.$router.push({name: 'index'})
    },
    init () {
      getRemTable().then(res => {
        this.table = res.data.table
      })
    }
  }
}
</script>

<style scoped lang="less">

</style>
