_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[240],{"4enZ":function(t,e,a){"use strict";a.r(e);var n=a("jT3O"),r=a("q1tI"),i=a.n(r),l=a("1Yj4"),c=a("ok1R"),s=a("rhny"),o=a("UU0N"),u=a("DCcX"),d=a("CaDr"),m=a("+TN3"),f=a("UYTu"),p=a("XJI2"),b=a("/5QC"),g=a("EO2r"),N=a("U8OX"),h=a("20a2"),y=i.a.createElement;function v(){var t=Object(n.a)(["\n  query products($type: _CategoryType!, $indexFrom: Int!, $limit: Int!) {\n    products(type: $type, indexFrom: $indexFrom, limit: $limit) {\n      items {\n        id\n        title\n        description\n        type\n        brand\n        category\n        price\n        new\n        stock\n        sale\n        discount\n        variants {\n          id\n          sku\n          size\n          color\n          image_id\n        }\n        images {\n          image_id\n          id\n          alt\n          src\n        }\n      }\n    }\n  }\n"]);return v=function(){return t},t}var k=Object(f.a)(v());e.default=function(){var t=Object(h.useRouter)(),e=Object(r.useContext)(p.b),a=Object(r.useContext)(g.c),n=Object(r.useContext)(N.a),f=e.state.symbol,v=e.state,C=Object(r.useContext)(b.a),O=C.addToCart,j=C.quantity,w=C.plusQty,x=C.minusQty,_=C.setQuantity,I=Object(r.useState)(),q=I[0],T=I[1],S=Object(r.useState)(!1),z=S[0],F=S[1],E=function(){return F(!z)},A=[],Q=function(e){var a=e.title.split(" ").join("");t.push("/product-details/".concat(e.id)+"-"+"".concat(a))},U=Object(m.a)(k,{variables:{type:"fashion",indexFrom:0,limit:8}}),X=U.loading,P=U.data;return y("section",{className:"section-b-space ratio_asos"},y(l.a,null,y(c.a,null,y(s.a,{className:"product-related"},y("h2",null,"related products"))),y(c.a,{className:"search-product"},P&&P.products&&0!==P.products.items.length&&!X?y(i.a.Fragment,null,P&&P.products.items.slice(0,6).map((function(t,e){return y(s.a,{xl:"2",md:"4",sm:"6",key:e},y("div",{className:"product-box"},y("div",{className:"img-wrapper"},y("div",{className:"front"},y("a",{href:null},y(o.a,{onClick:function(){return Q(t)},src:t.images[0].src,className:"img-fluid blur-up lazyload bg-img",alt:""}))),y("div",{className:"back"},y("a",{href:null},y(o.a,{src:t.images[1].src,className:"img-fluid blur-up lazyload bg-img",alt:""}))),y("div",{className:"cart-info cart-wrap"},y("button",{"data-toggle":"modal","data-target":"#addtocart",title:"Add to cart",onClick:function(){return O(t,j)}},y("i",{className:"fa fa-shopping-cart"})),y("a",{href:"#",onClick:function(){return a.addToWish(t)},title:"Add to Wishlist"},y("i",{className:"fa fa-heart","aria-hidden":"true"})),y("a",{href:"#",onClick:function(){return T(t),void E()},"data-toggle":"modal","data-target":"#quick-view",title:"Quick View"},y("i",{className:"fa fa-search","aria-hidden":"true"})),y("a",{href:"#",onClick:function(){return n.addToCompare(t)},title:"Compare"},y("i",{className:"fa fa-refresh","aria-hidden":"true"})))),y("div",{className:"product-detail"},y("div",{className:"rating"},y("i",{className:"fa fa-star"})," ",y("i",{className:"fa fa-star"})," ",y("i",{className:"fa fa-star"})," ",y("i",{className:"fa fa-star"})," ",y("i",{className:"fa fa-star"})),y("a",{href:null},y("h6",null,t.title)),y("h4",null,f,t.price),y("ul",{className:"color-variant"},y("li",{className:"bg-light0"}),y("li",{className:"bg-light1"}),y("li",{className:"bg-light2"})))))}))):"loading"),q?y(u.a,{isOpen:z,toggle:E,className:"modal-lg quickview-modal",centered:!0},y(d.a,null,y(c.a,null,y(s.a,{lg:"6",xs:"12"},y("div",{className:"quick-view-img"},y(o.a,{src:"".concat(q.images[0].src),alt:"",className:"img-fluid"}))),y(s.a,{lg:"6",className:"rtl-text"},y("div",{className:"product-right"},y("h2",null," ",q.title," "),y("h3",null,v.symbol,(q.price*v.value).toFixed(2)),q.variants?y("ul",{className:"color-variant"},A?y("ul",{className:"color-variant"},"jewellery"===q.type||"nursery"===q.type||"beauty"===q.type||"electronics"===q.type||"goggles"===q.type||"watch"===q.type||"pets"===q.type?"":y(i.a.Fragment,null,A?y("ul",{className:"color-variant"},A.map((function(t,e){return y("li",{className:t.color,key:e,title:t.color,onClick:function(){return variantChangeByColor(t.image_id,q.images)}})}))):"")):""):"",y("div",{className:"border-product"},y("h6",{className:"product-title"},"product details"),y("p",null,q.description)),y("div",{className:"product-description border-product"},q.size?y("div",{className:"size-box"},y("ul",null,q.size.map((function(t,e){return y("li",{key:e},y("a",{href:null},t))})))):"",y("h6",{className:"product-title"},"quantity"),y("div",{className:"qty-box"},y("div",{className:"input-group"},y("span",{className:"input-group-prepend"},y("button",{type:"button",className:"btn quantity-left-minus",onClick:x,"data-type":"minus","data-field":""},y("i",{className:"fa fa-angle-left"}))),y("input",{type:"text",name:"quantity",value:j,onChange:function(t){_(parseInt(t.target.value))},className:"form-control input-number"}),y("span",{className:"input-group-prepend"},y("button",{type:"button",className:"btn quantity-right-plus",onClick:function(){return w(q)},"data-type":"plus","data-field":""},y("i",{className:"fa fa-angle-right"})))))),y("div",{className:"product-buttons"},y("button",{className:"btn btn-solid",onClick:function(){return O(q,j)}},"add to cart"),y("button",{className:"btn btn-solid",onClick:function(){return Q(q)}},"View detail"))))))):""))}},"6yjW":function(t,e,a){"use strict";a.r(e);var n=a("q1tI"),r=a.n(n),i=a("YFqc"),l=a.n(i),c=a("xTE4"),s=a.n(c),o=a("DCcX"),u=a("vkoW"),d=a("CaDr"),m=a("UU0N"),f=a("L3zb"),p=a("XJI2"),b=a("/5QC"),g=a("JtKs"),N=a("D16B"),h=r.a.createElement;e.default=function(t){var e=t.item,a=t.stickyClass,i=t.changeColorVar,c=Object(n.useState)(!1),y=c[0],v=c[1],k=Object(n.useContext)(p.b).state.symbol,C=function(){return v(!y)},O=e,j=Object(n.useContext)(b.a),w=j.stock,x=j.plusQty,_=j.minusQty,I=j.quantity,q=[],T=[];return h(r.a.Fragment,null,h("div",{className:"product-right ".concat(a)},"Detail Price",h("h2",null," ",O.title," "),h("h4",null,h("del",null,k,O.price),h("span",null,O.discount,"% off")),h("h3",null,k,O.price-O.price*O.discount/100),O.variants.map((function(t){q.find((function(e){return e.color===t.color}))||q.push(t),T.find((function(e){return e===t.size}))||T.push(t.size)})),h(r.a.Fragment,null,void 0===i?q?h("ul",{className:"color-variant"},q.map((function(t,e){return h("li",{className:t.color,key:e,title:t.color})}))):"":q?h("ul",{className:"color-variant"},q.map((function(t,e){return h("li",{className:t.color,key:e,title:t.color,onClick:function(){return i(e)}})}))):""),h("div",{className:"product-description border-product"},O.variants?h("div",null,h("h6",{className:"product-title size-text"},"select size",h("span",null,h("a",{href:null,"data-toggle":"modal","data-target":"#sizemodal",onClick:C},"size chart"))),h(o.a,{isOpen:y,toggle:C,centered:!0},h(u.a,{toggle:C},"Sheer Straight Kurta"),h(d.a,null,h(m.a,{src:s.a,alt:"size",className:"img-fluid"}))),h("div",{className:"size-box"},h("ul",null,T.map((function(t,e){return h("li",{key:e},h("a",{href:null},t))}))))):"",h("span",{className:"instock-cls"},w),h("h6",{className:"product-title"},"quantity"),h("div",{className:"qty-box"},h("div",{className:"input-group"},h("span",{className:"input-group-prepend"},h("button",{type:"button",className:"btn quantity-left-minus",onClick:_,"data-type":"minus","data-field":""},h("i",{className:"fa fa-angle-left"}))),h(f.a,{type:"text",name:"quantity",value:I,onChange:function(t){setQuantity(parseInt(t.target.value))},className:"form-control input-number"}),h("span",{className:"input-group-prepend"},h("button",{type:"button",className:"btn quantity-right-plus",onClick:function(){return x(O)},"data-type":"plus","data-field":""},h("i",{className:"fa fa-angle-right"})))))),h("div",{className:"product-buttons"},h("a",{href:null,className:"btn btn-solid",onClick:function(){return j.addToCart(O,I)}},"add to cart"),h(l.a,{href:"/page/account/checkout"},h("a",{className:"btn btn-solid"},"buy now"))),h("div",{className:"border-product"},h("h6",{className:"product-title"},"product details"),h("p",null,O.description)),h("div",{className:"border-product"},h("h6",{className:"product-title"},"share it"),h("div",{className:"product-icon"},h(N.default,null))),h("div",{className:"border-product"},h("h6",{className:"product-title"},"Time Reminder"),h(g.a,null))))}},D16B:function(t,e,a){"use strict";a.r(e);var n=a("q1tI"),r=a.n(n).a.createElement;e.default=function(){return r("ul",{className:"product-social"},r("li",null,r("a",{href:"https://www.facebook.com",target:"_blank"},r("i",{className:"fa fa-facebook"}))),r("li",null,r("a",{href:"https://plus.google.com",target:"_blank"},r("i",{className:"fa fa-google-plus"}))),r("li",null,r("a",{href:"https://twitter.com",target:"_blank"},r("i",{className:"fa fa-twitter"}))),r("li",null,r("a",{href:"https://www.instagram.com",target:"_blank"},r("i",{className:"fa fa-instagram"}))),r("li",null,r("a",{href:"https://rss.com",target:"_blank"},r("i",{className:"fa fa-rss"}))))}},D3Qy:function(t,e){t.exports="/_next/static/images/003-a085e9dab49d6f37ef84e0f99f231d44.jpg"},EO2r:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return u}));var n=a("z7pX"),r=a("q1tI"),i=a.n(r),l=a("FGyW"),c=a("EO2r");a.d(e,"c",(function(){return c.a})),a.d(e,"d",(function(){return c.b}));var s=i.a.createElement,o=Object(r.createContext)({wishlistItems:Function,addToWish:Function,removeFromWish:Function}),u=function(t){var e=Object(r.useState)(function(){try{var t=localStorage.getItem("wishlist");return null===t?[]:JSON.parse(t)}catch(e){return[]}}()),a=e[0],i=e[1];Object(r.useEffect)((function(){localStorage.setItem("wishlist",JSON.stringify(a))}),[a]);return s(o.Provider,{value:{wishlistItems:a,addToWish:function(t){-1===a.findIndex((function(e){return e.id===t.id}))?(l.b.success("Product Added Successfully !"),i([].concat(Object(n.a)(a),[t]))):l.b.error("This Product Already Added !")},removeFromWish:function(t){i(a.filter((function(e){return e.id!==t.id}))),l.b.error("Product Removed Successfully !")}}},t.children)}},"MkO+":function(t,e,a){"use strict";a.r(e);var n=a("q1tI"),r=a.n(n),i=a("ncOK"),l=a("4enZ"),c=a("gy5E"),s=a("zU23"),o=r.a.createElement;e.default=Object(c.a)((function(){return o(i.a,{parent:"home",title:"product"},o(s.default,null),o(l.default,null))}))},Rkj0:function(t,e){t.exports="/_next/static/images/001-2031280d3a500fa0f93d83a465113118.jpg"},T30s:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product-details/4_image",function(){return a("MkO+")}])},U8OX:function(t,e,a){"use strict";a.d(e,"c",(function(){return o})),a.d(e,"d",(function(){return u}));var n=a("z7pX"),r=a("q1tI"),i=a.n(r),l=a("FGyW"),c=a("U8OX");a.d(e,"a",(function(){return c.c})),a.d(e,"b",(function(){return c.d}));var s=i.a.createElement,o=Object(r.createContext)({compareItems:Function,addToCompare:Function,removeFromComapre:Function}),u=function(t){var e=Object(r.useState)(function(){try{var t=localStorage.getItem("compare");return null===t?[]:JSON.parse(t)}catch(e){return[]}}()),a=e[0],i=e[1];Object(r.useEffect)((function(){localStorage.setItem("compare",JSON.stringify(a))}),[a]);return s(o.Provider,{value:{compareItems:a,addToCompare:function(t){-1===a.findIndex((function(e){return e.id===t.id}))?(l.b.success("Product Added Successfully !"),i([].concat(Object(n.a)(a),[t]))):l.b.error("This Product Already Added !")},removeFromComapre:function(t){i(a.filter((function(e){return e.id!==t.id}))),l.b.error("Product Removed Successfully !")}}},t.children)}},etN5:function(t,e){t.exports="/_next/static/images/002-2d80e9c3f90e861269967bb6a1139863.jpg"},ncOK:function(t,e,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("Mryu"),l=a("1Yj4"),c=a("ok1R"),s=a("rhny"),o=r.a.createElement,u=function(t){var e=t.title,a=t.parent,n=t.subTitle;return o("div",{className:"breadcrumb-section"},o(l.a,null,o(c.a,null,o(s.a,{sm:"6"},o("div",{className:"page-title"},o("h2",null,e))),o(s.a,{sm:"6"},o("nav",{"aria-label":"breadcrumb",className:"theme-breadcrumb"},o("ol",{className:"breadcrumb"},o("li",{className:"breadcrumb-item"},o("a",{href:"#"},a)),o("li",{className:"breadcrumb-item","aria-current":"page"},e),void 0===n?"":o("li",{className:"breadcrumb-item active","aria-current":"page"},n)))))))},d=a("qhky"),m=a("jIMG"),f=a.n(m),p=a("eZDE"),b=r.a.createElement;e.a=function(t){var e=t.children,a=t.title,n=t.parent,l=t.subTitle;return b(r.a.Fragment,null,b(d.a,null,b("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),b("link",{rel:"icon",type:"image/x-icon",href:f.a?f.a:""})),b(i.a,{topClass:"top-header",logoName:"logo.png"}),b(u,{title:a,parent:n,subTitle:l}),b(r.a.Fragment,null,e),b(p.a,{footerClass:"footer-light ",footerLayOut:"light-layout upper-footer",footerSection:"small-section border-section border-top-0",belowSection:"section-b-space light-layout",newLatter:!0}))}},z7pX:function(t,e,a){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function r(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(e,"a",(function(){return r}))},zQtw:function(t,e){t.exports="/_next/static/images/004-96433815c5b64c9bddd54ec4f7e312cf.jpg"},zU23:function(t,e,a){"use strict";a.r(e);var n=a("jT3O"),r=a("q1tI"),i=a.n(r),l=a("Rkj0"),c=a.n(l),s=a("etN5"),o=a.n(s),u=a("D3Qy"),d=a.n(u),m=a("zQtw"),f=a.n(m),p=a("6yjW"),b=a("1Yj4"),g=a("ok1R"),N=a("rhny"),h=a("UYTu"),y=a("+TN3"),v=i.a.createElement;function k(){var t=Object(n.a)(["\n  query product($id: Int!) {\n    product(id: $id) {\n      id\n      title\n      description\n      type\n      brand\n      category\n      price\n      new\n      sale\n      discount\n      stock\n      variants {\n        id\n        color\n        image_id\n        variant_id\n        size\n      }\n      images {\n        image_id\n        src\n      }\n    }\n  }\n"]);return k=function(){return t},t}var C=Object(h.a)(k()),O=[c.a,o.a,d.a,f.a];e.default=function(){var t=Object(y.a)(C,{variables:{id:1}}).data;return v("section",null,v("div",{className:"collection-wrapper ratio_asos"},v(b.a,null,v(g.a,null,v(N.a,{lg:"6"},v(g.a,{className:"product_image_4"},O.map((function(t,e){return v(N.a,{xs:"6",key:e},v("div",null,v("img",{src:t,alt:"",className:"img-fluid blur-up lazyload bg-img"})))})))),t?v(N.a,{lg:"6",className:"rtl-text"},v(p.default,{item:t.product})):"false"))))}}},[["T30s",1,0,9,2,3,4,5,6,8,10,11,12,13,14,15,18]]]);