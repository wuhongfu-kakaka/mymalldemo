import instance from "./request"

export function getDetailByIid(iid){
  return instance.get("/detail",{
    params: {
      iid
    }
  })
}