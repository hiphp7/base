(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ff32620"],{"033f":function(t,e,s){"use strict";var i=s("3575"),r=s.n(i);r.a},"0f43":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page_view_html"},[t.header?s("div",{staticClass:"page_view_header",style:{height:t.height-16+"px",lineHeight:t.height-16+"px",paddingTop:t.$store.state.statusBarHeight+8+"px",paddingBottom:"8px",backgroundColor:t.bgColor,color:t.color}},[s("div",{staticClass:"page_view_left flex center"},[t._t("left")],2),s("div",{staticClass:"page_view_right flex center"},[t._t("right")],2),s("div",{staticClass:"page_view_title"},[t._t("title")],2)]):t._e(),t.immersed?s("div",{staticClass:"page_view_body"},[t._t("body")],2):s("div",{style:{paddingTop:t.height+t.$store.state.statusBarHeight+"px",height:"calc(100% - "+(t.height+t.$store.state.statusBarHeight)+"px)"}},[t._t("body")],2)])},r=[],a=s("8c89"),o={name:"PageView",props:{immersed:{type:Boolean,default:!1},header:{type:Boolean,default:!0},color:{type:String,default:a["a"].statusBar.color},bgColor:{type:String,default:a["a"].statusBar.bgColor}},data:function(){return{height:a["a"].statusBar.height}},mounted:function(){},methods:{}},h=o,n=(s("6bfe"),s("2877")),l=Object(n["a"])(h,i,r,!1,null,"561d2e28",null);e["a"]=l.exports},1581:function(t,e,s){"use strict";var i=s("49c3"),r=s.n(i);r.a},3575:function(t,e,s){},"3dde":function(t,e,s){},"49c3":function(t,e,s){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var i=s("1d80"),r=s("5899"),a="["+r+"]",o=RegExp("^"+a+a+"*"),h=RegExp(a+a+"*$"),n=function(t){return function(e){var s=String(i(e));return 1&t&&(s=s.replace(o,"")),2&t&&(s=s.replace(h,"")),s}};t.exports={start:n(1),end:n(2),trim:n(3)}},"6bfe":function(t,e,s){"use strict";var i=s("3dde"),r=s.n(i);r.a},7156:function(t,e,s){var i=s("861d"),r=s("d2bb");t.exports=function(t,e,s){var a,o;return r&&"function"==typeof(a=e.constructor)&&a!==s&&i(o=a.prototype)&&o!==s.prototype&&r(t,o),t}},a9e3:function(t,e,s){"use strict";var i=s("83ab"),r=s("da84"),a=s("94ca"),o=s("6eeb"),h=s("5135"),n=s("c6b6"),l=s("7156"),p=s("c04e"),c=s("d039"),f=s("7c73"),u=s("241c").f,d=s("06cf").f,m=s("9bf2").f,y=s("58a8").trim,g="Number",w=r[g],v=w.prototype,b=n(f(v))==g,x=function(t){var e,s,i,r,a,o,h,n,l=p(t,!1);if("string"==typeof l&&l.length>2)if(l=y(l),e=l.charCodeAt(0),43===e||45===e){if(s=l.charCodeAt(2),88===s||120===s)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+l}for(a=l.slice(2),o=a.length,h=0;h<o;h++)if(n=a.charCodeAt(h),n<48||n>r)return NaN;return parseInt(a,i)}return+l};if(a(g,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var _,P=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof P&&(b?c((function(){v.valueOf.call(s)})):n(s)!=g)?l(new w(x(e)),s,P):x(e)},B=i?u(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;B.length>C;C++)h(w,_=B[C])&&!h(P,_)&&m(P,_,d(w,_));P.prototype=v,v.constructor=P,o(r,g,P)}},c876:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("page-view",{class:"dark"==t.mode?"demo_dark":"",attrs:{color:"dark"==t.mode?"#FFF":"#333",bgColor:"dark"==t.mode?"#333":"#FFF"}},[s("div",{attrs:{slot:"left"},slot:"left"},[s("i",{staticClass:"back ui ui_left",on:{click:function(e){return t.back("left")}}})]),s("div",{attrs:{slot:"title"},slot:"title"},[t._v("Demo")]),s("scroll-view",{staticClass:"html",attrs:{slot:"body"},on:{swipe:t.back},slot:"body"},[s("div",{staticClass:"test"},t._l(t.lists,(function(e,i){return s("div",{key:i},[t._v(t._s(e))])})),0)])],1)},r=[],a=s("0169"),o=s("0f43"),h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"html",staticClass:"wm-scroll_html",on:{touchmove:function(t){t.preventDefault()},click:function(t){t.preventDefault()}}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.upperLoad,expression:"upperLoad"}],ref:"upper",staticClass:"wm-scroll_load_body",style:{backgroundColor:t.upperBg}},[s("div",{staticClass:"wm-scroll_load"},[s("i",{class:t.upperIcon,style:{color:t.upperColor}})])]),s("div",{ref:"body",staticClass:"wm-scroll_body",on:{touchstart:t.start,touchmove:t.move,touchend:t.end}},[t._t("default")],2),s("div",{directives:[{name:"show",rawName:"v-show",value:t.lowerLoad,expression:"lowerLoad"}],ref:"lower",staticClass:"wm-scroll_load_body",style:{backgroundColor:t.lowerBg}},[s("div",{staticClass:"wm-scroll_load"},[s("i",{class:t.lowerIcon,style:{color:t.lowerColor}})])])])},n=[],l=(s("a9e3"),s("ac1f"),s("1276"),{name:"ScrollView",props:{reset:{type:String,default:""},isScroll:{type:Boolean,default:!0},scrollX:{type:Boolean,default:!1},scrollY:{type:Boolean,default:!0},upper:{type:Number,default:50},lower:{type:Number,default:50},upperLoad:{type:Boolean,default:!0},lowerLoad:{type:Boolean,default:!0},upperIcon:{type:String,default:"ui ui_loading"},lowerIcon:{type:String,default:"ui ui_loading"},upperBg:{type:String,default:""},lowerBg:{type:String,default:""},upperColor:{type:String,default:""},lowerColor:{type:String,default:""},moveMin:{type:Number,default:30}},data:function(){return{sp:"",body:{w:"",h:""},bodyObj:{w:"",h:""},bodyMax:{w:0,h:0},startPage:{x:0,y:0},movePage:{x:0,y:0},tmpPage:{x:0,y:0},page:{x:0,y:0},startTime:0,limit:60,cubicBezier:"0.25,0.46,0.45,0.94",isMove:!1,isUpper:!1,isLower:!1,refBody:{},refUpper:{},refLower:{}}},mounted:function(){var t=this;this.sp=this.scrollX?"x":"y",this.refUpper=this.$refs.upper,this.refLower=this.$refs.lower,this.refBody=this.$refs.body,this.scrollX?(this.refUpper.style.left=0,this.refUpper.style.width="".concat(this.upper,"px"),this.refUpper.style.height="100%",this.refUpper.style.transform="translate(-".concat(this.upper,"px,0)"),this.refBody.style.minWidth="100%",this.refBody.style.height="100%",this.refLower.style.right=0,this.refLower.style.width="".concat(this.lower,"px"),this.refLower.style.height="100%",this.refLower.style.transform="translate(".concat(this.lower,"px,0)")):(this.refUpper.style.top=0,this.refUpper.style.width="100%",this.refUpper.style.height="".concat(this.upper,"px"),this.refUpper.style.transform="translate(0,-".concat(this.upper,"px)"),this.refBody.style.minHeight="100%",this.refBody.style.width="100%",this.refLower.style.bottom=0,this.refLower.style.width="100%",this.refLower.style.height="".concat(this.lower,"px"),this.refLower.style.transform="translate(0,".concat(this.lower,"px)"));var e=new ResizeObserver((function(e){t.reset&&(t.page[t.sp]="min"==t.reset?0:t.bodyMax["x"==t.sp?"w":"h"],t.translate(t.page[t.sp],300))}));e.observe(this.refBody)},methods:{res:function(){var t={body:this.body,client:this.bodyMax,page:this.page,move:this.movePage};return t},init:function(){var t=this.$refs.html;this.body.w=t.offsetWidth,this.body.h=t.offsetHeight,this.scrollX?(this.bodyObj.w=this.refBody.children[0].offsetWidth,this.bodyMax.w=-(this.bodyObj.w-this.body.w)):(this.bodyObj.h=this.refBody.offsetHeight,this.bodyMax.h=-(this.bodyObj.h-this.body.h))},start:function(t){if(!this.isScroll)return!1;var e=t.touches?t.touches[0]:t;this.init(),this.startTime=t.timeStamp,this.movePage.x=0,this.movePage.y=0,this.startPage.x=e.clientX,this.startPage.y=e.clientY,window.cancelAnimationFrame(this.animation),this.isMove=!1;var s=this.getTranslate();this.page[this.sp]>0?s=0:this.page[this.sp]<this.bodyMax["x"==this.sp?"w":"h"]&&(s=this.bodyMax["x"==this.sp?"w":"h"]),this.translate(s,16),this.page[this.sp]=s},move:function(t){if(!this.isScroll)return!1;var e=t.touches?t.touches[0]:t;if(this.movePage.x=parseInt(100*(e.clientX-this.startPage.x))/100,this.movePage.y=parseInt(100*(e.clientY-this.startPage.y))/100,this.isMove=!0,this.tmpPage[this.sp]=parseInt(100*(this.page[this.sp]+this.movePage[this.sp]))/100,this.tmpPage[this.sp]>0){var s=this.upper-this.tmpPage[this.sp];s<-this.upper&&(this.tmpPage[this.sp]=2*this.upper),this._translateUpper(s>0?s:0),this.isUpper=this.tmpPage[this.sp]>=this.upper}else{var i=this.lower+(this.tmpPage[this.sp]-this.bodyMax["x"==this.sp?"w":"h"]);i<-this.lower&&(this.tmpPage[this.sp]=this.bodyMax["x"==this.sp?"w":"h"]-2*this.lower),this._translateLower(i>0?i:0),this.isLower=this.tmpPage[this.sp]<=this.bodyMax["x"==this.sp?"w":"h"]-this.lower}this.translate(this.tmpPage[this.sp],100),this.scrollX?this.$emit("scroll",{x:this.tmpPage[this.sp],y:0}):this.$emit("scroll",{x:0,y:this.tmpPage[this.sp]})},end:function(t){var e=Math.abs(this.movePage.x/this.movePage.y)||0;if(e>1&&this.movePage.x>this.limit?this.$emit("swipe","left"):e>1&&this.movePage.x<-this.limit?this.$emit("swipe","right"):e<1&&this.movePage.y>this.limit?this.$emit("swipe","down"):e<1&&this.movePage.y<-this.limit&&this.$emit("swipe","up"),!this.isScroll||!this.isMove)return!1;var s=parseInt(t.timeStamp-this.startTime),i=Math.abs(this.movePage[this.sp]/s);i=i<.8?0:i;var r=parseInt(100*i*8*100)/100,a=parseInt(2*r);r=this.movePage[this.sp]>0?r:-r,this.tmpPage[this.sp]=parseInt(100*(this.tmpPage[this.sp]+r))/100,this.tmpPage[this.sp]>0?(this.isUpper&&(this.isUpper=!1,this.scrollX?this.$emit("left",this.res()):this.$emit("down",this.res())),a-=2*this.tmpPage[this.sp],a=a<=0?300:a,this.tmpPage[this.sp]=0,this._translateUpper(this.upper)):this.tmpPage[this.sp]<this.bodyMax["x"==this.sp?"w":"h"]&&(this.isLower&&(this.isLower=!1,this.scrollX?this.$emit("right",this.res()):this.$emit("up",this.res())),a-=2*(this.bodyMax["x"==this.sp?"w":"h"]-this.tmpPage[this.sp]),a=a<=0?300:a,this.tmpPage[this.sp]=this.bodyMax["x"==this.sp?"w":"h"],this._translateLower(this.lower)),this.translate(this.tmpPage[this.sp],a),this.progress=0,this.t=a/10,this.animation=window.requestAnimationFrame(this.render)},render:function(){this.progress+=1;var t=this.getTranslate();this.scrollX?this.$emit("scroll",{x:t,y:0}):this.$emit("scroll",{x:0,y:t}),this.progress<this.t&&(this.animation=window.requestAnimationFrame(this.render))},scrollTo:function(t,e){this.init(),t=t||0,"max"==t?t=this.bodyMax["x"==this.sp?"w":"h"]:"min"==t&&(t=0),e=e||600,this.translate(t,e),this.page[this.sp]=t},translate:function(t,e){this.scrollX?this.refBody.style.transform="translate(".concat(t,"px,0)"):this.refBody.style.transform="translate(0,".concat(t,"px)"),this.refBody.style.transitionDuration="".concat(e,"ms"),this.refBody.style.transitionTimingFunction="cubic-bezier(".concat(this.cubicBezier,")")},getTranslate:function(){var t=this.scrollX?4:5,e=window.getComputedStyle(this.refBody).transform;return e=parseInt(100*parseFloat(e.substring(7).split(",")[t]))/100,e},_translateUpper:function(t){this.refUpper.style.opacity=(100-t/this.upper*100)/100,this.scrollX?this.refUpper.style.transform="translate(-".concat(t,"px,0)"):this.refUpper.style.transform="translate(0,-".concat(t,"px)")},_translateLower:function(t){this.refLower.style.opacity=(100-t/this.lower*100)/100,this.scrollX?this.refLower.style.transform="translate(".concat(t,"px,0)"):this.refLower.style.transform="translate(0,".concat(t,"px)")}}}),p=l,c=(s("033f"),s("2877")),f=Object(c["a"])(p,h,n,!1,null,"6a547ea2",null),u=f.exports,d={components:{PageView:o["a"],ScrollView:u},data:function(){return{indexData:{scroll:null},lists:[0,1,2,3,4,5,6,7,8,9]}},computed:{mode:function(){return this.$store.state.mode}},mounted:function(){},methods:{back:function(t){if("left"==t)return Object(a["a"])(this,1)}}},m=d,y=(s("1581"),Object(c["a"])(m,i,r,!1,null,"462892ef",null));e["default"]=y.exports}}]);