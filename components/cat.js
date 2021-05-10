module.exports = {
  type: 'list',
  async fetch({ args, page }) {
    $ui.toast('记得输入抢购id')
    return [
   
      
    ]
  }
}
function get(a, b) {
            return new Promise(async resolve => {
                try {
                  let url = `https://huodong3.3839.com/n/hykb/${a}/m/ajax.php`
                   let data =`ac=${b}&r=0.1362954162068364&scookie=${scookie}`
                     let res = await $http.post(url, data, {
                        headers: {
                            "User-Agent": "Mozilla/5.0 (Linux; Android 8.0.0; FRD-AL10 Build/HUAWEIFRD-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045224 Mobile Safari/537.36 V1_AND_SQ_7.1.0_0_TIM_D TIM/3.0.0.2860 QQ/6.5.5  NetType/WIFI WebP/0.3.0 Pixel/1080"
                        }
                        
                    })
                    
              //      console.log(data)
                    msg=res.data
             
                   
                console.log(msg)
              //  await sleep(1000)
                } catch (err) {
                    console.log(err)
                }
                resolve(msg)
            })
        }