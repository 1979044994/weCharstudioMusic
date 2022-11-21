import { baseURL } from "./config"

class myRequest {
    baseURL: string
    constructor(baseURL: string) {
        this.baseURL = baseURL
    }
    request(options: WechatMiniprogram.RequestOption<string | Record<string, any> | ArrayBuffer>) {
        const { url } = options
        return new Promise((resolve, _) => {
            wx.request({
                ...options,
                url: baseURL + url,
                success: (res) => {
                    resolve(res.data)
                },
                fail: (err) => {
                    console.log(err);
                }
            })
        })
    }
    get(options: { url: string; data: any }){
        return this.request({...options,method:"GET"})
    }
    post(options: any){
        return this.request({...options,method:"POST"})
    }
}
export const MyRequest = new myRequest(baseURL)