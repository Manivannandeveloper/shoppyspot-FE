_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[233],{HALo:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},Qll9:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("UB9E"),i=a("ncOK"),c=a("gy5E"),o=a("2dXf"),s=l.a.createElement;t.default=Object(c.a)((function(){return s(i.a,{parent:"home",title:"Elements",subTitle:"product-slider"},s(r.a,{type:"fashion",productSlider:o.b,designClass:"section-b-space ratio_asos",noSlider:"true",cartClass:"cart-info cart-wrap"}))}))},Szm4:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio/product-slider",function(){return a("Qll9")}])},UB9E:function(e,t,a){"use strict";var n=a("HALo"),l=a("jT3O"),r=a("q1tI"),i=a.n(r),c=a("OS56"),o=a.n(c),s=a("+TN3"),u=a("UYTu"),d=a("STcy"),m=a("1Yj4"),p=a("ok1R"),b=a("rhny"),f=a("/5QC"),g=a("EO2r"),v=a("tfG8"),h=a("U8OX"),N=(a("8c/V"),i.a.createElement);function y(){var e=Object(l.a)(["\n  query products($type: _CategoryType!, $indexFrom: Int!, $limit: Int!) {\n    products(type: $type, indexFrom: $indexFrom, limit: $limit) {\n      items {\n        id\n        title\n        description\n        type\n        brand\n        category\n        price\n        new\n        stock\n        sale\n        discount\n        variants {\n          id\n          sku\n          size\n          color\n          image_id\n        }\n        images {\n          image_id\n          id\n          alt\n          src\n        }\n      }\n    }\n  }\n"]);return y=function(){return e},e}var C=Object(u.a)(y());t.a=function(e){var t=e.type,a=e.title,l=e.subtitle,c=e.designClass,u=e.noSlider,y=e.cartClass,w=e.productSlider,O=e.titleClass,T=e.noTitle,x=e.innerClass,j=e.inner,E=e.backImage,_=Object(r.useContext)(f.a),k=Object(r.useContext)(g.c),S=Object(r.useContext)(h.a),I=_.quantity,F=Object(r.useState)(!0),q=F[0],$=F[1],L=Object(s.a)(C,{variables:{type:t,indexFrom:0,limit:8}}),U=L.loading,W=L.data;return Object(r.useEffect)((function(){setTimeout((function(){$(!1)}),1)}),[q]),N(i.a.Fragment,null,N("section",{className:c},u?N(m.a,null,N(p.a,null,N(b.a,null,"null"===T?"":N("div",{className:x},l?N("h4",null,l):"",N("h2",{className:j},a),O?N("hr",{role:"tournament6"}):N("div",{className:"line"})),q?N("div",{className:"row mx-0 margin-default"},N("div",{className:"col-xl-3 col-lg-4 col-6"},N(v.a,null)),N("div",{className:"col-xl-3 col-lg-4 col-6"},N(v.a,null)),N("div",{className:"col-xl-3 col-lg-4 col-6"},N(v.a,null)),N("div",{className:"col-xl-3 col-lg-4 col-6"},N(v.a,null))):N(o.a,Object(n.a)({},w,{className:"product-m no-arrow"}),W&&W.products.items.map((function(e,t){return N("div",{key:t},N(d.a,{product:e,title:a,addWishlist:function(){return k.addToWish(e)},addCart:function(){return _.addToCart(e,I)},addCompare:function(){return S.addToCompare(e)},cartClass:y,backImage:E}))})))))):N(i.a.Fragment,null,a?N("div",{className:"title1 title-gradient  section-t-space"},N("h4",null,l),N("h2",{className:"title-inner1"},a),N("hr",{role:"tournament6"})):"",N(m.a,null,N(p.a,{className:"margin-default"},W&&W.products&&W.products.items&&0!==!W.products.items.length&&!U?W&&W.products.items.slice(0,8).map((function(e,t){return N(b.a,{xl:"3",sm:"6",key:t},N("div",null,N(d.a,{product:e,backImage:E,addCompare:function(){return S.addToCompare(e)},addWishlist:function(){return k.addToWish(e)},title:a,cartClass:y,addCart:function(){return _.addToCart(e,I)},key:t})))})):N("div",{className:"row margin-default"},N("div",{className:"col-xl-3 col-lg-4 col-6"},N(v.a,null)),N("div",{className:"col-xl-3 col-lg-4 col-6"},N(v.a,null)),N("div",{className:"col-xl-3 col-lg-4 col-6"},N(v.a,null)),N("div",{className:"col-xl-3 col-lg-4 col-6"},N(v.a,null))))))))}},ncOK:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("Mryu"),i=a("1Yj4"),c=a("ok1R"),o=a("rhny"),s=l.a.createElement,u=function(e){var t=e.title,a=e.parent,n=e.subTitle;return s("div",{className:"breadcrumb-section"},s(i.a,null,s(c.a,null,s(o.a,{sm:"6"},s("div",{className:"page-title"},s("h2",null,t))),s(o.a,{sm:"6"},s("nav",{"aria-label":"breadcrumb",className:"theme-breadcrumb"},s("ol",{className:"breadcrumb"},s("li",{className:"breadcrumb-item"},s("a",{href:"#"},a)),s("li",{className:"breadcrumb-item","aria-current":"page"},t),void 0===n?"":s("li",{className:"breadcrumb-item active","aria-current":"page"},n)))))))},d=a("qhky"),m=a("jIMG"),p=a.n(m),b=a("eZDE"),f=l.a.createElement;t.a=function(e){var t=e.children,a=e.title,n=e.parent,i=e.subTitle;return f(l.a.Fragment,null,f(d.a,null,f("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),f("link",{rel:"icon",type:"image/x-icon",href:p.a?p.a:""})),f(r.a,{topClass:"top-header",logoName:"logo.png"}),f(u,{title:a,parent:n,subTitle:i}),f(l.a.Fragment,null,t),f(b.a,{footerClass:"footer-light ",footerLayOut:"light-layout upper-footer",footerSection:"small-section border-section border-top-0",belowSection:"section-b-space light-layout",newLatter:!0}))}}},[["Szm4",1,0,9,2,3,4,5,6,7,8,10,11,12,13,14,15,16,19]]]);