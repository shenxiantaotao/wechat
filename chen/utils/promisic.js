/**
 * @作者 陈巧君
 * @创建时间 2020-05-27 10：12
 */

/**
 * 代理模式设计
 * 网络请求 wx.request,
 * 登录 wx.login
 * 等后续还有好多 就不一一列出来
 */
const promisic = (func) => {
  return (params = {}) => {
    return new Promise((resolve, reject) => {
      const args = Object.assign(params, {
        success: (res) => {
          resolve(res);
        },
        fail: (err) => {
          reject(err);
        }
      })
      func(args);
    })
  }
}

export {
  promisic
}