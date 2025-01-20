import {request} from "../utils/https.js";
export function getSideApi(params) {
  return request({
    url: "/goods/getsidebar",
    method: "get",
    params
  })
}
