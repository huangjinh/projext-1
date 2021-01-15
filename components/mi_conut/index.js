// components/mi_conut/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count:Number,
    maxCount:{
      type:Number,
      value:5
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    decreasefn(){
      if(this.data.count===1){
        wx.showToast({
          title: '商品不能少于1',
          icon:'none'
        })
        return;
      }
      this.triggerEvent('decrease',100)
    },
    increasefn(){
      if(this.data.count===this.data.maxCount){
        wx.showToast({
          title: '商品不能大于'+this.data.maxCount,
          icon:'none'
        })
        return;
      }
      this.triggerEvent('increase',101)
    }

  }
})
