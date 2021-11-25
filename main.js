/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderAbout\": () => (/* binding */ renderAbout)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\nfunction renderAbout(){\n    let homePage = document.getElementById(\"content\");\n    homePage.innerHTML = \"\";\n    (0,_header__WEBPACK_IMPORTED_MODULE_0__.renderHeader)()\n    \n    \n    let mainpage = document.createElement(\"div\");\n    mainpage.innerHTML = `    \n    <br><br><br>\n    <h1>About us</h1>\n    <br>\n    <div id=\"aboutdiv\">\n    <h2>Locally crafted</h2>\n    <h2>Locally sourced</h2>\n    <h2>Locally loved</h2>\n    <h2>123 Cookie Blvd</h2>\n    <h2>Auckland, New Zealand</h2>\n    </div>\n    `\n    homePage.appendChild(mainpage);\n    mainpage.setAttribute(\"id\", \"mainpage\")\n    //alert('load')  \n    ;(0,_footer__WEBPACK_IMPORTED_MODULE_1__.footer)(); \n}\n\n\n\n//# sourceURL=webpack://restaurantPage/./src/about.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footer\": () => (/* binding */ footer)\n/* harmony export */ });\nfunction footer(){\n    let homePage = document.getElementById(\"content\");\n    let footer = document.createElement(\"footer\");\n    footer.innerHTML = `    \n    <h3>Barnacle Jones 2021 - <a href=\"https://github.com/BarnacleJones/restaurantPage\">Github</a></h3>\n     `\n     footer.setAttribute(\"id\", \"footer\")\n    homePage.appendChild(footer);\n}\n\n\n\n//# sourceURL=webpack://restaurantPage/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHeader\": () => (/* binding */ renderHeader)\n/* harmony export */ });\nfunction renderHeader(){\n    \n    let homePage = document.getElementById(\"content\");\n    let header = document.createElement(\"header\");\n    header.innerHTML = `    \n    <h1>Home</h1>\n    <h1>Menu</h1>\n    <h1>About</h1>\n     `\n     header.setAttribute(\"id\", \"header\")\n    homePage.appendChild(header);\n      \n\n}\n\n\n\n//# sourceURL=webpack://restaurantPage/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _mainpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainpage */ \"./src/mainpage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\n\n\n\n\n(0,_header__WEBPACK_IMPORTED_MODULE_1__.renderHeader)();\n(0,_mainpage__WEBPACK_IMPORTED_MODULE_2__.renderMain)();\n(0,_footer__WEBPACK_IMPORTED_MODULE_4__.footer)();\n\n\n//event listners for navigation\ndocument.addEventListener(\"click\", (e) => {\n    const target = e.target.innerText;\n    if (target === \"Home\") (0,_mainpage__WEBPACK_IMPORTED_MODULE_2__.renderMain)();\n    if (target === \"Menu\" ) (0,_menu__WEBPACK_IMPORTED_MODULE_3__.renderMenu)();\n    if (target === \"About\") (0,_about__WEBPACK_IMPORTED_MODULE_0__.renderAbout)();\n\n})\n\n//# sourceURL=webpack://restaurantPage/./src/index.js?");

/***/ }),

/***/ "./src/mainpage.js":
/*!*************************!*\
  !*** ./src/mainpage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMain\": () => (/* binding */ renderMain)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\nfunction renderMain(){\n\n        \n        let homePage = document.getElementById(\"content\");\n        homePage.innerHTML = \"\";\n        (0,_header__WEBPACK_IMPORTED_MODULE_0__.renderHeader)()\n        \n        let mainpage = document.createElement(\"div\");\n        mainpage.innerHTML = `     \n        \n        <h1>Cinnamon's cookies</h1>\n        \n        <br>\n        <h2>Simply the best cookies around!</h2>\n        <h2>Delicious decadence.</h2>\n\n        <h1 id=\"menulink\">Menu</h1>\n          `\n        homePage.appendChild(mainpage);\n        mainpage.setAttribute(\"id\", \"mainpage\")\n        //alert('load')   \n        ;(0,_footer__WEBPACK_IMPORTED_MODULE_1__.footer)();\n  \n}\n\n\n\n//# sourceURL=webpack://restaurantPage/./src/mainpage.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenu\": () => (/* binding */ renderMenu)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\nfunction renderMenu(){\n    let homePage = document.getElementById(\"content\");\n    homePage.innerHTML = \"\";\n    (0,_header__WEBPACK_IMPORTED_MODULE_0__.renderHeader)()\n    \n    let mainpage = document.createElement(\"div\");\n    mainpage.innerHTML = `\n    \n    <br><br><br>\n    <h1>Menu</h1>\n    <br>\n    <h2>Classic Chocolate</h2>\n    <h3>Chocolate chips, hot from the oven</h3>\n    <br>\n    <h2>Classic Oat</h2>\n    <h3>Chocolate chips, oat, made fresh every day</h3>\n    <br>\n    <h2>Cinnamon's special</h2>\n    <h3>White chocolate and coffee beans, one of a kind</h3>\n\n      `\n    homePage.appendChild(mainpage);\n    mainpage.setAttribute(\"id\", \"mainpage\")\n    //alert('load')  \n    ;(0,_footer__WEBPACK_IMPORTED_MODULE_1__.footer)(); \n}\n\n\n\n//# sourceURL=webpack://restaurantPage/./src/menu.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;