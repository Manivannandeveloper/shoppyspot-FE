_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[125],{"3CYa":function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),i=t("gy5E"),s=t("YFqc"),A=t.n(s),c=t("B77O"),o=t("mo9o"),r=t("1Yj4"),m=t("ok1R"),u=t("rhny"),d=t("UU0N"),g=t("OAj/"),f=t.n(g),h=t("dlEN"),p=t.n(h),b=t("mJAf"),N=t.n(b),C=t("yl6w"),E=t("LPih"),y=t.n(E),v=t("tZOm"),w=t.n(v),B=t("SeLL"),I=t("K4dJ"),R=l.a.createElement,k=function(e){var a=e.logoName;Object(n.useEffect)((function(){setTimeout((function(){document.querySelectorAll(".loader-wrapper").style="display:none"}),2e3)}),[]);return R(l.a.Fragment,null,R("header",{className:"header-5"},R("div",{className:"mobile-fix-option"}),R(r.a,null,R(m.a,null,R(u.a,{sm:"12"},R("div",{className:"main-menu"},R("div",{className:"menu-left"},R("div",{className:"brand-logo"},R(o.a,{logo:a}))),R("div",{className:"menu-right pull-right"},R("div",null,R("nav",{id:"main-nav"},R(c.a,null))),R("div",{className:"top-header"},R("ul",{className:"header-dropdown"},R("li",{className:"mobile-wishlist"},R(A.a,{href:"/page/account/wishlist"},R("a",null,R(d.a,{src:p.a,alt:""})))),R("li",{className:"onhover-dropdown mobile-account"},R(d.a,{src:N.a,alt:""}),R("ul",{className:"onhover-show-div"},R("li",null,R(A.a,{href:"/page/account/login"},R("a",{"data-lng":"en"},"Login"))),R("li",null,R(A.a,{href:"/"},R("a",{"data-lng":"en"},"Logout"))))))),R("div",null,R("div",{className:"icon-nav"},R("ul",null,R("li",{className:"onhover-div mobile-search"},R("div",null,R(d.a,{src:f.a,onClick:function(){document.getElementById("search-overlay").style.display="block"},className:"img-fluid",alt:""}))),R(C.a,{icon:w.a}),R(B.a,{icon:y.a})))))))))),R(I.a,null))},O=t("IVIq"),U=t("nLc3"),x=t("E9TD"),D=t("Ig1y"),G=t("ySeX"),M=t("EYGY"),F=t("UGBA"),j=t("Czz6"),S=t("2dXf"),T=t("Rnrp"),Y=t("qhky"),W=t("hRBw"),J=t.n(W),Q=t("nULy"),L=l.a.createElement;a.default=Object(i.a)((function(){return Object(n.useEffect)((function(){document.documentElement.style.setProperty("--theme-deafult","#5fcbc4")})),L(n.Fragment,null,L(Y.a,null,L("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),L("link",{rel:"icon",type:"image/x-icon",href:J.a?J.a:""})),L("div",{className:"bg_cls"},L(T.a,null),L(k,{logoName:"logo/13.png"}),L(O.default,null),L(U.default,null),L(j.a,{title:"title1  section-t-space title5",inner:"title-inner1",hrClass:!0}),L(x.a,{type:"jewellery",designClass:"p-t-0 j-box ratio_square",productSlider:S.c,noSlider:"true",cartClass:"cart-info cart-wrap"}),L(D.a,{layoutClass:"section-b-space"}),L(Q.default,{bg:"parallax-banner18",parallaxClass:"text-center p-left",title:"sale",subTitle1:"fashion trends",subTitle2:"special offer"}),L(G.a,{type:"jewellery",heading:"exclusive products",title:"title1  section-t-space title5",inner:"title-inner1",hrClass:!0,designClass:"p-t-0 j-box ratio_square",noSlider:"true",cartClass:"cart-info cart-wrap"}),L("section",{className:"instagram ratio_square section-b-space"},L(M.a,{type:"jewellery"})),L(F.a,{logoName:"logo/13.png",layoutClass:"black-subfooter"})))}))},Czz6:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),i=t("1Yj4"),s=t("ok1R"),A=t("rhny"),c=l.a.createElement;a.a=function(e){var a=e.title,t=e.inner,n=e.line,o=e.hrClass;return c(l.a.Fragment,null,c("div",{className:a},c("h4",null,"special offer"),c("h2",{className:t},"top collection"),n?c("div",{className:"line"}):o?c("hr",{role:"tournament6"}):""),c(i.a,null,c(s.a,null,c(A.a,{lg:"6",className:"m-auto"},c("div",{className:"product-para"},c("p",{className:"text-center"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"))))))}},E9TD:function(e,a,t){"use strict";var n=t("HALo"),l=t("jT3O"),i=t("q1tI"),s=t.n(i),A=t("OS56"),c=t.n(A),o=t("+TN3"),r=t("UYTu"),m=t("2dXf"),u=t("STcy"),d=t("tfG8"),g=t("1Yj4"),f=t("ok1R"),h=t("rhny"),p=t("/5QC"),b=t("EO2r"),N=t("U8OX"),C=s.a.createElement;function E(){var e=Object(l.a)(["\n    query  products($type:_CategoryType!,$indexFrom:Int! ,$limit:Int!) {\n        products (type: $type,indexFrom:$indexFrom ,limit:$limit){\n            items {\n                id\n                title\n                description \n                type\n                brand\n                category \n                price\n                new\n                stock\n                sale\n                discount\n                variants{\n                    id\n                    sku\n                    size\n                    color\n                    image_id\n                }\n                images{\n                    image_id\n                    id\n                    alt\n                    src\n                }\n            }\n        }\n    }\n"]);return E=function(){return e},e}var y=Object(r.a)(E());a.a=function(e){var a=e.type,t=e.title,l=e.subtitle,A=e.designClass,r=e.line,E=e.noSlider,v=e.cartClass,w=e.productDetail,B=e.noTitle,I=e.titleClass,R=e.innerTitle,k=Object(i.useContext)(p.a),O=Object(i.useContext)(b.c),U=Object(i.useContext)(N.a),x=k.quantity,D=Object(o.a)(y,{variables:{type:a,indexFrom:0,limit:8}}),G=D.loading,M=D.data;return C(s.a.Fragment,null,C("section",{className:A},E?C(g.a,null,C(f.a,null,C(h.a,null,B?"":C("div",{className:I},l?C("h4",null,l):"",C("h2",{className:R},t),r?C("div",{className:"line"}):""),M&&M.products&&M.products.items&&0!==M.products.items.length&&!G?C(c.a,Object(n.a)({},m.b,{className:"product-4 product-m no-arrow"}),M&&M.products.items.slice(0,8).map((function(e,a){return C("div",{key:a},C(u.a,{product:e,productDetail:w,addCompare:function(){return U.addToCompare(e)},addWishlist:function(){return O.addToWish(e)},addCart:function(){return k.addToCart(e,x)},key:a,cartClass:v}))}))):M&&M.products&&M.products.items&&0===M.products.items.length?C(h.a,{xs:"12"},C("div",null,C("div",{className:"col-sm-12 empty-cart-cls text-center"},C(Media,{src:emptySearch,className:"img-fluid mb-4 mx-auto",alt:""}),C("h3",null,C("strong",null,"Your Cart is Empty")),C("h4",null,"Explore more shortlist some items.")))):C("div",{className:"row mx-0 margin-default"},C("div",{className:"col-xl-3 col-lg-4 col-6"},C(d.a,null)),C("div",{className:"col-xl-3 col-lg-4 col-6"},C(d.a,null)),C("div",{className:"col-xl-3 col-lg-4 col-6"},C(d.a,null)),C("div",{className:"col-xl-3 col-lg-4 col-6"},C(d.a,null)))))):C(s.a.Fragment,null,C("div",{className:"title1 title-gradient  section-t-space"},l?C("h4",null,l):"",C("h2",{className:"title-inner1"},t)),C(g.a,null,C(f.a,null,M&&M.products.items.slice(0,8).map((function(e,a){return C(h.a,{xl:"3",sm:"6",key:a},C("div",null,C(u.a,{product:e,productDetail:w,addCompare:function(){return U.addToCompare(e)},addWishlist:function(){return O.addToWish(e)},addCart:function(){return k.addToCart(e,x)},key:a})))})))))))}},EYGY:function(e,a,t){"use strict";var n=t("HALo"),l=t("jT3O"),i=t("q1tI"),s=t.n(i),A=t("OS56"),c=t.n(A),o=t("1Yj4"),r=t("ok1R"),m=t("rhny"),u=t("+TN3"),d=t("UYTu"),g=t("2dXf"),f=s.a.createElement;function h(){var e=Object(l.a)(["\n  query instagram($type: String!) {\n    instagram(type: $type) {\n      img\n    }\n  }\n"]);return h=function(){return e},e}var p=Object(d.a)(h());a.a=function(e){var a=e.type,t=Object(u.a)(p,{variables:{type:a}}).data;return f(o.a,null,f(r.a,null,f(m.a,{md:"12"},f("h2",{className:"title-borderless"},"# instagram"),f(c.a,Object(n.a)({},g.i,{className:"slide-5 no-arrow slick-instagram"}),t&&t.instagram.map((function(e,a){return f("div",{key:a},f("a",{href:null},f("div",{className:"instagram-box"},f("img",{src:e.img,className:"bg-img",alt:"Avatar",style:{width:"100%"}}),f("div",{className:"overlay"},f("i",{className:"fa fa-instagram","aria-hidden":"true"})))))}))))))}},HALo:function(e,a,t){"use strict";function n(){return(n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}t.d(a,"a",(function(){return n}))},IVIq:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),i=t("OS56"),s=t.n(i),A=t("b3GC"),c=l.a.createElement,o=[{img:"home47",title:"summer salean exemplart gateway to happiness",desc:"all jewellery",link:"#",classes:"text-center bg-size blur-up lazyloaded "},{img:"home48",title:"an exemplart gateway to happiness",desc:"flat 20% off",link:"#",classes:"text-center bg-position p-right"}];a.default=function(){return c(n.Fragment,null,c("section",{className:"p-0 height-100"},c("div",{className:"home-slider"},c(s.a,null,o.map((function(e,a){return c(A.default,{key:a,img:e.img,link:e.link,title:e.title,desc:e.desc,classes:e.classes})}))))))}},"Ie/Y":function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),i=t("1Yj4"),s=t("ok1R"),A=t("rhny"),c=(t("JzZ/"),t("dtqM"),t("k2Z+"),t("zUnT"),t("T8au"),l.a.createElement);a.a=function(e){var a=e.layout,t=e.fluid;return c(n.Fragment,null,c("div",{className:"sub-footer ".concat(a)},c(i.a,{fluid:t},c(s.a,null,c(A.a,{xl:"6",md:"6",sm:"12"},c("div",{className:"footer-end"},c("p",null,c("i",{className:"fa fa-copyright","aria-hidden":"true"})," 2022-23 powered by Health Beauty Bank"))),c(A.a,{xl:"6",md:"6",sm:"12"},c("div",{className:"payment-card-bottom"},"Developed by ",c("a",{href:"https://inno8designs.in/"},"inno8 design")))))))}},Ig1y:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),i=t("1Yj4"),s=t("ok1R"),A=t("rhny"),c=t("2dXf"),o=t("u4gs"),r=l.a.createElement,m=[{link:c.o,title:"free shipping",service:"free shipping world wide"},{link:c.B,title:"24 X 7 service",service:"online service for new customer"},{link:c.z,title:"festival offer",service:"new online special festival offer"},{link:c.A,title:"online payment",service:"new online special festival offer"}];a.a=function(e){var a=e.layoutClass,t=e.hrLine;return r(n.Fragment,null,r("section",{className:a},r(i.a,{className:"absolute-bg"},r("div",{className:"service p-0 "},r(s.a,null,m.map((function(e,a){return r(A.a,{key:a,lg:"3",sm:"6",className:" ".concat(t?"service-block1":"service-block")},r(o.a,{link:e.link,title:e.title,service:e.service,hrLine:t}))})))))))}},"JzZ/":function(e,a){e.exports="data:image/png;base64,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"},LPih:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfiDBoHJTpGvFUDAAABEUlEQVQ4y5WRwUsCQRjFf21RaRgEHewSTngORBAPCh78I7p66+of0im8SYf+jEpEL7oiiwoeJ7oEguTBFQs6rJdtdzbU2Xlz+OY93vu+GT4whsTDY0HCLDakEM9o+dUhFy9w4Nd7Hphp3SfhtcA4Rvs72n8TTllwyVoTaDAPyYiidsKEihUQh7zGfkEW2yRQwubbJFCmo9IkPyT3BnpU4CigayS39BXDMdcIBDcIBIIVfTUADlUOFUOaTyQSyYB3JC6Emwao8cTUt0gkH/zu/9QZUx7JaLeh4IpnvvC2nq5Jo50QtFjxFnnWP82KBJq0SdOlqdECuKSAc5a7teiEAXVS1LE1WoAMr7i8RP6wTTPBBnZRVxAmcOglAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTEyLTI2VDA2OjM3OjU4KzAxOjAwTSw4mAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0xMi0yNlQwNjozNzo1OCswMTowMDxxgCQAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"},"OAj/":function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfiDBoHNTt7eXfEAAABSElEQVQ4y5WSzStEURiHn3uH8tWQlFFyx4JM3f2MnaKxZ2EnpcmUhfEPyMaCkJWSNBYospikrEasbMaCuAtTsyA0UwrzUbNgLCTnXnfOvX678/R7Oud9O/AbL1FOeKBMlhQLBJAmQo5zpgniR2eUOHm2aLYvq2xyz5CFdpLAoNtOWOIanw1XWOEWrxUP8IK/ykNVjtiwwgtmJbNpFOgVQQ9FGqTr2GFevDLMKSWpcExYFDTu5PsmTZcoNFJ0EPLinlSytDsIPnKicEPQQQhxJR6bKNEnFVJMmMEah5L6CI/UmVEbz0xWqWtkGfuL+3kjYlMPkMbAYz/YEwl0gbQwxzsVKuzaK60sU8Bgm0XWSVImSYgYn2ZFMUn1DKLTQZ4MZ2QAiLGKwh7jfOAy37fsU+NWgOj/lakfxeNSuOSVYXTxVzlnhgNqvwA0RlM76yQ71AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0xMi0yNlQwNjo1Mzo1OSswMTowMAoFWRUAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTItMjZUMDY6NTM6NTkrMDE6MDB7WOGpAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="},Rnrp:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),i=t("DCcX"),s=t("CaDr"),A=t("ok1R"),c=t("rhny"),o=t("sOKU"),r=t("UU0N"),m=t("uBiN"),u=t("L3zb"),d=t("iGl2"),g=t.n(d),f=l.a.createElement;a.a=function(){var e=Object(n.useState)(!0),a=e[0],t=e[1],l=function(){return t(!a)};return f(i.a,{isOpen:a,toggle:l,className:"theme-modal modal-lg",centered:!0},f("div",null,f(s.a,{className:"modal1"},f(A.a,{className:"compare-modal"},f(c.a,{lg:"12"},f("div",{className:"modal-bg"},f(o.a,{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:l},f("span",{"aria-hidden":"true"},"\xd7")),f("div",{className:"offer-content"},f(r.a,{src:g.a,className:"img-fluid blur-up lazyload",alt:""}),f("h2",null,"newsletter"),f(m.a,{action:"https://pixelstrap.us19.list-manage.com/subscribe/post?u=5a128856334b598b395f1fc9b&id=082f74cbda",className:"auth-form needs-validation",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank"},f("div",{className:"form-group mx-sm-3"},f(u.a,{type:"text",className:"form-control",name:"EMAIL",id:"mce-EMAIL",placeholder:"Enter your email",required:"required"}),f(o.a,{type:"submit",className:"btn btn-solid",id:"mc-submit"},"subscribe"))))))))))}},T8au:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAE80lEQVRIibWWa2wUVRiGn7ntzC67LYUWBAxpQUqkBm+AtrUQE4iQIpgmhGAMYPCCaIiJPxRI9I8GNdGooEAgEECNoCiIYCIaLm0pVLDWAoVSCZXaUiiku1v2MrMznz+WJVCQooH335mcc5555zvzvUeJRiL0ojFAOVACjAD6AQpwEWgG9gM7gYM320S5CehxYDEwsbc3uaw9wFLgp/8CWg68fIuAnloNvNAbSAN2A2X/E5JRLTABSGQeqD0mVN4GCMA40rW7oqtBK4Di2wDJ6EFgfWaQ+XRjSdu9ExoPVGYcfXqHIACfQdpREXDkDoIAxurALM/zME0fpuW/4SwvlULVdQCitoBPQYAsANfBcT0Mn3ndumQiTjJpo6rqLB14zDRNYrEYy1esxvT7qXiynNa2dtrazyIiTCgr4aNlK8gZks/8meUoP65EyR/F9s5+jC4sICsYYNumb9F0jcEDB9LecQ7XTTF96hRM04ebckt04B7Tsqg+UMve6oOUFo9j9osLGTliGFU1tcx5eiYnmjfScbGL0okjcTYsxPhuI9ZIg99aRnFs5jsMD7qsWrcB13GYNnUKx5ua+b2+gUAgwIyK6XRHo/kq0BegKxzmsdJiKqaVU3XgIFmhEO+//Rb1R46ybOUaFr6ygCdKx+CeOkTKB3aTwxvPP8XmHbv4YvMW3nz9NfJychhfWszxppPk9Mvh0XFjSDk2qFqWtnjRoiW6YRiaprH56y3UH23kpefm4nke0Wg3mqZRMa2cTV9t4lRnN49MrsB37jBe0cNY89bQ3nqG+wsLKJ88iZoD1eTmDeDewhEMGXwXAb9FfsEwUqbPIRqJ/B2JRMROJqSttVUi4bCIiNjJpLS0/CWO44iISOOxRqmq3i8ZnQ0npO1c15Wx57pypuW0NJ1sFhER17Glrb1DoiIS/WVdhxKNRPaKyHhVVQn4/TiOg5NK0ScYZO+ePTQ2NhKLx8nt35/s7Cw6L1zkfDjGsPyh5PUNUVlZSTKZpLCwkDlz5yKeRyIeR/WZKIZOcv9mWPHMIRWoVhQFEeFSLIbtOIgIALquEw6HudDZic80KSq6D9d18eIRsvw+wuEwiqrieh62bROLxUjE47iagWPo2LVb4YOZkDu0RolGIqOB+hv9P4ZhYFoW4a4uHMchFAphWhYAFzo7iUaj5BcU4LkuiUSCRCyGlZeHB7BrFbJmPph+GD2pJNPr6oAHroaICJqmAeDz+RARbNsm417XdTRNw3EcVEUBFFJ+CwFY/yry/ceQFYQBBU3k3D0yAyqmR1u/ZXkeBLPTSdbSgKxdAH9UwaDBYJgQyJ6Ebv18dfCtBZ69ZYAIWEHwqeCk4If3kG3vQrwbBg0H8UDVvkHVZuC51yXsYeChmwOAPqG0AwGqPkd2fggn6iC3PwT7gZMEVWtEUUfhucD1UW4B+0jn07Uy/GClGyvdEfh1C7JvHRypBMuA3KFpl04SAtkNGP4youfDqOk66z22S5CO4TV43jx0H/S53NEdDxqroX4nUrcdTjWAqcHgAlBUSDlpi2afL8kaOBs77uK5ZED/ft3StCmk7CWcrC7l+B6k+QCcroPopfRpCuWlHYibBmlGLYZ/KWZgK74AJLoh3A6a0QsoFII/65BPKsroPDMVM1BCoG8+upGNCKBEUNUWNL0GzdyBZuxGuVxEMwjJ2DWgfwC09kc21Mu6AAAAAABJRU5ErkJggg=="},UGBA:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),i=t("Ie/Y"),s=t("1Yj4"),A=t("ok1R"),c=t("rhny"),o=t("nsn4"),r=(t("2dXf"),t("mo9o")),m=l.a.createElement;a.a=function(e){var a=e.layoutClass,t=e.logoName,l=Object(n.useState)(),u=l[0],d=l[1],g=Object(n.useState)(0),f=g[0],h=g[1],p=window.innerWidth<750;return Object(n.useEffect)((function(){var e=function(){window.innerWidth<750?(h(0),d(!1)):d(!0)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),m(n.Fragment,null,m("footer",{className:"jewel-footer"},m("div",{className:"white-layout"},m("section",{className:"p-0 "},m(s.a,{fluid:!0},m(A.a,{className:"footer-theme2 section-light footer-border"},m(c.a,null,m("div",{className:" footer-block"},m("div",{className:"footer-container"},m("div",{className:"footer-title ".concat(u&&1==f?"active":"","  footer-mobile-title")},m("h4",{onClick:function(){h(1),d(!u)}},"about",m("span",{className:"according-menu"}))),m(o.a,{isOpen:!p||1===f&&u},m("div",{className:"footer-contant"},m("div",{className:"footer-logo"},m(r.a,{logo:t})),m("div",{className:"social-white"},m("ul",null,m("li",null,m("a",{href:"https://www.facebook.com",target:"_blank"},m("i",{className:"fa fa-facebook","aria-hidden":"true"}))),m("li",null,m("a",{href:"https://plus.google.com",target:"_blank"},m("i",{className:"fa fa-google-plus","aria-hidden":"true"}))),m("li",null,m("a",{href:"https://twitter.com",target:"_blank"},m("i",{className:"fa fa-twitter","aria-hidden":"true"}))),m("li",null,m("a",{href:"https://www.instagram.com",target:"_blank"},m("i",{className:"fa fa-instagram","aria-hidden":"true"}))),m("li",null,m("a",{href:"https://rss.com",target:"_blank"},m("i",{className:"fa fa-rss","aria-hidden":"true"})))))))))),m(c.a,{className:"form-p p-0"},m("div",{className:"footer-block"},m("div",{className:"subscribe-white"},m("h2",{className:"text-white"},"newsletter"),m("form",null,m("div",{className:"form-group"},m("input",{type:"text",className:"form-control",id:"exampleFormControlInput",placeholder:"Enter your email"}),m("button",{type:"submit",className:"btn btn-solid black-btn"},"subscribe")))))),m(c.a,null,m("div",{className:" footer-block"},m("div",{className:"footer-container"},m("div",{className:"footer-title ".concat(u&&2==f?"active":""," ")},m("h4",{onClick:function(){h(2),d(!u)}},"store information",m("span",{className:"according-menu"}))),m(o.a,{isOpen:!p||2===f&&u},m("div",{className:"footer-contant"},m("ul",{className:"contact-details"},m("li",null,"Multikart Demo Store, Demo store India 345-659"),m("li",null,"Call Us: 123-456-7898"),m("li",null,"Email Us: ",m("a",{href:"#"},"Support@Fiot.com")),m("li",null,"Fax: 123456"))))))))))),m("div",{className:"white-layout box-layout"},m(s.a,null,m("section",{className:"small-section"},m(A.a,{className:"footer-theme2"},m(c.a,null,m("div",{className:"footer-link link-white"},m("div",{className:"footer-title \t".concat(u&&3==f?"active":""," ")},m("h4",{onClick:function(){h(3),d(!u)}},"my account",m("span",{className:"according-menu"}))),m(o.a,{isOpen:!p||3===f&&u},m("div",{className:"footer-contant"},m("ul",null,m("li",null,m("a",{href:"#"},"mens")),m("li",null,m("a",{href:"#"},"womens")),m("li",null,m("a",{href:"#"},"clothing")),m("li",null,m("a",{href:"#"},"accessories")),m("li",null,m("a",{href:"#"},"featured")),m("li",null,m("a",{href:"#"},"service")),m("li",null,m("a",{href:"#"},"cart")),m("li",null,m("a",{href:"#"},"my order")),m("li",null,m("a",{href:"#"},"FAQ")),m("li",null,m("a",{href:"#"},"new product")),m("li",null,m("a",{href:"#"},"featured product"))))))))))),m(i.a,{layout:a})))}},b3GC:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),i=t("YFqc"),s=t.n(i),A=t("1Yj4"),c=t("ok1R"),o=t("rhny"),r=l.a.createElement;a.default=function(e){var a=e.img,t=e.title,n=e.desc,l=e.link,i=e.classes,m=e.btn,u=e.btnClass;return r("div",null,r("div",{className:"home ".concat(a," ").concat(i||"text-center")},r(A.a,null,r(c.a,null,r(o.a,null,r("div",{className:"slider-contain"},r("div",null,r("h4",null,t),r("h1",null,n),r(s.a,{href:l},r("a",{className:"btn btn-solid ".concat(u||"")},m||"Shop Now"," ")))))))))}},dlEN:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiDBgLCDlcjG+5AAABjklEQVQ4y5WRz0sCQRzF3+wuCUKgWxCBlPNdCcG61KGT0SG0HxAU0jEIEiJK6FLkKTp3if6P2EM/jt2Cgk6BhGViBEVkVpBiqzMdQpS03XqnYb6fN8P3PeBfYrVDqK0ckp7KY+4Ksj72B9Vu9orUTbnB49P5Lr2RRS8k6c5IQAWg8hXKkaQX+qR3Yy/YAQAK0MvbztiwmPO6b3V4sCXX+UFfJ5nKptyG51ZX2mVMDJXPjQDAAi5xgUvv/IVV+4t3sSP0IVOdyD0AAF2yPFsWmxgUQ0o1DrdYqMOA9Y4CMtrYNwxYUZkVJywJlxpn/BT72Z3G7WkWSW08/dwYiHEss/KGzYDeeNg5QB6jNA/TqwZNWs64deiqKBWhKciwfmf8vpQx5QCuFWmyeL0su0LlIkz4dHriSWeaNuipxwuAj1DRWHWAl6gUGK3tHaGikbDJZZFKfLrxwsbQBNsZWsK/GX6FWxls4Z8GRxgA/FEq0hrAV6hEU3AWj1CePqhAk82zlvX7PWrISt0V/vC2vb4AhzCUX94si94AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMTItMjRUMTA6MDg6NTcrMDE6MDBpx241AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTEyLTI0VDEwOjA4OjU3KzAxOjAwGJrWiQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="},dtqM:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAFjklEQVRIiaWWa4ycVRnHf+e8Zy47l52d7qXdWdputwsLtpUVWivLVkrgk2DwkghY1EBq8Erwgwnxg+FLIwlRMUGNxgYb+AJagjFySyRlu25Li9SitbSulO223e7M7Ozc573MOccPs0Nqs11t+CfvhzfPyfM77/Oc8/xfMf74fv6HtgJ3AWPAtcAqQAAFYBqYAl4G3lopiVohdjvwA+DOK8Q7gcGl+A+BA8CPgNeXWyyvkORp4I0VIMtpJ/Aa8Ov/B+QAE8C3rwJwub5Oq4zRlUAHgR0fAdLWJ2n17kNd2qNfArcACGsJVJhyLImvwghriXt1Em4VYQxCWFzCLJoUrgkjhCUp63SJCg4GgwD4BLAP+NqloG3AN4S1WCmZS68h6lbZdOZdeisLBE6ImZ61vD8wTIfvUl6MkJQenwodJxPJEVjF6eZ63g1GiDouGSdP0zoAXwV+Axxsg37e+ooQ86lexk9M8qWpF9mYnSHmu2ghKcY7mRrayjNjD3Dn6pN8l33cGJ0G2QAkjWaKP9dv5iflB5kOBtgYOt+G/QLYIsYf378J+AfA+VX9fO7wH3jspacwKkw21UvgOAgLcd0gcq7Euc2D3PpIFhHPQbUP3yqEgJBsgLNAqdHPfdknec+sZ70zh8YB2CaB+4W1zHetZvt7h/n+Sz9jMd7FTLofX4WwCIwULPpxCpsy3DCcpXRM4gVrca3AmCbaSlwdo+EPkuqYY2/3HhK2RoV4u//3S2C86TgoYfj8gd+h6y5532LyOfwLF2gWFvFm5wiy5+lccxZzTZlSzqd2fAYVcUHFsOWz2NpFcHN4iyEy9iS74q8xp3vboDEFDNeicdYeO8ToyACJ3T9lYzSG1Zr5555FaIHqXUPixuvoSEzjz19EywpyeBwx9gCqMoP+1x/BNEF72Egatuxg/G9VfvX2LKZTIjGDCujyVZjkB9P03LSOru89iq5WKU9MsmHPHiJDG/DOnEHXG8jULpy6T6hWQ23bgTn9CPrvzxK+91Vk+jpss46ZPQB9GXrUC6RkmcB2ExGmUwJCGkMQT2KTSVjI41+YI5zpp+OGEXS1SnR4GBkNY7wGxtcE2UXy+35LaPDjODd/C9G5HqJpbOEUxFZD8QRufpog3I3EfnhhizGvHsuObufff32B4AtfJB9LEcn0I5QCazGej656pEY8Oga7qB6dIeKcxBR3gXYJJh4DDObi28ihe3D0EU6VOijIPlaJ8wAVBUx3BF7m3DVDvD6hePjgBOVYGuu5WK0RCBASY8OYUR+xqYHjJUnvjBJMPoEJJBgDgI2miR55AhTsN3tJCLd9GGYU8Bewn04Xc/z+rofYWpxh7PQRpgeG0I6DsBYEaC0J3q+TDOVJfNZgkyE8dx0i2iqNRRKTJUjC0wvf4WB9M9eGZrGtcXTIWbfz3hyIb0YDj3Ksk6mR7fSV8mye/SddtRKRpk9no0pfLUc53MmPN+4m2NbN9aGjKFtESQ8lK4ScAhDiqcLDPFn+MhmVJyQ0LY/kUbHksMeAUWU0uWQ3Tcfh9hOTjJ45Tk+lQOCEONszwOTHxnhr4CaSxTJ3qze5LfYOA2qBwDqcCtbycv02ptwtDKgsceGiW+ZwCri+DbqlPdalNfgqTD7ZDUDcq9OUDrVIjLhXp7e2gGvDXFi6jHFZR1tJ1SRIyBqrncJSKUW7P3cAb7SH6iHgGeBBIyRKN1lTnMcKgREty0rXigA0cVBCs05dxCLQViIk9DnFywEAz9Ny6v8yvoeAdy5dJazFMRrHaJaTwKKExmHZ+AngvvbL5Q57K3B02axXp+MsmeiVQC4tG977ESDP0XLXykqgtnYDnwEmrwJwGLgH+AoszZ1LtNJ/3StLzzhwN61SbABStC5HCfiA1kH6E/DmSrv4D19DRIS7aeNEAAAAAElFTkSuQmCC"},hRBw:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEQ1OERGNDA0RDU3MTFFOThEMzlFQTJDMjRENDY0MjQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEQ1OERGM0Y0RDU3MTFFOThEMzlFQTJDMjRENDY0MjQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEyRjU5QzY4RDkxMDExRTg4NjMwODI3MUE5RjdBOTZGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEyRjU5QzY5RDkxMDExRTg4NjMwODI3MUE5RjdBOTZGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+PHbQJwAAAU1JREFUeNpijD99JJOBgWE6w8CATCYgMRmI3QfAcpCdk0EOYAbilUCsS0fLdaF2MjNBBfiBeCMQi9LBcpAdG6B2MjAhSSgC8WYgZqeh5WxQO5RgAkxoCsyBeC4QM9LAcpCZ86B2MOByAAhEA3EtDRxQAzWbgZADQKABm2IKAMisRmwSTHiCaxZ6cJEJzKFmMZLiABDggiYYeQosl4OawYVLARMRWWYzLMuQCEB6thDK2kxEFhrLoAUWsQCkdikxhRsTkQZ6AfFEEhwwAYi9iVHIRIKh2aDKg5gKBohziDWUicR4BVVcbnjkXaFqGGjlAFDcrsIRtyCx1SSmFZIdAEvd69FStyhUjOTcwkRm/laGZk82KN4EFSMZsOCR+wvEn/DIqwFxL5StDsTv8ajlwxU1LATiW5CAB3IYKARMDAMMRh0w6oBRBwy4AwACDABJqySJ7DB4XgAAAABJRU5ErkJggg=="},iGl2:function(e,a){e.exports="/_next/static/images/Offer-banner-bd137ed69c91ca12fda2892b70df886a.png"},"k2Z+":function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAADwUlEQVRIibWWW0wcVRiAvzN7gV12ubVcCoJWQTQaLChekKJW1EjbaGxMxaTRqG1MMTE+GFMS6oOJfW5SrbHBS1If8Mk00iaatDQYKaKGNdZWi0qQCqUsMLMsy+7M7u/DOIhrXEoLXzKZnHP+Od+cy8x/VMQwWIa7gK1AI1ANFAIKmAaGga+B48BApk5UBtFDQAfQstyb/E0vcAD4YiWiQ0D7FQrSOQLsWU7kAk4Bm69S4vAN8ACw4FRoaQF9qyABuBt77RZZKjoM3LcKEoc64GOn4ExdA/Zw14JmoM8Z0TtrJAF4F+wR3SYiPyqlCAT9gAvEYm4uhoiglPrXUyKgFAR8XnBrYCWZi5mL9SJCMNsDbhfxeBLTsgAa3ECbphRej4uLE9Nc+GOSqopiritdh7OE5kIMT3YWC/Mxsv3ZAIxemmEkHKWqOEhZYQA0BSjMBZPL0QTjs1HyPVCYF0Qp1eYGmnJyfFwK67Ts/4ANQR/hWILOnVsoLsjFo8EdG0s5+8som6rKmZya4dzFaV7v/Z0cJczELd5suZWSPD+WadFcU0F79yBGNEbXU/WICJqmGt1AFZqbwQtjDI9P0bnzadrfO0ZoZJyJoWG6T33Pq082cX5simcfrqfrWB8l11eiW15e23wjL382RGhcZ/K3MB/1D3NgWy1/6vM8XrOB8tIi5iIRUim5QRPIBwiNTOCyUnzSG+KNHc2sD/op8Hnxez3kZHmpLivkmY4jbKosorWpjtGJaY4OjbHvwRoKfF4CLo3KwhxODk8C8EhVEWA6S5vrdrs0BdD15SBNtTfR89Zuu2VHByUBH3hcvPhoA4dPnCExEaZz12Ns7w5xT2UBPXu2AEKw41NKfF5K8v0kRTDiFnXl+Uh8UYRbRGZj81H/wd3bqS5bj1gmppXk+P7nOT82SXVFMevyAhz6vJ+2F1rJCuTxyp3l3FwUBDNBImlx4rlGzl2OcEtRkCy3i3gyhVIwn0g6ngiGbpzWZ2fFJin67KwYui5L+fanX2Vr5/syORUWM5EQEVMkGV8Sa4pIyr6n7HZd18UwDInY14CKGMbbwL7/+9pEBIBgbi5YCYxoDE1L/0Uuy0EVMYxaIJQpSimFphTJVGqlAod7NeAHYChTlIhci+RnYMCZg71X28sVsBf+SRP9wIdrIOkGTsJ/M+x3QP0qSc4CtzuF9O1zPzC4CpIQaUk0XbSAnYa7rkFyFDu7RjKJHF4CWoGvViA4AzwB7AIkvTHTuc6hCdiGPRUbgTzsA6QOjGBvpB7gdKZO/gJX4qTG+gXfMQAAAABJRU5ErkJggg=="},mJAf:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiDBgLCBb3XVLgAAABxklEQVQ4y32TTUtUURjHf+dM2suAs5hi0HDmnudeohqV0kVBL1AtUojeFvUVolXSRwjDPkCi0KpF0CLa1CosISJnUSCRVlAZhmjdrClMxube48Jq5t669786f57feZ7Dn+coYpKivazOUGCe++ra27loVUWtVw4f81HdYM46XLD58NCHGZIlFbnX17J+LrfKA3mSBneLdXZGfWlXM6EjfA/+7KuGffeCb7o7Ebft+LGBvtqeiKtfZGL4BmrJ3efpaL7Q10KBhURcT5L1ehp+aS+bg6dp2Txzbza5W1IhTe5RCdyhHVvB2ybDUjeHSZc5Z3yx8lWsfJKz8aqOwSfprBXDfjVoj6+WcOREUtuMOyAPpW6uND1tSAIZd/tj8TqbZFgWJZA7zp5oD69X7kogC3LV29hIYFQ+y6VS+//HdnbIoPFl5A+ck7p3Kj0A97TUvTbQoLrI8CgdDybI2C7QEGYht5KO55fXOQ36C1SL6Xi1CHoJNNSmeR1OmTE5+M8+Amj3gBkLp3izMvP7r5Zbf57XF+0+fjDJcxatT5WcylNQvXY/OSr2+pbbL1cjX9sU1DF1xO7GkKWN7yzzXk3biXB89u8SrwH6AIdbe1aULgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0xMi0yNFQxMDowODoyMiswMTowMDE6SIsAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTItMjRUMTA6MDg6MjIrMDE6MDBAZ/A3AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="},nLc3:function(e,a,t){"use strict";t.r(a);var n=t("HALo"),l=t("q1tI"),i=t.n(l),s=t("OS56"),A=t.n(s),c=t("2dXf"),o=t("1Yj4"),r=t("ok1R"),m=t("rhny"),u=i.a.createElement,d=[{img:c.w,title:"rings",desc:"23 items",link:"#"},{img:c.l,title:"diamons",desc:"54 items",link:"#"},{img:c.t,title:"neckles",desc:"15 items",link:"#"},{img:c.y,title:"watches",desc:"62 items",link:"#"},{img:c.u,title:"pearsing",desc:"12 items",link:"#"},{img:c.x,title:"tiara",desc:"33 items",link:"#"},{img:c.m,title:"earings",desc:"21 items",link:"#"},{img:c.r,title:"long earings",desc:"18 items",link:"#"}],g=function(e){var a=e.img,t=e.title,n=e.desc,l=e.link;return u("div",{className:"category-block"},u("a",{href:l},u("div",{className:"category-image svg-image"},u("div",{dangerouslySetInnerHTML:{__html:a}}))),u("div",{className:"category-details"},u("a",{href:l},u("h5",null,t)),u("h6",null,n)))};a.default=function(){return u(l.Fragment,null,u(o.a,null,u("section",{className:"section-b-space border-section border-top-0"},u(r.a,null,u(m.a,null,u(A.a,Object(n.a)({},c.j,{className:"slide-6 no-arrow"}),d.map((function(e,a){return u(g,{key:a,img:e.img,link:e.link,title:e.title,desc:e.desc})}))))))))}},nULy:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),i=t("1Yj4"),s=t("ok1R"),A=t("rhny"),c=l.a.createElement;a.default=function(e){var a=e.parallaxSectionClass,t=e.bg,l=e.parallaxClass,o=e.title,r=e.subTitle1,m=e.subTitle2;return c(n.Fragment,null,c("section",{className:"p-0 ".concat(a)},c("div",{className:"full-banner ".concat(t," parallax ").concat(l)},c(i.a,null,c(s.a,null,c(A.a,null,c("div",{className:"banner-contain"},c("h2",null,o),c("h3",null,r),c("h4",null,m))))))))}},"o+Rn":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layouts/Jewellery",function(){return t("3CYa")}])},tZOm:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfiDBoHJCc8oQibAAAA5klEQVQ4y7WUvQ4BQRSFv/GXEImfQiGi2EokolDtA3gCT6BReCQK/UavUIpGoqChoSAKlYilEEJhsmwWF4kzzbln7smdk8yMAiBLgBv2rHkLBZToMtd1jigiTCyHL6XmAD0M+g/K7G3/6ocJcH6wxCWDAvwUUbo+MJFD/xfKo0RoEtT8SI2DN7QbSQpUNW+R9BpqJFxKDJuh5jZ1tq7dje/LCBevlGFMSa8xmU9CNwi9Dv1/KLEjT9gJPOIsG3Z0NDOpMJDPcL/wFubtAaU/DtAWntezCXIGm6lmBmWGsiHl/CMnFnAFf0kxbWSSNIcAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMTItMjZUMDY6MzY6MzkrMDE6MDDC9lGVAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTEyLTI2VDA2OjM2OjM5KzAxOjAws6vpKQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="},u4gs:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n).a.createElement;a.a=function(e){var a=e.link,t=e.title,n=e.service,i=e.marijuana,s=e.lastChild;return l("div",{className:"".concat(i?"":"media"," ").concat(s?"border-0 m-0":"")},l("div",{dangerouslySetInnerHTML:{__html:a}}),l("div",{className:"media-body"},l("h4",null,t),l("p",null,n)))}},ySeX:function(e,a,t){"use strict";var n=t("jT3O"),l=t("q1tI"),i=t.n(l),s=t("GTV5"),A=t("+TN3"),c=t("UYTu"),o=t("STcy"),r=t("/5QC"),m=t("ok1R"),u=t("rhny"),d=t("UU0N"),g=t("1Yj4"),f=t("EO2r"),h=t("tfG8"),p=t("U8OX"),b=t("XJI2"),N=t("8c/V"),C=t.n(N),E=i.a.createElement;function y(){var e=Object(n.a)(["\n  query products($type: _CategoryType!, $indexFrom: Int!, $limit: Int!) {\n    products(type: $type, indexFrom: $indexFrom, limit: $limit) {\n      items {\n        id\n        title\n        description\n        type\n        brand\n        category\n        price\n        new\n        stock\n        sale\n        discount\n        variants {\n          id\n          sku\n          size\n          color\n          image_id\n        }\n        images {\n          image_id\n          id\n          alt\n          src\n        }\n      }\n    }\n  }\n"]);return y=function(){return e},e}var v=Object(c.a)(y()),w=function(e){var a=e.data,t=e.loading,n=e.startIndex,i=e.endIndex,s=e.cartClass,A=e.backImage,c=Object(l.useContext)(r.a),g=Object(l.useContext)(f.c),N=Object(l.useContext)(p.a),y=Object(l.useContext)(b.b).state,v=c.quantity;return E(m.a,{className:"no-slider"},a&&a.products&&a.products.items&&0!==a.products.items.length&&!t?a&&a.products.items.slice(n,i).map((function(e,a){return E(o.a,{key:a,product:e,symbol:y.symbol,addCompare:function(){return N.addToCompare(e)},addCart:function(){return c.addToCart(e,v)},addWishlist:function(){return g.addToWish(e)},cartClass:s,backImage:A})})):a&&a.products&&a.products.items&&0===a.products.items.length?E(u.a,{xs:"12"},E("div",null,E("div",{className:"col-sm-12 empty-cart-cls text-center"},E(d.a,{src:C.a,className:"img-fluid mb-4 mx-auto",alt:""}),E("h3",null,E("strong",null,"Your Cart is Empty")),E("h4",null,"Explore more shortlist some items.")))):E("div",{className:"row mx-0 margin-default"},E("div",{className:"col-xl-3 col-lg-4 col-6"},E(h.a,null)),E("div",{className:"col-xl-3 col-lg-4 col-6"},E(h.a,null)),E("div",{className:"col-xl-3 col-lg-4 col-6"},E(h.a,null)),E("div",{className:"col-xl-3 col-lg-4 col-6"},E(h.a,null))))};a.a=function(e){var a=e.type,t=e.fluid,n=e.designClass,i=e.cartClass,c=e.heading,o=e.noTitle,m=e.title,u=e.inner,d=e.line,h=e.hrClass,N=e.backImage,C=Object(l.useState)(a),y=C[0],B=C[1],I=Object(l.useContext)(r.a),R=(Object(l.useContext)(f.c),Object(l.useContext)(p.a),Object(l.useContext)(b.b).state,I.quantity,Object(A.a)(v,{variables:{type:y,indexFrom:0,limit:8}})),k=R.loading,O=R.data;return E("div",null,E("section",{className:n},E(g.a,{fluid:t},o?"":E("div",{className:m},E("h4",null,c),E("h2",{className:u},"special products"),d?E("div",{className:"line"}):h?E("hr",{role:"tournament6"}):""),E(s.d,{className:"theme-tab"},E(s.b,{className:"tabs tab-title"},E(s.a,{className:y==a?"active":"",onClick:function(){return B(a)}},"NEW ARRIVAL"),E(s.a,{className:"furniture"==y?"active":"",onClick:function(){return B("furniture")}},"FEATURED"," "),E(s.a,{className:"furniture"==y?"active":"",onClick:function(){return B("furniture")}},"SPECIAL")),E(s.c,null,E(w,{data:O,loading:k,startIndex:0,endIndex:8,cartClass:i,backImage:N})),E(s.c,null,E(w,{data:O,loading:k,startIndex:0,endIndex:8,cartClass:i,backImage:N})),E(s.c,null,E(w,{data:O,loading:k,startIndex:0,endIndex:8,cartClass:i,backImage:N}))))))}},zUnT:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAEXklEQVRIia2Vy48UVRSHv3vrVlV39WseMIwOyDsM8ggqGEUMkrAwYuJWFrjwkRj8B4xx5cadC+Mj8RFjYmJYYNyIosb4HtCIYUGizoAzY8tMnAc9dHdVdVfde130NMy0MEiYX1LJvXXrnO/m1Mn5iS3Hy9xAu4FDwF5gM9ADCGAWGAF+BE4Ap5dKIpYAHQBeAA7e6Cbz+hp4Gfj8WofyOkGvAV/dBATgIeAk8Nb/ATnAt8BzNwHo1DO0yphZCvQd8OAtQNq6l9a/uyboTeD+ZYC0dRfwfidoD/DsMkLaeoL5CikAAa8DVDRoBACusCghCA0I7KJogcBikfMnBpBYbCsXBoEvLCUJGt4AdihgmxRiz0xTszMLGWGxBiIE46Fmb9EhtoByaDY1WSWJrUFqgwGslGQkxKnFWovvCC43NVo6jGmJL9gO7FbA4ammYWve4chqjw1dHho4M9VgV6/HuUrCmpxi+nKDO7oDJqoJWSUo5XwSbfjnUoTvOfQXfZSE0VrKoTUB7wzXeWUkRCmJIzisHMG+mShl/6Yi52PN0FhMV0/AnzVwA8GXFUM+tmzWhiR1+GIyZGteUk08fptt8uKObj4enmNqJmT1qgLDEyFl4VJzFCUlMK1q7xX9x/4qD+bkwEvb80xHmrmG5nJqWVvymIwMh9YX+PCPOQpJwrq+HMqV9LqCc5UEBTS0RWDR2jJcTXnqzhInLlQpFDI8f3aOvAAlmFRY2+UqyU+XUsoNQEi6rKFeSfCN4eRolShKOFVJuEfX6StlGApTaCT0F32Gxqus6MpgHAcRNvlsvE4j0QxfrGGjJjrj4ilZFNs+KtfrqQ0mGgZftLpmrgn7V7k83C0ZmY4o5D36Cj7nZyNUqukv+fiuw4XpiI19AY04wTEWFfhcnA1ZWfSJGymDBYdXLxomQx2q1FLxHRGsC5wr7VtPEw6sybEy6+Baw8CKHGORYXCgSHk6YqDoUtYOITEm66OF5O4cTFkHaTOs683yS7nG+v48q2brjFbTqqQ16jsksMZC1EBZi0xTbBgjG002FhWDJZdNvuXg6gARNYhqDaSFza6hPNfExAm9aM5XmtyWlTSMHZPAD52YQAnGqgk5V1ITivHI0FPKEsYp1lO8XU7ozSruWBGwNu9ye17xdyoYSSRru3xiBCrwmYwMp2cSejw5JLYcL+8Ezi4EOQKqiSXjOXRlHGailOlIs6HkMRsmxKkl8CSJtgSuJOc5NLVFW4vrCOpNQ3fGYaKe4hhD0ZP3tY3vV2DX1cKBtqBta/RIIZBAam1rLSA19sooWlR0IcCCxeIIgSP43cKgmj8/yoKxbgEpWoCFchfsXdleL/7m6ivRznUUrk7vIeC9/0bcso7RcupFfvQkcGYZIeeAx9ubTod9APh5GSBn6TDRTlBMy4bfvQXIB7TctboUqK2ngUeA728CcAp4DDgCHa3IvMNeR5/OP/uAR2mVYj1QYn4kAqO0GukT4JulbvEv6ofAhwGHwC0AAAAASUVORK5CYII="}},[["o+Rn",1,0,2,3,4,5,6,7,8,11,13,15,16,17,19]]]);