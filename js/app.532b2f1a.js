(function(){"use strict";var t={3091:function(t,e,n){var o=n(9242),r=n(3396);function i(t,e,n,o,i,l){const s=(0,r.up)("back-ground"),c=(0,r.up)("page-home"),u=(0,r.up)("page-description"),a=(0,r.up)("page-footer");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(s),(0,r.Wm)(c,{title:i.title,subTitle:i.subTitle,links:i.links},null,8,["title","subTitle","links"]),(0,r.Wm)(u,{description:i.description},null,8,["description"]),(0,r.Wm)(a,{footerContent:i.footerContent},null,8,["footerContent"])],64)}var l=n(7139),s=n.p+"img/logo.7a589872.png";const c=t=>((0,r.dD)("data-v-30546736"),t=t(),(0,r.Cn)(),t),u={id:"p-home",class:"flex-column child-center"},a=c((()=>(0,r._)("img",{src:s,alt:"LOGO"},null,-1))),d={class:"middle"},p={class:"links"},f=["href","title"];function h(t,e,n,o,i,s){return(0,r.wg)(),(0,r.iD)("article",u,[a,(0,r._)("h1",d,(0,l.zw)(n.title),1),(0,r._)("span",null,(0,l.zw)(n.subTitle),1),(0,r._)("nav",p,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.links,(t=>((0,r.wg)(),(0,r.iD)("a",{key:t.index,href:t.href,title:t.description},(0,l.zw)(t.name),9,f)))),128))])])}var v={name:"PageHome",props:{title:String,subTitle:String,links:Array}},m=n(89);const w=(0,m.Z)(v,[["render",h],["__scopeId","data-v-30546736"]]);var g=w;const b=t=>((0,r.dD)("data-v-a2360c10"),t=t(),(0,r.Cn)(),t),y={id:"p-desc",class:"hide"},O=b((()=>(0,r._)("h1",null,"关于我",-1))),k={class:"desc-content"};function T(t,e,n,o,i,s){return(0,r.wg)(),(0,r.iD)("article",y,[O,(0,r._)("div",k,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.description,(t=>((0,r.wg)(),(0,r.iD)("p",{key:t.id},(0,l.zw)(t),1)))),128))])])}var _={name:"PageDescription",props:{description:Array},methods:{OnScroll(){this.$el.offsetTop-this.$el.scrollTop<document.documentElement.scrollTop+window.innerHeight-100&&(this.$el.className="shown")}},mounted(){window.addEventListener("scroll",this.OnScroll)},beforeUnmount(){window.removeEventListener("scroll",this.OnScroll)}};const D=(0,m.Z)(_,[["render",T],["__scopeId","data-v-a2360c10"]]);var x=D;const C=["href"];function S(t,e,n,o,i,s){return(0,r.wg)(),(0,r.iD)("footer",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.footerContent,(t=>((0,r.wg)(),(0,r.iD)("a",{href:t.href,key:t.id},(0,l.zw)(t.content),9,C)))),128))])}var E={name:"PageFooter",props:{footerContent:Array}};const P=(0,m.Z)(E,[["render",S],["__scopeId","data-v-08de9b39"]]);var H=P;const j={id:"document-background",class:"document-background"};function B(t,e,n,o,i,s){return(0,r.wg)(),(0,r.iD)("div",j,[(0,r._)("div",{id:"background-overlay",class:"background-overlay",style:(0,l.j5)(i.OverlayStyle)},null,4)])}var L={name:"BackGround",data(){return{OverlayStyle:{opacity:0,position:"fixed",top:0,left:0,height:"100vh",width:"100vw",background:"#000000"},scrollTop:0}},methods:{OnScroll(){this.scrollTop=document.documentElement.scrollTop/window.innerHeight,this.OverlayStyle.opacity=this.scrollTop>.4?.4:this.scrollTop}},mounted(){window.addEventListener("scroll",this.OnScroll)},beforeUnmount(){window.removeEventListener("scroll",this.OnScroll)}};const z=(0,m.Z)(L,[["render",B],["__scopeId","data-v-edde12e8"]]);var F=z,I={name:"App",components:{PageHome:g,PageDescription:x,PageFooter:H,BackGround:F},data(){return{title:"好的，这里是冰轩",subTitle:"只是一只死废物",blurTitle:"shhh... let's not leak our hard work",links:[{index:0,name:"Github",href:"https://github.com/BingXuanOwO",description:"全球最大同性交流网站（bushi）"},{index:1,name:"BiliBili",href:"https://space.bilibili.com/286707275/",description:"一个我也不知道什么时候才会更一期新视频的地方"},{index:2,name:"网易云音乐",href:"https://music.163.com/#/user/home?id=1320983215",description:"网 抑 云 阴 乐（bushi）"}],opacity:0,description:["好的，这里是冰轩，一只14岁的死废物","目前我只会超级垃圾的前端，入门级别的C#，特别烂的视频剪辑和mg动画制作...然后就没了。","接下来嘛...我也不知道该说些什么了xwx","总之...我就是个死废物（）"],footerContent:[{content:"冰轩OwO@2022",href:"https://www.bing-xuan.xyz"},{content:"Powered by Vue"}]}},methods:{onFocus(){document.title=this.title},onBlur(){document.title=this.blurTitle}},mounted(){document.title=this.title,""!=this.blurTitle&&window.addEventListener("blur",this.onBlur),window.addEventListener("focus",this.onFocus)}};setInterval((()=>{}),100);const Z=(0,m.Z)(I,[["render",i]]);var A=Z;(0,o.ri)(A).mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var l=1/0;for(a=0;a<t.length;a++){o=t[a][0],r=t[a][1],i=t[a][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||l>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(s=!1,i<l&&(l=i));if(s){t.splice(a--,1);var u=r();void 0!==u&&(e=u)}}return e}i=i||0;for(var a=t.length;a>0&&t[a-1][2]>i;a--)t[a]=t[a-1];t[a]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p=""}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,l=o[0],s=o[1],c=o[2],u=0;if(l.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var a=c(n)}for(e&&e(o);u<l.length;u++)i=l[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(a)},o=self["webpackChunkuntitled3"]=self["webpackChunkuntitled3"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3091)}));o=n.O(o)})();
//# sourceMappingURL=app.532b2f1a.js.map