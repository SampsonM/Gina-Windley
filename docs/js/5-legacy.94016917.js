"use strict";(self["webpackChunkgin_win"]=self["webpackChunkgin_win"]||[]).push([[5],{1817:function(e,t,i){var s=i(2109),l=i(9781),n=i(7854),o=i(1702),r=i(2597),a=i(614),d=i(7976),u=i(1340),h=i(3070).f,c=i(9920),p=n.Symbol,f=p&&p.prototype;if(l&&a(p)&&(!("description"in f)||void 0!==p().description)){var g={},v=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:u(arguments[0]),t=d(f,this)?new p(e):void 0===e?p():p(e);return""===e&&(g[t]=!0),t};c(v,p),v.prototype=f,f.constructor=v;var m="Symbol(test)"==String(p("test")),S=o(f.valueOf),y=o(f.toString),b=/^Symbol\((.*)\)[^)]+$/,w=o("".replace),k=o("".slice);h(f,"description",{configurable:!0,get:function(){var e=S(this);if(r(g,e))return"";var t=y(e),i=m?k(t,7,-1):w(t,b,"$1");return""===i?void 0:i}}),s({global:!0,constructor:!0,forced:!0},{Symbol:v})}},3005:function(e,t,i){i.r(t),i.d(t,{default:function(){return ee}});var s=i(6252),l=function(e){return(0,s.dD)("data-v-085e82a1"),e=e(),(0,s.Cn)(),e},n={class:"projects"},o={key:1,class:"no-slider-image"},r=l((function(){return(0,s._)("div",{class:"text-box"},null,-1)}));function a(e,t,i,l,a,d){var u=(0,s.up)("VueperSlide"),h=(0,s.up)("VueperSlides"),c=(0,s.Q2)("lazy");return(0,s.wg)(),(0,s.iD)("div",n,[d.images.length>1?((0,s.wg)(),(0,s.j4)(h,{key:0,class:"projects__slides",speed:"10000",autoplay:!0,touchable:!0,"slide-ratio":.3},{default:(0,s.w5)((function(){return[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(d.images,(function(e,t){return(0,s.wy)(((0,s.wg)(),(0,s.j4)(u,{class:"vueperslide",key:t})),[[c,d.imageURL(e),"background-image"]])})),128))]})),_:1},8,["slide-ratio"])):(0,s.wy)(((0,s.wg)(),(0,s.iD)("div",o,null,512)),[[c,d.imageURL(d.images[0]),"background-image"]]),r])}var d=i(4648),u=(i(2526),i(1817),i(3907)),h=i(3577),c=i(9963);const p=["src"],f=["src"],g=["src"],v=["src"],m=["src"],S={key:2},y={class:"vueperslide__content-wrapper"},b=["innerHTML"],w=["innerHTML"],k={class:"vueperslide__content-wrapper"},_=["innerHTML"],x=["innerHTML"],C={key:4,class:"vueperslide__loader"};function D(e,t,i,l,n,o){return(0,s.wg)(),(0,s.j4)((0,s.LL)(i.link?"a":"div"),{class:(0,h.C_)(["vueperslide",o.slideClasses]),href:!(!i.link||o.justDragged)&&i.link,target:i.link&&i.openInNew?"boolean"==typeof i.openInNew?"_blank":i.openInNew:"_self",face:o.slideFace3d,style:(0,h.j5)(o.slideStyles),"aria-hidden":o.slides.activeId===e._.uid||o.isSlideVisible?"false":"true",onMouseenter:t[0]||(t[0]=t=>e.$emit("mouse-enter",{slideIndex:o.slideIndex,title:i.title,content:i.content,image:i.image,link:i.link},e.$el)),onMouseleave:t[1]||(t[1]=t=>e.$emit("mouse-leave"))},{default:(0,s.w5)((()=>[o.videoObj?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[o.videoObj.webm||o.videoObj.mp4?((0,s.wg)(),(0,s.iD)("video",(0,s.dG)({key:0,class:"vueperslide__video",width:"100%",height:"100%"},o.videoObj.props||{}),[o.videoObj.webm?((0,s.wg)(),(0,s.iD)("source",{key:0,src:o.videoObj.webm,type:"video/webm"},null,8,p)):(0,s.kq)("",!0),o.videoObj.mp4?((0,s.wg)(),(0,s.iD)("source",{key:1,src:o.videoObj.mp4,type:"video/mp4"},null,8,f)):(0,s.kq)("",!0),o.videoObj.ogv?((0,s.wg)(),(0,s.iD)("source",{key:2,src:o.videoObj.ogv,type:"video/ogg"},null,8,g)):(0,s.kq)("",!0),o.videoObj.avi?((0,s.wg)(),(0,s.iD)("source",{key:3,src:o.videoObj.avi,type:"video/avi"},null,8,v)):(0,s.kq)("",!0),(0,s.Uk)((0,h.zw)(o.videoObj.alt||"Sorry, your browser doesn't support embedded videos."),1)],16)):o.videoObj.url?((0,s.wg)(),(0,s.iD)("iframe",(0,s.dG)({key:1,class:"vueperslide__video",src:o.videoObj.url,type:"text/html",frameborder:"0",width:"100%",height:"100%"},o.videoObj.props||{}),null,16,m)):(0,s.kq)("",!0)],64)):(0,s.kq)("",!0),e.imageSrc&&o.conf.slideImageInside?((0,s.wg)(),(0,s.iD)("div",{key:1,class:"vueperslide__image",style:(0,h.j5)(o.imageStyles)},null,4)):(0,s.kq)("",!0),o.conf.slideContentOutside?(0,s.wy)(((0,s.wg)(),(0,s.iD)("div",S,[(0,s.WI)(e.$slots,"content",{},(()=>[(0,s._)("div",y,[i.title?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"vueperslide__title",innerHTML:i.title},null,8,b)):(0,s.kq)("",!0),i.content?((0,s.wg)(),(0,s.iD)("div",{key:1,class:"vueperslide__content",innerHTML:i.content},null,8,w)):(0,s.kq)("",!0)])]))],512)),[[c.F8,!1]]):(0,s.WI)(e.$slots,"content",{key:3},(()=>[(0,s._)("div",k,[i.title?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"vueperslide__title",innerHTML:i.title},null,8,_)):(0,s.kq)("",!0),i.content?((0,s.wg)(),(0,s.iD)("div",{key:1,class:"vueperslide__content",innerHTML:i.content},null,8,x)):(0,s.kq)("",!0)])])),o.conf.lazy&&!e.loaded?((0,s.wg)(),(0,s.iD)("div",C,[(0,s.WI)(e.$slots,"loader")])):(0,s.kq)("",!0)])),_:3},40,["href","target","class","face","style","aria-hidden"])}const T=(e,t)=>{const i=e.__vccOpts||e;for(const[s,l]of t)i[s]=l;return i},O={inject:["slides","touch","updateSlide","addClone","addSlide","removeSlide"],props:{clone:{type:Boolean},image:{type:String,default:""},video:{type:[String,Object],default:""},title:{type:String,default:""},content:{type:String,default:""},link:{type:String,default:""},duration:{type:Number,default:0},lazyloaded:{type:Boolean},openInNew:{type:[Boolean,String]}},emits:["mouse-enter","mouse-leave"],data:()=>({imageSrc:"",loading:!1,loaded:!1}),computed:{conf(){return this.$parent.conf},slideClasses(){return{"vueperslide--active":this.slides.activeId===this._.uid,"vueperslide--previous-slide":this.isPreviousSlide,"vueperslide--next-slide":this.isNextSlide,"vueperslide--visible":this.isSlideVisible,"vueperslide--loading":this.conf.lazy&&!this.loaded,"vueperslide--has-video":this.videoObj,"vueperslide--has-image-inside":this.conf.slideImageInside,"vueperslide--no-pointer-events":this.videoObj&&!1===this.videoObj.pointerEvents}},slideStyles(){const{visibleSlides:e,fade:t,slideImageInside:i,gap:s,gapPx:l}=this.conf;return{...!i&&this.imageSrc&&{backgroundImage:`url("${this.imageSrc}")`},...e>1&&{width:(100-(s?s*(e-1):0))/e+"%"},...e>1&&t&&{[this.conf.rtl?"right":"left"]:this.slideIndex%e/e*100+"%"},...s&&{[this.conf.rtl?"marginLeft":"marginRight"]:s+(l?"px":"%")}}},videoObj(){if(!this.video)return null;let e={url:"",alt:"",props:{controls:!0}};return"object"==typeof this.video?e=Object.assign(e,this.video):"string"==typeof this.video&&(e.url=this.video),e},youtubeVideo(){return/youtube\.|youtu\.be/.test(this.videoObj.url)},imageStyles(){return{...this.conf.slideImageInside&&this.imageSrc&&{backgroundImage:`url("${this.imageSrc}")`}}},slideFace3d(){if(!this.conf["3d"])return!1;const e=["front","right","back","left"],t=(this.slides.current-1+this.slidesCount)%this.slidesCount,i=(this.slides.current+1)%this.slidesCount;let s="front";return this.slideIndex===t?s=e[(4+this.slides.current-1)%4]:this.slideIndex===i&&(s=e[(this.slides.current+1)%4]),s=e[this.slideIndex%4],this.conf.rtl&&"left"===s?s="right":this.conf.rtl&&"right"===s&&(s="left"),s},isPreviousSlide(){if(!this.conf["3d"])return!1;const e=(this.slides.current-1+this.slidesCount)%this.slidesCount;return this._.uid===this.slides.list[e].id},isNextSlide(){if(!this.conf["3d"])return!1;const e=(this.slides.current+1)%this.slidesCount;return this._.uid===this.slides.list[e].id},isSlideVisible(){return this.slideIndex>=this.slides.firstVisible&&this.slideIndex<this.slides.firstVisible+this.conf.visibleSlides},slidesList(){return this.slides.list.map((e=>e.id))},slidesCount(){return this.slidesList.length},slideIndex(){return this.slidesList.indexOf(this._.uid)},justDragged(){return this.touch.justDragged}},methods:{updateThisSlide(e){this.updateSlide(this._.uid,e)},loadImage(){if(!this.loading&&!this.loaded)return this.loading=!0,new Promise(((e,t)=>{const i=document.createElement("img");i.onload=()=>{this.imageSrc=this.image,this.loading=!1,this.loaded=!0,this.$nextTick((()=>{e({image:this.imageSrc,style:((this.$el.attributes||{}).style||{}).value})}))},i.onerror=(this.loading=!1)||t,i.src=this.image}))},playVideo(){!this.videoObj||(this.videoObj.url?this.$el.querySelector("iframe").contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"):this.$el.querySelector("video").play())},pauseVideo(){!this.videoObj||(this.videoObj.url?this.$el.querySelector("iframe").contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*"):this.$el.querySelector("video").pause())}},created(){if(this.imageSrc=this.conf.lazy?"":this.image,this.clone)return this.addClone();this.addSlide({id:this._.uid,image:this.imageSrc,video:this.videoObj&&{...this.videoObj,play:this.playVideo,pause:this.pauseVideo},title:this.title,content:this.content,contentSlot:this.$slots.content,loaderSlot:this.$slots.loader,link:this.link,style:"",loadImage:this.loadImage,duration:this.duration})},mounted(){this.clone||this.updateThisSlide({contentSlot:this.$slots.content,loaderSlot:this.$slots.loader,style:((this.$el.attributes||{}).style||{}).value})},beforeUnmount(){this.clone||this.removeSlide(this._.uid)},watch:{image(){this.imageSrc=this.conf.lazy&&!this.isSlideVisible?"":this.image,this.clone||this.updateThisSlide({image:this.imageSrc,...!this.conf.slideImageInside&&{style:this.slideStyles}})},title(){this.clone||this.updateThisSlide({title:this.title})},content(){this.clone||this.updateThisSlide({content:this.content})},link(){this.clone||this.updateThisSlide({link:this.link})},lazyloaded(){this.clone&&(this.loaded=this.lazyloaded)}}},I=T(O,[["render",D]]),M=["innerHTML"],j=["innerHTML"],P={class:"vueperslides__inner"},L={key:0,class:"vueperslides__paused"},$={key:1,class:"vueperslides__progress"},E={key:2,class:"vueperslides__fractions"},B={viewBox:"0 0 9 18"},H=["d"],q={viewBox:"0 0 9 18"},z=["d"],N={key:4,class:"vueperslides__bullets",ref:"bullets",role:"tablist","aria-label":"Slideshow navigation"},V=["aria-label","onClick"],R={class:"default"},W={key:1,class:"vueperslides__bullets vueperslides__bullets--outside",ref:"bullets",role:"tablist","aria-label":"Slideshow navigation"},A=["aria-label","onClick"],X={class:"default"},Y=["innerHTML"],U=["innerHTML"];function F(e,t,i,l,n,o){const r=(0,s.up)("vnodes"),a=(0,s.up)("vueper-slide");return(0,s.wg)(),(0,s.iD)("div",{class:(0,h.C_)(["vueperslides",o.vueperslidesClasses]),ref:"vueperslides","aria-label":"Slideshow",style:(0,h.j5)(o.vueperslidesStyles)},[o.slidesCount&&"top"===o.conf.slideContentOutside?((0,s.wg)(),(0,s.iD)("div",{key:0,class:(0,h.C_)(["vueperslide__content-wrapper vueperslide__content-wrapper--outside-top",o.conf.slideContentOutsideClass])},[o.currentSlide.contentSlot?((0,s.wg)(),(0,s.j4)(r,{key:0,vnodes:o.currentSlide.contentSlot()},null,8,["vnodes"])):((0,s.wg)(),(0,s.iD)(s.HY,{key:1},[o.currentSlide.title?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"vueperslide__title",innerHTML:o.currentSlide.title},null,8,M)):(0,s.kq)("",!0),o.currentSlide.content?((0,s.wg)(),(0,s.iD)("div",{key:1,class:"vueperslide__content",innerHTML:o.currentSlide.content},null,8,j)):(0,s.kq)("",!0)],64))],2)):(0,s.kq)("",!0),(0,s._)("div",P,[(0,s._)("div",{class:"vueperslides__parallax-wrapper",style:(0,h.j5)(`padding-bottom: ${100*o.conf.slideRatio}%`),"aria-live":"polite"},[(0,s._)("div",{class:(0,h.C_)(["vueperslides__track",{"vueperslides__track--dragging":e.touch.dragging,"vueperslides__track--mousedown":e.mouseDown}]),ref:"track",style:(0,h.j5)(o.trackStyles)},[(0,s._)("div",{class:"vueperslides__track-inner",style:(0,h.j5)(o.trackInnerStyles)},[(0,s.WI)(e.$slots,"default"),e.isReady&&o.conf.infinite&&o.canSlide&&o.lastSlide?((0,s.wg)(),(0,s.j4)(a,{key:0,class:"vueperslide--clone vueperslide--clone-1",clone:"",title:o.lastSlide.title,content:o.lastSlide.content,image:o.lastSlide.image,link:o.lastSlide.link,style:(0,h.j5)(o.lastSlide.style),lazyloaded:o.lastSlide.loaded,"aria-hidden":"true"},(0,s.Nv)({_:2},[o.lastSlide.contentSlot?{name:"content",fn:(0,s.w5)((()=>[(0,s.Wm)(r,{vnodes:o.lastSlide.contentSlot()},null,8,["vnodes"])])),key:"0"}:void 0,o.conf.lazy&&!o.lastSlide.loaded&&o.lastSlide.loaderSlot?{name:"loader",fn:(0,s.w5)((()=>[(0,s.Wm)(r,{vnodes:o.lastSlide.loaderSlot()},null,8,["vnodes"])])),key:"1"}:void 0]),1032,["title","content","image","link","style","lazyloaded"])):(0,s.kq)("",!0),e.isReady&&o.conf.infinite&&o.canSlide&&o.firstSlide?((0,s.wg)(),(0,s.j4)(a,{key:1,class:"vueperslide--clone vueperslide--clone-2",clone:"",title:o.firstSlide.title,content:o.firstSlide.content,image:o.firstSlide.image,link:o.firstSlide.link,style:(0,h.j5)(o.firstSlide.style),lazyloaded:o.firstSlide.loaded,"aria-hidden":"true"},(0,s.Nv)({_:2},[o.firstSlide.contentSlot?{name:"content",fn:(0,s.w5)((()=>[(0,s.Wm)(r,{vnodes:o.firstSlide.contentSlot()},null,8,["vnodes"])])),key:"0"}:void 0,o.conf.lazy&&!o.firstSlide.loaded&&o.firstSlide.loaderSlot?{name:"loader",fn:(0,s.w5)((()=>[(0,s.Wm)(r,{vnodes:o.firstSlide.loaderSlot()},null,8,["vnodes"])])),key:"1"}:void 0]),1032,["title","content","image","link","style","lazyloaded"])):(0,s.kq)("",!0)],4)],6)],4),(o.conf.pauseOnHover||o.conf.pauseOnTouch)&&e.$slots.pause?((0,s.wg)(),(0,s.iD)("div",L,[(0,s.WI)(e.$slots,"pause")])):(0,s.kq)("",!0),o.conf.progress?((0,s.wg)(),(0,s.iD)("div",$,[(0,s.WI)(e.$slots,"progress",{current:e.slides.current+1,total:o.slidesCount},(()=>[(0,s._)("div",{style:(0,h.j5)(`width: ${100*(e.slides.current+1)/o.slidesCount}%`)},null,4)]))])):(0,s.kq)("",!0),o.conf.fractions?((0,s.wg)(),(0,s.iD)("div",E,[(0,s.WI)(e.$slots,"fraction",{current:e.slides.current+1,total:o.slidesCount},(()=>[(0,s.Uk)((0,h.zw)(`${e.slides.current+1} / ${o.slidesCount}`),1)]))])):(0,s.kq)("",!0),o.conf.arrows&&o.canSlide&&!i.disable?((0,s.wg)(),(0,s.iD)("div",{key:3,class:(0,h.C_)(["vueperslides__arrows",{"vueperslides__arrows--outside":o.conf.arrowsOutside}])},[(0,s.wy)((0,s._)("button",{class:"vueperslides__arrow vueperslides__arrow--prev",type:"button",onClick:t[0]||(t[0]=e=>o.previous()),"aria-label":"Previous",onKeyup:[t[1]||(t[1]=(0,c.D2)((e=>o.conf.rtl?o.next():o.previous()),["left"])),t[2]||(t[2]=(0,c.D2)((e=>o.conf.rtl?o.previous():o.next()),["right"]))]},[(0,s.WI)(e.$slots,"arrow-"+(o.conf.rtl?"right":"left"),{},(()=>[((0,s.wg)(),(0,s.iD)("svg",B,[(0,s._)("path",{"stroke-linecap":"round",d:o.conf.rtl?"m1 1 l7 8 -7 8":"m8 1 l-7 8 7 8"},null,8,H)]))]))],544),[[c.F8,!o.arrowPrevDisabled]]),(0,s.wy)((0,s._)("button",{class:"vueperslides__arrow vueperslides__arrow--next",type:"button",onClick:t[3]||(t[3]=e=>o.next()),"aria-label":"Next",onKeyup:[t[4]||(t[4]=(0,c.D2)((e=>o.conf.rtl?o.next():o.previous()),["left"])),t[5]||(t[5]=(0,c.D2)((e=>o.conf.rtl?o.previous():o.next()),["right"]))]},[(0,s.WI)(e.$slots,"arrow-"+(o.conf.rtl?"left":"right"),{},(()=>[((0,s.wg)(),(0,s.iD)("svg",q,[(0,s._)("path",{"stroke-linecap":"round",d:o.conf.rtl?"m8 1 l-7 8 7 8":"m1 1 l7 8 -7 8"},null,8,z)]))]))],544),[[c.F8,!o.arrowNextDisabled]])],2)):(0,s.kq)("",!0),o.conf.bullets&&o.canSlide&&!i.disable&&!o.conf.bulletsOutside?((0,s.wg)(),(0,s.iD)("div",N,[(0,s.WI)(e.$slots,"bullets",{currentSlide:e.slides.current,bulletIndexes:o.bulletIndexes,goToSlide:o.goToSlide,previous:o.previous,next:o.next},(()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.bulletIndexes,((i,l)=>((0,s.wg)(),(0,s.iD)("button",{class:(0,h.C_)(["vueperslides__bullet",{"vueperslides__bullet--active":e.slides.current===i}]),type:"button",key:l,role:"tab","aria-label":`Slide ${l+1}`,onClick:e=>o.goToSlide(i),onKeyup:[t[6]||(t[6]=(0,c.D2)((e=>o.conf.rtl?o.next():o.previous()),["left"])),t[7]||(t[7]=(0,c.D2)((e=>o.conf.rtl?o.previous():o.next()),["right"]))]},[(0,s.WI)(e.$slots,"bullet",{active:e.slides.current===i,slideIndex:i,index:l+1},(()=>[(0,s._)("div",R,[(0,s._)("span",null,(0,h.zw)(l+1),1)])]))],42,V)))),128))]))],512)):(0,s.kq)("",!0)]),o.conf.bullets&&o.canSlide&&!i.disable&&o.conf.bulletsOutside?((0,s.wg)(),(0,s.iD)("div",W,[(0,s.WI)(e.$slots,"bullets",{currentSlide:e.slides.current,bulletIndexes:o.bulletIndexes,goToSlide:o.goToSlide,previous:o.previous,next:o.next},(()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.bulletIndexes,((i,l)=>((0,s.wg)(),(0,s.iD)("button",{class:(0,h.C_)(["vueperslides__bullet",{"vueperslides__bullet--active":e.slides.current===i}]),type:"button",key:l,role:"tab","aria-label":`Slide ${l+1}`,onClick:e=>o.goToSlide(i),onKeyup:[t[8]||(t[8]=(0,c.D2)((e=>o.conf.rtl?o.next():o.previous()),["left"])),t[9]||(t[9]=(0,c.D2)((e=>o.conf.rtl?o.previous():o.next()),["right"]))]},[(0,s.WI)(e.$slots,"bullet",{active:e.slides.current===i,slideIndex:i,index:l+1},(()=>[(0,s._)("div",X,[(0,s._)("span",null,(0,h.zw)(l+1),1)])]))],42,A)))),128))]))],512)):(0,s.kq)("",!0),o.slidesCount&&"bottom"===o.conf.slideContentOutside?((0,s.wg)(),(0,s.iD)("div",{key:2,class:(0,h.C_)(["vueperslide__content-wrapper vueperslide__content-wrapper--outside-bottom",o.conf.slideContentOutsideClass])},[o.currentSlide.contentSlot?((0,s.wg)(),(0,s.j4)(r,{key:0,vnodes:o.currentSlide.contentSlot()},null,8,["vnodes"])):((0,s.wg)(),(0,s.iD)(s.HY,{key:1},[o.currentSlide.title?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"vueperslide__title",innerHTML:o.currentSlide.title},null,8,Y)):(0,s.kq)("",!0),o.currentSlide.content?((0,s.wg)(),(0,s.iD)("div",{key:1,class:"vueperslide__content",innerHTML:o.currentSlide.content},null,8,U)):(0,s.kq)("",!0)],64))],2)):(0,s.kq)("",!0)],6)}const K={name:"vueper-slides",components:{VueperSlide:I,vnodes:{render(){return this.$attrs.vnodes}}},provide(){return{conf:this.conf,slides:this.slides,touch:this.touch,updateSlide:this.updateSlide,addClone:this.addClone,addSlide:this.addSlide,removeSlide:this.removeSlide}},props:{alwaysRefreshClones:{type:Boolean,default:!1},arrows:{type:Boolean,default:!0},arrowsOutside:{type:Boolean,default:null},autoplay:{type:Boolean,default:!1},breakpoints:{type:Object,default:()=>({})},bullets:{type:Boolean,default:!0},bulletsOutside:{type:Boolean,default:null},disable:{type:Boolean,default:!1},disableArrowsOnEdges:{type:[Boolean,String],default:!1},draggingDistance:{type:Number,default:null},duration:{type:[Number,String],default:4e3},infinite:{type:Boolean,default:!0},fade:{type:Boolean,default:!1},fixedHeight:{type:[Boolean,String],default:!1},fractions:{type:Boolean,default:!1},gap:{type:Number,default:0},initSlide:{type:Number,default:1},lazy:{type:Boolean,default:!1},lazyLoadOnDrag:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!0},pauseOnTouch:{type:Boolean,default:!0},parallax:{type:[Boolean,Number],default:!1},pageScrollingElement:{type:String,default:""},parallaxFixedContent:{type:Boolean,default:!1},preventYScroll:{type:Boolean,default:!1},progress:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1},slideContentOutside:{type:[Boolean,String],default:!1},slideContentOutsideClass:{type:String,default:""},slideImageInside:{type:Boolean,default:!1},slideMultiple:{type:[Boolean,Number],default:!1},slideRatio:{type:Number,default:1/3},touchable:{type:Boolean,default:!0},transitionSpeed:{type:[Number,String],default:600},visibleSlides:{type:Number,default:1},"3d":{type:Boolean,default:!1}},emits:["ready","next","previous","autoplay-pause","autoplay-resume","before-slide","slide","image-loaded","image-failed"],data:()=>({isReady:!1,isPaused:!1,container:null,slides:{list:[],activeId:null,current:0,focus:0,firstVisible:0},mouseDown:!1,mouseOver:!1,touch:{enabled:!0,dragging:!1,lazyloadTriggered:!1,justDragged:!1,dragStartX:0,dragNowX:0,dragAmount:0},transition:{currentTranslation:0,speed:0,animated:!1},autoplayTimer:null,nextSlideIsClone:!1,breakpointsData:{list:[],current:null},parallaxData:{translation:0,slideshowOffsetTop:null,isVisible:!1}}),computed:{conf(){const e={...this.$props,...this.$props.breakpoints&&this.$props.breakpoints[this.breakpointsData.current]||{}};return e.slideMultiple=e.slideMultiple?e.visibleSlides:1,e.gap=this.gap&&parseInt(this.gap)||0,e.visibleSlides>1&&(e["3d"]=!1),(e.fade||e.disableArrowsOnEdges||e.visibleSlides>1||e["3d"])&&(e.infinite=!1),e.visibleSlides>1&&null===e.arrowsOutside&&(e.arrowsOutside=!0),e.visibleSlides>1&&null===e.bulletsOutside&&(e.bulletsOutside=!0),this.touch.enabled!==e.touchable&&this.toggleTouchableOption(e.touchable),e.parallax&&e.parallaxFixedContent&&(e.slideContentOutside="top",e.slideContentOutsideClass="parallax-fixed-content"),e},slidesCount(){return this.slides.list.length},gapsCount(){const{fade:e,"3d":t,slideMultiple:i,gap:s}=this.conf;if(!s||e||t||this.multipleSlides1by1&&this.slides.current<this.preferredPosition)return 0;if(!this.slides.current&&this.nextSlideIsClone)return this.slidesCount;if(0===this.nextSlideIsClone)return-1;let l=this.slides.current/i-this.preferredPosition;return this.multipleSlides1by1&&this.slidePosAfterPreferred>0&&(l-=this.slidePosAfterPreferred),l},slidesAfterCurrent(){return this.slidesCount-(this.slides.current+1)},preferredPosition(){return this.multipleSlides1by1?Math.ceil(this.conf.visibleSlides/2)-1:0},slidePosAfterPreferred(){return this.conf.visibleSlides-this.preferredPosition-this.slidesAfterCurrent-1},multipleSlides1by1(){return this.conf.visibleSlides>1&&1===this.conf.slideMultiple},touchEnabled:{get(){return this.slidesCount>1&&this.touch.enabled},set(e){this.touch.enabled=e}},canSlide(){return this.slidesCount/this.conf.visibleSlides>1},firstSlide(){const e=this.slidesCount?this.slides.list[0]:{};return e.style&&"string"==typeof e.style&&(e.style=e.style.replace(/width: ?\d+.*?;?/,"")),e},lastSlide(){const e=this.slidesCount?this.slides.list[this.slidesCount-1]:{};return e.style&&"string"==typeof e.style&&(e.style=e.style.replace(/width: ?\d+.*?;?/,"")),e},currentSlide(){const e=this.slidesCount&&this.slides.list[this.slides.current]||{};return this.slides.current<this.slidesCount&&e.id!==this.slides.activeId&&this.goToSlide(this.slides.current,{animation:!1,autoPlaying:!0}),e},vueperslidesClasses(){return{"vueperslides--ready":this.isReady,"vueperslides--rtl":this.conf.rtl,"vueperslides--fade":this.conf.fade,"vueperslides--parallax":this.conf.parallax,"vueperslides--slide-image-inside":this.conf.slideImageInside,"vueperslides--touchable":this.touchEnabled&&!this.disable,"vueperslides--fixed-height":this.conf.fixedHeight,"vueperslides--3d":this.conf["3d"],"vueperslides--slide-multiple":this.conf.slideMultiple>1,"vueperslides--bullets-outside":this.conf.bulletsOutside,"vueperslides--animated":this.transition.animated,"vueperslides--no-animation":!this.isReady}},vueperslidesStyles(){return/^-?\d/.test(this.conf.fixedHeight)?`height: ${this.conf.fixedHeight}`:null},trackStyles(){const e={};return this.conf.parallax&&(e.transform=`translate3d(0, ${this.parallaxData.translation}%, 0)`,e.willChange=this.parallaxData.isVisible?"transform":"auto"),e},trackInnerStyles(){const e={},{fade:t,"3d":i}=this.conf;if(e.transitionDuration=`${this.transition.speed}ms`,i){const t=90*this.transition.currentTranslation/100;e.transform=`rotateY(-90deg) translateX(-50%) rotateY(90deg) rotateY(${t}deg)`}else t||(e.transform=`translate3d(${this.transition.currentTranslation}%, 0, 0)`,e.willChange=this.touch.dragging||this.transition.animated?"transform":"auto");return e},bulletIndexes(){return Array(Math.ceil(this.slidesCount/this.conf.slideMultiple)).fill().map(((e,t)=>t*this.conf.slideMultiple))},arrowPrevDisabled(){return!this.slides.current&&this.conf.disableArrowsOnEdges},arrowNextDisabled(){const{disableArrowsOnEdges:e,visibleSlides:t,slideMultiple:i}=this.conf;return this.slides.current+(i>1&&t>1?t-1:0)===this.slidesCount-1&&e}},methods:{init(){this.container=this.$refs.vueperslides,this.touchEnabled=this.conf.touchable,this.transition.speed=this.conf.transitionSpeed,Object.keys(this.breakpoints).length&&(this.setBreakpointsList(),this.setBreakpointConfig(this.getCurrentBreakpoint()));const e={animation:!1,autoPlaying:this.conf.autoplay};this.goToSlide(this.conf.initSlide-1,e),this.bindEvents(),this.$nextTick((()=>{this.isReady=!0,this.emit("ready")}))},emit(e,t=!0,i=!1){let s=null;if((t||"number"==typeof i)&&(s={},t&&this.slides.activeId&&this.slidesCount&&(s.currentSlide=this.getSlideData(this.slides.current)),"number"==typeof i&&this.slidesCount)){const{nextSlide:e}=this.getSlideInRange(i);s.nextSlide=this.getSlideData(e)}this.$emit(...s?[e,s]:[e])},getSlideData(e){const t=this.slides.list[e];let i={};return t&&(i={index:e,title:t.title,content:t.content,contentSlot:t.contentSlot,image:t.image,link:t.link}),i},setBreakpointsList(){this.breakpointsData.list=[99999,...Object.keys(this.breakpoints)].map((e=>parseInt(e))).sort(((e,t)=>parseInt(t)-parseInt(e)))},getCurrentBreakpoint(){const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,t=[e,...this.breakpointsData.list].sort(((e,t)=>parseInt(t)-parseInt(e)));return this.breakpointsData.list[t.indexOf(e)-1]},hasBreakpointChanged(e){return this.breakpointsData.current!==parseInt(e)},setBreakpointConfig(e){const t=this.breakpoints&&this.breakpoints[e]||{},i=t.slideMultiple&&t.slideMultiple!==this.conf.slideMultiple,s=t.visibleSlides&&t.visibleSlides!==this.conf.visibleSlides;this.breakpointsData.current=e,this.slides.current=this.getFirstVisibleSlide(this.slides.focus),i||s?this.goToSlide(this.slides.current,{breakpointChange:!0}):this.updateTrackTranslation()},bindEvents(){const e="ontouchstart"in window;this.touchEnabled&&this.toggleTouchableOption(!0),this.conf.autoplay&&(this.conf.pauseOnHover&&!e?(this.container.addEventListener("mouseenter",this.onMouseEnter),this.container.addEventListener("mouseleave",this.onMouseLeave)):this.conf.pauseOnTouch&&e&&document.addEventListener("touchstart",(e=>{this[this.$el.contains(e.target)?"onSlideshowTouch":"onOustideTouch"]()}))),(this.breakpointsData.list.length||this.conf.parallax)&&window.addEventListener("resize",this.onResize),this.conf.parallax&&this.enableParallax()},getSlideshowOffsetTop(e=!1){if(null===this.parallaxData.slideshowOffsetTop||e){let e=this.container,t=e.offsetTop;for(;e=e.offsetParent;)t+=e.offsetTop;this.parallaxData.slideshowOffsetTop=t}return this.parallaxData.slideshowOffsetTop},enableParallax(){this.refreshParallax(),this.pageScrollingElement?(this.parallaxData.scrollingEl=document.querySelector(this.pageScrollingElement),this.parallaxData.scrollingEl.addEventListener("scroll",this.onScroll)):document.addEventListener("scroll",this.onScroll)},disableParallax(){(this.pageScrollingElement?document.querySelector(this.pageScrollingElement):document).removeEventListener("scroll",this.onScroll),this.parallaxData.scrollingEl=null,this.parallaxData.isVisible=!1,this.parallaxData.translation=0,this.parallaxData.slideshowOffsetTop=null},onScroll(){const{scrollingEl:e}=this.parallaxData,t=document.documentElement;let i=0;i=e?e.scrollTop:(window.pageYOffset||t.scrollTop)-(t.clientTop||0);const s=window.innerHeight||t.clientHeight||document.body.clientHeight,l=this.container.clientHeight,n=this.getSlideshowOffsetTop(),o=n+l-i,r=s+i-n;if(this.parallaxData.isVisible=o>0&&r>0,this.parallaxData.isVisible){const e=s+l,t=100*o/e,i=-1===this.conf.parallax?100-t:t;this.parallaxData.translation=-i/2}},onResize(){if(this.breakpointsData.list.length){const e=this.getCurrentBreakpoint();this.hasBreakpointChanged(e)&&this.setBreakpointConfig(e)}this.conf.parallax&&this.getSlideshowOffsetTop(!0)},onMouseEnter(){this.mouseOver=!0,this.conf.pauseOnHover&&this.conf.autoplay&&(this.isPaused=!0)},onMouseLeave(){this.mouseOver=!1,this.conf.pauseOnHover&&this.conf.autoplay&&(this.isPaused=!1)},onMouseDown(e){!this.touchEnabled||this.disable||(!e.touches&&this.preventYScroll&&e.preventDefault(),this.mouseDown=!0,this.touch.dragStartX=this.getCurrentMouseX(e),this.conf.draggingDistance||this.updateTrackTranslation(this.touch.dragStartX))},onMouseMove(e){if(this.mouseDown||this.touch.dragging)if(this.conf.autoplay&&(this.isPaused=!0),this.preventYScroll&&e.preventDefault(),this.mouseDown=!1,this.touch.dragging=!0,this.touch.dragNowX=this.getCurrentMouseX(e),this.conf.draggingDistance){this.touch.dragAmount=this.touch.dragNowX-this.touch.dragStartX;const e=this.touch.dragAmount/this.container.clientWidth;this.updateTrackTranslation(),this.transition.currentTranslation+=100*e}else this.updateTrackTranslation(this.touch.dragNowX)},onMouseUp(e){if(this.mouseDown=!1,!this.touch.dragging)return this.cancelSlideChange();this.conf.autoplay&&(("ontouchstart"in window||this.mouseOver)&&this.conf.pauseOnTouch||(this.isPaused=!1)),this.touch.dragging=!1;const t=this.conf.draggingDistance?-this.touch.dragAmount:0,i=(this.touch.dragStartX-this.container.offsetLeft)/this.container.clientWidth,s=(this.touch.dragNowX-this.container.offsetLeft)/this.container.clientWidth,l=100*((i<.5?0:1)-s);let n=(t||l)>0;if(this.conf.rtl&&(n=!n),[Math.abs(t)<this.conf.draggingDistance,!this.conf.draggingDistance&&Math.abs(l)<50,this.arrowPrevDisabled&&!this.slides.current&&!n,this.arrowNextDisabled&&this.slides.current===this.slidesCount-1&&n].includes(!0))this.cancelSlideChange();else{const e=this.slides.current+this.conf.slideMultiple*(n?1:-1);this.emit(n?"next":"previous"),this.goToSlide(e)}this.touch.dragStartX=null,this.touch.dragNowX=null,this.touch.dragAmount=null,this.touch.justDragged=!0,setTimeout((()=>this.touch.justDragged=!1),50),this.touch.lazyloadTriggered=!1},onSlideshowTouch(){this.isPaused=!0},onOustideTouch(){this.isPaused=!1},justDragged(){return this.touch.justDragged},cancelSlideChange(){this.conf.fade||this.updateTrackTranslation()},getCurrentMouseX(e){return"ontouchstart"in window?e.touches[0].clientX:e.clientX},getBasicTranslation(){return this.slides.current/this.conf.visibleSlides},updateTrackTranslation(e=null){let t=this.getBasicTranslation();const{infinite:i,visibleSlides:s,slideMultiple:l,gap:n,"3d":o,lazy:r,lazyLoadOnDrag:a}=this.conf;if(i&&!1!==this.nextSlideIsClone&&(t=(this.nextSlideIsClone?this.slidesCount:-1)/s),n&&(t+=this.gapsCount/(s/l)*n/100),this.touch.dragStartX&&e&&(!i||!1===this.nextSlideIsClone)){let l=0;const n=(this.touch.dragStartX-this.container.offsetLeft)/this.container.clientWidth;let d=(e-this.container.offsetLeft)/this.container.clientWidth;if(o){const e=Math.round(n)?[0,2]:[-1,1];d=Math.min(Math.max(d,e[0]),e[1])}if(l=(n<.5?0:1)-d,t+=l*(this.conf.rtl?-1:1),r&&a&&!this.touch.lazyloadTriggered){this.touch.lazyloadTriggered=!0;let e=this.slides.current+(l>0?1:-1)*s;i&&-1===e?e=this.slidesCount-1:i&&e===this.slidesCount&&(e=0);for(let t=0;t<s;t++){const i=this.slides.list[e+t];i&&!i.loaded&&this.loadSlide(i,e+t)}}}if(this.multipleSlides1by1&&!i){const e=this.slidePosAfterPreferred>0;let i=Math.min(this.preferredPosition,this.slides.current);e&&(i+=this.slidePosAfterPreferred),t-=i/s}this.transition.currentTranslation=100*-t*(this.conf.rtl?-1:1)},pauseAutoplay(){this.isPaused=!0,clearTimeout(this.autoplayTimer),this.autoplayTimer=0,this.emit("autoplay-pause")},resumeAutoplay(){this.isPaused=!1,this.doAutoplay(),this.emit("autoplay-resume")},doAutoplay(){clearTimeout(this.autoplayTimer),this.autoplayTimer=setTimeout((()=>{this.goToSlide(this.slides.current+this.conf.slideMultiple,{autoPlaying:!0})}),this.currentSlide.duration||this.conf.duration)},previous(e=!0){e&&this.emit("previous"),this.goToSlide(this.slides.current-this.conf.slideMultiple)},next(e=!0){e&&this.emit("next"),this.goToSlide(this.slides.current+this.conf.slideMultiple)},refreshParallax(){setTimeout((()=>{this.onResize(),this.onScroll()}),100)},getFirstVisibleSlide(e){const{slideMultiple:t,visibleSlides:i}=this.conf;let s=this.slides.current;return i>1&&t===i?s=Math.floor(e/i)*i:this.multipleSlides1by1&&(s=e-Math.min(e,this.preferredPosition)-Math.max(this.slidePosAfterPreferred,0)),s},getSlideInRange(e,t){let i=!1;this.conf.infinite&&-1===e?i=0:this.conf.infinite&&e===this.slidesCount&&(i=1);let s=(e+this.slidesCount)%this.slidesCount;if(this.conf.slideMultiple>1){const t=this.slidesCount%this.conf.slideMultiple||this.conf.slideMultiple,i=this.conf.slideMultiple-t;s+=e<0?i:0,s=this.getFirstVisibleSlide(s)}return this.conf.disableArrowsOnEdges&&(e<0||e>this.slidesCount-1)&&!t&&(s=this.slides.current),{nextSlide:s,clone:i}},goToSlide(e,{animation:t=!0,autoPlaying:i=!1,jumping:s=!1,breakpointChange:l=!1,emit:n=!0}={}){if(!this.slidesCount||this.disable)return;this.conf.autoplay&&!i&&!this.isPaused&&(this.isPaused=!0,this.$nextTick((()=>this.isPaused=!1))),this.transition.animated=t,setTimeout((()=>this.transition.animated=!1),this.transitionSpeed);const{nextSlide:o,clone:r}=this.getSlideInRange(e,i);if(this.nextSlideIsClone=r,!this.slides.list[o])return;if(this.conf.lazy)for(let d=0;d<this.conf.visibleSlides;d++){const e=this.slides.list[o+d];e&&!e.loaded&&this.loadSlide(e,o+d)}this.isReady&&!s&&n&&this.emit("before-slide",!0,o);const a=this.slides.list[o];if(this.isReady&&a.video){const e=this.slides.list[this.slides.current];e.video&&e.video.pause(),a.video.play()}if(!1!==r&&setTimeout((()=>{const t=-1===e&&this.slides.current!==this.slidesCount-1,i=e===this.slidesCount&&0!==this.slides.current;t||i||(this.transition.speed=0,this.goToSlide(r?0:this.slidesCount-1,{animation:!1,jumping:!0}),setTimeout((()=>this.transition.speed=this.conf.transitionSpeed),50))}),this.transition.speed-50),this.slides.current=o,this.slides.firstVisible=this.getFirstVisibleSlide(o),l||(this.slides.focus=o),this.conf.fade||this.updateTrackTranslation(),this.slides.activeId=this.slides.list[this.slides.current].id,this.conf.autoplay&&i&&!this.isPaused&&this.doAutoplay(),this.slidesCount&&(this.isReady&&!s&&n&&this.emit("slide"),this.isReady&&this.conf.bullets&&!i&&!s&&this.$refs.bullets)){const e=this.$refs.bullets.children,t=e&&e[this.slides.current/this.conf.slideMultiple];if(t&&"button"===t.nodeName.toLowerCase()){let e=document.documentElement;this.pageScrollingElement&&(e=document.querySelector(this.pageScrollingElement));const i=e.scrollTop;t.focus({preventScroll:!0}),e.scrollTop=i}}},addSlide(e){return this.slides.list.push(e),this.isReady&&1===this.slidesCount&&this.conf.autoplay&&this.isPaused&&(this.isPaused=!1),this.slidesCount},addClone(){return this.updateTrackTranslation(),this.slidesCount},updateSlide(e,t){let i=this.slides.list.find((t=>t.id===e));i&&(i=Object.assign(i,t))},removeSlide(e){const t=this.slides.list.findIndex((t=>t.id===e));t>-1&&(this.slides.list.splice(t,1),this.slidesCount&&e===this.slides.activeId&&this.goToSlide(t-1,{autoPlaying:!0})),this.slides.current>=this.slidesCount&&this.goToSlide(0,{autoPlaying:!0})},loadSlide(e,t){e.loadImage().then((i=>{const{image:s,style:l}=i;e.loaded=!0,e.image=s,e.style=l,this.$emit("image-loaded",this.getSlideData(t))}),(()=>{e.loaded=!1,this.$emit("image-failed",this.getSlideData(t))}))},toggleTouchableOption(e){const{track:t}=this.$refs;if(!t)return;this.touchEnabled=e;const i="ontouchstart"in window;e?(this.$refs.track.addEventListener(i?"touchstart":"mousedown",this.onMouseDown,{passive:!this.preventYScroll}),document.addEventListener(i?"touchmove":"mousemove",this.onMouseMove,{passive:!this.preventYScroll}),document.addEventListener(i?"touchend":"mouseup",this.onMouseUp,{passive:!0})):this.removeEventListeners()},removeEventListeners(){const e="ontouchstart"in window;this.$refs.track.removeEventListener(e?"touchstart":"mousedown",this.onMouseDown,{passive:!this.preventYScroll}),document.removeEventListener(e?"touchmove":"mousemove",this.onMouseMove,{passive:!this.preventYScroll}),document.removeEventListener(e?"touchend":"mouseup",this.onMouseUp,{passive:!0})}},watch:{isPaused(e){this[e?"pauseAutoplay":"resumeAutoplay"]()},parallax(e){this[e?"enableParallax":"disableParallax"]()}},mounted(){this.init()},beforeUnmount(){this.removeEventListeners(),this.conf.parallax&&this.disableParallax(),window.removeEventListener("resize",this.onResize),document.removeEventListener("touchstart",(e=>{this[this.$el.contains(e.target)?"onSlideshowTouch":"onOustideTouch"]()})),this.container.removeEventListener("mouseenter",this.onMouseEnter),this.container.removeEventListener("mouseleave",this.onMouseLeave)}},Z=T(K,[["render",F]]);var G={name:"Projects",components:{VueperSlides:Z,VueperSlide:I},created:function(){this.getLocalStorageProjectInfo()},mounted:function(){this.projectPageData.images&&(document.querySelector(".text-box").innerHTML=this.projectPageData.description)},computed:(0,d.Z)((0,d.Z)({},(0,u.rn)(["projectPageData"])),{},{images:function(){return this.projectPageData.images}}),methods:(0,d.Z)((0,d.Z)({},(0,u.nv)(["getLocalStorageProjectInfo"])),{},{imageURL:function(e){return e.isLocalImg?this.getImgUrl(e.URL):e.URL},getImgUrl:function(e){var t=i(9047);return t(e)}})},Q=i(3744);const J=(0,Q.Z)(G,[["render",a],["__scopeId","data-v-085e82a1"]]);var ee=J}}]);
//# sourceMappingURL=5-legacy.94016917.js.map