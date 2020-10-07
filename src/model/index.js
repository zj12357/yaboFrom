import {get, post} from '../JS/ajax'
import {baseURL} from './baseURl'


export function getIndexData () {
  return get(baseURL.url1+'/Domain/DomainList')
}

export function getPromsData (desc) {
  return get(baseURL.url1+'/Domain/GetActivity?desc=' + desc)
}

export function getGiftTable () {
  return get(baseURL.url1+'/yabo/getGiftTable')
}

export function getRemTable () {
  return get(baseURL.url1+'/yabo/getRemTable')
}

export function PostFrom (data) {
  // eslint-disable-next-line eqeqeq,no-undef
  return post(baseURL.url1+'/ApplyActivity/CreateApply', data)
}
export function WhiteFrom (tel) {
  // eslint-disable-next-line eqeqeq,no-undef
  return get(baseURL.url1+'/ApplyActivity/SetMobileWhite?tel=' + tel)
}

//获取推广链接
export function getAgentExtendLink (params) {
  // eslint-disable-next-line eqeqeq,no-undef
  return post(baseURL.url2+'/api/Domain/AgentExtendLink',params)
}
