import Mock from 'mockjs'
import index from './index'
import proms from './proms'
import gift from './gift'
import rmd from './recommand'

Mock.mock(/\yabo\/getIndexData/, 'get', index.getIndexData())
Mock.mock(/\yabo\/getPromsData/, 'get', proms.getPromsData())
Mock.mock(/\yabo\/getGiftTable/, 'get', gift.getGiftTable())
Mock.mock(/\yabo\/getRemTable/, 'get', rmd.getRemTable())
