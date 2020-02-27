//index.js
//获取应用实例
const app = getApp();
const voiceReciver = wx.getRecorderManager();
Page({
  data: {
    motto: 'Hello ruruiLuck',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    voice: '', //录音地址
    voiceTime: '', //录音时间
    showVoice: false,
    autoplay: false,
    phone:{}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  onShow() {
    const phone = wx.getSystemInfoSync();;
    console.log(phone.system, 1)
    this.setData({
      phone,
    });
    wx.setNavigationBarTitle({
      title: `小小雨先生的${phone.brand}  ${phone.model}`,
    });
  },


  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  goLuck() {
    wx.navigateTo({
      url: '../luck/luck'
    })
  },
  goYayLuck() {
    wx.navigateTo({
      url: '../yaoayao/yaoayao'
    })
  },
  gomimi() {
    voiceReciver.onStart(() => {
      console.log('录音ing')
    });
    voiceReciver.start({
      format: 'mp3'
    })
  },
  outmimi() {
    voiceReciver.stop();
    voiceReciver.onStop((res) => {
      console.log('录音中断');
      console.log(res) //这里是必须写完成事件的，因为最后的文件，就在这里面；
      let time = parseInt(res.duration / 1000);
      this.setData({
        voice: res.tempFilePath,
        voiceTime: time,
        showVoice: true,
      })
      // 其中：
      // res.tempFilePath;//是临时的文件地址
      // res.duration;//录音的时长
      // res.fileSize;//文件的大小
    })
  },


  playVoice() {
    var voicePlayer = wx.createInnerAudioContext({});

    let {
      autoplay,
      voice
    } = this.data;
    console.log(voice, voicePlayer, 8787)
    voicePlayer.src = voice,
    voicePlayer.autoplay = true


  },

  playVoice() {
    var voicePlayer = wx.createInnerAudioContext({});

    let { autoplay, voice } = this.data;
    if (!voice){
      wx.showModal({
        content: '想听最爱你的声音吗，那就按下 gomimi 录上一段吧*v*',
      })
      return
    };
    voicePlayer.src = voice;
    voicePlayer.autoplay = true;
    this.setData({
      autoplay: !autoplay
    }, () => {
      if (this.data.autoplay) {
        voicePlayer.play();
        console.log('播放ing')
      } else {
        voicePlayer.pause();
        console.log('播放中断')

      }

    })

  },

})