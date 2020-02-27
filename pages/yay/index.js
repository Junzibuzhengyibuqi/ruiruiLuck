//index.js
//获取应用实例
const app = getApp()
var myVar = ''
Page({
  data: {
    motto: 'Hello ruruiLuck',
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
    index:0
  },

  playVoice() {
    clearInterval(myVar)
    const index = this.data.index;
    wx.previewImage({
      current: this.data.ImgList[index],
      urls: this.data.ImgList,
    })
  },

  ranImg() {
    let index = this.getrand(0, this.data.ImgList.length);
    this.setData({
      index: index,
      imgsrc: this.data.ImgList[index]
    })

  },

  getrand(m, n) {
    var rand = Math.floor(Math.random() * (n - m + 1)) + m
    return rand
  },
  onShow() {
    myVar = setInterval(() => { this.ranImg() }, 7700)
  },

  onHide () {
    clearInterval(myVar)

  },
  goYaymusic() {
    wx.navigateTo({
      url:'../qiege/qiege'
    })
  },
  goYayLuck() {
    wx.navigateTo({
      url: '../yaoayao/yaoayao'
    })
  }
})
