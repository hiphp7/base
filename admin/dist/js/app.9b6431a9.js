(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],u=0,d=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],n=!0,i=1;i<s.length;i++){var r=s[i];0!==o[r]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=s[0]))}return t}var n={},i={app:0},o={app:0},a=[];function r(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d22fdb0":"65996a68","chunk-59bc5ce5":"96c17121","chunk-67a1af4d":"1889ed4a","chunk-bc761b5a":"742903c3"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var e=[],s={"chunk-59bc5ce5":1,"chunk-67a1af4d":1,"chunk-bc761b5a":1};i[t]?e.push(i[t]):0!==i[t]&&s[t]&&e.push(i[t]=new Promise((function(e,s){for(var n="css/"+({}[t]||t)+"."+{"chunk-2d22fdb0":"31d6cfe0","chunk-59bc5ce5":"b1cc4f11","chunk-67a1af4d":"92647ec0","chunk-bc761b5a":"328b04ec"}[t]+".css",o=c.p+n,a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var l=a[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){l=d[r],u=l.getAttribute("data-href");if(u===n||u===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||o,a=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete i[t],p.parentNode.removeChild(p),s(a)},p.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){i[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,s){n=o[t]=[e,s]}));e.push(n[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var s=o[t];if(0!==s){if(s){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,s[1](d)}o[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(s,n,function(e){return t[e]}.bind(null,n));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},1042:function(t,e,s){"use strict";s("50cd")},1254:function(t,e,s){},1471:function(t,e,s){"use strict";var n=s("7a23"),i=Object(n["H"])("data-v-69b0b4fa"),o=i((function(t,e,s,i,o,a){return Object(n["q"])(),Object(n["e"])("div",null,[Object(n["h"])("input",{value:s.value,onInput:e[1]||(e[1]=function(e){return t.$emit("update:value",e.target.value)}),type:s.type,maxlength:s.maxlength,placeholder:s.placeholder},null,40,["value","type","maxlength","placeholder"])])})),a={name:"Input",props:{value:{type:String,default:""},type:{type:String,default:"text"},maxlength:{type:String,default:""},placeholder:{type:String,default:""}}};s("6fc0");a.render=o,a.__scopeId="data-v-69b0b4fa";e["a"]=a},2769:function(t,e,s){"use strict";s("409c")},"409c":function(t,e,s){},"4e3c":function(t,e,s){"use strict";var n=s("7a23"),i=Object(n["H"])("data-v-8628ac7e"),o=i((function(t,e,s,i,o,a){return Object(n["q"])(),Object(n["e"])("button",{class:"button",disabled:s.disabled},[Object(n["x"])(t.$slots,"default")],8,["disabled"])})),a={name:"Botton",props:{disabled:{type:Boolean,default:!1}}};s("1042");a.render=o,a.__scopeId="data-v-8628ac7e";e["a"]=a},"50cd":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("b0c0"),s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("7a23"),i=(s("d3b7"),s("6c02")),o=[{path:"/",name:"index",component:function(){return s.e("chunk-59bc5ce5").then(s.bind(null,"d504"))}},{path:"/demo",name:"Demo",component:function(){return s.e("chunk-67a1af4d").then(s.bind(null,"c876"))}},{path:"/refresh",name:"Refresh",component:function(){return s.e("chunk-2d22fdb0").then(s.bind(null,"ea97"))}},{path:"/UserInfo",name:"UserInfo",component:function(){return s.e("chunk-bc761b5a").then(s.bind(null,"8f77"))}}],a=Object(i["a"])({history:Object(i["b"])(""),routes:o});a.goBack=function(t){this.isBack=!0,this.go(t)};var r=a,c=s("5502"),l=Object(c["a"])({state:{mode:"light",statusBarHeight:0,isLogin:"",uInfo:{},system:{},menuName:"",action:{url:"",type:"",width:"",menus:""},socket:null,scan:null},mutations:{},actions:{},modules:{}}),u=Object(n["H"])("data-v-34e0d2f7");Object(n["t"])("data-v-34e0d2f7");var d={id:"app"},p={class:"update_ct verticalCenter"},h=Object(n["h"])("div",null,null,-1),m={class:"load_button"},f={class:"login_body"},b={class:"login_logo flex_center"},g={class:"nowrap"},v={class:"login_ct"},y={class:"login_type"},O={class:"title"},j=Object(n["h"])("div",{class:"arrow flex_center"},[Object(n["h"])("div",{class:"arrow_up"})],-1),w={class:"list"},k=Object(n["h"])("h3",null,"会员登录",-1),I={class:"login_input"},_={class:"login_input"},x={class:"login_input"},C={class:"login_copy nowrap"},S={class:"app_left"},B={class:"app_user"},A={class:"img"},P={key:1,class:"bgImg tu"},U={class:"info nowrap"},H={class:"app_login nowrap"},N={class:"config"},L=Object(n["g"])("> "),$={class:"app_right"},T={class:"app_main"},F={class:"app_copy"};Object(n["r"])();var M=u((function(t,e,i,o,a,r){var c=Object(n["y"])("wm-input"),l=Object(n["y"])("wm-button"),M=Object(n["y"])("wm-menu"),q=Object(n["y"])("scroll-view"),E=Object(n["y"])("wm-action"),D=Object(n["y"])("router-view");return Object(n["q"])(),Object(n["e"])("div",d,[t.update.show?(Object(n["q"])(),Object(n["e"])("div",{key:0,class:"update_body",style:{backgroundColor:t.upDateColor.bg}},[Object(n["h"])("div",p,[Object(n["h"])("div",{class:"logo",style:{backgroundColor:t.upDateColor.logoBg}},[h],4),Object(n["h"])("div",{class:"loading",style:{backgroundImage:"linear-gradient(to right, "+t.upDateColor.loading+", "+t.upDateColor.loading+" "+t.update.loading+", "+t.upDateColor.loaded+" "+t.update.loading+", "+t.upDateColor.loaded+" 100%)"}},null,4),Object(n["h"])("div",{class:"load_msg",style:{color:t.upDateColor.msgColor}},Object(n["B"])(t.update.msg),5),Object(n["h"])("div",m,[t.update.down?(Object(n["q"])(),Object(n["e"])("button",{key:0,class:"Button",onClick:e[1]||(e[1]=function(e){return t.updateDown()}),style:{color:t.upDateColor.butColor,backgroundColor:t.upDateColor.butBg}},Object(n["B"])(t.upDateColor.butText),5)):Object(n["f"])("",!0)])]),Object(n["h"])("div",{class:"update_logo",style:{color:t.upDateColor.copy}},[Object(n["h"])("h1",null,Object(n["B"])(t.env.title),1),Object(n["h"])("h2",null,Object(n["B"])(t.env.copy),1)],4)],4)):Object(n["f"])("",!0),Object(n["G"])(Object(n["h"])("div",{class:"login_bg bgImg bgcover",style:{backgroundImage:"url("+(t.store.system.login_bg?t.store.system.login_bg:s("86d5"))+")"}},[Object(n["h"])("div",f,[Object(n["h"])("div",b,[Object(n["h"])("div",{class:"bgImg",style:{backgroundImage:"url("+(t.store.system.logo?t.store.system.logo:s("9b19"))+")"}},null,4),Object(n["h"])("h2",g,Object(n["B"])(t.store.system.title),1)]),Object(n["h"])("div",v,[Object(n["h"])("div",y,[Object(n["h"])("div",O,"< "+Object(n["B"])(t.language[t.languageNum].val)+" >",1),j,Object(n["h"])("ul",w,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(t.language,(function(e,s){return Object(n["q"])(),Object(n["e"])("li",{key:s,onClick:function(e){return t.platform(s)}},Object(n["B"])(e.val),9,["onClick"])})),128))])]),k,Object(n["h"])("div",I,[Object(n["h"])(c,{value:t.login.uname,"onUpdate:value":e[2]||(e[2]=function(e){return t.login.uname=e}),placeholder:"用户名/手机/邮箱"},null,8,["value"])]),Object(n["h"])("div",_,[Object(n["h"])(c,{value:t.login.passwd,"onUpdate:value":e[3]||(e[3]=function(e){return t.login.passwd=e}),type:"password",placeholder:"密码"},null,8,["value"])]),Object(n["h"])("div",x,[Object(n["h"])(l,{onClick:e[4]||(e[4]=function(e){return t.loginSub()}),disabled:t.login.dis},{default:u((function(){return[Object(n["g"])(Object(n["B"])(t.login.subText),1)]})),_:1},8,["disabled"])])]),Object(n["h"])("div",C,"© "+Object(n["B"])(t.store.system.copy)+"  版本："+Object(n["B"])(t.env.version),1)])],4),[[n["D"],!1===t.store.isLogin]]),Object(n["G"])(Object(n["h"])("div",{class:"app_body flex",style:{paddingTop:t.store.statusBarHeight}},[Object(n["h"])("div",S,[Object(n["h"])(q,{upperLoad:!1,lowerLoad:!1,style:{height:"100%"}},{default:u((function(){return[Object(n["h"])("div",B,[Object(n["h"])("div",A,[t.store.uInfo.img?(Object(n["q"])(),Object(n["e"])("div",{key:0,style:{backgroundImage:"url("+t.store.uInfo.img+")"}},null,4)):(Object(n["q"])(),Object(n["e"])("div",P))]),Object(n["h"])("div",U,Object(n["B"])(t.store.uInfo.nickname||"昵称")+"("+Object(n["B"])(t.store.uInfo.name||"姓名")+") ",1)]),Object(n["h"])(M,{ref:"Menus",data:t.menus,defaultActive:t.menusActive,onSelect:t.menuClick},null,8,["data","defaultActive","onSelect"]),Object(n["h"])("div",H,[Object(n["h"])("span",N,Object(n["B"])(t.store.uInfo.uname),1),L,Object(n["h"])("span",{class:"logout",onClick:e[5]||(e[5]=function(e){return t.logout()})},"退出")])]})),_:1})]),Object(n["h"])("div",$,[Object(n["h"])(q,{class:"app_top",upperLoad:!1,lowerLoad:!1,"scroll-x":!0},{default:u((function(){return[Object(n["h"])(E,{url:t.store.action.url,menus:t.store.action.menus},null,8,["url","menus"])]})),_:1}),Object(n["h"])("div",T,[Object(n["h"])(D,null,{default:u((function(t){var e=t.Component;return[(Object(n["q"])(),Object(n["e"])(n["b"],null,[(Object(n["q"])(),Object(n["e"])(Object(n["z"])(e)))],1024))]})),_:1})]),Object(n["h"])("div",F," 所属："+Object(n["B"])(t.store.system.title)+"  © "+Object(n["B"])(t.store.system.copy)+"  版本："+Object(n["B"])(t.env.version),1)])],4),[[n["D"],!0===t.store.isLogin]])])})),q=(s("b680"),s("ac1f"),s("5319"),s("8c89")),E=function(t,e){var s=document.createElement("div");s.setAttribute("class","wm-ui_toast"),s.innerHTML="<span>"+t+"</span>",document.body.appendChild(s),setTimeout((function(){s.style.opacity="1",s.style.top="10%"}),100),e=e||3e3,setTimeout((function(){document.body.removeChild(s)}),e)},D=s("775b"),z=s("8a2a"),J=function(t,e){t.$router.goBack(-e)},W=function(t){document.addEventListener("plusready",t,!1)},V=function(t){try{var e=plus.webview.currentWebview();plus.key.addEventListener("backbutton",(function(){e.canBack(t)}))}catch(s){return E("Android返回键")}},G=function t(e,s){try{plus.geolocation.getCurrentPosition((function(t){var s={longitude:t.coords.longitude,latitude:t.coords.latitude,province:t.address.province,city:t.address.city,district:t.address.district,street:t.address.street,streetnum:t.address.streetNum,poiname:t.address.poiName,address:t.address.poiName+t.address.streetNum};D["a"].setItem("geolocation",JSON.stringify(s)),e(s)}),s)}catch(n){try{AMap.service("AMap.Geolocation",(function(){var t=new AMap.Geolocation({enableHighAccuracy:!1,timeout:5e3});t.getCurrentPosition((function(t,s){if(s&&s.position){var n={longitude:s.position.lng,latitude:s.position.lat,province:s.addressComponent.province,city:s.addressComponent.city,district:s.addressComponent.district,street:s.addressComponent.street,streetnum:s.addressComponent.streetNumber,poiname:s.addressComponent.township,address:s.addressComponent.township+s.addressComponent.streetNumber};D["a"].setItem("geolocation",JSON.stringify(n)),e(n)}}))}))}catch(n){setTimeout((function(){t(e,s)}),3e3)}}},X=G,Y=function(t,e,s){Inc.config.msg.browser&&window.Notification&&"denied"!==Notification.permission&&Notification.requestPermission((function(s){new Notification(t,{body:e})}));var n="title"==Inc.config.msg.content?t:e;if(E(n),s=s||!1,s){var i=Inc.storage.getItem("token")||"";if(!i)return E("请先登录!");Object(z["a"])("Usermain/baiduAudio",{token:i,text:n},(function(t){var e=t.data;if(0!=e.code)return E(e.msg);var s=new Audio;s.src=e.url;try{if("iOS"==plus.os.name){var i=plus.ios.importClass("AVAudioSession"),o=i.sharedInstance();o.setCategoryerror("AVAudioSessionCategoryPlayback",null),o.setActiveerror("YES",null);var a=plus.ios.importClass("AVSpeechSynthesizer"),r=plus.ios.importClass("AVSpeechUtterance"),c=plus.ios.import("AVSpeechSynthesisVoice"),l=new a,u=c.voiceWithLanguage("zh-CN"),d=r.speechUtteranceWithString(n);d.setVoice(u),l.speakUtterance(d)}else s.play()}catch(p){s.play()}}))}},Z={self:null,store:null,msgRouter:function(t){"group"==t.type?this.msgGroup(t):"msg"==t.type?this.msg(t):"notify"==t.type&&this.msgNotify(t)},msg:function(t){var e=D["a"].getItem("voice");Y(t.data.title,t.data.content,!!e)},start:function(t){var e=this;this.self=t,this.store=this.self.$store.state,clearInterval(this.socketInterval),this.socketInterval=setInterval((function(){!e.store.isLogin||e.store.socket&&1==e.store.socket.readyState||e.start(t)}),q["a"].socket.time);var s=D["a"].getItem("token");if(!s)return!1;q["a"].socket.start&&this.socket(s)},socket:function(t){var e=this;this.store.socket=new WebSocket(q["a"].socket.server+"?token="+t),this.store.socket.onopen=function(){console.log("Socket开启"),clearInterval(e.heartbeat),e.heartbeat=setInterval((function(){try{e.store.socket.send(JSON.stringify({type:""}))}catch(t){e._closeMsg()}}),1e4)},this.store.socket.onclose=function(){console.log("Socket关闭"),e._closeMsg()},this.store.socket.onmessage=function(t){var s=JSON.parse(t.data);if(0!=s.code)return E(s.msg);e.msgRouter(s)}},_closeMsg:function(){this.store.socket&&(this.store.socket.close(),this.store.socket=null)}},R={self:null,init:function(t){var e=this;this.self=t,W((function(){plus.screen.lockOrientation("portrait-primary"),plus.navigator.setStatusBarStyle("dark"),plus.navigator.setStatusBarBackground("#FFFFFF"),e.self.$store.state.statusBarHeight=plus.navigator.getStatusbarHeight(),setTimeout((function(){plus.navigator.closeSplashscreen()}),300),document.addEventListener("uistylechange",(function(){e.self.$store.state.mode=plus.navigator.getUiStyle()}),!1);var t=0;V((function(s){s.canBack?(e.self.$store.state.scan&&e.self.$store.state.scan.close(),J(e.self,1)):(t>0&&plus.runtime.quit(),E("再按一次退出应用!"),t++,setTimeout((function(){t=0}),2e3))}))})),q["a"].login.start&&(this.tokenState(1),clearInterval(this.tokenInterval),this.tokenInterval=setInterval((function(){e.tokenState(0)}),q["a"].login.time)),q["a"].amap.start&&this.geoLocation(),q["a"].socket.start&&Z.start(this.self),this.getConfig()},tokenState:function(t){var e=this,s=D["a"].getItem("token");s?Object(z["a"])(q["a"].login.api,{token:s,uinfo:t},(function(t){var s=t.data;0==s.code?(e.self.$store.state.isLogin=!0,s[q["a"].login.uinfo]&&(e.self.$store.state.uInfo=s[q["a"].login.uinfo])):(e.self.$store.state.isLogin=!1,e.self.$store.state.uInfo={},D["a"].setItem("token",""))})):(this.self.$store.state.isLogin=!1,D["a"].setItem("token",""))},geoLocation:function(){var t=this;setTimeout((function(){X((function(e){t.self.$store.state.geolocation=e,D["a"].setItem("city",e.district)}),(function(t){E("获取定位失败!")}))}),1e3)},getConfig:function(){var t=this;Object(z["a"])("index/getConfig",{},(function(e){var s=e.data;0==s.code&&(t.self.$store.state.system=s.list)}),(function(t){E("网络加载失败!")}))}},Q=function(t){var e=document.getElementsByClassName("wm-ui_load")[0];e&&document.body.removeChild(e);var s=document.createElement("div");s.setAttribute("class","wm-ui_load"),s.innerHTML='<span><i class="ui ui_loading"></i></span>',document.body.appendChild(s),t=t||1e4;var n=setTimeout((function(){e=document.getElementsByClassName("wm-ui_load")[0],e&&document.body.removeChild(e)}),t);return{clear:function(){document.body.removeChild(s),clearTimeout(n)}}},K=(s("1276"),function(t,e){var s=t.split("."),n=e.split(".");return parseInt(s[0])<parseInt(n[0])||(parseInt(s[1])<parseInt(n[1])||parseInt(s[2])<parseInt(n[2]))}),tt=function(t,e,s){s=s||!1;var n=!1,i="",o={uname:/^[a-zA-Z][a-zA-Z0-9\_\@\-\*\&]{4,15}$/,tel:/^[1]\d{10}$/,email:/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/,vcode:/^\d{4}$/,passwd:/^[a-zA-Z0-9|_|@|-|*|&]{6,16}$/};switch(t){case"uname":n=o.uname.test(e),i=n?"":"用户名英文开头5~16位！";break;case"tel":n=o.tel.test(e),i=n?"":"手机号码错误！";break;case"email":n=o.email.test(e),i=n?"":"邮箱帐号错误！";break;case"vcode":n=o.vcode.test(e),i=n?"":"验证码4位！";break;case"passwd":n=o.passwd.test(e),i=n?"":"密码为6~16位字符！";break}return i&&s&&E(i),!!n||i},et=Object(n["H"])("data-v-5cfab680");Object(n["t"])("data-v-5cfab680");var st={class:"wm-scroll_html"},nt={class:"wm-scroll_load"};Object(n["r"])();var it=et((function(t,e,s,i,o,a){return Object(n["q"])(),Object(n["e"])("div",st,[Object(n["G"])(Object(n["h"])("div",{ref:"upper",class:"wm-scroll_load_body",style:{backgroundColor:s.upperBg}},[Object(n["h"])("div",nt,[Object(n["h"])("i",{class:s.upperIcon,style:{color:s.upperColor}},null,6)])],4),[[n["D"],s.upperLoad]]),Object(n["h"])("div",{ref:"html",class:["wm-scroll_view",s.scrollX?o.isMobile?"wm-scroll_view_x":"wm-scroll_view_y":o.isMobile?"":"wm-scroll_view_y"],onTouchstart:e[1]||(e[1]=function(){return a.start.apply(a,arguments)}),onTouchmove:e[2]||(e[2]=function(){return a.move.apply(a,arguments)}),onTouchend:e[3]||(e[3]=function(){return a.end.apply(a,arguments)})},[Object(n["x"])(t.$slots,"default")],34)])})),ot=(s("a9e3"),s("466d"),function(){var t=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return!!t&&t[0]}),at={name:"ScrollView",props:{isScroll:{type:Boolean,default:!0},scrollX:{type:Boolean,default:!1},scrollY:{type:Boolean,default:!0},upper:{type:Number,default:64},lowerBoundary:{type:Number,default:50},upperLoad:{type:Boolean,default:!0},upperIcon:{type:String,default:"ui ui_loading"},upperBg:{type:String,default:""},upperColor:{type:String,default:""},limit:{type:Number,default:120}},data:function(){return{isMobile:!0,sp:"y",html:{w:0,h:0},body:{w:0,h:0,x:0,y:0},refUpper:{},refHtml:{},cubicBezier:"0.25,0.46,0.45,0.94"}},mounted:function(){this.isMobile=ot(),this.sp=this.scrollX?"x":"y",this.refUpper=this.$refs.upper,this.refHtml=this.$refs.html,"x"==this.sp?(this.refUpper.style.left=0,this.refUpper.style.width="".concat(this.upper,"px"),this.refUpper.style.height="100%",this.refUpper.style.transform="translate(-".concat(this.upper,"px,0)"),this.refHtml.style.overflowX="auto"):(this.refUpper.style.top=0,this.refUpper.style.width="100%",this.refUpper.style.height="".concat(this.upper,"px"),this.refUpper.style.transform="translate(0,-".concat(this.upper,"px)"),this.refHtml.style.overflowY="auto"),this.refHtml.addEventListener("scroll",this.scroll)},methods:{res:function(){return{x:this.body.x,y:this.body.y,w:this.body.w,h:this.body.h,boxW:this.html.w,boxH:this.html.h}},refresh:function(){this.html.w=this.refHtml.offsetWidth,this.html.h=this.refHtml.offsetHeight,this.body.w=this.refHtml.scrollWidth,this.body.h=this.refHtml.scrollHeight,this.body.min=0,this.body.max=this.body["x"==this.sp?"w":"h"]-this.html["x"==this.sp?"w":"h"]-this.lowerBoundary},start:function(t){var e=t.touches?t.touches[0]:t;this.movePage={x:0,y:0},this.tmpPage={x:0,y:0},this.startPage={x:e.clientX,y:e.clientY},this.isUpper=!1,this.isLower=!0,this.refresh(),this.scrollEnabled("auto")},move:function(t){if(!this.isScroll)return!1;var e=t.touches?t.touches[0]:t;if(this.movePage={x:parseInt(e.clientX-this.startPage.x),y:parseInt(e.clientY-this.startPage.y)},this.tmpPage[this.sp]=this.movePage[this.sp],this.body[this.sp]<=0&&this.tmpPage[this.sp]>0){this.isUpper=!0,this.isMobile&&this.scrollEnabled("hidden");var s=this.upper-this.tmpPage[this.sp];s<0&&(this.tmpPage[this.sp]=this.upper),this.tmpPage[this.sp]!=this.tmpUpper&&(this.tmpUpper=this.tmpPage[this.sp],this._translateUpper(s>0?s:0,200),this.translate(this.tmpPage[this.sp],200),"x"==this.sp?(this.body.x=-this.tmpPage[this.sp],this.body.y=0,this.$emit("scroll",this.res())):(this.body.x=0,this.body.y=-this.tmpPage[this.sp],this.$emit("scroll",this.res())))}else this.body[this.sp]>0&&this.tmpPage[this.sp]<0&&this.body[this.sp]>=this.body.max&&this.isLower&&(this.isLower=!1,this.$emit("x"==this.sp?"right":"up",this.res()))},end:function(t){this.isUpper&&(this.isUpper=!1,this._translateUpper(this.upper,400),this.translate(0,400),this.scrollEnabled("auto"),"x"==this.sp?(this.body.x=0,this.body.y=0,this.$emit("scroll",this.res()),this.tmpPage[this.sp]>=this.upper&&this.$emit("left",this.res())):(this.body.x=0,this.body.y=0,this.$emit("scroll",this.res()),this.tmpPage[this.sp]>=this.upper&&this.$emit("down",this.res())));var e=Math.abs(this.movePage.x/this.movePage.y)||0;e>1&&this.movePage.x>this.limit?this.$emit("swipe","left"):e>1&&this.movePage.x<-this.limit?this.$emit("swipe","right"):e<1&&this.movePage.y>this.limit?this.$emit("swipe","down"):e<1&&this.movePage.y<-this.limit&&this.$emit("swipe","up")},scroll:function(){this.body.x=this.refHtml.scrollLeft,this.body.y=this.refHtml.scrollTop,this.$emit("scroll",this.res()),this.isLower&&this.tmpPage[this.sp]<0&&this.body[this.sp]>=this.body.max&&(this.isLower=!1,this.$emit("x"==this.sp?"right":"up",this.res()))},translate:function(t,e){this.refHtml.style.transitionDuration="".concat(e,"ms"),this.refHtml.style.transitionTimingFunction="cubic-bezier(".concat(this.cubicBezier,")"),"x"==this.sp?this.refHtml.style.paddingLeft="".concat(t,"px"):this.refHtml.style.paddingTop="".concat(t,"px")},_translateUpper:function(t,e){this.refUpper.style.opacity=(100-t/this.upper*100)/100,this.refUpper.style.transitionDuration="".concat(e,"ms"),this.refUpper.style.transitionTimingFunction="cubic-bezier(".concat(this.cubicBezier,")"),"x"==this.sp?this.refUpper.style.transform="translate(-".concat(t,"px,0)"):this.refUpper.style.transform="translate(0,-".concat(t,"px)")},scrollEnabled:function(t){t=t||"auto","x"==this.sp?this.refHtml.style.overflowX=t:this.refHtml.style.overflowY=t}}};s("d14f");at.render=it,at.__scopeId="data-v-5cfab680";var rt=at,ct=Object(n["H"])("data-v-434d1981");Object(n["t"])("data-v-434d1981");var lt={class:"wm-menu"},ut={class:"flex"},dt=Object(n["h"])("i",{class:"ui ui_down"},null,-1);Object(n["r"])();var pt=ct((function(t,e,s,i,o,a){return Object(n["q"])(),Object(n["e"])("div",lt,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(s.data,(function(t,e){return Object(n["q"])(),Object(n["e"])("div",{key:e,style:{color:s.fontColor}},[Object(n["h"])("div",{class:"wm-menu_title flex",onClick:function(t){return a.titleClick(e)},style:{height:s.titleHeight+"px",lineHeight:s.titleHeight+"px"}},[Object(n["h"])("div",ut,[t.ico?(Object(n["q"])(),Object(n["e"])("i",{key:0,class:t.ico},null,2)):Object(n["f"])("",!0),Object(n["h"])("h1",null,Object(n["B"])(t.title),1)]),Object(n["h"])("div",{id:"ico"+e,class:"arrow"},[dt],8,["id"])],12,["onClick"]),t.children?(Object(n["q"])(),Object(n["e"])("ul",{key:0,id:"t"+e,class:"wm-menu_list"},[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(t.children,(function(t,i){return Object(n["q"])(),Object(n["e"])("li",{key:i,onClick:function(t){return a.menuClick([e,i])},class:t.checked?"active":"",style:{height:s.itemHeight+"px",lineHeight:s.itemHeight+"px"}},Object(n["B"])(t.title),15,["onClick"])})),128))],8,["id"])):Object(n["f"])("",!0)],4)})),128))])})),ht={name:"Menu",props:{data:{type:Array,default:[]},defaultActive:{type:Array,default:[0,0]},fontColor:{type:String,default:"#FFF"},titleHeight:{type:Number,default:40},itemHeight:{type:Number,default:36}},methods:{titleClick:function(t){if(!this.data[t])return!1;var e=this.data[t].children.length||0,s=document.getElementById("ico"+t),n=document.getElementById("t"+t),i=36*e+"px";n.style.height==i?(s.style.transform="rotate(0deg)",n.style.height="0px"):(s.style.transform="rotate(180deg)",n.style.height=i)},menuClick:function(t){for(var e in this.data)for(var s in this.data[e].children)this.data[e].children[s].checked=!1;this.data[t[0]]&&this.data[t[0]].children&&(this.data[t[0]].children[t[1]].checked=!0,this.$emit("select",t))}}};s("2769");ht.render=pt,ht.__scopeId="data-v-434d1981";var mt=ht,ft=s("1471"),bt=s("4e3c"),gt=Object(n["H"])("data-v-01d70e62");Object(n["t"])("data-v-01d70e62");var vt={class:"wm-action"},yt={class:"wm-action_title"};Object(n["r"])();var Ot=gt((function(t,e,s,i,o,a){return Object(n["q"])(),Object(n["e"])("div",vt,[o.action.length>0?(Object(n["q"])(!0),Object(n["e"])(n["a"],{key:0},Object(n["w"])(o.action,(function(t,e){return Object(n["q"])(),Object(n["e"])("div",{class:"item",key:e,onClick:function(e){return a.openAction(t.action)}},Object(n["B"])(t.name),9,["onClick"])})),128)):Object(n["f"])("",!0),Object(n["h"])("div",yt,Object(n["B"])(o.store.menuName||o.store.system.title),1)])})),jt={name:"Action",props:{url:{type:String,default:""},menus:""},data:function(){return{store:this.$store.state,action:[]}},watch:{url:function(t){this.getAction(this.url)}},mounted:function(){},methods:{getAction:function(t){var e=this;if(!t)return this.store.menuName="",this.action=[],!1;Object(z["a"])("Sysmenusaction/getAction",{token:D["a"].getItem("token"),url:t},(function(t){var s=t.data;if(0==s.code){if(e.action=s.action,e.menus)for(var n in e.menus)e.action.push(e.menus[n])}else E(s.msg)}))},openAction:function(t){var e=this;this.store.action.type=t,setTimeout((function(){e.store.action.type=""}),1e3)}}};s("d2e6");jt.render=Ot,jt.__scopeId="data-v-01d70e62";var wt=jt,kt={name:"APP",components:{ScrollView:rt,wmMenu:mt,wmInput:ft["a"],wmButton:bt["a"],wmAction:wt},data:function(){return{env:q["a"],storage:D["a"],store:this.$store.state,update:{show:!1,os:"",down:!1,loading:"1%",msg:"检测更新",file:"",total:0},upDateColor:q["a"].update,login:{uname:"",passwd:"",subText:"登 录",dis:!1},menus:[],menusActive:[0,0],config:{show:!1,title:"系统配置",is_msg_audio:!0},languageNum:0,language:[{name:"php",val:"PHP7( Phalcon4 )"},{name:"python",val:"Python3( Flask )"},{name:"java",val:"Java( SpringBoot )"}]}},mounted:function(){R.init(this),q["a"].update.start&&this.isUpdate(),this.login.uname=D["a"].getItem("uname"),this.reLanguage(),this._enter(),D["a"].getItem("token")&&this.getMenus()},methods:{platform:function(t){var e=this.language[t];e.index=t,D["a"].setItem("platform",JSON.stringify(e)),window.location.href=""},reLanguage:function(){var t=D["a"].getItem("platform"),e=t?JSON.parse(t):this.language[0];this.languageNum=e.index||0},isUpdate:function(){var t=this;W((function(){t.update.os=plus.os.name,Object(z["a"])("index/appUpdate",{os:t.update.os},(function(e){var s=e.data;if(0!=s.code)return!1;plus.runtime.getProperty(plus.runtime.appid,(function(e){if(!K(e.version,s.version))return!1;t.update.show=!0,t.update.down=!0,t.update.msg="新版本: "+s.version+"&nbsp;&nbsp;大小: "+(s.size/1024/1024).toFixed(2)+"MB",t.update.file=q["a"].baseUrl+s.file,t.update.total=s.size}))}))}))},updateDown:function(){var t=this;if(this.update.down=!1,this.update.msg="开始下载",this.update.loading="0%","iOS"==this.update.os)this.update.msg="请在桌面查看安装进度",window.open(q["a"].upIosUrl),setTimeout((function(){plus.runtime.quit()}),5e3);else{var e=plus.downloader.createDownload(this.update.file,{filename:"_doc/download/",timeout:30},(function(e,s){200==s?plus.runtime.install(e.filename,{force:!0},(function(){plus.runtime.restart()}),(function(t){E("安装失败!")})):(t.update.down=!0,t.update.msg="下载失败")}));e.start(),e.addEventListener("statechanged",(function(e,s){var n=parseInt(e.downloadedSize/t.update.total*100);t.update.loading=n+"%",t.update.msg="正在下载："+t.update.loading,n>=100&&(t.update.msg="下载完成，安装并重启")}))}},loginSub:function(){var t=this,e=this.login.uname,s=this.login.passwd,n=tt("passwd",s);if(!0!==tt("uname",e)&&!0!==tt("email",e)&&!0!==tt("tel",e))return E("请输入帐号/手机/邮箱");if(!0!==n)return E(n);this.login.subText="正在登录",this.login.dis=!0;var i=Q();Object(z["a"])("user/login",{uname:e,passwd:s},(function(e){i.clear(),t.login.subText="登 录",t.login.dis=!1;var s=e.data;0==s.code?(t.store.isLogin=!0,t.store.uInfo=s.uinfo,D["a"].setItem("token",s.token),D["a"].setItem("uname",s.uinfo.uname),D["a"].setItem("uinfo",JSON.stringify(s.uinfo)),t.getMenus(),t.$router.replace({path:"/refresh"})):(t.store.isLogin=!1,t.store.uInfo={},D["a"].setItem("token",""),E(s.msg))}),(function(e){i.clear(),E("网络加载失败!"),t.login.subText="登 录",t.login.dis=!1}))},logout:function(){this.store.isLogin=!1,this.store.uInfo={},D["a"].setItem("token",""),this.login.passwd=""},_enter:function(){var t=arguments,e=this;document.onkeydown=function(s){var n=s||window.event||t.callee.caller.arguments[0];n&&13==n.keyCode&&!e.store.isLogin&&e.loginSub()}},getMenus:function(){var t=this;Object(z["a"])("Sysmenus/getMenus",{token:D["a"].getItem("token")},(function(e){var s=e.data;if(0==s.code){t.menus=s.menus,t.menusActive=D["a"].getItem("menusActive")?JSON.parse(D["a"].getItem("menusActive")):[0,1];var n=t.$refs.Menus;setTimeout((function(){n.titleClick(t.menusActive[0]),n.menuClick(t.menusActive)}),300)}}))},menuClick:function(t){D["a"].setItem("menusActive",JSON.stringify(t));var e=this.menus[t[0]].children[t[1]];this.store.menuName="控制台"==e.title?"":e.title,this.$router.push(e.url)}}};s("64be"),s("dcdd");kt.render=M,kt.__scopeId="data-v-34e0d2f7";var It=kt;document.title=q["a"].title,Object(n["d"])(It).use(l).use(r).mount("#app"),document.body.ontouchstart=function(){try{"iOS"!=plus.os.name&&document.createElement("audio")}catch(t){document.createElement("audio")}}},"64be":function(t,e,s){"use strict";s("c894")},"6fc0":function(t,e,s){"use strict";s("d364")},"775b":function(t,e,s){"use strict";e["a"]={setItem:function(t,e){return window.localStorage.setItem(t,e)},getItem:function(t){return window.localStorage.getItem(t)},clear:function(){return window.localStorage.clear()}}},8580:function(t,e,s){},"86d5":function(t,e,s){t.exports=s.p+"img/bg.197fc15f.jpg"},"8a2a":function(t,e,s){"use strict";var n=s("8c89"),i=s("bc3a"),o=s.n(i);e["a"]=function(t,e,s,i,a){var r=t.substr(0,4);t="http"==r?t:n["a"].apiUrl+t;var c=new FormData;for(var l in e)c.append(l,e[l]);var u=n["a"].request;for(var d in a=a||{},u)a[d]=u[d];o.a.post(t,c,a).then(s).catch(i)}},"8c89":function(t,e,s){"use strict";s("b0c0");var n,i,o=s("775b"),a="WebMIS开发平台",r=JSON.parse(o["a"].getItem("platform"));r&&"python"==r.name?(n="https://demo-python.webmis.vip/",i="wss://demo-python.webmis.vip/wss"):r&&"java"==r.name?(n="https://demo-java.webmis.vip/",i="wss://demo-java.webmis.vip/wss"):(n="https://demo-api.webmis.vip/",i="wss://demo-api.webmis.vip/wss"),e["a"]={dev:!1,title:a,version:"1.0.0",baseUrl:n,apiUrl:n+"admin/",copy:"Copyright © WebMIS.vip 2020",request:{headers:{"Content-Type":"multipart/form-data"}},statusBar:{height:"0px",color:"#333",bgColor:"#FFF"},update:{start:!0,bg:"#24292E",logoBg:"#FFFFFF",loading:"#6FB737",loaded:"#000000",copy:"#666666",msgColor:"#999999",butColor:"#FFFFFF",butBg:"#6FB737",butText:"下载并安装"},upIosUrl:"",login:{start:!0,api:"user/token",uinfo:"uinfo",time:6e4},amap:{start:!1,jsapi_key:"d956f0c3e15489a1b5bf291e5d133c8a"},socket:{start:!1,server:i,time:5e3},msg:{content:"title",browser:!1}}},"9b19":function(t,e,s){t.exports=s.p+"img/logo.5f2c810c.svg"},b88e:function(t,e,s){},c894:function(t,e,s){},d14f:function(t,e,s){"use strict";s("1254")},d2e6:function(t,e,s){"use strict";s("8580")},d364:function(t,e,s){},dcdd:function(t,e,s){"use strict";s("b88e")}});