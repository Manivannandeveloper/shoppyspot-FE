_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[262],{"/5QC":function(a,e,t){"use strict";var n=t("q1tI"),s=Object(n.createContext)();e.a=s},"1Yj4":function(a,e,t){"use strict";var n=t("wx14"),s=t("zLVn"),l=t("q1tI"),c=t.n(l),r=t("17x9"),i=t.n(r),o=t("TSYQ"),u=t.n(o),d=t("33Jr"),m=["className","cssModule","fluid","tag"],p={tag:d.o,fluid:i.a.oneOfType([i.a.bool,i.a.string]),className:i.a.string,cssModule:i.a.object},f=function(a){var e=a.className,t=a.cssModule,l=a.fluid,r=a.tag,i=Object(s.a)(a,m),o="container";!0===l?o="container-fluid":l&&(o="container-"+l);var p=Object(d.k)(u()(e,o),t);return c.a.createElement(r,Object(n.a)({},i,{className:p}))};f.propTypes=p,f.defaultProps={tag:"div"},e.a=f},"6yjW":function(a,e,t){"use strict";t.r(e);var n=t("q1tI"),s=t.n(n),l=t("YFqc"),c=t.n(l),r=t("xTE4"),i=t.n(r),o=t("DCcX"),u=t("vkoW"),d=t("CaDr"),m=t("UU0N"),p=t("L3zb"),f=t("XJI2"),b=t("/5QC"),g=t("JtKs"),h=t("D16B"),N=s.a.createElement;e.default=function(a){var e=a.item,t=a.stickyClass,l=a.changeColorVar,r=Object(n.useState)(!1),v=r[0],y=r[1],k=Object(n.useContext)(f.b).state.symbol,j=function(){return y(!v)},x=e,O=Object(n.useContext)(b.a),w=O.stock,z=O.plusQty,C=O.minusQty,T=O.quantity,_=[],q=[];return N(s.a.Fragment,null,N("div",{className:"product-right ".concat(t)},"Detail Price",N("h2",null," ",x.title," "),N("h4",null,N("del",null,k,x.price),N("span",null,x.discount,"% off")),N("h3",null,k,x.price-x.price*x.discount/100),x.variants.map((function(a){_.find((function(e){return e.color===a.color}))||_.push(a),q.find((function(e){return e===a.size}))||q.push(a.size)})),N(s.a.Fragment,null,void 0===l?_?N("ul",{className:"color-variant"},_.map((function(a,e){return N("li",{className:a.color,key:e,title:a.color})}))):"":_?N("ul",{className:"color-variant"},_.map((function(a,e){return N("li",{className:a.color,key:e,title:a.color,onClick:function(){return l(e)}})}))):""),N("div",{className:"product-description border-product"},x.variants?N("div",null,N("h6",{className:"product-title size-text"},"select size",N("span",null,N("a",{href:null,"data-toggle":"modal","data-target":"#sizemodal",onClick:j},"size chart"))),N(o.a,{isOpen:v,toggle:j,centered:!0},N(u.a,{toggle:j},"Sheer Straight Kurta"),N(d.a,null,N(m.a,{src:i.a,alt:"size",className:"img-fluid"}))),N("div",{className:"size-box"},N("ul",null,q.map((function(a,e){return N("li",{key:e},N("a",{href:null},a))}))))):"",N("span",{className:"instock-cls"},w),N("h6",{className:"product-title"},"quantity"),N("div",{className:"qty-box"},N("div",{className:"input-group"},N("span",{className:"input-group-prepend"},N("button",{type:"button",className:"btn quantity-left-minus",onClick:C,"data-type":"minus","data-field":""},N("i",{className:"fa fa-angle-left"}))),N(p.a,{type:"text",name:"quantity",value:T,onChange:function(a){setQuantity(parseInt(a.target.value))},className:"form-control input-number"}),N("span",{className:"input-group-prepend"},N("button",{type:"button",className:"btn quantity-right-plus",onClick:function(){return z(x)},"data-type":"plus","data-field":""},N("i",{className:"fa fa-angle-right"})))))),N("div",{className:"product-buttons"},N("a",{href:null,className:"btn btn-solid",onClick:function(){return O.addToCart(x,T)}},"add to cart"),N(c.a,{href:"/page/account/checkout"},N("a",{className:"btn btn-solid"},"buy now"))),N("div",{className:"border-product"},N("h6",{className:"product-title"},"product details"),N("p",null,x.description)),N("div",{className:"border-product"},N("h6",{className:"product-title"},"share it"),N("div",{className:"product-icon"},N(h.default,null))),N("div",{className:"border-product"},N("h6",{className:"product-title"},"Time Reminder"),N(g.a,null))))}},CNiM:function(a,e,t){"use strict";t.r(e);var n=t("q1tI"),s=t.n(n),l=t("YFqc"),c=t.n(l),r=t("xTE4"),i=t.n(r),o=t("DCcX"),u=t("vkoW"),d=t("CaDr"),m=t("UU0N"),p=t("L3zb"),f=t("JtKs"),b=t("XJI2"),g=t("/5QC"),h=t("D16B"),N=t("Rkj0"),v=t.n(N),y=t("etN5"),k=t.n(y),j=t("ezry"),x=t.n(j),O=s.a.createElement;e.default=function(a){var e=Object(n.useState)(!1),t=e[0],l=e[1],r=Object(n.useContext)(b.b).state.symbol,N=function(){return l(!t)},y=a.item,j=Object(n.useContext)(g.a),w=j.addToCart,z=j.stock,C=j.plusQty,T=j.minusQty,_=j.quantity,q=[],S=[];return O(s.a.Fragment,null,O("div",{className:"product-right ".concat(a.stickyClass)},O("h2",null," ",y.title," "),O("h4",null,O("del",null,r,y.price),O("span",null,y.discount,"% off")),O("h3",null,r,y.price-y.price*y.discount/100," "),y.variants.map((function(a){q.find((function(e){return e.color===a.color}))||q.push(a),S.find((function(e){return e===a.size}))||S.push(a.size)})),q?O("ul",{className:"color-variant"},q.map((function(e,t){return O("li",{className:e.color,key:t,title:e.color,onClick:function(){return a.changeColorVar(t)}})}))):"",O("ul",{className:"image-swatch"},O("li",{className:"active"},O("a",{href:"#"},O("img",{src:v.a,alt:"",className:"img-fluid blur-up lazyloaded"}))),O("li",null,O("a",{href:"#"},O("img",{src:k.a,alt:"",className:"img-fluid blur-up lazyloaded"}))),O("li",null,O("a",{href:"#"},O("img",{src:x.a,alt:"",className:"img-fluid blur-up lazyloaded"})))),O("div",{className:"product-description border-product"},y.variants?O("div",null,O("h6",{className:"product-title size-text"},"select size",O("span",null,O("a",{href:null,"data-toggle":"modal","data-target":"#sizemodal",onClick:N},"size chart"))),O(o.a,{isOpen:t,toggle:N,centered:!0},O(u.a,{toggle:N},"Sheer Straight Kurta"),O(d.a,null,O(m.a,{src:i.a,alt:"size",className:"img-fluid"}))),O("div",{className:"size-box"},O("ul",null,S.map((function(a,e){return O("li",{key:e},O("a",{href:null},a))}))))):"",O("span",{className:"instock-cls"},z),O("h6",{className:"product-title"},"quantity"),O("div",{className:"qty-box"},O("div",{className:"input-group"},O("span",{className:"input-group-prepend"},O("button",{type:"button",className:"btn quantity-left-minus",onClick:T,"data-type":"minus","data-field":""},O("i",{className:"fa fa-angle-left"}))),O(p.a,{type:"text",name:"quantity",value:_,onChange:function(a){setQuantity(parseInt(a.target.value))},className:"form-control input-number"}),O("span",{className:"input-group-prepend"},O("button",{type:"button",className:"btn quantity-right-plus",onClick:C,"data-type":"plus","data-field":""},O("i",{className:"fa fa-angle-right"})))))),O("div",{className:"product-buttons"},O("a",{href:null,className:"btn btn-solid",onClick:function(){return w(y,_)}},"add to cart"),O(c.a,{href:"/page/account/checkout"},O("a",{className:"btn btn-solid"},"buy now"))),O("div",{className:"border-product"},O("h6",{className:"product-title"},"product details "),O("p",null,y.shortDetails)),O("div",{className:"border-product"},O("h6",{className:"product-title"},"share it"),O("div",{className:"product-icon"},O(h.default,null))),O("div",{className:"border-product"},O("h6",{className:"product-title"},"Time Reminder"),O(f.a,null))))}},D16B:function(a,e,t){"use strict";t.r(e);var n=t("q1tI"),s=t.n(n).a.createElement;e.default=function(){return s("ul",{className:"product-social"},s("li",null,s("a",{href:"https://www.facebook.com",target:"_blank"},s("i",{className:"fa fa-facebook"}))),s("li",null,s("a",{href:"https://plus.google.com",target:"_blank"},s("i",{className:"fa fa-google-plus"}))),s("li",null,s("a",{href:"https://twitter.com",target:"_blank"},s("i",{className:"fa fa-twitter"}))),s("li",null,s("a",{href:"https://www.instagram.com",target:"_blank"},s("i",{className:"fa fa-instagram"}))),s("li",null,s("a",{href:"https://rss.com",target:"_blank"},s("i",{className:"fa fa-rss"}))))}},HALo:function(a,e,t){"use strict";function n(){return(n=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a}).apply(this,arguments)}t.d(e,"a",(function(){return n}))},L3zb:function(a,e,t){"use strict";var n=t("wx14"),s=t("zLVn"),l=t("JX7q"),c=t("dI71"),r=t("q1tI"),i=t.n(r),o=t("17x9"),u=t.n(o),d=t("TSYQ"),m=t.n(d),p=t("33Jr"),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.o,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(a){function e(e){var t;return(t=a.call(this,e)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.focus=t.focus.bind(Object(l.a)(t)),t}Object(c.a)(e,a);var t=e.prototype;return t.getRef=function(a){this.props.innerRef&&this.props.innerRef(a),this.ref=a},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var a=this.props,e=a.className,t=a.cssModule,l=a.type,c=a.bsSize,r=a.valid,o=a.invalid,u=a.tag,d=a.addon,b=a.plaintext,g=a.innerRef,h=Object(s.a)(a,f),N=["radio","checkbox"].indexOf(l)>-1,v=new RegExp("\\D","g"),y=u||("select"===l||"textarea"===l?l:"input"),k="form-control";b?(k+="-plaintext",y=u||"input"):"file"===l?k+="-file":"range"===l?k+="-range":N&&(k=d?null:"form-check-input"),h.size&&v.test(h.size)&&(Object(p.q)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=h.size,delete h.size);var j=Object(p.k)(m()(e,o&&"is-invalid",r&&"is-valid",!!c&&"form-control-"+c,k),t);return("input"===y||u&&"function"===typeof u)&&(h.type=l),h.children&&!b&&"select"!==l&&"string"===typeof y&&"select"!==y&&(Object(p.q)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),i.a.createElement(y,Object(n.a)({},h,{ref:g,className:j,"aria-invalid":o}))},e}(i.a.Component);g.propTypes=b,g.defaultProps={type:"text"},e.a=g},QtuF:function(a,e,t){"use strict";t.r(e);var n=t("HALo"),s=t("jT3O"),l=t("q1tI"),c=t.n(l),r=t("1Yj4"),i=t("ok1R"),o=t("rhny"),u=t("UU0N"),d=t("OS56"),m=t.n(d),p=t("UYTu"),f=t("+TN3"),b=t("rgQu"),g=t("yAZD"),h=t.n(g),N=t("wbYp"),v=t.n(N),y=t("Rkj0"),k=t.n(y),j=t("CNiM"),x=(t("6yjW"),c.a.createElement);function O(){var a=Object(s.a)(["\n  query product($id: Int!) {\n    product(id: $id) {\n      id\n      title\n      description\n      type\n      brand\n      category\n      price\n      new\n      sale\n      discount\n      stock\n      variants {\n        id\n        color\n        image_id\n        variant_id\n        size\n      }\n      images {\n        image_id\n        src\n      }\n    }\n  }\n"]);return O=function(){return a},a}var w=Object(p.a)(O());e.default=function(){var a=Object(l.useState)({nav1:null,nav2:null}),e=a[0],t=a[1],s=Object(l.useRef)(),c=Object(l.useRef)(),d=Object(f.a)(w,{variables:{id:1}}),p=d.loading,g=d.data;Object(l.useEffect)((function(){t({nav1:s.current,nav2:c.current})}),[g]);var N=e.nav1,y=e.nav2;return x("section",{className:"section-b-space"},x("div",{className:"collection-wrapper"},x(r.a,null,g&&g.product&&0!==g.product.length&&!p?x(i.a,{className:"leftImage"},x(o.a,{lg:"6"},x(m.a,Object(n.a)({},{slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!0,fade:!0},{asNavFor:y,ref:function(a){return s.current=a},className:"product-right-slick"}),g.product.images.map((function(a,e){return x("div",{key:e},x(b.default,{image:a}))}))),x(i.a,null,x(o.a,{sm:"12"},x(m.a,Object(n.a)({className:"slider-nav"},{slidesToShow:3,swipeToSlide:!0,arrows:!1,dots:!1,focusOnSelect:!0},{asNavFor:N,ref:function(a){return c.current=a}}),g.product.variants?g.product.images.map((function(a,e){return x("div",{key:e},x(u.a,{src:"".concat(a.src),key:e,alt:a.alt,className:"img-fluid"}))})):"")))),x(o.a,{lg:"6",className:"rtl-text"},x(j.default,{changeColorVar:function(a){c.current.slickGoTo(a)},item:g.product}),x("div",{className:"border-product"},x("h6",{className:"product-title"},"Frequently bought together"),x("div",{className:"bundle"},x("div",{className:"bundle_img"},x("div",{className:"img-box"},x("a",{href:"#"},x(u.a,{src:k.a,alt:"",className:"img-fluid blur-up lazyload"}))),x("span",{className:"plus"},"+"),x("div",{className:"img-box"},x("a",{href:"#"},x(u.a,{src:v.a,alt:"",className:"img-fluid blur-up lazyload"}))),x("span",{className:"plus"},"+"),x("div",{className:"img-box"},x("a",{href:"#"},x(u.a,{src:h.a,alt:"",className:"img-fluid blur-up lazyload"})))),x("div",{className:"bundle_detail"},x("div",{className:"theme_checkbox"},x("label",null,"this product: WOMEN PINK SHIRT"," ",x("span",{className:"price_product"},"$55"),x("input",{type:"checkbox",defaultChecked:!0}),x("span",{className:"checkmark"})),x("label",null,"black long skirt"," ",x("span",{className:"price_product"},"$20"),x("input",{type:"checkbox",defaultChecked:!0}),x("span",{className:"checkmark"})),x("label",null,"women heeled boots"," ",x("span",{className:"price_product"},"$15"),x("input",{type:"checkbox",defaultChecked:!0}),x("span",{className:"checkmark"})),x("a",{href:"#",className:"btn btn-solid btn-xs"},"buy this bundle"))))))):"loading")))}},Rkj0:function(a,e){a.exports="/_next/static/images/001-2031280d3a500fa0f93d83a465113118.jpg"},UU0N:function(a,e,t){"use strict";var n=t("wx14"),s=t("zLVn"),l=t("q1tI"),c=t.n(l),r=t("17x9"),i=t.n(r),o=t("TSYQ"),u=t.n(o),d=t("33Jr"),m=["body","bottom","className","cssModule","heading","left","list","middle","object","right","tag","top"],p={body:i.a.bool,bottom:i.a.bool,children:i.a.node,className:i.a.string,cssModule:i.a.object,heading:i.a.bool,left:i.a.bool,list:i.a.bool,middle:i.a.bool,object:i.a.bool,right:i.a.bool,tag:d.o,top:i.a.bool},f=function(a){var e,t=a.body,l=a.bottom,r=a.className,i=a.cssModule,o=a.heading,p=a.left,f=a.list,b=a.middle,g=a.object,h=a.right,N=a.tag,v=a.top,y=Object(s.a)(a,m);e=o?"h4":y.href?"a":y.src||g?"img":f?"ul":"div";var k=N||e,j=Object(d.k)(u()(r,{"media-body":t,"media-heading":o,"media-left":p,"media-right":h,"media-top":v,"media-bottom":l,"media-middle":b,"media-object":g,"media-list":f,media:!t&&!o&&!p&&!h&&!v&&!l&&!b&&!g&&!f}),i);return c.a.createElement(k,Object(n.a)({},y,{className:j}))};f.propTypes=p,e.a=f},XJI2:function(a,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"d",(function(){return i}));var n=t("q1tI"),s=t.n(n),l=t("XJI2");t.d(e,"b",(function(){return l.a})),t.d(e,"c",(function(){return l.d}));var c=s.a.createElement,r=Object(n.createContext)({}),i=function(a){var e=Object(n.useState)({currency:"USD",symbol:"$",value:1}),t=e[0],s={selectedCurr:t,selectedCurrency:e[1]};return c(r.Provider,{value:{state:t,currencyContext:s}},a.children)}},etN5:function(a,e){a.exports="/_next/static/images/002-2d80e9c3f90e861269967bb6a1139863.jpg"},ezry:function(a,e){a.exports="/_next/static/images/02-428eb69a9364afc3103e28c86d721c33.jpg"},jEJm:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product-details/product/ImageSwatchPage",function(){return t("QtuF")}])},ok1R:function(a,e,t){"use strict";var n=t("wx14"),s=t("zLVn"),l=t("q1tI"),c=t.n(l),r=t("17x9"),i=t.n(r),o=t("TSYQ"),u=t.n(o),d=t("33Jr"),m=["className","cssModule","noGutters","tag","form","widths"],p=i.a.oneOfType([i.a.number,i.a.string]),f={tag:d.o,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(a){var e=a.className,t=a.cssModule,l=a.noGutters,r=a.tag,i=a.form,o=a.widths,p=Object(s.a)(a,m),f=[];o.forEach((function(e,t){var n=a[e];if(delete p[e],n){var s=!t;f.push(s?"row-cols-"+n:"row-cols-"+e+"-"+n)}}));var b=Object(d.k)(u()(e,l?"no-gutters":null,i?"form-row":"row",f),t);return c.a.createElement(r,Object(n.a)({},p,{className:b}))};g.propTypes=f,g.defaultProps=b,e.a=g},rgQu:function(a,e,t){"use strict";t.r(e);var n=t("q1tI"),s=t.n(n),l=t("UU0N"),c=s.a.createElement;e.default=function(a){var e=a.image;return c(l.a,{src:"".concat(e.src),alt:e.alt,className:"img-fluid image_zoom_cls-0"})}},rhny:function(a,e,t){"use strict";var n=t("wx14"),s=t("zLVn"),l=t("q1tI"),c=t.n(l),r=t("17x9"),i=t.n(r),o=t("TSYQ"),u=t.n(o),d=t("33Jr"),m=["className","cssModule","widths","tag"],p=i.a.oneOfType([i.a.number,i.a.string]),f=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:p,offset:p})]),b={tag:d.o,xs:f,sm:f,md:f,lg:f,xl:f,className:i.a.string,cssModule:i.a.object,widths:i.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(a,e,t){return!0===t||""===t?a?"col":"col-"+e:"auto"===t?a?"col-auto":"col-"+e+"-auto":a?"col-"+t:"col-"+e+"-"+t},N=function(a){var e=a.className,t=a.cssModule,l=a.widths,r=a.tag,i=Object(s.a)(a,m),o=[];l.forEach((function(e,n){var s=a[e];if(delete i[e],s||""===s){var l=!n;if(Object(d.i)(s)){var c,r=l?"-":"-"+e+"-",m=h(l,e,s.size);o.push(Object(d.k)(u()(((c={})[m]=s.size||""===s.size,c["order"+r+s.order]=s.order||0===s.order,c["offset"+r+s.offset]=s.offset||0===s.offset,c)),t))}else{var p=h(l,e,s);o.push(p)}}})),o.length||o.push("col");var p=Object(d.k)(u()(e,o),t);return c.a.createElement(r,Object(n.a)({},i,{className:p}))};N.propTypes=b,N.defaultProps=g,e.a=N},wbYp:function(a,e){a.exports="/_next/static/images/skirt-250d1a8436931d1a48ab5ef132ded16e.jpg"},yAZD:function(a,e){a.exports="/_next/static/images/shoes-e618236da31ed1254bfc235642aac7b4.jpg"}},[["jEJm",1,0,2,3,4,5,7,13,18]]]);