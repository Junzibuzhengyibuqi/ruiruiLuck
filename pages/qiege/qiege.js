// pages/qiege/qiege.js
var audioCtx = ''
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    audioCtx = wx.createAudioContext('myAudio') //音频，用于摇成功提示
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
    console.log(audioCtx, 8855);
    audioCtx.setSrc('/image/qq.mp3') //音频文件，第三方的可自行选择
    audioCtx.play() //播发音频
    wx.onAccelerometerChange(e => {
      if (e.x > 1 || e.y > 1 || e.z > 1) {
        wx.vibrateLong({
          success:res =>{
            console.log('振动ing')
            this.random();
          }
        })
        
      }
    })
  },

  random() {
    console.log(audioCtx, 884455);
    let index = this.getrand(0, 100);
    console.log('随机ing', audioCtx, index);
    audioCtx.setSrc(this.data.musicList[index]) //音频文件，第三方的可自行选择
    audioCtx.play()
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