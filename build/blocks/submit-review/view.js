/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/submit-review/components/AddReviewForm.js":
/*!**************************************************************!*\
  !*** ./src/blocks/submit-review/components/AddReviewForm.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddReviewForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class AddReviewForm extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  state = {
    title: '',
    review: '',
    rating: 0
  };
  addReview(e) {
    e.preventDefault();
    const newReview = {
      title: this.state.title,
      content: this.state.review,
      acf: {
        review_rating: parseInt(this.state.rating) || 0
      },
      // maybe you should validate better before doing this?
      status: 'publish'
    };

    // we can't assume any props are provided
    // ?. only calls the method if it exists
    this.props.addReview?.(newReview);
  }
  render() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
      className: "new-review-form",
      onSubmit: e => this.addReview(e)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Title:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      value: this.state.title,
      onInput: e => this.setState({
        title: e.target.value
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Overall Rating:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "number",
      value: this.state.rating,
      onInput: e => this.setState({
        rating: e.target.value
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Review:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
      value: this.state.review,
      onInput: e => this.setState({
        review: e.target.value
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "submit"
    }, "Add Review"));
  }
}
;

/***/ }),

/***/ "./src/blocks/submit-review/components/BlockApp.js":
/*!*********************************************************!*\
  !*** ./src/blocks/submit-review/components/BlockApp.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlockApp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AddReviewForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddReviewForm */ "./src/blocks/submit-review/components/AddReviewForm.js");
/* harmony import */ var _ReviewList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReviewList */ "./src/blocks/submit-review/components/ReviewList.js");




class BlockApp extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  state = {
    reviews2: [],
    loggedIn: null
  };
  addReview(newReview) {
    const review2 = new wp.api.models.Review2(newReview);
    review2.save().done(data => {
      console.log('saved!', data);
      this.getReviews();
    }).fail(jqXHR => {
      console.error('failed!', jqXHR);
    });
  }
  getReviews() {
    // by default, it gives you 10
    const reviewCollection = new wp.api.collections.Review2();
    reviewCollection.fetch().done(data => {
      console.log('reviews!!', data, reviewCollection);
      //store models in our state
      this.setState({
        reviews2: reviewCollection.models
      });
    }).fail(jqXHR => {
      this.getReviews();
    });
  }
  getLoggedInUser() {
    const user = new wp.api.models.UsersMe();
    user.fetch().done(user => {
      this.setState({
        loggedIn: true
      });
    }).fail(jqXHR => {
      //not logged in
      this.setState({
        loggedIn: false
      });
    });
  }
  componentDidMount() {
    this.getReviews();
    this.getLoggedInUser();
  }
  render() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Latest Reviews"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ReviewList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      reviews2: this.state.reviews2
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Submit a Review"), this.state.loggedIn === true && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AddReviewForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
      addReview: reviewObj => this.addReview(reviewObj)
    }), this.state.loggedIn === false && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AddReviewForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
      addReview: reviewObj => this.addReview(reviewObj)
    }));
  }
}

/***/ }),

/***/ "./src/blocks/submit-review/components/ReviewCard.js":
/*!***********************************************************!*\
  !*** ./src/blocks/submit-review/components/ReviewCard.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReviewCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_StarRating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/StarRating */ "./src/components/StarRating.js");



class ReviewCard extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    let {
      title,
      review2,
      rating
    } = this.props;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "review-card"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "review-title",
      dangerouslySetInnerHTML: {
        __html: title
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "review-rating"
    }, rating), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_StarRating__WEBPACK_IMPORTED_MODULE_1__["default"], {
      rating: rating,
      readonly: true
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "review-content",
      dangerouslySetInnerHTML: {
        __html: review2
      }
    }));
  }
}

/***/ }),

/***/ "./src/blocks/submit-review/components/ReviewList.js":
/*!***********************************************************!*\
  !*** ./src/blocks/submit-review/components/ReviewList.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReviewList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ReviewCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReviewCard */ "./src/blocks/submit-review/components/ReviewCard.js");



class ReviewList extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "review-list"
    }, this.props.reviews2.map(review2 => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ReviewCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: review2.attributes.title.rendered,
      review: review2.attributes.content.rendered,
      rating: review2.attributes.acf.review_rating
      // key = {this.attributes.id}
    })));
  }
}

/***/ }),

/***/ "./src/components/StarRating.js":
/*!**************************************!*\
  !*** ./src/components/StarRating.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StarRating)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StarRating_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StarRating.scss */ "./src/components/StarRating.scss");



function StarRating({
  rating,
  setRating,
  readonly
}) {
  const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(rating || 0);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: readonly ? 'readonly stars' : 'stars'
  }, "r", rating, [1, 2, 3, 4, 5].map(star => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: star <= hover ? 'star on' : 'star off',
    onClick: () => {
      setRating(star);
    },
    onMouseEnter: () => setHover(star),
    onMouseLeave: () => setHover(rating)
  }, "\u2605")));
}

// <StarRating rating="3" setRating={fn} />

/***/ }),

/***/ "./src/components/StarRating.scss":
/*!****************************************!*\
  !*** ./src/components/StarRating.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/*!******************************************!*\
  !*** ./src/blocks/submit-review/view.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _components_BlockApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BlockApp */ "./src/blocks/submit-review/components/BlockApp.js");



const blocks = document.querySelectorAll('.wp-block-jl-sims-suggestion');
blocks.forEach(block => {
  (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(block).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BlockApp__WEBPACK_IMPORTED_MODULE_2__["default"], null));
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map