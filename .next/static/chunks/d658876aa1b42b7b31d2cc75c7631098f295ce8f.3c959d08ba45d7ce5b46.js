(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[54],{CaDr:function(t,e,a){"use strict";var r=a("wx14"),n=a("zLVn"),i=a("q1tI"),c=a.n(i),s=a("17x9"),o=a.n(s),l=a("TSYQ"),u=a.n(l),d=a("33Jr"),m=["className","cssModule","tag"],f={tag:d.o,className:o.a.string,cssModule:o.a.object},p=function(t){var e=t.className,a=t.cssModule,i=t.tag,s=Object(n.a)(t,m),o=Object(d.k)(u()(e,"modal-body"),a);return c.a.createElement(i,Object(r.a)({},s,{className:o}))};p.propTypes=f,p.defaultProps={tag:"div"},e.a=p},EO2r:function(t,e,a){"use strict";a.d(e,"a",(function(){return l})),a.d(e,"b",(function(){return u}));var r=a("z7pX"),n=a("q1tI"),i=a.n(n),c=a("FGyW"),s=a("EO2r");a.d(e,"c",(function(){return s.a})),a.d(e,"d",(function(){return s.b}));var o=i.a.createElement,l=Object(n.createContext)({wishlistItems:Function,addToWish:Function,removeFromWish:Function}),u=function(t){var e=Object(n.useState)(function(){try{var t=localStorage.getItem("wishlist");return null===t?[]:JSON.parse(t)}catch(e){return[]}}()),a=e[0],i=e[1];Object(n.useEffect)((function(){localStorage.setItem("wishlist",JSON.stringify(a))}),[a]);return o(l.Provider,{value:{wishlistItems:a,addToWish:function(t){-1===a.findIndex((function(e){return e.id===t.id}))?(c.b.success("Product Added Successfully !"),i([].concat(Object(r.a)(a),[t]))):c.b.error("This Product Already Added !")},removeFromWish:function(t){i(a.filter((function(e){return e.id!==t.id}))),c.b.error("Product Removed Successfully !")}}},t.children)}},U8OX:function(t,e,a){"use strict";a.d(e,"c",(function(){return l})),a.d(e,"d",(function(){return u}));var r=a("z7pX"),n=a("q1tI"),i=a.n(n),c=a("FGyW"),s=a("U8OX");a.d(e,"a",(function(){return s.c})),a.d(e,"b",(function(){return s.d}));var o=i.a.createElement,l=Object(n.createContext)({compareItems:Function,addToCompare:Function,removeFromComapre:Function}),u=function(t){var e=Object(n.useState)(function(){try{var t=localStorage.getItem("compare");return null===t?[]:JSON.parse(t)}catch(e){return[]}}()),a=e[0],i=e[1];Object(n.useEffect)((function(){localStorage.setItem("compare",JSON.stringify(a))}),[a]);return o(l.Provider,{value:{compareItems:a,addToCompare:function(t){-1===a.findIndex((function(e){return e.id===t.id}))?(c.b.success("Product Added Successfully !"),i([].concat(Object(r.a)(a),[t]))):c.b.error("This Product Already Added !")},removeFromComapre:function(t){i(a.filter((function(e){return e.id!==t.id}))),c.b.error("Product Removed Successfully !")}}},t.children)}},Xrca:function(t,e,a){"use strict";a.r(e);var r=a("jT3O"),n=a("q1tI"),i=a.n(n),c=a("1Yj4"),s=a("ok1R"),o=a("rhny"),l=a("UU0N"),u=a("DCcX"),d=a("CaDr"),m=a("UYTu"),f=a("/5QC"),p=a("EO2r"),h=a("U8OX"),N=a("XJI2"),b=a("+TN3"),g=a("20a2"),v=i.a.createElement;function y(){var t=Object(r.a)(["\n    query  products($type:_CategoryType!,$indexFrom:Int! ,$limit:Int!) {\n        products (type: $type,indexFrom:$indexFrom ,limit:$limit){\n            items {\n                id\n                title\n                description\n                type\n                brand\n                category \n                price\n                new\n                stock\n                sale\n                discount\n                variants{\n                    id\n                    sku\n                    size\n                    color\n                    image_id\n                }\n                images{\n                    image_id\n                    id\n                    alt\n                    src\n                }\n            }\n        }\n    }\n"]);return y=function(){return t},t}var C=Object(m.a)(y());e.default=function(t){var e=t.type,a=t.cartClass,r=Object(g.useRouter)(),m=Object(n.useContext)(f.a),y=Object(n.useContext)(p.c),k=Object(n.useContext)(h.a),O=Object(n.useState)(),w=O[0],j=O[1],T=Object(n.useState)(!1),S=T[0],x=T[1],A=Object(n.useState)("InStock"),I=(A[0],A[1]),F=Object(n.useState)(1),q=F[0],W=F[1],z=Object(n.useState)(""),$=z[0],E=z[1],P=[],X=function(){return x(!S)},_=Object(n.useContext)(N.b).state,J=m.quantity,Q=function(t){j(t),X()},U=Object(b.a)(C,{variables:{type:e,indexFrom:0,limit:20}}).data,V=function(t){var e=t.title.split(" ").join("");r.push("/product-details/".concat(t.id)+"-"+"".concat(e))};return v(n.Fragment,null,U?v("section",{className:"section-b-space layout7-product"},v(c.a,null,v(s.a,null,v(o.a,{md:"6",sm:"12",className:"p-0"},v(s.a,{className:"m-0"},U&&U.products.items.slice(0,2).map((function(t,e){return v(o.a,{sm:"6",className:"col-12 p-0",key:e},v("div",{className:"product-box"},v("div",{className:"img-wrapper"},v("div",{className:"front"},v("a",{href:"#"},v(l.a,{src:t.images[0].src,className:"img-fluid blur-up lazyload",alt:"",onClick:function(){return V(t)}}))),v("div",{className:a},v("button",{onClick:function(){return m.addToCart(t,J)},title:"Add to cart"},v("i",{className:"fa fa-shopping-cart"})),v("a",{href:null,title:"Add to Wishlist",onClick:function(){return y.addToWish(t)}},v("i",{className:"fa fa-heart","aria-hidden":"true"})),v("a",{href:null,"data-toggle":"modal","data-target":"#quick-view",title:"Quick View",onClick:function(){return Q(t)}},v("i",{className:"fa fa-search","aria-hidden":"true"})),v("a",{href:null,title:"Compare",onClick:function(){return k.addToCompare(t)}},v("i",{className:"fa fa-refresh","aria-hidden":"true"})))),v("div",{className:"details-product"},v("a",{href:"#",onClick:function(){return V(t)}},v("h6",null,t.title)),v("h4",null,"$",t.price," ",v("del",null,"$600.00")))))}))),v(s.a,{className:"m-0"},v(o.a,{className:"col-12 p-0"},v("div",{className:"product-box"},v("div",{className:"img-wrapper"},v("div",{className:"front"},v("a",{href:"#"},v(l.a,{src:U.products.items[2].images[0].src,className:"img-fluid blur-up lazyload",alt:"",onClick:function(){return V(U.products.items[2])}}))),v("div",{className:a},v("button",{onClick:function(){return m.addToCart(U.products.items[2],J)},title:"Add to cart"},v("i",{className:"fa fa-shopping-cart"})),v("a",{href:null,title:"Add to Wishlist",onClick:function(){return y.addToWish(U.products.items[2])}},v("i",{className:"fa fa-heart","aria-hidden":"true"})),v("a",{href:null,"data-toggle":"modal","data-target":"#quick-view",title:"Quick View",onClick:function(){return Q(U.products.items[2])}},v("i",{className:"fa fa-search","aria-hidden":"true"})),v("a",{href:null,title:"Compare",onClick:function(){return k.addToCompare(U.products.items[2])}},v("i",{className:"fa fa-refresh","aria-hidden":"true"})))),v("div",{className:"details-product"},v("a",{href:"#",onClick:function(){return V(U.products.items[2])}},v("h6",null,U.products.items[2].title)),v("h4",null,"$",U.products.items[2].price)))))),v(o.a,{md:"6",className:"col-12 p-0"},v("div",{className:"product-box"},v("div",{className:"img-wrapper"},v("div",{className:"front"},v("a",{href:null},v(l.a,{src:U.products.items[3].images[0].src,className:"img-fluid blur-up lazyload",alt:"",onClick:function(){return V(U.products.items[3])}}))),v("div",{className:a},v("button",{onClick:function(){return m.addToCart(U.products.items[3],J)},title:"Add to cart"},v("i",{className:"fa fa-shopping-cart"})),v("a",{href:null,title:"Add to Wishlist",onClick:function(){return y.addToWish(U.products.items[3])}},v("i",{className:"fa fa-heart","aria-hidden":"true"})),v("a",{href:null,"data-toggle":"modal","data-target":"#quick-view",title:"Quick View",onClick:function(){return Q(U.products.items[3])}},v("i",{className:"fa fa-search","aria-hidden":"true"})),v("a",{href:null,title:"Compare",onClick:function(){return k.addToCompare(U.products.items[3])}},v("i",{className:"fa fa-refresh","aria-hidden":"true"})))),v("div",{className:"details-product"},v("a",{href:"#",onClick:function(){return V(U.products.items[3])}},v("h6",null,U.products.items[3].title)),v("h4",null,"$",U.products.items[3].price))))),v(s.a,null,v(o.a,{md:"6",className:"col-12 p-0"},v("div",{className:"product-box"},v("div",{className:"img-wrapper"},v("div",{className:"front"},v("a",{href:null},v(l.a,{src:U.products.items[4].images[0].src,className:"img-fluid blur-up lazyload",alt:"",onClick:function(){return V(U.products.items[4])}}))),v("div",{className:a},v("button",{onClick:function(){return m.addToCart(U.products.items[4],J)},title:"Add to cart"},v("i",{className:"fa fa-shopping-cart"})),v("a",{href:null,title:"Add to Wishlist",onClick:function(){return y.addToWish(U.products.items[4])}},v("i",{className:"fa fa-heart","aria-hidden":"true"})),v("a",{href:null,"data-toggle":"modal","data-target":"#quick-view",title:"Quick View",onClick:function(){return Q(U.products.items[4])}},v("i",{className:"fa fa-search","aria-hidden":"true"})),v("a",{href:null,title:"Compare",onClick:function(){return k.addToCompare(U.products.items[4])}},v("i",{className:"fa fa-refresh","aria-hidden":"true"})))),v("div",{className:"details-product"},v("a",{href:"#",onClick:function(){return V(U.products.items[4])}},v("h6",null,U.products.items[4].title)),v("h4",null,"$",U.products.items[4].price)))),v(o.a,{md:"6",className:"col-12 p-0"},v(s.a,{className:"m-0"},U&&U.products.items.slice(5,9).map((function(t,e){return v(o.a,{sm:"6",className:"col-12 p-0",key:e},v("div",{className:"product-box"},v("div",{className:"img-wrapper"},v("div",{className:"front"},v("a",{href:"#"},v(l.a,{src:t.images[0].src,className:"img-fluid blur-up lazyload",alt:"",onClick:function(){return V(t)}}))),v("div",{className:a},v("button",{onClick:function(){return m.addToCart(t,J)},title:"Add to cart"},v("i",{className:"fa fa-shopping-cart"})),v("a",{href:null,title:"Add to Wishlist",onClick:function(){return y.addToWish(t)}},v("i",{className:"fa fa-heart","aria-hidden":"true"})),v("a",{href:null,"data-toggle":"modal","data-target":"#quick-view",title:"Quick View",onClick:function(){return Q(t)}},v("i",{className:"fa fa-search","aria-hidden":"true"})),v("a",{href:null,title:"Compare",onClick:function(){return k.addToCompare(t)}},v("i",{className:"fa fa-refresh","aria-hidden":"true"})))),v("div",{className:"details-product"},v("a",{href:"#",onClick:function(){return V(t)}},v("h6",null,t.title)),v("h4",null,"$",t.price))))}))))),v(u.a,{isOpen:S,toggle:X,className:"modal-lg quickview-modal",centered:!0},v(d.a,null,w?v(s.a,null,v(o.a,{lg:"6",xs:"12"},v("div",{className:"quick-view-img"},v(l.a,{src:"".concat(w.variants&&$||w.images[0].src),alt:"",className:"img-fluid"}))),v(o.a,{lg:"6",className:"rtl-text"},v("div",{className:"product-right"},v("h2",null," ",w.title," "),v("h3",null,_.symbol,(w.price*_.value).toFixed(2)),w.variants?v("ul",{className:"color-variant"},P?v("ul",{className:"color-variant"},"jewellery"===w.type||"nursery"===w.type||"beauty"===w.type||"electronics"===w.type||"goggles"===w.type||"watch"===w.type||"pets"===w.type?"":v(i.a.Fragment,null,P?v("ul",{className:"color-variant"},P.map((function(t,e){return v("li",{className:t.color,key:e,title:t.color,onClick:function(){return e=t.image_id,void w.images.map((function(t){t.image_id==e&&E(t.src)}));var e}})}))):"")):""):"",v("div",{className:"border-product"},v("h6",{className:"product-title"},"product details"),v("p",null,w.description)),v("div",{className:"product-description border-product"},w.size?v("div",{className:"size-box"},v("ul",null,w.size.map((function(t,e){return v("li",{key:e},v("a",{href:null},t))})))):"",v("h6",{className:"product-title"},"quantity"),v("div",{className:"qty-box"},v("div",{className:"input-group"},v("span",{className:"input-group-prepend"},v("button",{type:"button",className:"btn quantity-left-minus",onClick:function(){q>1&&(I("InStock"),W(q-1))},"data-type":"minus","data-field":""},v("i",{className:"fa fa-angle-left"}))),v("input",{type:"text",name:"quantity",value:q,onChange:function(t){W(parseInt(t.target.value))},className:"form-control input-number"}),v("span",{className:"input-group-prepend"},v("button",{type:"button",className:"btn quantity-right-plus",onClick:function(){w.stock>=q?W(q+1):I("Out of Stock !")},"data-type":"plus","data-field":""},v("i",{className:"fa fa-angle-right"})))))),v("div",{className:"product-buttons"},v("button",{className:"btn btn-solid",onClick:function(){return m.addToCart(w,J)}},"add to cart"),v("button",{className:"btn btn-solid",onClick:function(){return V(w)}},"View detail"))))):"")))):"")}},z7pX:function(t,e,a){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}function n(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(e,"a",(function(){return n}))}}]);