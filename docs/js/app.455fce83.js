(function(e){function t(t){for(var n,c,f=t[0],s=t[1],i=t[2],l=0,u=[];l<f.length;l++)c=f[l],r[c]&&u.push(r[c][0]),r[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(u.length)u.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,f=1;f<a.length;f++){var s=a[f];0!==r[s]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},o=[];function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var f=window["webpackJsonp"]=window["webpackJsonp"]||[],s=f.push.bind(f);f.push=t,f=f.slice();for(var i=0;i<f.length;i++)t(f[i]);var d=s;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0210":function(e,t,a){e.exports=a.p+"img/FINALBRIGHTMAP.cce956f2.jpg"},1:function(e,t){},2:function(e,t){},"2aed":function(e,t,a){e.exports=a.p+"img/1.0a1f160c.jpg"},3:function(e,t){},"318e":function(e,t,a){"use strict";var n=a("8bbc"),r=a.n(n);r.a},3710:function(e,t,a){e.exports=a.p+"img/gina.16dd1b93.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header"),a("router-view")],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("router-link",{attrs:{to:"/"}},[n("img",{staticClass:"img-link",attrs:{src:a("9d64"),alt:"gina's logo"}})])],1)},f=[],s={name:"Header"},i=s,d=(a("318e"),a("2877")),l=Object(d["a"])(i,c,f,!1,null,"2b46a8e3",null),u=l.exports,A={name:"app",components:{Header:u}},g=A,b=(a("5c0b"),Object(d["a"])(g,r,o,!1,null,null,null)),m=b.exports,p=a("8c4f"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("section",{staticClass:"main-content"},[a("ProjectsContainer",{staticClass:"main-content__img-box",attrs:{images:e.projects}})],1),a("GinaLine")],1)},v=[],j=a("cebc"),L=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},C=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"GinaLine"},[a("span",{staticClass:"G"},[e._v("G")]),a("span",[e._v("I")]),a("span",[e._v("N")]),a("span",[e._v("A")]),a("span",[e._v(" ")]),a("span",[e._v("W")]),a("span",[e._v("I")]),a("span",[e._v("N")]),a("span",[e._v("D")]),a("span",[e._v("L")]),a("span",[e._v("E")]),a("span",{staticClass:"Y"},[e._v("Y")])])}],w={name:"GinaLine",props:{msg:String}},B=w,U=(a("c6ca"),Object(d["a"])(B,L,C,!1,null,"2946f801",null)),M=U.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"projects-list"},e._l(e.nestedImages,function(t,n){return a("div",{key:n,staticClass:"projects-list__project",class:{"no-hover":""===t.link}},[t.link?a("router-link",{attrs:{to:t.link}},[a("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.isLocalImg?e.getImgUrl(t.URL):t.URL,expression:"image.isLocalImg \n          ? getImgUrl(image.URL)\n          : image.URL",arg:"background-image"}],staticClass:"projects-list__project-bg",attrs:{lazy:"loading"},on:{click:function(a){return e.handleClick(t)}}}),a("p",{staticClass:"projects-list__project-bg--text",on:{click:function(a){return e.handleClick(t)}}},[e._v("\n        "+e._s(t.section)+"\n      ")])]):e._e(),t.link?e._e():a("canvas",{class:"canvas-"+t.id})],1)}),0)},y=[],O=a("75fc"),k=a("2f62"),G=[{name:"Manufactory",images:[{URL:"./fdp/1.jpg",link:"/project",alt:"Final design project",isLocalImg:!0,section:"Manufactory"}]},{name:"Sk-Eye",images:[{URL:"https://lh3.googleusercontent.com/g6ytPU--43XeMoQzp2TS_7yzxjiO9KvmGT4d1ZFVeWH0_30TOSp9NBtP0UZuCm2KYwOdwZlryYDPqf4XfJvWS3nEhOd85ROOYAjJXI_vIlTu4KDvJq8bJGQO98svgboS8vs9duGlkyqnPTn9HZQx35lzclZ_JE7aRbiiAWYl2QLCR-yeGl1fLPGwr0u-1G7CkjWiLsZju8rfoLGl2dF4yE8HbCfvhV7R7dwPFGcl5yPlIEXfm7Tz6NUH45sdIrm74eP0I0esGkvtJoA-Ne2uRXRk1_nH47GNtDiZcZ1sfV74ZHDZP4yqIHGllO_-cEjFo42Fm6HnYEEnyfAsEOQwJ8tCP1jN9VCPMDZQpIUCcK8N-HLVAQ9QAWeBY27PWAfCqsMj3j-nR0j6CjWT9trGvxiiQOnMr3M3ou-_qsakiTwmo4QtdqoKZh0sYOOfumMIZA6LGHOHbCoJ69Cfs2iF2utX_kzBdqmZ6ZDej_Mjjg_vdFVUhLcLFgWUZtSU2WgSqZx-MPNbkXbbHuOwUTJztNDqkJCrzG9ym8BgVXyBOTtbF4QbK5Mn-y-4EzoC65N1LP29sZm-QgZXSgvFjOb4xM6wFlrMJUmuJBwO3RI5ahIppJoIanuRq47umnQdZ2vYWw2mB-sooMhOL-qtQGlCA9erh2Dpkmg=w2504-h1878-no",link:"/project",alt:"Sk-Eye finished",section:"Sk-Eye"},{URL:"https://lh3.googleusercontent.com/CNScxklsJlKJVsVqrn5NW5UKwTIh5yk7xobRxnb8k65aIgvMZzFjJaNu5anmRRXaPbrXnCrDKEppfoncT_NXuC8egeZbq-BVadINrQDkqUU2u9R3eI-6GARvXG9BOw7jsG-5-Tely3_R-TOEkbCtEBbhBZf9dJcY8ZnI-E4yM2exVDAgUTOfSjJ-uVmkREr5H8eMdNfsZF5EioQm436NGBU8tWSlYz5TICoVpZR2KYoQ237Be7cA-HWsig0K2y0bwipnDF475WQvRn26hVeQOpRY7xuHwCt8L8OxBF3BS9ZzDxwhpY7Tp_bVbLIbuTCfgQqziePOpSiriVpvd8kR77R04fhA59M9JJq5RJlI5edhysLRpG9doOCQK_SbWr0VBBb100VFHFEMneVrYS2dBNhsE4aJidBziVQyOZNUXiDP8yrWzpTmbK_JEIRCFhtNRuro09dBxTrvvdB_I2C6UYxRRfzjF2BLA6HULKl6bSnYTFQ3kAVc_fR2UEMorc4F2SkNrGfnA8G-boYXy8WRBoj51-f0TraNswnF4YUA1fM7EudKpeQ2hvdsbPKKmgzeHeUlQhE2HHmM6mWqYWAL5wW-7cU7NmMgNGsDoEa7BQGLhNsCkFHJPMTUQqHtXFNqbL5CRwHnUvHkOQ9nfm1uSo_Wb4glofo=w1600-h1200-no",link:"/project",alt:"Sk-Eye framework",section:"Sk-Eye"},{URL:"https://lh3.googleusercontent.com/01_-sxAS4mG70ZKc3H23yxPLZr29lznod2SrprLL-lEqabn8hjlmV0M9AQkVfipyYlDNoyj3FvdgKoLR5jCgm98cT4UHidPZ26C6uvnsVX0W1Leijvb2SX2RZSP_wFgyBvcGUmHBff_e6sExupNnOwUjQi6jUwQDZlqjFtoqiTzKvzxrS6oUC73u-0Yz8C7gfCOSn3qp0st_LAxTCRx77B45b83w9_XJt60pMOsAQtpwrPAYx_agfITEebGFcEpEsMU_jqglO0hMurhlGe_l5y-vnzauBOXurOsCo9QOtnIv31v0RrMg1H5NRxxFSQF5iS0u7ubsOpM76FfFg2w78eXmR9KXrcNIdsdB_7imaqU0lwBJ0FLk4KHH_LETtTlu0nZ7u5UTMVXydanv-s0WdbidDSILHth4invebABrXz1EkUbsCnQWuA5iNkk29PgQBooBrGkkQUX9WYMLU2kTRlirks4M7c-JJlLezEvA3d7C7CuOnnjmvD89qL9NrJP7D_noDfJEHpJdlHCbcd4vQOOvFHh2sRsYPFIPWpVk81aoaf5Yo5jlCgrkVt57FREm7okFLBU3K9rE35pW5tzFijO-4Bn6_T3fSHeo5T9nsW5JEqXpNoQRdtUDsMoFUlaNNZvZSwTjxtHLPMFDa241U0wragJHLyA=w2504-h1878-no",link:"/project",alt:"Sk-Eye skylight",section:"Sk-Eye"},{URL:"https://lh3.googleusercontent.com/LnPcVBT-U8uJsUIh3cMaPFHsaXLp4EPoX7fpBKnmjjtE8BPn9iBKxxL7DmXZCa_xHnL94CIuVjAswg_2CsgXS_QlfUxVk8BhFWE_FpRC3znm8rFGrF3TQmPGA68HtXKXyVE7jFY9wFVQzVsOAJKuN7nanvn_RMtcn3sDoPoROqqHFYBcmtaCHZZd-poxFe04vkZx8OTz4oWHslv9t11QHqnIlGUvAavOhpsWK1azAx3ZW9Jrx4DHXBNSPLUdx1AJy8sMBytZGrCXRETLImvOZ_AgaOW6OQJzHnW46G0jklitvAzVes91-KXmVCJKDBd0EXQ8XXwBNi6ctMynfuElgBPrvmjoBhi15gcDaDEWcTkABLjB3ztQK_AhWI6eK2Wid93mbbFSaGC9wUwcGJYLDuop5wVHBxWB670guGY4w4A1YcMUfpz6BwhDlhNyDKgitGxoGl-s7pe03-svwA5eQ0dm8u4PrpitxQKAVt8ypBYIJaELpAcYEdk4KQ3mbNRQyLfvdUAEw6_oJ08cXIBc3HzGvWioY8NF1Lf9qLCdCoU2tJSMZ7wEUSMwFLgEYhWgEE_gvXSiCxPc35fT1Udtnj6jgNs3VN5Ja9qs5WUZkn-SAb58-jnfaMa_UPuRbAFKcjaswq3-yLXcQmmFuYD_ffeKKSjxciU=w2504-h1878-no",link:"/project",alt:"Sk-Eye model",section:"Sk-Eye"},{URL:"https://lh3.googleusercontent.com/HpFcTkPhpEfDee4DmGYSGj9c7g3AgkUXxuKO47IdNZkaEBvyst73sIA959CEBkX1xIYD4Jdy0zLjSY5B40dknvxF_ycYv69MPCY9IsuEtLt6838vaLJdIJuhmJoPYCW9eDOQKEwCTg5HHccsgl0RJszSWklLLVLgSzcn81HTd4yoTqp6qvrAAiwWcxmCfpA3z5wA24YFy8A9ZAexGDiUeU3PCu9_RaAcz8PoWWjmLaRL0-33rvRoAmKCoigo4byn2-jSQEV8RFVntCXRRSjQkHo3Yx3ethI6HOuibw6bGItYlExW53AvUMvj7xGepBwgpWCxIB339JGSUP6XEKt8EJasEOjvFZQOJq8Z1QgECNcth3q56q1bq18YCAltUeiwLg2t8mXHms2YqZqVsuTWRQ4dUVg_0BR9tKhYyy2nkGOvnK9-cb1CDLA6LZ2-sVuH4ztKMpVVfWWr16Qvhm8W8fJDgM7HJRIT400y-Md_lAt6PCPidef7Yk3a3akcqUR8s0plL7xl80ywHZd6UHX81fupPojqml2uGRMRo6Y78wUdJ789kR0arMxuCwgIy6MXjxELGo93MRnK5gOs4-CngjSCT151KB2IVS3guMJcEwJSyCgrItud8rSJs-PRcZGbiko1LVfZ-4-9hAQYIJtzFlGv-CjrC18=w923-h447-no",link:"/project",alt:"Sk-Eye exploded diagram",section:"Sk-Eye"}]},{name:"Northumberland Outward Bounds",images:[{URL:"https://lh3.googleusercontent.com/QS_adK5z569OU8SgYDqwpdw1EOtNXgUCiuUHHLt9ZXTXj1PHBdW9XG4vjFLihREDsoOjc1ouv19VOwEOa-hN1A4s9prqY8zNzNUaYzGmOqBwSErzw7DjDiau3JlU8cYwkTp384NU803BGRlPJigiSYGswA6mCXjuP-Xq_vWCGMHLLjJRVXrX7Rz2wjrMnbIHCUHKxxEBpUgA8NgDt9mCoKssj5rJoUeoNiqkJOOavBzcvulruMX1t_0mJbCXL6oazBiJnrWomZ7ii2B-gLrXLOyUiO5dLclBjX3VkUlB6hoVwtQWCNRbM4D48R4-ULkGAcy3Wo2SbLn5gO5w-jBILJ4b-I41900ykKiE7MPCiIXZ6Lc6NYmqXYCxbGJo8gDHSRv73YLbiQof4tD8HjsCRSNLOb3l-9CQBiHOfKGHkrmnOQYLhUWTWmsQmfjsh1XL2v5e6VYWCie8JC5rnvOE3G92Uam0HDr-vXJJWrVLLkRWOs3SsLf4sGHxp-U_WJYiZo9kOiCl9zbyCXqx_jebCzPmnpIbslIAFsS4joQ48w6sco0B7UFiNDCBfq34A7kCS6JWQfU2odEzVL-OxTvTUTkjVk-zD_ISkHikogV0doS0MtebgucRdyOPNxUB0zWuXxlqmh1ZTrGXRFGgVlRBP73kp96BgMA=w2362-h1073-no",link:"/project",section:"Northumberland Outward Bounds",alt:"Northumberland Outward Bounds Cross section"},{URL:"https://lh3.googleusercontent.com/6rWccviTGvAf6_Mp4KBsD8nMIwlcm043S34NLFSmtagAh3j0wdm0modaciSA2HfVQ1sqIkTtzriP8BJ8W6y8W1AYAIFdSv-nt9cFLgVLjTSz3lK9aw3aMm17e409BxkjK2hsXDxe6B3whdmdmC9XBoMdL8i9GZcPquP49dBiJ7Y_wC_rnwPlwaEfCex0nRYn3EpL3fXWDnuUnm4b68bpiuDBnSQlac0nqZONoUougSWV7QcihbGMrKUh4Bpv7bbuCwDXCIWe69wASTBqz0B8rUtJwoIxLJ7ZUZgW_BHisPqYFv5ChDmAaGTIBA3o3bJknCsJb8gapS8O1sxRuviZpXtfdkMej2Z6BY65nO0cXNudq6oD9ZjJt328TD3i72qV3r6isJX7hHirJzSxjV6P1p2JM9MNARbDLaZZsr15jj2qGXsixBgsjPh5ZiwjyATUZZCvsvyBVed3c0somyBnyukrFZr4qkWeOheUIxS9-tTrhUnCEqyNJMk1byv4VrclcBUA1r7PkWL00no7KrhrQ2PMb3Nmt_J96fafFEjmxpAF10F36g9AxVBee3_RrRYV7lZcAPG6ea-Jv_0rSGrf96s0hXxRnpnsIWah8h_rj5BETqICsZUHay0kWXvxwaZnznAI2YQ_r7Jc1VKNLBgEcQ5LCm3RzGQ=w2362-h1659-no",link:"/project",section:"Northumberland Outward Bounds",alt:"Northumberland Outward Bounds Exploded diagram"},{URL:"https://lh3.googleusercontent.com/sXKeHQm1LwkAjsI1GWp6ahQ31gpnMOhqedUgX7X-vX7404qQ9q8JgTJXpaR3CsPcf2HhoGP8Qfcw86ChUrRhdRH_ZcU7T_Lxcy6axliw2MmWYw-XljHax5RF4Bx-7m0iOtd8LJqwZUwH67M1JZSFrFKGs2dT6VlCP5FQLnzDttHtMMnmxZrrx8J3FefUGdqGfYHg6TrCP1KOBFFlTd0Ma8WSDnEqOJrLwp0N8EX5GgtSg5prUnTrUq1wHY3g0vgj43mO9252rui7N2g-ZMS2qkINX_iBh7ZduY3U3mF8cXKA7mYN2a4Qyq2naprbwnrff_kKlwNvc3EnuW6bZlMvYAaYzuEkyYnqH4-YjT-OtkGLqpW0cT_MVYvI8s0wliAOqTUPg6o5Xbf4gSrP5Z-TeMeUMe1rfDdbB16V9IqthM9MiEZHxuPm9I1eefLyeC5xwe2PXRPUKXiBAUGmb-d6dVe6luBTmFl7VWu9beykREroi1E76I5Ox8CFhkdPn6PuE82-9Pgb3iyU1JU2UB1SlhOpHUBEDKF0YuMCUyGHAqEKrCYShbUbFJnAPIsCejjeMa5DRViqRQrVQmTmFABDzVGgix4u1UFBX_y7aqlEMDlS3oiHIJWk59-IpaX5u8e7vmVTGAWfmCF5UXrZ10nPLxvTTzOIUvQ=w2362-h1609-no",link:"/project",section:"Northumberland Outward Bounds",alt:"Northumberland Outward Bounds Model"},{URL:"https://lh3.googleusercontent.com/_ycpLcLvD2vq9ftZJLVnSQ1Bs1eg7LmkvqYZfO84j1FvT2bvRHXvfVq0Mk3Cl9WX11amZ0rnRc2LmeX1VmRUz60Dn22AWwth8LDZuxApoI4yZJeTkdntyiB0hVr1jjHpAa-X6rGqzKGlChljbKeOuyTogATTSPtH4j1zNBA_bWboo_H02x9oQH4_bmGAMi0LiA83CIPIxEIvrsMRj5g3i0vcqBs-oAZ0fpgISPoiFj_rDI7DNQez3S5yLmh230H3SrMRlQHotiJa5oOGQ_PNDH_hZPyvu6OEkq-oap5aLAteKfz8vhMQCZmP9Q48F506ojM6nsGUgb-scFWtm7aNuwhEyWny8rYO2lmY0-92yQ7Pyd-aNpmol1D9EqQBcA3dQsAAwId7KykRZUvN-6JxkY3NtqHTd0ikv-zgYPbHW-qkE5gZhSxZFggQMcEt7yHElmW5q_ywm7BVt_VaFCY9tSopUB6ZaXnG42zSTwCqdAQor5Ft11plrkfqnLDDaiPlnLXhXtV7zPvT_G9hgLWH3ASgaD0YiFsyzK9_VY09VnfiGJopx1qEkasXShp_cNCaFDOeaYpMNJ7IjIP4am-1HpmELVljgAagnggPv9GIeEC3lg4pJ3IwO9c-_7RKl2xeCaaf0wMwbP2h9jH6YhjfJXeL49yW8b8=w2754-h1878-no",link:"/project",section:"Northumberland Outward Bounds",alt:"Northumberland Outward Bounds Site plan"}]},{name:"Donated House",images:[{URL:"./building/1.jpg",link:"/project",alt:"donated house roof tiling",section:"Donated House",isLocalImg:!0}]},{name:"Ghana eARThouse",images:[{URL:"https://lh3.googleusercontent.com/LlfdIF2yz8oNsz8t3nLgwBzvYRGlEZe20fKNEopKa6MttUXbLCXx73HhMBf-qeb14aONN-ojeLg9JtCSo9ZjMXmmSSLj-xlgUAtWMKaqZs-m6uMH1Jiifm4dde989BZJ4K42GeJv3byU4yj6u7Mj_EGj3OMfvg0D096CxubxGoUSS7frYNoZRZDY9-XM2y2C82KCOA2r3nCtBxHwf3Ctf_8MGjCU67lpvw4U_hi-wRJxOtI2659uVXP9MhM5_E49IHRg1IDMqAvfUcjIbr5loAB_gd_pbsUl5Pku1q3YAgHy9gvgQCxa4OSMvG4OlevRcqbAGsiI-4mF2yES3n7rxjPrS8pCgclDsWONqfO6ghrpQm_V3kXLJOCfClBPDv3pkETb-FguWs9ZmFgq0klQrJyHq57aNUSdQjYyYslkFdK-JIe8B-JIB6reWI4Hrcp0kiqIbmovv3jMc6WnL9SGN-kkPA-fCgCoMMhDHi2bCFLAdyCjtAyVxteUG93RDPKSRLI77qbNUslA4ksPb6TLzOFRqJYZmKz9AHhtFoHgbJV0Ohf0zlPMaZiCWcjCNbxRoNuGbbp6ZT7glRouP4JxHqn1xcfB8ET7DDbSRMf7gOYN-FYLBav31BVBxZz5OzzfpOMlsbBBR6i87Ps7MRcfHJpML9ZLGPM=w3072-h1750-no",link:"/project",alt:"Ghana rammed earth formwork",section:"Ghana eARThouse"},{URL:"https://lh3.googleusercontent.com/M7nfmV3WsPEA1iCb8d7MBl4VGVcRxiJRpssuYgBRq0DqMUzJ-XYgkCsV3EdObq6CPDZR5D9m5y4t4kzr_I3-aPvlSRH1b9QvMkeSIT4FY-_m-Ed18_5lBvGYnOaTSjGV_z0_YOWKCqTS4vG_hBSHcWEssy8wRWAyyxKRrxLDsaInG5TjcA0ep28BJ5Gv5qZEA5OJ2sTqZq9poh88N7WMx4caJxfbVNRwNKOSpCBUofcYW6ec_eTGIMEr-uk_Gpd1qrye7zamw6UmUrVDAnjwtLN8brw6ALfvTBvVd_-w0YJasN1siP2MYFEygqu_zpsI1403tlwplEzq0c1tk7QtTntGcjcVwUaKc70-rg9UdH-JtnuOdIcJA_FVo_cTYbgxkiJeRXm9p1GrrNA9pmkmSuZcCRFdNrb_qbJt5dPeqak4JIfJyUYjOnUhFk-Y_GcKBYF9pBTeTzmKedG6CWXS-AjGmwzjrCZyNhY82Xd0mAydqym7XmJfvdTRbhpifinQ7j9Pi8N_B_k9Arvme-_CswIIJ0ympPo6pOzWrp5R7Demu1-1FHkWe-tOajF_vm3Q-I7_L7DcPx1HubDlO_MPvdZKxXDjQ9hdMwlKwx5h10wrXgtYSwyW1c2ybbE4NVEdtGI9dRJPwtiLe58i_USAcUP2gYo7yZ4=w1080-h608-no",link:"/project",alt:"Ghana opokus house",section:"Ghana eARThouse"},{URL:"https://lh3.googleusercontent.com/IgH-LLmgo506x1QeZS7vCg0OqRKFj0PED-H9rhsZrsEbU9J_Z8k-qF1teM5zX4ElnaAjhk98RojX6aQ0Vy-TJbGeZfq6tFFKwqcgU71gwr8JP6lrVL-5FMctTDri3Phh6Bv8_tAf3eawnrFif1Xar_K6VTiSWMS0dCAZ1ogJ_sqmgzJXqjqLEQTvpK04rdPrN0JzSYVFG8uYwBYLjTd1Q00XAO8lkltVVUpxV2Ns7HtZm8MDVh5OZbud42ArTWLrHh6UKku9RbIJvPzP8rotAAGMl_vuRCx2_7PaJ8LQL5gAR16eo_-7hgXAGdoOguGm6t8msumhOFbvr-JJ134D1Cmyew4vjlCUE-rvFo1wGNwwd_TwgZicpiwIaugWpFDCZJcnIB7FNeEqSOqPDFwsHZ_KmoBNOGyBP1Ifbva2jttU22d2heLjqPQzekLPC3sE374QRag_80zYrK9UqjqMFXrP1zhn0SCmXyQEFYtKXFe3VVX2KGw-07AXOkuwdTSOIU69Xdwxw0EFAENFGiEWsOrcCHi6zRbn0-e17loTrB_mbVrMBvurEbE9DPqMSVRZOgJ2TTRIaVdTpGJH0yZs0xamj8uAsMTDaHHySnUnTs_nV_c-aU2_ddbG2t-bEY4pz1NQsg5RFz3LxwQT1JKNKC4qetRCvPU=w805-h532-no",link:"/project",alt:"Ghana rammed earth formwork",section:"Ghana eARThouse"}]},{name:"About",images:[{URL:"./gina.png",link:"/about",isLocalImg:!0,alt:"Gina Windley",section:"About"}]}],x=["#fff5eb","#fff5ea","#fff4e9","#fff4e8","#fff3e7","#fff3e6","#fff2e6","#fff2e5","#fff1e4","#fff1e3","#fff0e2","#fff0e1","#ffefe0","#ffefdf","#ffeede","#ffeedd","#feeddc","#feeddb","#feecda","#feecd9","#feebd8","#feebd7","#feead6","#feead5","#fee9d4","#fee9d3","#fee8d2","#fee8d1","#fee7d0","#fee6cf","#fee6ce","#fee5cc","#fee5cb","#fee4ca","#fee4c9","#fee3c8","#fee2c7","#fee2c5","#fee1c4","#fee1c3","#fee0c2","#fedfc0","#fedfbf","#fedebe","#feddbd","#feddbb","#fedcba","#fedbb9","#fedab7","#fddab6","#fdd9b4","#fdd8b3","#fdd8b2","#fdd7b0","#fdd6af","#fdd5ad","#fdd4ac","#fdd4aa","#fdd3a9","#fdd2a7","#fdd1a6","#fdd0a4","#fdd0a3","#fdcfa1","#fdcea0","#fdcd9e","#fdcc9d","#fdcb9b","#fdca99","#fdc998","#fdc896","#fdc795","#fdc693","#fdc591","#fdc490","#fdc38e","#fdc28d","#fdc18b","#fdc089","#fdbf88","#fdbe86","#fdbd84","#fdbc83","#fdbb81","#fdba7f","#fdb97e","#fdb87c","#fdb77a","#fdb679","#fdb577","#fdb475","#fdb374","#fdb272","#fdb171","#fdb06f","#fdaf6d","#fdae6c","#fdad6a","#fdac69","#fdab67","#fdaa65","#fda964","#fda762","#fda661","#fda55f","#fda45e","#fda35c","#fda25b","#fda159","#fda058","#fd9f56","#fd9e55","#fd9d53","#fd9c52","#fd9b50","#fd9a4f","#fc994d","#fc984c","#fc974a","#fc9649","#fc9548","#fc9346","#fc9245","#fc9143","#fc9042","#fb8f40","#fb8e3f","#fb8d3e","#fb8c3c","#fb8b3b","#fa8a3a","#fa8938","#fa8837","#fa8736","#fa8534","#f98433","#f98332","#f98230","#f8812f","#f8802e","#f87f2c","#f77e2b","#f77d2a","#f77b29","#f67a27","#f67926","#f57825","#f57724","#f57623","#f47522","#f47420","#f3731f","#f3721e","#f2701d","#f26f1c","#f16e1b","#f16d1a","#f06c19","#f06b18","#ef6a17","#ef6916","#ee6815","#ed6714","#ed6614","#ec6513","#ec6312","#eb6211","#ea6110","#ea6010","#e95f0f","#e85e0e","#e85d0e","#e75c0d","#e65b0c","#e55a0c","#e4590b","#e4580b","#e3570a","#e25609","#e15509","#e05408","#df5308","#de5208","#dd5207","#dc5107","#db5006","#da4f06","#d94e06","#d84d05","#d74c05","#d64c05","#d54b04","#d44a04","#d24904","#d14804","#d04804","#cf4703","#cd4603","#cc4503","#cb4503","#c94403","#c84303","#c74303","#c54203","#c44103","#c24102","#c14002","#bf3f02","#be3f02","#bd3e02","#bb3e02","#ba3d02","#b83d02","#b73c02","#b53b02","#b43b02","#b23a03","#b13a03","#af3903","#ae3903","#ac3803","#ab3803","#aa3703","#a83703","#a73603","#a53603","#a43503","#a33503","#a13403","#a03403","#9f3303","#9d3303","#9c3203","#9b3203","#993103","#983103","#973003","#953003","#942f03","#932f03","#922e04","#902e04","#8f2d04","#8e2d04","#8d2c04","#8b2c04","#8a2b04","#892b04","#882a04","#862a04","#852904","#842904","#832804","#812804","#802704","#7f2704"],P=a("43ba"),R=a.n(P),E=function(){return R()({height:window.innerHeight,width:window.innerWidth,cell_size:800+10*Math.random(),x_colors:x})},J={data:function(){return{nestedImages:[]}},props:{images:Array},created:function(){this.nestedImages=this.getShuffledImages()},mounted:function(){this.updateCanvasPatterns()},methods:Object(j["a"])({},Object(k["b"])(["updateInfoPageData"]),{getImgUrl:function(e){var t=a("e3ff");return t(e)},handleClick:function(e){this.updateInfoPageData(e)},getShuffledImages:function(){for(var e=[],t=0;t<5;t++)e.push({id:t});for(var a=0;a<this.images.length;a++)e.push.apply(e,Object(O["a"])(this.images[a].images));function n(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}return n(e)},updateCanvasPatterns:function(){for(var e=0;e<5;e++){var t=E();t.canvas(document.querySelector(".canvas-".concat(e)))}}})},Y=J,V=(a("eebb"),Object(d["a"])(Y,S,y,!1,null,"1ef331d4",null)),W=V.exports,q={name:"home",components:{GinaLine:M,ProjectsContainer:W},data:function(){return{projects:G}},methods:Object(j["a"])({},Object(k["b"])(["updateInfoPageData"]))},I=q,H=(a("8418"),Object(d["a"])(I,h,v,!1,null,"9fbc9afe",null)),Z=H.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"projects"},[a("VueperSlides",{attrs:{disableArrowsOnEdges:!0,touchable:!0,"slide-ratio":.3}},e._l(e.images,function(t,n){return a("VueperSlide",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.imageURL(t),expression:"imageURL(image)",arg:"background-image"}],key:n})}),1)],1)},F=[],T=a("b1b5"),N={name:"Projects",data:function(){return{}},components:{VueperSlides:T["VueperSlides"],VueperSlide:T["VueperSlide"]},computed:Object(j["a"])({},Object(k["c"])(["infoPageData"]),{images:function(){return this.infoPageData.images},imageMarkup:function(){return"<div>hello</div>"}}),methods:{imageURL:function(e){return e.isLocalImg?this.getImgUrl(e.URL):e.URL},getImgUrl:function(e){var t=a("e3ff");return t(e)}}},D=N,X=(a("81a4"),Object(d["a"])(D,_,F,!1,null,"39a7a92e",null)),Q=X.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"about"},[n("div",{staticClass:"about__img-container",style:e.imageStyle},[n("img",{staticClass:"about__img",attrs:{src:a("3710"),alt:"Gina Windley"}})]),e._m(0)])},K=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about__text-div"},[a("p",{staticClass:"about__text"},[e._v("\n      I'm Gina Windley, in July 2015 I graduated with an Upper Second Class Honours in Architecture BA (Hons) from Northumbria University. \n      "),a("br"),a("br"),e._v("\n      I am now on the next chapter of my Architecture accreditation in my final year of studying an MArch Sustainable Architecture degree at the Centre for Alternative Technology Graduate School for the Environment. After a year out volunteering building following working as a Part I Architectural Assistant in the Lake District.\n      "),a("br"),a("br"),e._v("\n      My architectural interest lies in sustainable design as a response to both social and historical contexts of the site and environment.  Using innovative design strategies I overcome challenges that occur throughout the design process, with the aim of creating beautiful spaces for people to occupy.\n      "),a("br"),a("br"),e._v("\n      Thank you for taking the time to view my portfolio, please feel free to contact me using the information provided in the Contact page.\n    ")])])}],$={name:"Projects",data:function(){return{imageStyle:{backgroundImage:"url(".concat(E().png(),")")}}},computed:Object(j["a"])({},Object(k["c"])(["infoPageData"]))},ee=$,te=(a("8ab8"),Object(d["a"])(ee,z,K,!1,null,"667a81c9",null)),ae=te.exports;n["a"].use(p["a"]);var ne=new p["a"]({routes:[{path:"/",name:"home",component:Z},{path:"/project",name:"project",component:Q},{path:"/about",name:"about",component:ae}],scrollBehavior:function(){return{x:0,y:0}}});a("7f7f"),a("7514"),a("54ba");n["a"].use(k["a"]);var re={infoPageData:{}},oe={},ce={updateInfoPageData:function(e,t){var a=e.commit,n=(e.state,G.find(function(e){return e.name===t.section}));a("UPDATE_INFO_PAGE_DATA",n)}},fe={UPDATE_INFO_PAGE_DATA:function(e,t){e.infoPageData=t}},se=new k["a"].Store({state:re,getters:oe,actions:ce,mutations:fe}),ie=a("283e"),de=a.n(ie);a("2ec8");n["a"].use(de.a),n["a"].config.productionTip=!1,new n["a"]({router:ne,store:se,render:function(e){return e(m)}}).$mount("#app")},"58d7":function(e,t,a){e.exports=a.p+"img/1.0f7e35b7.jpg"},"5c0b":function(e,t,a){"use strict";var n=a("5e27"),r=a.n(n);r.a},"5e27":function(e,t,a){},"7aea":function(e,t,a){},"7c30":function(e,t,a){},"81a4":function(e,t,a){"use strict";var n=a("7c30"),r=a.n(n);r.a},8418:function(e,t,a){"use strict";var n=a("8a3d"),r=a.n(n);r.a},"8a3d":function(e,t,a){},"8ab8":function(e,t,a){"use strict";var n=a("fffb"),r=a.n(n);r.a},"8bbc":function(e,t,a){},"9d64":function(e,t){e.exports="data:image/png;base64,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"},b7ac:function(e,t,a){},c6ca:function(e,t,a){"use strict";var n=a("b7ac"),r=a.n(n);r.a},e3ff:function(e,t,a){var n={"./FINALBRIGHTMAP.jpg":"0210","./building/1.jpg":"58d7","./fdp/1.jpg":"2aed","./gina.png":"3710","./logo.png":"9d64"};function r(e){var t=o(e);return a(t)}function o(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id="e3ff"},eebb:function(e,t,a){"use strict";var n=a("7aea"),r=a.n(n);r.a},fffb:function(e,t,a){}});
//# sourceMappingURL=app.455fce83.js.map