(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1aa94d43"],{"0c0d":function(t,e,s){},"0f43":function(t,e,s){"use strict";var i=s("7a23"),r=Object(i["I"])("data-v-68359c2e");Object(i["u"])("data-v-68359c2e");var o={class:"page_view_html"},a={class:"page_view_left flex center"},n={class:"page_view_right flex center"},c={class:"page_view_title"},h={key:2,class:"page_view_body"};Object(i["s"])();var l=r((function(t,e,s,r,l,p){return Object(i["r"])(),Object(i["f"])("div",o,[s.header?(Object(i["r"])(),Object(i["f"])("div",{key:0,class:"page_view_header",style:{height:l.height-10+"px",lineHeight:l.height-10+"px",paddingTop:t.$store.state.statusBarHeight+5+"px",paddingBottom:"5px",backgroundColor:s.bgColor,color:s.color}},[Object(i["i"])("div",a,[Object(i["y"])(t.$slots,"left")]),Object(i["i"])("div",n,[Object(i["y"])(t.$slots,"right")]),Object(i["i"])("div",c,[Object(i["y"])(t.$slots,"title")])],4)):Object(i["g"])("",!0),s.immersed?(Object(i["r"])(),Object(i["f"])("div",h,[Object(i["y"])(t.$slots,"body")])):(Object(i["r"])(),Object(i["f"])("div",{key:1,style:{paddingTop:l.height+t.$store.state.statusBarHeight+"px",height:"calc(100% - "+(l.height+t.$store.state.statusBarHeight)+"px)"}},[Object(i["y"])(t.$slots,"body")],4))])})),p=s("8c89"),u={name:"PageView",props:{immersed:{type:Boolean,default:!1},header:{type:Boolean,default:!0},color:{type:String,default:p["a"].statusBar.color},bgColor:{type:String,default:p["a"].statusBar.bgColor}},data:function(){return{height:p["a"].statusBar.height}},mounted:function(){},methods:{}};s("87b5");u.render=l,u.__scopeId="data-v-68359c2e";e["a"]=u},2659:function(t,e,s){},"3caa":function(t,e,s){"use strict";s("0c0d")},"466d":function(t,e,s){"use strict";var i=s("d784"),r=s("825a"),o=s("50c4"),a=s("1d80"),n=s("8aa5"),c=s("14c3");i("match",1,(function(t,e,s){return[function(e){var s=a(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,s):new RegExp(e)[t](String(s))},function(t){var i=s(e,t,this);if(i.done)return i.value;var a=r(t),h=String(this);if(!a.global)return c(a,h);var l=a.unicode;a.lastIndex=0;var p,u=[],f=0;while(null!==(p=c(a,h))){var d=String(p[0]);u[f]=d,""===d&&(a.lastIndex=n(h,o(a.lastIndex),l)),f++}return 0===f?null:u}]}))},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var i=s("1d80"),r=s("5899"),o="["+r+"]",a=RegExp("^"+o+o+"*"),n=RegExp(o+o+"*$"),c=function(t){return function(e){var s=String(i(e));return 1&t&&(s=s.replace(a,"")),2&t&&(s=s.replace(n,"")),s}};t.exports={start:c(1),end:c(2),trim:c(3)}},7089:function(t,e,s){},7156:function(t,e,s){var i=s("861d"),r=s("d2bb");t.exports=function(t,e,s){var o,a;return r&&"function"==typeof(o=e.constructor)&&o!==s&&i(a=o.prototype)&&a!==s.prototype&&r(t,a),t}},"87b5":function(t,e,s){"use strict";s("7089")},"90c8":function(t,e,s){"use strict";s("2659")},a9e3:function(t,e,s){"use strict";var i=s("83ab"),r=s("da84"),o=s("94ca"),a=s("6eeb"),n=s("5135"),c=s("c6b6"),h=s("7156"),l=s("c04e"),p=s("d039"),u=s("7c73"),f=s("241c").f,d=s("06cf").f,b=s("9bf2").f,m=s("58a8").trim,y="Number",g=r[y],v=g.prototype,w=c(u(v))==y,x=function(t){var e,s,i,r,o,a,n,c,h=l(t,!1);if("string"==typeof h&&h.length>2)if(h=m(h),e=h.charCodeAt(0),43===e||45===e){if(s=h.charCodeAt(2),88===s||120===s)return NaN}else if(48===e){switch(h.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+h}for(o=h.slice(2),a=o.length,n=0;n<a;n++)if(c=o.charCodeAt(n),c<48||c>r)return NaN;return parseInt(o,i)}return+h};if(o(y,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var O,j=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof j&&(w?p((function(){v.valueOf.call(s)})):c(s)!=y)?h(new g(x(e)),s,j):x(e)},_=i?f(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),P=0;_.length>P;P++)n(g,O=_[P])&&!n(j,O)&&b(j,O,d(g,O));j.prototype=v,v.constructor=j,a(r,y,j)}},c876:function(t,e,s){"use strict";s.r(e);var i=s("7a23"),r=Object(i["I"])("data-v-438d6c97");Object(i["u"])("data-v-438d6c97");var o=Object(i["h"])("Demo"),a={class:"test"};Object(i["s"])();var n=r((function(t,e,s,n,c,h){var l=Object(i["z"])("wm-scroll-view"),p=Object(i["z"])("page-view");return Object(i["r"])(),Object(i["f"])(p,{class:"dark"==t.mode?"demo_dark":"",color:"dark"==t.mode?"#FFF":"#333",bgColor:"dark"==t.mode?"#333":"#FFF"},{left:r((function(){return[Object(i["i"])("i",{class:"back ui ui_left",onClick:e[1]||(e[1]=function(e){return t.back("left")})})]})),title:r((function(){return[o]})),body:r((function(){return[Object(i["i"])(l,{class:"html",onSwipe:t.back,onDown:t.reFresh,onUp:t.upLoad},{default:r((function(){return[Object(i["i"])("div",a,[(Object(i["r"])(!0),Object(i["f"])(i["a"],null,Object(i["x"])(t.lists,(function(t,e){return Object(i["r"])(),Object(i["f"])("div",{key:e},Object(i["C"])(t),1)})),128))])]})),_:1},8,["onSwipe","onDown","onUp"])]})),_:1},8,["class","color","bgColor"])})),c=s("fbd7"),h=s("0f43"),l=Object(i["I"])("data-v-67a4fe44");Object(i["u"])("data-v-67a4fe44");var p={class:"wm-scroll_html"},u={class:"wm-scroll_load"};Object(i["s"])();var f=l((function(t,e,s,r,o,a){return Object(i["r"])(),Object(i["f"])("div",p,[Object(i["H"])(Object(i["i"])("div",{ref:"upper",class:"wm-scroll_load_body",style:{backgroundColor:s.upperBg}},[Object(i["i"])("div",u,[Object(i["i"])("i",{class:s.upperIcon,style:{color:s.upperColor}},null,6)])],4),[[i["E"],s.upperLoad]]),Object(i["i"])("div",{ref:"html",class:["wm-scroll_view",s.scrollX?o.isMobile?"wm-scroll_view_x":"wm-scroll_view_y":o.isMobile?"":"wm-scroll_view_y"],onTouchstart:e[1]||(e[1]=function(){return a.start.apply(a,arguments)}),onTouchmove:e[2]||(e[2]=function(){return a.move.apply(a,arguments)}),onTouchend:e[3]||(e[3]=function(){return a.end.apply(a,arguments)})},[Object(i["y"])(t.$slots,"default")],34)])})),d=(s("a9e3"),s("ac1f"),s("466d"),function(){var t=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return!!t&&t[0]}),b={name:"ScrollView",props:{isScroll:{type:Boolean,default:!0},scrollX:{type:Boolean,default:!1},scrollY:{type:Boolean,default:!0},upper:{type:Number,default:64},lowerBoundary:{type:Number,default:50},upperLoad:{type:Boolean,default:!0},upperIcon:{type:String,default:"ui ui_loading"},upperBg:{type:String,default:""},upperColor:{type:String,default:""},limit:{type:Number,default:120}},data:function(){return{isMobile:!0,sp:"y",html:{w:0,h:0},body:{w:0,h:0,x:0,y:0},refUpper:{},refHtml:{},cubicBezier:"0.25,0.46,0.45,0.94"}},mounted:function(){this.isMobile=d(),this.sp=this.scrollX?"x":"y",this.refUpper=this.$refs.upper,this.refHtml=this.$refs.html,"x"==this.sp?(this.refUpper.style.left=0,this.refUpper.style.width="".concat(this.upper,"px"),this.refUpper.style.height="100%",this.refUpper.style.transform="translate(-".concat(this.upper,"px,0)"),this.refHtml.style.overflowX="auto"):(this.refUpper.style.top=0,this.refUpper.style.width="100%",this.refUpper.style.height="".concat(this.upper,"px"),this.refUpper.style.transform="translate(0,-".concat(this.upper,"px)"),this.refHtml.style.overflowY="auto"),this.refHtml.addEventListener("scroll",this.scroll)},methods:{res:function(){return{x:this.body.x,y:this.body.y,w:this.body.w,h:this.body.h,boxW:this.html.w,boxH:this.html.h}},refresh:function(){this.html.w=this.refHtml.offsetWidth,this.html.h=this.refHtml.offsetHeight,this.body.w=this.refHtml.scrollWidth,this.body.h=this.refHtml.scrollHeight,this.body.min=0,this.body.max=this.body["x"==this.sp?"w":"h"]-this.html["x"==this.sp?"w":"h"]-this.lowerBoundary},start:function(t){var e=t.touches?t.touches[0]:t;this.movePage={x:0,y:0},this.tmpPage={x:0,y:0},this.startPage={x:e.clientX,y:e.clientY},this.isUpper=!1,this.isLower=!0,this.refresh(),this.scrollEnabled("auto")},move:function(t){if(!this.isScroll)return!1;var e=t.touches?t.touches[0]:t;if(this.movePage={x:parseInt(e.clientX-this.startPage.x),y:parseInt(e.clientY-this.startPage.y)},this.tmpPage[this.sp]=this.movePage[this.sp],this.body[this.sp]<=0&&this.tmpPage[this.sp]>0){this.isUpper=!0,this.isMobile&&this.scrollEnabled("hidden");var s=this.upper-this.tmpPage[this.sp];s<0&&(this.tmpPage[this.sp]=this.upper),this.tmpPage[this.sp]!=this.tmpUpper&&(this.tmpUpper=this.tmpPage[this.sp],this._translateUpper(s>0?s:0,200),this.translate(this.tmpPage[this.sp],200),"x"==this.sp?(this.body.x=-this.tmpPage[this.sp],this.body.y=0,this.$emit("scroll",this.res())):(this.body.x=0,this.body.y=-this.tmpPage[this.sp],this.$emit("scroll",this.res())))}else this.body[this.sp]>0&&this.tmpPage[this.sp]<0&&this.body[this.sp]>=this.body.max&&this.isLower&&(this.isLower=!1,this.$emit("x"==this.sp?"right":"up",this.res()))},end:function(t){this.isUpper&&(this.isUpper=!1,this._translateUpper(this.upper,400),this.translate(0,400),this.scrollEnabled("auto"),"x"==this.sp?(this.body.x=0,this.body.y=0,this.$emit("scroll",this.res()),this.tmpPage[this.sp]>=this.upper&&this.$emit("left",this.res())):(this.body.x=0,this.body.y=0,this.$emit("scroll",this.res()),this.tmpPage[this.sp]>=this.upper&&this.$emit("down",this.res())));var e=Math.abs(this.movePage.x/this.movePage.y)||0;e>1&&this.movePage.x>this.limit?this.$emit("swipe","left"):e>1&&this.movePage.x<-this.limit?this.$emit("swipe","right"):e<1&&this.movePage.y>this.limit?this.$emit("swipe","down"):e<1&&this.movePage.y<-this.limit&&this.$emit("swipe","up")},scroll:function(){this.body.x=this.refHtml.scrollLeft,this.body.y=this.refHtml.scrollTop,this.$emit("scroll",this.res()),this.isLower&&this.tmpPage[this.sp]<0&&this.body[this.sp]>=this.body.max&&(this.isLower=!1,this.$emit("x"==this.sp?"right":"up",this.res()))},translate:function(t,e){this.refHtml.style.transitionDuration="".concat(e,"ms"),this.refHtml.style.transitionTimingFunction="cubic-bezier(".concat(this.cubicBezier,")"),"x"==this.sp?this.refHtml.style.paddingLeft="".concat(t,"px"):this.refHtml.style.paddingTop="".concat(t,"px")},_translateUpper:function(t,e){this.refUpper.style.opacity=(100-t/this.upper*100)/100,this.refUpper.style.transitionDuration="".concat(e,"ms"),this.refUpper.style.transitionTimingFunction="cubic-bezier(".concat(this.cubicBezier,")"),"x"==this.sp?this.refUpper.style.transform="translate(-".concat(t,"px,0)"):this.refUpper.style.transform="translate(0,-".concat(t,"px)")},scrollEnabled:function(t){t=t||"auto","x"==this.sp?this.refHtml.style.overflowX=t:this.refHtml.style.overflowY=t}}};s("90c8");b.render=f,b.__scopeId="data-v-67a4fe44";var m=b,y={components:{PageView:h["a"],WmScrollView:m},data:function(){return{lists:[0,1,2]}},computed:{mode:function(){return this.$store.state.mode}},mounted:function(){},methods:{back:function(t){if("left"==t)return Object(c["a"])(this,1)},reFresh:function(t){this.lists=[0,1,2,3,4,5,6,7,8,9]},upLoad:function(t){var e=this;setTimeout((function(){for(var t=0;t<10;t++)e.lists.push(t)}),1e3)}}};s("3caa");y.render=n,y.__scopeId="data-v-438d6c97";e["default"]=y}}]);