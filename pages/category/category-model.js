import { Base } from '../../utils/base.js';

class Category extends Base{
  constructor(){
    super();
  }

  /*获得所有分类*/
  getCategoryType(callback) {
    var param = {
      url: 'category/all',
      sCallBack: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }

  /*获得某种分类的商品*/
  getProductsByCategory(id, callback) {
    var param = {
      url: 'product/by_category?id=' + id,
      sCallBack: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
}




export {Category};