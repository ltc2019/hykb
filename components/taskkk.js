module.exports = {
  type: 'list',
  async fetch({ args, page }) {
    result =""
 //   let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const qqArr = $prefs.get("qq").match("🐴")?$prefs.get("qq").split("🐴"):[$prefs.get("qq")]
const qq=qqArr[$prefs.get("default")-1]  
async function cat() {
    aid = "2021wuyi/m"
    await get(aid, "login")
    await get(aid, "gofuli&resure=1")
    await get(aid, "share")
    await get(aid, "guangczzl&resure=1") 
    await get(aid, "guang&resure=1")
    await get(aid, "gozhongcao&resure=1")
    await get(aid, "xinshou&resure=1")
    let res = await $http.get(
        "https://huodong3.3839.com/n/hykb/2021wuyi/m/index.php"
    );
    str = res.data.match(/prize1_lingqu_(\d+)/g);
    for (id of str) {
        await get(aid, "playgame&gameid=" + id.split("_")[2])
    }
    //await sleep(69000)
    console.log("等待一分钟领取奖励")
    for (id of str) {
        await get(aid, "lingqushiwan&gameid=" + id.split("_")[2])
    }
    let info = await get(aid, "login")
    if (info.key == "ok") {
        msg = `\n【云养猫】：体重[${info.config.tizhong}]  毛球[${info.config.maoqiu}]`
        result += msg
        console.log(msg)
    }
}
let items=[
{
  title:"开始任务",
  onClick:async () => {
    let tasl1data = await $http.get("https://cdn.jsdelivr.net/gh/Wenmoux/sources/other/activities.js")
  eval(tasl1data.data)
  await task1();
  
  }
  
},
{
  title:"需绑定qq任务 粉丝福利xxx的首页搜索对应数字进去绑定qq",
  style:"category"
},
{
  title:"粉丝福利任务有  80080/79979/638630/25525/12344/20210501"},  
  {
  title:"云养猫",
  style:"label",
  onClick:async () => {
   await cat()
  }
  
},       
         {
        style: 'label',
        title: '抢猫猫',
        async onClick() {
          let id = await $input.text({
            title: '请输入id',
            hint: '',
            value: ''
          })            
          if (id) {
            for (i=0;i<99999;i++){
        await get("2021wuyi/m",`duihuan&dhid=${id}&resure=1`)       
        get("2021wuyi/m",`duihuan&dhid=${id}&resure=1`)        
         get("2021wuyi/m",`duihuan&dhid=${id}&resure=1`)
         get("2021wuyi/m",`duihuan&dhid=${id}&resure=1`)
         get("2021wuyi/m",`duihuan&dhid=${id}&resure=1`)     
        }            
          } else {
            $ui.toast('id呢')
          }
        }
      },
        {
  title:"猫奖励",
  style:"label",
  onClick:async () => {
   await get("2021wuyi/m","mycode")
  }
  
},{
  title:"一键绑定qq",
  onClick:async () => {
  if(qq) {
          for( id of [5,4,3,9,10]){
await get("lottery/m",`submitqq&comm_id=${id}&qq=${qq}&isyuyue=0`)
}
await get("lottery2/m",`submitqq&comm_id=2&qq=${qq}&isyuyue=0`)
await get ("2021wuyi/m",`checkqq&qq=${qq}&qqt=${qq}`)
await get ("2021wuyi/m",`submitqq&qq=${qq}`)    
  }else{
    
  $ui.toast("请先配置好qq号,和scookie一一对应")  
  }
  
  }
}      

]
return items    
  }
}