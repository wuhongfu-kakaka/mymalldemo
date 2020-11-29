import instance from "./request"

export function getDetailByIid(iid){
  return instance.get("/detail",{
    params: {
      iid
    }
  })
}

//获取推荐数据接口
export function getRecommend() {
  return instance.get('/recommend')
}

export class PriceContent {
  constructor({
    discountBgColor,discountDesc,
    price,
    lowPrice,oldPrice,
    lowNowPrice,
    highPrice,
    highNowPrice
  }) {
    //打折信息
    this.discountBgColor = discountBgColor
    this.discountDesc = discountDesc

    this.price = price
    this.lowPrice = lowPrice
    this.oldPrice = oldPrice
    this.lowNowPrice = lowNowPrice
    this.highPrice = highPrice
    this.highNowPrice = highNowPrice
  }
}

export class ShopInfo {
  constructor({
    name, level, cFans, cGoods, cSells,
    score, shopLogo
  }) {
    this.name = name
    this.level = level
    this.score = score
    this.shopLogo = shopLogo
    this.cFans = cFans
    this.cGoods = cGoods
    this.cSells = cSells
  }
}