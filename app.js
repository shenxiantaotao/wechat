// 路由 状态管理 wx底层方法初始化
import { InitManager } from './chen/core/init'

App({
  onLaunch () {
    InitManager.initCore(this);
    this.router.tab("me")
  }
})