_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[105],{"1Yj4":function(e,t,a){"use strict";var n=a("wx14"),s=a("zLVn"),o=a("q1tI"),r=a.n(o),c=a("17x9"),l=a.n(c),i=a("TSYQ"),u=a.n(i),f=a("33Jr"),d=["className","cssModule","fluid","tag"],m={tag:f.o,fluid:l.a.oneOfType([l.a.bool,l.a.string]),className:l.a.string,cssModule:l.a.object},h=function(e){var t=e.className,a=e.cssModule,o=e.fluid,c=e.tag,l=Object(s.a)(e,d),i="container";!0===o?i="container-fluid":o&&(i="container-"+o);var m=Object(f.k)(u()(t,i),a);return r.a.createElement(c,Object(n.a)({},l,{className:m}))};h.propTypes=m,h.defaultProps={tag:"div"},t.a=h},SgvT:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),s=a.n(n),o=a("OS56"),r=a.n(o),c=a("b3GC"),l=s.a.createElement,i=[{img:"home19",title:"welcome to fashion",desc:"men fashion",link:"#"},{img:"home20",title:"welcome to fashion",desc:"women fashion",link:"#"}];t.default=function(){return l("section",{className:"p-0"},l(r.a,{className:"slide-1 home-slider"},i.map((function(e,t){return l(c.default,{key:t,img:e.img,link:e.link,title:e.title,desc:e.desc})}))))}},b3GC:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),s=a.n(n),o=a("YFqc"),r=a.n(o),c=a("1Yj4"),l=a("ok1R"),i=a("rhny"),u=s.a.createElement;t.default=function(e){var t=e.img,a=e.title,n=e.desc,s=e.link,o=e.classes,f=e.btn,d=e.btnClass;return u("div",null,u("div",{className:"home ".concat(t," ").concat(o||"text-center")},u(c.a,null,u(l.a,null,u(i.a,null,u("div",{className:"slider-contain"},u("div",null,u("h4",null,a),u("h1",null,n),u(r.a,{href:s},u("a",{className:"btn btn-solid ".concat(d||"")},f||"Shop Now"," ")))))))))}},ntbh:function(e,t){(function(t){e.exports=function(){var e={149:function(e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(a){"object"===typeof window&&(t=window)}e.exports=t}},a={};function n(t){if(a[t])return a[t].exports;var s=a[t]={exports:{}},o=!0;try{e[t](s,s.exports,n),o=!1}finally{o&&delete a[t]}return s.exports}return n.ab=t+"/",n(149)}()}).call(this,"/")},ok1R:function(e,t,a){"use strict";var n=a("wx14"),s=a("zLVn"),o=a("q1tI"),r=a.n(o),c=a("17x9"),l=a.n(c),i=a("TSYQ"),u=a.n(i),f=a("33Jr"),d=["className","cssModule","noGutters","tag","form","widths"],m=l.a.oneOfType([l.a.number,l.a.string]),h={tag:f.o,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:m,sm:m,md:m,lg:m,xl:m},p={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var t=e.className,a=e.cssModule,o=e.noGutters,c=e.tag,l=e.form,i=e.widths,m=Object(s.a)(e,d),h=[];i.forEach((function(t,a){var n=e[t];if(delete m[t],n){var s=!a;h.push(s?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var p=Object(f.k)(u()(t,o?"no-gutters":null,l?"form-row":"row",h),a);return r.a.createElement(c,Object(n.a)({},m,{className:p}))};b.propTypes=h,b.defaultProps=p,t.a=b},rhny:function(e,t,a){"use strict";var n=a("wx14"),s=a("zLVn"),o=a("q1tI"),r=a.n(o),c=a("17x9"),l=a.n(c),i=a("TSYQ"),u=a.n(i),f=a("33Jr"),d=["className","cssModule","widths","tag"],m=l.a.oneOfType([l.a.number,l.a.string]),h=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:m,offset:m})]),p={tag:f.o,xs:h,sm:h,md:h,lg:h,xl:h,className:l.a.string,cssModule:l.a.object,widths:l.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},w=function(e){var t=e.className,a=e.cssModule,o=e.widths,c=e.tag,l=Object(s.a)(e,d),i=[];o.forEach((function(t,n){var s=e[t];if(delete l[t],s||""===s){var o=!n;if(Object(f.i)(s)){var r,c=o?"-":"-"+t+"-",d=g(o,t,s.size);i.push(Object(f.k)(u()(((r={})[d]=s.size||""===s.size,r["order"+c+s.order]=s.order||0===s.order,r["offset"+c+s.offset]=s.offset||0===s.offset,r)),a))}else{var m=g(o,t,s);i.push(m)}}})),i.length||i.push("col");var m=Object(f.k)(u()(t,i),a);return r.a.createElement(c,Object(n.a)({},l,{className:m}))};w.propTypes=p,w.defaultProps=b,t.a=w},zxMh:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layouts/Fashion2/Component/Home",function(){return a("SgvT")}])}},[["zxMh",1,0,2,3,7]]]);