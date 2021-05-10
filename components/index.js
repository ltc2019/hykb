module.exports = {
  type: 'list',
  async fetch({ args, page }) {
  let options=[]
  
      const scookieArr = $prefs.get("scookie").match("🐴")?$prefs.get("scookie").split("🐴"):[$prefs.get("scookie")]  
   scookie = scookieArr[$prefs.get("default")-1]
    i=1
    global.scookie = scookie.match(/\|/g)?encodeURIComponent(scookie):scookie
    scookieArr.map(list => {     
      options.push({
        title: "账号"+ i, 
        id:i,
        sck:list
      })
     i++      
    })
      return [
      
        {
        title: '               选择账号  当前：账号'+$prefs.get("default"),
        image:$icon('expand_more', 'black'),
      //  summary: '$input.select(data: object)',
        onClick: async () => {
          let selected = await $input.select({
            title: '选择账号 ',
            options: options
          })
       //   $ui.toast(`Selected ${JSON.stringify(selected)}`)
          if(selected){
            $ui.toast("默认：账号"+selected.id)
           $prefs.set("default",selected.id)
           this.refresh()
          }
          
        }
      },
      {
        style: 'icon',
        title: '赚爆米花',
        image:$icon('card_giftcard', 'black'),
        route:$route("task")
      },
      {
        style: 'icon',
        title: '米花商店',
        image:$icon('touch_app', 'black'),
        route:$route("qiang")
      },
      {
        style: 'icon',
        title: '游戏签到',
        image:$icon('alarm', 'black'),
        route:$route("gamesign")
      },
      {
        title:"临时任务",
        route:$route("taskkk"),
        image:$icon('event_note', 'black'),
        style:"icon"
      }
      ,
      {
        style: 'icon',
        title: '兑换记录',
        image:$icon('event_note', 'black'),
        route:$route("logs")
      }    ]
  }
}
