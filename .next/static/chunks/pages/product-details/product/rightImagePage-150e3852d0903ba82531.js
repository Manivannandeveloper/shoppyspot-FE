_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[269],{"/5QC":function(e,t,a){"use strict";var n=a("q1tI"),r=Object(n.createContext)();t.a=r},"1Yj4":function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),s=a("q1tI"),o=a.n(s),i=a("17x9"),c=a.n(i),l=a("TSYQ"),u=a.n(l),d=a("33Jr"),f=["className","cssModule","fluid","tag"],p={tag:d.o,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,a=e.cssModule,s=e.fluid,i=e.tag,c=Object(r.a)(e,f),l="container";!0===s?l="container-fluid":s&&(l="container-"+s);var p=Object(d.k)(u()(t,l),a);return o.a.createElement(i,Object(n.a)({},c,{className:p}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},"6yjW":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),s=a("YFqc"),o=a.n(s),i=a("xTE4"),c=a.n(i),l=a("DCcX"),u=a("vkoW"),d=a("CaDr"),f=a("UU0N"),p=a("L3zb"),m=a("XJI2"),b=a("/5QC"),g=a("JtKs"),v=a("D16B"),h=r.a.createElement;t.default=function(e){var t=e.item,a=e.stickyClass,s=e.changeColorVar,i=Object(n.useState)(!1),N=i[0],y=i[1],j=Object(n.useContext)(m.b).state.symbol,O=function(){return y(!N)},w=t,x=Object(n.useContext)(b.a),k=x.stock,z=x.plusQty,T=x.minusQty,C=x.quantity,q=[],_=[];return h(r.a.Fragment,null,h("div",{className:"product-right ".concat(a)},"Detail Price",h("h2",null," ",w.title," "),h("h4",null,h("del",null,j,w.price),h("span",null,w.discount,"% off")),h("h3",null,j,w.price-w.price*w.discount/100),w.variants.map((function(e){q.find((function(t){return t.color===e.color}))||q.push(e),_.find((function(t){return t===e.size}))||_.push(e.size)})),h(r.a.Fragment,null,void 0===s?q?h("ul",{className:"color-variant"},q.map((function(e,t){return h("li",{className:e.color,key:t,title:e.color})}))):"":q?h("ul",{className:"color-variant"},q.map((function(e,t){return h("li",{className:e.color,key:t,title:e.color,onClick:function(){return s(t)}})}))):""),h("div",{className:"product-description border-product"},w.variants?h("div",null,h("h6",{className:"product-title size-text"},"select size",h("span",null,h("a",{href:null,"data-toggle":"modal","data-target":"#sizemodal",onClick:O},"size chart"))),h(l.a,{isOpen:N,toggle:O,centered:!0},h(u.a,{toggle:O},"Sheer Straight Kurta"),h(d.a,null,h(f.a,{src:c.a,alt:"size",className:"img-fluid"}))),h("div",{className:"size-box"},h("ul",null,_.map((function(e,t){return h("li",{key:t},h("a",{href:null},e))}))))):"",h("span",{className:"instock-cls"},k),h("h6",{className:"product-title"},"quantity"),h("div",{className:"qty-box"},h("div",{className:"input-group"},h("span",{className:"input-group-prepend"},h("button",{type:"button",className:"btn quantity-left-minus",onClick:T,"data-type":"minus","data-field":""},h("i",{className:"fa fa-angle-left"}))),h(p.a,{type:"text",name:"quantity",value:C,onChange:function(e){setQuantity(parseInt(e.target.value))},className:"form-control input-number"}),h("span",{className:"input-group-prepend"},h("button",{type:"button",className:"btn quantity-right-plus",onClick:function(){return z(w)},"data-type":"plus","data-field":""},h("i",{className:"fa fa-angle-right"})))))),h("div",{className:"product-buttons"},h("a",{href:null,className:"btn btn-solid",onClick:function(){return x.addToCart(w,C)}},"add to cart"),h(o.a,{href:"/page/account/checkout"},h("a",{className:"btn btn-solid"},"buy now"))),h("div",{className:"border-product"},h("h6",{className:"product-title"},"product details"),h("p",null,w.description)),h("div",{className:"border-product"},h("h6",{className:"product-title"},"share it"),h("div",{className:"product-icon"},h(v.default,null))),h("div",{className:"border-product"},h("h6",{className:"product-title"},"Time Reminder"),h(g.a,null))))}},D16B:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n).a.createElement;t.default=function(){return r("ul",{className:"product-social"},r("li",null,r("a",{href:"https://www.facebook.com",target:"_blank"},r("i",{className:"fa fa-facebook"}))),r("li",null,r("a",{href:"https://plus.google.com",target:"_blank"},r("i",{className:"fa fa-google-plus"}))),r("li",null,r("a",{href:"https://twitter.com",target:"_blank"},r("i",{className:"fa fa-twitter"}))),r("li",null,r("a",{href:"https://www.instagram.com",target:"_blank"},r("i",{className:"fa fa-instagram"}))),r("li",null,r("a",{href:"https://rss.com",target:"_blank"},r("i",{className:"fa fa-rss"}))))}},HALo:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},L3zb:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),s=a("JX7q"),o=a("dI71"),i=a("q1tI"),c=a.n(i),l=a("17x9"),u=a.n(l),d=a("TSYQ"),f=a.n(d),p=a("33Jr"),m=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.o,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,o=e.bsSize,i=e.valid,l=e.invalid,u=e.tag,d=e.addon,b=e.plaintext,g=e.innerRef,v=Object(r.a)(e,m),h=["radio","checkbox"].indexOf(s)>-1,N=new RegExp("\\D","g"),y=u||("select"===s||"textarea"===s?s:"input"),j="form-control";b?(j+="-plaintext",y=u||"input"):"file"===s?j+="-file":"range"===s?j+="-range":h&&(j=d?null:"form-check-input"),v.size&&N.test(v.size)&&(Object(p.q)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=v.size,delete v.size);var O=Object(p.k)(f()(t,l&&"is-invalid",i&&"is-valid",!!o&&"form-control-"+o,j),a);return("input"===y||u&&"function"===typeof u)&&(v.type=s),v.children&&!b&&"select"!==s&&"string"===typeof y&&"select"!==y&&(Object(p.q)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),c.a.createElement(y,Object(n.a)({},v,{ref:g,className:O,"aria-invalid":l}))},t}(c.a.Component);g.propTypes=b,g.defaultProps={type:"text"},t.a=g},UU0N:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),s=a("q1tI"),o=a.n(s),i=a("17x9"),c=a.n(i),l=a("TSYQ"),u=a.n(l),d=a("33Jr"),f=["body","bottom","className","cssModule","heading","left","list","middle","object","right","tag","top"],p={body:c.a.bool,bottom:c.a.bool,children:c.a.node,className:c.a.string,cssModule:c.a.object,heading:c.a.bool,left:c.a.bool,list:c.a.bool,middle:c.a.bool,object:c.a.bool,right:c.a.bool,tag:d.o,top:c.a.bool},m=function(e){var t,a=e.body,s=e.bottom,i=e.className,c=e.cssModule,l=e.heading,p=e.left,m=e.list,b=e.middle,g=e.object,v=e.right,h=e.tag,N=e.top,y=Object(r.a)(e,f);t=l?"h4":y.href?"a":y.src||g?"img":m?"ul":"div";var j=h||t,O=Object(d.k)(u()(i,{"media-body":a,"media-heading":l,"media-left":p,"media-right":v,"media-top":N,"media-bottom":s,"media-middle":b,"media-object":g,"media-list":m,media:!a&&!l&&!p&&!v&&!N&&!s&&!b&&!g&&!m}),c);return o.a.createElement(j,Object(n.a)({},y,{className:O}))};m.propTypes=p,t.a=m},XJI2:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"d",(function(){return c}));var n=a("q1tI"),r=a.n(n),s=a("XJI2");a.d(t,"b",(function(){return s.a})),a.d(t,"c",(function(){return s.d}));var o=r.a.createElement,i=Object(n.createContext)({}),c=function(e){var t=Object(n.useState)({currency:"USD",symbol:"$",value:1}),a=t[0],r={selectedCurr:a,selectedCurrency:t[1]};return o(i.Provider,{value:{state:a,currencyContext:r}},e.children)}},aZVK:function(e,t,a){"use strict";a.r(t);var n=a("HALo"),r=a("jT3O"),s=a("q1tI"),o=a.n(s),i=a("1Yj4"),c=a("ok1R"),l=a("rhny"),u=a("UU0N"),d=a("6yjW"),f=a("OS56"),p=a.n(f),m=a("UYTu"),b=a("+TN3"),g=a("rgQu"),v=(a("XJI2"),a("/5QC"),o.a.createElement);function h(){var e=Object(r.a)(["\n  query product($id: Int!) {\n    product(id: $id) {\n      id\n      title\n      description\n      type\n      brand\n      category\n      price\n      new\n      sale\n      discount\n      stock\n      variants {\n        id\n        color\n        image_id\n        variant_id\n        size\n      }\n      images {\n        image_id\n        src\n      }\n    }\n  }\n"]);return h=function(){return e},e}var N=Object(m.a)(h());t.default=function(){var e=Object(s.useState)({nav1:null,nav2:null}),t=e[0],a=e[1],r=Object(s.useRef)(),o=Object(s.useRef)(),f=Object(b.a)(N,{variables:{id:1}}),m=f.loading,h=f.data;Object(s.useEffect)((function(){a({nav1:r.current,nav2:o.current})}),[h]);var y=t.nav1,j=t.nav2;return v("section",null,v("div",{className:"collection-wrapper"},v(i.a,null,h&&h.product&&0!==h.product.length&&!m?v(c.a,null,v(l.a,{lg:"5",sm:"10",xs:"12"},v(p.a,Object(n.a)({},{slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!0,fade:!0},{asNavFor:j,ref:function(e){return r.current=e},className:"product-right-slick"}),h.product.images.map((function(e,t){return v("div",{key:t},v(g.default,{image:e}))})))),v(l.a,{lg:"1",sm:"2",xs:"12"},v(c.a,null,v(p.a,Object(n.a)({className:"slider-nav"},{slidesToShow:3,swipeToSlide:!0,arrows:!1,vertical:!0,dots:!1,focusOnSelect:!0,responsive:[{breakpoint:576,settings:{vertical:!1}}]},{asNavFor:y,ref:function(e){return o.current=e}}),h.product.variants?h.product.images.map((function(e,t){return v("div",{key:t},v(u.a,{src:"".concat(e.src),key:t,alt:e.alt,className:"img-fluid"}))})):""))),v(l.a,{lg:"6",className:"rtl-text"},v(d.default,{changeColorVar:function(e){o.current.slickGoTo(e)},item:h.product}))):"loading")))}},hdAe:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product-details/product/rightImagePage",function(){return a("aZVK")}])},ok1R:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),s=a("q1tI"),o=a.n(s),i=a("17x9"),c=a.n(i),l=a("TSYQ"),u=a.n(l),d=a("33Jr"),f=["className","cssModule","noGutters","tag","form","widths"],p=c.a.oneOfType([c.a.number,c.a.string]),m={tag:d.o,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var t=e.className,a=e.cssModule,s=e.noGutters,i=e.tag,c=e.form,l=e.widths,p=Object(r.a)(e,f),m=[];l.forEach((function(t,a){var n=e[t];if(delete p[t],n){var r=!a;m.push(r?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var b=Object(d.k)(u()(t,s?"no-gutters":null,c?"form-row":"row",m),a);return o.a.createElement(i,Object(n.a)({},p,{className:b}))};g.propTypes=m,g.defaultProps=b,t.a=g},rgQu:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),s=a("UU0N"),o=r.a.createElement;t.default=function(e){var t=e.image;return o(s.a,{src:"".concat(t.src),alt:t.alt,className:"img-fluid image_zoom_cls-0"})}},rhny:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),s=a("q1tI"),o=a.n(s),i=a("17x9"),c=a.n(i),l=a("TSYQ"),u=a.n(l),d=a("33Jr"),f=["className","cssModule","widths","tag"],p=c.a.oneOfType([c.a.number,c.a.string]),m=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:p,offset:p})]),b={tag:d.o,xs:m,sm:m,md:m,lg:m,xl:m,className:c.a.string,cssModule:c.a.object,widths:c.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,s=e.widths,i=e.tag,c=Object(r.a)(e,f),l=[];s.forEach((function(t,n){var r=e[t];if(delete c[t],r||""===r){var s=!n;if(Object(d.i)(r)){var o,i=s?"-":"-"+t+"-",f=v(s,t,r.size);l.push(Object(d.k)(u()(((o={})[f]=r.size||""===r.size,o["order"+i+r.order]=r.order||0===r.order,o["offset"+i+r.offset]=r.offset||0===r.offset,o)),a))}else{var p=v(s,t,r);l.push(p)}}})),l.length||l.push("col");var p=Object(d.k)(u()(t,l),a);return o.a.createElement(i,Object(n.a)({},c,{className:p}))};h.propTypes=b,h.defaultProps=g,t.a=h}},[["hdAe",1,0,2,3,4,5,7,13,18]]]);