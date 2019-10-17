// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city: '北京',
    imgUrls:[
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'

    ],
    movieList: [
      {
        isShow: 0,
        name: "复仇者联盟4：终局之战",
        imgUrl: "https://p0.meituan.net/128.180/moviemachine/f7d2ad70eb79d6d9b8a197713db9b8c41711752.jpg",
        actor: "小罗伯特·唐尼,克里斯·埃文斯,马克·鲁法洛",
        wantSee: "1816366",
        showInfo: {
          cinema: 56,
          times: 281
        }
      },
      {
        isShow: 1,
        name: "反贪风暴4",
        imgUrl: "https://p1.meituan.net/128.180/movie/c63849c7a9de360a7b192bc322792a111705236.jpg",
        actor: "古天乐,郑嘉颖,林峯",
        grade: "9.1",
        showInfo: {
          cinema: 60,
          times: 554
        }
      },
      {
        isShow: 1,
        name: "调音师",
        imgUrl: "https://p0.meituan.net/128.180/movie/29caaa1b66c95807a3f4d29b5b03644b1876102.jpg",
        actor: "阿尤斯曼·库拉纳,塔布,拉迪卡·艾普特",
        grade: "9.1",
        showInfo: {
          cinema: 60,
          times: 554
        }
      },
      {
        isShow: 1,
        name: "狗眼看人心",
        imgUrl: "https://p0.meituan.net/128.180/movie/454e239d42cc3abb316f80589f73ffa51893280.jpg",
        actor: "黄磊,闫妮,韩童生",
        grade: "8.1",
        showInfo: {
          cinema: 42,
          times: 163
        }
      },
      {
        isShow: 1,
        name: "老师·好",
        imgUrl: "https://p0.meituan.net/128.180/movie/b8821d597382e319f9679b7e24e49d113204356.jpg",
        actor: "于谦,汤梦佳,王广源",
        grade: "9.3",
        showInfo: {
          cinema: 41,
          times: 156
        }
      },
      {
        isShow: 1,
        name: "如影随心",
        imgUrl: "https://p0.meituan.net/128.180/movie/6ce734e582eb6ad7158e558edf765c263029211.jpg",
        actor: "陈晓,杜鹃,王嘉",
        grade: "7.6",
        showInfo: {
          cinema: 48,
          times: 154
        }
      },
      {
        isShow: 1,
        name: "祈祷落幕时",
        imgUrl: "https://p0.meituan.net/128.180/movie/e787bd539f358ba9550b6d9e301c0ca51995242.jpg",
        actor: "阿部宽,松岛菜菜子,沟端淳平",
        grade: "9.0",
        showInfo: {
          cinema: 39,
          times: 131
        }
      },
      {
        isShow: 1,
        name: "转型团伙",
        imgUrl: "https://p1.meituan.net/128.180/movie/e6ba41b0d41c89c64120eee03586f820991282.jpg",
        actor: "吴镇宇,乔杉,文松",
        grade: "5.6",
        showInfo: {
          cinema: 42,
          times: 115
        }
      },
      {
        isShow: 1,
        name: "神奇乐园历险记",
        imgUrl: "https://p0.meituan.net/128.180/movie/0253cac859838e4fd6ae94cf986b07971008254.jpg",
        actor: "索菲亚·玛丽,詹妮弗·加纳,肯·哈德森·坎贝尔",
        grade: "8.8",
        showInfo: {
          cinema: 43,
          times: 84
        }
      },
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   // let self = this
   //wx.request({
    // url:'https://www.easy-mock.com/mock/5da30cd11e2136176e0f4859/example/list',
     //success:(res)=>{
     //  console.log(res)
       ///console.log(this)
      // this.setData({
      // //  items:res.data.data.list
      // })
   //  }
  // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('noReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('noShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('noHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('noUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log(123)
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