_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[275],{"4enZ":function(t,a,e){"use strict";e.r(a);var n=e("jT3O"),i=e("q1tI"),r=e.n(i),l=e("1Yj4"),s=e("ok1R"),c=e("rhny"),o=e("UU0N"),u=e("DCcX"),d=e("CaDr"),m=e("+TN3"),p=e("UYTu"),f=e("XJI2"),b=e("/5QC"),v=e("EO2r"),g=e("U8OX"),N=e("20a2"),h=r.a.createElement;function y(){var t=Object(n.a)(["\n  query products($type: _CategoryType!, $indexFrom: Int!, $limit: Int!) {\n    products(type: $type, indexFrom: $indexFrom, limit: $limit) {\n      items {\n        id\n        title\n        description\n        type\n        brand\n        category\n        price\n        new\n        stock\n        sale\n        discount\n        variants {\n          id\n          sku\n          size\n          color\n          image_id\n        }\n        images {\n          image_id\n          id\n          alt\n          src\n        }\n      }\n    }\n  }\n"]);return y=function(){return t},t}var j=Object(p.a)(y());a.default=function(){var t=Object(N.useRouter)(),a=Object(i.useContext)(f.b),e=Object(i.useContext)(v.c),n=Object(i.useContext)(g.a),p=a.state.symbol,y=a.state,O=Object(i.useContext)(b.a),k=O.addToCart,C=O.quantity,x=O.plusQty,q=O.minusQty,T=O.setQuantity,w=Object(i.useState)(),I=w[0],E=w[1],S=Object(i.useState)(!1),z=S[0],F=S[1],_=function(){return F(!z)},P=[],A=function(a){var e=a.title.split(" ").join("");t.push("/product-details/".concat(a.id)+"-"+"".concat(e))},M=Object(m.a)(j,{variables:{type:"fashion",indexFrom:0,limit:8}}),Q=M.loading,U=M.data;return h("section",{className:"section-b-space ratio_asos"},h(l.a,null,h(s.a,null,h(c.a,{className:"product-related"},h("h2",null,"related products"))),h(s.a,{className:"search-product"},U&&U.products&&0!==U.products.items.length&&!Q?h(r.a.Fragment,null,U&&U.products.items.slice(0,6).map((function(t,a){return h(c.a,{xl:"2",md:"4",sm:"6",key:a},h("div",{className:"product-box"},h("div",{className:"img-wrapper"},h("div",{className:"front"},h("a",{href:null},h(o.a,{onClick:function(){return A(t)},src:t.images[0].src,className:"img-fluid blur-up lazyload bg-img",alt:""}))),h("div",{className:"back"},h("a",{href:null},h(o.a,{src:t.images[1].src,className:"img-fluid blur-up lazyload bg-img",alt:""}))),h("div",{className:"cart-info cart-wrap"},h("button",{"data-toggle":"modal","data-target":"#addtocart",title:"Add to cart",onClick:function(){return k(t,C)}},h("i",{className:"fa fa-shopping-cart"})),h("a",{href:"#",onClick:function(){return e.addToWish(t)},title:"Add to Wishlist"},h("i",{className:"fa fa-heart","aria-hidden":"true"})),h("a",{href:"#",onClick:function(){return E(t),void _()},"data-toggle":"modal","data-target":"#quick-view",title:"Quick View"},h("i",{className:"fa fa-search","aria-hidden":"true"})),h("a",{href:"#",onClick:function(){return n.addToCompare(t)},title:"Compare"},h("i",{className:"fa fa-refresh","aria-hidden":"true"})))),h("div",{className:"product-detail"},h("div",{className:"rating"},h("i",{className:"fa fa-star"})," ",h("i",{className:"fa fa-star"})," ",h("i",{className:"fa fa-star"})," ",h("i",{className:"fa fa-star"})," ",h("i",{className:"fa fa-star"})),h("a",{href:null},h("h6",null,t.title)),h("h4",null,p,t.price),h("ul",{className:"color-variant"},h("li",{className:"bg-light0"}),h("li",{className:"bg-light1"}),h("li",{className:"bg-light2"})))))}))):"loading"),I?h(u.a,{isOpen:z,toggle:_,className:"modal-lg quickview-modal",centered:!0},h(d.a,null,h(s.a,null,h(c.a,{lg:"6",xs:"12"},h("div",{className:"quick-view-img"},h(o.a,{src:"".concat(I.images[0].src),alt:"",className:"img-fluid"}))),h(c.a,{lg:"6",className:"rtl-text"},h("div",{className:"product-right"},h("h2",null," ",I.title," "),h("h3",null,y.symbol,(I.price*y.value).toFixed(2)),I.variants?h("ul",{className:"color-variant"},P?h("ul",{className:"color-variant"},"jewellery"===I.type||"nursery"===I.type||"beauty"===I.type||"electronics"===I.type||"goggles"===I.type||"watch"===I.type||"pets"===I.type?"":h(r.a.Fragment,null,P?h("ul",{className:"color-variant"},P.map((function(t,a){return h("li",{className:t.color,key:a,title:t.color,onClick:function(){return variantChangeByColor(t.image_id,I.images)}})}))):"")):""):"",h("div",{className:"border-product"},h("h6",{className:"product-title"},"product details"),h("p",null,I.description)),h("div",{className:"product-description border-product"},I.size?h("div",{className:"size-box"},h("ul",null,I.size.map((function(t,a){return h("li",{key:a},h("a",{href:null},t))})))):"",h("h6",{className:"product-title"},"quantity"),h("div",{className:"qty-box"},h("div",{className:"input-group"},h("span",{className:"input-group-prepend"},h("button",{type:"button",className:"btn quantity-left-minus",onClick:q,"data-type":"minus","data-field":""},h("i",{className:"fa fa-angle-left"}))),h("input",{type:"text",name:"quantity",value:C,onChange:function(t){T(parseInt(t.target.value))},className:"form-control input-number"}),h("span",{className:"input-group-prepend"},h("button",{type:"button",className:"btn quantity-right-plus",onClick:function(){return x(I)},"data-type":"plus","data-field":""},h("i",{className:"fa fa-angle-right"})))))),h("div",{className:"product-buttons"},h("button",{className:"btn btn-solid",onClick:function(){return k(I,C)}},"add to cart"),h("button",{className:"btn btn-solid",onClick:function(){return A(I)}},"View detail"))))))):""))}},"6yjW":function(t,a,e){"use strict";e.r(a);var n=e("q1tI"),i=e.n(n),r=e("YFqc"),l=e.n(r),s=e("xTE4"),c=e.n(s),o=e("DCcX"),u=e("vkoW"),d=e("CaDr"),m=e("UU0N"),p=e("L3zb"),f=e("XJI2"),b=e("/5QC"),v=e("JtKs"),g=e("D16B"),N=i.a.createElement;a.default=function(t){var a=t.item,e=t.stickyClass,r=t.changeColorVar,s=Object(n.useState)(!1),h=s[0],y=s[1],j=Object(n.useContext)(f.b).state.symbol,O=function(){return y(!h)},k=a,C=Object(n.useContext)(b.a),x=C.stock,q=C.plusQty,T=C.minusQty,w=C.quantity,I=[],E=[];return N(i.a.Fragment,null,N("div",{className:"product-right ".concat(e)},"Detail Price",N("h2",null," ",k.title," "),N("h4",null,N("del",null,j,k.price),N("span",null,k.discount,"% off")),N("h3",null,j,k.price-k.price*k.discount/100),k.variants.map((function(t){I.find((function(a){return a.color===t.color}))||I.push(t),E.find((function(a){return a===t.size}))||E.push(t.size)})),N(i.a.Fragment,null,void 0===r?I?N("ul",{className:"color-variant"},I.map((function(t,a){return N("li",{className:t.color,key:a,title:t.color})}))):"":I?N("ul",{className:"color-variant"},I.map((function(t,a){return N("li",{className:t.color,key:a,title:t.color,onClick:function(){return r(a)}})}))):""),N("div",{className:"product-description border-product"},k.variants?N("div",null,N("h6",{className:"product-title size-text"},"select size",N("span",null,N("a",{href:null,"data-toggle":"modal","data-target":"#sizemodal",onClick:O},"size chart"))),N(o.a,{isOpen:h,toggle:O,centered:!0},N(u.a,{toggle:O},"Sheer Straight Kurta"),N(d.a,null,N(m.a,{src:c.a,alt:"size",className:"img-fluid"}))),N("div",{className:"size-box"},N("ul",null,E.map((function(t,a){return N("li",{key:a},N("a",{href:null},t))}))))):"",N("span",{className:"instock-cls"},x),N("h6",{className:"product-title"},"quantity"),N("div",{className:"qty-box"},N("div",{className:"input-group"},N("span",{className:"input-group-prepend"},N("button",{type:"button",className:"btn quantity-left-minus",onClick:T,"data-type":"minus","data-field":""},N("i",{className:"fa fa-angle-left"}))),N(p.a,{type:"text",name:"quantity",value:w,onChange:function(t){setQuantity(parseInt(t.target.value))},className:"form-control input-number"}),N("span",{className:"input-group-prepend"},N("button",{type:"button",className:"btn quantity-right-plus",onClick:function(){return q(k)},"data-type":"plus","data-field":""},N("i",{className:"fa fa-angle-right"})))))),N("div",{className:"product-buttons"},N("a",{href:null,className:"btn btn-solid",onClick:function(){return C.addToCart(k,w)}},"add to cart"),N(l.a,{href:"/page/account/checkout"},N("a",{className:"btn btn-solid"},"buy now"))),N("div",{className:"border-product"},N("h6",{className:"product-title"},"product details"),N("p",null,k.description)),N("div",{className:"border-product"},N("h6",{className:"product-title"},"share it"),N("div",{className:"product-icon"},N(g.default,null))),N("div",{className:"border-product"},N("h6",{className:"product-title"},"Time Reminder"),N(v.a,null))))}},"9a8N":function(t,a,e){"use strict";var n=e("wx14"),i=e("zLVn"),r=e("q1tI"),l=e.n(r),s=e("17x9"),c=e.n(s),o=e("TSYQ"),u=e.n(o),d=e("33Jr"),m=["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"],p={tabs:c.a.bool,pills:c.a.bool,vertical:c.a.oneOfType([c.a.bool,c.a.string]),horizontal:c.a.string,justified:c.a.bool,fill:c.a.bool,navbar:c.a.bool,card:c.a.bool,tag:d.o,className:c.a.string,cssModule:c.a.object},f=function(t){var a=t.className,e=t.cssModule,r=t.tabs,s=t.pills,c=t.vertical,o=t.horizontal,p=t.justified,f=t.fill,b=t.navbar,v=t.card,g=t.tag,N=Object(i.a)(t,m),h=Object(d.k)(u()(a,b?"navbar-nav":"nav",!!o&&"justify-content-"+o,function(t){return!1!==t&&(!0===t||"xs"===t?"flex-column":"flex-"+t+"-column")}(c),{"nav-tabs":r,"card-header-tabs":v&&r,"nav-pills":s,"card-header-pills":v&&s,"nav-justified":p,"nav-fill":f}),e);return l.a.createElement(g,Object(n.a)({},N,{className:h}))};f.propTypes=p,f.defaultProps={tag:"ul",vertical:!1},a.a=f},Czwy:function(t,a,e){"use strict";var n=e("wx14"),i=e("dI71"),r=e("q1tI"),l=e.n(r),s=e("17x9"),c=e.n(s),o=e("TSYQ"),u=e.n(o),d=e("I8YG"),m=e("33Jr"),p={tag:m.o,activeTab:c.a.any,className:c.a.string,cssModule:c.a.object},f=function(t){function a(a){var e;return(e=t.call(this,a)||this).state={activeTab:e.props.activeTab},e}return Object(i.a)(a,t),a.getDerivedStateFromProps=function(t,a){return a.activeTab!==t.activeTab?{activeTab:t.activeTab}:null},a.prototype.render=function(){var t=this.props,a=t.className,e=t.cssModule,i=t.tag,r=Object(m.l)(this.props,Object.keys(p)),s=Object(m.k)(u()("tab-content",a),e);return l.a.createElement(d.a.Provider,{value:{activeTabId:this.state.activeTab}},l.a.createElement(i,Object(n.a)({},r,{className:s})))},a}(r.Component);a.a=f,f.propTypes=p,f.defaultProps={tag:"div"}},D16B:function(t,a,e){"use strict";e.r(a);var n=e("q1tI"),i=e.n(n).a.createElement;a.default=function(){return i("ul",{className:"product-social"},i("li",null,i("a",{href:"https://www.facebook.com",target:"_blank"},i("i",{className:"fa fa-facebook"}))),i("li",null,i("a",{href:"https://plus.google.com",target:"_blank"},i("i",{className:"fa fa-google-plus"}))),i("li",null,i("a",{href:"https://twitter.com",target:"_blank"},i("i",{className:"fa fa-twitter"}))),i("li",null,i("a",{href:"https://www.instagram.com",target:"_blank"},i("i",{className:"fa fa-instagram"}))),i("li",null,i("a",{href:"https://rss.com",target:"_blank"},i("i",{className:"fa fa-rss"}))))}},EO2r:function(t,a,e){"use strict";e.d(a,"a",(function(){return o})),e.d(a,"b",(function(){return u}));var n=e("z7pX"),i=e("q1tI"),r=e.n(i),l=e("FGyW"),s=e("EO2r");e.d(a,"c",(function(){return s.a})),e.d(a,"d",(function(){return s.b}));var c=r.a.createElement,o=Object(i.createContext)({wishlistItems:Function,addToWish:Function,removeFromWish:Function}),u=function(t){var a=Object(i.useState)(function(){try{var t=localStorage.getItem("wishlist");return null===t?[]:JSON.parse(t)}catch(a){return[]}}()),e=a[0],r=a[1];Object(i.useEffect)((function(){localStorage.setItem("wishlist",JSON.stringify(e))}),[e]);return c(o.Provider,{value:{wishlistItems:e,addToWish:function(t){-1===e.findIndex((function(a){return a.id===t.id}))?(l.b.success("Product Added Successfully !"),r([].concat(Object(n.a)(e),[t]))):l.b.error("This Product Already Added !")},removeFromWish:function(t){r(e.filter((function(a){return a.id!==t.id}))),l.b.error("Product Removed Successfully !")}}},t.children)}},EzvR:function(t,a,e){"use strict";e.d(a,"a",(function(){return b}));var n=e("wx14"),i=e("zLVn"),r=e("q1tI"),l=e.n(r),s=e("17x9"),c=e.n(s),o=e("TSYQ"),u=e.n(o),d=e("I8YG"),m=e("33Jr"),p=["className","cssModule","tabId","tag"],f={tag:m.o,className:c.a.string,cssModule:c.a.object,tabId:c.a.any};function b(t){var a=t.className,e=t.cssModule,r=t.tabId,s=t.tag,c=Object(i.a)(t,p),o=function(t){return Object(m.k)(u()("tab-pane",a,{active:r===t}),e)};return l.a.createElement(d.a.Consumer,null,(function(t){var a=t.activeTabId;return l.a.createElement(s,Object(n.a)({},c,{className:o(a)}))}))}b.propTypes=f,b.defaultProps={tag:"div"}},F66N:function(t,a,e){"use strict";var n=e("wx14"),i=e("zLVn"),r=e("q1tI"),l=e.n(r),s=e("17x9"),c=e.n(s),o=e("TSYQ"),u=e.n(o),d=e("33Jr"),m=["className","cssModule","active","tag"],p={tag:d.o,active:c.a.bool,className:c.a.string,cssModule:c.a.object},f=function(t){var a=t.className,e=t.cssModule,r=t.active,s=t.tag,c=Object(i.a)(t,m),o=Object(d.k)(u()(a,"nav-item",!!r&&"active"),e);return l.a.createElement(s,Object(n.a)({},c,{className:o}))};f.propTypes=p,f.defaultProps={tag:"li"},a.a=f},HALo:function(t,a,e){"use strict";function n(){return(n=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}).apply(this,arguments)}e.d(a,"a",(function(){return n}))},I8YG:function(t,a,e){"use strict";e.d(a,"a",(function(){return i}));var n=e("q1tI"),i=e.n(n).a.createContext({})},QB3M:function(t,a,e){"use strict";e.r(a);var n=e("HALo"),i=e("jT3O"),r=e("q1tI"),l=e.n(r),s=e("1Yj4"),c=e("ok1R"),o=e("rhny"),u=e("UU0N"),d=e("6yjW"),m=e("OS56"),p=e.n(m),f=e("UYTu"),b=e("+TN3"),v=e("/5QC"),g=e("rgQu"),N=e("XJI2"),h=l.a.createElement;function y(){var t=Object(i.a)(["\n    query product ($id:Int!) {\n        product (id:$id) {\n            id\n            title\n            description\n            type\n            brand\n            category \n            price\n            new\n            sale\n            discount\n            stock\n            variants\n            {\n                id\n                color\n                image_id\n                variant_id\n                size\n            }\n            images\n            {\n                image_id\n                src\n            }\n        }\n    }\n"]);return y=function(){return t},t}var j=Object(f.a)(y());a.default=function(){var t=Object(r.useContext)(v.a).addToCart,a=Object(r.useContext)(N.b).state.symbol,e=Object(r.useState)({nav1:null,nav2:null}),i=e[0],l=e[1],m=Object(r.useRef)(),f=Object(r.useRef)(),y=Object(b.a)(j,{variables:{id:1}}),O=y.loading,k=y.data;Object(r.useEffect)((function(){l({nav1:m.current,nav2:f.current})}),[k]);var C=i.nav1,x=i.nav2;return h("section",null,h("div",{className:"collection-wrapper"},h(s.a,null,k&&k.product&&0!==k.product.length&&!O?h(c.a,{className:"leftImage"},h(o.a,{lg:"1",sm:"2",xs:"12"},h(c.a,null,h(p.a,Object(n.a)({className:"slider-nav"},{slidesToShow:3,swipeToSlide:!0,arrows:!1,dots:!1,vertical:!0,focusOnSelect:!0,infinite:!1},{asNavFor:C,ref:function(t){return f.current=t}}),k.product.variants?k.product.images.map((function(t,a){return h("div",{key:a},h(u.a,{src:"".concat(t.src),key:a,alt:t.alt,className:"img-fluid"}))})):""))),h(o.a,{lg:"5",sm:"10",xs:"12",className:"order-up"},h(p.a,Object(n.a)({},{slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!0,fade:!0,infinite:!1},{asNavFor:x,ref:function(t){return m.current=t},className:"product-right-slick"}),(k.product.variants,k.product.images.map((function(t,a){return h("div",{key:a},h(g.default,{image:t}))}))))),h(o.a,{lg:"6",className:"rtl-text"},h(d.default,{symbol:a,item:k.product,changeColorVar:function(t){f.current.slickGoTo(t)},navOne:i.nav1,addToCartClicked:t}))):"loading")))}},U8OX:function(t,a,e){"use strict";e.d(a,"c",(function(){return o})),e.d(a,"d",(function(){return u}));var n=e("z7pX"),i=e("q1tI"),r=e.n(i),l=e("FGyW"),s=e("U8OX");e.d(a,"a",(function(){return s.c})),e.d(a,"b",(function(){return s.d}));var c=r.a.createElement,o=Object(i.createContext)({compareItems:Function,addToCompare:Function,removeFromComapre:Function}),u=function(t){var a=Object(i.useState)(function(){try{var t=localStorage.getItem("compare");return null===t?[]:JSON.parse(t)}catch(a){return[]}}()),e=a[0],r=a[1];Object(i.useEffect)((function(){localStorage.setItem("compare",JSON.stringify(e))}),[e]);return c(o.Provider,{value:{compareItems:e,addToCompare:function(t){-1===e.findIndex((function(a){return a.id===t.id}))?(l.b.success("Product Added Successfully !"),r([].concat(Object(n.a)(e),[t]))):l.b.error("This Product Already Added !")},removeFromComapre:function(t){r(e.filter((function(a){return a.id!==t.id}))),l.b.error("Product Removed Successfully !")}}},t.children)}},W1V4:function(t,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product-details/thumbnail_left",function(){return e("uiPB")}])},arvA:function(t,a,e){"use strict";var n=e("wx14"),i=e("zLVn"),r=e("JX7q"),l=e("dI71"),s=e("q1tI"),c=e.n(s),o=e("17x9"),u=e.n(o),d=e("TSYQ"),m=e.n(d),p=e("33Jr"),f=["className","cssModule","active","tag","innerRef"],b={tag:p.o,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),disabled:u.a.bool,active:u.a.bool,className:u.a.string,cssModule:u.a.object,onClick:u.a.func,href:u.a.any},v=function(t){function a(a){var e;return(e=t.call(this,a)||this).onClick=e.onClick.bind(Object(r.a)(e)),e}Object(l.a)(a,t);var e=a.prototype;return e.onClick=function(t){this.props.disabled?t.preventDefault():("#"===this.props.href&&t.preventDefault(),this.props.onClick&&this.props.onClick(t))},e.render=function(){var t=this.props,a=t.className,e=t.cssModule,r=t.active,l=t.tag,s=t.innerRef,o=Object(i.a)(t,f),u=Object(p.k)(m()(a,"nav-link",{disabled:o.disabled,active:r}),e);return c.a.createElement(l,Object(n.a)({},o,{ref:s,onClick:this.onClick,className:u}))},a}(c.a.Component);v.propTypes=b,v.defaultProps={tag:"a"},a.a=v},nF3B:function(t,a,e){"use strict";e.r(a);var n=e("q1tI"),i=e.n(n),r=e("1Yj4"),l=e("ok1R"),s=e("rhny"),c=e("9a8N"),o=e("F66N"),u=e("arvA"),d=e("Czwy"),m=e("EzvR"),p=i.a.createElement;a.default=function(){var t=Object(n.useState)("1"),a=t[0],e=t[1];return p("section",{className:"tab-product m-0"},p(r.a,null,p(l.a,null,p(s.a,{sm:"12",lg:"12"},p(l.a,{className:"product-page-main m-0"},p(c.a,{tabs:!0,className:"nav-material"},p(o.a,{className:"nav nav-tabs",id:"myTab",role:"tablist"},p(u.a,{className:"1"===a?"active":"",onClick:function(){return e("1")}},"Description")),p(o.a,{className:"nav nav-tabs",id:"myTab",role:"tablist"},p(u.a,{className:"2"===a?"active":"",onClick:function(){return e("2")}},"Details")),p(o.a,{className:"nav nav-tabs",id:"myTab",role:"tablist"},p(u.a,{className:"3"===a?"active":"",onClick:function(){return e("3")}},"Vedio")),p(o.a,{className:"nav nav-tabs",id:"myTab",role:"tablist"},p(u.a,{className:"4"===a?"active":"",onClick:function(){return e("4")}},"Write Review"))),p(d.a,{activeTab:a,className:"nav-material"},p(m.a,{tabId:"1"},p("p",{className:"mb-0 pb-0"},'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."')),p(m.a,{tabId:"2"},p("p",{className:"mb-0 pb-0"},'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."')),p(m.a,{tabId:"3"},p("p",{className:"mb-0 pb-0"}," ",'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."')),p(m.a,{tabId:"4"},p("p",{className:"mb-0 pb-0"},'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'))))))))}},ncOK:function(t,a,e){"use strict";var n=e("q1tI"),i=e.n(n),r=e("Mryu"),l=e("1Yj4"),s=e("ok1R"),c=e("rhny"),o=i.a.createElement,u=function(t){var a=t.title,e=t.parent,n=t.subTitle;return o("div",{className:"breadcrumb-section"},o(l.a,null,o(s.a,null,o(c.a,{sm:"6"},o("div",{className:"page-title"},o("h2",null,a))),o(c.a,{sm:"6"},o("nav",{"aria-label":"breadcrumb",className:"theme-breadcrumb"},o("ol",{className:"breadcrumb"},o("li",{className:"breadcrumb-item"},o("a",{href:"#"},e)),o("li",{className:"breadcrumb-item","aria-current":"page"},a),void 0===n?"":o("li",{className:"breadcrumb-item active","aria-current":"page"},n)))))))},d=e("qhky"),m=e("jIMG"),p=e.n(m),f=e("eZDE"),b=i.a.createElement;a.a=function(t){var a=t.children,e=t.title,n=t.parent,l=t.subTitle;return b(i.a.Fragment,null,b(d.a,null,b("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),b("link",{rel:"icon",type:"image/x-icon",href:p.a?p.a:""})),b(r.a,{topClass:"top-header",logoName:"logo.png"}),b(u,{title:e,parent:n,subTitle:l}),b(i.a.Fragment,null,a),b(f.a,{footerClass:"footer-light ",footerLayOut:"light-layout upper-footer",footerSection:"small-section border-section border-top-0",belowSection:"section-b-space light-layout",newLatter:!0}))}},rgQu:function(t,a,e){"use strict";e.r(a);var n=e("q1tI"),i=e.n(n),r=e("UU0N"),l=i.a.createElement;a.default=function(t){var a=t.image;return l(r.a,{src:"".concat(a.src),alt:a.alt,className:"img-fluid image_zoom_cls-0"})}},uiPB:function(t,a,e){"use strict";e.r(a);var n=e("q1tI"),i=e.n(n),r=e("ncOK"),l=e("QB3M"),s=e("gy5E"),c=e("nF3B"),o=e("4enZ"),u=i.a.createElement;a.default=Object(s.a)((function(){return u(r.a,{parent:"home",title:"product"},u(l.default,null),u(c.default,null),u(o.default,null))}))},z7pX:function(t,a,e){"use strict";function n(t,a){(null==a||a>t.length)&&(a=t.length);for(var e=0,n=new Array(a);e<a;e++)n[e]=t[e];return n}function i(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,a){if(t){if("string"===typeof t)return n(t,a);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(t,a):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.d(a,"a",(function(){return i}))}},[["W1V4",1,0,9,2,3,4,5,6,7,8,10,11,12,13,14,15,18]]]);