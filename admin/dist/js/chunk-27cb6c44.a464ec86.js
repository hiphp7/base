(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27cb6c44"],{"0c0b":function(t,e,a){},2567:function(t,e,a){"use strict";a("cdb7")},3950:function(t,e,a){"use strict";var i=a("7a23"),n=Object(i["H"])("data-v-20e34bb0");Object(i["t"])("data-v-20e34bb0");var r={ref:"form"};Object(i["r"])();var u=n((function(t,e,a,n,u,c){return Object(i["q"])(),Object(i["e"])("div",r,[Object(i["x"])(t.$slots,"default")],512)})),c={name:"Form",props:{labelWidth:{type:String,default:"90px"},labelHeight:{type:String,default:"40px"}},mounted:function(){this.init()},methods:{init:function(){for(var t=this.$refs.form,e=t.getElementsByTagName("label"),a=t.getElementsByClassName("wm-form_item_body"),i=0;i<e.length;i++)e[i].style.width=this.labelWidth,a[i].style.marginLeft=this.labelWidth,e[i].style.height=this.labelHeight}}};a("2567");c.render=u,c.__scopeId="data-v-20e34bb0";e["a"]=c},4007:function(t,e,a){"use strict";a("770c")},"53cb":function(t,e,a){"use strict";a("e8ee")},"5f2a":function(t,e,a){"use strict";a.r(e);var i=a("7a23"),n=Object(i["H"])("data-v-00cdf5d2");Object(i["t"])("data-v-00cdf5d2");var r=Object(i["g"])("保存设置");Object(i["r"])();var u=n((function(t,e,a,u,c,o){var l=Object(i["y"])("wm-img"),d=Object(i["y"])("wm-img-upload"),h=Object(i["y"])("wm-form-item"),s=Object(i["y"])("wm-input"),f=Object(i["y"])("wm-button"),m=Object(i["y"])("wm-form"),g=Object(i["y"])("wm-main");return Object(i["q"])(),Object(i["e"])(g,null,{default:n((function(){return[Object(i["h"])(m,{class:"max_width"},{default:n((function(){return[Object(i["h"])(h,{label:"LOGO"},{default:n((function(){return[Object(i["h"])(d,{url:t.upload.url,param:t.upload.param_logo,onUpload:e[1]||(e[1]=function(e){return t.upImg(e,"logo")})},{default:n((function(){return[Object(i["h"])(l,{width:"80px",height:"80px",radius:"50%",url:t.form.logo},null,8,["url"])]})),_:1},8,["url","param"])]})),_:1}),Object(i["h"])(h,{label:"系统名称"},{default:n((function(){return[Object(i["h"])(s,{value:t.form.title,"onUpdate:value":e[2]||(e[2]=function(e){return t.form.title=e}),maxlength:"32",placeholder:"请输入系统名称"},null,8,["value"])]})),_:1}),Object(i["h"])(h,{label:"网站域名"},{default:n((function(){return[Object(i["h"])(s,{value:t.form.http,"onUpdate:value":e[3]||(e[3]=function(e){return t.form.http=e}),maxlength:"16",placeholder:"例如: https://webmis.vip"},null,8,["value"])]})),_:1}),Object(i["h"])(h,{label:"版权信息"},{default:n((function(){return[Object(i["h"])(s,{value:t.form.copy,"onUpdate:value":e[4]||(e[4]=function(e){return t.form.copy=e}),maxlength:"64",placeholder:"请输入版权信息"},null,8,["value"])]})),_:1}),Object(i["h"])(h,{label:"登录背景"},{default:n((function(){return[Object(i["h"])(d,{width:0,height:0,url:t.upload.url,param:t.upload.param_login_bg,onUpload:e[5]||(e[5]=function(e){return t.upImg(e,"login_bg")})},{default:n((function(){return[Object(i["h"])(l,{width:"80px",height:"80px",radius:"4px",url:t.form.login_bg},null,8,["url"])]})),_:1},8,["url","param"])]})),_:1}),Object(i["h"])(h,{type:"botton"},{default:n((function(){return[Object(i["h"])(f,{onClick:e[6]||(e[6]=function(e){return t.onSubmit()})},{default:n((function(){return[r]})),_:1})]})),_:1})]})),_:1})]})),_:1})})),c=a("919a"),o=a("e563"),l=a("8a2a"),d=a("775b"),h=a("b288"),s=a("3950"),f=a("d4fc"),m=a("edb5"),g=a("903b"),b=a("947a"),p=a("61ae"),j={components:{wmMain:h["a"],wmForm:s["a"],wmFormItem:f["a"],wmInput:m["a"],wmButton:g["a"],wmImg:b["a"],wmImgUpload:p["a"]},data:function(){return{store:this.$store.state,form:{logo:"",title:"",http:"",copy:"",login_bg:""},upload:{url:"Sysconfig/upImg",param_logo:{type:"logo",token:d["a"].getItem("token")},param_login_bg:{type:"login_bg",token:d["a"].getItem("token")}}}},activated:function(){this.store.action.url="",this.store.action.menus="",d["a"].getItem("token")&&this.loadData()},methods:{loadData:function(){var t=this,e=Object(c["a"])();Object(l["a"])("Sysconfig/list",{token:d["a"].getItem("token")},(function(a){e.clear();var i=a.data;if(0!=i.code)return Object(o["a"])(i.msg);t.form=i.list}))},onSubmit:function(){var t=JSON.stringify(this.form),e=Object(c["a"])();Object(l["a"])("Sysconfig/edit",{token:d["a"].getItem("token"),data:t},(function(t){e.clear();var a=t.data;return Object(o["a"])(a.msg)}))},upImg:function(t,e){return 0==t.code&&(this.form[e]=t.img),Object(o["a"])(t.msg)}}};a("7a1e");j.render=u,j.__scopeId="data-v-00cdf5d2";e["default"]=j},"61ae":function(t,e,a){"use strict";var i=a("7a23"),n=Object(i["H"])("data-v-c06ef478"),r=n((function(t,e,a,n,r,u){return Object(i["q"])(),Object(i["e"])("div",{class:"wm-upload",onClick:e[1]||(e[1]=function(t){return u.upImage()}),title:a.title},[Object(i["x"])(t.$slots,"default")],8,["title"])})),u=(a("a9e3"),a("919a")),c=a("e563"),o=a("8a2a"),l=function(t,e){try{var a=plus.camera.getCamera();a.captureImage((function(e){plus.io.resolveLocalFileSystemURL(e,(function(e){e.file((function(e){t(e)}))}),(function(t){return Object(c["a"])("读取拍照失败!")}))}),e)}catch(n){var i=document.createElement("input");i.setAttribute("type","file"),i.setAttribute("style","display: none"),document.body.appendChild(i),i.click(),i.onchange=function(){t(i.files[0])}}},d=function(t,e,a){var i=e.width||0,n=e.height||0,r=e.cut||!0,u=e.quality||.8,c=e.ext||"jpg",o={jpg:"image/jpeg",png:"image/png",gif:"image/gif"},l=1,d=1,h=0,s=0,f=1,m=l/d,g=document.createElement("canvas"),b=g.getContext("2d"),p=new Image;p.src=t,p.onload=function(){m=this.width/this.height,i>0&&0==n?(l=i<this.width?i:this.width,d=i<this.width?Math.round(i/m):Math.round(this.width/m),i=l,n=d):0==i&&n>0?(l=n<this.height?Math.round(n*m):Math.round(this.height*m),d=n<this.height?n:this.height,i=l,n=d):0==i&&0==n?(l=this.width,d=this.height,i=l,n=d):(f=i/n,m>f?i<this.width?(l=r?Math.round(n*m):i,d=r?n:Math.round(i/m)):(l=r?Math.round(this.height*m):this.width,d=r?this.height:Math.round(this.width/m)):n<this.height?(l=r?i:Math.round(n*m),d=r?Math.round(i/m):n):(l=r?this.width:Math.round(this.height*m),d=r?Math.round(this.width/m):this.height)),g.width=i,g.height=n,h=Math.round(i-l)/2,s=Math.round(n-d)/2,b.drawImage(this,h,s,l,d);var t=g.toDataURL(o[c],u);a(t)}},h=function(t,e,a){try{var i=new plus.io.FileReader;i.readAsDataURL(t),i.onloadend=function(){e.ext||("image/jpeg"==t.type?e.ext="jpg":"image/png"==t.type?e.ext="png":"image/gif"==t.type&&(e.ext="gif")),d(this.result,e,a)}}catch(r){var n=new FileReader;n.readAsDataURL(t),n.onloadend=function(){e.ext||("image/jpeg"==t.type?e.ext="jpg":"image/png"==t.type?e.ext="png":"image/gif"==t.type&&(e.ext="gif")),d(this.result,e,a)}}},s={name:"ImgUpLoad",props:{url:{type:String,default:""},width:{type:Number,default:200},height:{type:Number,default:200},param:{type:Object,default:{}},title:{type:String,default:"上传图片"}},methods:{upImage:function(){var t=this;l((function(e){h(e,{width:t.width,height:t.height},(function(e){if(!t.url)return Object(c["a"])("上传Url地址为空!");var a=Object(u["a"])();t.param.base64=e,Object(o["a"])(t.url,t.param,(function(e){a.clear();var i=e.data;return t.$emit("upload",i),Object(c["a"])(i.msg)}))}))}))}}};a("53cb");s.render=r,s.__scopeId="data-v-c06ef478";e["a"]=s},"770c":function(t,e,a){},"7a1e":function(t,e,a){"use strict";a("0c0b")},9148:function(t,e,a){"use strict";a("e518")},"947a":function(t,e,a){"use strict";var i=a("7a23"),n=Object(i["H"])("data-v-405bb3cc");Object(i["t"])("data-v-405bb3cc");var r={key:1,class:"wm-img_null"};Object(i["r"])();var u=n((function(t,e,a,n,u,c){return Object(i["q"])(),Object(i["e"])("div",{ref:"img",class:"wm-img",title:a.title},[a.url?(Object(i["q"])(),Object(i["e"])("div",{key:0,style:{backgroundImage:"url("+a.url+")",backgroundSize:a.size}},null,4)):(Object(i["q"])(),Object(i["e"])("div",r,[Object(i["h"])("i",{class:"ui ui_img",style:{fontSize:a.icoSize}},null,4)]))],8,["title"])})),c={name:"Img",props:{url:{type:String,default:""},size:{type:String,default:"cover"},width:{type:String,default:"90px"},height:{type:String,default:"40px"},radius:{type:String,default:"0px"},title:{type:String,default:""},icoSize:{type:String,default:"32px"}},mounted:function(){var t=this.$refs.img.style;t.width=this.width,t.height=this.height,t.lineHeight=this.height,t.borderRadius=this.radius}};a("4007");c.render=u,c.__scopeId="data-v-405bb3cc";e["a"]=c},ad38:function(t,e,a){"use strict";a("fc9a")},b288:function(t,e,a){"use strict";var i=a("7a23"),n=Object(i["H"])("data-v-5bde2f15"),r=n((function(t,e,a,n,r,u){return Object(i["q"])(),Object(i["e"])("div",{class:"wm-main wm-main_y",style:{width:"calc(100% - "+2*a.padding+"px)",height:"calc(100% - "+2*a.padding+"px)",padding:a.padding+"px"}},[Object(i["x"])(t.$slots,"default")],4)})),u=(a("a9e3"),{name:"Main",props:{padding:{type:Number,default:16}}});a("9148");u.render=r,u.__scopeId="data-v-5bde2f15";e["a"]=u},cdb7:function(t,e,a){},d4fc:function(t,e,a){"use strict";var i=a("7a23"),n=Object(i["H"])("data-v-2163d51c");Object(i["t"])("data-v-2163d51c");var r={class:"wm-form_item_label"},u={class:"wm-form_item_body"};Object(i["r"])();var c=n((function(t,e,a,n,c,o){return Object(i["q"])(),Object(i["e"])("div",{class:"wm-form_item",style:{margin:c.margin}},[Object(i["h"])("label",r,Object(i["B"])(a.label),1),Object(i["h"])("div",u,[Object(i["x"])(t.$slots,"default")])],4)})),o={name:"FormItem",props:{type:{type:String,default:"label"},label:{type:String,default:""}},data:function(){return{margin:""}},mounted:function(){"label"==this.type?this.margin="8px 0":"botton"==this.type&&(this.margin="24px 0")}};a("ad38");o.render=c,o.__scopeId="data-v-2163d51c";e["a"]=o},e518:function(t,e,a){},e8ee:function(t,e,a){},fc9a:function(t,e,a){}}]);