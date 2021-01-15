let baseurl='http://192.168.110.134:1314'
function ajaxs(options,isLoading=true){
  options.url=baseurl+options.url;
let defaultioptions ={
  method:'GET',
  header:{
    "content-type":"application/json",
    "authorization":wx.getStorageSync('token')
  },
  dataType:'json',
}
let newoptions = Object.assign({},defaultioptions,options);
if(isLoading) wx.showLoading({
  title: 'loading..',
  mask:true
})

  return new Promise((resolve)=>{
    setTimeout(()=>{
      wx.request({
        ...newoptions,
        success:({data:{code,data,msg}})=>{
         switch(code){
           case 200:
             resolve(data)
             break;
           case 199:
           case 401:
           case 404:
           case 500:
         }
        },
        fail:()=>{
         wx.showToast({
           title:'网络请求失败',
           icon:'none',
           duration:2000
         })
       },
       complete:()=>{
          if(isLoading) wx.hideLoading()
       }
       })
    },400)
   
  })


}
module.exports =ajaxs