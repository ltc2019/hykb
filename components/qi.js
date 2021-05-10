  
let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));


module.exports = {
  type: 'list',
  async fetch({ args, page }) {
    items=[]
    const load = require("cheerio").load
   const $ =load(args.list)
    $(".game>li").each((index, li) => {        
        img=$("img",li).attr("lz_src")
       items.push(
      {
        image:img.match("http")?img:("https:"+img),
        gid:$(li).attr("data-gid"),
        title:$(".p-fisrt,p",li).text(),
        type:$("a",li).attr("onclick")?$("a",li).attr("onclick").split(",")[1]:"",
        summary:$(".s-2",li).text(),
        style:"icon",
        spanCount:6,
        onLongClick:async (items) => {
          key=""
        console.log(`开始抢购 ${items.title}...`)
        await  hHdmodelUser.start(items.type)      
        await  hHdmodelUser.get("checkExchange",`gid=${items.gid}`) //检测                   
         $ui.toast(`开始抢购 ${items.title}...`)       
           console.log(items.gid)
           for (i=0;i<9999;i++)  {            
        hHdmodelUser.get("exchange",`goodsid=${items.gid}`)   //兑换             
        await sleep(1)
   }
        }
      }                
      )              
      })
    return items
  }
}

var hHdmodelUser={
  start:function(cat){
   switch(parseInt(cat)){
    case 1: 
    key ="virtual/ajaxVirtual"
    break;
    case 2: 
    key ="reserve/ajaxReserve"
    break;    
    case 3:
    key ="inkind/ajaxInkind"
    break;
    case 4:
    key ="account/ajaxAccount"
    break;
    case 5:
    key ="code/ajaxCode"
    break;
    case 6: 
    key ="libao/ajaxLibao"
    break;    
   }
    
  },
  exchange:async function(goodsid){
    for (i=0;i<9999;i++)  {  
  await  hHdmodelUser.get("exchange",`goodsid=${goodsid}`)   //兑换             
   }
    
  },
  get:async function(a, b) {
            return new Promise(async resolve => {
                try {   
                   url =`https://huodong3.3839.com/n/hykb/bmhstore2/inc/${key}.php`           
                    let res =  await $http.post(url, `ac=${a}&r=0.9948423196524376&${b}&scookie=${scookie}`, {
                        headers: {
                            "User-Agent": $prefs.get("UA")?$prefs.get("UA"):"Mozilla/5.0 (Linux; Android 8.0.0; FRD-AL10 Build/HUAWEIFRD-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045224 Mobile Safari/537.36 V1_AND_SQ_7.1.0_0_TIM_D TIM/3.0.0.2860 QQ/6.5.5  NetType/WIFI WebP/0.3.0 Pixel/1080"
                        }
                    })
                   console.log(res.data) 
                } catch (err) {
                    console.log(err)
                }
                resolve()
            })
        }
  
  
  
}