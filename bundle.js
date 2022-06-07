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

/***/ "./src/template/button.p":
/*!*******************************!*\
  !*** ./src/template/button.p ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"\\n<div class=\\\"tmp-container\\\">\\n  <button>\\n    <slot name=\\\"btn-content\\\"></slot>\\n  </button>\\n</div>\\n\\n<style>\\n  .tmp-container {\\n    padding: 0.08rem;\\n  }\\n\\n  .main {\\n    background:linear-gradient(318deg, #ff4f18 0%, #f10000 100%);\\n  }\\n\\n  .success {\\n    background-color: #67c23a;\\n  }\\n\\n  .error {\\n    background-color: #f56c6c;\\n  }\\n\\n  .warn {\\n    background-color: #e6a23c;\\n  }\\n\\n  button {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    width: 1.2rem;\\n    height: 0.4rem;\\n    padding: 0 0.16rem;\\n    box-sizing: border-box;\\n\\n    border: none;\\n    outline: none;\\n\\n    font-size: 0.16rem;\\n    font-weight: bold;\\n    text-overflow: ellipsis;\\n    white-space: nowrap;\\n    color: #fff;\\n\\n    background: transparent;\\n    cursor: pointer;\\n    border-radius: 0.3rem;\\n  }\\n</style>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://web-components/./src/template/button.p?");

/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.defineButton = void 0;\nvar tmp_button_1 = __webpack_require__(/*! ./tmp-button */ \"./src/components/tmp-button.ts\");\nObject.defineProperty(exports, \"defineButton\", ({ enumerable: true, get: function () { return tmp_button_1.default; } }));\n\n\n//# sourceURL=webpack://web-components/./src/components/index.ts?");

/***/ }),

/***/ "./src/components/tmp-button.ts":
/*!**************************************!*\
  !*** ./src/components/tmp-button.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst button_p_1 = __webpack_require__(/*! @template/button.p */ \"./src/template/button.p\");\nconst Map_Type_Class = {\n    main: 'main',\n    error: 'error',\n    success: 'success',\n    warn: 'warn',\n};\nfunction defineButton(tagName) {\n    const template = document.createElement('template');\n    template.innerHTML = button_p_1.default;\n    class Button extends HTMLElement {\n        constructor() {\n            super();\n            this._shadowRoot = this.attachShadow({ mode: 'open' });\n            this._shadowRoot.appendChild(template.content.cloneNode(true));\n            this.$button = this._shadowRoot.querySelector('button');\n        }\n        // lifeCyles\n        connectedCallback() {\n            console.log(`${this.tagName || ''} connected`);\n        }\n        disconnectedCallback() { }\n        adoptedCallback() { }\n        get label() {\n            return this.getAttribute('label');\n        }\n        // set attr by assign\n        set label(value) {\n            value && this.setAttribute('label', value);\n        }\n        set type(value) {\n            this.setAttribute('type', value);\n        }\n        get type() {\n            // @ts-ignore\n            return this.getAttribute('type') || 'main';\n        }\n        // observe user define attrs\n        static get observedAttributes() {\n            return ['label', 'type'];\n        }\n        // callback when observed attrs change\n        attributeChangedCallback() {\n            this.render();\n        }\n        render() {\n            if (!this.$button)\n                return;\n            if (this.label != null) {\n                this.$button.innerHTML = this.label;\n            }\n            this.$button.className = Map_Type_Class[this.type];\n        }\n    }\n    window.customElements.define(tagName, Button);\n}\nexports[\"default\"] = defineButton;\n\n\n//# sourceURL=webpack://web-components/./src/components/tmp-button.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst index_1 = __webpack_require__(/*! @components/index */ \"./src/components/index.ts\");\n(0, index_1.defineButton)('tmp-button');\n\n\n//# sourceURL=webpack://web-components/./src/main.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;