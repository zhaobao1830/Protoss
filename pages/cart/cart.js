// pages/cart/cart.js
import { Cart } from 'cart-model';
var cart = new Cart();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var cartData = cart.getCartDataFromLocal();
    var countsInfo = cart.getCartTotalCounts(true);

    this.setData({
      selectedCounts: countsInfo,
      cartData: cartData
    })
  },

  // 订单总金额
  _calcTotalAccountAndCounts: function (data) {
    var len = data.length,

      // 所需要计算的总价格，但是要注意排除掉未选中的商品
      account = 0,

      // 购买商品的总个数
      selectedCounts = 0,

      // 购买商品种类的总数
      selectedTypeCounts = 0;

    let multiple = 100;
    for (let i = 0; i < len; i++) {
      //避免 0.05 + 0.01 = 0.060 000 000 000 000 005 的问题，乘以 100 *100
      if (data[i].selectStatus) {
        account +=
          data[i].counts * multiple * Number(data[i].price) * multiple;
        selectedCounts += data[i].counts;
        selectedTypeCounts++;
      }
    }

    return {
      selectedCounts: selectedCounts,
      selectedTypeCounts: selectedTypeCounts,
      account: account / (multiple * multiple)
    }
  }
})