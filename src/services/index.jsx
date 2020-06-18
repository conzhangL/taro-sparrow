import request from "../config/request";

export async function getUser(params = {}) {
  return request.get({
    url: "/getUser",
  });
}
