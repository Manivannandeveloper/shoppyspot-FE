_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[242],{"/kxI":function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),s=t("q1tI"),l=t.n(s),c=t("17x9"),i=t.n(c),o=t("TSYQ"),u=t.n(o),d=t("33Jr"),m=["className","cssModule","innerRef","tag"],f={tag:d.o,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},p=function(e){var a=e.className,t=e.cssModule,s=e.innerRef,c=e.tag,i=Object(r.a)(e,m),o=Object(d.k)(u()(a,"card-body"),t);return l.a.createElement(c,Object(n.a)({},i,{className:o,ref:s}))};p.propTypes=f,p.defaultProps={tag:"div"},a.a=p},"4enZ":function(e,a,t){"use strict";t.r(a);var n=t("jT3O"),r=t("q1tI"),s=t.n(r),l=t("1Yj4"),c=t("ok1R"),i=t("rhny"),o=t("UU0N"),u=t("DCcX"),d=t("CaDr"),m=t("+TN3"),f=t("UYTu"),p=t("XJI2"),b=t("/5QC"),g=t("EO2r"),h=t("U8OX"),N=t("20a2"),v=s.a.createElement;function y(){var e=Object(n.a)(["\n  query products($type: _CategoryType!, $indexFrom: Int!, $limit: Int!) {\n    products(type: $type, indexFrom: $indexFrom, limit: $limit) {\n      items {\n        id\n        title\n        description\n        type\n        brand\n        category\n        price\n        new\n        stock\n        sale\n        discount\n        variants {\n          id\n          sku\n          size\n          color\n          image_id\n        }\n        images {\n          image_id\n          id\n          alt\n          src\n        }\n      }\n    }\n  }\n"]);return y=function(){return e},e}var O=Object(f.a)(y());a.default=function(){var e=Object(N.useRouter)(),a=Object(r.useContext)(p.b),t=Object(r.useContext)(g.c),n=Object(r.useContext)(h.a),f=a.state.symbol,y=a.state,w=Object(r.useContext)(b.a),j=w.addToCart,k=w.quantity,T=w.plusQty,x=w.minusQty,C=w.setQuantity,I=Object(r.useState)(),S=I[0],E=I[1],_=Object(r.useState)(!1),q=_[0],F=_[1],z=function(){return F(!q)},A=[],M=function(a){var t=a.title.split(" ").join("");e.push("/product-details/".concat(a.id)+"-"+"".concat(t))},P=Object(m.a)(O,{variables:{type:"fashion",indexFrom:0,limit:8}}),R=P.loading,L=P.data;return v("section",{className:"section-b-space ratio_asos"},v(l.a,null,v(c.a,null,v(i.a,{className:"product-related"},v("h2",null,"related products"))),v(c.a,{className:"search-product"},L&&L.products&&0!==L.products.items.length&&!R?v(s.a.Fragment,null,L&&L.products.items.slice(0,6).map((function(e,a){return v(i.a,{xl:"2",md:"4",sm:"6",key:a},v("div",{className:"product-box"},v("div",{className:"img-wrapper"},v("div",{className:"front"},v("a",{href:null},v(o.a,{onClick:function(){return M(e)},src:e.images[0].src,className:"img-fluid blur-up lazyload bg-img",alt:""}))),v("div",{className:"back"},v("a",{href:null},v(o.a,{src:e.images[1].src,className:"img-fluid blur-up lazyload bg-img",alt:""}))),v("div",{className:"cart-info cart-wrap"},v("button",{"data-toggle":"modal","data-target":"#addtocart",title:"Add to cart",onClick:function(){return j(e,k)}},v("i",{className:"fa fa-shopping-cart"})),v("a",{href:"#",onClick:function(){return t.addToWish(e)},title:"Add to Wishlist"},v("i",{className:"fa fa-heart","aria-hidden":"true"})),v("a",{href:"#",onClick:function(){return E(e),void z()},"data-toggle":"modal","data-target":"#quick-view",title:"Quick View"},v("i",{className:"fa fa-search","aria-hidden":"true"})),v("a",{href:"#",onClick:function(){return n.addToCompare(e)},title:"Compare"},v("i",{className:"fa fa-refresh","aria-hidden":"true"})))),v("div",{className:"product-detail"},v("div",{className:"rating"},v("i",{className:"fa fa-star"})," ",v("i",{className:"fa fa-star"})," ",v("i",{className:"fa fa-star"})," ",v("i",{className:"fa fa-star"})," ",v("i",{className:"fa fa-star"})),v("a",{href:null},v("h6",null,e.title)),v("h4",null,f,e.price),v("ul",{className:"color-variant"},v("li",{className:"bg-light0"}),v("li",{className:"bg-light1"}),v("li",{className:"bg-light2"})))))}))):"loading"),S?v(u.a,{isOpen:q,toggle:z,className:"modal-lg quickview-modal",centered:!0},v(d.a,null,v(c.a,null,v(i.a,{lg:"6",xs:"12"},v("div",{className:"quick-view-img"},v(o.a,{src:"".concat(S.images[0].src),alt:"",className:"img-fluid"}))),v(i.a,{lg:"6",className:"rtl-text"},v("div",{className:"product-right"},v("h2",null," ",S.title," "),v("h3",null,y.symbol,(S.price*y.value).toFixed(2)),S.variants?v("ul",{className:"color-variant"},A?v("ul",{className:"color-variant"},"jewellery"===S.type||"nursery"===S.type||"beauty"===S.type||"electronics"===S.type||"goggles"===S.type||"watch"===S.type||"pets"===S.type?"":v(s.a.Fragment,null,A?v("ul",{className:"color-variant"},A.map((function(e,a){return v("li",{className:e.color,key:a,title:e.color,onClick:function(){return variantChangeByColor(e.image_id,S.images)}})}))):"")):""):"",v("div",{className:"border-product"},v("h6",{className:"product-title"},"product details"),v("p",null,S.description)),v("div",{className:"product-description border-product"},S.size?v("div",{className:"size-box"},v("ul",null,S.size.map((function(e,a){return v("li",{key:a},v("a",{href:null},e))})))):"",v("h6",{className:"product-title"},"quantity"),v("div",{className:"qty-box"},v("div",{className:"input-group"},v("span",{className:"input-group-prepend"},v("button",{type:"button",className:"btn quantity-left-minus",onClick:x,"data-type":"minus","data-field":""},v("i",{className:"fa fa-angle-left"}))),v("input",{type:"text",name:"quantity",value:k,onChange:function(e){C(parseInt(e.target.value))},className:"form-control input-number"}),v("span",{className:"input-group-prepend"},v("button",{type:"button",className:"btn quantity-right-plus",onClick:function(){return T(S)},"data-type":"plus","data-field":""},v("i",{className:"fa fa-angle-right"})))))),v("div",{className:"product-buttons"},v("button",{className:"btn btn-solid",onClick:function(){return j(S,k)}},"add to cart"),v("button",{className:"btn btn-solid",onClick:function(){return M(S)}},"View detail"))))))):""))}},BLzl:function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),s=t("q1tI"),l=t.n(s),c=t("17x9"),i=t.n(c),o=t("TSYQ"),u=t.n(o),d=t("33Jr"),m=["className","cssModule","color","body","inverse","outline","tag","innerRef"],f={tag:d.o,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},p=function(e){var a=e.className,t=e.cssModule,s=e.color,c=e.body,i=e.inverse,o=e.outline,f=e.tag,p=e.innerRef,b=Object(r.a)(e,m),g=Object(d.k)(u()(a,"card",!!i&&"text-white",!!c&&"card-body",!!s&&(o?"border":"bg")+"-"+s),t);return l.a.createElement(f,Object(n.a)({},b,{className:g,ref:p}))};p.propTypes=f,p.defaultProps={tag:"div"},a.a=p},CaDr:function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),s=t("q1tI"),l=t.n(s),c=t("17x9"),i=t.n(c),o=t("TSYQ"),u=t.n(o),d=t("33Jr"),m=["className","cssModule","tag"],f={tag:d.o,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,s=e.tag,c=Object(r.a)(e,m),i=Object(d.k)(u()(a,"modal-body"),t);return l.a.createElement(s,Object(n.a)({},c,{className:i}))};p.propTypes=f,p.defaultProps={tag:"div"},a.a=p},D16B:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n).a.createElement;a.default=function(){return r("ul",{className:"product-social"},r("li",null,r("a",{href:"https://www.facebook.com",target:"_blank"},r("i",{className:"fa fa-facebook"}))),r("li",null,r("a",{href:"https://plus.google.com",target:"_blank"},r("i",{className:"fa fa-google-plus"}))),r("li",null,r("a",{href:"https://twitter.com",target:"_blank"},r("i",{className:"fa fa-twitter"}))),r("li",null,r("a",{href:"https://www.instagram.com",target:"_blank"},r("i",{className:"fa fa-instagram"}))),r("li",null,r("a",{href:"https://rss.com",target:"_blank"},r("i",{className:"fa fa-rss"}))))}},EO2r:function(e,a,t){"use strict";t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return u}));var n=t("z7pX"),r=t("q1tI"),s=t.n(r),l=t("FGyW"),c=t("EO2r");t.d(a,"c",(function(){return c.a})),t.d(a,"d",(function(){return c.b}));var i=s.a.createElement,o=Object(r.createContext)({wishlistItems:Function,addToWish:Function,removeFromWish:Function}),u=function(e){var a=Object(r.useState)(function(){try{var e=localStorage.getItem("wishlist");return null===e?[]:JSON.parse(e)}catch(a){return[]}}()),t=a[0],s=a[1];Object(r.useEffect)((function(){localStorage.setItem("wishlist",JSON.stringify(t))}),[t]);return i(o.Provider,{value:{wishlistItems:t,addToWish:function(e){-1===t.findIndex((function(a){return a.id===e.id}))?(l.b.success("Product Added Successfully !"),s([].concat(Object(n.a)(t),[e]))):l.b.error("This Product Already Added !")},removeFromWish:function(e){s(t.filter((function(a){return a.id!==e.id}))),l.b.error("Product Removed Successfully !")}}},e.children)}},HALo:function(e,a,t){"use strict";function n(){return(n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}t.d(a,"a",(function(){return n}))},U8OX:function(e,a,t){"use strict";t.d(a,"c",(function(){return o})),t.d(a,"d",(function(){return u}));var n=t("z7pX"),r=t("q1tI"),s=t.n(r),l=t("FGyW"),c=t("U8OX");t.d(a,"a",(function(){return c.c})),t.d(a,"b",(function(){return c.d}));var i=s.a.createElement,o=Object(r.createContext)({compareItems:Function,addToCompare:Function,removeFromComapre:Function}),u=function(e){var a=Object(r.useState)(function(){try{var e=localStorage.getItem("compare");return null===e?[]:JSON.parse(e)}catch(a){return[]}}()),t=a[0],s=a[1];Object(r.useEffect)((function(){localStorage.setItem("compare",JSON.stringify(t))}),[t]);return i(o.Provider,{value:{compareItems:t,addToCompare:function(e){-1===t.findIndex((function(a){return a.id===e.id}))?(l.b.success("Product Added Successfully !"),s([].concat(Object(n.a)(t),[e]))):l.b.error("This Product Already Added !")},removeFromComapre:function(e){s(t.filter((function(a){return a.id!==e.id}))),l.b.error("Product Removed Successfully !")}}},e.children)}},Xu2O:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),s=t("ok1R"),l=t("rhny"),c=t("BLzl"),i=t("afej"),o=t("nsn4"),u=t("/kxI"),d=t("D16B"),m=r.a.createElement;a.default=function(){var e=Object(n.useState)(!1),a=e[0],t=e[1],r=Object(n.useState)(!0),f=r[0],p=r[1],b=Object(n.useState)(!0),g=b[0],h=b[1];return m("div",{className:"product-right product-description-box"},m("h2",null,"Women Pink Shirt"),m("div",{className:"rating three-star mb-2"},m("i",{className:"fa fa-star"})," ",m("i",{className:"fa fa-star"})," ",m("i",{className:"fa fa-star"})," ",m("i",{className:"fa fa-star"})," ",m("i",{className:"fa fa-star"})),m("div",{className:"product-icon mb-3"},m(d.default,null),m("form",{className:"d-inline-block"},m("button",{className:"wishlist-btn"},m("i",{className:"fa fa-heart"}),m("span",{className:"title-font"},"Add To WishList")))),m(s.a,{className:"product-accordion"},m(l.a,{sm:"12"},m("div",{className:"accordion theme-accordion",id:"accordionExample"},m(c.a,null,m(i.a,{className:"card-header",id:"headingOne"},m("h5",{className:"mb-0"},m("button",{className:"btn btn-link",type:"button",onClick:function(){return t(!a)},"data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"product description"))),m(o.a,{isOpen:a,id:"collapseOne",className:"collapse","aria-labelledby":"headingOne","data-parent":"#accordionExample"},m("div",{className:"card-body"},m("p",null,"it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures"),m("div",{className:"single-product-tables detail-section"},m("table",null,m("tbody",null,m("tr",null,m("td",null,"Febric:"),m("td",null,"Chiffon")),m("tr",null,m("td",null,"Color:"),m("td",null,"Red")),m("tr",null,m("td",null,"Material:"),m("td",null,"Crepe printed")))))))),m(c.a,{className:"card"},m(i.a,{className:"card-header",id:"headingTwo"},m("h5",{className:"mb-0"},m("button",{className:"btn btn-link collapsed",type:"button","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"false",onClick:function(){return p(!f)},"aria-controls":"collapseTwo"},"details"))),m(o.a,{isOpen:f,id:"collapseTwo",className:"collapse","aria-labelledby":"headingTwo","data-parent":"#accordionExample"},m(u.a,null,m("div",{className:"mt-2 text-center"},m("iframe",{src:"https://www.youtube.com/embed/BUWzX78Ye_8",allow:"autoplay; encrypted-media",allowFullScreen:!0}))))),m(c.a,{className:"card"},m(i.a,{className:"card-header",id:"headingThree"},m("h5",{className:"mb-0"},m("button",{className:"btn btn-link collapsed",type:"button","data-toggle":"collapse","data-target":"#collapseThree","aria-expanded":"false",onClick:function(){return h(!g)},"aria-controls":"collapseThree"},"review"))),m(o.a,{isOpen:g,id:"collapseThree",className:"collapse","aria-labelledby":"headingThree","data-parent":"#accordionExample"},m(u.a,{className:"card-body"},m("p",null,"no reviews yet"))))))))}},afej:function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),s=t("q1tI"),l=t.n(s),c=t("17x9"),i=t.n(c),o=t("TSYQ"),u=t.n(o),d=t("33Jr"),m=["className","cssModule","tag"],f={tag:d.o,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,s=e.tag,c=Object(r.a)(e,m),i=Object(d.k)(u()(a,"card-header"),t);return l.a.createElement(s,Object(n.a)({},c,{className:i}))};p.propTypes=f,p.defaultProps={tag:"div"},a.a=p},d2fK:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),s=t("ncOK"),l=(t("4enZ"),t("gy5E")),c=(t("zg7l"),r.a.createElement);a.default=Object(l.a)((function(){return c(s.a,{parent:"home",title:"product"})}))},ncOK:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),s=t("Mryu"),l=t("1Yj4"),c=t("ok1R"),i=t("rhny"),o=r.a.createElement,u=function(e){var a=e.title,t=e.parent,n=e.subTitle;return o("div",{className:"breadcrumb-section"},o(l.a,null,o(c.a,null,o(i.a,{sm:"6"},o("div",{className:"page-title"},o("h2",null,a))),o(i.a,{sm:"6"},o("nav",{"aria-label":"breadcrumb",className:"theme-breadcrumb"},o("ol",{className:"breadcrumb"},o("li",{className:"breadcrumb-item"},o("a",{href:"#"},t)),o("li",{className:"breadcrumb-item","aria-current":"page"},a),void 0===n?"":o("li",{className:"breadcrumb-item active","aria-current":"page"},n)))))))},d=t("qhky"),m=t("jIMG"),f=t.n(m),p=t("eZDE"),b=r.a.createElement;a.a=function(e){var a=e.children,t=e.title,n=e.parent,l=e.subTitle;return b(r.a.Fragment,null,b(d.a,null,b("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),b("link",{rel:"icon",type:"image/x-icon",href:f.a?f.a:""})),b(s.a,{topClass:"top-header",logoName:"logo.png"}),b(u,{title:t,parent:n,subTitle:l}),b(r.a.Fragment,null,a),b(p.a,{footerClass:"footer-light ",footerLayOut:"light-layout upper-footer",footerSection:"small-section border-section border-top-0",belowSection:"section-b-space light-layout",newLatter:!0}))}},rgQu:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),s=t("UU0N"),l=r.a.createElement;a.default=function(e){var a=e.image;return l(s.a,{src:"".concat(a.src),alt:a.alt,className:"img-fluid image_zoom_cls-0"})}},xEqG:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product-details/accordian",function(){return t("d2fK")}])},z7pX:function(e,a,t){"use strict";function n(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}function r(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,a){if(e){if("string"===typeof e)return n(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,a):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(a,"a",(function(){return r}))},zg7l:function(e,a,t){"use strict";t.r(a);var n=t("HALo"),r=t("jT3O"),s=t("q1tI"),l=t.n(s),c=t("1Yj4"),i=t("ok1R"),o=t("rhny"),u=t("UU0N"),d=t("OS56"),m=t.n(d),f=t("UYTu"),p=t("+TN3"),b=t("rgQu"),g=t("D/Lk"),h=t("Xu2O"),N=l.a.createElement;function v(){var e=Object(r.a)(["\n  query product($id: Int!) {\n    product(id: $id) {\n      id\n      title\n      description\n      type\n      brand\n      category\n      price\n      new\n      sale\n      discount\n      stock\n      variants {\n        id\n        color\n        image_id\n        variant_id\n        size\n      }\n      images {\n        image_id\n        src\n      }\n    }\n  }\n"]);return v=function(){return e},e}var y=Object(f.a)(v());a.default=function(){var e=Object(s.useState)({nav1:null,nav2:null}),a=e[0],t=e[1],r=Object(s.useRef)(),l=Object(s.useRef)(),d=Object(p.a)(y,{variables:{id:1}}),f=d.loading,v=d.data;Object(s.useEffect)((function(){t({nav1:r.current,nav2:l.current})}),[v]);var O=a.nav1,w=a.nav2;return N("section",null,N("div",{className:"collection-wrapper"},N(c.a,null,v&&v.product&&0!==v.product.length&&!f?N(i.a,{className:"leftImage"},N(o.a,{lg:"4"},N(i.a,null,N(o.a,null,N(m.a,Object(n.a)({},{slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!0,fade:!0},{asNavFor:w,ref:function(e){return r.current=e},className:"product-right-slick"}),(v.product.variants,v.product.images.map((function(e,a){return N("div",{key:a},N(b.default,{image:e}))})))))),N(i.a,null,N(o.a,{xs:"12"},N(m.a,Object(n.a)({className:"slider-nav"},{slidesToShow:3,swipeToSlide:!0,arrows:!1,dots:!1,focusOnSelect:!0},{asNavFor:O,ref:function(e){return l.current=e}}),v.product.variants?v.product.images.map((function(e,a){return N("div",{key:a},N(u.a,{src:"".concat(e.src),key:a,alt:e.alt,className:"img-fluid"}))})):"")))),N(o.a,{lg:"4"},N(h.default,null)),N(o.a,{lg:"4"},N(g.default,{item:v.product}))):"loading")))}}},[["xEqG",1,0,9,2,3,4,5,6,7,8,10,11,12,13,14,15,21]]]);