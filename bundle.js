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

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.defineButton = void 0;\nvar my_button_1 = __webpack_require__(/*! ./my-button */ \"./src/components/my-button.ts\");\nObject.defineProperty(exports, \"defineButton\", ({ enumerable: true, get: function () { return my_button_1.default; } }));\n\n\n//# sourceURL=webpack://web-components/./src/components/index.ts?");

/***/ }),

/***/ "./src/components/my-button.ts":
/*!*************************************!*\
  !*** ./src/components/my-button.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nfunction defineButton() {\n    const template = document.createElement('template');\n    template.innerHTML = `\n    <style>\n      .container {\n        padding: 0.08rem;\n      }\n  \n      button {\n        display: block;\n        overflow: hidden;\n        position: relative;\n        padding: 0 0.16rem;\n        font-size: 0.16rem;\n        font-weight: bold;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        cursor: pointer;\n        outline: none;\n  \n        width: 100%;\n        height: 0.4rem;\n  \n        box-sizing: border-box;\n        border: 1px solid #a1a1a1;\n        background: #ffffff;\n        box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.05), 0 2px 8px 0 rgba(161,161,161, 0.4);\n        color: #363636;\n        cursor: pointer;\n      }\n    </style>\n  \n    <div class=\"container\">\n      <button>webComponents</button>\n    </div>\n  `;\n    // document.createDocumentFragment()\n    class Button extends HTMLElement {\n        constructor() {\n            super();\n            this._shadowRoot = this.attachShadow({ mode: 'open' });\n            this._shadowRoot.appendChild(template.content.cloneNode(true));\n            this.$button = this._shadowRoot.querySelector('button');\n        }\n        // lifeCyles\n        connectedCallback() {\n            console.log(`${this.tagName || ''} connected`);\n        }\n        disconnectedCallback() { }\n        adoptedCallback() { }\n        get label() {\n            return this.getAttribute('label') || 'name';\n        }\n        // set attr by assign\n        set label(value) {\n            this.setAttribute('label', value);\n        }\n        // observe user define attrs\n        static get observedAttributes() {\n            return ['label'];\n        }\n        // callback when observed attrs change\n        attributeChangedCallback() {\n            this.render();\n        }\n        render() {\n            if (!this.$button)\n                return;\n            this.$button.innerHTML = this.label;\n        }\n    }\n    window.customElements.define('my-button', Button);\n}\nexports[\"default\"] = defineButton;\n\n\n//# sourceURL=webpack://web-components/./src/components/my-button.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst index_1 = __webpack_require__(/*! @components/index */ \"./src/components/index.ts\");\n(0, index_1.defineButton)();\n\n\n//# sourceURL=webpack://web-components/./src/main.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;