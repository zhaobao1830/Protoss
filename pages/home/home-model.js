class Home{
  
  constructor(){
  }
  
  getBannerData(id, callback){
    wx.request({
      url: 'http://z.cn/api/v1/banner/' + id,
      method: 'GET',
      success:function(res){
        callback(res)
      }
    })
  }
}

export {Home};