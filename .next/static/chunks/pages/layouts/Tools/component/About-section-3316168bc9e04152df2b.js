_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[160],{"1Yj4":function(t,e,n){"use strict";var o=n("wx14"),r=n("zLVn"),a=n("q1tI"),i=n.n(a),u=n("17x9"),s=n.n(u),c=n("TSYQ"),l=n.n(c),d=n("33Jr"),f=["className","cssModule","fluid","tag"],p={tag:d.o,fluid:s.a.oneOfType([s.a.bool,s.a.string]),className:s.a.string,cssModule:s.a.object},m=function(t){var e=t.className,n=t.cssModule,a=t.fluid,u=t.tag,s=Object(r.a)(t,f),c="container";!0===a?c="container-fluid":a&&(c="container-"+a);var p=Object(d.k)(l()(e,c),n);return i.a.createElement(u,Object(o.a)({},s,{className:p}))};m.propTypes=p,m.defaultProps={tag:"div"},e.a=m},"33Jr":function(t,e,n){"use strict";n.d(e,"n",(function(){return i})),n.d(e,"g",(function(){return u})),n.d(e,"e",(function(){return s})),n.d(e,"k",(function(){return c})),n.d(e,"l",(function(){return l})),n.d(e,"m",(function(){return d})),n.d(e,"q",(function(){return p})),n.d(e,"p",(function(){return b})),n.d(e,"o",(function(){return v})),n.d(e,"c",(function(){return y})),n.d(e,"a",(function(){return g})),n.d(e,"b",(function(){return h})),n.d(e,"j",(function(){return w})),n.d(e,"d",(function(){return x})),n.d(e,"i",(function(){return E})),n.d(e,"h",(function(){return T})),n.d(e,"f",(function(){return q}));var o,r=n("17x9"),a=n.n(r);function i(t){document.body.style.paddingRight=t>0?t+"px":null}function u(){var t=window.getComputedStyle(document.body,null);return parseInt(t&&t.getPropertyValue("padding-right")||0,10)}function s(){var t=function(){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e}(),e=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=e?parseInt(e.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&i(n+t)}function c(t,e){return void 0===t&&(t=""),void 0===e&&(e=o),e?t.split(" ").map((function(t){return e[t]||t})).join(" "):t}function l(t,e){var n={};return Object.keys(t).forEach((function(o){-1===e.indexOf(o)&&(n[o]=t[o])})),n}function d(t,e){for(var n,o=Array.isArray(e)?e:[e],r=o.length,a={};r>0;)a[n=o[r-=1]]=t[n];return a}var f={};function p(t){f[t]||("undefined"!==typeof console&&console.error(t),f[t]=!0)}var m="object"===typeof window&&window.Element||function(){};var b=a.a.oneOfType([a.a.string,a.a.func,function(t,e,n){if(!(t[e]instanceof m))return new Error("Invalid prop `"+e+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},a.a.shape({current:a.a.any})]),v=a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func}),a.a.arrayOf(a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func})]))]),y={Fade:150,Collapse:350,Modal:300,Carousel:600},g=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],h={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},w={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},x=!("undefined"===typeof window||!window.document||!window.document.createElement);function j(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}function E(t){var e=typeof t;return null!=t&&("object"===e||"function"===e)}function O(t){if(function(t){return!(!t||"object"!==typeof t)&&"current"in t}(t))return t.current;if(function(t){if(!E(t))return!1;var e=j(t);return"[object Function]"===e||"[object AsyncFunction]"===e||"[object GeneratorFunction]"===e||"[object Proxy]"===e}(t))return t();if("string"===typeof t&&x){var e=document.querySelectorAll(t);if(e.length||(e=document.querySelectorAll("#"+t)),!e.length)throw new Error("The target '"+t+"' could not be identified in the dom, tip: check spelling");return e}return t}function N(t){return null!==t&&(Array.isArray(t)||x&&"number"===typeof t.length)}function T(t,e){var n=O(t);return e?N(n)?n:null===n?[]:[n]:N(n)?n[0]:n}var q=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},PdnU:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layouts/Tools/component/About-section",function(){return n("WXg+")}])},Qetd:function(t,e,n){"use strict";var o=Object.assign.bind(Object);t.exports=o,t.exports.default=t.exports},TSYQ:function(t,e,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var a=typeof o;if("string"===a||"number"===a)t.push(o);else if(Array.isArray(o)&&o.length){var i=r.apply(null,o);i&&t.push(i)}else if("object"===a)for(var u in o)n.call(o,u)&&o[u]&&t.push(u)}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(o=function(){return r}.apply(e,[]))||(t.exports=o)}()},"WXg+":function(t,e,n){"use strict";n.r(e);var o=n("q1tI"),r=n.n(o),a=n("1Yj4"),i=n("ok1R"),u=n("rhny"),s=r.a.createElement;e.default=function(){return s(o.Fragment,null,s("section",null,s(a.a,null,s(i.a,null,s(u.a,{lg:"8",className:"m-auto"},s("div",{className:"title3"},s("h2",{className:"title-inner3"},"welcome to tool store"),s("div",{className:"line"})),s("div",{className:"about-text"},s("p",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.")))))))}},ok1R:function(t,e,n){"use strict";var o=n("wx14"),r=n("zLVn"),a=n("q1tI"),i=n.n(a),u=n("17x9"),s=n.n(u),c=n("TSYQ"),l=n.n(c),d=n("33Jr"),f=["className","cssModule","noGutters","tag","form","widths"],p=s.a.oneOfType([s.a.number,s.a.string]),m={tag:d.o,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},b={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(t){var e=t.className,n=t.cssModule,a=t.noGutters,u=t.tag,s=t.form,c=t.widths,p=Object(r.a)(t,f),m=[];c.forEach((function(e,n){var o=t[e];if(delete p[e],o){var r=!n;m.push(r?"row-cols-"+o:"row-cols-"+e+"-"+o)}}));var b=Object(d.k)(l()(e,a?"no-gutters":null,s?"form-row":"row",m),n);return i.a.createElement(u,Object(o.a)({},p,{className:b}))};v.propTypes=m,v.defaultProps=b,e.a=v},rhny:function(t,e,n){"use strict";var o=n("wx14"),r=n("zLVn"),a=n("q1tI"),i=n.n(a),u=n("17x9"),s=n.n(u),c=n("TSYQ"),l=n.n(c),d=n("33Jr"),f=["className","cssModule","widths","tag"],p=s.a.oneOfType([s.a.number,s.a.string]),m=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:p,offset:p})]),b={tag:d.o,xs:m,sm:m,md:m,lg:m,xl:m,className:s.a.string,cssModule:s.a.object,widths:s.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},y=function(t,e,n){return!0===n||""===n?t?"col":"col-"+e:"auto"===n?t?"col-auto":"col-"+e+"-auto":t?"col-"+n:"col-"+e+"-"+n},g=function(t){var e=t.className,n=t.cssModule,a=t.widths,u=t.tag,s=Object(r.a)(t,f),c=[];a.forEach((function(e,o){var r=t[e];if(delete s[e],r||""===r){var a=!o;if(Object(d.i)(r)){var i,u=a?"-":"-"+e+"-",f=y(a,e,r.size);c.push(Object(d.k)(l()(((i={})[f]=r.size||""===r.size,i["order"+u+r.order]=r.order||0===r.order,i["offset"+u+r.offset]=r.offset||0===r.offset,i)),n))}else{var p=y(a,e,r);c.push(p)}}})),c.length||c.push("col");var p=Object(d.k)(l()(e,c),n);return i.a.createElement(u,Object(o.a)({},s,{className:p}))};g.propTypes=b,g.defaultProps=v,e.a=g},wx14:function(t,e,n){"use strict";function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return o}))},zLVn:function(t,e,n){"use strict";function o(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}n.d(e,"a",(function(){return o}))}},[["PdnU",1,0]]]);