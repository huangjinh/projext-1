// pages/category/index.js
let http =require('../../http/http.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
      listmain:[],
      listsub:[
      ],
      activeid:0
  },
 async getlistsub(e){
  let id =e.currentTarget.dataset.id;
  let listsub = await http({url:'/category/list/'+id})
  this.setData({
    activeid:id,
    listsub,
  })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
   let data= await http({url:'/category/list/0'})
   let listsub=await http({url:'/category/list/'+ data[0].id})
    this.setData({
      listmain:data,
      activeid:data[0].id,
      listsub
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