module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		57: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 59);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/5QC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const CartContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["a"] = (CartContext);

/***/ }),

/***/ "/BrH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_images_game_banner_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("GM3v");
/* harmony import */ var _public_assets_images_game_banner_1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_game_banner_1_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets_images_game_banner_2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("G4+s");
/* harmony import */ var _public_assets_images_game_banner_2_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_game_banner_2_jpg__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Data = [{
  img: _public_assets_images_game_banner_1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
  about: "for windows",
  offer: "save 10%",
  link: "#",
  class: " p-left text-left"
}, {
  img: _public_assets_images_game_banner_2_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
  about: "for psp",
  offer: "save 10%",
  link: "#",
  class: " p-right text-right"
}];

const MasterCategoryBanner = ({
  img,
  about,
  offer,
  link,
  classes
}) => {
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "6"
  }, __jsx("a", {
    href: link
  }, __jsx("div", {
    className: `collection-banner ${classes}`
  }, __jsx("div", {
    className: "img-part"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: img,
    className: "img-fluid bg-img blur-up lazyload",
    alt: ""
  })), __jsx("div", {
    className: "contain-banner"
  }, __jsx("div", null, __jsx("h4", null, about), __jsx("h2", null, offer))))));
};

const Category = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("section", {
    className: "pb-0 banner-text-white ratio_45"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "partition2"
  }, Data.map((data, i) => {
    return __jsx(MasterCategoryBanner, {
      key: i,
      img: data.img,
      about: data.about,
      link: data.link,
      offer: data.offer,
      classes: data.class
    });
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "2dXf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return tools_product_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Product4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Product7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Product5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Product6; });
/* unused harmony export Team4 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Slider2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Slider3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Slider4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Slider5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Slider6; });
/* unused harmony export Slider7 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return svgFastEfficient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return svgFreeShipping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return svgservice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return svgoffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return svgpayment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return svgRings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return svgDiamond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return svgNeckles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return svgWatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return svgPearsing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return svgTiara; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return svgEarings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return svgLongEarings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return svgLeaf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return svgLowCost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return svgHighGrowth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return svgPickUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return svgApproach; });
const Product3 = {
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  arrows: false,
  autoplaySpeed: 3000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const tools_product_4 = {
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const Product4 = {
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 3000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const Product7 = {
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: false,
  arrows: false,
  autoplaySpeed: 3000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const Product5 = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [{
    breakpoint: 1367,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 5
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: true
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const Product6 = {
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const Team4 = {
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 586,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }]
};
const Slider2 = {
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [{
    breakpoint: 991,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
};
const Slider3 = {
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
};
const Slider4 = {
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 586,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
};
const Slider5 = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [{
    breakpoint: 1367,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const Slider6 = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [{
    breakpoint: 1367,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 5,
      infinite: true
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: true
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const Slider7 = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 7,
  responsive: [{
    breakpoint: 1367,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 6
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 5,
      infinite: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }]
}; // SVG Icons

const svgFastEfficient = '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 60.062 60.062" style="enable-background:new 0 0 60.062 60.062;" xml:space="preserve"> <path d="M60.046,11.196c0.004-0.024,0.011-0.048,0.013-0.072c0.007-0.074-0.001-0.149-0.01-0.224 c-0.002-0.019,0.001-0.037-0.002-0.056c-0.018-0.099-0.051-0.196-0.1-0.289c-0.008-0.016-0.019-0.031-0.028-0.047 c-0.002-0.002-0.002-0.005-0.003-0.008c-0.001-0.002-0.004-0.003-0.005-0.006c-0.007-0.011-0.013-0.023-0.02-0.033 c-0.062-0.091-0.137-0.166-0.221-0.23c-0.019-0.014-0.041-0.022-0.061-0.035c-0.074-0.049-0.152-0.089-0.236-0.116 c-0.037-0.012-0.074-0.018-0.112-0.025c-0.073-0.015-0.146-0.022-0.222-0.02c-0.04,0.001-0.078,0.003-0.118,0.009 c-0.026,0.004-0.051,0-0.077,0.006L0.798,22.046c-0.413,0.086-0.729,0.421-0.788,0.839s0.15,0.828,0.523,1.025l16.632,8.773 l2.917,16.187c-0.002,0.012,0.001,0.025,0,0.037c-0.01,0.08-0.011,0.158-0.001,0.237c0.005,0.04,0.01,0.078,0.02,0.117 c0.023,0.095,0.06,0.184,0.11,0.268c0.01,0.016,0.01,0.035,0.021,0.051c0.003,0.005,0.008,0.009,0.012,0.013 c0.013,0.019,0.031,0.034,0.046,0.053c0.047,0.058,0.096,0.111,0.152,0.156c0.009,0.007,0.015,0.018,0.025,0.025 c0.015,0.011,0.032,0.014,0.047,0.024c0.061,0.04,0.124,0.073,0.191,0.099c0.027,0.01,0.052,0.022,0.08,0.03 c0.09,0.026,0.183,0.044,0.277,0.044c0.001,0,0.002,0,0.003,0h0c0,0,0,0,0,0c0.004,0,0.008-0.002,0.012-0.002 c0.017,0.001,0.034,0.002,0.051,0.002c0.277,0,0.527-0.124,0.712-0.315l11.079-7.386l11.6,7.54c0.164,0.106,0.354,0.161,0.545,0.161 c0.105,0,0.212-0.017,0.315-0.051c0.288-0.096,0.518-0.318,0.623-0.604l13.996-37.989c0.013-0.034,0.024-0.069,0.033-0.105 c0.004-0.015,0.005-0.03,0.008-0.044C60.042,11.22,60.044,11.208,60.046,11.196z M48.464,17.579L24.471,35.22 c-0.039,0.029-0.07,0.065-0.104,0.099c-0.013,0.012-0.026,0.022-0.037,0.035c-0.021,0.023-0.04,0.046-0.059,0.071 c-0.018,0.024-0.032,0.049-0.048,0.074c-0.037,0.06-0.068,0.122-0.092,0.188c-0.005,0.013-0.013,0.023-0.017,0.036 c-0.001,0.004-0.005,0.006-0.006,0.01l-2.75,8.937l-2.179-12.091L48.464,17.579z M22.908,46.594l2.726-9.004l4.244,2.759 l1.214,0.789l-4.124,2.749L22.908,46.594z M52.044,13.498L18.071,30.899l-14.14-7.458L52.044,13.498z M44.559,47.504L29.154,37.492 l-2.333-1.517l30.154-22.172L44.559,47.504z"></path> </svg>';
const svgFreeShipping = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -117 679.99892 679">\n' + "                                        <path\n" + '                                            d="m12.347656 378.382812h37.390625c4.371094 37.714844 36.316407 66.164063 74.277344 66.164063 37.96875 0 69.90625-28.449219 74.28125-66.164063h241.789063c4.382812 37.714844 36.316406 66.164063 74.277343 66.164063 37.96875 0 69.902344-28.449219 74.285157-66.164063h78.890624c6.882813 0 12.460938-5.578124 12.460938-12.460937v-352.957031c0-6.882813-5.578125-12.464844-12.460938-12.464844h-432.476562c-6.875 0-12.457031 5.582031-12.457031 12.464844v69.914062h-105.570313c-4.074218.011719-7.890625 2.007813-10.21875 5.363282l-68.171875 97.582031-26.667969 37.390625-9.722656 13.835937c-1.457031 2.082031-2.2421872 4.558594-2.24999975 7.101563v121.398437c-.09765625 3.34375 1.15624975 6.589844 3.47656275 9.003907 2.320312 2.417968 5.519531 3.796874 8.867187 3.828124zm111.417969 37.386719c-27.527344 0-49.851563-22.320312-49.851563-49.847656 0-27.535156 22.324219-49.855469 49.851563-49.855469 27.535156 0 49.855469 22.320313 49.855469 49.855469 0 27.632813-22.21875 50.132813-49.855469 50.472656zm390.347656 0c-27.53125 0-49.855469-22.320312-49.855469-49.847656 0-27.535156 22.324219-49.855469 49.855469-49.855469 27.539063 0 49.855469 22.320313 49.855469 49.855469.003906 27.632813-22.21875 50.132813-49.855469 50.472656zm140.710938-390.34375v223.34375h-338.375c-6.882813 0-12.464844 5.578125-12.464844 12.460938 0 6.882812 5.582031 12.464843 12.464844 12.464843h338.375v79.761719h-66.421875c-4.382813-37.710937-36.320313-66.15625-74.289063-66.15625-37.960937 0-69.898437 28.445313-74.277343 66.15625h-192.308594v-271.324219h89.980468c6.882813 0 12.464844-5.582031 12.464844-12.464843 0-6.882813-5.582031-12.464844-12.464844-12.464844h-89.980468v-31.777344zm-531.304688 82.382813h99.703125v245.648437h-24.925781c-4.375-37.710937-36.3125-66.15625-74.28125-66.15625-37.960937 0-69.90625 28.445313-74.277344 66.15625h-24.929687v-105.316406l3.738281-5.359375h152.054687c6.882813 0 12.460938-5.574219 12.460938-12.457031v-92.226563c0-6.882812-5.578125-12.464844-12.460938-12.464844h-69.796874zm-30.160156 43h74.777344v67.296875h-122.265625zm0 0"\n' + '                                            fill="#ff4c3b"/>\n' + "                                    </svg>";
const svgservice = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 480 480" style="enable-background:new 0 0 480 480;" xml:space="preserve" width="512px" height="512px">\n' + "                                       <g>\n" + "                                           <g>\n" + "                                              <g>\n" + '                                                <path d="M472,432h-24V280c-0.003-4.418-3.588-7.997-8.006-7.994c-2.607,0.002-5.05,1.274-6.546,3.41l-112,160     c-2.532,3.621-1.649,8.609,1.972,11.14c1.343,0.939,2.941,1.443,4.58,1.444h104v24c0,4.418,3.582,8,8,8s8-3.582,8-8v-24h24     c4.418,0,8-3.582,8-8S476.418,432,472,432z M432,432h-88.64L432,305.376V432z" fill="#ff4c3b"/>\n' + '                                                <path d="M328,464h-94.712l88.056-103.688c0.2-0.238,0.387-0.486,0.56-0.744c16.566-24.518,11.048-57.713-12.56-75.552     c-28.705-20.625-68.695-14.074-89.319,14.631C212.204,309.532,207.998,322.597,208,336c0,4.418,3.582,8,8,8s8-3.582,8-8     c-0.003-26.51,21.486-48.002,47.995-48.005c10.048-0.001,19.843,3.151,28.005,9.013c16.537,12.671,20.388,36.007,8.8,53.32     l-98.896,116.496c-2.859,3.369-2.445,8.417,0.924,11.276c1.445,1.226,3.277,1.899,5.172,1.9h112c4.418,0,8-3.582,8-8     S332.418,464,328,464z" fill="#ff4c3b"/>\n' + '                                                <path d="M216.176,424.152c0.167-4.415-3.278-8.129-7.693-8.296c-0.001,0-0.002,0-0.003,0     C104.11,411.982,20.341,328.363,16.28,224H48c4.418,0,8-3.582,8-8s-3.582-8-8-8H16.28C20.283,103.821,103.82,20.287,208,16.288     V40c0,4.418,3.582,8,8,8s8-3.582,8-8V16.288c102.754,3.974,185.686,85.34,191.616,188l-31.2-31.2     c-3.178-3.07-8.242-2.982-11.312,0.196c-2.994,3.1-2.994,8.015,0,11.116l44.656,44.656c0.841,1.018,1.925,1.807,3.152,2.296     c0.313,0.094,0.631,0.172,0.952,0.232c0.549,0.198,1.117,0.335,1.696,0.408c0.08,0,0.152,0,0.232,0c0.08,0,0.152,0,0.224,0     c0.609-0.046,1.211-0.164,1.792-0.352c0.329-0.04,0.655-0.101,0.976-0.184c1.083-0.385,2.069-1.002,2.888-1.808l45.264-45.248     c3.069-3.178,2.982-8.242-0.196-11.312c-3.1-2.994-8.015-2.994-11.116,0l-31.976,31.952     C425.933,90.37,331.38,0.281,216.568,0.112C216.368,0.104,216.2,0,216,0s-0.368,0.104-0.568,0.112     C96.582,0.275,0.275,96.582,0.112,215.432C0.112,215.632,0,215.8,0,216s0.104,0.368,0.112,0.568     c0.199,115.917,91.939,210.97,207.776,215.28h0.296C212.483,431.847,216.013,428.448,216.176,424.152z" fill="#ff4c3b"/>\n' + '                                                <path d="M323.48,108.52c-3.124-3.123-8.188-3.123-11.312,0L226.2,194.48c-6.495-2.896-13.914-2.896-20.408,0l-40.704-40.704     c-3.178-3.069-8.243-2.981-11.312,0.197c-2.994,3.1-2.994,8.015,0,11.115l40.624,40.624c-5.704,11.94-0.648,26.244,11.293,31.947     c9.165,4.378,20.095,2.501,27.275-4.683c7.219-7.158,9.078-18.118,4.624-27.256l85.888-85.888     C326.603,116.708,326.603,111.644,323.48,108.52z M221.658,221.654c-0.001,0.001-0.001,0.001-0.002,0.002     c-3.164,3.025-8.148,3.025-11.312,0c-3.125-3.124-3.125-8.189-0.002-11.314c3.124-3.125,8.189-3.125,11.314-0.002     C224.781,213.464,224.781,218.53,221.658,221.654z" fill="#ff4c3b"/>\n' + "                                              </g>\n" + "                                           </g>\n" + "                                       </g>\n" + "                                    </svg>";
const svgoffer = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -14 512.00001 512">\n' + "                                        <path\n" + '                                            d="m136.964844 308.234375c4.78125-2.757813 6.417968-8.878906 3.660156-13.660156-2.761719-4.777344-8.878906-6.417969-13.660156-3.660157-4.78125 2.761719-6.421875 8.882813-3.660156 13.660157 2.757812 4.78125 8.878906 6.421875 13.660156 3.660156zm0 0"\n' + '                                            fill="#ff4c3b"/>\n' + "                                        <path\n" + '                                            d="m95.984375 377.253906 50.359375 87.230469c10.867188 18.84375 35.3125 25.820313 54.644531 14.644531 19.128907-11.054687 25.703125-35.496094 14.636719-54.640625l-30-51.96875 25.980469-15c4.78125-2.765625 6.421875-8.878906 3.660156-13.660156l-13.003906-22.523437c1.550781-.300782 11.746093-2.300782 191.539062-37.570313 22.226563-1.207031 35.542969-25.515625 24.316407-44.949219l-33.234376-57.5625 21.238282-32.167968c2.085937-3.164063 2.210937-7.230469.316406-10.511719l-20-34.640625c-1.894531-3.28125-5.492188-5.203125-9.261719-4.980469l-38.472656 2.308594-36.894531-63.90625c-5.34375-9.257813-14.917969-14.863281-25.605469-14.996094-.128906-.003906-.253906-.003906-.382813-.003906-10.328124 0-19.703124 5.140625-25.257812 13.832031l-130.632812 166.414062-84.925782 49.03125c-33.402344 19.277344-44.972656 62.128907-25.621094 95.621094 17.679688 30.625 54.953126 42.671875 86.601563 30zm102.324219 57.238282c5.523437 9.554687 2.253906 21.78125-7.328125 27.316406-9.613281 5.558594-21.855469 2.144531-27.316407-7.320313l-50-86.613281 34.640626-20c57.867187 100.242188 49.074218 85.011719 50.003906 86.617188zm-22.683594-79.296876-10-17.320312 17.320312-10 10 17.320312zm196.582031-235.910156 13.820313 23.9375-12.324219 18.664063-23.820313-41.261719zm-104.917969-72.132812c2.683594-4.390625 6.941407-4.84375 8.667969-4.796875 1.707031.019531 5.960938.550781 8.527344 4.996093l116.3125 201.464844c3.789063 6.558594-.816406 14.804688-8.414063 14.992188-1.363281.03125-1.992187.277344-5.484374.929687l-123.035157-213.105469c2.582031-3.320312 2.914063-3.640624 3.425781-4.480468zm-16.734374 21.433594 115.597656 200.222656-174.460938 34.21875-53.046875-91.878906zm-223.851563 268.667968c-4.390625-7.597656-6.710937-16.222656-6.710937-24.949218 0-17.835938 9.585937-34.445313 25.011718-43.351563l77.941406-45 50 86.601563-77.941406 45.003906c-23.878906 13.78125-54.515625 5.570312-68.300781-18.304688zm0 0"\n' + '                                            fill="#ff4c3b"/>\n' + "                                        <path\n" + '                                            d="m105.984375 314.574219c-2.761719-4.78125-8.878906-6.421875-13.660156-3.660157l-17.320313 10c-4.773437 2.757813-10.902344 1.113282-13.660156-3.660156-2.761719-4.78125-8.878906-6.421875-13.660156-3.660156s-6.421875 8.878906-3.660156 13.660156c8.230468 14.257813 26.589843 19.285156 40.980468 10.980469l17.320313-10c4.78125-2.761719 6.421875-8.875 3.660156-13.660156zm0 0"\n' + '                                            fill="#ff4c3b"/>\n' + "                                        <path\n" + '                                            d="m497.136719 43.746094-55.722657 31.007812c-4.824218 2.6875-6.5625 8.777344-3.875 13.601563 2.679688 4.820312 8.765626 6.566406 13.601563 3.875l55.71875-31.007813c4.828125-2.6875 6.5625-8.777344 3.875-13.601562-2.683594-4.828125-8.773437-6.5625-13.597656-3.875zm0 0"\n' + '                                            fill="#ff4c3b"/>\n' + "                                        <path\n" + '                                            d="m491.292969 147.316406-38.636719-10.351562c-5.335938-1.429688-10.820312 1.734375-12.25 7.070312-1.429688 5.335938 1.738281 10.816406 7.074219 12.246094l38.640625 10.351562c5.367187 1.441407 10.824218-1.773437 12.246094-7.070312 1.429687-5.335938-1.738282-10.820312-7.074219-12.246094zm0 0"\n' + '                                            fill="#ff4c3b"/>\n' + "                                        <path\n" + '                                            d="m394.199219 7.414062-10.363281 38.640626c-1.429688 5.335937 1.734374 10.816406 7.070312 12.25 5.332031 1.425781 10.816406-1.730469 12.25-7.070313l10.359375-38.640625c1.429687-5.335938-1.734375-10.820312-7.070313-12.25-5.332031-1.429688-10.816406 1.734375-12.246093 7.070312zm0 0"\n' + '                                            fill="#ff4c3b"/>\n' + "                                    </svg>";
const svgpayment = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512px" height="512px">\n' + "                                                 <g>\n" + "                                                    <g>\n" + "                                                       <g>\n" + '                                                          <path d="M498.409,175.706L336.283,13.582c-8.752-8.751-20.423-13.571-32.865-13.571c-12.441,0-24.113,4.818-32.865,13.569     L13.571,270.563C4.82,279.315,0,290.985,0,303.427c0,12.442,4.82,24.114,13.571,32.864l19.992,19.992     c0.002,0.001,0.003,0.003,0.005,0.005c0.002,0.002,0.004,0.004,0.006,0.006l134.36,134.36H149.33     c-5.89,0-10.666,4.775-10.666,10.666c0,5.89,4.776,10.666,10.666,10.666h59.189c0.014,0,0.027,0.001,0.041,0.001     s0.027-0.001,0.041-0.001l154.053,0.002c5.89,0,10.666-4.776,10.666-10.666c0-5.891-4.776-10.666-10.666-10.666l-113.464-0.002     L498.41,241.434C516.53,223.312,516.53,193.826,498.409,175.706z M483.325,226.35L226.341,483.334     c-4.713,4.712-11.013,7.31-17.742,7.32h-0.081c-6.727-0.011-13.025-2.608-17.736-7.32L56.195,348.746L302.99,101.949     c4.165-4.165,4.165-10.919,0-15.084c-4.166-4.165-10.918-4.165-15.085,0.001L41.11,333.663l-12.456-12.456     c-4.721-4.721-7.321-11.035-7.321-17.779c0-6.744,2.6-13.059,7.322-17.781L285.637,28.665c4.722-4.721,11.037-7.321,17.781-7.321     c6.744,0,13.059,2.6,17.781,7.322l57.703,57.702l-246.798,246.8c-4.165,4.164-4.165,10.918,0,15.085     c2.083,2.082,4.813,3.123,7.542,3.123c2.729,0,5.459-1.042,7.542-3.124l246.798-246.799l89.339,89.336     C493.128,200.593,493.127,216.546,483.325,226.35z" fill="#ff4c3b"/>\n' + '                                                          <path d="M262.801,308.064c-4.165-4.165-10.917-4.164-15.085,0l-83.934,83.933c-4.165,4.165-4.165,10.918,0,15.085     c2.083,2.083,4.813,3.124,7.542,3.124c2.729,0,5.459-1.042,7.542-3.124l83.934-83.933     C266.966,318.982,266.966,312.229,262.801,308.064z" fill="#ff4c3b"/>\n' + '                                                          <path d="M228.375,387.741l-34.425,34.425c-4.165,4.165-4.165,10.919,0,15.085c2.083,2.082,4.813,3.124,7.542,3.124     c2.731,0,5.459-1.042,7.542-3.124l34.425-34.425c4.165-4.165,4.165-10.919,0-15.085     C239.294,383.575,232.543,383.575,228.375,387.741z" fill="#ff4c3b"/>\n' + '                                                          <path d="M260.054,356.065l-4.525,4.524c-4.166,4.165-4.166,10.918-0.001,15.085c2.082,2.083,4.813,3.125,7.542,3.125     c2.729,0,5.459-1.042,7.541-3.125l4.525-4.524c4.166-4.165,4.166-10.918,0.001-15.084     C270.974,351.901,264.219,351.9,260.054,356.065z" fill="#ff4c3b"/>\n' + '                                                          <path d="M407.073,163.793c-2-2-4.713-3.124-7.542-3.124c-2.829,0-5.541,1.124-7.542,3.124l-45.255,45.254     c-2,2.001-3.124,4.713-3.124,7.542s1.124,5.542,3.124,7.542l30.17,30.167c2.083,2.083,4.813,3.124,7.542,3.124     c2.731,0,5.459-1.042,7.542-3.124l45.253-45.252c4.165-4.165,4.165-10.919,0-15.084L407.073,163.793z M384.445,231.673     l-15.085-15.084l30.17-30.169l15.084,15.085L384.445,231.673z" fill="#ff4c3b"/>\n' + '                                                          <path d="M320.339,80.186c2.731,0,5.461-1.042,7.543-3.126l4.525-4.527c4.164-4.166,4.163-10.92-0.003-15.084     c-4.165-4.164-10.92-4.163-15.084,0.003l-4.525,4.527c-4.164,4.166-4.163,10.92,0.003,15.084     C314.881,79.146,317.609,80.186,320.339,80.186z" fill="#ff4c3b"/>\n' + '                                                          <path d="M107.215,358.057l-4.525,4.525c-4.165,4.164-4.165,10.918,0,15.085c2.083,2.082,4.813,3.123,7.542,3.123     s5.459-1.041,7.542-3.123l4.525-4.525c4.165-4.166,4.165-10.92,0-15.085C118.133,353.891,111.381,353.891,107.215,358.057z" fill="#ff4c3b"/>\n' + "                                                       </g>\n" + "                                                    </g>\n" + "                                                 </g>\n" + "                                                </svg>";
const svgRings = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enableBackground="new 0 0 512 51" xmlSpace="preserve"> <g> <g> <path d="M371.769,176.364l30.47-30.47l-21.71-25.265h-52.305l-21.71,25.265l30.47,30.47 c-29.557,3.279-57.658,14.863-80.982,33.507c-23.324-18.644-51.425-30.228-80.982-33.507l30.47-30.47l-21.71-25.265h-52.305 l-21.71,25.265l30.47,30.47C61.471,185.049,0,251.988,0,333.024c0,86.914,70.71,157.625,157.625,157.625 c35.834,0,70.513-12.2,98.375-34.472c27.862,22.272,62.542,34.472,98.375,34.472C441.29,490.649,512,419.938,512,333.024 C512,251.988,450.529,185.049,371.769,176.364z M327.237,145.11l7.97-9.275h38.337l7.969,9.275l-27.138,27.138L327.237,145.11z M130.486,145.11l7.97-9.275h38.337l7.969,9.275l-27.138,27.138L130.486,145.11z M157.625,475.441 c-78.529,0-142.417-63.888-142.417-142.417s63.888-142.417,142.417-142.417c34.337,0,67.503,12.392,93.387,34.894 c8.035,6.984,15.308,14.898,21.618,23.522c17.933,24.508,27.412,53.555,27.412,84.002c0,27.573-7.775,54-22.563,76.946 c-0.192-0.192-0.376-0.39-0.566-0.583c-0.834-0.847-1.659-1.702-2.465-2.574c-0.357-0.386-0.705-0.781-1.055-1.172 c-0.661-0.736-1.315-1.479-1.955-2.233c-0.368-0.433-0.731-0.869-1.092-1.308c-0.618-0.751-1.225-1.513-1.823-2.28 c-0.337-0.432-0.675-0.863-1.005-1.3c-0.655-0.867-1.293-1.748-1.921-2.636c-0.195-0.275-0.396-0.545-0.589-0.823 c10.887-18.81,16.619-40.153,16.619-62.037c0-21.925-5.759-43.301-16.685-62.137l0.061-0.096l-2.58-4.072 c-4.983-7.859-10.817-15.117-17.407-21.662c-2.197-2.182-4.478-4.285-6.839-6.304l-6.234-5.332l-0.161,0.22 c-21.339-15.929-47.37-24.62-74.156-24.62c-68.375,0-124.002,55.628-124.002,124.002s55.627,124.001,124.002,124.001 c26.853,0,52.947-8.733,74.315-24.737c0.095,0.118,0.196,0.231,0.291,0.348c0.539,0.661,1.092,1.311,1.641,1.964 c0.423,0.501,0.841,1.007,1.269,1.503c0.586,0.677,1.185,1.342,1.782,2.01c0.409,0.457,0.812,0.92,1.226,1.372 c0.656,0.716,1.326,1.418,1.995,2.122c0.37,0.389,0.734,0.787,1.108,1.172c0.815,0.841,1.646,1.666,2.48,2.488 c0.228,0.225,0.449,0.456,0.677,0.68C219.606,465.022,189.107,475.441,157.625,475.441z M289.077,246.04 c18.767-14.095,41.689-21.81,65.298-21.81c59.989,0,108.794,48.805,108.794,108.794c0,59.989-48.805,108.792-108.794,108.792 c-23.608,0-46.531-7.715-65.298-21.81c17.142-25.819,26.172-55.735,26.172-86.984C315.249,301.775,306.22,271.858,289.077,246.04z M256,379.489c-6.834-14.454-10.418-30.285-10.418-46.465c0-16.18,3.584-32.012,10.418-46.465 c6.834,14.454,10.418,30.285,10.418,46.465C266.418,349.204,262.834,365.035,256,379.489z M222.923,246.04 c-17.142,25.819-26.172,55.735-26.172,86.984c0,31.248,9.029,61.165,26.172,86.984c-18.767,14.095-41.69,21.81-65.298,21.81 c-59.989,0-108.794-48.804-108.794-108.793S97.636,224.23,157.625,224.23C181.234,224.23,204.156,231.945,222.923,246.04z M354.375,475.441c-34.337,0-67.503-12.392-93.387-34.894c-8.034-6.983-15.308-14.898-21.618-23.522 c-17.933-24.508-27.412-53.555-27.412-84.001c0-27.573,7.775-54.001,22.562-76.946c0.194,0.194,0.38,0.394,0.572,0.589 c0.833,0.845,1.656,1.698,2.46,2.569c0.355,0.384,0.701,0.778,1.05,1.167c0.664,0.739,1.32,1.485,1.964,2.243 c0.364,0.429,0.724,0.862,1.082,1.296c0.622,0.756,1.233,1.522,1.835,2.294c0.334,0.428,0.669,0.855,0.997,1.289 c0.655,0.867,1.292,1.748,1.921,2.635c0.196,0.277,0.398,0.548,0.591,0.827c-10.887,18.81-16.619,40.153-16.619,62.038 c0,21.925,5.759,43.3,16.685,62.136l-0.062,0.096l2.581,4.072c6.643,10.478,14.8,19.888,24.245,27.966l6.234,5.332l0.161-0.221 c21.34,15.929,47.369,24.62,74.156,24.62c68.375,0,124.002-55.626,124.002-124.001s-55.626-124.001-124.002-124.001 c-26.853,0-52.947,8.733-74.315,24.738c-0.095-0.118-0.196-0.231-0.291-0.348c-0.538-0.66-1.089-1.309-1.638-1.96 c-0.424-0.503-0.844-1.011-1.274-1.508c-0.58-0.67-1.173-1.329-1.764-1.989c-0.416-0.464-0.825-0.935-1.246-1.394 c-0.642-0.701-1.298-1.387-1.951-2.075c-0.385-0.406-0.763-0.818-1.153-1.221c-0.781-0.805-1.577-1.594-2.373-2.382 c-0.262-0.259-0.516-0.525-0.78-0.783c24.804-19.075,55.302-29.493,86.786-29.493c78.529,0,142.417,63.888,142.417,142.417 C496.792,411.554,432.904,475.441,354.375,475.441z"/> </g> </g> <g> <g> <rect x="248.396" y="21.351" width="15.208" height="47.344" /> </g> </g> <g> <g><rect x="294.983" y="52.217" transform="matrix(0.4198 -0.9076 0.9076 0.4198 130.5873 323.9224)" width="47.343" height="15.207" /> </g> </g> <g> <g> <rect x="185.738" y="36.156" transform="matrix(0.9076 -0.4198 0.4198 0.9076 -7.2537 86.6932)" width="15.207" height="47.343" /> </g> </g> </svg>';
const svgDiamond = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.003 512.003" enableBackground="new 0 0 512.003 512.003" xmlSpace="preserve"> <g> <g> <path d="M381.176,33.536c-4.787-2.764-10.915-1.122-13.679,3.665c-2.764,4.797-1.122,10.915,3.665,13.679 c4.787,2.774,10.915,1.132,13.679-3.665C387.605,42.429,385.963,36.31,381.176,33.536z"/> </g> </g> <g> <g> <path d="M256.002,0c-5.528,0-10.014,4.486-10.014,10.014c0,5.528,4.486,10.014,10.014,10.014c5.528,0,10.014-4.486,10.014-10.014 C266.016,4.486,261.53,0,256.002,0z"/> </g> </g> <g> <g> <path d="M256.002,266.369c-5.528,0-10.014,4.486-10.014,10.014c0,5.528,4.486,10.014,10.014,10.014 c5.528,0,10.014-4.486,10.014-10.014C266.016,270.856,261.53,266.369,256.002,266.369z"/> </g> </g> <g> <g> <path d="M144.508,37.202c-2.764-4.787-8.892-6.429-13.679-3.665c-4.787,2.774-6.429,8.892-3.665,13.679 c2.764,4.797,8.892,6.439,13.679,3.665C145.629,48.117,147.272,41.998,144.508,37.202z"/> </g> </g> <g> <g> <path d="M256.002,40.056c-5.53,0-10.014,4.483-10.014,10.014v40.056c0,5.531,4.484,10.014,10.014,10.014 s10.014-4.483,10.014-10.014V50.069C266.016,44.539,261.532,40.056,256.002,40.056z"/> </g> </g> <g> <g> <path d="M184.564,106.588L164.537,71.89c-2.766-4.79-8.889-6.435-13.679-3.667c-4.79,2.765-6.432,8.888-3.667,13.679 l20.028,34.699c1.856,3.213,5.221,5.009,8.683,5.009c1.697,0,3.42-0.433,4.996-1.343 C185.687,117.502,187.329,111.378,184.564,106.588z"/> </g> </g> <g> <g> <path d="M361.147,68.225c-4.793-2.766-10.914-1.124-13.679,3.667l-20.028,34.698c-2.765,4.789-1.123,10.913,3.667,13.678 c1.577,0.91,3.298,1.343,4.996,1.343c3.462,0,6.827-1.797,8.683-5.009l20.028-34.698 C367.579,77.114,365.937,70.989,361.147,68.225z"/> </g> </g> <g> <g> <path d="M466.291,276.315c-0.001-0.123-0.008-0.245-0.014-0.369c-0.006-0.128-0.014-0.256-0.024-0.385 c-0.007-0.082-0.008-0.165-0.017-0.246c-0.012-0.112-0.032-0.224-0.047-0.335c-0.018-0.125-0.039-0.25-0.061-0.376 c-0.017-0.094-0.028-0.189-0.048-0.282c-0.02-0.093-0.047-0.185-0.069-0.278c-0.031-0.128-0.065-0.256-0.101-0.384 c-0.029-0.103-0.054-0.208-0.086-0.31c-0.023-0.072-0.053-0.143-0.078-0.215c-0.047-0.136-0.097-0.271-0.149-0.406 c-0.042-0.107-0.081-0.215-0.126-0.32c-0.024-0.055-0.053-0.109-0.078-0.164c-0.064-0.141-0.132-0.279-0.202-0.418 c-0.054-0.106-0.106-0.212-0.164-0.315c-0.01-0.018-0.017-0.036-0.027-0.054L404.995,165.31c-0.03-0.053-0.068-0.098-0.099-0.15 c-0.167-0.285-0.349-0.562-0.545-0.829c-0.051-0.07-0.1-0.141-0.152-0.21c-0.249-0.323-0.516-0.636-0.805-0.928 c-0.004-0.004-0.009-0.008-0.014-0.013c-0.274-0.276-0.571-0.533-0.879-0.778c-0.077-0.061-0.155-0.118-0.233-0.176 c-0.248-0.185-0.508-0.359-0.777-0.524c-0.087-0.053-0.172-0.109-0.261-0.159c-0.341-0.194-0.693-0.375-1.063-0.531 c-0.004-0.002-0.008-0.004-0.013-0.006c-0.001-0.001-0.003-0.001-0.004-0.002c-0.372-0.156-0.75-0.28-1.129-0.389 c-0.106-0.03-0.213-0.053-0.32-0.08c-0.298-0.075-0.597-0.135-0.897-0.182c-0.107-0.016-0.212-0.034-0.32-0.047 c-0.401-0.049-0.802-0.08-1.201-0.08c-0.001,0-0.002,0-0.004,0h-0.002c-0.017,0-0.033,0-0.05,0H256.002h-0.026H115.824 c-0.415-0.001-0.83,0.031-1.247,0.082c-0.097,0.012-0.192,0.029-0.288,0.044c-0.303,0.047-0.606,0.108-0.908,0.184 c-0.112,0.028-0.223,0.054-0.333,0.086c-0.327,0.094-0.652,0.206-0.974,0.335c-0.054,0.022-0.109,0.037-0.163,0.06 c-0.009,0.004-0.019,0.006-0.028,0.01c-0.362,0.154-0.706,0.332-1.039,0.523c-0.084,0.048-0.163,0.102-0.245,0.152 c-0.27,0.164-0.53,0.339-0.779,0.526c-0.082,0.061-0.163,0.123-0.244,0.187c-0.278,0.221-0.544,0.455-0.794,0.702 c-0.033,0.032-0.068,0.061-0.1,0.094c-0.287,0.291-0.554,0.6-0.801,0.922c-0.047,0.061-0.089,0.126-0.135,0.188 c-0.197,0.269-0.381,0.548-0.549,0.835c-0.03,0.052-0.068,0.097-0.098,0.149L47.134,271.233c-0.002,0.003-0.003,0.005-0.005,0.008 l-0.119,0.209c-0.01,0.018-0.017,0.037-0.028,0.055c-0.062,0.111-0.118,0.225-0.176,0.339c-0.072,0.141-0.142,0.282-0.207,0.427 c-0.02,0.044-0.042,0.088-0.062,0.132c-0.049,0.113-0.091,0.229-0.136,0.345c-0.054,0.138-0.106,0.276-0.154,0.417 c-0.021,0.06-0.045,0.12-0.064,0.18c-0.035,0.11-0.061,0.223-0.093,0.335c-0.037,0.132-0.074,0.264-0.105,0.399 c-0.019,0.08-0.042,0.159-0.059,0.239c-0.021,0.101-0.034,0.205-0.052,0.307c-0.023,0.13-0.046,0.26-0.064,0.393 c-0.013,0.098-0.03,0.196-0.04,0.294c-0.01,0.09-0.011,0.181-0.019,0.271c-0.011,0.133-0.021,0.265-0.026,0.399 c-0.004,0.11-0.01,0.22-0.011,0.33c0,0.023-0.003,0.046-0.003,0.069c0,0.062,0.008,0.123,0.009,0.185 c0.002,0.132,0.007,0.264,0.014,0.397c0.006,0.109,0.012,0.218,0.022,0.327c0.008,0.093,0.019,0.184,0.03,0.276 c0.015,0.126,0.033,0.251,0.053,0.377c0.016,0.099,0.031,0.198,0.05,0.296c0.019,0.102,0.039,0.203,0.062,0.304 c0.027,0.121,0.058,0.24,0.089,0.36c0.023,0.089,0.047,0.178,0.072,0.267c0.031,0.107,0.062,0.213,0.096,0.319 c0.037,0.114,0.079,0.226,0.12,0.338c0.032,0.087,0.065,0.174,0.099,0.261c0.042,0.104,0.083,0.208,0.128,0.311 c0.045,0.104,0.095,0.206,0.144,0.308c0.045,0.093,0.091,0.185,0.138,0.277c0.051,0.097,0.101,0.194,0.155,0.29 c0.051,0.091,0.104,0.18,0.158,0.27c0.06,0.1,0.123,0.199,0.187,0.297c0.059,0.091,0.12,0.18,0.182,0.269 c0.055,0.078,0.109,0.156,0.167,0.234c0.074,0.1,0.15,0.197,0.228,0.295c0.071,0.088,0.145,0.173,0.218,0.259 c0.042,0.049,0.077,0.101,0.121,0.15L249.784,508.66c0.247,0.277,0.511,0.538,0.785,0.783c0.04,0.035,0.083,0.065,0.123,0.1 c0.289,0.251,0.592,0.482,0.905,0.697c0.102,0.07,0.206,0.136,0.31,0.202c0.292,0.184,0.592,0.352,0.9,0.506 c0.085,0.042,0.166,0.089,0.252,0.129c0.389,0.179,0.788,0.332,1.198,0.461c0.098,0.031,0.198,0.053,0.297,0.08 c0.329,0.092,0.663,0.167,1.001,0.226c0.124,0.021,0.247,0.043,0.372,0.06c0.437,0.058,0.876,0.098,1.323,0.098 c0.011,0,0.021,0,0.031,0c0.448-0.001,0.889-0.043,1.327-0.103c0.125-0.017,0.247-0.039,0.372-0.061 c0.339-0.06,0.675-0.136,1.005-0.23c0.099-0.028,0.199-0.05,0.297-0.082c0.41-0.13,0.81-0.286,1.2-0.468 c0.085-0.04,0.166-0.087,0.25-0.129c0.309-0.155,0.61-0.326,0.902-0.513c0.105-0.067,0.208-0.134,0.311-0.205 c0.31-0.215,0.61-0.446,0.896-0.696c0.043-0.038,0.09-0.071,0.133-0.109c0.274-0.249,0.538-0.512,0.786-0.793L463.79,283.01 c0.036-0.041,0.065-0.085,0.1-0.126c0.066-0.077,0.132-0.155,0.196-0.234c0.086-0.107,0.168-0.215,0.249-0.325 c0.056-0.076,0.111-0.152,0.165-0.229c0.056-0.08,0.11-0.162,0.164-0.244c0.07-0.107,0.136-0.215,0.202-0.324 c0.054-0.09,0.108-0.178,0.159-0.269c0.048-0.087,0.093-0.175,0.139-0.264c0.051-0.099,0.1-0.2,0.148-0.301 c0.05-0.104,0.101-0.207,0.147-0.312c0.041-0.094,0.077-0.189,0.115-0.284c0.037-0.093,0.072-0.187,0.106-0.282 c0.042-0.115,0.086-0.23,0.124-0.346c0.031-0.096,0.057-0.193,0.086-0.29c0.028-0.096,0.052-0.193,0.077-0.29 c0.031-0.122,0.065-0.243,0.091-0.367c0.02-0.091,0.037-0.183,0.054-0.276c0.02-0.107,0.036-0.215,0.053-0.323 c0.019-0.126,0.039-0.251,0.054-0.378c0.01-0.082,0.019-0.165,0.026-0.248c0.011-0.12,0.016-0.24,0.023-0.362 c0.007-0.129,0.013-0.258,0.015-0.386c0.001-0.054,0.008-0.107,0.008-0.161C466.294,276.36,466.291,276.338,466.291,276.315z M381.223,180.25l-32.468,77.478l-70.172-77.478H381.223z M233.58,180.25l-69.537,77.586l-33.079-77.586H233.58z M114.542,192.8 l31.367,73.569H72.9L114.542,192.8z M78.098,286.397h76.348l69.721,163.517L78.098,286.397z M257.174,476.267l-80.956-189.87 h39.729c5.53,0,10.014-4.483,10.014-10.014c0-5.531-4.484-10.014-10.014-10.014h-32.656l72.751-81.174l73.519,81.174h-33.502 c-5.53,0-10.014,4.483-10.014,10.014c0,5.531,4.484,10.014,10.014,10.014h40.683L257.174,476.267z M290.019,449.71l68.438-163.313 h75.636L290.019,449.71z M366.848,266.369l30.767-73.418l41.502,73.418H366.848z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>';
const svgNeckles = ' <svg height="382pt" viewBox="0 -5 382.40085 382" width="382pt" xmlns="http://www.w3.org/2000/svg"><path d="m296.328125 83.535156c-2.421875 0-4.761719-1.289062-6-3.558594-1.808594-3.308593-.589844-7.457031 2.722656-9.261718 3.808594-2.078125 6.175781-6.0625 6.175781-10.398438 0-6.523437-5.304687-11.832031-11.832031-11.832031-4.171875 0-8.082031 2.234375-10.203125 5.835937-1.90625 3.25-6.089844 4.335938-9.347656 2.410157-3.246094-1.910157-4.328125-6.09375-2.414062-9.347657 4.566406-7.742187 12.980468-12.550781 21.964843-12.550781 14.050781 0 25.484375 11.433594 25.484375 25.484375 0 9.335938-5.09375 17.914063-13.289062 22.382813-1.039063.566406-2.160156.835937-3.261719.835937zm0 0" /><path d="m90.296875 85.203125c-.566406 0-1.148437-.070313-1.722656-.21875-11.222657-2.921875-19.054688-13.066406-19.054688-24.667969 0-14.046875 11.433594-25.484375 25.484375-25.484375 9.386719 0 17.984375 5.136719 22.441406 13.402344 1.789063 3.320313.546876 7.460937-2.769531 9.25-3.3125 1.785156-7.460937.546875-9.25-2.769531-2.070312-3.839844-6.0625-6.226563-10.421875-6.226563-6.523437 0-11.832031 5.304688-11.832031 11.832031 0 5.386719 3.636719 10.097657 8.839844 11.453126 3.652343.949218 5.839843 4.679687 4.886719 8.328124-.800782 3.070313-3.570313 5.101563-6.601563 5.101563zm0 0" /><path d="m191.199219 373.125c-24.214844 0-48.429688-6.265625-70.027344-18.796875-42.421875-24.621094-75.292969-61.542969-97.695313-109.738281-15.359374-33.039063-23.476562-70.839844-23.476562-109.320313v-18.835937c0-3.53125 2.699219-6.480469 6.21875-6.800782.164062-.011718 16.816406-1.601562 37.171875-9.488281 3.488281-1.367187 7.464844.378907 8.832031 3.898438 1.363282 3.515625-.382812 7.46875-3.898437 8.832031-14.679688 5.6875-27.457031 8.351562-34.667969 9.519531v12.875c0 36.503907 7.675781 72.316407 22.203125 103.566407 21.203125 45.609374 52.214844 80.492187 92.167969 103.683593 38.96875 22.609375 87.382812 22.609375 126.347656 0 42.171875-24.472656 74.300781-61.859375 95.5-111.125 12.523438-29.109375 18.875-61.328125 18.875-95.769531v-13.414062c-9.3125-1.847657-28.265625-6.714844-49.308594-18.472657-3.292968-1.839843-4.46875-6-2.628906-9.289062 1.835938-3.289063 5.996094-4.46875 9.289062-2.628907 26.792969 14.976563 50.027344 17.808594 50.257813 17.835938 3.445313.394531 6.042969 3.3125 6.042969 6.78125v19.1875c0 36.308594-6.722656 70.347656-19.988282 101.167969-22.382812 52.015625-56.425781 91.5625-101.1875 117.535156-21.597656 12.53125-45.8125 18.796875-70.027343 18.796875zm0 0" /><path d="m90.296875 86.324219c-1.84375 0-3.679687-.742188-5.027344-2.203125-2.550781-2.773438-2.375-7.09375.398438-9.648438 9.933593-9.140625 17.871093-19.804687 23.613281-31.71875v-35.726562c0-3.769532 3.054688-6.828125 6.824219-6.828125h150.1875c3.769531 0 6.828125 3.058593 6.828125 6.828125v35.277344c7.515625 11.683593 16.597656 22.195312 27.007812 31.277343 2.839844 2.476563 3.136719 6.789063.660156 9.632813-2.472656 2.847656-6.785156 3.136718-9.632812.660156-11.914062-10.390625-22.226562-22.492188-30.652344-35.964844-.675781-1.089844-1.039062-2.339844-1.039062-3.621094v-30.433593h-136.53125v30.429687c0 .996094-.21875 1.976563-.636719 2.878906-6.539063 14.082032-15.753906 26.652344-27.378906 37.359376-1.3125 1.203124-2.972657 1.800781-4.621094 1.800781zm0 0" /><path d="m295.410156 224.699219c-15.496094 0-28.101562-12.609375-28.101562-28.105469s12.605468-28.105469 28.101562-28.105469 28.105469 12.609375 28.105469 28.105469-12.609375 28.105469-28.105469 28.105469zm0-42.554688c-7.964844 0-14.449218 6.484375-14.449218 14.449219 0 7.972656 6.484374 14.457031 14.449218 14.457031 7.96875 0 14.453125-6.484375 14.453125-14.457031 0-7.96875-6.484375-14.449219-14.453125-14.449219zm0 0" /><path d="m311.441406 182.675781c-14.425781 0-26.160156-11.734375-26.160156-26.160156 0-14.429687 11.734375-26.164063 26.160156-26.164063 14.429688 0 26.164063 11.734376 26.164063 26.164063 0 14.425781-11.734375 26.160156-26.164063 26.160156zm0-38.671875c-6.894531 0-12.507812 5.613282-12.507812 12.511719 0 6.894531 5.613281 12.507813 12.507812 12.507813 6.898438 0 12.511719-5.613282 12.511719-12.507813 0-6.898437-5.613281-12.511719-12.511719-12.511719zm0 0" /><path d="m86.988281 224.699219c-15.496093 0-28.105469-12.609375-28.105469-28.105469s12.609376-28.105469 28.105469-28.105469c15.496094 0 28.105469 12.609375 28.105469 28.105469s-12.605469 28.105469-28.105469 28.105469zm0-42.554688c-7.96875 0-14.453125 6.484375-14.453125 14.449219 0 7.972656 6.484375 14.457031 14.453125 14.457031s14.449219-6.484375 14.449219-14.457031c0-7.96875-6.480469-14.449219-14.449219-14.449219zm0 0" /><path d="m70.957031 182.675781c-14.425781 0-26.164062-11.734375-26.164062-26.160156 0-14.429687 11.738281-26.164063 26.164062-26.164063s26.164063 11.734376 26.164063 26.164063c0 14.425781-11.738282 26.160156-26.164063 26.160156zm0-38.671875c-6.898437 0-12.511719 5.613282-12.511719 12.511719 0 6.894531 5.613282 12.507813 12.511719 12.507813 6.894531 0 12.507813-5.613282 12.507813-12.507813 0-6.898437-5.613282-12.511719-12.507813-12.511719zm0 0" /><path d="m311.441406 107.085938c-12.527344 0-22.714844-10.191407-22.714844-22.71875 0-12.523438 10.1875-22.71875 22.714844-22.71875s22.71875 10.195312 22.71875 22.71875c0 12.527343-10.191406 22.71875-22.71875 22.71875zm0-31.785157c-4.996094 0-9.0625 4.066407-9.0625 9.066407 0 4.996093 4.066406 9.066406 9.0625 9.066406 5 0 9.066406-4.070313 9.066406-9.066406 0-5-4.066406-9.066407-9.066406-9.066407zm0 0" /><path d="m70.957031 107.085938c-12.527343 0-22.71875-10.191407-22.71875-22.71875 0-12.523438 10.191407-22.71875 22.71875-22.71875 12.523438 0 22.714844 10.195312 22.714844 22.71875 0 12.527343-10.1875 22.71875-22.714844 22.71875zm0-31.785157c-5 0-9.066406 4.066407-9.066406 9.066407 0 4.996093 4.066406 9.066406 9.066406 9.066406 4.996094 0 9.0625-4.070313 9.0625-9.066406 0-5-4.066406-9.066407-9.0625-9.066407zm0 0" /><path d="m319.460938 141.917969c-14.050782 0-25.484376-11.433594-25.484376-25.484375 0-7.980469 3.628907-15.347656 9.957032-20.214844 2.988281-2.292969 7.273437-1.738281 9.574218 1.253906 2.296876 2.988282 1.738282 7.277344-1.253906 9.570313-2.9375 2.261719-4.625 5.679687-4.625 9.386719 0 6.523437 5.304688 11.832031 11.832032 11.832031 6.523437 0 11.828124-5.304688 11.828124-11.832031 0-5.113282-3.253906-9.628907-8.101562-11.234376-3.582031-1.1875-5.515625-5.050781-4.332031-8.632812 1.1875-3.574219 5.050781-5.511719 8.632812-4.328125 10.4375 3.464844 17.457031 13.191406 17.457031 24.195313-.003906 14.054687-11.433593 25.488281-25.484374 25.488281zm0 0" /><path d="m62.941406 141.917969c-14.050781 0-25.484375-11.433594-25.484375-25.484375 0-14.054688 11.433594-25.488282 25.484375-25.488282 14.050782 0 25.484375 11.433594 25.484375 25.488282-.003906 14.050781-11.4375 25.484375-25.484375 25.484375zm0-37.316407c-6.523437 0-11.832031 5.308594-11.832031 11.832032 0 6.527344 5.304687 11.832031 11.832031 11.832031 6.523438 0 11.828125-5.304687 11.828125-11.832031 0-6.523438-5.304687-11.832032-11.828125-11.832032zm0 0" /><path d="m111.035156 256.761719c-15.496094 0-28.101562-12.605469-28.101562-28.101563s12.605468-28.105468 28.101562-28.105468 28.109375 12.609374 28.109375 28.105468-12.613281 28.101563-28.109375 28.101563zm0-42.554688c-7.964844 0-14.449218 6.484375-14.449218 14.453125s6.484374 14.453125 14.449218 14.453125c7.972656 0 14.453125-6.484375 14.453125-14.453125s-6.480469-14.453125-14.453125-14.453125zm0 0" /><path d="m143.101562 283.582031c-17.027343 0-30.875-13.847656-30.875-30.875 0-17.023437 13.847657-30.875 30.875-30.875 17.023438 0 30.875 13.851563 30.875 30.875 0 17.027344-13.851562 30.875-30.875 30.875zm0-48.09375c-9.496093 0-17.222656 7.722657-17.222656 17.21875 0 9.496094 7.726563 17.222657 17.222656 17.222657 9.5 0 17.222657-7.726563 17.222657-17.222657 0-9.496093-7.722657-17.21875-17.222657-17.21875zm0 0" /><path d="m271.363281 256.761719c-15.496093 0-28.105469-12.605469-28.105469-28.101563s12.609376-28.105468 28.105469-28.105468c15.496094 0 28.105469 12.609374 28.105469 28.105468s-12.609375 28.101563-28.105469 28.101563zm0-42.554688c-7.96875 0-14.453125 6.484375-14.453125 14.453125s6.484375 14.453125 14.453125 14.453125 14.449219-6.484375 14.449219-14.453125-6.480469-14.453125-14.449219-14.453125zm0 0" /><path d="m239.296875 283.582031c-17.023437 0-30.875-13.847656-30.875-30.875 0-17.023437 13.851563-30.875 30.875-30.875 17.027344 0 30.878906 13.851563 30.878906 30.875-.003906 17.027344-13.851562 30.875-30.878906 30.875zm0-48.09375c-9.496094 0-17.21875 7.722657-17.21875 17.21875 0 9.496094 7.722656 17.222657 17.21875 17.222657s17.222656-7.726563 17.222656-17.222657c0-9.496093-7.726562-17.21875-17.222656-17.21875zm0 0" /><path d="m191.199219 291.601562c-17.027344 0-30.875-13.851562-30.875-30.878906 0-17.023437 13.847656-30.875 30.875-30.875 17.027343 0 30.878906 13.851563 30.878906 30.875 0 17.027344-13.851563 30.878906-30.878906 30.878906zm0-48.097656c-9.496094 0-17.222657 7.722656-17.222657 17.222656 0 9.496094 7.726563 17.222657 17.222657 17.222657 9.496093 0 17.222656-7.726563 17.222656-17.222657 0-9.5-7.726563-17.222656-17.222656-17.222656zm0 0" /></svg>';
const svgWatch = '<svg height="512pt" viewBox="-111 0 512 512.00043" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m8.644531 302.082031 7.21875 92.472657c1.109375 13.289062 12.191407 23.523437 25.523438 23.578124h4.898437l11.289063 72.226563c1.90625 12.488281 12.671875 21.691406 25.300781 21.640625h90.25c12.632812.050781 23.398438-9.160156 25.300781-21.648438l11.289063-72.21875h4.898437c13.34375-.054687 24.429688-10.3125 25.523438-23.609374l7.21875-92.496094c4.671875-11.996094 7.449219-24.644532 8.242187-37.492188h17.46875v8.53125c0 4.714844 3.820313 8.535156 8.535156 8.535156 4.710938 0 8.53125-3.820312 8.53125-8.535156v-34.132812c0-4.710938-3.820312-8.535156-8.53125-8.535156-4.714843 0-8.535156 3.824218-8.535156 8.535156v8.535156h-17.46875c-.789062-12.867188-3.566406-25.535156-8.242187-37.546875l-7.21875-92.476563c-1.109375-13.289062-12.191407-23.523437-25.523438-23.578124h-4.898437l-11.289063-72.226563c-1.90625-12.484375-12.671875-21.6914062-25.300781-21.640625h-90.25c-12.632812-.0507812-23.398438 9.160156-25.300781 21.648438l-11.289063 72.21875h-4.898437c-13.34375.058593-24.429688 10.3125-25.523438 23.613281l-7.21875 92.492187c-11.527343 29.609375-11.527343 62.464844 0 92.074219zm25.488281-54.613281h-16.664062c.789062-11.199219 3.332031-22.199219 7.535156-32.609375.902344-2.292969 1.96875-4.503906 3.027344-6.722656l14.414062 8.320312c2.640626 1.546875 5.910157 1.5625 8.566407.039063 2.65625-1.527344 4.289062-4.359375 4.28125-7.417969-.003907-3.0625-1.652344-5.886719-4.316407-7.402344l-14.367187-8.300781c7.664063-11.339844 17.425781-21.105469 28.765625-28.773438l8.300781 14.375c1.515625 2.664063 4.339844 4.3125 7.402344 4.316407 3.058594.007812 5.890625-1.625 7.417969-4.28125 1.523437-2.65625 1.507812-5.925781-.039063-8.566407l-8.304687-14.378906c12.339844-5.917968 25.671875-9.492187 39.3125-10.546875v16.613281c0 4.714844 3.824218 8.535157 8.535156 8.535157s8.535156-3.820313 8.535156-8.535157v-16.613281c1.046875.085938 2.105469.058594 3.148438.171875 12.554687 1.371094 24.78125 4.878906 36.15625 10.375l-8.296875 14.378906c-1.546875 2.640626-1.5625 5.910157-.039063 8.566407 1.527344 2.65625 4.359375 4.289062 7.421875 4.28125 3.058594-.003907 5.882813-1.652344 7.398438-4.316407l8.292969-14.367187c11.347656 7.65625 21.113281 17.421875 28.773437 28.765625l-14.367187 8.300781c-2.664063 1.515625-4.308594 4.339844-4.316407 7.402344-.007812 3.058594 1.628907 5.890625 4.28125 7.417969 2.65625 1.523437 5.925781 1.507812 8.566407-.039063l14.414062-8.320312c1.066406 2.234375 2.132812 4.472656 3.054688 6.828125 4.183593 10.375 6.71875 21.34375 7.507812 32.503906h-16.664062c-4.714844 0-8.535157 3.820312-8.535157 8.53125 0 4.714844 3.820313 8.535156 8.535157 8.535156h16.664062c-.789062 11.195313-3.332031 22.195313-7.535156 32.605469-.902344 2.292969-1.96875 4.503906-3.027344 6.722656l-14.414062-8.320312c-2.640626-1.546875-5.910157-1.5625-8.566407-.039063-2.652343 1.527344-4.289062 4.359375-4.28125 7.421875.007813 3.058594 1.652344 5.882813 4.316407 7.398438l14.367187 8.300781c-7.664063 11.339844-17.425781 21.109375-28.765625 28.777344l-8.300781-14.378906c-2.375-4.046876-7.566407-5.421876-11.628907-3.074219-4.0625 2.34375-5.46875 7.527343-3.152343 11.605469l8.296875 14.378906c-12.339844 5.917968-25.664063 9.492187-39.304688 10.546875v-16.613281c0-4.714844-3.824218-8.535157-8.535156-8.535157s-8.535156 3.820313-8.535156 8.535157v16.613281c-1.046875-.074219-2.105469-.058594-3.148438-.167969-12.554687-1.371094-24.78125-4.882812-36.152344-10.378906l8.292969-14.378906c2.316407-4.078126.910157-9.261719-3.152343-11.605469-4.0625-2.347657-9.253907-.972657-11.628907 3.074219l-8.292969 14.367187c-11.347656-7.65625-21.113281-17.421875-28.773437-28.765625l14.367187-8.300781c2.664063-1.515625 4.3125-4.339844 4.316407-7.398438.007812-3.0625-1.625-5.894531-4.28125-7.421875-2.65625-1.523437-5.925781-1.507812-8.566407.039063l-14.414062 8.320312c-1.066406-2.234375-2.132812-4.472656-3.054688-6.828125-4.183593-10.375-6.71875-21.339844-7.507812-32.5h16.664062c4.714844 0 8.535157-3.820312 8.535157-8.535156 0-4.710938-3.820313-8.53125-8.535157-8.53125zm147.421876 240.246094c-.625 4.164062-4.21875 7.238281-8.429688 7.21875h-90.25c-4.210938.023437-7.800781-3.046875-8.429688-7.210938l-10.878906-69.589844h128.851563zm33.058593-86.648438h-173.226562c-4.464844.015625-8.183594-3.417968-8.535157-7.867187l-4.460937-57.046875c1.527344 1.878906 3.011719 3.789062 4.652344 5.589844 8.871093 9.875 19.238281 18.292968 30.71875 24.953124.066406 0 .109375.117188.179687.160157.070313.027343.136719.054687.203125.085937 15.460938 8.894532 32.609375 14.460938 50.347657 16.34375 4.488281.476563 8.996093.71875 13.507812.714844 8.980469 0 17.9375-.949219 26.71875-2.824219.128906 0 .246094-.078125.367188-.101562 12.90625-2.792969 25.304687-7.5625 36.753906-14.140625l.160156-.066406c.066406-.042969.101562-.113282.164062-.148438 11.480469-6.644531 21.847657-15.058594 30.71875-24.925781 1.636719-1.789063 3.113282-3.695313 4.640626-5.570313l-4.460938 57.042969c-.378906 4.394531-4.042969 7.773437-8.449219 7.800781zm-140.167969-376.78125c.625-4.164062 4.21875-7.238281 8.429688-7.21875h90.25c4.210938-.023437 7.800781 3.046875 8.429688 7.210938l10.878906 69.589844h-128.851563zm-33.058593 86.648438h173.226562c4.464844-.011719 8.183594 3.417968 8.535157 7.867187l4.460937 57.046875c-1.527344-1.878906-3.011719-3.789062-4.648437-5.589844-8.875-9.871093-19.238282-18.292968-30.722657-24.953124-.066406 0-.109375-.117188-.179687-.160157h-.136719c-39.527344-22.808593-88.214844-22.808593-127.742187 0h-.121094c-.058594 0-.09375.101563-.152344.136719-11.484375 6.648438-21.851562 15.0625-30.71875 24.933594-1.640625 1.792968-3.117188 3.695312-4.644531 5.570312l4.464843-57.042968c.371094-4.371094 3.996094-7.746094 8.378907-7.808594zm0 0" /><path d="m98.015625 305.988281c1.941406 1.164063 4.265625 1.507813 6.460937.957031 2.195313-.550781 4.082032-1.949218 5.246094-3.890624l13.15625-21.976563c1.6875.347656 3.402344.523437 5.121094.523437 12.453125.023438 23.109375-8.941406 25.21875-21.214843 2.109375-12.273438-4.9375-24.277344-16.683594-28.417969v-35.703125c0-4.710937-3.824218-8.53125-8.535156-8.53125s-8.535156 3.820313-8.535156 8.53125v35.703125c-7.894532 2.710938-13.945313 9.140625-16.175782 17.1875-2.226562 8.042969-.347656 16.667969 5.023438 23.058594l-13.234375 22.109375c-2.394531 4.035156-1.082031 9.242187 2.9375 11.664062zm29.984375-58.519531c4.710938 0 8.535156 3.820312 8.535156 8.53125 0 4.714844-3.824218 8.535156-8.535156 8.535156s-8.535156-3.820312-8.535156-8.535156c0-4.710938 3.824218-8.53125 8.535156-8.53125zm0 0" /><path d="m93.867188 460.800781h68.265624c4.714844 0 8.535157-3.820312 8.535157-8.535156 0-4.710937-3.820313-8.53125-8.535157-8.53125h-68.265624c-4.714844 0-8.535157 3.820313-8.535157 8.53125 0 4.714844 3.820313 8.535156 8.535157 8.535156zm0 0" /><path d="m162.132812 51.199219h-68.265624c-4.714844 0-8.535157 3.820312-8.535157 8.535156 0 4.710937 3.820313 8.53125 8.535157 8.53125h68.265624c4.714844 0 8.535157-3.820313 8.535157-8.53125 0-4.714844-3.820313-8.535156-8.535157-8.535156zm0 0" /></svg>';
const svgPearsing = '<svg height="512pt" viewBox="-64 0 512 512.13948" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m375.496094 435.210938c-4.714844 0-8.535156 3.820312-8.535156 8.53125 0 19.753906-37.273438 51.199218-68.265626 51.199218-29.796874 1.621094-58.796874-9.945312-79.300781-31.632812-23.191406-23.191406-100.179687-107.398438-117.015625-216.746094 0-.109375-.1875-1.277344-.207031-1.382812.003906-.417969-.027344-.835938-.085937-1.253907-1.679688-11.164062-2.617188-22.425781-2.8125-33.714843-.269532-15.363282.757812-30.726563 3.070312-45.917969 6.839844 2.136719 14.261719 1.277343 20.429688-2.371094l.339843-.246094c7.078125-4.140625 11.703125-11.460937 12.398438-19.628906.703125-8.050781-2.542969-15.945313-8.710938-21.171875-3.472656-2.886719-7.183593-5.472656-11.09375-7.730469 3.191407-8.367187 6.933594-16.515625 11.203125-24.386719 4.25 3.289063 9.464844 5.085938 14.839844 5.117188h.9375c8.171875-.011719 15.832031-3.960938 20.585938-10.605469 4.757812-6.554687 6.007812-15.023437 3.34375-22.671875-1.746094-4.816406-3.953126-9.449218-6.589844-13.84375 21.664062-19.433594 49.835937-30.023437 78.933594-29.675781 102.570312 0 127.148437 108.125 128.179687 112.722656.847656 3.9375 4.328125 6.746094 8.355469 6.742188.609375-.003907 1.214844-.070313 1.808594-.195313 4.597656-.992187 7.527343-5.519531 6.546874-10.121094-.300781-1.261718-28.425781-126.2148432-144.890624-126.2148432-32.726563-.4023438-64.445313 11.3203122-89.042969 32.9101562-23.882813-25.550781-62.011719-31.742187-92.75-15.058594-30.738281 16.6875-46.320313 52.03125-37.90625 85.980469 1.476562 6.214844 3.773437 12.207031 6.828125 17.816406-15.820313 13.960938-25.210938 33.804688-25.96875 54.890625-.761719 21.082031 7.175781 41.554688 21.949218 56.617188 14.21875 14.636719 33.789063 22.855469 54.195313 22.757812 3.492187-.015625 6.976563-.261719 10.4375-.742187 19.625 111.65625 96.988281 196.53125 120.652344 220.160156 23.6875 24.890625 57.015625 38.273438 91.339843 36.667969 38.28125 0 85.332032-37.640625 85.332032-68.269531 0-2.261719-.898438-4.433594-2.496094-6.03125-1.601562-1.601563-3.773438-2.5-6.035156-2.5zm-309.136719-232.644532c-6.804687-3.066406-11.964844-8.910156-14.15625-16.042968-2.695313-8.820313-.367187-18.40625 6.074219-25.003907 2.601562-2.660156 5.742187-4.730469 9.214844-6.066406.292968-.070313.574218-.160156.855468-.265625 5.871094-2.1875 12.363282-2.019531 18.117188.460938-2.785156 16.035156-4.199219 32.28125-4.21875 48.554687-5.332032 1.164063-10.902344.589844-15.886719-1.636719zm8.59375-99.96875c-5.800781-6.363281-8.042969-15.203125-5.976563-23.5625 2.578126-10.222656 11.171876-17.8125 21.636719-19.105468 10.460938-1.296876 20.644531 3.96875 25.640625 13.253906-6.324218 10.492187-11.730468 21.507812-16.164062 32.929687-8.121094-2.585937-16.621094-3.773437-25.136719-3.515625zm-27.941406-54.296875c11.585937-14.660156 29.363281-23.054687 48.042969-22.675781 18.679687.375 36.105468 9.480469 47.089843 24.59375 3.558594 4.875 6.371094 10.25 8.34375 15.949219.828125 2.425781.421875 5.101562-1.089843 7.167969-1.535157 2.1875-4.039063 3.484374-6.710938 3.472656h-.9375c-3.640625-.171875-6.777344-2.613282-7.839844-6.101563-.09375-.242187-.199218-.484375-.316406-.714843-6.707031-17.371094-23.90625-28.386719-42.488281-27.214844s-34.261719 14.257812-38.734375 32.335937c-2.378906 10.207031-1 20.929688 3.894531 30.199219-5.550781 1.550781-10.902344 3.730469-15.960937 6.492188-1.929688-3.773438-3.417969-7.753907-4.4375-11.871094-4.417969-18.007813-.308594-37.050782 11.144531-51.632813zm-12.679688 173.046875c-12.316406-12.484375-18.535156-29.742187-17.015625-47.214844 1.519532-17.46875 10.628906-33.394531 24.917969-43.5625 1.332031-.972656 2.75-1.851562 4.214844-2.738281 7.828125-4.726562 16.667969-7.515625 25.789062-8.132812 9.703125-.78125 19.449219.828125 28.390625 4.683593.273438.171876.558594.328126.851563.46875 5.160156 2.371094 9.96875 5.445313 14.285156 9.132813 1.953125 1.636719 2.96875 4.128906 2.722656 6.664063-.265625 2.796874-1.925781 5.273437-4.410156 6.585937l-.375.257813c-3.246094 1.648437-7.167969 1.148437-9.890625-1.261719-.230469-.171875-.460938-.335938-.699219-.488281-.738281-.617188-1.511719-1.1875-2.324219-1.707032h-.042968c-11.046875-7.65625-25.105469-9.515625-37.765625-5l-.511719.160156c-.097656.035157-.191406.070313-.28125.113282-.09375 0-.1875 0-.28125.078125-.097656.074219-.136719.09375-.214844.125-20.390625 7.570312-31.761718 29.328125-26.335937 50.390625s25.894531 34.617187 47.40625 31.394531c.324219 5.613281.828125 11.304687 1.515625 17.066406-18.40625 2.601563-36.953125-3.714843-49.945313-17.015625zm0 0" /><path d="m269.316406 71.996094c19.8125 3.695312 32.988282 17.800781 38.101563 40.800781 15.5625 70.058594-55.46875 118.570313-56.152344 119.046875-3.917969 2.617188-4.976563 7.917969-2.359375 11.839844 2.621094 3.921875 7.921875 4.976562 11.839844 2.359375 3.328125-2.21875 81.460937-55.382813 63.328125-136.953125-6.605469-29.71875-24.953125-48.886719-51.628907-53.878906-37.367187-6.953126-85.160156 15.429687-108.867187 50.996093-34.355469 51.53125-36.402344 120.847657-26.863281 168.578125.8125 3.976563 4.320312 6.832032 8.382812 6.824219.570313.003906 1.144532-.054687 1.703125-.171875 4.621094-.921875 7.621094-5.414062 6.699219-10.035156-8.875-44.371094-7.132812-108.535156 24.328125-155.722656 19.816406-29.808594 60.871094-49.460938 91.488281-43.683594zm0 0" /><path d="m366.050781 362.222656c3.730469-6.03125 4.363281-13.484375 1.707031-20.058594-4.515624-9.386718-15.761718-11.734374-26.632812-14.023437-7.46875-1.570313-16.761719-3.523437-18.773438-7.3125-.917968-3.523437-.4375-7.265625 1.339844-10.445313 12.261719-30.660156 12.566406-54.613281.851563-64.167968-4.480469-3.636719-14.386719-8.097656-30.566407 2.695312l-51.199218 34.132813c-3.921875 2.617187-4.980469 7.914062-2.363282 11.835937 2.613282 3.921875 7.914063 4.980469 11.835938 2.363282l51.199219-34.132813c5.972656-3.949219 9.496093-4.335937 10.34375-3.644531 2.8125 2.28125 5.21875 16.675781-5.976563 44.570312-3.917968 7.777344-4.109375 16.910156-.527344 24.847656 5.777344 10.789063 18.773438 13.535157 30.308594 15.960938 5.164063.644531 10.164063 2.230469 14.753906 4.675781-.042968 1.804688-.585937 3.5625-1.566406 5.074219-4.105468 8.203125-21.90625 12.066406-44.332031 9.59375-42.367187-4.652344-92.476563-29.917969-101.898437-67.585938-15.359376-61.300781 44.886718-100.007812 47.457031-101.628906 4.003906-2.5 5.226562-7.777344 2.722656-11.78125-2.5-4.007812-7.773437-5.226562-11.777344-2.726562-.734375.460937-73.320312 46.804687-54.957031 120.242187 11.410156 45.636719 67.285156 74.992188 116.582031 80.410157 5.007813.554687 10.035157.839843 15.070313.851562 23.417968.054688 39.964844-6.882812 46.398437-19.746094zm0 0" /><path d="m340.253906 431.027344-19.199218-34.132813c-1.511719-2.6875-4.359376-4.351562-7.441407-4.351562h-38.402343c-3.082032 0-5.929688 1.664062-7.441407 4.351562l-19.199219 34.132813c-.101562.179687-.136718.386718-.230468.574218s-.179688.441407-.265625.671876c-.707031 1.894531-.707031 3.980468 0 5.871093.085937.230469.164062.453125.265625.675781.101562.222657.128906.390626.230468.570313l19.199219 34.132813c1.511719 2.691406 4.359375 4.355468 7.441407 4.351562h38.402343c3.082031.003906 5.929688-1.660156 7.441407-4.351562l19.199218-34.132813c.101563-.179687.144532-.382813.230469-.570313s.1875-.445312.261719-.667968c.710937-1.898438.710937-3.988282 0-5.886719-.074219-.222656-.160156-.445313-.261719-.664063-.101563-.222656-.128906-.394531-.230469-.574218zm-31.632812 29.78125h-28.417969l-9.597656-17.066406h2.492187c4.710938 0 8.53125-3.820313 8.53125-8.53125 0-4.714844-3.820312-8.535157-8.53125-8.535157h-2.476562l9.601562-17.066406h28.414063l9.601562 17.066406h-2.476562c-4.710938 0-8.53125 3.820313-8.53125 8.535157 0 4.710937 3.820312 8.53125 8.53125 8.53125h2.476562zm0 0" /></svg>';
const svgTiara = '<svg height="512pt" viewBox="0 -26 512.00066 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m392.535156 276.480469v-11.949219c0-18.851562 15.28125-34.132812 34.132813-34.132812 2.300781-.003907 4.503906.941406 6.082031 2.613281 1.582031 1.5625 2.46875 3.695312 2.449219 5.921875.003906 2.296875-.941407 4.496094-2.609375 6.074218-1.558594 1.59375-3.695313 2.480469-5.921875 2.457032h-8.535157c-4.710937 0-8.53125 3.820312-8.53125 8.535156 0 4.710938 3.820313 8.53125 8.53125 8.53125h8.535157c14.136719 0 25.597656-11.460938 25.597656-25.597656 0-14.140625-11.460937-25.601563-25.597656-25.601563-28.265625.027344-51.171875 22.933594-51.199219 51.199219v6.640625c-8.085938-2.277344-16.617188-4.351563-25.601562-6.222656v-34.550781c0-4.710938-3.820313-8.53125-8.535157-8.53125-4.710937 0-8.53125 3.820312-8.53125 8.53125v31.429687c-8.175781-1.316406-16.707031-2.421875-25.601562-3.320313v-36.640624c0-4.714844-3.820313-8.535157-8.53125-8.535157-4.714844 0-8.535157 3.820313-8.535157 8.535157v35.25c-8.242187-.53125-16.777343-.867188-25.597656-1.007813v-93.976563c.011719-6.417968 1.488282-12.746093 4.324219-18.5 14.550781-3.234374 27.367187-11.78125 35.941406-23.972656.8125-.058594 1.546875-.195312 2.398438-.195312h17.066406c23.554687.027344 42.640625 19.113281 42.667969 42.667968 0 6.769532-2.675782 13.265626-7.441406 18.074219-10.140626 9.640625-26.046876 9.675781-36.230469.085938-4.8125-4.820313-7.519531-11.351563-7.527344-18.160157v-8.535156c0-4.710937-3.820313-8.53125-8.535156-8.53125-4.710938 0-8.53125 3.820313-8.53125 8.53125v8.535156c0 23.5625 19.101562 42.664063 42.664062 42.664063 23.566407 0 42.667969-19.101563 42.667969-42.664063-.039062-32.976562-26.757812-59.695312-59.734375-59.734374h-11.09375c1.683594-5.535157 2.542969-11.28125 2.5625-17.066407 0-31.054687-48.351563-77.765625-53.863281-82.996093-3.289063-3.113282-8.441406-3.113282-11.734375 0-5.519531 5.230468-53.871094 51.941406-53.871094 82.996093.019531 5.785157.882813 11.53125 2.5625 17.066407h-11.09375c-32.976563.039062-59.695313 26.757812-59.734375 59.734374 0 23.5625 19.101562 42.664063 42.667969 42.664063 23.5625 0 42.664062-19.101563 42.664062-42.664063v-8.535156c0-4.710937-3.820312-8.53125-8.53125-8.53125-4.714843 0-8.535156 3.820313-8.535156 8.53125v8.535156c0 6.769532-2.675781 13.265626-7.441406 18.074219-10.140625 9.640625-26.042969 9.675781-36.230469.085938-4.8125-4.820313-7.515625-11.351563-7.527344-18.160157.027344-23.554687 19.113282-42.640624 42.667969-42.667968h17.066406c.851563 0 1.585938.136718 2.398438.195312 8.574219 12.191406 21.390625 20.738282 35.941406 23.972656 2.835937 5.753907 4.316406 12.082032 4.328125 18.5v93.976563c-8.824219.136719-17.359375.472656-25.601562 1.007813v-35.25c0-4.714844-3.820313-8.535157-8.535157-8.535157-4.710937 0-8.53125 3.820313-8.53125 8.535157v36.640624c-8.886719.898438-17.417969 2.003907-25.601562 3.320313v-31.429687c0-4.710938-3.820313-8.53125-8.53125-8.53125-4.714844 0-8.535157 3.820312-8.535157 8.53125v34.550781c-8.988281 1.851562-17.519531 3.921875-25.597656 6.222656v-6.640625c-.03125-28.265625-22.9375-51.171875-51.203125-51.199219-14.136719 0-25.597656 11.460938-25.597656 25.601563 0 14.136718 11.460937 25.597656 25.597656 25.597656h8.535157c4.710937 0 8.53125-3.820312 8.53125-8.53125 0-4.714844-3.820313-8.535156-8.53125-8.535156h-8.535157c-2.300781.007812-4.5-.9375-6.082031-2.609375-1.582031-1.5625-2.464844-3.699219-2.449219-5.921875-.003906-2.300782.941407-4.496094 2.609375-6.078125 1.558594-1.589844 3.695313-2.480469 5.921875-2.457031 18.851563 0 34.136719 15.28125 34.136719 34.132812v11.949219c-62.765625 21.476562-95.292969 54.492187-109.109375 72.359375-6.757813 8.878906-10.3984375 19.734375-10.359375 30.890625v72.535156c0 4.710937 3.820312 8.53125 8.535156 8.53125 4.710938 0 8.53125-3.820313 8.53125-8.53125v-32.425781c5.417969-11.8125 53.617188-104.109375 238.933594-104.109375 185.320312 0 233.523438 92.289062 238.933594 104.109375v32.425781c0 4.710937 3.820312 8.53125 8.535156 8.53125 4.710938 0 8.53125-3.820313 8.53125-8.53125v-72.535156c.039062-11.152344-3.601562-22.007813-10.359375-30.878907-13.816406-17.878906-46.34375-50.894531-109.105469-72.371093zm-179.203125-191.148438c0-16.121093 24.160157-46.078125 42.667969-64.851562 18.507812 18.773437 42.667969 48.714843 42.667969 64.851562 0 23.5625-19.101563 42.667969-42.667969 42.667969-23.5625 0-42.667969-19.105469-42.667969-42.667969zm42.667969 213.332031c-146.421875 0-212.0625 54.460938-238.933594 88.960938v-7.894531c-.039062-7.390625 2.359375-14.589844 6.828125-20.476563 20-25.902344 82.773438-86.1875 232.105469-86.1875s212.105469 60.285156 232.105469 86.1875c4.46875 5.886719 6.867187 13.085938 6.828125 20.476563v7.902343c-26.871094-34.507812-92.511719-88.96875-238.933594-88.96875zm0 0" /><path d="m264.535156 102.398438c0-4.710938-3.820312-8.53125-8.535156-8.53125-4.566406-.03125-8.3125-3.625-8.53125-8.183594-.269531-4.667969-4.179688-8.289063-8.851562-8.203125-2.265626.082031-4.402344 1.0625-5.945313 2.726562-1.542969 1.660157-2.359375 3.867188-2.273437 6.132813.496093 13.765625 11.828124 24.652344 25.601562 24.59375 4.714844 0 8.535156-3.820313 8.535156-8.535156zm0 0" /></svg>';
const svgEarings = '<svg height="512pt" viewBox="0 0 512 512.00089" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m273.585938 17.230469c-4.613282-.140625-9.089844 1.59375-12.402344 4.808593-3.316406 3.214844-5.183594 7.636719-5.183594 12.257813v16.902344h-51.199219v-17.066407c0-18.851562-15.28125-34.132812-34.132812-34.132812h-8.535157c-14.136718 0-25.597656 11.460938-25.597656 25.601562 0 4.710938 3.820313 8.53125 8.53125 8.53125 4.714844 0 8.535156-3.820312 8.535156-8.53125 0-4.714843 3.820313-8.535156 8.53125-8.535156h8.535157c9.425781 0 17.066406 7.640625 17.066406 17.066406v17.066407h-179.199219c-4.714844 0-8.535156 3.820312-8.535156 8.535156 0 4.710937 3.820312 8.53125 8.535156 8.53125h179.199219v17.066406c0 9.425781-7.640625 17.066407-17.066406 17.066407h-8.535157c-4.710937 0-8.53125-3.820313-8.53125-8.53125 0-4.714844-3.820312-8.535157-8.535156-8.535157-4.710937 0-8.53125 3.820313-8.53125 8.535157 0 14.136718 11.460938 25.597656 25.597656 25.597656h8.535157c18.851562 0 34.132812-15.28125 34.132812-34.132813v-17.066406h51.199219v17.308594c.046875 9.148437 7.285156 16.644531 16.425781 17.011719 43.097657 2.101562 83.578125 21.289062 112.480469 53.320312 28.90625 32.035156 43.851562 74.265625 41.53125 117.347656-5.046875 82.421875-70.761719 148.136719-153.183594 153.183594-56.496094 3.054688-110.5-23.5625-142.488281-70.234375-31.992187-46.667969-37.335937-106.636719-14.105469-158.230469 6.628906-15.488281 3.507813-33.425781-7.960937-45.769531-11.46875-12.339844-29.132813-16.761719-45.066407-11.285156-11.285156 3.914062-20.453124 12.320312-25.328124 23.230469-14.074219 31.589843-21.308594 65.800781-21.238282 100.386718.125 68.308594 28.367188 133.558594 78.089844 180.402344 45.667969 43.222656 106.207031 67.230469 169.085938 67.0625 5.34375 0 10.707031-.167969 16.09375-.503906 131.488281-8.519532 233.238281-118.578125 231.441406-250.328125-1.800782-131.75-106.519532-238.984375-238.191406-243.914063zm220.851562 262.058593c-5.898438 91.898438-65.953125 171.457032-152.71875 202.320313-86.761719 30.859375-183.570312 7.089844-246.175781-60.445313-62.605469-67.535156-78.980469-165.863281-41.644531-250.046874 4.136718-9.359376 13.394531-15.410157 23.628906-15.445313 8.515625.035156 16.457031 4.300781 21.1875 11.382813 4.726562 7.082031 5.628906 16.050781 2.398437 23.929687-25.664062 57.011719-19.753906 123.277344 15.589844 174.851563 35.339844 51.574218 95.007813 80.996093 157.4375 77.640624 91.113281-5.578124 163.761719-78.222656 169.34375-169.335937 2.554687-47.613281-13.972656-94.28125-45.921875-129.675781-31.949219-35.394532-76.691406-56.59375-124.316406-58.910156l-.410156 8.535156.230468-8.515625-.050781-25.601563c0-.085937.050781-.164062.050781-.246094 0-.085937-.050781-.164062-.050781-.257812l-.050781-25.191406c62.160156 2.28125 120.757812 29.601562 162.46875 75.746094 41.710937 46.140624 62.992187 107.191406 59.003906 169.265624zm0 0" /></svg>';
const svgLongEarings = '<svg height="512pt" viewBox="-25 0 512 512.00893" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m111.203125 477.867188c60.570313.730468 110.308594-47.695313 111.195313-108.261719 0-48.460938-71.617188-150.800781-96.289063-184.621094 17.933594-6.507813 29.339844-24.15625 27.917969-43.179687-1.421875-19.023438-15.328125-34.777344-34.027344-38.550782v-32.714844l6.390625-11.199218c7.101563-12.253906 7.046875-27.378906-.136719-39.585938-7.03125-12.285156-20.136718-19.8359372-34.292968-19.753906-17.492188.0859375-32.886719 11.542969-37.992188 28.273438-.105469.34375-.1875.699218-.246094 1.054687l-6.828125 41.371094c-2.148437 13.164062-7.097656 25.714843-14.507812 36.804687l-21.886719 32.828125c-2.613281 3.921875-1.558594 9.21875 2.363281 11.835938 3.921875 2.613281 9.222657 1.554687 11.835938-2.363281l21.914062-32.835938c8.769531-13.113281 14.617188-27.953125 17.152344-43.523438l6.742187-40.753906c3.054688-9.273437 11.6875-15.5625 21.453126-15.625 8.054687 0 15.5 4.285156 19.542968 11.25 4.042969 6.964844 4.074219 15.558594.082032 22.550782l-7.527344 13.132812c-.746094 1.296875-1.132813 2.769531-1.125 4.265625v34.988281c-18.609375 3.769532-32.472656 19.40625-33.988282 38.332032-1.515624 18.925781 9.679688 36.570312 27.453126 43.253906-21.53125 29.5-79.257813 111.789062-93.261719 164.40625 0 .066406-.042969.125-.050781.203125-1.871094 6.558593-2.90625 13.328125-3.08203175 20.148437.87890575 60.574219 50.62109375 109.003906 111.19921875 108.269532zm-.425781-59.734376c-24.179688-.859374-43.144532-21.042968-42.507813-45.226562 0-12.882812 17.203125-49.765625 42.667969-91.996094 25.457031 42.230469 42.667969 79.113282 42.667969 91.996094.636719 24.21875-18.386719 44.414062-42.597657 45.226562zm7.386718-158.105468c-1.65625-2.363282-4.363281-3.773438-7.25-3.773438-2.890624 0-5.597656 1.410156-7.253906 3.773438-8.765625 14.039062-52.5 85.417968-52.5 112.835937-.015625 10.324219 2.449219 20.496094 7.195313 29.664063-18.570313-12.082032-32.074219-30.539063-37.972657-51.890625 13.21875-45.269531 63.597657-120.082031 90.820313-157.160157 27.210937 37.070313 77.566406 111.839844 90.800781 157.117188-5.996094 21.71875-19.851562 40.429688-38.875 52.503906 4.964844-9.308594 7.554688-19.699218 7.542969-30.25 0-27.417968-43.734375-98.800781-52.507813-112.835937zm-6.960937 200.773437c-44.277344.449219-82.804687-30.207031-92.3125-73.453125 20.78125 29.824219 54.789063 47.65625 91.144531 47.785156.304688 0 .59375.050782.902344.050782h.257812c36.785157.21875 71.320313-17.695313 92.328126-47.898438-9.488282 43.273438-48.023438 73.957032-92.320313 73.515625zm-25.335937-315.734375c0-14.136718 11.460937-25.597656 25.601562-25.597656 14.136719 0 25.597656 11.460938 25.597656 25.597656 0 14.140625-11.460937 25.601563-25.597656 25.601563-14.140625 0-25.601562-11.460938-25.601562-25.601563zm0 0" /><path d="m350.136719 512c60.570312.730469 110.308593-47.691406 111.195312-108.261719 0-48.460937-71.617187-150.800781-96.289062-184.617187 17.933593-6.511719 29.339843-24.160156 27.917969-43.183594-1.421876-19.023438-15.328126-34.777344-34.027344-38.550781v-32.714844l6.390625-11.195313c7.015625-12.277343 6.964843-27.355468-.128907-39.585937-7.097656-12.226563-20.164062-19.753906-34.300781-19.757813-17.492187.085938-32.890625 11.542969-37.992187 28.273438-.105469.347656-.1875.699219-.246094 1.058594l-6.828125 41.367187c-2.148437 13.164063-7.097656 25.714844-14.507813 36.804688l-21.886718 32.828125c-2.617188 3.921875-1.558594 9.21875 2.363281 11.835937 3.921875 2.613281 9.222656 1.558594 11.835937-2.363281l21.914063-32.835938c8.769531-13.113281 14.617187-27.953124 17.152344-43.519531l6.742187-40.757812c3.054688-9.273438 11.6875-15.5625 21.453125-15.625 8.050781 0 15.5 4.285156 19.542969 11.25 4.042969 6.964843 4.074219 15.558593.082031 22.550781l-7.527343 13.132812c-.746094 1.300782-1.132813 2.769532-1.125 4.269532v34.984375c-18.609376 3.773437-32.472657 19.40625-33.988282 38.332031s9.679688 36.570312 27.453125 43.253906c-21.53125 29.5-79.257812 111.789063-93.261719 164.40625 0 .066406 0 .125-.050781.203125-1.875 6.558594-2.910156 13.328125-3.082031 20.148438.878906 60.574219 50.621094 109.003906 111.199219 108.269531zm-.425781-59.734375c-24.179688-.859375-43.144532-21.042969-42.507813-45.226563 0-12.882812 17.203125-49.765624 42.667969-91.996093 25.453125 42.230469 42.667968 79.113281 42.667968 91.996093.636719 24.21875-18.386718 44.417969-42.601562 45.226563zm7.386718-158.105469c-1.660156-2.347656-4.355468-3.742187-7.230468-3.742187s-5.570313 1.394531-7.230469 3.742187c-8.765625 14.039063-52.5 85.421875-52.5 112.835938-.015625 10.324218 2.449219 20.496094 7.195312 29.664062-18.582031-12.070312-32.105469-30.519531-38.015625-51.875 13.21875-45.269531 63.597656-120.082031 90.820313-157.15625 27.210937 37.066406 77.566406 111.835938 90.800781 157.113282-5.996094 21.71875-19.851562 40.433593-38.875 52.507812 4.964844-9.308594 7.554688-19.703125 7.542969-30.253906 0-27.433594-43.734375-98.8125-52.507813-112.851563zm-6.960937 200.773438c-44.277344.449218-82.804688-30.207032-92.316407-73.453125 20.785157 29.824219 54.792969 47.65625 91.144532 47.785156.308594 0 .597656.050781.90625.050781h.257812c36.785156.21875 71.320313-17.695312 92.328125-47.898437-9.488281 43.273437-48.023437 73.957031-92.320312 73.515625zm-25.335938-315.734375c0-14.136719 11.460938-25.597657 25.597657-25.597657 14.140624 0 25.601562 11.460938 25.601562 25.597657 0 14.140625-11.460938 25.601562-25.601562 25.601562-14.136719 0-25.597657-11.460937-25.597657-25.601562zm0 0" /></svg>';
const svgLeaf = '<svg viewBox="-29 0 396 396.05387" xmlns="http://www.w3.org/2000/svg" > <path d="m244.53125 271.503906c-2.628906-.84375-5.445312.605469-6.289062 3.234375-.84375 2.628907.605468 5.445313 3.234374 6.289063 17.464844 5.945312 33.558594 15.34375 47.320313 27.632812-19.019531 2.972656-38.453125 1.882813-57.019531-3.199218-17.972656-5.644532-34.546875-15.023438-48.636719-27.523438-.8125-.703125-1.828125-1.125-2.902344-1.203125-7.023437-.496094-14.074219-.496094-21.097656 0-1.070313.078125-2.089844.5-2.902344 1.203125-14.089843 12.503906-30.664062 21.882812-48.636719 27.527344-18.566406 5.089844-38 6.179687-57.019531 3.199218 13.761719-12.289062 29.855469-21.6875 47.320313-27.632812 2.121094-.675781 3.539062-2.671875 3.476562-4.894531-.058594-2.222657-1.578125-4.140625-3.730468-4.703125-5.953126-1.554688-11.808594-3.46875-17.527344-5.730469-24.882813-10.507813-47.144532-26.367187-65.203125-46.453125 26.917969-2.222656 53.996093 1.523438 79.300781 10.960938 1.40625.5625 2.753906 1.164062 4.109375 1.765624l1.058594.472657c2.222656.980469 4.828125.226562 6.179687-1.792969 1.347656-2.019531 1.054688-4.71875-.703125-6.394531-9.792969-9.3125-18.691406-19.519531-26.574219-30.488281-28.636718-40.144532-38.039062-85.835938-40.84375-104.71875 16.921876 8.800781 57.027344 32.503906 85.707032 72.710937 2.355468 3.300781 4.726562 6.910156 7.46875 11.367187.921875 1.546876 2.605468 2.480469 4.410156 2.4375 1.804688-.039062 3.441406-1.050781 4.292969-2.640624.851562-1.589844.777343-3.515626-.1875-5.039063-2.859375-4.644531-5.351563-8.4375-7.84375-11.925781-38.671875-54.210938-95.554688-78.980469-97.957031-80-1.605469-.6875-3.449219-.484375-4.871094.527344-1.417969 1.011718-2.207032 2.691406-2.082032 4.433593.191407 2.601563 5.089844 64.449219 43.765626 118.664063 3.933593 5.519531 8.214843 10.9375 12.839843 16.25-25.621093-7.179688-52.4375-9.03125-78.800781-5.429688-1.71875.289063-3.164062 1.457032-3.808594 3.078125-.644531 1.625-.394531 3.464844.65625 4.855469 20.03125 24.859375 45.945313 44.332031 75.398438 56.65625 1.554687.617188 3.136718 1.214844 4.746094 1.792969-16.746094 7.664062-31.917969 18.378906-44.738282 31.597656-1.179687 1.289063-1.597656 3.101563-1.105468 4.773437.488281 1.675782 1.816406 2.972657 3.503906 3.425782 10.9375 2.570312 22.140625 3.828125 33.375 3.75 12.925781.074218 25.792968-1.710938 38.207031-5.292969 18.820313-5.867187 36.21875-15.566406 51.109375-28.484375.824219-.050781 1.703125-.078125 2.570312-.109375-1.222656 15.402344-1.414062 57.640625 27.792969 91.652344 1.800781 2.097656 4.960938 2.339843 7.058594.539062 2.097656-1.796875 2.34375-4.957031.542969-7.054687-27.074219-31.527344-26.363282-72.097656-25.308594-85.203125 1.261719.042969 2.5.09375 3.679688.164062 14.886718 12.910157 32.277343 22.601563 51.085937 28.46875 23.367187 6.460938 47.976563 6.992188 71.597656 1.542969 1.6875-.449219 3.015625-1.746094 3.507813-3.421875.488281-1.675781.070312-3.484375-1.105469-4.773437-16.269531-16.753907-36.292969-29.394532-58.421875-36.863282zm0 0" /> <path d="m339 213.476562c-.644531-1.621093-2.089844-2.789062-3.808594-3.082031-26.363281-3.59375-53.179687-1.746093-78.800781 5.433594 4.609375-5.296875 8.890625-10.710937 12.839844-16.246094 38.679687-54.21875 43.578125-116.046875 43.769531-118.667969.125-1.742187-.664062-3.421874-2.082031-4.433593-1.421875-1.015625-3.265625-1.214844-4.871094-.527344-37.171875 17.367187-69.679687 43.332031-94.835937 75.742187.203124-4 .304687-7.914062.304687-11.78125 0-75.140624-36-135.160156-37.554687-137.683593-.972657-1.398438-2.566407-2.230469-4.269532-2.230469s-3.300781.832031-4.273437 2.230469c-21.269531 37.734375-33.9375 79.703125-37.089844 122.90625-.167969 2.757812 1.925781 5.128906 4.683594 5.300781 2.734375.109375 5.074219-1.957031 5.300781-4.683594 3.003906-38.5625 13.671875-76.136718 31.378906-110.523437 9.554688 18.472656 31.824219 67.648437 31.824219 124.683593-.023437 10.019532-.683594 20.027344-1.972656 29.960938-.277344 2.324219 1.09375 4.53125 3.300781 5.308594 2.203125.78125 4.65625-.074219 5.898438-2.054688 2.738281-4.453125 5.113281-8.066406 7.46875-11.367187 28.632812-40.140625 68.777343-63.90625 85.714843-72.707031-2.796875 18.867187-12.167969 64.503906-40.851562 104.714843-7.882813 10.96875-16.78125 21.175781-26.574219 30.488281-1.757812 1.675782-2.050781 4.375-.703125 6.394532 1.351563 2.019531 3.957031 2.773437 6.179687 1.792968l1.058594-.472656c1.355469-.601562 2.707032-1.199218 4.105469-1.765625 25.308594-9.425781 52.382813-13.167969 79.300781-10.957031-15.886718 17.585938-34.957031 32.011719-56.203125 42.519531-2.492187 1.183594-3.554687 4.167969-2.367187 6.664063 1.1875 2.492187 4.171875 3.554687 6.664062 2.367187 25.507813-12.46875 47.96875-30.378906 65.808594-52.464843 1.050781-1.394532 1.300781-3.234376.65625-4.859376zm0 0" /> <path d="m211.195312 383.136719c-2.121093-1.769531-5.277343-1.480469-7.042968.644531-1.769532 2.121094-1.480469 5.277344.644531 7.042969 1.746094 1.453125 3.5625 2.875 5.449219 4.265625 2.230468 1.628906 5.359375 1.144531 6.992187-1.082032 1.632813-2.230468 1.144531-5.359374-1.082031-6.992187-1.714844-1.273437-3.371094-2.574219-4.960938-3.878906zm0 0" /> </svg>';
const svgLowCost = '<svg viewBox="-29 0 487 487.71902" xmlns="http://www.w3.org/2000/svg"> <path d="m220.867188 266.175781c-.902344-.195312-1.828126-.230469-2.742188-.09375-9.160156-1.066406-16.070312-8.816406-16.085938-18.035156 0-4.417969-3.582031-8-8-8-4.417968 0-8 3.582031-8 8 .023438 15.394531 10.320313 28.878906 25.164063 32.953125v8c0 4.417969 3.582031 8 8 8s8-3.582031 8-8v-7.515625c17.132813-3.585937 28.777344-19.542969 26.976563-36.953125-1.804688-17.410156-16.472657-30.640625-33.976563-30.644531-10.03125 0-18.164063-8.132813-18.164063-18.164063s8.132813-18.164062 18.164063-18.164062 18.164063 8.132812 18.164063 18.164062c0 4.417969 3.582031 8 8 8 4.417968 0 8-3.582031 8-8-.023438-16.164062-11.347657-30.105468-27.164063-33.441406v-7.28125c0-4.417969-3.582031-8-8-8s-8 3.582031-8 8v7.769531c-16.507813 4.507813-27.132813 20.535157-24.859375 37.496094s16.746094 29.621094 33.859375 29.617187c9.898437 0 17.972656 7.925782 18.152344 17.820313.183593 9.894531-7.597657 18.113281-17.488281 18.472656zm0 0" /> <path d="m104.195312 222.5c0 64.070312 51.9375 116.007812 116.007813 116.007812s116.007813-51.9375 116.007813-116.007812-51.9375-116.007812-116.007813-116.007812c-64.039063.070312-115.933594 51.96875-116.007813 116.007812zm116.007813-100.007812c55.234375 0 100.007813 44.773437 100.007813 100.007812s-44.773438 100.007812-100.007813 100.007812-100.007813-44.773437-100.007813-100.007812c.0625-55.207031 44.800782-99.945312 100.007813-100.007812zm0 0" /> <path d="m375.648438 358.230469-62.667969 29.609375c-8.652344-16.09375-25.25-26.335938-43.515625-26.851563l-57.851563-1.589843c-9.160156-.261719-18.148437-2.582032-26.292969-6.789063l-5.886718-3.050781c-30.140625-15.710938-66.066406-15.671875-96.175782.101562l.367188-13.335937c.121094-4.417969-3.359375-8.097657-7.777344-8.21875l-63.4375-1.746094c-4.417968-.121094-8.09375 3.359375-8.214844 7.777344l-3.832031 139.210937c-.121093 4.417969 3.359375 8.097656 7.777344 8.21875l63.4375 1.746094h.21875c4.335937 0 7.882813-3.449219 8-7.78125l.183594-6.660156 16.480469-8.824219c6.46875-3.480469 14.03125-4.308594 21.097656-2.308594l98.414062 27.621094c.171875.050781.34375.089844.519532.128906 7.113281 1.488281 14.363281 2.234375 21.628906 2.230469 15.390625.007812 30.601562-3.308594 44.589844-9.730469.34375-.15625.675781-.339843.992187-.546875l142.691406-92.296875c3.554688-2.300781 4.703125-6.96875 2.621094-10.65625-10.59375-18.796875-34.089844-25.957031-53.367187-16.257812zm-359.070313 107.5625 3.390625-123.21875 47.441406 1.304687-3.390625 123.222656zm258.925781-2.09375c-17.378906 7.84375-36.789062 10.007812-55.46875 6.191406l-98.148437-27.550781c-11.046875-3.121094-22.871094-1.828125-32.976563 3.605468l-8.421875 4.511719 2.253907-81.925781c26.6875-17.75 60.914062-19.574219 89.335937-4.765625l5.886719 3.050781c10.289062 5.3125 21.636718 8.242188 33.210937 8.578125l57.855469 1.589844c16.25.46875 30.050781 12.039063 33.347656 27.960937l-86.175781-2.378906c-4.417969-.121094-8.09375 3.363282-8.21875 7.777344-.121094 4.417969 3.363281 8.097656 7.777344 8.21875l95.101562 2.617188h.222657c4.332031-.003907 7.875-3.453126 7.992187-7.78125.097656-3.476563-.160156-6.957032-.773437-10.378907l64.277343-30.371093c.0625-.027344.125-.058594.1875-.089844 9.117188-4.613282 20.140625-3.070313 27.640625 3.871094zm0 0" /> <path d="m228.203125 84v-76c0-4.417969-3.582031-8-8-8s-8 3.582031-8 8v76c0 4.417969 3.582031 8 8 8s8-3.582031 8-8zm0 0" /> <path d="m288.203125 84v-36c0-4.417969-3.582031-8-8-8s-8 3.582031-8 8v36c0 4.417969 3.582031 8 8 8s8-3.582031 8-8zm0 0" /> <path d="m168.203125 84v-36c0-4.417969-3.582031-8-8-8s-8 3.582031-8 8v36c0 4.417969 3.582031 8 8 8s8-3.582031 8-8zm0 0" /> </svg>';
const svgHighGrowth = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 512 512"> <g> <g> <path d="m266.1,237.1h-82.2c-6.2,0-10.4,5.2-10.4,10.4v243c0,6.3 5.2,10.4 10.4,10.4h82.2c5.2,0 10.4-4.2 10.4-10.4v-243c0-6.2-5.2-10.4-10.4-10.4zm-10.4,243h-61.4v-222.1h61.4v222.1z" /> <path d="M103.7,272.6H21.5c-6.2,0-10.4,5.2-10.4,10.4v207.6c0,6.3,5.2,10.4,10.4,10.4h82.2c5.2,0,10.4-4.2,10.4-10.4V283 C114.1,276.7,108.9,272.6,103.7,272.6z M93.3,480.1H31.9V293.4h61.4V480.1z" /> <path d="m499.2,157.8l-103-142.9c-4.2-5.2-12.5-5.2-16.6,0l-103,142.9c-4.2,5.9-2.6,15.6 8.3,15.6h51v317.1c0,6.3 5.2,10.4 10.4,10.4h82.2c5.2,0 10.4-4.2 11.4-10.4v-317h51c10.2,0 12.4-10.4 8.3-15.7zm-70.8-5.2c-6.2,0-10.4,5.2-10.4,10.4v317.1h-61.4-1v-317.1c0-6.3-5.2-10.4-10.4-10.4h-41.6l83.2-114.7 83.2,114.7h-41.6z" /> </g> </g> </svg>';
const svgPickUp = '<svg viewBox="0 -31 480 479" xmlns="http://www.w3.org/2000/svg"> <path d="m152 352.5h16v16h-16zm0 0" /> <path d="m376 352.5h16v16h-16zm0 0" /> <path d="m0 328.5h40v16h-40zm0 0" /> <path d="m16 296.5h24v16h-24zm0 0" /> <path d="m24 264.5h16v16h-16zm0 0" /> <path d="m477.65625 250.84375-99.257812-99.28125c-4.503907-4.539062-10.640626-7.082031-17.039063-7.0625h-89.359375c-1.648438.035156-3.242188.597656-4.550781 1.601562-13.421875-44.203124-54.390625-74.253906-100.582031-73.777343-46.195313.472656-86.535157 31.359375-99.046876 75.828125-12.507812 44.46875 5.8125 91.859375 44.980469 116.347656h-40.800781c-4.417969 0-8 3.582031-8 8v72c0 13.253906 10.746094 24 24 24h16.640625c1.746094 12.164062 7.453125 23.410156 16.238281 32h-120.878906v16h384c27.8125-.03125 51.386719-20.472656 55.359375-48h16.640625c13.253906 0 24-10.746094 24-24v-88c0-2.121094-.84375-4.15625-2.34375-5.65625zm-13.65625 13.65625h-120v-72h52.6875l67.3125 67.3125zm-384-88c0-48.601562 39.398438-88 88-88s88 39.398438 88 88-39.398438 88-88 88c-48.578125-.058594-87.941406-39.421875-88-88zm184 39.9375v48.0625h-40.800781c18.21875-11.445312 32.46875-28.226562 40.800781-48.0625zm-144 144.0625c0-22.089844 17.910156-40 40-40s40 17.910156 40 40-17.910156 40-40 40c-22.082031-.027344-39.972656-17.917969-40-40zm79.121094 40c8.785156-8.589844 14.492187-19.835938 16.238281-32h113.28125c1.746094 12.164062 7.453125 23.410156 16.238281 32zm184.878906 0c-22.089844 0-40-17.910156-40-40s17.910156-40 40-40 40 17.910156 40 40c-.027344 22.082031-17.917969 39.972656-40 40zm72-48h-16.640625c-3.953125-27.535156-27.542969-47.976562-55.359375-47.976562s-51.40625 20.441406-55.359375 47.976562h-113.28125c-3.953125-27.535156-27.542969-47.976562-55.359375-47.976562s-51.40625 20.441406-55.359375 47.976562h-16.640625c-4.417969 0-8-3.582031-8-8v-64h192c4.417969 0 8-3.582031 8-8v-112h81.359375c2.148437.003906 4.203125.867188 5.703125 2.398438l13.601562 13.601562h-36.664062c-8.835938 0-16 7.164062-16 16v72c0 8.835938 7.164062 16 16 16h120v64c0 4.417969-3.582031 8-8 8zm0 0" /> <path d="m304 296.5h32v16h-32zm0 0" /> <path d="m168 32.5h128v16h-128zm0 0" /> <path d="m136 32.5h16v16h-16zm0 0" /> <path d="m120 .5h144v16h-144zm0 0" /> <path d="m88 .5h16v16h-16zm0 0" /> <path d="m114.347656 218.84375 96.003906-96 11.3125 11.3125-96.003906 96.003906zm0 0" /> <path d="m200 184.5c-13.253906 0-24 10.746094-24 24s10.746094 24 24 24 24-10.746094 24-24-10.746094-24-24-24zm0 32c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8 8 3.582031 8 8-3.582031 8-8 8zm0 0" /> <path d="m136 168.5c13.253906 0 24-10.746094 24-24s-10.746094-24-24-24-24 10.746094-24 24 10.746094 24 24 24zm0-32c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8-8-3.582031-8-8 3.582031-8 8-8zm0 0" /> </svg>';
const svgApproach = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512;" xmlSpace="preserve"> <g> <g> <path d="M404.267,315.41c-10.048-20.949-45.995-50.027-80.725-78.123c-19.371-15.659-37.675-30.464-49.344-42.133 c-2.923-2.944-7.296-3.883-11.157-2.496c-7.189,2.603-11.627,4.608-15.125,6.165c-5.333,2.389-7.125,3.2-14.315,3.925 c-3.179,0.32-6.037,2.027-7.808,4.672c-15.083,22.549-30.699,20.629-41.131,17.131c-3.328-1.109-3.925-2.539-4.245-3.904 c-2.24-9.365,9.003-31.168,23.573-45.739c34.667-34.688,52.544-43.371,90.304-26.496c42.837,19.157,85.76,34.155,86.187,34.304 c5.611,1.941,11.648-1.003,13.589-6.571c1.92-5.568-1.003-11.648-6.571-13.589c-0.427-0.149-42.496-14.848-84.48-33.643 c-48.917-21.867-75.755-7.467-114.091,30.891c-14.592,14.592-34.411,44.117-29.291,65.771c2.197,9.216,8.683,16.043,18.325,19.221 c24.171,7.979,46.229,0.341,62.656-21.461c6.784-1.045,10.475-2.581,16.021-5.077c2.005-0.896,4.352-1.941,7.467-3.2 c12.203,11.456,28.672,24.789,46.016,38.805c31.36,25.365,66.923,54.123,74.923,70.763c3.947,8.213-0.299,13.568-3.179,16.021 c-4.224,3.627-10.005,4.779-13.141,2.581c-3.456-2.368-7.957-2.517-11.52-0.384c-3.584,2.133-5.589,6.165-5.141,10.304 c0.725,6.784-5.483,10.667-8.171,12.011c-6.827,3.456-13.952,2.859-16.619,0.384c-2.987-2.773-7.275-3.584-11.072-2.176 c-3.797,1.429-6.443,4.928-6.827,8.981c-0.64,6.997-5.824,13.717-12.587,16.341c-3.264,1.237-8,1.984-12.245-1.899 c-2.645-2.389-6.315-3.307-9.749-2.475c-3.477,0.853-6.272,3.371-7.488,6.72c-0.405,1.067-1.323,3.627-11.307,3.627 c-7.104,0-19.883-4.8-26.133-8.939c-7.488-4.928-54.443-39.957-94.997-73.92c-5.696-4.8-15.552-15.083-24.256-24.171 c-7.723-8.064-14.784-15.381-18.411-18.453c-4.544-3.84-11.264-3.264-15.04,1.259c-3.797,4.501-3.243,11.243,1.259,15.04 c3.307,2.795,9.707,9.557,16.768,16.917c9.515,9.941,19.349,20.224,25.963,25.771c39.723,33.259,87.467,69.163,96.981,75.413 c7.851,5.163,24.768,12.416,37.867,12.416c10.517,0,18.603-2.411,24.213-7.125c7.509,2.923,16.043,2.944,24.256-0.256 c9.707-3.755,17.685-11.328,22.208-20.501c8.405,1.792,18.027,0.533,26.773-3.861c8.555-4.309,14.741-10.901,17.813-18.603 c8.491,0.448,17.237-2.56,24.469-8.768C407.979,346.407,411.349,330.109,404.267,315.41z" /> </g> </g> <g> <g> <path d="M213.333,138.663h-96c-5.888,0-10.667,4.779-10.667,10.667s4.779,10.667,10.667,10.667h96 c5.888,0,10.667-4.779,10.667-10.667S219.221,138.663,213.333,138.663z" /> </g> </g> <g> <g> <path d="M435.52,292.711c-3.307-4.885-9.92-6.229-14.805-2.901l-31.189,20.949c-4.885,3.285-6.187,9.92-2.901,14.805 c2.069,3.051,5.44,4.715,8.875,4.715c2.027,0,4.096-0.576,5.931-1.813l31.189-20.949 C437.504,304.231,438.805,297.597,435.52,292.711z" /> </g> </g> <g> <g> <path d="M369.301,343.613c-7.637-6.016-41.792-40.981-62.912-62.997c-4.075-4.267-10.837-4.416-15.083-0.32 c-4.267,4.075-4.395,10.837-0.32,15.083c5.483,5.717,53.845,56.128,65.088,65.003c1.941,1.536,4.288,2.283,6.592,2.283 c3.136,0,6.272-1.408,8.405-4.075C374.72,353.981,373.931,347.261,369.301,343.613z" /> </g> </g> <g> <g> <path d="M326.677,365.01c-12.779-10.219-44.885-44.331-52.139-52.224c-4.011-4.352-10.731-4.608-15.083-0.64 c-4.331,3.989-4.629,10.752-0.64,15.083c0.384,0.405,38.699,41.771,54.528,54.443c1.963,1.557,4.331,2.325,6.656,2.325 c3.115,0,6.229-1.387,8.341-3.989C332.011,375.399,331.264,368.679,326.677,365.01z" /> </g> </g> <g> <g> <path d="M284.224,386.493c-15.211-12.821-46.336-45.952-52.416-52.459c-4.032-4.309-10.795-4.544-15.083-0.512 c-4.309,4.032-4.523,10.773-0.512,15.083c8.747,9.365,38.528,40.939,54.251,54.208c2.005,1.685,4.437,2.517,6.869,2.517 c3.029,0,6.059-1.301,8.171-3.797C289.301,397.01,288.725,390.29,284.224,386.493z" /> </g> </g> <g> <g> <path d="M124.672,120.253C106.389,102.93,33.28,97.319,11.307,96.018c-3.029-0.149-5.824,0.853-7.957,2.88 C1.216,100.903,0,103.719,0,106.663v192c0,5.888,4.779,10.667,10.667,10.667h64c4.608,0,8.704-2.965,10.133-7.36 c1.557-4.779,38.315-117.589,43.157-173.056C128.235,125.671,127.04,122.471,124.672,120.253z M66.88,287.997H21.333V118.098 c34.283,2.709,71.275,8.597,84.715,15.125C100.395,179.943,74.816,262.951,66.88,287.997z" /> </g> </g> <g> <g> <path d="M501.333,117.33c-83.755,0-130.219,21.44-132.16,22.336c-2.773,1.301-4.843,3.712-5.696,6.635s-0.427,6.059,1.173,8.661 c13.184,21.227,54.464,139.115,62.4,167.872c1.28,4.629,5.483,7.829,10.283,7.829h64c5.888,0,10.667-4.779,10.667-10.667v-192 C512,122.087,507.221,117.33,501.333,117.33z M490.667,309.33h-45.355c-10.112-32.939-39.979-118.827-56.64-154.325 c16.277-5.525,51.243-15.019,101.995-16.213V309.33z" /> </g> </g> </svg>';

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dy+W");


/***/ }),

/***/ "65ip":
/***/ (function(module, exports) {

module.exports = require("react-tabs");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "7fVs":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-ssr");

/***/ }),

/***/ "7nKk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const HomeSlider = () => {
  const banners = ["home41", "home42"];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("section", {
    className: "p-0 effect-cls"
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "slide-1 home-slider"
  }, banners.map((data, i) => {
    return __jsx("div", {
      key: i
    }, __jsx("div", {
      className: `home text-center p-center ${data}`
    }));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (HomeSlider);

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "B77O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constant_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("o4yg");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("MQhX");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const NavBar = () => {
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
  const {
    0: navClose,
    1: setNavClose
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: "0px"
  });
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (window.innerWidth < 750) {
      setNavClose({
        right: "-410px"
      });
    }

    if (window.innerWidth < 1199) {
      setNavClose({
        right: "-300px"
      });
    }
  }, []);

  const openNav = () => {
    setNavClose({
      right: "0px"
    });
    if (router.asPath == "/layouts/Gym") document.querySelector("#topHeader").classList.add("zindex-class");
  };

  const closeNav = () => {
    setNavClose({
      right: "-410px"
    });
    if (router.asPath == "/layouts/Gym") document.querySelector("#topHeader").classList.remove("zindex-class");
  }; // eslint-disable-next-line


  const handleMegaSubmenu = event => {
    if (event.target.classList.contains("sub-arrow")) return;
    if (event.target.parentNode.nextElementSibling.classList.contains("opensubmegamenu")) event.target.parentNode.nextElementSibling.classList.remove("opensubmegamenu");else {
      document.querySelectorAll(".menu-content").forEach(function (value) {
        value.classList.remove("opensubmegamenu");
      });
      event.target.parentNode.nextElementSibling.classList.add("opensubmegamenu");
    }
  };

  const {
    0: mainmenu,
    1: setMainMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constant_menu__WEBPACK_IMPORTED_MODULE_2__[/* MENUITEMS */ "a"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const currentUrl = location.pathname;
    _constant_menu__WEBPACK_IMPORTED_MODULE_2__[/* MENUITEMS */ "a"].filter(items => {
      if (items.path === currentUrl) setNavActive(items);
      if (!items.children) return false;
      items.children.filter(subItems => {
        if (subItems.path === currentUrl) setNavActive(subItems);
        if (!subItems.children) return false;
        subItems.children.filter(subSubItems => {
          if (subSubItems.path === currentUrl) setNavActive(subSubItems);
        });
      });
    });
  }, []);

  const setNavActive = item => {
    _constant_menu__WEBPACK_IMPORTED_MODULE_2__[/* MENUITEMS */ "a"].filter(menuItem => {
      if (menuItem != item) menuItem.active = false;
      if (menuItem.children && menuItem.children.includes(item)) menuItem.active = true;

      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = false;
          }
        });
      }
    });
    setMainMenu({
      mainmenu: _constant_menu__WEBPACK_IMPORTED_MODULE_2__[/* MENUITEMS */ "a"]
    });
  }; // Click Toggle menu


  const toggletNavActive = item => {
    if (!item.active) {
      _constant_menu__WEBPACK_IMPORTED_MODULE_2__[/* MENUITEMS */ "a"].forEach(a => {
        if (_constant_menu__WEBPACK_IMPORTED_MODULE_2__[/* MENUITEMS */ "a"].includes(item)) a.active = false;
        if (!a.children) return false;
        a.children.forEach(b => {
          if (a.children.includes(item)) {
            b.active = false;
          }

          if (!b.children) return false;
          b.children.forEach(c => {
            if (b.children.includes(item)) {
              c.active = false;
            }
          });
        });
      });
    }

    item.active = !item.active;
    setMainMenu({
      mainmenu: _constant_menu__WEBPACK_IMPORTED_MODULE_2__[/* MENUITEMS */ "a"]
    });
  };

  const openMblNav = event => {
    if (event.target.classList.contains("sub-arrow")) return;
    if (event.target.nextElementSibling.classList.contains("opensubmenu")) event.target.nextElementSibling.classList.remove("opensubmenu");else {
      document.querySelectorAll(".nav-submenu").forEach(function (value) {
        value.classList.remove("opensubmenu");
      });
      document.querySelector(".mega-menu-container").classList.remove("opensubmenu");
      event.target.nextElementSibling.classList.add("opensubmenu");
    }
  };

  return __jsx("div", null, __jsx("div", {
    className: "main-navbar"
  }, __jsx("div", {
    id: "mainnav"
  }, __jsx("div", {
    className: "toggle-nav",
    onClick: openNav.bind(undefined)
  }, __jsx("i", {
    className: "fa fa-bars sidebar-bar"
  })), __jsx("ul", {
    className: "nav-menu",
    style: navClose
  }, __jsx("li", {
    className: "back-btn",
    onClick: closeNav.bind(undefined)
  }, __jsx("div", {
    className: "mobile-back text-right"
  }, __jsx("span", null, "Back navbar"), __jsx("i", {
    className: "fa fa-angle-right pl-2",
    "aria-hidden": "true"
  }))), _constant_menu__WEBPACK_IMPORTED_MODULE_2__[/* MENUITEMS */ "a"].map((menuItem, i) => {
    return __jsx("li", {
      key: i,
      className: ` ${menuItem.megaMenu ? "mega-menu" : ""}`
    }, !!menuItem.children && __jsx("a", {
      className: "nav-link",
      onClick: e => openMblNav(e)
    }, " ", t(menuItem.title), __jsx("span", {
      className: "sub-arrow"
    })), !menuItem.children && __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${menuItem.path}`
    }, __jsx("a", null, menuItem.title)), menuItem.children && !menuItem.megaMenu ? __jsx("ul", {
      className: "nav-submenu"
    }, menuItem.children.map((childrenItem, index) => {
      return __jsx("li", {
        key: index,
        className: `${childrenItem.children ? "sub-menu " : ""}`
      }, childrenItem.type === "sub" ? __jsx("a", {
        href: null,
        onClick: () => toggletNavActive(childrenItem)
      }, childrenItem.title, childrenItem.tag === "new" ? __jsx("span", {
        className: "new-tag"
      }, "new") : "", __jsx("i", {
        className: "fa fa-angle-right pl-2"
      })) : "", childrenItem.type === "link" ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: `${childrenItem.path}`
      }, __jsx("a", null, childrenItem.title, childrenItem.tag === "new" ? __jsx("span", {
        className: "new-tag"
      }, "new") : "")) : "", childrenItem.children ? __jsx("ul", {
        className: `nav-sub-childmenu ${childrenItem.active ? "menu-open " : "active"}`
      }, childrenItem.children.map((childrenSubItem, key) => __jsx("li", {
        key: key
      }, childrenSubItem.type === "link" ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: childrenSubItem.path
      }, __jsx("a", {
        className: "sub-menu-title"
      }, childrenSubItem.title, childrenSubItem.tag === "new" ? __jsx("span", {
        className: "new-tag"
      }, "new") : "")) : ""))) : "");
    })) : '');
  })))));
};

/* harmony default export */ __webpack_exports__["a"] = (NavBar);

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "Czz6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Paragraph = ({
  title,
  inner,
  line,
  hrClass
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: title
  }, __jsx("h4", null, "special offer"), __jsx("h2", {
    className: inner
  }, "top collection"), line ? __jsx("div", {
    className: "line"
  }) : hrClass ? __jsx("hr", {
    role: "tournament6"
  }) : ''), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6",
    className: "m-auto"
  }, __jsx("div", {
    className: "product-para"
  }, __jsx("p", {
    className: "text-center"
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Paragraph);

/***/ }),

/***/ "Dtyw":
/***/ (function(module, exports) {

module.exports = require("@firebase/app");

/***/ }),

/***/ "EGWi":
/***/ (function(module, exports) {

module.exports = require("react-content-loader");

/***/ }),

/***/ "EO2r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Provider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oAEb");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WishlistContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("EO2r");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _WishlistContext__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _WishlistContext__WEBPACK_IMPORTED_MODULE_2__["b"]; });

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  wishlistItems: Function,
  addToWish: Function,
  removeFromWish: Function
});

const getLocalWishlistItems = () => {
  try {
    const list = localStorage.getItem('wishlist');

    if (list === null) {
      return [];
    } else {
      return JSON.parse(list);
    }
  } catch (err) {
    return [];
  }
};

const Provider = props => {
  const {
    0: wishlistItems,
    1: setWishlistItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getLocalWishlistItems());
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]); // Add Product To Wishlist

  const addToWish = item => {
    const index = wishlistItems.findIndex(wish => wish.id === item.id);

    if (index === -1) {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].success("Product Added Successfully !");
      setWishlistItems([...wishlistItems, item]);
    } else {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error("This Product Already Added !");
    }
  }; // Remove Product From Wishlist


  const removeFromWish = item => {
    setWishlistItems(wishlistItems.filter(e => e.id !== item.id));
    react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error("Product Removed Successfully !");
  }; // const {value} = props


  return __jsx(Context.Provider, {
    value: {
      wishlistItems: wishlistItems,
      addToWish: addToWish,
      removeFromWish: removeFromWish
    }
  }, props.children);
};


/***/ }),

/***/ "EuFW":
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "ExhV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return googleProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return facebookProvider; });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtyw");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);


__webpack_require__("EuFW");

const configs = __webpack_require__("YZMt");

const config = {
  apiKey: configs.firebase.apiKey,
  authDomain: configs.firebase.authDomain,
  databaseURL: configs.firebase.databaseURL,
  projectId: configs.firebase.projectId,
  storageBucket: configs.firebase.storageBucket,
  messagingSenderId: configs.firebase.messagingSenderId,
  appId: configs.firebase.appId
};

if (!_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
}

const googleProvider = new _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth.GoogleAuthProvider();
const facebookProvider = new _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth.FacebookAuthProvider();
/* harmony default export */ __webpack_exports__["a"] = (_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "G4+s":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgA+gLBAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9tooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKA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qp9QoAH55oAx/hR4WvVluvF2tq5v7/Jh8zhtjHLOR23cY9vY16lRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//9k="

/***/ }),

/***/ "GM3v":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgA+gLBAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9tooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKA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qp9QoAH55oAx/hR4WvVluvF2tq5v7/Jh8zhtjHLOR23cY9vY16lRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//9k="

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "GccW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common_widgets_countdownComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JtKs");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const TimeBanner = () => {
  return __jsx("section", {
    className: "game-banner"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "banner-timer"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "6"
  }, __jsx("div", {
    className: "banner-text"
  }, __jsx("h2", null, "Save ", __jsx("span", null, "30% off"), " Digital Watch"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "6"
  }, __jsx(_components_common_widgets_countdownComponent__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null)))));
};

/* harmony default export */ __webpack_exports__["default"] = (TimeBanner);

/***/ }),

/***/ "Ie/Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_images_icon_visa_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JzZ/");
/* harmony import */ var _public_assets_images_icon_visa_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_visa_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets_images_icon_mastercard_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("dtqM");
/* harmony import */ var _public_assets_images_icon_mastercard_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_mastercard_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_assets_images_icon_paypal_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("k2Z+");
/* harmony import */ var _public_assets_images_icon_paypal_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_paypal_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_assets_images_icon_american_express_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("zUnT");
/* harmony import */ var _public_assets_images_icon_american_express_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_american_express_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_assets_images_icon_discover_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("T8au");
/* harmony import */ var _public_assets_images_icon_discover_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_discover_png__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const CopyRight = ({
  layout,
  fluid
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: `sub-footer ${layout}`
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: fluid
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: "6",
    md: "6",
    sm: "12"
  }, __jsx("div", {
    className: "footer-end"
  }, __jsx("p", null, __jsx("i", {
    className: "fa fa-copyright",
    "aria-hidden": "true"
  }), " 2022-23 powered by Health Beauty Bank"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: "6",
    md: "6",
    sm: "12"
  }, __jsx("div", {
    className: "payment-card-bottom"
  }, "Developed by ", __jsx("a", {
    href: "https://inno8designs.in/"
  }, "inno8 design")))))));
};

/* harmony default export */ __webpack_exports__["a"] = (CopyRight);

/***/ }),

/***/ "JtKs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("NfqO");
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countdown__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CountdownComponent = () => {
  const Completionist = () => __jsx("span", null, "You are good to go!");

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed
  }) => {
    if (completed) {
      // Render a completed state
      return __jsx(Completionist, null);
    } else {
      // Render a countdown
      return __jsx("div", {
        className: "timer-box"
      }, __jsx("div", {
        className: "timer"
      }, __jsx("div", {
        className: "timer-p",
        id: "demo"
      }, __jsx("span", null, days, __jsx("span", {
        className: "padding-l"
      }, ":"), __jsx("span", {
        className: "timer-cal"
      }, "Days")), __jsx("span", null, hours, __jsx("span", {
        className: "padding-l"
      }, ":"), __jsx("span", {
        className: "timer-cal"
      }, "Hrs")), __jsx("span", null, minutes, __jsx("span", {
        className: "padding-l"
      }, ":"), __jsx("span", {
        className: "timer-cal"
      }, "Min")), __jsx("span", null, seconds, __jsx("span", {
        className: "timer-cal"
      }, "Sec")))));
    }
  };

  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  var coundown = new Date(year, month, day + 10).getTime();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(react_countdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
    date: coundown,
    renderer: renderer
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (CountdownComponent);

/***/ }),

/***/ "JzZ/":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "K4dJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const closeSearch = () => {
  document.getElementById("search-overlay").style.display = "none";
};

const SearchOverlay = () => {
  return __jsx("div", {
    id: "search-overlay",
    className: "search-overlay"
  }, __jsx("div", null, __jsx("span", {
    className: "closebtn",
    onClick: closeSearch,
    title: "Close Overlay"
  }, "\xD7"), __jsx("div", {
    className: "overlay-content"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: "12"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    className: "form-control",
    id: "exampleInputPassword1",
    placeholder: "Search a Product"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    className: "btn btn-primary"
  }, __jsx("i", {
    className: "fa fa-search"
  })))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (SearchOverlay);

/***/ }),

/***/ "Kqbj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ExhV");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const TopBarDark = ({
  topClass,
  fluid
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  const firebaseLogout = () => {
    _config_base__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].auth().signOut();
    router.push("/page/account/login-auth");
  };

  return __jsx("div", {
    className: topClass
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: fluid
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6"
  }, __jsx("div", {
    className: "header-contact"
  }, __jsx("ul", null, __jsx("li", null, "Welcome to Our store Multikart"), __jsx("li", null, __jsx("i", {
    className: "fa fa-phone",
    "aria-hidden": "true"
  }), "Call Us: 123 - 456 - 7890")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6",
    className: "text-right"
  }, __jsx("ul", {
    className: "header-dropdown"
  }, __jsx("li", {
    className: "mobile-wishlist"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/page/account/wishlist"
  }, __jsx("a", null, __jsx("i", {
    className: "fa fa-heart",
    "aria-hidden": "true"
  }), " wishlist"))), __jsx("li", {
    className: "onhover-dropdown mobile-account"
  }, __jsx("i", {
    className: "fa fa-user",
    "aria-hidden": "true"
  }), " My Account", __jsx("ul", {
    className: "onhover-show-div"
  }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/page/account/login`
  }, __jsx("a", null, "Login"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/page/account/register`
  }, __jsx("a", null, "Register"))), __jsx("li", {
    onClick: () => firebaseLogout()
  }, __jsx("a", null, "Logout")))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (TopBarDark);

/***/ }),

/***/ "Lut4":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDMENEOTc1QjcyRTkxMUU4QjcwRThEQkM4NUVBNzhFNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDMENEOTc1QzcyRTkxMUU4QjcwRThEQkM4NUVBNzhFNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwQ0Q5NzU5NzJFOTExRThCNzBFOERCQzg1RUE3OEU1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwQ0Q5NzVBNzJFOTExRThCNzBFOERCQzg1RUE3OEU1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+7VNBOgAAAv5JREFUeNqclnuITFEcx++sKazHGvEHosws1r/IeoUirRLL0P6BTYvUsnlNm1dGS0hEi1WKSSuPvItlYmVJ2rTyj5U0YrDLem2bRxHr86vf6HTde/dy6tPp/u4553vO+T3uDYTDYctH6wuXoA+0QwDaYFYqlXrd0eQsy1+bD4NgEkzWvhcs8TPZSWQCPILNhk123gjNBo/hV2ZAJBKJQSNM60ikAO7ANVgP1Wp/pycx20BoVYFDdDvgMiR5nusmMh2uwkJYC+KsmXAL9sIJm8hxqGDBWvpFkId/yulnwxlTyBSpgd062dIrCcEztVfYRMS2BdIyDoGUGOku0q0ToT93bUSXLLJaTg8tPgPC0rUtwzc96J5DgncxsQWN9+LofvAEcuGD9Y8Nge46/0ZGwMnxS/X4CYc1RsM5uAkXYKLDmCr4hkCRaZSTdFVnd9FEC+siZiuDSjgJ4uihUAcbNKoy7SFEOVGZhv13OCU+qVexNh2YhJ3GxHFwV5OwzrCPgvsS9uw8aVzZKrpC3XA3uS0RadUoane5armeJljgcj0jEcn38FNafPIWenv4Mwduu7yTk3X2EMime5+lRc8rkr7AGJd3Y+GHR3h/lVsSX7yEe5kSoUm53xgb1ys7CA2GPQ9WSiW27V4idI4+Ss587hQKhU7rkZs0fCWLf6qzLU0s2a2MGwCDoRiOSWSx2ypDoNQoQWktqrGAw/ekQQtigc0+BdZAT9kdHIArZsYjIiE+Atswe56YTXYxHGY4XHGt4tWWw1PEjiC02CnjpbQvU5Fm6z8aC3/U+fMQ2uYksh32wQvbXLGVuqxbwmKVNqEW9etGJ5GonqZQnyVB30C+Vuhym8AK2CPJiNAn6K9+mar2YieR83JMrVtxjap6zQWpqCU2Efm+b2Xn4yUA5BAIbKK/LmOxV7tV4bP6hZSCedjIgRzNJ7O9gmy9Iik5u/QLGeU54RVdln7fc222oFbekPFLNAQeGL6I6w381YI+A0fiv0gzPyMiJeOon8m/BRgAuQrmGVlzgYMAAAAASUVORK5CYII="

/***/ }),

/***/ "MGQR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2dXf");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const LogoBlock = ({
  designClass
}) => {
  const imgData = ["/assets/images/logos/1.png", "/assets/images/logos/2.png", "/assets/images/logos/3.png", "/assets/images/logos/4.png", "/assets/images/logos/5.png", "/assets/images/logos/6.png", "/assets/images/logos/7.png", "/assets/images/logos/8.png"];
  return __jsx("section", {
    className: designClass
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "12"
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, _services_script__WEBPACK_IMPORTED_MODULE_2__[/* Slider6 */ "j"], {
    className: "slide-6 no-arrow"
  }), imgData.map((imgSrc, i) => {
    return __jsx("div", {
      key: i
    }, __jsx("div", {
      className: "logo-block"
    }, __jsx("a", {
      href: null
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
      src: imgSrc,
      alt: ""
    }))));
  }))))));
};

/* harmony default export */ __webpack_exports__["a"] = (LogoBlock);

/***/ }),

/***/ "MQhX":
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),

/***/ "Mryu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("B77O");
/* harmony import */ var _common_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ifSG");
/* harmony import */ var _containers_Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fWfq");
/* harmony import */ var _containers_CartContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("SeLL");
/* harmony import */ var _common_topbar_dark__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Kqbj");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("mo9o");
/* harmony import */ var _public_assets_images_icon_search_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("kCRN");
/* harmony import */ var _public_assets_images_icon_search_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_search_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_assets_images_icon_setting_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Lut4");
/* harmony import */ var _public_assets_images_icon_setting_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_setting_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_assets_images_icon_cart_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("dOwo");
/* harmony import */ var _public_assets_images_icon_cart_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_cart_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_currency__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("yl6w");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _common_search_overlay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("K4dJ");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















const HeaderOne = ({
  logoName,
  headerClass,
  topClass,
  noTopBar,
  direction
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"])();
  /*=====================
   Pre loader
   ==========================*/

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTimeout(function () {
      document.querySelectorAll(".loader-wrapper").style = "display:none";
    }, 2000);
    if (router.asPath !== "/layouts/Christmas") window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (number >= 300) {
      if (window.innerWidth < 576) document.getElementById("sticky").classList.remove("fixed");else document.getElementById("sticky").classList.add("fixed");
    } else document.getElementById("sticky").classList.remove("fixed");
  };

  const openNav = () => {
    var openmyslide = document.getElementById("mySidenav");

    if (openmyslide) {
      openmyslide.classList.add("open-side");
    }
  };

  const openSearch = () => {
    document.getElementById("search-overlay").style.display = "block";
  }; // eslint-disable-next-line


  const load = () => {
    setIsLoading(true);
    fetch().then(() => {
      // deal with data fetched
      setIsLoading(false);
    });
  };

  return __jsx("div", null, __jsx("header", {
    id: "sticky",
    className: `sticky ${headerClass}`
  }, __jsx("div", {
    className: "mobile-fix-option"
  }), noTopBar ? "" : __jsx(_common_topbar_dark__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    topClass: topClass
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], null, __jsx("div", {
    className: "main-menu"
  }, __jsx("div", {
    className: "menu-left"
  }, __jsx("div", {
    className: "navbar"
  }, __jsx("a", {
    href: null,
    onClick: openNav
  }, __jsx("div", {
    className: "bar-style"
  }, __jsx("i", {
    className: "fa fa-bars sidebar-bar",
    "aria-hidden": "true"
  }))), __jsx(_common_sidebar__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null)), __jsx("div", {
    className: "brand-logo"
  }, __jsx(_common_logo__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    logo: logoName
  }))), __jsx("div", {
    className: "menu-right pull-right"
  }, __jsx(_common_navbar__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null), __jsx("div", null, __jsx("div", {
    className: "icon-nav"
  }, __jsx("ul", null, __jsx("li", {
    className: "onhover-div mobile-search"
  }, __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Media"], {
    src: _public_assets_images_icon_search_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    onClick: openSearch,
    className: "img-fluid",
    alt: ""
  }))), __jsx(_common_currency__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    icon: _public_assets_images_icon_setting_png__WEBPACK_IMPORTED_MODULE_9___default.a
  }), direction === undefined ? __jsx(_containers_CartContainer__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    layout: direction,
    icon: _public_assets_images_icon_cart_png__WEBPACK_IMPORTED_MODULE_10___default.a
  }) : __jsx(_containers_Cart__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    layout: direction,
    icon: _public_assets_images_icon_cart_png__WEBPACK_IMPORTED_MODULE_10___default.a
  })))))))))), __jsx(_common_search_overlay__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], null));
};

/* harmony default export */ __webpack_exports__["a"] = (HeaderOne);

/***/ }),

/***/ "NfqO":
/***/ (function(module, exports) {

module.exports = require("react-countdown");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Oyez":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "Rnrp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_images_Offer_banner_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iGl2");
/* harmony import */ var _public_assets_images_Offer_banner_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_Offer_banner_png__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ModalComponent = () => {
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const toggle = () => setModal(!modal);

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: modal,
    toggle: toggle,
    className: "theme-modal modal-lg",
    centered: true
  }, __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], {
    className: "modal1"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "compare-modal"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "12"
  }, __jsx("div", {
    className: "modal-bg"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    onClick: toggle
  }, __jsx("span", {
    "aria-hidden": "true"
  }, "\xD7")), __jsx("div", {
    className: "offer-content"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: _public_assets_images_Offer_banner_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    className: "img-fluid blur-up lazyload",
    alt: ""
  }), __jsx("h2", null, "newsletter"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    action: "https://pixelstrap.us19.list-manage.com/subscribe/post?u=5a128856334b598b395f1fc9b&id=082f74cbda",
    className: "auth-form needs-validation",
    method: "post",
    id: "mc-embedded-subscribe-form",
    name: "mc-embedded-subscribe-form",
    target: "_blank"
  }, __jsx("div", {
    className: "form-group mx-sm-3"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    className: "form-control",
    name: "EMAIL",
    id: "mce-EMAIL",
    placeholder: "Enter your email",
    required: "required"
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    className: "btn btn-solid",
    id: "mc-submit"
  }, "subscribe"))))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (ModalComponent);

/***/ }),

/***/ "SeLL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./helpers/cart/index.js
var cart = __webpack_require__("/5QC");

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./components/headers/common/cart-header.js
var __jsx = external_react_default.a.createElement;





const CartHeader = ({
  item,
  symbol
}) => {
  const context = Object(external_react_["useContext"])(cart["a" /* default */]);
  return __jsx(external_react_["Fragment"], null, __jsx("li", null, __jsx("div", {
    className: "media"
  }, __jsx(link_default.a, {
    href: "/product/" + item.id
  }, __jsx("a", null, __jsx(external_reactstrap_["Media"], {
    alt: "",
    className: "mr-3",
    src: `${item.images[0].src}`
  }))), __jsx("div", {
    className: "media-body"
  }, __jsx(link_default.a, {
    href: "/product/" + item.id
  }, __jsx("a", null, __jsx("h4", null, item.name))), __jsx("h4", null, __jsx("span", null, item.qty, " x ", symbol, " ", (item.price - item.price * item.discount / 100).toFixed(2))))), __jsx("div", {
    className: "close-circle"
  }, __jsx("i", {
    className: "fa fa-times",
    "aria-hidden": "true",
    onClick: () => context.removeFromCart(item)
  }))));
};

/* harmony default export */ var cart_header = (CartHeader);
// EXTERNAL MODULE: ./helpers/Currency/CurrencyContext.js
var CurrencyContext = __webpack_require__("XJI2");

// CONCATENATED MODULE: ./components/containers/CartContainer.js
var CartContainer_jsx = external_react_default.a.createElement;







const CartContainer = ({
  icon
}) => {
  const context = Object(external_react_["useContext"])(cart["a" /* default */]);
  const currContext = Object(external_react_["useContext"])(CurrencyContext["b" /* CurrencyContext */]);
  const symbol = currContext.state.symbol;
  const cartList = context.state;
  const total = context.cartTotal;
  return CartContainer_jsx(external_react_["Fragment"], null, CartContainer_jsx("li", {
    className: "onhover-div mobile-cart"
  }, CartContainer_jsx("div", {
    className: "cart-qty-cls"
  }, cartList.length), CartContainer_jsx(link_default.a, {
    href: `/page/account/cart`
  }, CartContainer_jsx("div", null, CartContainer_jsx(external_reactstrap_["Media"], {
    src: icon,
    className: "img-fluid",
    alt: ""
  }), CartContainer_jsx("i", {
    className: "fa fa-shopping-cart"
  }))), CartContainer_jsx("ul", {
    className: "show-div shopping-cart"
  }, cartList.map((item, index) => CartContainer_jsx(cart_header, {
    key: index,
    item: item,
    total: total,
    symbol: symbol
  })), cartList.length > 0 ? CartContainer_jsx("div", null, CartContainer_jsx("li", null, CartContainer_jsx("div", {
    className: "total"
  }, CartContainer_jsx("h5", null, "subtotal :", " ", CartContainer_jsx("span", null, symbol, total)))), CartContainer_jsx("li", null, CartContainer_jsx("div", {
    className: "buttons view-cart"
  }, CartContainer_jsx(link_default.a, {
    href: `/page/account/cart`
  }, CartContainer_jsx("a", null, "view cart")), CartContainer_jsx(link_default.a, {
    href: `/page/account/checkout`
  }, CartContainer_jsx("a", {
    className: "checkout"
  }, "checkout"))))) : CartContainer_jsx("li", null, CartContainer_jsx("h5", null, "Your cart is currently empty.")))));
};

/* harmony default export */ var containers_CartContainer = __webpack_exports__["a"] = (CartContainer);

/***/ }),

/***/ "T8au":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAE80lEQVRIibWWa2wUVRiGn7ntzC67LYUWBAxpQUqkBm+AtrUQE4iQIpgmhGAMYPCCaIiJPxRI9I8GNdGooEAgEECNoCiIYCIaLm0pVLDWAoVSCZXaUiiku1v2MrMznz+WJVCQooH335mcc5555zvzvUeJRiL0ojFAOVACjAD6AQpwEWgG9gM7gYM320S5CehxYDEwsbc3uaw9wFLgp/8CWg68fIuAnloNvNAbSAN2A2X/E5JRLTABSGQeqD0mVN4GCMA40rW7oqtBK4Di2wDJ6EFgfWaQ+XRjSdu9ExoPVGYcfXqHIACfQdpREXDkDoIAxurALM/zME0fpuW/4SwvlULVdQCitoBPQYAsANfBcT0Mn3ndumQiTjJpo6rqLB14zDRNYrEYy1esxvT7qXiynNa2dtrazyIiTCgr4aNlK8gZks/8meUoP65EyR/F9s5+jC4sICsYYNumb9F0jcEDB9LecQ7XTTF96hRM04ebckt04B7Tsqg+UMve6oOUFo9j9osLGTliGFU1tcx5eiYnmjfScbGL0okjcTYsxPhuI9ZIg99aRnFs5jsMD7qsWrcB13GYNnUKx5ua+b2+gUAgwIyK6XRHo/kq0BegKxzmsdJiKqaVU3XgIFmhEO+//Rb1R46ybOUaFr6ygCdKx+CeOkTKB3aTwxvPP8XmHbv4YvMW3nz9NfJychhfWszxppPk9Mvh0XFjSDk2qFqWtnjRoiW6YRiaprH56y3UH23kpefm4nke0Wg3mqZRMa2cTV9t4lRnN49MrsB37jBe0cNY89bQ3nqG+wsLKJ88iZoD1eTmDeDewhEMGXwXAb9FfsEwUqbPIRqJ/B2JRMROJqSttVUi4bCIiNjJpLS0/CWO44iISOOxRqmq3i8ZnQ0npO1c15Wx57pypuW0NJ1sFhER17Glrb1DoiIS/WVdhxKNRPaKyHhVVQn4/TiOg5NK0ScYZO+ePTQ2NhKLx8nt35/s7Cw6L1zkfDjGsPyh5PUNUVlZSTKZpLCwkDlz5yKeRyIeR/WZKIZOcv9mWPHMIRWoVhQFEeFSLIbtOIgIALquEw6HudDZic80KSq6D9d18eIRsvw+wuEwiqrieh62bROLxUjE47iagWPo2LVb4YOZkDu0RolGIqOB+hv9P4ZhYFoW4a4uHMchFAphWhYAFzo7iUaj5BcU4LkuiUSCRCyGlZeHB7BrFbJmPph+GD2pJNPr6oAHroaICJqmAeDz+RARbNsm417XdTRNw3EcVEUBFFJ+CwFY/yry/ceQFYQBBU3k3D0yAyqmR1u/ZXkeBLPTSdbSgKxdAH9UwaDBYJgQyJ6Ebv18dfCtBZ69ZYAIWEHwqeCk4If3kG3vQrwbBg0H8UDVvkHVZuC51yXsYeChmwOAPqG0AwGqPkd2fggn6iC3PwT7gZMEVWtEUUfhucD1UW4B+0jn07Uy/GClGyvdEfh1C7JvHRypBMuA3KFpl04SAtkNGP4youfDqOk66z22S5CO4TV43jx0H/S53NEdDxqroX4nUrcdTjWAqcHgAlBUSDlpi2afL8kaOBs77uK5ZED/ft3StCmk7CWcrC7l+B6k+QCcroPopfRpCuWlHYibBmlGLYZ/KWZgK74AJLoh3A6a0QsoFII/65BPKsroPDMVM1BCoG8+upGNCKBEUNUWNL0GzdyBZuxGuVxEMwjJ2DWgfwC09kc21Mu6AAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "TG1l":
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "U8OX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Provider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oAEb");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CompareContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("U8OX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _CompareContext__WEBPACK_IMPORTED_MODULE_2__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _CompareContext__WEBPACK_IMPORTED_MODULE_2__["d"]; });

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  compareItems: Function,
  addToCompare: Function,
  removeFromComapre: Function
});

const getLocalCompareItems = () => {
  try {
    const list = localStorage.getItem("compare");

    if (list === null) {
      return [];
    } else {
      return JSON.parse(list);
    }
  } catch (err) {
    return [];
  }
};

const Provider = props => {
  const {
    0: compareItems,
    1: setcompareItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getLocalCompareItems());
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    localStorage.setItem("compare", JSON.stringify(compareItems));
  }, [compareItems]); // Add Product To Wishlist

  const addToCompare = item => {
    const index = compareItems.findIndex(compare => compare.id === item.id);

    if (index === -1) {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].success("Product Added Successfully !");
      setcompareItems([...compareItems, item]);
    } else {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error("This Product Already Added !");
    }
  }; // Remove Product From compare


  const removeFromComapre = item => {
    setcompareItems(compareItems.filter(e => e.id !== item.id));
    react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error("Product Removed Successfully !");
  };

  return __jsx(Context.Provider, {
    value: {
      compareItems: compareItems,
      addToCompare: addToCompare,
      removeFromComapre: removeFromComapre
    }
  }, props.children);
};


/***/ }),

/***/ "UboJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("XJI2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const GET_PRODUCTS = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default.a`
  query products($type: _CategoryType!, $indexFrom: Int!, $limit: Int!) {
    products(type: $type, indexFrom: $indexFrom, limit: $limit) {
      items {
        id
        title
        description
        type
        brand
        category
        price
        stock
        new
        sale
        discount
        variants {
          id
          sku
          size
          color
          image_id
        }
        images {
          image_id
          id
          alt
          src
        }
      }
    }
  }
`;

const ProductSlider = ({
  type
}) => {
  const curContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_6__[/* CurrencyContext */ "b"]);
  const currency = curContext.state;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var {
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(GET_PRODUCTS, {
    variables: {
      type: type,
      indexFrom: 0,
      limit: 10
    }
  });

  const clickProductDetail = product => {
    const titleProps = product.title.split(" ").join("");
    router.push(`/product-details/${product.id}` + "-" + `${titleProps}`);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("section", {
    className: `${type !== "fashion" && type !== "kids" ? "section-b-space" : ""}`
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "multiple-slider"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: "3",
    sm: "6"
  }, __jsx("div", {
    className: "theme-card"
  }, __jsx("h5", {
    className: "title-border"
  }, "new products"), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "offer-slider slide-1"
  }, __jsx("div", null, data && data.products.items.slice(0, 3).map((product, index) => __jsx("div", {
    className: "media",
    key: index
  }, __jsx("a", {
    onClick: () => clickProductDetail(product)
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    className: "img-fluid blur-up lazyload",
    src: product.images[0].src,
    alt: ""
  })), __jsx("div", {
    className: "media-body align-self-center"
  }, __jsx("div", {
    className: "rating"
  }, __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  })), __jsx("a", {
    onClick: () => clickProductDetail(product)
  }, __jsx("h6", null, product.title)), __jsx("h4", null, currency.symbol, product.price - product.price * product.discount / 100, __jsx("del", null, __jsx("span", {
    className: "money"
  }, currency.symbol, product.price))))))), __jsx("div", null, data && data.products.items.slice(4, 7).map((product, index) => __jsx("div", {
    className: "media",
    key: index
  }, __jsx("a", {
    onClick: () => clickProductDetail(product)
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    className: "img-fluid blur-up lazyload",
    src: product.images[0].src,
    alt: ""
  })), __jsx("div", {
    className: "media-body align-self-center"
  }, __jsx("div", {
    className: "rating"
  }, __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  })), __jsx("a", {
    onClick: () => clickProductDetail(product)
  }, __jsx("h6", null, product.title)), __jsx("h4", null, currency.symbol, ((product.price - product.price * product.discount / 100) * currency.value).toFixed(2), __jsx("del", null, __jsx("span", {
    className: "money"
  }, currency.symbol, (product.price * currency.value).toFixed(2))))))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: "3",
    sm: "6"
  }, __jsx("div", {
    className: "theme-card"
  }, __jsx("h5", {
    className: "title-border"
  }, "feature product"), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "offer-slider slide-1"
  }, __jsx("div", null, data && data.products.items.slice(7, 10).map((product, index) => __jsx("div", {
    className: "media",
    key: index
  }, __jsx("a", {
    onClick: () => clickProductDetail(product)
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    className: "img-fluid blur-up lazyload",
    src: product.images[0].src,
    alt: ""
  })), __jsx("div", {
    className: "media-body align-self-center"
  }, __jsx("div", {
    className: "rating"
  }, __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  })), __jsx("a", {
    onClick: () => clickProductDetail(product)
  }, __jsx("h6", null, product.title)), __jsx("h4", null, currency.symbol, ((product.price - product.price * product.discount / 100) * currency.value).toFixed(2), __jsx("del", null, __jsx("span", {
    className: "money"
  }, currency.symbol, (product.price * currency.value).toFixed(2)))))))), __jsx("div", null, data && data.products.items.slice(4, 7).map((product, index) => __jsx("div", {
    className: "media",
    key: index
  }, __jsx("a", {
    onClick: () => clickProductDetail(product)
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    className: "img-fluid blur-up lazyload",
    src: product.images[0].src,
    alt: ""
  })), __jsx("div", {
    className: "media-body align-self-center"
  }, __jsx("div", {
    className: "rating"
  }, __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  })), __jsx("a", {
    onClick: () => clickProductDetail(product)
  }, __jsx("h6", null, product.title)), __jsx("h4", null, currency.symbol, ((product.price - product.price * product.discount / 100) * currency.value).toFixed(2), __jsx("del", null, __jsx("span", {
    className: "money"
  }, currency.symbol, (product.price * currency.value).toFixed(2))))))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: "3",
    sm: "6"
  }, __jsx("div", {
    className: "theme-card"
  }, __jsx("h5", {
    className: "title-border"
  }, "best seller"), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "offer-slider slide-1"
  }, __jsx("div", null, data && data.products.items.slice(0, 3).map((product, index) => __jsx("div", {
    className: "media",
    key: index
  }, __jsx("a", {
    onClick: () => clickProductDetail(product)
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    className: "img-fluid blur-up lazyload",
    src: product.images[0].src,
    alt: ""
  })), __jsx("div", {
    className: "media-body align-self-center"
  }, __jsx("div", {
    className: "rating"
  }, __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  })), __jsx("a", {
    onClick: () => clickProductDetail(product)
  }, __jsx("h6", null, product.title)), __jsx("h4", null, currency.symbol, ((product.price - product.price * product.discount / 100) * currency.value).toFixed(2), __jsx("del", null, __jsx("span", {
    className: "money"
  }, currency.symbol, (product.price * currency.value).toFixed(2)))))))), __jsx("div", null, data && data.products.items.slice(4, 7).map((product, index) => __jsx("div", {
    className: "media",
    key: index
  }, __jsx("a", {
    onClick: () => clickProductDetail(product)
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    className: "img-fluid blur-up lazyload",
    src: product.images[0].src,
    alt: ""
  })), __jsx("div", {
    className: "media-body align-self-center"
  }, __jsx("div", {
    className: "rating"
  }, __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  })), __jsx("a", {
    onClick: () => clickProductDetail(product)
  }, __jsx("h6", null, product.title)), __jsx("h4", null, currency.symbol, ((product.price - product.price * product.discount / 100) * currency.value).toFixed(2), __jsx("del", null, __jsx("span", {
    className: "money"
  }, currency.symbol, (product.price * currency.value).toFixed(2))))))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: "3",
    sm: "6"
  }, __jsx("div", {
    className: "theme-card"
  }, __jsx("h5", {
    className: "title-border"
  }, "on sell"), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "offer-slider slide-1"
  }, __jsx("div", null, data && data.products.items.slice(0, 3).map((product, index) => __jsx("div", {
    className: "media",
    key: index
  }, __jsx("a", {
    onClick: () => clickProductDetail(product)
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    className: "img-fluid blur-up lazyload",
    src: product.images[0].src,
    alt: ""
  })), __jsx("div", {
    className: "media-body align-self-center"
  }, __jsx("div", {
    className: "rating"
  }, __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  })), __jsx("a", {
    onClick: () => clickProductDetail(product)
  }, __jsx("h6", null, product.title)), __jsx("h4", null, currency.symbol, ((product.price - product.price * product.discount / 100) * currency.value).toFixed(2), __jsx("del", null, __jsx("span", {
    className: "money"
  }, currency.symbol, (product.price * currency.value).toFixed(2)))))))), __jsx("div", null, data && data.products.items.slice(4, 7).map((product, index) => __jsx("div", {
    className: "media",
    key: index
  }, __jsx("a", {
    onClick: () => clickProductDetail(product)
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    className: "img-fluid blur-up lazyload",
    src: product.images[0].src,
    alt: ""
  })), __jsx("div", {
    className: "media-body align-self-center"
  }, __jsx("div", {
    className: "rating"
  }, __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  })), __jsx("a", {
    onClick: () => clickProductDetail(product)
  }, __jsx("h6", null, product.title)), __jsx("h4", null, currency.symbol, ((product.price - product.price * product.discount / 100) * currency.value).toFixed(2), __jsx("del", null, __jsx("span", {
    className: "money"
  }, currency.symbol, (product.price * currency.value).toFixed(2)))))))))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (ProductSlider);

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "XJI2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Provider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CurrencyContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("XJI2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _CurrencyContext__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _CurrencyContext__WEBPACK_IMPORTED_MODULE_1__["d"]; });

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
const Provider = props => {
  const {
    0: selectedCurr,
    1: selectedCurrency
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    currency: "USD",
    symbol: "$",
    value: 1
  });
  const currencyContext = {
    selectedCurr,
    selectedCurrency
  };
  return __jsx(Context.Provider, {
    value: {
      state: selectedCurr,
      currencyContext: currencyContext
    }
  }, props.children);
};


/***/ }),

/***/ "Y+0o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _product_box_ProductBox6__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("q9xQ");
/* harmony import */ var _helpers_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("/5QC");
/* harmony import */ var _helpers_wishlist_WishlistContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("EO2r");
/* harmony import */ var _PostLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("tfG8");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_script__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("2dXf");
/* harmony import */ var _helpers_Compare_CompareContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("U8OX");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












const GET_PRODUCTS = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
    query  products($type:_CategoryType!,$indexFrom:Int! ,$limit:Int!) {
        products (type: $type,indexFrom:$indexFrom ,limit:$limit){
            items {
                id
                title
                description
                type
                brand
                category 
                price
                new
                stock
                sale
                discount
                variants{
                    id
                    sku
                    size
                    color
                    image_id
                }
                images{
                    image_id
                    id
                    alt
                    src
                }
            }
        }
    }
`;

const CollectionTen = ({
  type,
  cartClass,
  title
}) => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_cart__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);
  const contextWishlist = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_wishlist_WishlistContext__WEBPACK_IMPORTED_MODULE_6__[/* WishlistContext */ "c"]);
  const compareContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_Compare_CompareContext__WEBPACK_IMPORTED_MODULE_10__[/* CompareContext */ "a"]);
  const quantity = context.quantity;
  var {
    loading,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_PRODUCTS, {
    variables: {
      type: type,
      indexFrom: 0,
      limit: 8
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
    className: "game-product p-t-0 ratio_asos"
  }, title ? __jsx("div", {
    className: "title2"
  }, __jsx("h2", {
    className: "title-inner2"
  }, title)) : '', __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, !data || !data.products || !data.products.items || data.products.items.length === 0 || loading ? __jsx("div", {
    className: "row mx-0 margin-default"
  }, __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6"
  }, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null)), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6"
  }, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null)), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6"
  }, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null)), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6"
  }, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null))) : __jsx(react_slick__WEBPACK_IMPORTED_MODULE_8___default.a, _extends({}, _services_script__WEBPACK_IMPORTED_MODULE_9__[/* Product6 */ "d"], {
    className: "product-slider-5 product-m no-arrow"
  }), data && data.products.items.slice(0, 5).map((product, index) => __jsx(_product_box_ProductBox6__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    product: product,
    addToComapre: () => compareContext.addToCompare(product),
    addCart: () => context.addToCart(product, quantity),
    key: index,
    addWishlist: () => contextWishlist.addToWish(product),
    cartclassName: cartClass
  }))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (CollectionTen);

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "YZMt":
/***/ (function(module) {

module.exports = JSON.parse("{\"firebase\":{\"apiKey\":\"AIzaSyB48VO9ib0Va5F_6dYs8BnjYldwNxbfuBQ\",\"authDomain\":\"multikart-react.firebaseapp.com\",\"projectId\":\"multikart-react\",\"storageBucket\":\"multikart-react.appspot.com\",\"messagingSenderId\":\"298873485216\",\"appId\":\"1:298873485216:web:e719b33e1427c8cfde56c5\"}}");

/***/ }),

/***/ "Z0Qo":
/***/ (function(module) {

module.exports = JSON.parse("[{\"lang\":\"English\",\"val\":\"en\"},{\"lang\":\"Franch\",\"val\":\"fn\"}]");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.asPath || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dOwo":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNzE0NDdGMjcyRTkxMUU4QjY4MkE5N0U1QkVGNzJENyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDNzE0NDdGMzcyRTkxMUU4QjY4MkE5N0U1QkVGNzJENyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM3MTQ0N0YwNzJFOTExRThCNjgyQTk3RTVCRUY3MkQ3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM3MTQ0N0YxNzJFOTExRThCNjgyQTk3RTVCRUY3MkQ3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hNS3IQAAAf9JREFUeNqklU1IFVEUx+fZKwldmEGJHyjvWbpxUUi0aaEouAzMQIUnSpC6UHfiVxuN2hluXKkbN4roJgRBUtyECIpYEcJDhBYRqahoIT6n34EzcJne14wHfm/ePcz8597/vedMIBQKWUkiG0agAfIgADb8ggUYiEajR4kezkgi/BxOoR0+QjPUQiPMQwschsPhpkQCgQQzb4VJGIPuJBN4D73QyQrG0xGXRBTewLCVOnpgFCp4wZdUtizCfprCFoIfuHyHpVSe34cyiFje4iXk438omfgz+AtrXpSZ/Y5ufnU8z8WzOijX/Dbc8qB/KZ7rf7FoBbqC/HyCKpiAOfit1ngNOV13xB7ogMdBFZ6BVz4ExZL/cngf4/JaxKf0XP+BIsjyIo6QOZT92lO9WRFvg114B+vww/If91R4hBUNmUUkby1Uz33ZwirkEJxITyJ/6RzFIm1KD6zrRZnqlKZqXPWwYYzlFGzCQyP3mdlG/HTFAqh0td9HkGPknkKxH/EzrTqzUM7hwsgduO5JW9xS/7yM0xbPUSucuAm3IdPI5cLdRAJB42prITkhbaHfGP+EQS0SJ/pg1VVEtqMbNPzNdK1kS3HiGN66v0Su8r9SnTP3l+irnpAXukl2HF/tOGPnHmkb07LhvLDEnLnEE1jWj3HMRwHdgG9Q4yT+CTAApdl93m9bmRMAAAAASUVORK5CYII="

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "dtqM":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAFjklEQVRIiaWWa4ycVRnHf+e8Zy47l52d7qXdWdputwsLtpUVWivLVkrgk2DwkghY1EBq8Erwgwnxg+FLIwlRMUGNxgYb+AJagjFySyRlu25Li9SitbSulO223e7M7Ozc573MOccPs0Nqs11t+CfvhzfPyfM77/Oc8/xfMf74fv6HtgJ3AWPAtcAqQAAFYBqYAl4G3lopiVohdjvwA+DOK8Q7gcGl+A+BA8CPgNeXWyyvkORp4I0VIMtpJ/Aa8Ov/B+QAE8C3rwJwub5Oq4zRlUAHgR0fAdLWJ2n17kNd2qNfArcACGsJVJhyLImvwghriXt1Em4VYQxCWFzCLJoUrgkjhCUp63SJCg4GgwD4BLAP+NqloG3AN4S1WCmZS68h6lbZdOZdeisLBE6ImZ61vD8wTIfvUl6MkJQenwodJxPJEVjF6eZ63g1GiDouGSdP0zoAXwV+Axxsg37e+ooQ86lexk9M8qWpF9mYnSHmu2ghKcY7mRrayjNjD3Dn6pN8l33cGJ0G2QAkjWaKP9dv5iflB5kOBtgYOt+G/QLYIsYf378J+AfA+VX9fO7wH3jspacwKkw21UvgOAgLcd0gcq7Euc2D3PpIFhHPQbUP3yqEgJBsgLNAqdHPfdknec+sZ70zh8YB2CaB+4W1zHetZvt7h/n+Sz9jMd7FTLofX4WwCIwULPpxCpsy3DCcpXRM4gVrca3AmCbaSlwdo+EPkuqYY2/3HhK2RoV4u//3S2C86TgoYfj8gd+h6y5532LyOfwLF2gWFvFm5wiy5+lccxZzTZlSzqd2fAYVcUHFsOWz2NpFcHN4iyEy9iS74q8xp3vboDEFDNeicdYeO8ToyACJ3T9lYzSG1Zr5555FaIHqXUPixuvoSEzjz19EywpyeBwx9gCqMoP+1x/BNEF72Egatuxg/G9VfvX2LKZTIjGDCujyVZjkB9P03LSOru89iq5WKU9MsmHPHiJDG/DOnEHXG8jULpy6T6hWQ23bgTn9CPrvzxK+91Vk+jpss46ZPQB9GXrUC6RkmcB2ExGmUwJCGkMQT2KTSVjI41+YI5zpp+OGEXS1SnR4GBkNY7wGxtcE2UXy+35LaPDjODd/C9G5HqJpbOEUxFZD8QRufpog3I3EfnhhizGvHsuObufff32B4AtfJB9LEcn0I5QCazGej656pEY8Oga7qB6dIeKcxBR3gXYJJh4DDObi28ihe3D0EU6VOijIPlaJ8wAVBUx3BF7m3DVDvD6hePjgBOVYGuu5WK0RCBASY8OYUR+xqYHjJUnvjBJMPoEJJBgDgI2miR55AhTsN3tJCLd9GGYU8Bewn04Xc/z+rofYWpxh7PQRpgeG0I6DsBYEaC0J3q+TDOVJfNZgkyE8dx0i2iqNRRKTJUjC0wvf4WB9M9eGZrGtcXTIWbfz3hyIb0YDj3Ksk6mR7fSV8mye/SddtRKRpk9no0pfLUc53MmPN+4m2NbN9aGjKFtESQ8lK4ScAhDiqcLDPFn+MhmVJyQ0LY/kUbHksMeAUWU0uWQ3Tcfh9hOTjJ45Tk+lQOCEONszwOTHxnhr4CaSxTJ3qze5LfYOA2qBwDqcCtbycv02ptwtDKgsceGiW+ZwCri+DbqlPdalNfgqTD7ZDUDcq9OUDrVIjLhXp7e2gGvDXFi6jHFZR1tJ1SRIyBqrncJSKUW7P3cAb7SH6iHgGeBBIyRKN1lTnMcKgREty0rXigA0cVBCs05dxCLQViIk9DnFywEAz9Ny6v8yvoeAdy5dJazFMRrHaJaTwKKExmHZ+AngvvbL5Q57K3B02axXp+MsmeiVQC4tG977ESDP0XLXykqgtnYDnwEmrwJwGLgH+AoszZ1LtNJ/3StLzzhwN61SbABStC5HCfiA1kH6E/DmSrv4D19DRIS7aeNEAAAAAElFTkSuQmCC"

/***/ }),

/***/ "dy+W":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/headers/header-one.js
var header_one = __webpack_require__("Mryu");

// EXTERNAL MODULE: ./pages/layouts/Game/Component/Home-slider.js
var Home_slider = __webpack_require__("7nKk");

// EXTERNAL MODULE: ./pages/layouts/Game/Component/Category.js
var Category = __webpack_require__("/BrH");

// EXTERNAL MODULE: external "react-tabs"
var external_react_tabs_ = __webpack_require__("65ip");

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: ./components/common/product-box/ProductBox6.js
var ProductBox6 = __webpack_require__("q9xQ");

// EXTERNAL MODULE: ./helpers/cart/index.js
var cart = __webpack_require__("/5QC");

// EXTERNAL MODULE: ./helpers/wishlist/WishlistContext.js
var WishlistContext = __webpack_require__("EO2r");

// EXTERNAL MODULE: ./components/common/PostLoader.js
var PostLoader = __webpack_require__("tfG8");

// EXTERNAL MODULE: ./helpers/Compare/CompareContext.js
var CompareContext = __webpack_require__("U8OX");

// CONCATENATED MODULE: ./components/common/Collections/TabCollection8.js
var __jsx = external_react_default.a.createElement;










const GET_PRODUCTS = external_graphql_tag_default.a`
  query products($type: _CategoryType!, $indexFrom: Int!, $limit: Int!) {
    products(type: $type, indexFrom: $indexFrom, limit: $limit) {
      items {
        id
        title
        description
        type
        brand
        category
        price
        new
        sale
        stock
        discount
        variants {
          id
          sku
          size
          color
          image_id
        }
        images {
          image_id
          id
          alt
          src
        }
      }
    }
  }
`;

const TabContent = ({
  data,
  loading,
  cartClass,
  startIndex,
  endIndex
}) => {
  const context = Object(external_react_["useContext"])(cart["a" /* default */]);
  const wishListContext = Object(external_react_["useContext"])(WishlistContext["c" /* WishlistContext */]);
  const compareContext = Object(external_react_["useContext"])(CompareContext["a" /* CompareContext */]);
  const quantity = context.quantity;
  return __jsx(external_reactstrap_["Row"], {
    className: " no-slider five-product"
  }, !data || !data.products || !data.products.items || data.products.items.length === 0 || loading ? __jsx("div", {
    className: "row mx-0 margin-default"
  }, __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6"
  }, __jsx(PostLoader["a" /* default */], null)), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6"
  }, __jsx(PostLoader["a" /* default */], null)), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6"
  }, __jsx(PostLoader["a" /* default */], null)), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6"
  }, __jsx(PostLoader["a" /* default */], null))) : __jsx(external_react_default.a.Fragment, null, data && data.products.items.slice(startIndex, endIndex).map((product, index) => __jsx(ProductBox6["a" /* default */], {
    product: product,
    addToComapre: () => compareContext.addToCompare(product),
    addCart: () => context.addToCart(product, quantity),
    key: index,
    addWishlist: () => wishListContext.addToWish(product),
    cartclassName: cartClass
  }))));
};

const TabCollection = ({
  type,
  cartClass
}) => {
  const {
    0: activeTab,
    1: setActiveTab
  } = Object(external_react_["useState"])(type);
  var {
    loading,
    data
  } = Object(react_hooks_["useQuery"])(GET_PRODUCTS, {
    variables: {
      type: activeTab,
      indexFrom: 0,
      limit: 19
    }
  });
  return __jsx(external_react_default.a.Fragment, null, __jsx("div", {
    className: "title1  section-t-space"
  }, __jsx("h4", null, "special offer"), __jsx("h2", {
    className: "title-inner1"
  }, "top collection")), __jsx("section", {
    className: "game-product ratio_asos pt-0"
  }, __jsx(external_reactstrap_["Container"], null, __jsx(external_reactstrap_["Row"], null, __jsx(external_reactstrap_["Col"], {
    lg: "6",
    className: "m-auto"
  }, __jsx("div", {
    className: "product-para"
  }, __jsx("p", {
    className: "text-center"
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,")))), __jsx(external_reactstrap_["Row"], null, __jsx(external_reactstrap_["Col"], null, __jsx(external_react_tabs_["Tabs"], {
    className: "theme-tab"
  }, __jsx(external_react_tabs_["TabList"], {
    className: "tabs tab-title"
  }, __jsx(external_react_tabs_["Tab"], {
    className: activeTab == type ? "active" : "",
    onClick: () => setActiveTab(type)
  }, "New Products"), __jsx(external_react_tabs_["Tab"], {
    className: activeTab == "game" ? "active" : "",
    onClick: () => setActiveTab("game")
  }, "Featured Products"), __jsx(external_react_tabs_["Tab"], {
    className: activeTab == "game" ? "active" : "",
    onClick: () => setActiveTab("game")
  }, "Best Sellers")), __jsx("div", {
    className: "tab-content-cls"
  }, __jsx(external_react_tabs_["TabPanel"], {
    className: "tab-content active default"
  }, __jsx(TabContent, {
    data: data,
    loading: loading,
    cartClass: cartClass,
    startIndex: 0,
    endIndex: 10
  })), __jsx(external_react_tabs_["TabPanel"], {
    className: "tab-content"
  }, __jsx(TabContent, {
    data: data,
    loading: loading,
    cartClass: cartClass,
    startIndex: 9,
    endIndex: 19
  })), __jsx(external_react_tabs_["TabPanel"], {
    className: "tab-content"
  }, __jsx(TabContent, {
    data: data,
    loading: loading,
    cartClass: cartClass,
    startIndex: 0,
    endIndex: 10
  })))))))));
};

/* harmony default export */ var TabCollection8 = (TabCollection);
// EXTERNAL MODULE: ./helpers/apollo/apollo.js
var apollo = __webpack_require__("gy5E");

// EXTERNAL MODULE: ./pages/layouts/Game/Component/Time-banner.js
var Time_banner = __webpack_require__("GccW");

// EXTERNAL MODULE: ./components/common/Collections/Collection9.js
var Collection9 = __webpack_require__("UboJ");

// EXTERNAL MODULE: ./components/common/Collections/Collection13.js
var Collection13 = __webpack_require__("Y+0o");

// EXTERNAL MODULE: ./components/common/logo-block.js
var logo_block = __webpack_require__("MGQR");

// EXTERNAL MODULE: ./components/common/Paragraph.js
var Paragraph = __webpack_require__("Czz6");

// EXTERNAL MODULE: ./components/common/Modal.js
var Modal = __webpack_require__("Rnrp");

// EXTERNAL MODULE: ./pages/layouts/Fashion/Components/MasterParallaxBanner.js
var MasterParallaxBanner = __webpack_require__("nULy");

// EXTERNAL MODULE: ./components/footers/common/MasterFooterTwo.js
var MasterFooterTwo = __webpack_require__("pnUu");

// CONCATENATED MODULE: ./pages/layouts/Game/index.js
var Game_jsx = external_react_default.a.createElement;















const Game = () => {
  Object(external_react_["useEffect"])(() => {
    document.documentElement.style.setProperty("--theme-deafult", "#ff4c3b");
  });
  return Game_jsx(external_react_["Fragment"], null, Game_jsx(Modal["a" /* default */], null), Game_jsx(header_one["a" /* default */], {
    logoName: "logo.png",
    headerClass: "color-dark",
    topClass: "top-header top-header-dark2"
  }), Game_jsx(Home_slider["default"], null), Game_jsx(Category["default"], null), Game_jsx(TabCollection8, {
    type: "game",
    designClass: "ratio_asos game-product section-b-space",
    noSlider: "true",
    cartClass: "cart-info cart-wrap"
  }), Game_jsx(Time_banner["default"], null), Game_jsx(Collection9["a" /* default */], {
    type: "game",
    designClass: "ratio_asos game-product section-b-space",
    noSlider: "true",
    cartClass: "cart-info cart-wrap"
  }), Game_jsx(MasterParallaxBanner["default"], {
    parallaxSectionClass: "game-parallax effect-cls",
    bg: "parallax-banner20",
    parallaxClass: "text-center p-center",
    title: "2019",
    subTitle1: "xbox games",
    subTitle2: "special offer"
  }), Game_jsx(Paragraph["a" /* default */], {
    title: "title1  section-t-space",
    inner: "title-inner1"
  }), Game_jsx(Collection13["a" /* default */], {
    type: "game",
    designClass: "ratio_asos game-product section-b-space",
    noSlider: "true",
    cartClass: "cart-info cart-wrap"
  }), Game_jsx("div", {
    className: "section-b-space"
  }, Game_jsx(logo_block["a" /* default */], null)), Game_jsx(MasterFooterTwo["a" /* default */], {
    footerClass: `bg-img-gym overlay-cls effect-cls footer-effect bg-size blur-up lazyloaded`,
    footerSection: " border-b",
    footerLogoClass: "text-center",
    logoName: "footerlogo.png",
    logoImg: true,
    myAccount: true,
    layoutClass: `darker-subfooter`
  }));
};

/* harmony default export */ var layouts_Game = __webpack_exports__["default"] = (Object(apollo["a" /* withApollo */])(Game));

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;

  try {
    base = new URL(currentPath, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.asPath, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.asPath, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fWfq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/5QC");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XJI2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const CartComponent = ({
  icon,
  layout
}) => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_cart__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
  const currContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_4__[/* CurrencyContext */ "b"]);
  const symbol = currContext.state.symbol;
  const cartList = context.state;
  const total = context.cartTotal;
  const removeFromCart = context.removeFromCart;
  const {
    0: openSide,
    1: setOpenSide
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("li", {
    className: "onhover-div mobile-cart",
    onClick: () => setOpenSide(true)
  }, __jsx("div", {
    className: "cart-qty-cls"
  }, cartList.length), __jsx("div", {
    href: null
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    alt: "cart",
    src: icon,
    className: "img-fluid blur-up lazyload"
  }), __jsx("i", {
    className: "fa fa-shopping-cart"
  }))), __jsx("div", {
    id: "cart_side",
    className: `add_to_cart ${layout} ${openSide ? "open-side" : ""} `
  }, __jsx("a", {
    href: null,
    className: "overlay"
  }), __jsx("div", {
    className: "cart-inner"
  }, __jsx("div", {
    className: "cart_top"
  }, __jsx("h3", null, "my cart"), __jsx("div", {
    className: "close-cart",
    onClick: () => setOpenSide(false)
  }, __jsx("a", {
    href: null
  }, __jsx("i", {
    className: "fa fa-times",
    "aria-hidden": "true"
  })))), __jsx("div", {
    className: "cart_media"
  }, __jsx("ul", {
    className: "cart_product"
  }, cartList.length > 0 && cartList.map((item, index) => __jsx("li", {
    key: `cart-popup-${index}`
  }, __jsx("div", {
    className: "media"
  }, __jsx("a", {
    href: null
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    alt: "",
    className: "mr-3",
    src: `${item.images[0].src}`
  })), __jsx("div", {
    className: "media-body"
  }, __jsx("a", {
    href: null
  }, __jsx("h4", null, item.title)), __jsx("h4", null, __jsx("span", null, item.qty, " x ", symbol, " ", item.price)))), __jsx("div", {
    className: "close-circle"
  }, __jsx("a", {
    href: "#",
    onClick: () => removeFromCart(item)
  }, __jsx("i", {
    className: "fa fa-trash",
    "aria-hidden": "true"
  })))))), __jsx("ul", {
    className: "cart_total"
  }, __jsx("li", null, __jsx("div", {
    className: "total"
  }, __jsx("h5", null, "subtotal : ", __jsx("span", null, "$", total)))), __jsx("li", null, __jsx("div", {
    className: "buttons"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/page/account/cart"
  }, __jsx("a", {
    className: "btn btn-solid btn-xs view-cart"
  }, "view cart")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/page/account/checkout"
  }, __jsx("a", {
    className: "btn btn-solid btn-xs checkout"
  }, "checkout")))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (CartComponent);

/***/ }),

/***/ "fhoN":
/***/ (function(module, exports) {

module.exports = require("i18next-browser-languagedetector");

/***/ }),

/***/ "fnYr":
/***/ (function(module, exports) {

module.exports = require("i18next");

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "gy5E":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withApollo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Oyez");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oz4i");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("TG1l");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








let apolloClient = null;
/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */

function withApollo(PageComponent, {
  ssr = true
} = {}) {
  const WithApollo = (_ref) => {
    let {
      apolloClient,
      apolloState
    } = _ref,
        pageProps = _objectWithoutProperties(_ref, ["apolloClient", "apolloState"]);

    const client = apolloClient || initApolloClient(apolloState);
    return __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["ApolloProvider"], {
      client: client
    }, __jsx(PageComponent, pageProps));
  }; // Set the correct displayName in development


  if (false) {}

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async ctx => {
      const {
        AppTree
      } = ctx; // Initialize ApolloClient, add it to the ctx object so
      // we can use it in `PageComponent.getInitialProp`.

      const apolloClient = ctx.apolloClient = initApolloClient({}, ctx.req && ctx.req.headers.cookie); // Run wrapped getInitialProps methods

      let pageProps = {};

      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      } // Only on the server:


      if (true) {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (ctx.res && ctx.res.finished) {
          return pageProps;
        } // Only if ssr is enabled


        if (ssr) {
          try {
            // Run all GraphQL queries
            const {
              getDataFromTree
            } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "7fVs", 7));
            await getDataFromTree(__jsx(AppTree, {
              pageProps: _objectSpread(_objectSpread({}, pageProps), {}, {
                apolloClient
              })
            }));
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error('Error while running `getDataFromTree`', error);
          } // getDataFromTree does not call componentWillUnmount
          // head side effect therefore need to be cleared manually


          next_head__WEBPACK_IMPORTED_MODULE_1___default.a.rewind();
        }
      } // Extract query data from the Apollo store


      const apolloState = apolloClient.cache.extract();
      return _objectSpread(_objectSpread({}, pageProps), {}, {
        apolloState
      });
    };
  }

  return WithApollo;
}
/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {Object} initialState
 */

function initApolloClient(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (true) {
    return createApolloClient(initialState);
  } // Reuse client on the client-side


  if (!apolloClient) {
    apolloClient = createApolloClient(initialState);
  }

  return apolloClient;
}
/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 */


function createApolloClient(initialState = {}) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new apollo_client__WEBPACK_IMPORTED_MODULE_3__["ApolloClient"]({
    ssrMode: true,
    // Disables forceFetch on the server (so queries are only run once)
    link: new apollo_link_http__WEBPACK_IMPORTED_MODULE_5__["HttpLink"]({
      uri: "https://multikart-graphql-dun.vercel.app/server.js",
      // Server URL (must be absolute)
      credentials: 'same-origin',
      // Additional fetch() options like `credentials` or `headers`
      fetch: (isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default())
    }),
    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__["InMemoryCache"]().restore(initialState)
  });
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "iGl2":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Offer-banner-bd137ed69c91ca12fda2892b70df886a.png";

/***/ }),

/***/ "ifSG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_images_mega_menu_fashion_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("srCp");
/* harmony import */ var _public_assets_images_mega_menu_fashion_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_mega_menu_fashion_jpg__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SideBar = () => {
  const closeNav = () => {
    var closemyslide = document.getElementById("mySidenav");
    if (closemyslide) closemyslide.classList.remove("open-side");
  };

  const handleSubmenu = event => {
    if (event.target.classList.contains("sub-arrow")) {
      return;
    }

    if (event.target.nextElementSibling.classList.contains("opensub1")) event.target.nextElementSibling.classList.remove("opensub1");else {
      document.querySelectorAll(".opensub1").forEach(function (value) {
        value.classList.remove("opensub1");
      });
      event.target.nextElementSibling.classList.add("opensub1");
    }
  };

  const handleSubTwoMenu = event => {
    if (event.target.classList.contains("sub-arrow")) return;
    if (event.target.nextElementSibling.classList.contains("opensub2")) event.target.nextElementSibling.classList.remove("opensub2");else {
      document.querySelectorAll(".opensub2").forEach(function (value) {
        value.classList.remove("opensub2");
      });
      event.target.nextElementSibling.classList.add("opensub2");
    }
  };

  const handleSubThreeMenu = event => {
    if (event.target.classList.contains("sub-arrow")) return;
    if (event.target.nextElementSibling.classList.contains("opensub3")) event.target.nextElementSibling.classList.remove("opensub3");else {
      document.querySelectorAll(".opensub3").forEach(function (value) {
        value.classList.remove("opensub3");
      });
      event.target.nextElementSibling.classList.add("opensub3");
    }
  };

  const handleSubFourMenu = event => {
    if (event.target.classList.contains("sub-arrow")) return;
    if (event.target.nextElementSibling.classList.contains("opensub4")) event.target.nextElementSibling.classList.remove("opensub4");else {
      document.querySelectorAll(".opensub4").forEach(function (value) {
        value.classList.remove("opensub4");
      });
      event.target.nextElementSibling.classList.add("opensub4");
    }
  };

  const handleMegaSubmenu = event => {
    if (event.target.classList.contains("sub-arrow")) return;
    if (event.target.nextElementSibling.classList.contains("opensidesubmenu")) event.target.nextElementSibling.classList.remove("opensidesubmenu");else {
      event.target.nextElementSibling.classList.add("opensidesubmenu");
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    id: "mySidenav",
    className: "sidenav"
  }, __jsx("a", {
    href: null,
    className: "sidebar-overlay",
    onClick: closeNav
  }), __jsx("nav", null, __jsx("a", {
    href: null,
    onClick: closeNav
  }, __jsx("div", {
    className: "sidebar-back text-left"
  }, __jsx("i", {
    className: "fa fa-angle-left pr-2",
    "aria-hidden": "true"
  }), " Back")), __jsx("ul", {
    id: "sub-menu",
    className: "sidebar-menu"
  }, __jsx("li", null, __jsx("a", {
    href: "#",
    onClick: e => handleMegaSubmenu(e)
  }, "clothing", __jsx("span", {
    className: "sub-arrow"
  })), __jsx("ul", {
    className: "mega-menu clothing-menu"
  }, __jsx("li", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    m: "0"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: "4"
  }, __jsx("div", {
    className: "link-section"
  }, __jsx("h5", null, "women's fashion"), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "dresses")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "skirts")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "westarn wear")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "ethic wear")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "sport wear"))), __jsx("h5", null, "men's fashion"), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "sports wear")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "western wear")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "ethic wear"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: "4"
  }, __jsx("div", {
    className: "link-section"
  }, __jsx("h5", null, "accessories"), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "fashion jewellery")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "caps and hats")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "precious jewellery")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "necklaces")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "earrings")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "wrist wear")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "ties")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "cufflinks")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "pockets squares"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: "4"
  }, __jsx("a", {
    href: "#",
    className: "mega-menu-banner"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: _public_assets_images_mega_menu_fashion_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "",
    className: "img-fluid"
  }))))))), __jsx("li", null, __jsx("a", {
    href: "#",
    onClick: e => handleSubmenu(e)
  }, "bags", __jsx("span", {
    className: "sub-arrow"
  })), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "shopper bags")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "laptop bags")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "clutches")), __jsx("li", null, __jsx("a", {
    href: "#",
    onClick: e => handleSubTwoMenu(e)
  }, "purses", __jsx("span", {
    className: "sub-arrow"
  })), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "purses")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "wallets")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "leathers")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "satchels")))))), __jsx("li", null, __jsx("a", {
    href: "#",
    onClick: e => handleSubmenu(e)
  }, "footwear", __jsx("span", {
    className: "sub-arrow"
  })), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "sport shoes")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "formal shoes")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "casual shoes")))), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "watches")), __jsx("li", null, __jsx("a", {
    href: "#",
    onClick: e => handleSubmenu(e)
  }, "Accessories", __jsx("span", {
    className: "sub-arrow"
  })), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "fashion jewellery")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "caps and hats")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "precious jewellery")), __jsx("li", null, __jsx("a", {
    href: "#",
    onClick: e => handleSubTwoMenu(e)
  }, "more..", __jsx("span", {
    className: "sub-arrow"
  })), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "necklaces")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "earrings")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "wrist wear")), __jsx("li", null, __jsx("a", {
    href: "#",
    onClick: e => handleSubThreeMenu(e)
  }, "accessories", __jsx("span", {
    className: "sub-arrow"
  })), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "ties")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "cufflinks")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "pockets squares")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "helmets")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "scarves")), __jsx("li", null, __jsx("a", {
    href: "#",
    onClick: e => handleSubFourMenu(e)
  }, "more...", __jsx("span", {
    className: "sub-arrow"
  })), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "accessory gift sets")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "travel accessories")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "phone cases")))))), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "belts & more")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "wearable")))))), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "house of design")), __jsx("li", null, __jsx("a", {
    href: "#",
    onClick: e => handleSubmenu(e)
  }, "beauty & personal care", __jsx("span", {
    className: "sub-arrow"
  })), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "makeup")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "skincare")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "premium beaty")), __jsx("li", null, __jsx("a", {
    href: "#",
    onClick: e => handleSubTwoMenu(e)
  }, "more", __jsx("span", {
    className: "sub-arrow"
  })), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "fragrances")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "luxury beauty")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "hair care")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "tools & brushes")))))), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "home & decor")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "kitchen"))))));
};

/* harmony default export */ __webpack_exports__["a"] = (SideBar);

/***/ }),

/***/ "k2Z+":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAADwUlEQVRIibWWW0wcVRiAvzN7gV12ubVcCoJWQTQaLChekKJW1EjbaGxMxaTRqG1MMTE+GFMS6oOJfW5SrbHBS1If8Mk00iaatDQYKaKGNdZWi0qQCqUsMLMsy+7M7u/DOIhrXEoLXzKZnHP+Od+cy8x/VMQwWIa7gK1AI1ANFAIKmAaGga+B48BApk5UBtFDQAfQstyb/E0vcAD4YiWiQ0D7FQrSOQLsWU7kAk4Bm69S4vAN8ACw4FRoaQF9qyABuBt77RZZKjoM3LcKEoc64GOn4ExdA/Zw14JmoM8Z0TtrJAF4F+wR3SYiPyqlCAT9gAvEYm4uhoiglPrXUyKgFAR8XnBrYCWZi5mL9SJCMNsDbhfxeBLTsgAa3ECbphRej4uLE9Nc+GOSqopiritdh7OE5kIMT3YWC/Mxsv3ZAIxemmEkHKWqOEhZYQA0BSjMBZPL0QTjs1HyPVCYF0Qp1eYGmnJyfFwK67Ts/4ANQR/hWILOnVsoLsjFo8EdG0s5+8som6rKmZya4dzFaV7v/Z0cJczELd5suZWSPD+WadFcU0F79yBGNEbXU/WICJqmGt1AFZqbwQtjDI9P0bnzadrfO0ZoZJyJoWG6T33Pq082cX5simcfrqfrWB8l11eiW15e23wjL382RGhcZ/K3MB/1D3NgWy1/6vM8XrOB8tIi5iIRUim5QRPIBwiNTOCyUnzSG+KNHc2sD/op8Hnxez3kZHmpLivkmY4jbKosorWpjtGJaY4OjbHvwRoKfF4CLo3KwhxODk8C8EhVEWA6S5vrdrs0BdD15SBNtTfR89Zuu2VHByUBH3hcvPhoA4dPnCExEaZz12Ns7w5xT2UBPXu2AEKw41NKfF5K8v0kRTDiFnXl+Uh8UYRbRGZj81H/wd3bqS5bj1gmppXk+P7nOT82SXVFMevyAhz6vJ+2F1rJCuTxyp3l3FwUBDNBImlx4rlGzl2OcEtRkCy3i3gyhVIwn0g6ngiGbpzWZ2fFJin67KwYui5L+fanX2Vr5/syORUWM5EQEVMkGV8Sa4pIyr6n7HZd18UwDInY14CKGMbbwL7/+9pEBIBgbi5YCYxoDE1L/0Uuy0EVMYxaIJQpSimFphTJVGqlAod7NeAHYChTlIhci+RnYMCZg71X28sVsBf+SRP9wIdrIOkGTsJ/M+x3QP0qSc4CtzuF9O1zPzC4CpIQaUk0XbSAnYa7rkFyFDu7RjKJHF4CWoGvViA4AzwB7AIkvTHTuc6hCdiGPRUbgTzsA6QOjGBvpB7gdKZO/gJX4qTG+gXfMQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "kCRN":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDQjYyN0M4NTcyRTkxMUU4Qjc1MkM2QUU2ODQ1OUQ1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDQjYyN0M4NjcyRTkxMUU4Qjc1MkM2QUU2ODQ1OUQ1NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNCNjI3QzgzNzJFOTExRThCNzUyQzZBRTY4NDU5RDU2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNCNjI3Qzg0NzJFOTExRThCNzUyQzZBRTY4NDU5RDU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WYb6uAAAAbNJREFUeNqslU0oRFEUx++bptSQxbCwflO+kiJFWEgpFhZTIhvFklJKsvOdBVIiK8ZKFIkFUZqVsLCyIU3WFkhGNOXjf+o/9RrvznvzZk79undm7vzOfad7zzNM01Q2kQ+6QDuoAAa4A2dgD7wlF8ZiMaULw0Y+DuZTvvtlgmRMgUknuS/l8znFD6AXFFMq64J8mlswAS6BX6UJqzwKWvnHUrADni2/v4J9UA3GQAMTOMplcQsfd1o5xwIYBXWhUGguXc3zMH6BR2CqzEJKVAUKUft3u533cD6iMo9hjn26soQ5P/Egj3IM6+Ryjn9AQnmLOCjXyQ2VfRg6+T1Hv0dxAR228kPO2zyImzke6OTbnC97kK9w3NLJP9knyniZ3MYgqAEzdmc8tXFdgXrevCUH8RBYBS8QF7npLU3gGiyCG9DJ1puMAOgAFxTLboO4/mtu5N9sRrOgFhzxDMcp+gDHoJGdswSsS3mQYNNtP5eQR+3mTistL4tTsAueLGtF3A8iKNGAG7nrkJcFd/4vgS8Ht1NRGJEE1hLlRG6TYENlceW1CSCWqYyBnMotCeTkJf4EGAA6kXMrGB0cpgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "mo9o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LogoImage = ({
  logo
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/'
  }, __jsx("a", null, __jsx("img", {
    src: `/assets/images/icon/${logo ? logo : 'logo.png'}`,
    alt: "",
    className: "img-fluid"
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (LogoImage);

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nULy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const MasterParallaxBanner = ({
  parallaxSectionClass,
  bg,
  parallaxClass,
  title,
  subTitle1,
  subTitle2
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("section", {
    className: `p-0 ${parallaxSectionClass}`
  }, __jsx("div", {
    className: `full-banner ${bg} parallax ${parallaxClass}`
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx("div", {
    className: "banner-contain"
  }, __jsx("h2", null, title), __jsx("h3", null, subTitle1), __jsx("h4", null, subTitle2))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (MasterParallaxBanner);

/***/ }),

/***/ "o4yg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENUITEMS; });
const MENUITEMS = [// {
//    title: 'Home', type: 'sub', children: [
//       {
//          title: "New Demos", type: "sub", tag: 'new', children: [
//             { path: '/layouts/Tools', title: 'Tools', type: 'link' },
//             { path: '/layouts/Christmas', title: 'Christmas', type: 'link' },
//             { path: '/layouts/Marketplace', title: 'Marketplace', type: 'link' },
//             { path: '/layouts/Game', title: 'Game', type: 'link' },
//             { path: '/layouts/Gym', title: 'Gym', type: 'link' },
//             { path: '/layouts/Marijuana', title: 'Marijuana', type: 'link' },
//             { path: '/layouts/Leftsidebar', title: 'Left-Sidebar', type: 'link' },
//             { path: '/layouts/Jewellery', title: 'Jewellery', type: 'link' },
//             { path: '/layouts/Pets', title: 'Pets', type: 'link' },
//             { path: '/layouts/Metros', title: 'Metros', type: 'link' },
//             { path: '/layouts/Vedioslider', title: 'Video-Slider', type: 'link' },
//             { path: '/layouts/Nursery', title: 'Nursery', type: 'link' },
//          ]
//       },
//       {
//          title: 'Clothing', type: 'sub', children: [
//             { path: '/', title: 'Fashion1', type: 'link' },
//             { path: '/layouts/Fashion2', title: 'Fashion2', type: 'link' },
//             { path: '/layouts/Fashion3', title: 'Fashion3', type: 'link' },
//             { path: '/layouts/Kids', title: 'Kids', type: 'link' },
//          ]
//       },
//       {
//          title: 'Basics', type: 'sub', children: [
//             { path: '/layouts/Basics/Lookbook', title: 'Lookbook', type: 'link' },
//             { path: '/layouts/Basics/Video', title: 'Video', type: 'link' },
//             { path: '/layouts/Basics/Parallax', title: 'Parallax', type: 'link' },
//             { path: '/layouts/Basics/Fullpage', title: 'Full Page', type: 'link' }
//          ]
//       },
//       { path: '/layouts/Beauty', title: 'Beauty', type: 'link' },
//       {
//          title: 'electronic', type: 'sub', children: [
//             { path: '/layouts/Electronic/Electronic-1', title: 'Electronic-1', type: 'link', },
//             { path: '/layouts/Electronic/Electronic-2', title: 'Electronic-2', type: 'link', },
//          ]
//       },
//       { path: '/layouts/Furniture', title: 'Furniture', type: 'link' },
//       { path: '/layouts/Vegetables', title: 'Vegetables', type: 'link' },
//       { path: '/layouts/Watch', title: 'Watch', type: 'link' },
//       { path: '/layouts/Lights', title: 'Lights', type: 'link' },
//       { path: '/layouts/Goggles', title: 'Goggles', type: 'link' },
//       { path: '/layouts/Shoes', title: 'Shoes', type: 'link' },
//       { path: '/layouts/Bags', title: 'Bags', type: 'link' },
//       { path: '/layouts/Flowers', title: 'Flowers', type: 'link' },
//    ],
// },
{
  path: '/',
  title: 'Home',
  type: 'link',
  children: false
}, {
  path: '/page/about-us',
  title: 'About',
  type: 'link',
  children: false
}, {
  title: 'Shop',
  type: 'sub',
  children: [// { path: '#', title: 'Left Sidebar', type: 'link' },
  // { path: '#', title: 'Right Sidebar', type: 'link' },
  // { path: '#', title: 'No Sidebar', type: 'link', },
  // { path: '#', title: 'Sidebar Popup', type: 'link' },
  // { path: '#', title: 'Metro', type: 'link', tag: 'new' },
  // { path: '#', title: 'Full Width', type: 'link', tag: 'new' },
  // { path: '#', title: '3 Grid', type: 'link' },
  // { path: '#', title: '6 Six', type: 'link' },
  {
    path: '#',
    title: 'List View',
    type: 'link'
  }]
}, {
  title: 'Products',
  type: 'sub',
  children: [{
    title: 'Mobile',
    type: 'sub',
    children: [{
      path: '/product-details/44-shoes2',
      title: 'OnePlus',
      type: 'link'
    }, {
      path: '/product-details/44-shoes2',
      title: 'boAt',
      type: 'link'
    }]
  }, {
    title: "Electronics",
    type: "sub",
    children: [{
      path: '#',
      title: 'Card Holders',
      type: 'link'
    }, {
      path: '#',
      title: 'Accessories',
      type: 'link'
    }]
  } // {
  //    title: "3-Column", type: "sub", children: [
  //       { path: '/product-details/3_col_left', title: 'Thumbnail Left', type: 'link' },
  //       { path: '/product-details/3_col_right', title: 'Thumbnail Right', type: 'link' },
  //       { path: '/product-details/3_col_bottom', title: 'Thumbnail Bottom', type: 'link' }
  //    ]
  // },
  // {
  //    path: '/product-details/4_image', title: '4 Image', type: 'link', tag: 'New'
  // },
  // {
  //    path: '/product-details/bundle_product', title: 'Bundle Product', type: 'link', tag: 'New'
  // },
  // {
  //    path: '/product-details/sticky', title: 'Sticky', type: 'link'
  // },
  // {
  //    path: '/product-details/accordian', title: 'Accordian', type: 'link'
  // },
  // {
  //    path: '/product-details/image_swatch', title: 'Image Swatch', type: 'link', tag: 'New'
  // },
  // {
  //    path: '/product-details/vertical_tab', title: 'Vertical Tab', type: 'link'
  // },
  ]
}, // {
//    title: 'features', megaMenu: true, megaMenuType: 'small', type: 'sub', children: [
//       {
//          title: 'Portfolio', type: 'sub', children: [
//             { path: '/portfolio/grid-2', title: 'Portfolio Grid 2', type: 'link', icon: 'alert' },
//             { path: '/portfolio/grid-3', title: 'Portfolio Grid 3', type: 'link', icon: 'layout-accordion-merged' },
//             { path: '/portfolio/grid-4', title: 'Portfolio Grid 4', type: 'link', icon: 'layers' },
//             { path: '/portfolio/masonry-grid-2', title: 'masonry Grid 2', type: 'link', icon: 'write' },
//             { path: '/portfolio/masonry-grid-3', title: 'masonry Grid 3', type: 'link', icon: 'map-alt' },
//             { path: '/portfolio/masonry-grid-4', title: 'masonry Grid 4', type: 'link', icon: 'map-alt' },
//             { path: '/portfolio/masonry-full-width', title: 'masonry Full Width', type: 'link', icon: 'map-alt' },
//          ]
//       },
//       {
//          title: 'Add To Cart', type: 'sub', children: [
//             { path: '/layouts/Nursery', title: 'Cart Modal Popup', type: 'link', icon: 'list' },
//             { path: '/layouts/Vegetables', title: 'Qty Counter', type: 'link', icon: 'gallery' },
//             { path: '/layouts/Bags', title: 'Cart Top', type: 'link', icon: 'money' },
//             { path: '/layouts/Shoes', title: 'Cart Bottom', type: 'link', icon: 'time' },
//             { path: '/layouts/Watch', title: 'Cart Left', type: 'link', icon: 'alarm-clock' },
//             { path: '/layouts/Tools', title: 'Cart Right', type: 'link', icon: 'alarm-clock' }
//          ]
//       },
//       {
//          title: 'Theme Element', type: 'sub', children: [
//             { path: '/portfolio/title', title: 'Title', type: 'link', icon: 'bar-chart' },
//             { path: '/portfolio/collection-banner', title: 'Collection Banner', type: 'link', icon: 'thought' },
//             { path: '/portfolio/home-slider', title: 'Home Slider', type: 'link', icon: 'video-camera' },
//             { path: '/portfolio/category', title: 'Category', type: 'link', icon: 'headphone' },
//             { path: '/portfolio/service', title: 'Service', type: 'link', icon: 'headphone' }
//          ]
//       },
//       {
//          title: 'Product Element', type: 'sub', children: [
//             { path: '/portfolio/product-box', title: 'Product Box', type: 'link', icon: 'bar-chart' },
//             { path: '/portfolio/product-slider', title: 'Product Slider', type: 'link', icon: 'thought' },
//             { path: '/portfolio/no-slider', title: 'No Slider', type: 'link', icon: 'video-camera' },
//             { path: '/portfolio/multi-slider', title: 'Multi Slider', type: 'link', icon: 'headphone' },
//             { path: '/portfolio/tab', title: 'Tab', type: 'link', icon: 'headphone' }
//          ]
//       },
//       {
//          title: 'Email Template', type: 'sub', children: [
//             { path: '/portfolio/order-success', title: 'Order Success', type: 'link', icon: 'bar-chart' },
//             { path: '/portfolio/order-success-2', title: 'Order Success 2', type: 'link', icon: 'thought' },
//             { path: '/portfolio/email-template', title: 'Email Template', type: 'link', icon: 'headphone' },
//             { path: '/portfolio/email-template-2', title: 'Email Template 2', type: 'link', icon: 'headphone' }
//          ]
//       }
//    ]
// },
{
  title: 'Account',
  type: 'sub',
  children: [{
    path: '/page/account/wishlist',
    title: 'Wishlist',
    type: 'link'
  }, {
    path: '/page/account/cart',
    title: 'cart',
    type: 'link'
  }, {
    path: '/page/account/dashboard',
    title: 'dashboard',
    type: 'link'
  }, {
    path: '/page/account/login',
    title: 'login',
    type: 'link'
  }, {
    path: '/page/account/login-auth',
    title: 'login-auth',
    type: 'link'
  }, {
    path: '/page/account/register',
    title: 'register',
    type: 'link'
  }, {
    path: '/page/account/forget-pwd',
    title: 'forgot-password',
    type: 'link'
  }, {
    path: '/page/account/profile',
    title: 'profile',
    type: 'link'
  }, {
    path: '/page/account/checkout',
    title: 'checkout',
    type: 'link'
  }]
}, {
  path: '/page/account/contact',
  title: 'contact us',
  type: 'link',
  children: false
} // {
//    title: 'Pages', type: 'sub', children: [
//       {
//          title: 'vendor', type: 'sub', tag: 'new', children: [
//             { path: '/page/vendor/vendor-dashboard', title: 'Vendor Dashboard', type: 'link' },
//             { path: '/page/vendor/vendor-profile', title: 'Vendor Profile', type: 'link' },
//             { path: '/page/vendor/become-vendor', title: 'Become Vendor', type: 'link' },
//          ]
//       },
//       {
//          title: 'Account', type: 'sub', children: [
//             { path: '/page/account/wishlist', title: 'Wishlist', type: 'link' },
//             { path: '/page/account/cart', title: 'cart', type: 'link' },
//             { path: '/page/account/dashboard', title: 'dashboard', type: 'link' },
//             { path: '/page/account/login', title: 'login', type: 'link' },
//             { path: '/page/account/login-auth', title: 'login-auth', type: 'link' },
//             { path: '/page/account/register', title: 'register', type: 'link' },
//             { path: '/page/account/contact', title: 'contact', type: 'link' },
//             { path: '/page/account/forget-pwd', title: 'forgot-password', type: 'link' },
//             { path: '/page/account/profile', title: 'profile', type: 'link' },
//             { path: '/page/account/checkout', title: 'checkout', type: 'link' },
//          ]
//       },
//       { path: '/page/about-us', title: 'about-us', type: 'link' },
//       { path: '/page/search', title: 'search', type: 'link' },
//       { path: '/page/typography', title: 'typography', type: 'link', tag: 'new' },
//       { path: '/page/review', title: 'review', type: 'link' },
//       { path: '/page/order-success', title: 'order-success', type: 'link' },
//       {
//          title: 'compare', type: 'sub', children: [
//             { path: '/page/compare', title: 'compare', type: 'link' },
//             { path: '/page/compare-2', title: 'compare-2', type: 'link', tag: 'new' }
//          ]
//       },
//       { path: '/page/collection', title: 'collection', type: 'link' },
//       { path: '/page/lookbook', title: 'lookbook', type: 'link' },
//       { path: '/page/site-map', title: 'site-map', type: 'link' },
//       { path: '/page/404', title: '404', type: 'link' },
//       { path: '/page/coming-soon', title: 'coming-soon', type: 'link' },
//       { path: '/page/faq', title: 'faq', type: 'link' },
//    ]
// },
// {
//    title: 'Blogs', type: 'sub', children: [
//       { path: '/blogs/blog_left_sidebar', title: 'blog left sidebar', type: 'link' },
//       { path: '/blogs/blog_right_sidebar', title: 'blog right sidebar', type: 'link' },
//       { path: '/blogs/no_sidebar', title: 'no sidebar', type: 'link' },
//       { path: '/blogs/blog_detail', title: 'blog detail', type: 'link' },
//    ]
// },
];

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "oz4i":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "pnUu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headers_common_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mo9o");
/* harmony import */ var _copyright__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Ie/Y");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const MasterFooterTwo = ({
  layoutClass,
  logoName,
  footerClass,
  footerSection,
  logoImg,
  footerLogoClass,
  btnGreen,
  myAccount
}) => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: collapse,
    1: setCollapse
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const width = window.innerWidth < 750;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const changeCollapse = () => {
      if (window.innerWidth < 750) {
        setCollapse(0);
        setIsOpen(false);
      } else setIsOpen(true);
    };

    window.addEventListener("resize", changeCollapse);
    return () => {
      window.removeEventListener('resize', changeCollapse);
    };
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("footer", {
    className: footerClass
  }, __jsx("div", {
    className: "dark-layout"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx("section", {
    className: `section-b-space ${footerSection}`
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "footer-theme2"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "3"
  }, __jsx("div", {
    className: `footer-title 	${isOpen && collapse == 1 ? "active" : ""}  footer-mobile-title`
  }, __jsx("h4", {
    onClick: () => {
      setCollapse(1);
      setIsOpen(!isOpen);
    }
  }, "about", __jsx("span", {
    className: "according-menu"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
    isOpen: width ? collapse === 1 ? isOpen : false : true
  }, __jsx("div", {
    className: "footer-contant"
  }, __jsx("div", {
    className: `footer-logo ${footerLogoClass}`
  }, logoImg ? __jsx(_headers_common_logo__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    logo: logoName
  }) : __jsx("img", {
    src: logoName,
    alt: ""
  })), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, consectetur adipiscing")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6",
    className: "subscribe-wrapper"
  }, __jsx("div", {
    className: "subscribe-block"
  }, __jsx("h2", null, "newsletter"), __jsx("form", null, __jsx("div", {
    className: "form-group"
  }, __jsx("input", {
    type: "text",
    className: "form-control",
    id: "exampleFormControlInput3",
    placeholder: "Enter your email"
  }), __jsx("button", {
    type: "submit",
    className: `btn btn-solid ${btnGreen ? "btn-green" : ""}`
  }, "subscribe"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "3"
  }, __jsx("div", {
    className: `footer-title 	${isOpen && collapse == 2 ? "active" : ""} `
  }, __jsx("h4", {
    onClick: () => {
      setCollapse(2);
      setIsOpen(!isOpen);
    }
  }, "store information", __jsx("span", {
    className: "according-menu"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
    isOpen: width ? collapse === 2 ? isOpen : false : true
  }, __jsx("div", {
    className: "footer-contant"
  }, __jsx("ul", {
    className: "contact-details"
  }, __jsx("li", null, "Multikart Demo Store, Demo store India 345-659"), __jsx("li", null, "Call Us: 123-456-7898"), __jsx("li", null, "Email Us: ", __jsx("a", {
    href: null
  }, "Support@Fiot.com")), __jsx("li", null, "Fax: 123456"))))))))), myAccount ? __jsx("div", {
    className: "dark-layout"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx("section", {
    className: "small-section"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "footer-theme2"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "p-set"
  }, __jsx("div", {
    className: "footer-link"
  }, __jsx("div", {
    className: `footer-title ${isOpen && collapse == 3 ? "active" : ""} `
  }, __jsx("h4", {
    onClick: () => {
      setCollapse(3);
      setIsOpen(!isOpen);
    }
  }, "my account", __jsx("span", {
    className: "according-menu"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
    isOpen: width ? collapse === 3 ? isOpen : false : true
  }, __jsx("div", {
    className: "footer-contant"
  }, __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: null
  }, "mens")), __jsx("li", null, __jsx("a", {
    href: null
  }, "womens")), __jsx("li", null, __jsx("a", {
    href: null
  }, "clothing")), __jsx("li", null, __jsx("a", {
    href: null
  }, "accessories")), __jsx("li", null, __jsx("a", {
    href: null
  }, "featured")))))), __jsx("div", {
    className: "footer-link-b"
  }, __jsx("div", {
    className: `footer-title ${isOpen && collapse == 4 ? "active" : ""} `
  }, __jsx("h4", {
    onClick: () => {
      setCollapse(4);
      setIsOpen(!isOpen);
    }
  }, "why we choose", __jsx("span", {
    className: "according-menu"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
    isOpen: width ? collapse === 4 ? isOpen : false : true
  }, __jsx("div", {
    className: "footer-contant"
  }, __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "shipping & return")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "secure shopping")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "gallary")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "affiliates")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "contacts"))))))))))) : "", __jsx(_copyright__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    layout: layoutClass ? layoutClass : ""
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (MasterFooterTwo);

/***/ }),

/***/ "q9xQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("XJI2");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/5QC");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _MasterProductDetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("rsvv");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const ProductSection = ({
  product,
  addToComapre,
  addWishlist,
  addCart
}) => {
  const curContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_1__[/* CurrencyContext */ "b"]);
  const currency = curContext.state;
  const cartContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_cart__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);
  const plusQty = cartContext.plusQty;
  const minusQty = cartContext.minusQty;
  const quantity = cartContext.quantity;
  const setQuantity = cartContext.setQuantity;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const {
    0: modalCompare,
    1: setModalCompare
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggle = () => setModal(!modal);

  const toggleCompare = () => setModalCompare(!modalCompare);

  const uniqueTags = [];

  const clickProductDetail = () => {
    const titleProps = product.title.split(" ").join("");
    router.push(`/product-details/${product.id}` + "-" + `${titleProps}`);
  };

  const changeQty = e => {
    setQuantity(parseInt(e.target.value));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, product !== undefined ? __jsx("div", {
    className: "product-box"
  }, __jsx("div", {
    className: "img-wrapper"
  }, __jsx("div", {
    className: "front"
  }, __jsx("a", {
    href: null
  }, product.picture !== undefined ? __jsx("div", {
    className: `market-bg${product.picture}`
  }) : __jsx("div", {
    className: "front",
    onClick: clickProductDetail
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Media"], {
    src: product.images[0].src,
    className: "img-fluid bg-img blur-up lazyload",
    alt: ""
  })))), __jsx("div", {
    className: "cart-info cart-wrap"
  }, __jsx("a", {
    href: null,
    title: "Add to Wishlist",
    tabIndex: "0",
    onClick: addWishlist
  }, __jsx("i", {
    className: "fa fa-heart",
    "aria-hidden": "true"
  })), __jsx("a", {
    href: null,
    title: "Quick View",
    onClick: toggle
  }, __jsx("i", {
    className: "fa fa-search",
    "aria-hidden": "true"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    isOpen: modal,
    toggle: toggle,
    className: "modal-lg quickview-modal"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: "6",
    xs: "12"
  }, __jsx("div", {
    className: "quick-view-img"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Media"], {
    src: product.images[0].src,
    alt: "",
    className: "img-fluid"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: "6",
    className: "rtl-text"
  }, __jsx("div", {
    className: "product-right"
  }, __jsx("h2", null, " ", product.title, " "), __jsx("h3", null, currency.symbol, (product.price * currency.value).toFixed(2)), product.variants ? __jsx("ul", {
    className: "color-variant"
  }, uniqueTags ? __jsx("ul", {
    className: "color-variant"
  }, uniqueTags.map((vari, i) => {
    return __jsx("li", {
      className: vari.color,
      key: i,
      title: vari.color,
      onClick: () => variantChangeByColor(vari.image_id, product.images)
    });
  })) : "") : "", __jsx("div", {
    className: "border-product"
  }, __jsx("h6", {
    className: "product-title"
  }, "product details"), __jsx("p", null, product.description)), __jsx("div", {
    className: "product-description border-product"
  }, product.size ? __jsx("div", {
    className: "size-box"
  }, __jsx("ul", null, product.size.map((size, i) => {
    return __jsx("li", {
      key: i
    }, __jsx("a", {
      href: null
    }, size));
  }))) : "", __jsx("h6", {
    className: "product-title"
  }, "quantity"), __jsx("div", {
    className: "qty-box"
  }, __jsx("div", {
    className: "input-group"
  }, __jsx("span", {
    className: "input-group-prepend"
  }, __jsx("button", {
    type: "button",
    className: "btn quantity-left-minus",
    onClick: minusQty,
    "data-type": "minus",
    "data-field": ""
  }, __jsx("i", {
    className: "fa fa-angle-left"
  }))), __jsx("input", {
    type: "text",
    name: "quantity",
    value: quantity,
    onChange: changeQty,
    className: "form-control input-number"
  }), __jsx("span", {
    className: "input-group-prepend"
  }, __jsx("button", {
    type: "button",
    className: "btn quantity-right-plus",
    onClick: () => plusQty(product),
    "data-type": "plus",
    "data-field": ""
  }, __jsx("i", {
    className: "fa fa-angle-right"
  })))))), __jsx("div", {
    className: "product-buttons"
  }, __jsx("button", {
    className: "btn btn-solid",
    onClick: () => addCart(product, quantity)
  }, "add to cart"), __jsx("button", {
    className: "btn btn-solid",
    onClick: clickProductDetail
  }, "View detail"))))))), __jsx("a", {
    href: null,
    title: "Compare",
    onClick: toggleCompare
  }, __jsx("i", {
    className: "fa fa-refresh",
    "aria-hidden": "true"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    isOpen: modalCompare,
    toggle: toggleCompare,
    className: "modal-content",
    centered: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], {
    toggle: toggleCompare
  }, "Quick View"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "compare-modal"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: "12"
  }, __jsx("div", {
    className: "media"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Media"], {
    src: product.images[0].src,
    alt: "",
    className: "img-fluid"
  }), __jsx("div", {
    className: "media-body align-self-center text-center"
  }, __jsx("h5", null, __jsx("i", {
    className: "fa fa-check"
  }), "Item", " ", __jsx("span", null, product.title), __jsx("span", null, "successfully added to your Compare list")), __jsx("div", {
    className: "buttons d-flex justify-content-center"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/page/compare"
  }, __jsx("a", {
    href: null,
    className: "btn-sm btn-solid",
    onClick: addToComapre
  }, "View Compare list")))))))))), __jsx("div", {
    className: "add-button",
    "data-toggle": "modal",
    "data-target": "#addtocart",
    onClick: addCart
  }, "add to cart")), __jsx(_MasterProductDetail__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    product: product,
    currency: currency,
    uniqueTags: uniqueTags
  })) : "");
};

/* harmony default export */ __webpack_exports__["a"] = (ProductSection);

/***/ }),

/***/ "rsvv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const MasterProductDetail = ({
  product,
  productDetail,
  currency,
  uniqueTags,
  detailClass,
  title,
  des,
  variantChangeByColor
}) => {
  let RatingStars = [];
  let rating = 5;

  for (var i = 0; i < rating; i++) {
    RatingStars.push(__jsx("i", {
      className: "fa fa-star",
      key: i
    }));
  }

  return __jsx("div", {
    className: `product-detail ${productDetail} ${detailClass}`
  }, __jsx("div", null, title !== "Product style 4" ? __jsx("div", {
    className: "rating"
  }, RatingStars) : "", __jsx("h6", null, product.title), des ? __jsx("p", null, product.description) : "", __jsx("h4", null, currency.symbol, ((product.price - product.price * product.discount / 100) * currency.value).toFixed(2), __jsx("del", null, __jsx("span", {
    className: "money"
  }, currency.symbol, (product.price * currency.value).toFixed(2)))), product.variants.map(vari => {
    var findItem = uniqueTags.find(x => x.color === vari.color);
    if (!findItem) uniqueTags.push(vari);
  }), product.type === "jewellery" || product.type === "nursery" || product.type === "beauty" || product.type === "electronics" || product.type === "goggles" || product.type === "watch" || product.type === "pets" ? "" : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, title !== "Product style 4" && uniqueTags[0].color ? __jsx("ul", {
    className: "color-variant"
  }, uniqueTags.map((vari, i) => {
    return __jsx("li", {
      className: vari.color,
      key: i,
      title: vari.color,
      onClick: () => variantChangeByColor(vari.image_id, product.images)
    });
  })) : "")));
};

/* harmony default export */ __webpack_exports__["a"] = (MasterProductDetail);

/***/ }),

/***/ "srCp":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgB8gEsAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9gooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAopks0VvE0s0iRxoMs7sAAPcmsAePfCRuBAPEemFycf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0OfmjiVsMWYcZwAATWp4q0e8ubbTL3R4o3vtJuVuIbd22rKm0o0eeikqxwexArpKKAOWTx3YLHi60zW7a4A+aB9MmZgfQFVKn6g1BpUGoa/4vTxDeWE+n2NlbPb2UNzgTSs5BeRlB+UYUAA89+K7CigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/2Q=="

/***/ }),

/***/ "tfG8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("EGWi");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const PostLoader = () => __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_1___default.a, {
  className: "skeleton-svg",
  speed: 10
}, __jsx("rect", {
  className: "skeleton-img",
  x: "2",
  y: "2",
  rx: "0",
  ry: "0"
}), __jsx("rect", {
  className: "skeleton-c1",
  x: "0",
  rx: "0",
  ry: "0"
}), __jsx("rect", {
  className: "skeleton-c2",
  x: "0",
  rx: "0",
  ry: "0"
}), __jsx("rect", {
  className: "skeleton-c3",
  x: "0",
  rx: "0",
  ry: "0"
}));

/* harmony default export */ __webpack_exports__["a"] = (PostLoader);

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yl6w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: ./components/constant/langConfig.json
var langConfig = __webpack_require__("Z0Qo");

// EXTERNAL MODULE: external "i18next"
var external_i18next_ = __webpack_require__("fnYr");
var external_i18next_default = /*#__PURE__*/__webpack_require__.n(external_i18next_);

// EXTERNAL MODULE: external "i18next-browser-languagedetector"
var external_i18next_browser_languagedetector_ = __webpack_require__("fhoN");
var external_i18next_browser_languagedetector_default = /*#__PURE__*/__webpack_require__.n(external_i18next_browser_languagedetector_);

// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__("MQhX");

// CONCATENATED MODULE: ./components/constant/i18n.js



external_i18next_default.a.use(external_i18next_browser_languagedetector_default.a).use(external_react_i18next_["initReactI18next"]).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        'topbar_title': 'Welcome to Our store Multikart',
        'call_us': 'Call Us',
        'Home': 'Home',
        'features': 'features',
        'new': 'new',
        "Blogs": "Blogs",
        'blog_left_sidebar': 'left sidebar',
        'blog_right_sidebar': 'right sidebar',
        'blog_detail': 'blog detail',
        'category_left_sidebar': 'left sidebar',
        'category_right_sidebar': 'right sidebar',
        'category_no_sidebar': 'no sidebar',
        'category_metro': 'metro',
        'category_full_width': 'full width',
        'Products': 'Products',
        'left_sidebar': 'left sidebar',
        'right_sidebar': 'right sidebar',
        'no_sidebar': 'no sidebar',
        'three_col_thumbnail_left': 'Thumbnail left',
        'three_col_thumbnail_right': 'Thumbnail right',
        'thumbnail_below': 'thumbnail below',
        'accordian_details': 'accordian details',
        'thumbnail_left': 'image left',
        'thumbnail_right': 'image right',
        'vertical_tab': 'vertical tab',
        'Pages': 'Pages',
        'about_us': 'about us',
        'lookbook': 'lookbook',
        'login': 'login',
        'register': 'register',
        'logout': 'Logout',
        'search': 'search',
        'wishlist': 'wishlist',
        'cart': 'cart',
        'collection': 'collection',
        'forget_password': 'forget password',
        'contact': 'contact',
        'checkout': 'checkout',
        'compare': 'compare',
        'order_success': 'order_success',
        'dashboard': 'Dashboard',
        'FAQ': 'FAQ',
        'Shop': 'Shop',
        'mens_fashion': 'mens fashion',
        'top': 'top',
        'bottom': 'bottom',
        'ethic_wear': 'ethic wear',
        'sports_wear': 'sports wear',
        'shirts': 'shirts',
        'women_fashion': 'womens fashion',
        'dresses': 'dresses',
        'skirts': 'skirts',
        'westarn_wear': 'westarn wear',
        'ethnic_wear': 'ethnic wear',
        'sport_wear': 'aport wear',
        'bottom_wear': 'bottom wear',
        'kids_fashion': 'kidss fashion',
        'accessories': 'Accessories',
        'fashion_jewellery': 'Fashion Jewellery',
        'caps_and_hats': 'caps and hats',
        'precious_jewellery': 'precious jewellery',
        'necklaces': 'necklaces',
        'earrings': 'earrings',
        'rings_wrist_wear': 'rings & wrist wear',
        'men_accessories': 'mens accessories',
        'ties': 'ties',
        'cufflinks': 'cufflinks',
        'pockets_squares': 'pockets squares',
        'helmets': 'helmets',
        'scarves': 'scarves',
        'phone_cases': 'phone cases',
        'my_account': 'My Account',
        'fashion': 'Fashion',
        'beauty': 'Beauty',
        'electronic': 'Electronic',
        'furniture': 'Furniture',
        'kids': 'Kids',
        'pets': 'Pets',
        'vegetables': 'Vegetables',
        'watch': 'Watch',
        'theme_elements': 'theme elements',
        'element_title': 'element title',
        'collection_banner': 'collection banner',
        'home_slider': 'home slider',
        'category': 'category',
        'service': 'service',
        'image_size_ratio': 'image size ratio',
        'product_elements': 'product elements',
        'product_box': 'product box',
        'product_slider': 'product slider',
        'no_slider': 'no slider',
        'multi_slider': 'multi slider',
        'tab': 'tab',
        'email_template': 'email template',
        'portfolio': 'portfolio',
        'portfolio_grid_2': 'portfolio grid 2',
        'portfolio_grid_3': 'portfolio grid 3',
        'portfolio_grid_4': 'portfolio grid 4',
        'portfolio_masonary_2': 'masonary 2',
        'portfolio_masonary_3': 'masonary 3',
        'portfolio_masonary_4': 'masonary 4',
        'portfolio_masonary_full': 'masonary full width'
      }
    },
    fn: {
      translations: {
        'topbar_title': 'Bienvenue dans notre magasin {theme_name}',
        'call_us': 'Appelez nous',
        'Home': 'maison',
        'features': 'fonctionnalités',
        'new': 'Nouveau',
        'blog': 'bloguer',
        'blog_left_sidebar': 'barre latérale gauche',
        'blog_right_sidebar': 'barre latérale droite',
        'blog_detail': 'détail du blog',
        'category_left_sidebar': 'barre latérale gauche',
        'category_right_sidebar': 'barre latérale droite',
        'category_no_sidebar': 'sans encadré',
        'category_metro': 'métro',
        'category_full_width': 'pleine largeur',
        'products': 'des produits',
        'left_sidebar': 'Barre latérale degauche',
        'right_sidebar': 'Barre latérale droite',
        'no_sidebar': 'pas de barre latérale',
        'three_col_thumbnail_left': '3 vignettes gauche',
        'three_col_thumbnail_right': '3 vignette droite',
        'thumbnail_below': 'vignette ci_dessous',
        'accordian_details': 'détails accordéon',
        'thumbnail_left': 'vignette à gauche',
        'thumbnail_right': 'vignette droite',
        'vertical_tab': 'onglet vertical',
        'Pages': 'des pages',
        'about_us': 'à propos de nous',
        'lookbook': 'lookbook',
        'login': 'sidentifier',
        'register': 'registre',
        'logout': 'Connectez _ Out',
        'search': 'chercher',
        'wishlist': 'liste de souhaits',
        'cart': 'Chariot',
        'collection': 'collection',
        'forget_password': 'mot de passe oublié',
        'contact': 'contact',
        'checkout': 'check_out',
        'compare': 'comparer',
        'order_success': 'succès de la',
        'dashboard': 'Tableau de bord',
        'FAQ': 'FAQ',
        'Shop': 'Boutique',
        'mens_fashion': 'la mode masculine',
        'sports_wear': 'vêtements de sport',
        'top': 'Haut',
        'bottom': 'bas',
        'ethic_wear': 'usure éthique',
        'shirts': 'chemises',
        'women_fashion': 'la mode des femmes',
        'dresses': 'les robes',
        'skirts': 'jupes',
        'westarn_wear': 'usure occidentale',
        'ethnic_wear': 'tenue éthnique',
        'sport_wear': 'vêtement de sport',
        'bottom_wear': 'usure du bas',
        'kids_fashion': 'mode pour enfants',
        'accessories': 'Accessories',
        'fashion_jewellery': 'bijoux fantaisie',
        'caps_and_hats': 'casquettes et chapeaux',
        'precious_jewellery': 'bijoux précieux',
        'necklaces': 'colliers',
        'earrings': 'des boucles doreilles',
        'rings_wrist_wear': 'bagues et vêtements',
        'men_accessories': 'accessoires pour hommes',
        'ties': 'liens',
        'cufflinks': 'boutons de manchette',
        'pockets_squares': 'poches à carreaux',
        'helmets': 'casques',
        'scarves': 'écharpes',
        'phone_cases': 'Coque de téléphone',
        'my_account': 'Mon compte',
        'fashion': 'Mode',
        'beauty': 'Beauté',
        'electronic': 'Électronique',
        'furniture': 'Meubles',
        'kids': 'des gamins',
        'pets': 'animaux domestiques',
        'vegetables': 'Des légumes',
        'watch': 'Regarder',
        'theme_elements': 'éléments de thème',
        'element_title': 'titre de l\'élément',
        'collection_banner': 'bannière de collection',
        'home_slider': 'home curseur',
        'category': 'Catégorie',
        'service': 'un service',
        'image_size_ratio': 'rapport de taille d\'image',
        'product_elements': 'éléments de produit',
        'product_box': 'boîte de produit',
        'product_slider': 'curseur de produit',
        'no_slider': 'pas de curseur',
        'multi_slider': 'curseur multiple',
        'tab': 'languette',
        'email_template': 'modèle de courrier électronique',
        'portfolio': 'portefeuille',
        'portfolio_grid_2': 'portefeuille grille 2',
        'portfolio_grid_3': 'portefeuille grille 3',
        'portfolio_grid_4': 'portefeuille grille 4',
        'portfolio_masonary_2': 'maçonnerie 2',
        'portfolio_masonary_3': 'maçonnerie 3',
        'portfolio_masonary_4': 'maçonnerie 4',
        'portfolio_masonary_full': 'maçonnerie pleine largeur'
      }
    }
  },
  fallbackLng: "en",
  debug: true,
  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: false,
  // we use content as keys
  interpolation: {
    escapeValue: false
  }
});
/* harmony default export */ var i18n = (external_i18next_default.a);
// EXTERNAL MODULE: ./helpers/Currency/CurrencyContext.js
var CurrencyContext = __webpack_require__("XJI2");

// EXTERNAL MODULE: ./helpers/apollo/apollo.js
var apollo = __webpack_require__("gy5E");

// CONCATENATED MODULE: ./components/headers/common/currency.js
var __jsx = external_react_default.a.createElement;








const GET_CURRENCY = external_graphql_tag_default.a`
  query {
    getCurrency {
      currency
      name
      symbol
      value
    }
  }
`;

const Currency = ({
  icon
}) => {
  var {
    data
  } = Object(react_hooks_["useQuery"])(GET_CURRENCY);
  const Context = Object(external_react_["useContext"])(CurrencyContext["b" /* CurrencyContext */]);
  const selectedCurrency = Context.currencyContext.selectedCurrency;

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return __jsx("li", {
    className: "onhover-div mobile-setting hide"
  }, __jsx("div", null, __jsx(external_reactstrap_["Media"], {
    src: icon,
    className: "img-fluid",
    alt: ""
  }), __jsx("i", {
    className: "fa fa-cog"
  })), __jsx("div", {
    className: "show-div setting"
  }, __jsx("h6", null, "language"), __jsx("ul", null, langConfig.map((item, i) => __jsx("li", {
    key: i
  }, __jsx("a", {
    href: null,
    onClick: () => {
      changeLanguage(item.val);
    }
  }, item.lang)))), __jsx("h6", null, "currency"), __jsx("ul", {
    className: "list-inline"
  }, data && data.getCurrency.map((cur, i) => __jsx("li", {
    key: i
  }, __jsx("div", {
    onClick: () => selectedCurrency(cur)
  }, cur.symbol, " ", cur.currency))))));
};

/* harmony default export */ var currency = __webpack_exports__["a"] = (Object(apollo["a" /* withApollo */])(Currency));

/***/ }),

/***/ "zUnT":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAEXklEQVRIia2Vy48UVRSHv3vrVlV39WseMIwOyDsM8ggqGEUMkrAwYuJWFrjwkRj8B4xx5cadC+Mj8RFjYmJYYNyIosb4HtCIYUGizoAzY8tMnAc9dHdVdVfde130NMy0MEiYX1LJvXXrnO/m1Mn5iS3Hy9xAu4FDwF5gM9ADCGAWGAF+BE4Ap5dKIpYAHQBeAA7e6Cbz+hp4Gfj8WofyOkGvAV/dBATgIeAk8Nb/ATnAt8BzNwHo1DO0yphZCvQd8OAtQNq6l9a/uyboTeD+ZYC0dRfwfidoD/DsMkLaeoL5CikAAa8DVDRoBACusCghCA0I7KJogcBikfMnBpBYbCsXBoEvLCUJGt4AdihgmxRiz0xTszMLGWGxBiIE46Fmb9EhtoByaDY1WSWJrUFqgwGslGQkxKnFWovvCC43NVo6jGmJL9gO7FbA4ammYWve4chqjw1dHho4M9VgV6/HuUrCmpxi+nKDO7oDJqoJWSUo5XwSbfjnUoTvOfQXfZSE0VrKoTUB7wzXeWUkRCmJIzisHMG+mShl/6Yi52PN0FhMV0/AnzVwA8GXFUM+tmzWhiR1+GIyZGteUk08fptt8uKObj4enmNqJmT1qgLDEyFl4VJzFCUlMK1q7xX9x/4qD+bkwEvb80xHmrmG5nJqWVvymIwMh9YX+PCPOQpJwrq+HMqV9LqCc5UEBTS0RWDR2jJcTXnqzhInLlQpFDI8f3aOvAAlmFRY2+UqyU+XUsoNQEi6rKFeSfCN4eRolShKOFVJuEfX6StlGApTaCT0F32Gxqus6MpgHAcRNvlsvE4j0QxfrGGjJjrj4ilZFNs+KtfrqQ0mGgZftLpmrgn7V7k83C0ZmY4o5D36Cj7nZyNUqukv+fiuw4XpiI19AY04wTEWFfhcnA1ZWfSJGymDBYdXLxomQx2q1FLxHRGsC5wr7VtPEw6sybEy6+Baw8CKHGORYXCgSHk6YqDoUtYOITEm66OF5O4cTFkHaTOs683yS7nG+v48q2brjFbTqqQ16jsksMZC1EBZi0xTbBgjG002FhWDJZdNvuXg6gARNYhqDaSFza6hPNfExAm9aM5XmtyWlTSMHZPAD52YQAnGqgk5V1ITivHI0FPKEsYp1lO8XU7ozSruWBGwNu9ye17xdyoYSSRru3xiBCrwmYwMp2cSejw5JLYcL+8Ezi4EOQKqiSXjOXRlHGailOlIs6HkMRsmxKkl8CSJtgSuJOc5NLVFW4vrCOpNQ3fGYaKe4hhD0ZP3tY3vV2DX1cKBtqBta/RIIZBAam1rLSA19sooWlR0IcCCxeIIgSP43cKgmj8/yoKxbgEpWoCFchfsXdleL/7m6ivRznUUrk7vIeC9/0bcso7RcupFfvQkcGYZIeeAx9ubTod9APh5GSBn6TDRTlBMy4bfvQXIB7TctboUqK2ngUeA728CcAp4DDgCHa3IvMNeR5/OP/uAR2mVYj1QYn4kAqO0GukT4JulbvEv6ofAhwGHwC0AAAAASUVORK5CYII="

/***/ })

/******/ });