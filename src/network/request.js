import Axios from "axios"

const instance = Axios.create({
  baseURL: "http://152.136.185.210:8000/api/w6",
  timeout: 10000
})

instance.interceptors.request.use(config => {
  return config
}, err => {
  return err
})

// 2.2.响应拦截
instance.interceptors.response.use(res => {
  // console.log(res)
  return res.data
}, err => {
  return err
})

export default {
  /*
  *  instance#request(config)
  *  instance#get(url[, config])
  *  instance#post(url[, data[, config]])
  */
  instance
}