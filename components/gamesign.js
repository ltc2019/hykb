 let items = []
 const load = require("cheerio").load
 async function getid() {
     items.push({
         title: "开始签到",
         async onClick() {

             await sign()
         }

     })
     let url = `https://huodong3.3839.com/n/hykb/qdjh/index.php`
     let res = await $http.get(url)
     const $ = load(res.data)
//   let lres=  await get("grow","Dailylogin")
//   console.log(lres)
     let list = $(".glist>li")
     list.each((index, li) => {
         if (!$(".btn", li).attr("onclick").match(/已结束/)) {
             let str = $(".btn", li).attr("onclick").replace(/每日签到领/, "").split("'")
             items.push({
                 title: str[3],
                 style: "icon",
                 image: $("img", li).attr("lz_src"),
                 id: str[1].match(/hd_id=(.+)/)[1]
             })
         }
     })
 }

 game = 0
 //代码 https://res.onebiji.com/kuaibao/n/hykb/signcard/js/user.js?v_6_v43
 //tiyan ac=tiyan&hd_id=315&t=2020-08-4+2%3A36%3A11&r=0.24483299041169992&scookie=1%7C0%7C21039293%7C5Zyo5LiK5rip5p%2BQ5p%2BQ%7Ckb95E42BB3099DBBBDEC5D797FB5ADE4DF%7CGi9uIlGfpvDfoRaipT9ipJ7xIv5rGJprGv80IlEwIi6%3D%251%7C7aa58a193e1237823c88baa379a4bc03&device=kb95E42BB3099DBBBDEC5D797FB5ADE4DF
 //刷新ac=closegonggaobtn&gx=0&hd_id=315&hd_id2=315&t=2020-08-4+2%3A41%3A56&r=0.6410353547781091&scookie=1%7C0%7C21039293%7C5Zyo5LiK5rip5p%2BQ5p%2BQ%7Ckb95E42BB3099DBBBDEC5D797FB5ADE4DF%7CGi9uIlGfpvDfoRaipT9ipJ7xIv5rGJprGv80IlEwIi6%3D%251%7C7aa58a193e1237823c88baa379a4bc03&device=kb95E42BB3099DBBBDEC5D797FB5ADE4DF
 //签到ac=signToday&hd_id=315&hd_id2=315&t=2020-08-4+2%3A36%3A11&r=0.24483299041169992&scookie=1%7C0%7C21039293%7C5Zyo5LiK5rip5p%2BQ5p%2BQ%7Ckb95E42BB3099DBBBDEC5D797FB5ADE4DF%7CGi9uIlGfpvDfoRaipT9ipJ7xIv5rGJprGv80IlEwIi6%3D%251%7C7aa58a193e1237823c88baa379a4bc03&device=kb95E42BB3099DBBBDEC5D797FB5ADE4DF

 
 async function get(c, a, b) {
     return new Promise(async resolve => {
         try {
             let res = await $http.post(`https://huodong3.3839.com/n/hykb/${c}/ajax.php`, `ac=${a}&r=0.9948423196524376&hd_id=${b}&hd_id2=${b}&scookie=${scookie}`, {
                 headers: {
                     "User-Agent": $prefs.get("UA") ? $prefs.get("UA") : "Mozilla/5.0 (Linux; Android 8.0.0; FRD-AL10 Build/HUAWEIFRD-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045224 Mobile Safari/537.36 V1_AND_SQ_7.1.0_0_TIM_D TIM/3.0.0.2860 QQ/6.5.5  NetType/WIFI WebP/0.3.0 Pixel/1080"
                 }
             })
             back = res.data
         } catch (err) {
             console.log(err)
         }
         resolve(back)
     })
 }


 async function sign() {

     for (i of items) {
         id = i.id
         await get("signcard", "login", id)
         let data = await get("signcard", "signToday", id)
         key = data.key
         if (key == "-1005") {
             console.log("体验游戏中,请一分钟后再刷新领取☑️")
             await get("signcard", "tiyan", id)
             game++
             //    await get("login",id)
             //  await get("signToday",id)
         } else if (key == "-1007") {
             game++
             await get("signcard", "sharelimit", id) //
             console.log(`${i.title}  分享成功✅`)
             await get("signcard", "login", id)
             await get("signcard", "signToday", id)
         } else if (key == "-1002") {
             console.log(`${i.title}  今日已签☑️`)
             game++
         } else if (key == "200") {
             game++
             console.log(`${i.title} 签到成功✅ 已签到${data.signnum}天`)
         } else if (key == "no_login") {
             console.log("⚠️⚠️scookie失效,请重新配置⚠️⚠️")
             break
         } else {
             console.log(i)
             console.log(data)
         }
     }

     console.log(game)
 }


 async function card() {
     cardinfo = await get("signhelp", "login")
   //  console.log(cardinfo)
     if (cardinfo.key == "ok") {
         items.push({
           title:cardinfo.name,
           image:cardinfo.avatar
         },{
                 title: "我的卡片",
                 style: "category"
             }, {
                 title: "补签卡：    " + cardinfo.config.b_card

             }, {
                 title: "加速卡：    " + cardinfo.config.j_card

             }, {
                 title: "爆米花：    " + cardinfo.config.baomihua
             }, {
                 title: "购买补签卡",
                 style: "label",
                 onClick: async () => {
                     let res = await get("signhelp", "exchange&cat=1")
                     if (res.key == 200) {
                         $ui.toast("购买成功")
                     } else {
                         $uo.toast(res.msg)
                     }
                 }
             }, {
                 title: "购买加速卡",
                 style: "label",
                 onClick: async () => {
                     let res = await get("signhelp", "exchange&cat=2")
                     if (res.key == 200) {
                         $ui.toast("购买成功")
                     } else {
                         $uo.toast(res.msg)
                     }
                 }
             }

         )

     }

 }

 module.exports = {
     type: 'list',

     async fetch({
         args
     }) {
         await card()
         await getid()
         return items
     }
 }