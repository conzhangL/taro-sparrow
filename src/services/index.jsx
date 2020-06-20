import request from "../config/request";

export async function getUser(params = {}) {
  return request.get({
    url: "/getUser",
  });
}

export async function getNavImgList(params = {}) {
  return request.get({
    url: "/getNavImgList",
  });
}

export async function getBrands(params = {}) {
  return request.get({
    url: "/getBrands",
  });
}

export async function getGoodsList(params = {}) {
  return request.get({
    url: "/getGoodsList",
  });
}

export async function getGoodsDetail(params = {}) {
  return request.get({
    url: "/getGoodsDetail",
  });
}