// pages/hotCity/hotCity.js
// 调用全局的app.js文件
var myApp=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 存放热门城市容器
  hotCtiy:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options) {
  // 获取热门城市=================================================================
  wx.request({
    // 请求接口
    url: 'http://iwenwiki.com:3002/api/hot/city',
    success:res=>{
      // console.log(res.data);
      if(res.data.status==200){ // 如果状态码为200执行以下操作
      this.setData({
        // 把接口数据赋值给hotCtiy
        hotCtiy:res.data.data
      })
      }
    }
  })
  },
  // 点击定位获取当前的位置的函数=====================================================
  getLocation:function(){
  //  getLocation获取位置
  wx.getLocation({
    success:res=>{
      // console.log(res);
      // 存经纬度信息的
      var latitude = res.latitude;
      var longitude = res.longitude;
      // 根据经纬度获取对应的城市名称
      wx.request({
        url: 'http://iwenwiki.com:3002/api/lbs/location?latitude=39.90&longitude=116.4',
        data:{
          latitude:latitude,
          longitude:longitude
        },
        success:result=>{
          // console.log(result.data.result.address_component.city);
          var city=result.data.result.address_component.city;
          // slice截取位置信息的长度
          var cityName = city.slice(0,city.length-1)
          // console.log(cityName);

          // 页面传递数据：  1、页面跳转(url地址栏拼接数据  对应的页面onload接收参数options)
                        // 2、全局变量(传递参数 a:把数据存储到全局app.js b:其他页面获取getApp())
                        // 3、本地存(其他页面想读取的时候获取本地存储变量)
        //  把获取的城市数据传递给food页面
        // 方法1 跳转页面taber页面 url传参
        // wx.reLaunch({
        //   // 往food.js传递cityName参数
        //   url: '../food/food?cityName='+cityName, 
        // })
        // 方法2 跳转页面taber页面 全局变量传递参数
        // 存储
        myApp.globalData.cityName=cityName;
        // 返回taber页面
        wx.switchTab({
          url: '../food/food',
        })
        // 方法3 本地存储
        // wx.setStorageSync存储位置信息到本地
        wx.setStorageSync('cityName', cityName)
        // 跳转回到taber页面
        wx.switchTab({
          url: '../food/food',
        })
        }
      })
    },
    // fail位置获取失败提示
    fail:function(){
      console.log('位置获取失败');
    }
  })
  },
  // 点击热门城市
  selectCity:function(e){
    // 触发事件 获取当前选择的城市名称
  // console.log('热门城市',e.currentTarget.dataset.name);
  wx.setStorageSync('cityName', e.currentTarget.dataset.name)
  // 传递数据 
  wx.switchTab({
    url: '../food/food',
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