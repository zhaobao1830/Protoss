import { Base } from '../../utils/base.js';

class Home extends Base{
  
  constructor(){
    super();
  }
  
  getBannerData(id, callBack){
    let params = {
      url: 'banner/' + id,
      sCallBack: function (res) {
        callBack && callBack(res.items);
      }
    }

    this.request(params);
    // wx.request({
    //   url: 'http://z.cn/api/v1/banner/' + id,
    //   method: 'GET',
    //   success:function(res){
    //     callback(res)
    //   }
    // })
  }
}

export {Home};