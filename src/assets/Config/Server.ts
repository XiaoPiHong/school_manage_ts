interface Server {
  productServer: string
}
class OnlineServer implements Server {//implements->实现这个接口
  productServer: string = "http://192.168.34.5:8081"
}
class TestServer implements Server {
  productServer: string = "http://127.0.0.1:8080"
}
class DevelopServer implements Server {
  productServer: string = "http://localhost:3000"
}
/**
 * 根据环境变量区分接口的默认地址
 */
let server: Server
switch (process.env.NODE_ENV) {
  // 生产环境（部署到服务器的环境）
  case "production":
    server = new OnlineServer()
    break;
  // 测试环境
  case "test":
    server = new TestServer()
    break;
  // 默认环境（开发环境）
  default:
    server = new DevelopServer()
}
export default server
