Page({
  data:{
    markers:[],
    longitude:116.320357,    //经度
    latitude:39.976624,       //纬度
    scale: 18                
  },
  onLoad(){
    //微信赋予小程序可以调用的API
    wx.showLoading({
      title:'获取坐标中'
    });
    //获得手机的GPS
    wx.getLocation({
      type:'gcj02',
      success:(res)=>{
        // console.log(res);
        let {longitude,latitude}=res;
        this.tocreateMarkers(longitude,latitude)
        // console.log(longitued,latitude);
        this.setData({
          longitude,
          latitude
        },()=>{
          wx.hideLoading();
        })
      }
    })
  },
  onReady(){
    //地图上下文环境
    this.mapCtx = wx.createMapContext('myMap');  
  },
  toVisit(e){
console.log(e)
  },
  toScan(){
    return wx.scanCode({
      success:(res)=>{
        //console.log(res);
        wx.showModal({
          title:'scan',
          content:JSON.stringify(res)
        })
      }
    })
  },
  toUser(){},
  toMsg(){},
  toReset(){
    console.log('----')
    //当你使用地图来来去去的时候， 再回来当初的起点
    this.mapCtx.moveToLocation();
     this.setData({
       scale:18
     }) 
  },
  tocreateMarkers(longitude,latitude){
    let markers = [
      {
        "id":1,
        "iconPath":"/images/map-bicycle.png",
        "latitude":latitude,
        "longitude":longitude,
        "width":52.5,
        "height":30,
        "callout":{}
      }
    ]
    this.setData({
      markers
    });
  }
})