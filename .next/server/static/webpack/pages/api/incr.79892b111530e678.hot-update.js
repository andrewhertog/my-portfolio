"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/api/incr",{

/***/ "(middleware)/./pages/api/incr.ts":
/*!***************************!*\
  !*** ./pages/api/incr.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ incr)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/.pnpm/next@13.4.3_@opentelemetry+api@1.4.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/web/exports/next-response.js\");\n\nconst config = {\n    runtime: \"edge\"\n};\nasync function incr(req) {\n    if (req.method !== \"POST\") {\n        return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"use POST\", {\n            status: 405\n        });\n    }\n    if (req.headers.get(\"Content-Type\") !== \"application/json\") {\n        return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"must be json\", {\n            status: 400\n        });\n    }\n    const body = await req.json();\n    return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"](null, {\n        status: 202\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vcGFnZXMvYXBpL2luY3IudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdEO0FBRWpELE1BQU1DLFNBQVM7SUFDckJDLFNBQVM7QUFDVixFQUFFO0FBRWEsZUFBZUMsS0FBS0MsR0FBZ0IsRUFBeUI7SUFDM0UsSUFBSUEsSUFBSUMsTUFBTSxLQUFLLFFBQVE7UUFDMUIsT0FBTyxJQUFJTCxrRkFBWUEsQ0FBQyxZQUFZO1lBQUVNLFFBQVE7UUFBSTtJQUNuRCxDQUFDO0lBQ0QsSUFBSUYsSUFBSUcsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLG9CQUFvQjtRQUMzRCxPQUFPLElBQUlSLGtGQUFZQSxDQUFDLGdCQUFnQjtZQUFFTSxRQUFRO1FBQUk7SUFDdkQsQ0FBQztJQUVELE1BQU1HLE9BQU8sTUFBTUwsSUFBSU0sSUFBSTtJQUUzQixPQUFPLElBQUlWLGtGQUFZQSxDQUFDLElBQUksRUFBRTtRQUFFTSxRQUFRO0lBQUk7QUFDN0MsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcGkvaW5jci50cz8xOWE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcblx0cnVudGltZTogXCJlZGdlXCIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBpbmNyKHJlcTogTmV4dFJlcXVlc3QpOiBQcm9taXNlPE5leHRSZXNwb25zZT4ge1xuXHRpZiAocmVxLm1ldGhvZCAhPT0gXCJQT1NUXCIpIHtcblx0XHRyZXR1cm4gbmV3IE5leHRSZXNwb25zZShcInVzZSBQT1NUXCIsIHsgc3RhdHVzOiA0MDUgfSk7XG5cdH1cblx0aWYgKHJlcS5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKSAhPT0gXCJhcHBsaWNhdGlvbi9qc29uXCIpIHtcblx0XHRyZXR1cm4gbmV3IE5leHRSZXNwb25zZShcIm11c3QgYmUganNvblwiLCB7IHN0YXR1czogNDAwIH0pO1xuXHR9XG5cblx0Y29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKCk7XG5cdDtcblx0cmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UobnVsbCwgeyBzdGF0dXM6IDIwMiB9KTtcbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJjb25maWciLCJydW50aW1lIiwiaW5jciIsInJlcSIsIm1ldGhvZCIsInN0YXR1cyIsImhlYWRlcnMiLCJnZXQiLCJib2R5IiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./pages/api/incr.ts\n");

/***/ })

});