// pages/address/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {id:1,name:'小雪',phone:'15226232895',address:'城阳区小里程村'},
      {id:2,name:'小浩',phone:'15223265232',address:'项城市三店乡'}
      ]

  },
  updatafn(e){
   let address ={...e.currentTarget.dataset.id} 
   wx.navigateTo({
     url:'/pages/addressEdit/index',
     events:{
        updata:(address)=>{
          console.log('updata')
        let i =  this.data.list.findIndex(item => item.id===address.id)
        this.data.list.splice(i,1,address)
        this.setData({
          list:this.data.list
        })
        }
     },
     success:(res)=>{
        res.eventChannel.emit('updataEvent',address)
     }
   })
  },
  addfn(){
    wx.navigateTo({
      url:'/pages/addressEdit/index',
      events:{
          add:(address)=>{
            this.data.list.push(address)
            
            this.setData({
              list:this.data.list,
              //[`list[${i}]`]:data.list
            })
          }
      },
      success:(res)=>{
         res.eventChannel.emit('addEvent')
      }
    })
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

  }
})