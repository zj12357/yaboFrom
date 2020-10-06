import Mock from 'mockjs'

export default {
  getRemTable: () => ({
    table:'<table>\n' +
    '        <thead>\n' +
    '        <tr>\n' +
    '          <th colspan="3" class="firstHead">\n' +
    '            <p>推荐好友</p>\n' +
    '            <p>有好事，齐分享，好朋友，一起来！</p>\n' +
    '          </th>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '          <th>被推荐人通过关卡</th>\n' +
    '          <th>推荐人</th>\n' +
    '          <th>被推荐人</th></tr>\n' +
    '        </thead>\n' +
    '        <tbody>\n' +
    '        <tr>\n' +
    '          <td>注册</td>\n' +
    '          <td>8</td>\n' +
    '          <td>8</td></tr>\n' +
    '        <tr>\n' +
    '          <td>绑定银行卡</td>\n' +
    '          <td>10</td>\n' +
    '          <td>10</td></tr>\n' +
    '        <tr>\n' +
    '          <td>首次存款</td>\n' +
    '          <td>好友首存的1%</td>\n' +
    '          <td>aiqiu168优惠活动</td></tr>\n' +
    '        <tr>\n' +
    '          <td>好友完成体育打码5倍以上</td>\n' +
    '          <td>18</td>\n' +
    '          <td>存款的2%</td></tr>\n' +
    '        <tr>\n' +
    '          <td>好友完成非体育打码5倍以上</td>\n' +
    '          <td>18</td>\n' +
    '          <td>3%</td></tr>\n' +
    '        </tbody>\n' +
    '      </table>'
  })
}
