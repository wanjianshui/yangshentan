// pages/food/food.js
// 引入模块
var myData=require('../../common/typeData')
// console.log(myData,'myData')
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
     // 定位的数据
  location:'广西',
    // 分类的导航数据
  typeData:myData.list,
  // 列表数据信息容器 数组 用于接收接口数据
  list:[],
  // 商品列表初始请求的页面 1代表第一页
  num:1,
  // 下拉到底部的提示信息
  moreInfo:'',
  },
  // 点击列表跳转对应的商品详情界面
  getShopDetail:function(e){
    wx.navigateTo({
      url: '/pages/shopDetail/shopDetail?id='+e.currentTarget.dataset.mark,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options) {
    // 方法1接收hotcity定位传递过来的参数
    // console.log('hotcity传递的参数',options);
    // if(options.cityName){
    //   // 修改位置为当前定位的城市 
    //   this.setData({
    //     location:options.cityName
    //   })
    // }

    // 方法2 通过全局变量接收参数
    // console.log('全局',app.globalData.cityName);
  // 获取商品列表数据===========================================
  //  调用getData方法
   this.getData();
  
  // 本地存储：同步(wx.setStorageSync('key', data)) 异步(wx.setStorage('key', value:'值' success:function(){}))
  },
  getData:function(options){
    wx.request({
      url: 'http://iwenwiki.com:3002/api/foods/list/type',
      // 接收接口参数
      data:{
        // city:this.data.location,
        // // // 页数
        // page:1,
        // 获取接口的数据 options形参 codeId接口的数据
        // type:options.codeId
        type:options
      },
      success:res=>{
        // console.log('food数据',res.data.data);
        // 拿接口数据
        this.setData({
          // 拿到接口数据data下的data真实数据赋值给listy数组变量
          list:res.data.data,
        })
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
  onShow:function() {
    // 方法1通过全局变量接收参数======================================
    // console.log('全局',app.globalData.cityName);
    if(app.globalData.cityName){
      this.setData({
        location:app.globalData.cityName
      })
      // 重新请求对应的城市的列表信息

    // 方法2通过本地存储接收参数======================================
    var city = wx.getStorageSync('cityName')
       if(city){
       this.setData({
         location:city
       })
      //  调用getData方法
       this.getData()
       }
     
    }
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
  onReachBottom(options) {
  // 下拉到底部时触发的方法==========================================================
  // 商品列表下啦到底部num页数申请加1 即获取下一页的数据
  this.data.num++
  // 加载提示动画
  wx.showLoading({
    title: '加载更多数据...',
  })
  // 获取下一页的数据
  wx.request({
    url: 'http://iwenwiki.com:3002/api/foods/list/type',
    data:{
      // city:this.data.location,
      // // // 页数
      // page:1,
      // 获取接口的数据 options形参  codeId接口的数据
      type:options.codeId,
      page:this.data.num
    },
    success:res=>{  // 箭头函数是没有this的 会逐渐往上找 找到有this的为止
      // console.log('food新加载数据',res.data.data);
      // 判断还有没有数据  如果data的状态码status等于200表示成功接下还有数据
      if(res.data.status==20000000){
      console.log('继续加载');
      // this.setData({
      //   // 旧数据拼接新数据
      //   list:this.data.list.concat(res.data.data.request)
      // })
      }else{
        // 显示数据加载完成后的动画
        wx.showToast({
          title: '数据加载完成',
        })
      // console.log('到底啦');
      // 到底部无数据显示提示信息
      this.setData({
        // 底部显示的信息
        moreInfo:'到底啦!!!'
      })
      }
    },
    // 作用隐藏showLoading动画
    // complete:()=>{
    //   wx.hideLoading()
    // }
  })
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
  
  }
})