// pages/my/my.js

import { Address } from '../../utils/address.js';
import { Order } from '../order/order-model.js';
import { My } from '../my/my-model.js';

var address = new Address();
var order = new Order();
var my = new My();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageIndex: 1,
    orderArr: [],
    isLoadedAll: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._loadData();
    this._getAddressInfo();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  _loadData: function () {
    my.getUserInfo((data) => {
      this.setData({
        userInfo: data
      })
    })

    this._getOrders();
  },

  _getAddressInfo:function () {
    address.getAddress((addressInfo) => {
      this._bindAddressInfo(addressInfo);
    });
  },

  // 获取订单列表
  _getOrders: function (callback) {
    order.getOrders(this.data.index, (res) => {
      var data = res.data;

      if (data.length > 0) {
        // 合并俩个数组
        this.data.orderArr.push.apply(this.data.orderArr, data);
        this.setData({
          orderArr: this.data.orderArr
        });
      }
      else {
        this.data.isLoadedAll = true;
      }
      callback && callback();
    })
  },

  onReachBottom: function () {
    if (!this.data.isLoadedAll) {
      this.data.pageIndex++;
      this._getOrders();
      //scroll-view
    }
  }
})