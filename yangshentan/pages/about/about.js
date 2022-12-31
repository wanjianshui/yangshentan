// 引入全局的app.js 获取globalData对象
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
  // 头像变量容器
  avatarUrl:'',
  // 昵称变量容器
  nickName:'',
  // 授权按钮显示或隐藏容器
  isShow:true,
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //  获取用户之前已经授权过的信息进行保存不需要二次授权
    // console.log(app.globalData.userinfo);
    // if(app.globalData.userinfo){ //全局变量的userinfo对象存在 
    //   this.setData({
    //     avatarUrl:app.globalData.userinfo.avatarUrl,
    //     nickName:app.globalData.userinfo.nickName,
    //     // 隐藏按钮
    //     isShow:false
    //     })
    // }else{
    //   app.userinfoCallback=res=>{
    //     console.log('没有获取过授权信息',res);
    //   }
    // }

  
  },
  // 点击按钮授权用户的头像和信息
  getUserInfo:function(e){
    // console.log(e);
  // 判断允许授权还是拒绝授权
  if(e.detail.userInfo){
  // 获取头像和昵称
   this.setData({
     avatarUrl:e.detail.userInfo.avatarUrl,
     nickName:e.detail.userInfo.nickName,
    //  隐藏按钮
     isShow:false
   })
  }else{
    // 用户拒绝获取头像
   console.log('拒绝获取头像和昵称');
  }
  },

  // 点击登陆
  login:function(e){
    // 弹窗提示登陆信息
    var a = wx.showModal({
      title: '获取成功',
    })
  console.log(e.detail);
  // 获取头像和昵称
  this.setData({
    avatarUrl:e.detail.userInfo.avatarUrl,
    nickName:e.detail.userInfo.nickName,
    // 隐藏按钮
    isShow:false
  })
  // 登陆请求
  wx.login({
    success:(res) =>{
      // 登陆凭证
      console.log(res.code)
      // 请求code换成openid接口
      wx.request({
        // 请求接口
        url: '',
        data:{
          '':res.code,
        },
        success:result=>{
      
        }
      })
    },
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