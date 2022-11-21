// pages/main-video/main-video.ts

import { getMoveList } from "../../services/video"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        vedioList: [] as any,
        offset: 0,
        hasMore: true
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        this.fetchMovie()
    },

    //发送网络请求
    async fetchMovie() {
        const res: any = await getMoveList(this.data.offset)
        this.setData({ vedioList: [...this.data.vedioList, ...res.data] })
        this.data.offset = this.data.vedioList.length;
        this.data.hasMore = res.hasMore
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        if (!this.data.hasMore) return
        this.fetchMovie()
    },
    async onPullDownRefresh() {
        this.setData({ vedioList: [] })
        this.data.offset = 0;
        this.data.hasMore = true;
        await this.fetchMovie()
        wx.stopPullDownRefresh()
    }

})