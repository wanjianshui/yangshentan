// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  // 动画变量 false默认不显示
  isTouchMove:false,
  // 商品默认不选中按钮
  selected:false,
  // 购物车列表数据容器
  list:[],
  // x轴的初始位置
  startX:0
  },
// 滑动商品显示删除按钮
// 封装触摸函数
touchstart:function(e){
 console.log('手指开始触摸的位置X',e.changedTouches[0].clientX);
 console.log('手指开始触摸的位置Y',e.changedTouches[0].clientY);
 this.setData({
   startX:e.changedTouches[0].clientX
 })
},
// 封装获取移动坐标的位置函数
toucHmove:function(e){
  console.log('移动的坐标位置',e.changedTouches[0].clientX);
  // 获取所有的list变量
  var list = this.data.list
  // 获取操作的第几个list变量
var index = e.currentTarget.dataset.index
// 给当前操作的lisr变量添加上删除按钮显示或隐藏的属性isTouchMove


  var endX=e.changedTouches[0].clientX
  var startX=this.data.startX
//  判断左滑或右滑
if(endX < startX){ //显示删除按钮
  //  给当前的list添加删除按钮显的属性isTouchMove
  list[index].isTouchMove=true
}else{ //隐藏删除按钮
 //  给当前的list添加删除按钮隐藏的属性isTouchMove
 list[index].isTouchMove=false
}
// 同步修改list对象
this.setData({
  list:list
})
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  // 调用getShopData方法
  this.getShopData()
  },
  // 封装获取购物车的动态数据====================================================
  getShopData:function(){
  wx.request({
    url: 'http://iwenwiki.com:3002/api/cart/list',
    success:res=>{
      console.log(res.data);
      if(res.data.status==200){
       this.setData({
         list:res.data.data.result
       })
      }else{
        console.log("购物车为空...");
      }
    }
  })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})