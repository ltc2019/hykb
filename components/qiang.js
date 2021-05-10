

const load = require("cheerio").load
module.exports = {
  type: 'topTab',
  async fetch({ args, page }) {
    let items = []
    let res = await $http.get("https://res.onebiji.com/kuaibao/n/hykb/bmhstore2/index_1.js?t=1599221198") 
    let a = res.data.match(/var js_html = \"(.*)\"/)[1].replace(/\\\"/g,"\"").replace(/\\\//g,"\/")  
    let d = unescape(a.replace(/\\u/g, '%u'))
 
    let c = d.match(/<div class=\"b-tit\">实物周边(.+?)<\/ul>/s)[0]   
    const $ = load(d)
    let list=$(".tabList")  
  //  let list = $(".game>li")      
      list.each((index, li) => {
  if($(".b-tit",li).text()!="签到礼包") {     
 items.push({
   title:$(".b-tit",li).text(),
   route:$route("qi",{list: $(li).html()})
 })}
 
 
   
      
      
      }
      
      
      )
   //   console.log(items)
      return {
        items:items
      }    
  }
}
