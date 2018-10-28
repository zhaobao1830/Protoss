// pages/category/category.js

import {Category} from 'category-model'
var category = new Category();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentMenuIndex: 0,
    loadedData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._loadData();
  },

  _loadData:function () {
    category.getCategoryType((categoryData)=>{
      this.setData({
        categoryTypeArr: categoryData
      });

      category.getProductsByCategory(
        categoryData[0].id,(data)=>{
          var dataObj = {
            procucts: data,
            topImgUrl: categoryData[0].img.url,
            title: categoryData[0].name
          };

          this.setData({
            categoryProducts: dataObj
          })
          this.data.loadedData[0] = dataObj

        })
    })
  },

  changeCategory:function (event) {
    var index = category.getDataSet(event, 'index'),
      id = category.getDataSet(event, 'id')//获取data-set

    this.setData({
      currentMenuIndex: index
    });

    if(!this.isLoadedData(index)) {
      category.getProductsByCategory(
        id, (data)=>{
          var dataObj = {
            procucts: data,
            topImgUrl:this.data.categoryTypeArr[index].img.url,
            title: this.data.categoryTypeArr[index].name
          };

          this.setData({
            categoryProducts: dataObj
          })

          this.data.loadedData[index] = dataObj
        }
      )
    } else {
      this.setData({
        categoryProducts: this.data.loadedData[index]
      })
    }
  },

  // 判断当前分类下的商品数据是否已经被加载过
  isLoadedData: function (index) {
    if (this.data.loadedData[index]) {
      return true;
    }
    return false;
  },

  onProductsItemTap:function (event) {
    var id = category.getDataSet(event, 'id');
    wx.navigateTo({
      url: '../product/product?id=' + id
    })
  }
})