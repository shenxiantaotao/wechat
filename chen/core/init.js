/**
 * @作者 陈巧君
 * @创建时间 2020-05-27 10：12
 */
import {
  router
} from '../router/index'
import * as ui from '../utils/ui'
import { store } from './../store/index'

class InitManager {

  // 入口方法
  static initCore(app) {
    InitManager.app = app;
    InitManager.addRouter();
    InitManager.addWxUi();
    InitManager.addStore();
  }

  // 注册router
  static addRouter() {
    InitManager.app.router = router;
  }

  // 注册微信底层方法
  static addWxUi() {
    for (let key in ui) {
      InitManager.app[key] = ui[key];
    }
  }

  // 注册store
  static addStore() {
    InitManager.app.store = store;
  }
}

export {
  InitManager
}