/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/staff-finder/components/BlockApp.js":
/*!********************************************************!*\
  !*** ./src/blocks/staff-finder/components/BlockApp.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlockApp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StaffList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StaffList */ "./src/blocks/staff-finder/components/StaffList.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




class BlockApp extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  state = {
    staff: [],
    filterKeyword: '',
    filteredStaff: []
  };
  constructor(props) {
    super(props);

    //ajax call
    fetch('/wp-json/wp/v2/staff?_embed').then(response => response.json()).then(json => {
      console.log(json);
      this.setState({
        staff: json,
        filteredStaff: json
      });
    }).catch(error => {
      console.error('WP JSON ERROR', error);
    });
  }
  //another common place to ake ajax calls
  // componentDidMount() {
  // }
  doFilter(filterKeyword) {
    const filteredStaff = this.state.staff.filter(person => {
      return person.title.rendered.toLowerCase().includes(filterKeyword.toLowerCase());
    });
    this.setState({
      filterKeyword,
      filteredStaff
    });
  }
  render() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, " Staff Finder"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, " Search", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      value: this.state.filterKeyword,
      onInput: e => this.doFilter(e.target.value)
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: "label",
      value: this.state.filterKeyword,
      onChange: value => this.doFilter(value)
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_StaffList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      staff: this.state.filteredStaff
    }));
  }
}

/***/ }),

/***/ "./src/blocks/staff-finder/components/StaffList.js":
/*!*********************************************************!*\
  !*** ./src/blocks/staff-finder/components/StaffList.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StaffList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StaffListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StaffListItem */ "./src/blocks/staff-finder/components/StaffListItem.js");



class StaffList extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, this.props.staff.map(person => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_StaffListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      person: person
    })));
  }
}

/***/ }),

/***/ "./src/blocks/staff-finder/components/StaffListItem.js":
/*!*************************************************************!*\
  !*** ./src/blocks/staff-finder/components/StaffListItem.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StaffListItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class StaffListItem extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    const {
      person
    } = this.props;
    //const person = this.props.person

    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "flip-card",
      href: person.link
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flip-card-inner"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flip-card-front"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: person._embedded['wp:featuredmedia']['0'].source_url,
      alt: ""
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flip-card-back"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "name"
    }, person.title.rendered), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "position"
    }, person.acf.staff_position), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "bio",
      dangerouslySetInnerHTML: {
        __html: person.content.rendered
      }
    }))));
  }
}

/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************************!*\
  !*** ./src/blocks/staff-finder/view.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _components_BlockApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BlockApp */ "./src/blocks/staff-finder/components/BlockApp.js");



const blocks = document.querySelectorAll('.wp-block-jl-staff-finder');
blocks.forEach(block => {
  (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(block).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BlockApp__WEBPACK_IMPORTED_MODULE_2__["default"], null));
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map