Page({
  data: {
    result: []
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5b72a0eba0fa933773cf89af/example/restful/v1/list',
      method: 'GET',
      success: function (res) {
        that.setData({
          result: res.data.results
        })
      }

    })
  },
  listenerButton: function () {
  }

})