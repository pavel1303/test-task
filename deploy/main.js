/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/b88d04fba731603756b1.css";

/***/ }),

/***/ "./src/assets/images/cat.png":
/*!***********************************!*\
  !*** ./src/assets/images/cat.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/402e20df40a0ab7fa5cd.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
var content = document.querySelector('.content');
content.addEventListener('click', function (event) {
  var card = event.target.closest('.food-pack');
  var wrapper = event.target.closest('.pack-wrapper');
  var link = event.target.closest('.link');

  function toggleListner() {
    wrapper.classList.toggle('pack-wrapper--selected');
    wrapper.removeEventListener('mouseleave', toggleListner);
  }

  if (!card && !link) return;

  if (card || link) {
    wrapper.addEventListener('mouseleave', toggleListner);
  }

  var callBuy = wrapper.querySelector('.call-to-buy');
  if (wrapper.classList.contains('pack-wrapper--disabled')) return;

  switch (wrapper.dataset.size) {
    case 'small-pack':
      if (!wrapper.classList.contains('pack-wrapper--selected')) {
        callBuy.innerText = 'Печень утки разварная с артишоками.';
      } else if (wrapper.classList.contains('pack-wrapper--selected')) {
        callBuy.innerHTML = 'Чего сидишь? Порадуй котэ, <a class="link" href="##">купи</a>.';
      }

      break;

    case 'medium-pack':
      if (!wrapper.classList.contains('pack-wrapper--selected')) {
        callBuy.innerText = 'Головы щучьи с чесноком да свежайшая сёмгушка.';
      } else if (wrapper.classList.contains('pack-wrapper--selected')) {
        callBuy.innerHTML = 'Чего сидишь? Порадуй котэ, <a class="link" href="##">купи</a>.';
      }

      break;

    case 'big-pack':
      if (!wrapper.classList.contains('pack-wrapper--selected')) {
        callBuy.innerText = 'Филе из цыплят с трюфелями в бульоне.';
      } else if (wrapper.classList.contains('pack-wrapper--selected')) {
        callBuy.innerHTML = 'Чего сидишь? Порадуй котэ, <a class="link" href="##">купи</a>.';
      }

      break;

    default:
  }
});
var cards = document.querySelectorAll('.pack-wrapper');
var checkBtn = document.querySelector('.check-btn');

function checkAvailability() {
  cards.forEach(function (el) {
    var callBuy = el.querySelector('.call-to-buy');
    callBuy.innerHTML = 'Чего сидишь? Порадуй котэ, <a class="link" href="##">купи</a>.';
    el.classList.remove('pack-wrapper--selected');
    el.classList.remove('pack-wrapper--disabled');
  });
  var amountDisable = Math.floor(Math.random() * 3);
  var lastEl = -1;

  for (var i = 0; i < amountDisable; i += 1) {
    var curEl = Math.floor(Math.random() * 3);

    if (curEl !== lastEl) {
      var callBuy = cards[curEl].querySelector('.call-to-buy');
      lastEl = curEl;
      cards[curEl].classList.add('pack-wrapper--disabled');

      switch (cards[curEl].dataset.size) {
        case 'small-pack':
          callBuy.innerText = 'Печалька, с фуа-гра закончился.';
          break;

        case 'medium-pack':
          callBuy.innerText = 'Печалька, с рыбой закончился.';
          break;

        case 'big-pack':
          callBuy.innerText = 'Печалька, с курой закончился.';
          break;

        default:
      }
    }
  }

  return amountDisable;
}

checkBtn.addEventListener('click', checkAvailability);
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./css/main.css */ "./src/css/main.css"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/cat.png */ "./src/assets/images/cat.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Document</title>\r\n    <link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\r\n</head>\r\n<body class=\"body\">\r\n    <div class=\"container\">\r\n        <header class=\"header\">\r\n            <h1 class=\"header__title\">Ты сегодня покормил кота?</h1>\r\n        </header>\r\n        <main class=\"content\">\r\n            <div class=\"pack-wrapper\" data-size=\"small-pack\">\r\n                <div class=\"food-pack__substrate\">\r\n                    <div class=\"food-pack\">\r\n                            <div class=\"food-pack__text-wrapper\">\r\n                                <span class=\"food-pack__slogan\">Сказочное заморское яство</span>\r\n                                <h2 class=\"food-pack__title\">Нямушка</h2>\r\n                                <p class=\"food-pack__subtitle\">с фуа-гра</p>\r\n                                <span class=\"food-pack__description\"><b>10</b> порций</span>\r\n                                <span class=\"food-pack__description\">мышь в подарок</span>\r\n                            </div>\r\n                            <img class=\"food-pack__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Cat\">\r\n                            <div class=\"weight-label\">\r\n                                <span class=\"weight-label__num\">0,5</span>\r\n                                <span class=\"weight-label__unit\">кг</span>\r\n                            </div>\r\n                    </div>\r\n                </div>\r\n                <p class=\"call-to-buy\">Чего сидишь? Порадуй котэ, <a class=\"link\" href=\"##\">купи</a>.</p>\r\n            </div>\r\n            <div class=\"pack-wrapper\" data-size=\"medium-pack\">\r\n                <div class=\"food-pack__substrate\">\r\n                    <div class=\"food-pack\">\r\n                            <div class=\"food-pack__text-wrapper\">\r\n                                <span class=\"food-pack__slogan\">Сказочное заморское яство</span>\r\n                                <h2 class=\"food-pack__title\">Нямушка</h2>\r\n                                <p class=\"food-pack__subtitle\">с рыбой</p>\r\n                                <span class=\"food-pack__description\"><b>40</b> порций</span>\r\n                                <span class=\"food-pack__description\"><b>2</b> мыши в подарок</span>\r\n                            </div>\r\n                            <img class=\"food-pack__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Cat\">\r\n                            <div class=\"weight-label\">\r\n                                <span class=\"weight-label__num\">2</span>\r\n                                <span class=\"weight-label__unit\">кг</span>\r\n                            </div>\r\n                    </div>\r\n                </div>\r\n                <p class=\"call-to-buy\">Чего сидишь? Порадуй котэ, <a class=\"link\" href=\"##\">купи</a>.</p>\r\n            </div>\r\n            <div class=\"pack-wrapper\" data-size=\"big-pack\">\r\n                <div class=\"food-pack__substrate\">\r\n                    <div class=\"food-pack\">\r\n                            <div class=\"food-pack__text-wrapper\">\r\n                                <span class=\"food-pack__slogan\">Сказочное заморское яство</span>\r\n                                <h2 class=\"food-pack__title\">Нямушка</h2>\r\n                                <p class=\"food-pack__subtitle\">с курой</p>\r\n                                <span class=\"food-pack__description\"><b>100</b> порций</span>\r\n                                <span class=\"food-pack__description\"><b>5</b> мышей в подарок заказчик доволен</span>\r\n                            </div>\r\n                            <img class=\"food-pack__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Cat\">\r\n                            <div class=\"weight-label\">\r\n                                <span class=\"weight-label__num\">5</span>\r\n                                <span class=\"weight-label__unit\">кг</span>\r\n                            </div>\r\n                    </div>\r\n                </div>\r\n                <p class=\"call-to-buy\">Чего сидишь? Порадуй котэ, <a class=\"link\" href=\"##\">купи</a>.</p>\r\n            </div>\r\n        </main>\r\n        <footer class=\"footer\">\r\n            <a class=\"check-btn\" href=\"##\">Проверить наличие</a>\r\n        </footer>\r\n    </div>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map