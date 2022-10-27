(()=>{var e={4498:(e,t,a)=>{"use strict";var r=a(9963),o=a(6252);function n(e,t,a,r,n,i){const s=(0,o.up)("Header"),c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(s),(0,o.Wm)(c)],64)}var i=a(4427);const s=e=>((0,o.dD)("data-v-73e421a4"),e=e(),(0,o.Cn)(),e),c={class:"header"},l=s((()=>(0,o._)("img",{class:"img-link",src:i,alt:"gina's logo"},null,-1)));function d(e,t,a,r,n,i){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",c,[(0,o.Wm)(s,{to:"/"},{default:(0,o.w5)((()=>[l])),_:1})])}var u={name:"Header"},h=a(3744);const p=(0,h.Z)(u,[["render",d],["__scopeId","data-v-73e421a4"]]);var g=p,b={name:"app",components:{Header:g}};const m=(0,h.Z)(b,[["render",n]]);var A=m,f=a(2201);const v={class:"home"},y={class:"main-content"};function w(e,t,a,r,n,i){const s=(0,o.up)("GinaLine"),c=(0,o.up)("About"),l=(0,o.up)("ProjectsContainer"),d=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",v,[(0,o.Wm)(s),(0,o._)("section",y,[(0,o.Wm)(c),(0,o.Wm)(l,{projects:n.projects,class:"main-content__img-box"},null,8,["projects"])]),(0,o.Wm)(d)])}const j={class:"GinaLine"},k=(0,o.uE)('<span class="G" data-v-5d71df06>G</span><span data-v-5d71df06>I</span><span data-v-5d71df06>N</span><span data-v-5d71df06>A</span><span data-v-5d71df06> </span><span data-v-5d71df06>W</span><span data-v-5d71df06>I</span><span data-v-5d71df06>N</span><span data-v-5d71df06>D</span><span data-v-5d71df06>L</span><span data-v-5d71df06>E</span><span class="Y" data-v-5d71df06>Y</span>',12),L=[k];function C(e,t,a,r,n,i){return(0,o.wg)(),(0,o.iD)("div",j,L)}var M={name:"GinaLine",props:{msg:String}};const S=(0,h.Z)(M,[["render",C],["__scopeId","data-v-5d71df06"]]);var T=S,W=a(3577);const P={class:"projects-list"},x=["onClick"],D=["onClick"];function B(e,t,a,r,n,i){const s=(0,o.up)("router-link"),c=(0,o.Q2)("lazy");return(0,o.wg)(),(0,o.iD)("div",P,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.images,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"projects-list__project",key:t},[(0,o.Wm)(s,{class:"projects-list__project-image",to:e.link},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",{class:"projects-list__project-bg",lazy:"loading",onClick:t=>i.handleClick(e)},null,8,x),[[c,e.isLocalImg?i.getImgUrl(e.URL):e.URL,"background-image"]]),(0,o._)("p",{onClick:t=>i.handleClick(e),class:"projects-list__project-bg--text"},(0,W.zw)(e.section),9,D)])),_:2},1032,["to"])])))),128))])}a(7658);var G=a(3907),N={data(){return{images:[]}},props:{projects:Array},created(){this.images=this.getProjectImages()},methods:{...(0,G.nv)(["updateProjectPageData"]),getImgUrl(e){let t=a(9047);return t(e)},handleClick(e){this.updateProjectPageData(e)},getProjectImages(){let e=[];for(let t=0;t<this.projects.length;t++){const a=this.projects[t];e.push(a.images[0])}return e}}};const U=(0,h.Z)(N,[["render",B],["__scopeId","data-v-2c9ee822"]]);var O=U;const V=e=>((0,o.dD)("data-v-b5813b44"),e=e(),(0,o.Cn)(),e),I={href:"https://www.linkedin.com/in/ginawindley/"},R={xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 60 60",style:{fill:"#ff6632"}},Y=V((()=>(0,o._)("path",{style:{"background-color":"black"},d:"M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"},null,-1))),E=[Y];function Z(e,t){return(0,o.wg)(),(0,o.iD)("footer",null,[(0,o._)("a",I,[((0,o.wg)(),(0,o.iD)("svg",R,E))])])}const F={},Q=(0,h.Z)(F,[["render",Z],["__scopeId","data-v-b5813b44"]]);var H=Q;const q=e=>((0,o.dD)("data-v-428566a8"),e=e(),(0,o.Cn)(),e),z={class:"about"},J=["src"],X=q((()=>(0,o._)("div",{class:"about__text-div"},[(0,o._)("p",{class:"about__text"},[(0,o._)("b",null,"Hello"),(0,o.Uk)(", my name is Gina."),(0,o._)("br"),(0,o._)("br"),(0,o.Uk)(" I am a creative, practical architect with a love for functional sustainable architecture. I strive to create truly bespoke projects that benefit both the environment and people. Please enjoy a selection of my work. If you have any questions or just want a chat please don’t hesitate to "),(0,o._)("a",{href:"mailto:gina.windley@gmail.com"},"get in touch"),(0,o.Uk)(". ")])],-1)));function _(e,t,r,n,i,s){return(0,o.wg)(),(0,o.iD)("section",z,[(0,o._)("img",{src:a(1479),alt:"Gina Windley",class:"about__img"},null,8,J),X])}var K={name:"About"};const $=(0,h.Z)(K,[["render",_],["__scopeId","data-v-428566a8"]]);var ee=$,te=JSON.parse('[{"name":"Manufactory","description":"<p><b>Manufactory at Pomona Island</b><br><i>Academic Work | Centre for Alternative Technology<br>5th year project 2018/19<br>Programs used: Autodesk Revit, Sketch up Adobe Photoshop, InDesign and Illustrator</i><br><br>The project is the sensitive sustainable regeneration of an uninhabited brownfield site; Pomona Island on the outskirts of Manchester. The area is in need of regeneration and this proposal tackles it sustainably; providing employment and preserving much sought after green space. The site will be brought back into use and house a manufacturing facility, training college and model village. Which will help to provide refuge and rehabilitation of the homeless population of Manchester. Creating a neighbourhood focus and identity through tourism economy. Improving the skills of residents to meet the job opportunities. With the long term goal to tackle homelessness at the source by providing employment and training on site in manufacturing prefabricated self build timber ‘kit‘ homes which will provide a solution to the current housing crisis.<br><br>In homage to the Pomona Garden’s and Palace the site will once again become a recreational green space within the city. Once again open to public activity it will become a place for people to enjoy the outdoors. The proposal will reinstate the docks which have since been filled in, visibly preserving the history of the site. The docks will no longer have industrial use but be home to wildlife and human activity. Nature will be encouraged by providing an informal nature reserve and preserving the majority of the site as green space. <br><br>There are three buildings on site, the factory, training college and temporary accommodation prefabricated ‘model village’ which houses the trainees.  The buildings are connected to one another through a public procession that makes a spectacle of the factory taking the visitors on a journey through the factory to the training college exhibition and ending in the café. The factory utilities the industrial artery of Manchester, the shipping canal in its delivery and distribution of manufacturing prefab homes. The factory sites itself in the footprint of historical dockland buildings. As the site itself sits on an angle pointing north east, the factory’s form is dominated by a 45° saw tooth roof to utilise true north light and solar power to the south.</p>","images":[{"URL":"https://i.ibb.co/wLwMGvM/1905-Proposed-Site-plan-sml-compressor.jpg","link":"/project","alt":"Site plan","section":"Manufactory"},{"URL":"https://i.ibb.co/VLZKkm9/Factory-Ending-procession.jpg","link":"/project","alt":"Factory procession end","section":"Manufactory"},{"URL":"https://i.ibb.co/Fx2ZCGK/Context-Map-A1-compressor.jpg","link":"/project","alt":"Context location plan","section":"Manufactory"},{"URL":"./fdp/1.jpg","link":"/project","alt":"Final design project","isLocalImg":true,"section":"Manufactory"},{"URL":"https://i.ibb.co/SXNdCxb/cafe-lecture-hall.jpg","link":"/project","alt":"Cafe lecture hall","section":"Manufactory"},{"URL":"https://i.ibb.co/ZxfLTXt/Boardwalk.jpg","link":"/project","alt":"Boardwalk","section":"Manufactory"},{"URL":"https://i.ibb.co/ts58Xyf/STRCUTURE-STRATEGY.jpg","link":"/project","alt":"Structural strategy exploded axonometric","section":"Manufactory"},{"URL":"https://i.ibb.co/ckQ2bMM/1904-Factory-Building-1-to-10-details.jpg","link":"/project","alt":"Detail of factory","section":"Manufactory"},{"URL":"https://i.ibb.co/R7wdZxP/final-rendered-section.jpg","link":"/project","alt":"Long - Factory detail section","section":"Manufactory"},{"URL":"https://i.ibb.co/3dQrXW6/final-rendered-factory-plans.jpg","link":"/project","alt":"Factory floor plans","section":"Manufactory"},{"URL":"https://i.ibb.co/0hYh38F/section-factory-zoom.jpg","link":"/project","alt":"Short - Factory detail section","section":"Manufactory"},{"URL":"https://i.ibb.co/pRtzZmG/Education-building-board-841x1189-a0-compressor.jpg","link":"/project","alt":"Training college floor plans","section":"Manufactory"},{"URL":"https://i.ibb.co/MVQZnXV/1904-Factory-Building-roof-compressor.jpg","link":"/project","alt":"Factory saw tooth roof detail","section":"Manufactory"},{"URL":"https://i.ibb.co/Pjs3shL/Sense-of-inhabitation-axo-amended-compressor.jpg","link":"/project","alt":"Spirit of place","section":"Manufactory"}]},{"name":"Sk-Eye","description":"<p><b>Design and build - Sk-Eye</b><br><i>Academic Work | Centre for Alternative Technology<br>4th year Summer build project 2018<br>Programs used: Vectorworks, Sketch up, Adobe Photoshop, InDesign and Illustrator</i><br><br>serve, learn and reflect on nature and sustainability. The elements - sky, earth, wind, water, fire and soil are tangible: Sk-Eye connects the visitor with the sky and rain, the charred timber cladding drapes around the structure. The form of the structure is influenced by the circular form of the Welsh roundhouse and is modernised into a timber hexagonal volume which tapers to create the oculus. Two doors welcome visitors off the trail and into the structure. Within an installation consists of the documentation of memories of people visiting and living at CAT. Cast in resin and wax, these are positioned as a chandelier capturing sunlight and rainwater, celebrating the infamous Welsh weather.<br><br>Sk-Eye is elegant and simple, the primary structure is constructed of larch, which was sourced within 2 miles of the site, and left untreated. The timber cladding was salvaged and reclaimed from the CAT site, to evoke memories of components which once had another life. The members are treated using the ancient Japanese method for charring timber, the Shou Sugi Ban. The warm larch structure contrasts with the black charred timber. <br><br>The structure was constructed in a week in Summer 2018 by a team of 5 MArch Sustainable Architecture students, forming a place for the exchange of knowledge, memory, people, place and architecture set within nature.<br><br>View this project in the AJ buildings library <a target=\\"blank\\" href=\\"https://www.ajbuildingslibrary.co.uk/projects/display/id/8109\\"> here</a>.</p>","images":[{"URL":"https://i.ibb.co/dLKsq4H/1-2-1.jpg","link":"/project","alt":"Sk-Eye finished","section":"Sk-Eye"},{"URL":"https://i.ibb.co/zsw6H1t/5.jpg","link":"/project","alt":"Sk-Eye skylight","section":"Sk-Eye"},{"URL":"https://i.ibb.co/YDJ37g0/4-2.jpg","link":"/project","alt":"Sk-Eye framework","section":"Sk-Eye"},{"URL":"https://i.ibb.co/LxL5C7V/3-2.jpg","link":"/project","alt":"Sk-Eye model","section":"Sk-Eye"}]},{"name":"Northumberland Outward Bounds","description":"<p><b>Northumberland Outward Bounds</b><br><br><i>Academic Work | Northumbria University<br><br>3rd Year Final Project 2015<br><br>Programs used: Autocad, Sketch up, Kerkythea rendering software, Adobe Photoshop, InDesign and Illustrator</i> Resting alongside Hadrian’s Wall, the scheme is influenced by the dominating linearity and abstract forms of the Whin Sill and surrounding agricultural landscape and architecture. The new visitor centre and youth hostel facility at Steel Rigg celebrates the crags and the local landscape and raises awareness and respect for the outdoor activities in the area, particularly climbing. The centre will aim to educate people on climbing through both indoor and outdoor climbing walls. The Northumberland Outward Bounds Centre will become a place for the public to visit and learn about destinations and many activities within the National Park.<br><br> The visitor centre form and layout is influenced by the local agricultural architecture and the verticality of the crags. The buildings are split up into a collection of buildings which evoke a welcoming and secure atmosphere. The accommodation cabins scatter the landscape replicating the Milecastles along Hadrian’s Wall. The Climbing and Viewing tower will provide climbing educational opportunities to visitors and spectacular views of the surrounding landscape. With the potential to attract a significant number of visitors from the landscape the tower will become a beacon and connect the building to area, attracting visitors from all around.</p>","images":[{"URL":"https://i.ibb.co/5GgKQr3/1.jpg","link":"/project","section":"Northumberland Outward Bounds","alt":"Northumberland Outward Bounds Cross section"},{"URL":"https://i.ibb.co/10xNGDk/2.jpg","link":"/project","section":"Northumberland Outward Bounds","alt":"Northumberland Outward Bounds Exploded diagram"},{"URL":"https://i.ibb.co/R0Tzdcp/4.jpg","link":"/project","section":"Northumberland Outward Bounds","alt":"Northumberland Outward Bounds Model"},{"URL":"https://i.ibb.co/x6QTW7G/3.jpg","link":"/project","section":"Northumberland Outward Bounds","alt":"Northumberland Outward Bounds Site plan"}]},{"name":"Volunteering","description":"<p>\\"Self build is build self\\" - Walter Segal<br><br> I believe that architects should not solely be chained to their desks but should learn by doing. I have had a handful of experiences building through volunteering: Donated House in Todmorden UK  and a rammed earth building; eARThouse at Abetenim Arts Village, Ghana. I have also recently built my own design as part of my MArch course, Sk-Eye.</p>","images":[{"URL":"./building/1.jpg","link":"/project","alt":"donated house roof tiling","section":"Volunteering","isLocalImg":true},{"URL":"https://i.ibb.co/d5pNbvn/1-3.jpg","link":"/project","alt":"Ghana rammed earth formwork","section":"Volunteering"},{"URL":"https://i.ibb.co/f97WrQz/2-3.jpg","link":"/project","alt":"Ghana rammed earth formwork","section":"Volunteering"},{"URL":"https://i.ibb.co/D819NcG/3-3.jpg","link":"/project","alt":"Ghana opokus house","section":"Volunteering"}]}]'),ae={name:"home",components:{GinaLine:T,ProjectsContainer:O,About:ee,Footer:H},data(){return{projects:te}},methods:{...(0,G.nv)(["updateProjectPageData"])}};const re=(0,h.Z)(ae,[["render",w],["__scopeId","data-v-624013d8"]]);var oe=re;const ne=()=>(0,f.p7)({routes:[{path:"/",name:"home",component:oe},{path:"/project",name:"project",component:()=>a.e(5).then(a.bind(a,3005))}],history:(0,f.r5)(),scrollBehavior(){return{x:0,y:0}}});var ie=ne;const se={projectPageData:{}},ce={},le={updateProjectPageData:({commit:e,dispatch:t},a)=>{const r=te.find((e=>e.name===a.section));e("UPDATE_PROJECT_PAGE_DATA",r),t("updateLocalstorageProjectData",r)},updateLocalstorageProjectData(e,t){window.localStorage.setItem("projectInfo",JSON.stringify(t))},getLocalStorageProjectInfo({commit:e}){const t=window.localStorage.getItem("projectInfo");e("UPDATE_PROJECT_PAGE_DATA",JSON.parse(t))}},de={UPDATE_PROJECT_PAGE_DATA(e,t){e.projectPageData=t}},ue=()=>(0,G.MT)({state:se,getters:ce,actions:le,mutations:de});var he=ue,pe=a(340);const ge=(0,r.ri)(A);ge.use(pe.Z),ge.use(he()),ge.use(ie()),ge.mount("#app")},9047:(e,t,a)=>{var r={"./FINALBRIGHTMAP.jpg":262,"./building/1.jpg":1337,"./fdp/1.jpg":5348,"./gina.png":1479,"./logo.png":4427};function o(e){var t=n(e);return a(t)}function n(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=n,e.exports=o,o.id=9047},262:(e,t,a)=>{"use strict";e.exports=a.p+"img/FINALBRIGHTMAP.9611a4e0.jpg"},1337:(e,t,a)=>{"use strict";e.exports=a.p+"img/1.3185ea2e.jpg"},5348:(e,t,a)=>{"use strict";e.exports=a.p+"img/1.65dbc2cb.jpg"},1479:(e,t,a)=>{"use strict";e.exports=a.p+"img/gina.d71e0de7.png"},4427:e=>{"use strict";e.exports="data:image/png;base64,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"}},t={};function a(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,a),n.exports}a.m=e,(()=>{var e=[];a.O=(t,r,o,n)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],n=e[d][2];for(var s=!0,c=0;c<r.length;c++)(!1&n||i>=n)&&Object.keys(a.O).every((e=>a.O[e](r[c])))?r.splice(c--,1):(s=!1,n<i&&(i=n));if(s){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,o,n]}})(),(()=>{a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+e+".e9d7de4a.js"})(),(()=>{a.miniCssF=e=>"css/"+e+".d6cd75fd.css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="gin-win:";a.l=(r,o,n,i)=>{if(e[r])e[r].push(o);else{var s,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+n){s=u;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+n),s.src=r),e[r]=[o];var h=(t,a)=>{s.onerror=s.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(a))),t)return t(a)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.p=""})(),(()=>{var e=(e,t,a,r)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var n=n=>{if(o.onerror=o.onload=null,"load"===n.type)a();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=n,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var o=a[r],n=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(n===e||n===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],n=o.getAttribute("data-href");if(n===e||n===t)return o}},r=r=>new Promise(((o,n)=>{var i=a.miniCssF(r),s=a.p+i;if(t(i,s))return o();e(r,s,o,n)})),o={143:0};a.f.miniCss=(e,t)=>{var a={5:1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=r(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};a.f.j=(t,r)=>{var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise(((a,r)=>o=e[t]=[a,r]));r.push(o[2]=n);var i=a.p+a.u(t),s=new Error,c=r=>{if(a.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",s.name="ChunkLoadError",s.type=n,s.request=i,o[1](s)}};a.l(i,c,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,i=r[0],s=r[1],c=r[2],l=0;if(i.some((t=>0!==e[t]))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(c)var d=c(a)}for(t&&t(r);l<i.length;l++)n=i[l],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(d)},r=self["webpackChunkgin_win"]=self["webpackChunkgin_win"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=a.O(void 0,[998],(()=>a(4498)));r=a.O(r)})();