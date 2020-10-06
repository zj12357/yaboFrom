import {get, post} from '../JS/ajax'
export function getIndexData () {
  return get('/Domain/DomainList')
}

export function getPromsData (desc) {
  return get('/Domain/GetActivity?desc=' + desc)
}

export function getGiftTable () {
  return get('/yabo/getGiftTable')
}

export function getRemTable () {
  return get('/yabo/getRemTable')
}

export function PostFrom (data) {
  // eslint-disable-next-line eqeqeq,no-undef
  return post('/ApplyActivity/CreateApply', data)
}
export function WhiteFrom (tel) {
  // eslint-disable-next-line eqeqeq,no-undef
  return get('/ApplyActivity/SetMobileWhite?tel=' + tel)
}

