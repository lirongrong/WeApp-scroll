var pageIndex = 1,
    pageSize = 10,
    keywords = '';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list:[{
          name:'1'
        },{},{},{},{},{},{},{},{},{}],
        isShowLoading:false,
        isScroll:false,
        fixedHeight:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this; 
        that.getList(); 
        that.getFixedHeight();
        wx.stopPullDownRefresh(); //刷新完成后停止下拉刷新动效
    },


    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        var that = this; 
        that.onLoad();
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        var that = this; 
        that.getList(); 
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },

    //获取关注列表 
    getList:function(){
        var that = this;
        var listData = [{
          name:'1'
        },{},,{},,{},,{},,{},,{},,{},,{},,{},,{},,{},,{},];
        that.setData({
          isShowLoading:true
        });

        setTimeout(function(){
          that.setData({
            list:that.data.list.concat(listData)
          })
        },1000) 
    }, 

    //页面滚动触发事件的处理函数
    onPageScroll:function(e){
      var scrollTop = e.scrollTop;
      if(scrollTop >= 0){
        this.setData({
          isScroll:true
        })
      }else{
        this.setData({
          isScroll:false
        })
      }
    },

    //获取顶部置顶框的高度
    getFixedHeight:function(){
      var that = this;
      var query = wx.createSelectorQuery();
      //选择id
      query.select('#fixedBox').boundingClientRect()
      query.exec(function (res) {
        var height = res[0].height;
        that.setData({
          fixedHeight:height + 'px'
        })
      })
    }, 

    //切换menu
    onChangeMenu:function(e){
      var that = this;
      that.data.sort = e.detail; 
      that.getList();
    }, 
 
 
})