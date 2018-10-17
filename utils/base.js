import {Config} from "./config";

class Base {
  constructor() {
    this.baseRequestUrl = Config.restUrl;
  }


  request(params) {
    var url = this.baseRequestUrl + params.url;

    if (!params.type){
      params.type = 'GET'
    }
    wx.request({
      url: url,
      data: params.data,
      method: params.type,
      header: {
        'content-type': 'application/json',
        'token': wx.getStorageSync('token')
      },
      success: function (res) {
        // if(params.sCallBack){
        //   params.sCallBack(res);
        // }
        // 这俩种写法是一样的  推荐用下面的，微信的demo中就这样写的
        params.sCallBack&&params.sCallBack(res);
      },
      fail: function (err) {

      }
    })
  }
}