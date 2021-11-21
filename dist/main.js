/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_getGoods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getGoods */ \"./src/modules/getGoods.js\");\n/* harmony import */ var _modules_getGoods__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_getGoods__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n_modules_getGoods__WEBPACK_IMPORTED_MODULE_2___default()();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFrQztBQUNJO0FBQ0k7QUFDMUM7QUFDQSx5REFBSTtBQUNKLDJEQUFNO0FBQ04sd0RBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aWxkYmVycmlzLUdMTy8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNhcnQgZnJvbSBcIi4vbW9kdWxlcy9jYXJ0XCI7XHJcbmltcG9ydCBzZWFyY2ggZnJvbSBcIi4vbW9kdWxlcy9zZWFyY2hcIjtcclxuaW1wb3J0IGdldEdvb2RzIGZyb20gXCIuL21vZHVsZXMvZ2V0R29vZHNcIjtcclxuXHJcbmNhcnQoKTtcclxuc2VhcmNoKCk7XHJcbmdldEdvb2RzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst cart = function () {\r\n\r\n\tconst cartBtn = document.querySelector('.button-cart');\r\n\tconst cart = document.getElementById('modal-cart');\r\n\tconst modalClose = cart.querySelector('.modal-close');\r\n\r\n\tcartBtn.addEventListener('click', function () {\r\n\t\tcart.style.display = \"flex\"\r\n\t});\r\n\tmodalClose.addEventListener('click', function () {\r\n\t\tcart.style.display = \"\"\r\n\t});\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9jYXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsaUVBQWUsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3dpbGRiZXJyaXMtR0xPLy4vc3JjL21vZHVsZXMvY2FydC5qcz9hYzBlIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCBjYXJ0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHRjb25zdCBjYXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1jYXJ0Jyk7XHJcblx0Y29uc3QgY2FydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1jYXJ0Jyk7XHJcblx0Y29uc3QgbW9kYWxDbG9zZSA9IGNhcnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNsb3NlJyk7XHJcblxyXG5cdGNhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRjYXJ0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxyXG5cdH0pO1xyXG5cdG1vZGFsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRjYXJ0LnN0eWxlLmRpc3BsYXkgPSBcIlwiXHJcblx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhcnRcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/cart.js\n");

/***/ }),

/***/ "./src/modules/getGoods.js":
/*!*********************************!*\
  !*** ./src/modules/getGoods.js ***!
  \*********************************/
/***/ (() => {

eval("const getGoods = () => {\r\n    const links = document.querySelectorAll('.navigation-link');\r\n\r\n    const renderGoods = (goods) => {\r\n        const goodsContainer = document.querySelector('.long-goods-list')\r\n\r\n        console.log('goodsContainer = ', goodsContainer)\r\n        goods.forEach(good => {\r\n            console.log('good = ', good)\r\n        })\r\n    }\r\n\r\n    const getData = (value, category) => {\r\n        fetch('/db/db.json')\r\n            .then((res) => res.json()\r\n                .then((data) => {\r\n                    const array = category ? data.filter((item) => item[category] === value) : data\r\n                    localStorage.setItem('goods', JSON.stringify(array));\r\n\r\n                    if (window.location.pathname !== \"/goods.html\") {\r\n                        window.location.href = '/goods.html'\r\n                    } else {\r\n                        renderGoods(array)\r\n                    }\r\n\r\n                    console.log(window.location.href)\r\n                })\r\n            )\r\n    }\r\n\r\n    links.forEach((link) => {\r\n        link.addEventListener('click', (event) => {\r\n            event.preventDefault();\r\n            const linkValue = link.textContent;\r\n            const category = link.dataset.field;\r\n            // console.log('linkValue = ', linkValue)\r\n            // console.log('category = ', category)\r\n\r\n            getData(linkValue, category);\r\n        })\r\n\r\n        if (localStorage.getItem('goods') && window.location.pathname === \"/goods.html\") {\r\n            renderGoods(JSON.parse(localStorage.getItem('goods')))\r\n        }\r\n    })\r\n\r\n    // localStorage.setItem('goods', JSON.stringify([1, 2, 3, 4]));\r\n\r\n    // console.log(localStorage.getItem('goods'));\r\n    // const goods = JSON.parse(localStorage.getItem('goods'));\r\n    // console.log('goods = ', goods);\r\n\r\n    // console.log('localStorage1 = ', localStorage)\r\n    // localStorage.removeItem('goods');\r\n    // console.log(localStorage.getItem('goods'))\r\n    // console.log('localStorage2 = ', localStorage)\r\n}\r\n\r\n\r\n\r\n\r\ngetGoods();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9nZXRHb29kcy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dpbGRiZXJyaXMtR0xPLy4vc3JjL21vZHVsZXMvZ2V0R29vZHMuanM/ZDU5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRHb29kcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmlnYXRpb24tbGluaycpO1xyXG5cclxuICAgIGNvbnN0IHJlbmRlckdvb2RzID0gKGdvb2RzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZ29vZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9uZy1nb29kcy1saXN0JylcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dvb2RzQ29udGFpbmVyID0gJywgZ29vZHNDb250YWluZXIpXHJcbiAgICAgICAgZ29vZHMuZm9yRWFjaChnb29kID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dvb2QgPSAnLCBnb29kKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9ICh2YWx1ZSwgY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICBmZXRjaCgnL2RiL2RiLmpzb24nKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5ID0gY2F0ZWdvcnkgPyBkYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbVtjYXRlZ29yeV0gPT09IHZhbHVlKSA6IGRhdGFcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ29vZHMnLCBKU09OLnN0cmluZ2lmeShhcnJheSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICE9PSBcIi9nb29kcy5odG1sXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2dvb2RzLmh0bWwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyR29vZHMoYXJyYXkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYXRpb24uaHJlZilcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBsaW5rVmFsdWUgPSBsaW5rLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGxpbmsuZGF0YXNldC5maWVsZDtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2xpbmtWYWx1ZSA9ICcsIGxpbmtWYWx1ZSlcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NhdGVnb3J5ID0gJywgY2F0ZWdvcnkpXHJcblxyXG4gICAgICAgICAgICBnZXREYXRhKGxpbmtWYWx1ZSwgY2F0ZWdvcnkpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ29vZHMnKSAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2dvb2RzLmh0bWxcIikge1xyXG4gICAgICAgICAgICByZW5kZXJHb29kcyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnb29kcycpKSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnb29kcycsIEpTT04uc3RyaW5naWZ5KFsxLCAyLCAzLCA0XSkpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnb29kcycpKTtcclxuICAgIC8vIGNvbnN0IGdvb2RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ29vZHMnKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnZ29vZHMgPSAnLCBnb29kcyk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coJ2xvY2FsU3RvcmFnZTEgPSAnLCBsb2NhbFN0b3JhZ2UpXHJcbiAgICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZ29vZHMnKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnb29kcycpKVxyXG4gICAgLy8gY29uc29sZS5sb2coJ2xvY2FsU3RvcmFnZTIgPSAnLCBsb2NhbFN0b3JhZ2UpXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmdldEdvb2RzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/getGoods.js\n");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst search = function () {\r\n\r\n\tconst input = document.querySelector('.search-block > input');\r\n\tconst searchBtn = document.querySelector('.search-block > button');\r\n\r\n\r\n\ttry {\r\n\t\tsearchBtn.addEventListener('click', (event) => {\r\n\t\t\tconsole.log('input.value = ', input.value)\r\n\t\t});\r\n\r\n\t} catch (e) {\r\n\t\tconsole.error(e.message)\r\n\t}\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9zZWFyY2guanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aWxkYmVycmlzLUdMTy8uL3NyYy9tb2R1bGVzL3NlYXJjaC5qcz9lMDc1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNlYXJjaCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0Y29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJsb2NrID4gaW5wdXQnKTtcclxuXHRjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJsb2NrID4gYnV0dG9uJyk7XHJcblxyXG5cclxuXHR0cnkge1xyXG5cdFx0c2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdpbnB1dC52YWx1ZSA9ICcsIGlucHV0LnZhbHVlKVxyXG5cdFx0fSk7XHJcblxyXG5cdH0gY2F0Y2ggKGUpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKVxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlYXJjaCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/search.js\n");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;