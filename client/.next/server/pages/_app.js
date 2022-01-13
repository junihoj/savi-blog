/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": () => (/* binding */ Context),\n/* harmony export */   \"Provider\": () => (/* binding */ Provider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst initialState = {\n    count: 0,\n    login: false,\n    url: ''\n};\nconst rootReducer = (state, action)=>{\n    switch(action.type){\n        case 'INCREMENT':\n            console.log(\"This action was dispatch\");\n            return {\n                ...state,\n                count: action.count\n            };\n        case 'DECREMENT':\n            return {\n                ...state,\n                count: action.count\n            };\n        case 'RESET':\n            return {\n                ...state,\n                count: 0\n            };\n        case 'URL':\n            return {\n                ...state,\n                url: action.url\n            };\n        case 'LOGIN':\n            return {\n                ...state,\n                login: action.login\n            };\n        default:\n            return state;\n    }\n};\nconst Provider = ({ children  })=>{\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(rootReducer, initialState);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch({\n            type: 'LOGIN',\n            login: window.localStorage.getItem('login')\n        });\n    }, []);\n    // useEffect(()=>{\n    //     const getCsrfToken = async ()=>{\n    //         const {data} = await axios.get(\"http://localhost:8000/api/csrf-token\");\n    //         axios.defaults.headers[\"X-CSRF-Token\"] = data.getCsrfToken;\n    //         console.log(\"CSRF\", data);\n    //         console.log('mycsrf', data.getCsrfToken)\n    //     }\n    //     getCsrfToken();\n    // }, [])\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider, {\n        value: {\n            state,\n            dispatch\n        },\n        __source: {\n            fileName: \"C:\\\\Users\\\\ezeon\\\\Documents\\\\business\\\\blog\\\\client\\\\context\\\\index.js\",\n            lineNumber: 56,\n            columnNumber: 9\n        },\n        __self: undefined,\n        children: children\n    }));\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEyRDtBQUNsQztBQUV6QixLQUFLLENBQUNJLE9BQU8saUJBQUdILG9EQUFhO0FBQzdCLEtBQUssQ0FBQ0ksWUFBWSxHQUFFLENBQUM7SUFDakJDLEtBQUssRUFBRSxDQUFDO0lBQ1JDLEtBQUssRUFBQyxLQUFLO0lBQ1hDLEdBQUcsRUFBQyxDQUFFO0FBQ1YsQ0FBQztBQUNELEtBQUssQ0FBQ0MsV0FBVyxJQUFJQyxLQUFLLEVBQUVDLE1BQU0sR0FBRyxDQUFDO0lBQ2xDLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDQyxJQUFJO1FBQ2QsSUFBSSxDQUFDLENBQVc7WUFDWkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBMEI7WUFDdEMsTUFBTSxDQUFDLENBQUM7bUJBQUdKLEtBQUs7Z0JBQUVKLEtBQUssRUFBRUssTUFBTSxDQUFDTCxLQUFLO1lBQUEsQ0FBQztRQUUxQyxJQUFJLENBQUMsQ0FBVztZQUNaLE1BQU0sQ0FBQyxDQUFDO21CQUFHSSxLQUFLO2dCQUFFSixLQUFLLEVBQUVLLE1BQU0sQ0FBQ0wsS0FBSztZQUFBLENBQUM7UUFFMUMsSUFBSSxDQUFDLENBQU87WUFDUixNQUFNLENBQUMsQ0FBQzttQkFBR0ksS0FBSztnQkFBRUosS0FBSyxFQUFDLENBQUM7WUFBQSxDQUFDO1FBRTlCLElBQUksQ0FBQyxDQUFLO1lBQ04sTUFBTSxDQUFDLENBQUM7bUJBQUdJLEtBQUs7Z0JBQUVGLEdBQUcsRUFBRUcsTUFBTSxDQUFDSCxHQUFHO1lBQUEsQ0FBQztRQUV0QyxJQUFJLENBQUMsQ0FBTztZQUNSLE1BQU0sQ0FBQyxDQUFDO21CQUFHRSxLQUFLO2dCQUFFSCxLQUFLLEVBQUNJLE1BQU0sQ0FBQ0osS0FBSztZQUFBLENBQUM7O1lBRXJDLE1BQU0sQ0FBQ0csS0FBSzs7QUFHeEIsQ0FBQztBQUVELEtBQUssQ0FBQ0ssUUFBUSxJQUFJLENBQUNDLENBQUFBLFFBQVEsR0FBQyxHQUFHLENBQUM7SUFDNUIsS0FBSyxNQUFFTixLQUFLLE1BQUVPLFFBQVEsTUFBSWpCLGlEQUFVLENBQUNTLFdBQVcsRUFBRUosWUFBWTtJQUU5REgsZ0RBQVMsS0FBSyxDQUFDO1FBQ1hlLFFBQVEsQ0FBQyxDQUFDO1lBQ05MLElBQUksRUFBQyxDQUFPO1lBQ1pMLEtBQUssRUFBQ1csTUFBTSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFPO1FBQzdDLENBQUM7SUFDTCxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBR0osRUFBa0I7SUFDbEIsRUFBdUM7SUFDdkMsRUFBa0Y7SUFDbEYsRUFBc0U7SUFFdEUsRUFBcUM7SUFDckMsRUFBbUQ7SUFDbkQsRUFBUTtJQUNSLEVBQXNCO0lBQ3RCLEVBQVM7SUFFVCxNQUFNLHNFQUNEaEIsT0FBTyxDQUFDVyxRQUFRO1FBQUNNLEtBQUssRUFBRSxDQUFDWDtZQUFBQSxLQUFLO1lBQUVPLFFBQVE7UUFBQSxDQUFDOzs7Ozs7O2tCQUNyQ0QsUUFBUTs7QUFHckIsQ0FBQztBQUlXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29udGV4dC9pbmRleC5qcz81ZDI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUmVkdWNlciwgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuY29uc3QgaW5pdGlhbFN0YXRlPSB7XHJcbiAgICBjb3VudDogMCwgXHJcbiAgICBsb2dpbjpmYWxzZSxcclxuICAgIHVybDonJ1xyXG59XHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pPT57XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgJ0lOQ1JFTUVOVCc6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBhY3Rpb24gd2FzIGRpc3BhdGNoXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGNvdW50OiBhY3Rpb24uY291bnR9XHJcblxyXG4gICAgICAgIGNhc2UgJ0RFQ1JFTUVOVCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGNvdW50OiBhY3Rpb24uY291bnR9XHJcblxyXG4gICAgICAgIGNhc2UgJ1JFU0VUJzpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgY291bnQ6MH1cclxuICAgICAgICBcclxuICAgICAgICBjYXNlICdVUkwnOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCB1cmw6IGFjdGlvbi51cmx9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSAnTE9HSU4nOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBsb2dpbjphY3Rpb24ubG9naW59XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCBQcm92aWRlciA9ICh7Y2hpbGRyZW59KT0+e1xyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOidMT0dJTicsXHJcbiAgICAgICAgICAgIGxvZ2luOndpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9naW4nKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFtdKVxyXG5cclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCk9PntcclxuICAgIC8vICAgICBjb25zdCBnZXRDc3JmVG9rZW4gPSBhc3luYyAoKT0+e1xyXG4gICAgLy8gICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2NzcmYtdG9rZW5cIik7XHJcbiAgICAvLyAgICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnNbXCJYLUNTUkYtVG9rZW5cIl0gPSBkYXRhLmdldENzcmZUb2tlbjtcclxuXHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiQ1NSRlwiLCBkYXRhKTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ215Y3NyZicsIGRhdGEuZ2V0Q3NyZlRva2VuKVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBnZXRDc3JmVG9rZW4oKTtcclxuICAgIC8vIH0sIFtdKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3N0YXRlLCBkaXNwYXRjaH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgQ29udGV4dCwgXHJcbiAgICBQcm92aWRlcixcclxufSJdLCJuYW1lcyI6WyJ1c2VSZWR1Y2VyIiwiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsImF4aW9zIiwiQ29udGV4dCIsImluaXRpYWxTdGF0ZSIsImNvdW50IiwibG9naW4iLCJ1cmwiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var _public_styles_pages_login_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/styles/pages/login.css */ \"./public/styles/pages/login.css\");\n/* harmony import */ var _public_styles_pages_login_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_styles_pages_login_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/styles.css */ \"./public/styles.css\");\n/* harmony import */ var _public_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_styles_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst myApp = ({ Component , pageProps  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_context__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n        __source: {\n            fileName: \"C:\\\\Users\\\\ezeon\\\\Documents\\\\business\\\\blog\\\\client\\\\pages\\\\_app.js\",\n            lineNumber: 11,\n            columnNumber: 9\n        },\n        __self: undefined,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n            ...pageProps,\n            __source: {\n                fileName: \"C:\\\\Users\\\\ezeon\\\\Documents\\\\business\\\\blog\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            },\n            __self: undefined\n        })\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ0k7QUFDUjtBQUNKO0FBSTdCLEtBQUssQ0FBQ0MsS0FBSyxJQUFJLENBQUNDLENBQUFBLFNBQVMsR0FBRUMsU0FBUyxHQUFDLEdBQUcsQ0FBQztJQUVyQyxNQUFNLHNFQUNESCw4Q0FBUTs7Ozs7Ozt1RkFDSkUsU0FBUztlQUFNQyxTQUFTOzs7Ozs7Ozs7QUFHckMsQ0FBQztBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHRcIlxyXG5pbXBvcnQgJy4uL3B1YmxpYy9zdHlsZXMvcGFnZXMvbG9naW4uY3NzJ1xyXG5pbXBvcnQgJ3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcydcclxuaW1wb3J0ICcuLi9wdWJsaWMvc3R5bGVzLmNzcydcclxuXHJcblxyXG5cclxuY29uc3QgbXlBcHAgPSAoe0NvbXBvbmVudCwgcGFnZVByb3BzfSk9PntcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50ICB7Li4ucGFnZVByb3BzfS8+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbXlBcHAiXSwibmFtZXMiOlsiUHJvdmlkZXIiLCJteUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "./public/styles.css":
/*!***************************!*\
  !*** ./public/styles.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./public/styles/pages/login.css":
/*!***************************************!*\
  !*** ./public/styles/pages/login.css ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();