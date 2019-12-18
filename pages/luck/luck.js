// pages/luck/luck.js
var beforelist = [];
var afterlist = [];
var beforeobj = {};
var afterobj = {};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    beforeColor: '',
    afterColor:'',
    beforelist:[],
    afterlist:[]
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

  },

  rgb() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var d = Math.floor(Math.random() * 256);
    var j = Math.floor(Math.random() * 256);
    var t = Math.floor(Math.random() * 256);
    var rgb = '(' + r + ',' + g + ',' + b + ')';
    var rgbd = '(' + t + ',' + b + ',' + j + ')';
    this.setData({
      beforeColor: rgb,
      afterColor: rgbd
    })
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

  before() {
    beforelist.push(this.getrand(1, 25))
  },

  after() {
    afterlist.push(this.getrand(1, 12))
  },

  sortNumber(a, b) {
    return b - a
  },

  getvalues(string, obj, index) {
    return [...new Set(Object.values(obj).sort(this.sortNumber).slice(0, index))]
  },

  getkeys(obj, index) {
    let list = [];
    for (const i of index) {
      for (var key in obj) {
        if (obj[key] === i) {
          list.push(key);
        }
      }
    }
    return list
  },

  geteluck() {
    beforelist = [];
    afterlist = [];
    beforeobj = {};
    afterobj = {};
    this.rgb();

    for (var i = 0; i < 100; i++) {
      this.before();
      this.after();
    }
    this.shuzu(beforelist, beforeobj);
    this.shuzu(afterlist, afterobj);
    var beforeFivelist = this.getvalues('beforeobj', beforeobj, 5);
    var afterTwolist = this.getvalues('afterobj', afterobj, 2);
    var before = this.getkeys(beforeobj, beforeFivelist).slice(0, 5);
    var after = this.getkeys(afterobj, afterTwolist).slice(0, 2);
    console.log(before, after);
    this.setData({
      beforelist: before,
      afterlist: after
    })
  },

})