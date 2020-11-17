import instance from "./request"


export function getHomeMultidata() {
  return instance.get("/home/multidata")
}

export function getHomeGoods(type, page) {
  return instance.get("/home/data",{
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

