import { MyRequest } from "./index"
export function getMoveList(offset: number = 0, limit: number = 20) {
    return MyRequest.get({
        url: "/top/mv",
        data: {
            limit,
            offset
        }
    })
}
export function getMvUrl(id: string) {
    return MyRequest.get({
        url: "/mv/url/",
        data: {
            id
        }
    })
}