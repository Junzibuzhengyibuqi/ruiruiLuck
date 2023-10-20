//index.js
//获取应用实例
const app = getApp()
    var audioCtx = ''
Page({
  data: {
    list: [
      {
        name:1,
        answer:''
      }
      
    ],
    info:{
      name:'',
      answer:'',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    audioCtx = wx.createInnerAudioContext({}) //音频，用于摇成功提示
    audioCtx.autoplay = true
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  getrand(m, n) {
    var rand = Math.floor(Math.random() * (n - m + 1)) + m
    return rand
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.ranImg();
    wx.onAccelerometerChange(e => {
      if (e.x > 1 || e.y > 1 || e.z > 1) {
        wx.vibrateLong({
          success: res => {
            that.ranImg();
          }
        })

      }
    })
  },




  ranImg() {
    let index = this.getrand(0, this.data.list.length);
    this.setData({
      info: {
        name:'sdasd',
        answer:'asd'
      }
      // info: this.data.list[index]
    })

  },
  

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    audioCtx.destroy();

  },
  

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})