_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[132],{"0rnY":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layouts/Leftsidebar/components/HomeSlider",function(){return n("Yvhv")}])},"1Yj4":function(e,t,n){"use strict";var a=n("wx14"),s=n("zLVn"),o=n("q1tI"),r=n.n(o),c=n("17x9"),l=n.n(c),i=n("TSYQ"),u=n.n(i),f=n("33Jr"),d=["className","cssModule","fluid","tag"],m={tag:f.o,fluid:l.a.oneOfType([l.a.bool,l.a.string]),className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,n=e.cssModule,o=e.fluid,c=e.tag,l=Object(s.a)(e,d),i="container";!0===o?i="container-fluid":o&&(i="container-"+o);var m=Object(f.k)(u()(t,i),n);return r.a.createElement(c,Object(a.a)({},l,{className:m}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},Yvhv:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),s=n.n(a),o=n("OS56"),r=n.n(o),c=n("b3GC"),l=s.a.createElement,i=[{img:"home55",title:"welcome to fashion",desc:"men fashion",link:"#"},{img:"home56",title:"welcome to fashion",desc:"women fashion",link:"#"}];t.default=function(){return l(a.Fragment,null,l("section",{className:"p-0"},l(r.a,{className:"slide-1 home-slider"},i.map((function(e,t){return l(c.default,{key:t,img:e.img,link:e.link,title:e.title,desc:e.desc})})))))}},b3GC:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),s=n.n(a),o=n("YFqc"),r=n.n(o),c=n("1Yj4"),l=n("ok1R"),i=n("rhny"),u=s.a.createElement;t.default=function(e){var t=e.img,n=e.title,a=e.desc,s=e.link,o=e.classes,f=e.btn,d=e.btnClass;return u("div",null,u("div",{className:"home ".concat(t," ").concat(o||"text-center")},u(c.a,null,u(l.a,null,u(i.a,null,u("div",{className:"slider-contain"},u("div",null,u("h4",null,n),u("h1",null,a),u(r.a,{href:s},u("a",{className:"btn btn-solid ".concat(d||"")},f||"Shop Now"," ")))))))))}},ntbh:function(e,t){(function(t){e.exports=function(){var e={149:function(e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(n){"object"===typeof window&&(t=window)}e.exports=t}},n={};function a(t){if(n[t])return n[t].exports;var s=n[t]={exports:{}},o=!0;try{e[t](s,s.exports,a),o=!1}finally{o&&delete n[t]}return s.exports}return a.ab=t+"/",a(149)}()}).call(this,"/")},ok1R:function(e,t,n){"use strict";var a=n("wx14"),s=n("zLVn"),o=n("q1tI"),r=n.n(o),c=n("17x9"),l=n.n(c),i=n("TSYQ"),u=n.n(i),f=n("33Jr"),d=["className","cssModule","noGutters","tag","form","widths"],m=l.a.oneOfType([l.a.number,l.a.string]),p={tag:f.o,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:m,sm:m,md:m,lg:m,xl:m},h={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var t=e.className,n=e.cssModule,o=e.noGutters,c=e.tag,l=e.form,i=e.widths,m=Object(s.a)(e,d),p=[];i.forEach((function(t,n){var a=e[t];if(delete m[t],a){var s=!n;p.push(s?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var h=Object(f.k)(u()(t,o?"no-gutters":null,l?"form-row":"row",p),n);return r.a.createElement(c,Object(a.a)({},m,{className:h}))};b.propTypes=p,b.defaultProps=h,t.a=b},rhny:function(e,t,n){"use strict";var a=n("wx14"),s=n("zLVn"),o=n("q1tI"),r=n.n(o),c=n("17x9"),l=n.n(c),i=n("TSYQ"),u=n.n(i),f=n("33Jr"),d=["className","cssModule","widths","tag"],m=l.a.oneOfType([l.a.number,l.a.string]),p=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:m,offset:m})]),h={tag:f.o,xs:p,sm:p,md:p,lg:p,xl:p,className:l.a.string,cssModule:l.a.object,widths:l.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},w=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},g=function(e){var t=e.className,n=e.cssModule,o=e.widths,c=e.tag,l=Object(s.a)(e,d),i=[];o.forEach((function(t,a){var s=e[t];if(delete l[t],s||""===s){var o=!a;if(Object(f.i)(s)){var r,c=o?"-":"-"+t+"-",d=w(o,t,s.size);i.push(Object(f.k)(u()(((r={})[d]=s.size||""===s.size,r["order"+c+s.order]=s.order||0===s.order,r["offset"+c+s.offset]=s.offset||0===s.offset,r)),n))}else{var m=w(o,t,s);i.push(m)}}})),i.length||i.push("col");var m=Object(f.k)(u()(t,i),n);return r.a.createElement(c,Object(a.a)({},l,{className:m}))};g.propTypes=h,g.defaultProps=b,t.a=g}},[["0rnY",1,0,2,3,7]]]);