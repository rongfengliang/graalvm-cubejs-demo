// Creator: WebInspector 537.36

import { sleep, group,check } from "k6";
import http from "k6/http";

export const options = {
  vus: 800,
  duration: '30s',
  thresholds: {
    http_req_duration: ['p(90)<10000'], // 99% of requests must complete below 1.5s
  },
};

export default function main() {
  let response;

  group("page_1 - http://localhost:4000/", function () {
     
    response = http.get(
      "http://localhost:4000/cubejs-api/v1/load?query=%7B%22measures%22%3A%5B%22CustomerDemographics.count%22%5D%2C%22timeDimensions%22%3A%5B%5D%2C%22order%22%3A%7B%22CustomerDemographics.count%22%3A%22desc%22%7D%2C%22dimensions%22%3A%5B%22CustomerDemographics.cdMaritalStatus%22%2C%22CustomerDemographics.cdCreditRating%22%5D%7D&queryType=multi",
      {
        headers: {
          Host: "localhost:4000",
          Connection: "keep-alive",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGFsb25nIiwiYWdlIjozMzMsImlhdCI6MTYxODQxNDQ4Mn0.I6ED9Zp3e9YSHwJ8hvn9KkMKeWkH0hUsLxtu47dHOyY",
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/537.36",
          Accept: "*/*",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "http://localhost:4000/chart-renderers/react/index.html",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
          Cookie:
            "_ga=GA1.1.907093698.1583561040; ajs_anonymous_id=%22d82d8a47-199b-495e-b344-73762c55f660%22; fonce_current_user=1; _mkto_trk=id:321-ODX-117&token:_mch-localhost-1612612252115-51676; sAnonymousSessionToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJibGl0empzIjp7ImlzQW5vbnltb3VzIjp0cnVlLCJoYW5kbGUiOiJQZ1piZWR4MThoR0cxYkZZSF92VkRYTTR1dlFxRUtlSzphand0IiwicHVibGljRGF0YSI6eyJ1c2VySWQiOm51bGwsInJvbGVzIjpbXX0sImFudGlDU1JGVG9rZW4iOiJLRmNhWXpnVkpiZXZwblZMZjFPclVvbU1DN2JXeHpBcyJ9LCJpYXQiOjE2MTM0NDk3NjMsImF1ZCI6ImJsaXR6anMiLCJpc3MiOiJibGl0empzIiwic3ViIjoiYW5vbnltb3VzIn0.tPyRBd-QT1RDkJhxrMNxux2e4_VWGxYf9CHk_3JDMdw; sAntiCrfToken=KFcaYzgVJbevpnVLf1OrUomMC7bWxzAs; sPublicDataToken=eyJ1c2VySWQiOm51bGwsInJvbGVzIjpbXX0%3D; ajs_user_id=%22d66d4b60-c1a9-42b0-8187-0819529e7fcd%22; mp_b0635d8a2edecd49ce39e994a9f90f43_mixpanel=%7B%22distinct_id%22%3A%20%22rongfeng.liang%40gmail.com%3A%3A4560db66-7fd1-11eb-a1d9-55d6941c5519%22%2C%22%24device_id%22%3A%20%221780a61181f475-026dde1223d6e54-33697709-1aeaa0-1780a611820d6d%22%2C%22%24user_id%22%3A%20%22rongfeng.liang%40gmail.com%3A%3A4560db66-7fd1-11eb-a1d9-55d6941c5519%22%2C%22%24initial_referrer%22%3A%20%22http%3A%2F%2Flocalhost%3A18630%2Falogin-callback.html%3Fcode%3D6WxSMT%26state%3DsyRFpa%22%2C%22%24initial_referring_domain%22%3A%20%22localhost%3A18630%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%7D; _gid=GA1.1.235412551.1615474139; _sp_id.1fff=fa3d65f6-bcfc-4b16-9acb-1b3178254b05.1612612252.93.1618064284.1617700460.705de2ef-535c-45b2-99e1-784f8f0ee010; playground_anonymous=b39dbf67-8d55-4013-acfb-c48516b79f90",
        },
      }
    );
    check(response, {
      'logged in successfully': (resp) => resp.status<400,
    })
    // Automatically added sleep
    sleep(2);
  })
}
