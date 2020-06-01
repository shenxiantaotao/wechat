import { Http } from '../chen/http/v2/index'


class Home{

  static async getList(data = {}){
    return await Http.request({
      url: '/v1/book/getList',
      data,
    })
  }

  static async getBannerList(data = {}){
    return await Http.request({
      url: '/v1/book/getBanner',
      data,
    })
  }
}

export {
  Home
}