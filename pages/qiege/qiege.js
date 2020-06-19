// pages/qiege/qiege.js
var audioCtx = ''
var myVar = ''

Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicList: [
      'https://ruiruiluck.oss-cn-hangzhou.aliyuncs.com/music/%E7%81%B0%E8%80%81%E6%9D%BF%20-%20%E9%9D%92%E5%9F%8E%E5%B1%B1%E4%B8%8B%E7%99%BD%E7%B4%A0%E8%B4%9E.mp3',
      'https://ruiruiluck.oss-cn-hangzhou.aliyuncs.com/music/%E6%9C%AA%E7%9F%A5%20-%20%E9%BB%84%E9%9C%84%E9%9B%B2-%E5%B7%A6%E6%89%8B%E6%8C%87%E6%9C%88%20(%E6%A2%A6%E6%83%B3%E7%9A%84%E5%A3%B0%E9%9F%B3%E7%AC%AC%E4%B8%89%E5%AD%A3%20%E7%AC%AC9%E6%9C%9F)(%E8%93%9D%E5%85%89)%20(V0).MP3',
      'https://ruiruiluck.oss-cn-hangzhou.aliyuncs.com/music/%E4%B8%80%E4%B8%AA%E6%AD%8C%E6%89%8B%E7%9A%84%E6%83%85%E4%B9%A6.mp3',
      'https://ruiruiluck.oss-cn-hangzhou.aliyuncs.com/music/%E4%B8%80%E4%BA%BA%E4%B8%80%E8%8A%B1.mp3',
      'https://ruiruiluck.oss-cn-hangzhou.aliyuncs.com/music/%E4%B8%A4%E4%B8%A4%E7%9B%B8%E5%BF%98.mp3',
      'https://ruiruiluck.oss-cn-hangzhou.aliyuncs.com/music/%E5%85%B3%E4%BA%8E%E9%83%91%E5%B7%9E%E7%9A%84%E8%AE%B0%E5%BF%86.mp3',
      'https://ruiruiluck.oss-cn-hangzhou.aliyuncs.com/music/%E5%AF%82%E5%AF%9E%E7%8A%AF%E7%9A%84%E9%94%99.mp3',
      'https://ruiruiluck.oss-cn-hangzhou.aliyuncs.com/music/%E5%BC%A0%E5%AD%A6%E5%8F%8B%20-%20%E8%B0%81%E6%98%AF%E5%A4%A7%E8%8B%B1%E9%9B%84.mp3',
      'https://ruiruiluck.oss-cn-hangzhou.aliyuncs.com/music/%E6%88%90%E9%BE%99%20%E9%87%91%E5%96%9C%E5%96%84%20-%20%E7%BE%8E%E4%B8%BD%E7%9A%84%E7%A5%9E%E8%AF%9D%E2%85%A0.mp3',
      'https://ruiruiluck.oss-cn-hangzhou.aliyuncs.com/music/%E6%9D%8E%E5%BF%97%20-%20%E5%A4%A9%E7%A9%BA%E4%B9%8B%E5%9F%8E.flac',
      'https://ruiruiluck.oss-cn-hangzhou.aliyuncs.com/music/%E6%9D%8E%E5%BF%97%20-%20%E7%B1%B3%E5%BA%97.flac',
      'https://ruiruiluck.oss-cn-hangzhou.aliyuncs.com/music/%E6%9D%8E%E5%BF%97%20-%20%E7%BB%93%E5%A9%9A.flac',
      'https://ruiruiluck.oss-cn-hangzhou.aliyuncs.com/music/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E5%A5%B3%E5%84%BF%E6%83%85%20.mp3', 'https://ruiruiluck.oss-cn-hangzhou.aliyuncs.com/music/%E6%A2%81%E5%8D%9A%E3%80%8A%E7%94%B7%E5%AD%A9%E3%80%8B%E7%8E%B0%E5%9C%BA%E7%89%88%EF%BC%8C%E5%9C%A8%E6%9C%80%E6%B2%A1%E6%9C%89%E8%83%BD%E5%8A%9B%E7%9A%84%E5%B9%B4%E7%BA%AA%EF%BC%8C%E7%A2%B0%E8%A7%81%E4%BA%86%EF%BC%8C%E6%9C%80%E6%83%B3%E7%85%A7%E9%A1%BE%E4%B8%80%E7%94%9F%E7%9A%84%E5%A7%91%E5%A8%98%E3%80%82%20(V0).mp3',
      'https://ruiruiluck.oss-cn-hangzhou.aliyuncs.com/music/%E6%A2%81%E9%9D%99%E8%8C%B9-%E9%97%AE.mp3',
      'https://ruiruiluck.oss-cn-hangzhou.aliyuncs.com/music/%E7%88%B1%E6%81%A8%E6%81%A2%E6%81%A2.mp3',
      'https://ruiruiluck.oss-cn-hangzhou.aliyuncs.com/music/%E7%BE%A4%E6%98%9F%20-%20%E5%B7%85%E5%B3%B0%E4%B9%8B%E8%B7%AF.mp3',
      'https://ruiruiluck.oss-cn-hangzhou.aliyuncs.com/music/%E8%8A%B1%E7%B2%A5-%E7%BA%B8%E7%9F%AD%E6%83%85%E9%95%BF.mp3',
      'https://ruiruiluck.oss-cn-hangzhou.aliyuncs.com/music/%E8%8C%B6%E5%AD%A3%E6%9D%A8%20-%20%E8%87%B4%E7%BB%88%E5%B0%86%E9%80%9D%E5%8E%BB%E7%9A%84%E9%9D%92%E6%98%A5.mp3',
      'https://ruiruiluck.oss-cn-hangzhou.aliyuncs.com/music/%E8%AE%B8%E6%98%8E%E6%98%8E%20-%20%E4%BD%A0%E8%A6%81%E7%9A%84%E7%88%B1.mp3',
      'https://ruiruiluck.oss-cn-hangzhou.aliyuncs.com/music/%E9%94%99%E8%BF%87%E7%9A%84%E6%83%85%E4%BA%BA.mp3',
      'https://ruiruiluck.oss-cn-hangzhou.aliyuncs.com/music/%E9%A3%98%E5%90%91%E5%8C%97%E6%96%B9.mp3',

    ],
    ImgList: [
      'https://s2.ax1x.com/2020/01/15/lXf1Nq.jpg',
      'https://s2.ax1x.com/2020/01/15/lXflEn.jpg',
      'https://s2.ax1x.com/2020/01/15/lXfGCV.jpg',
      'https://s2.ax1x.com/2020/01/15/lXf340.jpg',
      'https://s2.ax1x.com/2020/01/15/lXfMHs.jpg',
      'https://s2.ax1x.com/2020/01/15/lXfYgU.jpg',
      'https://s2.ax1x.com/2020/01/15/lXftvF.jpg',
      'https://s2.ax1x.com/2020/01/15/lXfUu4.jpg',
      'https://s2.ax1x.com/2020/01/15/lXfdb9.jpg',
      'https://s2.ax1x.com/2020/01/15/lXf0ER.jpg',
      'https://s2.ax1x.com/2020/01/15/lXfBU1.jpg',
      'https://s2.ax1x.com/2020/01/15/lXfD4x.jpg',
      'https://s2.ax1x.com/2020/01/15/lXfsC6.jpg',
      'https://s2.ax1x.com/2020/01/15/lXfy8K.jpg',
      'https://s2.ax1x.com/2020/01/15/lXf6gO.png',
      'https://s2.ax1x.com/2020/01/15/lXfcvD.jpg',
      'https://s2.ax1x.com/2020/01/15/lXf2Ke.jpg',
      'https://s2.ax1x.com/2020/01/15/lXfRDH.jpg',
      'https://s2.ax1x.com/2020/01/15/lXfWbd.jpg',

    ],
    imgsrc: 'https://s2.ax1x.com/2020/01/15/lXf1Nq.jpg',
    index: 0,
    hitokoto: '我曾泪眼朦胧，望你期期艾艾!',
    from: 'longly丶陈木夕',
    datahitokoto: '',
    datafrom: ''
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

  playVoice() {
    clearInterval(myVar)
    const index = this.data.index;
    wx.previewImage({
      current: this.data.ImgList[index],
      urls: this.data.ImgList,
    })
  },


  getrand(m, n) {
    var rand = Math.floor(Math.random() * (n - m + 1)) + m
    return rand
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    myVar = setInterval(() => { this.ranImg(), this.wordText() }, 7700)
    console.log(audioCtx, 8855);
    const that = this;
    audioCtx.src = 'https://ruiruiluck.oss-cn-hangzhou.aliyuncs.com/music/%E7%81%B0%E8%80%81%E6%9D%BF%20-%20%E9%9D%92%E5%9F%8E%E5%B1%B1%E4%B8%8B%E7%99%BD%E7%B4%A0%E8%B4%9E.mp3'; //音频文件，第三方的可自行选择
    wx.onAccelerometerChange(e => {
      if (e.x > 1 || e.y > 1 || e.z > 1) {
        wx.vibrateLong({
          success: res => {
            that.random();
            that.ranImg();
            that.wordText()
          }
        })

      }
    })
    audioCtx.onEnded(() => {

      wx.showToast({
        title: '播放完毕 自动播放下一首',
        icon: 'none',
        duration: 2000,
        success: res => {
          that.random();
        }
      })
    })

    
  },

  random() {
    let index = this.getrand(0, this.data.musicList.length);
    audioCtx.src = this.data.musicList[index]; //音频文件，第三方的可自行选择
  },

  getrand(m, n) {
    var rand = Math.floor(Math.random() * (n - m + 1)) + m
    return rand
  },

  shuzu(arr, obj) {
    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
      if (obj[item]) {
        obj[item]++;
      } else {
        obj[item] = 1;
      }
    }
  },

  ranImg() {
    let index = this.getrand(0, this.data.ImgList.length);
    this.setData({
      index,
      imgsrc: this.data.ImgList[index]
    })

  },
  wordText() {
    const that = this
    wx.request({
      url: 'https://v1.hitokoto.cn',
      success(res) {
        that.setData({
          datahitokoto :res.hitokoto,
          datafrom:res.datafrom
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    audioCtx.destroy();
    clearInterval(myVar)

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    audioCtx.stop()

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