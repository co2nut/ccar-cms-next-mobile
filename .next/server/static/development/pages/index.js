module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./common-function.js":
/*!****************************!*\
  !*** ./common-function.js ***!
  \****************************/
/*! exports provided: isNumberAndSpace, formatDate, formatNumber, numberToFixed, trimStringNumber, reverseString, checkCardType, removeNullFromArray, isValidDate, calculateTimeRange, convertMilliSecondsToTime, isExpired, convertToCardFormat, convertToExpiredDateFormat, insertBetween, checkSupportedCardType, isValidNumber, isExpiryDateFormat, sortByDesc, sortByDateDesc, findData, hideStringNumber, notEmptyLength, arrayLengthCount, syncDefaultDelivery, syncDefaultBilling, syncDefaultCard, syncDefaultBank, isSavedWishList, isFollowed, deepEqual, isObject, deepEqualArrayObject, roundToHalf, queryStringifyNestedObject, getImgTagSource, removeHtmlTag, convertToRangeFormat, convertRangeFormatBack, convertRangeFormatToText, convertFilterRange, objectRemoveEmptyValue, convertProductRouteParamsToFilterObject, convertParameterToProductListUrl, convertParameterToProductListSeoUrl, getTopItems, toCamelCase, toSnakeCase, viewPort, getUserName, getPlural, findIndexesOfString, checkObjectId, getObjectId, getCarMarketSeoData, getProfileSeoData, getCarFreakSeoData, getSocialBoardSeoData, getClubSeoData, getAllNewCarSeoData, getLiveSeoData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumberAndSpace", function() { return isNumberAndSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNumber", function() { return formatNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberToFixed", function() { return numberToFixed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimStringNumber", function() { return trimStringNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverseString", function() { return reverseString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkCardType", function() { return checkCardType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNullFromArray", function() { return removeNullFromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidDate", function() { return isValidDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateTimeRange", function() { return calculateTimeRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertMilliSecondsToTime", function() { return convertMilliSecondsToTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExpired", function() { return isExpired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToCardFormat", function() { return convertToCardFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToExpiredDateFormat", function() { return convertToExpiredDateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertBetween", function() { return insertBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSupportedCardType", function() { return checkSupportedCardType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidNumber", function() { return isValidNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExpiryDateFormat", function() { return isExpiryDateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByDesc", function() { return sortByDesc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByDateDesc", function() { return sortByDateDesc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findData", function() { return findData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideStringNumber", function() { return hideStringNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEmptyLength", function() { return notEmptyLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayLengthCount", function() { return arrayLengthCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncDefaultDelivery", function() { return syncDefaultDelivery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncDefaultBilling", function() { return syncDefaultBilling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncDefaultCard", function() { return syncDefaultCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncDefaultBank", function() { return syncDefaultBank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSavedWishList", function() { return isSavedWishList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFollowed", function() { return isFollowed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepEqual", function() { return deepEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepEqualArrayObject", function() { return deepEqualArrayObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundToHalf", function() { return roundToHalf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryStringifyNestedObject", function() { return queryStringifyNestedObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImgTagSource", function() { return getImgTagSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeHtmlTag", function() { return removeHtmlTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToRangeFormat", function() { return convertToRangeFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertRangeFormatBack", function() { return convertRangeFormatBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertRangeFormatToText", function() { return convertRangeFormatToText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertFilterRange", function() { return convertFilterRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectRemoveEmptyValue", function() { return objectRemoveEmptyValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertProductRouteParamsToFilterObject", function() { return convertProductRouteParamsToFilterObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertParameterToProductListUrl", function() { return convertParameterToProductListUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertParameterToProductListSeoUrl", function() { return convertParameterToProductListSeoUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopItems", function() { return getTopItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCamelCase", function() { return toCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSnakeCase", function() { return toSnakeCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewPort", function() { return viewPort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserName", function() { return getUserName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlural", function() { return getPlural; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndexesOfString", function() { return findIndexesOfString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkObjectId", function() { return checkObjectId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectId", function() { return getObjectId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCarMarketSeoData", function() { return getCarMarketSeoData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfileSeoData", function() { return getProfileSeoData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCarFreakSeoData", function() { return getCarFreakSeoData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSocialBoardSeoData", function() { return getSocialBoardSeoData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClubSeoData", function() { return getClubSeoData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllNewCarSeoData", function() { return getAllNewCarSeoData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLiveSeoData", function() { return getLiveSeoData; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! query-string */ "query-string");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! local-storage */ "local-storage");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redux/config */ "./redux/config.js");
/* harmony import */ var _params_carBrandsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./params/carBrandsList */ "./params/carBrandsList.js");
/* harmony import */ var _params_stateList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./params/stateList */ "./params/stateList.js");
/* harmony import */ var _params_bodyTypeList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./params/bodyTypeList */ "./params/bodyTypeList.js");
/* harmony import */ var _params_fuelTypeList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./params/fuelTypeList */ "./params/fuelTypeList.js");
/* harmony import */ var _params_colorList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./params/colorList */ "./params/colorList.js");
/* harmony import */ var _functionContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./functionContent */ "./functionContent.js");
/* harmony import */ var _feathers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./feathers */ "./feathers.js");
/* harmony import */ var _components_carFreak_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/carFreak/config */ "./components/carFreak/config.js");
/* harmony import */ var _components_live_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/live/config */ "./components/live/config.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















var moment = __webpack_require__(/*! moment */ "moment");

const defaultRangeSmaller = '<=';
const defaultRangeBigger = '>=';
const availableFilters = ['make', 'model', 'title', 'condition', 'transmission', 'state', 'area', 'priceRange', 'yearRange', 'mileageRange', 'engineCapacityRange', 'bodyType', 'color', 'fuelType', 'registrationUrl', 'readyStock', 'car360View', 'businessType'];
function isNumberAndSpace(value) {
  //to array
  if (value != null) {
    value = value.split('');

    if (value.filter(function (item, index) {
      return !parseInt(item) && parseInt(item) != 0 && item != ' ';
    }).length > 0) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}
function formatDate(value, format) {
  if (value != null) {
    if (!isValidDate(value)) {
      return null;
    } else {
      if (format == null) {
        format = "DD/MM/YYYY";
      }

      return moment(value).format(format);
    }
  } else {
    return null;
  }
}
function formatNumber(value, unit, round, fixedPoint, trim) {
  if (value != null) {
    if (isNaN(parseFloat(value))) {
      return value;
    } else {
      value = parseFloat(value); //default will auto round up if round didn't passed in
      //default fixedPoint 0

      switch (unit) {
        case "k":
          value = numberToFixed(value / 1000, round, fixedPoint);
          break;

        case "m":
          value = numberToFixed(value / 1000000, round, fixedPoint);
          break;

        case "b":
          value = numberToFixed(value / 1000000000, round, fixedPoint);
          break;

        case "auto":
          let units = [['', 1], ['k', 1000], ['m', 1000000], ['b', 1000000000]]; //get closest unit

          if (value <= 1) {
            unit = '';
          } else {
            lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.reverse(units), function (item, index) {
              if (value / item[1] >= 1) {
                value = numberToFixed(value / item[1], round, fixedPoint);
                unit = item[0];
                return false;
              }
            });
          }

          break;

        default:
          value = numberToFixed(value, round, fixedPoint);
          break;
      }

      let formatedValue = '';
      let prefix = insertBetween(parseInt(value), 3, ',', true, true);
      let postfix = value.toString().split('.')[1];
      formatedValue += prefix;

      if (postfix) {
        formatedValue += '.' + postfix;
      }

      if (trim) {
        formatedValue = trimStringNumber(formatedValue);
      }

      if (unit) {
        formatedValue += unit;
      }

      return formatedValue;
    }
  } else {
    return value;
  }
}
function numberToFixed(value, round, fixedPoint, fromFront) {
  if (value != null && !isNaN(parseFloat(value))) {
    if (isNaN(parseInt(fixedPoint))) {
      //Default
      fixedPoint = 0;
    } else {
      fixedPoint = parseInt(fixedPoint);
    }

    if (round == null) {
      round = true;
    }

    if (fromFront) {
      value = parseFloat(value);
      value = value.toString().split('.');

      if (value[0]) {
        // if (value[0].length > fixedPoint) {
        //     value[0] = value[0].slice(value[0].length - fixedPoint);
        // }
        if (value[0].length < fixedPoint) {
          lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.range(fixedPoint - value[0].length), function () {
            value[0] = '0' + value[0];
          });
        }

        return value[0];
      }
    } else {
      value = parseFloat(value);

      if (round) {
        return value.toFixed(fixedPoint);
      } else {
        value = value.toString().split('.');

        if (value[1]) {
          if (value[1].length > fixedPoint) {
            value[1] = value[1].slice(0, fixedPoint);
          }

          if (value[1].length < fixedPoint) {
            lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.range(fixedPoint - value[0].length), function () {
              value[0] = value[0] + '0';
            });
          }
        }

        return parseFloat(value.join(".")).toFixed(fixedPoint);
      }
    }
  } else {
    return value;
  }
} //Remove prefix 0 and postfix 0

function trimStringNumber(value) {
  if (value != null) {
    value = value.toString().split('.');
    let prefix = value[0];
    let postfix = value[1];

    if (prefix != null) {
      if (prefix.length > 1) {
        let prefixArr = prefix.split("");
        let done = false;
        prefixArr.some(num => {
          if (num == '0') {
            //cut out 0
            prefix = prefix.substring(1);
          } else {
            done = true;
          }

          return done;
        });
      }
    }

    if (postfix != null) {
      if (postfix.length > 0) {
        let postfixArr = postfix.split("").reverse();
        let done = false;
        postfixArr.some(num => {
          if (num == '0') {
            //cut out 0
            postfix = postfix.substring(0, postfix.length - 1);
          } else {
            done = true;
          }

          return done;
        });
      }
    }

    if (postfix) {
      return prefix + "." + postfix;
    } else {
      return prefix;
    }
  } else {
    return value;
  }
}
function reverseString(value) {
  if (value != null) {
    var strArray = value.toString().split("");
    strArray = strArray.reverse();
    return strArray.join("");
  } else {
    return value;
  }
}
function checkCardType(number) {
  if (number != null) {
    number = number.replace(/\s/g, ''); // visa

    var re = new RegExp("^4");
    if (number.match(re) != null) return "VISA"; // Mastercard 
    // Updated for Mastercard 2017 BINs expansion

    if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(number)) return "MASTERCARD"; // AMEX

    re = new RegExp("^3[47]");
    if (number.match(re) != null) return "AMERICANEXPRESS"; // Discover

    re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
    if (number.match(re) != null) return "DISCOVER"; // Diners

    re = new RegExp("^36");
    if (number.match(re) != null) return "DINERS"; // Diners - Carte Blanche

    re = new RegExp("^30[0-5]");
    if (number.match(re) != null) return "DINERSCARTEBLANCHE"; // JCB

    re = new RegExp("^35(2[89]|[3-8][0-9])");
    if (number.match(re) != null) return "JCB"; // Visa Electron

    re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
    if (number.match(re) != null) return "VISAELECTRON";
  }

  return null;
}
function removeNullFromArray(value) {
  if (notEmptyLength(value)) {
    return value.filter(function (item) {
      return item != null;
    });
  }

  return value;
}
function isValidDate(value) {
  if (value != null) {
    value = new Date(value);

    if (Object.prototype.toString.call(value) === "[object Date]") {
      // it is a date
      if (isNaN(value.valueOf())) {
        // value.valueOf() could also work
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function calculateTimeRange(date1, date2, unit, precise) {
  if (date1 != null) {
    if (isValidDate(date1)) {
      date1 = moment(date1);

      if (date2 != null) {
        if (isValidDate(date2)) {
          date2 = moment(date2);
        } else {
          return null;
        }
      } else {
        date2 = moment();
      }

      let data = {};

      switch (unit) {
        case 'year':
          data.difference = date1.diff(date2, 'years', precise);
          data.unit = unit;
          break;

        case 'month':
          data.difference = date1.diff(date2, 'months', precise);
          data.unit = unit;
          break;

        case 'week':
          data.difference = date1.diff(date2, 'weeks', precise);
          data.unit = unit;
          break;

        case 'day':
          data.difference = date1.diff(date2, 'days', precise);
          data.unit = unit;
          break;

        case 'hour':
          data.difference = date1.diff(date2, 'hours', precise);
          data.unit = unit;
          break;

        case 'minute':
          data.difference = date1.diff(date2, 'minutes', precise);
          data.unit = unit;
          break;

        case 'second':
          data.difference = date1.diff(date2, 'seconds', precise);
          data.unit = unit;
          break;

        default:
          //auto get nearest 1
          let sections = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second'];
          let selectedSection = sections.find(function (section) {
            return Math.abs(date1.diff(date2, section + 's', true)) >= 1;
          });

          if (selectedSection) {
            data.difference = date1.diff(date2, selectedSection + 's', precise);
            data.unit = selectedSection;
          } else {
            data.difference = 0;
            data.unit = 'second';
          }

      }

      return data;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
function convertMilliSecondsToTime(millisecond, minUnit) {
  if (millisecond != null && isValidNumber(parseInt(millisecond))) {
    let second = 0,
        minute = 0,
        hour = 0;
    let finalTime = '';
    millisecond = parseInt(millisecond);
    hour = numberToFixed(moment.duration(millisecond).hours(), false, 2, true);
    minute = numberToFixed(moment.duration(millisecond).minutes(), false, 2, true);
    second = numberToFixed(moment.duration(millisecond).seconds(), false, 2, true);

    switch (minUnit) {
      case 'minute':
        if (hour > 0) {
          finalTime = `${hour}:${minute}:${second}`;
        } else {
          finalTime = `${minute}:${second}`;
        }

        break;

      case 'hour':
        finalTime = `${hour}:${minute}:${second}`;
        break;

      default:
        if (hour > 0) {
          finalTime = `${hour}:${minute}:${second}`;
        } else if (minute > 0) {
          finalTime = `${minute}:${second}`;
        } else {
          finalTime = `${second}`;
        }

        break;
    }

    return finalTime;
  } else {
    return null;
  }
}
function isExpired(date, aspect) {
  if (aspect == null) {
    aspect = 'second';
  }

  if (date != null && isValidDate(date)) {
    var today = moment();
    date = moment(date);
    return today.isAfter(date, aspect);
  }

  return null;
}
function convertToCardFormat(value) {
  if (value != null) {
    value = value.replace(/\s/g, '');
    value = insertBetween(value, 4, ' ');
  }

  return value;
}
function convertToExpiredDateFormat(value) {
  if (value != null) {
    var str = value.split('');

    if (str.length < 3) {
      if (str[1] == '/') {
        str.splice(0, 0, '0');
        value = str.join("");
      } else {
        value = value.replace('/', '');
        value = insertBetween(value, 2, '/');
      }
    }
  }

  return value;
}
function insertBetween(value, space, char, fromBack, stopAtEnd) {
  if (value != null) {
    if (isNaN(parseInt(space))) {
      return value;
    } else {
      if (fromBack) {
        value = reverseString(value);
      }

      var oristr = value.toString().split('');
      var length = oristr.length;
      var addedspacecount = 1;
      space = parseInt(space);

      for (let index = 0; index < length; index++) {
        if (index != 0 && (index + 1) % space == 0) {
          if (stopAtEnd && index == length - 1) {
            break;
          }

          oristr.splice(index + addedspacecount, 0, char);
          addedspacecount = addedspacecount + 1;
        }
      }

      if (fromBack) {
        oristr = oristr.reverse();
      }

      return oristr.join("");
    }
  } else {
    return null;
  }
}
function checkSupportedCardType(card) {
  if (card != null) {
    // visa
    if (card == 'VISA') {
      return true;
    }

    if (card == 'MASTERCARD') {
      return true;
    }

    if (card == 'VISAELECTRON') {
      return true;
    }

    if (card == 'AMERICANEXPRESS') {
      return true;
    }
  }

  return false;
}
function isValidNumber(value) {
  return !isNaN(parseFloat(value));
}
function isExpiryDateFormat(value) {
  if (value != null) {
    //to array
    value = value.split('');

    if (value.filter(function (item, index) {
      if (index == 2) {
        return item != '/';
      }

      return !parseInt(item) && parseInt(item) != 0;
    }).length > 0) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}
function sortByDesc(data, col) {
  if (data && col) {
    return data.sort(function (a, b) {
      if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(a) || lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(b) || lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(a) || lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(b)) {
        if (!col) {
          col = 0;
        }

        if (a[col] < b[col]) return 1;
        if (a[col] > b[col]) return -1;
        return 0;
      } else {
        if (a < b) return 1;
        if (a > b) return -1;
        return 0;
      }
    });
  } else {
    return [];
  }
}
function sortByDateDesc(data, col) {
  if (data && col) {
    return data.sort(function (a, b) {
      if (moment(a[col]).isBefore(moment(b[col]))) return 1;
      if (moment(a[col]).isAfter(moment(b[col]))) return -1;
      return 0;
    });
  } else {
    return [];
  }
}
function findData(data, col, val) {
  return data.filter(function (item) {
    return item[col] == val;
  });
}
function hideStringNumber(string, start, end) {
  if (string) {
    var length = string.length; //Get rest part

    var startpart = '';
    var endpart = '';

    if (Number.isInteger(start) && Number.isInteger(end)) {
      startpart = string.slice(0, start);
      endpart = string.slice(length - (length - end), length);
    } else if (Number.isInteger(start)) {
      startpart = string.slice(0, start);
      endpart = '';
    } else if (Number.isInteger(end)) {
      startpart = '';
      endpart = string.slice(length - (length - end), length);
    } else {
      return string;
    } //Get desire convert part


    var convertpart = '';

    if (Number.isInteger(start) && Number.isInteger(end)) {
      convertpart = string.slice(start, end);
    } else if (Number.isInteger(start)) {
      convertpart = string.slice(start);
    } else if (Number.isInteger(end)) {
      convertpart = string.slice(0, end);
    } else {
      return string;
    } //to array


    convertpart = convertpart.split('');
    convertpart = convertpart.map(function (char) {
      if (isNaN(parseInt(char)) || !parseInt(char)) {
        return char;
      } else {
        return '*';
      }
    }); //to string

    convertpart = convertpart.join("");
    return startpart + convertpart + endpart;
  } else {
    return null;
  }
}
function notEmptyLength(data) {
  if (data) {
    if (Array.isArray(data) && data.length > 0) {
      return true;
    } else if (isObject(data) && Object.keys(data).length > 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function arrayLengthCount(data) {
  if (notEmptyLength(data) && Array.isArray(data)) {
    return data.length;
  } else {
    return 0;
  }
}
function syncDefaultDelivery(data, id) {
  return data.map(function (item) {
    if (item._id) {
      if (item._id != id) {
        if (item.isDefaultDelivery) {
          item.isDefaultDelivery = false;
        }
      } else {
        item.isDefaultDelivery = true;
      }
    }

    return item;
  });
}
function syncDefaultBilling(data, id) {
  return data.map(function (item) {
    if (item._id) {
      if (item._id != id) {
        if (item.isDefaultBilling) {
          item.isDefaultBilling = false;
        }
      } else {
        item.isDefaultBilling = true;
      }
    }

    return item;
  });
}
function syncDefaultCard(data, id) {
  return data.map(function (item) {
    if (item._id) {
      if (item._id != id) {
        if (item.isDefaultCard) {
          item.isDefaultCard = false;
        }
      } else {
        item.isDefaultCard = true;
      }
    }

    return item;
  });
}
function syncDefaultBank(data, id) {
  return data.map(function (item) {
    if (item._id) {
      if (item._id != id) {
        if (item.isDefaultBank) {
          item.isDefaultBank = false;
        }
      } else {
        item.isDefaultBank = true;
      }
    }

    return item;
  });
}
function isSavedWishList(data, id) {
  if (data && id) {
    var check = data.filter(function (item) {
      return item.productId == id;
    });
    return check.length > 0;
  } else {
    return false;
  }
}
function isFollowed(data, id) {
  if (data && id) {
    var check = data.filter(function (item) {
      return item.companyId == id;
    });
    return check.length > 0;
  } else {
    return false;
  }
}
function deepEqual(object1, object2) {
  if (object1 && object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (const key of keys1) {
      const val1 = object1[key];
      const val2 = object2[key];
      const areObjects = isObject(val1) && isObject(val2);

      if (areObjects && !deepEqual(val1, val2) || !areObjects && val1 !== val2) {
        return false;
      }
    }
  } else {
    return false;
  }

  return true;
}
function isObject(object) {
  return object != null && typeof object === 'object';
}
function deepEqualArrayObject(array1, array2) {
  if (Array.isArray(array1) && Array.isArray(array2)) {
    if (array1.length != array2.length) {
      return false;
    } else {
      for (let x = 0; x < array1.length; x++) {
        if (!deepEqual(array1[x], array2[x])) {
          return false;
        }
      }

      return true;
    }
  } else {
    return false;
  }
}
function roundToHalf(number) {
  if (number != null) {
    if (!isNaN(parseFloat(number))) {
      var decimal = parseFloat(number);
      var int = parseInt(number);
      decimal = decimal - int;
      return decimal >= 0.5 ? int + 0.5 : int;
    }
  }

  return false;
}
function queryStringifyNestedObject(value, colName) {
  if (value != null) {
    if (colName) {
      let data = {};
      data[colName] = JSON.stringify(value);
      return query_string__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(data);
    }

    return query_string__WEBPACK_IMPORTED_MODULE_1___default.a.stringify({
      data: JSON.stringify(value)
    });
  }

  return '';
}
function getImgTagSource(str) {
  if (str) {
    str = str.toString();
    let strArr = str.split("");
    let removed = true; //Get html tag only

    strArr = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.compact(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(strArr, function (chr) {
      if (chr == '<') {
        removed = false;
        return chr;
      }

      if (chr == '>') {
        removed = true;
        return chr;
      }

      if (removed) {
        return null;
      }

      return chr;
    }));
    let images = strArr.join("").split(">");
    images = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.compact(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(images, function (image) {
      if (image.substr(0, 4) == '<img') {
        //point to src value
        let startIndex = image.indexOf('src="') + 5; //crop until src

        let croppedStrArr = image.substr(startIndex);
        croppedStrArr = croppedStrArr.split("");
        let removed = false; //retrieve value

        croppedStrArr = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.compact(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(croppedStrArr, function (chr) {
          if (chr == '"') {
            removed = true;
            return null;
          }

          if (removed) {
            return null;
          }

          return chr;
        }));
        return {
          url: `/${croppedStrArr.join("")}`,
          name: croppedStrArr.join("").slice(10)
        };
      }

      return null;
    }));
    return images;
  } else {
    return str;
  }
}
function removeHtmlTag(str) {
  if (str) {
    str = str.toString();
    let strArr = str.split("");
    let removed = false;
    strArr = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.compact(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(strArr, function (chr) {
      if (chr == '<') {
        removed = true;
        return null;
      }

      if (chr == '>') {
        removed = false;
        return null;
      }

      if (removed) {
        return null;
      }

      return chr;
    }));
    return strArr.join("");
  } else {
    return str;
  }
}
function convertToRangeFormat(value) {
  let data = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(value); //Convert Range Format


  if (notEmptyLength(data)) {
    //Restruct range format to convert
    if (!data[0] && !data[1]) {} else if (!data[0]) {
      data[0] = data[1];
      data[1] = defaultRangeSmaller;
    } else if (!data[1]) {
      data[1] = defaultRangeBigger;
    }
  }

  return data;
}
function convertRangeFormatBack(valueArr) {
  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(valueArr) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(valueArr)) {
    let parameter1 = valueArr[0];
    let parameter2 = valueArr[1];
    let data = [,];

    if (parameter2 == defaultRangeSmaller || parameter2 == defaultRangeBigger) {
      if (parameter2 == defaultRangeBigger) {
        data[0] = parameter1;
      }

      if (parameter2 == defaultRangeSmaller) {
        data[1] = parameter1;
      }

      return data;
    } else {
      return valueArr;
    }
  } else {
    return valueArr;
  }
}
function convertRangeFormatToText(formatedRange, valueFormat) {
  function convertValue(value, format) {
    if (format == 'price') {
      return `RM ${formatNumber(value, null, true, 2, true)}`;
    }

    if (format == 'mileage') {
      return `${formatNumber(value, null, true, 2, true)} km`;
    }

    if (format == 'engineCapacity') {
      return `${formatNumber(value, null, true, 2, true)} cc`;
    }

    return value;
  }

  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(formatedRange) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(formatedRange)) {
    let parameter1 = formatedRange[0];
    let parameter2 = formatedRange[1];
    let text = '';

    if (parameter2 == '>=' || parameter2 == '>' || !parameter2 && parameter1) {
      text = `above ${convertValue(parameter1, valueFormat)}`;
    } else if (parameter2 == '<=' || parameter2 == '<') {
      text = `below ${convertValue(parameter1, valueFormat)}`;
    } else {
      text = `between ${convertValue(parameter1, valueFormat)} and ${convertValue(parameter2, valueFormat)}`;
    }

    return text;
  } else {
    return '';
  }
}
function convertFilterRange(value, name) {
  if (notEmptyLength(value) && name) {
    let parameter1 = parseFloat(value[0]);
    let parameter2 = value[1];
    let finalData = [];
    let query = {};

    if (!isValidNumber(parameter1)) {
      return null;
    }

    if (parameter2 != null) {
      switch (parameter2) {
        case '<=':
          query[`${name}`] = {
            $lte: +parameter1
          };
          finalData.push(query);
          break;

        case '<':
          query[`${name}`] = {
            $lt: +parameter1
          };
          finalData.push(query);
          break;

        case '==':
          query[`${name}`] = {
            $eq: +parameter1
          };
          finalData.push(query);
          break;

        case '>':
          query[`${name}`] = {
            $gt: +parameter1
          };
          finalData.push(query);
          break;

        case '>=':
          query[`${name}`] = {
            $gte: +parameter1
          };
          finalData.push(query);
          break;

        default:
          parameter2 = parseFloat(parameter2);

          if (!isValidNumber(parameter2)) {
            query[`${name}`] = {
              $eq: +parameter1
            };
            finalData.push(query);
          } else {
            query[`${name}`] = {
              $gte: +parameter1
            };
            finalData.push(query);
            let query1 = {};
            query1[`${name}`] = {
              $lte: +parameter2
            };
            finalData.push(query1);
          }

          break;
      }
    } else {
      query[`${name}`] = {
        $eq: +parameter1
      };
      finalData.push(query);
    }

    return finalData;
  } else {
    return null;
  }
}
function objectRemoveEmptyValue(value) {
  if (notEmptyLength(value) && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(value)) {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.pickBy(value, function (property) {
      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(property) ? notEmptyLength(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.compact(property)) : lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(property) ? notEmptyLength(objectRemoveEmptyValue(property)) : property;
    });
  } else {
    return {};
  }
}
function convertProductRouteParamsToFilterObject(routeParams) {
  let {
    parameter1,
    parameter2,
    parameter3
  } = routeParams;
  let {
    sorting,
    page,
    view
  } = routeParams;
  let mergeObj = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.pick(routeParams, availableFilters) || {};

  if (!isValidNumber(parseInt(page))) {
    page = 1;
  }

  if (view != 'gridView' && view != 'listView') {
    view = 'gridView';
  }

  try {
    sorting = JSON.parse(sorting);
  } catch (error) {}

  if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(sorting, ['carspec.year']) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(sorting, ['mileageFilter']) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(sorting, ['searchPrice'])) {
    sorting = {};
  }

  let finalData = {
    filterGroup: _objectSpread({}, mergeObj),
    config: {
      page: page,
      sorting: sorting,
      view: view
    }
  };

  if (finalData.filterGroup.priceRange) {
    finalData.filterGroup.priceRange = convertRangeFormatBack(finalData.filterGroup.priceRange);
  }

  if (finalData.filterGroup.yearRange) {
    finalData.filterGroup.yearRange = convertRangeFormatBack(finalData.filterGroup.yearRange);
  }

  if (finalData.filterGroup.mileageRange) {
    finalData.filterGroup.mileageRange = convertRangeFormatBack(finalData.filterGroup.mileageRange);
  }

  if (finalData.filterGroup.engineCapacityRange) {
    finalData.filterGroup.engineCapacityRange = convertRangeFormatBack(finalData.filterGroup.engineCapacityRange);
  }

  if (parameter1 && !parameter2 && !parameter3) {
    let stateArr = parameter1.split('_');
    finalData.filterGroup.state = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(stateArr) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(stateArr) ? lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(stateArr, [1]) || '' : '';
    finalData.filterGroup.area = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(stateArr) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(stateArr) ? lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(stateArr, [2]) || '' : '';
  } else if (parameter1 && parameter2 && !parameter3) {
    finalData.filterGroup.make = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.toLower(parameter1);
    let stateArr = parameter2.split('_');
    finalData.filterGroup.state = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(stateArr) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(stateArr) ? lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(stateArr, [1]) || '' : '';
    finalData.filterGroup.area = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(stateArr) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(stateArr) ? lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(stateArr, [2]) || '' : '';
  } else if (parameter1 && parameter2 && parameter3) {
    finalData.filterGroup.make = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.toLower(parameter1);
    finalData.filterGroup.model = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.toLower(parameter2);
    let stateArr = parameter3.split('_');
    finalData.filterGroup.state = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(stateArr) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(stateArr) ? lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(stateArr, [1]) || '' : '';
    finalData.filterGroup.area = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(stateArr) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(stateArr) ? lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(stateArr, [2]) || '' : '';
  } else {}

  return finalData;
}
function convertParameterToProductListUrl(data, config) {
  let mergeObj = objectRemoveEmptyValue(data);
  let basePath = '';

  if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(config) || lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(config)) {
    config = {
      page: 1,
      sorting: {},
      view: 'gridView'
    };
  }

  if (!isValidNumber(parseInt(config.page))) {
    config.page = 1;
  }

  if (config.view != 'gridView' && config.view != 'listView') {
    config.view = 'gridView';
  }

  if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(objectRemoveEmptyValue(config.sorting)) && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(objectRemoveEmptyValue(config.sorting)) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(config, ['sorting', 'carspec.year']) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(config, ['sorting', 'mileageFilter']) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(config, ['sorting', 'searchPrice'])) {
    config.sorting = {};
  } else {
    config.sorting = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.pick(objectRemoveEmptyValue(config.sorting), ['carspec.year', 'searchPrice', 'mileageFilter']);
  }

  if (notEmptyLength(mergeObj)) {
    mergeObj = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.pick(mergeObj, availableFilters);
    let condition = mergeObj.condition;
    let make = mergeObj.make;
    let model = mergeObj.model;
    let state = mergeObj.state;
    let area = mergeObj.area;

    if (condition && condition != 'cars-on-sale' && condition != 'all') {
      condition = [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.toLower(condition), 'cars-on-sale'].join('-');
    } else {
      condition = 'cars-on-sale';
    }

    if (state && state != 'malaysia') {
      if (area && state != 'malaysia') {
        state = ['malaysia', lodash__WEBPACK_IMPORTED_MODULE_0___default.a.toLower(mergeObj.state), lodash__WEBPACK_IMPORTED_MODULE_0___default.a.toLower(mergeObj.area)].join('_');
      } else {
        state = ['malaysia', lodash__WEBPACK_IMPORTED_MODULE_0___default.a.toLower(mergeObj.state)].join('_');
      }
    } else {
      state = 'malaysia';
    } //Main parameter
    //Order is important
    //The first 1 always is condition
    //The last 1 always is state


    let mainParameters = [make, model];
    let path = `${basePath}/${condition}`;

    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(mainParameters, function (parameter) {
      if (!parameter) {
        return false;
      } else {
        path += `/${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.toLower(parameter)}`;
      }
    });

    path += `/${state}`;
    delete mergeObj.condition;
    delete mergeObj.make;
    delete mergeObj.model;
    delete mergeObj.state;
    return `${path}?view=${config.view}&page=${config.page}${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(config.sorting) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(config.sorting) ? `&${queryStringifyNestedObject(config.sorting, 'sorting')}` : ''}${notEmptyLength(mergeObj) ? `&${queryStringifyNestedObject(mergeObj)}` : ''}`;
  } else {
    return `/cars-on-sale/malaysia?view=${config.view}&page=${config.page}${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(config.sorting) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(config.sorting) ? `&${queryStringifyNestedObject(config.sorting, 'sorting')}` : ''}`;
  }
}
function convertParameterToProductListSeoUrl(data) {
  let mergeObj = objectRemoveEmptyValue(data);
  let basePath = Object(_functionContent__WEBPACK_IMPORTED_MODULE_10__["checkEnvReturnCmsUrl"])(_feathers__WEBPACK_IMPORTED_MODULE_11__["default"].io.io.uri);
  ;

  if (notEmptyLength(mergeObj)) {
    mergeObj = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.pick(mergeObj, availableFilters);
    let condition = mergeObj.condition;
    let make = mergeObj.make;
    let model = mergeObj.model;
    let state = mergeObj.state;
    let area = mergeObj.area;

    if (condition && condition != 'cars-on-sale' && condition != 'all') {
      condition = [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.toLower(condition), 'cars-on-sale'].join('-');
    } else {
      condition = 'cars-on-sale';
    }

    if (state && state != 'malaysia') {
      if (area && state != 'malaysia') {
        state = ['malaysia', lodash__WEBPACK_IMPORTED_MODULE_0___default.a.toLower(mergeObj.state), lodash__WEBPACK_IMPORTED_MODULE_0___default.a.toLower(mergeObj.area)].join('_');
      } else {
        state = ['malaysia', lodash__WEBPACK_IMPORTED_MODULE_0___default.a.toLower(mergeObj.state)].join('_');
      }
    } else {
      state = 'malaysia';
    } //Main parameter
    //Order is important
    //The first 1 always is condition
    //The last 1 always is state


    let mainParameters = [make, model];
    let path = `${basePath}/${condition}`;

    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(mainParameters, function (parameter) {
      if (!parameter) {
        return false;
      } else {
        path += `/${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.toLower(parameter)}`;
      }
    });

    path += `/${state}`;
    delete mergeObj.condition;
    delete mergeObj.make;
    delete mergeObj.model;
    delete mergeObj.state;
    return `${path}?${notEmptyLength(mergeObj) ? `&${queryStringifyNestedObject(mergeObj)}` : ''}`;
  } else {
    return `/cars-on-sale/malaysia`;
  }
}
function getTopItems(data, rank, col) {
  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(data) && notEmptyLength(data)) {
    if (!isValidNumber(rank)) {
      rank = 3;
    } else {
      rank = parseInt(rank);
    }

    let pickedData = sortByDesc(data, col);
    pickedData = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.slice(pickedData, 0, rank);
    return pickedData;
  } else {
    return data;
  }
}
function toCamelCase(value, seperator) {
  if (!value || !value.toString()) {
    return value;
  } else {
    if (!seperator || !seperator.toString()) {
      seperator = ' ';
    } else {
      seperator = seperator.toString();
    }

    value = value.toString().split(seperator);
    value = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(value, function (item, index) {
      if (index > 0) {
        return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.capitalize(item);
      } else {
        return item;
      }
    });
    return value.join('');
  }
}
function toSnakeCase(value, seperator) {
  if (!value || !value.toString()) {
    return value;
  } else {
    if (!seperator || !seperator.toString()) {
      seperator = '_';
    } else {
      seperator = seperator.toString();
    }

    value = value.toString().split('');
    let finalData = [];

    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(value, function (item, index) {
      if (index == 0) {
        finalData.push(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.lowerCase(item));
      } else {
        if (item == lodash__WEBPACK_IMPORTED_MODULE_0___default.a.upperCase(item)) {
          finalData.push(seperator);
        }

        finalData.push(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.lowerCase(item));
      }
    });

    return finalData.join('');
  }
}
const viewPort = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
};
function getUserName(user, type) {
  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(user) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(user)) {
    let username = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.trim(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(user, ['username']) || '');

    let fullName = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.trim(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(user, ['fullName']) || `${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(user, ['firstName']) || ''} ${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(user, ['lastName']) || ''}` || '');

    let firstName = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.trim(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(user, ['firstName']) || '');

    let lastName = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.trim(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(user, ['lastName']) || '');

    let namePrefix = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.trim(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(user, ['namePrefix']) || '');

    let freakId = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.trim(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(user, ['freakId']) || '');

    switch (type) {
      case 'username':
        return username;

      case 'fullName':
        return fullName;

      case 'prefixName':
        return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.trim(`${namePrefix ? `${namePrefix}` : ''} ${fullName || ''}`);

      case 'firstName':
        return firstName;

      case 'lastName':
        return lastName;

      case 'freakId':
        return freakId;

      default:
        return fullName;
    }
  } else {
    return 'Ccar User';
  }
}
function getPlural(singular, plural, count, showCount) {
  if (singular && isValidNumber(parseInt(count))) {
    return parseInt(count) > 1 ? showCount ? `${count} ${plural || singular + 's'}` : `${plural || singular + 's'}` : showCount ? `${formatNumber(count, 'auto', true, 0, true)} ${singular}` : `${singular}`;
  } else {
    return '';
  }
}
function findIndexesOfString(text, search) {
  if (text && search) {
    let indexes = [];
    let currentPosition = 0;

    while (currentPosition < text.length) {
      currentPosition = text.indexOf(search, currentPosition);

      if (currentPosition == -1) {
        currentPosition = text.length;
      } else {
        indexes.push(currentPosition);
        currentPosition = currentPosition + search.length;
      }
    }

    return indexes;
  } else {
    return [];
  }
}
function checkObjectId(data, idForCheck, col) {
  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(data) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(data)) {
    return data[`${col || '_id'}`] == idForCheck;
  } else {
    return data == idForCheck;
  }
}
function getObjectId(data, col) {
  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(data) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(data)) {
    return data[`${col || '_id'}`];
  } else {
    return data;
  }
}
function getCarMarketSeoData(filterGroup, total) {
  if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(filterGroup)) {
    filterGroup = {};
  } else {
    filterGroup = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(filterGroup);
  }

  let title = [];
  let description = [];
  let location = [];
  let rangeFilter = [];
  let otherFilter = [];

  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(filterGroup, 'state') || lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(filterGroup, 'area')) {
    location.push(`${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.capitalize(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(filterGroup, 'area') || '')}`);
    location.push(`${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(Object(_params_stateList__WEBPACK_IMPORTED_MODULE_6__["getState"])(filterGroup.state), 'value') || ''}`);
  }

  location.push('Malaysia');
  location = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.compact(location).join(' ');
  const filterRanges = ['price', 'mileage', 'engineCapacity', 'year'];

  lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(filterRanges, function (filterRange) {
    if (filterGroup[filterRange + 'Range']) {
      rangeFilter.push(`${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.capitalize(toSnakeCase(filterRange, ' '))} ${convertRangeFormatToText(convertToRangeFormat(filterGroup[filterRange + 'Range']), filterRange)}`);
    }
  });

  if (filterGroup.bodyType) {
    otherFilter.push(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.capitalize(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(Object(_params_bodyTypeList__WEBPACK_IMPORTED_MODULE_7__["getBodyType"])(filterGroup.bodyType), 'value') || ''));
  }

  if (filterGroup.fuelType) {
    otherFilter.push(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.capitalize(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(Object(_params_fuelTypeList__WEBPACK_IMPORTED_MODULE_8__["getFuelType"])(filterGroup.fuelType), 'value') || ''));
  }

  if (filterGroup.color) {
    otherFilter.push(`Color ${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.capitalize(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(Object(_params_colorList__WEBPACK_IMPORTED_MODULE_9__["getColor"])(filterGroup.color), 'value') || '')}`);
  }

  if (filterGroup.registrationUrl) {
    otherFilter.push(`With Registration Url`);
  }

  if (filterGroup.readyStock) {
    otherFilter.push(`Is Ready Stock`);
  }

  if (filterGroup.car360View) {
    otherFilter.push(`With Car 360 View`);
  }

  otherFilter = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.concat(otherFilter, rangeFilter).join(', ');
  title.push(`Search ${formatNumber(total) || 0}`);

  if (filterGroup.title) {
    title.push(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.capitalize(filterGroup.title));
    title.push(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.capitalize(filterGroup.title));
  } else {
    title.push(`${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(Object(_params_carBrandsList__WEBPACK_IMPORTED_MODULE_5__["getCarBrand"])(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(filterGroup, 'make')), 'value') || ''}`);
    title.push(`${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.capitalize(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(filterGroup, 'model') || '')}`);
  }

  title.push(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.capitalize(filterGroup.condition || ''));
  title.push(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.capitalize(filterGroup.transmission || ''));
  description = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(title);
  title.push(`Cars for Sales in ${location} - CCAR.my #1 Car Social Platform.`);
  title = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.compact(title);
  title = title.join(' ');
  description.push(`Cars for Sales in ${location}${otherFilter ? '.' : ''}`);
  description.push(otherFilter);
  description.push('- CCAR.my #1 Car Social Platform.');
  description = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.compact(description);
  description = description.join(' ');
  let canonical = convertParameterToProductListSeoUrl(filterGroup);
  return {
    title,
    description,
    canonical
  };
}
function getProfileSeoData(profile) {
  if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(profile)) {
    return {};
  } else {
    profile = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(profile);
  }

  let title = [];
  let description = [];
  title.push(`${getUserName(profile, 'fullName') || ''}`);
  title.push(`'s Profile - CCAR.my #1 Car Social Platform `);
  title = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.compact(title);
  title = title.join(' ');
  description.push(`${getUserName(profile, 'fullName') || ''}`);
  description.push(`is on CCAR #1 Car Social Platform. Come and share car info with ${getUserName(profile, 'fullName') || ''} and others. CCAR connects all car lovers together.`);
  description = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.compact(description);
  description = description.join(' ');
  let canonical = `${Object(_functionContent__WEBPACK_IMPORTED_MODULE_10__["checkEnvReturnCmsUrl"])(_feathers__WEBPACK_IMPORTED_MODULE_11__["default"].io.io.uri)}/profile/${profile.userurlId}`;
  let images = [{
    url: profile.avatar,
    alt: 'CCAR User Profile Image'
  }];
  return {
    title,
    description,
    canonical,
    images
  };
}
function getCarFreakSeoData(data) {
  if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(data)) {
    return {};
  } else {
    data = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(data);
  }

  let title = [];
  let description = [];
  title.push(`${Object(_components_carFreak_config__WEBPACK_IMPORTED_MODULE_12__["parseTagStringToPlainString"])(data.title) || ''}`);
  title.push(`|`);
  title.push(`CarFreaks`);
  title.push(`- CCAR.my #1 Car Social Platform`);
  title = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.compact(title);
  title = title.join(' ');
  description.push(`${Object(_components_carFreak_config__WEBPACK_IMPORTED_MODULE_12__["parseTagStringToPlainString"])(data.content) || ''}`);

  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(data.userId) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(data.userId)) {
    description.push('|');
    description.push(`Posted By ${getUserName(data.userId, 'fullName') || ''}`);
  }

  description = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.compact(description);
  description = description.join(' ');
  let canonical = `${Object(_functionContent__WEBPACK_IMPORTED_MODULE_10__["checkEnvReturnCmsUrl"])(_feathers__WEBPACK_IMPORTED_MODULE_11__["default"].io.io.uri)}/car-freaks/${data._id}`;
  let images = [{
    url: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(data, 'mediaList[0].url') || '',
    alt: 'CCAR CarFreak Image'
  }];
  return {
    title,
    description,
    canonical,
    images
  };
}
function getSocialBoardSeoData(data) {
  if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(data)) {
    return {};
  } else {
    data = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(data);
  }

  let title = [];
  let description = [];
  title.push(`${Object(_components_carFreak_config__WEBPACK_IMPORTED_MODULE_12__["parseTagStringToPlainString"])(data.title) || ''}`);
  title.push(`|`);
  title.push(`Social Board`);
  title.push(`- CCAR.my #1 Car Social Platform`);
  title = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.compact(title);
  title = title.join(' ');
  description.push(`${Object(_components_carFreak_config__WEBPACK_IMPORTED_MODULE_12__["parseTagStringToPlainString"])(data.content) || ''}`);

  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(data.userId) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(data.userId)) {
    description.push('|');
    description.push(`Posted By ${getUserName(data.userId, 'fullName') || ''}`);
  }

  description = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.compact(description);
  description = description.join(' ');
  let canonical = `${Object(_functionContent__WEBPACK_IMPORTED_MODULE_10__["checkEnvReturnCmsUrl"])(_feathers__WEBPACK_IMPORTED_MODULE_11__["default"].io.io.uri)}/social-board/${data._id}`;
  return {
    title,
    description,
    canonical
  };
}
function getClubSeoData(data) {
  if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(data)) {
    return {};
  } else {
    data = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(data);
  }

  let title = [];
  let description = [];
  title.push(`${data.clubName || ''}`);
  title.push(`|`);
  title.push(`Social Club`);
  title.push(`- CCAR.my #1 Car Social Platform`);
  title = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.compact(title);
  title = title.join(' ');
  description.push(`${data.clubBio || ''}`);

  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(data.userId) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(data.userId)) {
    description.push('|');
    description.push(`Created By ${getUserName(data.userId, 'fullName') || ''}`);
  }

  description = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.compact(description);
  description = description.join(' ');
  let canonical = `${Object(_functionContent__WEBPACK_IMPORTED_MODULE_10__["checkEnvReturnCmsUrl"])(_feathers__WEBPACK_IMPORTED_MODULE_11__["default"].io.io.uri)}/social-club/${data._id}`;
  let images = [{
    url: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(data, 'clubAvatar') || '',
    alt: 'CCAR CarFreak Image'
  }];
  return {
    title,
    description,
    canonical,
    images
  };
}
function getAllNewCarSeoData(data) {
  if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(data)) {
    return {};
  } else {
    data = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(data);
  }

  let title = [];
  let description = [];
  title.push(`${Object(_params_carBrandsList__WEBPACK_IMPORTED_MODULE_5__["getCarBrand"])(data.make).value || ''}`);
  title.push(`|`);
  title.push(`${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.capitalize(data.model || '')}`);
  title.push(`|`);
  title.push(`All New Car - CCAR.my #1 Car Social Platform`);
  title = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.compact(title);
  title = title.join(' ');
  description.push(`View ${Object(_params_carBrandsList__WEBPACK_IMPORTED_MODULE_5__["getCarBrand"])(data.make).value || ''} ${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.capitalize(data.model || '')} All New Car at CCAR.my now - CCAR.my #1 Car Social Platform  `);
  description = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.compact(description);
  description = description.join(' ');
  let canonical = `${Object(_functionContent__WEBPACK_IMPORTED_MODULE_10__["checkEnvReturnCmsUrl"])(_feathers__WEBPACK_IMPORTED_MODULE_11__["default"].io.io.uri)}/newcar/details/${data.make}/${data.model}`;
  let images = [{
    url: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(data, 'uri') || '',
    alt: `CCAR ${Object(_params_carBrandsList__WEBPACK_IMPORTED_MODULE_5__["getCarBrand"])(data.make).value || ''} ${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.capitalize(data.model || '')} Image`
  }];
  return {
    title,
    description,
    canonical,
    images
  };
}
function getLiveSeoData(data) {
  const apiDomain = Object(_components_live_config__WEBPACK_IMPORTED_MODULE_13__["getStreamUrl"])(_feathers__WEBPACK_IMPORTED_MODULE_11__["default"].io.io.uri);

  if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(data)) {
    return {};
  } else {
    data = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(data);
  }

  let title = [];
  let description = [];
  title.push(`CCAR LIVE`);
  title.push(`|`);
  title.push(`${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.capitalize(data.user || 'Ccar User')}`);
  title.push(`- CCAR.my #1 Car Social Platform`);
  title = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.compact(title);
  title = title.join(' ');
  description.push(data.title);
  description.push(`View Car Live Streaming at CCAR.my now - CCAR.my #1 Car Social Platform  `);
  description = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.compact(description);
  description = description.join(' ');
  let canonical = `${Object(_functionContent__WEBPACK_IMPORTED_MODULE_10__["checkEnvReturnCmsUrl"])(_feathers__WEBPACK_IMPORTED_MODULE_11__["default"].io.io.uri)}/live/${data.id}`;
  let images = [{
    url: `${apiDomain}dealerVideoThumbnails/${data.id}.png`,
    alt: `Live Streaming Image`
  }];
  return {
    title,
    description,
    canonical,
    images
  };
}

/***/ }),

/***/ "./components/carFreak/config.js":
/*!***************************************!*\
  !*** ./components/carFreak/config.js ***!
  \***************************************/
/*! exports provided: chatRestrictTime, carFreakGlobalSearch, tagPrefix, hashTagPrefix, tagPrefixHashValue, hashTagPrefixHashValue, tagSuffixHashValue, hashTagSuffixHashValue, seperatorHashValue, clubProfileViewTypes, parseTagStringToArray, getTagString, parseToTagString, getAliasCodeFromText, parseTagStringToPlainString, convertNameString, getViewType, validateViewType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatRestrictTime", function() { return chatRestrictTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carFreakGlobalSearch", function() { return carFreakGlobalSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagPrefix", function() { return tagPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashTagPrefix", function() { return hashTagPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagPrefixHashValue", function() { return tagPrefixHashValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashTagPrefixHashValue", function() { return hashTagPrefixHashValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagSuffixHashValue", function() { return tagSuffixHashValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashTagSuffixHashValue", function() { return hashTagSuffixHashValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seperatorHashValue", function() { return seperatorHashValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clubProfileViewTypes", function() { return clubProfileViewTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTagStringToArray", function() { return parseTagStringToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTagString", function() { return getTagString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseToTagString", function() { return parseToTagString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAliasCodeFromText", function() { return getAliasCodeFromText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTagStringToPlainString", function() { return parseTagStringToPlainString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertNameString", function() { return convertNameString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getViewType", function() { return getViewType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateViewType", function() { return validateViewType; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common-function */ "./common-function.js");



const chatRestrictTime = 2000;
const carFreakGlobalSearch = ['carFreak', 'socialBoard', 'club', 'dealer', 'people'];
const tagPrefix = '@';
const hashTagPrefix = '#';
const tagPrefixHashValue = '@~#}:start';
const hashTagPrefixHashValue = '#^:!%start';
const tagSuffixHashValue = '@^@}}end';
const hashTagSuffixHashValue = '#>^}~end';
const seperatorHashValue = ']<%seperator>!;_';
const clubProfileViewTypes = ['admin', 'member', 'pending', 'non-member'];
function parseTagStringToArray(text) {
  if (text) {
    let finalText = [];
    let tagText = text.split(tagSuffixHashValue);
    tagText = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(tagText, function (char) {
      if (char.includes(tagPrefixHashValue)) {
        char = char.split(tagPrefixHashValue); //split prefix , the previous 1 sure is other text

        if (char[0] != null && char[0] != undefined) {
          //Check if other text got hashtag
          if (char[0].includes(hashTagPrefixHashValue)) {
            let hashTagArr = parseHashTagStringToArray(char[0]);
            finalText = finalText.concat(hashTagArr);
          } else {
            finalText.push({
              type: 'normal',
              value: char[0],
              id: null
            });
          }
        } //split prefix , the after 1 sure is tag text


        if (char[1] != null && char[1] != undefined) {
          char[1] = char[1].split(seperatorHashValue);
          finalText.push({
            type: 'tag',
            value: char[1][0],
            id: char[1][1]
          });
        }
      } else {
        let hashTagArr = parseHashTagStringToArray(char);
        finalText = finalText.concat(hashTagArr);
      }
    });
    return finalText;
  } else {
    return text;
  }
}

function parseHashTagStringToArray(text) {
  if (text) {
    let finalText = [];
    let tagText = text.split(hashTagSuffixHashValue);
    tagText = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(tagText, function (char) {
      if (char.includes(hashTagPrefixHashValue)) {
        char = char.split(hashTagPrefixHashValue); //split prefix , the previous 1 sure is other text

        if (char[0] != null && char[0] != undefined) {
          finalText.push({
            type: 'normal',
            value: char[0],
            id: null
          });
        } //split prefix , the after 1 sure is tag text


        if (char[1] != null && char[1] != undefined) {
          char[1] = char[1].split(seperatorHashValue);
          finalText.push({
            type: 'hashTag',
            value: char[1][0],
            id: char[1][1]
          });
        }
      } else {
        finalText.push({
          type: 'normal',
          value: char,
          id: null
        });
      }
    });
    return finalText;
  } else {
    return [];
  }
}

function getTagString(text, id, prefix) {
  if (text && id) {
    let codePrefix = prefix == '#' ? hashTagPrefixHashValue : tagPrefixHashValue;
    let codeSuffix = prefix == '#' ? hashTagSuffixHashValue : tagSuffixHashValue;
    return `${codePrefix}${text || ''}${seperatorHashValue}${id || ''}${codeSuffix}`;
  } else {
    return text;
  }
}
function parseToTagString(text, aliasCode) {
  if (text && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(aliasCode) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(aliasCode)) {
    let finalText = text;

    let sortedAliasCode = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.reverse(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(aliasCode, ['position']));

    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(sortedAliasCode, function (code) {
      let name = code.name;
      let indexes = Object(_common_function__WEBPACK_IMPORTED_MODULE_2__["findIndexesOfString"])(finalText, name);

      if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.includes(indexes, code.position)) {
        let preText = finalText.substr(0, code.position) || '';
        let postText = finalText.substr(code.position + name.length) || '';
        finalText = preText + code.value + postText;
      }
    });

    return finalText;
  } else {
    return text;
  }
}
function getAliasCodeFromText(text) {
  if (text) {
    let aliasCode = [];
    let structedText = '';
    let textArr = parseTagStringToArray(text);
    textArr = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(textArr, function (item) {
      if (item.type != 'tag' && item.type != 'hashTag') {
        return item;
      } else {
        item.uid = `${Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])()}`;
        return item;
      }
    });
    structedText = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.compact(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(textArr, function (item) {
      if (item.type != 'tag' && item.type != 'hashTag') {
        return item.value;
      } else {
        return `${item.uid}${item.value}`;
      }
    }));
    structedText = structedText.join('');

    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(textArr, function (item) {
      if (item.type == 'tag' || item.type == 'hashTag') {
        let position = structedText.indexOf(item.uid);
        structedText = structedText.replace(item.uid, '');
        aliasCode.push({
          position: position,
          value: `${item.type == 'tag' ? tagPrefixHashValue : hashTagPrefixHashValue}${item.value || ''}${seperatorHashValue}${item.id || ''}${item.type == 'tag' ? tagSuffixHashValue : hashTagSuffixHashValue}`,
          prefix: item.type == 'tag' ? tagPrefix : hashTagPrefix,
          endPosition: position + item.value.length - 1,
          name: item.value,
          id: item.id,
          createdAt: new Date().getTime()
        });
      }
    });

    return aliasCode;
  } else {
    return [];
  }
}
function parseTagStringToPlainString(text) {
  if (text) {
    let textArr = parseTagStringToArray(text);
    textArr = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(textArr, function (item) {
      return item.value;
    });
    return textArr.join('');
  } else {
    return text;
  }
}
function convertNameString(users, authUser) {
  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(users) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(users)) {
    let text = '';
    let count = 3;

    if (Object(_common_function__WEBPACK_IMPORTED_MODULE_2__["getObjectId"])(authUser)) {
      users = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(users, function (user) {
        return Object(_common_function__WEBPACK_IMPORTED_MODULE_2__["checkObjectId"])(user, Object(_common_function__WEBPACK_IMPORTED_MODULE_2__["getObjectId"])(authUser));
      });
    }

    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(users, function (user, index) {
      if (index + 1 == users.length && users.length > 1) {
        text += ` and ${Object(_common_function__WEBPACK_IMPORTED_MODULE_2__["getUserName"])(user, 'fullName')}`;
        return false;
      }

      if (index + 1 > count) {
        text += ` and ${users.length - count} others`;
        return false;
      }

      if (index == 0) {
        text += `${Object(_common_function__WEBPACK_IMPORTED_MODULE_2__["getUserName"])(user, 'fullName')}`;
      }

      if (index > 0) {
        text += `, ${Object(_common_function__WEBPACK_IMPORTED_MODULE_2__["getUserName"])(user, 'fullName')}`;
      }
    });

    return text;
  } else {
    return 'Ccar User';
  }
}
function getViewType(join) {
  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(join) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(join)) {
    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(join, ['status']) == 'approved' && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(join, ['role']) == 'admin') {
      return clubProfileViewTypes[0];
    }

    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(join, ['status']) == 'approved' && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(join, ['role']) == 'member') {
      return clubProfileViewTypes[1];
    }

    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(join, ['status']) == 'pending' && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(join, ['role']) == 'member') {
      return clubProfileViewTypes[2];
    }

    return clubProfileViewTypes[3];
  } else {
    return clubProfileViewTypes[3];
  }
}
function validateViewType(data) {
  if (!data) {
    return clubProfileViewTypes[3];
  } else {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(clubProfileViewTypes, function (type) {
      return type == data;
    }) || clubProfileViewTypes[3];
  }
}

/***/ }),

/***/ "./components/compare/CompareFloatingButton.jsx":
/*!******************************************************!*\
  !*** ./components/compare/CompareFloatingButton.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_actions_productsList_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/productsList-actions */ "./redux/actions/productsList-actions.js");
/* harmony import */ var _feathers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../feathers */ "./feathers.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common-function */ "./common-function.js");
/* harmony import */ var _product_list_grid_product_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../product-list/grid-product-list */ "./components/product-list/grid-product-list.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../route */ "./route.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;















const CompareFloatingButton = props => {
  const refCompare = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const {
    0: productList,
    1: setProductList
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    function handleClickOutside(event) {
      if (event.target.id != 'compare') {
        if (refCompare.current && !refCompare.current.contains(event.target)) {
          setVisible(false);
        }
      }
    } // Bind the event listener


    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refCompare]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (Object(_common_function__WEBPACK_IMPORTED_MODULE_10__["notEmptyLength"])(props.productsList.compareIds)) {
      _feathers__WEBPACK_IMPORTED_MODULE_8__["default"].service('product-ads').find({
        query: {
          _id: {
            $in: props.productsList.compareIds
          },
          $populate: [{
            path: 'carspecsId',
            ref: 'carspecs'
          }, {
            path: 'companyId',
            ref: 'companys'
          }, {
            path: 'createdBy',
            ref: 'users'
          }]
        }
      }).then(res => {
        if (Object(_common_function__WEBPACK_IMPORTED_MODULE_10__["notEmptyLength"])(res.data)) {
          setProductList(res.data.map(function (item) {
            item.companys = item.companyId;
            item.carspecsAll = item.carspecsId;
            return item;
          }));
        } else {
          setProductList([]);
        }
      }).catch(err => {
        // message.error(err.message);
        props.clearCompareProductIds();
      });
    } else {
      setProductList([]);
    }
  }, [props.productsList.compareIds]);

  const toggle = () => {
    visible == true ? setVisible(false) : setVisible(true);
  };

  const _renderCondition = v => {
    let condDesc = v.condition.toUpperCase();

    if (v.condition == 'used') {
      return __jsx("div", {
        className: "wrap-condition wrap-condition-used",
        style: {
          marginTop: 3
        }
      }, __jsx("p", null, condDesc));
    } else if (v.condition == 'recon') {
      return __jsx("div", {
        className: "wrap-condition wrap-condition-recon",
        style: {
          marginTop: 3
        }
      }, __jsx("p", null, condDesc));
    } else {
      return __jsx("div", {
        className: "wrap-condition wrap-condition-new",
        style: {
          marginTop: 3
        }
      }, __jsx("p", null, "New"));
    }
  };

  return __jsx("div", null, visible === false ? productList.length > 0 ? __jsx("div", {
    className: "wrap-compare-btn"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => toggle(),
    id: "compare"
  }, __jsx("img", {
    src: "/assets/CarListingIconMobile/car-compare.png",
    className: "w-100"
  }))) : null : __jsx("div", {
    className: "wrap-compare-btn-circle"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => toggle(),
    className: "w-100",
    id: "compare"
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["CloseOutlined"], null))), visible === true ? __jsx("div", {
    ref: refCompare
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Compare Car",
    size: "small",
    className: "card-compare card-padding-0",
    bordered: true,
    extra: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: () => {
        props.clearCompareProductIds();
        toggle();
      }
    }, " Clear All")
  }, __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4__["Scrollbars"], {
    style: {
      width: '100%',
      maxWidth: window.innerWidth * 0.7
    },
    autoHide: true,
    autoHeight: true,
    autoHeightMax: "70vh"
  }, Object(_common_function__WEBPACK_IMPORTED_MODULE_10__["notEmptyLength"])(productList) ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
    className: "flex-justify-start flex-items-align-center padding-sm"
  }, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(productList, function (item) {
    return __jsx("span", {
      className: "d-inline-block margin-right-md flex-items-no-shrink",
      style: {
        width: 300
      }
    }, __jsx(_product_list_grid_product_list__WEBPACK_IMPORTED_MODULE_11__["default"], {
      data: [item],
      xs: 24,
      sm: 24,
      md: 24,
      lg: 24,
      xl: 24,
      topRight: v => {
        return __jsx("span", {
          className: "d-inline-block background-black-opacity-50 padding-x-sm"
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
          type: "close",
          style: {
            cursor: 'pointer',
            fontSize: '15px'
          },
          onClick: () => {
            props.removeCompareProductId(v._id);
          }
        }));
      }
    }));
  }))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    style: {
      margin: 30
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      margin: 10
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24,
    style: {
      textAlign: 'center'
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    shallow: false,
    href: _route__WEBPACK_IMPORTED_MODULE_13__["routePaths"].compare.to || '/',
    as: typeof _route__WEBPACK_IMPORTED_MODULE_13__["routePaths"].compare.as == 'function' ? _route__WEBPACK_IMPORTED_MODULE_13__["routePaths"].compare.as() : '/'
  }, __jsx("a", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: {
      fontWeight: 'bold'
    },
    type: "primary"
  }, "Confirm & Compare"))))))) : null);
};

function mapStateToProps(state) {
  return {
    productsList: state.productsList
  };
}

function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_6__["bindActionCreators"])({
    removeCompareProductId: _redux_actions_productsList_actions__WEBPACK_IMPORTED_MODULE_7__["removeCompareProductId"],
    updateActiveIdProductList: _redux_actions_productsList_actions__WEBPACK_IMPORTED_MODULE_7__["updateActiveIdProductList"],
    clearCompareProductIds: _redux_actions_productsList_actions__WEBPACK_IMPORTED_MODULE_7__["clearCompareProductIds"]
  }, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(CompareFloatingButton)));

/***/ }),

/***/ "./components/general/InfiniteScrollWrapper.jsx":
/*!******************************************************!*\
  !*** ./components/general/InfiniteScrollWrapper.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common-function */ "./common-function.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-infinite-scroller */ "react-infinite-scroller");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







let uid = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])();
let containerRef = {};
containerRef[uid] = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
let triggerFunction;

const InfiniteScrollWrapper = props => {
  const {
    0: htmlWindow,
    1: setHtmlWindow
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (window) {
      setHtmlWindow(window);
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_6___default.a, {
    loadMore: () => {
      if (props.onScrolledBottom) {
        clearTimeout(triggerFunction);
        triggerFunction = setTimeout(() => {
          props.onScrolledBottom();
        }, 500);
      }
    },
    hasMore: props.hasMore != null ? props.hasMore : true,
    useWindow: props.useWindow == false ? false : true,
    loader: __jsx("div", {
      className: "width-100 flex-justify-center",
      style: {
        height: 50
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
      type: "loading",
      style: {
        fontSize: 50
      }
    })),
    threshold: (htmlWindow.innerHeight || 500) * 0.5
  }, props.children));
};

const mapStateToProps = state => ({
  app: state.app,
  user: state.user
});

const mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].create()(Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(InfiniteScrollWrapper))));

/***/ }),

/***/ "./components/general/LayoutV2.jsx":
/*!*****************************************!*\
  !*** ./components/general/LayoutV2.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie-consent */ "react-cookie-consent");
/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_cookie_consent__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common-function */ "./common-function.js");
/* harmony import */ var _feathers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../feathers */ "./feathers.js");
/* harmony import */ var _functionContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../functionContent */ "./functionContent.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../icon */ "./icon.js");
/* harmony import */ var _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../redux/actions/app-actions */ "./redux/actions/app-actions.js");
/* harmony import */ var _redux_actions_newcars_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../redux/actions/newcars-actions */ "./redux/actions/newcars-actions.js");
/* harmony import */ var _redux_actions_productsList_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../redux/actions/productsList-actions */ "./redux/actions/productsList-actions.js");
/* harmony import */ var _redux_actions_user_actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../redux/actions/user-actions */ "./redux/actions/user-actions.js");
/* harmony import */ var _compare_CompareFloatingButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../compare/CompareFloatingButton */ "./components/compare/CompareFloatingButton.jsx");
/* harmony import */ var _login_login__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../login/login */ "./components/login/login.jsx");
/* harmony import */ var _global_search_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./global-search-bar */ "./components/general/global-search-bar.jsx");
/* harmony import */ var _UserAvatar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./UserAvatar */ "./components/general/UserAvatar.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _webPush__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../webPush */ "./webPush.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _InfiniteScrollWrapper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./InfiniteScrollWrapper */ "./components/general/InfiniteScrollWrapper.jsx");
/* harmony import */ var _ScrollLoadWrapper__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ScrollLoadWrapper */ "./components/general/ScrollLoadWrapper.jsx");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _WindowScrollDisableWrapper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./WindowScrollDisableWrapper */ "./components/general/WindowScrollDisableWrapper.jsx");
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../route */ "./route.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

































const NOTIFICATION_BOX_WIDTH = 400;
const NOTIFICATION_MAX_LIMIT = 200;
const NOTIFICATION_PAGE_SIZE = 10;

const Desktop = ({
  children
}) => {
  const isDesktop = Object(react_responsive__WEBPACK_IMPORTED_MODULE_23__["useMediaQuery"])({
    minWidth: 1025
  });
  return isDesktop ? children : null;
};

const Tablet = ({
  children
}) => {
  const isTablet = Object(react_responsive__WEBPACK_IMPORTED_MODULE_23__["useMediaQuery"])({
    minWidth: 768,
    maxWidth: 1024
  });
  return isTablet ? children : null;
};

const Mobile = ({
  children
}) => {
  const isMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_23__["useMediaQuery"])({
    maxWidth: 767
  });
  return isMobile ? children : null;
};

const Default = ({
  children
}) => {
  const isNotMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_23__["useMediaQuery"])({
    minWidth: 768
  });
  return isNotMobile ? children : null;
};

const NotWebDevice = ({
  children
}) => {
  const isMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_23__["useMediaQuery"])({
    maxWidth: 767
  });
  const isTablet = Object(react_responsive__WEBPACK_IMPORTED_MODULE_23__["useMediaQuery"])({
    minWidth: 768,
    maxWidth: 991
  });
  return isMobile || isTablet ? children : null;
};

var frontUrl = Object(_functionContent__WEBPACK_IMPORTED_MODULE_12__["checkEnvReturnWebAdmin"])(_feathers__WEBPACK_IMPORTED_MODULE_11__["default"].io.io.uri);
var currentEnv = Object(_functionContent__WEBPACK_IMPORTED_MODULE_12__["checkEnv"])(_feathers__WEBPACK_IMPORTED_MODULE_11__["default"].io.io.uri);

class LayoutV2 extends react__WEBPACK_IMPORTED_MODULE_5___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "showDrawer", () => {
      this.setState({
        visible: true
      });
    });

    _defineProperty(this, "onClose", () => {
      this.setState({
        visible: false
      });
    });

    _defineProperty(this, "handleExpiredToken", () => {
      if (lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.props, ['user', 'authenticated'])) {
        _feathers__WEBPACK_IMPORTED_MODULE_11__["default"].authenticate().then(res => {
          this.props.setUser(res.user);
        }).catch(err => {
          this.props.router.push('/logout');
          this.props.loginMode(true);
          antd__WEBPACK_IMPORTED_MODULE_1__["message"].error('Your authentication session is expired. Please login again.');
        });
      }
    });

    _defineProperty(this, "_renderNotification", data => {
      antd__WEBPACK_IMPORTED_MODULE_1__["notification"].open({
        message: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(data, 'notification.title') || '',
        description: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(data, 'notification.body') || '',
        duration: 10,
        placement: 'bottomRight',
        icon: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          src: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(data, 'data.avatar') || _icon__WEBPACK_IMPORTED_MODULE_13__["ccarLogo"]
        }),
        key: Object(uuid__WEBPACK_IMPORTED_MODULE_9__["v4"])(),
        className: 'cursor-pointer',
        onClick: () => {
          if (lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(data, 'data.path')) {
            this.props.router.push(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(data, 'data.path') || '/');
          }
        }
      });
    });

    _defineProperty(this, "handleScroll", e => {
      this.setState({
        scrollY: window.scrollY
      });
      let scrollBarHeight = window.innerHeight * (window.innerHeight / document.body.offsetHeight);

      if (window.scrollY + scrollBarHeight + this.state.scrollRange >= document.body.scrollHeight) {
        if (this.props.onScrolledBottom) {
          this.props.onScrolledBottom();
        }
      }
    });

    _defineProperty(this, "_renderUser", profileMenu => {
      let self = this;

      if (lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.props, ['user', 'authenticated'])) {
        return __jsx("span", {
          className: "d-inline-block margin-x-md flex-items-align-center"
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
          placement: "bottomRight",
          overlayClassName: "padding-top-lg",
          visible: self.state.showProfileMenu,
          onVisibleChange: v => {
            if (self.state.showProfileMenu != v) {
              self.setState({
                showProfileMenu: v
              });
            }
          },
          overlayStyle: {
            width: '250px'
          },
          overlay: () => {
            return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], null, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(profileMenu, function (menu, index) {
              return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
                key: `profile-menu-${++index}`,
                className: "padding-sm"
              }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                shallow: false,
                href: menu.to || '/',
                as: typeof menu.as == 'function' ? menu.as(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(self.props.user, ['info', 'user'])) : '/'
              }, __jsx("a", null, menu.render ? menu.render() : __jsx("div", {
                className: "flex-justify-start flex-items-align-center"
              }, __jsx("span", {
                className: "d-inline-block margin-x-sm"
              }, menu.icon), __jsx("span", {
                className: "d-inline-block black headline subtitle1   cursor-pointer margin-x-sm"
              }, menu.text)))));
            }), lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.props.user, ['info', 'user', 'role']) != 'mobile-user' && lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.props.user, ['info', 'user', 'role']) != 'normaluser' ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
              key: `profile-menu-dealership`,
              className: "padding-sm",
              onClick: e => {}
            }, __jsx("div", {
              className: "flex-justify-start flex-items-align-center"
            }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              className: " background-ccar-button-yellow black border-ccar-button-yellow text-align-center",
              block: true,
              target: "_blank",
              href: frontUrl
            }, "Manage My Ads"))) : null);
          }
        }, __jsx("span", {
          className: "d-inline-block cursor-pointer",
          style: {
            maxWidth: '200px'
          }
        }, __jsx(_UserAvatar__WEBPACK_IMPORTED_MODULE_21__["default"], {
          showNameRight: true,
          avatarClassName: "flex-items-no-shrink",
          textClassName: "white text-truncate subtitle1",
          size: 35,
          data: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.props.user, ['info', 'user'])
        }))), __jsx("span", {
          className: "d-inline-block margin-left-md"
        }, this._renderNotificationBox()));
      } else {
        return __jsx("span", {
          className: "flex-items-align-center margin-x-md white subtitle1 cursor-pointer ",
          onClick: () => {
            this.props.loginMode(true);
          }
        }, __jsx("img", {
          src: "/assets/CarListingIcon/login@3x-2.png",
          style: {
            width: 20
          },
          className: "margin-right-xs"
        }), "Login");
      }
    });

    _defineProperty(this, "_renderUserRes", profileMenu => {
      let self = this;

      if (lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.props, ['user', 'authenticated'])) {
        return __jsx("span", {
          className: "d-inline-block margin-bottom-xs flex-items-align-center"
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
          placement: "bottomRight",
          overlayClassName: "padding-top-lg",
          overlayStyle: {
            width: '250px'
          },
          overlay: () => {
            return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], null, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(profileMenu, function (menu, index) {
              return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
                key: `profile-menu-${++index}`,
                className: "padding-sm"
              }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                shallow: false,
                href: menu.to || '/',
                as: typeof menu.as == 'function' ? menu.as(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(self.props.user, ['info', 'user'])) : '/'
              }, __jsx("a", null, __jsx("div", {
                className: "flex-justify-start flex-items-align-center"
              }, __jsx("span", {
                className: "d-inline-block margin-x-sm"
              }, menu.icon), __jsx("span", {
                className: "d-inline-block black headline subtitle1 cursor-pointer margin-x-sm"
              }, menu.text)))));
            }), lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.props.user, ['info', 'user', 'role']) != 'mobile-user' && lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.props.user, ['info', 'user', 'role']) != 'normaluser' ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
              key: `profile-menu-dealership`,
              className: "padding-sm",
              onClick: e => {}
            }, __jsx("div", {
              className: "flex-justify-start flex-items-align-center"
            }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              className: " background-ccar-button-yellow black border-ccar-button-yellow text-align-center",
              block: true,
              shape: "round",
              target: "_blank",
              href: frontUrl
            }, "Manage My Ads"))) : null);
          }
        }, __jsx("div", null, __jsx("div", {
          className: " cursor-pointer"
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Badge"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          icon: !this.props.user.info || !this.props.user.info.user || !this.props.user.info.user.avatar ? 'user' : null,
          src: !this.props.user.info || !this.props.user.info.user || !this.props.user.info.user.avatar ? null : this.props.user.info.user.avatar
        }))), __jsx("div", {
          style: {
            color: "#1890ff"
          },
          className: " subtitle1 cursor-pointer"
        }, "My Profile"))));
      } else {
        return (// <span style={{ color: "#1890ff" }} className='flex-items-align-center subtitle1 cursor-pointer ' >
          __jsx("span", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            className: " background-ccar-button-yellow black border-ccar-button-yellow text-align-center cursor-pointer round-border",
            onClick: () => {
              this.props.loginMode(true);
            }
          }, "Login"))
        );
      }
    });

    _defineProperty(this, "_renderFooter", () => {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"].Footer, {
        className: "footer"
      }, __jsx("div", {
        className: "fixed-container"
      }, __jsx("div", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: 0,
        sm: 0,
        md: 12,
        lg: 12,
        xl: 12
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: 20,
        sm: 20,
        md: 20,
        lg: 20,
        xl: 20,
        style: {
          color: 'white',
          textAlign: 'left'
        }
      }, __jsx("p", {
        style: {
          marginBottom: '0px',
          marginTop: '12px',
          fontWeight: '700'
        }
      }, " #1 Car Social Platform ")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: 0,
        sm: 0,
        md: 12,
        lg: 12,
        xl: 12,
        style: {
          textAlign: 'right',
          color: 'white'
        }
      }, __jsx("span", null, " ", __jsx("a", {
        href: "https://play.google.com/store/apps/details?id=com.ccarmy",
        target: "_blank"
      }, " ", __jsx("img", {
        style: {
          padding: '5px',
          width: 40
        },
        src: "/assets/Social Media/Google Play@3x.png"
      })), " "), __jsx("span", null, " ", __jsx("a", {
        href: "https://apps.apple.com/my/app/ccar-my/id1526288072",
        target: "_blank"
      }, __jsx("img", {
        style: {
          padding: '5px',
          width: 40
        },
        src: "/assets/Social Media/Apple Store @3x.png"
      }))), __jsx("span", null, " ", __jsx("a", {
        href: "https://appgallery.huawei.com/#/app/C102692397",
        target: "_blank"
      }, __jsx("img", {
        style: {
          padding: '5px',
          width: 38
        },
        src: "/assets/Social Media/huawei.png"
      }))), __jsx("span", null, " ", __jsx("a", {
        href: "https://www.facebook.com/CCARmy-101790904962298/",
        target: "_blank"
      }, " ", __jsx("img", {
        style: {
          padding: '5px',
          width: 40
        },
        src: "/assets/Social Media/Facebook @3x.png"
      })), " "), __jsx("span", null, " ", __jsx("a", {
        href: "https://www.instagram.com/ccar.my/",
        target: "_blank"
      }, " ", __jsx("img", {
        style: {
          padding: '5px',
          width: 35
        },
        src: "/assets/Social Media/instagram.png"
      })), " "), __jsx("span", null, " ", __jsx("a", {
        href: "https://www.youtube.com/channel/UCxicQ1-VsdNWEdGZCqU-35g",
        target: "_blank"
      }, " ", __jsx("img", {
        style: {
          padding: '5px',
          width: 40
        },
        src: "/assets/Social Media/youtube.png"
      }), " "), " ")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: 24,
        sm: 24,
        md: 0,
        lg: 0,
        xl: 0
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        span: 8,
        className: "justify-flex-start"
      }, __jsx("p", {
        style: {
          fontSize: '10px',
          color: 'white',
          fontWeight: '700',
          marginTop: '4px',
          marginBottom: '0px',
          float: 'left'
        }
      }, " #1 Car Social Platform ")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        span: 16,
        style: {
          fontSize: '15px'
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        style: {
          fontSize: '10px',
          color: 'white'
        }
      }, __jsx("div", {
        style: {
          float: 'right'
        }
      }, __jsx("span", null, " ", __jsx("a", {
        href: "https://play.google.com/store/apps/details?id=com.ccarmy",
        target: "_blank"
      }, " ", __jsx("img", {
        style: {
          padding: '2px',
          width: 25
        },
        src: "/assets/Social Media/Google Play@3x.png"
      })), " "), __jsx("span", null, " ", __jsx("a", {
        href: "https://apps.apple.com/my/app/ccar-my/id1526288072",
        target: "_blank"
      }, __jsx("img", {
        style: {
          padding: '2px',
          width: 25
        },
        src: "/assets/Social Media/Apple Store @3x.png"
      }))), __jsx("span", null, " ", __jsx("a", {
        href: "",
        target: "_blank"
      }, __jsx("img", {
        style: {
          padding: '2px',
          width: 23
        },
        src: "/assets/Social Media/huawei.png"
      }))), __jsx("span", null, " ", __jsx("a", {
        href: "https://www.facebook.com/CCARmy-101790904962298/",
        target: "_blank"
      }, " ", __jsx("img", {
        style: {
          padding: '2px',
          width: 25
        },
        src: "/assets/Social Media/Facebook @3x.png"
      })), " "), __jsx("span", null, " ", __jsx("a", {
        href: "https://www.instagram.com/ccar.my/",
        target: "_blank"
      }, " ", __jsx("img", {
        style: {
          padding: '2px',
          width: 20
        },
        src: "/assets/Social Media/instagram.png"
      })), " "), __jsx("span", null, " ", __jsx("a", {
        href: "https://www.youtube.com/channel/UCxicQ1-VsdNWEdGZCqU-35g",
        target: "_blank"
      }, " ", __jsx("img", {
        style: {
          padding: '2px',
          width: 25
        },
        src: "/assets/Social Media/youtube.png"
      }), " "), " ")))))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        span: 24
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
        orientation: "left",
        style: {
          border: 'solid 1px #FFCC32',
          fontWeight: 'normal',
          margin: '4px 0px'
        }
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        style: {
          color: '#E3C57D'
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12,
        style: {
          fontSize: '15px'
        }
      }, __jsx("div", {
        className: "flex-justify-start white flex-items-align-center main-footer "
      }, "CCAR.MY ", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "copyright"
      }), " 2020")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12,
        style: {
          fontSize: '15px',
          textAlign: 'right'
        }
      }, __jsx("div", {
        className: "flex-justify-end flex-items-align-center main-footer"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        shallow: false,
        href: _route__WEBPACK_IMPORTED_MODULE_31__["routePaths"].termsOfUse.to || '/',
        as: typeof _route__WEBPACK_IMPORTED_MODULE_31__["routePaths"].termsOfUse.as == 'function' ? _route__WEBPACK_IMPORTED_MODULE_31__["routePaths"].termsOfUse.as() : '/'
      }, "Terms of Use | Privacy Policy"))))))))));
    });

    _defineProperty(this, "_renderNotificationBox", () => {
      const tabs = [{
        value: 'carfreaks',
        text: 'CarFreaks'
      }, {
        value: 'carAds',
        text: 'CarMarket'
      }, {
        value: 'other',
        text: 'Others'
      }];
      let self = this;
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
        onVisibleChange: v => {
          if (self.state.notificationBoxVisible != v) {
            this.setState({
              notificationBoxVisible: v
            });
          }
        },
        overlayClassName: "pop-over-body-no-padding pop-over-title-no-padding",
        overlayStyle: {
          position: 'fixed'
        },
        trigger: "click",
        arrowPointAtCenter: true,
        placement: "bottomLeft",
        title: __jsx("div", {
          className: " h6 font-weight-bold grey-darken-1 padding-x-md padding-y-xs",
          style: {
            width: NOTIFICATION_BOX_WIDTH
          }
        }, "Notifications"),
        content: __jsx("div", {
          style: {
            width: NOTIFICATION_BOX_WIDTH
          }
        }, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isArray(self.state.notifications) && !lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEmpty(self.state.notifications) ? __jsx(_ScrollLoadWrapper__WEBPACK_IMPORTED_MODULE_27__["default"], {
          getRef: ref => {
            self.setState({
              notificationBoxRef: ref
            });
          },
          autoHide: true,
          scrollRangeUsePercentage: true,
          scrollRange: 50,
          autoHide: true,
          autoHeight: true,
          autoHeightMax: 400,
          onScrolledBottom: () => {
            if (Object(_common_function__WEBPACK_IMPORTED_MODULE_10__["arrayLengthCount"])(this.state.notifications) < this.state.notificationTotal && !this.state.notificationLoading) {
              self.setState({
                notificationPage: this.state.notificationPage + 1
              });
            }
          }
        }, __jsx("div", null, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(this.state.notifications, function (notification) {
          if (lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isPlainObject(notification) && !lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEmpty(notification)) {
            return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: notification.path || '/'
            }, __jsx("a", null, __jsx("div", {
              className: `flex-justify-start flex-items-align-center hover-background-yellow-lighten-2 padding-x-md cursor-pointer grey-darken-1 width-100 ${lodash__WEBPACK_IMPORTED_MODULE_2___default.a.some(self.state.seenNotifications, ['notificationId', notification._id]) ? '' : 'background-light-blue-lighten-5'}`,
              onClick: e => {
                if (!lodash__WEBPACK_IMPORTED_MODULE_2___default.a.some(self.state.seenNotifications, ['notificationId', notification._id])) {
                  _feathers__WEBPACK_IMPORTED_MODULE_11__["default"].service('notificationseen').create({
                    userId: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(self.props.user, ['info', 'user', '_id']),
                    notificationId: notification._id
                  }, {
                    query: {
                      userId: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(self.props.user, ['info', 'user', '_id']),
                      notificationId: notification._id
                    }
                  }).then(res => {
                    self.setState({
                      seenNotifications: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.concat([res], self.state.seenNotifications)
                    });
                  });
                }
              }
            }, __jsx("img", {
              src: notification.avatar || _icon__WEBPACK_IMPORTED_MODULE_13__["ccarLogo"],
              style: {
                width: 50,
                height: 50
              },
              className: "margin-right-md avatar"
            }), __jsx("span", {
              className: "d-inline-block width-80"
            }, __jsx("div", {
              className: " body2 text-truncate-twoline grey-darken-3"
            }, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(notification, 'title') || ''), __jsx("div", {
              className: "overline text-truncate "
            }, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(notification, 'body') || ''), __jsx("div", {
              className: "small-text text-truncate margin-top-sm"
            }, moment__WEBPACK_IMPORTED_MODULE_29___default()(notification.createdAt).fromNow())))));
          }

          return null;
        }))) : __jsx("div", {
          className: "flex-justify-center flex-items-align-center",
          style: {
            height: 300
          }
        }, __jsx("span", {
          className: "d-inline-block"
        }, __jsx("div", {
          className: "flex-justify-center flex-items-align-center"
        }, __jsx("img", {
          src: _icon__WEBPACK_IMPORTED_MODULE_13__["bellInactive"],
          style: {
            height: 70,
            width: 70
          }
        })), __jsx("div", {
          className: "h6 grey-darken-1 margin-top-sm"
        }, "No notification yet"), __jsx("div", {
          className: "caption grey-darken-1 flex-justify-center"
        }, "When you get notification,"), __jsx("div", {
          className: "caption grey-darken-1 flex-justify-center"
        }, "they'll show up here"), __jsx("div", {
          className: "flex-justify-center margin-top-sm"
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          className: " background-ccar-button-yellow"
        }, "Refresh")))))
      }, __jsx(Desktop, null, __jsx("span", {
        className: "flex-justify-start flex-items-align-center",
        id: "notification-menu-item"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
        dot: true
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "bell",
        theme: "filled",
        className: "white cursor-pointer",
        style: {
          fontSize: 20
        }
      })))), __jsx(Tablet, null, __jsx("span", {
        className: "flex-justify-start flex-items-align-center",
        id: "notification-menu-item"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
        dot: true
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "bell",
        theme: "filled",
        className: "white cursor-pointer",
        style: {
          fontSize: 25
        }
      })))));
    });

    this.state = {
      data: [],
      searchWords: [],
      searchValue: null,
      value: undefined,
      typingTimeout: 0,
      scrollYPosition: 0,
      run: true,
      dataSource: [],
      newKppJson: [],
      visible: false,
      scrollRange: 100,
      scrollY: 0,
      backgroundStyle: {
        backgroundImage: null,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      window: {},
      showProfileMenu: false,
      notificationBoxRef: {},
      notificationLoading: false,
      notificationPage: 1,
      notificationTotal: 0,
      notifications: [],
      seenNotifications: [],
      notificationBoxVisible: false,
      notificationTabKey: 'carfreaks',
      loginType: 'user'
    };
  }

  getUserNotifications(skip) {
    try {
      if (lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.props.user, ['authenticated']) && lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.props.user, ['info', 'user', '_id'])) {
        this.setState({
          notificationLoading: true
        }, () => {
          axios__WEBPACK_IMPORTED_MODULE_22___default.a.get(`${_feathers__WEBPACK_IMPORTED_MODULE_11__["default"].io.io.uri}getUserNotifications`, {
            params: {
              userId: this.props.user.info.user._id,
              limit: NOTIFICATION_PAGE_SIZE,
              skip: skip || 0
            }
          }).then(res => {
            this.setState({
              notificationLoading: false,
              notifications: this.state.notificationPage == 1 ? lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(res, 'data.data') || [] : lodash__WEBPACK_IMPORTED_MODULE_2___default.a.concat(this.state.notifications, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(res, 'data.data') || []),
              notificationTotal: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(res, 'data.total') || 0
            });
          }).catch(err => {
            this.setState({
              notificationLoading: false
            });
          });
        });
      } else {
        this.setState({
          notifications: []
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  getUserSeenNotifications() {
    try {
      if (lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.props.user, ['authenticated']) && lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.props.user, ['info', 'user', '_id'])) {
        _feathers__WEBPACK_IMPORTED_MODULE_11__["default"].service('notificationseen').find({
          query: {
            userId: this.props.user.info.user._id
          }
        }).then(res => {
          this.setState({
            seenNotifications: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(res, ['data']) || []
          });
        }).catch(err => {
          console.log(err);
        });
      } else {
        this.setState({
          seenNotifications: []
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async setFirebaseToken(reauthenticate) {
    try {
      const token = await Object(_webPush__WEBPACK_IMPORTED_MODULE_24__["initFirebaseToken"])();

      if (token != this.props.app.notificationToken || !this.props.app.notificationTokenTimeOutDate || moment__WEBPACK_IMPORTED_MODULE_29___default()().diff(moment__WEBPACK_IMPORTED_MODULE_29___default()(this.props.app.notificationTokenTimeOutDate), 'days', true) > 1 || reauthenticate) {
        this.props.setNotificationToken(token);
        this.props.setNotificationTokenTimeOutDate(moment__WEBPACK_IMPORTED_MODULE_29___default()().add(1, 'days'));
        let self = this;
        this.subscribeNotificationTopics(token).then(() => {
          if (self.state.notificationPage == 1) {
            self.getUserNotifications(0);
          } else {
            self.setState({
              notificationPage: 1
            });
          }
        });
      }

      this.listenOnNotification();
    } catch (error) {
      console.log(error);
    }
  }

  listenOnNotification() {
    const messaging = firebase_app__WEBPACK_IMPORTED_MODULE_25___default.a.messaging();
    messaging.onMessage(message => {
      this._renderNotification(message);

      if (lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(message, 'data._id') && lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.props.user, ['authenticated']) && lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.props.user, ['info', 'user', '_id'])) {
        _feathers__WEBPACK_IMPORTED_MODULE_11__["default"].service('notifications').find({
          query: {
            _id: message.data._id,
            $limit: 1
          }
        }).then(res => {
          if (lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(res, 'data[0]')) {
            this.setState({
              notifications: [res.data[0], ...this.state.notifications]
            });
          }
        });
      } //

    });
  }

  subscribeNotificationTopics(token) {
    if (lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.props.user, ['authenticated']) && lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.props.user, ['info', 'user', '_id'])) {
      return axios__WEBPACK_IMPORTED_MODULE_22___default.a.post(`${_feathers__WEBPACK_IMPORTED_MODULE_11__["default"].io.io.uri}pushNotificationTokenToUser`, {
        userId: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.props.user, ['info', 'user', '_id']),
        token: token
      });
    } else {
      return axios__WEBPACK_IMPORTED_MODULE_22___default.a.post(`${_feathers__WEBPACK_IMPORTED_MODULE_11__["default"].io.io.uri}subscribePublicNotification`, {
        token: token
      });
    }
  }

  sendTestMessage(text) {
    axios__WEBPACK_IMPORTED_MODULE_22___default.a.post(`${_feathers__WEBPACK_IMPORTED_MODULE_11__["default"].io.io.uri}sendTestNotification`, {
      params: {
        text: text || ''
      }
    }).then(res => {}).catch(err => {});
  }

  componentDidMount() {
    if (false) {}

    window.scrollTo(0, 0);
    this.handleExpiredToken();
    this.setFirebaseToken();

    if (lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.props.user, ['authenticated']) && lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.props.user, ['info', 'user', '_id'])) {
      this.getUserSeenNotifications();

      if (this.state.notificationPage == 1) {
        this.getUserNotifications(0);
      } else {
        this.setState({
          notificationPage: 1
        });
      }
    }

    this.props.loading(false); // if(this.props.location.pathname.indexOf('viewCar') > 0){
    //   window.location.href="ccarmy:/" + this.props.location.pathname
    // }
    // this.props.setMenuHeight(document.getElementById('menu-bar').getBoundingClientRect().height);

    if (this.props.backgroundImage) {
      this.setState({
        backgroundStyle: _objectSpread(_objectSpread({}, this.state.backgroundStyle), {}, {
          backgroundImage: this.props.backgroundImage
        })
      });
    }

    if (this.props.scrollRange) {
      this.setState({
        scrollRange: this.props.scrollRange
      });
    }

    axios__WEBPACK_IMPORTED_MODULE_22___default.a.get(`${_feathers__WEBPACK_IMPORTED_MODULE_11__["default"].io.io.uri}getCmsParameters`).then(res => {
      if (Object(_common_function__WEBPACK_IMPORTED_MODULE_10__["notEmptyLength"])(res.data.data)) {
        let self = this;

        lodash__WEBPACK_IMPORTED_MODULE_2___default.a.forEach(res.data.data, function (item) {
          switch (item.table) {
            case 'compareNewCar':
              // self.props.fetchCompareNewCarLimit(-1);
              break;

            case 'compareLimit':
              self.props.fetchCompareCarLimit(isValidNumber(parseInt(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(item, ['compareLimit']))) ? parseInt(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(item, ['compareLimit'])) : 5);
              break;

            default:
              break;
          }
        });
      }
    }).catch(err => {// message.error(err.message)
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.scrollRange != this.props.scrollRange) {
      this.setState({
        scrollRange: this.props.scrollRange
      });
    }

    if (!lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEqual(prevState.window, this.state.window)) {
      this.state.window.addEventListener('scroll', this.handleScroll, {
        passive: true
      });
      return () => {
        this.state.window.removeEventListener('scroll', this.handleScroll);
      };
    }

    if (prevProps.user.authenticated != this.props.user.authenticated) {
      this.setFirebaseToken(true);
      this.getUserSeenNotifications();

      if (this.state.notificationPage == 1) {
        this.getUserNotifications(0);
      } else {
        this.setState({
          notificationPage: 1
        });
      }
    }

    if (prevState.notificationBoxVisible != this.state.notificationBoxVisible) {
      if (this.state.notificationBoxRef.current) {
        this.state.notificationBoxRef.current.scrollToTop();
      }
    }

    if (prevState.notificationPage != this.state.notificationPage && Object(_common_function__WEBPACK_IMPORTED_MODULE_10__["arrayLengthCount"])(this.state.notifications) < NOTIFICATION_MAX_LIMIT) {
      this.getUserNotifications((this.state.notificationPage - 1) * NOTIFICATION_PAGE_SIZE);
    }
  }

  render() {
    let self = this;
    const outterMenu = [_objectSpread({
      icon: '',
      text: 'CarMarket'
    }, _route__WEBPACK_IMPORTED_MODULE_31__["routePaths"].carsOnSale), _objectSpread({
      icon: '',
      text: 'All-NewCar'
    }, _route__WEBPACK_IMPORTED_MODULE_31__["routePaths"].newCar), _objectSpread({
      icon: '',
      text: __jsx("span", {
        className: "d-inline-block white background-red  padding-x-md",
        style: {
          borderRadius: '5px'
        }
      }, "LIVE")
    }, _route__WEBPACK_IMPORTED_MODULE_31__["routePaths"].live)];
    let innerMenu = [_objectSpread({
      icon: '',
      text: 'Car Review'
    }, _route__WEBPACK_IMPORTED_MODULE_31__["routePaths"].carReview), _objectSpread({
      icon: '',
      text: 'Social News & Videos'
    }, _route__WEBPACK_IMPORTED_MODULE_31__["routePaths"].socialNewsAndVideo), _objectSpread({
      icon: '',
      text: 'CarFreaks'
    }, _route__WEBPACK_IMPORTED_MODULE_31__["routePaths"].carFreaks), _objectSpread({
      icon: '',
      text: 'Petrol Price'
    }, _route__WEBPACK_IMPORTED_MODULE_31__["routePaths"].petrolPrice), _objectSpread({
      icon: '',
      text: 'Driving School'
    }, _route__WEBPACK_IMPORTED_MODULE_31__["routePaths"].kpp), _objectSpread({
      icon: '',
      text: 'About Us'
    }, _route__WEBPACK_IMPORTED_MODULE_31__["routePaths"].aboutUs), _objectSpread({
      icon: '',
      text: 'Contact Us'
    }, _route__WEBPACK_IMPORTED_MODULE_31__["routePaths"].contactUs)];

    if (currentEnv !== 'prod') {
      let insurances = [{
        icon: '',
        text: 'Road Tax & Insurance',
        path: '/roadtax-insurance'
      }, {
        icon: '',
        text: 'Extended Warranty',
        path: '/extended-warranty'
      }, {
        icon: '',
        text: 'Latest Car Plate No.',
        path: '/latest-car-plate-no'
      }];
      innerMenu = innerMenu.concat(insurances);
    }

    let profileMenu = [_objectSpread({
      icon: __jsx("span", {
        className: "flex-items-align-center flex-justify-center avatar background-grey-darken-3",
        style: {
          width: '20px',
          height: '20px'
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "user",
        style: {
          fontSize: '12px',
          color: 'white'
        }
      })),
      text: 'Profile'
    }, _route__WEBPACK_IMPORTED_MODULE_31__["routePaths"].profile), _objectSpread({
      icon: __jsx("span", {
        className: "flex-items-align-center flex-justify-center"
      }, __jsx("img", {
        src: _icon__WEBPACK_IMPORTED_MODULE_13__["wishList"],
        style: {
          width: '20px',
          height: '20px'
        }
      })),
      text: 'My Wishlist'
    }, _route__WEBPACK_IMPORTED_MODULE_31__["routePaths"].profile), _objectSpread({
      icon: __jsx("span", {
        className: "d-inline-block relative-wrapper",
        style: {
          width: '20px',
          height: '20px'
        }
      }, __jsx("img", {
        src: "/logout icon.svg",
        className: "fill-parent absolute-center"
      })),
      text: 'Log out'
    }, _route__WEBPACK_IMPORTED_MODULE_31__["routePaths"].logout)];
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx("div", {
      className: "relative-wrapper"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: '99',
        height: '61px'
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      xs: 24,
      sm: 24,
      md: 24,
      lg: 24,
      xl: 24
    }, __jsx(Mobile, null, __jsx("div", {
      id: "menu-bar",
      className: "topnav",
      style: {
        position: 'sticky',
        top: 0,
        zIndex: '99',
        minHeight: '100px',
        backgroundColor: '#000000'
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      type: "flex",
      align: "middle",
      className: "padding-x-md"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      xs: 8,
      sm: 8,
      md: 8,
      lg: 8,
      xl: 8
    }, __jsx("div", {
      className: "flex-justify-start flex-items-align-center topnav-child"
    }, __jsx("span", {
      className: "d-inline-block relative-wrapper margin-right-md cursor-pointer",
      style: {
        height: '62px',
        width: '214px'
      },
      onClick: e => {
        this.props.history.push('/');
      }
    }, __jsx("img", {
      alt: "ccar",
      className: "fill-parent absolute-center",
      src: "/assets/ccar-header-logo.svg"
    })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12
    }, __jsx(_global_search_bar__WEBPACK_IMPORTED_MODULE_20__["default"], {
      searchTypes: this.props.searchTypes || ['productAds', 'carspec', 'dealerWithAds']
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      xs: 2,
      sm: 2,
      md: 2,
      lg: 2,
      xl: 2,
      offset: 2
    }, __jsx("div", {
      style: {
        width: '300'
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      onClick: this.showDrawer,
      style: {
        marginBottom: 0,
        float: 'right'
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      type: "menu"
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
      className: "login-drawer",
      title: null,
      placement: "right",
      closable: true,
      onClose: this.onClose,
      visible: this.state.visible,
      width: '100%'
    }, this.props.user.info.authenticated == 'user' ? __jsx("div", null, __jsx("div", {
      className: "margin-bottom-xs padding-sm",
      style: {
        backgroundImage: `url("${_icon__WEBPACK_IMPORTED_MODULE_13__["menuLogin"]}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '15vh',
        backgroundPosition: 'center'
      }
    }, __jsx("div", null, __jsx("span", {
      style: {
        marginRight: '10px'
      }
    }, __jsx("img", {
      src: "https://img.icons8.com/windows/32/ffffff/user-male-circle.png"
    })), __jsx("span", {
      style: {
        color: '#ffffff',
        fontWeight: '700'
      }
    }, "Login to access more features now!")), __jsx("div", {
      className: "flex-justify-center"
    }, this._renderUserRes(profileMenu))), __jsx("div", {
      className: "padding-md"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      className: "margin-bottom-md"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 11,
      className: "thickBorder round-border"
    }, __jsx("div", {
      style: {
        fontSize: '14px',
        margin: '10px'
      },
      className: `flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '2' ? 'yellow' : ''}`,
      onClick: () => {
        this.props.router.push('/car-market-homepage/index');
      }
    }, __jsx("img", {
      src: "/assets/menu-icon/buy-car.png",
      style: {
        width: '40%'
      }
    }), __jsx("p", {
      style: {
        marginBottom: '0px',
        color: '#000000'
      }
    }, " CarMarket "))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 11,
      offset: 2,
      className: "thickBorder round-border "
    }, __jsx("div", {
      style: {
        fontSize: '14px',
        margin: '10px'
      },
      className: `flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '3' ? 'yellow' : ''}`,
      onClick: () => {
        this.props.router.push('/newcar');
      }
    }, __jsx("img", {
      src: "/assets/menu-icon/new-car.png",
      style: {
        width: '40%'
      }
    }), __jsx("p", {
      style: {
        marginBottom: '0px',
        color: '#000000'
      }
    }, "All-NewCar")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      className: "margin-bottom-md"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 11,
      className: "thickBorder round-border"
    }, __jsx("div", {
      style: {
        fontSize: '14px',
        margin: '10px'
      },
      className: `flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '6' ? 'yellow' : ''}`,
      onClick: () => {
        this.props.router.push('/car-freaks');
      }
    }, __jsx("img", {
      src: "/assets/menu-icon/carfreaks.png",
      style: {
        width: '40%'
      }
    }), __jsx("p", {
      style: {
        marginBottom: '0px',
        color: '#000000'
      }
    }, "CarFreaks"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 11,
      offset: 2,
      className: "thickBorder round-border"
    }, __jsx("div", {
      style: {
        fontSize: '14px',
        margin: '10px'
      },
      className: `flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '4' ? 'yellow' : ''}`,
      onClick: () => {
        this.props.router.push('/live');
      }
    }, __jsx("img", {
      src: "/assets/menu-icon/live.png",
      style: {
        width: '40%'
      }
    }), __jsx("p", {
      style: {
        marginBottom: '0px',
        color: '#000000'
      }
    }, "LIVE")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      className: "margin-bottom-md"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 11,
      className: "thickBorder round-border"
    }, __jsx("div", {
      style: {
        fontSize: '14px',
        margin: '10px'
      },
      className: `flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '5' ? 'yellow' : ''}`,
      onClick: () => {
        this.props.router.push('/socialNews');
      }
    }, __jsx("img", {
      src: "/assets/menu-icon/social-news.png",
      style: {
        width: '40%'
      }
    }), __jsx("p", {
      style: {
        marginBottom: '0px',
        color: '#000000'
      }
    }, "Social News "))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 11,
      offset: 2,
      className: "thickBorder round-border"
    }, __jsx("div", {
      style: {
        fontSize: '14px',
        margin: '10px'
      },
      className: `flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '9' ? 'yellow' : ''}`,
      onClick: () => {
        this.props.router.push('/socialVideos');
      }
    }, __jsx("img", {
      src: "/assets/menu-icon/social-videos.png",
      style: {
        width: '40%'
      }
    }), __jsx("p", {
      style: {
        marginBottom: '0px',
        color: '#000000'
      }
    }, "Social Videos ")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      className: "margin-bottom-md"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 11,
      className: "thickBorder round-border"
    }, __jsx("div", {
      style: {
        fontSize: '14px',
        margin: '10px'
      },
      className: `flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '8' ? 'yellow' : ''}`,
      onClick: () => {
        this.props.router.push('/kpp');
      }
    }, __jsx("img", {
      src: "/assets/menu-icon/driving-school.png",
      style: {
        width: '40%'
      }
    }), __jsx("p", {
      style: {
        marginBottom: '0px',
        color: '#000000'
      }
    }, "Driving School"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 11,
      offset: 2,
      className: "thickBorder round-border"
    }, __jsx("div", {
      style: {
        fontSize: '14px',
        margin: '10px'
      },
      className: `flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '7' ? 'yellow' : ''}`,
      onClick: () => {
        this.props.router.push('/petrolprice');
      }
    }, __jsx("img", {
      src: "/assets/menu-icon/fuel.png",
      style: {
        width: '40%'
      }
    }), __jsx("p", {
      style: {
        marginBottom: '0px',
        color: '#000000'
      }
    }, "Petrol Price")))))) : __jsx("div", null, __jsx("div", {
      className: "margin-bottom-xs padding-sm",
      style: {
        backgroundImage: `url("${_icon__WEBPACK_IMPORTED_MODULE_13__["menuLogin"]}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '15vh',
        backgroundPosition: 'center'
      }
    }, __jsx("div", null, __jsx("span", {
      style: {
        marginRight: '10px'
      }
    }, __jsx("img", {
      src: "https://img.icons8.com/windows/32/ffffff/user-male-circle.png"
    })), __jsx("span", {
      style: {
        color: '#ffffff',
        fontWeight: '700'
      }
    }, "Login to access more features now!")), __jsx("div", {
      className: "flex-justify-center"
    }, this._renderUserRes(profileMenu))), __jsx("div", {
      className: "padding-md"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      className: "margin-bottom-md"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 11,
      className: "thickBorder round-border"
    }, __jsx("div", {
      style: {
        fontSize: '14px',
        margin: '10px'
      },
      className: `flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '2' ? 'yellow' : ''}`,
      onClick: () => {
        this.props.router.push('/car-market-homepage/index');
      }
    }, __jsx("img", {
      src: "/assets/menu-icon/buy-car.png",
      style: {
        width: '40%'
      }
    }), __jsx("p", {
      style: {
        marginBottom: '0px',
        color: '#000000'
      }
    }, " CarMarket "))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 11,
      offset: 2,
      className: "thickBorder round-border "
    }, __jsx("div", {
      style: {
        fontSize: '14px',
        margin: '10px'
      },
      className: `flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '3' ? 'yellow' : ''}`,
      onClick: () => {
        this.props.router.push('/newcar');
      }
    }, __jsx("img", {
      src: "/assets/menu-icon/new-car.png",
      style: {
        width: '40%'
      }
    }), __jsx("p", {
      style: {
        marginBottom: '0px',
        color: '#000000'
      }
    }, "All-NewCar")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      className: "margin-bottom-md"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 11,
      className: "thickBorder round-border"
    }, __jsx("div", {
      style: {
        fontSize: '14px',
        margin: '10px'
      },
      className: `flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '6' ? 'yellow' : ''}`,
      onClick: () => {
        this.props.router.push('/car-freaks');
      }
    }, __jsx("img", {
      src: "/assets/menu-icon/carfreaks.png",
      style: {
        width: '40%'
      }
    }), __jsx("p", {
      style: {
        marginBottom: '0px',
        color: '#000000'
      }
    }, "CarFreaks"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 11,
      offset: 2,
      className: "thickBorder round-border"
    }, __jsx("div", {
      style: {
        fontSize: '14px',
        margin: '10px'
      },
      className: `flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '4' ? 'yellow' : ''}`,
      onClick: () => {
        this.props.router.push('/live');
      }
    }, __jsx("img", {
      src: "/assets/menu-icon/live.png",
      style: {
        width: '40%'
      }
    }), __jsx("p", {
      style: {
        marginBottom: '0px',
        color: '#000000'
      }
    }, "LIVE")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      className: "margin-bottom-md"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 11,
      className: "thickBorder round-border"
    }, __jsx("div", {
      style: {
        fontSize: '14px',
        margin: '10px'
      },
      className: `flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '5' ? 'yellow' : ''}`,
      onClick: () => {
        this.props.router.push('/socialNews');
      }
    }, __jsx("img", {
      src: "/assets/menu-icon/social-news.png",
      style: {
        width: '40%'
      }
    }), __jsx("p", {
      style: {
        marginBottom: '0px',
        color: '#000000'
      }
    }, "Social News "))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 11,
      offset: 2,
      className: "thickBorder round-border"
    }, __jsx("div", {
      style: {
        fontSize: '14px',
        margin: '10px'
      },
      className: `flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '9' ? 'yellow' : ''}`,
      onClick: () => {
        this.props.router.push('/socialVideos');
      }
    }, __jsx("img", {
      src: "/assets/menu-icon/social-videos.png",
      style: {
        width: '40%'
      }
    }), __jsx("p", {
      style: {
        marginBottom: '0px',
        color: '#000000'
      }
    }, "Social Videos ")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      className: "margin-bottom-md"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 11,
      className: "thickBorder round-border"
    }, __jsx("div", {
      style: {
        fontSize: '14px',
        margin: '10px'
      },
      className: `flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '8' ? 'yellow' : ''}`,
      onClick: () => {
        this.props.router.push('/kpp');
      }
    }, __jsx("img", {
      src: "/assets/menu-icon/driving-school.png",
      style: {
        width: '40%'
      }
    }), __jsx("p", {
      style: {
        marginBottom: '0px',
        color: '#000000'
      }
    }, "Driving School"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 11,
      offset: 2,
      className: "thickBorder round-border"
    }, __jsx("div", {
      style: {
        fontSize: '14px',
        margin: '10px'
      },
      className: `flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '7' ? 'yellow' : ''}`,
      onClick: () => {
        this.props.router.push('/petrolprice');
      }
    }, __jsx("img", {
      src: "/assets/menu-icon/fuel.png",
      style: {
        width: '40%'
      }
    }), __jsx("p", {
      style: {
        marginBottom: '0px',
        color: '#000000'
      }
    }, "Petrol Price")))), __jsx("div", {
      style: {
        fontSize: '16px',
        margin: '10px'
      },
      className: `flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '12' ? 'yellow' : ''}`,
      onClick: () => {
        this.props.router.push('/car-review');
      }
    }, " Car Review"), __jsx("div", {
      style: {
        fontSize: '16px',
        margin: '10px'
      },
      className: `flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '11' ? 'yellow' : ''}`,
      onClick: () => {
        this.props.router.push('/about-us');
      }
    }, " About Us"), __jsx("div", {
      style: {
        fontSize: '16px',
        margin: '10px'
      },
      className: `flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '10' ? 'yellow' : ''}`,
      onClick: () => {
        this.props.router.push('/contact-us');
      }
    }, " Contact Us"), __jsx("div", {
      style: {
        fontSize: '16px',
        margin: '10px'
      },
      className: `flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '10' ? 'yellow' : ''}`,
      onClick: () => {
        this.props.router.push('/faq');
      }
    }, " FAQ"))))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
      style: {
        border: 'solid 1px #FFCC32',
        fontWeight: 'normal',
        margin: '4px 0px'
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 24
    }, __jsx("div", {
      className: "flex-justify-start",
      style: {
        display: 'flex',
        overflowX: 'scroll',
        color: '#ffffff',
        paddingRight: '2px'
      }
    }, __jsx("span", {
      className: `flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '1' ? 'yellow' : ''}`,
      onClick: () => {
        this.props.router.push('/');
      }
    }, " Home"), __jsx("span", {
      className: `flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '2' ? 'yellow' : ''}`,
      onClick: () => {
        this.props.router.push('/car-market-homepage/index');
      }
    }, " CarMarket"), __jsx("span", {
      className: `flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '3' ? 'yellow' : ''}`,
      onClick: () => {
        this.props.router.push('/newcar');
      }
    }, " All-NewCar"), __jsx("span", {
      className: `flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '4' ? 'yellow' : ''}`,
      onClick: () => {
        this.props.router.push('/live');
      }
    }, " LIVE"), __jsx("span", {
      className: `flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '6' ? 'yellow' : ''}`,
      onClick: () => {
        this.props.router.push('/car-freaks');
      }
    }, " CarFreaks"), __jsx("span", {
      className: `flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '5' ? 'yellow' : ''}`,
      onClick: () => {
        this.props.router.push('/socialNews');
      }
    }, " Social News"), __jsx("span", {
      className: `flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '9' ? 'yellow' : ''}`,
      onClick: () => {
        this.props.router.push('/socialVideos');
      }
    }, " Social Videos"), __jsx("span", {
      className: `flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '7' ? 'yellow' : ''}`,
      onClick: () => {
        this.props.router.push('/petrolprice');
      }
    }, " Petrol Price"), __jsx("span", {
      className: `flex-items-no-shrink margin-sm ${this.props.app.activeMenu == '8' ? 'yellow' : ''}`,
      onClick: () => {
        this.props.router.push('/kpp');
      }
    }, " Driving School")))))))), lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.props, ['app', 'loading']) ? __jsx("div", {
      className: "background-grey-opacity-50 fill-parent absolute-center",
      style: {
        zIndex: 1002
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Affix"], {
      offsetTop: (this.state.window.innerHeight || 500) / 2
    }, __jsx("div", {
      className: "flex-justify-center width-100"
    }, __jsx("img", {
      src: "/loading.gif",
      style: {
        width: 100,
        height: 100
      }
    })))) : null, __jsx("div", {
      style: this.props.backgroundImage ? _objectSpread({
        minHeight: this.state.window.innerHeight || 500 - 180
      }, this.state.backgroundStyle) : {
        minHeight: this.state.window.innerHeight || 500 - 90
      }
    }, this.props.children), this._renderFooter(), __jsx("div", {
      className: "width-100",
      style: {
        position: '-webkit-sticky',
        position: 'sticky',
        bottom: 0,
        zIndex: 1002
      }
    }, this.props.footerOverLay ? this.props.footerOverLay : this.props.hideOpenApp ? null : __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(NotWebDevice, null, __jsx("div", {
      className: "padding-md background-black flex-items-align-center flex-justify-space-between"
    }, __jsx("span", {
      className: " flex-items-align-center"
    }, __jsx("img", {
      src: _icon__WEBPACK_IMPORTED_MODULE_13__["ccarLogo"],
      style: {
        height: 30,
        width: 30
      },
      className: "margin-right-md flex-items-no-shrink"
    }), __jsx("div", {
      className: "caption white"
    }, "A place to connect car lovers' souls")), __jsx("span", {
      className: "d-inline-block "
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: " background-ccar-button-yellow black caption",
      style: {
        borderColor: '#FFCC32'
      },
      onClick: e => {
        this.openApp();
      }
    }, "Open App")))))), __jsx("span", {
      className: "d-inline-block",
      style: {
        position: 'fixed',
        bottom: 30,
        right: 20,
        zIndex: 1002
      }
    }, this.props.showCompareCarButton != undefined && this.props.showCompareCarButton == false && this.props.showCompareCarButton != null ? null : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Affix"], {
      offsetBottom: 95,
      className: "affix-element-show-on-modal-1"
    }, __jsx(_compare_CompareFloatingButton__WEBPACK_IMPORTED_MODULE_18__["default"], null)))), __jsx(_login_login__WEBPACK_IMPORTED_MODULE_19__["default"], null), __jsx(react_cookie_consent__WEBPACK_IMPORTED_MODULE_6___default.a, {
      location: "bottom",
      buttonText: "Got it !",
      cookieName: "consent",
      cookieValue: true,
      style: {
        background: "#2B373B"
      },
      buttonStyle: {
        color: "#4e503b",
        fontSize: "13px"
      },
      expires: 365,
      onAccept: () => {
        react_cookie_consent__WEBPACK_IMPORTED_MODULE_6__["Cookies"].set('consent', Object(uuid__WEBPACK_IMPORTED_MODULE_9__["v4"])());
      },
      acceptOnScroll: true
    }, "By continuing to browse this website, you accept cookies which are used for several reasons such as personalizing content/ads and analyzing how this website is used."));
  }

}

function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_8__["bindActionCreators"])({
    loading: _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_14__["loading"],
    loginMode: _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_14__["loginMode"],
    registerMode: _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_14__["registerMode"],
    logoutSuccessful: _redux_actions_user_actions__WEBPACK_IMPORTED_MODULE_17__["logoutSuccessful"],
    updateActiveMenu: _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_14__["updateActiveMenu"],
    quickSearchProductsList: _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_14__["quickSearchProductsList"],
    setApplyYear: _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_14__["setApplyYear"],
    setApplyPrice: _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_14__["setApplyPrice"],
    setApplyMileage: _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_14__["setApplyMileage"],
    fetchCompareNewCarLimit: _redux_actions_newcars_actions__WEBPACK_IMPORTED_MODULE_15__["fetchCompareNewCarLimit"],
    fetchCompareCarLimit: _redux_actions_productsList_actions__WEBPACK_IMPORTED_MODULE_16__["fetchCompareCarLimit"],
    setMenuHeight: _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_14__["setMenuHeight"],
    clearProductFilterOptions: _redux_actions_productsList_actions__WEBPACK_IMPORTED_MODULE_16__["clearProductFilterOptions"],
    setNotificationToken: _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_14__["setNotificationToken"],
    setNotificationTokenTimeOutDate: _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_14__["setNotificationTokenTimeOutDate"],
    setUser: _redux_actions_user_actions__WEBPACK_IMPORTED_MODULE_17__["setUser"],
    setDisableWindowScroll: _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_14__["setDisableWindowScroll"]
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    app: state.app,
    user: state.user
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(LayoutV2)));

/***/ }),

/***/ "./components/general/Loading.jsx":
/*!****************************************!*\
  !*** ./components/general/Loading.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_compatible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/compatible */ "@ant-design/compatible");
/* harmony import */ var _ant_design_compatible__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const Loading = props => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {}, [props.loading]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Spin"], {
    spinning: props.spinning ? props.spinning : false,
    size: props.size ? props.size : 'large',
    wrapperClassName: props.className ? props.className : '',
    indicator: __jsx("img", {
      src: "/loading.gif",
      style: {
        width: 100,
        height: 100,
        position: 'sticky',
        position: '-webkit-sticky',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto'
      }
    })
  }, props.children));
};

const mapStateToProps = state => ({
  app: state.app,
  user: state.user
});

const mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_3__["Form"].create()(Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Loading))));

/***/ }),

/***/ "./components/general/ReduxPersistWrapper.jsx":
/*!****************************************************!*\
  !*** ./components/general/ReduxPersistWrapper.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/app-actions */ "./redux/actions/app-actions.js");
/* harmony import */ var _redux_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/config */ "./redux/config.js");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! local-storage */ "local-storage");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








const ReduxPersistWrapper = props => {
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    //Used better approach, straight persist states at reducer
    // if (props.cookie) {
    //     let persistStates = getLocalStoragePersistStates();
    //     _.forEach(persistStates, function (persistState) {
    //         props.dynamicDispatch(_.get(persistState, ['persistObj', 'action']), _.get(persistState, ['data']))
    //     })
    // console.log(localStorage.get('redux'));
    props.restoreRedux(local_storage__WEBPACK_IMPORTED_MODULE_6___default.a.get('redux') || {});
    props.setInitedRedux(true); // }
  }, [props.cookie]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, props.app.initedRedux ? props.children : null);
};

const mapStateToProps = state => ({
  app: state.app,
  user: state.user
});

const mapDispatchToProps = {
  restoreRedux: _redux_config__WEBPACK_IMPORTED_MODULE_5__["restoreRedux"],
  dynamicDispatch: _redux_config__WEBPACK_IMPORTED_MODULE_5__["dynamicDispatch"],
  setInitedRedux: _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_4__["setInitedRedux"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(ReduxPersistWrapper));

/***/ }),

/***/ "./components/general/ScrollLoadWrapper.jsx":
/*!**************************************************!*\
  !*** ./components/general/ScrollLoadWrapper.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common-function */ "./common-function.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








let uid = Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])();
let containerRef = {};
containerRef[uid] = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();

const ScrollLoadWrapper = props => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (props.getRef) {
      props.getRef(containerRef[uid]);
    }
  }, [containerRef[uid].current]);

  function checkScrolledToBottom(ref) {
    try {
      if (!!ref) {
        let scrollHeight = ref.current.getScrollHeight();
        let currentPosition = ref.current.getValues();
        currentPosition = currentPosition.scrollTop + currentPosition.clientHeight;
        let scrollRange = 30;

        if (Object(_common_function__WEBPACK_IMPORTED_MODULE_6__["isValidNumber"])(props.scrollRange)) {
          if (props.scrollRangeUsePercentage) {
            scrollRange = scrollHeight * (parseFloat(props.scrollRange) / 100);
          } else {
            scrollRange = parseFloat(props.scrollRange);
          }
        }

        if (scrollHeight - currentPosition <= scrollRange) {
          if (props.onScrolledBottom) {
            props.onScrolledBottom();
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (_.get(containerRef, [uid, 'current'])) {
      if (props.getRef) {
        props.getRef(containerRef[uid].current);
      }
    }
  }, [containerRef[uid]]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__["Scrollbars"], {
    autoHide: true,
    style: _objectSpread({
      height: '100%',
      width: '100%'
    }, props.style),
    ref: containerRef[uid],
    onScrollStop: () => {
      checkScrolledToBottom(containerRef[uid]);
    },
    autoHeightMax: props.autoHeightMax || 'auto',
    autoHeightMin: props.autoHeightMin || 'auto',
    autoHeight: props.autoHeight || false
  }, props.children));
};

const mapStateToProps = state => ({
  app: state.app,
  user: state.user
});

const mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].create()(Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(ScrollLoadWrapper))));

/***/ }),

/***/ "./components/general/UserAvatar.jsx":
/*!*******************************************!*\
  !*** ./components/general/UserAvatar.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _light_box_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./light-box-gallery */ "./components/general/light-box-gallery.jsx");
/* harmony import */ var _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/app-actions */ "./redux/actions/app-actions.js");
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common-function */ "./common-function.js");
/* harmony import */ var _params_darkThemeColorList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../params/darkThemeColorList */ "./params/darkThemeColorList.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const UserAvatar = props => {
  const {
    0: tooltipVisible,
    1: setTooltipVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: `flex-items-align-center flex-justify-center ${props.className ? props.className : ''} ${props.redirectProfile ? 'cursor-pointer' : ''} `,
    style: _objectSpread({}, props.style),
    onClick: e => {
      if (props.onClick) {
        props.onClick(e);
      }

      console.log(props.data);
      console.log(props.data.userurlId);

      if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(props.data, ['userurlId']) && props.redirectProfile) {
        if (props.onRedirect) {
          props.onRedirect();
        }

        props.router.push(`/profile/${props.data.userurlId}`, undefined, {
          shallow: false
        });
      }
    }
  }, __jsx(_light_box_gallery__WEBPACK_IMPORTED_MODULE_4__["default"], {
    images: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.compact([lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(props.data, ['avatar'])])
  }, (data, setCurrentIndex, setVisible) => {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Tooltip"], {
      title: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isPlainObject(props.data) && !lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEmpty(props.data) ? lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(props.data, ['name']) ? lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(props.data, ['name']) || '' : lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(props.data, ['firstName', 'lastName']) || '' : '',
      visible: tooltipVisible,
      onVisibleChange: visible => {
        if (props.showTooltip) {
          setTooltipVisible(visible);
        }
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
      onClick: e => {
        if (!props.redirectProfile && props.showPreview) {
          setCurrentIndex(0);
          setVisible(true);
        }
      },
      size: Object(_common_function__WEBPACK_IMPORTED_MODULE_6__["isValidNumber"])(props.size) || props.size == 'small' || props.size == 'large' ? props.size : 'default',
      src: !props.data || !props.data.avatar ? null : props.data.avatar,
      icon: !props.data || !props.data.avatar && !props.data.name && !props.data.firstName && !props.data.lastName ? 'user' : null,
      className: `${props.avatarClassName ? props.avatarClassName : ''} ${props.redirectProfile || props.showPreview ? 'cursor-pointer' : ''}`,
      style: !props.data || !props.data.avatar ? {
        //donar
        backgroundColor: !props.data || !props.data.name && !props.data.firstName && !props.data.lastName ? "#F89F27" : _params_darkThemeColorList__WEBPACK_IMPORTED_MODULE_7__["darkThemeColorList"][lodash__WEBPACK_IMPORTED_MODULE_1___default.a.toString(props.data.name ? props.data.name : `${props.data.firstName ? props.data.firstName : ''} ${props.data.lastName ? props.data.lastName : props.data.lastName}`).length % _params_darkThemeColorList__WEBPACK_IMPORTED_MODULE_7__["darkThemeColorList"].length].code,
        verticalAlign: 'middle'
      } : {}
    }, !props.data ? null : !props.data.avatar ? props.data.name ? props.data.name : `${props.data.firstName ? props.data.firstName : ''} ${props.data.lastName ? props.data.lastName : ''}` : null));
  }), props.showNameRight && props.data ? __jsx("span", {
    className: `d-inline-block text-align-center headline margin-left-md text-truncate ${props.textClassName ? props.textClassName : '  '}`,
    style: _objectSpread(_objectSpread({}, props.textStyle), {}, {
      maxWidth: '80%'
    })
  }, props.renderName ? props.renderName(props.data) : props.data.name ? props.data.name : `${props.data.firstName ? props.data.firstName : ''} ${props.data.lastName ? props.data.lastName : ''}`) : null), __jsx("div", {
    className: `text-align-center headline ${props.textClassName ? props.textClassName : '  '}`
  }, props.showName && props.data && !props.showNameRight ? props.renderName ? props.renderName(props.data) : props.data.name ? props.data.name : `${props.data.firstName ? props.data.firstName : ''} ${props.data.lastName ? props.data.lastName : ''}` : null));
};

const mapStateToProps = state => ({
  app: state.app,
  user: state.user
});

const mapDispatchToProps = {
  loading: _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_5__["loading"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(UserAvatar)));

/***/ }),

/***/ "./components/general/WindowScrollDisableWrapper.jsx":
/*!***********************************************************!*\
  !*** ./components/general/WindowScrollDisableWrapper.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common-function */ "./common-function.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






let uid = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])();
let containerRef = {};
containerRef[uid] = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
let triggerFunction;

const WindowScrollDisableWrapper = props => {
  const {
    0: scrollY,
    1: setScrollY
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(100);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (typeof document != undefined) {
      if (props.disabled) {
        document.body.style.position = 'fixed';
        console.log(scrollY);
        document.body.style.top = `-${scrollY}px`;
      } else {
        if (props.disabled === false) {
          document.body.style.position = '';
          console.log(parseInt(document.body.style.top || '0') * -1);
          window.scrollTo({
            top: parseInt(document.body.style.top || '0') * -1,
            behavior: 'auto'
          });
        }
      }
    }
  }, [props.disabled]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  function handleScroll(e) {
    if (true) {
      setScrollY(window.scrollY);
    }
  }

  ;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, props.children);
};

const mapStateToProps = state => ({
  app: state.app,
  user: state.user
});

const mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].create()(Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(WindowScrollDisableWrapper))));

/***/ }),

/***/ "./components/general/add-compare-product-button1.jsx":
/*!************************************************************!*\
  !*** ./components/general/add-compare-product-button1.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ant_design_compatible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/compatible */ "@ant-design/compatible");
/* harmony import */ var _ant_design_compatible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common-function */ "./common-function.js");
/* harmony import */ var _feathers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../feathers */ "./feathers.js");
/* harmony import */ var _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions/app-actions */ "./redux/actions/app-actions.js");
/* harmony import */ var _redux_actions_productsList_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions/productsList-actions */ "./redux/actions/productsList-actions.js");
/* harmony import */ var _redux_actions_user_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions/user-actions */ "./redux/actions/user-actions.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;












const AddCompareProductButton1 = props => {
  const {
    0: confirmModalState,
    1: setConfirmModalState
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const {
    0: compareLimit,
    1: setCompareLimit
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(4);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    setCompareLimit(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isNaN(parseInt(props.productsList.compareLimit)) ? 4 : parseInt(props.productsList.compareLimit));
  }, [props.productsList.compareLimit]);

  function isSavedCompare(id) {
    if (id && Object(_common_function__WEBPACK_IMPORTED_MODULE_6__["notEmptyLength"])(props.productsList.compareIds)) {
      var check = props.productsList.compareIds.filter(function (item) {
        return item == id;
      });
      return check.length > 0;
    } else {
      return false;
    }
  }

  const pushToList = data => {
    if (data._id) {
      if (Object(_common_function__WEBPACK_IMPORTED_MODULE_6__["arrayLengthCount"])(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(props.productsList, ['compareIds'])) >= compareLimit) {
        antd__WEBPACK_IMPORTED_MODULE_1__["message"].warning(`Maximum ${compareLimit} products in comparison list.`);
        return;
      }

      if (Object(_common_function__WEBPACK_IMPORTED_MODULE_6__["notEmptyLength"])(props.productsList.compareIds)) {
        let ids = [];
        _feathers__WEBPACK_IMPORTED_MODULE_7__["default"].service('product-ads').find({
          query: {
            _id: {
              $in: props.productsList.compareIds
            }
          }
        }).then(res => {
          if (Object(_common_function__WEBPACK_IMPORTED_MODULE_6__["notEmptyLength"])(res.data)) {} else {
            props.clearCompareProductIds();
          }

          ids = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(res, ['data']), '_id') || [];
          ids.push(data._id);
          props.patchCompareProductIds(ids);
          antd__WEBPACK_IMPORTED_MODULE_1__["message"].success('Added to comparison list');
        }).catch(err => {// message.error(err.message)
        });
      } else {
        antd__WEBPACK_IMPORTED_MODULE_1__["message"].success('Added to comparison list');
        props.patchCompareProductIds([data._id]);
      }
    } else {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("Product Not Found");
    }
  };

  function removeFromList(data) {
    if (data._id) {
      props.removeCompareProductId(data._id);
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].success('Removed from comparison list');
    }
  }

  return __jsx("span", {
    className: props.className ? props.className : null,
    style: props.style ? props.style : null
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    visible: confirmModalState,
    title: "Are you sure?",
    maskClosable: true,
    centered: true,
    onOk: e => {
      removeFromList(props.data);
      setConfirmModalState(false);
    },
    onCancel: e => {
      setConfirmModalState(false);
    }
  }, __jsx("div", null, " Do you want to remove this product from your comparison list? ")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    placement: "top",
    title: "Add me into the comparison list"
  }, isSavedCompare(props.data._id) ? __jsx("a", {
    onClick: () => props.readOnly ? null : setConfirmModalState(true)
  }, props.savedButton ? props.savedButton() : __jsx("div", {
    style: {
      background: 'rgb(89, 54, 26)',
      padding: 5,
      textAlign: 'center',
      borderRadius: '4px'
    },
    className: "w-100"
  }, __jsx("img", {
    src: "/assets/profile/icon-list/carmarket-bar-icon/compare.png",
    alt: "compare",
    style: {
      width: '100%'
    }
  }))) : __jsx("a", {
    onClick: () => props.readOnly ? null : pushToList(props.data)
  }, props.saveButton ? props.saveButton() : __jsx("div", {
    style: {
      textAlign: 'center',
      padding: 5,
      borderRadius: '4px'
    },
    className: "w-100 ads-purchase-compare-btn"
  }, __jsx("img", {
    src: "/assets/profile/icon-list/carmarket-bar-icon/compare.png",
    alt: "compare",
    style: {
      width: '100%'
    }
  })))));
};

const mapStateToProps = state => ({
  app: state.app,
  user: state.user,
  productsList: state.productsList
});

const mapDispatchToProps = {
  loading: _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_8__["loading"],
  setUser: _redux_actions_user_actions__WEBPACK_IMPORTED_MODULE_10__["setUser"],
  removeCompareProductId: _redux_actions_productsList_actions__WEBPACK_IMPORTED_MODULE_9__["removeCompareProductId"],
  patchCompareProductIds: _redux_actions_productsList_actions__WEBPACK_IMPORTED_MODULE_9__["patchCompareProductIds"],
  clearCompareProductIds: _redux_actions_productsList_actions__WEBPACK_IMPORTED_MODULE_9__["clearCompareProductIds"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_0__["Form"].create()(Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(AddCompareProductButton1))));

/***/ }),

/***/ "./components/general/calculator-modal.jsx":
/*!*************************************************!*\
  !*** ./components/general/calculator-modal.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_compatible__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/compatible */ "@ant-design/compatible");
/* harmony import */ var _ant_design_compatible__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common-function */ "./common-function.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








const priceRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.createRef();
const downPaymentRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.createRef();

const CalculatorModal = props => {
  const {
    getFieldDecorator
  } = props.form;
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false); // const [calculateFields, setCalculateFields] = useState(
  //     {
  //         price: 0,
  //         downpayment: 0,
  //         interestRate: 0,
  //         loanPeriod: 9,
  //     }
  // );

  const {
    0: monthlyInstalment,
    1: setMonthlyInstallment
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0);
  const {
    0: timeoutFunction,
    1: setTimeoutFunction
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null);
  const {
    0: formValue,
    1: setFormValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    price: 0
  }); // useEffect(() => {
  //     if (notEmptyLength(calculateFields)) {
  //         //Start calculate monthly payment
  //         typingTimeOut();
  //     } else {
  //         setCalculateFields({
  //             price: 0,
  //             downpayment: 0,
  //             interestRate: 0,
  //             loanPeriod: 9,
  //         });
  //     }
  // }, [calculateFields])

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    reset();
  }, [props.data]);

  function close(e) {
    setVisible(false);
  }

  function typingTimeOut() {
    clearTimeout(timeoutFunction);
    setTimeoutFunction(setTimeout(() => {
      handleSubmit();
    }, 1000));
  }

  function reset() {
    if (Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["notEmptyLength"])(props.data)) {
      props.form.setFieldsValue({
        price: !lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isNaN(parseFloat(props.data.price)) ? parseFloat(Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["numberToFixed"])(props.data.price, true, 2)) : null,
        downpayment: !lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isNaN(parseFloat(Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["numberToFixed"])(props.data.price * 0.1, true, 2))) && lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isNaN(parseFloat(props.data.downpayment)) ? parseFloat(Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["numberToFixed"])(props.data.price * 0.1, true, 2)) : !lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isNaN(parseFloat(props.data.downpayment)) ? parseFloat(Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["numberToFixed"])(props.data.downpayment, true, 2)) : null,
        loanPeriod: 9,
        interestRate: 3.00
      });
      handleSubmit();
    } else {
      props.form.setFieldsValue({
        price: 0,
        downpayment: 0,
        loanPeriod: 9,
        interestRate: 0.00
      });
      handleSubmit();
    }
  } // function handleOnChange() {
  //     let price = '0';
  //     let downpayment = '0';
  //     let interestRate = '3';
  //     let loanPeriod = '9';
  //     if (props.form.getFieldValue('price')) {
  //         price = props.form.getFieldValue('price').toString();
  //         price = formatNumber(price.replace(',', ''), null, true, 2);
  //     }
  //     if (props.form.getFieldValue('downpayment')) {
  //         downpayment = props.form.getFieldValue('downpayment').toString();
  //         downpayment = formatNumber(downpayment.replace(',', ''), null, true, 2);
  //     }
  //     if (props.form.getFieldValue('interestRate')) {
  //         interestRate = props.form.getFieldValue('interestRate');
  //     }
  //     if (props.form.getFieldValue('loanPeriod')) {
  //         loanPeriod = props.form.getFieldValue('loanPeriod');
  //     }
  //     setCalculateFields({
  //         price: isValidNumber(price.replace(',', '')) ? parseFloat(price.replace(',', '')) : 0,
  //         downpayment: isValidNumber(downpayment.replace(',', '')) ? parseFloat(downpayment.replace(',', '')) : 0,
  //         interestRate: interestRate ? interestRate : 3,
  //         loanPeriod: loanPeriod ? loanPeriod : 9,
  //     });
  // }


  function handleSubmit() {
    props.form.validateFields((err, values) => {
      if (!err) {
        let LoanAmount = parseFloat(values.price) - parseFloat(values.downpayment);
        let LoanPeriod = parseInt(values.loanPeriod);
        let Interest = parseFloat(values.interestRate) / 100;
        let totalInterest = Interest * LoanAmount * LoanPeriod;
        let monthlyInterest = totalInterest / (LoanPeriod * 12);
        let monthlyInstalment = Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["numberToFixed"])((LoanAmount + totalInterest) / (LoanPeriod * 12), true, 2); //Rounding fields to 2 decimal point

        props.form.setFieldsValue({
          price: !lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isNaN(parseFloat(values.price)) ? parseFloat(Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["numberToFixed"])(values.price, true, 2)) : null,
          downpayment: !lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isNaN(parseFloat(Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["numberToFixed"])(values.price * 0.1, true, 2))) && lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isNaN(parseFloat(values.downpayment)) ? parseFloat(Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["numberToFixed"])(values.price * 0.1, true, 2)) : !lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isNaN(parseFloat(values.downpayment)) ? parseFloat(Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["numberToFixed"])(values.downpayment, true, 2)) : null,
          interestRate: !lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isNaN(parseFloat(values.interestRate)) ? parseFloat(Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["numberToFixed"])(values.interestRate, true, 2)) : null
        });
        setMonthlyInstallment(monthlyInstalment);
      } else {
        setMonthlyInstallment('N/A'); // _.map(err, function (err) {
        //     return message.error(err.errors[0].message)
        // })
      }
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    visible: visible,
    centered: true,
    title: "Car Loan Calculator",
    maskClosable: true,
    closable: true,
    footer: null,
    onCancel: close,
    width: "350px" // wrapClassName="md-padding-modal-body"

  }, __jsx(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    name: "basic"
  }, __jsx(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    style: {
      margin: '0px 5px'
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    align: "middle",
    gutter: [10, 0]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 24,
    xl: 24
  }, __jsx("span", {
    className: "caption flex-items-align-center",
    style: {
      maxHeight: '30px'
    }
  }, "Loan Amount")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 22,
    sm: 22,
    md: 22,
    lg: 22,
    xl: 22
  }, getFieldDecorator('price', {
    rules: [{
      required: false
    }]
  })(__jsx(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
    ref: priceRef,
    placeholder: "Total Price (RM)",
    formatter: value => {
      if (!value && priceRef.current) {
        priceRef.current.focus();
      }

      return `RM ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    parser: value => value.replace(/\RM\s?|(,*)/g, ''),
    onChange: typingTimeOut,
    step: "0.01",
    className: "width-100"
  }))), props.form.getFieldValue('price') ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 2
  }, __jsx("div", {
    className: "fill-parent flex-justify-center flex-items-align-center"
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["CloseOutlined"], {
    key: "price-close",
    onClick: () => {
      props.form.setFieldsValue({
        price: 0
      });
      handleSubmit();
    }
  }))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 2
  }, __jsx("div", {
    className: "fill-parent flex-justify-center flex-items-align-center"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    placement: "topLeft",
    title: "The vehicle selling price."
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["InfoCircleOutlined"], {
    key: "downpayment-info",
    className: "ccar-yellow"
  })))))), __jsx(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    style: {
      margin: '0px 5px'
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    align: "middle",
    gutter: [10, 0]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 24,
    xl: 24
  }, __jsx("span", {
    className: "caption flex-items-align-center",
    style: {
      maxHeight: '30px'
    }
  }, "Down Payment")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: props.form.getFieldValue('downpayment') ? 22 : 22
  }, getFieldDecorator('downpayment', {
    rules: [{
      required: false
    }]
  })(__jsx(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
    ref: downPaymentRef,
    placeholder: "Downpayment (RM)",
    formatter: value => {
      if (!value && downPaymentRef.current) {
        downPaymentRef.current.focus();
      }

      return `RM ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    parser: value => value.replace(/\RM\s?|(,*)/g, ''),
    onChange: typingTimeOut,
    step: "0.01",
    className: "width-100 no-margin"
  }))), props.form.getFieldValue('downpayment') ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 2
  }, __jsx("div", {
    className: "fill-pareont flex-justify-center flex-items-align-center"
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["CloseOutlined"], {
    key: "dwnpayment-close",
    onClick: () => {
      props.form.setFieldsValue({
        downpayment: undefined
      });
      handleSubmit();
    }
  }))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 2
  }, __jsx("div", {
    className: "fill-parent flex-justify-center flex-items-align-center"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    placement: "topLeft",
    title: "The amount of money you need to pay by your own. Default rate of downpayment is 10%.(This cost is not covered by the loan that take from a bank)."
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["InfoCircleOutlined"], {
    key: "downpayment-info",
    className: "ccar-yellow"
  })))))), __jsx(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    style: {
      margin: '0px 5px'
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    align: "middle",
    gutter: [10, 0]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 24,
    xl: 24
  }, __jsx("span", {
    className: "caption flex-items-align-center",
    style: {
      maxHeight: '30px'
    }
  }, "Loan Period")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: props.form.getFieldValue('loanPeriod') ? 22 : 22
  }, getFieldDecorator('loanPeriod', {
    rules: [{
      required: false
    }]
  })(__jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    className: "width-100",
    placeholder: "Loan Period (Year)",
    onChange: typingTimeOut
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
    value: 5
  }, "5 Years"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
    value: 7
  }, "7 Years"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
    value: 9
  }, "9 Years")))), props.form.getFieldValue('loanPeriod') ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 2
  }, __jsx("div", {
    className: "fill-parent flex-justify-center flex-items-align-center"
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["CloseOutlined"], {
    key: "loanPeriod-close",
    onClick: () => {
      props.form.setFieldsValue({
        loanPeriod: undefined
      });
      handleSubmit();
    }
  }))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 2
  }, __jsx("div", {
    className: "fill-parent flex-justify-center flex-items-align-center"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    placement: "topLeft",
    title: "The period (in years) for paying off the bank loan."
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["InfoCircleOutlined"], {
    key: "loanPeriod-info",
    className: "ccar-yellow"
  })))))), __jsx(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    style: {
      margin: '0px 5px'
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    align: "middle",
    gutter: [10, 0]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 24,
    xl: 24
  }, __jsx("span", {
    className: "caption flex-items-align-center",
    style: {
      maxHeight: '30px'
    }
  }, "Interest Rate")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: props.form.getFieldValue('interestRate') ? 22 : 22
  }, getFieldDecorator('interestRate', {
    rules: [{
      required: false
    }]
  })(__jsx(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
    placeholder: "Interest Rate (%)",
    formatter: value => `${value}%`,
    parser: value => value.replace('%', ''),
    onChange: typingTimeOut,
    step: "0.01",
    className: "width-100"
  }))), props.form.getFieldValue('interestRate') ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 2
  }, __jsx("div", {
    className: "fill-parent flex-justify-center flex-items-align-center"
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["CloseOutlined"], {
    key: "interestRate-close",
    onClick: () => {
      props.form.setFieldsValue({
        interestRate: undefined
      });
      handleSubmit();
    }
  }))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 2
  }, __jsx("div", {
    className: "fill-parent flex-justify-center flex-items-align-center"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    placement: "topLeft",
    title: "The loan interest rate charged by your bank."
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["InfoCircleOutlined"], {
    key: "interestRate-info",
    className: "ccar-yellow"
  })))))), __jsx("div", {
    className: "round-border text-align-center border-yellow-darken-1 margin-top-md"
  }, __jsx("div", {
    style: {
      fontWeight: 600,
      fontSize: 16,
      marginBottom: 2
    }
  }, " Monthly Pay"), __jsx("div", {
    style: {
      fontWeight: 700,
      color: 'rgb(251, 176, 64)',
      fontSize: 18,
      padding: 0
    }
  }, " RM ", Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["formatNumber"])(monthlyInstalment, null, null, 2), " ")))), __jsx("a", {
    onClick: e => {
      setVisible(true);
      reset();
    }
  }, props.button ? props.button() : // <Tooltip placement="top" title={`Calculate my monthly payment`}>
  //     <Button style={{ paddingLeft: '9px', paddingRight: '9px' }} >
  //         <div className='fill-parent flex-items-align-center' >
  //             <Icon type="calculator" className='ccar-yellow cursor-pointer' style={{ fontSize: '20px' }}/>
  //         </div>
  //     </Button>
  __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "normal",
    className: "w-100 ads-purchase-button ",
    style: {
      padding: 0
    }
  }, __jsx("img", {
    src: "/assets/profile/icon-list/calculator.png",
    style: {
      width: '19px'
    }
  })) // </Tooltip>
  ));
};

const mapStateToProps = state => ({
  app: state.app,
  user: state.user
});

const mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_5__["Form"].create()(Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(CalculatorModal))));

/***/ }),

/***/ "./components/general/car-360-view-button.jsx":
/*!****************************************************!*\
  !*** ./components/general/car-360-view-button.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_compatible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/compatible */ "@ant-design/compatible");
/* harmony import */ var _ant_design_compatible__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




 // const urlPrefix = 'https://uat2-api.ccar.my/360View/';

const urlPrefix = 'https://api.ccar.my/360view/';

const Car360ViewButton = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("a", {
    target: `${props.id ? '_blank' : ''}`,
    href: props.id ? `${urlPrefix}${props.id}` : null,
    className: `width-100`
  }, props.children ? props.children : __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Tooltip"], {
    title: "360\xB0 View"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    type: "normal",
    className: "w-100 ads-purchase-button",
    style: {
      padding: 0,
      background: 'rgb(237, 236, 234)',
      borderColor: 'rgb(237, 236, 234)'
    }
  }, __jsx("img", {
    src: "/assets/profile/icon-list/carmarket-bar-icon/360.png"
  })))));
};

const mapStateToProps = state => ({
  app: state.app,
  user: state.user
});

const mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_4__["Form"].create()(Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Car360ViewButton))));

/***/ }),

/***/ "./components/general/contactList1.jsx":
/*!*********************************************!*\
  !*** ./components/general/contactList1.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _params_stateList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../params/stateList */ "./params/stateList.js");
/* harmony import */ var _ant_design_compatible__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/compatible */ "@ant-design/compatible");
/* harmony import */ var _ant_design_compatible__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common-function */ "./common-function.js");
/* harmony import */ var _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/app-actions */ "./redux/actions/app-actions.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









const ContactList1 = props => {
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  let contactList = [];
  let hideContactName = 'show';

  try {
    contactList = props.contactPerson.contactList;
  } catch (err) {
    contactList = [];
  }

  if (!contactList) {
    contactList = [];
  }

  try {
    hideContactName = props.contactPerson.hideContactName;
  } catch (err) {
    hideContactName = 'show';
  }

  return __jsx("span", {
    className: props.className ? props.className : null,
    style: props.style ? props.style : null
  }, __jsx("a", {
    onClick: () => {
      setVisible(true);
    }
  }, props.button ? props.button() : // <Button type="normal" className="w-100 ads-purchase-button" style={{ padding: 0, background: '#25D366', borderColor: '#25D366' }}><img src="/assets/profile/icon-list/carmarket-bar-icon/call.png" style={{width:'17px'}} /></Button>
  __jsx("div", {
    style: {
      padding: 5,
      background: '#25D366',
      borderColor: '#25D366',
      textAlign: 'center',
      borderRadius: '4px'
    }
  }, __jsx("img", {
    src: "/assets/profile/icon-list/carmarket-bar-icon/call.png",
    style: {
      width: '80%'
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Modal"], {
    title: "Contact Seller",
    visible: visible,
    onCancel: () => setVisible(false),
    footer: null
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    type: "flex",
    align: "middle"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 18
  }, __jsx("h3", null, props.companys ? props.companys.name : ''), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    type: "flex",
    align: "middle",
    gutter: [10, 10]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    xs: 4,
    sm: 4,
    md: 2,
    lg: 2,
    xl: 2
  }, __jsx("div", {
    className: "fill-parent  ",
    style: {
      height: '20px'
    }
  }, __jsx("img", {
    src: "/assets/carDetails/Location@3x.png",
    className: "absolute-center width-100 "
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    xs: 6,
    sm: 6,
    md: 4,
    lg: 4,
    xl: 4
  }, __jsx("div", {
    className: "fill-parent  ",
    style: {
      height: '50px'
    }
  }, __jsx("img", {
    src: Object(_params_stateList__WEBPACK_IMPORTED_MODULE_4__["getStateIcon"])(props.companys ? props.companys.state ? props.companys.state : null : null),
    style: {
      height: '50%'
    },
    className: "absolute-center width-100 "
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    xs: 24,
    sm: 24,
    md: 18,
    lg: 18,
    xl: 18
  }, __jsx("div", {
    className: "flex-items-align-center flex-justify-start flex-wrap fill-parent"
  }, __jsx("span", {
    className: "headline   text-align-left padding-x-sm"
  }, '>'), __jsx("span", {
    className: "headline   text-align-left padding-x-sm"
  }, props.companys ? props.companys.area : ''))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 6
  }, __jsx("div", {
    className: "w-100 relative-wrapper"
  }, __jsx("img", {
    src: "/assets/Ccar-logo.png",
    className: "absolute-center",
    style: {
      width: 70,
      height: 70
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Divider"], {
    orientation: "left",
    style: {
      fontWeight: 'normal',
      margin: '5px 0px'
    }
  }), contactList.length === 0 ? __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    type: "flex",
    align: "middle",
    justify: "space-between",
    gutter: [10, 10]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    xs: 24,
    sm: 24,
    md: 16,
    lg: 16,
    xl: 16
  }, __jsx("div", {
    className: "flex-items-align-center flex-justify-start flex-wrap"
  }, __jsx("span", {
    className: "headline   text-truncate padding-xs text-align-left"
  }, `${lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(props.contactPerson, ['namePrefix']) || ''} ${lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(props.contactPerson, ['firstName']) || ''} ${lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(props.contactPerson, ['lastName']) || ''}`), __jsx("span", {
    className: "headline   text-truncate padding-xs"
  }, '|'), __jsx("span", {
    className: "headline   text-truncate padding-xs"
  }, // `${_.get(props.contactPerson, ['contactNoPrimary']) || ''}`
  `${lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(props.contactPerson, ['contactNoPrimary']) || ''}`)))) : !Object(_common_function__WEBPACK_IMPORTED_MODULE_6__["notEmptyLength"])(props.contactPerson) || !Object(_common_function__WEBPACK_IMPORTED_MODULE_6__["notEmptyLength"])(props.contactPerson.contactList) ? null : props.contactPerson.contactList.sort(() => 0.5 - Math.random()).map((v, id) => {
    let contactName = __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null);

    if (hideContactName === 'show') {
      contactName = __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(v, ['contactNamePrefix']) || '', lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(v, ['contactFirstName']) || '', " ", lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(v, ['contactLastName']) || '', __jsx("span", {
        className: "headline   text-truncate padding-xs"
      }, '|'));
    }

    return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
      key: 'contact' + id,
      type: "flex",
      align: "middle",
      justify: "space-between",
      gutter: [10, 10]
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
      span: 16
    }, __jsx("div", {
      className: "flex-items-align-center flex-justify-start flex-wrap"
    }, __jsx("span", {
      className: "headline   text-truncate padding-xs text-align-left"
    }, // `${_.get(v, ['contactNamePrefix']) || ''} ${_.get(v, ['contactFirstName']) || ''} ${_.get(v, ['contactLastName']) || ''}`
    contactName), __jsx("span", {
      className: "headline   text-truncate padding-xs"
    }, // `${_.get(v, ['contactNoPrefix']) || ''} ${_.get(v, ['contactNo']) || ''} ${_.get(v, ['contactLastName']) || ''}`
    `${lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(v, ['contactNoPrefix']) || ''} ${lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(v, ['contactNo']) || ''}`))));
  })));
};

const mapStateToProps = state => ({
  app: state.app
});

const mapDispatchToProps = {
  showContactList: _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_7__["showContactList"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_5__["Form"].create()(ContactList1)));

/***/ }),

/***/ "./components/general/global-search-bar.jsx":
/*!**************************************************!*\
  !*** ./components/general/global-search-bar.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-highlight-words */ "react-highlight-words");
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_highlight_words__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _feathers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../feathers */ "./feathers.js");
/* harmony import */ var _carFreak_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../carFreak/config */ "./components/carFreak/config.js");
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common-function */ "./common-function.js");
/* harmony import */ var _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/actions/app-actions */ "./redux/actions/app-actions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;















const Desktop = ({
  children
}) => {
  const isDesktop = Object(react_responsive__WEBPACK_IMPORTED_MODULE_7__["useMediaQuery"])({
    minWidth: 992
  });
  return isDesktop ? children : null;
};

const Tablet = ({
  children
}) => {
  const isTablet = Object(react_responsive__WEBPACK_IMPORTED_MODULE_7__["useMediaQuery"])({
    minWidth: 768,
    maxWidth: 991
  });
  return isTablet ? children : null;
};

const Mobile = ({
  children
}) => {
  const isMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_7__["useMediaQuery"])({
    maxWidth: 767
  });
  return isMobile ? children : null;
};

const Default = ({
  children
}) => {
  const isNotMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_7__["useMediaQuery"])({
    minWidth: 768
  });
  return isNotMobile ? children : null;
};

const {
  Option,
  OptGroup
} = antd__WEBPACK_IMPORTED_MODULE_1__["AutoComplete"];
const WORD_LENGTH_TO_START_SEARCH = 2;
const searchBarRef = react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef();
const SEARCH_SECTIONS = [// {
//     value: 'carFreak',
//     text: 'CarFreaks'
// },
{
  value: 'socialBoard',
  text: 'Social Board'
}, {
  value: 'dealerWithAds',
  text: 'Dealer'
}, {
  value: 'people',
  text: 'User'
}, {
  value: 'dealer',
  text: 'Dealer'
}, {
  value: 'productAds',
  text: 'CarMarket'
}, {
  value: 'carspec',
  text: 'All-NewCar'
}];

const GlobalSearchBar = props => {
  const {
    0: searchValue,
    1: setSearchValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null);
  const {
    0: searchWords,
    1: setSearchWords
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]);
  const {
    0: dataSource,
    1: setDataSource
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]);
  const {
    0: typingTimeout,
    1: setTypingTimeout
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])();
  const {
    0: searchType,
    1: setSearchType
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])();
  const {
    0: searchTypes,
    1: setSearchTypes
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])();
  const {
    0: isEmptyDataSource,
    1: setIsEmptyDataSource
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true);
  const {
    0: isFocused,
    1: setIsFocused
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    if (props.searchTypes == 'all' || !props.searchTypes) {
      setSearchTypes(SEARCH_SECTIONS);
    } else {
      let availableSections = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.compact(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.map(props.searchTypes, function (item) {
        let selectedSection = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.find(SEARCH_SECTIONS, function (section) {
          return lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isPlainObject(item) && !lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEmpty(item) ? lodash__WEBPACK_IMPORTED_MODULE_3___default.a.toLower(item.value) == lodash__WEBPACK_IMPORTED_MODULE_3___default.a.toLower(section.value) : lodash__WEBPACK_IMPORTED_MODULE_3___default.a.toLower(item) == lodash__WEBPACK_IMPORTED_MODULE_3___default.a.toLower(section.value);
        });

        if (!selectedSection) {
          return null;
        }

        return lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isPlainObject(item) && !lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEmpty(item) && lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(item, ['text']) ? item : selectedSection;
      }));

      setSearchTypes(availableSections || []);
    }
  }, [props.searchTypes]);

  function handleSearch(value) {
    // value = value.replace(/[\W_]/g, "");
    // value = value.replace(/[^a-zA-Z ]/g, "");
    setDataSource([]);
    setIsEmptyDataSource(true);

    if (!value || value.length < WORD_LENGTH_TO_START_SEARCH) {
      setSearchWords([]);
    } else {
      clearTimeout(typingTimeout);
      setTypingTimeout(setTimeout(() => {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`${_feathers__WEBPACK_IMPORTED_MODULE_9__["default"].io.io.uri}globalSearch`, {
          params: {
            keywords: value.trim(),
            filterType: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.map(searchTypes, 'value')
          }
        }).then(res => {
          let dataSource = [];

          lodash__WEBPACK_IMPORTED_MODULE_3___default.a.forEach(searchTypes, function (v) {
            if (lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isArray(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(res, ['data', 'result', v.value, 'data'])) && !lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEmpty(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(res, ['data', 'result', v.value, 'data']))) {
              setIsEmptyDataSource(false);
            }

            dataSource.push({
              title: v.text,
              children: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(res, ['data', 'result', v.value, 'data']) || [],
              total: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(res, ['data', 'result', v.value, 'total']) || 0,
              value: v.value
            });
          });

          setDataSource(dataSource);
          setSearchWords(Object(_common_function__WEBPACK_IMPORTED_MODULE_11__["notEmptyLength"])(value.split(' ')) ? value.split(' ') : []);
          setTypingTimeout();
        }).catch(err => {
          antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(err.message);
        });
      }, 700));
    }
  }

  ;

  const renderTitle = (title, total) => {
    return __jsx("span", null, title, __jsx("a", {
      href: "#",
      style: {
        float: 'right'
      }
    }, "Total: ", total));
  };

  const restructData = data => {
    let base = [__jsx(Option, {
      disabled: true,
      key: "all",
      className: "show-all"
    }, __jsx(Desktop, null, __jsx("p", null, "Search Car/Dealer Name")), __jsx(Tablet, null, __jsx("p", null, "Search Car/Dealer Name")), __jsx(Mobile, null, __jsx("p", null, "Car/Dealer Name")))];

    if (Object(_common_function__WEBPACK_IMPORTED_MODULE_11__["notEmptyLength"])(data)) {
      let list = data.map(group => {
        switch (lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(group, ['value'])) {
          // case 'carFreak':
          //     return (
          //         <OptGroup key={group.title} label={renderTitle(group.title, group.total)}>
          //             {
          //                 _.isArray(_.get(group, ['children'])) && !_.isEmpty(_.get(group, ['children'])) ?
          //                     group.children.map((opt, index) => (
          //                         <Option key={`${group.title}-${index}`} value={parseTagStringToPlainString(`${opt.title || ''} | ${opt.content || ''}`)} onClick={() => {
          //                             if (_.isPlainObject(opt)) {
          //                                 if (opt._id) {
          //                                     props.router.push('/car-freaks/' + opt._id);
          //                                 }
          //                             }
          //                         }}>
          //                             <Highlighter
          //                                 style={{ padding: '0px 10px' }}
          //                                 highlightStyle={{ color: '#ffc069', padding: 0 }}
          //                                 textToHighlight={parseTagStringToPlainString(`${opt.title || ''} | ${opt.content || ''}`)}
          //                                 autoEscape={true}
          //                                 className="overline"
          //                                 searchWords={searchWords} />
          //                         </Option>
          //                     ))
          //                     :
          //                     <Option key={`${group.title}NotFound`} value={`${group.title}NotFound`} disabled>
          //                         <span className='d-inline-block overline' style={{ padding: '0px 10px' }} >
          //                             {group.title} Not Found
          //                         </span>
          //                     </Option>
          //             }
          //         </OptGroup>
          //     )
          //     break;
          case 'socialBoard':
            return __jsx(OptGroup, {
              key: group.title,
              label: renderTitle(group.title, group.total)
            }, lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isArray(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(group, ['children'])) && !lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEmpty(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(group, ['children'])) ? group.children.map((opt, index) => __jsx(Option, {
              key: `${group.title}-${index}`,
              value: Object(_carFreak_config__WEBPACK_IMPORTED_MODULE_10__["parseTagStringToPlainString"])(`${opt.title || ''} | ${opt.content || ''}`),
              onClick: () => {
                if (lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isPlainObject(opt)) {
                  if (opt._id) {
                    props.router.push('/social-board/' + opt._id);
                  }
                }
              }
            }, __jsx(react_highlight_words__WEBPACK_IMPORTED_MODULE_5___default.a, {
              style: {
                padding: '0px 10px'
              },
              highlightStyle: {
                color: '#ffc069',
                padding: 0
              },
              textToHighlight: Object(_carFreak_config__WEBPACK_IMPORTED_MODULE_10__["parseTagStringToPlainString"])(`${opt.title || ''} | ${opt.content || ''}`),
              autoEscape: true,
              className: "overline",
              searchWords: searchWords
            }))) : __jsx(Option, {
              key: `${group.title}NotFound`,
              value: `${group.title}NotFound`,
              disabled: true
            }, __jsx("span", {
              className: "d-inline-block overline",
              style: {
                padding: '0px 10px'
              }
            }, group.title, " Not Found")));
            break;

          case 'people':
            return __jsx(OptGroup, {
              key: group.title,
              label: renderTitle(group.title, group.total)
            }, lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isArray(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(group, ['children'])) && !lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEmpty(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(group, ['children'])) ? group.children.map((opt, index) => __jsx(Option, {
              key: `${group.title}-${index}`,
              value: `${opt.freakId || ''}`,
              onClick: () => {
                if (lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isPlainObject(opt) && !lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEmpty(opt)) {
                  if (opt.userurlId) {
                    props.router.push(`/profile/${opt.userurlId}`);
                  }
                }
              }
            }, __jsx(react_highlight_words__WEBPACK_IMPORTED_MODULE_5___default.a, {
              style: {
                padding: '0px 10px'
              },
              highlightStyle: {
                color: '#ffc069',
                padding: 0
              },
              textToHighlight: `${opt.freakId || ''}`,
              autoEscape: true,
              className: "overline",
              searchWords: searchWords
            }))) : __jsx(Option, {
              key: `${group.title}NotFound`,
              value: `${group.title}NotFound`,
              disabled: true
            }, __jsx("span", {
              className: "d-inline-block overline",
              style: {
                padding: '0px 10px'
              }
            }, group.title, " Not Found")));
            break;

          case 'dealer':
            return __jsx(OptGroup, {
              key: group.title,
              label: renderTitle(group.title, group.total)
            }, lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isArray(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(group, ['children'])) && !lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEmpty(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(group, ['children'])) ? group.children.map((opt, index) => __jsx(Option, {
              key: `${group.title}-${index}`,
              value: `${opt.freakId || ''}`,
              onClick: () => {
                if (lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isPlainObject(opt) && !lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEmpty(opt)) {
                  if (opt._id) {
                    props.router.push(`/dealer/${opt.companyurlId}/${opt.userurlId}`);
                  }
                }
              }
            }, __jsx(react_highlight_words__WEBPACK_IMPORTED_MODULE_5___default.a, {
              style: {
                padding: '0px 10px'
              },
              highlightStyle: {
                color: '#ffc069',
                padding: 0
              },
              textToHighlight: `${opt.freakId || ''}`,
              autoEscape: true,
              className: "overline",
              searchWords: searchWords
            }))) : __jsx(Option, {
              key: `${group.title}NotFound`,
              value: `${group.title}NotFound`,
              disabled: true
            }, __jsx("span", {
              className: "d-inline-block overline",
              style: {
                padding: '0px 10px'
              }
            }, group.title, " Not Found")));

          case 'productAds':
            return __jsx(OptGroup, {
              key: group.title,
              label: renderTitle(group.title, group.total)
            }, lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isArray(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(group, ['children'])) && !lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEmpty(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(group, ['children'])) ? group.children.map((opt, index) => __jsx(Option, {
              key: `${group.title}-${index}`,
              value: `${opt.make ? opt.make : ''} ${opt.model ? opt.model : ''}`,
              onClick: e => {
                let path = Object(_common_function__WEBPACK_IMPORTED_MODULE_11__["convertParameterToProductListUrl"])({
                  make: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.toLower(opt.make),
                  model: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.toLower(opt.model)
                });
                props.router.push(path);
              }
            }, __jsx(react_highlight_words__WEBPACK_IMPORTED_MODULE_5___default.a, {
              style: {
                padding: '0px 10px'
              },
              highlightStyle: {
                color: '#ffc069',
                padding: 0
              },
              textToHighlight: `${opt.make ? opt.make : ''} ${opt.model ? opt.model : ''} (${opt.total ? opt.total : ''})` // textToHighlight={`${opt.title || ''} (${opt.total ? opt.total : ''})`}
              ,
              autoEscape: true,
              className: "overline",
              searchWords: searchWords
            }))) : __jsx(Option, {
              key: `${group.title}NotFound`,
              value: `${group.title}NotFound`,
              disabled: true
            }, __jsx("span", {
              className: "d-inline-block overline",
              style: {
                padding: '0px 10px'
              }
            }, group.title, " Not Found")));
            break;

          case 'carspec':
            return __jsx(OptGroup, {
              key: group.title,
              label: renderTitle(group.title, group.total)
            }, lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isArray(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(group, ['children'])) && !lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEmpty(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(group, ['children'])) ? group.children.map((opt, index) => __jsx(Option, {
              key: `${group.title}-${index}`,
              value: `${opt.make ? opt.make : ''} ${opt.model ? opt.model : ''}`,
              onClick: () => {
                props.router.push(`/newcar/details/${opt.make}/${opt.model}`);
                window.location.reload();
              }
            }, __jsx(react_highlight_words__WEBPACK_IMPORTED_MODULE_5___default.a, {
              style: {
                padding: '0px 10px'
              },
              highlightStyle: {
                color: '#ffc069',
                padding: 0
              },
              textToHighlight: `${opt.make ? opt.make : ''} ${opt.model ? opt.model : ''}`,
              autoEscape: true,
              className: "overline",
              searchWords: searchWords
            }))) : __jsx(Option, {
              key: `${group.title}NotFound`,
              value: `${group.title}NotFound`,
              disabled: true
            }, __jsx("span", {
              className: "d-inline-block overline",
              style: {
                padding: '0px 10px'
              }
            }, group.title, " Not Found")));

          case 'dealerWithAds':
            return __jsx(OptGroup, {
              key: group.title,
              label: renderTitle(group.title, group.total)
            }, lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isArray(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(group, ['children'])) && !lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEmpty(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(group, ['children'])) ? group.children.map((opt, index) => __jsx(Option, {
              key: `${group.title}-${index}`,
              value: `${opt.fullName || ''} | ${opt.companyName ? opt.companyName : ''}`,
              onClick: () => {
                if (opt.companyurlId && opt.userurlId) {
                  props.router.push(`/dealer/${lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(opt, 'companyurlId')}/${lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(opt, 'userurlId')}`);
                }
              }
            }, __jsx(react_highlight_words__WEBPACK_IMPORTED_MODULE_5___default.a, {
              style: {
                padding: '0px 10px'
              },
              highlightStyle: {
                color: '#ffc069',
                padding: 0
              },
              textToHighlight: `${opt.fullName || ''} | ${opt.companyName ? opt.companyName : ''} (${Object(_common_function__WEBPACK_IMPORTED_MODULE_11__["formatNumber"])(opt.total, 'auto', true, 0, true)})`,
              autoEscape: true,
              className: "overline",
              searchWords: searchWords
            }))) : __jsx(Option, {
              key: 'notFoundCompany',
              value: 'notFoundCompany',
              disabled: true
            }, __jsx("span", {
              className: "d-inline-block overline",
              style: {
                padding: '0px 10px'
              },
              disabled: true
            }, group.title, " Not Found")));

          case 'company':
            return __jsx(OptGroup, {
              key: group.title,
              label: renderTitle(group.title, group.total)
            }, lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isArray(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(group, ['children'])) && !lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEmpty(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(group, ['children'])) ? group.children.map((opt, index) => __jsx(Option, {
              key: `${group.title}-${index}`,
              onClick: () => {
                props.router.push('/profile/' + opt.userurlId);
              }
            }, __jsx(react_highlight_words__WEBPACK_IMPORTED_MODULE_5___default.a, {
              style: {
                padding: '0px 10px'
              },
              highlightStyle: {
                color: '#ffc069',
                padding: 0
              },
              textToHighlight: opt.name ? opt.name : '',
              autoEscape: true,
              className: "overline",
              searchWords: searchWords
            }))) : __jsx(Option, {
              key: `${group.title}NotFound`,
              value: `${group.title}NotFound`,
              disabled: true
            }, __jsx("span", {
              className: "d-inline-block overline",
              style: {
                padding: '0px 10px'
              }
            }, group.title, " Not Found")));

          default:
            return __jsx(OptGroup, {
              key: Object(uuid__WEBPACK_IMPORTED_MODULE_8__["v4"])(),
              label: renderTitle('Others', group.total)
            }, lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isArray(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(group, ['children'])) && !lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEmpty(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(group, ['children'])) ? group.children.map((opt, index) => __jsx(Option, {
              key: `${group.title}-${index}`
            }, __jsx(react_highlight_words__WEBPACK_IMPORTED_MODULE_5___default.a, {
              style: {
                padding: '0px 10px'
              },
              highlightStyle: {
                color: '#ffc069',
                padding: 0
              },
              textToHighlight: opt.value ? opt.value : '',
              autoEscape: true,
              className: "overline",
              searchWords: searchWords
            }))) : __jsx(Option, {
              key: `othersNotFound`,
              value: `othersNotFound`
            }, __jsx("span", {
              className: "d-inline-block overline",
              style: {
                padding: '0px 10px'
              },
              disabled: true
            }, "Not Found")));
        }
      });
      base = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.union(list, base);
    }

    return base;
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["AutoComplete"], {
    className: "certain-category-search layout-global-search",
    dropdownClassName: "certain-category-search-dropdown group-item-scroll" // dropdownMatchSelectWidth={false}
    ,
    dropdownStyle: {
      width: 300
    } // size="large"
    ,
    style: {
      width: '100%'
    },
    ref: searchBarRef,
    dataSource: restructData(dataSource),
    onSearch: handleSearch,
    placeholder: "Search here",
    optionLabelProp: "value",
    open: !isEmptyDataSource && isFocused,
    onChange: value => {
      setSearchValue(value);
    },
    onSelect: () => {
      setIsFocused(false);
      setIsEmptyDataSource(true);

      if (searchBarRef.current) {
        searchBarRef.current.blur();
      }
    },
    defaultActiveFirstOption: false,
    onFocus: () => {
      setIsFocused(true);
    },
    onBlur: () => {
      setIsFocused(false);
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: "search-input",
    border: "false",
    size: "large",
    value: searchValue // onSearch={() => props.router.push('/cars-on-sale')}
    ,
    onPressEnter: e => {
      if (e.target.value) {
        // let path = `/cars-on-sale-search?page=${1}${`&${queryStringifyNestedObject({ title: searchValue })}`}`;
        if (props.enterSearchCarFreaks) {
          let text = e.target.value || '';
          let canSearchHashTag = false;

          if (text.indexOf('#') == 0 && Object(_common_function__WEBPACK_IMPORTED_MODULE_11__["arrayLengthCount"])(text.split(' ')) == 1) {
            canSearchHashTag = true;
          }

          text = text.replace('#', '');

          if (canSearchHashTag) {
            props.router.push(`/hashtag/${text}`);
          } else {
            props.router.push(`/search-car-freaks?matchStr=${text}`);
          }
        } else {
          let path = Object(_common_function__WEBPACK_IMPORTED_MODULE_11__["convertParameterToProductListUrl"])({
            title: searchValue
          });
          props.router.push(path);
        }
      }
    },
    suffix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["SearchOutlined"], {
      onClick: e => {
        // let path = `/cars-on-sale-search?page=${1}${`&${queryStringifyNestedObject({ title: searchValue })}`}`;
        let path = Object(_common_function__WEBPACK_IMPORTED_MODULE_11__["convertParameterToProductListUrl"])({
          title: searchValue
        });
        props.router.push(path);
      }
    })
  })));
};

const mapStateToProps = state => ({
  app: state.app,
  user: state.user
});

const mapDispatchToProps = {
  loading: _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_12__["loading"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Object(next_router__WEBPACK_IMPORTED_MODULE_13__["withRouter"])(GlobalSearchBar)));

/***/ }),

/***/ "./components/general/light-box-gallery.jsx":
/*!**************************************************!*\
  !*** ./components/general/light-box-gallery.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-image-lightbox */ "react-image-lightbox");
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_compatible__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/compatible */ "@ant-design/compatible");
/* harmony import */ var _ant_design_compatible__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common-function */ "./common-function.js");
/* harmony import */ var _WindowScrollDisableWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WindowScrollDisableWrapper */ "./components/general/WindowScrollDisableWrapper.jsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










const LightBoxGallery = props => {
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: currentIndex,
    1: setCurrentIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  const {
    0: images,
    1: setImages
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const {
    0: inited,
    1: setInited
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isArray(props.images) && !lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEmpty(props.images)) {
      setImages(props.images);
    } else {
      setImages([]);
    }
  }, [props.images]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isArray(images) && !lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEmpty(images)) {
      if (props.onChange) {
        props.onChange(currentIndex, images[currentIndex]);
      }
    }
  }, [currentIndex]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["isValidNumber"])(parseInt(props.currentIndex))) {
      setCurrentIndex(props.currentIndex);
    }
  }, [props.currentIndex]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, props.children ? props.children({
    images,
    currentIndex,
    visible
  }, setCurrentIndex, setVisible) : __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__["Scrollbars"], {
    style: {
      width: '100%',
      height: '100px'
    }
  }, __jsx("div", {
    className: "flex-justify-start flex-items-align-center fill-parent"
  }, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(images, function (v, index) {
    return __jsx("span", {
      className: "d-inline-block margin-right-md cursor-pointer",
      onClick: e => {
        setCurrentIndex(index);
        setVisible(true);
      }
    }, __jsx("img", {
      src: v,
      style: {
        width: props.size || 70,
        height: props.size || 70
      }
    }));
  }))), visible && __jsx(react_image_lightbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
    mainSrc: images[currentIndex],
    nextSrc: images[(currentIndex + 1) % images.length],
    prevSrc: images[(currentIndex + images.length - 1) % images.length],
    onCloseRequest: () => {
      setTimeout(() => {
        setVisible(false);
      }, 500);
    },
    onMovePrevRequest: () => {
      setCurrentIndex((currentIndex + images.length - 1) % images.length);
    },
    onMoveNextRequest: () => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }
  }));
};

const mapStateToProps = state => ({
  app: state.app,
  user: state.user
});

const mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_6__["Form"].create()(LightBoxGallery)));

/***/ }),

/***/ "./components/general/registerCard.jsx":
/*!*********************************************!*\
  !*** ./components/general/registerCard.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _light_box_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./light-box-gallery */ "./components/general/light-box-gallery.jsx");
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common-function */ "./common-function.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






const RegisterCard = props => {
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("a", {
    onClick: () => {
      if (Object(_common_function__WEBPACK_IMPORTED_MODULE_4__["arrayLengthCount"])(props.registrationUrl) > 0) {
        setVisible(true);
      }
    }
  }, props.button ? props.button : // <Col xs={8} sm={8} md={4} lg={4} xl={4}>
  //     <div className="wrap-product-ads-tag">
  //         <img src="/assets/CarListingIconMobile/registration-card.png" className="w-100" /> 
  //     </div>
  // </Col>
  __jsx("div", {
    className: "wrap-product-ads-tag"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    xs: 3,
    sm: 2,
    md: 5,
    lg: 5,
    xl: 5,
    offset: 1
  }, __jsx("img", {
    src: "/assets/CarListingIconMobile/registration-card.png",
    className: "w-100"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    xs: 18,
    sm: 18,
    md: 18,
    lg: 18,
    xl: 18
  }, __jsx("p", {
    style: {
      fontSize: '10px'
    }
  }, "Reg Card"))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Modal"], {
    title: "Registration Card",
    visible: visible,
    onCancel: () => setVisible(false),
    footer: null
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24
  }, __jsx(_light_box_gallery__WEBPACK_IMPORTED_MODULE_3__["default"], {
    images: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isArray(props.registrationUrl) && !lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEmpty(props.registrationUrl) && lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(props.registrationUrl, [0, 'url']) ? [lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(props.registrationUrl, [0, 'url'])] : []
  }, (data, setCurrentIndex, setVisible) => {
    return __jsx("img", {
      src: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(data, ['images', 0]),
      className: "w-100 cursor-pointer",
      onClick: e => {
        setVisible(true);
      }
    });
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (RegisterCard);

/***/ }),

/***/ "./components/general/whatapps-button1.jsx":
/*!*************************************************!*\
  !*** ./components/general/whatapps-button1.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_compatible__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/compatible */ "@ant-design/compatible");
/* harmony import */ var _ant_design_compatible__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common-function */ "./common-function.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









const Desktop = ({
  children
}) => {
  const isDesktop = Object(react_responsive__WEBPACK_IMPORTED_MODULE_4__["useMediaQuery"])({
    minWidth: 992
  });
  return isDesktop ? children : null;
};

const Tablet = ({
  children
}) => {
  const isTablet = Object(react_responsive__WEBPACK_IMPORTED_MODULE_4__["useMediaQuery"])({
    minWidth: 768,
    maxWidth: 991
  });
  return isTablet ? children : null;
};

const Mobile = ({
  children
}) => {
  const isMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_4__["useMediaQuery"])({
    maxWidth: 767
  });
  return isMobile ? children : null;
};

const Default = ({
  children
}) => {
  const isNotMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_4__["useMediaQuery"])({
    minWidth: 768
  });
  return isNotMobile ? children : null;
};

const WhatsAppButton1 = props => {
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  let contactList = [];
  let hideContactName = 'show';
  let contactStyle = {
    float: 'right'
  };

  try {
    contactList = props.mobileNumber.createdBy.contactList;
  } catch (err) {
    contactList = [];
  }

  try {
    hideContactName = props.mobileNumber.createdBy.hideContactName;
  } catch (err) {
    hideContactName = 'show';
  }

  if (!contactList) {
    contactList = [];
  }

  if (contactList.length > 0) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      type: "normal",
      className: "w-100 ads-purchase-button ccar-product-btn-car",
      style: {
        padding: 0
      },
      onClick: () => {
        setVisible(true);
      }
    }, __jsx("img", {
      src: "/assets/profile/icon-list/carmarket-bar-icon/whatsapp.png",
      style: {
        width: '20px'
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Modal"], {
      title: "Contact Seller",
      visible: visible,
      onCancel: () => setVisible(false),
      footer: null
    }, __jsx("div", null, contactList.map(function (v) {
      let contactName = __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null);

      if (hideContactName === 'show') {
        contactName = __jsx("span", null, (v.contactNamePrefix || '') + ' ' + (v.contactFirstName || '') + ' ' + (v.contactLastName || ''));
      } else {
        contactStyle = {};
      }

      return __jsx("p", null, contactName, __jsx("span", {
        style: contactStyle
      }, (v.contactNoPrefix || '') + (v.contactNo || ''), __jsx("span", null, __jsx("a", {
        target: '_blank',
        href: "https://web.whatsapp.com/send?phone=" + v.contactNoPrefix.replace('+', '') + v.contactNo + "&text=Hi " + (v.contactNamePrefix ? v.contactNamePrefix + ' ' : '') + (v.contactFirstName ? v.contactFirstName + ' ' : '') + (v.contactLastName || '') + ", I am interested in your car ad on ccar.my and I would like to know more about " + props.mobileNumber.title + " (RM " + Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["formatNumber"])(props.mobileNumber.price, null, false, 2, true) + "). Thank you. https://ccar.my/viewCar/" + props.mobileNumber._id,
        onClick: e => {}
      }, __jsx("div", {
        style: {
          padding: 4,
          background: '#25D366',
          borderColor: '#25D366',
          textAlign: 'center',
          borderRadius: '4px'
        }
      }, __jsx("img", {
        src: "/assets/profile/icon-list/carmarket-bar-icon/whatsapp.png",
        style: {
          width: '80%'
        }
      }))))));
    }))));
  }

  return __jsx("span", {
    className: props.className ? props.className : null,
    style: props.style ? props.style : null
  }, __jsx(Default, null, __jsx("a", {
    target: !lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(props.mobileNumber, ['createdBy', 'contactNoPrimary']) ? null : '_blank',
    href: !lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(props.mobileNumber, ['createdBy', 'contactNoPrimary']) ? null : "https://web.whatsapp.com/send?phone=" + lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(props.mobileNumber, ['createdBy', 'contactNoPrimary']).replace('+60', '') + "&text=Hi " + Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["getUserName"])(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(props.mobileNumber, ['createdBy']), 'prefixName') + ", I am interested in your car ad on ccar.my and I would like to know more about " + props.mobileNumber.title + " (RM " + Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["formatNumber"])(props.mobileNumber.price, null, false, 2, true) + "). Thank you. https://ccar.my/viewCar/" + props.mobileNumber._id,
    onClick: e => {
      if (!lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(props.mobileNumber, ['createdBy', 'contactNoPrimary'])) {
        antd__WEBPACK_IMPORTED_MODULE_0__["message"].error('Whatsapp No Not Found');
      }
    }
  }, props.button ? props.button() : // <Button
  //     type="normal"
  //     className="w-100 ads-purchase-button ccar-product-btn-car"
  //     style={{ padding: 0 }}
  // >
  //     <WhatsAppOutlined style={{ fontSize: 20, color: 'white' }} />
  //     <img src="/assets/profile/icon-list/carmarket-bar-icon/whatsapp.png" style={{ width: '20px' }} />
  // </Button>
  __jsx("div", {
    style: {
      padding: 4,
      background: '#25D366',
      borderColor: '#25D366',
      textAlign: 'center',
      borderRadius: '4px'
    }
  }, __jsx("img", {
    src: "/assets/profile/icon-list/carmarket-bar-icon/whatsapp.png",
    style: {
      width: '80%'
    }
  })))), __jsx(Mobile, null, __jsx("a", {
    href: !lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(props.mobileNumber, ['createdBy', 'contactNoPrimary']) ? null : "https://wa.me/" + lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(props.mobileNumber, ['createdBy', 'contactNoPrimary']).replace('+60', '') + "&text=Hi " + Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["getUserName"])(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(props.mobileNumber, ['createdBy']), 'prefixName') + ", I am interested in your car ad on ccar.my and I would like to know more about " + props.mobileNumber.title + " (RM " + Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["formatNumber"])(props.mobileNumber.price, null, false, 2, true) + "). Thank you. https://ccar.my/viewCar/" + props.mobileNumber._id,
    onClick: e => {
      if (!lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(props.mobileNumber, ['createdBy', 'contactNoPrimary'])) {
        antd__WEBPACK_IMPORTED_MODULE_0__["message"].error('Whatsapp No Not Found');
      }
    }
  }, props.button ? props.button() : // <Button
  //     type="normal"
  //     className="w-100 ads-purchase-button ccar-product-btn-car"
  //     style={{ padding: 0 }}
  // >
  //     <WhatsAppOutlined style={{ fontSize: 20, color: 'white' }} />
  //     <img src="/assets/profile/icon-list/carmarket-bar-icon/whatsapp.png" style={{ width: '20px' }} />
  // </Button>
  __jsx("div", {
    style: {
      padding: 4,
      background: '#25D366',
      borderColor: '#25D366',
      textAlign: 'center',
      borderRadius: '4px'
    }
  }, __jsx("img", {
    src: "/assets/profile/icon-list/carmarket-bar-icon/whatsapp.png",
    style: {
      width: '80%'
    }
  })))));
};

const mapStateToProps = state => ({
  app: state.app,
  user: state.user
});

const mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_5__["Form"].create()(Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(WhatsAppButton1))));

/***/ }),

/***/ "./components/live/config.js":
/*!***********************************!*\
  !*** ./components/live/config.js ***!
  \***********************************/
/*! exports provided: testStreamUrl, liveStreamUrl, getStreamUrl, defaultReactions, defaultReactionsAnimation, reactionGif, defaultGifts, liveIcon, supportIcon, likeIcon, commentIcon, shareIcon, giftGif, ccoinIcon, reactionAnimationTransitions, LIVE_TEXT_TEMPLATE, generateRandomTransition, getTotalReactions, getTopReactions, createOffer, sendToPeer, closeThePeerConnection, syncReactionSummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testStreamUrl", function() { return testStreamUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveStreamUrl", function() { return liveStreamUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStreamUrl", function() { return getStreamUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultReactions", function() { return defaultReactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultReactionsAnimation", function() { return defaultReactionsAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactionGif", function() { return reactionGif; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultGifts", function() { return defaultGifts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveIcon", function() { return liveIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportIcon", function() { return supportIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likeIcon", function() { return likeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commentIcon", function() { return commentIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shareIcon", function() { return shareIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "giftGif", function() { return giftGif; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ccoinIcon", function() { return ccoinIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactionAnimationTransitions", function() { return reactionAnimationTransitions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_TEXT_TEMPLATE", function() { return LIVE_TEXT_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomTransition", function() { return generateRandomTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalReactions", function() { return getTotalReactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopReactions", function() { return getTopReactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOffer", function() { return createOffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendToPeer", function() { return sendToPeer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeThePeerConnection", function() { return closeThePeerConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncReactionSummary", function() { return syncReactionSummary; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common-function */ "./common-function.js");


const testStreamUrl = 'https://stream-uat2.ccar.my';
const liveStreamUrl = 'https://stream.ccar.my';
function getStreamUrl(url) {
  let stream = testStreamUrl;

  if (url === 'http://localhost:3030/') {
    stream = 'http://localhost:3030';
  } else if (url === 'https://uat2-api.ccar.my/') {
    stream = testStreamUrl;
  } else if (url === 'https://api.ccar.my/') {
    stream = liveStreamUrl;
  } else if (url === 'https://preprod-api.ccar.my/') {
    stream = testStreamUrl;
  } else {
    stream = 'http://localhost:3030';
  } //default testing
  // return 'http://192.168.0.191:7070/';
  // return "https://stream-uat2.ccar.my";
  // return 'http://localhost:7070/';
  // return 'http://192.168.0.149:3041/';


  return stream;
}
const gifts = [{
  name: 'kopi-ice',
  price: 10
}, {
  name: 'white-rice',
  price: 10
}, {
  name: 'roti-canai',
  price: 20
}, {
  name: 'nasi-lemak',
  price: 20
}, {
  name: 'nasi-kandar',
  price: 50
}, {
  name: 'ramly-burger',
  price: 50
}, {
  name: 'dimsum',
  price: 100
}, {
  name: 'biryani',
  price: 100
}];
const defaultReactions = ['like', 'heart', 'laughing', 'crying', 'angry', 'sleeping', 'rollingEye'];
const defaultReactionsAnimation = ['none', 'least', 'less', 'normal', 'more', 'most'];
let temp = {};

lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(defaultReactions, function (react) {
  temp[`${react}Gif`] = `/assets/live/${react}.gif`;
});

const reactionGif = temp;
temp = [];
temp = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(gifts, function (gift) {
  gift.icon = `/assets/live/${gift.name}.png`;
  gift.name = Object(_common_function__WEBPACK_IMPORTED_MODULE_1__["toCamelCase"])(gift.name, '-');
  return gift;
});
const defaultGifts = temp;
const liveIcon = '/assets/live/live.png';
const supportIcon = '/assets/live/support.png';
const likeIcon = '/assets/live/like.png';
const commentIcon = '/assets/live/comment.png';
const shareIcon = '/assets/live/share.png';
const giftGif = '/assets/live/gift.gif';
const ccoinIcon = '/assets/live/ccoin.png';
const reactionAnimationTransitions = generateRandomTransition(30, 400, 4, 4);
const LIVE_TEXT_TEMPLATE = {
  'client-joined': 'has joined',
  'client-left': 'has left',
  'client-text': '',
  'dealer-text': '',
  "anonymous-joined": 'has joined',
  "anonymous-left": 'has left'
};
function generateRandomTransition(maxTransitionX, maxTransitionY, eachTransitionLength, group) {
  let reactionAnimationTransitionsTemp = [];
  let eachTransition = [];

  if (!Object(_common_function__WEBPACK_IMPORTED_MODULE_1__["isValidNumber"])(maxTransitionX)) {
    maxTransitionX = 30;
  } else {
    maxTransitionX = parseInt(maxTransitionX);
  }

  if (!Object(_common_function__WEBPACK_IMPORTED_MODULE_1__["isValidNumber"])(maxTransitionY)) {
    maxTransitionY = 400;
  } else {
    maxTransitionY = parseInt(maxTransitionY);
  }

  if (!Object(_common_function__WEBPACK_IMPORTED_MODULE_1__["isValidNumber"])(eachTransitionLength) || parseInt(eachTransitionLength) < 4) {
    eachTransitionLength = 4;
  } else {
    eachTransitionLength = parseInt(eachTransitionLength);
  }

  if (!Object(_common_function__WEBPACK_IMPORTED_MODULE_1__["isValidNumber"])(group) || parseInt(group) < 0) {
    group = 0;
  } else {
    group = parseInt(group);
  }

  lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.range(group), function (index) {
    eachTransition.push({
      x: 0,
      y: 0
    });

    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.range(eachTransitionLength - 2), function (index1) {
      eachTransition.push({
        x: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.random(-maxTransitionX, maxTransitionX, false),
        y: -(maxTransitionY / (eachTransitionLength - index1))
      });
    });

    eachTransition.push({
      x: 0,
      y: -maxTransitionY
    });
    reactionAnimationTransitionsTemp.push(eachTransition);
    eachTransition = [];
  });

  return reactionAnimationTransitionsTemp;
}
function getTotalReactions(reactions) {
  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(reactions) && Object(_common_function__WEBPACK_IMPORTED_MODULE_1__["notEmptyLength"])(reactions)) {
    let total = 0;

    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(reactions, function (reaction) {
      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNaN(parseInt(reaction.total))) {
        total += parseInt(reaction.total);
      }
    });

    return total;
  } else {
    return 0;
  }
}
function getTopReactions(reactions, rank) {
  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(reactions) && Object(_common_function__WEBPACK_IMPORTED_MODULE_1__["notEmptyLength"])(reactions)) {
    if (!Object(_common_function__WEBPACK_IMPORTED_MODULE_1__["isValidNumber"])(rank)) {
      rank = 3;
    } else {
      rank = parseInt(rank);
    } //filter out reaction not in list


    let filteredData = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.compact(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(reactions, function (reaction) {
      if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.indexOf(defaultReactions, reaction.type) != -1 && Object(_common_function__WEBPACK_IMPORTED_MODULE_1__["isValidNumber"])(reaction.total)) {
        return reaction;
      } else {
        return null;
      }
    })); //get top reactions


    filteredData = Object(_common_function__WEBPACK_IMPORTED_MODULE_1__["getTopItems"])(filteredData, rank, 'total');
    return filteredData;
  } else {
    return 0;
  }
}
function createOffer(socket, broadcaster) {
  if (!!broadcaster && !!socket) {
    const pc_config = {
      iceServers: [{
        urls: ["stun:ss-turn2.xirsys.com"]
      }, {
        username: "K7RYJQ0iO86IzU-paa6guXxfLJ7vXWhFwfWzE3X88-LOsT0QN4vquwAUx1vsJJmqAAAAAF-yezBjY2FyMzEzMQ==",
        credential: "a5e31b16-280d-11eb-89e3-0242ac140004",
        urls: ["turn:ss-turn2.xirsys.com:80?transport=udp", "turn:ss-turn2.xirsys.com:3478?transport=udp", "turn:ss-turn2.xirsys.com:80?transport=tcp", "turn:ss-turn2.xirsys.com:3478?transport=tcp", "turns:ss-turn2.xirsys.com:443?transport=tcp", "turns:ss-turn2.xirsys.com:5349?transport=tcp"]
      }]
    };
    broadcaster.peerConnection = new RTCPeerConnection(pc_config);
    broadcaster.peerConnection.createOffer({
      offerToReceiveVideo: 1,
      //for audio
      offerToReceiveAudio: 1
    }).then(sdp => {
      broadcaster.peerConnection.setLocalDescription(sdp);
      sendToPeer(socket, 'clientRequestVideoWithDealerSocketId', {
        sdp,
        dealerSocketId: broadcaster.dealerSocketId
      });
      return broadcaster;
    }).catch(x => {
      console.log('offer failed');
      return null;
    });
  } else {
    return null;
  }
}
function sendToPeer(socket, messageType, payload) {
  if (!!socket) {
    socket.emit(messageType, {
      senderId: socket.id,
      payload
    });
  }
}
function closeThePeerConnection(socket, peerConnection, previousDealerSocketId) {
  if (!!peerConnection && !!socket && !!previousDealerSocketId) {
    peerConnection.close();
    socket.emit('closeClientSocket', previousDealerSocketId);
  }
}
function syncReactionSummary(reactionLogs) {
  let reactionSummary = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(defaultReactions, function (reaction) {
    return {
      type: reaction,
      total: 0
    };
  });

  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(reactionLogs) && Object(_common_function__WEBPACK_IMPORTED_MODULE_1__["notEmptyLength"])(reactionLogs)) {
    reactionSummary = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(reactionSummary, function (summary) {
      let logs = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(reactionLogs, ['type', summary.type]);

      let total = 0;

      lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(logs, function (log) {
        total += log.total;
      });

      return {
        type: summary.type,
        total: total
      };
    });
  }

  return reactionSummary;
}

/***/ }),

/***/ "./components/login/login.jsx":
/*!************************************!*\
  !*** ./components/login/login.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_compatible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/compatible */ "@ant-design/compatible");
/* harmony import */ var _ant_design_compatible__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-google-login */ "react-google-login");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-facebook-login/dist/facebook-login-render-props */ "react-facebook-login/dist/facebook-login-render-props");
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redux_actions_user_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions/user-actions */ "./redux/actions/user-actions.js");
/* harmony import */ var _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions/app-actions */ "./redux/actions/app-actions.js");
/* harmony import */ var _feathers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../feathers */ "./feathers.js");
/* harmony import */ var _functionContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../functionContent */ "./functionContent.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../icon */ "./icon.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const facebookId = Object(_functionContent__WEBPACK_IMPORTED_MODULE_12__["getFaceBookId"])(_feathers__WEBPACK_IMPORTED_MODULE_11__["default"].io.io.uri);
const googleClientId = Object(_functionContent__WEBPACK_IMPORTED_MODULE_12__["getGoogleId"])(_feathers__WEBPACK_IMPORTED_MODULE_11__["default"].io.io.uri);
const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

class LoginModal extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  // static getInitialProps({store}) {}
  constructor(props) {
    super(props);

    _defineProperty(this, "responseGoogle", response => {
      if (response.error) {
        return;
      }

      this.props.loading(true);
      _feathers__WEBPACK_IMPORTED_MODULE_11__["default"].authenticate({
        strategy: 'google',
        access_token: response.accessToken
      }).then(res => {
        this.props.loading(false);
        this.props.loginSuccessful(res);
        this.props.loginMode(false);
      }).catch(err => {
        this.props.loading(false);
        console.log(err); // message.error(err.message)
      });
    });

    _defineProperty(this, "responseFacebook", response => {
      this.props.loading(true);
      _feathers__WEBPACK_IMPORTED_MODULE_11__["default"].authenticate({
        strategy: 'facebook',
        access_token: response.accessToken
      }).then(res => {
        console.log(res);

        if (res.user.status === 'disabled') {
          this.props.loading(false);
          antd__WEBPACK_IMPORTED_MODULE_2__["message"].error('User Has Been Disabled.');
          this.props.loginMode(false);
        } else {
          this.props.loading(false);
          this.props.loginSuccessful(res);
          this.props.loginMode(false);
        }
      }).catch(err => {
        this.props.loading(false);
        console.log(err); // message.error(err.message)
      });
    });

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          this.props.loading(true);
          _feathers__WEBPACK_IMPORTED_MODULE_11__["default"].authenticate({
            strategy: 'local',
            username: values.username,
            password: values.password
          }).then(res => {
            this.props.loading(false);
            this.props.loginSuccessful(res);
            this.props.loginMode(false);
          }).catch(err => {
            this.props.loading(false);
            antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(err.message);
          });
        }
      });
    });

    this.state = {
      tab: 'socialMediaLogin'
    };
  }

  render() {
    const {
      getFieldDecorator
    } = this.props.form;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"] // title="Basic Modal"
    , {
      visible: lodash__WEBPACK_IMPORTED_MODULE_7___default.a.get(this.props, ['app', 'loginMode']),
      onOk: () => this.refClick.click(),
      onCancel: () => this.props.loginMode(false),
      style: {
        borderRadius: '100px',
        marginLeft: '60px'
      },
      footer: null,
      bodyStyle: {
        padding: 0
      },
      className: "modal-body-background-transparent relative-wrapper",
      centered: true,
      width: 300
    }, __jsx("div", {
      style: {
        backgroundImage: `url(${_icon__WEBPACK_IMPORTED_MODULE_13__["loginBackground"]})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      className: "jsx-2703617319" + " " + "padding-sm round-border relative-wrapper"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      span: 24
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      xs: {
        span: 4,
        offset: 0
      },
      sm: {
        span: 4,
        offset: 0
      },
      md: {
        span: 3,
        offset: 4
      },
      lg: {
        span: 3,
        offset: 4
      },
      xl: {
        span: 3,
        offset: 4
      }
    }, __jsx("div", {
      className: "jsx-2703617319" + " " + "wrap-login-logo"
    }, __jsx("img", {
      style: {
        marginLeft: '48px'
      },
      alt: "ccar",
      src: "/assets/Ccar-logo.png",
      className: "jsx-2703617319" + " " + "w-100"
    }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      xs: 20,
      sm: 20,
      md: 16,
      lg: 16,
      xl: 16
    }, __jsx("div", {
      className: "jsx-2703617319" + " " + "wrap-login-title flex-wrap"
    }, __jsx("p", {
      style: {
        marginBottom: '15px',
        textAlign: 'center',
        color: '#ffffff'
      },
      className: "jsx-2703617319"
    }, "Welcome to CCAR"), __jsx("p", {
      style: {
        textAlign: 'center',
        color: '#ffffff',
        marginTop: '30px',
        lineHeight: 1.5
      },
      className: "jsx-2703617319"
    }, `Connect with your ${this.state.tab == 'socialMediaLogin' ? 'social media' : 'dealer account'}`)))))), __jsx("div", {
      className: "jsx-2703617319" + " " + "width-100 relative-wrapper"
    }, this.state.tab == 'socialMediaLogin' ? __jsx("div", {
      key: "social-media-login-form",
      className: "jsx-2703617319" + " " + 'fill-parent'
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      gutter: [20, 20],
      className: "fill-parent",
      type: "flex",
      justify: "center",
      align: "middle"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      xs: 24,
      sm: 24,
      md: 12,
      lg: 12,
      xl: 12
    }, __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_5__["GoogleLogin"], {
      clientId: googleClientId,
      buttonText: "Login",
      render: renderProps => __jsx("button", {
        style: {
          backgroundColor: '#ffffff'
        },
        onClick: renderProps.onClick,
        disabled: renderProps.disabled,
        className: "jsx-2703617319" + " " + "google-btn w-100"
      }, __jsx("div", {
        className: "jsx-2703617319" + " " + "wrap-social-login-btn-child"
      }, __jsx("img", {
        src: _icon__WEBPACK_IMPORTED_MODULE_13__["googleLogo"],
        className: "jsx-2703617319"
      }), __jsx("span", {
        className: "jsx-2703617319"
      }, "GOOGLE"))),
      onSuccess: this.responseGoogle,
      onFailure: this.responseGoogle,
      cookiePolicy: 'single_host_origin'
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      xs: 24,
      sm: 24,
      md: 12,
      lg: 12,
      xl: 12
    }, __jsx(react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_6___default.a, {
      appId: facebookId,
      isMobile: false,
      callback: this.responseFacebook,
      render: renderProps => __jsx("button", {
        onClick: renderProps.onClick,
        className: "jsx-2703617319" + " " + "facebook-btn w-100"
      }, __jsx("div", {
        className: "jsx-2703617319" + " " + "wrap-social-login-btn-child"
      }, __jsx("img", {
        src: "/assets/Social Media/Facebook @3x.png",
        className: "jsx-2703617319"
      }), __jsx("span", {
        className: "jsx-2703617319"
      }, "FACEBOOK")))
    })))) : __jsx("div", {
      key: "dealer-login-form",
      className: "jsx-2703617319"
    }, __jsx(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_3__["Form"], {
      layout: "vertical",
      onSubmit: this.handleSubmit
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      gutter: [0, 10],
      className: "fill-parent",
      type: "flex",
      justify: "center",
      align: "middle"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      xs: 24,
      sm: 24,
      md: 24,
      lg: 24,
      xl: 24
    }, __jsx("div", {
      className: "jsx-2703617319" + " " + "width-100 flex-justify-center flex-items-align-center"
    }, __jsx(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
      style: {
        margin: '0px'
      }
    }, getFieldDecorator('username', {
      rules: [{
        required: true,
        message: 'Please input your username!'
      }]
    })(__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      prefix: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        type: "user"
      }),
      placeholder: "Username"
    }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      xs: 24,
      sm: 24,
      md: 24,
      lg: 24,
      xl: 24
    }, __jsx("div", {
      className: "jsx-2703617319" + " " + "width-100 flex-justify-center flex-items-align-center"
    }, __jsx(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
      style: {
        margin: '0px'
      }
    }, getFieldDecorator('password', {
      rules: [{
        required: true,
        message: 'Please input your password!'
      }]
    })(__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "password",
      prefix: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        type: "lock",
        theme: "filled"
      }),
      placeholder: "Password"
    }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      xs: 24,
      sm: 24,
      md: 24,
      lg: 24,
      xl: 24
    }, __jsx("div", {
      className: "jsx-2703617319" + " " + "width-100 flex-justify-center flex-items-align-center"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: "padding-x-xl background-ccar-yellow border-ccar-yellow",
      htmlType: "submit"
    }, "Sign In"))))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
      orientation: "center",
      style: {
        fontWeight: 'normal'
      }
    }, __jsx("div", {
      className: "jsx-2703617319"
    }, __jsx("p", {
      style: {
        marginBottom: 0,
        color: 'rgb(142, 142, 142)'
      },
      className: "jsx-2703617319"
    }, "or"))), __jsx("div", {
      className: "jsx-2703617319" + " " + "wrap-register-link"
    }, this.state.tab == 'socialMediaLogin' ? __jsx("a", {
      style: {
        color: '#ffffff'
      },
      onClick: e => {
        this.setState({
          tab: 'dealerLogin'
        });
      },
      className: "jsx-2703617319"
    }, " Login as Business Owner") : __jsx("a", {
      style: {
        color: '#ffffff'
      },
      onClick: e => {
        this.setState({
          tab: 'socialMediaLogin'
        });
      },
      className: "jsx-2703617319"
    }, " Login as Normal User")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2703617319"
    }, ".ant-modal-content{border-radius:6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYXJhaGVlbi9jY2FyLWNtcy1uZXh0LW1vYmlsZS9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrUzJDLEFBR21DLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvZmFyYWhlZW4vY2Nhci1jbXMtbmV4dC1tb2JpbGUvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTW9kYWwsIElucHV0LCBSb3csIENvbCwgRGl2aWRlciwgQnV0dG9uLCBtZXNzYWdlLCBJY29uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnQGFudC1kZXNpZ24vY29tcGF0aWJsZSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgR29vZ2xlTG9naW4gfSBmcm9tICdyZWFjdC1nb29nbGUtbG9naW4nO1xuaW1wb3J0IEZhY2Vib29rTG9naW4gZnJvbSAncmVhY3QtZmFjZWJvb2stbG9naW4vZGlzdC9mYWNlYm9vay1sb2dpbi1yZW5kZXItcHJvcHMnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyBVc2VyT3V0bGluZWQsIExvY2tGaWxsZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgeyBsb2dpblN1Y2Nlc3NmdWwgfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL3VzZXItYWN0aW9ucyc7XG5pbXBvcnQgeyBsb2FkaW5nLCBsb2dpbk1vZGUgfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL2FwcC1hY3Rpb25zJztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vZmVhdGhlcnMnO1xuaW1wb3J0IHsgZ2V0RmFjZUJvb2tJZCwgZ2V0R29vZ2xlSWQgfSBmcm9tICcuLi8uLi9mdW5jdGlvbkNvbnRlbnQnO1xuaW1wb3J0IHsgbG9naW5CYWNrZ3JvdW5kLCB0YmgxQ255LCB0YmgyQ255LCBjbnlMaW9uSGVhZCwgY255TG9nbywgZ29vZ2xlTG9nbywgdGJoIH0gZnJvbSAnLi4vLi4vaWNvbic7XG5jb25zdCBmYWNlYm9va0lkID0gZ2V0RmFjZUJvb2tJZChjbGllbnQuaW8uaW8udXJpKVxuY29uc3QgZ29vZ2xlQ2xpZW50SWQgPSBnZXRHb29nbGVJZChjbGllbnQuaW8uaW8udXJpKVxuXG5cbmNvbnN0IGxheW91dCA9IHtcbiAgbGFiZWxDb2w6IHtcbiAgICBzcGFuOiA4LFxuICB9LFxuICB3cmFwcGVyQ29sOiB7XG4gICAgc3BhbjogMTYsXG4gIH0sXG59O1xuXG5jb25zdCB0YWlsTGF5b3V0ID0ge1xuICB3cmFwcGVyQ29sOiB7XG4gICAgb2Zmc2V0OiA4LFxuICAgIHNwYW46IDE2LFxuICB9LFxufTtcblxuY2xhc3MgTG9naW5Nb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8vIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoe3N0b3JlfSkge31cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRhYjogJ3NvY2lhbE1lZGlhTG9naW4nLFxuICAgIH1cbiAgfVxuXG4gIHJlc3BvbnNlR29vZ2xlID0gKHJlc3BvbnNlKSA9PiB7XG5cbiAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMucHJvcHMubG9hZGluZyh0cnVlKTtcbiAgICBjbGllbnQuYXV0aGVudGljYXRlKHtcbiAgICAgIHN0cmF0ZWd5OiAnZ29vZ2xlJyxcbiAgICAgIGFjY2Vzc190b2tlbjogcmVzcG9uc2UuYWNjZXNzVG9rZW5cbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmxvYWRpbmcoZmFsc2UpO1xuXG4gICAgICAgIHRoaXMucHJvcHMubG9naW5TdWNjZXNzZnVsKHJlcyk7XG4gICAgICAgIHRoaXMucHJvcHMubG9naW5Nb2RlKGZhbHNlKVxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmxvYWRpbmcoZmFsc2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIC8vIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpXG4gICAgICB9KVxuICB9XG5cbiAgcmVzcG9uc2VGYWNlYm9vayA9IChyZXNwb25zZSkgPT4ge1xuICAgIHRoaXMucHJvcHMubG9hZGluZyh0cnVlKTtcbiAgICBjbGllbnQuYXV0aGVudGljYXRlKHtcbiAgICAgIHN0cmF0ZWd5OiAnZmFjZWJvb2snLFxuICAgICAgYWNjZXNzX3Rva2VuOiByZXNwb25zZS5hY2Nlc3NUb2tlblxuICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIGlmKHJlcy51c2VyLnN0YXR1cz09PSdkaXNhYmxlZCcpe1xuICAgICAgICAgIHRoaXMucHJvcHMubG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgbWVzc2FnZS5lcnJvcignVXNlciBIYXMgQmVlbiBEaXNhYmxlZC4nKVxuICAgICAgICAgIHRoaXMucHJvcHMubG9naW5Nb2RlKGZhbHNlKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5wcm9wcy5sb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dpblN1Y2Nlc3NmdWwocmVzKTtcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dpbk1vZGUoZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmxvYWRpbmcoZmFsc2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIC8vIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UpXG4gICAgICB9KVxuICB9XG5cbiAgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5mb3JtLnZhbGlkYXRlRmllbGRzKChlcnIsIHZhbHVlcykgPT4ge1xuICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5sb2FkaW5nKHRydWUpO1xuICAgICAgICBjbGllbnQuYXV0aGVudGljYXRlKHtcbiAgICAgICAgICBzdHJhdGVneTogJ2xvY2FsJyxcbiAgICAgICAgICB1c2VybmFtZTogdmFsdWVzLnVzZXJuYW1lLFxuICAgICAgICAgIHBhc3N3b3JkOiB2YWx1ZXMucGFzc3dvcmRcbiAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmxvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5sb2dpblN1Y2Nlc3NmdWwocmVzKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMubG9naW5Nb2RlKGZhbHNlKVxuICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmxvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihlcnIubWVzc2FnZSlcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGdldEZpZWxkRGVjb3JhdG9yIH0gPSB0aGlzLnByb3BzLmZvcm1cbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsXG4gICAgICAgIC8vIHRpdGxlPVwiQmFzaWMgTW9kYWxcIlxuICAgICAgICB2aXNpYmxlPXtfLmdldCh0aGlzLnByb3BzLCBbJ2FwcCcsICdsb2dpbk1vZGUnXSl9XG4gICAgICAgIG9uT2s9eygpID0+ICh0aGlzLnJlZkNsaWNrLmNsaWNrKCkpfVxuICAgICAgICBvbkNhbmNlbD17KCkgPT4gdGhpcy5wcm9wcy5sb2dpbk1vZGUoZmFsc2UpfVxuICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6ICcxMDBweCcsIG1hcmdpbkxlZnQ6JzYwcHgnIH19XG4gICAgICAgIGZvb3Rlcj17bnVsbH1cbiAgICAgICAgYm9keVN0eWxlPXt7IHBhZGRpbmc6IDAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwtYm9keS1iYWNrZ3JvdW5kLXRyYW5zcGFyZW50IHJlbGF0aXZlLXdyYXBwZXJcIlxuICAgICAgICBjZW50ZXJlZFxuICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZGRpbmctc20gcm91bmQtYm9yZGVyIHJlbGF0aXZlLXdyYXBwZXJcIiBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2xvZ2luQmFja2dyb3VuZH0pYCxcbiAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJzEwMCUgMTAwJScsXG4gICAgICAgIH19ID5cblxuXG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxuICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2wgeHM9e3sgc3BhbjogNCwgb2Zmc2V0OiAwIH19IHNtPXt7IHNwYW46IDQsIG9mZnNldDogMCB9fSBtZD17eyBzcGFuOiAzLCBvZmZzZXQ6IDQgfX0gbGc9e3sgc3BhbjogMywgb2Zmc2V0OiA0IH19IHhsPXt7IHNwYW46IDMsIG9mZnNldDogNCB9fT5cbiAgICAgICAgICAgICAgICAgIHsvKiA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnYXV0bycsIG1hcmdpblJpZ2h0OiAnYXV0bycsIGRpc3BsYXk6ICdibG9jaycgfX0gY2xhc3NOYW1lPVwiY29sLWNlbnRlcmVkXCIgeHM9ezZ9IHNtPXs2fSBtZD17MjR9IGxnPXsyNH0geGw9ezI0fT4gKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXAtbG9naW4tbG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7bWFyZ2luTGVmdDonNDhweCd9fSBhbHQ9XCJjY2FyXCIgY2xhc3NOYW1lPVwidy0xMDBcIiBzcmM9XCIvYXNzZXRzL0NjYXItbG9nby5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBhbHQ9XCJjY2FyXCIgY2xhc3NOYW1lPVwidy0xMDBcIiBzcmM9e2NueUxvZ299IC8+ICovfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7LyogPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PiAqL31cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsyMH0gc209ezIwfSBtZD17MTZ9IGxnPXsxNn0geGw9ezE2fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcC1sb2dpbi10aXRsZSBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMTVweCcsIHRleHRBbGlnbjonY2VudGVyJywgY29sb3I6JyNmZmZmZmYnfX0+V2VsY29tZSB0byBDQ0FSPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJywgY29sb3I6JyNmZmZmZmYnLCBtYXJnaW5Ub3A6JzMwcHgnLCBsaW5lSGVpZ2h0OjEuNSB9fT57YENvbm5lY3Qgd2l0aCB5b3VyICR7dGhpcy5zdGF0ZS50YWIgPT0gJ3NvY2lhbE1lZGlhTG9naW4nID8gJ3NvY2lhbCBtZWRpYScgOiAnZGVhbGVyIGFjY291bnQnfWB9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZHRoLTEwMCByZWxhdGl2ZS13cmFwcGVyXCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUudGFiID09ICdzb2NpYWxNZWRpYUxvZ2luJyA/XG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJzb2NpYWwtbWVkaWEtbG9naW4tZm9ybVwiIGNsYXNzTmFtZT0nZmlsbC1wYXJlbnQnPlxuICAgICAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9e1syMCwgMjBdfSBjbGFzc05hbWU9J2ZpbGwtcGFyZW50JyB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cIm1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gc209ezI0fSBtZD17MTJ9IGxnPXsxMn0geGw9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICA8R29vZ2xlTG9naW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudElkPXtnb29nbGVDbGllbnRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ9XCJMb2dpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9e3JlbmRlclByb3BzID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjonI2ZmZmZmZid9fSBjbGFzc05hbWU9XCJnb29nbGUtYnRuIHctMTAwXCIgb25DbGljaz17cmVuZGVyUHJvcHMub25DbGlja30gZGlzYWJsZWQ9e3JlbmRlclByb3BzLmRpc2FibGVkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXAtc29jaWFsLWxvZ2luLWJ0bi1jaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dvb2dsZUxvZ299IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5HT09HTEU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzcz17dGhpcy5yZXNwb25zZUdvb2dsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRmFpbHVyZT17dGhpcy5yZXNwb25zZUdvb2dsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb2tpZVBvbGljeT17J3NpbmdsZV9ob3N0X29yaWdpbid9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBzbT17MjR9IG1kPXsxMn0gbGc9ezEyfSB4bD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxGYWNlYm9va0xvZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBJZD17ZmFjZWJvb2tJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTW9iaWxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrPXt0aGlzLnJlc3BvbnNlRmFjZWJvb2t9XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9e3JlbmRlclByb3BzID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmYWNlYm9vay1idG4gdy0xMDBcIiBvbkNsaWNrPXtyZW5kZXJQcm9wcy5vbkNsaWNrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXAtc29jaWFsLWxvZ2luLWJ0bi1jaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL1NvY2lhbCBNZWRpYS9GYWNlYm9vayBAM3gucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkZBQ0VCT09LPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJkZWFsZXItbG9naW4tZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgPEZvcm0gbGF5b3V0PVwidmVydGljYWxcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICA8Um93IGd1dHRlcj17WzAsIDEwXX0gY2xhc3NOYW1lPSdmaWxsLXBhcmVudCcgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ249XCJtaWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gc209ezI0fSBtZD17MjR9IGxnPXsyNH0geGw9ezI0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkdGgtMTAwIGZsZXgtanVzdGlmeS1jZW50ZXIgZmxleC1pdGVtcy1hbGlnbi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBzdHlsZT17eyBtYXJnaW46ICcwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcigndXNlcm5hbWUnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogW3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciB1c2VybmFtZSEnIH1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHByZWZpeD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1c2VyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IHNtPXsyNH0gbWQ9ezI0fSBsZz17MjR9IHhsPXsyNH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZHRoLTEwMCBmbGV4LWp1c3RpZnktY2VudGVyIGZsZXgtaXRlbXMtYWxpZ24tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gc3R5bGU9e3sgbWFyZ2luOiAnMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ3Bhc3N3b3JkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFt7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgcGFzc3dvcmQhJyB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwcmVmaXg9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwibG9ja1wiIHRoZW1lPVwiZmlsbGVkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IHNtPXsyNH0gbWQ9ezI0fSBsZz17MjR9IHhsPXsyNH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZHRoLTEwMCBmbGV4LWp1c3RpZnktY2VudGVyIGZsZXgtaXRlbXMtYWxpZ24tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwicGFkZGluZy14LXhsIGJhY2tncm91bmQtY2Nhci15ZWxsb3cgYm9yZGVyLWNjYXIteWVsbG93XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiA+U2lnbiBJbjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cImNlbnRlclwiIHN0eWxlPXt7Zm9udFdlaWdodDogJ25vcm1hbCd9fT5cbiAgICAgICAgICAgIDxkaXY+PHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwLCBjb2xvcjogJ3JnYigxNDIsIDE0MiwgMTQyKScgfX0+b3I8L3A+PC9kaXY+XG4gICAgICAgICAgPC9EaXZpZGVyPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwLXJlZ2lzdGVyLWxpbmtcIj5cbiAgICAgICAgICAgIHsvKiA8YSBvbkNsaWNrPXsoKSA9PiB7IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvcmVnaXN0ZXInKTsgdGhpcy5wcm9wcy5sb2dpbk1vZGUoZmFsc2UpIH19PlJlZ2lzdGVyIGFzIEJ1c2luZXNzIE93bmVyIDwvYT5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciB0eXBlPVwidmVydGljYWxcIi8+ICovfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRhYiA9PSAnc29jaWFsTWVkaWFMb2dpbicgP1xuICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7Y29sb3I6JyNmZmZmZmYnfX0gb25DbGljaz17KGUpID0+IHsgdGhpcy5zZXRTdGF0ZSh7IHRhYjogJ2RlYWxlckxvZ2luJyB9KSB9fT4gTG9naW4gYXMgQnVzaW5lc3MgT3duZXI8L2E+XG4gICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7Y29sb3I6JyNmZmZmZmYnfX0gb25DbGljaz17KGUpID0+IHsgdGhpcy5zZXRTdGF0ZSh7IHRhYjogJ3NvY2lhbE1lZGlhTG9naW4nIH0pIH19PiBMb2dpbiBhcyBOb3JtYWwgVXNlcjwvYT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogXG4gICAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgICAgIHsuLi5sYXlvdXR9XG4gICAgICAgICAgICAgICAgbmFtZT1cImJhc2ljXCJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICA+XG5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMTBweCcgfX0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGdldEZpZWxkRGVjb3JhdG9yKCdlbWFpbCcsIHtcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFt7IHJlcXVpcmVkOiBmYWxzZSB9XVxuICAgICAgICAgICAgICAgIH0pKFxuICAgICAgICAgICAgICAgICAgPElucHV0Lz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMTBweCcgfX0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGdldEZpZWxkRGVjb3JhdG9yKCdwYXNzd29yZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFt7IHJlcXVpcmVkOiBmYWxzZSB9XVxuICAgICAgICAgICAgICAgIH0pKFxuICAgICAgICAgICAgICAgICAgPElucHV0Lz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIHsuLi50YWlsTGF5b3V0fT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgIGh0bWxUeXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgPC9Gb3JtPiAqL31cblxuICAgICAgICAgIDxzdHlsZSBqc3g9XCJ0cnVlXCIgZ2xvYmFsPVwidHJ1ZVwiPntgXG4gICAgICAgICAgICAgIC5hbnQtbW9kYWwtY29udGVudCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuXG5cbiAgICAgICAgICB7LyogPGltZyBzcmM9e3RiaENueX0gc3R5bGU9e3sgd2lkdGg6IDI4MywgaGVpZ2h0OiA0MDAscG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6IC0xMTUsIGJvdHRvbTogLTMwLCBtYXJnaW4gOiAnYXV0bycgfX0+PC9pbWc+ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUtd3JhcHBlclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e3RiaH0gc3R5bGU9e3sgd2lkdGg6IDE2NiwgaGVpZ2h0OiAzMzAsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAtMTAyLCBib3R0b206IC02LCBtYXJnaW4gOiAnYXV0bycgfX0+PC9pbWc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIDxpbWcgc3JjPXt0YmgyQ255fSBzdHlsZT17eyB3aWR0aDogMTUwLCBoZWlnaHQ6IDEwMCxwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogLTE1LCBib3R0b206IDgsIG1hcmdpbiA6ICdhdXRvJyB9fT48L2ltZz4gKi99XG4gICAgICAgICAgey8qIDxpbWcgc3JjPXtjbnlMaW9uSGVhZH0gc3R5bGU9e3sgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxNTAsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogLTMwLCB0b3A6IC05NSB9fT48L2ltZz4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGFwcDogc3RhdGUuYXBwXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBsb2FkaW5nOiBsb2FkaW5nLFxuICBsb2dpbk1vZGU6IGxvZ2luTW9kZSxcbiAgbG9naW5TdWNjZXNzZnVsOiBsb2dpblN1Y2Nlc3NmdWwsXG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRm9ybS5jcmVhdGUoKShMb2dpbk1vZGFsKSk7XG4iXX0= */\n/*@ sourceURL=/Users/faraheen/ccar-cms-next-mobile/components/login/login.jsx */"), __jsx("div", {
      className: "jsx-2703617319" + " " + "relative-wrapper"
    }, __jsx("img", {
      src: _icon__WEBPACK_IMPORTED_MODULE_13__["tbh"],
      style: {
        width: 166,
        height: 330,
        position: 'absolute',
        left: -102,
        bottom: -6,
        margin: 'auto'
      },
      className: "jsx-2703617319"
    }))));
  }

}

const mapStateToProps = state => ({
  app: state.app
});

const mapDispatchToProps = {
  loading: _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_10__["loading"],
  loginMode: _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_10__["loginMode"],
  loginSuccessful: _redux_actions_user_actions__WEBPACK_IMPORTED_MODULE_9__["loginSuccessful"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_3__["Form"].create()(LoginModal)));

/***/ }),

/***/ "./components/news/social-new-tabs.jsx":
/*!*********************************************!*\
  !*** ./components/news/social-new-tabs.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _feathers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../feathers */ "./feathers.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ant_design_compatible__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/compatible */ "@ant-design/compatible");
/* harmony import */ var _ant_design_compatible__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common-function */ "./common-function.js");
/* harmony import */ var _general_Loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../general/Loading */ "./components/general/Loading.jsx");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../icon */ "./icon.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const opts = {
  height: '390',
  width: '640',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0
  }
};
const AUTHORSIZE = 10;

const SocialNewTabs = props => {
  const {
    0: activeKey,
    1: setActiveKey
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null);
  const {
    0: newslist,
    1: setNewslist
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]);
  const {
    0: newsLoading,
    1: setNewsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const {
    0: authorList,
    1: setAuthorList
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]);
  const {
    0: authorLoading,
    1: setAuthorLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const {
    0: selectedAuthor,
    1: setSelectedAuthor
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null);
  const {
    0: filterGroup,
    1: setFilterGroup
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    authorId: null,
    language: null
  });
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    getAuthorList();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    getNewslist();
  }, [filterGroup, authorList]);

  function getAuthorList() {
    let match = {
      publisher: {
        $ne: 'youtube'
      }
    };

    if (props.isNewCar) {
      match.carYear = moment__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY');

      if (Object(_common_function__WEBPACK_IMPORTED_MODULE_10__["notEmptyLength"])(props.data)) {
        let data = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.compact([lodash__WEBPACK_IMPORTED_MODULE_2___default.a.toLower(props.data.model)]);

        if (Object(_common_function__WEBPACK_IMPORTED_MODULE_10__["notEmptyLength"])(data)) {
          match.keywords = {
            $in: data
          };
        }
      }
    }

    setAuthorLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_feathers__WEBPACK_IMPORTED_MODULE_6__["default"].io.io.uri}getAuthorList`, {
      params: {
        limit: AUTHORSIZE,
        $match: match
      }
    }).then(res => {
      //Wait for render done just unloading
      setTimeout(() => {
        setAuthorLoading(false);
      }, 500);

      if (Object(_common_function__WEBPACK_IMPORTED_MODULE_10__["notEmptyLength"])(res.data.data)) {
        setAuthorList(res.data.data);
      } else {
        setAuthorList([]);
      }
    }).catch(err => {
      setAuthorLoading(false); // message.error(err.message)
    });
  }

  function getNewslist(key) {
    let query = {
      $sort: {
        publishedAt: -1
      },
      $limit: 5,
      $populate: ['authorId'],
      publisher: {
        $ne: 'youtube'
      }
    };

    if (props.isNewCar) {
      query.carYear = moment__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY');

      if (Object(_common_function__WEBPACK_IMPORTED_MODULE_10__["notEmptyLength"])(props.data)) {
        let temp = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.compact([props.data.model]);

        if (Object(_common_function__WEBPACK_IMPORTED_MODULE_10__["notEmptyLength"])(temp)) {
          temp = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(temp, function (item) {
            return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.toLower(item);
          });
          query.keywords = {
            $in: temp
          };
        }
      }
    }

    if (filterGroup.authorId != null && filterGroup.authorId != "") {
      query.authorId = filterGroup.authorId;
    } else {
      delete query['authorId'];
    }

    if (filterGroup.language != null && filterGroup.language != "" && filterGroup.language != "all") {
      query.language = filterGroup.language;
      setActiveKey(filterGroup.language);
    } else {
      delete query['language'];

      if (languageCount() > 1) {
        setActiveKey(null);
      } else {
        let langs = [];

        lodash__WEBPACK_IMPORTED_MODULE_2___default.a.forEach(authorList, function (item) {
          langs = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.union(langs, item.language);
        });

        setActiveKey(langs ? langs[0] : null);
      }
    }

    setNewsLoading(true);
    _feathers__WEBPACK_IMPORTED_MODULE_6__["default"].service('news').find({
      query: query
    }).then(res => {
      //Wait for render done just unloading
      setTimeout(() => {
        setNewsLoading(false);
      }, 500);

      if (res.data.length > 0) {
        setNewslist(res.data);
      } else {
        setNewslist([]);
      }
    }).catch(err => {
      setNewsLoading(false); // message.error(err.message)
    });
  }

  function isSelectedAuthor(author, selectedAuthor) {
    if (author == null && selectedAuthor == null) {
      return true;
    } else if (Object(_common_function__WEBPACK_IMPORTED_MODULE_10__["notEmptyLength"])(author) && Object(_common_function__WEBPACK_IMPORTED_MODULE_10__["notEmptyLength"])(selectedAuthor)) {
      return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEqual(author, selectedAuthor);
    } else {
      return false;
    }
  }

  function languageExisted(lang) {
    if (lang != null) {
      if (Object(_common_function__WEBPACK_IMPORTED_MODULE_10__["notEmptyLength"])(selectedAuthor)) {
        return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.includes(selectedAuthor.language, lang);
      } else {
        let langs = [];

        lodash__WEBPACK_IMPORTED_MODULE_2___default.a.forEach(authorList, function (item) {
          langs = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.union(langs, item.language);
        });

        return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.includes(langs, lang);
      }
    } else {
      return false;
    }
  }

  function languageCount(author) {
    let langs = [];

    if (Object(_common_function__WEBPACK_IMPORTED_MODULE_10__["notEmptyLength"])(author)) {
      return Object(_common_function__WEBPACK_IMPORTED_MODULE_10__["notEmptyLength"])(author.language) ? author.language.length : 0;
    } else {
      lodash__WEBPACK_IMPORTED_MODULE_2___default.a.forEach(authorList, function (item) {
        langs = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.union(langs, item.language);
      });
    }

    return langs.length;
  }

  const _renderAuthorList = data => {
    if (Object(_common_function__WEBPACK_IMPORTED_MODULE_10__["notEmptyLength"])(data)) {
      let allIconHtml = __jsx("div", {
        key: "authorList",
        className: !isSelectedAuthor(null, selectedAuthor) ? "padding-md flex-justify-center flex-items-align-center" : "padding-md flex-justify-center flex-items-align-center border-selected-yellow thin-border"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Tooltip"], {
        title: "All",
        placement: "right"
      }, __jsx("a", {
        onClick: () => {
          setFilterGroup(_objectSpread(_objectSpread({}, filterGroup), {}, {
            authorId: null,
            language: null
          }));
          setSelectedAuthor(null);
        }
      }, __jsx("span", {
        className: "d-inline-block avatar background-grey-lighten-2 overflow-hidden relative-wrapper",
        style: {
          width: 50,
          height: 50
        }
      }, __jsx("img", {
        src: _icon__WEBPACK_IMPORTED_MODULE_13__["allIcon"],
        className: "width-50 height-50 absolute-center"
      })))));

      let list = data.map(function (item, i) {
        return __jsx("div", {
          key: 'alistData' + i,
          className: !isSelectedAuthor(item, selectedAuthor) ? "padding-md flex-justify-center flex-items-align-center" : "padding-md flex-justify-center flex-items-align-center border-selected-yellow thin-border"
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Tooltip"], {
          title: item.name ? item.name : null,
          placement: "right"
        }, __jsx("a", {
          onClick: () => {
            setFilterGroup(_objectSpread(_objectSpread({}, filterGroup), {}, {
              authorId: item._id,
              language: languageCount(item) > 1 ? null : item.language[0]
            }));
            setSelectedAuthor(item);
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
          size: 50,
          src: item.thumbnailUrl ? item.thumbnailUrl : null,
          icon: item.thumbnailUrl ? null : 'user'
        }))));
      });
      list.unshift(allIconHtml);
      return __jsx(_general_Loading__WEBPACK_IMPORTED_MODULE_11__["default"], {
        spinning: authorLoading
      }, list);
    } else {
      return null;
    }
  };

  const renderContent = data => {
    switch (data.language) {
      case "en":
        return data.content ? data.content : null;

      case "cn":
        return data.content ? data.content2 : null;

      case 'my':
        return data.content3 ? data.content3 : null;

      default:
        break;
    }
  };

  const _renderNewsList = data => {
    if (Object(_common_function__WEBPACK_IMPORTED_MODULE_10__["notEmptyLength"])(data)) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
        gutter: [10, 10]
      }, __jsx("div", {
        key: "newsList",
        className: "d-flex scroller-type",
        style: {
          overflow: 'scroll'
        }
      }, data.map(function (item, i) {
        return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
          key: item._id,
          xs: 18,
          sm: 18,
          md: 18,
          lg: 18,
          xl: 18
        }, __jsx("div", {
          className: "box-shadow-thin round-border wrap",
          style: {
            height: '300px'
          }
        }, __jsx("a", {
          style: {
            color: '#000000'
          },
          href: item.originalUrl
        }, __jsx("div", {
          className: "inews"
        }, __jsx("img", {
          src: item.thumbnailUrl,
          style: {
            width: "100%",
            height: '150px'
          }
        })), __jsx("div", {
          className: "ftitle"
        }, __jsx("h4", null, item.title), __jsx("p", null, renderContent(item)), __jsx("span", {
          style: {
            textTransform: 'capitalize'
          }
        }, item.authorId ? item.authorId.name : null, " | ", moment__WEBPACK_IMPORTED_MODULE_3___default()(item.publishedAt).format('DD-MM-YYYY'))))));
      })));
    } else {
      return null;
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("div", {
    className: "padding-x-xs",
    style: {
      touchAction: 'pan-y'
    }
  }, _renderNewsList(newslist)));
};

const mapStateToProps = state => ({
  app: state.app,
  newCars: state.newCars
});

const mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_9__["Form"].create()(Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(SocialNewTabs))));

/***/ }),

/***/ "./components/news/social-video-tabs.jsx":
/*!***********************************************!*\
  !*** ./components/news/social-video-tabs.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-youtube */ "react-youtube");
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_youtube__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common-function */ "./common-function.js");
/* harmony import */ var _feathers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../feathers */ "./feathers.js");
/* harmony import */ var _ant_design_compatible__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/compatible */ "@ant-design/compatible");
/* harmony import */ var _ant_design_compatible__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _general_Loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../general/Loading */ "./components/general/Loading.jsx");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../icon */ "./icon.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const opts = {
  height: '390',
  width: '640',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0
  }
};
const VIDEOSIZE = 6;
const AUTHORSIZE = 10;

const SocialVideoTabs = props => {
  const {
    0: activeKey,
    1: setActiveKey
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null);
  const {
    0: videolist,
    1: setVideolist
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]);
  const {
    0: videoLoading,
    1: setVideoLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const {
    0: authorList,
    1: setAuthorList
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]);
  const {
    0: authorLoading,
    1: setAuthorLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const {
    0: selectedAuthor,
    1: setSelectedAuthor
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null);
  const {
    0: filterGroup,
    1: setFilterGroup
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    authorId: null,
    language: null
  });
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    getAuthorList();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    getVideolist();
  }, [filterGroup, authorList]);

  function getAuthorList() {
    let match = {
      publisher: 'youtube'
    };

    if (props.isNewCar) {
      match.carYear = moment__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY');

      if (Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["notEmptyLength"])(props.data)) {
        let data = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.compact([lodash__WEBPACK_IMPORTED_MODULE_2___default.a.toLower(props.data.model)]);

        if (Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["notEmptyLength"])(data)) {
          match.keywords = {
            $in: data
          };
        }
      }
    }

    setAuthorLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_feathers__WEBPACK_IMPORTED_MODULE_8__["default"].io.io.uri}getAuthorList`, {
      params: {
        limit: AUTHORSIZE,
        $match: match
      }
    }).then(res => {
      //Wait for render done just unloading
      setTimeout(() => {
        setAuthorLoading(false);
      }, 500);

      if (Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["notEmptyLength"])(res.data.data)) {
        setAuthorList(res.data.data);
      } else {
        setAuthorList([]);
      }
    }).catch(err => {
      setAuthorLoading(false); // message.error(err.message)
    });
  }

  function getVideolist(key) {
    let query = {
      $sort: {
        publishedAt: -1
      },
      $limit: VIDEOSIZE,
      $populate: ['authorId'],
      publisher: 'youtube'
    };

    if (props.isNewCar) {
      query.carYear = moment__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY');

      if (Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["notEmptyLength"])(props.data)) {
        let temp = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.compact([props.data.model]);

        if (Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["notEmptyLength"])(temp)) {
          temp = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(temp, function (item) {
            return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.toLower(item);
          });
          query.keywords = {
            $in: temp
          };
        }
      }
    }

    if (filterGroup.authorId != null && filterGroup.authorId != "") {
      query.authorId = filterGroup.authorId;
    } else {
      delete query['authorId'];
    }

    if (filterGroup.language != null && filterGroup.language != "" && filterGroup.language != "all") {
      query.language = filterGroup.language;
      setActiveKey(filterGroup.language);
    } else {
      delete query['language'];

      if (languageCount() > 1) {
        setActiveKey(null);
      } else {
        let langs = [];

        lodash__WEBPACK_IMPORTED_MODULE_2___default.a.forEach(authorList, function (item) {
          langs = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.union(langs, item.language);
        });

        setActiveKey(Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["notEmptyLength"])(langs) ? langs[0] : null);
      }
    }

    if (query.language) {
      if (query.language === 'all') {
        delete query.language;
      }
    }

    setVideoLoading(true);
    _feathers__WEBPACK_IMPORTED_MODULE_8__["default"].service('news').find({
      query: query
    }).then(res => {
      //Wait for render done just unloading
      setTimeout(() => {
        setVideoLoading(false);
      }, 500);

      if (res.data.length > 0) {
        setVideolist(res.data);
      } else {
        setVideolist([]);
      }
    }).catch(err => {
      setVideoLoading(false); // message.error(err.message)
    });
  }

  function isSelectedAuthor(author, selectedAuthor) {
    if (author == null && selectedAuthor == null) {
      return true;
    } else if (Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["notEmptyLength"])(author) && Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["notEmptyLength"])(selectedAuthor)) {
      return author._id == selectedAuthor._id;
    } else {
      return false;
    }
  }

  function languageExisted(lang) {
    if (lang != null) {
      if (Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["notEmptyLength"])(selectedAuthor)) {
        return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.includes(selectedAuthor.language, lang);
      } else {
        let langs = [];

        lodash__WEBPACK_IMPORTED_MODULE_2___default.a.forEach(authorList, function (item) {
          langs = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.union(langs, item.language);
        });

        return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.includes(langs, lang);
      }
    } else {
      return false;
    }
  }

  function languageCount(author) {
    let langs = [];

    if (Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["notEmptyLength"])(author)) {
      return Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["notEmptyLength"])(author.language) ? author.language.length : 0;
    } else {
      lodash__WEBPACK_IMPORTED_MODULE_2___default.a.forEach(authorList, function (item) {
        langs = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.union(langs, item.language);
      });
    }

    return langs.length;
  }

  const _renderAuthorList = data => {
    if (Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["notEmptyLength"])(data)) {
      let allIconHtml = __jsx("div", {
        key: "authorList",
        className: !isSelectedAuthor(null, selectedAuthor) ? "padding-md flex-justify-center flex-items-align-center" : "padding-md flex-justify-center flex-items-align-center border-selected-yellow thin-border"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Tooltip"], {
        title: "All",
        placement: "right"
      }, __jsx("a", {
        onClick: () => {
          setFilterGroup(_objectSpread(_objectSpread({}, filterGroup), {}, {
            authorId: null,
            language: null
          }));
          setSelectedAuthor(null);
        }
      }, __jsx("span", {
        className: "d-inline-block avatar background-grey-lighten-2 overflow-hidden relative-wrapper",
        style: {
          width: 50,
          height: 50
        }
      }, __jsx("img", {
        src: _icon__WEBPACK_IMPORTED_MODULE_13__["allIcon"],
        className: "width-50 height-50 absolute-center"
      })))));

      let list = data.map(function (item, i) {
        return __jsx("div", {
          key: 'authorList' + i,
          className: !isSelectedAuthor(item, selectedAuthor) ? "padding-md flex-justify-center flex-items-align-center" : "padding-md flex-justify-center flex-items-align-center border-selected-yellow thin-border"
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Tooltip"], {
          title: item.name ? item.name : null,
          placement: "right"
        }, __jsx("a", {
          onClick: () => {
            setFilterGroup(_objectSpread(_objectSpread({}, filterGroup), {}, {
              authorId: item._id,
              language: languageCount(item) > 1 ? null : item.language[0]
            }));
            setSelectedAuthor(item);
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
          size: 50,
          src: item.thumbnailUrl ? item.thumbnailUrl : null,
          icon: item.thumbnailUrl ? null : 'user'
        }))));
      });
      list.unshift(allIconHtml);
      return __jsx(_general_Loading__WEBPACK_IMPORTED_MODULE_12__["default"], {
        spinning: authorLoading
      }, list);
    } else {
      return null;
    }
  };

  const _renderVideoList = (data, language) => {
    if (Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["notEmptyLength"])(data)) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
        gutter: [10, 10]
      }, __jsx("div", {
        key: language,
        className: "d-flex scroller-type",
        style: {
          overflow: 'scroll'
        }
      }, data.map(function (item, i) {
        return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
          key: item._id,
          xs: 18,
          sm: 18,
          md: 18,
          lg: 18,
          xl: 18
        }, __jsx("div", {
          className: "wrap box-shadow-thin round-border",
          style: {
            height: '250px',
            width: '100%'
          }
        }, __jsx("div", {
          className: "video"
        }, __jsx(react_youtube__WEBPACK_IMPORTED_MODULE_6___default.a, {
          videoId: item.youtubeId,
          opts: opts
        })), __jsx("div", {
          className: "flex-items-align-start"
        }, __jsx("span", null, __jsx("div", {
          className: "icon"
        }, __jsx("img", {
          src: item.channelThumbnailUrl
        }))), __jsx("span", null, __jsx("div", {
          className: "title"
        }, __jsx("div", {
          className: "text-truncate-twoline margin-bottom-sm font-weight-bold"
        }, item.title), __jsx("span", {
          style: {
            fontSize: '12px'
          }
        }, item.authorId ? item.authorId.name : null, " | ", Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(item.publishedAt, "DD-MM-YYYY")))))));
      })));
    } else {
      return null;
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("div", {
    className: "padding-x-xs",
    style: {
      touchAction: 'pan-y'
    }
  }, _renderVideoList(videolist)));
};

const mapStateToProps = state => ({
  app: state.app,
  newCars: state.newCars
});

const mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_9__["Form"].create()(Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(SocialVideoTabs))));

/***/ }),

/***/ "./components/product-list/brand-list.jsx":
/*!************************************************!*\
  !*** ./components/product-list/brand-list.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common-function */ "./common-function.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icon */ "./icon.js");
/* harmony import */ var _params_carBrandsList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../params/carBrandsList */ "./params/carBrandsList.js");
/* harmony import */ var _params_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../params/common */ "./params/common.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const BrandList = props => {
  const {
    0: brands,
    1: setBrands
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(_params_carBrandsList__WEBPACK_IMPORTED_MODULE_7__["carBrandsList"]);
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const {
    0: limit,
    1: setLimit
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(-1);
  const {
    0: tooltipVisible,
    1: setTooltipVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    let limit = props.limit;

    if (Object(_common_function__WEBPACK_IMPORTED_MODULE_5__["isValidNumber"])(parseInt(props.limit))) {
      limit = parseInt(props.limit);
    } else {
      limit = -1;
    }

    if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isArray(props.data) && !lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEmpty(props.data)) {
      let brands = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.compact(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(props.data, function (brand) {
        let selectedBrand;

        if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isPlainObject(brand) && lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(brand, ['value'])) {
          selectedBrand = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(_params_carBrandsList__WEBPACK_IMPORTED_MODULE_7__["carBrandsList"], function (origBrand) {
            return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.toLower(origBrand.value) == lodash__WEBPACK_IMPORTED_MODULE_1___default.a.toLower(brand.value);
          });
        } else {
          selectedBrand = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(_params_carBrandsList__WEBPACK_IMPORTED_MODULE_7__["carBrandsList"], function (origBrand) {
            return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.toLower(origBrand.value) == lodash__WEBPACK_IMPORTED_MODULE_1___default.a.toLower(brand);
          });
        }

        return selectedBrand;
      }));

      setBrands(limit != -1 ? lodash__WEBPACK_IMPORTED_MODULE_1___default.a.slice(brands, 0, limit) : brands);
    } else {
      setBrands([]); // setBrands(limit != -1 ? _.sampleSize(carBrandsList, limit) : _.sampleSize(carBrandsList, arrayLengthCount(carBrandsList)));
    }
  }, [props.data]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isString(props.value)) {
      let selectedBrand = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(_params_carBrandsList__WEBPACK_IMPORTED_MODULE_7__["carBrandsList"], function (origBrand) {
        return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.toLower(origBrand.value) == lodash__WEBPACK_IMPORTED_MODULE_1___default.a.toLower(props.value);
      });

      setValue(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(selectedBrand, `value`) || undefined);
    } else {
      setValue(undefined);
    }
  }, [props.value]);
  return __jsx("div", {
    className: `width-100 ${props.className || ''}`,
    style: _objectSpread({}, props.style)
  }, __jsx("div", null, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isArray(brands) && !lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEmpty(brands) ? __jsx("div", {
    className: "padding-sm"
  }, props.showAllIcon === true ? __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Tooltip"], {
    title: `All Brands`,
    visible: props.showTooltip === true ? lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(tooltipVisible, ['allIcon']) : false,
    onVisibleChange: v => {
      setTooltipVisible(_objectSpread(_objectSpread({}, tooltipVisible), {}, {
        allIcon: v
      }));
    }
  }, __jsx("div", {
    key: 'all-brand',
    className: `margin-sm background-grey-lighten-2 avatar relative-wrapper flex-items-no-shrink cursor-pointer`,
    style: {
      width: props.size || 50,
      height: props.size || 50
    },
    onClick: () => {
      if (props.onClickBrand) {
        props.onClickBrand({
          value: 'all'
        });
      }
    }
  }, __jsx("img", {
    src: _icon__WEBPACK_IMPORTED_MODULE_6__["allIcon"],
    style: {
      width: (props.size || 50) * 0.5,
      height: (props.size || 50) * 0.5
    },
    className: "absolute-center"
  }))) : null, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(brands, function (brand, i) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Tooltip"], {
      title: `${brand.value}`,
      visible: props.showTooltip === true ? lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(tooltipVisible, [brand.value]) : false,
      onVisibleChange: v => {
        setTooltipVisible(_objectSpread(_objectSpread({}, tooltipVisible), {}, {
          [brand.value || '']: v
        }));
      }
    }, __jsx("div", {
      key: 'brand' + i,
      className: `relative-wrapper flex-items-no-shrink cursor-pointer margin-sm ${value == brand.value ? props.selectedClassName || 'border-yellow avatar' : ''}`,
      style: {
        width: props.size || 50,
        height: props.size || 50
      },
      onClick: () => {
        if (props.onClickBrand) {
          props.onClickBrand(brand);
        }

        setValue(brand.value);
      }
    }, __jsx("img", {
      src: brand.icon || _params_common__WEBPACK_IMPORTED_MODULE_8__["emptyIcon"],
      className: " absolute-center-img-no-stretch"
    })));
  })) : props.emptyView != undefined || props.emptyView === null ? props.emptyView : __jsx("div", {
    className: "flex-justify-center flex-items-align-center padding-md"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Empty"], null))));
};

const mapStateToProps = state => ({
  app: state.app,
  user: state.user,
  productsList: state.productsList
});

const mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(BrandList));

/***/ }),

/***/ "./components/product-list/grid-product-list.jsx":
/*!*******************************************************!*\
  !*** ./components/product-list/grid-product-list.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _params_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../params/common */ "./params/common.js");
/* harmony import */ var _params_stateList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../params/stateList */ "./params/stateList.js");
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common-function */ "./common-function.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ant_design_compatible__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/compatible */ "@ant-design/compatible");
/* harmony import */ var _ant_design_compatible__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/app-actions */ "./redux/actions/app-actions.js");
/* harmony import */ var _functionContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../functionContent */ "./functionContent.js");
/* harmony import */ var _general_add_compare_product_button1__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../general/add-compare-product-button1 */ "./components/general/add-compare-product-button1.jsx");
/* harmony import */ var _general_car_360_view_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../general/car-360-view-button */ "./components/general/car-360-view-button.jsx");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../icon */ "./icon.js");
/* harmony import */ var _general_Loading__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../general/Loading */ "./components/general/Loading.jsx");
/* harmony import */ var _general_whatapps_button1__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../general/whatapps-button1 */ "./components/general/whatapps-button1.jsx");
/* harmony import */ var _general_contactList1__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../general/contactList1 */ "./components/general/contactList1.jsx");
/* harmony import */ var _general_registerCard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../general/registerCard */ "./components/general/registerCard.jsx");
/* harmony import */ var _general_calculator_modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../general/calculator-modal */ "./components/general/calculator-modal.jsx");
/* harmony import */ var _skeleton_loader_GridProductSkeleton__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../skeleton-loader/GridProductSkeleton */ "./components/skeleton-loader/GridProductSkeleton.jsx");
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../route */ "./route.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;























const currentDateTime = moment__WEBPACK_IMPORTED_MODULE_2___default()().format();

const GridProductList = props => {
  const {
    0: productList,
    1: setProductList
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]);
  const {
    0: initLoading,
    1: setInitLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    // processAddonProduct()
    processAddonProduct();
    var interval2 = setInterval(() => {
      processAddonProduct();
    }, 60000);
    return () => clearInterval(interval2);
  }, [props.data]);

  function processAddonProduct() {
    let currentDateTime = moment__WEBPACK_IMPORTED_MODULE_2___default()().format();

    if (Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["notEmptyLength"])(props.data)) {
      if (props.data != productList) {
        setProductList([]);

        let inputDataList = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.cloneDeep(props.data);

        inputDataList.map(function (v) {
          v.addonSpotlight = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(v.addon, {
            'addonType': 'spotlight'
          });
          v.addonSpicydeal = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(v.addon, {
            'addonType': 'spicydeal'
          });
          v.addonKingadType = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(v.addon, {
            'addonType': 'kingad',
            'showPrice': 'show'
          });
          v.addonKingadType2 = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(v.addon, {
            'addonType': 'kingad',
            'showPrice': 'hide'
          });
          v.addonKingadType3 = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(v.addon, {
            'addonType': 'kingad',
            'showPrice': 'highlight'
          });
          let priority = '';
          v.priority = '';

          if (priority === '') {
            if (v.addonKingadType) {
              if (currentDateTime > moment__WEBPACK_IMPORTED_MODULE_2___default()(v.addonKingadType.startDate).format() && currentDateTime < moment__WEBPACK_IMPORTED_MODULE_2___default()(v.addonKingadType.endDate).format()) {
                priority = 'addonKingadType';
                v.priority = 'addonKingadType';
                v.addonKingadType.endDate = moment__WEBPACK_IMPORTED_MODULE_2___default()(v.addonKingadType.endDate).format();
                v.addonKingadType.startDate = moment__WEBPACK_IMPORTED_MODULE_2___default()(v.addonKingadType.startDate).format();
              }
            }
          }

          if (priority === '') {
            if (v.addonKingadType2) {
              if (currentDateTime > moment__WEBPACK_IMPORTED_MODULE_2___default()(v.addonKingadType2.startDate).format() && currentDateTime < moment__WEBPACK_IMPORTED_MODULE_2___default()(v.addonKingadType2.endDate).format()) {
                priority = 'addonKingadType2';
                v.priority = 'addonKingadType2';
                v.addonKingadType2.startDate = moment__WEBPACK_IMPORTED_MODULE_2___default()(v.addonKingadType2.startDate).format();
                v.addonKingadType2.endDate = moment__WEBPACK_IMPORTED_MODULE_2___default()(v.addonKingadType2.endDate).format();
              }
            }
          }

          if (priority === '') {
            if (v.addonKingadType3) {
              if (currentDateTime > moment__WEBPACK_IMPORTED_MODULE_2___default()(v.addonKingadType3.startDate).format() && currentDateTime < moment__WEBPACK_IMPORTED_MODULE_2___default()(v.addonKingadType3.endDate).format()) {
                priority = 'addonKingadType3';
                v.priority = 'addonKingadType3';
                v.addonKingadType3.startDate = moment__WEBPACK_IMPORTED_MODULE_2___default()(v.addonKingadType3.startDate).format();
                v.addonKingadType3.endDate = moment__WEBPACK_IMPORTED_MODULE_2___default()(v.addonKingadType3.endDate).format();
              }
            }
          }

          if (priority === '') {
            if (v.addonSpicydeal) {
              if (currentDateTime > moment__WEBPACK_IMPORTED_MODULE_2___default()(v.addonSpicydeal.startDate).format() && currentDateTime < moment__WEBPACK_IMPORTED_MODULE_2___default()(v.addonSpicydeal.endDate).format()) {
                priority = 'addonSpicydeal';
                v.priority = 'addonSpicydeal';
                v.addonSpicydeal.startDate = moment__WEBPACK_IMPORTED_MODULE_2___default()(v.addonSpicydeal.startDate).format();
                v.addonSpicydeal.endDate = moment__WEBPACK_IMPORTED_MODULE_2___default()(v.addonSpicydeal.endDate).format();
              }
            }
          }

          if (priority === '') {
            if (v.addonSpotlight) {
              if (currentDateTime > moment__WEBPACK_IMPORTED_MODULE_2___default()(v.addonSpotlight.startDate).format() && currentDateTime < moment__WEBPACK_IMPORTED_MODULE_2___default()(v.addonSpotlight.endDate).format()) {
                priority = 'addonSpotlight';
                v.priority = 'addonSpotlight';
                v.addonSpotlight.startDate = moment__WEBPACK_IMPORTED_MODULE_2___default()(v.addonSpotlight.startDate).format();
                v.addonSpotlight.endDate = moment__WEBPACK_IMPORTED_MODULE_2___default()(v.addonSpotlight.endDate).format();
              }
            }
          }

          return v;
        });
        setProductList(inputDataList);
      }
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    setInitLoading(props.productsList.productListLoading);
  }, [props.productsList.productListLoading]);

  const _renderState = v => {
    let value = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(v, ['companys', 'state']);

    let value2 = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(v, ['createdBy', 'userstate']);

    if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEmpty(value2) === false) {
      value = value2;
    }

    return __jsx("div", {
      className: "width-20 relative-wrapper gridStateFloatRight",
      style: {
        width: '15%',
        height: '10%'
      }
    }, __jsx("img", {
      src: Object(_params_stateList__WEBPACK_IMPORTED_MODULE_6__["getStateIcon"])(value) || _params_common__WEBPACK_IMPORTED_MODULE_5__["imageNotFoundIcon"],
      className: "fill-parent absolute-center",
      style: {
        marginTop: '0px'
      }
    }));
  };

  const _renderCondition = v => {
    let value = v.condition.toUpperCase();

    if (v.condition == 'new') {
      return __jsx("div", {
        className: "wrap-condition wrap-condition-new"
      }, __jsx("p", null, value));
    } else if (v.condition == 'used') {
      return __jsx("div", {
        className: "wrap-condition wrap-condition-used"
      }, __jsx("p", null, value));
    } else if (v.condition == 'recon') {
      return __jsx("div", {
        className: "wrap-condition wrap-condition-recon"
      }, __jsx("p", null, value));
    } else {
      return __jsx("div", {
        className: "wrap-condition wrap-condition-default"
      }, __jsx("p", null, value));
    }
  };

  const formatCountdown = (value, fixedPoint) => {
    if (value != null) {
      if (isNaN(parseFloat(value))) {
        return value;
      } else {
        value = value.toString().split('.');

        if (value[0]) {
          if (value[0].length > fixedPoint) {
            value[0] = value[0].slice(value[0].length - fixedPoint);
          }

          if (value[0].length < fixedPoint) {
            lodash__WEBPACK_IMPORTED_MODULE_1___default.a.forEach(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.range(fixedPoint - value[0].length), function () {
              value[0] = '0' + value[0];
            });
          }

          return value[0];
        }

        return value;
      }
    } else {
      return value;
    }
  };

  const _renderLayout = v => {
    if (!v.priority) {
      return 'wrap-product-ads';
    }

    if (v.priority === 'addonSpotlight' || v.priority === 'addonKingadType3') {
      return 'wrap-product-ads-spotlight';
    } else if (v.priority === 'addonSpicydeal' || v.priority === 'addonKingadType' || v.priority === 'addonKingadType2') {
      return 'wrap-product-ads-spicydeal';
    } else {
      return 'wrap-product-ads';
    }
  };

  const _renderPrice = v => {
    let normalPrice = __jsx("div", {
      className: "wrap-product-ads-price"
    }, __jsx("h4", null, "RM ", Object(_functionContent__WEBPACK_IMPORTED_MODULE_12__["formatMoney"])(v.price.toString())), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
      xs: 14,
      sm: 14,
      md: 16,
      lg: 16,
      xl: 16
    }, __jsx("span", {
      className: "installmentPrice"
    }, "RM ", Object(_functionContent__WEBPACK_IMPORTED_MODULE_12__["formatMoney"])(Object(_functionContent__WEBPACK_IMPORTED_MODULE_12__["calMonth"])(v.price).toString()), "/month"))));

    function renderShowPrice(price, discountedPrice) {
      const pattern = /\.(\d*?)0+(\D*)$/gm;
      return __jsx("div", {
        className: "wrap-product-ads-price"
      }, __jsx("div", {
        style: {
          display: 'inline-block',
          width: '49%'
        }
      }, __jsx("p", {
        style: {
          fontWeight: '700'
        },
        className: "gridMoneyText"
      }, " RM ", Object(_functionContent__WEBPACK_IMPORTED_MODULE_12__["formatMoney"])(price.toString())), __jsx("p", {
        style: {
          fontWeight: '700'
        },
        className: "gridMoneyText",
        style: {
          color: '#395589'
        }
      }, "RM ", Object(_functionContent__WEBPACK_IMPORTED_MODULE_12__["formatMoney"])(Object(_functionContent__WEBPACK_IMPORTED_MODULE_12__["calMonth"])(v.price).toString()), "/month")), __jsx("div", {
        style: {
          display: 'inline-block',
          width: '49%',
          marginLeft: '5px'
        }
      }, __jsx("p", {
        style: {
          color: '#000000',
          fontWeight: '700'
        }
      }, "RM ", Object(_functionContent__WEBPACK_IMPORTED_MODULE_12__["formatMoney"])(discountedPrice.toString())), __jsx("p", {
        style: {
          color: '#395589',
          fontWeight: '700'
        }
      }, " RM ", Object(_functionContent__WEBPACK_IMPORTED_MODULE_12__["formatMoney"])(Object(_functionContent__WEBPACK_IMPORTED_MODULE_12__["calMonth"])(discountedPrice).toString()), "/month ")));
    }

    function renderCountdown(endDate) {
      const duration = moment__WEBPACK_IMPORTED_MODULE_2___default.a.duration(moment__WEBPACK_IMPORTED_MODULE_2___default()(endDate).diff(moment__WEBPACK_IMPORTED_MODULE_2___default()()));
      const days = Math.floor(duration.asDays());
      const daysFormatted = days ? `${days}` : 0;
      const hours = duration.hours();
      const minutes = duration.minutes();
      const hoursFormatted = hours ? `${hours}` : 0;
      const minutesFormatted = minutes ? `${minutes}` : 0;
      return __jsx("div", {
        className: "wrap-product-ads-countdown-spicydeal"
      }, __jsx("span", {
        className: "gridAddonMainText"
      }, __jsx("span", null, "SuperDeal Ends in")), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
        xs: 14,
        sm: 14,
        md: 16,
        lg: 16,
        xl: 16
      }, __jsx("p", {
        className: "gridAddonDayHourSubText"
      }, __jsx("span", {
        className: "gridAddonDayHourText"
      }, "D "), __jsx("span", {
        className: "gridAddonDayHour"
      }, formatCountdown(daysFormatted, 2)), __jsx("span", {
        className: "gridAddonDayHourText"
      }, " H "), __jsx("span", {
        className: "gridAddonDayHour"
      }, formatCountdown(hoursFormatted, 2)), __jsx("span", {
        className: "gridAddonDayHourText"
      }, " M "), __jsx("span", {
        className: "gridAddonDayHour"
      }, formatCountdown(minutesFormatted, 2))))));
    }

    if (v.priority === 'addonKingadType') {
      return renderShowPrice(v.price, v.addonKingadType.discountedPrice);
    } else if (v.priority === 'addonKingadType2') {
      return renderCountdown(v.addonKingadType2.endDate);
    } else if (v.priority === 'addonSpicydeal') {
      if (v.addonSpicydeal.showPrice === 'show') {
        return renderShowPrice(v.price, v.addonSpicydeal.discountedPrice);
      }

      if (v.addonSpicydeal.showPrice === 'hide') {
        return renderCountdown(v.addonSpicydeal.endDate);
      }
    } else {
      return normalPrice;
    }
  };

  const _renderIcon = (v, type) => {
    let defaultIcon = __jsx("img", {
      src: "/assets/profile/icon-list/account-info-active.png",
      className: "fill-parent"
    });

    let blackIcon = __jsx("img", {
      src: "/assets/profile/icon-list/dealer.png",
      className: "fill-parent"
    });

    if (type === 'company') {
      defaultIcon = eval(__jsx("img", {
        src: "/assets/profile/icon-list/address-work.png",
        className: "fill-parent"
      }));
      blackIcon = eval(__jsx("img", {
        src: "/assets/profile/icon-list/company.png",
        className: "fill-parent"
      }));
    }

    if (type === 'area') {
      defaultIcon = eval(__jsx("img", {
        src: "/assets/profile/icon-list/location-latest.png",
        className: "fill-parent"
      }));
      blackIcon = eval(__jsx("img", {
        src: "/assets/profile/icon-list/location-long.png",
        className: "fill-parent"
      }));
    }

    if (v.priority === 'addonSpicydeal' || v.priority === 'addonKingadType' || v.priority === 'addonKingadType2' || v.priority === 'addonKingadType3' || v.priority === 'addonSpotlight') {
      return blackIcon;
    } else {
      return defaultIcon;
    }
  };

  const _renderImage = v => {
    if (v.priority === 'addonSpicydeal' || v.priority === 'addonKingadType' || v.priority === 'addonKingadType2' // ||  v.priority === 'addonKingadType3'
    ) {
        // return (<div className="red-flame"><img src={flameRed} /></div>)
        return __jsx("div", {
          className: "red-flame"
        }, __jsx("img", {
          src: _icon__WEBPACK_IMPORTED_MODULE_15__["rayaFlame"],
          style: {
            width: 50,
            height: 50
          }
        }));
      } else {
      // return (<div className="spotlight"><img src="/assets/Ccar-Spotlight.gif" /></div>)
      return __jsx("div", {
        className: "spotlight"
      }, __jsx("img", {
        src: _icon__WEBPACK_IMPORTED_MODULE_15__["rayaFood"],
        style: {
          width: 50,
          height: 50
        }
      }));
    }
  };

  const _renderList = data => {
    if (Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["notEmptyLength"])(data)) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
        gutter: [20, 20]
      }, __jsx("div", {
        className: "d-flex scroller-type",
        style: {
          overflow: 'scroll'
        }
      }, data.map((v, i) => {
        if (v) {
          let companyName = v.companys ? v.companys.name : null;
          let areaName = v.companys ? v.companys.area : null;
          let userCompany = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(v, ['createdBy', 'usercompanyName']) || '';

          if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEmpty(userCompany) === false) {
            companyName = userCompany;
          }

          let userarea = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(v, ['createdBy', 'userarea']) || '';

          if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEmpty(userarea) === false) {
            areaName = userarea;
          } // let companyName = v.companys ? v.companys.name : null
          // let areaName = v.companys ? v.companys.area : null


          return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
            key: 'product' + i,
            style: {
              padding: '5px'
            },
            className: "gridDataList",
            xs: props.xs ? props.xs : 24,
            sm: props.sm ? props.sm : 24,
            md: props.md ? props.md : 12,
            lg: props.lg ? props.lg : 8,
            xl: props.xl ? props.xl : 8
          }, __jsx("div", {
            className: "box-shadow-thin",
            key: 'listDiv' + i
          }, __jsx("div", {
            className: _renderLayout(v),
            style: {
              height: '400px'
            }
          }, __jsx("div", {
            className: "wrap-product-ads-img"
          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
            shallow: false,
            href: _route__WEBPACK_IMPORTED_MODULE_22__["routePaths"].viewCarDetails.to || '/',
            as: typeof _route__WEBPACK_IMPORTED_MODULE_22__["routePaths"].viewCarDetails.as == 'function' ? _route__WEBPACK_IMPORTED_MODULE_22__["routePaths"].viewCarDetails.as(v) : '/'
          }, __jsx("a", null, __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
            className: "overlay-condition"
          }, _renderCondition(v)), __jsx("div", {
            className: "overlay-state"
          }, _renderState(v)), v.priority === 'addonKingadType' || v.priority === 'addonKingadType2' || v.priority === 'addonKingadType3' ? __jsx("div", {
            className: "flex-justify-center flex-items-align-start width-100",
            style: {
              position: 'absolute',
              top: 0,
              zIndex: 2
            }
          }, __jsx("img", {
            src: _icon__WEBPACK_IMPORTED_MODULE_15__["rayaLamp"],
            style: {
              width: 200,
              height: 200
            }
          })) : null, __jsx("div", {
            className: "width-100 cursor-pointer flex-justify-end flex-items-align-center",
            style: {
              position: 'absolute',
              bottom: 0,
              zIndex: 2
            }
          }, __jsx("span", {
            className: "d-inline-block margin-x-sm "
          }, v.priority === 'addonSpicydeal' || v.priority === 'addonKingadType' || v.priority === 'addonKingadType2' ? __jsx("img", {
            src: _icon__WEBPACK_IMPORTED_MODULE_15__["rayaFlame"],
            style: {
              width: 50,
              height: 50
            }
          }) : v.priority === 'addonSpotlight' || v.priority === 'addonKingadType3' ? __jsx("img", {
            src: _icon__WEBPACK_IMPORTED_MODULE_15__["rayaFood"],
            style: {
              width: 50,
              height: 50
            }
          }) : __jsx("img", {
            src: "/assets/Ccar-Spotlight.gif",
            style: {
              width: 30,
              height: 30,
              marginBottom: '10px',
              marginRight: '5px'
            }
          }))), __jsx("div", null, Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["notEmptyLength"])(v.carUrl) ? __jsx("img", {
            src: v.carUrl[0].url,
            style: {
              maxInlineSize: '-webkit-fill-available'
            },
            className: "head-product-ads-img-grid",
            key: 0
          }) : __jsx("img", {
            src: '/image-not-found.png',
            className: "head-product-ads-img-grid",
            key: -1
          }))))), __jsx("span", {
            className: "text-align-right gridTopRight"
          }, props.topRight ? props.topRight(v) : null), lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(v, ['readyStock']) == 'Yes' ? __jsx("span", {
            className: "text-align-right avatar background-green readyStockDot"
          }) : null), __jsx("div", {
            className: "wrap-product-ads-text relative-wrapper"
          }, props.body ? props.body(v) : props.body === null ? null : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, v.priority === 'addonSpicydeal' || v.priority === 'addonKingadType' || v.priority === 'addonKingadType2' ? __jsx("img", {
            src: _icon__WEBPACK_IMPORTED_MODULE_15__["rayaMosque"],
            style: {
              width: 100,
              height: 100,
              position: 'absolute',
              bottom: 50,
              right: 10
            }
          }) : v.priority === 'addonSpotlight' || v.priority === 'addonKingadType3' ? __jsx("img", {
            src: _icon__WEBPACK_IMPORTED_MODULE_15__["rayaPeople"],
            style: {
              width: 100,
              height: 100,
              position: 'absolute',
              bottom: 50,
              right: 10
            }
          }) : null, __jsx("div", {
            className: "wrap-product-ads-title"
          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
            shallow: false,
            passHref: true,
            href: _route__WEBPACK_IMPORTED_MODULE_22__["routePaths"].viewCarDetails.to || '/',
            as: typeof _route__WEBPACK_IMPORTED_MODULE_22__["routePaths"].viewCarDetails.as == 'function' ? _route__WEBPACK_IMPORTED_MODULE_22__["routePaths"].viewCarDetails.as(v) : '/'
          }, __jsx("a", null, __jsx("div", {
            className: "text-truncate-twoline"
          }, __jsx("label", {
            style: {
              fontSize: 16
            }
          }, v.title))))), __jsx("div", {
            className: "wrap-product-ads-title-p text-overflow-break"
          }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
            span: 20
          }, __jsx("p", null, v.carspecsAll ? v.carspecsAll.transmission + ' | ' + Object(_functionContent__WEBPACK_IMPORTED_MODULE_12__["renderMileageRange"])(v.mileage, v.mileage2) + ' | ' + (v.color ? v.color.toUpperCase() : '') : '')))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
            className: "margin-bottom-xs"
          }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
            xs: 24,
            sm: 24,
            md: 18,
            lg: 18,
            xl: 18
          }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
            span: 20
          }, __jsx("p", {
            className: "gridDealerName"
          }, v.createdBy ? v.createdBy.namePrefix : null, v.createdBy ? v.createdBy.firstName : null, v.createdBy ? v.createdBy.lastName : null, " "))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
            span: 20
          }, __jsx("p", {
            style: {
              fontSize: '14px'
            },
            className: "product-ads-company"
          }, companyName, " "))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
            style: {
              height: '42px'
            }
          }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
            span: 24
          }, _renderPrice(v)))))), props.footer ? props.footer(v) : props.footer === null ? null : __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
            type: "flex",
            justify: "start",
            align: "middle",
            className: "w-100",
            gutter: [2.5, 0]
          }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
            xs: 4,
            sm: 4,
            md: 4,
            lg: 4,
            xl: 4
          }, __jsx(_general_whatapps_button1__WEBPACK_IMPORTED_MODULE_17__["default"], {
            mobileNumber: v ? v : null
          })), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
            xs: 4,
            sm: 4,
            md: 4,
            lg: 4,
            xl: 4
          }, __jsx(_general_contactList1__WEBPACK_IMPORTED_MODULE_18__["default"], {
            companys: v.companys ? v.companys : null,
            contactPerson: Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["notEmptyLength"])(v.createdBy) ? v.createdBy : null
          })), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
            xs: 4,
            sm: 4,
            md: 4,
            lg: 4,
            xl: 4
          }, __jsx(_general_add_compare_product_button1__WEBPACK_IMPORTED_MODULE_13__["default"], {
            data: v
          })), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
            xs: 4,
            sm: 4,
            md: 4,
            lg: 4,
            xl: 4
          }, __jsx(_general_car_360_view_button__WEBPACK_IMPORTED_MODULE_14__["default"], {
            id: v.xmlUrl ? v._id : null
          }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
            type: "normal",
            className: `w-100 ads-purchase-button ${v.xmlUrl ? 'cursor-pointer' : 'cursor-not-allowed '}`,
            style: {
              padding: 0,
              background: v.xmlUrl ? 'rgb(85,204,212)' : 'rgb(237, 236, 234)',
              borderColor: v.xmlUrl ? 'rgb(85,204,212)' : 'rgb(237, 236, 234)'
            }
          }, __jsx("img", {
            src: "/assets/profile/icon-list/Ccar-360_1.gif"
          })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
            xs: 4,
            sm: 4,
            md: 4,
            lg: 4,
            xl: 4
          }, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isArray(v.registrationUrl) && Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["notEmptyLength"])(v.registrationUrl) ? __jsx(_general_registerCard__WEBPACK_IMPORTED_MODULE_19__["default"], {
            key: "register",
            button: // [<Tooltip key='tooltipsregister' title="Registration Card">
            //   <Button type="normal" className="w-100 ads-purchase-button" style={{ padding: 0, background: 'rgb(209 ,110, 132)', borderColor: 'rgb(209 ,110, 132)' }}><img src="/assets/CarListingIconMobile/registration-card.png" /></Button>
            // </Tooltip>]
            [__jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
              key: "btnRegister",
              type: "normal",
              className: "w-100 ads-purchase-button",
              style: {
                padding: 0,
                background: 'rgb(209 ,110, 132)',
                borderColor: 'rgb(209 ,110, 132)'
              }
            }, __jsx("img", {
              src: "/assets/profile/icon-list/carmarket-bar-icon/reg-card.png"
            }))],
            registrationUrl: v.registrationUrl
          }) : __jsx("div", {
            className: "width-100"
          }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
            type: "normal",
            className: "width-100 ads-purchase-button cursor-not-allowed",
            style: {
              padding: 0,
              background: 'rgb(237, 236, 234)',
              borderColor: 'rgb(237, 236, 234)'
            }
          }, __jsx("img", {
            src: "/assets/profile/icon-list/carmarket-bar-icon/reg-card.png"
          })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
            xs: 4,
            sm: 4,
            md: 4,
            lg: 4,
            xl: 4
          }, __jsx(_general_calculator_modal__WEBPACK_IMPORTED_MODULE_20__["default"], {
            key: "calculator",
            data: {
              price: v.searchPrice,
              downpayment: v.searchPrice * 0.1,
              loanPeriod: 9,
              interestRate: 3
            }
          })))))));
        } else {
          return null;
        }
      })));
    } else {
      return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(props.productsList, ['productListLoading']) || initLoading ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], null, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.range(0, 30), function (index) {
        return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
          xs: 24,
          sm: 12,
          md: 12,
          lg: 8,
          xl: 8
        }, __jsx(_skeleton_loader_GridProductSkeleton__WEBPACK_IMPORTED_MODULE_21__["default"], null));
      }))) : __jsx("div", {
        style: {
          height: '15em',
          backgroundColor: '#FFFFFF'
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Empty"], {
        style: {
          position: 'relative',
          top: '50%',
          transform: 'translateY(-50%)'
        },
        image: "/empty.png",
        imageStyle: {
          height: 60
        },
        description: __jsx("span", null, props.app.loading ? 'Getting Result' : 'No Result')
      }));
    }
  };

  return __jsx("div", {
    key: "listDiv2",
    className: props.className ? props.className : null,
    style: props.style ? props.style : null
  }, _renderList(Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["notEmptyLength"])(productList) ? productList : []));
};

const mapStateToProps = state => ({
  app: state.app,
  user: state.user,
  productsList: state.productsList
});

const mapDispatchToProps = {
  loading: _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_11__["loading"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_10__["Form"].create()(Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(GridProductList))));

/***/ }),

/***/ "./components/skeleton-loader/GridProductSkeleton.jsx":
/*!************************************************************!*\
  !*** ./components/skeleton-loader/GridProductSkeleton.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loading-skeleton */ "react-loading-skeleton");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const GridProductSkeleton = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__["SkeletonTheme"], null, __jsx("div", {
    className: "gridDataList"
  }, __jsx("div", {
    className: "box-shadow-normal",
    style: {
      height: 400
    }
  }, __jsx("div", {
    className: "wrap-product-ads"
  }, __jsx("div", {
    className: "wrap-product-ads-img padding-x-md"
  }, __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "fill-parent"
  })), __jsx("div", {
    className: "wrap-product-ads-text"
  }, __jsx("div", {
    className: "wrap-product-ads-title"
  }, __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "text-truncate-twoline",
    style: {
      fontSize: 16
    },
    count: 2
  })), __jsx("div", {
    className: "wrap-product-ads-title-p text-overflow-break"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 20
  }, __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    count: 1
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    className: "margin-bottom-xs"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    xs: 24,
    sm: 24,
    md: 18,
    lg: 18,
    xl: 18
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    className: "icon-res",
    span: 3,
    style: {
      marginTop: '-3px'
    }
  }, __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    circle: true
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 20
  }, __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "gridDealerName",
    count: 1
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    className: "icon-res",
    span: 3
  }, __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    circle: true
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 20
  }, __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      marginLeft: '5px',
      fontSize: '14px'
    },
    className: "product-ads-company",
    count: 1
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 3,
    className: "icon-res"
  }, __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    circle: true
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 20
  }, __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      marginLeft: '5px',
      fontSize: '14px',
      textTransform: 'uppercase'
    },
    className: "product-ads-company",
    count: 1
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    type: "flex",
    justify: "start",
    align: "middle",
    className: "w-100",
    gutter: [2.5, 0]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    xs: 4,
    sm: 4,
    md: 4,
    lg: 4,
    xl: 4
  }, __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    count: 1,
    height: 30
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    xs: 4,
    sm: 4,
    md: 4,
    lg: 4,
    xl: 4
  }, __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    count: 1,
    height: 30
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    xs: 4,
    sm: 4,
    md: 4,
    lg: 4,
    xl: 4
  }, __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    count: 1,
    height: 30
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    xs: 4,
    sm: 4,
    md: 4,
    lg: 4,
    xl: 4
  }, __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    count: 1,
    height: 30
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    xs: 4,
    sm: 4,
    md: 4,
    lg: 4,
    xl: 4
  }, __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    count: 1,
    height: 30
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    xs: 4,
    sm: 4,
    md: 4,
    lg: 4,
    xl: 4
  }, __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    count: 1,
    height: 30
  })))))))));
};

const mapStateToProps = state => ({
  app: state.app,
  user: state.user
});

const mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].create()(Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(GridProductSkeleton))));

/***/ }),

/***/ "./feathers.js":
/*!*********************!*\
  !*** ./feathers.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _feathersjs_feathers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @feathersjs/feathers */ "@feathersjs/feathers");
/* harmony import */ var _feathersjs_feathers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_feathersjs_feathers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _feathersjs_socketio_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @feathersjs/socketio-client */ "@feathersjs/socketio-client");
/* harmony import */ var _feathersjs_socketio_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_feathersjs_socketio_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _feathersjs_authentication_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @feathersjs/authentication-client */ "@feathersjs/authentication-client");
/* harmony import */ var _feathersjs_authentication_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_feathersjs_authentication_client__WEBPACK_IMPORTED_MODULE_3__);




const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default()('http://localhost:3030/'); // local/
// const socket = io('https://uat2-api.ccar.my/');  //uat
// const socket = io('https://api.ccar.my/');   // live
// const socket = io('https://preprod-api.ccar.my/');   // live

const client = _feathersjs_feathers__WEBPACK_IMPORTED_MODULE_1___default()();
client.configure(_feathersjs_socketio_client__WEBPACK_IMPORTED_MODULE_2___default()(socket), {
  pingTimeOut: 60000
}); // client.configure(authentication({
//   storage: window.localStorage
// }));

client.configure(_feathersjs_authentication_client__WEBPACK_IMPORTED_MODULE_3___default()());
/* harmony default export */ __webpack_exports__["default"] = (client);

/***/ }),

/***/ "./functionContent.js":
/*!****************************!*\
  !*** ./functionContent.js ***!
  \****************************/
/*! exports provided: formatMoney, calMonth, formatNumber, getFaceBookId, getGoogleId, renderMileageRange, checkEnv, checkEnvReturnWebAdmin, checkEnvReturnCmsUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMoney", function() { return formatMoney; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calMonth", function() { return calMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNumber", function() { return formatNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFaceBookId", function() { return getFaceBookId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGoogleId", function() { return getGoogleId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderMileageRange", function() { return renderMileageRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkEnv", function() { return checkEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkEnvReturnWebAdmin", function() { return checkEnvReturnWebAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkEnvReturnCmsUrl", function() { return checkEnvReturnCmsUrl; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
    const negativeSign = amount < 0 ? "-" : "";
    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = i.length > 3 ? i.length % 3 : 0;
    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
  } catch (e) {}
}
;
function calMonth(v) {
  let LoanAmount = v * 0.9; // 10% down payment

  let LoanPeriod = 9;
  let Interest = 3;
  let totalInterest = Interest / 100 * LoanAmount * LoanPeriod;
  let monthlyInterest = totalInterest / (LoanPeriod * 12);
  let monthlyInstalment = (LoanAmount + totalInterest) / (LoanPeriod * 12);
  return monthlyInstalment;
}
function formatNumber(amount) {
  try {
    return Math.abs(amount) > 999 ? Math.sign(amount) * (Math.abs(amount) / 1000).toFixed(1) : Math.sign(amount) * Math.abs(amount);
  } catch (e) {}
}
;
function getFaceBookId(url) {
  let appId = ''; // appId="694458901283391" //fara
  // appId="275484527150948"
  //  appId="616173029318134" //siangsiong
  // appId="747178012753410" //live
  // appId="185229086079189"//local :3001 --cf     
  // appId="703731107216979" //uat2 --cf  

  if (url === 'http://localhost:3030/') {
    appId = '694458901283391';
  } else if (url === 'https://uat2-api.ccar.my/') {
    appId = '703731107216979';
  } else if (url === 'https://api.ccar.my/') {
    appId = '747178012753410';
  } else if (url === 'https://preprod-api.ccar.my/') {
    appId = '694458901283391';
  } else {
    appId = '694458901283391';
  } //default prod


  return appId;
}
;
function getGoogleId(url) {
  let clientId = ''; // clientId="827147986430-e28c63qftj91sp506r8km2v1snccnt36.apps.googleusercontent.com" // live
  // clientId="182924119044-53k3g8cuv45u5j67cticevvo15g7846i.apps.googleusercontent.com"//uat2

  if (url === 'http://localhost:3030/') {
    clientId = '182924119044-53k3g8cuv45u5j67cticevvo15g7846i.apps.googleusercontent.com';
  } else if (url === 'https://preprod-api.ccar.my/') {
    clientId = '182924119044-53k3g8cuv45u5j67cticevvo15g7846i.apps.googleusercontent.com';
  } else if (url === 'https://uat2-api.ccar.my/') {
    clientId = '182924119044-53k3g8cuv45u5j67cticevvo15g7846i.apps.googleusercontent.com';
  } else if (url === 'https://preprod-api.ccar.my/') {
    clientId = '182924119044-53k3g8cuv45u5j67cticevvo15g7846i.apps.googleusercontent.com';
  } else if (url === 'https://api.ccar.my/') {
    clientId = '827147986430-e28c63qftj91sp506r8km2v1snccnt36.apps.googleusercontent.com';
  } else {
    clientId = '827147986430-e28c63qftj91sp506r8km2v1snccnt36.apps.googleusercontent.com';
  }

  return clientId;
}
;
function renderMileageRange(mileage, mileage2) {
  let mileageRange = 0,
      useMileage = 'no',
      useMileage2 = 'no';

  if (mileage) {
    if (mileage > 0) {
      mileageRange = mileage;
      useMileage = 'yes';
    }
  }

  if (mileage2) {
    if (mileage2 > 0) {
      mileageRange = mileage2;
      useMileage2 = 'yes';
    }
  }

  if (typeof mileageRange === 'string') {
    try {
      mileageRange = parseFloat(mileageRange);
    } catch (err) {
      return mileageRange;
    }
  }

  if (useMileage === 'yes') {
    if (typeof mileageRange === 'number') {
      let mileageFrom = (mileageRange - 2500) / 1000;
      let mileageTo = (mileageRange + 2500) / 1000;
      mileageRange = mileageFrom + '-' + mileageTo + 'K KM';
    }

    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(mileageRange) === true) {
      mileageRange = '0 KM';
    }

    return mileageRange;
  } else {
    mileageRange = mileageRange / 1000;
    return mileageRange + ' KM';
  }
}
;
function checkEnv(url) {
  let env = '';

  if (url === 'http://localhost:3030/') {
    env = 'local';
  } else if (url === 'https://uat2-api.ccar.my/') {
    env = 'uat';
  } else if (url === 'https://preprod-api.ccar.my/') {
    env = 'preprod';
  } else if (url === 'https://api.ccar.my/') {
    env = 'prod';
  } else {
    env = 'prod';
  }

  return env;
}
;
function checkEnvReturnWebAdmin(url) {
  let frontEndUrl = '';

  if (url === 'http://localhost:3030/') {
    frontEndUrl = 'http://localhost:3000/';
  } else if (url === 'https://uat2-api.ccar.my/') {
    frontEndUrl = 'http://uat2-adm.ccar.my/';
  } else if (url === 'https://preprod-api.ccar.my/') {
    frontEndUrl = 'http://preprod-adm.ccar.my/';
  } else if (url === 'https://api.ccar.my/') {
    frontEndUrl = 'https://adm.ccar.my/';
  }

  return frontEndUrl;
}
;
function checkEnvReturnCmsUrl(url) {
  let frontEndUrl = 'https://uat2ssr.ccar.my';

  if (url === 'http://localhost:3030/') {
    frontEndUrl = 'http://localhost:3011';
  } else if (url === 'https://uat2-api.ccar.my/') {
    frontEndUrl = 'https://uat2ssr.ccar.my';
  } else if (url === 'https://preprod-api.ccar.my/') {
    frontEndUrl = 'https://preprod-api.ccar.my';
  } else if (url === 'https://api.ccar.my/') {
    frontEndUrl = 'https://ccar.my';
  }

  return frontEndUrl;
}
;

/***/ }),

/***/ "./icon.js":
/*!*****************!*\
  !*** ./icon.js ***!
  \*****************/
/*! exports provided: writePostIcon, imageNotFoundIcon, raceFlagIcon, allIcon, carFreakLikeIcon, carFreakLikeGreyIcon, carFreakCommentIcon, followingGreyIcon, followingYellowIcon, earthGreyIcon, earthYellowIcon, clubNonMember, uploadPhoto, calendarIcon, pinIcon, carspecNotFoundImage, flameRed, flameRedShadow, flame, soldOutIcon, rayaFlame, rayaFood, rayaLamp, rayaMosque, rayaPeople, ccarWebLogo400X150, ccarLogo, ccarLogo2, ccarWebLogo2, loginBackground, tbhCny, tbh1Cny, tbh2Cny, cnyLionHead, cnyLogo, googleLogo, cnyLogo2, tbh, defaultProfileBackground, phone, email, help, address, location, wishList, wishlistIconActived, faqDiceBanner, faqBanner, faqBuyCarIcon, faqCarFreakIcon, faqCstarIcon, faqMyAccountIcon, faqOurFeaturesIcon, faqSellCarIcon, searchBoxImg, sortingImg, filterFormImg, allNewCarImg, carBrandImg, newCarFilterFormImg, carMoreInfoImg, cstarListImg, cstarAnimationImg, bellInactive, ratingBanner, menuLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writePostIcon", function() { return writePostIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageNotFoundIcon", function() { return imageNotFoundIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raceFlagIcon", function() { return raceFlagIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allIcon", function() { return allIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carFreakLikeIcon", function() { return carFreakLikeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carFreakLikeGreyIcon", function() { return carFreakLikeGreyIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carFreakCommentIcon", function() { return carFreakCommentIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followingGreyIcon", function() { return followingGreyIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followingYellowIcon", function() { return followingYellowIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "earthGreyIcon", function() { return earthGreyIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "earthYellowIcon", function() { return earthYellowIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clubNonMember", function() { return clubNonMember; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadPhoto", function() { return uploadPhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendarIcon", function() { return calendarIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pinIcon", function() { return pinIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carspecNotFoundImage", function() { return carspecNotFoundImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flameRed", function() { return flameRed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flameRedShadow", function() { return flameRedShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flame", function() { return flame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "soldOutIcon", function() { return soldOutIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rayaFlame", function() { return rayaFlame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rayaFood", function() { return rayaFood; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rayaLamp", function() { return rayaLamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rayaMosque", function() { return rayaMosque; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rayaPeople", function() { return rayaPeople; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ccarWebLogo400X150", function() { return ccarWebLogo400X150; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ccarLogo", function() { return ccarLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ccarLogo2", function() { return ccarLogo2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ccarWebLogo2", function() { return ccarWebLogo2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginBackground", function() { return loginBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tbhCny", function() { return tbhCny; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tbh1Cny", function() { return tbh1Cny; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tbh2Cny", function() { return tbh2Cny; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cnyLionHead", function() { return cnyLionHead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cnyLogo", function() { return cnyLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleLogo", function() { return googleLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cnyLogo2", function() { return cnyLogo2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tbh", function() { return tbh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProfileBackground", function() { return defaultProfileBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phone", function() { return phone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email", function() { return email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "help", function() { return help; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "address", function() { return address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "location", function() { return location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishList", function() { return wishList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishlistIconActived", function() { return wishlistIconActived; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faqDiceBanner", function() { return faqDiceBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faqBanner", function() { return faqBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faqBuyCarIcon", function() { return faqBuyCarIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faqCarFreakIcon", function() { return faqCarFreakIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faqCstarIcon", function() { return faqCstarIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faqMyAccountIcon", function() { return faqMyAccountIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faqOurFeaturesIcon", function() { return faqOurFeaturesIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faqSellCarIcon", function() { return faqSellCarIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchBoxImg", function() { return searchBoxImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortingImg", function() { return sortingImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterFormImg", function() { return filterFormImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allNewCarImg", function() { return allNewCarImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carBrandImg", function() { return carBrandImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newCarFilterFormImg", function() { return newCarFilterFormImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carMoreInfoImg", function() { return carMoreInfoImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cstarListImg", function() { return cstarListImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cstarAnimationImg", function() { return cstarAnimationImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bellInactive", function() { return bellInactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ratingBanner", function() { return ratingBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuLogin", function() { return menuLogin; });
const writePostIcon = '/assets/new-car-screen/create-post.png';
const imageNotFoundIcon = '/image-not-found copy.png';
const raceFlagIcon = '/race-flag.jpg';
const allIcon = '/grid.svg'; //CarFreak

const carFreakLikeIcon = '/assets/car-freak/carfreaks-like.png';
const carFreakLikeGreyIcon = '/assets/car-freak/carfreaks-like-grey.png';
const carFreakCommentIcon = '/assets/car-freak/comment.svg';
const followingGreyIcon = '/assets/car-freak/follow-grey.png';
const followingYellowIcon = '/assets/car-freak/follow-yellow.png';
const earthGreyIcon = '/assets/car-freak/public-grey.png';
const earthYellowIcon = '/assets/car-freak/public-yellow.png';
const clubNonMember = '/assets/car-freak/non-member.png';
const uploadPhoto = '/assets/upload_photo.png';
const calendarIcon = '/assets/car-freak/calendar.png';
const pinIcon = '/assets/car-freak/pin.png'; //Car Market

const carspecNotFoundImage = '/coming-soon.png';
const flameRed = '/assets/CarListingIcon/Fire-04(NoShadow).gif';
const flameRedShadow = '/assets/CarListingIcon/Fire-04.gif';
const flame = '/assets/carDetails/flame.gif';
const soldOutIcon = '/sold out@3x.png';
const rayaFlame = '/assets/productList/Flame_01.gif';
const rayaFood = '/assets/productList/Food(Final)_1.gif';
const rayaLamp = '/assets/productList/Lamp_Final_.gif';
const rayaMosque = '/assets/productList/Mosque(Final).gif';
const rayaPeople = '/assets/productList/Orang(Final).gif';
const ccarWebLogo400X150 = '/assets/profile/400x150-icon.png';
const ccarLogo = '/logo192.png';
const ccarLogo2 = '/assets/Ccar-logo.png';
const ccarWebLogo2 = '/ccar-web-logo.png'; //Login

const loginBackground = '/assets/login/ramadhan.png';
const tbhCny = '/assets/login/tbh.png';
const tbh1Cny = '/assets/login/tbh-01.png';
const tbh2Cny = '/assets/login/tbh-02.png';
const cnyLionHead = '/assets/login/lion-dance.png';
const cnyLogo = '/assets/login/ccar-cny-logo.png';
const googleLogo = '/google.png';
const cnyLogo2 = '/ccar cny 2.svg';
const tbh = '/assets/login/fara.png'; //Profile

const defaultProfileBackground = '/assets/profile/1280x450.png';
const phone = "/assets/sellerProfile/phone.png";
const email = "/assets/sellerProfile/email.png";
const help = "/assets/sellerProfile/help.png";
const address = "/assets/sellerProfile/address-home.png";
const location = "/assets/sellerProfile/Location@3x.png";
const wishList = "/assets/profile/wishlist.png";
const wishlistIconActived = "/assets/profile/wishlist-active.png"; //FAQ

const faqDiceBanner = '/assets/faq/many-falling-blocks-with-question-marks-3d-illustration.jpg';
const faqBanner = '/assets/faq/FAQ-bg.jpg';
const faqBuyCarIcon = '/assets/faq/buy-a-car.png';
const faqCarFreakIcon = '/assets/faq/carfreaks.png';
const faqCstarIcon = '/assets/faq/cstar.png';
const faqMyAccountIcon = '/assets/faq/my-account.png';
const faqOurFeaturesIcon = '/assets/faq/our-features.png';
const faqSellCarIcon = '/assets/faq/sell-a-car.png';
const searchBoxImg = '/assets/faq/Homepage.png';
const sortingImg = '/assets/faq/carmarket filter.png';
const filterFormImg = '/assets/faq/Carmarket quick filter box.png';
const allNewCarImg = '/assets/faq/all-newcar brand.png';
const carBrandImg = '/assets/faq/sell-a-car.png';
const newCarFilterFormImg = '/assets/faq/all-newcar filter.png';
const carMoreInfoImg = '/assets/faq/sell-a-car.png';
const cstarListImg = '/assets/faq/sell-a-car.png';
const cstarAnimationImg = '/assets/faq/sell-a-car.png'; //Notification

const bellInactive = '/assets/notification/bell.png'; //Review

const ratingBanner = '/assets/car-review/rating.png'; //Menu

const menuLogin = '/assets/menu-icon/Nologin.png';

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_banner_anim__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-banner-anim */ "rc-banner-anim");
/* harmony import */ var rc_banner_anim__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rc_banner_anim__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common-function */ "./common-function.js");
/* harmony import */ var _components_general_global_search_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/general/global-search-bar */ "./components/general/global-search-bar.jsx");
/* harmony import */ var _components_general_LayoutV2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/general/LayoutV2 */ "./components/general/LayoutV2.jsx");
/* harmony import */ var _components_general_ReduxPersistWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/general/ReduxPersistWrapper */ "./components/general/ReduxPersistWrapper.jsx");
/* harmony import */ var _components_news_social_new_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/news/social-new-tabs */ "./components/news/social-new-tabs.jsx");
/* harmony import */ var _components_news_social_video_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/news/social-video-tabs */ "./components/news/social-video-tabs.jsx");
/* harmony import */ var _components_product_list_brand_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/product-list/brand-list */ "./components/product-list/brand-list.jsx");
/* harmony import */ var _components_product_list_grid_product_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/product-list/grid-product-list */ "./components/product-list/grid-product-list.jsx");
/* harmony import */ var _feathers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../feathers */ "./feathers.js");
/* harmony import */ var _redux_actions_productsList_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../redux/actions/productsList-actions */ "./redux/actions/productsList-actions.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../redux/actions/app-actions */ "./redux/actions/app-actions.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



















const BgElement = rc_banner_anim__WEBPACK_IMPORTED_MODULE_5__["Element"].BgElement;
const searchBarRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();

const Index = props => {
  const {
    0: quickFilterType,
    1: setQuickFilterType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('carMarket');
  const {
    0: brandList,
    1: setBrandList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.brands || []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    props.updateActiveMenu('1');
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isArray(props.productLists) && !lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEmpty(props.productLists)) {
      props.fetchProductsListHome(props.productLists);
    }
  }, []);

  const Desktop = ({
    children
  }) => {
    const isDesktop = Object(react_responsive__WEBPACK_IMPORTED_MODULE_17__["useMediaQuery"])({
      minWidth: 992
    });
    return isDesktop ? children : null;
  };

  const Tablet = ({
    children
  }) => {
    const isTablet = Object(react_responsive__WEBPACK_IMPORTED_MODULE_17__["useMediaQuery"])({
      minWidth: 768,
      maxWidth: 991
    });
    return isTablet ? children : null;
  };

  const Mobile = ({
    children
  }) => {
    const isMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_17__["useMediaQuery"])({
      maxWidth: 767
    });
    return isMobile ? children : null;
  };

  const Default = ({
    children
  }) => {
    const isNotMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_17__["useMediaQuery"])({
      minWidth: 768
    });
    return isNotMobile ? children : null;
  };

  const _renderCarousel = () => {
    return __jsx("div", null, __jsx(Mobile, null, __jsx(rc_banner_anim__WEBPACK_IMPORTED_MODULE_5___default.a, {
      arrow: false,
      type: "across",
      prefixCls: "banner-user",
      autoPlay: true
    }, __jsx(rc_banner_anim__WEBPACK_IMPORTED_MODULE_5__["Element"], {
      prefixCls: "banner-user-elem",
      key: "0",
      onClick: e => {
        window.location = 'https://www.facebook.com/ccar.malaysia/shop/?referral_code=page_shop_tab&preview=1&ref=page_internal';
      }
    }, __jsx("div", {
      className: "width-100 relative-wrapper",
      style: {
        height: 100
      }
    }, __jsx("img", {
      src: '/banner/CCAR-Ramadan-Mobile-Banner-01.jpg',
      className: "absolute-center"
    }))), __jsx(rc_banner_anim__WEBPACK_IMPORTED_MODULE_5__["Element"], {
      prefixCls: "banner-user-elem",
      key: "1"
    }, __jsx("div", {
      className: "width-100 relative-wrapper",
      style: {
        height: 100
      }
    }, __jsx("img", {
      src: '/banner/Mobile-Banner-360-01.jpg',
      className: "absolute-center"
    }))), __jsx(rc_banner_anim__WEBPACK_IMPORTED_MODULE_5__["Element"], {
      prefixCls: "banner-user-elem",
      key: "2"
    }, __jsx("div", {
      className: "width-100 relative-wrapper",
      style: {
        height: 100
      }
    }, __jsx("img", {
      src: '/banner/Mobile-Banner-01.jpg',
      className: "absolute-center"
    }))))));
  };

  const _renderProductListRes = () => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.productsList.productsListHome.length > 0 ? __jsx(_components_product_list_grid_product_list__WEBPACK_IMPORTED_MODULE_14__["default"], {
      data: props.productsList.productsListHome.slice(0, 6),
      xs: 18,
      sm: 18,
      md: 0,
      lg: 0,
      xl: 0
    }) : __jsx("div", {
      style: {
        height: '30em'
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
      style: {
        position: 'relative',
        top: '50%',
        transform: 'translateY(-50%)'
      },
      image: "/empty.png",
      imageStyle: {
        height: 60
      },
      description: __jsx("span", null, "No Result")
    })));
  };

  const _renderProductListSecond = () => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.productsList.productsListHome.length > 0 ? __jsx(_components_product_list_grid_product_list__WEBPACK_IMPORTED_MODULE_14__["default"], {
      data: props.productsList.productsListHome.slice(6, 12),
      xs: 18,
      sm: 18,
      md: 0,
      lg: 0,
      xl: 0
    }) : __jsx("div", {
      style: {
        height: '30em'
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
      style: {
        position: 'relative',
        top: '50%',
        transform: 'translateY(-50%)'
      },
      image: "/empty.png",
      imageStyle: {
        height: 60
      },
      description: __jsx("span", null, "No Result")
    })));
  };

  const _renderQuickFilter = () => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      xs: 24,
      sm: 24,
      md: 24,
      lg: 24,
      xl: 24
    }, __jsx("div", {
      className: "width-100"
    }, __jsx(_components_product_list_brand_list__WEBPACK_IMPORTED_MODULE_13__["default"], {
      limit: 10,
      size: 66.6,
      data: brandList,
      onClickBrand: brand => {
        if (lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(brand, ['value'])) {
          let path = '/';

          if (quickFilterType == 'carMarket') {
            path = Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["convertParameterToProductListUrl"])({
              make: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.toLower(brand.value)
            }, null);
          } else {
            path = `/newcar/maker/${lodash__WEBPACK_IMPORTED_MODULE_3___default.a.toLower(brand.value)}`;
          }

          props.router.push(path);
        } else {
          antd__WEBPACK_IMPORTED_MODULE_1__["message"].error('Brand Not Found!');
        }
      }
    }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      xs: 24,
      sm: 24,
      md: 24,
      lg: 24,
      xl: 24
    }, __jsx("div", {
      className: "flex-justify-start flex-items-align-center width-100"
    }, __jsx("span", {
      className: "d-inline-block width-100"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
      style: {
        margin: 0
      }
    })), __jsx("span", {
      className: "d-inline-block flex-items-no-shrink text-align-right margin-left-md",
      onClick: () => {
        let path = '/';

        if (quickFilterType == 'carMarket') {
          path = Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["convertParameterToProductListUrl"])(null, null);
        } else {
          path = `/newcar/filter`;
        }

        props.router.push(path);
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "background-ccar-button-yellow border-ccar-button-yellow black padding-x-lg"
    }, "More"))))));
  };

  return __jsx(_components_general_ReduxPersistWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    cookie: props.cookie
  }, __jsx(_components_general_LayoutV2__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 0,
    xl: 0
  }, _renderCarousel())), __jsx("div", {
    className: "section-version3"
  }, __jsx("div", {
    className: "container-version3 padding-xs",
    style: {
      touchAction: 'pan-y'
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "margin-top-sm",
    style: {
      marginBottom: '10px'
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 24,
    xl: 24,
    className: "padding-x-xs background-white yellow-divider"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 8
  }, __jsx("span", {
    className: "d-inline-block font-weight-bold grey-darken-3",
    style: {
      marginLeft: '10px',
      fontSize: '15px'
    }
  }, "CARMARKET")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "yellow-divider",
    span: 12
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    style: {
      marginTop: '13px',
      marginBottom: '13px'
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 4,
    style: {
      paddingLeft: '5px'
    }
  }, __jsx("a", {
    style: {
      fontSize: '12px'
    },
    href: "/cars-on-sale"
  }, " See More "))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 24,
    xl: 24
  }, __jsx("div", {
    className: "padding-xs"
  }, _renderProductListRes())), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 24,
    xl: 24,
    style: {
      marginTop: '10px'
    }
  }, __jsx("div", {
    className: "padding-xs"
  }, _renderProductListSecond()))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      marginBottom: '10px'
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 24,
    xl: 24,
    className: " background-white "
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 8
  }, __jsx("span", {
    className: "d-inline-block font-weight-bold grey-darken-3",
    style: {
      marginLeft: '10px',
      fontSize: '15px'
    }
  }, "SOCIAL NEWS")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "yellow-divider",
    span: 12
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    style: {
      marginTop: '13px',
      marginBottom: '13px'
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 4,
    style: {
      paddingLeft: '5px',
      paddingTop: '2px'
    }
  }, __jsx("a", {
    style: {
      fontSize: '12px'
    },
    href: "/socialNewsAndVideo"
  }, " See More "))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 24,
    xl: 24
  }, __jsx(_components_news_social_new_tabs__WEBPACK_IMPORTED_MODULE_11__["default"], null))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "margin-top-sm",
    style: {
      marginBottom: '10px'
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 24,
    xl: 24,
    className: " background-white "
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 9
  }, __jsx("span", {
    className: "d-inline-block font-weight-bold grey-darken-3",
    style: {
      marginLeft: '10px',
      fontSize: '15px'
    }
  }, "SOCIAL VIDEOS")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "yellow-divider",
    span: 11
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    style: {
      marginTop: '13px',
      marginBottom: '13px'
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 4,
    style: {
      paddingLeft: '5px',
      paddingTop: '2px'
    }
  }, __jsx("a", {
    style: {
      fontSize: '12px'
    },
    href: "/socialNewsAndVideo?type=videos"
  }, " See More "))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 24,
    xl: 24
  }, __jsx(_components_news_social_video_tabs__WEBPACK_IMPORTED_MODULE_12__["default"], null)))))))));
};

async function getServerSideProps(context) {
  let brandRes = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${_feathers__WEBPACK_IMPORTED_MODULE_15__["default"].io.io.uri}brandFilterTotalV3`, {
    params: {
      filterType: 'make'
    }
  });
  let brands = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isArray(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(brandRes, ['data', 'uniqueInfo', 'makeList'])) && !lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEmpty(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(brandRes, ['data', 'uniqueInfo', 'makeList'])) ? lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(brandRes, ['data', 'uniqueInfo', 'makeList']) : [];
  brands = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.reverse(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.sortBy(brands, ['count', 'value']));
  brands = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.map(brands, 'value').slice(10);
  let kingAdsRes = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${_feathers__WEBPACK_IMPORTED_MODULE_15__["default"].io.io.uri}displayKingAds`);
  kingAdsRes = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(kingAdsRes, ['data']) || [];
  return {
    props: {
      cookie: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(context, ['req', 'headers', 'cookie']) || null,
      brands: brands,
      productLists: kingAdsRes,
      seoData: {
        description: ''
      }
    }
  };
}

const mapStateToProps = state => ({
  app: state.app,
  user: state.user,
  productsList: state.productsList
});

const mapDispatchToProps = {
  fetchProductsListHome: _redux_actions_productsList_actions__WEBPACK_IMPORTED_MODULE_16__["fetchProductsListHome"],
  updateActiveMenu: _redux_actions_app_actions__WEBPACK_IMPORTED_MODULE_18__["updateActiveMenu"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Index)));

/***/ }),

/***/ "./params/bodyTypeList.js":
/*!********************************!*\
  !*** ./params/bodyTypeList.js ***!
  \********************************/
/*! exports provided: bodyTypeList, getBodyTypeIcon, getBodyType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bodyTypeList", function() { return bodyTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBodyTypeIcon", function() { return getBodyTypeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBodyType", function() { return getBodyType; });
const bodyTypeList = [{
  'icon': "/assets/car-type-ori-ver2/coach.png",
  'value': 'Coach'
}, {
  'icon': "/assets/car-type-ori-ver2/compact.png",
  'value': 'Compact'
}, {
  'icon': "/assets/car-type-ori-ver2/convertible.png",
  'value': 'Convertible'
}, {
  'icon': "/assets/car-type-ori-ver2/coupe.png",
  'value': 'Coupe'
}, {
  'icon': "/assets/car-type-ori-ver2/crossover.png",
  'value': 'Crossover'
}, {
  'icon': "/assets/car-type-ori-ver2/hatchback.png",
  'value': 'Hatchback'
}, {
  'icon': "/assets/car-type-ori-ver2/mpv.png",
  'value': 'MPV'
}, {
  'icon': "/assets/car-type-ori-ver2/pickup-truck.png",
  'value': 'Pickuptruck'
}, {
  'icon': "/assets/car-type-ori-ver2/sedan.png",
  'value': 'Sedan'
}, {
  'icon': "/assets/car-type-ori-ver2/sport-car.png",
  'value': 'Sportcar'
}, {
  'icon': "/assets/car-type-ori-ver2/suv.png",
  'value': 'SUV'
}, {
  'icon': "/assets/car-type-ori-ver2/truck.png",
  'value': 'Truck'
}, {
  'icon': "/assets/car-type-ori-ver2/van.png",
  'value': 'Van'
}, {
  'icon': "/assets/car-type-ori-ver2/wagon.png",
  'value': 'Wagon'
}, {
  'icon': "/assets/car-type-ori-ver2/sport-car.png",
  'value': 'GT'
}, {
  'icon': "/assets/car-type-ori-ver2/truck.png",
  'value': 'Lorry'
}];
function getBodyTypeIcon(bodyType) {
  if (bodyType) {
    let selectedBodyType = bodyTypeList.find(function (item) {
      return item.value.toLowerCase() === bodyType.toLowerCase();
    });

    if (selectedBodyType) {
      return selectedBodyType.icon;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
function getBodyType(bodyType) {
  if (bodyType) {
    let selectedBodyType = bodyTypeList.find(function (item) {
      return item.value.toLowerCase() === bodyType.toLowerCase();
    });

    if (selectedBodyType) {
      return selectedBodyType;
    } else {
      return {
        value: null,
        icon: null
      };
    }
  } else {
    return {
      value: null,
      icon: null
    };
  }
}
/* harmony default export */ __webpack_exports__["default"] = ({
  bodyTypeList
});

/***/ }),

/***/ "./params/carBrandsList.js":
/*!*********************************!*\
  !*** ./params/carBrandsList.js ***!
  \*********************************/
/*! exports provided: carBrandsList, getCarBrandsIcon, getCarBrand, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carBrandsList", function() { return carBrandsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCarBrandsIcon", function() { return getCarBrandsIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCarBrand", function() { return getCarBrand; });
const alfaRomeoImg = "/assets/brands/alfa-romeo.png";
const asiaImg = "/assets/brands/asia.png";
const astonMartinImg = "/assets/brands/aston-martin.png";
const audiImg = "/assets/brands/audi.png";
const austinImg = "/assets/brands/austin.png";
const bacImg = "/assets/brands/bac.png";
const bentleyImg = "/assets/brands/bentley.png";
const bmwAlpinaImg = "/assets/brands/bmw-alpina.png";
const bmwImg = "/assets/brands/bmw.png";
const buforiImg = "/assets/brands/bufori.png";
const cadillacImg = "/assets/brands/cadillac.png";
const camImg = "/assets/brands/cam.png";
const chanaImg = "/assets/brands/chana.png";
const changanImg = "/assets/brands/changan.png";
const cheryImg = "/assets/brands/chery.png";
const chevroletImg = "/assets/brands/chevrolet.png";
const chryslerImg = "/assets/brands/chrysler.png";
const citroenImg = "/assets/brands/citroen.png";
const daihatsuImg = "/assets/brands/daihatsu.png";
const datsunImg = "/assets/brands/datsun.png";
const dodgeImg = "/assets/brands/dodge.png";
const dongfengImg = "/assets/brands/dongfeng.png";
const ferrariImg = "/assets/brands/ferrari.png";
const fiatImg = "/assets/brands/fiat.png";
const fodayImg = "/assets/brands/foday.png";
const fordImg = "/assets/brands/ford.png";
const fotonImg = "/assets/brands/foton.png";
const goldenDragonImg = "/assets/brands/golden-dragon.png";
const greatWallImg = "/assets/brands/great-wall.png";
const havalImg = "/assets/brands/haval.png";
const hicomImg = "/assets/brands/hicom.png";
const hinoImg = "/assets/brands/hino.png";
const hondaImg = "/assets/brands/honda.png";
const hummerImg = "/assets/brands/hummer.png";
const hyundaiImg = "/assets/brands/hyundai.png";
const impulImg = "/assets/brands/impul.png";
const infinitiImg = "/assets/brands/infiniti.png";
const inokomImg = "/assets/brands/inokom.png";
const isuzuImg = "/assets/brands/isuzu.png";
const jaguarImg = "/assets/brands/jaguar.png";
const jbcImg = "/assets/brands/jbc.png";
const jeepImg = "/assets/brands/jeep.png";
const jmcImg = "/assets/brands/jmc.png";
const joylongImg = "/assets/brands/joylong.png";
const kawasakiImg = "/assets/brands/kawasaki.png";
const kiaImg = "/assets/brands/kia.png";
const kingLongImg = "/assets/brands/king-long.png";
const lamborghiniImg = "/assets/brands/lamborghini.png";
const landRoverImg = "/assets/brands/land-rover.png";
const lexusImg = "/assets/brands/lexus.png";
const lmgImg = "/assets/brands/lmg.png";
const lotusImg = "/assets/brands/lotus.png";
const mahindraImg = "/assets/brands/mahindra.png";
const maseratiImg = "/assets/brands/maserati.png";
const maxusImg = "/assets/brands/maxus.png";
const mazdaImg = "/assets/brands/mazda.png";
const mclarenImg = "/assets/brands/mclaren.png";
const mercedesBenzImg = "/assets/brands/mercedes-benz.png";
const mercedesMaybachImg = "/assets/brands/mercedes-maybach.png";
const mgImg = "/assets/brands/mg.png";
const miniImg = "/assets/brands/mini.png";
const mitsubishiImg = "/assets/brands/mitsubishi.png";
const mitsuokaImg = "/assets/brands/mitsuoka.png";
const nazaImg = "/assets/brands/naza.png";
const nissanImg = "/assets/brands/nissan.png";
const opelImg = "/assets/brands/opel.png";
const peroduaImg = "/assets/brands/perodua.png";
const peugeotImg = "/assets/brands/peugeot.png";
const porscheImg = "/assets/brands/porsche.png";
const protonImg = "/assets/brands/proton.png";
const ramImg = "/assets/brands/ram.png";
const renaultImg = "/assets/brands/renault.png";
const rollsRoyceImg = "/assets/brands/rolls-royce.png";
const roverImg = "/assets/brands/rover.png";
const saabImg = "/assets/brands/saab.png";
const smartImg = "/assets/brands/smart.png";
const ssangYongImg = "/assets/brands/ssang-yong.png";
const subaruImg = "/assets/brands/subaru.png";
const suzukiImg = "/assets/brands/suzuki.png";
const tataImg = "/assets/brands/tata.png";
const toyotaImg = "/assets/brands/toyota.png";
const tvrImg = "/assets/brands/tvr.png";
const volkswagenImg = "/assets/brands/volkswagen.png";
const volvoImg = "/assets/brands/volvo.png";
const waldImg = "/assets/brands/wald.png";
const yamahaImg = "/assets/brands/yamaha.png";
const znaImg = "/assets/brands/zna.png";
const carBrandsList = [{
  'icon': alfaRomeoImg,
  'value': 'Alfa Romeo'
}, {
  'icon': asiaImg,
  'value': 'Asia'
}, {
  'icon': astonMartinImg,
  'value': 'Aston Martin'
}, {
  'icon': audiImg,
  'value': 'Audi'
}, {
  'icon': austinImg,
  'value': 'Austin'
}, {
  'icon': bacImg,
  'value': 'Bac'
}, {
  'icon': bentleyImg,
  'value': 'Bentley'
}, {
  'icon': bmwAlpinaImg,
  'value': 'BMW Alpina'
}, {
  'icon': bmwImg,
  'value': 'BMW'
}, {
  'icon': buforiImg,
  'value': 'Bufori'
}, {
  'icon': cadillacImg,
  'value': 'Cadillac'
}, {
  'icon': camImg,
  'value': 'Cam'
}, {
  'icon': chanaImg,
  'value': 'Chana'
}, {
  'icon': changanImg,
  'value': 'Changan'
}, {
  'icon': cheryImg,
  'value': 'Chery'
}, {
  'icon': chevroletImg,
  'value': 'Chevrolet'
}, {
  'icon': chryslerImg,
  'value': 'Chrysler'
}, {
  'icon': citroenImg,
  'value': 'Citroen'
}, {
  'icon': daihatsuImg,
  'value': 'Daihatsu'
}, {
  'icon': datsunImg,
  'value': 'Datsun'
}, {
  'icon': dodgeImg,
  'value': 'Dodge'
}, {
  'icon': dongfengImg,
  'value': 'Dongfeng'
}, {
  'icon': ferrariImg,
  'value': 'Ferrari'
}, {
  'icon': fiatImg,
  'value': 'Fiat'
}, {
  'icon': fodayImg,
  'value': 'Foday'
}, {
  'icon': fordImg,
  'value': 'Ford'
}, {
  'icon': fotonImg,
  'value': 'Foton'
}, {
  'icon': goldenDragonImg,
  'value': 'Golden Dragon'
}, {
  'icon': greatWallImg,
  'value': 'Great Wall'
}, {
  'icon': havalImg,
  'value': 'Haval'
}, {
  'icon': hicomImg,
  'value': 'Hicom'
}, {
  'icon': hinoImg,
  'value': 'Hino'
}, {
  'icon': hondaImg,
  'value': 'Honda'
}, {
  'icon': hummerImg,
  'value': 'Hummer'
}, {
  'icon': hyundaiImg,
  'value': 'Hyundai'
}, {
  'icon': impulImg,
  'value': 'Impul'
}, {
  'icon': infinitiImg,
  'value': 'Infiniti'
}, {
  'icon': inokomImg,
  'value': 'Inokom'
}, {
  'icon': isuzuImg,
  'value': 'Isuzu'
}, {
  'icon': jaguarImg,
  'value': 'Jaguar'
}, {
  'icon': jbcImg,
  'value': 'Jbc'
}, {
  'icon': jeepImg,
  'value': 'Jeep'
}, {
  'icon': jmcImg,
  'value': 'Jmc'
}, {
  'icon': joylongImg,
  'value': 'Joylong'
}, {
  'icon': kawasakiImg,
  'value': 'Kawasaki'
}, {
  'icon': kiaImg,
  'value': 'Kia'
}, {
  'icon': kingLongImg,
  'value': 'King Long'
}, {
  'icon': lamborghiniImg,
  'value': 'Lamborghini'
}, {
  'icon': landRoverImg,
  'value': 'Land Rover'
}, {
  'icon': lexusImg,
  'value': 'Lexus'
}, {
  'icon': lmgImg,
  'value': 'Lmg'
}, {
  'icon': lotusImg,
  'value': 'Lotus'
}, {
  'icon': mahindraImg,
  'value': 'Mahindra'
}, {
  'icon': maseratiImg,
  'value': 'Maserati'
}, {
  'icon': maxusImg,
  'value': 'Maxus'
}, {
  'icon': mazdaImg,
  'value': 'Mazda'
}, {
  'icon': mclarenImg,
  'value': 'Mclaren'
}, {
  'icon': mercedesBenzImg,
  'value': 'Mercedes-Benz'
}, {
  'icon': mgImg,
  'value': 'Mercedes-Maybach'
}, {
  'icon': mercedesMaybachImg,
  'value': 'Mg'
}, {
  'icon': miniImg,
  'value': 'Mini'
}, {
  'icon': mitsubishiImg,
  'value': 'Mitsubishi'
}, {
  'icon': mitsuokaImg,
  'value': 'Mitsuoka'
}, {
  'icon': nazaImg,
  'value': 'Naza'
}, {
  'icon': nissanImg,
  'value': 'Nissan'
}, {
  'icon': opelImg,
  'value': 'Opel'
}, {
  'icon': peroduaImg,
  'value': 'Perodua'
}, {
  'icon': peugeotImg,
  'value': 'Peugeot'
}, {
  'icon': porscheImg,
  'value': 'Porsche'
}, {
  'icon': protonImg,
  'value': 'Proton'
}, {
  'icon': ramImg,
  'value': 'Ram'
}, {
  'icon': renaultImg,
  'value': 'Renault'
}, {
  'icon': rollsRoyceImg,
  'value': 'Rolls-Royce'
}, {
  'icon': roverImg,
  'value': 'Rover'
}, {
  'icon': saabImg,
  'value': 'Saab'
}, {
  'icon': smartImg,
  'value': 'Smart'
}, {
  'icon': ssangYongImg,
  'value': 'Ssang Yong'
}, {
  'icon': subaruImg,
  'value': 'Subaru'
}, {
  'icon': suzukiImg,
  'value': 'Suzuki'
}, {
  'icon': tataImg,
  'value': 'Tata'
}, {
  'icon': toyotaImg,
  'value': 'Toyota'
}, {
  'icon': tvrImg,
  'value': 'Tvr'
}, {
  'icon': volkswagenImg,
  'value': 'Volkswagen'
}, {
  'icon': volvoImg,
  'value': 'Volvo'
}, {
  'icon': waldImg,
  'value': 'Wald'
}, {
  'icon': yamahaImg,
  'value': 'Yamaha'
}, {
  'icon': znaImg,
  'value': 'Zna'
}];
function getCarBrandsIcon(data) {
  if (data) {
    let selectedBrand = carBrandsList.find(function (item) {
      return item.value.toLowerCase() === data.toLowerCase();
    });

    if (selectedBrand) {
      return selectedBrand.icon;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
function getCarBrand(data) {
  if (data) {
    let selectedBrand = carBrandsList.find(function (item) {
      return item.value.toLowerCase() === data.toLowerCase();
    });

    if (selectedBrand) {
      return selectedBrand;
    } else {
      return {
        value: null,
        icon: null
      };
    }
  } else {
    return {
      value: null,
      icon: null
    };
  }
}
/* harmony default export */ __webpack_exports__["default"] = ({
  carBrandsList
});

/***/ }),

/***/ "./params/colorList.js":
/*!*****************************!*\
  !*** ./params/colorList.js ***!
  \*****************************/
/*! exports provided: colorList, getColorIcon, getColor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorList", function() { return colorList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColorIcon", function() { return getColorIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColor", function() { return getColor; });
const colorList = [{
  'code': '#000000',
  'value': 'black'
}, {
  'code': '#FFFFFF',
  'value': 'white'
}, {
  'code': '#E7E7E7',
  'value': 'silver'
}, {
  'code': '#757575',
  'value': 'grey'
}, {
  'code': '#CA912B',
  'value': 'brown'
}, {
  'code': '#623008',
  'value': 'bronze'
}, {
  'code': '#E3C57D',
  'value': 'gold'
}, {
  'code': '#F1DCC3',
  'value': 'beige'
}, {
  'code': '#FFF009',
  'value': 'yellow'
}, {
  'code': '#F87719',
  'value': 'orange'
}, {
  'code': '#DA0000',
  'value': 'red'
}, {
  'code': '#760000',
  'value': 'maroon'
}, {
  'code': '#AC005A',
  'value': 'magenta'
}, {
  'code': '#DC7EA8',
  'value': 'pink'
}, {
  'code': '#670DA8',
  'value': 'purple'
}, {
  'code': '#4EC375',
  'value': 'green'
}, {
  'code': '#01007D',
  'value': 'blue'
}, {
  'code': 'white',
  'value': 'other'
}];
function getColorIcon(color) {
  if (color) {
    let selectedColor = colorList.find(function (item) {
      return item.value.toLowerCase() === color.toLowerCase();
    });

    if (selectedColor) {
      return selectedColor.icon;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
function getColor(color) {
  if (color) {
    let selectedColor = colorList.find(function (item) {
      return item.value.toLowerCase() === color.toLowerCase();
    });

    if (selectedColor) {
      return selectedColor;
    } else {
      return {
        value: null,
        icon: null
      };
    }
  } else {
    return {
      value: null,
      icon: null
    };
  }
}
/* harmony default export */ __webpack_exports__["default"] = ({
  colorList
});

/***/ }),

/***/ "./params/common.js":
/*!**************************!*\
  !*** ./params/common.js ***!
  \**************************/
/*! exports provided: emptyIcon, imageNotFoundIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyIcon", function() { return emptyIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageNotFoundIcon", function() { return imageNotFoundIcon; });
const emptyIcon = '/empty.png';
const imageNotFoundIcon = '/image-not-found.png';

/***/ }),

/***/ "./params/darkThemeColorList.js":
/*!**************************************!*\
  !*** ./params/darkThemeColorList.js ***!
  \**************************************/
/*! exports provided: darkThemeColorList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkThemeColorList", function() { return darkThemeColorList; });
const darkThemeColorList = [{
  'code': '#022c43'
}, {
  'code': '#f05454'
}, {
  'code': '#8f384d'
}, {
  'code': '#556052'
}, {
  'code': '#af6b58'
}, {
  'code': '#39311d'
}, {
  'code': '#8f384d'
}, {
  'code': '#a20a0a'
}, {
  'code': '#595b83'
}, {
  'code': '#db6400'
}, {
  'code': '#794c74'
}];
/* harmony default export */ __webpack_exports__["default"] = ({
  darkThemeColorList
});

/***/ }),

/***/ "./params/fuelTypeList.js":
/*!********************************!*\
  !*** ./params/fuelTypeList.js ***!
  \********************************/
/*! exports provided: fuelTypeList, getFuelTypeIcon, getFuelType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fuelTypeList", function() { return fuelTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFuelTypeIcon", function() { return getFuelTypeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFuelType", function() { return getFuelType; });
const dieselIcon = "/assets/fuelType/diesel.png";
const electricIcon = "/assets/fuelType/electric.png";
const hybridIcon = "/assets/fuelType/hybrid.png";
const petrolLeadedIcon = "/assets/fuelType/petrol-(leaded).png";
const petrolUnleadedIcon = "/assets/fuelType/petrol-(unleaded).png";
const fuelTypeList = [{
  'icon': dieselIcon,
  'value': 'diesel'
}, {
  'icon': hybridIcon,
  'value': 'hybrid'
}, {
  'icon': electricIcon,
  'value': 'ev'
}, {
  'icon': petrolLeadedIcon,
  'value': 'petrol'
}, {
  'icon': petrolLeadedIcon,
  'value': 'phev'
}, {
  'icon': petrolUnleadedIcon,
  'value': 'petrolulp'
}];
function getFuelTypeIcon(fuelType) {
  if (fuelType) {
    let selectedFuelType = fuelTypeList.find(function (item) {
      return item.value.toLowerCase() == fuelType.toLowerCase();
    });

    if (selectedFuelType) {
      return selectedFuelType.icon;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
function getFuelType(fuelType) {
  if (fuelType) {
    let selectedFuelType = fuelTypeList.find(function (item) {
      return item.value.toLowerCase() == fuelType.toLowerCase();
    });

    if (selectedFuelType) {
      return selectedFuelType;
    } else {
      return {
        value: null,
        icon: null
      };
    }
  } else {
    return {
      value: null,
      icon: null
    };
  }
}
/* harmony default export */ __webpack_exports__["default"] = ({
  fuelTypeList
});

/***/ }),

/***/ "./params/stateList.js":
/*!*****************************!*\
  !*** ./params/stateList.js ***!
  \*****************************/
/*! exports provided: StateList, getStateIcon, getState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateList", function() { return StateList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStateIcon", function() { return getStateIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
const federalTerritoryIcon = "/assets/stateIcon/federal territory.png";
const johorIcon = "/assets/stateIcon/johor.png";
const kedahIcon = "/assets/stateIcon/kedah.png";
const kualaLumpurIcon = "/assets/stateIcon/kuala lumpur.png";
const labuanFederalIcon = "/assets/stateIcon/labuan-federal.png";
const labuanIcon = "/assets/stateIcon/labuan.png";
const melakaIcon = "/assets/stateIcon/melaka.png";
const negeriSembilanIcon = "/assets/stateIcon/negeri-sembilan.png";
const pahangIcon = "/assets/stateIcon/pahang.png";
const penangIcon = "/assets/stateIcon/penang.png";
const perakIcon = "/assets/stateIcon/perak.png";
const perlisIcon = "/assets/stateIcon/perlis.png";
const putrajayFederalIcon = "/assets/stateIcon/putrajay-federal.png";
const sabahIcon = "/assets/stateIcon/sabah.png";
const sarawakIcon = "/assets/stateIcon/sarawak.png";
const selangorIcon = "/assets/stateIcon/selangor.png";
const terengganuIcon = "/assets/stateIcon/terengganu.png";
const kelantanIcon = "/assets/stateIcon/kelantan.png";
const StateList = [{
  'icon': federalTerritoryIcon,
  'value': 'Federal Territory'
}, {
  'icon': johorIcon,
  'value': 'Johor'
}, {
  'icon': kedahIcon,
  'value': 'Kedah'
}, {
  'icon': kualaLumpurIcon,
  'value': 'Kuala Lumpur'
}, {
  'icon': labuanFederalIcon,
  'value': 'Labuan Federal'
}, {
  'icon': labuanIcon,
  'value': 'Labuan'
}, {
  'icon': melakaIcon,
  'value': 'Melaka'
}, {
  'icon': negeriSembilanIcon,
  'value': 'Negeri Sembilan'
}, {
  'icon': pahangIcon,
  'value': 'Pahang'
}, {
  'icon': penangIcon,
  'value': 'Penang'
}, {
  'icon': perakIcon,
  'value': 'Perak'
}, {
  'icon': perlisIcon,
  'value': 'Perlis'
}, {
  'icon': putrajayFederalIcon,
  'value': 'Putrajay Federal'
}, {
  'icon': sabahIcon,
  'value': 'Sabah'
}, {
  'icon': sarawakIcon,
  'value': 'Sarawak'
}, {
  'icon': selangorIcon,
  'value': 'Selangor'
}, {
  'icon': terengganuIcon,
  'value': 'Terengganu'
}, {
  'icon': kelantanIcon,
  'value': 'Kelantan'
}];
function getStateIcon(state) {
  if (state) {
    let selectedState = StateList.find(function (item) {
      return item.value.toLowerCase() == state.toLowerCase();
    });

    if (selectedState) {
      return selectedState.icon;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
function getState(state) {
  if (state) {
    let selectedState = StateList.find(function (item) {
      return item.value.toLowerCase() == state.toLowerCase();
    });

    if (selectedState) {
      return selectedState;
    } else {
      return {
        value: null,
        icon: null
      };
    }
  } else {
    return {
      value: null,
      icon: null
    };
  }
}
/* harmony default export */ __webpack_exports__["default"] = ({
  StateList
});

/***/ }),

/***/ "./redux/actions/app-actions.js":
/*!**************************************!*\
  !*** ./redux/actions/app-actions.js ***!
  \**************************************/
/*! exports provided: LOADING, SET_INITED_REDUX, SET_DISABLE_WINDOW_SCROLL, ADVANCE_MODE, LOGIN_MODE, REGISTER_MODE, UPDATE_ACTIVE_MENU, FILTER_CAR_BRAND_MODE, FILTER_CAR_SELECTED_CAR_BRAND_ROW, FILTER_CAR_SEARCH_KEYWORDS, FILTER_CAR_MODEL_MODE, FILTER_CAR_SELECTED_CAR_MODEL_ROW, FILTER_CAR_MODEL_SEARCH_KEYWORDS, FILTER_COLOR_MODE, FILTER_CAR_SELECTED_COLOR_MODEL_ROW, FILTER_COLOR_MODEL_SEARCH_KEYWORDS, FILTER_BODY_TYPE_MODE, FILTER_CAR_SELECTED_BODY_TYPE_MODEL_ROW, FILTER_BODY_TYPE_MODEL_SEARCH_KEYWORDS, FILTER_DRIVEN_WHEELS_MODE, FILTER_CAR_SELECTED_DRIVEN_WHEELS_MODEL_ROW, FILTER_DRIVEN_WHEELS_MODEL_SEARCH_KEYWORDS, FILTER_FUEL_TYPE_MODE, FILTER_CAR_SELECTED_FUEL_TYPE_MODEL_ROW, FILTER_FUEL_TYPE_MODEL_SEARCH_KEYWORDS, FILTER_STATE_MODE, FILTER_CAR_SELECTED_STATE_MODEL_ROW, FILTER_STATE_MODEL_SEARCH_KEYWORDS, QUICK_SEARCH_PRODUCTS_LIST, SHOW_CONTACT_LIST, SET_APPLY_YEAR, SET_APPLY_PRICE, SET_APPLY_MILEAGE, FILTER_CAR_BRANDS, FILTER_CAR_MODELS, FILTER_COLORS, FILTER_BODY_TYPES, FILTER_DRIVEN_WHEELS, FILTER_FUEL_TYPES, FILTER_STATES, SET_MENU_HEIGHT, SET_NOTIFICATION_TOKEN, SET_NOTIFICATION_TOKEN_TIME_OUT_DATE, filterCarBrands, filterCarModels, filterColors, filterBodyTypes, filterDrivenWheels, filterFuelTypes, filterStates, loading, advanceMode, loginMode, registerMode, updateActiveMenu, filterCarBrandMode, filterCarSelectedCarBrandsRow, filterCarSearchKeywords, filterCarModelMode, filterCarSelectedCarModelsRow, filterCarModelSearchKeywords, filterColorMode, filterCarSelectedColorRow, filterColorSearchKeywords, filterBodyTypeMode, filterCarSelectedBodyTypeRow, filterBodyTypeSearchKeywords, filterDrivenWheelMode, filterCarSelectedDrivenWheelRow, filterDrivenWheelSearchKeywords, filterFuelTypeMode, filterCarSelectedFuelTypeRow, filterFuelTypeSearchKeywords, filterStateMode, filterCarSelectedStateRow, filterStateSearchKeywords, quickSearchProductsList, showContactList, setApplyYear, setApplyPrice, setApplyMileage, setMenuHeight, setNotificationToken, setNotificationTokenTimeOutDate, setInitedRedux, setDisableWindowScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING", function() { return LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_INITED_REDUX", function() { return SET_INITED_REDUX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_DISABLE_WINDOW_SCROLL", function() { return SET_DISABLE_WINDOW_SCROLL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADVANCE_MODE", function() { return ADVANCE_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_MODE", function() { return LOGIN_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_MODE", function() { return REGISTER_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ACTIVE_MENU", function() { return UPDATE_ACTIVE_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_CAR_BRAND_MODE", function() { return FILTER_CAR_BRAND_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_CAR_SELECTED_CAR_BRAND_ROW", function() { return FILTER_CAR_SELECTED_CAR_BRAND_ROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_CAR_SEARCH_KEYWORDS", function() { return FILTER_CAR_SEARCH_KEYWORDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_CAR_MODEL_MODE", function() { return FILTER_CAR_MODEL_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_CAR_SELECTED_CAR_MODEL_ROW", function() { return FILTER_CAR_SELECTED_CAR_MODEL_ROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_CAR_MODEL_SEARCH_KEYWORDS", function() { return FILTER_CAR_MODEL_SEARCH_KEYWORDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_COLOR_MODE", function() { return FILTER_COLOR_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_CAR_SELECTED_COLOR_MODEL_ROW", function() { return FILTER_CAR_SELECTED_COLOR_MODEL_ROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_COLOR_MODEL_SEARCH_KEYWORDS", function() { return FILTER_COLOR_MODEL_SEARCH_KEYWORDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_BODY_TYPE_MODE", function() { return FILTER_BODY_TYPE_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_CAR_SELECTED_BODY_TYPE_MODEL_ROW", function() { return FILTER_CAR_SELECTED_BODY_TYPE_MODEL_ROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_BODY_TYPE_MODEL_SEARCH_KEYWORDS", function() { return FILTER_BODY_TYPE_MODEL_SEARCH_KEYWORDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_DRIVEN_WHEELS_MODE", function() { return FILTER_DRIVEN_WHEELS_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_CAR_SELECTED_DRIVEN_WHEELS_MODEL_ROW", function() { return FILTER_CAR_SELECTED_DRIVEN_WHEELS_MODEL_ROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_DRIVEN_WHEELS_MODEL_SEARCH_KEYWORDS", function() { return FILTER_DRIVEN_WHEELS_MODEL_SEARCH_KEYWORDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_FUEL_TYPE_MODE", function() { return FILTER_FUEL_TYPE_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_CAR_SELECTED_FUEL_TYPE_MODEL_ROW", function() { return FILTER_CAR_SELECTED_FUEL_TYPE_MODEL_ROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_FUEL_TYPE_MODEL_SEARCH_KEYWORDS", function() { return FILTER_FUEL_TYPE_MODEL_SEARCH_KEYWORDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_STATE_MODE", function() { return FILTER_STATE_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_CAR_SELECTED_STATE_MODEL_ROW", function() { return FILTER_CAR_SELECTED_STATE_MODEL_ROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_STATE_MODEL_SEARCH_KEYWORDS", function() { return FILTER_STATE_MODEL_SEARCH_KEYWORDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUICK_SEARCH_PRODUCTS_LIST", function() { return QUICK_SEARCH_PRODUCTS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_CONTACT_LIST", function() { return SHOW_CONTACT_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_APPLY_YEAR", function() { return SET_APPLY_YEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_APPLY_PRICE", function() { return SET_APPLY_PRICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_APPLY_MILEAGE", function() { return SET_APPLY_MILEAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_CAR_BRANDS", function() { return FILTER_CAR_BRANDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_CAR_MODELS", function() { return FILTER_CAR_MODELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_COLORS", function() { return FILTER_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_BODY_TYPES", function() { return FILTER_BODY_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_DRIVEN_WHEELS", function() { return FILTER_DRIVEN_WHEELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_FUEL_TYPES", function() { return FILTER_FUEL_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_STATES", function() { return FILTER_STATES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MENU_HEIGHT", function() { return SET_MENU_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_NOTIFICATION_TOKEN", function() { return SET_NOTIFICATION_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_NOTIFICATION_TOKEN_TIME_OUT_DATE", function() { return SET_NOTIFICATION_TOKEN_TIME_OUT_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterCarBrands", function() { return filterCarBrands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterCarModels", function() { return filterCarModels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterColors", function() { return filterColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterBodyTypes", function() { return filterBodyTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterDrivenWheels", function() { return filterDrivenWheels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterFuelTypes", function() { return filterFuelTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterStates", function() { return filterStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loading", function() { return loading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advanceMode", function() { return advanceMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginMode", function() { return loginMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerMode", function() { return registerMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateActiveMenu", function() { return updateActiveMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterCarBrandMode", function() { return filterCarBrandMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterCarSelectedCarBrandsRow", function() { return filterCarSelectedCarBrandsRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterCarSearchKeywords", function() { return filterCarSearchKeywords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterCarModelMode", function() { return filterCarModelMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterCarSelectedCarModelsRow", function() { return filterCarSelectedCarModelsRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterCarModelSearchKeywords", function() { return filterCarModelSearchKeywords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterColorMode", function() { return filterColorMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterCarSelectedColorRow", function() { return filterCarSelectedColorRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterColorSearchKeywords", function() { return filterColorSearchKeywords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterBodyTypeMode", function() { return filterBodyTypeMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterCarSelectedBodyTypeRow", function() { return filterCarSelectedBodyTypeRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterBodyTypeSearchKeywords", function() { return filterBodyTypeSearchKeywords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterDrivenWheelMode", function() { return filterDrivenWheelMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterCarSelectedDrivenWheelRow", function() { return filterCarSelectedDrivenWheelRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterDrivenWheelSearchKeywords", function() { return filterDrivenWheelSearchKeywords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterFuelTypeMode", function() { return filterFuelTypeMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterCarSelectedFuelTypeRow", function() { return filterCarSelectedFuelTypeRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterFuelTypeSearchKeywords", function() { return filterFuelTypeSearchKeywords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterStateMode", function() { return filterStateMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterCarSelectedStateRow", function() { return filterCarSelectedStateRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterStateSearchKeywords", function() { return filterStateSearchKeywords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quickSearchProductsList", function() { return quickSearchProductsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showContactList", function() { return showContactList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setApplyYear", function() { return setApplyYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setApplyPrice", function() { return setApplyPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setApplyMileage", function() { return setApplyMileage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMenuHeight", function() { return setMenuHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNotificationToken", function() { return setNotificationToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNotificationTokenTimeOutDate", function() { return setNotificationTokenTimeOutDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInitedRedux", function() { return setInitedRedux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDisableWindowScroll", function() { return setDisableWindowScroll; });
const LOADING = 'LOADING';
const SET_INITED_REDUX = 'SET_INITED_REDUX';
const SET_DISABLE_WINDOW_SCROLL = 'SET_DISABLE_WINDOW_SCROLL';
const ADVANCE_MODE = 'ADVANCE_MODE';
const LOGIN_MODE = 'LOGIN_MODE';
const REGISTER_MODE = 'REGISTER_MODE';
const UPDATE_ACTIVE_MENU = 'UPDATE_ACTIVE_MENU';
const FILTER_CAR_BRAND_MODE = 'FILTER_CAR_BRAND_MODE';
const FILTER_CAR_SELECTED_CAR_BRAND_ROW = 'FILTER_CAR_SELECTED_CAR_BRAND_ROW';
const FILTER_CAR_SEARCH_KEYWORDS = 'FILTER_CAR_SEARCH_KEYWORDS';
const FILTER_CAR_MODEL_MODE = 'FILTER_CAR_MODEL_MODE';
const FILTER_CAR_SELECTED_CAR_MODEL_ROW = 'FILTER_CAR_SELECTED_CAR_MODEL_ROW';
const FILTER_CAR_MODEL_SEARCH_KEYWORDS = 'FILTER_CAR_MODEL_SEARCH_KEYWORDS';
const FILTER_COLOR_MODE = 'FILTER_COLOR_MODE';
const FILTER_CAR_SELECTED_COLOR_MODEL_ROW = 'FILTER_CAR_SELECTED_COLOR_MODEL_ROW';
const FILTER_COLOR_MODEL_SEARCH_KEYWORDS = 'FILTER_COLOR_MODEL_SEARCH_KEYWORDS';
const FILTER_BODY_TYPE_MODE = 'FILTER_BODY_TYPE_MODE';
const FILTER_CAR_SELECTED_BODY_TYPE_MODEL_ROW = 'FILTER_CAR_SELECTED_BODY_TYPE_MODEL_ROW';
const FILTER_BODY_TYPE_MODEL_SEARCH_KEYWORDS = 'FILTER_BODY_TYPE_MODEL_SEARCH_KEYWORDS';
const FILTER_DRIVEN_WHEELS_MODE = 'FILTER_DRIVEN_WHEELS_MODE';
const FILTER_CAR_SELECTED_DRIVEN_WHEELS_MODEL_ROW = 'FILTER_CAR_SELECTED_DRIVEN_WHEELS_MODEL_ROW';
const FILTER_DRIVEN_WHEELS_MODEL_SEARCH_KEYWORDS = 'FILTER_DRIVEN_WHEELS_MODEL_SEARCH_KEYWORDS';
const FILTER_FUEL_TYPE_MODE = 'FILTER_FUEL_TYPE_MODE';
const FILTER_CAR_SELECTED_FUEL_TYPE_MODEL_ROW = 'FILTER_CAR_SELECTED_FUEL_TYPE_MODEL_ROW';
const FILTER_FUEL_TYPE_MODEL_SEARCH_KEYWORDS = 'FILTER_FUEL_TYPE_MODEL_SEARCH_KEYWORDS';
const FILTER_STATE_MODE = 'FILTER_STATE_MODE';
const FILTER_CAR_SELECTED_STATE_MODEL_ROW = 'FILTER_CAR_SELECTED_STATE_MODEL_ROW';
const FILTER_STATE_MODEL_SEARCH_KEYWORDS = 'FILTER_STATE_MODEL_SEARCH_KEYWORDS';
const QUICK_SEARCH_PRODUCTS_LIST = 'QUICK_SEARCH_PRODUCTS_LIST';
const SHOW_CONTACT_LIST = 'SHOW_CONTACT_LIST';
const SET_APPLY_YEAR = 'SET_APPLY_YEAR';
const SET_APPLY_PRICE = 'SET_APPLY_PRICE';
const SET_APPLY_MILEAGE = 'SET_APPLY_MILEAGE';
const FILTER_CAR_BRANDS = 'FILTER_CAR_BRANDS';
const FILTER_CAR_MODELS = 'FILTER_CAR_MODELS';
const FILTER_COLORS = 'FILTER_COLORS';
const FILTER_BODY_TYPES = 'FILTER_BODY_TYPES';
const FILTER_DRIVEN_WHEELS = 'FILTER_DRIVEN_WHEELS';
const FILTER_FUEL_TYPES = 'FILTER_FUEL_TYPES';
const FILTER_STATES = 'FILTER_STATES';
const SET_MENU_HEIGHT = 'SET_MENU_HEIGHT';
const SET_NOTIFICATION_TOKEN = 'SET_NOTIFICATION_TOKEN';
const SET_NOTIFICATION_TOKEN_TIME_OUT_DATE = 'SET_NOTIFICATION_TOKEN_TIME_OUT_DATE'; //fetch quick filter

function filterCarBrands(data) {
  return dispatch => {
    dispatch({
      type: FILTER_CAR_BRANDS,
      data: data
    });
  };
}
function filterCarModels(data) {
  return dispatch => {
    dispatch({
      type: FILTER_CAR_MODELS,
      data: data
    });
  };
}
function filterColors(data) {
  return dispatch => {
    dispatch({
      type: FILTER_COLORS,
      data: data
    });
  };
}
function filterBodyTypes(data) {
  return dispatch => {
    dispatch({
      type: FILTER_BODY_TYPES,
      data: data
    });
  };
}
function filterDrivenWheels(data) {
  return dispatch => {
    dispatch({
      type: FILTER_DRIVEN_WHEELS,
      data: data
    });
  };
}
function filterFuelTypes(data) {
  return dispatch => {
    dispatch({
      type: FILTER_FUEL_TYPES,
      data: data
    });
  };
}
function filterStates(data) {
  return dispatch => {
    dispatch({
      type: FILTER_STATES,
      data: data
    });
  };
} //end fetch quick filter

function loading(data) {
  return dispatch => {
    dispatch({
      type: LOADING,
      payload: data
    });
  };
}
function advanceMode(data) {
  return dispatch => {
    dispatch({
      type: ADVANCE_MODE,
      payload: data
    });
  };
}
function loginMode(data) {
  return dispatch => {
    dispatch({
      type: LOGIN_MODE,
      data: data
    });
  };
}
;
function registerMode(data) {
  return dispatch => {
    dispatch({
      type: REGISTER_MODE,
      data: data
    });
  };
}
;
function updateActiveMenu(data) {
  return dispatch => {
    dispatch({
      type: UPDATE_ACTIVE_MENU,
      data: data
    });
  };
} // filter car
//................................................

function filterCarBrandMode(data) {
  return dispatch => {
    dispatch({
      type: FILTER_CAR_BRAND_MODE,
      data: data
    });
  };
}
function filterCarSelectedCarBrandsRow(data, index) {
  return dispatch => {
    dispatch({
      type: FILTER_CAR_SELECTED_CAR_BRAND_ROW,
      data: data,
      index: index
    });
  };
}
function filterCarSearchKeywords(data) {
  return dispatch => {
    dispatch({
      type: FILTER_CAR_SEARCH_KEYWORDS,
      data: data
    });
  };
} // end filter car .......................................
// filter model
//................................................

function filterCarModelMode(data) {
  return dispatch => {
    dispatch({
      type: FILTER_CAR_MODEL_MODE,
      data: data
    });
  };
}
function filterCarSelectedCarModelsRow(data, index) {
  return dispatch => {
    dispatch({
      type: FILTER_CAR_SELECTED_CAR_MODEL_ROW,
      data: data,
      index: index
    });
  };
}
function filterCarModelSearchKeywords(data) {
  return dispatch => {
    dispatch({
      type: FILTER_CAR_MODEL_SEARCH_KEYWORDS,
      data: data
    });
  };
} // end filter model .......................................
// filter color
//................................................

function filterColorMode(data) {
  return dispatch => {
    dispatch({
      type: FILTER_COLOR_MODE,
      data: data
    });
  };
}
function filterCarSelectedColorRow(data, index) {
  return dispatch => {
    dispatch({
      type: FILTER_CAR_SELECTED_COLOR_MODEL_ROW,
      data: data,
      index: index
    });
  };
}
function filterColorSearchKeywords(data) {
  return dispatch => {
    dispatch({
      type: FILTER_COLOR_MODEL_SEARCH_KEYWORDS,
      data: data
    });
  };
} // end filter color .......................................

function filterBodyTypeMode(data) {
  return dispatch => {
    dispatch({
      type: FILTER_BODY_TYPE_MODE,
      data: data
    });
  };
}
function filterCarSelectedBodyTypeRow(data, index) {
  return dispatch => {
    dispatch({
      type: FILTER_CAR_SELECTED_BODY_TYPE_MODEL_ROW,
      data: data,
      index: index
    });
  };
}
function filterBodyTypeSearchKeywords(data) {
  return dispatch => {
    dispatch({
      type: FILTER_BODY_TYPE_MODEL_SEARCH_KEYWORDS,
      data: data
    });
  };
} // end filter body type .......................................
// filter driven wheels
//................................................

function filterDrivenWheelMode(data) {
  return dispatch => {
    dispatch({
      type: FILTER_DRIVEN_WHEELS_MODE,
      data: data
    });
  };
}
function filterCarSelectedDrivenWheelRow(data, index) {
  return dispatch => {
    dispatch({
      type: FILTER_CAR_SELECTED_DRIVEN_WHEELS_MODEL_ROW,
      data: data,
      index: index
    });
  };
}
function filterDrivenWheelSearchKeywords(data) {
  return dispatch => {
    dispatch({
      type: FILTER_DRIVEN_WHEELS_MODEL_SEARCH_KEYWORDS,
      data: data
    });
  };
} // end filter driven wheel .......................................
// filter fuel type
//................................................

function filterFuelTypeMode(data) {
  return dispatch => {
    dispatch({
      type: FILTER_FUEL_TYPE_MODE,
      data: data
    });
  };
}
function filterCarSelectedFuelTypeRow(data, index) {
  return dispatch => {
    dispatch({
      type: FILTER_CAR_SELECTED_FUEL_TYPE_MODEL_ROW,
      data: data,
      index: index
    });
  };
}
function filterFuelTypeSearchKeywords(data) {
  return dispatch => {
    dispatch({
      type: FILTER_FUEL_TYPE_MODEL_SEARCH_KEYWORDS,
      data: data
    });
  };
} // end filter fuel type .......................................
// filter state
//................................................

function filterStateMode(data) {
  return dispatch => {
    dispatch({
      type: FILTER_STATE_MODE,
      data: data
    });
  };
}
function filterCarSelectedStateRow(data, index) {
  return dispatch => {
    dispatch({
      type: FILTER_CAR_SELECTED_STATE_MODEL_ROW,
      data: data,
      index: index
    });
  };
}
function filterStateSearchKeywords(data) {
  return dispatch => {
    dispatch({
      type: FILTER_STATE_MODEL_SEARCH_KEYWORDS,
      data: data
    });
  };
} // end filter state .......................................

function quickSearchProductsList(mode, quickSearchCarSpecsData, quickSearchProductadsData, values) {
  return dispatch => {
    dispatch({
      type: QUICK_SEARCH_PRODUCTS_LIST,
      mode: mode,
      quickSearchCarSpecsData,
      quickSearchProductadsData,
      values
    });
  };
}
function showContactList(boolean) {
  return dispatch => {
    dispatch({
      type: SHOW_CONTACT_LIST,
      boolean
    });
  };
}
function setApplyYear(data) {
  return dispatch => {
    dispatch({
      type: SET_APPLY_YEAR,
      data
    });
  };
}
function setApplyPrice(data) {
  return dispatch => {
    dispatch({
      type: SET_APPLY_PRICE,
      data
    });
  };
}
function setApplyMileage(data) {
  return dispatch => {
    dispatch({
      type: SET_APPLY_MILEAGE,
      data
    });
  };
}
function setMenuHeight(data) {
  return dispatch => {
    dispatch({
      type: SET_MENU_HEIGHT,
      data
    });
  };
}
function setNotificationToken(data) {
  return dispatch => {
    dispatch({
      type: SET_NOTIFICATION_TOKEN,
      data
    });
  };
}
function setNotificationTokenTimeOutDate(data) {
  return dispatch => {
    dispatch({
      type: SET_NOTIFICATION_TOKEN_TIME_OUT_DATE,
      data
    });
  };
}
function setInitedRedux(data) {
  return dispatch => {
    dispatch({
      type: SET_INITED_REDUX,
      data
    });
  };
}
function setDisableWindowScroll(data) {
  return dispatch => {
    dispatch({
      type: SET_DISABLE_WINDOW_SCROLL,
      data
    });
  };
}

/***/ }),

/***/ "./redux/actions/live-action.js":
/*!**************************************!*\
  !*** ./redux/actions/live-action.js ***!
  \**************************************/
/*! exports provided: FETCH_CLIENT_SOCKET_IO, CLEAR_CLIENT_SOCKET_IO, fetchClientSocketIo, clearClientSocketIo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CLIENT_SOCKET_IO", function() { return FETCH_CLIENT_SOCKET_IO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_CLIENT_SOCKET_IO", function() { return CLEAR_CLIENT_SOCKET_IO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchClientSocketIo", function() { return fetchClientSocketIo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearClientSocketIo", function() { return clearClientSocketIo; });
const FETCH_CLIENT_SOCKET_IO = 'FETCH_CLIENT_SOCKET_IO';
const CLEAR_CLIENT_SOCKET_IO = 'CLEAR_CLIENT_SOCKET_IO';
function fetchClientSocketIo(data) {
  return dispatch => {
    dispatch({
      type: FETCH_CLIENT_SOCKET_IO,
      payload: data
    });
  };
}
function clearClientSocketIo(data) {
  return dispatch => {
    dispatch({
      type: CLEAR_CLIENT_SOCKET_IO
    });
  };
}

/***/ }),

/***/ "./redux/actions/newcars-actions.js":
/*!******************************************!*\
  !*** ./redux/actions/newcars-actions.js ***!
  \******************************************/
/*! exports provided: FETCH_NEWS, FETCH_CLUB, FETCH_PRICE, FETCH_POPULAR, FETCH_POPULARCARS, FETCH_CARNAME, FETCH_CARDETAILS, FETCH_BRANDS, FETCH_BRANDDETAIL, FETCH_BRANDCARS, FETCH_DETAILS, FETCH_FUEL, FETCH_FILTERED_COMPARE_DATA, FETCH_PEER_COMPARE_CARS, FETCH_COMPARE_NEWCAR_IDS, ADD_COMPARE_NEWCAR_ID, REMOVE_COMPARE_NEWCAR_ID, FETCH_COMPARE__NEWCAR_LIMIT, FETCH_NEW_CAR_FILTER_GROUP, RESET_NEW_CAR_FILTER_GROUP, fetchNews, fetchClub, fetchPrice, fetchPopular, fetchPopularCars, fetchCarName, fetchCarDetails, fetchBrands, fetchBrandDetail, fetchBrandCars, fetchDetails, fetchFuel, filteredCompareData, fetchCompareNewCarIds, addCompareNewCarId, removeCompareNewCarId, fetchCompareNewCarLimit, fetchPeerCompareCars, fetchNewCarFilterGroup, resetNewCarFilterGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_NEWS", function() { return FETCH_NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CLUB", function() { return FETCH_CLUB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRICE", function() { return FETCH_PRICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_POPULAR", function() { return FETCH_POPULAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_POPULARCARS", function() { return FETCH_POPULARCARS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CARNAME", function() { return FETCH_CARNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CARDETAILS", function() { return FETCH_CARDETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_BRANDS", function() { return FETCH_BRANDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_BRANDDETAIL", function() { return FETCH_BRANDDETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_BRANDCARS", function() { return FETCH_BRANDCARS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DETAILS", function() { return FETCH_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_FUEL", function() { return FETCH_FUEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_FILTERED_COMPARE_DATA", function() { return FETCH_FILTERED_COMPARE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PEER_COMPARE_CARS", function() { return FETCH_PEER_COMPARE_CARS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_COMPARE_NEWCAR_IDS", function() { return FETCH_COMPARE_NEWCAR_IDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMPARE_NEWCAR_ID", function() { return ADD_COMPARE_NEWCAR_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_COMPARE_NEWCAR_ID", function() { return REMOVE_COMPARE_NEWCAR_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_COMPARE__NEWCAR_LIMIT", function() { return FETCH_COMPARE__NEWCAR_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_NEW_CAR_FILTER_GROUP", function() { return FETCH_NEW_CAR_FILTER_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_NEW_CAR_FILTER_GROUP", function() { return RESET_NEW_CAR_FILTER_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchNews", function() { return fetchNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchClub", function() { return fetchClub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPrice", function() { return fetchPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPopular", function() { return fetchPopular; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPopularCars", function() { return fetchPopularCars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCarName", function() { return fetchCarName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCarDetails", function() { return fetchCarDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBrands", function() { return fetchBrands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBrandDetail", function() { return fetchBrandDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBrandCars", function() { return fetchBrandCars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDetails", function() { return fetchDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFuel", function() { return fetchFuel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filteredCompareData", function() { return filteredCompareData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCompareNewCarIds", function() { return fetchCompareNewCarIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCompareNewCarId", function() { return addCompareNewCarId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCompareNewCarId", function() { return removeCompareNewCarId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCompareNewCarLimit", function() { return fetchCompareNewCarLimit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPeerCompareCars", function() { return fetchPeerCompareCars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchNewCarFilterGroup", function() { return fetchNewCarFilterGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetNewCarFilterGroup", function() { return resetNewCarFilterGroup; });
const FETCH_NEWS = 'FETCH_NEWS';
const FETCH_CLUB = 'FETCH_CLUB';
const FETCH_PRICE = 'FETCH_PRICE';
const FETCH_POPULAR = 'FETCH_POPULAR';
const FETCH_POPULARCARS = 'FETCH_POPULARCARS';
const FETCH_CARNAME = 'FETCH_CARNAME';
const FETCH_CARDETAILS = 'FETCH_CARDETAILS';
const FETCH_BRANDS = 'FETCH_BRANDS';
const FETCH_BRANDDETAIL = 'FETCH_BRANDDETAIL';
const FETCH_BRANDCARS = 'FETCH_BRANDCARS';
const FETCH_DETAILS = 'FETCH_DETAILS';
const FETCH_FUEL = 'FETCH_FUEL';
const FETCH_FILTERED_COMPARE_DATA = 'FETCH_FILTERED_COMPARE_DATA';
const FETCH_PEER_COMPARE_CARS = 'FETCH_PEER_COMPARE_CARS';
const FETCH_COMPARE_NEWCAR_IDS = 'FETCH_COMPARE_NEWCAR_IDS';
const ADD_COMPARE_NEWCAR_ID = 'ADD_COMPARE_NEWCAR_ID';
const REMOVE_COMPARE_NEWCAR_ID = 'REMOVE_COMPARE_NEWCAR_ID';
const FETCH_COMPARE__NEWCAR_LIMIT = 'FETCH_COMPARE__NEWCAR_LIMIT';
const FETCH_NEW_CAR_FILTER_GROUP = 'FETCH_NEW_CAR_FILTER_GROUP';
const RESET_NEW_CAR_FILTER_GROUP = 'RESET_NEW_CAR_FILTER_GROUP';
function fetchNews(data) {
  return dispatch => {
    dispatch({
      type: FETCH_NEWS,
      payload: data
    });
  };
}
function fetchClub(data) {
  return dispatch => {
    dispatch({
      type: FETCH_CLUB,
      payload: data
    });
  };
}
function fetchPrice(data) {
  return dispatch => {
    dispatch({
      type: FETCH_PRICE,
      payload: data
    });
  };
}
function fetchPopular(data) {
  return dispatch => {
    dispatch({
      type: FETCH_POPULAR,
      payload: data
    });
  };
}
function fetchPopularCars(data) {
  return dispatch => {
    dispatch({
      type: FETCH_POPULARCARS,
      payload: data
    });
  };
}
function fetchCarName(data) {
  return dispatch => {
    dispatch({
      type: FETCH_CARNAME,
      payload: data
    });
  };
}
function fetchCarDetails(data) {
  return dispatch => {
    dispatch({
      type: FETCH_CARDETAILS,
      payload: data
    });
  };
}
function fetchBrands(data) {
  return dispatch => {
    dispatch({
      type: FETCH_BRANDS,
      payload: data
    });
  };
}
function fetchBrandDetail(data) {
  return dispatch => {
    dispatch({
      type: FETCH_BRANDDETAIL,
      payload: data
    });
  };
}
function fetchBrandCars(data) {
  return dispatch => {
    dispatch({
      type: FETCH_BRANDCARS,
      payload: data
    });
  };
}
function fetchDetails(data) {
  return dispatch => {
    dispatch({
      type: FETCH_DETAILS,
      payload: data
    });
  };
}
function fetchFuel(data) {
  return dispatch => {
    dispatch({
      type: FETCH_FUEL,
      payload: data
    });
  };
}
function filteredCompareData(data) {
  return dispatch => {
    dispatch({
      type: FETCH_FILTERED_COMPARE_DATA,
      payload: data
    });
  };
}
function fetchCompareNewCarIds(data) {
  return dispatch => {
    dispatch({
      type: FETCH_COMPARE_NEWCAR_IDS,
      payload: data
    });
  };
}
function addCompareNewCarId(data) {
  return dispatch => {
    dispatch({
      type: ADD_COMPARE_NEWCAR_ID,
      payload: data
    });
  };
}
function removeCompareNewCarId(data) {
  return dispatch => {
    dispatch({
      type: REMOVE_COMPARE_NEWCAR_ID,
      payload: data
    });
  };
}
function fetchCompareNewCarLimit(data) {
  return dispatch => {
    dispatch({
      type: FETCH_COMPARE__NEWCAR_LIMIT,
      payload: data
    });
  };
}
function fetchPeerCompareCars(data) {
  return dispatch => {
    dispatch({
      type: FETCH_PEER_COMPARE_CARS,
      payload: data
    });
  };
}
function fetchNewCarFilterGroup(data) {
  return dispatch => {
    dispatch({
      type: FETCH_NEW_CAR_FILTER_GROUP,
      payload: data
    });
  };
}
function resetNewCarFilterGroup(data) {
  return dispatch => {
    dispatch({
      type: RESET_NEW_CAR_FILTER_GROUP
    });
  };
}

/***/ }),

/***/ "./redux/actions/productsList-actions.js":
/*!***********************************************!*\
  !*** ./redux/actions/productsList-actions.js ***!
  \***********************************************/
/*! exports provided: FETCH_PRODUCTSLIST, FETCH_PRODUCTSLIST_HOME, PUSH_PRODUCTSLIST, REMOVE_PRODUCTSLIST, UPDATE_PRODUCTSLIST, UPDATE_ACTIVE_ID_PRODUCTS_LIST, ADD_COMPARE__PRODUCT_ID, REMOVE_COMPARE_PRODUCT_ID, CLEAR_COMPARE_PRODUCT_IDS, PATCH_COMPARE_PRODUCT_IDS, FETCH_FILTERED_COMPARE_DATA, FETCH_FEATURES_LIST, UPDATE_CHECKED_FEATURES_DATE, FETCH_COMPARE_LIMIT, FETCH_PRODUCT_FILTER_OPTIONS, CLEAR_PRODUCT_FILTER_OPTIONS, FETCH_PRODUCT_FILTER_GROUP, CLEAR_PRODUCT_FILTER_GROUP, FETCH_PRODUCT_FILTER_CONFIG, CLEAR_PRODUCT_FILTER_CONFIG, FETCH_FILTER_MODAL_STATE, SET_PRODUCT_LIST_LOADING, fetchProductsList, fetchProductsListHome, pushProductsList, removeProductsList, updateProductList, updateActiveIdProductList, clearCompareProductIds, filteredCompareData, fetchFeaturesList, updateCheckedFeaturesDate, fetchCompareCarLimit, addCompareProductId, removeCompareProductId, patchCompareProductIds, fetchProductFilterOptions, clearProductFilterOptions, fetchProductFilterGroup, clearProductFilterGroup, fetchProductFilterConfig, clearProductFilterConfig, fetchFilterModalState, setProductListLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCTSLIST", function() { return FETCH_PRODUCTSLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCTSLIST_HOME", function() { return FETCH_PRODUCTSLIST_HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUSH_PRODUCTSLIST", function() { return PUSH_PRODUCTSLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_PRODUCTSLIST", function() { return REMOVE_PRODUCTSLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PRODUCTSLIST", function() { return UPDATE_PRODUCTSLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ACTIVE_ID_PRODUCTS_LIST", function() { return UPDATE_ACTIVE_ID_PRODUCTS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMPARE__PRODUCT_ID", function() { return ADD_COMPARE__PRODUCT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_COMPARE_PRODUCT_ID", function() { return REMOVE_COMPARE_PRODUCT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_COMPARE_PRODUCT_IDS", function() { return CLEAR_COMPARE_PRODUCT_IDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATCH_COMPARE_PRODUCT_IDS", function() { return PATCH_COMPARE_PRODUCT_IDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_FILTERED_COMPARE_DATA", function() { return FETCH_FILTERED_COMPARE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_FEATURES_LIST", function() { return FETCH_FEATURES_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CHECKED_FEATURES_DATE", function() { return UPDATE_CHECKED_FEATURES_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_COMPARE_LIMIT", function() { return FETCH_COMPARE_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCT_FILTER_OPTIONS", function() { return FETCH_PRODUCT_FILTER_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_PRODUCT_FILTER_OPTIONS", function() { return CLEAR_PRODUCT_FILTER_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCT_FILTER_GROUP", function() { return FETCH_PRODUCT_FILTER_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_PRODUCT_FILTER_GROUP", function() { return CLEAR_PRODUCT_FILTER_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCT_FILTER_CONFIG", function() { return FETCH_PRODUCT_FILTER_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_PRODUCT_FILTER_CONFIG", function() { return CLEAR_PRODUCT_FILTER_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_FILTER_MODAL_STATE", function() { return FETCH_FILTER_MODAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PRODUCT_LIST_LOADING", function() { return SET_PRODUCT_LIST_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductsList", function() { return fetchProductsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductsListHome", function() { return fetchProductsListHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushProductsList", function() { return pushProductsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeProductsList", function() { return removeProductsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProductList", function() { return updateProductList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateActiveIdProductList", function() { return updateActiveIdProductList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCompareProductIds", function() { return clearCompareProductIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filteredCompareData", function() { return filteredCompareData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFeaturesList", function() { return fetchFeaturesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCheckedFeaturesDate", function() { return updateCheckedFeaturesDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCompareCarLimit", function() { return fetchCompareCarLimit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCompareProductId", function() { return addCompareProductId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCompareProductId", function() { return removeCompareProductId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchCompareProductIds", function() { return patchCompareProductIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductFilterOptions", function() { return fetchProductFilterOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearProductFilterOptions", function() { return clearProductFilterOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductFilterGroup", function() { return fetchProductFilterGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearProductFilterGroup", function() { return clearProductFilterGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductFilterConfig", function() { return fetchProductFilterConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearProductFilterConfig", function() { return clearProductFilterConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFilterModalState", function() { return fetchFilterModalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProductListLoading", function() { return setProductListLoading; });
const FETCH_PRODUCTSLIST = 'FETCH_PRODUCTSLIST';
const FETCH_PRODUCTSLIST_HOME = 'FETCH_PRODUCTSLIST_HOME';
const PUSH_PRODUCTSLIST = 'PUSH_PRODUCTSLIST';
const REMOVE_PRODUCTSLIST = 'REMOVE_PRODUCTSLIST';
const UPDATE_PRODUCTSLIST = 'UPDATE_PRODUCTSLIST';
const UPDATE_ACTIVE_ID_PRODUCTS_LIST = 'UPDATE_ACTIVE_ID_PRODUCTS_LIST';
const ADD_COMPARE__PRODUCT_ID = 'ADD_COMPARE__PRODUCT_ID';
const REMOVE_COMPARE_PRODUCT_ID = 'REMOVE_COMPARE_PRODUCT_ID';
const CLEAR_COMPARE_PRODUCT_IDS = 'CLEAR_COMPARE_PRODUCT_IDS';
const PATCH_COMPARE_PRODUCT_IDS = 'PATCH_COMPARE_PRODUCT_IDS';
const FETCH_FILTERED_COMPARE_DATA = 'FETCH_FILTERED_COMPARE_DATA';
const FETCH_FEATURES_LIST = 'FETCH_FEATURES_LIST';
const UPDATE_CHECKED_FEATURES_DATE = 'UPDATE_CHECKED_FEATURES_DATE';
const FETCH_COMPARE_LIMIT = 'FETCH_COMPARE_LIMIT';
const FETCH_PRODUCT_FILTER_OPTIONS = 'FETCH_PRODUCT_FILTER_OPTIONS';
const CLEAR_PRODUCT_FILTER_OPTIONS = 'CLEAR_PRODUCT_FILTER_OPTIONS';
const FETCH_PRODUCT_FILTER_GROUP = 'FETCH_PRODUCT_FILTER_GROUP';
const CLEAR_PRODUCT_FILTER_GROUP = 'CLEAR_PRODUCT_FILTER_GROUP';
const FETCH_PRODUCT_FILTER_CONFIG = 'FETCH_PRODUCT_FILTER_CONFIG';
const CLEAR_PRODUCT_FILTER_CONFIG = 'CLEAR_PRODUCT_FILTER_CONFIG';
const FETCH_FILTER_MODAL_STATE = 'FETCH_FILTER_MODAL_STATE';
const SET_PRODUCT_LIST_LOADING = 'SET_PRODUCT_LIST_LOADING';
function fetchProductsList(data) {
  return dispatch => {
    dispatch({
      type: FETCH_PRODUCTSLIST,
      payload: data
    });
  };
}
function fetchProductsListHome(data) {
  return dispatch => {
    dispatch({
      type: FETCH_PRODUCTSLIST_HOME,
      payload: data
    });
  };
}
function pushProductsList(data) {
  return dispatch => {
    dispatch({
      type: PUSH_PRODUCTSLIST,
      payload: data
    });
  };
}
function removeProductsList(data) {
  return dispatch => {
    dispatch({
      type: REMOVE_PRODUCTSLIST,
      payload: data
    });
  };
}
function updateProductList(data) {
  return dispatch => {
    dispatch({
      type: UPDATE_PRODUCTSLIST,
      payload: data
    });
  };
}
function updateActiveIdProductList(id) {
  return dispatch => {
    dispatch({
      type: UPDATE_ACTIVE_ID_PRODUCTS_LIST,
      id
    });
  };
}
function clearCompareProductIds() {
  return dispatch => {
    dispatch({
      type: CLEAR_COMPARE_PRODUCT_IDS
    });
  };
}
function filteredCompareData(data) {
  return dispatch => {
    dispatch({
      type: FETCH_FILTERED_COMPARE_DATA,
      payload: data
    });
  };
}
function fetchFeaturesList(data) {
  return dispatch => {
    dispatch({
      type: FETCH_FEATURES_LIST,
      payload: data
    });
  };
}
function updateCheckedFeaturesDate(data) {
  return dispatch => {
    dispatch({
      type: UPDATE_CHECKED_FEATURES_DATE,
      payload: data
    });
  };
}
function fetchCompareCarLimit(data) {
  return dispatch => {
    dispatch({
      type: FETCH_COMPARE_LIMIT,
      payload: data
    });
  };
}
function addCompareProductId(data) {
  return dispatch => {
    dispatch({
      type: ADD_COMPARE__PRODUCT_ID,
      payload: data
    });
  };
}
function removeCompareProductId(data) {
  return dispatch => {
    dispatch({
      type: REMOVE_COMPARE_PRODUCT_ID,
      payload: data
    });
  };
}
function patchCompareProductIds(data) {
  return dispatch => {
    dispatch({
      type: PATCH_COMPARE_PRODUCT_IDS,
      payload: data
    });
  };
}
function fetchProductFilterOptions(data) {
  return dispatch => {
    dispatch({
      type: FETCH_PRODUCT_FILTER_OPTIONS,
      payload: data
    });
  };
}
function clearProductFilterOptions(data) {
  return dispatch => {
    dispatch({
      type: CLEAR_PRODUCT_FILTER_OPTIONS,
      payload: {}
    });
  };
}
function fetchProductFilterGroup(data) {
  return dispatch => {
    dispatch({
      type: FETCH_PRODUCT_FILTER_GROUP,
      payload: data
    });
  };
}
function clearProductFilterGroup(data) {
  return dispatch => {
    dispatch({
      type: CLEAR_PRODUCT_FILTER_GROUP,
      payload: {}
    });
  };
}
function fetchProductFilterConfig(data) {
  return dispatch => {
    dispatch({
      type: FETCH_PRODUCT_FILTER_CONFIG,
      payload: data
    });
  };
}
function clearProductFilterConfig() {
  return dispatch => {
    dispatch({
      type: CLEAR_PRODUCT_FILTER_CONFIG,
      payload: {}
    });
  };
}
function fetchFilterModalState(data) {
  return dispatch => {
    dispatch({
      type: FETCH_FILTER_MODAL_STATE,
      payload: data
    });
  };
}
function setProductListLoading(data) {
  return dispatch => {
    dispatch({
      type: SET_PRODUCT_LIST_LOADING,
      payload: data
    });
  };
}

/***/ }),

/***/ "./redux/actions/socketRefresh-actions.js":
/*!************************************************!*\
  !*** ./redux/actions/socketRefresh-actions.js ***!
  \************************************************/
/*! exports provided: UPDATE_SOCKET_INFO, DELETE_SOCKET_INFO, updateSocketInfo, deleteSocketInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SOCKET_INFO", function() { return UPDATE_SOCKET_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_SOCKET_INFO", function() { return DELETE_SOCKET_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSocketInfo", function() { return updateSocketInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSocketInfo", function() { return deleteSocketInfo; });
const UPDATE_SOCKET_INFO = 'UPDATE_SOCKET_INFO';
const DELETE_SOCKET_INFO = 'DELETE_SOCKET_INFO';
function updateSocketInfo(socketInfo) {
  return dispatch => {
    dispatch({
      type: UPDATE_SOCKET_INFO,
      payload: socketInfo
    });
  };
}
function deleteSocketInfo() {
  return dispatch => {
    dispatch({
      type: DELETE_SOCKET_INFO,
      payload: false
    });
  };
}

/***/ }),

/***/ "./redux/actions/user-actions.js":
/*!***************************************!*\
  !*** ./redux/actions/user-actions.js ***!
  \***************************************/
/*! exports provided: LOGIN_SUCCESSFUL, LOGOUT_SUCCESSFUL, ADDRESS_BOOK_FORM, BANK_FORM, CARD_FORM, SET_USER, loginSuccessful, logoutSuccessful, setUser, addressBookForm, cardForm, bankForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESSFUL", function() { return LOGIN_SUCCESSFUL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_SUCCESSFUL", function() { return LOGOUT_SUCCESSFUL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDRESS_BOOK_FORM", function() { return ADDRESS_BOOK_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BANK_FORM", function() { return BANK_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_FORM", function() { return CARD_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER", function() { return SET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccessful", function() { return loginSuccessful; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutSuccessful", function() { return logoutSuccessful; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addressBookForm", function() { return addressBookForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardForm", function() { return cardForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bankForm", function() { return bankForm; });
const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
const LOGOUT_SUCCESSFUL = 'LOGOUT_SUCCESSFUL';
const ADDRESS_BOOK_FORM = 'ADDRESS_BOOK_FORM';
const BANK_FORM = 'BANK_FORM';
const CARD_FORM = 'CARD_FORM';
const SET_USER = 'SET_USER';
function loginSuccessful(userInfo) {
  return dispatch => {
    dispatch({
      type: LOGIN_SUCCESSFUL,
      payload: userInfo
    });
  };
}
function logoutSuccessful() {
  return dispatch => {
    dispatch({
      type: LOGOUT_SUCCESSFUL,
      payload: false
    });
  };
}
function setUser(userInfo) {
  return dispatch => {
    dispatch({
      type: SET_USER,
      payload: userInfo
    });
  };
}
function addressBookForm(form) {
  return dispatch => {
    dispatch({
      type: ADDRESS_BOOK_FORM,
      payload: form
    });
  };
}
function cardForm(form) {
  return dispatch => {
    dispatch({
      type: CARD_FORM,
      payload: form
    });
  };
}
function bankForm(form) {
  return dispatch => {
    dispatch({
      type: BANK_FORM,
      payload: form
    });
  };
}

/***/ }),

/***/ "./redux/config.js":
/*!*************************!*\
  !*** ./redux/config.js ***!
  \*************************/
/*! exports provided: statePersistActions, persistRedux, checkIsNeedPersist, checkNeedPersist, getPersistObj, getLocalStoragePersistStates, dynamicDispatch, RESTORE_REDUX, restoreRedux */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statePersistActions", function() { return statePersistActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistRedux", function() { return persistRedux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIsNeedPersist", function() { return checkIsNeedPersist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkNeedPersist", function() { return checkNeedPersist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPersistObj", function() { return getPersistObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocalStoragePersistStates", function() { return getLocalStoragePersistStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dynamicDispatch", function() { return dynamicDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESTORE_REDUX", function() { return RESTORE_REDUX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restoreRedux", function() { return restoreRedux; });
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions/user-actions */ "./redux/actions/user-actions.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_productsList_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/productsList-actions */ "./redux/actions/productsList-actions.js");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! local-storage */ "local-storage");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_live_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/live-action */ "./redux/actions/live-action.js");
/* harmony import */ var _actions_socketRefresh_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions/socketRefresh-actions */ "./redux/actions/socketRefresh-actions.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common-function */ "./common-function.js");







 //Not supported for multiple same action update yet
//Ex. ADD_COMPARE__PRODUCT_ID for twice, i will only take the last 1. Same actions before last one will be ignored;

const statePersistActions = [{
  action: _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["LOGIN_SUCCESSFUL"],
  reducer: 'user'
}, {
  action: _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_SUCCESSFUL"],
  reducer: 'user'
}, {
  action: _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["SET_USER"],
  reducer: 'user'
}, {
  action: _actions_productsList_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_COMPARE_LIMIT"],
  reducer: 'productsList'
}, // {
//   action : ADD_COMPARE__PRODUCT_ID,
// reducer : 'productList',
// },
{
  action: _actions_productsList_actions__WEBPACK_IMPORTED_MODULE_2__["PATCH_COMPARE_PRODUCT_IDS"],
  reducer: 'productsList'
}, {
  action: _actions_productsList_actions__WEBPACK_IMPORTED_MODULE_2__["CLEAR_COMPARE_PRODUCT_IDS"],
  reducer: 'productsList'
}, {
  action: _actions_productsList_actions__WEBPACK_IMPORTED_MODULE_2__["REMOVE_COMPARE_PRODUCT_ID"],
  reducer: 'productsList'
}, {
  action: _actions_live_action__WEBPACK_IMPORTED_MODULE_4__["FETCH_CLIENT_SOCKET_IO"],
  reducer: 'socketRefresh'
}, {
  action: _actions_live_action__WEBPACK_IMPORTED_MODULE_4__["CLEAR_CLIENT_SOCKET_IO"],
  reducer: 'socketRefresh'
}, {
  action: _actions_socketRefresh_actions__WEBPACK_IMPORTED_MODULE_5__["UPDATE_SOCKET_INFO"],
  reducer: 'socketRefresh'
}, {
  action: _actions_socketRefresh_actions__WEBPACK_IMPORTED_MODULE_5__["DELETE_SOCKET_INFO"],
  reducer: 'socketRefresh'
}];
function persistRedux(reducer, data) {
  if (reducer && lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isPlainObject(data) && !lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEmpty(data)) {
    let reduxStates = local_storage__WEBPACK_IMPORTED_MODULE_3___default.a.get('redux');

    if (!lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isPlainObject(reduxStates)) {
      reduxStates = {};
    }

    reduxStates[reducer] = data;
    local_storage__WEBPACK_IMPORTED_MODULE_3___default.a.set('redux', reduxStates);
  }
}
function checkIsNeedPersist(action) {
  if (action) {
    return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.some(statePersistActions || [] || [], ['action', action]) || false;
  }

  return false;
}
function checkNeedPersist(action, reducer, data, isRestoreData) {
  let needPersist = checkIsNeedPersist(action);
  let persistObj = getPersistObj(action);

  if (needPersist && lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(persistObj, 'reducer') == reducer) {
    let persistedStates = getLocalStoragePersistStates(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(persistObj, 'reducer'));

    let selectedPersistedState = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(persistedStates, {
      persistObj: {
        action: action
      }
    });

    let sequence = 0;

    if (!isRestoreData || !Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["isValidNumber"])(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(selectedPersistedState, 'sequence'))) {
      sequence = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.maxBy(persistedStates || [], 'sequence'), 'sequence');

      if (!Object(_common_function__WEBPACK_IMPORTED_MODULE_7__["isValidNumber"])(sequence)) {
        sequence = 0;
      } else {
        sequence = parseInt(sequence) + 1;
      }
    } else {
      sequence = parseInt(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(selectedPersistedState, 'sequence'));
    }

    let persistData = {
      data: data,
      reducer: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(persistObj, 'reducer'),
      createdAt: new Date(),
      sequence: sequence
    };
    local_storage__WEBPACK_IMPORTED_MODULE_3___default.a.set(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(persistObj, ['action']), persistData);
  }
}
function getPersistObj(action) {
  if (action) {
    return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(statePersistActions || [], ['action', action]) || {};
  }

  return false;
}
function getLocalStoragePersistStates(reducer) {
  let cookiePersistStates = [];

  lodash__WEBPACK_IMPORTED_MODULE_1___default.a.forEach(statePersistActions, function (statePersistAction) {
    let data = local_storage__WEBPACK_IMPORTED_MODULE_3___default.a.get(statePersistAction['action']);

    if (data) {
      if (!reducer || reducer == lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(data, 'reducer')) {
        try {
          cookiePersistStates.push({
            persistObj: statePersistAction,
            data: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(data, ['data']),
            reducer: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(data, ['reducer']),
            createdAt: moment__WEBPACK_IMPORTED_MODULE_6___default()(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(data, ['createdAt'])),
            sequence: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(data, ['sequence']) || 0
          });
        } catch (error) {}
      }
    }
  });

  cookiePersistStates = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.sortBy(cookiePersistStates, ['reducer', 'sequence']);
  return cookiePersistStates || [];
}
function dynamicDispatch(action, data) {
  return dispatch => {
    dispatch({
      type: action,
      payload: data,
      isRestoreData: true
    });
  };
}
const RESTORE_REDUX = 'RESTORE_REDUX';
function restoreRedux(data) {
  return dispatch => {
    dispatch({
      type: RESTORE_REDUX,
      payload: data
    });
  };
}

/***/ }),

/***/ "./route.js":
/*!******************!*\
  !*** ./route.js ***!
  \******************/
/*! exports provided: routePaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routePaths", function() { return routePaths; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-function */ "./common-function.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const routePaths = {
  home: {
    to: `/`,
    as: (item, query = {}) => ({
      pathname: `/`,
      query: _objectSpread({}, query)
    })
  },
  aboutUs: {
    to: `/about-us`,
    as: (item, query = {}) => ({
      pathname: `/about-us`,
      query: _objectSpread({}, query)
    })
  },
  carFreaks: {
    to: `/car-freaks`,
    as: (item, query = {}) => ({
      pathname: `/car-freaks`,
      query: _objectSpread({}, query)
    })
  },
  viewCarFreaks: {
    to: `/car-freaks/[id]`,
    as: (item, query = {}) => ({
      pathname: `/car-freaks/${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, '_id')}`,
      query: _objectSpread({
        id: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, '_id')
      }, query)
    })
  },
  carReview: {
    to: `/car-review`,
    as: (item, query = {}) => ({
      pathname: `/car-review`,
      query: _objectSpread({}, query)
    })
  },
  carsOnSale: {
    to: `/cars-on-sale/[parameter1]`,
    as: (query = {}, ...parameters) => {
      let url = `/cars-on-sale/malaysia`;
      return {
        pathname: url,
        query: {
          view: 'gridView',
          page: 1
        }
      };
    }
  },
  compare: {
    to: `/compare`,
    as: (item, query = {}) => ({
      pathname: `/compare`,
      query: _objectSpread({}, query)
    })
  },
  contactUs: {
    to: `/contact-us`,
    as: (item, query = {}) => ({
      pathname: `/contact-us`,
      query: _objectSpread({}, query)
    })
  },
  dealerProfile: {
    to: `/dealer/[companyname]/[freakname]`,
    as: (item, query = {}) => ({
      pathname: `/dealer/${item.companyurlId || ''}/${item.userurlId || ''}`,
      query: _objectSpread({
        companyname: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, 'companyurlId'),
        freakname: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, 'userurlId')
      }, query)
    })
  },
  eventPost: {
    to: `/event-post/[id]`,
    as: (item, query = {}) => ({
      pathname: `/event-post/${item._id}`,
      query: _objectSpread({
        id: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, '_id')
      }, query)
    })
  },
  faq: {
    to: `/faq`,
    as: (item, query = {}) => ({
      pathname: `/faq`,
      query: _objectSpread({}, query)
    })
  },
  faqDetails: {
    to: `/faq/details`,
    as: (item, query = {}) => ({
      pathname: `/faq/details`,
      query: _objectSpread({}, query)
    })
  },
  hashTag: {
    to: `/hashtag/[hashTag]`,
    as: (item, query = {}) => ({
      pathname: `/hashtag/${item}`,
      query: _objectSpread({
        id: item
      }, query)
    })
  },
  kpp: {
    to: `/kpp`,
    as: (item, query = {}) => ({
      pathname: `/kpp`,
      query: _objectSpread({}, query)
    })
  },
  kppBm: {
    to: `/kpp/kpp-bm`,
    as: (item, query = {}) => ({
      pathname: `/kpp/kpp-bm`,
      query: _objectSpread({}, query)
    })
  },
  kppEn: {
    to: `/kpp/kpp-en`,
    as: (item, query = {}) => ({
      pathname: `/kpp/kpp-en`,
      query: _objectSpread({}, query)
    })
  },
  kppRevision: {
    to: `/kpp/kpp-revision/[group]/[language]`,
    as: (item, query = {}) => ({
      pathname: `/kpp/kpp-revision/${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, `group`)}/${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, `language`) || ''}`,
      query: _objectSpread({
        group: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, `group`) || '',
        language: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, `language`) || ''
      }, query)
    })
  },
  live: {
    to: `/live`,
    as: (item, query = {}) => ({
      pathname: `/live`,
      query: _objectSpread({}, query)
    })
  },
  liveDetails: {
    to: `/live/[id]`,
    as: (item, query = {}) => ({
      pathname: `/live/${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, ['dealerSocketId']) || ''}`,
      query: _objectSpread({
        id: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, 'dealerSocketId')
      }, query)
    })
  },
  logout: {
    to: `/logout`,
    as: (item, query = {}) => ({
      pathname: `/logout`,
      query: _objectSpread({}, query)
    })
  },
  newCarsOnSale: {
    to: `/new-cars-on-sale/[parameter1]`,
    as: (query = {}, ...parameters) => {
      let url = `/new-cars-on-sale/malaysia`;
      return {
        pathname: url,
        query: {
          view: 'gridView',
          page: 1
        }
      };
    }
  },
  newCar: {
    to: `/newcar`,
    as: (item, query = {}) => ({
      pathname: `/newcar`,
      query: _objectSpread({}, query)
    })
  },
  newCarDetails: {
    to: `/newcar/details/[make]/[model]`,
    as: (item, query = {}) => ({
      pathname: `/newcar/details/${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, ['make']) || ''}/${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, ['model']) || ''}`,
      query: _objectSpread({
        make: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, 'make'),
        model: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, 'model')
      }, query)
    })
  },
  newCarFilter: {
    to: `/newcar/filter`,
    as: (item, query = {}) => ({
      pathname: `/newcar/filter`,
      query: _objectSpread({}, query)
    })
  },
  newCarMakerDetails: {
    to: `/newcar/maker/[id]`,
    as: (item, query = {}) => ({
      pathname: `/newcar/maker/${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, ['make'])}`,
      query: _objectSpread({
        id: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, 'make')
      }, query)
    })
  },
  petrolPrice: {
    to: `/petrolprice`,
    as: (item, query = {}) => ({
      pathname: `/petrolprice`,
      query: _objectSpread({}, query)
    })
  },
  previewCarAds: {
    to: `/previewCarAds/[id]`,
    as: (item, query = {}) => ({
      pathname: `/previewCarAds/${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, ['_id']) || ''}`,
      query: _objectSpread({
        id: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, '_id')
      }, query)
    })
  },
  profile: {
    to: `/profile/[id]`,
    as: (item, query = {}) => ({
      pathname: `/profile/${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, ['userurlId']) || ''}`,
      query: _objectSpread({
        id: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, 'userurlId')
      }, query)
    })
  },
  manageProfile: {
    to: `/profile/[id]/details`,
    as: (item, query = {}) => ({
      pathname: `/profile/${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, 'userurlId') || ''}/details`,
      query: _objectSpread({
        id: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, 'userurlId')
      }, query)
    })
  },
  profileSettings: {
    to: `/profile/[id]/details/settings`,
    as: (item, query = {}) => ({
      pathname: `/profile/${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, `userurlId`) || ''}/details/settings`,
      query: _objectSpread({
        id: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, 'userurlId')
      }, query)
    })
  },
  profileWishLists: {
    to: `/profile/[id]/details/wishlists`,
    as: (item, query = {}) => ({
      pathname: `/profile/${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, `userurlId`) || ''}/details/wishlists`,
      query: _objectSpread({
        id: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, 'userurlId')
      }, query)
    })
  },
  reconCarsOnSale: {
    to: `/recon-cars-on-sale/[parameter1]`,
    as: (query = {}, ...parameters) => {
      let url = `/recon-cars-on-sale/malaysia`;
      return {
        pathname: url,
        query: {
          view: 'gridView',
          page: 1
        }
      };
    }
  },
  searchCarFreaks: {
    to: `/search-car-freaks`,
    as: (item, query = {}) => ({
      pathname: `/search-car-freaks`,
      query: _objectSpread({}, query)
    })
  },
  socialBoard: {
    to: `/social-board`,
    as: (item, query = {}) => ({
      pathname: `/social-board`,
      query: _objectSpread({}, query)
    })
  },
  socialBoardDetails: {
    to: `/social-board/[id]`,
    as: (item, query = {}) => ({
      pathname: `/social-board/${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, `_id`)}`,
      query: _objectSpread({
        id: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, '_id')
      }, query)
    })
  },
  socialClub: {
    to: `/social-club`,
    as: (item, query = {}) => ({
      pathname: `/social-club`,
      query: _objectSpread({}, query)
    })
  },
  socialClubDetails: {
    to: `/social-club/[id]`,
    as: (item, query = {}) => ({
      pathname: `/social-club/${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, `_id`)}`,
      query: _objectSpread({
        id: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, '_id')
      }, query)
    })
  },
  socialNewsAndVideo: {
    to: `/socialNewsAndVideo`,
    as: (item, query = {}) => ({
      pathname: `/socialNewsAndVideo`,
      query: _objectSpread({}, query)
    })
  },
  termOfUse: {
    to: `/termOfUse`,
    as: (item, query = {}) => ({
      pathname: `/termOfUse`,
      query: _objectSpread({}, query)
    })
  },
  termsOfUse: {
    to: `/termsOfUse`,
    as: (item, query = {}) => ({
      pathname: `/termsOfUse`,
      query: _objectSpread({}, query)
    })
  },
  usedCarsOnSale: {
    to: `/used-cars-on-sale/[parameter1]`,
    as: (query = {}, ...parameters) => {
      let url = `/used-cars-on-sale/malaysia`;
      return {
        pathname: url,
        query: {
          view: 'gridView',
          page: 1
        }
      };
    }
  },
  viewCarDetails: {
    to: `/viewCar/[id]`,
    as: (item, query = {}) => ({
      pathname: `/viewCar/${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, `_id`)}`,
      query: _objectSpread({
        id: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, '_id')
      }, query)
    })
  },
  writeCarReview: {
    to: `/write-car-review`,
    as: (item, query = {}) => ({
      pathname: `/write-car-review`,
      query: _objectSpread({}, query)
    })
  }
};

/***/ }),

/***/ "./webPush.js":
/*!********************!*\
  !*** ./webPush.js ***!
  \********************/
/*! exports provided: tokenInlocalforage, initFirebaseToken, onMessageListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenInlocalforage", function() { return tokenInlocalforage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initFirebaseToken", function() { return initFirebaseToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMessageListener", function() { return onMessageListener; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/messaging */ "firebase/messaging");
/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_messaging__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! localforage */ "localforage");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_2__);



const PUBLIC_VAPID_KEY = "BCpKq8t61asvp3b1_uIcq1nL6cZZe-zhoDy83M84EmmTnxgTtn2Rj4CVXR3PjDQPbQ7oVdsWfge2BABk1HNIefs"; // For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBNkd-inUJRLD_ke7pwJg66LND8M2e9A_s",
  authDomain: "ccar-my.firebaseapp.com",
  databaseURL: "https://ccar-my.firebaseio.com",
  projectId: "ccar-my",
  storageBucket: "ccar-my.appspot.com",
  messagingSenderId: "827147986430",
  appId: "1:827147986430:web:9b41b5e04dafd307f98caf",
  measurementId: "G-L8NHNSDC47"
};

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);
}

const tokenInlocalforage = async () => {
  return localforage__WEBPACK_IMPORTED_MODULE_2___default.a.getItem('fcm_token');
};
const initFirebaseToken = async () => {
  try {
    const messaging = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.messaging();
    const tokenInLocalForage = await tokenInlocalforage(); //if FCM token is already there just return the token
    // if (tokenInLocalForage !== null) {
    //     return tokenInLocalForage;
    // }
    //requesting notification permission from browser

    const status = await Notification.requestPermission();

    if (status && status === 'granted') {
      //getting token from FCM
      const fcm_token = await messaging.getToken({
        vapidKey: PUBLIC_VAPID_KEY
      });

      if (fcm_token) {
        //setting FCM token in indexed db using localforage
        localforage__WEBPACK_IMPORTED_MODULE_2___default.a.setItem('fcm_token', fcm_token); //return the FCM token after saving it

        return fcm_token;
      }
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
const onMessageListener = () => {
  const messaging = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.messaging();
  return new Promise(resolve => {
    messaging.onMessage(payload => {
      // console.log(payload);
      resolve(payload);
    });
  });
};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/faraheen/ccar-cms-next-mobile/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@ant-design/compatible":
/*!*****************************************!*\
  !*** external "@ant-design/compatible" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/compatible");

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "@feathersjs/authentication-client":
/*!****************************************************!*\
  !*** external "@feathersjs/authentication-client" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@feathersjs/authentication-client");

/***/ }),

/***/ "@feathersjs/feathers":
/*!***************************************!*\
  !*** external "@feathersjs/feathers" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@feathersjs/feathers");

/***/ }),

/***/ "@feathersjs/socketio-client":
/*!**********************************************!*\
  !*** external "@feathersjs/socketio-client" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@feathersjs/socketio-client");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/messaging":
/*!*************************************!*\
  !*** external "firebase/messaging" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/messaging");

/***/ }),

/***/ "local-storage":
/*!********************************!*\
  !*** external "local-storage" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("local-storage");

/***/ }),

/***/ "localforage":
/*!******************************!*\
  !*** external "localforage" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("localforage");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "rc-banner-anim":
/*!*********************************!*\
  !*** external "rc-banner-anim" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-banner-anim");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-cookie-consent":
/*!***************************************!*\
  !*** external "react-cookie-consent" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-cookie-consent");

/***/ }),

/***/ "react-custom-scrollbars":
/*!******************************************!*\
  !*** external "react-custom-scrollbars" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "react-facebook-login/dist/facebook-login-render-props":
/*!************************************************************************!*\
  !*** external "react-facebook-login/dist/facebook-login-render-props" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-facebook-login/dist/facebook-login-render-props");

/***/ }),

/***/ "react-google-login":
/*!*************************************!*\
  !*** external "react-google-login" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-login");

/***/ }),

/***/ "react-highlight-words":
/*!****************************************!*\
  !*** external "react-highlight-words" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-highlight-words");

/***/ }),

/***/ "react-image-lightbox":
/*!***************************************!*\
  !*** external "react-image-lightbox" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-image-lightbox");

/***/ }),

/***/ "react-infinite-scroller":
/*!******************************************!*\
  !*** external "react-infinite-scroller" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-infinite-scroller");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-loading-skeleton":
/*!*****************************************!*\
  !*** external "react-loading-skeleton" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loading-skeleton");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-responsive":
/*!***********************************!*\
  !*** external "react-responsive" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),

/***/ "react-youtube":
/*!********************************!*\
  !*** external "react-youtube" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-youtube");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });