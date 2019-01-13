import axios from "axios";

let baseUrl = 'https://api.haximeishi.com';
axios.defaults.baseURL = baseUrl;

var instance = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
});

instance.interceptors.request.use(function (config) {
  // let token = localStorage.getItem('token')
  let token ="123456"
  if (token) {
    config.headers['token'] = token
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
// 轮播广告接口
export const swiper = () => {
  return axios.get("/ad/getAd").then(res => res.data);
};