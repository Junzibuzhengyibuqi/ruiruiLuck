// pages/tencentMusic/tencentMusic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listType: [{ name: 1 }, { name: 2 }, { name: 3 }],
    all: 987

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // wx.serviceMarket.invokeService({
    //   service: 'wxe22270cb76412267',
    //   api: 'authorizedMusicExpress',
    //   data: {
    //     action: "DescribeStations",
    //     data: {

    //       length: 27,  // 条数，必须大于0且小于30
    //       offset: 0   // offset (Default = 0)，(当前页-1) * length
    //     }
    //   },

    // }).then(res => {
    //   this.setData({
    //     listType : JSON.parse(res.data).data.stations

    //   })
    //   console.log(JSON.parse(res.data).data.stations)

    // })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})