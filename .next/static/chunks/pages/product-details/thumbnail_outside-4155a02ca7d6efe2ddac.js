_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[276],{"4enZ":function(t,a,e){"use strict";e.r(a);var n=e("jT3O"),i=e("q1tI"),r=e.n(i),c=e("1Yj4"),l=e("ok1R"),o=e("rhny"),s=e("UU0N"),u=e("DCcX"),d=e("CaDr"),m=e("+TN3"),p=e("UYTu"),f=e("XJI2"),b=e("/5QC"),v=e("EO2r"),g=e("U8OX"),N=e("20a2"),h=r.a.createElement;function y(){var t=Object(n.a)(["\n  query products($type: _CategoryType!, $indexFrom: Int!, $limit: Int!) {\n    products(type: $type, indexFrom: $indexFrom, limit: $limit) {\n      items {\n        id\n        title\n        description\n        type\n        brand\n        category\n        price\n        new\n        stock\n        sale\n        discount\n        variants {\n          id\n          sku\n          size\n          color\n          image_id\n        }\n        images {\n          image_id\n          id\n          alt\n          src\n        }\n      }\n    }\n  }\n"]);return y=function(){return t},t}var j=Object(p.a)(y());a.default=function(){var t=Object(N.useRouter)(),a=Object(i.useContext)(f.b),e=Object(i.useContext)(v.c),n=Object(i.useContext)(g.a),p=a.state.symbol,y=a.state,O=Object(i.useContext)(b.a),k=O.addToCart,C=O.quantity,q=O.plusQty,x=O.minusQty,w=O.setQuantity,T=Object(i.useState)(),I=T[0],S=T[1],E=Object(i.useState)(!1),z=E[0],F=E[1],_=function(){return F(!z)},P=[],A=function(a){var e=a.title.split(" ").join("");t.push("/product-details/".concat(a.id)+"-"+"".concat(e))},M=Object(m.a)(j,{variables:{type:"fashion",indexFrom:0,limit:8}}),U=M.loading,Y=M.data;return h("section",{className:"section-b-space ratio_asos"},h(c.a,null,h(l.a,null,h(o.a,{className:"product-related"},h("h2",null,"related products"))),h(l.a,{className:"search-product"},Y&&Y.products&&0!==Y.products.items.length&&!U?h(r.a.Fragment,null,Y&&Y.products.items.slice(0,6).map((function(t,a){return h(o.a,{xl:"2",md:"4",sm:"6",key:a},h("div",{className:"product-box"},h("div",{className:"img-wrapper"},h("div",{className:"front"},h("a",{href:null},h(s.a,{onClick:function(){return A(t)},src:t.images[0].src,className:"img-fluid blur-up lazyload bg-img",alt:""}))),h("div",{className:"back"},h("a",{href:null},h(s.a,{src:t.images[1].src,className:"img-fluid blur-up lazyload bg-img",alt:""}))),h("div",{className:"cart-info cart-wrap"},h("button",{"data-toggle":"modal","data-target":"#addtocart",title:"Add to cart",onClick:function(){return k(t,C)}},h("i",{className:"fa fa-shopping-cart"})),h("a",{href:"#",onClick:function(){return e.addToWish(t)},title:"Add to Wishlist"},h("i",{className:"fa fa-heart","aria-hidden":"true"})),h("a",{href:"#",onClick:function(){return function(t){S(t),_()}(t)},"data-toggle":"modal","data-target":"#quick-view",title:"Quick View"},h("i",{className:"fa fa-search","aria-hidden":"true"})),h("a",{href:"#",onClick:function(){return n.addToCompare(t)},title:"Compare"},h("i",{className:"fa fa-refresh","aria-hidden":"true"})))),h("div",{className:"product-detail"},h("div",{className:"rating"},h("i",{className:"fa fa-star"})," ",h("i",{className:"fa fa-star"})," ",h("i",{className:"fa fa-star"})," ",h("i",{className:"fa fa-star"})," ",h("i",{className:"fa fa-star"})),h("a",{href:null},h("h6",null,t.title)),h("h4",null,p,t.price),h("ul",{className:"color-variant"},h("li",{className:"bg-light0"}),h("li",{className:"bg-light1"}),h("li",{className:"bg-light2"})))))}))):"loading"),I?h(u.a,{isOpen:z,toggle:_,className:"modal-lg quickview-modal",centered:!0},h(d.a,null,h(l.a,null,h(o.a,{lg:"6",xs:"12"},h("div",{className:"quick-view-img"},h(s.a,{src:"".concat(I.images[0].src),alt:"",className:"img-fluid"}))),h(o.a,{lg:"6",className:"rtl-text"},h("div",{className:"product-right"},h("h2",null," ",I.title," "),h("h3",null,y.symbol,(I.price*y.value).toFixed(2)),I.variants?h("ul",{className:"color-variant"},P?h("ul",{className:"color-variant"},"jewellery"===I.type||"nursery"===I.type||"beauty"===I.type||"electronics"===I.type||"goggles"===I.type||"watch"===I.type||"pets"===I.type?"":h(r.a.Fragment,null,P?h("ul",{className:"color-variant"},P.map((function(t,a){return h("li",{className:t.color,key:a,title:t.color,onClick:function(){return variantChangeByColor(t.image_id,I.images)}})}))):"")):""):"",h("div",{className:"border-product"},h("h6",{className:"product-title"},"product details"),h("p",null,I.description)),h("div",{className:"product-description border-product"},I.size?h("div",{className:"size-box"},h("ul",null,I.size.map((function(t,a){return h("li",{key:a},h("a",{href:null},t))})))):"",h("h6",{className:"product-title"},"quantity"),h("div",{className:"qty-box"},h("div",{className:"input-group"},h("span",{className:"input-group-prepend"},h("button",{type:"button",className:"btn quantity-left-minus",onClick:x,"data-type":"minus","data-field":""},h("i",{className:"fa fa-angle-left"}))),h("input",{type:"text",name:"quantity",value:C,onChange:function(t){w(parseInt(t.target.value))},className:"form-control input-number"}),h("span",{className:"input-group-prepend"},h("button",{type:"button",className:"btn quantity-right-plus",onClick:function(){return q(I)},"data-type":"plus","data-field":""},h("i",{className:"fa fa-angle-right"})))))),h("div",{className:"product-buttons"},h("button",{className:"btn btn-solid",onClick:function(){return k(I,C)}},"add to cart"),h("button",{className:"btn btn-solid",onClick:function(){return A(I)}},"View detail"))))))):""))}},"9a8N":function(t,a,e){"use strict";var n=e("wx14"),i=e("zLVn"),r=e("q1tI"),c=e.n(r),l=e("17x9"),o=e.n(l),s=e("TSYQ"),u=e.n(s),d=e("33Jr"),m=["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"],p={tabs:o.a.bool,pills:o.a.bool,vertical:o.a.oneOfType([o.a.bool,o.a.string]),horizontal:o.a.string,justified:o.a.bool,fill:o.a.bool,navbar:o.a.bool,card:o.a.bool,tag:d.o,className:o.a.string,cssModule:o.a.object},f=function(t){var a=t.className,e=t.cssModule,r=t.tabs,l=t.pills,o=t.vertical,s=t.horizontal,p=t.justified,f=t.fill,b=t.navbar,v=t.card,g=t.tag,N=Object(i.a)(t,m),h=Object(d.k)(u()(a,b?"navbar-nav":"nav",!!s&&"justify-content-"+s,function(t){return!1!==t&&(!0===t||"xs"===t?"flex-column":"flex-"+t+"-column")}(o),{"nav-tabs":r,"card-header-tabs":v&&r,"nav-pills":l,"card-header-pills":v&&l,"nav-justified":p,"nav-fill":f}),e);return c.a.createElement(g,Object(n.a)({},N,{className:h}))};f.propTypes=p,f.defaultProps={tag:"ul",vertical:!1},a.a=f},Czwy:function(t,a,e){"use strict";var n=e("wx14"),i=e("dI71"),r=e("q1tI"),c=e.n(r),l=e("17x9"),o=e.n(l),s=e("TSYQ"),u=e.n(s),d=e("I8YG"),m=e("33Jr"),p={tag:m.o,activeTab:o.a.any,className:o.a.string,cssModule:o.a.object},f=function(t){function a(a){var e;return(e=t.call(this,a)||this).state={activeTab:e.props.activeTab},e}return Object(i.a)(a,t),a.getDerivedStateFromProps=function(t,a){return a.activeTab!==t.activeTab?{activeTab:t.activeTab}:null},a.prototype.render=function(){var t=this.props,a=t.className,e=t.cssModule,i=t.tag,r=Object(m.l)(this.props,Object.keys(p)),l=Object(m.k)(u()("tab-content",a),e);return c.a.createElement(d.a.Provider,{value:{activeTabId:this.state.activeTab}},c.a.createElement(i,Object(n.a)({},r,{className:l})))},a}(r.Component);a.a=f,f.propTypes=p,f.defaultProps={tag:"div"}},EO2r:function(t,a,e){"use strict";e.d(a,"a",(function(){return s})),e.d(a,"b",(function(){return u}));var n=e("z7pX"),i=e("q1tI"),r=e.n(i),c=e("FGyW"),l=e("EO2r");e.d(a,"c",(function(){return l.a})),e.d(a,"d",(function(){return l.b}));var o=r.a.createElement,s=Object(i.createContext)({wishlistItems:Function,addToWish:Function,removeFromWish:Function}),u=function(t){var a=Object(i.useState)(function(){try{var t=localStorage.getItem("wishlist");return null===t?[]:JSON.parse(t)}catch(a){return[]}}()),e=a[0],r=a[1];Object(i.useEffect)((function(){localStorage.setItem("wishlist",JSON.stringify(e))}),[e]);return o(s.Provider,{value:{wishlistItems:e,addToWish:function(t){-1===e.findIndex((function(a){return a.id===t.id}))?(c.b.success("Product Added Successfully !"),r([].concat(Object(n.a)(e),[t]))):c.b.error("This Product Already Added !")},removeFromWish:function(t){r(e.filter((function(a){return a.id!==t.id}))),c.b.error("Product Removed Successfully !")}}},t.children)}},EzvR:function(t,a,e){"use strict";e.d(a,"a",(function(){return b}));var n=e("wx14"),i=e("zLVn"),r=e("q1tI"),c=e.n(r),l=e("17x9"),o=e.n(l),s=e("TSYQ"),u=e.n(s),d=e("I8YG"),m=e("33Jr"),p=["className","cssModule","tabId","tag"],f={tag:m.o,className:o.a.string,cssModule:o.a.object,tabId:o.a.any};function b(t){var a=t.className,e=t.cssModule,r=t.tabId,l=t.tag,o=Object(i.a)(t,p),s=function(t){return Object(m.k)(u()("tab-pane",a,{active:r===t}),e)};return c.a.createElement(d.a.Consumer,null,(function(t){var a=t.activeTabId;return c.a.createElement(l,Object(n.a)({},o,{className:s(a)}))}))}b.propTypes=f,b.defaultProps={tag:"div"}},F66N:function(t,a,e){"use strict";var n=e("wx14"),i=e("zLVn"),r=e("q1tI"),c=e.n(r),l=e("17x9"),o=e.n(l),s=e("TSYQ"),u=e.n(s),d=e("33Jr"),m=["className","cssModule","active","tag"],p={tag:d.o,active:o.a.bool,className:o.a.string,cssModule:o.a.object},f=function(t){var a=t.className,e=t.cssModule,r=t.active,l=t.tag,o=Object(i.a)(t,m),s=Object(d.k)(u()(a,"nav-item",!!r&&"active"),e);return c.a.createElement(l,Object(n.a)({},o,{className:s}))};f.propTypes=p,f.defaultProps={tag:"li"},a.a=f},HALo:function(t,a,e){"use strict";function n(){return(n=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}).apply(this,arguments)}e.d(a,"a",(function(){return n}))},I8YG:function(t,a,e){"use strict";e.d(a,"a",(function(){return i}));var n=e("q1tI"),i=e.n(n).a.createContext({})},U8OX:function(t,a,e){"use strict";e.d(a,"c",(function(){return s})),e.d(a,"d",(function(){return u}));var n=e("z7pX"),i=e("q1tI"),r=e.n(i),c=e("FGyW"),l=e("U8OX");e.d(a,"a",(function(){return l.c})),e.d(a,"b",(function(){return l.d}));var o=r.a.createElement,s=Object(i.createContext)({compareItems:Function,addToCompare:Function,removeFromComapre:Function}),u=function(t){var a=Object(i.useState)(function(){try{var t=localStorage.getItem("compare");return null===t?[]:JSON.parse(t)}catch(a){return[]}}()),e=a[0],r=a[1];Object(i.useEffect)((function(){localStorage.setItem("compare",JSON.stringify(e))}),[e]);return o(s.Provider,{value:{compareItems:e,addToCompare:function(t){-1===e.findIndex((function(a){return a.id===t.id}))?(c.b.success("Product Added Successfully !"),r([].concat(Object(n.a)(e),[t]))):c.b.error("This Product Already Added !")},removeFromComapre:function(t){r(e.filter((function(a){return a.id!==t.id}))),c.b.error("Product Removed Successfully !")}}},t.children)}},YeuN:function(t,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product-details/thumbnail_outside",function(){return e("mvXP")}])},arvA:function(t,a,e){"use strict";var n=e("wx14"),i=e("zLVn"),r=e("JX7q"),c=e("dI71"),l=e("q1tI"),o=e.n(l),s=e("17x9"),u=e.n(s),d=e("TSYQ"),m=e.n(d),p=e("33Jr"),f=["className","cssModule","active","tag","innerRef"],b={tag:p.o,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),disabled:u.a.bool,active:u.a.bool,className:u.a.string,cssModule:u.a.object,onClick:u.a.func,href:u.a.any},v=function(t){function a(a){var e;return(e=t.call(this,a)||this).onClick=e.onClick.bind(Object(r.a)(e)),e}Object(c.a)(a,t);var e=a.prototype;return e.onClick=function(t){this.props.disabled?t.preventDefault():("#"===this.props.href&&t.preventDefault(),this.props.onClick&&this.props.onClick(t))},e.render=function(){var t=this.props,a=t.className,e=t.cssModule,r=t.active,c=t.tag,l=t.innerRef,s=Object(i.a)(t,f),u=Object(p.k)(m()(a,"nav-link",{disabled:s.disabled,active:r}),e);return o.a.createElement(c,Object(n.a)({},s,{ref:l,onClick:this.onClick,className:u}))},a}(o.a.Component);v.propTypes=b,v.defaultProps={tag:"a"},a.a=v},jj5k:function(t,a,e){"use strict";e.r(a);var n=e("HALo"),i=e("jT3O"),r=e("q1tI"),c=e.n(r),l=e("1Yj4"),o=e("ok1R"),s=e("rhny"),u=e("DCcX"),d=e("vkoW"),m=e("CaDr"),p=e("UU0N"),f=e("L3zb"),b=e("YFqc"),v=e.n(b),g=e("OS56"),N=e.n(g),h=e("xTE4"),y=e.n(h),j=e("UYTu"),O=e("+TN3"),k=e("XJI2"),C=e("JtKs"),q=e("rgQu"),x=e("/5QC"),w=c.a.createElement;function T(){var t=Object(i.a)(["\n    query product ($id:Int!) {\n        product (id:$id) {\n            id\n            title\n            description\n            type\n            brand\n            category \n            price\n            new\n            sale\n            discount\n            stock\n            variants\n            {\n                id\n                color\n                image_id\n                variant_id\n                size\n            }\n            images\n            {\n                image_id\n                src\n            }\n        }\n    }\n"]);return T=function(){return t},t}var I=Object(j.a)(T());a.default=function(){var t=Object(r.useContext)(x.a),a=t.addToCart,e=Object(r.useContext)(k.b).state.symbol,i=Object(r.useState)({nav1:null,nav2:null}),c=i[0],b=i[1],g=Object(r.useRef)(),h=Object(r.useRef)(),j=Object(r.useState)(!1),T=j[0],S=j[1],E=function(){return S(!T)},z=Object(r.useState)(!1),F=z[0],_=z[1],P=t.stock,A=t.plusQty,M=t.minusQty,U=t.quantity,Y=[],D=[],Q=Object(O.a)(I,{variables:{id:1}}),R=Q.loading,J=Q.data;Object(r.useEffect)((function(){b({nav1:g.current,nav2:h.current})}),[J]);var X=c.nav1,L=c.nav2;return w("section",null,w("div",{className:"collection-wrapper"},w(l.a,null,J&&J.product&&0!==J.product.length&&!R?w(o.a,null,w(s.a,{lg:"6"},w(N.a,Object(n.a)({},{slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!0,fade:!0},{asNavFor:L,ref:function(t){return g.current=t},className:"product-right-slick"}),(J.product.variants,J.product.images.map((function(t,a){return w("div",{key:a},w(q.default,{image:t}))}))))),w(s.a,{lg:"6",className:"rtl-text"},w(o.a,null,w(s.a,null,w("div",{className:"product-right"},w("h2",null," ",J.product.name," "),w("h4",null,w("del",null,e,J.product.price),w("span",null,J.product.discount,"% off")),w("h3",null,e,J.product.price-J.product.price*J.product.discount/100," "),J.product.variants.map((function(t){Y.find((function(a){return a.color===t.color}))||Y.push(t),D.find((function(a){return a===t.size}))||D.push(t.size)})),Y?w("ul",{className:"color-variant"},Y.map((function(t,a){return w("li",{className:t.color,key:a,title:t.color,onClick:function(){return t=a,void h.current.slickGoTo(t);var t}})}))):"",w("div",{className:"product-description border-product"},J.product.variants?w("div",null,w("h6",{className:"product-title size-text"},"select size",w("span",null,w("a",{href:null,"data-toggle":"modal","data-target":"#sizemodal",onClick:E},"size chart"))),w(u.a,{isOpen:T,toggle:E,centered:!0},w(d.a,{toggle:E},"Sheer Straight Kurta"),w(m.a,null,w(p.a,{src:y.a,alt:"size",className:"img-fluid"}))),w("div",{className:"size-box"},w("ul",null,D.map((function(t,a){return w("li",{key:a},w("a",{href:null},t))}))))):"",w("span",{className:"instock-cls"},P),w("h6",{className:"product-title"},"quantity"),w("div",{className:"qty-box"},w("div",{className:"input-group"},w("span",{className:"input-group-prepend"},w("button",{type:"button",className:"btn quantity-left-minus",onClick:M,"data-type":"minus","data-field":""},w("i",{className:"fa fa-angle-left"}))),w(f.a,{type:"text",name:"quantity",value:U,onChange:function(t){setQuantity(parseInt(t.target.value))},className:"form-control input-number"}),w("span",{className:"input-group-prepend"},w("button",{type:"button",className:"btn quantity-right-plus",onClick:function(){return A(J.product)},"data-type":"plus","data-field":""},w("i",{className:"fa fa-angle-right"})))))),w("div",{className:"product-buttons"},w("a",{href:null,className:"btn btn-solid",onClick:function(){return a(J.product,U)}},"add to cart"),w(v.a,{href:"/page/account/checkout"},w("a",{className:"btn btn-solid",onClick:function(){return BuynowClicked(item,U)}},"buy now"))),w("div",{className:"border-product"},w("h6",{className:"product-title"},"product details"),w("p",null,J.product.shortDetails)),w("div",{className:"border-product"},w("h6",{className:"product-title"},"share it"),w("div",{className:"product-icon"},w("ul",{className:"product-social"},w("li",null,w("a",{href:"https://www.facebook.com",target:"_blank"},w("i",{className:"fa fa-facebook"}))),w("li",null,w("a",{href:"https://plus.google.com",target:"_blank"},w("i",{className:"fa fa-google-plus"}))),w("li",null,w("a",{href:"https://twitter.com",target:"_blank"},w("i",{className:"fa fa-twitter"}))),w("li",null,w("a",{href:"https://www.instagram.com",target:"_blank"},w("i",{className:"fa fa-instagram"})))))),w("div",{className:"border-product"},w("h6",{className:"product-title"},"Time Reminder"),w(C.a,null))),w(u.a,{open:F,onClose:function(){_(!1)},center:!0},w("div",{className:"modal-dialog modal-dialog-centered",role:"document"},w("div",{className:"modal-content"},w(d.a,{className:"modal-header"},w("h5",{className:"modal-title",id:"exampleModalLabel"},"Sheer Straight Kurta")),w(m.a,{className:"modal-body"},w(p.a,{src:y.a,alt:"",className:"img-fluid"}))))),w(o.a,{className:"imgae-outside-thumbnail mt-4"},w(N.a,Object(n.a)({className:"slider-nav"},{slidesToShow:3,swipeToSlide:!0,arrows:!1,dots:!1,focusOnSelect:!0},{asNavFor:X,ref:function(t){return h.current=t}}),J.product.variants?J.product.images.map((function(t,a){return w("div",{key:a},w(p.a,{src:"".concat(t.src),key:a,alt:t.alt,className:"img-fluid"}))})):"")))))):"loading")))}},mvXP:function(t,a,e){"use strict";e.r(a);var n=e("q1tI"),i=e.n(n),r=e("ncOK"),c=e("gy5E"),l=e("nF3B"),o=e("4enZ"),s=e("jj5k"),u=i.a.createElement;a.default=Object(c.a)((function(){return u(r.a,{parent:"home",title:"product"},u(s.default,null),u(l.default,null),u(o.default,null))}))},nF3B:function(t,a,e){"use strict";e.r(a);var n=e("q1tI"),i=e.n(n),r=e("1Yj4"),c=e("ok1R"),l=e("rhny"),o=e("9a8N"),s=e("F66N"),u=e("arvA"),d=e("Czwy"),m=e("EzvR"),p=i.a.createElement;a.default=function(){var t=Object(n.useState)("1"),a=t[0],e=t[1];return p("section",{className:"tab-product m-0"},p(r.a,null,p(c.a,null,p(l.a,{sm:"12",lg:"12"},p(c.a,{className:"product-page-main m-0"},p(o.a,{tabs:!0,className:"nav-material"},p(s.a,{className:"nav nav-tabs",id:"myTab",role:"tablist"},p(u.a,{className:"1"===a?"active":"",onClick:function(){return e("1")}},"Description")),p(s.a,{className:"nav nav-tabs",id:"myTab",role:"tablist"},p(u.a,{className:"2"===a?"active":"",onClick:function(){return e("2")}},"Details")),p(s.a,{className:"nav nav-tabs",id:"myTab",role:"tablist"},p(u.a,{className:"3"===a?"active":"",onClick:function(){return e("3")}},"Vedio")),p(s.a,{className:"nav nav-tabs",id:"myTab",role:"tablist"},p(u.a,{className:"4"===a?"active":"",onClick:function(){return e("4")}},"Write Review"))),p(d.a,{activeTab:a,className:"nav-material"},p(m.a,{tabId:"1"},p("p",{className:"mb-0 pb-0"},'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."')),p(m.a,{tabId:"2"},p("p",{className:"mb-0 pb-0"},'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."')),p(m.a,{tabId:"3"},p("p",{className:"mb-0 pb-0"}," ",'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."')),p(m.a,{tabId:"4"},p("p",{className:"mb-0 pb-0"},'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'))))))))}},ncOK:function(t,a,e){"use strict";var n=e("q1tI"),i=e.n(n),r=e("Mryu"),c=e("1Yj4"),l=e("ok1R"),o=e("rhny"),s=i.a.createElement,u=function(t){var a=t.title,e=t.parent,n=t.subTitle;return s("div",{className:"breadcrumb-section"},s(c.a,null,s(l.a,null,s(o.a,{sm:"6"},s("div",{className:"page-title"},s("h2",null,a))),s(o.a,{sm:"6"},s("nav",{"aria-label":"breadcrumb",className:"theme-breadcrumb"},s("ol",{className:"breadcrumb"},s("li",{className:"breadcrumb-item"},s("a",{href:"#"},e)),s("li",{className:"breadcrumb-item","aria-current":"page"},a),void 0===n?"":s("li",{className:"breadcrumb-item active","aria-current":"page"},n)))))))},d=e("qhky"),m=e("jIMG"),p=e.n(m),f=e("eZDE"),b=i.a.createElement;a.a=function(t){var a=t.children,e=t.title,n=t.parent,c=t.subTitle;return b(i.a.Fragment,null,b(d.a,null,b("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),b("link",{rel:"icon",type:"image/x-icon",href:p.a?p.a:""})),b(r.a,{topClass:"top-header",logoName:"logo.png"}),b(u,{title:e,parent:n,subTitle:c}),b(i.a.Fragment,null,a),b(f.a,{footerClass:"footer-light ",footerLayOut:"light-layout upper-footer",footerSection:"small-section border-section border-top-0",belowSection:"section-b-space light-layout",newLatter:!0}))}},rgQu:function(t,a,e){"use strict";e.r(a);var n=e("q1tI"),i=e.n(n),r=e("UU0N"),c=i.a.createElement;a.default=function(t){var a=t.image;return c(r.a,{src:"".concat(a.src),alt:a.alt,className:"img-fluid image_zoom_cls-0"})}},z7pX:function(t,a,e){"use strict";function n(t,a){(null==a||a>t.length)&&(a=t.length);for(var e=0,n=new Array(a);e<a;e++)n[e]=t[e];return n}function i(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,a){if(t){if("string"===typeof t)return n(t,a);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(t,a):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.d(a,"a",(function(){return i}))}},[["YeuN",1,0,9,2,3,4,5,6,7,8,10,11,12,13,14,15,18]]]);