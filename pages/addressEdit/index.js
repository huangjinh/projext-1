// pages/addressEdit/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  save(){
    let event = this.getOpenerEventChannel();
    let router=getCurrentPages() //获取页面url数组
    console.log(router[router.length-2].route)
    event.emit('add',{id:1,name:'刘金梅',phone:'15226232895',address:'城阳区小里程村'})
    event.emit('updata',{id:1,name:'孙雪',phone:'15226232895',address:'城阳区小里程村'});
    wx.navigateBack()
  },
  onLoad: function (options) {
   let event = this.getOpenerEventChannel();
   event.on('updataEvent',(address)=>{
  })
   event.on('addEvent',()=>{
   })
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

  }
})