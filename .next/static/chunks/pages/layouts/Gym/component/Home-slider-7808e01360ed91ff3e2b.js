_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[124],{"1Yj4":function(e,t,s){"use strict";var a=s("wx14"),n=s("zLVn"),o=s("q1tI"),r=s.n(o),l=s("17x9"),c=s.n(l),i=s("TSYQ"),u=s.n(i),d=s("33Jr"),f=["className","cssModule","fluid","tag"],m={tag:d.o,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,s=e.cssModule,o=e.fluid,l=e.tag,c=Object(n.a)(e,f),i="container";!0===o?i="container-fluid":o&&(i="container-"+o);var m=Object(d.k)(u()(t,i),s);return r.a.createElement(l,Object(a.a)({},c,{className:m}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},HH58:function(e,t,s){"use strict";s.r(t);var a=s("q1tI"),n=s.n(a),o=s("OS56"),r=s.n(o),l=s("b3GC"),c=n.a.createElement,i=[{img:"home43",title:"summer sale",desc:"Protien Powder",link:"#",classes:"p-right text-right"},{img:"home44",title:"summer sale",desc:"Protien Shake",link:"#",classes:"p-right text-right"}];t.default=function(){return c(a.Fragment,null,c("section",{className:"p-0 gym-slider"},c(r.a,{className:"slide-1 home-slider"},i.map((function(e,t){return c(l.default,{key:t,img:e.img,link:e.link,title:e.title,desc:e.desc,classes:e.classes,btnClass:" btn-gradient",btn:"save upto 50%off"})})))))}},HQqb:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layouts/Gym/component/Home-slider",function(){return s("HH58")}])},b3GC:function(e,t,s){"use strict";s.r(t);var a=s("q1tI"),n=s.n(a),o=s("YFqc"),r=s.n(o),l=s("1Yj4"),c=s("ok1R"),i=s("rhny"),u=n.a.createElement;t.default=function(e){var t=e.img,s=e.title,a=e.desc,n=e.link,o=e.classes,d=e.btn,f=e.btnClass;return u("div",null,u("div",{className:"home ".concat(t," ").concat(o||"text-center")},u(l.a,null,u(c.a,null,u(i.a,null,u("div",{className:"slider-contain"},u("div",null,u("h4",null,s),u("h1",null,a),u(r.a,{href:n},u("a",{className:"btn btn-solid ".concat(f||"")},d||"Shop Now"," ")))))))))}},ntbh:function(e,t){(function(t){e.exports=function(){var e={149:function(e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(s){"object"===typeof window&&(t=window)}e.exports=t}},s={};function a(t){if(s[t])return s[t].exports;var n=s[t]={exports:{}},o=!0;try{e[t](n,n.exports,a),o=!1}finally{o&&delete s[t]}return n.exports}return a.ab=t+"/",a(149)}()}).call(this,"/")},ok1R:function(e,t,s){"use strict";var a=s("wx14"),n=s("zLVn"),o=s("q1tI"),r=s.n(o),l=s("17x9"),c=s.n(l),i=s("TSYQ"),u=s.n(i),d=s("33Jr"),f=["className","cssModule","noGutters","tag","form","widths"],m=c.a.oneOfType([c.a.number,c.a.string]),p={tag:d.o,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:m,sm:m,md:m,lg:m,xl:m},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var t=e.className,s=e.cssModule,o=e.noGutters,l=e.tag,c=e.form,i=e.widths,m=Object(n.a)(e,f),p=[];i.forEach((function(t,s){var a=e[t];if(delete m[t],a){var n=!s;p.push(n?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var b=Object(d.k)(u()(t,o?"no-gutters":null,c?"form-row":"row",p),s);return r.a.createElement(l,Object(a.a)({},m,{className:b}))};g.propTypes=p,g.defaultProps=b,t.a=g},rhny:function(e,t,s){"use strict";var a=s("wx14"),n=s("zLVn"),o=s("q1tI"),r=s.n(o),l=s("17x9"),c=s.n(l),i=s("TSYQ"),u=s.n(i),d=s("33Jr"),f=["className","cssModule","widths","tag"],m=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:m,offset:m})]),b={tag:d.o,xs:p,sm:p,md:p,lg:p,xl:p,className:c.a.string,cssModule:c.a.object,widths:c.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,s){return!0===s||""===s?e?"col":"col-"+t:"auto"===s?e?"col-auto":"col-"+t+"-auto":e?"col-"+s:"col-"+t+"-"+s},w=function(e){var t=e.className,s=e.cssModule,o=e.widths,l=e.tag,c=Object(n.a)(e,f),i=[];o.forEach((function(t,a){var n=e[t];if(delete c[t],n||""===n){var o=!a;if(Object(d.i)(n)){var r,l=o?"-":"-"+t+"-",f=h(o,t,n.size);i.push(Object(d.k)(u()(((r={})[f]=n.size||""===n.size,r["order"+l+n.order]=n.order||0===n.order,r["offset"+l+n.offset]=n.offset||0===n.offset,r)),s))}else{var m=h(o,t,n);i.push(m)}}})),i.length||i.push("col");var m=Object(d.k)(u()(t,i),s);return r.a.createElement(l,Object(a.a)({},c,{className:m}))};w.propTypes=b,w.defaultProps=g,t.a=w}},[["HQqb",1,0,2,3,7]]]);