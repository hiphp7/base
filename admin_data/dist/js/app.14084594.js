(function(t){function e(e){for(var a,o,r=e[0],u=e[1],c=e[2],l=0,d=[];l<r.length;l++)o=r[l],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var r=n[o];0!==s[r]&&(a=!1)}a&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},o={app:0},s={app:0},i=[];function r(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-116265ff":"f7259666","chunk-1b4c0202":"011d4292","chunk-202b8b38":"51a67e89","chunk-2c66b8c8":"e6711cd6","chunk-2d0c8672":"3b864a60","chunk-65617e96":"659b54d5","chunk-6563bd08":"80e96847","chunk-658b731e":"d9abdd57","chunk-6f51718a":"127662e4","chunk-72075fb1":"c9872e40","chunk-a7579ae4":"56b72a1e"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-116265ff":1,"chunk-202b8b38":1,"chunk-2c66b8c8":1,"chunk-72075fb1":1,"chunk-a7579ae4":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-116265ff":"444de154","chunk-1b4c0202":"31d6cfe0","chunk-202b8b38":"0c00e4c2","chunk-2c66b8c8":"21df7ce2","chunk-2d0c8672":"31d6cfe0","chunk-65617e96":"31d6cfe0","chunk-6563bd08":"31d6cfe0","chunk-658b731e":"31d6cfe0","chunk-6f51718a":"31d6cfe0","chunk-72075fb1":"1a7f9712","chunk-a7579ae4":"fb326608"}[t]+".css",s=u.p+a,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var c=i[r],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===s))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){c=d[r],l=c.getAttribute("data-href");if(l===a||l===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[t],f.parentNode.removeChild(f),n(i)},f.href=s;var g=document.getElementsByTagName("head")[0];g.appendChild(f)})).then((function(){o[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=r(t);var d=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}s[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=n("8c4f");a["default"].use(o["a"]);var s=[{path:"/",name:"index",component:function(){return n.e("chunk-72075fb1").then(n.bind(null,"d504"))}},{path:"/UserInfo",name:"UserInfo",component:function(t){return n.e("chunk-202b8b38").then(function(){var e=[n("8f77")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/UserPasswd",name:"UserPasswd",component:function(t){return n.e("chunk-2d0c8672").then(function(){var e=[n("5573")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/SysUser",name:"SysUser",component:function(t){return n.e("chunk-658b731e").then(function(){var e=[n("6a53")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/SysPerm",name:"SysPerm",component:function(t){return n.e("chunk-6f51718a").then(function(){var e=[n("172b")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/SysRole",name:"SysRole",component:function(t){return n.e("chunk-1b4c0202").then(function(){var e=[n("10e1")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/SysConfig",name:"SysConfig",component:function(t){return n.e("chunk-2c66b8c8").then(function(){var e=[n("5f2a")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/SysMenus",name:"SysMenus",component:function(t){return n.e("chunk-a7579ae4").then(function(){var e=[n("a6e8")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/SysMenusAction",name:"SysMenusAction",component:function(t){return n.e("chunk-65617e96").then(function(){var e=[n("ddf3")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/SysFileManage",name:"SysFileManage",component:function(t){return n.e("chunk-116265ff").then(function(){var e=[n("52e8")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/Demo",name:"Demo",component:function(t){return n.e("chunk-6563bd08").then(function(){var e=[n("c876")];t.apply(null,e)}.bind(this)).catch(n.oe)}}],i=o["a"].prototype.push;o["a"].prototype.push=function(t){return i.call(this,t).catch((function(t){return t}))};var r=new o["a"]({mode:"history",base:"",routes:s}),u=r,c=n("2f62");a["default"].use(c["a"]);var l=new c["a"].Store({state:{mode:"light",statusBarHeight:0,isLogin:"",uInfo:{},system:{},menus:[],defaultMenu:"3",collapseMenu:!1,socket:null,uMsg:{scroll:null,group:[],num:""},uNotify:{},scan:null}}),d=n("5c96"),f=n.n(d),g=(n("8aa1"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.update.show?a("div",{staticClass:"update_body",style:{backgroundColor:t.upDateColor.bg}},[a("div",{staticClass:"update_ct verticalCenter"},[a("div",{staticClass:"logo",style:{backgroundColor:t.upDateColor.logoBg}},[a("div")]),a("div",{staticClass:"loading",style:{backgroundImage:"linear-gradient(to right, "+t.upDateColor.loading+", "+t.upDateColor.loading+" "+t.update.loading+", "+t.upDateColor.loaded+" "+t.update.loading+", "+t.upDateColor.loaded+" 100%)"}}),a("div",{staticClass:"load_msg",domProps:{innerHTML:t._s(t.update.msg)}},[t._v("正在加载应用")]),a("div",{staticClass:"load_button"},[t.update.down?a("button",{staticClass:"Button",style:{color:t.upDateColor.butColor,backgroundColor:t.upDateColor.butBg},on:{click:function(e){return t.updateDown()}}},[t._v(t._s(t.upDateColor.butText))]):t._e()])]),a("div",{staticClass:"update_logo",style:{color:t.upDateColor.copy}},[a("h1",[t._v(t._s(t.$config.title))]),a("h2",[t._v(t._s(t.$config.copy))])])]):t._e(),a("el-container",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.isLogin,expression:"!$store.state.isLogin"}],staticClass:"login_body bgImg bgcover",style:{backgroundImage:"url("+(t.$store.state.system.login_bg?t.$store.state.system.login_bg:n("86d5"))+")"}},[a("div",{staticClass:"login_ct verticalCenter"},[a("div",{staticClass:"logo flex_center"},[a("div",{staticClass:"bgImg bgTu",style:{backgroundImage:"url("+(t.$store.state.system.logo?t.$store.state.system.logo:n("9b19"))+")"}}),a("h1",{staticClass:"nowrap"},[t._v(t._s(t.$store.state.system.title))])]),a("h2",[t._v("会员登录")]),a("div",{staticClass:"item"},[a("el-input",{attrs:{maxlength:"32",placeholder:"用户名/手机/邮箱"},model:{value:t.login.uname,callback:function(e){t.$set(t.login,"uname",e)},expression:"login.uname"}},[a("template",{slot:"prepend"},[a("i",{staticClass:"icons icon_user"})])],2)],1),a("div",{staticClass:"item"},[a("el-input",{attrs:{type:"password",maxlength:"16",placeholder:"请输入密码"},model:{value:t.login.passwd,callback:function(e){t.$set(t.login,"passwd",e)},expression:"login.passwd"}},[a("template",{slot:"prepend"},[a("i",{staticClass:"icons icon_passwd"})])],2)],1),a("div",{staticClass:"item"},[a("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",disabled:t.login.dis},on:{click:function(e){return t.loginSub()}}},[t._v(t._s(t.login.subText))])],1),a("div",{staticClass:"copy nowrap"},[t._v("© "+t._s(t.$store.state.system.copy)+" license  版本："+t._s(t.$config.version))])])]),a("el-container",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isLogin,expression:"$store.state.isLogin"}],staticClass:"app_body"},[a("el-aside",{staticClass:"app_menus",style:{width:t.$store.state.collapseMenu?"64px":"200px",paddingTop:t.$store.state.statusBarHeight}},[a("div",{staticClass:"app_img",on:{click:function(e){return t.hideMenus()}}},[t.$store.state.uInfo.img?a("div",{staticClass:"bgImg",style:{backgroundImage:"url("+t.$store.state.uInfo.img+")"}}):a("div",{staticClass:"bgImg"}),a("p",{staticClass:"nowrap"},[t._v(t._s(t.$store.state.uInfo.nickname||"昵称")+"("+t._s(t.$store.state.uInfo.name||"姓名")+")")])]),a("el-menu",{attrs:{"default-active":t.$store.state.defaultMenu,collapse:t.$store.state.collapseMenu,"unique-opened":""}},t._l(t.$store.state.menus,(function(e,n){return a("el-submenu",{key:n,attrs:{index:""+e.id}},[a("template",{slot:"title"},[a("i",{staticClass:"icons",class:e.ico}),a("span",[t._v(t._s(e.title))])]),t._l(e.menus,(function(e,n){return a("div",{key:n},[0==e.menus.length?a("el-menu-item",{attrs:{index:""+e.id},on:{click:function(n){return t.openUrl(e.ico,e.url,""+e.id,e.title)}}},[t._v(t._s(e.title))]):a("el-submenu",{attrs:{index:""+e.id}},[a("template",{slot:"title"},[a("span",[t._v(t._s(e.title))])]),t._l(e.menus,(function(e,n){return a("el-menu-item",{key:n,attrs:{index:""+e.id},on:{click:function(n){return t.openUrl(e.ico,e.url,""+e.id,e.title)}}},[t._v(t._s(e.title))])}))],2)],1)}))],2)})),1),a("div",{staticClass:"app_version nowrap"},[t._v("版本："+t._s(t.$config.version))])],1),a("el-container",{style:{paddingTop:t.$store.state.statusBarHeight}},[a("el-header",{staticClass:"app_top flex"},[a("div",{staticClass:"name"},[t._v(t._s(t.storage.getItem("MenuName")||t.$store.state.system.title)+" "),a("i",{staticClass:"el-icon-arrow-right"})]),a("div",{staticClass:"uinfo"},[a("b",[t._v(t._s(t.$store.state.uInfo.uname))]),t._v("  \n          "),a("el-button",{attrs:{type:"text"},on:{click:function(e){return t.openConfig()}}},[t._v("设置")]),a("span",{staticClass:"split"},[t._v("|")]),a("span",{staticClass:"logout",on:{click:function(e){return t.logout()}}},[t._v("退出")])],1)]),a("el-main",{staticClass:"app_main"},[a("router-view"),a("div",{staticClass:"app_copy"},[t._v("所属："+t._s(t.$store.state.system.title)+"  © "+t._s(t.$store.state.system.copy)+"  版本："+t._s(t.$config.version))])],1)],1)],1),a("el-dialog",{attrs:{title:t.config.title,visible:t.config.show,center:"",width:"360px"},on:{"update:visible":function(e){return t.$set(t.config,"show",e)}}},[a("el-form",{attrs:{"label-width":"120px"}},[a("el-form-item",{attrs:{label:"消息朗读"}},[a("el-switch",{on:{change:function(e){return t.subConfig("is_msg_audio")}},model:{value:t.config.is_msg_audio,callback:function(e){t.$set(t.config,"is_msg_audio",e)},expression:"config.is_msg_audio"}})],1)],1)],1)],1)}),p=[],h=(n("20d6"),n("7f7f"),n("7c2f")),m=n("9060"),v={start:function(){var t=this;clearInterval(this.msgInterval),this.msgInterval=setInterval((function(){!h["a"].self.$store.state.isLogin||h["a"].self.$store.state.socket&&1==h["a"].self.$store.state.socket.readyState||t.start()}),3e3);var e=h["a"].storage.getItem("token");if(!e)return!1;h["a"].config.socket.start&&this.socket(e)},socket:function(t){var e=this;h["a"].self.$store.state.socket=new WebSocket(h["a"].config.socket.server+"?token="+t),h["a"].self.$store.state.socket.onopen=function(){console.log("Socket开启"),clearInterval(e.heartbeat),e.heartbeat=setInterval((function(){try{h["a"].self.$store.state.socket.send(JSON.stringify({type:""}))}catch(t){e._closeMsg()}}),1e4),setTimeout((function(){h["a"].self.$store.state.socket.send(JSON.stringify({type:"group"}))}),1e3)},h["a"].self.$store.state.socket.onclose=function(){console.log("Socket关闭"),e._closeMsg()},h["a"].self.$store.state.socket.onmessage=function(t){var n=JSON.parse(t.data);if(console.log(n),0!=n.code)return h["a"].toast(n.msg);if(0==n.code&&"group"==n.type)h["a"].self.$store.state.uMsg.group=n.data,e._getMsgNum();else if(0==n.code&&"msg"==n.type){h["a"].storage.getItem("voice");var a=n.data.uid==h["a"].self.$store.state.uInfo.uid?n.data.fid:n.data.uid;h["a"].self.$store.state.uMsg.group[""+a]?(h["a"].self.$store.state.uMsg.group[""+a].msg.push(n.data),h["a"].self.$store.state.uMsg.group[""+a].num++,h["a"].self.$store.state.uMsg.num++):h["a"].self.$store.state.socket.send(JSON.stringify({type:"group"}))}else 0==n.code&&n.type}},_getMsgNum:function(){var t=h["a"].self.$store.state.uMsg.group,e=0;for(var n in t)e+=t[n].num;h["a"].self.$store.state.uMsg.num=e},_closeMsg:function(){h["a"].self.$store.state.socket&&(h["a"].self.$store.state.socket.close(),h["a"].self.$store.state.socket=null,h["a"].self.$store.state.uMsg.group=[],h["a"].self.$store.state.uMsg.num="")}},y={init:function(){var t=this;if(m["a"].isPlus()){plus.screen.lockOrientation("portrait-primary"),plus.navigator.setStatusBarStyle("dark"),plus.navigator.setStatusBarBackground(Env.themeColor),h["a"].self.$store.state.statusBarHeight=plus.navigator.getStatusbarHeight(),document.addEventListener("uistylechange",(function(){h["a"].self.$store.state.mode=plus.navigator.getUiStyle()}),!1);var e=0,n=plus.webview.currentWebview();plus.key.addEventListener("backbutton",(function(){n.canBack((function(t){t.canBack?(h["a"].self.$store.state.scan&&h["a"].self.$store.state.scan.close(),h["a"].back(1)):(e>0&&plus.runtime.quit(),h["a"].toast("再按一次退出应用!"),e++,setTimeout((function(){e=0}),2e3))}))}))}this.tokenState(1),clearInterval(this.tokenInterval),this.tokenInterval=setInterval((function(){t.tokenState(0)}),1e4),v.start(),this.getConfig()},tokenState:function(t){var e=h["a"].storage.getItem("token");e?h["a"].post("user/token",{token:e,uinfo:t},(function(t){var e=t.data;0==e.code?(h["a"].self.$store.state.isLogin=!0,e.uinfo&&(h["a"].self.$store.state.uInfo=e.uinfo)):(h["a"].self.$store.state.isLogin=!1,h["a"].self.$store.state.uInfo={},h["a"].storage.setItem("token",""))})):(h["a"].self.$store.state.isLogin=!1,h["a"].storage.setItem("token",""))},getConfig:function(){h["a"].post("index/getConfig",{},(function(t){var e=t.data;0==e.code&&(h["a"].self.$store.state.system=e.list)}))}},b=n("229e"),k=n("616b");b["a"].use(k["a"]);var w={name:"APP",data:function(){return{storage:h["a"].storage,update:{show:!1,os:"",down:!1,loading:"0%",msg:"检测更新",file:"",total:0},upDateColor:h["a"].config.update,login:{uname:"",passwd:"",subText:"登 录",dis:!1},menus:[],config:{show:!1,title:"系统配置",is_msg_audio:!0}}},mounted:function(){var t=this;h["a"].self=this,setTimeout((function(){y.init(),h["a"].config.update.start&&t.isUpdate()}),1e3),h["a"].storage.getItem("token")&&this.getMenus(),this.$store.state.collapseMenu="true"==h["a"].storage.getItem("isCollapse"),this.$store.state.defaultMenu=h["a"].storage.getItem("defaultMenu")?h["a"].storage.getItem("defaultMenu"):"3"},methods:{isUpdate:function(){var t=this;if(!m["a"].isPlus())return!1;this.update.os=plus.os.name,h["a"].post("index/appUpdate",{os:this.update.os},(function(e){var n=e.data;if(0!=n.code)return!1;plus.runtime.getProperty(plus.runtime.appid,(function(e){if(!m["a"].versionDiff(e.version,n.version))return!1;t.update.show=!0,t.update.down=!0,t.update.msg="新版本: "+n.version+"&nbsp;&nbsp;大小: "+(n.size/1024/1024).toFixed(2)+"MB",t.update.file=t.$config.baseUrl+n.file,t.update.total=n.size}))}))},updateDown:function(){var t=this;if(this.update.down=!1,this.update.msg="开始下载",this.update.loading="0%","iOS"==this.update.os)this.update.msg="请在桌面查看安装进度",window.open(h["a"].config.upIosUrl),setTimeout((function(){plus.runtime.quit()}),5e3);else{var e=plus.downloader.createDownload(this.update.file,{filename:"_doc/download/",timeout:30},(function(e,n){200==n?plus.runtime.install(e.filename,{force:!0},(function(){plus.runtime.restart()}),(function(t){h["a"].toast("安装失败!")})):(t.update.down=!0,t.update.msg="下载失败")}));e.start(),e.addEventListener("statechanged",(function(e,n){var a=parseInt(e.downloadedSize/t.update.total*100);t.update.loading=a+"%",t.update.msg="正在下载："+t.update.loading,a>=100&&(t.update.msg="下载完成，安装并重启")}))}},loginSub:function(){var t=this,e=this.login.uname,n=this.login.passwd,a=h["a"].reg("passwd",n);if(!0!==h["a"].reg("uname",e)&&!0!==h["a"].reg("email",e)&&!0!==h["a"].reg("tel",e))return h["a"].toast("请输入帐号/手机/邮箱");if(!0!==a)return h["a"].toast(a);this.login.subText="正在登录",this.login.dis=!0;var o=h["a"].loading();h["a"].post("user/login",{uname:e,passwd:n},(function(e){o.clear(),t.login.subText="登 录",t.login.dis=!1;var n=e.data;0==n.code?(t.$store.state.isLogin=!0,h["a"].self.$store.state.uInfo=n.uinfo,h["a"].storage.setItem("token",n.token),t.getMenus()):(h["a"].self.$store.state.isLogin=!1,h["a"].self.$store.state.uInfo={},h["a"].storage.setItem("token",""),h["a"].toast(n.msg,"error"))}),(function(t){o.clear(),h["a"].toast("网络加载失败!")}))},logout:function(){this.$store.state.isLogin=!1,this.$store.state.uInfo={},h["a"].storage.setItem("token",""),v._closeMsg()},getMenus:function(){h["a"].post("Usermain/getMenus",{token:h["a"].storage.getItem("token")},(function(t){var e=t.data;0==e.code&&(h["a"].self.$store.state.menus=e.menus)}))},hideMenus:function(){this.isCollapse=!this.isCollapse,h["a"].storage.setItem("isCollapse",this.isCollapse),this.$store.state.collapseMenu=this.isCollapse},openUrl:function(t,e,n,a){if(h["a"].storage.setItem("MenuName",a),h["a"].storage.setItem("defaultMenu",n),this.$store.state.defaultMenu=n,"3"!=n){var o=JSON.parse(h["a"].storage.getItem("Menus")||"[]"),s={ico:t,url:e,index:n,name:a},i=o.findIndex((function(t){return JSON.stringify(t)==JSON.stringify(s)}));i>=0&&o.splice(i,1),o.push({ico:t,url:e,index:n,name:a}),h["a"].storage.setItem("Menus",JSON.stringify(o))}this.$router.push(e)},openConfig:function(){this.config.show=!0},subConfig:function(t){var e=this,n={};n[t]=this.config[t]?"1":"0";var a=h["a"].loading();h["a"].post("Userinfo/edit",{token:h["a"].storage.getItem("token"),data:JSON.stringify(n)},(function(n){a.clear();var o=n.data;return e.$store.state.uinfo[t]=e.config[t],0==o.code?h["a"].toast(o.msg,"success"):h["a"].toast(o.msg,"error")}))}}},C=w,_=(n("034f"),n("2877")),$=Object(_["a"])(C,g,p,!1,null,null,null),M=$.exports,S=n("8c89");document.title=S["a"].title,a["default"].config.productionTip=S["a"].dev,a["default"].prototype.$config=S["a"],a["default"].use(f.a),new a["default"]({router:u,store:l,render:function(t){return t(M)}}).$mount("#app")},"5faa":function(t,e,n){"use strict";var a=n("b743"),o=n.n(a);o.a},"64a9":function(t,e,n){},"7c2f":function(t,e,n){"use strict";n("6b54"),n("a481");var a=n("8c89"),o=n("bc3a"),s=n.n(o);n("d055");e["a"]={self:null,config:a["a"],back:function(t,e){e.$router.goBack(-t)},loading:function(){var t=this.self.$loading({text:"",background:"rgba(0, 0, 0, 0.7)"});return{clear:function(){t.close()}}},toast:function(t,e){return e=e||"",this.self.$message({message:t,type:e,showClose:!0})},confirm:function(t,e,n){this.self.$confirm(t.content,t.title,{confirmButtonText:t.confirmText||"确定",cancelButtonText:t.cancelText||"取消",type:t.type||"",center:!0}).then(e).catch(n)},get:function(t,e,n,a,o){var i=t.substr(0,4);t="http"==i?t:this.config.apiUrl+t;var r=this.config.request;for(var u in o=o||{},r)o[u]=r[u];s.a.get(t,{params:e},o).then(n).catch(a)},post:function(t,e,n,a,o){var i=t.substr(0,4);t="http"==i?t:this.config.apiUrl+t;var r=new FormData;for(var u in e)r.append(u,e[u]);var c=this.config.request;for(var l in o=o||{},c)o[l]=c[l];s.a.post(t,r,o).then(n).catch(a)},storage:{setItem:function(t,e){return window.localStorage.setItem(t,e)},getItem:function(t){return window.localStorage.getItem(t)},clear:function(){return window.localStorage.clear()}},unique:function(t){for(var e=[],n=0,a=t.length;n<a;n++){for(var o=n+1;o<a;o++)t[n]===t[o]&&(o=++n);e.push(t[n])}return e},getDay:function(t,e){var n=e?new Date(e):new Date;n.setDate(n.getDate()+t);var a=n.getFullYear(),o=n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1,s=n.getDate()<10?"0"+n.getDate():n.getDate();return a+"-"+o+"-"+s},getWeek:function(t){var e=new Date(t),n=["日","一","二","三","四","五","六"];return n[e.getDay()]},getDate:function(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,a=t.getDate()<10?"0"+t.getDate():t.getDate(),o=t.getHours()<10?"0"+t.getHours():t.getHours(),s=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),i=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return e+"-"+n+"-"+a+" "+o+":"+s+":"+i},getAngle:function(t,e){var n=Math.sqrt(t*t+e*e),a=Math.acos(t/n),o=parseInt(180*a/Math.PI);return 0==t&&0==e?0:t>=0&&e>=0?-o:t<0&&e>=0?-o:o},toFixedNo:function(t,e){for(var n="",a=0;a<e;a++)n+="0";return n=parseInt("1"+n),Math.floor(t*n)/n},formatPrice:function(t){return parseInt(t).toString().replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,"$&,")},formatTel:function(t){var e=/^(\d{3})\d{4}(\d{4})$/;return t.replace(e,"$1****$2")},getimgsrc:function(t){var e=/<img.+?src=('|")?([^'"]+)('|")?(?:\s+|>)/gim,n=[],a=null;while(a=e.exec(t))n.push(a[2]);return n},timeSize:function(t){var e=(new Date).getTime(),n=new Date(t).getTime();return e-n},formatTime:function(t){var e=t,n=new Date,a=n.getFullYear(),o=n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1,s=n.getDate()<10?"0"+n.getDate():n.getDate(),i=t.substr(0,4),r=t.substr(5,2),u=t.substr(8,2),c=t.substr(11,5),l=t.substr(5,11),d=parseInt(t.substr(11,2));if(i==a&&r==o&&u==s){var f="";d<6?f="凌晨":d<9?f="早上":d<12?f="上午":d<14?f="中午":d<17?f="下午":d<20&&(f="晚上"),e=f+" "+c}else i==a&&r==o&&u==s-1?e="昨天 "+c:i==a&&r==o&&(e=l);return e},reg:function(t,e){var n=!1,a="",o={uname:/^[a-zA-Z][a-zA-Z0-9\_\@\-\*\&]{4,15}$/,tel:/^[1]\d{10}$/,email:/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/,vcode:/^\d{4}$/,passwd:/^[a-zA-Z0-9|_|@|-|*|&]{6,16}$/};switch(t){case"uname":n=o.uname.test(e),a=n?"":"用户名英文开头5~16位！";break;case"tel":n=o.tel.test(e),a=n?"":"手机号码错误！";break;case"email":n=o.email.test(e),a=n?"":"邮箱帐号错误！";break;case"vcode":n=o.vcode.test(e),a=n?"":"验证码4位！";break;case"passwd":n=o.passwd.test(e),a=n?"":"密码为6~16位字符！";break}return!!n||a},tinymce:function(){return{language:"zh_CN",language_url:"/tinymce/zh_CN.js",skin_url:"/tinymce/skins/ui/oxide",height:550,menubar:!0,branding:!1,toolbar:"undo redo | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | table image media preview | removeformat | help",toolbar_items_size:"small",plugins:["advlist autolink lists link image charmap print preview anchor textcolor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"]}},encode:function(t){var e=encodeURI(t);return btoa(e)},decode:function(t){var e=atob(t);return decodeURI(e)}}},"86d5":function(t,e,n){t.exports=n.p+"img/bg.597edca7.jpg"},"8aa1":function(t,e,n){},"8c89":function(t,e,n){"use strict";var a="WebMIS-数据中心",o="https://demo-data-api.webmis.vip/",s="wss://demo-data-api.webmis.vip/wss";e["a"]={dev:!1,title:a,version:"1.0.0",baseUrl:o,apiUrl:o+"admin/",copy:"Copyright © WebMIS.vip 2020",request:{headers:{"Content-Type":"multipart/form-data"}},statusBar:{height:"0px",color:"#333",bgColor:"#FFF"},update:{start:!0,bg:"#6FB737",logoBg:"#FFF",loading:"#FFF",loaded:"#666",copy:"#333",butColor:"#666",butBg:"#FFF",butText:"下载并安装"},upIosUrl:"",amapKey:"d956f0c3e15489a1b5bf291e5d133c8a",baiduOcr:"https://aip.baidubce.com/rest/2.0/ocr/v1/",socket:{start:!1,server:s},msgRead:300,msgContent:"content",msgBrowser:!1}},9060:function(t,e,n){"use strict";n("386d"),n("7f7f");var a=n("2b0e"),o=n("8c89"),s=n("8f9b"),i=n.n(s),r=n("bc3a"),u=n.n(r),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notify_body",style:{backgroundColor:t.bgColor,color:t.color}},[n("div",{staticClass:"notify_title flex"},[n("div",{staticClass:"logo"}),n("h2",{staticClass:"nowrap"},[t._v(t._s(t.title))]),n("div",{staticClass:"close"})]),t.content?n("div",{staticClass:"notify_content",domProps:{innerHTML:t._s(t.content)}}):t._e()])},l=[],d={name:"Notify",props:{title:{type:String,default:"消息"},content:{type:String,default:""},bgColor:{type:String,default:"#FFF"},color:{type:String,default:"#333"}},data:function(){return{}},mounted:function(){},methods:{}},f=d,g=(n("5faa"),n("2877")),p=Object(g["a"])(f,c,l,!1,null,"840c12a2",null),h=p.exports,m={install:function(t){var e=function(t){t.style.transition="all .3s ease",t.style.transform="translate(0, 0)",t.style.opacity="1"},n=function(t,e){t.style.transition="all .3s ease",t.style.transform="translate(0, -100%)",t.style.opacity="0",setTimeout((function(){e.removeChild(t)}),300)};t.prototype.$msgNotify=function(a){var o=t.extend(h),s=new o,i=document.createElement("div");s.$mount(i),s.title=a.title||"标题",s.content=a.content||"",s.color=a.color||"#333",s.bgColor=a.bgColor||"rgba(255,255,255,.9)",a.delay=a.delay||5e3,a.onClick=a.onClick||function(){};var r=document.getElementById("notifyBody");r||(r=document.createElement("div"),r.setAttribute("id","notifyBody"),r.setAttribute("style","position: fixed; z-index: 9999; width: 100%; max-width: 360px; top: 10px; left: 0; right: 0; margin: auto;")),document.body.appendChild(r),r.appendChild(s.$el),setTimeout((function(){e(s.$el)}),300),s.$el.stime=setTimeout((function(){n(s.$el,r)}),a.delay),s.$el.onclick=function(){a.onClick(this)},s.$el.close=function(){clearTimeout(s.$el.stime),n(s.$el,r)}}}},v=m;a["default"].use(v),i.a.initAMapApiLoader({key:o["a"].amapKey,plugin:["AMap.Geolocation","PlaceSearch"],v:"1.4.15"});e["a"]={isPlus:function(){try{return!!plus}catch(t){return!1}},getStatusBarHeight:function(){var t=0,e=/Html5Plus\/.+\s\(.*(Immersed\/(\d+\.?\d*).*)\)/gi.exec(navigator.userAgent);return e&&e.length>=3&&(t=parseFloat(e[2])),t},notify:function(t,e,n,s){o["a"].msgBrowser&&window.Notification&&"denied"!==Notification.permission&&Notification.requestPermission((function(n){setTimeout((function(){new Notification(t,{body:e})}),o["a"].msgRead)})),setTimeout((function(){a["default"].prototype.$msgNotify({title:t,content:e,delay:1e4,onClick:n})}),o["a"].msgRead),s=s||!1,console.log(s),s&&u.a.post(o["a"].apiUrl+"index/baiduToken").then((function(n){var a=new Audio,s="title"==o["a"].msgContent?t:e;a.src="https://tsn.baidu.com/text2audio?lan=zh&ctp=1&cuid=1&tex="+s+"&tok="+n.data.token,setTimeout((function(){try{if("iOS"==plus.os.name){var t=plus.ios.importClass("AVAudioSession"),e=t.sharedInstance();e.setCategoryerror("AVAudioSessionCategoryPlayback",null),e.setActiveerror("YES",null);var n=plus.ios.importClass("AVSpeechSynthesizer"),o=plus.ios.importClass("AVSpeechUtterance"),i=plus.ios.import("AVSpeechSynthesisVoice"),r=new n,u=i.voiceWithLanguage("zh-CN"),c=o.speechUtteranceWithString(s);c.setVoice(u),r.speakUtterance(c)}else a.play()}catch(l){a.play()}}),o["a"].msgRead)}))},pay:function(t,e,n,a,o){var s="";for(var i in n)s+=i+"="+n[i]+"&";try{"alipay"==t?s+="type=app":"wxpay"==t&&(s+="type=APP"),plus.payment.getChannels((function(n){var i=null;for(var r in n)n[r].id==t&&(i=n[r]);u.a.post(e,s).then((function(t){var e=t.data;0==e.code?plus.payment.request(i,e.data,a,o):console.log(e.msg)}))}),(function(t){console.log("支付通道: "+t.message)}))}catch(r){console.log("H5方式: "+t)}},geoLocation:function(t,e){try{plus.geolocation.getCurrentPosition((function(e){var n={};n.province=e.address.province,n.city=e.address.city,n.latitude=e.coords.latitude,n.longitude=e.coords.longitude,window.localStorage.setItem("GeoLocation",JSON.stringify(n)),t(n)}),e)}catch(n){setTimeout((function(){AMap.service(["AMap.Geolocation"],(function(){var n=new AMap.Geolocation({enableHighAccuracy:!1,timeout:5e3});n.getCityInfo((function(a,o){var s={};s.province=o.province,s.city=o.city,n.getCurrentPosition((function(n,a){a&&a.position?(s.latitude=a.position.lat,s.longitude=a.position.lng,window.localStorage.setItem("GeoLocation",JSON.stringify(s)),t(s)):e(n)}))}))}))}),500)}},getAddress:function(t,e,n){setTimeout((function(){AMap.service(["AMap.PlaceSearch"],(function(){var a=window.localStorage.getItem("GeoLocation");a=a?JSON.parse(a):{city:"昆明市"};var o=new AMap.PlaceSearch({city:a.city});o.search(t,(function(t,a){a&&a.poiList?e(a.poiList.pois):n(t)}))}))}),500)},camera:function(t,e){try{var n=plus.camera.getCamera();n.captureImage((function(e){plus.io.resolveLocalFileSystemURL(e,(function(e){e.file((function(e){t(e)}))}),(function(t){console.log("读取拍照失败")}))}),e)}catch(o){var a=document.createElement("input");a.setAttribute("type","file"),a.setAttribute("style","display: none"),document.body.appendChild(a),a.click(),a.onchange=function(){t(a.files[0])}}},photo:function(t,e,n){n=n||!0;try{plus.gallery.pick((function(e){var n=e.files,a=[],o=null;for(var s in n)plus.io.resolveLocalFileSystemURL(n[s],(function(e){e.file((function(e){a.push(e),clearTimeout(o),o=setTimeout((function(){t(a)}),300)}))}),(function(t){console.log("读取文件: "+t.message)}))}),e,{filter:"image",multiple:n})}catch(o){var a=document.createElement("input");a.setAttribute("type","file"),a.setAttribute("style","display: none"),n&&a.setAttribute("multiple","multiple"),document.body.appendChild(a),a.click(),a.onchange=function(){t(a.files)}}},readerCompress:function(t,e,n){var a=this;try{var o=new plus.io.FileReader;o.readAsDataURL(t),o.onloadend=function(){e.ext||("image/jpeg"==t.type?e.ext="jpg":"image/png"==t.type?e.ext="png":"image/gif"==t.type&&(e.ext="gif")),a.compressImage(this.result,e,n)}}catch(i){var s=new FileReader;s.readAsDataURL(t),s.onloadend=function(){e.ext||("image/jpeg"==t.type?e.ext="jpg":"image/png"==t.type?e.ext="png":"image/gif"==t.type&&(e.ext="gif")),a.compressImage(this.result,e,n)}}},compressImage:function(t,e,n){var a=e.width||0,o=e.height||0,s=e.cut||!0,i=e.quality||.8,r=e.ext||"jpg",u={jpg:"image/jpeg",png:"image/png",gif:"image/gif"},c=1,l=1,d=0,f=0,g=1,p=c/l,h=document.createElement("canvas"),m=h.getContext("2d"),v=new Image;v.src=t,v.onload=function(){p=this.width/this.height,a>0&&0==o?(c=a<this.width?a:this.width,l=a<this.width?Math.round(a/p):Math.round(this.width/p),a=c,o=l):0==a&&o>0?(c=o<this.height?Math.round(o*p):Math.round(this.height*p),l=o<this.height?o:this.height,a=c,o=l):0==a&&0==o?(c=this.width,l=this.height,a=c,o=l):(g=a/o,p>g?a<this.width?(c=s?Math.round(o*p):a,l=s?o:Math.round(a/p)):(c=s?Math.round(this.height*p):this.width,l=s?this.height:Math.round(this.width/p)):o<this.height?(c=s?a:Math.round(o*p),l=s?Math.round(a/p):o):(c=s?this.width:Math.round(this.height*p),l=s?Math.round(this.width/p):this.height)),h.width=a,h.height=o,d=Math.round(a-c)/2,f=Math.round(o-l)/2,m.drawImage(this,d,f,c,l);var t=h.toDataURL(u[r],i);n(t)}},video:function(t,e){try{var n=plus.camera.getCamera();n.startVideoCapture((function(e){plus.io.resolveLocalFileSystemURL(e,(function(n){t(e,n)}),(function(t){console.log("读取录像失败")}))}),e)}catch(a){console.log("录像")}},audio:function(t,e,n){try{t.record({filename:"_doc/audio/"},(function(t){plus.io.resolveLocalFileSystemURL(t,(function(n){e(t,n)}),(function(t){console.log("读取音频失败")}))}),n)}catch(a){console.log("录音")}},uploader:function(t,e,n,a){try{for(var o=plus.uploader.createUpload(t,{method:"POST"},n),s=0;s<e.length;s++)"file"==e[s].type?o.addFile(e[s].val,{key:e[s].key}):"data"==e[s].type&&o.addData(e[s].key,e[s].val);o.addEventListener("statechanged",a,!1),o.start()}catch(i){console.log("上传文件")}},cacheClear:function(){try{plus.io.resolveLocalFileSystemURL("_doc/",(function(t){return t.removeRecursively()}),(function(t){console.log("清理缓存失败")}))}catch(t){console.log("清理缓存")}}}},"9b19":function(t,e,n){t.exports=n.p+"img/logo.5f2c810c.svg"},b743:function(t,e,n){}});