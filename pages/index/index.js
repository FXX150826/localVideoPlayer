//index.js
//获取应用实例
const app = getApp()

Page({
 chooseVideo:function(){
   var that = this;
   //调用微信接口选择视频
   wx.chooseVideo({
     //指定资源类型
     sourceType: ['album', 'camera'],//album：从相册选择视频  camera：使用相机拍摄
     //录制视屏的最长时间,单位：秒
     maxDuration:60,//微信中时间单位为秒，且最长支持60秒
     //前后摄像头
     camera:['front','back'],
     //如果成功，返回视频的临时路径
     success:function(res){
       //将获取到的路径打印到控制台
      console.log(res.tempFilePath);
      //将数据渲染到视图层wxml
      that.setData({
        res:res.tempFilePath
      })
     }
   })
 }
})
