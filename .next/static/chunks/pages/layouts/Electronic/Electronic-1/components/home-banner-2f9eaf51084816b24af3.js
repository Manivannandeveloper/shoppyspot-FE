_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[93],{"1Yj4":function(n,t,e){"use strict";var r=e("wx14"),o=e("zLVn"),a=e("q1tI"),i=e.n(a),u=e("17x9"),c=e.n(u),s=e("TSYQ"),l=e.n(s),f=e("33Jr"),d=["className","cssModule","fluid","tag"],p={tag:f.o,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},m=function(n){var t=n.className,e=n.cssModule,a=n.fluid,u=n.tag,c=Object(o.a)(n,d),s="container";!0===a?s="container-fluid":a&&(s="container-"+a);var p=Object(f.k)(l()(t,s),e);return i.a.createElement(u,Object(r.a)({},c,{className:p}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},"33Jr":function(n,t,e){"use strict";e.d(t,"n",(function(){return i})),e.d(t,"g",(function(){return u})),e.d(t,"e",(function(){return c})),e.d(t,"k",(function(){return s})),e.d(t,"l",(function(){return l})),e.d(t,"m",(function(){return f})),e.d(t,"q",(function(){return p})),e.d(t,"p",(function(){return b})),e.d(t,"o",(function(){return h})),e.d(t,"c",(function(){return y})),e.d(t,"a",(function(){return v})),e.d(t,"b",(function(){return g})),e.d(t,"j",(function(){return w})),e.d(t,"d",(function(){return x})),e.d(t,"i",(function(){return E})),e.d(t,"h",(function(){return T})),e.d(t,"f",(function(){return k}));var r,o=e("17x9"),a=e.n(o);function i(n){document.body.style.paddingRight=n>0?n+"px":null}function u(){var n=window.getComputedStyle(document.body,null);return parseInt(n&&n.getPropertyValue("padding-right")||0,10)}function c(){var n=function(){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n);var t=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],e=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&i(e+n)}function s(n,t){return void 0===n&&(n=""),void 0===t&&(t=r),t?n.split(" ").map((function(n){return t[n]||n})).join(" "):n}function l(n,t){var e={};return Object.keys(n).forEach((function(r){-1===t.indexOf(r)&&(e[r]=n[r])})),e}function f(n,t){for(var e,r=Array.isArray(t)?t:[t],o=r.length,a={};o>0;)a[e=r[o-=1]]=n[e];return a}var d={};function p(n){d[n]||("undefined"!==typeof console&&console.error(n),d[n]=!0)}var m="object"===typeof window&&window.Element||function(){};var b=a.a.oneOfType([a.a.string,a.a.func,function(n,t,e){if(!(n[t]instanceof m))return new Error("Invalid prop `"+t+"` supplied to `"+e+"`. Expected prop to be an instance of Element. Validation failed.")},a.a.shape({current:a.a.any})]),h=a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func}),a.a.arrayOf(a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func})]))]),y={Fade:150,Collapse:350,Modal:300,Carousel:600},v=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],g={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},w={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},x=!("undefined"===typeof window||!window.document||!window.document.createElement);function j(n){return null==n?void 0===n?"[object Undefined]":"[object Null]":Object.prototype.toString.call(n)}function E(n){var t=typeof n;return null!=n&&("object"===t||"function"===t)}function O(n){if(function(n){return!(!n||"object"!==typeof n)&&"current"in n}(n))return n.current;if(function(n){if(!E(n))return!1;var t=j(n);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(n))return n();if("string"===typeof n&&x){var t=document.querySelectorAll(n);if(t.length||(t=document.querySelectorAll("#"+n)),!t.length)throw new Error("The target '"+n+"' could not be identified in the dom, tip: check spelling");return t}return n}function N(n){return null!==n&&(Array.isArray(n)||x&&"number"===typeof n.length)}function T(n,t){var e=O(n);return t?N(e)?e:null===e?[]:[e]:N(e)?e[0]:e}var k=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},"9gMs":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layouts/Electronic/Electronic-1/components/home-banner",function(){return e("v6YM")}])},Qetd:function(n,t,e){"use strict";var r=Object.assign.bind(Object);n.exports=r,n.exports.default=n.exports},TSYQ:function(n,t,e){var r;!function(){"use strict";var e={}.hasOwnProperty;function o(){for(var n=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)n.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&n.push(i)}else if("object"===a)for(var u in r)e.call(r,u)&&r[u]&&n.push(u)}}return n.join(" ")}n.exports?(o.default=o,n.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(n.exports=r)}()},ntbh:function(n,t){(function(t){n.exports=function(){var n={149:function(n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"===typeof window&&(t=window)}n.exports=t}},e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={exports:{}},a=!0;try{n[t](o,o.exports,r),a=!1}finally{a&&delete e[t]}return o.exports}return r.ab=t+"/",r(149)}()}).call(this,"/")},ok1R:function(n,t,e){"use strict";var r=e("wx14"),o=e("zLVn"),a=e("q1tI"),i=e.n(a),u=e("17x9"),c=e.n(u),s=e("TSYQ"),l=e.n(s),f=e("33Jr"),d=["className","cssModule","noGutters","tag","form","widths"],p=c.a.oneOfType([c.a.number,c.a.string]),m={tag:f.o,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},b={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(n){var t=n.className,e=n.cssModule,a=n.noGutters,u=n.tag,c=n.form,s=n.widths,p=Object(o.a)(n,d),m=[];s.forEach((function(t,e){var r=n[t];if(delete p[t],r){var o=!e;m.push(o?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var b=Object(f.k)(l()(t,a?"no-gutters":null,c?"form-row":"row",m),e);return i.a.createElement(u,Object(r.a)({},p,{className:b}))};h.propTypes=m,h.defaultProps=b,t.a=h},rhny:function(n,t,e){"use strict";var r=e("wx14"),o=e("zLVn"),a=e("q1tI"),i=e.n(a),u=e("17x9"),c=e.n(u),s=e("TSYQ"),l=e.n(s),f=e("33Jr"),d=["className","cssModule","widths","tag"],p=c.a.oneOfType([c.a.number,c.a.string]),m=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:p,offset:p})]),b={tag:f.o,xs:m,sm:m,md:m,lg:m,xl:m,className:c.a.string,cssModule:c.a.object,widths:c.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},y=function(n,t,e){return!0===e||""===e?n?"col":"col-"+t:"auto"===e?n?"col-auto":"col-"+t+"-auto":n?"col-"+e:"col-"+t+"-"+e},v=function(n){var t=n.className,e=n.cssModule,a=n.widths,u=n.tag,c=Object(o.a)(n,d),s=[];a.forEach((function(t,r){var o=n[t];if(delete c[t],o||""===o){var a=!r;if(Object(f.i)(o)){var i,u=a?"-":"-"+t+"-",d=y(a,t,o.size);s.push(Object(f.k)(l()(((i={})[d]=o.size||""===o.size,i["order"+u+o.order]=o.order||0===o.order,i["offset"+u+o.offset]=o.offset||0===o.offset,i)),e))}else{var p=y(a,t,o);s.push(p)}}})),s.length||s.push("col");var p=Object(f.k)(l()(t,s),e);return i.a.createElement(u,Object(r.a)({},c,{className:p}))};v.propTypes=b,v.defaultProps=h,t.a=v},v6YM:function(n,t,e){"use strict";e.r(t);var r=e("q1tI"),o=e.n(r),a=e("OS56"),i=e.n(a),u=e("1Yj4"),c=e("ok1R"),s=e("rhny"),l=o.a.createElement,f=[{img:"home15",offer:"save 30%",title:"Electronic",btn:"shop now"},{img:"home16",offer:"save upto 30%",title:"headphone",btn:"shop now"}],d=function(n){var t=n.img,e=n.offer,r=n.title,o=n.btn;return l("div",null,l("div",{className:"home ".concat(t," text-center")},l(u.a,null,l(c.a,null,l(s.a,null,l("div",{className:"slider-contain"},l("div",null,l("h4",null,e),l("h1",null,r),l("a",{href:"#",className:"btn btn-solid"},o))))))))};t.default=function(){return l("section",{className:"p-0"},l(i.a,{className:"slide-1 home-slider"},f.map((function(n,t){return l(d,{key:t,img:n.img,offer:n.offer,title:n.title,btn:n.btn})}))))}},wx14:function(n,t,e){"use strict";function r(){return(r=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}e.d(t,"a",(function(){return r}))},zLVn:function(n,t,e){"use strict";function r(n,t){if(null==n)return{};var e,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}e.d(t,"a",(function(){return r}))}},[["9gMs",1,0,7]]]);