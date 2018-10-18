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
  }

  /*首页主题*/
  getThemeData (callback) {
    let params = {
      url: 'theme?ids=1,2,3',
      sCallBack: function (data) {
        callback && callback(data);
      }
    };
    this.request(params);
  }

  getProductsData(callback) {
    var param = {
      url: 'product/recent',
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
}

export {Home};