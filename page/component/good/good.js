Page({
  data: {
    result: []
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'http://api.unicomsi.cn:5000/users',
      header: {
        'Content-Type': 'application/json'
      },
      method: 'GET',
      success: function (res) {
        that.setData({
          result: res.data
        })
      },
      fail: function(){
        wx.showToast({
          title: '服务器异常',
          duration: 1500
        })
      }

    })
  },
  listenerButton: function () {
  }

})