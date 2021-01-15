// pages/list/index.js
let http =require('../../http/http.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
      listdata:{
        liststyle:true,
        list:[],
        model:{name:'', cid:0, orderCol:'price', orderDir:'asc', begin:0, pageSize:6}
      }
  },
  inputfn(e){
    this.setData({
      "listdata.model.name":e.detail.value
    })
   
  },
  searchfn(){
    this.sendAjax()
  },
  orderDirfn(){
    if(this.data.listdata.model.orderDir ==="asc"){
      this.setData({
        "listdata.model.orderDir":"desc",
      })
    }
    else{
      this.setData({
        "listdata.model.orderDir":"asc"
      })
    }
    console.log(this.data.listdata.model.orderCol)
    this.sendAjax()
  },
  orderColfn(e){
  this.setData({
    "listdata.model.orderCol":e.currentTarget.dataset.id,
  })
   this.sendAjax()
  },
  async sendAjax(){
    let data = await http({url:'/product/list',
          method:'POST',
          data:this.data.listdata.model
  });
   this.setData({
     "listdata.list":data,
   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    let cid = options.cid;
    this.setData({
      "listdata.model.cid": Number(cid)
    })
    let data = await http({url:'/product/list',
          method:'POST',
          data:this.data.listdata.model
  });
   this.setData({
     "listdata.list":data,
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