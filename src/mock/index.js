import Mock from 'mockjs'

export default {
  getIndexData: () => ({
    btn1: {'title': '立即注册', 'subtitle': '首存赠送50%，开户即送', url: 'https://www.yabo334.com/?i_code=0826276&', url_type: 'out', 'icon': require('../assets/img/reg.svg')},
    btn2: {'title': '新手任务', 'subtitle': '万元大礼包等你拿', url: '/proms', url_type: 'in', 'icon': require('../assets/img/new.svg')},
    btn3: {'title': '豪礼盛宴', 'subtitle': 'iPhone、ipad、Zippo送不停', url: '/gift', url_type: 'in', 'icon': require('../assets/img/zuanshi.svg')},
    btn4: {'title': '好友推荐', 'subtitle': '邀请好友，互领资金', url: '/recommend', url_type: 'in', 'icon': require('../assets/img/tuijian.svg')},
    downloadBtn: {
      left: {
        title: '全站APP下载',
        url: 'https://www.yb411.app/download_com.html?i_code=0826276'
      },
      right: {
        title: '体育APP下载',
        url: 'https://www.yb65.app/downloadty_com.html?i_code=0826276'
      }
    },
    kefu: {
      url: 'https://matter.divda.com/talk/chatClient/chatbox.jsp?companyID=631067070&configID=184&jid=2851064440&s=1'
    }
  })
}
