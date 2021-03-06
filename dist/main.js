/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body{\\r\\n  background-image: url('https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80');\\r\\n  background-attachment: fixed;\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: cover;\\r\\n  overflow-x: hidden;\\r\\n  padding:0;\\r\\n  margin:0;\\r\\n}\\r\\n\\r\\ninput{\\r\\n    \\r\\n    margin-top: 10px;\\r\\n    width:33%;\\r\\n    height:7%;\\r\\n    padding-left: 2%;\\r\\n    font-size: 16px;\\r\\n    background: transparent;\\r\\n    border: none;\\r\\n    border-bottom: 1px solid gold;\\r\\n    color: white;\\r\\n    text-align: left;\\r\\n}\\r\\nh2{\\r\\n  padding-left:20px;\\r\\n  position: relative;\\r\\n  padding-bottom: 10px;\\r\\n}\\r\\n#date{\\r\\n    font-size: 20px;\\r\\n    padding-top:20px;\\r\\n    display: none;\\r\\n    font-family: cursive;\\r\\n}\\r\\n\\r\\n.display{\\r\\n  overflow-x: hidden;\\r\\n  text-align: left;\\r\\n    padding-bottom: 9%;\\r\\n    padding-top: 6%;\\r\\n    font-size: 20px;\\r\\n    color:white;\\r\\n    width:40%;\\r\\n    position: relative;\\r\\n    font-weight: bolder;\\r\\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\\r\\n    display:flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n.info{\\r\\n  width:60%;\\r\\n  text-align: left;\\r\\n  padding-left: 10%;\\r\\n  padding-top:7%;\\r\\n  color: white;\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\np{\\r\\n   float:left;\\r\\n}\\r\\n\\r\\n.bg{\\r\\n  position: absolute;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  opacity: 0.3;\\r\\n  height:100%;\\r\\n}\\r\\n\\r\\n.flag{\\r\\n  height: 10%;\\r\\n  width:10%;\\r\\n  padding-left: 15px;\\r\\n  padding-top: 0px;\\r\\n}\\r\\n\\r\\n.greetflag{\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.content{\\r\\n    height:100%;\\r\\n    \\r\\n    text-align: center;\\r\\n    display:flex;\\r\\n    margin-bottom: 0px;\\r\\n}\\r\\n\\r\\n.btns, .type{\\r\\n  display:flex;\\r\\n  padding-left:20px;\\r\\n  padding-bottom: 20%;\\r\\n}\\r\\n\\r\\nbutton{\\r\\n  color: darkblue;\\r\\n  font-weight: bold;\\r\\n  border-radius: 3px;\\r\\n  border:none;\\r\\n  margin-right:5px\\r\\n}\\r\\n\\r\\n.expo{\\r\\n  font-family: cursive;\\r\\n  font-size: 16px;\\r\\n}\\r\\n#city-name{\\r\\n  display:flex;\\r\\n  padding-top: 20px;\\r\\n  padding-right: 20px;\\r\\n}\\r\\n#zero{\\r\\n  font-size:30px;\\r\\n  font-family: sans-serif;\\r\\n}\\r\\n#today-info{\\r\\n  display:flex;\\r\\n  overflow-x: hidden;\\r\\n  bottom:0;\\r\\n}\\r\\n\\r\\n#temp, .degrees{\\r\\n  font-size: 60px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n.degrees{\\r\\n  font-weight: lighter;\\r\\n}\\r\\n.weather-info{\\r\\n  font-family: cursive;\\r\\n  padding-left: 0px;\\r\\n}\\r\\n@media screen and (max-width: 780px) {\\r\\n\\r\\n  .flag{\\r\\n    padding-top: 20px;\\r\\n  }\\r\\n  #desc{\\r\\n    font-size: 14px;\\r\\n  }\\r\\n input{\\r\\n   width: 45%;\\r\\n }\\r\\n .weather-info{\\r\\n   font-size:20px\\r\\n }\\r\\n .display{\\r\\n   padding-bottom: 25%;\\r\\n   padding-left: 5%;\\r\\n }\\r\\n \\r\\n}\\r\\n\\r\\n@media screen and (max-width: 450px) {\\r\\n  .btns{\\r\\n    padding-left: 10px;\\r\\n  }\\r\\n  .info{\\r\\n    width:100%;\\r\\n      }\\r\\n  .content{\\r\\n    flex-direction: column;\\r\\n\\r\\n  }\\r\\n#desc{\\r\\n  font-size: 20px;\\r\\n}\\r\\n  .display{\\r\\n    width: 90%;\\r\\n    padding-right: 15%;\\r\\n  }\\r\\n\\r\\n  .weather-info{\\r\\n    color: gold;\\r\\n    font-size: 26px;\\r\\n  }\\r\\n\\r\\n  input{\\r\\n    width:60%\\r\\n  }\\r\\n  .type{\\r\\n    padding-bottom: 6%;\\r\\n  }\\r\\n  .weather-info{\\r\\n    text-align: left;\\r\\n    font-size: 20px;\\r\\n  }\\r\\n }\\r\\n\\r\\n @media screen and (max-width: 320px) {\\r\\n   \\r\\n  #desc{\\r\\n    font-size: 16px;\\r\\n  }\\r\\n   \\r\\n }\\r\\n @media screen and (min-width: 1030px) {\\r\\n.display{\\r\\n  width: 25%;\\r\\n  padding-right: 10%;\\r\\n  padding-left: 5%;\\r\\n  padding-bottom: 20%;\\r\\n}\\r\\nbody{\\r\\n  overflow: hidden;\\r\\n}\\r\\n.expo{\\r\\n  font-size: 18px;\\r\\n  \\r\\n}\\r\\n }\\r\\n\\r\\n @media screen and (max-width: 1030px){\\r\\n   .display{\\r\\n     padding-left: 5%;\\r\\n   }\\r\\n }\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/rolling.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/rolling.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".lds-roller {\\r\\n    margin: 0px auto;\\r\\n    position: relative;\\r\\n    width: 80px;\\r\\n    height: 80px;\\r\\n    display: none;\\r\\n  }\\r\\n  .lds-roller div {\\r\\n    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\\r\\n    transform-origin: 40px 40px;\\r\\n  }\\r\\n  .lds-roller div:after {\\r\\n    content: \\\" \\\";\\r\\n    display: block;\\r\\n    position: absolute;\\r\\n    width: 7px;\\r\\n    height: 7px;\\r\\n    border-radius: 50%;\\r\\n    background: #fff;\\r\\n    margin: -4px 0 0 -4px;\\r\\n  }\\r\\n  .lds-roller div:nth-child(1) {\\r\\n    animation-delay: -0.036s;\\r\\n  }\\r\\n  .lds-roller div:nth-child(1):after {\\r\\n    top: 63px;\\r\\n    left: 63px;\\r\\n  }\\r\\n  .lds-roller div:nth-child(2) {\\r\\n    animation-delay: -0.072s;\\r\\n  }\\r\\n  .lds-roller div:nth-child(2):after {\\r\\n    top: 68px;\\r\\n    left: 56px;\\r\\n  }\\r\\n  .lds-roller div:nth-child(3) {\\r\\n    animation-delay: -0.108s;\\r\\n  }\\r\\n  .lds-roller div:nth-child(3):after {\\r\\n    top: 71px;\\r\\n    left: 48px;\\r\\n  }\\r\\n  .lds-roller div:nth-child(4) {\\r\\n    animation-delay: -0.144s;\\r\\n  }\\r\\n  .lds-roller div:nth-child(4):after {\\r\\n    top: 72px;\\r\\n    left: 40px;\\r\\n  }\\r\\n  .lds-roller div:nth-child(5) {\\r\\n    animation-delay: -0.18s;\\r\\n  }\\r\\n  .lds-roller div:nth-child(5):after {\\r\\n    top: 71px;\\r\\n    left: 32px;\\r\\n  }\\r\\n  .lds-roller div:nth-child(6) {\\r\\n    animation-delay: -0.216s;\\r\\n  }\\r\\n  .lds-roller div:nth-child(6):after {\\r\\n    top: 68px;\\r\\n    left: 24px;\\r\\n  }\\r\\n  .lds-roller div:nth-child(7) {\\r\\n    animation-delay: -0.252s;\\r\\n  }\\r\\n  .lds-roller div:nth-child(7):after {\\r\\n    top: 63px;\\r\\n    left: 17px;\\r\\n  }\\r\\n  .lds-roller div:nth-child(8) {\\r\\n    animation-delay: -0.288s;\\r\\n  }\\r\\n  .lds-roller div:nth-child(8):after {\\r\\n    top: 56px;\\r\\n    left: 12px;\\r\\n  }\\r\\n  @keyframes lds-roller {\\r\\n    0% {\\r\\n      transform: rotate(0deg);\\r\\n    }\\r\\n    100% {\\r\\n      transform: rotate(360deg);\\r\\n    }\\r\\n  }\\r\\n  \", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/rolling.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rolling_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rolling.css */ \"./src/rolling.css\");\n/* harmony import */ var _rolling_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rolling_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _temp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./temp */ \"./src/temp.js\");\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst deg = document.querySelector('.degrees');\r\nconst btn = document.getElementById('check');\r\nconst btn2 = document.getElementById('far');\r\nconst input = document.querySelector('input');\r\nconst progress = document.querySelector('.lds-roller');\r\n\r\n\r\nconst assign = (a, b) => {\r\n  document.getElementById(a).textContent = b;\r\n};\r\n\r\nconst show = () => {\r\n  document.querySelector('.display').style.display = 'none';\r\n  document.getElementById('date').style.display = 'block';\r\n  document.getElementById('today-info').style.display = 'none';\r\n  progress.style.display = 'none';\r\n  document.querySelector('.flag').src = '';\r\n};\r\n\r\nconst unshow = () => {\r\n  progress.style.display = 'block';\r\n};\r\n\r\n\r\nconst get = (data) => {\r\n  if (data === '204') { show(); } else {\r\n    document.getElementById('date').style.display = 'none';\r\n    input.value = '';\r\n    document.getElementById('today-info').style.display = 'flex';\r\n    document.querySelector('.display').style.display = 'block';\r\n    assign('country', data.country);\r\n    assign('town', data.name);\r\n    assign('desc', data.description.replace(/^\\w/, (c) => c.toUpperCase()));\r\n    assign('pressure', data.pressure);\r\n    assign('humidity', data.humidity);\r\n    document.querySelector('.flag').src = `https://www.countryflags.io/${data.country}/flat/64.png`\r\n    progress.style.display = 'none';\r\n    if (document.querySelector('.degrees').textContent === 'C') {\r\n      btn.style.backgroundColor = 'gold';\r\n      btn2.style.backgroundColor = 'white';\r\n    } else {\r\n      btn.style.backgroundColor = 'white';\r\n      btn2.style.backgroundColor = 'gold';\r\n    }\r\n  }\r\n};\r\n\r\nconst locationUrl = (url) => {\r\n  const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${url}&APPID=7c933702219e1d26960b3cc11edb864c`;\r\n  return url2;\r\n};\r\n\r\n\r\nasync function check1(url3) {\r\n  const data = await Object(_logic__WEBPACK_IMPORTED_MODULE_3__[\"findWeather\"])(locationUrl(url3));\r\n  const url = await Object(_logic__WEBPACK_IMPORTED_MODULE_3__[\"find\"])(data.description);\r\n  const temp = Math.round(parseFloat(data.temp) - 273.15);\r\n  const temp2 = Math.round(parseFloat(data.feels_like) - 273.15);\r\n  assign('temp', temp);\r\n  assign('feelslike', temp2);\r\n  document.querySelector('.bg').src = url;\r\n  deg.textContent = 'C';\r\n  get(data);\r\n}\r\n\r\nasync function check2(url3) {\r\n  const data = await Object(_logic__WEBPACK_IMPORTED_MODULE_3__[\"findWeather\"])(locationUrl(url3));\r\n  const url = await Object(_logic__WEBPACK_IMPORTED_MODULE_3__[\"find\"])(data.description);\r\n  const temp = Math.round(parseFloat(data.temp) - 273.15);\r\n  const temp2 = Math.round(parseFloat(data.feels_like) - 273.15);\r\n  assign('temp', Object(_temp__WEBPACK_IMPORTED_MODULE_2__[\"farenheit\"])(temp));\r\n  assign('feelslike', Object(_temp__WEBPACK_IMPORTED_MODULE_2__[\"farenheit\"])(temp2));\r\n  deg.textContent = 'F';\r\n  document.querySelector('.bg').src = url;\r\n  get(data);\r\n}\r\n\r\nbtn.addEventListener('click', () => {\r\n  !input.value ? check1(document.getElementById('town').textContent) : check1(input.value) ;\r\n  deg.textContent = 'C';\r\n  document.querySelector('#deg').textContent = 'C';\r\n  unshow();\r\n});\r\n\r\nbtn2.addEventListener('click', () => {\r\n  !input.value ? check2(document.getElementById('town').textContent) : check2(input.value) ;\r\n  deg.textContent = 'F';\r\n  document.querySelector('#deg').textContent = 'F';\r\n  unshow();\r\n});\r\n\r\nasync function now() {\r\n  const geo = await Object(_logic__WEBPACK_IMPORTED_MODULE_3__[\"ip\"])();\r\n  geo ? check1(geo.city) : check1('vancouver');\r\n}\r\n\r\nnow();\r\ndocument.getElementById('today').textContent = new Date().toDateString();\r\ndocument.querySelector('#deg').textContent = 'C';\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/*! exports provided: findWeather, find, ip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findWeather\", function() { return findWeather; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return find; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ip\", function() { return ip; });\nasync function ip() {\r\n  try {\r\n    const response = await fetch('https://ipfind.co/?ip=105.112.70.208&auth=f5ac562a-c9a7-4985-b964-bbc444515f2d', { mode: 'cors' });\r\n    const responseData = await response.json();\r\n    return (responseData);\r\n  } catch (err) {\r\n    return err;\r\n  }\r\n}\r\n\r\nasync function find(search) {\r\n  try {\r\n    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=1ciWQ3R3BbnLWyjnSWHUIKmeC1TMV1wH&s=${search}`, { mode: 'cors' });\r\n    const res = await response.json();\r\n    return res.data.images.original.url;\r\n  } catch (err) {\r\n    return err;\r\n  }\r\n}\r\n\r\nasync function findWeather(url) {\r\n  let responseData;\r\n  let weather;\r\n  try {\r\n    const response = await fetch(url, { mode: 'cors' });\r\n    responseData = await response.json();\r\n    const { temp } = responseData.main;\r\n    const { description } = responseData.weather[0];\r\n    const { country } = responseData.sys;\r\n    const { name } = responseData;\r\n    const { feels_like } = responseData.main;\r\n    const { pressure } = responseData.main;\r\n    const { humidity } = responseData.main;\r\n\r\n    weather = {\r\n      temp, description, country, name, feels_like, pressure, humidity,\r\n    };\r\n  } catch (err) {\r\n    return '204';\r\n  }\r\n  return weather;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/logic.js?");

/***/ }),

/***/ "./src/rolling.css":
/*!*************************!*\
  !*** ./src/rolling.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./rolling.css */ \"./node_modules/css-loader/dist/cjs.js!./src/rolling.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/rolling.css?");

/***/ }),

/***/ "./src/temp.js":
/*!*********************!*\
  !*** ./src/temp.js ***!
  \*********************/
/*! exports provided: farenheit, celcius */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"farenheit\", function() { return farenheit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"celcius\", function() { return celcius; });\nlet newValue;\r\n\r\nconst celcius = (num) => {\r\n  newValue = Math.round((parseFloat(num, 10) - 32) * (5 / 9));\r\n  return newValue;\r\n};\r\n\r\nconst farenheit = (num) => {\r\n  newValue = Math.round((parseFloat(num, 10) * 9) / 5 + 32);\r\n  return newValue;\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/temp.js?");

/***/ })

/******/ });