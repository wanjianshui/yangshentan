// app.js
App({
   onLaunch:function(){
  //  获取之前已经授权过的信息
     wx.getSetting({
       success:(res)=>{
      //  console.log('获取过的授权信息',res);
      //  判断之前是否授权过的信息
      if(res.authSetting['scope.userInfo']){
      // console.log('已授权过头像信息');
      // 获取用户信息
      wx.getUserInfo({
        success:(result) => {
          // console.log('获取到的用户信息',result.userInfo);
          // 把获取到的用户信息传递出去给其他页面使用
          this.globalData.userinfo=result.userInfo
          // 在app.js中获取头像和昵称 如果直接打开about文件 由于获取头像呢次异步操作 可能在page.onliad函数的时候 全局变量没有修改就已执行完成
          // 解决方法：加入userinfoCallback函数 返回获取的数据信息
          if(this.userinfoCallback){
            this.userinfoCallback(result.userInfo)
          }

        }
      })
      }else{
        console.log('未授权');
      }
       },
     })
   },

  globalData:{
    // 存储切换定位城市的名字
    cityName:'',
    // 存储用户信息的容器
    userinfo:''
  }
})
