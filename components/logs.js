module.exports = {
  type: 'article',
  async fetch({ args, page }) {
  
                   url =`https://huodong3.3839.com/n/hykb/bmhstore2/ajax.php`           
                    let res =  await $http.post(url, `ac=mylog&t=2021-02-19+15%3A06%3A43&r=0.42655749627351547&scookie=${scookie}`, {
                        headers: {
                            "User-Agent": $prefs.get("UA")?$prefs.get("UA"):"Mozilla/5.0 (Linux; Android 8.0.0; FRD-AL10 Build/HUAWEIFRD-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045224 Mobile Safari/537.36 V1_AND_SQ_7.1.0_0_TIM_D TIM/3.0.0.2860 QQ/6.5.5  NetType/WIFI WebP/0.3.0 Pixel/1080"
                        }
                    })
              content=res.data.showhtml.replace(/\\\"/g,"\"").replace(/\\\//g,"\/") 
         return {
      content: {
        markdown: content,
        charset: 'utf-8'
      }
    }     
              
           
  }
}
