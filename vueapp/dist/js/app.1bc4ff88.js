(function(t){function e(e){for(var o,a,r=e[0],u=e[1],c=e[2],l=0,d=[];l<r.length;l++)a=r[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var r=n[a];0!==s[r]&&(o=!1)}o&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},a={app:0},s={app:0},i=[];function r(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-3ff32620":"85719e61","chunk-dd65e646":"dd372aff","chunk-ee41c646":"d5b85161"}[t]+".js"}function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-3ff32620":1,"chunk-dd65e646":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-3ff32620":"2ff98b78","chunk-dd65e646":"6c8c2882","chunk-ee41c646":"31d6cfe0"}[t]+".css",s=u.p+o,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var c=i[r],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===o||l===s))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){c=d[r],l=c.getAttribute("data-href");if(l===o||l===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var o=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete a[t],p.parentNode.removeChild(p),n(i)},p.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[t]=0})));var o=s[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise((function(e,n){o=s[t]=[e,n]}));e.push(o[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=r(t);var d=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=s[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}s[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0169":function(t,e,n){"use strict";n.d(e,"c",(function(){return r["a"]})),n.d(e,"d",(function(){return u["a"]})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return p})),n.d(e,"e",(function(){return f["a"]}));var o=n("8c89"),a=n("bc3a"),s=n.n(a),i=function(t,e,n,a,i){var r=t.substr(0,4);t="http"==r?t:o["a"].apiUrl+t;var u=o["a"].request;for(var c in i=i||{},u)i[c]=u[c];s.a.get(t,{params:e},i).then(n).catch(a)},r=n("8a2a"),u=n("775b"),c=function(){return{language:"zh_CN",language_url:"/tinymce/zh_CN.js",skin_url:"/tinymce/skins/ui/oxide",height:550,menubar:!0,branding:!1,toolbar:"undo redo | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | table image media preview | removeformat | help",toolbar_items_size:"small",plugins:["advlist autolink lists link image charmap print preview anchor textcolor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"]}},l=function(t,e){t.$router.goBack(-e)},d=function(t){var e=document.getElementsByClassName("wm-ui_load")[0];e&&document.body.removeChild(e);var n=document.createElement("div");n.setAttribute("class","wm-ui_load"),n.innerHTML='<span><i class="ui ui_loading"></i></span>',document.body.appendChild(n),t=t||1e4;var o=setTimeout((function(){e=document.getElementsByClassName("wm-ui_load")[0],e&&document.body.removeChild(e)}),t);return{clear:function(){document.body.removeChild(n),clearTimeout(o)}}},p=function(t,e,n){return n=n||"",t.$router.push({path:e,query:n})},f=n("e563");r["a"],u["a"],f["a"]},"034f":function(t,e,n){"use strict";var o=n("85ec"),a=n.n(o);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("b0c0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=n("8c4f");o["default"].use(a["a"]),a["a"].prototype.goBack=function(t){this.isBack=!0,this.go(t)};var s=[{path:"/",name:"index",meta:{keepAlive:!0},component:function(t){return n.e("chunk-dd65e646").then(function(){var e=[n("d504")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/refresh",name:"Refresh",meta:{keepAlive:!1},component:function(t){return n.e("chunk-ee41c646").then(function(){var e=[n("ea97")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/demo",name:"Demo",meta:{keepAlive:!1},component:function(t){return n.e("chunk-3ff32620").then(function(){var e=[n("c876")];t.apply(null,e)}.bind(this)).catch(n.oe)}}],i=a["a"].prototype.push;a["a"].prototype.push=function(t){return i.call(this,t).catch((function(t){return t}))};var r=new a["a"]({base:"",routes:s}),u=r,c=n("2f62");o["default"].use(c["a"]);var l=new c["a"].Store({state:{mode:"light",statusBarHeight:0,isLogin:"",uInfo:{},geolocation:{},socket:null,uMsg:{scroll:null,group:[],num:""},uNotify:{},scan:null}}),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.update.show?n("div",{staticClass:"update_body",style:{backgroundColor:t.upDateColor.bg}},[n("div",{staticClass:"update_ct verticalCenter"},[n("div",{staticClass:"logo",style:{backgroundColor:t.upDateColor.logoBg}},[n("div")]),n("div",{staticClass:"loading",style:{backgroundImage:"linear-gradient(to right, "+t.upDateColor.loading+", "+t.upDateColor.loading+" "+t.update.loading+", "+t.upDateColor.loaded+" "+t.update.loading+", "+t.upDateColor.loaded+" 100%)"}}),n("div",{staticClass:"load_msg",domProps:{innerHTML:t._s(t.update.msg)}},[t._v("正在加载应用")]),n("div",{staticClass:"load_button"},[t.update.down?n("button",{staticClass:"Button",style:{color:t.upDateColor.butColor,backgroundColor:t.upDateColor.butBg},on:{click:function(e){return t.updateDown()}}},[t._v(t._s(t.upDateColor.butText))]):t._e()])]),n("div",{staticClass:"update_logo",style:{color:t.upDateColor.copy}},[n("h1",[t._v(t._s(t.$config.title))]),n("h2",[t._v(t._s(t.$config.copy))])])]):t._e(),n("transition",{attrs:{name:t.transitionName}},[n("keep-alive",{attrs:{max:t.keepAlive}},[t.$route.meta.keepAlive?n("router-view",{staticClass:"view",class:"dark"==t.mode?"view_dark":""}):t._e(),t.$route.meta.keepAlive?t._e():n("router-view",{key:"time"+(new Date).getTime(),staticClass:"view",class:"dark"==t.mode?"view_dark":""})],1)],1)],1)},p=[],f=(n("b680"),n("8c89")),m=n("0169"),g=n("e563"),h=(n("ac1f"),n("841c"),n("8f9b")),v=n.n(h);v.a.initAMapApiLoader({key:f["a"].amapKey,plugin:["AMap.Geolocation","PlaceSearch"],v:"1.4.15"});var b=n("775b");v.a.initAMapApiLoader({key:f["a"].amapKey,plugin:["AMap.Geolocation","PlaceSearch"],v:"1.4.15"});var y=function t(e,n){try{plus.geolocation.getCurrentPosition((function(t){var n={province:t.address.province,city:t.address.city,district:t.address.district,longitude:t.coords.longitude,latitude:t.coords.latitude};b["a"].setItem("geolocation",JSON.stringify(n)),e(n)}),n)}catch(o){try{AMap.service("AMap.Geolocation",(function(){var t=new AMap.Geolocation({enableHighAccuracy:!1,timeout:5e3});t.getCurrentPosition((function(t,n){if(n&&n.position){var o={province:n.addressComponent.province,city:n.addressComponent.city,district:n.addressComponent.district,longitude:n.position.lng,latitude:n.position.lat};b["a"].setItem("geolocation",JSON.stringify(o)),e(o)}}))}))}catch(o){setTimeout((function(){t(e,n)}),3e3)}}},k=y,w=n("8a2a"),C=function(t,e,n){Inc.config.msgBrowser&&window.Notification&&"denied"!==Notification.permission&&Notification.requestPermission((function(n){new Notification(t,{body:e})}));var o="title"==Inc.config.msgContent?t:e;if(Object(g["a"])(o),n=n||!1,n){var a=Inc.storage.getItem("token")||"";if(!a)return Object(g["a"])("请先登录!");Object(w["a"])("Usermain/baiduAudio",{token:a,text:o},(function(t){var e=t.data;if(0!=e.code)return Object(g["a"])(e.msg);var n=new Audio;n.src=e.url;try{if("iOS"==plus.os.name){var a=plus.ios.importClass("AVAudioSession"),s=a.sharedInstance();s.setCategoryerror("AVAudioSessionCategoryPlayback",null),s.setActiveerror("YES",null);var i=plus.ios.importClass("AVSpeechSynthesizer"),r=plus.ios.importClass("AVSpeechUtterance"),u=plus.ios.import("AVSpeechSynthesisVoice"),c=new i,l=u.voiceWithLanguage("zh-CN"),d=r.speechUtteranceWithString(o);d.setVoice(l),c.speakUtterance(d)}else n.play()}catch(p){n.play()}}))}},S=function(t){document.addEventListener("plusready",t,!1)},_={self:null,msgRouter:function(t){"group"==t.type?this.msgGroup(t):"msg"==t.type?this.msg(t):"notify"==t.type&&this.msgNotify(t)},msgGroup:function(t){this.self.$store.state.uMsg.group=t.data;var e=this.self.$store.state.uMsg.group,n=0;for(var o in e)n+=e[o].num;this.self.$store.state.uMsg.num=n},msg:function(t){var e=m["d"].getItem("voice");C(t.data.title,t.data.content,!!e);var n=t.data.uid==this.self.$store.state.uInfo.uid?t.data.fid:t.data.uid;this.self.$store.state.uMsg.group[""+n]?(this.self.$store.state.uMsg.group[""+n].msg.push(t.data),this.self.$store.state.uMsg.group[""+n].num++,this.self.$store.state.uMsg.num++):this.self.$store.state.socket.send(JSON.stringify({type:"group"}))},msgNotify:function(t){console.log(t)},start:function(t){var e=this;this.self=t,clearInterval(this.msgInterval),this.msgInterval=setInterval((function(){!e.self.$store.state.isLogin||e.self.$store.state.socket&&1==e.self.$store.state.socket.readyState||e.start(t)}),3e3);var n=m["d"].getItem("token");if(!n)return!1;f["a"].socket.start&&this.socket(n)},socket:function(t){var e=this;this.self.$store.state.socket=new WebSocket(f["a"].socket.server+"?token="+t),this.self.$store.state.socket.onopen=function(){console.log("Socket开启"),clearInterval(e.heartbeat),e.heartbeat=setInterval((function(){try{e.self.$store.state.socket.send(JSON.stringify({type:""}))}catch(t){e._closeMsg()}}),1e4),setTimeout((function(){e.self.$store.state.socket.send(JSON.stringify({type:"group"}))}),1e3)},this.self.$store.state.socket.onclose=function(){console.log("Socket关闭"),e._closeMsg()},this.self.$store.state.socket.onmessage=function(t){var n=JSON.parse(t.data);if(0!=n.code)return Object(m["e"])(n.msg);e.msgRouter(n)}},_closeMsg:function(){this.self.$store.state.socket&&(this.self.$store.state.socket.close(),this.self.$store.state.socket=null,this.self.$store.state.uMsg.group=[],this.self.$store.state.uMsg.num="")}},$={self:null,init:function(t){var e=this;this.self=t,S((function(){plus.screen.lockOrientation("portrait-primary"),plus.navigator.setStatusBarStyle("dark"),plus.navigator.setStatusBarBackground("#FFFFFF"),e.self.$store.state.statusBarHeight=plus.navigator.getStatusbarHeight(),setTimeout((function(){plus.navigator.closeSplashscreen()}),300),document.addEventListener("uistylechange",(function(){e.self.$store.state.mode=plus.navigator.getUiStyle()}),!1);var t=0,n=plus.webview.currentWebview();plus.key.addEventListener("backbutton",(function(){n.canBack((function(n){n.canBack?(e.self.$store.state.scan&&e.self.$store.state.scan.close(),Object(m["a"])(1,e.self)):(t>0&&plus.runtime.quit(),Object(m["e"])("再按一次退出应用!"),t++,setTimeout((function(){t=0}),2e3))}))}))})),this.tokenState(1),clearInterval(this.tokenInterval),this.tokenInterval=setInterval((function(){e.tokenState(0)}),1e4),this.geoLocation(),_.start(this.self)},tokenState:function(t){var e=this,n=m["d"].getItem("token");n?Object(m["c"])("user/token",{token:n,uinfo:t},(function(t){var n=t.data;0==n.code?(e.self.$store.state.isLogin=!0,n.uinfo&&(e.self.$store.state.uInfo=n.uinfo)):(e.self.$store.state.isLogin=!1,e.self.$store.state.uInfo={},m["d"].setItem("token",""))})):(this.self.$store.state.isLogin=!1,m["d"].setItem("token",""))},geoLocation:function(){var t=this;setTimeout((function(){k((function(e){t.self.$store.state.geolocation=e,m["d"].setItem("city",e.district)}),(function(t){Object(m["e"])("获取定位失败!")}))}),1e3)}},I=(n("1276"),function(t,e){var n=t.split("."),o=e.split(".");return parseInt(n[0])<parseInt(o[0])||(parseInt(n[1])<parseInt(o[1])||parseInt(n[2])<parseInt(o[2]))}),A={data:function(){return{keepAlive:10,transitionName:"",update:{show:!1,os:"",down:!1,loading:"0%",msg:"检测更新",file:"",total:0},upDateColor:f["a"].update,msgInterval:null}},watch:{$route:function(t,e){this.transitionName=this.$router.isBack?"slide-right":"slide-left",this.$router.isBack=!1}},computed:{mode:function(){return this.$store.state.mode}},mounted:function(){$.init(this),f["a"].update.start&&this.isUpdate()},methods:{isUpdate:function(){var t=this;S((function(){t.update.os=plus.os.name,Object(w["a"])("index/appUpdate",{os:t.update.os},(function(e){var n=e.data;if(0!=n.code)return!1;plus.runtime.getProperty(plus.runtime.appid,(function(e){if(!I(e.version,n.version))return!1;t.update.show=!0,t.update.down=!0,t.update.msg="新版本: "+n.version+"&nbsp;&nbsp;大小: "+(n.size/1024/1024).toFixed(2)+"MB",t.update.file=t.$config.baseUrl+n.file,t.update.total=n.size}))}))}))},updateDown:function(){var t=this;if(this.update.down=!1,this.update.msg="开始下载",this.update.loading="0%","iOS"==this.update.os)this.update.msg="请在桌面查看安装进度",window.open(f["a"].upIosUrl),setTimeout((function(){plus.runtime.quit()}),5e3);else{var e=plus.downloader.createDownload(this.update.file,{filename:"_doc/download/",timeout:30},(function(e,n){200==n?plus.runtime.install(e.filename,{force:!0},(function(){plus.runtime.restart()}),(function(t){Object(g["a"])("安装失败!")})):(t.update.down=!0,t.update.msg="下载失败")}));e.start(),e.addEventListener("statechanged",(function(e,n){var o=parseInt(e.downloadedSize/t.update.total*100);t.update.loading=o+"%",t.update.msg="正在下载："+t.update.loading,o>=100&&(t.update.msg="下载完成，安装并重启")}))}}}},O=A,M=(n("034f"),n("2877")),B=Object(M["a"])(O,d,p,!1,null,null,null),N=B.exports;document.title=f["a"].title,o["default"].config.productionTip=f["a"].dev,o["default"].prototype.$config=f["a"],new o["default"]({router:u,store:l,render:function(t){return t(N)}}).$mount("#app"),document.body.ontouchstart=function(){try{"iOS"!=plus.os.name&&document.createElement("audio")}catch(t){document.createElement("audio")}}},"775b":function(t,e,n){"use strict";e["a"]={setItem:function(t,e){return window.localStorage.setItem(t,e)},getItem:function(t){return window.localStorage.getItem(t)},clear:function(){return window.localStorage.clear()}}},"85ec":function(t,e,n){},"8a2a":function(t,e,n){"use strict";var o=n("8c89"),a=n("bc3a"),s=n.n(a);e["a"]=function(t,e,n,a,i){var r=t.substr(0,4);t="http"==r?t:o["a"].apiUrl+t;var u=new FormData;for(var c in e)u.append(c,e[c]);var l=o["a"].request;for(var d in i=i||{},l)i[d]=l[d];s.a.post(t,u,i).then(n).catch(a)}},"8c89":function(t,e,n){"use strict";var o="WebMIS",a="https://demo-api.webmis.vip/",s="wss://demo-api.webmis.vip/wss";e["a"]={dev:!1,title:o,version:"1.0.0",baseUrl:a,apiUrl:a+"api/",copy:"Copyright © WebMIS.VIP 2020",request:{headers:{"Content-Type":"multipart/form-data"}},statusBar:{height:48,color:"#333",bgColor:"#FFF"},update:{start:!0,bg:"#6FB737",logoBg:"#FFF",loading:"#FFF",loaded:"#666",copy:"#333",butColor:"#666",butBg:"#FFF",butText:"下载并安装"},upIosUrl:"itms-apps://itunes.apple.com/cn/app/tao-bao-sui-shi-sui-xiang/id387682726?mt=8",amapKey:"d956f0c3e15489a1b5bf291e5d133c8a",baiduOcr:"https://aip.baidubce.com/rest/2.0/ocr/v1/",socket:{start:!1,server:s},msgContent:"content",msgBrowser:!1,wx_type:0,wx_id:"gh_a6ddccd2bb08"}},e563:function(t,e,n){"use strict";e["a"]=function(t,e){var n=document.createElement("div");n.setAttribute("class","wm-ui_toast"),n.innerHTML="<span>"+t+"</span>",document.body.appendChild(n),setTimeout((function(){n.style.opacity="1",n.style.top="10%"}),100),e=e||3e3,setTimeout((function(){document.body.removeChild(n)}),e)}}});