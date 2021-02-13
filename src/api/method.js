import service from '@/api/request'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export function GetName(data){
    return service.request({
        method:'get',
        url:'/item/xhr/index.json?csrf_token=96cd61c2c2f8195adf8eae0d47561d46&__timestamp=1610869507632&',
        data
    })
}
export  function GetNavigationList(data){
    return service.request({
        method:'get',
        url:'/item/item/cateList.json?csrf_token=96cd61c2c2f8195adf8eae0d47561d46&__timestamp=1610891528962&categoryId=',
        data
    })
}
export  function GetAllProducts1(data){
    return service.request({
        method:'get',
        url:'/item/xhr/search/getTotalNumbersOfProducts.json',
        data
    })
}
export  function GetHotSearch(data){
    return service.request({
        method:'get',
        url:'/item/xhr/search/init.json',
        data
    })
}
export  function GetWorthBuyPic(data){
    return service.request({
        method:'get',
        url:'/item/topic/v1/know/navWap.json',
        data
    })
}
export  function GetIndex(data){
    return service.request({
        method:'get',
        url:'/item/xhr/page/global.json',
        data
    })
}
export  function GetLunbo(data){
    return service.request({
        method:'get',
        url:'/item/xhr/index.json',
        data
    })
}
