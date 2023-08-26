"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Contactinfo_Index_jsx"],{

/***/ "./resources/js/Pages/Contactinfo/Index.jsx":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Contactinfo/Index.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar Contactinfo = function Contactinfo() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      _useState2 = _slicedToArray(_useState, 2),\n      nomerHp = _useState2[0],\n      setNomerHp = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      _useState4 = _slicedToArray(_useState3, 2),\n      nama = _useState4[0],\n      setNama = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      _useState6 = _slicedToArray(_useState5, 2),\n      tinggiBadan = _useState6[0],\n      setTinggiBadan = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      _useState8 = _slicedToArray(_useState7, 2),\n      beratBadan = _useState8[0],\n      setBeratBadan = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      _useState10 = _slicedToArray(_useState9, 2),\n      imt = _useState10[0],\n      setImt = _useState10[1];\n\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      _useState12 = _slicedToArray(_useState11, 2),\n      status = _useState12[0],\n      setStatus = _useState12[1];\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    var imtValue = beratBadan / Math.pow(tinggiBadan / 100, 2);\n    setImt(imtValue);\n\n    if (imtValue < 17) {\n      setStatus(\"Sangat Kurus\");\n    } else if (imtValue >= 17 && imtValue < 18.5) {\n      setStatus(\"Kurus\");\n    } else if (imtValue >= 18.5 && imtValue < 25) {\n      setStatus(\"Normal\");\n    } else if (imtValue >= 25 && imtValue < 27) {\n      setStatus(\"Gemuk\");\n    } else {\n      setStatus(\"Obesitas\");\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n      className: \"container mt-5 col-md-6\",\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n        children: \"Input Data Person\"\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n          className: \"mb-3\",\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n            htmlFor: \"nomer_hp\",\n            className: \"form-label\",\n            children: \"Nomer HP:\"\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n            type: \"text\",\n            className: \"form-control\",\n            id: \"nomer_hp\",\n            value: nomerHp,\n            onChange: function onChange(e) {\n              return setNomerHp(e.target.value);\n            }\n          })]\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n          className: \"mb-3\",\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n            htmlFor: \"nama\",\n            className: \"form-label\",\n            children: \"Nama:\"\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n            type: \"text\",\n            className: \"form-control\",\n            id: \"nama\",\n            value: nama,\n            onChange: function onChange(e) {\n              return setNama(e.target.value);\n            }\n          })]\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n          className: \"mb-3\",\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n            htmlFor: \"tinggi_badan\",\n            className: \"form-label\",\n            children: \"Tinggi Badan (cm):\"\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n            type: \"number\",\n            className: \"form-control\",\n            id: \"tinggi_badan\",\n            value: tinggiBadan,\n            onChange: function onChange(e) {\n              return setTinggiBadan(e.target.value);\n            }\n          })]\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n          className: \"mb-3\",\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n            htmlFor: \"berat_badan\",\n            className: \"form-label\",\n            children: \"Berat Badan (kg):\"\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n            type: \"number\",\n            className: \"form-control\",\n            id: \"berat_badan\",\n            value: beratBadan,\n            onChange: function onChange(e) {\n              return setBeratBadan(e.target.value);\n            }\n          })]\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n          type: \"submit\",\n          className: \"btn btn-primary\",\n          children: \"Simpan\"\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n          type: \"reset\",\n          className: \"btn btn-primary\",\n          children: \"Batal\"\n        })]\n      }), imt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        className: \"mt-3\",\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"p\", {\n          children: [\"Nama: \", nama]\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"p\", {\n          children: [\"IMT: \", imt.toFixed(2)]\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"p\", {\n          children: [\"Tinggi Badan: \", tinggiBadan]\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"p\", {\n          children: [\"Berat Badan: \", beratBadan]\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"p\", {\n          children: [\"Nomer Hp: \", nomerHp]\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"p\", {\n          children: [\"Status: \", status]\n        })]\n      })]\n    })\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contactinfo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvUGFnZXMvQ29udGFjdGluZm8vSW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUVBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07RUFDdEIsZ0JBQThCRCwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7RUFBQTtFQUFBLElBQU9FLE9BQVA7RUFBQSxJQUFnQkMsVUFBaEI7O0VBQ0EsaUJBQXdCSCwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7RUFBQTtFQUFBLElBQU9JLElBQVA7RUFBQSxJQUFhQyxPQUFiOztFQUNBLGlCQUFzQ0wsK0NBQVEsQ0FBQyxFQUFELENBQTlDO0VBQUE7RUFBQSxJQUFPTSxXQUFQO0VBQUEsSUFBb0JDLGNBQXBCOztFQUNBLGlCQUFvQ1AsK0NBQVEsQ0FBQyxFQUFELENBQTVDO0VBQUE7RUFBQSxJQUFPUSxVQUFQO0VBQUEsSUFBbUJDLGFBQW5COztFQUNBLGlCQUFzQlQsK0NBQVEsQ0FBQyxFQUFELENBQTlCO0VBQUE7RUFBQSxJQUFPVSxHQUFQO0VBQUEsSUFBWUMsTUFBWjs7RUFDQSxrQkFBNEJYLCtDQUFRLENBQUMsRUFBRCxDQUFwQztFQUFBO0VBQUEsSUFBT1ksTUFBUDtFQUFBLElBQWVDLFNBQWY7O0VBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0lBQ3hCQSxDQUFDLENBQUNDLGNBQUY7SUFDQSxJQUFNQyxRQUFRLEdBQUdULFVBQVUsWUFBSUYsV0FBVyxHQUFHLEdBQWxCLEVBQTBCLENBQTFCLENBQTNCO0lBQ0FLLE1BQU0sQ0FBQ00sUUFBRCxDQUFOOztJQUVBLElBQUlBLFFBQVEsR0FBRyxFQUFmLEVBQW1CO01BQ2ZKLFNBQVMsQ0FBQyxjQUFELENBQVQ7SUFDSCxDQUZELE1BRU8sSUFBSUksUUFBUSxJQUFJLEVBQVosSUFBa0JBLFFBQVEsR0FBRyxJQUFqQyxFQUF1QztNQUMxQ0osU0FBUyxDQUFDLE9BQUQs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RUFISixlQUlJO1VBQUEsNEJBQWlCRSxVQUFqQjtRQUFBLEVBSkosZUFLSTtVQUFBLHlCQUFjTixPQUFkO1FBQUEsRUFMSixlQU1JO1VBQUEsdUJBQVlVLE1BQVo7UUFBQSxFQU5KO01BQUEsRUEzRFI7SUFBQTtFQUhKLEVBREo7QUEyRUgsQ0FyR0Q7O0FBdUdBLGlFQUFlWCxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL1BhZ2VzL0NvbnRhY3RpbmZvL0luZGV4LmpzeD8xZTdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDb250YWN0aW5mbyA9ICgpID0+IHtcbiAgICBjb25zdCBbbm9tZXJIcCwgc2V0Tm9tZXJIcF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbbmFtYSwgc2V0TmFtYV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbdGluZ2dpQmFkYW4sIHNldFRpbmdnaUJhZGFuXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtiZXJhdEJhZGFuLCBzZXRCZXJhdEJhZGFuXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtpbXQsIHNldEltdF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGltdFZhbHVlID0gYmVyYXRCYWRhbiAvICh0aW5nZ2lCYWRhbiAvIDEwMCkgKiogMjtcbiAgICAgICAgc2V0SW10KGltdFZhbHVlKTtcblxuICAgICAgICBpZiAoaW10VmFsdWUgPCAxNykge1xuICAgICAgICAgICAgc2V0U3RhdHVzKFwiU2FuZ2F0IEt1cnVzXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGltdFZhbHVlID49IDE3ICYmIGltdFZhbHVlIDwgMTguNSkge1xuICAgICAgICAgICAgc2V0U3RhdHVzKFwiS3VydXNcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoaW10VmFsdWUgPj0gMTguNSAmJiBpbXRWYWx1ZSA8IDI1KSB7XG4gICAgICAgICAgICBzZXRTdGF0dXMoXCJOb3JtYWxcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoaW10VmFsdWUgPj0gMjUgJiYgaW10VmFsdWUgPCAyNykge1xuICAgICAgICAgICAgc2V0U3RhdHVzKFwiR2VtdWtcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRTdGF0dXMoXCJPYmVzaXRhc1wiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTUgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICA8aDE+SW5wdXQgRGF0YSBQZXJzb248L2gxPlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibm9tZXJfaHBcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTm9tZXIgSFA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJub21lcl9ocFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25vbWVySHB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROb21lckhwKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtYVwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOYW1hOlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1hKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGluZ2dpX2JhZGFuXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpbmdnaSBCYWRhbiAoY20pOlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0aW5nZ2lfYmFkYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aW5nZ2lCYWRhbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpbmdnaUJhZGFuKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYmVyYXRfYmFkYW5cIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmVyYXQgQmFkYW4gKGtnKTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmVyYXRfYmFkYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtiZXJhdEJhZGFufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QmVyYXRCYWRhbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBTaW1wYW5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInJlc2V0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBCYXRhbFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAge2ltdCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TmFtYToge25hbWF9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SU1UOiB7aW10LnRvRml4ZWQoMil9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGluZ2dpIEJhZGFuOiB7dGluZ2dpQmFkYW59PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QmVyYXQgQmFkYW46IHtiZXJhdEJhZGFufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5vbWVyIEhwOiB7bm9tZXJIcH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5TdGF0dXM6IHtzdGF0dXN9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0aW5mbztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ29udGFjdGluZm8iLCJub21lckhwIiwic2V0Tm9tZXJIcCIsIm5hbWEiLCJzZXROYW1hIiwidGluZ2dpQmFkYW4iLCJzZXRUaW5nZ2lCYWRhbiIsImJlcmF0QmFkYW4iLCJzZXRCZXJhdEJhZGFuIiwiaW10Iiwic2V0SW10Iiwic3RhdHVzIiwic2V0U3RhdHVzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW10VmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvRml4ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/Pages/Contactinfo/Index.jsx\n");

/***/ })

}]);