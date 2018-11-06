// pages/order/order.js
import { Cart } from '../cart/cart-model.js';

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
    var productsArr;
    this.data.account = options.account;
    productsArr = cart.getCartDataFromLocal(true);

    this.setData({
      productsArr: productsArr,
      account: options.account,
      orderStatus: 0
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  }
})