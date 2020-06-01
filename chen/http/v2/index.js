/**
 * @作者 陈巧君
 * @创建时间 2020-05-27 10：12
 */

import {
  config
} from '../../config/index.js';
import {
  promisic
} from '../../utils/promisic'

class Http {

  // 请求方法
  static async request({
    url,
    data = {},
    method = 'GET'
  }) {
    const {
      appBaseUrl,
      appkey
    } = config;
    const res = await promisic(wx.request)({
      url: `${ appBaseUrl }${url}`,
      data,
      method,
      header: {
        appkey
      }
    })
    return res.data;
  }

}

export {
  Http
}