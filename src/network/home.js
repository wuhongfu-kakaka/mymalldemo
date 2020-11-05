import Request from "./request"


export function getHomeMultidata() {
  return Request.instance.get("/home/multidata")
}

export function getHomeGoods(type, page) {
  return Request.instance.get("/home/data",{
    params: {
      type,
      page
    }
  })
}

/*
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
*/

