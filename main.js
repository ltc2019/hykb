
if (typeof $dora == 'undefined') {
  console.error('This project runs only in Dora.js.')
  console.error('Please visit https://dorajs.com/ for more information.')
  process.exit(-1)
}


console.info('Congratulation, your addon runs successfully!')
const oldConsoleLog = console.log;
  global.console.log = function (msg) {
    // 忽略 pnp 日志
    if (msg === 'dependencyNameMatch') {
      return;
    }
    if (typeof msg === 'object') {
      if (msg.issuer && msg.dependencyNameMatch) {
        return;
      }
      if (
        msg.issuerInformation ||
        msg.issuerLocator ||
        msg.dependencyName ||
        msg.dependencyReference
      ) {
        return;
      }
    }
    oldConsoleLog.apply(oldConsoleLog, arguments);
  };
  
   
    global.get=function get(a, b) {
            return new Promise(async resolve => {
                try {
                  let url = `https://huodong3.3839.com/n/hykb/${a}/ajax.php`
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