/**
 * @作者 陈巧君
 * @创建时间 2020-05-27 10：12
 */
import {
  config
} from '../config/index';
const {
  companyId,
  shopId
} = config


const state = {
  // 公司id 这里根据真实的项目提供公司id 需要写死
  companyId,
  // 门店id
  shopId,
  // 用户授权信息
  userInfo: null,
  // 登录用户信息
  loginInfo: null,
  
}