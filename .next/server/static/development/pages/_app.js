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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./components/general/PageTransition.jsx":
/*!***********************************************!*\
  !*** ./components/general/PageTransition.jsx ***!
  \***********************************************/
/*! exports provided: PageTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTransition", function() { return PageTransition; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useRouter */ "./hooks/useRouter.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const PageTransition = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  const router = Object(_hooks_useRouter__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const transitions = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useTransition"])(router, router => router.pathname, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: 0
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, transitions.map(({
    item,
    props: style,
    key
  }) => {
    return __jsx(Page, {
      key: key,
      style: style
    }, children);
  }));
};
const Page = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].main)`
  min-height: 100%;
`;

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



 // const socket = io('http://localhost:3030/');   // local/
// const socket = io('https://uat2-api.ccar.my/');  //uat

const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default()('https://api.ccar.my/'); // live
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

/***/ "./hooks/useRouter.js":
/*!****************************!*\
  !*** ./hooks/useRouter.js ***!
  \****************************/
/*! exports provided: useRouter, RouterContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouter", function() { return useRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterContextProvider", function() { return RouterContextProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Context = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

const Provider = ({
  router,
  children
}) => __jsx(Context.Provider, {
  value: router
}, children);

const useRouter = () => Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(Context);
const RouterContextProvider = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Provider);

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

/***/ "./node_modules/@brainhubeu/react-carousel/lib/style.css":
/*!***************************************************************!*\
  !*** ./node_modules/@brainhubeu/react-carousel/lib/style.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/emoji-mart/css/emoji-mart.css":
/*!****************************************************!*\
  !*** ./node_modules/emoji-mart/css/emoji-mart.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

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

/***/ "./node_modules/rc-banner-anim/assets/index.css":
/*!******************************************************!*\
  !*** ./node_modules/rc-banner-anim/assets/index.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-image-lightbox/style.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-image-lightbox/style.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-quill/dist/quill.snow.css":
/*!******************************************************!*\
  !*** ./node_modules/react-quill/dist/quill.snow.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css":
/*!****************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/styles/carousel.min.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/app.css */ "./styles/app.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_overwrite_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/overwrite.css */ "./styles/overwrite.css");
/* harmony import */ var _styles_overwrite_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_overwrite_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/main.css */ "./styles/main.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_sellCar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/sellCar.css */ "./styles/sellCar.css");
/* harmony import */ var _styles_sellCar_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_sellCar_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_viewProducts_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/viewProducts.css */ "./styles/viewProducts.css");
/* harmony import */ var _styles_viewProducts_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_viewProducts_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_color_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/color.css */ "./styles/color.css");
/* harmony import */ var _styles_color_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_color_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_common_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/common.css */ "./styles/common.css");
/* harmony import */ var _styles_common_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_common_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_animation_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/animation.css */ "./styles/animation.css");
/* harmony import */ var _styles_animation_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_animation_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_newcar_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/newcar.css */ "./styles/newcar.css");
/* harmony import */ var _styles_newcar_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_newcar_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rc_banner_anim_assets_index_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rc-banner-anim/assets/index.css */ "./node_modules/rc-banner-anim/assets/index.css");
/* harmony import */ var rc_banner_anim_assets_index_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rc_banner_anim_assets_index_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-image-lightbox/style.css */ "./node_modules/react-image-lightbox/style.css");
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _brainhubeu_react_carousel_lib_style_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @brainhubeu/react-carousel/lib/style.css */ "./node_modules/@brainhubeu/react-carousel/lib/style.css");
/* harmony import */ var _brainhubeu_react_carousel_lib_style_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_brainhubeu_react_carousel_lib_style_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var emoji_mart_css_emoji_mart_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! emoji-mart/css/emoji-mart.css */ "./node_modules/emoji-mart/css/emoji-mart.css");
/* harmony import */ var emoji_mart_css_emoji_mart_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(emoji_mart_css_emoji_mart_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _components_general_PageTransition__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/general/PageTransition */ "./components/general/PageTransition.jsx");
/* harmony import */ var _hooks_useRouter__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../hooks/useRouter */ "./hooks/useRouter.js");
/* harmony import */ var _functionContent__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../functionContent */ "./functionContent.js");
/* harmony import */ var _feathers__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../feathers */ "./feathers.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../icon */ "./icon.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

















 // ES6













const WrappedApp = ({
  Component,
  pageProps,
  router
}) => {
  let seoData = lodash__WEBPACK_IMPORTED_MODULE_23___default.a.isPlainObject(lodash__WEBPACK_IMPORTED_MODULE_23___default.a.get(pageProps, ['seoData'])) && !lodash__WEBPACK_IMPORTED_MODULE_23___default.a.isEmpty(lodash__WEBPACK_IMPORTED_MODULE_23___default.a.get(pageProps, ['seoData'])) ? lodash__WEBPACK_IMPORTED_MODULE_23___default.a.get(pageProps, ['seoData']) : {};
  let title = lodash__WEBPACK_IMPORTED_MODULE_23___default.a.get(seoData, ['title']) || 'CCAR.MY | #1 Car Social Platform';
  let basePath = Object(_functionContent__WEBPACK_IMPORTED_MODULE_26__["checkEnvReturnCmsUrl"])(_feathers__WEBPACK_IMPORTED_MODULE_27__["default"].io.io.uri);
  let url = seoData.url || `${basePath}${router.asPath}`;

  if (!lodash__WEBPACK_IMPORTED_MODULE_23___default.a.isArray(seoData.images)) {
    if (lodash__WEBPACK_IMPORTED_MODULE_23___default.a.isString(seoData.images)) {
      seoData.images = [{
        url: seoData.images,
        alt: 'CCAR Image Preview'
      }];
    } else {
      seoData.images = [{
        url: `${basePath}${_icon__WEBPACK_IMPORTED_MODULE_28__["ccarWebLogo400X150"]}`,
        alt: `CCAR Logo`
      }];
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_19__["NextSeo"], {
    title: title,
    description: seoData.description,
    canonical: seoData.canonical || url,
    openGraph: lodash__WEBPACK_IMPORTED_MODULE_23___default.a.isPlainObject(seoData.openGraph) && !lodash__WEBPACK_IMPORTED_MODULE_23___default.a.isEmpty(seoData.openGraph) ? seoData.openGraph : {
      title: title,
      description: seoData.description,
      url: url,
      type: 'website',
      site_name: 'CCAR SDN BHD',
      images: [...seoData.images]
    },
    twitter: {
      handle: '@handle',
      site: '@site',
      cardType: 'summary_large_image'
    },
    facebook: {
      appId: seoData.facebookAppId || '747178012753410'
    }
  }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_20___default.a, null, __jsx("link", {
    rel: "icon",
    href: _icon__WEBPACK_IMPORTED_MODULE_28__["ccarLogo2"] || "https://yt3.ggpht.com/a/AATXAJyACAnnk58_qfVZqvjaTkavsxOb8dSYGeciv4a7=s88-c-k-c0x00ffffff-no-rj"
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;700&family=Ubuntu:ital@1&display=swap",
    rel: "stylesheet"
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  })), __jsx(Component, _extends({}, pageProps, {
    key: router.route
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (_redux_store__WEBPACK_IMPORTED_MODULE_18__["wrapper"].withRedux(WrappedApp));

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

/***/ "./redux/actions/carPlatesList-actions.js":
/*!************************************************!*\
  !*** ./redux/actions/carPlatesList-actions.js ***!
  \************************************************/
/*! exports provided: FETCH_CARPLATESLIST, fetchCarPlatesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CARPLATESLIST", function() { return FETCH_CARPLATESLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCarPlatesList", function() { return fetchCarPlatesList; });
const FETCH_CARPLATESLIST = 'FETCH_CARPLATELIST';
function fetchCarPlatesList(data) {
  return dispatch => {
    dispatch({
      type: FETCH_CARPLATESLIST,
      payload: data
    });
  };
}

/***/ }),

/***/ "./redux/actions/carfreak.action.js":
/*!******************************************!*\
  !*** ./redux/actions/carfreak.action.js ***!
  \******************************************/
/*! exports provided: SET_POST_MODAL_LIKE_REFRESH_ID, FETCH_CAR_FREAK_POSTS, FETCH_EDITED_POST, setPostModalLikeRefreshId, fetchCarFreakPosts, fetchEditedPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_POST_MODAL_LIKE_REFRESH_ID", function() { return SET_POST_MODAL_LIKE_REFRESH_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CAR_FREAK_POSTS", function() { return FETCH_CAR_FREAK_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_EDITED_POST", function() { return FETCH_EDITED_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPostModalLikeRefreshId", function() { return setPostModalLikeRefreshId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCarFreakPosts", function() { return fetchCarFreakPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchEditedPost", function() { return fetchEditedPost; });
const SET_POST_MODAL_LIKE_REFRESH_ID = 'SET_POST_MODAL_LIKE_REFRESH_ID';
const FETCH_CAR_FREAK_POSTS = 'FETCH_CAR_FREAK_POSTS';
const FETCH_EDITED_POST = 'FETCH_EDITED_POST';
function setPostModalLikeRefreshId(data) {
  return dispatch => {
    dispatch({
      type: SET_POST_MODAL_LIKE_REFRESH_ID,
      payload: data
    });
  };
}
function fetchCarFreakPosts(data) {
  return dispatch => {
    dispatch({
      type: FETCH_CAR_FREAK_POSTS,
      payload: data
    });
  };
}
function fetchEditedPost(data) {
  return dispatch => {
    dispatch({
      type: FETCH_EDITED_POST,
      payload: data
    });
  };
}

/***/ }),

/***/ "./redux/actions/kpp-actions.js":
/*!**************************************!*\
  !*** ./redux/actions/kpp-actions.js ***!
  \**************************************/
/*! exports provided: FETCH_REVISION_ANSWERED_QUESTIONS, fetchRevisionAnsweredQuestions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_REVISION_ANSWERED_QUESTIONS", function() { return FETCH_REVISION_ANSWERED_QUESTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRevisionAnsweredQuestions", function() { return fetchRevisionAnsweredQuestions; });
const FETCH_REVISION_ANSWERED_QUESTIONS = 'FETCH_REVISION_ANSWERED_QUESTIONS';
function fetchRevisionAnsweredQuestions(data) {
  return dispatch => {
    dispatch({
      type: FETCH_REVISION_ANSWERED_QUESTIONS,
      payload: data
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

/***/ "./redux/actions/register-actions.js":
/*!*******************************************!*\
  !*** ./redux/actions/register-actions.js ***!
  \*******************************************/
/*! exports provided: STEPS_PROPS_CURRENT, FORM_ONE, stepsPropsCurrent, formOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEPS_PROPS_CURRENT", function() { return STEPS_PROPS_CURRENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_ONE", function() { return FORM_ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsPropsCurrent", function() { return stepsPropsCurrent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formOne", function() { return formOne; });
//Action Types
const STEPS_PROPS_CURRENT = 'STEPS_PROPS_CURRENT';
const FORM_ONE = 'FORM_ONE'; //Action Creator

function stepsPropsCurrent(data) {
  return dispatch => {
    dispatch({
      type: STEPS_PROPS_CURRENT,
      data: data
    });
  };
}
function formOne(data) {
  return dispatch => {
    dispatch({
      type: FORM_ONE,
      data: data
    });
  };
}

/***/ }),

/***/ "./redux/actions/sellerProfile-actions.js":
/*!************************************************!*\
  !*** ./redux/actions/sellerProfile-actions.js ***!
  \************************************************/
/*! exports provided: UPDATE_SELLER_PROFILE, updateSellerProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SELLER_PROFILE", function() { return UPDATE_SELLER_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSellerProfile", function() { return updateSellerProfile; });
//Action Types
const UPDATE_SELLER_PROFILE = "UPDATE_SELLER_PROFILE"; //Action Creator

function updateSellerProfile(data) {
  return dispatch => {
    dispatch({
      type: UPDATE_SELLER_PROFILE,
      data: data
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

/***/ "./redux/actions/userlikes-actions.js":
/*!********************************************!*\
  !*** ./redux/actions/userlikes-actions.js ***!
  \********************************************/
/*! exports provided: ADD_LIKE, REMOVE_LIKE, ADD_BOOKMARK, REMOVE_BOOKMARK, ADD_LIKE_MSG, REMOVE_LIKE_MSG, addLike, removeLike, addBookmark, removeBookmark, addLikeMsg, removeLikeMsg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_LIKE", function() { return ADD_LIKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_LIKE", function() { return REMOVE_LIKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BOOKMARK", function() { return ADD_BOOKMARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_BOOKMARK", function() { return REMOVE_BOOKMARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_LIKE_MSG", function() { return ADD_LIKE_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_LIKE_MSG", function() { return REMOVE_LIKE_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLike", function() { return addLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLike", function() { return removeLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBookmark", function() { return addBookmark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeBookmark", function() { return removeBookmark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLikeMsg", function() { return addLikeMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLikeMsg", function() { return removeLikeMsg; });
const ADD_LIKE = 'ADD_LIKE';
const REMOVE_LIKE = 'REMOVE_LIKE';
const ADD_BOOKMARK = 'ADD_BOOKMARK';
const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';
const ADD_LIKE_MSG = 'ADD_LIKE_MSG';
const REMOVE_LIKE_MSG = 'REMOVE_LIKE_MSG';
function addLike(value) {
  return dispatch => {
    dispatch({
      type: ADD_LIKE,
      value: value
    });
  };
}
function removeLike(value) {
  return dispatch => {
    dispatch({
      type: REMOVE_LIKE,
      value: value
    });
  };
}
function addBookmark(value) {
  return dispatch => {
    dispatch({
      type: ADD_BOOKMARK,
      value: value
    });
  };
}
function removeBookmark(value) {
  return dispatch => {
    dispatch({
      type: REMOVE_BOOKMARK,
      value: value
    });
  };
}
function addLikeMsg(value) {
  return dispatch => {
    dispatch({
      type: ADD_LIKE_MSG,
      value: value
    });
  };
}
function removeLikeMsg(value) {
  return dispatch => {
    dispatch({
      type: REMOVE_LIKE_MSG,
      value: value
    });
  };
}

/***/ }),

/***/ "./redux/actions/variant-action.js":
/*!*****************************************!*\
  !*** ./redux/actions/variant-action.js ***!
  \*****************************************/
/*! exports provided: FETCH_VARIANT, CLEAR_VARIANT, fetchVariant, clearVariant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VARIANT", function() { return FETCH_VARIANT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_VARIANT", function() { return CLEAR_VARIANT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchVariant", function() { return fetchVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearVariant", function() { return clearVariant; });
const FETCH_VARIANT = 'FETCH_VARIANT';
const CLEAR_VARIANT = 'CLEAR_VARIANT';
function fetchVariant(data) {
  return dispatch => {
    dispatch({
      type: FETCH_VARIANT,
      payload: data
    });
  };
}
function clearVariant(data) {
  return dispatch => {
    dispatch({
      type: CLEAR_VARIANT
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

/***/ "./redux/reducers/app-reducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/app-reducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/app-actions */ "./redux/actions/app-actions.js");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! local-storage */ "local-storage");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./redux/config.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const INITIAL_STATE = {
  notificationToken: null,
  notificationTokenTimeOutDate: null,
  disableWindowScroll: false,
  initedRedux: false,
  loading: false,
  advanceMode: false,
  loginMode: false,
  registerMode: false,
  filterCarBrandMode: false,
  filterCarSelectedCarBrandData: '',
  filterCarSelectedCarBrandIndex: '',
  filterCarSearchKeywords: '',
  filterCarModelMode: false,
  filterCarSelectedCarModelData: '',
  filterCarSelectedCarModelIndex: '',
  filterCarModelSearchKeywords: '',
  filterCarModelMode: false,
  filterCarSelectedCarModelData: '',
  filterCarSelectedCarModelIndex: '',
  filterCarModelSearchKeywords: '',
  filterColorMode: false,
  filterCarSelectedColorData: '',
  filterCarSelectedColorIndex: '',
  filterColorSearchKeywords: '',
  filterBodyTypeMode: false,
  filterCarSelectedBodyTypeData: '',
  filterCarSelectedBodyTypeIndex: '',
  filterBodyTypeSearchKeywords: '',
  filterFuelTypeMode: false,
  filterCarSelectedFuelTypeData: '',
  filterCarSelectedFuelTypeIndex: '',
  filterFuelTypeSearchKeywords: '',
  filterStateMode: false,
  filterCarSelectedStateData: '',
  filterCarSelectedStateIndex: '',
  filterStateSearchKeywords: '',
  carBrands: [],
  carModels: [],
  colors: [],
  bodyTypes: [],
  drivenWheels: [],
  fuelTypes: [],
  states: [],
  quickSearchMode: '',
  quickSearchCarSpecsData: {},
  quickSearchProductadsData: {},
  activeMenu: -1,
  values: {},
  showContact: false,
  applyYear: undefined,
  applyPrice: undefined,
  applyMileage: undefined,
  menuHeight: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = INITIAL_STATE, action) {
  // checkNeedPersist(_.get(action, 'type'), 'app', _.get(action, 'payload'), _.get(action, 'isRestoreData'));
  let persistStates = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(local_storage__WEBPACK_IMPORTED_MODULE_1___default.a.get('redux') || {}, 'app') || INITIAL_STATE;

  let newState = _objectSpread(_objectSpread({}, state), persistStates);

  if (!lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEqual(state, newState)) {
    state = newState;
  }

  switch (action.type) {
    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["LOADING"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        loading: action.payload
      });
      break;

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["ADVANCE_MODE"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        advanceMode: action.payload
      });
      break;

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["LOGIN_MODE"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        loginMode: action.data
      });
      break;

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["REGISTER_MODE"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        registerMode: action.data
      });
      break;

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_ACTIVE_MENU"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        activeMenu: action.data
      });
      break;
    //

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILTER_CAR_BRANDS"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        carBrands: action.data
      });
      break;

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILTER_CAR_MODELS"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        carModels: action.data
      });
      break;

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILTER_COLORS"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        colors: action.data
      });
      break;

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILTER_BODY_TYPES"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        bodyTypes: action.data
      });
      break;

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILTER_DRIVEN_WHEELS"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        drivenWheels: action.data
      });
      break;

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILTER_FUEL_TYPES"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        fuelTypes: action.data
      });
      break;

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILTER_STATES"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        states: action.data
      });
      break;
    // filter car
    //.......................................

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILTER_CAR_BRAND_MODE"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        filterCarBrandMode: action.data
      });
      break;

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILTER_CAR_SELECTED_CAR_BRAND_ROW"]:
      if (action.index) {
        state = _objectSpread(_objectSpread({}, state), {}, {
          filterCarSelectedCarBrandData: action.data,
          filterCarSelectedCarBrandIndex: action.index
        });
        break;
      } else {
        state = _objectSpread(_objectSpread({}, state), {}, {
          filterCarSelectedCarBrandData: action.data
        });
        break;
      }

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILTER_CAR_SEARCH_KEYWORDS"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        filterCarSearchKeywords: action.data
      });
      break;
    // end filter car ..............................
    // filter car
    //.......................................

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILTER_CAR_MODEL_MODE"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        filterCarModelMode: action.data
      });
      break;

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILTER_CAR_SELECTED_CAR_MODEL_ROW"]:
      if (action.index) {
        state = _objectSpread(_objectSpread({}, state), {}, {
          filterCarSelectedCarModelData: action.data,
          filterCarSelectedCarModelIndex: action.index
        });
        break;
      } else {
        state = _objectSpread(_objectSpread({}, state), {}, {
          filterCarSelectedCarModelData: action.data
        });
        break;
      }

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILTER_CAR_MODEL_SEARCH_KEYWORDS"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        filterCarModelSearchKeywords: action.data
      });
      break;
    // end filter model ..............................
    // filter color
    //.......................................

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILTER_COLOR_MODE"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        filterColorMode: action.data
      });
      break;

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILTER_CAR_SELECTED_COLOR_MODEL_ROW"]:
      if (action.index) {
        state = _objectSpread(_objectSpread({}, state), {}, {
          filterCarSelectedColorData: action.data,
          filterCarSelectedColorIndex: action.index
        });
        break;
      } else {
        state = _objectSpread(_objectSpread({}, state), {}, {
          filterCarSelectedColorData: action.data
        });
        break;
      }

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILTER_COLOR_MODEL_SEARCH_KEYWORDS"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        filterColorSearchKeywords: action.data
      });
      break;
    // end filter model ..............................
    // filter body type
    //.......................................

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILTER_BODY_TYPE_MODE"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        filterBodyTypeMode: action.data
      });
      break;

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILTER_CAR_SELECTED_BODY_TYPE_MODEL_ROW"]:
      if (action.index) {
        state = _objectSpread(_objectSpread({}, state), {}, {
          filterCarSelectedBodyTypeData: action.data,
          filterCarSelectedBodyTypeIndex: action.index
        });
        break;
      } else {
        state = _objectSpread(_objectSpread({}, state), {}, {
          filterCarSelectedBodyTypeData: action.data
        });
        break;
      }

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILTER_BODY_TYPE_MODEL_SEARCH_KEYWORDS"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        filterBodyTypeSearchKeywords: action.data
      });
      break;
    // end filter model ..............................
    // filter driven wheels
    //.......................................

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILTER_DRIVEN_WHEELS_MODE"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        filterDrivenWheelMode: action.data
      });
      break;

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILTER_CAR_SELECTED_DRIVEN_WHEELS_MODEL_ROW"]:
      if (action.index) {
        state = _objectSpread(_objectSpread({}, state), {}, {
          filterCarSelectedDrivenWheelData: action.data,
          filterCarSelectedDrivenWheelIndex: action.index
        });
        break;
      } else {
        state = _objectSpread(_objectSpread({}, state), {}, {
          filterCarSelectedDrivenWheelData: action.data
        });
        break;
      }

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILTER_DRIVEN_WHEELS_MODEL_SEARCH_KEYWORDS"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        filterDrivenWheelSearchKeywords: action.data
      });
      break;
    // end filter driven wheels ..............................
    // filter driven wheels
    //.......................................

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILTER_FUEL_TYPE_MODE"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        filterFuelTypeMode: action.data
      });
      break;

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILTER_CAR_SELECTED_FUEL_TYPE_MODEL_ROW"]:
      if (action.index) {
        state = _objectSpread(_objectSpread({}, state), {}, {
          filterCarSelectedFuelTypeData: action.data,
          filterCarSelectedFuelTypeIndex: action.index
        });
        break;
      } else {
        state = _objectSpread(_objectSpread({}, state), {}, {
          filterCarSelectedFuelTypeData: action.data
        });
        break;
      }

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILTER_FUEL_TYPE_MODEL_SEARCH_KEYWORDS"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        filterFuelTypeSearchKeywords: action.data
      });
      break;
    // end filter driven wheels ..............................
    // filter driven wheels
    //.......................................

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILTER_STATE_MODE"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        filterStateMode: action.data
      });
      break;

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILTER_CAR_SELECTED_STATE_MODEL_ROW"]:
      if (action.index) {
        state = _objectSpread(_objectSpread({}, state), {}, {
          filterCarSelectedStateData: action.data,
          filterCarSelectedStateIndex: action.index
        });
        break;
      } else {
        state = _objectSpread(_objectSpread({}, state), {}, {
          filterCarSelectedStateData: action.data
        });
        break;
      }

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["FILTER_STATE_MODEL_SEARCH_KEYWORDS"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        filterStateSearchKeywords: action.data
      });
      break;
    // end filter driven wheels ..............................

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["QUICK_SEARCH_PRODUCTS_LIST"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        quickSearchMode: action.mode,
        quickSearchCarSpecsData: action.quickSearchCarSpecsData,
        quickSearchProductadsData: action.quickSearchProductadsData,
        values: action.values
      });
      break;

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["SHOW_CONTACT_LIST"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        showContact: action.boolean
      });
      break;

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["SET_APPLY_YEAR"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        applyYear: action.data
      });
      break;

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["SET_APPLY_PRICE"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        applyPrice: action.data
      });
      break;

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["SET_APPLY_MILEAGE"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        applyMileage: action.data
      });
      break;

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["SET_MENU_HEIGHT"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        menuHeight: action.data
      });
      break;

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["SET_NOTIFICATION_TOKEN"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        notificationToken: action.data
      });
      break;

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["SET_NOTIFICATION_TOKEN_TIME_OUT_DATE"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        notificationTokenTimeOutDate: action.data
      });
      break;

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["SET_INITED_REDUX"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        initedRedux: action.data
      });
      break;

    case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["SET_DISABLE_WINDOW_SCROLL"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        disableWindowScroll: action.data == true ? true : false
      });
      break;

    default:
      state = state;
      break;
  }

  Object(_config__WEBPACK_IMPORTED_MODULE_2__["persistRedux"])('app', state);
  return state;
});

/***/ }),

/***/ "./redux/reducers/carPlatesList-reducer.js":
/*!*************************************************!*\
  !*** ./redux/reducers/carPlatesList-reducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_carPlatesList_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/carPlatesList-actions */ "./redux/actions/carPlatesList-actions.js");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! local-storage */ "local-storage");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./redux/config.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const INITIAL_STATE = {
  carPlatesList: []
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = INITIAL_STATE, action) {
  // checkNeedPersist(_.get(action, 'type'), 'carPlatesList', _.get(action, 'payload'), _.get(action, 'isRestoreData'));
  let persistStates = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(local_storage__WEBPACK_IMPORTED_MODULE_3___default.a.get('redux') || {}, 'carPlatesList') || INITIAL_STATE;

  let newState = _objectSpread(_objectSpread({}, state), persistStates);

  if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(state, newState)) {
    state = newState;
  }

  switch (action.type) {
    case _actions_carPlatesList_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_CARPLATESLIST"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        carPlatesList: action.payload
      });
      break;

    default:
      state = state;
      break;
  }

  Object(_config__WEBPACK_IMPORTED_MODULE_4__["persistRedux"])('carPlatesList', state);
  return state;
});

/***/ }),

/***/ "./redux/reducers/carfreak-reducer.js":
/*!********************************************!*\
  !*** ./redux/reducers/carfreak-reducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_carfreak_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/carfreak.action */ "./redux/actions/carfreak.action.js");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! local-storage */ "local-storage");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./redux/config.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const INITIAL_STATE = {
  postModalLikeRefreshId: '',
  carFreakPosts: [],
  editedPost: {}
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = INITIAL_STATE, action) {
  // checkNeedPersist(_.get(action, 'type'), 'carfreak', _.get(action, 'payload'), _.get(action, 'isRestoreData'));
  let persistStates = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(local_storage__WEBPACK_IMPORTED_MODULE_2___default.a.get('redux') || {}, 'carfreak') || INITIAL_STATE;

  let newState = _objectSpread(_objectSpread({}, state), persistStates);

  if (!lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isEqual(state, newState)) {
    state = newState;
  }

  switch (action.type) {
    case _actions_carfreak_action__WEBPACK_IMPORTED_MODULE_1__["SET_POST_MODAL_LIKE_REFRESH_ID"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        postModalLikeRefreshId: action.payload
      });
      break;

    case _actions_carfreak_action__WEBPACK_IMPORTED_MODULE_1__["FETCH_CAR_FREAK_POSTS"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        carFreakPosts: action.payload
      });
      break;

    case _actions_carfreak_action__WEBPACK_IMPORTED_MODULE_1__["FETCH_EDITED_POST"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        editedPost: action.payload
      });
      break;

    default:
      state = state;
      break;
  }

  Object(_config__WEBPACK_IMPORTED_MODULE_3__["persistRedux"])('carfreak', state);
  return state;
});

/***/ }),

/***/ "./redux/reducers/kpp-reducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/kpp-reducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_kpp_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/kpp-actions */ "./redux/actions/kpp-actions.js");
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common-function */ "./common-function.js");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! local-storage */ "local-storage");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./redux/config.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const INITIAL_STATE = {
  answeredEnRevisionSectionAPaper: [],
  answeredEnRevisionSectionBPaper: [],
  answeredEnRevisionSectionCPaper: [],
  answeredBmRevisionSectionAPaper: [],
  answeredBmRevisionSectionBPaper: [],
  answeredBmRevisionSectionCPaper: []
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = INITIAL_STATE, action) {
  // checkNeedPersist(_.get(action, 'type'), 'kpp', _.get(action, 'payload'), _.get(action, 'isRestoreData'));
  let persistStates = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(local_storage__WEBPACK_IMPORTED_MODULE_4___default.a.get('redux') || {}, 'kpp') || INITIAL_STATE;

  let newState = _objectSpread(_objectSpread({}, state), persistStates);

  if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(state, newState)) {
    state = newState;
  }

  switch (action.type) {
    case _actions_kpp_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_REVISION_ANSWERED_QUESTIONS"]:
      if (!action.payload || !Object(_common_function__WEBPACK_IMPORTED_MODULE_3__["isValidNumber"])(action.payload.group) || !action.payload.language) {
        state = state;
      } else {
        state[`answered${lodash__WEBPACK_IMPORTED_MODULE_0___default.a.upperFirst(action.payload.language)}RevisionSection${String.fromCharCode(65 + parseInt(action.payload.group))}Paper`] = action.payload.data;
        state = _objectSpread({}, state);
      }

      break;

    default:
      state = state;
      break;
  }

  Object(_config__WEBPACK_IMPORTED_MODULE_5__["persistRedux"])('kpp', state);
  return state;
});

/***/ }),

/***/ "./redux/reducers/live-reducer.js":
/*!****************************************!*\
  !*** ./redux/reducers/live-reducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_live_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/live-action */ "./redux/actions/live-action.js");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! local-storage */ "local-storage");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./redux/config.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const INITIAL_STATE = {
  socket: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = INITIAL_STATE, action) {
  // checkNeedPersist(_.get(action, 'type'), 'live', _.get(action, 'payload'), _.get(action, 'isRestoreData'));
  let persistStates = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(local_storage__WEBPACK_IMPORTED_MODULE_3___default.a.get('redux') || {}, 'live') || INITIAL_STATE;

  let newState = _objectSpread(_objectSpread({}, state), persistStates);

  if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(state, newState)) {
    state = newState;
  }

  switch (action.type) {
    case _actions_live_action__WEBPACK_IMPORTED_MODULE_2__["FETCH_CLIENT_SOCKET_IO"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        socket: action.payload
      });
      break;

    case _actions_live_action__WEBPACK_IMPORTED_MODULE_2__["CLEAR_CLIENT_SOCKET_IO"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        socket: undefined
      });
      break;

    default:
      state = state;
      break;
  }

  Object(_config__WEBPACK_IMPORTED_MODULE_4__["persistRedux"])('live', state);
  return state;
});

/***/ }),

/***/ "./redux/reducers/newcars-reducer.js":
/*!*******************************************!*\
  !*** ./redux/reducers/newcars-reducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_newcars_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/newcars-actions */ "./redux/actions/newcars-actions.js");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! local-storage */ "local-storage");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./redux/config.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const INITIAL_STATE = {
  news: [],
  club: [],
  price: [],
  popular: [],
  popularCars: [],
  CarName: {},
  brands: [],
  brandDetail: [],
  brandCars: [],
  details: [],
  fuel: [],
  filteredCompareData: [],
  newCarFilterGroup: {
    make: '',
    bodyType: '',
    transmission: '',
    drivenwheel: '',
    seatCapacity: '',
    fuelType: '',
    exterior: '',
    interior: '',
    safety: '',
    priceRange: [],
    monthlyPaymentRange: [],
    engineCapacityRange: []
  },
  peerComp: [],
  compareIds: [],
  compareLimit: -1
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = INITIAL_STATE, action) {
  // checkNeedPersist(_.get(action, 'type'), 'newCars', _.get(action, 'payload'), _.get(action, 'isRestoreData'));
  let persistStates = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(local_storage__WEBPACK_IMPORTED_MODULE_3___default.a.get('redux') || {}, 'newCars') || INITIAL_STATE;

  let newState = _objectSpread(_objectSpread({}, state), persistStates);

  if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(state, newState)) {
    state = newState;
  }

  switch (action.type) {
    case _actions_newcars_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_NEWS"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        news: action.payload
      });
      break;

    case _actions_newcars_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_CLUB"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        club: action.payload
      });
      break;

    case _actions_newcars_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_PRICE"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        price: action.payload
      });
      break;

    case _actions_newcars_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_POPULAR"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        popular: action.payload
      });
      break;

    case _actions_newcars_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_POPULARCARS"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        popularCars: action.payload
      });

    case _actions_newcars_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_CARNAME"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        CarName: action.payload
      });
      break;

    case _actions_newcars_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_CARDETAILS"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        details: action.payload
      });
      break;

    case _actions_newcars_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_BRANDS"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        brands: action.payload
      });
      break;

    case _actions_newcars_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_BRANDDETAIL"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        brandDetail: action.payload
      });
      break;

    case _actions_newcars_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_BRANDCARS"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        brandCars: action.payload
      });
      break;

    case _actions_newcars_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_DETAILS"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        details: action.payload
      });
      break;

    case _actions_newcars_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_FUEL"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        fuel: action.payload
      });
      break;

    case _actions_newcars_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_FILTERED_COMPARE_DATA"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        filteredCompareData: action.payload
      });
      break;

    case _actions_newcars_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_COMPARE_NEWCAR_IDS"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        compareIds: action.payload
      });
      break;

    case _actions_newcars_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_COMPARE__NEWCAR_LIMIT"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        compareLimit: action.payload
      });
      break;

    case _actions_newcars_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_COMPARE_NEWCAR_ID"]:
      if (state.compareIds.length < state.compareLimit) {
        let checkIfExist = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.findIndex(state.compareIds, function (item) {
          state = item == action.payload;
        });

        if (checkIfExist == -1) {
          let temp = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(state.compareIds);

          temp.push(action.payload);
          state = _objectSpread(_objectSpread({}, state), {}, {
            compareIds: temp
          });
        } else {
          state = _objectSpread({}, state);
        }
      } else {
        state = _objectSpread({}, state);
      }

      break;

    case _actions_newcars_actions__WEBPACK_IMPORTED_MODULE_2__["REMOVE_COMPARE_NEWCAR_ID"]:
      let temp = state.compareIds.filter(item => item !== action.payload);
      state = _objectSpread(_objectSpread({}, state), {}, {
        compareIds: temp
      });
      break;

    case _actions_newcars_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_PEER_COMPARE_CARS"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        peerComp: action.payload
      });
      break;

    case _actions_newcars_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_NEW_CAR_FILTER_GROUP"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        newCarFilterGroup: action.payload
      });
      break;

    case _actions_newcars_actions__WEBPACK_IMPORTED_MODULE_2__["RESET_NEW_CAR_FILTER_GROUP"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        newCarFilterGroup: {
          make: '',
          bodyType: '',
          transmission: '',
          drivenwheel: '',
          seatCapacity: '',
          fuelType: '',
          exterior: '',
          interior: '',
          safety: '',
          priceRange: [],
          monthlyPaymentRange: [],
          engineCapacityRange: []
        }
      });
      break;

    default:
      state = state;
      break;
  }

  Object(_config__WEBPACK_IMPORTED_MODULE_4__["persistRedux"])('newCars', state);
  return state;
});

/***/ }),

/***/ "./redux/reducers/productsList-reducer.js":
/*!************************************************!*\
  !*** ./redux/reducers/productsList-reducer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_productsList_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/productsList-actions */ "./redux/actions/productsList-actions.js");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! local-storage */ "local-storage");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./redux/config.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const INITIAL_STATE = {
  productListLoading: false,
  productsList: [],
  productsListHome: [],
  activeId: '',
  activeproductList: [],
  compareData: [],
  filteredCompareData: [],
  featuresList: [],
  checkedFeaturesDate: null,
  compareIds: [],
  compareLimit: 4,
  filterOptions: {},
  filterGroup: {},
  isFilterModalOpen: false,
  config: {}
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = INITIAL_STATE, action) {
  // checkNeedPersist(_.get(action, 'type'), 'productsList', _.get(action, 'payload'), _.get(action, 'isRestoreData'));
  let persistStates = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(local_storage__WEBPACK_IMPORTED_MODULE_3___default.a.get('redux') || {}, 'productsList') || INITIAL_STATE;

  let newState = _objectSpread(_objectSpread({}, state), persistStates);

  if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(state, newState)) {
    state = newState;
  }

  switch (action.type) {
    case _actions_productsList_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_PRODUCTSLIST"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        productsList: action.payload
      });
      break;

    case _actions_productsList_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_PRODUCTSLIST_HOME"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        productsListHome: action.payload
      });
      break;

    case _actions_productsList_actions__WEBPACK_IMPORTED_MODULE_2__["PUSH_PRODUCTSLIST"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        productsList: [action.payload, ...state.productsList]
      });
      break;

    case _actions_productsList_actions__WEBPACK_IMPORTED_MODULE_2__["REMOVE_PRODUCTSLIST"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        productsList: [...state.productsList.filter(item => item._id !== action.payload._id)]
      });
      break;

    case _actions_productsList_actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE_PRODUCTSLIST"]:
      let index = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.findIndex(state.productsList, {
        '_id': action.payload._id
      });

      state.productsList.splice(index, 1, action.payload);
      state = _objectSpread(_objectSpread({}, state), {}, {
        productsList: state.productsList
      });
      break;

    case _actions_productsList_actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE_ACTIVE_ID_PRODUCTS_LIST"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        activeId: action.id,
        activeproductList: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.pick(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(state.productsList, {
          '_id': action.id
        }), ['ownerMobileNumer', 'carPlateNumber', 'state', 'carspecsAll', 'ownerAddress', 'companys', 'description', 'productType', 'drivenWheel', 'carspecsId', 'createdAt', 'condition', 'ownerName', 'companyId', 'features', 'bodyType', 'fuelType', 'mileage', 'carUrl', 'prefix', 'color', 'price', '_id'])
      });
      break;

    case _actions_productsList_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_COMPARE__PRODUCT_ID"]:
      if (!state.compareIds) {
        state.compareIds = [];
      }

      if (state.compareIds.length < state.compareLimit) {
        let checkIfExist = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.findIndex(state.compareIds, function (item) {
          state = item == action.payload;
        });

        if (checkIfExist == -1) {
          let temp = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(state.compareIds);

          temp.push(action.payload);
          state = _objectSpread(_objectSpread({}, state), {}, {
            compareIds: temp
          });
        } else {
          state = _objectSpread({}, state);
        }
      } else {
        state = _objectSpread({}, state);
      }

      break;

    case _actions_productsList_actions__WEBPACK_IMPORTED_MODULE_2__["REMOVE_COMPARE_PRODUCT_ID"]:
      let temp = state.compareIds.filter(item => item !== action.payload);
      state = _objectSpread(_objectSpread({}, state), {}, {
        compareIds: temp
      });
      break;

    case _actions_productsList_actions__WEBPACK_IMPORTED_MODULE_2__["PATCH_COMPARE_PRODUCT_IDS"]:
      if (!Array.isArray(action.payload)) {
        action.payload = [];
      }

      state = _objectSpread(_objectSpread({}, state), {}, {
        compareIds: action.payload
      });
      break;

    case _actions_productsList_actions__WEBPACK_IMPORTED_MODULE_2__["CLEAR_COMPARE_PRODUCT_IDS"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        compareIds: []
      });
      break;

    case _actions_productsList_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_FILTERED_COMPARE_DATA"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        filteredCompareData: action.payload
      });
      break;

    case _actions_productsList_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_FEATURES_LIST"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        featuresList: action.payload
      });
      break;

    case _actions_productsList_actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE_CHECKED_FEATURES_DATE"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        checkedFeaturesDate: moment__WEBPACK_IMPORTED_MODULE_1___default()(action.payload)
      });
      break;

    case _actions_productsList_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_COMPARE_LIMIT"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        compareLimit: action.payload
      });
      break;

    case _actions_productsList_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_PRODUCT_FILTER_OPTIONS"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        filterOptions: action.payload
      });
      break;

    case _actions_productsList_actions__WEBPACK_IMPORTED_MODULE_2__["CLEAR_PRODUCT_FILTER_OPTIONS"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        filterOptions: {}
      });
      break;

    case _actions_productsList_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_PRODUCT_FILTER_GROUP"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        filterGroup: action.payload
      });
      break;

    case _actions_productsList_actions__WEBPACK_IMPORTED_MODULE_2__["CLEAR_PRODUCT_FILTER_GROUP"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        filterGroup: {}
      });
      break;

    case _actions_productsList_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_PRODUCT_FILTER_CONFIG"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        config: action.payload
      });
      break;

    case _actions_productsList_actions__WEBPACK_IMPORTED_MODULE_2__["CLEAR_PRODUCT_FILTER_CONFIG"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        config: {}
      });
      break;

    case _actions_productsList_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_FILTER_MODAL_STATE"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        isFilterModalOpen: action.payload
      });
      break;

    case _actions_productsList_actions__WEBPACK_IMPORTED_MODULE_2__["SET_PRODUCT_LIST_LOADING"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        productListLoading: action.payload
      });
      break;

    default:
      state = state;
      break;
  }

  Object(_config__WEBPACK_IMPORTED_MODULE_4__["persistRedux"])('productsList', state);
  return state;
});

/***/ }),

/***/ "./redux/reducers/register-reducer.js":
/*!********************************************!*\
  !*** ./redux/reducers/register-reducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_register_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/register-actions */ "./redux/actions/register-actions.js");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! local-storage */ "local-storage");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./redux/config.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const INITIAL_STATE = {
  current: 0,
  formOne: {}
};

const appReducer = (state = INITIAL_STATE, action) => {
  // checkNeedPersist(_.get(action, 'type'), 'register', _.get(action, 'payload'), _.get(action, 'isRestoreData'));
  let persistStates = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(local_storage__WEBPACK_IMPORTED_MODULE_1___default.a.get('redux') || {}, 'productsList') || INITIAL_STATE;

  let newState = _objectSpread(_objectSpread({}, state), persistStates);

  if (!lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEqual(state, newState)) {
    state = newState;
  }

  switch (action.type) {
    case _actions_register_actions__WEBPACK_IMPORTED_MODULE_0__["STEPS_PROPS_CURRENT"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        current: action.data
      });
      break;

    case _actions_register_actions__WEBPACK_IMPORTED_MODULE_0__["FORM_ONE"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        formOne: action.data
      });
      break;

    default:
      state = state;
      break;
  }

  Object(_config__WEBPACK_IMPORTED_MODULE_2__["persistRedux"])('register', state);
  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (appReducer);

/***/ }),

/***/ "./redux/reducers/sellerProfile-reducer.js":
/*!*************************************************!*\
  !*** ./redux/reducers/sellerProfile-reducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_sellerProfile_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/sellerProfile-actions */ "./redux/actions/sellerProfile-actions.js");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! local-storage */ "local-storage");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./redux/config.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const INITIAL_STATE = {
  // company: {},
  seller: {},
  carOnSales: []
};

const appReducer = (state = INITIAL_STATE, action) => {
  // checkNeedPersist(_.get(action, 'type'), 'sellerProfile', _.get(action, 'payload'), _.get(action, 'isRestoreData'));
  let persistStates = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(local_storage__WEBPACK_IMPORTED_MODULE_1___default.a.get('redux') || {}, 'sellerProfile') || INITIAL_STATE;

  let newState = _objectSpread(_objectSpread({}, state), persistStates);

  if (!lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEqual(state, newState)) {
    state = newState;
  }

  switch (action.type) {
    case _actions_sellerProfile_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_SELLER_PROFILE"]:
      // state = {...state, company: action.data };
      state = _objectSpread(_objectSpread({}, state), {}, {
        seller: action.data
      });
      break;

    default:
      state = state;
      break;
  }

  Object(_config__WEBPACK_IMPORTED_MODULE_2__["persistRedux"])('sellerProfile', state);
  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (appReducer);

/***/ }),

/***/ "./redux/reducers/socketRefresh-reducer.js":
/*!*************************************************!*\
  !*** ./redux/reducers/socketRefresh-reducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_socketRefresh_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/socketRefresh-actions */ "./redux/actions/socketRefresh-actions.js");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! local-storage */ "local-storage");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./redux/config.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const INITIAL_STATE = {};
/* harmony default export */ __webpack_exports__["default"] = (function (state = INITIAL_STATE, action) {
  // checkNeedPersist(_.get(action, 'type'), 'socketRefresh', _.get(action, 'payload'), _.get(action, 'isRestoreData'));
  let persistStates = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(local_storage__WEBPACK_IMPORTED_MODULE_1___default.a.get('redux') || {}, 'socketRefresh') || INITIAL_STATE;

  let newState = _objectSpread(_objectSpread({}, state), persistStates);

  if (!lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEqual(state, newState)) {
    state = newState;
  }

  switch (action.type) {
    case _actions_socketRefresh_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_SOCKET_INFO"]:
      state = action.payload; // state = {
      //   ...state,
      //   shouldRefresh: action.payload
      // }
      //not really used we can just update with falsh

      break;

    case _actions_socketRefresh_actions__WEBPACK_IMPORTED_MODULE_0__["DELETE_SOCKET_INFO"]:
      state = _objectSpread({}, state);
      break;

    default:
      state = state;
      break;
  }

  Object(_config__WEBPACK_IMPORTED_MODULE_2__["persistRedux"])('socketRefresh', state);
  return state;
});

/***/ }),

/***/ "./redux/reducers/user-reducer.js":
/*!****************************************!*\
  !*** ./redux/reducers/user-reducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/user-actions */ "./redux/actions/user-actions.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./redux/config.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! local-storage */ "local-storage");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common-function */ "./common-function.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const INITIAL_STATE = {
  info: {
    user: {
      _id: null
    }
  },
  authenticated: false,
  loading: false,
  errors: {},
  addressForm: {},
  cardForm: {},
  bankForm: {}
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = INITIAL_STATE, action) {
  let persistStates = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(local_storage__WEBPACK_IMPORTED_MODULE_3___default.a.get('redux') || {}, 'user') || INITIAL_STATE;

  let newState = _objectSpread(_objectSpread({}, state), persistStates); // checkNeedPersist(_.get(action, 'type'), 'user', _.get(action, 'payload'), _.get(action, 'isRestoreData'));


  if (!lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEqual(state, newState)) {
    state = newState;
  }

  switch (action.type) {
    case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["LOGIN_SUCCESSFUL"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        authenticated: true,
        info: action.payload
      });
      break;

    case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_SUCCESSFUL"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        authenticated: false,
        info: {}
      });
      break;

    case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["SET_USER"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        info: _objectSpread(_objectSpread({}, state.info), {}, {
          user: action.payload
        })
      });
      break;

    case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["ADDRESS_BOOK_FORM"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        addressForm: action.payload
      });
      break;

    case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["CARD_FORM"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        cardForm: action.payload
      });
      break;

    case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["BANK_FORM"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        bankForm: action.payload
      });
      break;

    default:
      break;
  }

  Object(_config__WEBPACK_IMPORTED_MODULE_1__["persistRedux"])('user', state);
  return state;
});

/***/ }),

/***/ "./redux/reducers/userlikes-reducer.js":
/*!*********************************************!*\
  !*** ./redux/reducers/userlikes-reducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_userlikes_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/userlikes-actions */ "./redux/actions/userlikes-actions.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! local-storage */ "local-storage");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./redux/config.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const INITIAL_STATE = {
  allLike: [],
  allBookmark: [],
  allLikeMsg: []
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = INITIAL_STATE, action) {
  // checkNeedPersist(_.get(action, 'type'), 'userlikes', _.get(action, 'payload'), _.get(action, 'isRestoreData'));
  let persistStates = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(local_storage__WEBPACK_IMPORTED_MODULE_2___default.a.get('redux') || {}, 'userlikes') || INITIAL_STATE;

  let newState = _objectSpread(_objectSpread({}, state), persistStates);

  if (!lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEqual(state, newState)) {
    state = newState;
  }

  if (typeof state === 'undefined') {
    state = {};
  }

  switch (action.type) {
    case _actions_userlikes_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_LIKE"]:
      if (!state.allLike) {
        state.allLike = [];
      }

      state.allLike.push(action.value);
      state = _objectSpread({}, state);
      break;

    case _actions_userlikes_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_LIKE"]:
      lodash__WEBPACK_IMPORTED_MODULE_1___default.a.remove(state.allLike, {
        chatId: action.value.chatId,
        userId: action.value.userId
      });

      state = _objectSpread({}, state);
      break;

    case _actions_userlikes_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_BOOKMARK"]:
      if (!state.allBookmark) {
        state.allBookmark = [];
      }

      state.allBookmark.push(action.value);
      state = _objectSpread({}, state);
      break;

    case _actions_userlikes_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_BOOKMARK"]:
      lodash__WEBPACK_IMPORTED_MODULE_1___default.a.remove(state.allBookmark, {
        chatId: action.value.chatId,
        userId: action.value.userId
      });

      state = _objectSpread({}, state);
      break;

    case _actions_userlikes_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_LIKE_MSG"]:
      if (!state.allLikeMsg) {
        state.allLikeMsg = [];
      }

      state.allLikeMsg.push(action.value);
      state = _objectSpread({}, state);
      break;

    case _actions_userlikes_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_LIKE_MSG"]:
      lodash__WEBPACK_IMPORTED_MODULE_1___default.a.remove(state.allLikeMsg, {
        chatId: action.value.chatId,
        messageId: action.value.chatId,
        userId: action.value.userId
      });

      state = _objectSpread({}, state);
      break;

    default:
      state = state;
      break;
  }

  Object(_config__WEBPACK_IMPORTED_MODULE_3__["persistRedux"])('userlikes', state);
  return state;
});

/***/ }),

/***/ "./redux/reducers/variant-reducer.js":
/*!*******************************************!*\
  !*** ./redux/reducers/variant-reducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_variant_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/variant-action */ "./redux/actions/variant-action.js");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! local-storage */ "local-storage");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./redux/config.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const INITIAL_STATE = {
  variant: {}
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = INITIAL_STATE, action) {
  // checkNeedPersist(_.get(action, 'type'), 'variant', _.get(action, 'payload'), _.get(action, 'isRestoreData'));
  let persistStates = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(local_storage__WEBPACK_IMPORTED_MODULE_3___default.a.get('redux') || {}, 'variant') || INITIAL_STATE;

  let newState = _objectSpread(_objectSpread({}, state), persistStates);

  if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(state, newState)) {
    state = newState;
  }

  switch (action.type) {
    case _actions_variant_action__WEBPACK_IMPORTED_MODULE_2__["FETCH_VARIANT"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        variant: action.payload
      });
      break;

    case _actions_variant_action__WEBPACK_IMPORTED_MODULE_2__["CLEAR_VARIANT"]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        variant: {}
      });
      break;

    default:
      state = state;
      break;
  }

  Object(_config__WEBPACK_IMPORTED_MODULE_4__["persistRedux"])('variant', state);
  return state;
});

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: wrapper, store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/reducers/app-reducer */ "./redux/reducers/app-reducer.js");
/* harmony import */ var _redux_reducers_carfreak_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/reducers/carfreak-reducer */ "./redux/reducers/carfreak-reducer.js");
/* harmony import */ var _redux_reducers_carPlatesList_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/reducers/carPlatesList-reducer */ "./redux/reducers/carPlatesList-reducer.js");
/* harmony import */ var _redux_reducers_kpp_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/reducers/kpp-reducer */ "./redux/reducers/kpp-reducer.js");
/* harmony import */ var _redux_reducers_live_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/reducers/live-reducer */ "./redux/reducers/live-reducer.js");
/* harmony import */ var _redux_reducers_newcars_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/reducers/newcars-reducer */ "./redux/reducers/newcars-reducer.js");
/* harmony import */ var _redux_reducers_productsList_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/reducers/productsList-reducer */ "./redux/reducers/productsList-reducer.js");
/* harmony import */ var _redux_reducers_register_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/reducers/register-reducer */ "./redux/reducers/register-reducer.js");
/* harmony import */ var _redux_reducers_sellerProfile_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/reducers/sellerProfile-reducer */ "./redux/reducers/sellerProfile-reducer.js");
/* harmony import */ var _redux_reducers_socketRefresh_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/reducers/socketRefresh-reducer */ "./redux/reducers/socketRefresh-reducer.js");
/* harmony import */ var _redux_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../redux/reducers/user-reducer */ "./redux/reducers/user-reducer.js");
/* harmony import */ var _redux_reducers_userlikes_reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../redux/reducers/userlikes-reducer */ "./redux/reducers/userlikes-reducer.js");
/* harmony import */ var _redux_reducers_variant_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../redux/reducers/variant-reducer */ "./redux/reducers/variant-reducer.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const bindMiddleware = middleware => {
  if (true) {
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};

const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  app: _redux_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  carfreak: _redux_reducers_carfreak_reducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  carPlatesList: _redux_reducers_carPlatesList_reducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  kpp: _redux_reducers_kpp_reducer__WEBPACK_IMPORTED_MODULE_6__["default"],
  live: _redux_reducers_live_reducer__WEBPACK_IMPORTED_MODULE_7__["default"],
  newcars: _redux_reducers_newcars_reducer__WEBPACK_IMPORTED_MODULE_8__["default"],
  productsList: _redux_reducers_productsList_reducer__WEBPACK_IMPORTED_MODULE_9__["default"],
  register: _redux_reducers_register_reducer__WEBPACK_IMPORTED_MODULE_10__["default"],
  sellerProfile: _redux_reducers_sellerProfile_reducer__WEBPACK_IMPORTED_MODULE_11__["default"],
  socketRefresh: _redux_reducers_socketRefresh_reducer__WEBPACK_IMPORTED_MODULE_12__["default"],
  userlikes: _redux_reducers_userlikes_reducer__WEBPACK_IMPORTED_MODULE_14__["default"],
  variant: _redux_reducers_variant_reducer__WEBPACK_IMPORTED_MODULE_15__["default"],
  user: _redux_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_13__["default"]
});

const reducer = (state, action) => {
  if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]) {
    const nextState = _objectSpread(_objectSpread({}, state), action.payload);

    if (state.count.count) nextState.count.count = state.count.count; // preserve count value on client side navigation

    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const initStore = () => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, bindMiddleware([redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a]));
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["createWrapper"])(initStore);
const store = initStore();

/***/ }),

/***/ "./styles/animation.css":
/*!******************************!*\
  !*** ./styles/animation.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/app.css":
/*!************************!*\
  !*** ./styles/app.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/color.css":
/*!**************************!*\
  !*** ./styles/color.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/common.css":
/*!***************************!*\
  !*** ./styles/common.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/newcar.css":
/*!***************************!*\
  !*** ./styles/newcar.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/overwrite.css":
/*!******************************!*\
  !*** ./styles/overwrite.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/sellCar.css":
/*!****************************!*\
  !*** ./styles/sellCar.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/viewProducts.css":
/*!*********************************!*\
  !*** ./styles/viewProducts.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


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

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "local-storage":
/*!********************************!*\
  !*** external "local-storage" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("local-storage");

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

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvbW1vbi1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhckZyZWFrL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dlbmVyYWwvUGFnZVRyYW5zaXRpb24uanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGl2ZS9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vZmVhdGhlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vZnVuY3Rpb25Db250ZW50LmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZVJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9pY29uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFyYW1zL2JvZHlUeXBlTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9wYXJhbXMvY2FyQnJhbmRzTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9wYXJhbXMvY29sb3JMaXN0LmpzIiwid2VicGFjazovLy8uL3BhcmFtcy9mdWVsVHlwZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcGFyYW1zL3N0YXRlTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2FwcC1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvY2FyUGxhdGVzTGlzdC1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvY2FyZnJlYWsuYWN0aW9uLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMva3BwLWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9saXZlLWFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL25ld2NhcnMtYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3Byb2R1Y3RzTGlzdC1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvcmVnaXN0ZXItYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3NlbGxlclByb2ZpbGUtYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3NvY2tldFJlZnJlc2gtYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3VzZXItYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3VzZXJsaWtlcy1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvdmFyaWFudC1hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2FwcC1yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2NhclBsYXRlc0xpc3QtcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9jYXJmcmVhay1yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2twcC1yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2xpdmUtcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9uZXdjYXJzLXJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvcHJvZHVjdHNMaXN0LXJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvcmVnaXN0ZXItcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9zZWxsZXJQcm9maWxlLXJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvc29ja2V0UmVmcmVzaC1yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL3VzZXItcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy91c2VybGlrZXMtcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy92YXJpYW50LXJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZlYXRoZXJzanMvYXV0aGVudGljYXRpb24tY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZlYXRoZXJzanMvZmVhdGhlcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZmVhdGhlcnNqcy9zb2NrZXRpby1jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2NhbC1zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1zZW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInF1ZXJ5LXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zcHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvLWNsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXVpZFwiIl0sIm5hbWVzIjpbIm1vbWVudCIsInJlcXVpcmUiLCJkZWZhdWx0UmFuZ2VTbWFsbGVyIiwiZGVmYXVsdFJhbmdlQmlnZ2VyIiwiYXZhaWxhYmxlRmlsdGVycyIsImlzTnVtYmVyQW5kU3BhY2UiLCJ2YWx1ZSIsInNwbGl0IiwiZmlsdGVyIiwiaXRlbSIsImluZGV4IiwicGFyc2VJbnQiLCJsZW5ndGgiLCJmb3JtYXREYXRlIiwiZm9ybWF0IiwiaXNWYWxpZERhdGUiLCJmb3JtYXROdW1iZXIiLCJ1bml0Iiwicm91bmQiLCJmaXhlZFBvaW50IiwidHJpbSIsImlzTmFOIiwicGFyc2VGbG9hdCIsIm51bWJlclRvRml4ZWQiLCJ1bml0cyIsIl8iLCJmb3JFYWNoIiwicmV2ZXJzZSIsImZvcm1hdGVkVmFsdWUiLCJwcmVmaXgiLCJpbnNlcnRCZXR3ZWVuIiwicG9zdGZpeCIsInRvU3RyaW5nIiwidHJpbVN0cmluZ051bWJlciIsImZyb21Gcm9udCIsInJhbmdlIiwidG9GaXhlZCIsInNsaWNlIiwiam9pbiIsInByZWZpeEFyciIsImRvbmUiLCJzb21lIiwibnVtIiwic3Vic3RyaW5nIiwicG9zdGZpeEFyciIsInJldmVyc2VTdHJpbmciLCJzdHJBcnJheSIsImNoZWNrQ2FyZFR5cGUiLCJudW1iZXIiLCJyZXBsYWNlIiwicmUiLCJSZWdFeHAiLCJtYXRjaCIsInRlc3QiLCJyZW1vdmVOdWxsRnJvbUFycmF5Iiwibm90RW1wdHlMZW5ndGgiLCJEYXRlIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiY2FsbCIsInZhbHVlT2YiLCJjYWxjdWxhdGVUaW1lUmFuZ2UiLCJkYXRlMSIsImRhdGUyIiwicHJlY2lzZSIsImRhdGEiLCJkaWZmZXJlbmNlIiwiZGlmZiIsInNlY3Rpb25zIiwic2VsZWN0ZWRTZWN0aW9uIiwiZmluZCIsInNlY3Rpb24iLCJNYXRoIiwiYWJzIiwiY29udmVydE1pbGxpU2Vjb25kc1RvVGltZSIsIm1pbGxpc2Vjb25kIiwibWluVW5pdCIsImlzVmFsaWROdW1iZXIiLCJzZWNvbmQiLCJtaW51dGUiLCJob3VyIiwiZmluYWxUaW1lIiwiZHVyYXRpb24iLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiaXNFeHBpcmVkIiwiZGF0ZSIsImFzcGVjdCIsInRvZGF5IiwiaXNBZnRlciIsImNvbnZlcnRUb0NhcmRGb3JtYXQiLCJjb252ZXJ0VG9FeHBpcmVkRGF0ZUZvcm1hdCIsInN0ciIsInNwbGljZSIsInNwYWNlIiwiY2hhciIsImZyb21CYWNrIiwic3RvcEF0RW5kIiwib3Jpc3RyIiwiYWRkZWRzcGFjZWNvdW50IiwiY2hlY2tTdXBwb3J0ZWRDYXJkVHlwZSIsImNhcmQiLCJpc0V4cGlyeURhdGVGb3JtYXQiLCJzb3J0QnlEZXNjIiwiY29sIiwic29ydCIsImEiLCJiIiwiaXNQbGFpbk9iamVjdCIsImlzQXJyYXkiLCJzb3J0QnlEYXRlRGVzYyIsImlzQmVmb3JlIiwiZmluZERhdGEiLCJ2YWwiLCJoaWRlU3RyaW5nTnVtYmVyIiwic3RyaW5nIiwic3RhcnQiLCJlbmQiLCJzdGFydHBhcnQiLCJlbmRwYXJ0IiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwiY29udmVydHBhcnQiLCJtYXAiLCJBcnJheSIsImlzT2JqZWN0Iiwia2V5cyIsImFycmF5TGVuZ3RoQ291bnQiLCJzeW5jRGVmYXVsdERlbGl2ZXJ5IiwiaWQiLCJfaWQiLCJpc0RlZmF1bHREZWxpdmVyeSIsInN5bmNEZWZhdWx0QmlsbGluZyIsImlzRGVmYXVsdEJpbGxpbmciLCJzeW5jRGVmYXVsdENhcmQiLCJpc0RlZmF1bHRDYXJkIiwic3luY0RlZmF1bHRCYW5rIiwiaXNEZWZhdWx0QmFuayIsImlzU2F2ZWRXaXNoTGlzdCIsImNoZWNrIiwicHJvZHVjdElkIiwiaXNGb2xsb3dlZCIsImNvbXBhbnlJZCIsImRlZXBFcXVhbCIsIm9iamVjdDEiLCJvYmplY3QyIiwia2V5czEiLCJrZXlzMiIsImtleSIsInZhbDEiLCJ2YWwyIiwiYXJlT2JqZWN0cyIsIm9iamVjdCIsImRlZXBFcXVhbEFycmF5T2JqZWN0IiwiYXJyYXkxIiwiYXJyYXkyIiwieCIsInJvdW5kVG9IYWxmIiwiZGVjaW1hbCIsImludCIsInF1ZXJ5U3RyaW5naWZ5TmVzdGVkT2JqZWN0IiwiY29sTmFtZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeVN0cmluZyIsImdldEltZ1RhZ1NvdXJjZSIsInN0ckFyciIsInJlbW92ZWQiLCJjb21wYWN0IiwiY2hyIiwiaW1hZ2VzIiwiaW1hZ2UiLCJzdWJzdHIiLCJzdGFydEluZGV4IiwiaW5kZXhPZiIsImNyb3BwZWRTdHJBcnIiLCJ1cmwiLCJuYW1lIiwicmVtb3ZlSHRtbFRhZyIsImNvbnZlcnRUb1JhbmdlRm9ybWF0IiwiY2xvbmVEZWVwIiwiY29udmVydFJhbmdlRm9ybWF0QmFjayIsInZhbHVlQXJyIiwiaXNFbXB0eSIsInBhcmFtZXRlcjEiLCJwYXJhbWV0ZXIyIiwiY29udmVydFJhbmdlRm9ybWF0VG9UZXh0IiwiZm9ybWF0ZWRSYW5nZSIsInZhbHVlRm9ybWF0IiwiY29udmVydFZhbHVlIiwidGV4dCIsImNvbnZlcnRGaWx0ZXJSYW5nZSIsImZpbmFsRGF0YSIsInF1ZXJ5IiwiJGx0ZSIsInB1c2giLCIkbHQiLCIkZXEiLCIkZ3QiLCIkZ3RlIiwicXVlcnkxIiwib2JqZWN0UmVtb3ZlRW1wdHlWYWx1ZSIsInBpY2tCeSIsInByb3BlcnR5IiwiY29udmVydFByb2R1Y3RSb3V0ZVBhcmFtc1RvRmlsdGVyT2JqZWN0Iiwicm91dGVQYXJhbXMiLCJwYXJhbWV0ZXIzIiwic29ydGluZyIsInBhZ2UiLCJ2aWV3IiwibWVyZ2VPYmoiLCJwaWNrIiwicGFyc2UiLCJlcnJvciIsImdldCIsImZpbHRlckdyb3VwIiwiY29uZmlnIiwicHJpY2VSYW5nZSIsInllYXJSYW5nZSIsIm1pbGVhZ2VSYW5nZSIsImVuZ2luZUNhcGFjaXR5UmFuZ2UiLCJzdGF0ZUFyciIsInN0YXRlIiwiYXJlYSIsIm1ha2UiLCJ0b0xvd2VyIiwibW9kZWwiLCJjb252ZXJ0UGFyYW1ldGVyVG9Qcm9kdWN0TGlzdFVybCIsImJhc2VQYXRoIiwiY29uZGl0aW9uIiwibWFpblBhcmFtZXRlcnMiLCJwYXRoIiwicGFyYW1ldGVyIiwiY29udmVydFBhcmFtZXRlclRvUHJvZHVjdExpc3RTZW9VcmwiLCJjaGVja0VudlJldHVybkNtc1VybCIsImNsaWVudCIsImlvIiwidXJpIiwiZ2V0VG9wSXRlbXMiLCJyYW5rIiwicGlja2VkRGF0YSIsInRvQ2FtZWxDYXNlIiwic2VwZXJhdG9yIiwiY2FwaXRhbGl6ZSIsInRvU25ha2VDYXNlIiwibG93ZXJDYXNlIiwidXBwZXJDYXNlIiwidmlld1BvcnQiLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwieHhsIiwiZ2V0VXNlck5hbWUiLCJ1c2VyIiwidHlwZSIsInVzZXJuYW1lIiwiZnVsbE5hbWUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsIm5hbWVQcmVmaXgiLCJmcmVha0lkIiwiZ2V0UGx1cmFsIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJjb3VudCIsInNob3dDb3VudCIsImZpbmRJbmRleGVzT2ZTdHJpbmciLCJzZWFyY2giLCJpbmRleGVzIiwiY3VycmVudFBvc2l0aW9uIiwiY2hlY2tPYmplY3RJZCIsImlkRm9yQ2hlY2siLCJnZXRPYmplY3RJZCIsImdldENhck1hcmtldFNlb0RhdGEiLCJ0b3RhbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsb2NhdGlvbiIsInJhbmdlRmlsdGVyIiwib3RoZXJGaWx0ZXIiLCJnZXRTdGF0ZSIsImZpbHRlclJhbmdlcyIsImZpbHRlclJhbmdlIiwiYm9keVR5cGUiLCJnZXRCb2R5VHlwZSIsImZ1ZWxUeXBlIiwiZ2V0RnVlbFR5cGUiLCJjb2xvciIsImdldENvbG9yIiwicmVnaXN0cmF0aW9uVXJsIiwicmVhZHlTdG9jayIsImNhcjM2MFZpZXciLCJjb25jYXQiLCJnZXRDYXJCcmFuZCIsInRyYW5zbWlzc2lvbiIsImNhbm9uaWNhbCIsImdldFByb2ZpbGVTZW9EYXRhIiwicHJvZmlsZSIsInVzZXJ1cmxJZCIsImF2YXRhciIsImFsdCIsImdldENhckZyZWFrU2VvRGF0YSIsInBhcnNlVGFnU3RyaW5nVG9QbGFpblN0cmluZyIsImNvbnRlbnQiLCJ1c2VySWQiLCJnZXRTb2NpYWxCb2FyZFNlb0RhdGEiLCJnZXRDbHViU2VvRGF0YSIsImNsdWJOYW1lIiwiY2x1YkJpbyIsImdldEFsbE5ld0NhclNlb0RhdGEiLCJnZXRMaXZlU2VvRGF0YSIsImFwaURvbWFpbiIsImdldFN0cmVhbVVybCIsImNoYXRSZXN0cmljdFRpbWUiLCJjYXJGcmVha0dsb2JhbFNlYXJjaCIsInRhZ1ByZWZpeCIsImhhc2hUYWdQcmVmaXgiLCJ0YWdQcmVmaXhIYXNoVmFsdWUiLCJoYXNoVGFnUHJlZml4SGFzaFZhbHVlIiwidGFnU3VmZml4SGFzaFZhbHVlIiwiaGFzaFRhZ1N1ZmZpeEhhc2hWYWx1ZSIsInNlcGVyYXRvckhhc2hWYWx1ZSIsImNsdWJQcm9maWxlVmlld1R5cGVzIiwicGFyc2VUYWdTdHJpbmdUb0FycmF5IiwiZmluYWxUZXh0IiwidGFnVGV4dCIsImluY2x1ZGVzIiwidW5kZWZpbmVkIiwiaGFzaFRhZ0FyciIsInBhcnNlSGFzaFRhZ1N0cmluZ1RvQXJyYXkiLCJnZXRUYWdTdHJpbmciLCJjb2RlUHJlZml4IiwiY29kZVN1ZmZpeCIsInBhcnNlVG9UYWdTdHJpbmciLCJhbGlhc0NvZGUiLCJzb3J0ZWRBbGlhc0NvZGUiLCJzb3J0QnkiLCJjb2RlIiwicG9zaXRpb24iLCJwcmVUZXh0IiwicG9zdFRleHQiLCJnZXRBbGlhc0NvZGVGcm9tVGV4dCIsInN0cnVjdGVkVGV4dCIsInRleHRBcnIiLCJ1aWQiLCJ2NCIsImVuZFBvc2l0aW9uIiwiY3JlYXRlZEF0IiwiZ2V0VGltZSIsImNvbnZlcnROYW1lU3RyaW5nIiwidXNlcnMiLCJhdXRoVXNlciIsImdldFZpZXdUeXBlIiwidmFsaWRhdGVWaWV3VHlwZSIsIlBhZ2VUcmFuc2l0aW9uIiwiY2hpbGRyZW4iLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInRyYW5zaXRpb25zIiwidXNlVHJhbnNpdGlvbiIsInBhdGhuYW1lIiwiZnJvbSIsIm9wYWNpdHkiLCJlbnRlciIsImxlYXZlIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwic3R5bGUiLCJQYWdlIiwic3R5bGVkIiwiYW5pbWF0ZWQiLCJtYWluIiwidGVzdFN0cmVhbVVybCIsImxpdmVTdHJlYW1VcmwiLCJzdHJlYW0iLCJnaWZ0cyIsInByaWNlIiwiZGVmYXVsdFJlYWN0aW9ucyIsImRlZmF1bHRSZWFjdGlvbnNBbmltYXRpb24iLCJ0ZW1wIiwicmVhY3QiLCJyZWFjdGlvbkdpZiIsImdpZnQiLCJpY29uIiwiZGVmYXVsdEdpZnRzIiwibGl2ZUljb24iLCJzdXBwb3J0SWNvbiIsImxpa2VJY29uIiwiY29tbWVudEljb24iLCJzaGFyZUljb24iLCJnaWZ0R2lmIiwiY2NvaW5JY29uIiwicmVhY3Rpb25BbmltYXRpb25UcmFuc2l0aW9ucyIsImdlbmVyYXRlUmFuZG9tVHJhbnNpdGlvbiIsIkxJVkVfVEVYVF9URU1QTEFURSIsIm1heFRyYW5zaXRpb25YIiwibWF4VHJhbnNpdGlvblkiLCJlYWNoVHJhbnNpdGlvbkxlbmd0aCIsImdyb3VwIiwicmVhY3Rpb25BbmltYXRpb25UcmFuc2l0aW9uc1RlbXAiLCJlYWNoVHJhbnNpdGlvbiIsInkiLCJpbmRleDEiLCJyYW5kb20iLCJnZXRUb3RhbFJlYWN0aW9ucyIsInJlYWN0aW9ucyIsInJlYWN0aW9uIiwiZ2V0VG9wUmVhY3Rpb25zIiwiZmlsdGVyZWREYXRhIiwiY3JlYXRlT2ZmZXIiLCJzb2NrZXQiLCJicm9hZGNhc3RlciIsInBjX2NvbmZpZyIsImljZVNlcnZlcnMiLCJ1cmxzIiwiY3JlZGVudGlhbCIsInBlZXJDb25uZWN0aW9uIiwiUlRDUGVlckNvbm5lY3Rpb24iLCJvZmZlclRvUmVjZWl2ZVZpZGVvIiwib2ZmZXJUb1JlY2VpdmVBdWRpbyIsInRoZW4iLCJzZHAiLCJzZXRMb2NhbERlc2NyaXB0aW9uIiwic2VuZFRvUGVlciIsImRlYWxlclNvY2tldElkIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZVR5cGUiLCJwYXlsb2FkIiwiZW1pdCIsInNlbmRlcklkIiwiY2xvc2VUaGVQZWVyQ29ubmVjdGlvbiIsInByZXZpb3VzRGVhbGVyU29ja2V0SWQiLCJjbG9zZSIsInN5bmNSZWFjdGlvblN1bW1hcnkiLCJyZWFjdGlvbkxvZ3MiLCJyZWFjdGlvblN1bW1hcnkiLCJzdW1tYXJ5IiwibG9ncyIsImZlYXRoZXJzIiwiY29uZmlndXJlIiwic29ja2V0aW8iLCJwaW5nVGltZU91dCIsImF1dGhlbnRpY2F0aW9uIiwiZm9ybWF0TW9uZXkiLCJhbW91bnQiLCJkZWNpbWFsQ291bnQiLCJ0aG91c2FuZHMiLCJuZWdhdGl2ZVNpZ24iLCJpIiwiaiIsImUiLCJjYWxNb250aCIsInYiLCJMb2FuQW1vdW50IiwiTG9hblBlcmlvZCIsIkludGVyZXN0IiwidG90YWxJbnRlcmVzdCIsIm1vbnRobHlJbnRlcmVzdCIsIm1vbnRobHlJbnN0YWxtZW50Iiwic2lnbiIsImdldEZhY2VCb29rSWQiLCJhcHBJZCIsImdldEdvb2dsZUlkIiwiY2xpZW50SWQiLCJyZW5kZXJNaWxlYWdlUmFuZ2UiLCJtaWxlYWdlIiwibWlsZWFnZTIiLCJ1c2VNaWxlYWdlIiwidXNlTWlsZWFnZTIiLCJlcnIiLCJtaWxlYWdlRnJvbSIsIm1pbGVhZ2VUbyIsImNoZWNrRW52IiwiZW52IiwiY2hlY2tFbnZSZXR1cm5XZWJBZG1pbiIsImZyb250RW5kVXJsIiwiQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIlByb3ZpZGVyIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHRQcm92aWRlciIsIndpdGhSb3V0ZXIiLCJ3cml0ZVBvc3RJY29uIiwiaW1hZ2VOb3RGb3VuZEljb24iLCJyYWNlRmxhZ0ljb24iLCJhbGxJY29uIiwiY2FyRnJlYWtMaWtlSWNvbiIsImNhckZyZWFrTGlrZUdyZXlJY29uIiwiY2FyRnJlYWtDb21tZW50SWNvbiIsImZvbGxvd2luZ0dyZXlJY29uIiwiZm9sbG93aW5nWWVsbG93SWNvbiIsImVhcnRoR3JleUljb24iLCJlYXJ0aFllbGxvd0ljb24iLCJjbHViTm9uTWVtYmVyIiwidXBsb2FkUGhvdG8iLCJjYWxlbmRhckljb24iLCJwaW5JY29uIiwiY2Fyc3BlY05vdEZvdW5kSW1hZ2UiLCJmbGFtZVJlZCIsImZsYW1lUmVkU2hhZG93IiwiZmxhbWUiLCJzb2xkT3V0SWNvbiIsInJheWFGbGFtZSIsInJheWFGb29kIiwicmF5YUxhbXAiLCJyYXlhTW9zcXVlIiwicmF5YVBlb3BsZSIsImNjYXJXZWJMb2dvNDAwWDE1MCIsImNjYXJMb2dvIiwiY2NhckxvZ28yIiwiY2NhcldlYkxvZ28yIiwibG9naW5CYWNrZ3JvdW5kIiwidGJoQ255IiwidGJoMUNueSIsInRiaDJDbnkiLCJjbnlMaW9uSGVhZCIsImNueUxvZ28iLCJnb29nbGVMb2dvIiwiY255TG9nbzIiLCJ0YmgiLCJkZWZhdWx0UHJvZmlsZUJhY2tncm91bmQiLCJwaG9uZSIsImVtYWlsIiwiaGVscCIsImFkZHJlc3MiLCJ3aXNoTGlzdCIsIndpc2hsaXN0SWNvbkFjdGl2ZWQiLCJmYXFEaWNlQmFubmVyIiwiZmFxQmFubmVyIiwiZmFxQnV5Q2FySWNvbiIsImZhcUNhckZyZWFrSWNvbiIsImZhcUNzdGFySWNvbiIsImZhcU15QWNjb3VudEljb24iLCJmYXFPdXJGZWF0dXJlc0ljb24iLCJmYXFTZWxsQ2FySWNvbiIsInNlYXJjaEJveEltZyIsInNvcnRpbmdJbWciLCJmaWx0ZXJGb3JtSW1nIiwiYWxsTmV3Q2FySW1nIiwiY2FyQnJhbmRJbWciLCJuZXdDYXJGaWx0ZXJGb3JtSW1nIiwiY2FyTW9yZUluZm9JbWciLCJjc3Rhckxpc3RJbWciLCJjc3RhckFuaW1hdGlvbkltZyIsImJlbGxJbmFjdGl2ZSIsInJhdGluZ0Jhbm5lciIsIm1lbnVMb2dpbiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsIkNvbnRhaW5lciIsImNyZWF0ZVVybCIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXRpbHMiLCJBcHBJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJfcmVmIiwiQ29tcG9uZW50IiwiY3R4IiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIkFwcCIsImNvbXBvbmVudERpZENhdGNoIiwiX2Vycm9ySW5mbyIsInJlbmRlciIsIl9fTl9TU0ciLCJfX05fU1NQIiwiY3JlYXRlRWxlbWVudCIsImFzc2lnbiIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwid2FyblVybCIsImV4ZWNPbmNlIiwid2FybiIsInAiLCJhc1BhdGgiLCJiYWNrIiwiYXMiLCJwdXNoVG8iLCJocmVmIiwicHVzaFJvdXRlIiwicHVzaFVybCIsInJlcGxhY2VUbyIsInJlcGxhY2VSb3V0ZSIsInJlcGxhY2VVcmwiLCJXcmFwcGVkQXBwIiwic2VvRGF0YSIsImlzU3RyaW5nIiwib3BlbkdyYXBoIiwic2l0ZV9uYW1lIiwiaGFuZGxlIiwic2l0ZSIsImNhcmRUeXBlIiwiZmFjZWJvb2tBcHBJZCIsInJvdXRlIiwid3JhcHBlciIsIndpdGhSZWR1eCIsImJvZHlUeXBlTGlzdCIsImdldEJvZHlUeXBlSWNvbiIsInNlbGVjdGVkQm9keVR5cGUiLCJ0b0xvd2VyQ2FzZSIsImFsZmFSb21lb0ltZyIsImFzaWFJbWciLCJhc3Rvbk1hcnRpbkltZyIsImF1ZGlJbWciLCJhdXN0aW5JbWciLCJiYWNJbWciLCJiZW50bGV5SW1nIiwiYm13QWxwaW5hSW1nIiwiYm13SW1nIiwiYnVmb3JpSW1nIiwiY2FkaWxsYWNJbWciLCJjYW1JbWciLCJjaGFuYUltZyIsImNoYW5nYW5JbWciLCJjaGVyeUltZyIsImNoZXZyb2xldEltZyIsImNocnlzbGVySW1nIiwiY2l0cm9lbkltZyIsImRhaWhhdHN1SW1nIiwiZGF0c3VuSW1nIiwiZG9kZ2VJbWciLCJkb25nZmVuZ0ltZyIsImZlcnJhcmlJbWciLCJmaWF0SW1nIiwiZm9kYXlJbWciLCJmb3JkSW1nIiwiZm90b25JbWciLCJnb2xkZW5EcmFnb25JbWciLCJncmVhdFdhbGxJbWciLCJoYXZhbEltZyIsImhpY29tSW1nIiwiaGlub0ltZyIsImhvbmRhSW1nIiwiaHVtbWVySW1nIiwiaHl1bmRhaUltZyIsImltcHVsSW1nIiwiaW5maW5pdGlJbWciLCJpbm9rb21JbWciLCJpc3V6dUltZyIsImphZ3VhckltZyIsImpiY0ltZyIsImplZXBJbWciLCJqbWNJbWciLCJqb3lsb25nSW1nIiwia2F3YXNha2lJbWciLCJraWFJbWciLCJraW5nTG9uZ0ltZyIsImxhbWJvcmdoaW5pSW1nIiwibGFuZFJvdmVySW1nIiwibGV4dXNJbWciLCJsbWdJbWciLCJsb3R1c0ltZyIsIm1haGluZHJhSW1nIiwibWFzZXJhdGlJbWciLCJtYXh1c0ltZyIsIm1hemRhSW1nIiwibWNsYXJlbkltZyIsIm1lcmNlZGVzQmVuekltZyIsIm1lcmNlZGVzTWF5YmFjaEltZyIsIm1nSW1nIiwibWluaUltZyIsIm1pdHN1YmlzaGlJbWciLCJtaXRzdW9rYUltZyIsIm5hemFJbWciLCJuaXNzYW5JbWciLCJvcGVsSW1nIiwicGVyb2R1YUltZyIsInBldWdlb3RJbWciLCJwb3JzY2hlSW1nIiwicHJvdG9uSW1nIiwicmFtSW1nIiwicmVuYXVsdEltZyIsInJvbGxzUm95Y2VJbWciLCJyb3ZlckltZyIsInNhYWJJbWciLCJzbWFydEltZyIsInNzYW5nWW9uZ0ltZyIsInN1YmFydUltZyIsInN1enVraUltZyIsInRhdGFJbWciLCJ0b3lvdGFJbWciLCJ0dnJJbWciLCJ2b2xrc3dhZ2VuSW1nIiwidm9sdm9JbWciLCJ3YWxkSW1nIiwieWFtYWhhSW1nIiwiem5hSW1nIiwiY2FyQnJhbmRzTGlzdCIsImdldENhckJyYW5kc0ljb24iLCJzZWxlY3RlZEJyYW5kIiwiY29sb3JMaXN0IiwiZ2V0Q29sb3JJY29uIiwic2VsZWN0ZWRDb2xvciIsImRpZXNlbEljb24iLCJlbGVjdHJpY0ljb24iLCJoeWJyaWRJY29uIiwicGV0cm9sTGVhZGVkSWNvbiIsInBldHJvbFVubGVhZGVkSWNvbiIsImZ1ZWxUeXBlTGlzdCIsImdldEZ1ZWxUeXBlSWNvbiIsInNlbGVjdGVkRnVlbFR5cGUiLCJmZWRlcmFsVGVycml0b3J5SWNvbiIsImpvaG9ySWNvbiIsImtlZGFoSWNvbiIsImt1YWxhTHVtcHVySWNvbiIsImxhYnVhbkZlZGVyYWxJY29uIiwibGFidWFuSWNvbiIsIm1lbGFrYUljb24iLCJuZWdlcmlTZW1iaWxhbkljb24iLCJwYWhhbmdJY29uIiwicGVuYW5nSWNvbiIsInBlcmFrSWNvbiIsInBlcmxpc0ljb24iLCJwdXRyYWpheUZlZGVyYWxJY29uIiwic2FiYWhJY29uIiwic2FyYXdha0ljb24iLCJzZWxhbmdvckljb24iLCJ0ZXJlbmdnYW51SWNvbiIsImtlbGFudGFuSWNvbiIsIlN0YXRlTGlzdCIsImdldFN0YXRlSWNvbiIsInNlbGVjdGVkU3RhdGUiLCJMT0FESU5HIiwiU0VUX0lOSVRFRF9SRURVWCIsIlNFVF9ESVNBQkxFX1dJTkRPV19TQ1JPTEwiLCJBRFZBTkNFX01PREUiLCJMT0dJTl9NT0RFIiwiUkVHSVNURVJfTU9ERSIsIlVQREFURV9BQ1RJVkVfTUVOVSIsIkZJTFRFUl9DQVJfQlJBTkRfTU9ERSIsIkZJTFRFUl9DQVJfU0VMRUNURURfQ0FSX0JSQU5EX1JPVyIsIkZJTFRFUl9DQVJfU0VBUkNIX0tFWVdPUkRTIiwiRklMVEVSX0NBUl9NT0RFTF9NT0RFIiwiRklMVEVSX0NBUl9TRUxFQ1RFRF9DQVJfTU9ERUxfUk9XIiwiRklMVEVSX0NBUl9NT0RFTF9TRUFSQ0hfS0VZV09SRFMiLCJGSUxURVJfQ09MT1JfTU9ERSIsIkZJTFRFUl9DQVJfU0VMRUNURURfQ09MT1JfTU9ERUxfUk9XIiwiRklMVEVSX0NPTE9SX01PREVMX1NFQVJDSF9LRVlXT1JEUyIsIkZJTFRFUl9CT0RZX1RZUEVfTU9ERSIsIkZJTFRFUl9DQVJfU0VMRUNURURfQk9EWV9UWVBFX01PREVMX1JPVyIsIkZJTFRFUl9CT0RZX1RZUEVfTU9ERUxfU0VBUkNIX0tFWVdPUkRTIiwiRklMVEVSX0RSSVZFTl9XSEVFTFNfTU9ERSIsIkZJTFRFUl9DQVJfU0VMRUNURURfRFJJVkVOX1dIRUVMU19NT0RFTF9ST1ciLCJGSUxURVJfRFJJVkVOX1dIRUVMU19NT0RFTF9TRUFSQ0hfS0VZV09SRFMiLCJGSUxURVJfRlVFTF9UWVBFX01PREUiLCJGSUxURVJfQ0FSX1NFTEVDVEVEX0ZVRUxfVFlQRV9NT0RFTF9ST1ciLCJGSUxURVJfRlVFTF9UWVBFX01PREVMX1NFQVJDSF9LRVlXT1JEUyIsIkZJTFRFUl9TVEFURV9NT0RFIiwiRklMVEVSX0NBUl9TRUxFQ1RFRF9TVEFURV9NT0RFTF9ST1ciLCJGSUxURVJfU1RBVEVfTU9ERUxfU0VBUkNIX0tFWVdPUkRTIiwiUVVJQ0tfU0VBUkNIX1BST0RVQ1RTX0xJU1QiLCJTSE9XX0NPTlRBQ1RfTElTVCIsIlNFVF9BUFBMWV9ZRUFSIiwiU0VUX0FQUExZX1BSSUNFIiwiU0VUX0FQUExZX01JTEVBR0UiLCJGSUxURVJfQ0FSX0JSQU5EUyIsIkZJTFRFUl9DQVJfTU9ERUxTIiwiRklMVEVSX0NPTE9SUyIsIkZJTFRFUl9CT0RZX1RZUEVTIiwiRklMVEVSX0RSSVZFTl9XSEVFTFMiLCJGSUxURVJfRlVFTF9UWVBFUyIsIkZJTFRFUl9TVEFURVMiLCJTRVRfTUVOVV9IRUlHSFQiLCJTRVRfTk9USUZJQ0FUSU9OX1RPS0VOIiwiU0VUX05PVElGSUNBVElPTl9UT0tFTl9USU1FX09VVF9EQVRFIiwiZmlsdGVyQ2FyQnJhbmRzIiwiZGlzcGF0Y2giLCJmaWx0ZXJDYXJNb2RlbHMiLCJmaWx0ZXJDb2xvcnMiLCJmaWx0ZXJCb2R5VHlwZXMiLCJmaWx0ZXJEcml2ZW5XaGVlbHMiLCJmaWx0ZXJGdWVsVHlwZXMiLCJmaWx0ZXJTdGF0ZXMiLCJsb2FkaW5nIiwiYWR2YW5jZU1vZGUiLCJsb2dpbk1vZGUiLCJyZWdpc3Rlck1vZGUiLCJ1cGRhdGVBY3RpdmVNZW51IiwiZmlsdGVyQ2FyQnJhbmRNb2RlIiwiZmlsdGVyQ2FyU2VsZWN0ZWRDYXJCcmFuZHNSb3ciLCJmaWx0ZXJDYXJTZWFyY2hLZXl3b3JkcyIsImZpbHRlckNhck1vZGVsTW9kZSIsImZpbHRlckNhclNlbGVjdGVkQ2FyTW9kZWxzUm93IiwiZmlsdGVyQ2FyTW9kZWxTZWFyY2hLZXl3b3JkcyIsImZpbHRlckNvbG9yTW9kZSIsImZpbHRlckNhclNlbGVjdGVkQ29sb3JSb3ciLCJmaWx0ZXJDb2xvclNlYXJjaEtleXdvcmRzIiwiZmlsdGVyQm9keVR5cGVNb2RlIiwiZmlsdGVyQ2FyU2VsZWN0ZWRCb2R5VHlwZVJvdyIsImZpbHRlckJvZHlUeXBlU2VhcmNoS2V5d29yZHMiLCJmaWx0ZXJEcml2ZW5XaGVlbE1vZGUiLCJmaWx0ZXJDYXJTZWxlY3RlZERyaXZlbldoZWVsUm93IiwiZmlsdGVyRHJpdmVuV2hlZWxTZWFyY2hLZXl3b3JkcyIsImZpbHRlckZ1ZWxUeXBlTW9kZSIsImZpbHRlckNhclNlbGVjdGVkRnVlbFR5cGVSb3ciLCJmaWx0ZXJGdWVsVHlwZVNlYXJjaEtleXdvcmRzIiwiZmlsdGVyU3RhdGVNb2RlIiwiZmlsdGVyQ2FyU2VsZWN0ZWRTdGF0ZVJvdyIsImZpbHRlclN0YXRlU2VhcmNoS2V5d29yZHMiLCJxdWlja1NlYXJjaFByb2R1Y3RzTGlzdCIsIm1vZGUiLCJxdWlja1NlYXJjaENhclNwZWNzRGF0YSIsInF1aWNrU2VhcmNoUHJvZHVjdGFkc0RhdGEiLCJ2YWx1ZXMiLCJzaG93Q29udGFjdExpc3QiLCJib29sZWFuIiwic2V0QXBwbHlZZWFyIiwic2V0QXBwbHlQcmljZSIsInNldEFwcGx5TWlsZWFnZSIsInNldE1lbnVIZWlnaHQiLCJzZXROb3RpZmljYXRpb25Ub2tlbiIsInNldE5vdGlmaWNhdGlvblRva2VuVGltZU91dERhdGUiLCJzZXRJbml0ZWRSZWR1eCIsInNldERpc2FibGVXaW5kb3dTY3JvbGwiLCJGRVRDSF9DQVJQTEFURVNMSVNUIiwiZmV0Y2hDYXJQbGF0ZXNMaXN0IiwiU0VUX1BPU1RfTU9EQUxfTElLRV9SRUZSRVNIX0lEIiwiRkVUQ0hfQ0FSX0ZSRUFLX1BPU1RTIiwiRkVUQ0hfRURJVEVEX1BPU1QiLCJzZXRQb3N0TW9kYWxMaWtlUmVmcmVzaElkIiwiZmV0Y2hDYXJGcmVha1Bvc3RzIiwiZmV0Y2hFZGl0ZWRQb3N0IiwiRkVUQ0hfUkVWSVNJT05fQU5TV0VSRURfUVVFU1RJT05TIiwiZmV0Y2hSZXZpc2lvbkFuc3dlcmVkUXVlc3Rpb25zIiwiRkVUQ0hfQ0xJRU5UX1NPQ0tFVF9JTyIsIkNMRUFSX0NMSUVOVF9TT0NLRVRfSU8iLCJmZXRjaENsaWVudFNvY2tldElvIiwiY2xlYXJDbGllbnRTb2NrZXRJbyIsIkZFVENIX05FV1MiLCJGRVRDSF9DTFVCIiwiRkVUQ0hfUFJJQ0UiLCJGRVRDSF9QT1BVTEFSIiwiRkVUQ0hfUE9QVUxBUkNBUlMiLCJGRVRDSF9DQVJOQU1FIiwiRkVUQ0hfQ0FSREVUQUlMUyIsIkZFVENIX0JSQU5EUyIsIkZFVENIX0JSQU5EREVUQUlMIiwiRkVUQ0hfQlJBTkRDQVJTIiwiRkVUQ0hfREVUQUlMUyIsIkZFVENIX0ZVRUwiLCJGRVRDSF9GSUxURVJFRF9DT01QQVJFX0RBVEEiLCJGRVRDSF9QRUVSX0NPTVBBUkVfQ0FSUyIsIkZFVENIX0NPTVBBUkVfTkVXQ0FSX0lEUyIsIkFERF9DT01QQVJFX05FV0NBUl9JRCIsIlJFTU9WRV9DT01QQVJFX05FV0NBUl9JRCIsIkZFVENIX0NPTVBBUkVfX05FV0NBUl9MSU1JVCIsIkZFVENIX05FV19DQVJfRklMVEVSX0dST1VQIiwiUkVTRVRfTkVXX0NBUl9GSUxURVJfR1JPVVAiLCJmZXRjaE5ld3MiLCJmZXRjaENsdWIiLCJmZXRjaFByaWNlIiwiZmV0Y2hQb3B1bGFyIiwiZmV0Y2hQb3B1bGFyQ2FycyIsImZldGNoQ2FyTmFtZSIsImZldGNoQ2FyRGV0YWlscyIsImZldGNoQnJhbmRzIiwiZmV0Y2hCcmFuZERldGFpbCIsImZldGNoQnJhbmRDYXJzIiwiZmV0Y2hEZXRhaWxzIiwiZmV0Y2hGdWVsIiwiZmlsdGVyZWRDb21wYXJlRGF0YSIsImZldGNoQ29tcGFyZU5ld0NhcklkcyIsImFkZENvbXBhcmVOZXdDYXJJZCIsInJlbW92ZUNvbXBhcmVOZXdDYXJJZCIsImZldGNoQ29tcGFyZU5ld0NhckxpbWl0IiwiZmV0Y2hQZWVyQ29tcGFyZUNhcnMiLCJmZXRjaE5ld0NhckZpbHRlckdyb3VwIiwicmVzZXROZXdDYXJGaWx0ZXJHcm91cCIsIkZFVENIX1BST0RVQ1RTTElTVCIsIkZFVENIX1BST0RVQ1RTTElTVF9IT01FIiwiUFVTSF9QUk9EVUNUU0xJU1QiLCJSRU1PVkVfUFJPRFVDVFNMSVNUIiwiVVBEQVRFX1BST0RVQ1RTTElTVCIsIlVQREFURV9BQ1RJVkVfSURfUFJPRFVDVFNfTElTVCIsIkFERF9DT01QQVJFX19QUk9EVUNUX0lEIiwiUkVNT1ZFX0NPTVBBUkVfUFJPRFVDVF9JRCIsIkNMRUFSX0NPTVBBUkVfUFJPRFVDVF9JRFMiLCJQQVRDSF9DT01QQVJFX1BST0RVQ1RfSURTIiwiRkVUQ0hfRkVBVFVSRVNfTElTVCIsIlVQREFURV9DSEVDS0VEX0ZFQVRVUkVTX0RBVEUiLCJGRVRDSF9DT01QQVJFX0xJTUlUIiwiRkVUQ0hfUFJPRFVDVF9GSUxURVJfT1BUSU9OUyIsIkNMRUFSX1BST0RVQ1RfRklMVEVSX09QVElPTlMiLCJGRVRDSF9QUk9EVUNUX0ZJTFRFUl9HUk9VUCIsIkNMRUFSX1BST0RVQ1RfRklMVEVSX0dST1VQIiwiRkVUQ0hfUFJPRFVDVF9GSUxURVJfQ09ORklHIiwiQ0xFQVJfUFJPRFVDVF9GSUxURVJfQ09ORklHIiwiRkVUQ0hfRklMVEVSX01PREFMX1NUQVRFIiwiU0VUX1BST0RVQ1RfTElTVF9MT0FESU5HIiwiZmV0Y2hQcm9kdWN0c0xpc3QiLCJmZXRjaFByb2R1Y3RzTGlzdEhvbWUiLCJwdXNoUHJvZHVjdHNMaXN0IiwicmVtb3ZlUHJvZHVjdHNMaXN0IiwidXBkYXRlUHJvZHVjdExpc3QiLCJ1cGRhdGVBY3RpdmVJZFByb2R1Y3RMaXN0IiwiY2xlYXJDb21wYXJlUHJvZHVjdElkcyIsImZldGNoRmVhdHVyZXNMaXN0IiwidXBkYXRlQ2hlY2tlZEZlYXR1cmVzRGF0ZSIsImZldGNoQ29tcGFyZUNhckxpbWl0IiwiYWRkQ29tcGFyZVByb2R1Y3RJZCIsInJlbW92ZUNvbXBhcmVQcm9kdWN0SWQiLCJwYXRjaENvbXBhcmVQcm9kdWN0SWRzIiwiZmV0Y2hQcm9kdWN0RmlsdGVyT3B0aW9ucyIsImNsZWFyUHJvZHVjdEZpbHRlck9wdGlvbnMiLCJmZXRjaFByb2R1Y3RGaWx0ZXJHcm91cCIsImNsZWFyUHJvZHVjdEZpbHRlckdyb3VwIiwiZmV0Y2hQcm9kdWN0RmlsdGVyQ29uZmlnIiwiY2xlYXJQcm9kdWN0RmlsdGVyQ29uZmlnIiwiZmV0Y2hGaWx0ZXJNb2RhbFN0YXRlIiwic2V0UHJvZHVjdExpc3RMb2FkaW5nIiwiU1RFUFNfUFJPUFNfQ1VSUkVOVCIsIkZPUk1fT05FIiwic3RlcHNQcm9wc0N1cnJlbnQiLCJmb3JtT25lIiwiVVBEQVRFX1NFTExFUl9QUk9GSUxFIiwidXBkYXRlU2VsbGVyUHJvZmlsZSIsIlVQREFURV9TT0NLRVRfSU5GTyIsIkRFTEVURV9TT0NLRVRfSU5GTyIsInVwZGF0ZVNvY2tldEluZm8iLCJzb2NrZXRJbmZvIiwiZGVsZXRlU29ja2V0SW5mbyIsIkxPR0lOX1NVQ0NFU1NGVUwiLCJMT0dPVVRfU1VDQ0VTU0ZVTCIsIkFERFJFU1NfQk9PS19GT1JNIiwiQkFOS19GT1JNIiwiQ0FSRF9GT1JNIiwiU0VUX1VTRVIiLCJsb2dpblN1Y2Nlc3NmdWwiLCJ1c2VySW5mbyIsImxvZ291dFN1Y2Nlc3NmdWwiLCJzZXRVc2VyIiwiYWRkcmVzc0Jvb2tGb3JtIiwiZm9ybSIsImNhcmRGb3JtIiwiYmFua0Zvcm0iLCJBRERfTElLRSIsIlJFTU9WRV9MSUtFIiwiQUREX0JPT0tNQVJLIiwiUkVNT1ZFX0JPT0tNQVJLIiwiQUREX0xJS0VfTVNHIiwiUkVNT1ZFX0xJS0VfTVNHIiwiYWRkTGlrZSIsInJlbW92ZUxpa2UiLCJhZGRCb29rbWFyayIsInJlbW92ZUJvb2ttYXJrIiwiYWRkTGlrZU1zZyIsInJlbW92ZUxpa2VNc2ciLCJGRVRDSF9WQVJJQU5UIiwiQ0xFQVJfVkFSSUFOVCIsImZldGNoVmFyaWFudCIsImNsZWFyVmFyaWFudCIsInN0YXRlUGVyc2lzdEFjdGlvbnMiLCJhY3Rpb24iLCJyZWR1Y2VyIiwicGVyc2lzdFJlZHV4IiwicmVkdXhTdGF0ZXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXQiLCJjaGVja0lzTmVlZFBlcnNpc3QiLCJjaGVja05lZWRQZXJzaXN0IiwiaXNSZXN0b3JlRGF0YSIsIm5lZWRQZXJzaXN0IiwicGVyc2lzdE9iaiIsImdldFBlcnNpc3RPYmoiLCJwZXJzaXN0ZWRTdGF0ZXMiLCJnZXRMb2NhbFN0b3JhZ2VQZXJzaXN0U3RhdGVzIiwic2VsZWN0ZWRQZXJzaXN0ZWRTdGF0ZSIsInNlcXVlbmNlIiwibWF4QnkiLCJwZXJzaXN0RGF0YSIsImNvb2tpZVBlcnNpc3RTdGF0ZXMiLCJzdGF0ZVBlcnNpc3RBY3Rpb24iLCJkeW5hbWljRGlzcGF0Y2giLCJSRVNUT1JFX1JFRFVYIiwicmVzdG9yZVJlZHV4IiwiSU5JVElBTF9TVEFURSIsIm5vdGlmaWNhdGlvblRva2VuIiwibm90aWZpY2F0aW9uVG9rZW5UaW1lT3V0RGF0ZSIsImRpc2FibGVXaW5kb3dTY3JvbGwiLCJpbml0ZWRSZWR1eCIsImZpbHRlckNhclNlbGVjdGVkQ2FyQnJhbmREYXRhIiwiZmlsdGVyQ2FyU2VsZWN0ZWRDYXJCcmFuZEluZGV4IiwiZmlsdGVyQ2FyU2VsZWN0ZWRDYXJNb2RlbERhdGEiLCJmaWx0ZXJDYXJTZWxlY3RlZENhck1vZGVsSW5kZXgiLCJmaWx0ZXJDYXJTZWxlY3RlZENvbG9yRGF0YSIsImZpbHRlckNhclNlbGVjdGVkQ29sb3JJbmRleCIsImZpbHRlckNhclNlbGVjdGVkQm9keVR5cGVEYXRhIiwiZmlsdGVyQ2FyU2VsZWN0ZWRCb2R5VHlwZUluZGV4IiwiZmlsdGVyQ2FyU2VsZWN0ZWRGdWVsVHlwZURhdGEiLCJmaWx0ZXJDYXJTZWxlY3RlZEZ1ZWxUeXBlSW5kZXgiLCJmaWx0ZXJDYXJTZWxlY3RlZFN0YXRlRGF0YSIsImZpbHRlckNhclNlbGVjdGVkU3RhdGVJbmRleCIsImNhckJyYW5kcyIsImNhck1vZGVscyIsImNvbG9ycyIsImJvZHlUeXBlcyIsImRyaXZlbldoZWVscyIsImZ1ZWxUeXBlcyIsInN0YXRlcyIsInF1aWNrU2VhcmNoTW9kZSIsImFjdGl2ZU1lbnUiLCJzaG93Q29udGFjdCIsImFwcGx5WWVhciIsImFwcGx5UHJpY2UiLCJhcHBseU1pbGVhZ2UiLCJtZW51SGVpZ2h0IiwicGVyc2lzdFN0YXRlcyIsIm5ld1N0YXRlIiwiaXNFcXVhbCIsImZpbHRlckNhclNlbGVjdGVkRHJpdmVuV2hlZWxEYXRhIiwiZmlsdGVyQ2FyU2VsZWN0ZWREcml2ZW5XaGVlbEluZGV4IiwiY2FyUGxhdGVzTGlzdCIsInBvc3RNb2RhbExpa2VSZWZyZXNoSWQiLCJjYXJGcmVha1Bvc3RzIiwiZWRpdGVkUG9zdCIsImFuc3dlcmVkRW5SZXZpc2lvblNlY3Rpb25BUGFwZXIiLCJhbnN3ZXJlZEVuUmV2aXNpb25TZWN0aW9uQlBhcGVyIiwiYW5zd2VyZWRFblJldmlzaW9uU2VjdGlvbkNQYXBlciIsImFuc3dlcmVkQm1SZXZpc2lvblNlY3Rpb25BUGFwZXIiLCJhbnN3ZXJlZEJtUmV2aXNpb25TZWN0aW9uQlBhcGVyIiwiYW5zd2VyZWRCbVJldmlzaW9uU2VjdGlvbkNQYXBlciIsImxhbmd1YWdlIiwidXBwZXJGaXJzdCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm5ld3MiLCJjbHViIiwicG9wdWxhciIsInBvcHVsYXJDYXJzIiwiQ2FyTmFtZSIsImJyYW5kcyIsImJyYW5kRGV0YWlsIiwiYnJhbmRDYXJzIiwiZGV0YWlscyIsImZ1ZWwiLCJuZXdDYXJGaWx0ZXJHcm91cCIsImRyaXZlbndoZWVsIiwic2VhdENhcGFjaXR5IiwiZXh0ZXJpb3IiLCJpbnRlcmlvciIsInNhZmV0eSIsIm1vbnRobHlQYXltZW50UmFuZ2UiLCJwZWVyQ29tcCIsImNvbXBhcmVJZHMiLCJjb21wYXJlTGltaXQiLCJjaGVja0lmRXhpc3QiLCJmaW5kSW5kZXgiLCJwcm9kdWN0TGlzdExvYWRpbmciLCJwcm9kdWN0c0xpc3QiLCJwcm9kdWN0c0xpc3RIb21lIiwiYWN0aXZlSWQiLCJhY3RpdmVwcm9kdWN0TGlzdCIsImNvbXBhcmVEYXRhIiwiZmVhdHVyZXNMaXN0IiwiY2hlY2tlZEZlYXR1cmVzRGF0ZSIsImZpbHRlck9wdGlvbnMiLCJpc0ZpbHRlck1vZGFsT3BlbiIsImN1cnJlbnQiLCJhcHBSZWR1Y2VyIiwic2VsbGVyIiwiY2FyT25TYWxlcyIsImluZm8iLCJhdXRoZW50aWNhdGVkIiwiZXJyb3JzIiwiYWRkcmVzc0Zvcm0iLCJhbGxMaWtlIiwiYWxsQm9va21hcmsiLCJhbGxMaWtlTXNnIiwicmVtb3ZlIiwiY2hhdElkIiwibWVzc2FnZUlkIiwidmFyaWFudCIsImJpbmRNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJhcHAiLCJjYXJmcmVhayIsImtwcCIsImxpdmUiLCJuZXdjYXJzIiwicmVnaXN0ZXIiLCJzZWxsZXJQcm9maWxlIiwic29ja2V0UmVmcmVzaCIsInVzZXJsaWtlcyIsIkhZRFJBVEUiLCJuZXh0U3RhdGUiLCJpbml0U3RvcmUiLCJjcmVhdGVTdG9yZSIsInRodW5rTWlkZGxld2FyZSIsImNyZWF0ZVdyYXBwZXIiLCJzdG9yZSJdLCJtYXBwaW5n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QixFQWlCM0I7QUFDRSxVQUFRQyxTQURWO0FBRUUsV0FBUztBQUZYLENBakIyQixFQXFCM0I7QUFDRSxVQUFRQyxNQURWO0FBRUUsV0FBUztBQUZYLENBckIyQixFQXlCM0I7QUFDRSxVQUFRQyxVQURWO0FBRUUsV0FBUztBQUZYLENBekIyQixFQTZCM0I7QUFDRSxVQUFRQyxZQURWO0FBRUUsV0FBUztBQUZYLENBN0IyQixFQWlDM0I7QUFDRSxVQUFRQyxNQURWO0FBRUUsV0FBUztBQUZYLENBakMyQixFQXFDM0I7QUFDRSxVQUFRQyxTQURWO0FBRUUsV0FBUztBQUZYLENBckMyQixFQXlDM0I7QUFDRSxVQUFRQyxXQURWO0FBRUUsV0FBUztBQUZYLENBekMyQixFQTZDM0I7QUFDRSxVQUFRQyxNQURWO0FBRUUsV0FBUztBQUZYLENBN0MyQixFQWlEM0I7QUFDRSxVQUFRQyxRQURWO0FBRUUsV0FBUztBQUZYLENBakQyQixFQXFEM0I7QUFDRSxVQUFRQyxVQURWO0FBRUUsV0FBUztBQUZYLENBckQyQixFQXlEM0I7QUFDRSxVQUFRQyxRQURWO0FBRUUsV0FBUztBQUZYLENBekQyQixFQTZEM0I7QUFDRSxVQUFRQyxZQURWO0FBRUUsV0FBUztBQUZYLENBN0QyQixFQWlFM0I7QUFDRSxVQUFRQyxXQURWO0FBRUUsV0FBUztBQUZYLENBakUyQixFQXFFM0I7QUFDRSxVQUFRQyxVQURWO0FBRUUsV0FBUztBQUZYLENBckUyQixFQXlFM0I7QUFDRSxVQUFRQyxXQURWO0FBRUUsV0FBUztBQUZYLENBekUyQixFQTZFM0I7QUFDRSxVQUFRQyxTQURWO0FBRUUsV0FBUztBQUZYLENBN0UyQixFQWlGM0I7QUFDRSxVQUFRQyxRQURWO0FBRUUsV0FBUztBQUZYLENBakYyQixFQXFGM0I7QUFDRSxVQUFRQyxXQURWO0FBRUUsV0FBUztBQUZYLENBckYyQixFQXlGM0I7QUFDRSxVQUFRQyxVQURWO0FBRUUsV0FBUztBQUZYLENBekYyQixFQTZGM0I7QUFDRSxVQUFRQyxPQURWO0FBRUUsV0FBUztBQUZYLENBN0YyQixFQWlHM0I7QUFDRSxVQUFRQyxRQURWO0FBRUUsV0FBUztBQUZYLENBakcyQixFQXFHM0I7QUFDRSxVQUFRQyxPQURWO0FBRUUsV0FBUztBQUZYLENBckcyQixFQXlHM0I7QUFDRSxVQUFRQyxRQURWO0FBRUUsV0FBUztBQUZYLENBekcyQixFQTZHM0I7QUFDRSxVQUFRQyxlQURWO0FBRUUsV0FBUztBQUZYLENBN0cyQixFQWlIM0I7QUFDRSxVQUFRQyxZQURWO0FBRUUsV0FBUztBQUZYLENBakgyQixFQXFIM0I7QUFDRSxVQUFRQyxRQURWO0FBRUUsV0FBUztBQUZYLENBckgyQixFQXlIM0I7QUFDRSxVQUFRQyxRQURWO0FBRUUsV0FBUztBQUZYLENBekgyQixFQTZIM0I7QUFDRSxVQUFRQyxPQURWO0FBRUUsV0FBUztBQUZYLENBN0gyQixFQWlJM0I7QUFDRSxVQUFRQyxRQURWO0FBRUUsV0FBUztBQUZYLENBakkyQixFQXFJM0I7QUFDRSxVQUFRQyxTQURWO0FBRUUsV0FBUztBQUZYLENBckkyQixFQXlJM0I7QUFDRSxVQUFRQyxVQURWO0FBRUUsV0FBUztBQUZYLENBekkyQixFQTZJM0I7QUFDRSxVQUFRQyxRQURWO0FBRUUsV0FBUztBQUZYLENBN0kyQixFQWlKM0I7QUFDRSxVQUFRQyxXQURWO0FBRUUsV0FBUztBQUZYLENBakoyQixFQXFKM0I7QUFDRSxVQUFRQyxTQURWO0FBRUUsV0FBUztBQUZYLENBckoyQixFQXlKM0I7QUFDRSxVQUFRQyxRQURWO0FBRUUsV0FBUztBQUZYLENBekoyQixFQTZKM0I7QUFDRSxVQUFRQyxTQURWO0FBRUUsV0FBUztBQUZYLENBN0oyQixFQWlLM0I7QUFDRSxVQUFRQyxNQURWO0FBRUUsV0FBUztBQUZYLENBaksyQixFQXFLM0I7QUFDRSxVQUFRQyxPQURWO0FBRUUsV0FBUztBQUZYLENBcksyQixFQXlLM0I7QUFDRSxVQUFRQyxNQURWO0FBRUUsV0FBUztBQUZYLENBeksyQixFQTZLM0I7QUFDRSxVQUFRQyxVQURWO0FBRUUsV0FBUztBQUZYLENBN0syQixFQWlMM0I7QUFDRSxVQUFRQyxXQURWO0FBRUUsV0FBUztBQUZYLENBakwyQixFQXFMM0I7QUFDRSxVQUFRQyxNQURWO0FBRUUsV0FBUztBQUZYLENBckwyQixFQXlMM0I7QUFDRSxVQUFRQyxXQURWO0FBRUUsV0FBUztBQUZYLENBekwyQixFQTZMM0I7QUFDRSxVQUFRQyxjQURWO0FBRUUsV0FBUztBQUZYLENBN0wyQixFQWlNM0I7QUFDRSxVQUFRQyxZQURWO0FBRUUsV0FBUztBQUZYLENBak0yQixFQXFNM0I7QUFDRSxVQUFRQyxRQURWO0FBRUUsV0FBUztBQUZYLENBck0yQixFQXlNM0I7QUFDRSxVQUFRQyxNQURWO0FBRUUsV0FBUztBQUZYLENBek0yQixFQTZNM0I7QUFDRSxVQUFRQyxRQURWO0FBRUUsV0FBUztBQUZYLENBN00yQixFQWlOM0I7QUFDRSxVQUFRQyxXQURWO0FBRUUsV0FBUztBQUZYLENBak4yQixFQXFOM0I7QUFDRSxVQUFRQyxXQURWO0FBRUUsV0FBUztBQUZYLENBck4yQixFQXlOM0I7QUFDRSxVQUFRQyxRQURWO0FBRUUsV0FBUztBQUZYLENBek4yQixFQTZOM0I7QUFDRSxVQUFRQyxRQURWO0FBRUUsV0FBUztBQUZYLENBN04yQixFQWlPM0I7QUFDRSxVQUFRQyxVQURWO0FBRUUsV0FBUztBQUZYLENBak8yQixFQXFPM0I7QUFDRSxVQUFRQyxlQURWO0FBRUUsV0FBUztBQUZYLENBck8yQixFQXlPM0I7QUFDRSxVQUFRRSxLQURWO0FBRUUsV0FBUztBQUZYLENBek8yQixFQTZPM0I7QUFDRSxVQUFRRCxrQkFEVjtBQUVFLFdBQVM7QUFGWCxDQTdPMkIsRUFpUDNCO0FBQ0UsVUFBUUUsT0FEVjtBQUVFLFdBQVM7QUFGWCxDQWpQMkIsRUFxUDNCO0FBQ0UsVUFBUUMsYUFEVjtBQUVFLFdBQVM7QUFGWCxDQXJQMkIsRUF5UDNCO0FBQ0UsVUFBUUMsV0FEVjtBQUVFLFdBQVM7QUFGWCxDQXpQMkIsRUE2UDNCO0FBQ0UsVUFBUUMsT0FEVjtBQUVFLFdBQVM7QUFGWCxDQTdQMkIsRUFpUTNCO0FBQ0UsVUFBUUMsU0FEVjtBQUVFLFdBQVM7QUFGWCxDQWpRMkIsRUFxUTNCO0FBQ0UsVUFBUUMsT0FEVjtBQUVFLFdBQVM7QUFGWCxDQXJRMkIsRUF5UTNCO0FBQ0UsVUFBUUMsVUFEVjtBQUVFLFdBQVM7QUFGWCxDQXpRMkIsRUE2UTNCO0FBQ0UsVUFBUUMsVUFEVjtBQUVFLFdBQVM7QUFGWCxDQTdRMkIsRUFpUjNCO0FBQ0UsVUFBUUMsVUFEVjtBQUVFLFdBQVM7QUFGWCxDQWpSMkIsRUFxUjNCO0FBQ0UsVUFBUUMsU0FEVjtBQUVFLFdBQVM7QUFGWCxDQXJSMkIsRUF5UjNCO0FBQ0UsVUFBUUMsTUFEVjtBQUVFLFdBQVM7QUFGWCxDQXpSMkIsRUE2UjNCO0FBQ0UsVUFBUUMsVUFEVjtBQUVFLFdBQVM7QUFGWCxDQTdSMkIsRUFpUzNCO0FBQ0UsVUFBUUMsYUFEVjtBQUVFLFdBQVM7QUFGWCxDQWpTMkIsRUFxUzNCO0FBQ0UsVUFBUUMsUUFEVjtBQUVFLFdBQVM7QUFGWCxDQXJTMkIsRUF5UzNCO0FBQ0UsVUFBUUMsT0FEVjtBQUVFLFdBQVM7QUFGWCxDQXpTMkIsRUE2UzNCO0FBQ0UsVUFBUUMsUUFEVjtBQUVFLFdBQVM7QUFGWCxDQTdTMkIsRUFpVDNCO0FBQ0UsVUFBUUMsWUFEVjtBQUVFLFdBQVM7QUFGWCxDQWpUMkIsRUFxVDNCO0FBQ0UsVUFBUUMsU0FEVjtBQUVFLFdBQVM7QUFGWCxDQXJUMkIsRUF5VDNCO0FBQ0UsVUFBUUMsU0FEVjtBQUVFLFdBQVM7QUFGWCxDQXpUMkIsRUE2VDNCO0FBQ0UsVUFBUUMsT0FEVjtBQUVFLFdBQVM7QUFGWCxDQTdUMkIsRUFpVTNCO0FBQ0UsVUFBUUMsU0FEVjtBQUVFLFdBQVM7QUFGWCxDQWpVMkIsRUFxVTNCO0FBQ0UsVUFBUUMsTUFEVjtBQUVFLFdBQVM7QUFGWCxDQXJVMkIsRUF5VTNCO0FBQ0UsVUFBUUMsYUFEVjtBQUVFLFdBQVM7QUFGWCxDQXpVMkIsRUE2VTNCO0FBQ0UsVUFBUUMsUUFEVjtBQUVFLFdBQVM7QUFGWCxDQTdV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QUFLLEdBQUdKLFNBQVMsRUFBdkIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFUCw4RDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJzdGF0aWMvZGV2ZWxvcG1lbnQvcGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IHsgaXNJbnRlZ2VyLCByYW5nZSB9IGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCBjb29raWUgZnJvbSAnY29va2llJztcbmltcG9ydCBsb2NhbFN0b3JhZ2UgZnJvbSAnbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgeyBzdGF0ZVBlcnNpc3RBY3Rpb25zIH0gZnJvbSBcIi4vcmVkdXgvY29uZmlnXCI7XG5pbXBvcnQgeyBnZXRDYXJCcmFuZCB9IGZyb20gXCIuL3BhcmFtcy9jYXJCcmFuZHNMaXN0XCI7XG5pbXBvcnQgeyBnZXRTdGF0ZSB9IGZyb20gXCIuL3BhcmFtcy9zdGF0ZUxpc3RcIjtcbmltcG9ydCB7IGdldEJvZHlUeXBlIH0gZnJvbSBcIi4vcGFyYW1zL2JvZHlUeXBlTGlzdFwiO1xuaW1wb3J0IHsgZ2V0RnVlbFR5cGUgfSBmcm9tIFwiLi9wYXJhbXMvZnVlbFR5cGVMaXN0XCI7XG5pbXBvcnQgeyBnZXRDb2xvciB9IGZyb20gXCIuL3BhcmFtcy9jb2xvckxpc3RcIjtcbmltcG9ydCB7IGNoZWNrRW52UmV0dXJuQ21zVXJsIH0gZnJvbSBcIi4vZnVuY3Rpb25Db250ZW50XCI7XG5pbXBvcnQgY2xpZW50IGZyb20gXCIuL2ZlYXRoZXJzXCI7XG5pbXBvcnQgeyBwYXJzZVRhZ1N0cmluZ1RvUGxhaW5TdHJpbmcgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NhckZyZWFrL2NvbmZpZ1wiO1xuaW1wb3J0IHsgZ2V0U3RyZWFtVXJsIH0gZnJvbSBcIi4vY29tcG9uZW50cy9saXZlL2NvbmZpZ1wiO1xuXG52YXIgbW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7XG5cbmNvbnN0IGRlZmF1bHRSYW5nZVNtYWxsZXIgPSAnPD0nXG5jb25zdCBkZWZhdWx0UmFuZ2VCaWdnZXIgPSAnPj0nXG5jb25zdCBhdmFpbGFibGVGaWx0ZXJzID0gWydtYWtlJywgJ21vZGVsJywgJ3RpdGxlJywgJ2NvbmRpdGlvbicsICd0cmFuc21pc3Npb24nLCAnc3RhdGUnLCAnYXJlYScsICdwcmljZVJhbmdlJywgJ3llYXJSYW5nZScsICdtaWxlYWdlUmFuZ2UnLCAnZW5naW5lQ2FwYWNpdHlSYW5nZScsICdib2R5VHlwZScsICdjb2xvcicsICdmdWVsVHlwZScsICdyZWdpc3RyYXRpb25VcmwnLCAncmVhZHlTdG9jaycsICdjYXIzNjBWaWV3JywgJ2J1c2luZXNzVHlwZSddO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXJBbmRTcGFjZSh2YWx1ZSkge1xuXG4gICAgLy90byBhcnJheVxuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJycpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB2YWx1ZS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gIXBhcnNlSW50KGl0ZW0pICYmIHBhcnNlSW50KGl0ZW0pICE9IDAgJiYgaXRlbSAhPSAnICc7XG4gICAgICAgICAgICB9KS5sZW5ndGggPiAwXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKHZhbHVlLCBmb3JtYXQpIHtcblxuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIGlmICghaXNWYWxpZERhdGUodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKGZvcm1hdCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gXCJERC9NTS9ZWVlZXCJcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG1vbWVudCh2YWx1ZSkuZm9ybWF0KGZvcm1hdCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE51bWJlcih2YWx1ZSwgdW5pdCwgcm91bmQsIGZpeGVkUG9pbnQsIHRyaW0pIHtcblxuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIGlmIChpc05hTihwYXJzZUZsb2F0KHZhbHVlKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgICAgIC8vZGVmYXVsdCB3aWxsIGF1dG8gcm91bmQgdXAgaWYgcm91bmQgZGlkbid0IHBhc3NlZCBpblxuICAgICAgICAgICAgLy9kZWZhdWx0IGZpeGVkUG9pbnQgMFxuICAgICAgICAgICAgc3dpdGNoICh1bml0KSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImtcIjpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBudW1iZXJUb0ZpeGVkKHZhbHVlIC8gMTAwMCwgcm91bmQsIGZpeGVkUG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwibVwiOlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bWJlclRvRml4ZWQodmFsdWUgLyAxMDAwMDAwLCByb3VuZCwgZml4ZWRQb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJiXCI6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbnVtYmVyVG9GaXhlZCh2YWx1ZSAvIDEwMDAwMDAwMDAsIHJvdW5kLCBmaXhlZFBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImF1dG9cIjpcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVuaXRzID0gW1snJywgMV0sIFsnaycsIDEwMDBdLCBbJ20nLCAxMDAwMDAwXSwgWydiJywgMTAwMDAwMDAwMF1dO1xuICAgICAgICAgICAgICAgICAgICAvL2dldCBjbG9zZXN0IHVuaXRcblxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5mb3JFYWNoKF8ucmV2ZXJzZSh1bml0cyksIGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAvIGl0ZW1bMV0gPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bWJlclRvRml4ZWQodmFsdWUgLyBpdGVtWzFdLCByb3VuZCwgZml4ZWRQb2ludCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXQgPSBpdGVtWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bWJlclRvRml4ZWQodmFsdWUsIHJvdW5kLCBmaXhlZFBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBmb3JtYXRlZFZhbHVlID0gJyc7XG4gICAgICAgICAgICBsZXQgcHJlZml4ID0gaW5zZXJ0QmV0d2VlbihwYXJzZUludCh2YWx1ZSksIDMsICcsJywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgcG9zdGZpeCA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJy4nKVsxXTtcbiAgICAgICAgICAgIGZvcm1hdGVkVmFsdWUgKz0gcHJlZml4O1xuICAgICAgICAgICAgaWYgKHBvc3RmaXgpIHtcbiAgICAgICAgICAgICAgICBmb3JtYXRlZFZhbHVlICs9ICcuJyArIHBvc3RmaXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0cmltKSB7XG4gICAgICAgICAgICAgICAgZm9ybWF0ZWRWYWx1ZSA9IHRyaW1TdHJpbmdOdW1iZXIoZm9ybWF0ZWRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodW5pdCkge1xuICAgICAgICAgICAgICAgIGZvcm1hdGVkVmFsdWUgKz0gdW5pdDtcbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRlZFZhbHVlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVtYmVyVG9GaXhlZCh2YWx1ZSwgcm91bmQsIGZpeGVkUG9pbnQsIGZyb21Gcm9udCkge1xuXG4gICAgaWYgKHZhbHVlICE9IG51bGwgJiYgIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUpKSkge1xuXG4gICAgICAgIGlmIChpc05hTihwYXJzZUludChmaXhlZFBvaW50KSkpIHtcbiAgICAgICAgICAgIC8vRGVmYXVsdFxuICAgICAgICAgICAgZml4ZWRQb2ludCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaXhlZFBvaW50ID0gcGFyc2VJbnQoZml4ZWRQb2ludCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocm91bmQgPT0gbnVsbCkge1xuICAgICAgICAgICAgcm91bmQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZyb21Gcm9udCkge1xuICAgICAgICAgICAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgaWYgKHZhbHVlWzBdKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgKHZhbHVlWzBdLmxlbmd0aCA+IGZpeGVkUG9pbnQpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgdmFsdWVbMF0gPSB2YWx1ZVswXS5zbGljZSh2YWx1ZVswXS5sZW5ndGggLSBmaXhlZFBvaW50KTtcbiAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWVbMF0ubGVuZ3RoIDwgZml4ZWRQb2ludCkge1xuICAgICAgICAgICAgICAgICAgICBfLmZvckVhY2goXy5yYW5nZShmaXhlZFBvaW50IC0gdmFsdWVbMF0ubGVuZ3RoKSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVbMF0gPSAnMCcgKyB2YWx1ZVswXTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgICAgICAgaWYgKHJvdW5kKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvRml4ZWQoZml4ZWRQb2ludCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZVsxXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVbMV0ubGVuZ3RoID4gZml4ZWRQb2ludCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVbMV0gPSB2YWx1ZVsxXS5zbGljZSgwLCBmaXhlZFBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVsxXS5sZW5ndGggPCBmaXhlZFBvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmZvckVhY2goXy5yYW5nZShmaXhlZFBvaW50IC0gdmFsdWVbMF0ubGVuZ3RoKSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlWzBdID0gdmFsdWVbMF0gKyAnMCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUuam9pbihcIi5cIikpLnRvRml4ZWQoZml4ZWRQb2ludCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxufVxuXG4vL1JlbW92ZSBwcmVmaXggMCBhbmQgcG9zdGZpeCAwXG5leHBvcnQgZnVuY3Rpb24gdHJpbVN0cmluZ051bWJlcih2YWx1ZSkge1xuXG4gICAgaWYgKHZhbHVlICE9IG51bGwpIHtcblxuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJy4nKTtcbiAgICAgICAgbGV0IHByZWZpeCA9IHZhbHVlWzBdO1xuICAgICAgICBsZXQgcG9zdGZpeCA9IHZhbHVlWzFdO1xuXG4gICAgICAgIGlmIChwcmVmaXggIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHByZWZpeC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByZWZpeEFyciA9IHByZWZpeC5zcGxpdChcIlwiKTtcbiAgICAgICAgICAgICAgICBsZXQgZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHByZWZpeEFyci5zb21lKG51bSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChudW0gPT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2N1dCBvdXQgMFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4ID0gcHJlZml4LnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkb25lO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc3RmaXggIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHBvc3RmaXgubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCBwb3N0Zml4QXJyID0gcG9zdGZpeC5zcGxpdChcIlwiKS5yZXZlcnNlKCk7XG4gICAgICAgICAgICAgICAgbGV0IGRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBwb3N0Zml4QXJyLnNvbWUobnVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bSA9PSAnMCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY3V0IG91dCAwXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0Zml4ID0gcG9zdGZpeC5zdWJzdHJpbmcoMCwgcG9zdGZpeC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkb25lO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwb3N0Zml4KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4ICsgXCIuXCIgKyBwb3N0Zml4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeDtcbiAgICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV2ZXJzZVN0cmluZyh2YWx1ZSkge1xuXG4gICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgdmFyIHN0ckFycmF5ID0gdmFsdWUudG9TdHJpbmcoKS5zcGxpdChcIlwiKTtcbiAgICAgICAgc3RyQXJyYXkgPSBzdHJBcnJheS5yZXZlcnNlKCk7XG4gICAgICAgIHJldHVybiBzdHJBcnJheS5qb2luKFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDYXJkVHlwZShudW1iZXIpIHtcbiAgICBpZiAobnVtYmVyICE9IG51bGwpIHtcblxuICAgICAgICBudW1iZXIgPSBudW1iZXIucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICAgICAgLy8gdmlzYVxuICAgICAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKFwiXjRcIik7XG4gICAgICAgIGlmIChudW1iZXIubWF0Y2gocmUpICE9IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gXCJWSVNBXCI7XG5cbiAgICAgICAgLy8gTWFzdGVyY2FyZCBcbiAgICAgICAgLy8gVXBkYXRlZCBmb3IgTWFzdGVyY2FyZCAyMDE3IEJJTnMgZXhwYW5zaW9uXG4gICAgICAgIGlmICgvXig1WzEtNV1bMC05XXsxNH18MigyMlsxLTldWzAtOV17MTJ9fDJbMy05XVswLTldezEzfXxbMy02XVswLTldezE0fXw3WzAtMV1bMC05XXsxM318NzIwWzAtOV17MTJ9KSkkLy50ZXN0KG51bWJlcikpXG4gICAgICAgICAgICByZXR1cm4gXCJNQVNURVJDQVJEXCI7XG5cbiAgICAgICAgLy8gQU1FWFxuICAgICAgICByZSA9IG5ldyBSZWdFeHAoXCJeM1s0N11cIik7XG4gICAgICAgIGlmIChudW1iZXIubWF0Y2gocmUpICE9IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gXCJBTUVSSUNBTkVYUFJFU1NcIjtcblxuICAgICAgICAvLyBEaXNjb3ZlclxuICAgICAgICByZSA9IG5ldyBSZWdFeHAoXCJeKDYwMTF8NjIyKDEyWzYtOV18MVszLTldWzAtOV18WzItOF1bMC05XXsyfXw5WzAtMV1bMC05XXw5MlswLTVdfDY0WzQtOV0pfDY1KVwiKTtcbiAgICAgICAgaWYgKG51bWJlci5tYXRjaChyZSkgIT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiBcIkRJU0NPVkVSXCI7XG5cbiAgICAgICAgLy8gRGluZXJzXG4gICAgICAgIHJlID0gbmV3IFJlZ0V4cChcIl4zNlwiKTtcbiAgICAgICAgaWYgKG51bWJlci5tYXRjaChyZSkgIT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiBcIkRJTkVSU1wiO1xuXG4gICAgICAgIC8vIERpbmVycyAtIENhcnRlIEJsYW5jaGVcbiAgICAgICAgcmUgPSBuZXcgUmVnRXhwKFwiXjMwWzAtNV1cIik7XG4gICAgICAgIGlmIChudW1iZXIubWF0Y2gocmUpICE9IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gXCJESU5FUlNDQVJURUJMQU5DSEVcIjtcblxuICAgICAgICAvLyBKQ0JcbiAgICAgICAgcmUgPSBuZXcgUmVnRXhwKFwiXjM1KDJbODldfFszLThdWzAtOV0pXCIpO1xuICAgICAgICBpZiAobnVtYmVyLm1hdGNoKHJlKSAhPSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIFwiSkNCXCI7XG5cbiAgICAgICAgLy8gVmlzYSBFbGVjdHJvblxuICAgICAgICByZSA9IG5ldyBSZWdFeHAoXCJeKDQwMjZ8NDE3NTAwfDQ1MDh8NDg0NHw0OTEoM3w3KSlcIik7XG4gICAgICAgIGlmIChudW1iZXIubWF0Y2gocmUpICE9IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gXCJWSVNBRUxFQ1RST05cIjtcblxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU51bGxGcm9tQXJyYXkodmFsdWUpIHtcblxuICAgIGlmIChub3RFbXB0eUxlbmd0aCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gIT0gbnVsbDtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZERhdGUodmFsdWUpIHtcblxuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIHZhbHVlID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IERhdGVdXCIpIHtcbiAgICAgICAgICAgIC8vIGl0IGlzIGEgZGF0ZVxuICAgICAgICAgICAgaWYgKGlzTmFOKHZhbHVlLnZhbHVlT2YoKSkpIHsgIC8vIHZhbHVlLnZhbHVlT2YoKSBjb3VsZCBhbHNvIHdvcmtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlVGltZVJhbmdlKGRhdGUxLCBkYXRlMiwgdW5pdCwgcHJlY2lzZSkge1xuXG4gICAgaWYgKGRhdGUxICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGlzVmFsaWREYXRlKGRhdGUxKSkge1xuICAgICAgICAgICAgZGF0ZTEgPSBtb21lbnQoZGF0ZTEpO1xuXG4gICAgICAgICAgICBpZiAoZGF0ZTIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkRGF0ZShkYXRlMikpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTIgPSBtb21lbnQoZGF0ZTIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0ZTIgPSBtb21lbnQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgICAgICAgICAgICBkYXRhLmRpZmZlcmVuY2UgPSBkYXRlMS5kaWZmKGRhdGUyLCAneWVhcnMnLCBwcmVjaXNlKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS51bml0ID0gdW5pdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgICAgICAgICBkYXRhLmRpZmZlcmVuY2UgPSBkYXRlMS5kaWZmKGRhdGUyLCAnbW9udGhzJywgcHJlY2lzZSk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEudW5pdCA9IHVuaXQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICAgICAgICAgICAgICBkYXRhLmRpZmZlcmVuY2UgPSBkYXRlMS5kaWZmKGRhdGUyLCAnd2Vla3MnLCBwcmVjaXNlKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS51bml0ID0gdW5pdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5kaWZmZXJlbmNlID0gZGF0ZTEuZGlmZihkYXRlMiwgJ2RheXMnLCBwcmVjaXNlKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS51bml0ID0gdW5pdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnaG91cic6XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZGlmZmVyZW5jZSA9IGRhdGUxLmRpZmYoZGF0ZTIsICdob3VycycsIHByZWNpc2UpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnVuaXQgPSB1bml0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICAgICAgICAgICAgICBkYXRhLmRpZmZlcmVuY2UgPSBkYXRlMS5kaWZmKGRhdGUyLCAnbWludXRlcycsIHByZWNpc2UpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnVuaXQgPSB1bml0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgICAgICAgICAgICBkYXRhLmRpZmZlcmVuY2UgPSBkYXRlMS5kaWZmKGRhdGUyLCAnc2Vjb25kcycsIHByZWNpc2UpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnVuaXQgPSB1bml0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIC8vYXV0byBnZXQgbmVhcmVzdCAxXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWN0aW9ucyA9IFsneWVhcicsICdtb250aCcsICd3ZWVrJywgJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnXVxuICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRTZWN0aW9uID0gc2VjdGlvbnMuZmluZChmdW5jdGlvbiAoc2VjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguYWJzKGRhdGUxLmRpZmYoZGF0ZTIsIHNlY3Rpb24gKyAncycsIHRydWUpKSA+PSAxO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRTZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmRpZmZlcmVuY2UgPSBkYXRlMS5kaWZmKGRhdGUyLCBzZWxlY3RlZFNlY3Rpb24gKyAncycsIHByZWNpc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS51bml0ID0gc2VsZWN0ZWRTZWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5kaWZmZXJlbmNlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudW5pdCA9ICdzZWNvbmQnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRNaWxsaVNlY29uZHNUb1RpbWUobWlsbGlzZWNvbmQsIG1pblVuaXQpIHtcblxuICAgIGlmIChtaWxsaXNlY29uZCAhPSBudWxsICYmIGlzVmFsaWROdW1iZXIocGFyc2VJbnQobWlsbGlzZWNvbmQpKSkge1xuXG4gICAgICAgIGxldCBzZWNvbmQgPSAwLCBtaW51dGUgPSAwLCBob3VyID0gMDtcbiAgICAgICAgbGV0IGZpbmFsVGltZSA9ICcnO1xuICAgICAgICBtaWxsaXNlY29uZCA9IHBhcnNlSW50KG1pbGxpc2Vjb25kKTtcblxuICAgICAgICBob3VyID0gbnVtYmVyVG9GaXhlZChtb21lbnQuZHVyYXRpb24obWlsbGlzZWNvbmQpLmhvdXJzKCksIGZhbHNlLCAyLCB0cnVlKTtcbiAgICAgICAgbWludXRlID0gbnVtYmVyVG9GaXhlZChtb21lbnQuZHVyYXRpb24obWlsbGlzZWNvbmQpLm1pbnV0ZXMoKSwgZmFsc2UsIDIsIHRydWUpO1xuICAgICAgICBzZWNvbmQgPSBudW1iZXJUb0ZpeGVkKG1vbWVudC5kdXJhdGlvbihtaWxsaXNlY29uZCkuc2Vjb25kcygpLCBmYWxzZSwgMiwgdHJ1ZSk7XG5cbiAgICAgICAgc3dpdGNoIChtaW5Vbml0KSB7XG4gICAgICAgICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICAgICAgICAgIGlmIChob3VyID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBmaW5hbFRpbWUgPSBgJHtob3VyfToke21pbnV0ZX06JHtzZWNvbmR9YDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmaW5hbFRpbWUgPSBgJHttaW51dGV9OiR7c2Vjb25kfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaG91cic6XG4gICAgICAgICAgICAgICAgZmluYWxUaW1lID0gYCR7aG91cn06JHttaW51dGV9OiR7c2Vjb25kfWA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYgKGhvdXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsVGltZSA9IGAke2hvdXJ9OiR7bWludXRlfToke3NlY29uZH1gO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWludXRlID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBmaW5hbFRpbWUgPSBgJHttaW51dGV9OiR7c2Vjb25kfWA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmluYWxUaW1lID0gYCR7c2Vjb25kfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZpbmFsVGltZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0V4cGlyZWQoZGF0ZSwgYXNwZWN0KSB7XG5cbiAgICBpZiAoYXNwZWN0ID09IG51bGwpIHtcbiAgICAgICAgYXNwZWN0ID0gJ3NlY29uZCc7XG4gICAgfVxuXG4gICAgaWYgKGRhdGUgIT0gbnVsbCAmJiBpc1ZhbGlkRGF0ZShkYXRlKSkge1xuICAgICAgICB2YXIgdG9kYXkgPSBtb21lbnQoKTtcbiAgICAgICAgZGF0ZSA9IG1vbWVudChkYXRlKTtcbiAgICAgICAgcmV0dXJuIHRvZGF5LmlzQWZ0ZXIoZGF0ZSwgYXNwZWN0KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvQ2FyZEZvcm1hdCh2YWx1ZSkge1xuXG4gICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICB2YWx1ZSA9IGluc2VydEJldHdlZW4odmFsdWUsIDQsICcgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9FeHBpcmVkRGF0ZUZvcm1hdCh2YWx1ZSkge1xuXG4gICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgdmFyIHN0ciA9IHZhbHVlLnNwbGl0KCcnKTtcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICBpZiAoc3RyWzFdID09ICcvJykge1xuICAgICAgICAgICAgICAgIHN0ci5zcGxpY2UoMCwgMCwgJzAnKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHN0ci5qb2luKFwiXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoJy8nLCAnJyk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBpbnNlcnRCZXR3ZWVuKHZhbHVlLCAyLCAnLycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRCZXR3ZWVuKHZhbHVlLCBzcGFjZSwgY2hhciwgZnJvbUJhY2ssIHN0b3BBdEVuZCkge1xuXG4gICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGlzTmFOKHBhcnNlSW50KHNwYWNlKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChmcm9tQmFjaykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gcmV2ZXJzZVN0cmluZyh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgb3Jpc3RyID0gdmFsdWUudG9TdHJpbmcoKS5zcGxpdCgnJyk7XG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gb3Jpc3RyLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBhZGRlZHNwYWNlY291bnQgPSAxO1xuICAgICAgICAgICAgc3BhY2UgPSBwYXJzZUludChzcGFjZSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9IDAgJiYgKGluZGV4ICsgMSkgJSBzcGFjZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdG9wQXRFbmQgJiYgaW5kZXggPT0gbGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb3Jpc3RyLnNwbGljZShpbmRleCArIGFkZGVkc3BhY2Vjb3VudCwgMCwgY2hhcik7XG4gICAgICAgICAgICAgICAgICAgIGFkZGVkc3BhY2Vjb3VudCA9IGFkZGVkc3BhY2Vjb3VudCArIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZyb21CYWNrKSB7XG4gICAgICAgICAgICAgICAgb3Jpc3RyID0gb3Jpc3RyLnJldmVyc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvcmlzdHIuam9pbihcIlwiKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tTdXBwb3J0ZWRDYXJkVHlwZShjYXJkKSB7XG4gICAgaWYgKGNhcmQgIT0gbnVsbCkge1xuICAgICAgICAvLyB2aXNhXG4gICAgICAgIGlmIChjYXJkID09ICdWSVNBJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FyZCA9PSAnTUFTVEVSQ0FSRCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNhcmQgPT0gJ1ZJU0FFTEVDVFJPTicpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNhcmQgPT0gJ0FNRVJJQ0FORVhQUkVTUycpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWROdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0V4cGlyeURhdGVGb3JtYXQodmFsdWUpIHtcblxuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIC8vdG8gYXJyYXlcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnJyk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHZhbHVlLmZpbHRlcihmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT0gMikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbSAhPSAnLyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuICFwYXJzZUludChpdGVtKSAmJiBwYXJzZUludChpdGVtKSAhPSAwO1xuICAgICAgICAgICAgfSkubGVuZ3RoID4gMFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRCeURlc2MoZGF0YSwgY29sKSB7XG5cbiAgICBpZiAoZGF0YSAmJiBjb2wpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgaWYgKF8uaXNQbGFpbk9iamVjdChhKSB8fCBfLmlzUGxhaW5PYmplY3QoYikgfHwgXy5pc0FycmF5KGEpIHx8IF8uaXNBcnJheShiKSkge1xuICAgICAgICAgICAgICAgIGlmICghY29sKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhW2NvbF0gPCBiW2NvbF0pIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIGlmIChhW2NvbF0gPiBiW2NvbF0pIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGEgPCBiKSByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICBpZiAoYSA+IGIpIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRCeURhdGVEZXNjKGRhdGEsIGNvbCkge1xuXG4gICAgaWYgKGRhdGEgJiYgY29sKSB7XG4gICAgICAgIHJldHVybiBkYXRhLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIGlmIChtb21lbnQoYVtjb2xdKS5pc0JlZm9yZShtb21lbnQoYltjb2xdKSkpIHJldHVybiAxO1xuICAgICAgICAgICAgaWYgKG1vbWVudChhW2NvbF0pLmlzQWZ0ZXIobW9tZW50KGJbY29sXSkpKSByZXR1cm4gLTE7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmREYXRhKGRhdGEsIGNvbCwgdmFsKSB7XG4gICAgcmV0dXJuIGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtW2NvbF0gPT0gdmFsO1xuICAgIH0pXG59XG5leHBvcnQgZnVuY3Rpb24gaGlkZVN0cmluZ051bWJlcihzdHJpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgICBpZiAoc3RyaW5nKSB7XG4gICAgICAgIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuXG4gICAgICAgIC8vR2V0IHJlc3QgcGFydFxuICAgICAgICB2YXIgc3RhcnRwYXJ0ID0gJyc7XG4gICAgICAgIHZhciBlbmRwYXJ0ID0gJyc7XG4gICAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHN0YXJ0KSAmJiBOdW1iZXIuaXNJbnRlZ2VyKGVuZCkpIHtcbiAgICAgICAgICAgIHN0YXJ0cGFydCA9IHN0cmluZy5zbGljZSgwLCBzdGFydCk7XG4gICAgICAgICAgICBlbmRwYXJ0ID0gc3RyaW5nLnNsaWNlKGxlbmd0aCAtIChsZW5ndGggLSBlbmQpLCBsZW5ndGgpO1xuICAgICAgICB9IGVsc2UgaWYgKE51bWJlci5pc0ludGVnZXIoc3RhcnQpKSB7XG4gICAgICAgICAgICBzdGFydHBhcnQgPSBzdHJpbmcuc2xpY2UoMCwgc3RhcnQpO1xuICAgICAgICAgICAgZW5kcGFydCA9ICcnO1xuICAgICAgICB9IGVsc2UgaWYgKE51bWJlci5pc0ludGVnZXIoZW5kKSkge1xuICAgICAgICAgICAgc3RhcnRwYXJ0ID0gJyc7XG4gICAgICAgICAgICBlbmRwYXJ0ID0gc3RyaW5nLnNsaWNlKGxlbmd0aCAtIChsZW5ndGggLSBlbmQpLCBsZW5ndGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vR2V0IGRlc2lyZSBjb252ZXJ0IHBhcnRcbiAgICAgICAgdmFyIGNvbnZlcnRwYXJ0ID0gJyc7XG4gICAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHN0YXJ0KSAmJiBOdW1iZXIuaXNJbnRlZ2VyKGVuZCkpIHtcbiAgICAgICAgICAgIGNvbnZlcnRwYXJ0ID0gc3RyaW5nLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgICAgICB9IGVsc2UgaWYgKE51bWJlci5pc0ludGVnZXIoc3RhcnQpKSB7XG4gICAgICAgICAgICBjb252ZXJ0cGFydCA9IHN0cmluZy5zbGljZShzdGFydClcbiAgICAgICAgfSBlbHNlIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGVuZCkpIHtcbiAgICAgICAgICAgIGNvbnZlcnRwYXJ0ID0gc3RyaW5nLnNsaWNlKDAsIGVuZClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICAgIH1cblxuICAgICAgICAvL3RvIGFycmF5XG4gICAgICAgIGNvbnZlcnRwYXJ0ID0gY29udmVydHBhcnQuc3BsaXQoJycpO1xuICAgICAgICBjb252ZXJ0cGFydCA9IGNvbnZlcnRwYXJ0Lm1hcChmdW5jdGlvbiAoY2hhcikge1xuICAgICAgICAgICAgaWYgKGlzTmFOKHBhcnNlSW50KGNoYXIpKSB8fCAhcGFyc2VJbnQoY2hhcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hhcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcqJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAvL3RvIHN0cmluZ1xuICAgICAgICBjb252ZXJ0cGFydCA9IGNvbnZlcnRwYXJ0LmpvaW4oXCJcIik7XG5cbiAgICAgICAgcmV0dXJuIHN0YXJ0cGFydCArIGNvbnZlcnRwYXJ0ICsgZW5kcGFydDtcblxuXG5cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbn1cbmV4cG9ydCBmdW5jdGlvbiBub3RFbXB0eUxlbmd0aChkYXRhKSB7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkgJiYgZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChpc09iamVjdChkYXRhKSAmJiBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gYXJyYXlMZW5ndGhDb3VudChkYXRhKSB7XG5cbiAgICBpZiAobm90RW1wdHlMZW5ndGgoZGF0YSkgJiYgQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICByZXR1cm4gZGF0YS5sZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzeW5jRGVmYXVsdERlbGl2ZXJ5KGRhdGEsIGlkKSB7XG4gICAgcmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtLl9pZCkge1xuICAgICAgICAgICAgaWYgKGl0ZW0uX2lkICE9IGlkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaXNEZWZhdWx0RGVsaXZlcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pc0RlZmF1bHREZWxpdmVyeSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbS5pc0RlZmF1bHREZWxpdmVyeSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3luY0RlZmF1bHRCaWxsaW5nKGRhdGEsIGlkKSB7XG4gICAgcmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtLl9pZCkge1xuICAgICAgICAgICAgaWYgKGl0ZW0uX2lkICE9IGlkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaXNEZWZhdWx0QmlsbGluZykge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmlzRGVmYXVsdEJpbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW0uaXNEZWZhdWx0QmlsbGluZyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9KVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzeW5jRGVmYXVsdENhcmQoZGF0YSwgaWQpIHtcbiAgICByZXR1cm4gZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0uX2lkKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5faWQgIT0gaWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pc0RlZmF1bHRDYXJkKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaXNEZWZhdWx0Q2FyZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbS5pc0RlZmF1bHRDYXJkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pXG59XG5leHBvcnQgZnVuY3Rpb24gc3luY0RlZmF1bHRCYW5rKGRhdGEsIGlkKSB7XG4gICAgcmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtLl9pZCkge1xuICAgICAgICAgICAgaWYgKGl0ZW0uX2lkICE9IGlkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaXNEZWZhdWx0QmFuaykge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmlzRGVmYXVsdEJhbmsgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW0uaXNEZWZhdWx0QmFuayA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYXZlZFdpc2hMaXN0KGRhdGEsIGlkKSB7XG4gICAgaWYgKGRhdGEgJiYgaWQpIHtcbiAgICAgICAgdmFyIGNoZWNrID0gZGF0YS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnByb2R1Y3RJZCA9PSBpZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNoZWNrLmxlbmd0aCA+IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGb2xsb3dlZChkYXRhLCBpZCkge1xuICAgIGlmIChkYXRhICYmIGlkKSB7XG4gICAgICAgIHZhciBjaGVjayA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5jb21wYW55SWQgPT0gaWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjaGVjay5sZW5ndGggPiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBFcXVhbChvYmplY3QxLCBvYmplY3QyKSB7XG4gICAgaWYgKG9iamVjdDEgJiYgb2JqZWN0Mikge1xuICAgICAgICBjb25zdCBrZXlzMSA9IE9iamVjdC5rZXlzKG9iamVjdDEpO1xuICAgICAgICBjb25zdCBrZXlzMiA9IE9iamVjdC5rZXlzKG9iamVjdDIpO1xuXG4gICAgICAgIGlmIChrZXlzMS5sZW5ndGggIT09IGtleXMyLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5czEpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbDEgPSBvYmplY3QxW2tleV07XG4gICAgICAgICAgICBjb25zdCB2YWwyID0gb2JqZWN0MltrZXldO1xuICAgICAgICAgICAgY29uc3QgYXJlT2JqZWN0cyA9IGlzT2JqZWN0KHZhbDEpICYmIGlzT2JqZWN0KHZhbDIpO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGFyZU9iamVjdHMgJiYgIWRlZXBFcXVhbCh2YWwxLCB2YWwyKSB8fFxuICAgICAgICAgICAgICAgICFhcmVPYmplY3RzICYmIHZhbDEgIT09IHZhbDJcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdChvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWVwRXF1YWxBcnJheU9iamVjdChhcnJheTEsIGFycmF5Mikge1xuXG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnJheTEpICYmIEFycmF5LmlzQXJyYXkoYXJyYXkyKSkge1xuICAgICAgICBpZiAoYXJyYXkxLmxlbmd0aCAhPSBhcnJheTIubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGFycmF5MS5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgICAgIGlmICghZGVlcEVxdWFsKGFycmF5MVt4XSwgYXJyYXkyW3hdKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmRUb0hhbGYobnVtYmVyKSB7XG5cbiAgICBpZiAobnVtYmVyICE9IG51bGwpIHtcbiAgICAgICAgaWYgKCFpc05hTihwYXJzZUZsb2F0KG51bWJlcikpKSB7XG4gICAgICAgICAgICB2YXIgZGVjaW1hbCA9IHBhcnNlRmxvYXQobnVtYmVyKTtcbiAgICAgICAgICAgIHZhciBpbnQgPSBwYXJzZUludChudW1iZXIpO1xuXG4gICAgICAgICAgICBkZWNpbWFsID0gZGVjaW1hbCAtIGludDtcbiAgICAgICAgICAgIHJldHVybiBkZWNpbWFsID49IDAuNSA/IGludCArIDAuNSA6IGludDtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeVN0cmluZ2lmeU5lc3RlZE9iamVjdCh2YWx1ZSwgY29sTmFtZSkge1xuXG4gICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGNvbE5hbWUpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgICAgICBkYXRhW2NvbE5hbWVdID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcXVlcnlTdHJpbmcuc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHZhbHVlKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEltZ1RhZ1NvdXJjZShzdHIpIHtcbiAgICBpZiAoc3RyKSB7XG4gICAgICAgIHN0ciA9IHN0ci50b1N0cmluZygpO1xuICAgICAgICBsZXQgc3RyQXJyID0gc3RyLnNwbGl0KFwiXCIpO1xuICAgICAgICBsZXQgcmVtb3ZlZCA9IHRydWU7XG4gICAgICAgIC8vR2V0IGh0bWwgdGFnIG9ubHlcbiAgICAgICAgc3RyQXJyID0gXy5jb21wYWN0KF8ubWFwKHN0ckFyciwgZnVuY3Rpb24gKGNocikge1xuICAgICAgICAgICAgaWYgKGNociA9PSAnPCcpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNocjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNociA9PSAnPicpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlbW92ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaHI7XG4gICAgICAgIH0pKTtcblxuICAgICAgICBsZXQgaW1hZ2VzID0gc3RyQXJyLmpvaW4oXCJcIikuc3BsaXQoXCI+XCIpO1xuICAgICAgICBpbWFnZXMgPSBfLmNvbXBhY3QoXy5tYXAoaW1hZ2VzLCBmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgICAgICAgIGlmIChpbWFnZS5zdWJzdHIoMCwgNCkgPT0gJzxpbWcnKSB7XG4gICAgICAgICAgICAgICAgLy9wb2ludCB0byBzcmMgdmFsdWVcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnRJbmRleCA9IGltYWdlLmluZGV4T2YoJ3NyYz1cIicpICsgNTtcblxuICAgICAgICAgICAgICAgIC8vY3JvcCB1bnRpbCBzcmNcbiAgICAgICAgICAgICAgICBsZXQgY3JvcHBlZFN0ckFyciA9IGltYWdlLnN1YnN0cihzdGFydEluZGV4KVxuICAgICAgICAgICAgICAgIGNyb3BwZWRTdHJBcnIgPSBjcm9wcGVkU3RyQXJyLnNwbGl0KFwiXCIpO1xuICAgICAgICAgICAgICAgIGxldCByZW1vdmVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAvL3JldHJpZXZlIHZhbHVlXG4gICAgICAgICAgICAgICAgY3JvcHBlZFN0ckFyciA9IF8uY29tcGFjdChfLm1hcChjcm9wcGVkU3RyQXJyLCBmdW5jdGlvbiAoY2hyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaHIgPT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAocmVtb3ZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNocjtcbiAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4geyB1cmw6IGAvJHtjcm9wcGVkU3RyQXJyLmpvaW4oXCJcIil9YCwgbmFtZTogY3JvcHBlZFN0ckFyci5qb2luKFwiXCIpLnNsaWNlKDEwKSB9O1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9KSlcbiAgICAgICAgcmV0dXJuIGltYWdlcztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUh0bWxUYWcoc3RyKSB7XG4gICAgaWYgKHN0cikge1xuICAgICAgICBzdHIgPSBzdHIudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IHN0ckFyciA9IHN0ci5zcGxpdChcIlwiKTtcbiAgICAgICAgbGV0IHJlbW92ZWQgPSBmYWxzZTtcbiAgICAgICAgc3RyQXJyID0gXy5jb21wYWN0KF8ubWFwKHN0ckFyciwgZnVuY3Rpb24gKGNocikge1xuICAgICAgICAgICAgaWYgKGNociA9PSAnPCcpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNociA9PSAnPicpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVtb3ZlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNocjtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHJldHVybiBzdHJBcnIuam9pbihcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb1JhbmdlRm9ybWF0KHZhbHVlKSB7XG4gICAgbGV0IGRhdGEgPSBfLmNsb25lRGVlcCh2YWx1ZSk7XG4gICAgLy9Db252ZXJ0IFJhbmdlIEZvcm1hdFxuICAgIGlmIChub3RFbXB0eUxlbmd0aChkYXRhKSkge1xuICAgICAgICAvL1Jlc3RydWN0IHJhbmdlIGZvcm1hdCB0byBjb252ZXJ0XG4gICAgICAgIGlmICghZGF0YVswXSAmJiAhZGF0YVsxXSkge1xuICAgICAgICB9IGVsc2UgaWYgKCFkYXRhWzBdKSB7XG4gICAgICAgICAgICBkYXRhWzBdID0gZGF0YVsxXTtcbiAgICAgICAgICAgIGRhdGFbMV0gPSBkZWZhdWx0UmFuZ2VTbWFsbGVyXG4gICAgICAgIH0gZWxzZSBpZiAoIWRhdGFbMV0pIHtcbiAgICAgICAgICAgIGRhdGFbMV0gPSBkZWZhdWx0UmFuZ2VCaWdnZXJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFJhbmdlRm9ybWF0QmFjayh2YWx1ZUFycikge1xuICAgIGlmIChfLmlzQXJyYXkodmFsdWVBcnIpICYmICFfLmlzRW1wdHkodmFsdWVBcnIpKSB7XG4gICAgICAgIGxldCBwYXJhbWV0ZXIxID0gdmFsdWVBcnJbMF07XG4gICAgICAgIGxldCBwYXJhbWV0ZXIyID0gdmFsdWVBcnJbMV07XG4gICAgICAgIGxldCBkYXRhID0gWyxdXG5cbiAgICAgICAgaWYgKHBhcmFtZXRlcjIgPT0gZGVmYXVsdFJhbmdlU21hbGxlciB8fCBwYXJhbWV0ZXIyID09IGRlZmF1bHRSYW5nZUJpZ2dlcikge1xuICAgICAgICAgICAgaWYgKHBhcmFtZXRlcjIgPT0gZGVmYXVsdFJhbmdlQmlnZ2VyKSB7XG4gICAgICAgICAgICAgICAgZGF0YVswXSA9IHBhcmFtZXRlcjE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyMiA9PSBkZWZhdWx0UmFuZ2VTbWFsbGVyKSB7XG4gICAgICAgICAgICAgICAgZGF0YVsxXSA9IHBhcmFtZXRlcjE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZUFycjtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWx1ZUFycjtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0UmFuZ2VGb3JtYXRUb1RleHQoZm9ybWF0ZWRSYW5nZSwgdmFsdWVGb3JtYXQpIHtcblxuICAgIGZ1bmN0aW9uIGNvbnZlcnRWYWx1ZSh2YWx1ZSwgZm9ybWF0KSB7XG5cbiAgICAgICAgaWYgKGZvcm1hdCA9PSAncHJpY2UnKSB7XG4gICAgICAgICAgICByZXR1cm4gYFJNICR7Zm9ybWF0TnVtYmVyKHZhbHVlLCBudWxsLCB0cnVlLCAyLCB0cnVlKX1gXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm9ybWF0ID09ICdtaWxlYWdlJykge1xuICAgICAgICAgICAgcmV0dXJuIGAke2Zvcm1hdE51bWJlcih2YWx1ZSwgbnVsbCwgdHJ1ZSwgMiwgdHJ1ZSl9IGttYFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvcm1hdCA9PSAnZW5naW5lQ2FwYWNpdHknKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7Zm9ybWF0TnVtYmVyKHZhbHVlLCBudWxsLCB0cnVlLCAyLCB0cnVlKX0gY2NgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAoXy5pc0FycmF5KGZvcm1hdGVkUmFuZ2UpICYmICFfLmlzRW1wdHkoZm9ybWF0ZWRSYW5nZSkpIHtcbiAgICAgICAgbGV0IHBhcmFtZXRlcjEgPSBmb3JtYXRlZFJhbmdlWzBdO1xuICAgICAgICBsZXQgcGFyYW1ldGVyMiA9IGZvcm1hdGVkUmFuZ2VbMV07XG4gICAgICAgIGxldCB0ZXh0ID0gJyc7XG5cbiAgICAgICAgaWYgKHBhcmFtZXRlcjIgPT0gJz49JyB8fCBwYXJhbWV0ZXIyID09ICc+JyB8fCAoIXBhcmFtZXRlcjIgJiYgcGFyYW1ldGVyMSkpIHtcbiAgICAgICAgICAgIHRleHQgPSBgYWJvdmUgJHtjb252ZXJ0VmFsdWUocGFyYW1ldGVyMSwgdmFsdWVGb3JtYXQpfWBcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhbWV0ZXIyID09ICc8PScgfHwgcGFyYW1ldGVyMiA9PSAnPCcpIHtcbiAgICAgICAgICAgIHRleHQgPSBgYmVsb3cgJHtjb252ZXJ0VmFsdWUocGFyYW1ldGVyMSwgdmFsdWVGb3JtYXQpfWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRleHQgPSBgYmV0d2VlbiAke2NvbnZlcnRWYWx1ZShwYXJhbWV0ZXIxLCB2YWx1ZUZvcm1hdCl9IGFuZCAke2NvbnZlcnRWYWx1ZShwYXJhbWV0ZXIyLCB2YWx1ZUZvcm1hdCl9YFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRGaWx0ZXJSYW5nZSh2YWx1ZSwgbmFtZSkge1xuXG4gICAgaWYgKG5vdEVtcHR5TGVuZ3RoKHZhbHVlKSAmJiBuYW1lKSB7XG4gICAgICAgIGxldCBwYXJhbWV0ZXIxID0gcGFyc2VGbG9hdCh2YWx1ZVswXSk7XG4gICAgICAgIGxldCBwYXJhbWV0ZXIyID0gdmFsdWVbMV07XG4gICAgICAgIGxldCBmaW5hbERhdGEgPSBbXTtcbiAgICAgICAgbGV0IHF1ZXJ5ID0ge307XG5cbiAgICAgICAgaWYgKCFpc1ZhbGlkTnVtYmVyKHBhcmFtZXRlcjEpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbWV0ZXIyICE9IG51bGwpIHtcblxuICAgICAgICAgICAgc3dpdGNoIChwYXJhbWV0ZXIyKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnPD0nOlxuICAgICAgICAgICAgICAgICAgICBxdWVyeVtgJHtuYW1lfWBdID0geyAkbHRlOiArKHBhcmFtZXRlcjEpIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxEYXRhLnB1c2gocXVlcnkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlbYCR7bmFtZX1gXSA9IHsgJGx0OiArKHBhcmFtZXRlcjEpIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxEYXRhLnB1c2gocXVlcnkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICc9PSc6XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5W2Ake25hbWV9YF0gPSB7ICRlcTogKyhwYXJhbWV0ZXIxKSB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsRGF0YS5wdXNoKHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnPic6XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5W2Ake25hbWV9YF0gPSB7ICRndDogKyhwYXJhbWV0ZXIxKSB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsRGF0YS5wdXNoKHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnPj0nOlxuICAgICAgICAgICAgICAgICAgICBxdWVyeVtgJHtuYW1lfWBdID0geyAkZ3RlOiArKHBhcmFtZXRlcjEpIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxEYXRhLnB1c2gocXVlcnkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXIyID0gcGFyc2VGbG9hdChwYXJhbWV0ZXIyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkTnVtYmVyKHBhcmFtZXRlcjIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVtgJHtuYW1lfWBdID0geyAkZXE6ICsocGFyYW1ldGVyMSkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxEYXRhLnB1c2gocXVlcnkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlbYCR7bmFtZX1gXSA9IHsgJGd0ZTogKyhwYXJhbWV0ZXIxKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbERhdGEucHVzaChxdWVyeSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBxdWVyeTEgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5MVtgJHtuYW1lfWBdID0geyAkbHRlOiArKHBhcmFtZXRlcjIpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsRGF0YS5wdXNoKHF1ZXJ5MSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHF1ZXJ5W2Ake25hbWV9YF0gPSB7ICRlcTogKyhwYXJhbWV0ZXIxKSB9XG4gICAgICAgICAgICBmaW5hbERhdGEucHVzaChxdWVyeSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbmFsRGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RSZW1vdmVFbXB0eVZhbHVlKHZhbHVlKSB7XG5cbiAgICBpZiAobm90RW1wdHlMZW5ndGgodmFsdWUpICYmIF8uaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIF8ucGlja0J5KHZhbHVlLCBmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgICAgICAgIHJldHVybiBfLmlzQXJyYXkocHJvcGVydHkpID8gbm90RW1wdHlMZW5ndGgoXy5jb21wYWN0KHByb3BlcnR5KSkgOiBfLmlzUGxhaW5PYmplY3QocHJvcGVydHkpID8gbm90RW1wdHlMZW5ndGgob2JqZWN0UmVtb3ZlRW1wdHlWYWx1ZShwcm9wZXJ0eSkpIDogcHJvcGVydHk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7fVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRQcm9kdWN0Um91dGVQYXJhbXNUb0ZpbHRlck9iamVjdChyb3V0ZVBhcmFtcykge1xuXG4gICAgbGV0IHsgcGFyYW1ldGVyMSwgcGFyYW1ldGVyMiwgcGFyYW1ldGVyMyB9ID0gcm91dGVQYXJhbXM7XG4gICAgbGV0IHsgc29ydGluZywgcGFnZSwgdmlldyB9ID0gcm91dGVQYXJhbXM7XG4gICAgbGV0IG1lcmdlT2JqID0gXy5waWNrKHJvdXRlUGFyYW1zLCBhdmFpbGFibGVGaWx0ZXJzKSB8fCB7fTtcblxuICAgIGlmICghaXNWYWxpZE51bWJlcihwYXJzZUludChwYWdlKSkpIHtcbiAgICAgICAgcGFnZSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKHZpZXcgIT0gJ2dyaWRWaWV3JyAmJiB2aWV3ICE9ICdsaXN0VmlldycpIHtcbiAgICAgICAgdmlldyA9ICdncmlkVmlldyc7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgc29ydGluZyA9IEpTT04ucGFyc2Uoc29ydGluZyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgaWYgKCFfLmdldChzb3J0aW5nLCBbJ2NhcnNwZWMueWVhciddKSAmJiAhXy5nZXQoc29ydGluZywgWydtaWxlYWdlRmlsdGVyJ10pICYmICFfLmdldChzb3J0aW5nLCBbJ3NlYXJjaFByaWNlJ10pKSB7XG4gICAgICAgIHNvcnRpbmcgPSB7fTtcbiAgICB9XG4gICAgbGV0IGZpbmFsRGF0YSA9IHtcbiAgICAgICAgZmlsdGVyR3JvdXA6IHtcbiAgICAgICAgICAgIC4uLm1lcmdlT2JqXG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgcGFnZTogcGFnZSxcbiAgICAgICAgICAgIHNvcnRpbmc6IHNvcnRpbmcsXG4gICAgICAgICAgICB2aWV3OiB2aWV3XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGlmIChmaW5hbERhdGEuZmlsdGVyR3JvdXAucHJpY2VSYW5nZSkge1xuICAgICAgICBmaW5hbERhdGEuZmlsdGVyR3JvdXAucHJpY2VSYW5nZSA9IGNvbnZlcnRSYW5nZUZvcm1hdEJhY2soZmluYWxEYXRhLmZpbHRlckdyb3VwLnByaWNlUmFuZ2UpO1xuICAgIH1cbiAgICBpZiAoZmluYWxEYXRhLmZpbHRlckdyb3VwLnllYXJSYW5nZSkge1xuICAgICAgICBmaW5hbERhdGEuZmlsdGVyR3JvdXAueWVhclJhbmdlID0gY29udmVydFJhbmdlRm9ybWF0QmFjayhmaW5hbERhdGEuZmlsdGVyR3JvdXAueWVhclJhbmdlKTtcbiAgICB9XG4gICAgaWYgKGZpbmFsRGF0YS5maWx0ZXJHcm91cC5taWxlYWdlUmFuZ2UpIHtcbiAgICAgICAgZmluYWxEYXRhLmZpbHRlckdyb3VwLm1pbGVhZ2VSYW5nZSA9IGNvbnZlcnRSYW5nZUZvcm1hdEJhY2soZmluYWxEYXRhLmZpbHRlckdyb3VwLm1pbGVhZ2VSYW5nZSk7XG4gICAgfVxuICAgIGlmIChmaW5hbERhdGEuZmlsdGVyR3JvdXAuZW5naW5lQ2FwYWNpdHlSYW5nZSkge1xuICAgICAgICBmaW5hbERhdGEuZmlsdGVyR3JvdXAuZW5naW5lQ2FwYWNpdHlSYW5nZSA9IGNvbnZlcnRSYW5nZUZvcm1hdEJhY2soZmluYWxEYXRhLmZpbHRlckdyb3VwLmVuZ2luZUNhcGFjaXR5UmFuZ2UpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbWV0ZXIxICYmICFwYXJhbWV0ZXIyICYmICFwYXJhbWV0ZXIzKSB7XG4gICAgICAgIGxldCBzdGF0ZUFyciA9IHBhcmFtZXRlcjEuc3BsaXQoJ18nKTtcbiAgICAgICAgZmluYWxEYXRhLmZpbHRlckdyb3VwLnN0YXRlID0gXy5pc0FycmF5KHN0YXRlQXJyKSAmJiAhXy5pc0VtcHR5KHN0YXRlQXJyKSA/IF8uZ2V0KHN0YXRlQXJyLCBbMV0pIHx8ICcnIDogJyc7XG4gICAgICAgIGZpbmFsRGF0YS5maWx0ZXJHcm91cC5hcmVhID0gXy5pc0FycmF5KHN0YXRlQXJyKSAmJiAhXy5pc0VtcHR5KHN0YXRlQXJyKSA/IF8uZ2V0KHN0YXRlQXJyLCBbMl0pIHx8ICcnIDogJyc7XG4gICAgfSBlbHNlIGlmIChwYXJhbWV0ZXIxICYmIHBhcmFtZXRlcjIgJiYgIXBhcmFtZXRlcjMpIHtcbiAgICAgICAgZmluYWxEYXRhLmZpbHRlckdyb3VwLm1ha2UgPSBfLnRvTG93ZXIocGFyYW1ldGVyMSk7XG5cbiAgICAgICAgbGV0IHN0YXRlQXJyID0gcGFyYW1ldGVyMi5zcGxpdCgnXycpO1xuICAgICAgICBmaW5hbERhdGEuZmlsdGVyR3JvdXAuc3RhdGUgPSBfLmlzQXJyYXkoc3RhdGVBcnIpICYmICFfLmlzRW1wdHkoc3RhdGVBcnIpID8gXy5nZXQoc3RhdGVBcnIsIFsxXSkgfHwgJycgOiAnJztcbiAgICAgICAgZmluYWxEYXRhLmZpbHRlckdyb3VwLmFyZWEgPSBfLmlzQXJyYXkoc3RhdGVBcnIpICYmICFfLmlzRW1wdHkoc3RhdGVBcnIpID8gXy5nZXQoc3RhdGVBcnIsIFsyXSkgfHwgJycgOiAnJztcblxuICAgIH0gZWxzZSBpZiAocGFyYW1ldGVyMSAmJiBwYXJhbWV0ZXIyICYmIHBhcmFtZXRlcjMpIHtcbiAgICAgICAgZmluYWxEYXRhLmZpbHRlckdyb3VwLm1ha2UgPSBfLnRvTG93ZXIocGFyYW1ldGVyMSk7XG4gICAgICAgIGZpbmFsRGF0YS5maWx0ZXJHcm91cC5tb2RlbCA9IF8udG9Mb3dlcihwYXJhbWV0ZXIyKTtcblxuICAgICAgICBsZXQgc3RhdGVBcnIgPSBwYXJhbWV0ZXIzLnNwbGl0KCdfJyk7XG4gICAgICAgIGZpbmFsRGF0YS5maWx0ZXJHcm91cC5zdGF0ZSA9IF8uaXNBcnJheShzdGF0ZUFycikgJiYgIV8uaXNFbXB0eShzdGF0ZUFycikgPyBfLmdldChzdGF0ZUFyciwgWzFdKSB8fCAnJyA6ICcnO1xuICAgICAgICBmaW5hbERhdGEuZmlsdGVyR3JvdXAuYXJlYSA9IF8uaXNBcnJheShzdGF0ZUFycikgJiYgIV8uaXNFbXB0eShzdGF0ZUFycikgPyBfLmdldChzdGF0ZUFyciwgWzJdKSB8fCAnJyA6ICcnO1xuXG4gICAgfSBlbHNlIHtcblxuICAgIH1cblxuICAgIHJldHVybiBmaW5hbERhdGE7XG5cblxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0UGFyYW1ldGVyVG9Qcm9kdWN0TGlzdFVybChkYXRhLCBjb25maWcpIHtcblxuICAgIGxldCBtZXJnZU9iaiA9IG9iamVjdFJlbW92ZUVtcHR5VmFsdWUoZGF0YSk7XG4gICAgbGV0IGJhc2VQYXRoID0gJyc7XG5cbiAgICBpZiAoIV8uaXNQbGFpbk9iamVjdChjb25maWcpIHx8IF8uaXNFbXB0eShjb25maWcpKSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICBzb3J0aW5nOiB7fSxcbiAgICAgICAgICAgIHZpZXc6ICdncmlkVmlldydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNWYWxpZE51bWJlcihwYXJzZUludChjb25maWcucGFnZSkpKSB7XG4gICAgICAgIGNvbmZpZy5wYWdlID0gMTtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy52aWV3ICE9ICdncmlkVmlldycgJiYgY29uZmlnLnZpZXcgIT0gJ2xpc3RWaWV3Jykge1xuICAgICAgICBjb25maWcudmlldyA9ICdncmlkVmlldyc7XG4gICAgfVxuXG4gICAgaWYgKCFfLmlzUGxhaW5PYmplY3Qob2JqZWN0UmVtb3ZlRW1wdHlWYWx1ZShjb25maWcuc29ydGluZykpICYmIF8uaXNFbXB0eShvYmplY3RSZW1vdmVFbXB0eVZhbHVlKGNvbmZpZy5zb3J0aW5nKSkgJiYgKCFfLmdldChjb25maWcsIFsnc29ydGluZycsICdjYXJzcGVjLnllYXInXSkgJiYgIV8uZ2V0KGNvbmZpZywgWydzb3J0aW5nJywgJ21pbGVhZ2VGaWx0ZXInXSkgJiYgIV8uZ2V0KGNvbmZpZywgWydzb3J0aW5nJywgJ3NlYXJjaFByaWNlJ10pKSkge1xuICAgICAgICBjb25maWcuc29ydGluZyA9IHt9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmZpZy5zb3J0aW5nID0gXy5waWNrKG9iamVjdFJlbW92ZUVtcHR5VmFsdWUoY29uZmlnLnNvcnRpbmcpLCBbJ2NhcnNwZWMueWVhcicsICdzZWFyY2hQcmljZScsICdtaWxlYWdlRmlsdGVyJ10pO1xuICAgIH1cblxuXG4gICAgaWYgKG5vdEVtcHR5TGVuZ3RoKG1lcmdlT2JqKSkge1xuICAgICAgICBtZXJnZU9iaiA9IF8ucGljayhtZXJnZU9iaiwgYXZhaWxhYmxlRmlsdGVycyk7XG4gICAgICAgIGxldCBjb25kaXRpb24gPSBtZXJnZU9iai5jb25kaXRpb247XG4gICAgICAgIGxldCBtYWtlID0gbWVyZ2VPYmoubWFrZTtcbiAgICAgICAgbGV0IG1vZGVsID0gbWVyZ2VPYmoubW9kZWw7XG4gICAgICAgIGxldCBzdGF0ZSA9IG1lcmdlT2JqLnN0YXRlO1xuICAgICAgICBsZXQgYXJlYSA9IG1lcmdlT2JqLmFyZWE7XG5cblxuXG4gICAgICAgIGlmIChjb25kaXRpb24gJiYgY29uZGl0aW9uICE9ICdjYXJzLW9uLXNhbGUnICYmIGNvbmRpdGlvbiAhPSAnYWxsJykge1xuICAgICAgICAgICAgY29uZGl0aW9uID0gW18udG9Mb3dlcihjb25kaXRpb24pLCAnY2Fycy1vbi1zYWxlJ10uam9pbignLScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uZGl0aW9uID0gJ2NhcnMtb24tc2FsZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhdGUgJiYgc3RhdGUgIT0gJ21hbGF5c2lhJykge1xuICAgICAgICAgICAgaWYgKGFyZWEgJiYgc3RhdGUgIT0gJ21hbGF5c2lhJykge1xuICAgICAgICAgICAgICAgIHN0YXRlID0gWydtYWxheXNpYScsIF8udG9Mb3dlcihtZXJnZU9iai5zdGF0ZSksIF8udG9Mb3dlcihtZXJnZU9iai5hcmVhKV0uam9pbignXycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IFsnbWFsYXlzaWEnLCBfLnRvTG93ZXIobWVyZ2VPYmouc3RhdGUpXS5qb2luKCdfJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZSA9ICdtYWxheXNpYSc7XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgLy9NYWluIHBhcmFtZXRlclxuICAgICAgICAvL09yZGVyIGlzIGltcG9ydGFudFxuICAgICAgICAvL1RoZSBmaXJzdCAxIGFsd2F5cyBpcyBjb25kaXRpb25cbiAgICAgICAgLy9UaGUgbGFzdCAxIGFsd2F5cyBpcyBzdGF0ZVxuICAgICAgICBsZXQgbWFpblBhcmFtZXRlcnMgPSBbbWFrZSwgbW9kZWxdO1xuICAgICAgICBsZXQgcGF0aCA9IGAke2Jhc2VQYXRofS8ke2NvbmRpdGlvbn1gO1xuXG4gICAgICAgIF8uZm9yRWFjaChtYWluUGFyYW1ldGVycywgZnVuY3Rpb24gKHBhcmFtZXRlcikge1xuICAgICAgICAgICAgaWYgKCFwYXJhbWV0ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gYC8ke18udG9Mb3dlcihwYXJhbWV0ZXIpfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBwYXRoICs9IGAvJHtzdGF0ZX1gXG4gICAgICAgIGRlbGV0ZSBtZXJnZU9iai5jb25kaXRpb247XG4gICAgICAgIGRlbGV0ZSBtZXJnZU9iai5tYWtlO1xuICAgICAgICBkZWxldGUgbWVyZ2VPYmoubW9kZWw7XG4gICAgICAgIGRlbGV0ZSBtZXJnZU9iai5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIGAke3BhdGh9P3ZpZXc9JHtjb25maWcudmlld30mcGFnZT0ke2NvbmZpZy5wYWdlfSR7Xy5pc1BsYWluT2JqZWN0KGNvbmZpZy5zb3J0aW5nKSAmJiAhXy5pc0VtcHR5KGNvbmZpZy5zb3J0aW5nKSA/IGAmJHtxdWVyeVN0cmluZ2lmeU5lc3RlZE9iamVjdChjb25maWcuc29ydGluZywgJ3NvcnRpbmcnKX1gIDogJyd9JHtub3RFbXB0eUxlbmd0aChtZXJnZU9iaikgPyBgJiR7cXVlcnlTdHJpbmdpZnlOZXN0ZWRPYmplY3QobWVyZ2VPYmopfWAgOiAnJ31gO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvY2Fycy1vbi1zYWxlL21hbGF5c2lhP3ZpZXc9JHtjb25maWcudmlld30mcGFnZT0ke2NvbmZpZy5wYWdlfSR7Xy5pc1BsYWluT2JqZWN0KGNvbmZpZy5zb3J0aW5nKSAmJiAhXy5pc0VtcHR5KGNvbmZpZy5zb3J0aW5nKSA/IGAmJHtxdWVyeVN0cmluZ2lmeU5lc3RlZE9iamVjdChjb25maWcuc29ydGluZywgJ3NvcnRpbmcnKX1gIDogJyd9YDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0UGFyYW1ldGVyVG9Qcm9kdWN0TGlzdFNlb1VybChkYXRhKSB7XG5cbiAgICBsZXQgbWVyZ2VPYmogPSBvYmplY3RSZW1vdmVFbXB0eVZhbHVlKGRhdGEpO1xuICAgIGxldCBiYXNlUGF0aCA9IGNoZWNrRW52UmV0dXJuQ21zVXJsKGNsaWVudC5pby5pby51cmkpOztcblxuXG4gICAgaWYgKG5vdEVtcHR5TGVuZ3RoKG1lcmdlT2JqKSkge1xuICAgICAgICBtZXJnZU9iaiA9IF8ucGljayhtZXJnZU9iaiwgYXZhaWxhYmxlRmlsdGVycyk7XG4gICAgICAgIGxldCBjb25kaXRpb24gPSBtZXJnZU9iai5jb25kaXRpb247XG4gICAgICAgIGxldCBtYWtlID0gbWVyZ2VPYmoubWFrZTtcbiAgICAgICAgbGV0IG1vZGVsID0gbWVyZ2VPYmoubW9kZWw7XG4gICAgICAgIGxldCBzdGF0ZSA9IG1lcmdlT2JqLnN0YXRlO1xuICAgICAgICBsZXQgYXJlYSA9IG1lcmdlT2JqLmFyZWE7XG5cblxuXG4gICAgICAgIGlmIChjb25kaXRpb24gJiYgY29uZGl0aW9uICE9ICdjYXJzLW9uLXNhbGUnICYmIGNvbmRpdGlvbiAhPSAnYWxsJykge1xuICAgICAgICAgICAgY29uZGl0aW9uID0gW18udG9Mb3dlcihjb25kaXRpb24pLCAnY2Fycy1vbi1zYWxlJ10uam9pbignLScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uZGl0aW9uID0gJ2NhcnMtb24tc2FsZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhdGUgJiYgc3RhdGUgIT0gJ21hbGF5c2lhJykge1xuICAgICAgICAgICAgaWYgKGFyZWEgJiYgc3RhdGUgIT0gJ21hbGF5c2lhJykge1xuICAgICAgICAgICAgICAgIHN0YXRlID0gWydtYWxheXNpYScsIF8udG9Mb3dlcihtZXJnZU9iai5zdGF0ZSksIF8udG9Mb3dlcihtZXJnZU9iai5hcmVhKV0uam9pbignXycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IFsnbWFsYXlzaWEnLCBfLnRvTG93ZXIobWVyZ2VPYmouc3RhdGUpXS5qb2luKCdfJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZSA9ICdtYWxheXNpYSc7XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgLy9NYWluIHBhcmFtZXRlclxuICAgICAgICAvL09yZGVyIGlzIGltcG9ydGFudFxuICAgICAgICAvL1RoZSBmaXJzdCAxIGFsd2F5cyBpcyBjb25kaXRpb25cbiAgICAgICAgLy9UaGUgbGFzdCAxIGFsd2F5cyBpcyBzdGF0ZVxuICAgICAgICBsZXQgbWFpblBhcmFtZXRlcnMgPSBbbWFrZSwgbW9kZWxdO1xuICAgICAgICBsZXQgcGF0aCA9IGAke2Jhc2VQYXRofS8ke2NvbmRpdGlvbn1gO1xuXG4gICAgICAgIF8uZm9yRWFjaChtYWluUGFyYW1ldGVycywgZnVuY3Rpb24gKHBhcmFtZXRlcikge1xuICAgICAgICAgICAgaWYgKCFwYXJhbWV0ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gYC8ke18udG9Mb3dlcihwYXJhbWV0ZXIpfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBwYXRoICs9IGAvJHtzdGF0ZX1gXG4gICAgICAgIGRlbGV0ZSBtZXJnZU9iai5jb25kaXRpb247XG4gICAgICAgIGRlbGV0ZSBtZXJnZU9iai5tYWtlO1xuICAgICAgICBkZWxldGUgbWVyZ2VPYmoubW9kZWw7XG4gICAgICAgIGRlbGV0ZSBtZXJnZU9iai5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIGAke3BhdGh9PyR7bm90RW1wdHlMZW5ndGgobWVyZ2VPYmopID8gYCYke3F1ZXJ5U3RyaW5naWZ5TmVzdGVkT2JqZWN0KG1lcmdlT2JqKX1gIDogJyd9YDtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgL2NhcnMtb24tc2FsZS9tYWxheXNpYWA7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvcEl0ZW1zKGRhdGEsIHJhbmssIGNvbCkge1xuICAgIGlmIChfLmlzQXJyYXkoZGF0YSkgJiYgbm90RW1wdHlMZW5ndGgoZGF0YSkpIHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkTnVtYmVyKHJhbmspKSB7XG4gICAgICAgICAgICByYW5rID0gMztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJhbmsgPSBwYXJzZUludChyYW5rKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwaWNrZWREYXRhID0gc29ydEJ5RGVzYyhkYXRhLCBjb2wpO1xuICAgICAgICBwaWNrZWREYXRhID0gXy5zbGljZShwaWNrZWREYXRhLCAwLCByYW5rKTtcbiAgICAgICAgcmV0dXJuIHBpY2tlZERhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB0b0NhbWVsQ2FzZSh2YWx1ZSwgc2VwZXJhdG9yKSB7XG4gICAgaWYgKCF2YWx1ZSB8fCAhdmFsdWUudG9TdHJpbmcoKSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFzZXBlcmF0b3IgfHwgIXNlcGVyYXRvci50b1N0cmluZygpKSB7XG4gICAgICAgICAgICBzZXBlcmF0b3IgPSAnICc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXBlcmF0b3IgPSBzZXBlcmF0b3IudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoc2VwZXJhdG9yKTtcbiAgICAgICAgdmFsdWUgPSBfLm1hcCh2YWx1ZSwgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF8uY2FwaXRhbGl6ZShpdGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZS5qb2luKCcnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1NuYWtlQ2FzZSh2YWx1ZSwgc2VwZXJhdG9yKSB7XG4gICAgaWYgKCF2YWx1ZSB8fCAhdmFsdWUudG9TdHJpbmcoKSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFzZXBlcmF0b3IgfHwgIXNlcGVyYXRvci50b1N0cmluZygpKSB7XG4gICAgICAgICAgICBzZXBlcmF0b3IgPSAnXyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXBlcmF0b3IgPSBzZXBlcmF0b3IudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJycpXG4gICAgICAgIGxldCBmaW5hbERhdGEgPSBbXVxuICAgICAgICBfLmZvckVhY2godmFsdWUsIGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgICAgICAgICAgICBmaW5hbERhdGEucHVzaChfLmxvd2VyQ2FzZShpdGVtKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gPT0gXy51cHBlckNhc2UoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZmluYWxEYXRhLnB1c2goc2VwZXJhdG9yKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmaW5hbERhdGEucHVzaChfLmxvd2VyQ2FzZShpdGVtKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmluYWxEYXRhLmpvaW4oJycpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHZpZXdQb3J0ID0ge1xuICAgIHhzOiA0ODAsXG4gICAgc206IDU3NixcbiAgICBtZDogNzY4LFxuICAgIGxnOiA5OTIsXG4gICAgeGw6IDEyMDAsXG4gICAgeHhsOiAxNjAwLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlck5hbWUodXNlciwgdHlwZSkge1xuICAgIGlmIChfLmlzUGxhaW5PYmplY3QodXNlcikgJiYgIV8uaXNFbXB0eSh1c2VyKSkge1xuICAgICAgICBsZXQgdXNlcm5hbWUgPSBfLnRyaW0oXy5nZXQodXNlciwgWyd1c2VybmFtZSddKSB8fCAnJyk7XG4gICAgICAgIGxldCBmdWxsTmFtZSA9IF8udHJpbShfLmdldCh1c2VyLCBbJ2Z1bGxOYW1lJ10pIHx8IGAke18uZ2V0KHVzZXIsIFsnZmlyc3ROYW1lJ10pIHx8ICcnfSAke18uZ2V0KHVzZXIsIFsnbGFzdE5hbWUnXSkgfHwgJyd9YCB8fCAnJyk7XG4gICAgICAgIGxldCBmaXJzdE5hbWUgPSBfLnRyaW0oXy5nZXQodXNlciwgWydmaXJzdE5hbWUnXSkgfHwgJycpO1xuICAgICAgICBsZXQgbGFzdE5hbWUgPSBfLnRyaW0oXy5nZXQodXNlciwgWydsYXN0TmFtZSddKSB8fCAnJyk7XG4gICAgICAgIGxldCBuYW1lUHJlZml4ID0gXy50cmltKF8uZ2V0KHVzZXIsIFsnbmFtZVByZWZpeCddKSB8fCAnJyk7XG4gICAgICAgIGxldCBmcmVha0lkID0gXy50cmltKF8uZ2V0KHVzZXIsIFsnZnJlYWtJZCddKSB8fCAnJyk7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICd1c2VybmFtZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXJuYW1lO1xuICAgICAgICAgICAgY2FzZSAnZnVsbE5hbWUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBmdWxsTmFtZTtcbiAgICAgICAgICAgIGNhc2UgJ3ByZWZpeE5hbWUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBfLnRyaW0oYCR7bmFtZVByZWZpeCA/IGAke25hbWVQcmVmaXh9YCA6ICcnfSAke2Z1bGxOYW1lIHx8ICcnfWApO1xuICAgICAgICAgICAgY2FzZSAnZmlyc3ROYW1lJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlyc3ROYW1lO1xuICAgICAgICAgICAgY2FzZSAnbGFzdE5hbWUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBsYXN0TmFtZTtcbiAgICAgICAgICAgIGNhc2UgJ2ZyZWFrSWQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBmcmVha0lkO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVsbE5hbWU7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ0NjYXIgVXNlcidcbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBsdXJhbChzaW5ndWxhciwgcGx1cmFsLCBjb3VudCwgc2hvd0NvdW50KSB7XG4gICAgaWYgKHNpbmd1bGFyICYmIGlzVmFsaWROdW1iZXIocGFyc2VJbnQoY291bnQpKSkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoY291bnQpID4gMSA/XG4gICAgICAgICAgICBzaG93Q291bnQgP1xuICAgICAgICAgICAgICAgIGAke2NvdW50fSAke3BsdXJhbCB8fCBzaW5ndWxhciArICdzJ31gXG4gICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgIGAke3BsdXJhbCB8fCBzaW5ndWxhciArICdzJ31gXG4gICAgICAgICAgICA6XG4gICAgICAgICAgICBzaG93Q291bnQgP1xuICAgICAgICAgICAgICAgIGAke2Zvcm1hdE51bWJlcihjb3VudCwgJ2F1dG8nLCB0cnVlLCAwLCB0cnVlKX0gJHtzaW5ndWxhcn1gXG4gICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgIGAke3Npbmd1bGFyfWBcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kSW5kZXhlc09mU3RyaW5nKHRleHQsIHNlYXJjaCkge1xuICAgIGlmICh0ZXh0ICYmIHNlYXJjaCkge1xuICAgICAgICBsZXQgaW5kZXhlcyA9IFtdO1xuICAgICAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gMDtcbiAgICAgICAgd2hpbGUgKGN1cnJlbnRQb3NpdGlvbiA8IHRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gPSB0ZXh0LmluZGV4T2Yoc2VhcmNoLCBjdXJyZW50UG9zaXRpb24pO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbiA9PSAtMSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IHRleHQubGVuZ3RoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbmRleGVzLnB1c2goY3VycmVudFBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb24gKyBzZWFyY2gubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4ZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tPYmplY3RJZChkYXRhLCBpZEZvckNoZWNrLCBjb2wpIHtcbiAgICBpZiAoXy5pc1BsYWluT2JqZWN0KGRhdGEpICYmICFfLmlzRW1wdHkoZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIGRhdGFbYCR7Y29sIHx8ICdfaWQnfWBdID09IGlkRm9yQ2hlY2s7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRhdGEgPT0gaWRGb3JDaGVjaztcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPYmplY3RJZChkYXRhLCBjb2wpIHtcbiAgICBpZiAoXy5pc1BsYWluT2JqZWN0KGRhdGEpICYmICFfLmlzRW1wdHkoZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIGRhdGFbYCR7Y29sIHx8ICdfaWQnfWBdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENhck1hcmtldFNlb0RhdGEoZmlsdGVyR3JvdXAsIHRvdGFsKSB7XG5cbiAgICBpZiAoIV8uaXNQbGFpbk9iamVjdChmaWx0ZXJHcm91cCkpIHtcbiAgICAgICAgZmlsdGVyR3JvdXAgPSB7fTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmaWx0ZXJHcm91cCA9IF8uY2xvbmVEZWVwKGZpbHRlckdyb3VwKVxuICAgIH1cblxuICAgIGxldCB0aXRsZSA9IFtdO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IFtdO1xuICAgIGxldCBsb2NhdGlvbiA9IFtdO1xuICAgIGxldCByYW5nZUZpbHRlciA9IFtdO1xuICAgIGxldCBvdGhlckZpbHRlciA9IFtdO1xuICAgIGlmIChfLmdldChmaWx0ZXJHcm91cCwgJ3N0YXRlJykgfHwgXy5nZXQoZmlsdGVyR3JvdXAsICdhcmVhJykpIHtcbiAgICAgICAgbG9jYXRpb24ucHVzaChgJHtfLmNhcGl0YWxpemUoXy5nZXQoZmlsdGVyR3JvdXAsICdhcmVhJykgfHwgJycpfWApO1xuICAgICAgICBsb2NhdGlvbi5wdXNoKGAke18uZ2V0KGdldFN0YXRlKGZpbHRlckdyb3VwLnN0YXRlKSwgJ3ZhbHVlJykgfHwgJyd9YCk7XG4gICAgfVxuICAgIGxvY2F0aW9uLnB1c2goJ01hbGF5c2lhJyk7XG4gICAgbG9jYXRpb24gPSBfLmNvbXBhY3QobG9jYXRpb24pLmpvaW4oJyAnKTtcblxuICAgIGNvbnN0IGZpbHRlclJhbmdlcyA9IFsncHJpY2UnLCAnbWlsZWFnZScsICdlbmdpbmVDYXBhY2l0eScsICd5ZWFyJ107XG4gICAgXy5mb3JFYWNoKGZpbHRlclJhbmdlcywgZnVuY3Rpb24gKGZpbHRlclJhbmdlKSB7XG4gICAgICAgIGlmIChmaWx0ZXJHcm91cFtmaWx0ZXJSYW5nZSArICdSYW5nZSddKSB7XG4gICAgICAgICAgICByYW5nZUZpbHRlci5wdXNoKGAke18uY2FwaXRhbGl6ZSh0b1NuYWtlQ2FzZShmaWx0ZXJSYW5nZSwgJyAnKSl9ICR7Y29udmVydFJhbmdlRm9ybWF0VG9UZXh0KGNvbnZlcnRUb1JhbmdlRm9ybWF0KGZpbHRlckdyb3VwW2ZpbHRlclJhbmdlICsgJ1JhbmdlJ10pLCBmaWx0ZXJSYW5nZSl9YCk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGZpbHRlckdyb3VwLmJvZHlUeXBlKSB7XG4gICAgICAgIG90aGVyRmlsdGVyLnB1c2goXy5jYXBpdGFsaXplKF8uZ2V0KGdldEJvZHlUeXBlKGZpbHRlckdyb3VwLmJvZHlUeXBlKSwgJ3ZhbHVlJykgfHwgJycpKTtcbiAgICB9XG5cbiAgICBpZiAoZmlsdGVyR3JvdXAuZnVlbFR5cGUpIHtcbiAgICAgICAgb3RoZXJGaWx0ZXIucHVzaChfLmNhcGl0YWxpemUoXy5nZXQoZ2V0RnVlbFR5cGUoZmlsdGVyR3JvdXAuZnVlbFR5cGUpLCAndmFsdWUnKSB8fCAnJykpO1xuICAgIH1cblxuICAgIGlmIChmaWx0ZXJHcm91cC5jb2xvcikge1xuICAgICAgICBvdGhlckZpbHRlci5wdXNoKGBDb2xvciAke18uY2FwaXRhbGl6ZShfLmdldChnZXRDb2xvcihmaWx0ZXJHcm91cC5jb2xvciksICd2YWx1ZScpIHx8ICcnKX1gKTtcbiAgICB9XG5cbiAgICBpZiAoZmlsdGVyR3JvdXAucmVnaXN0cmF0aW9uVXJsKSB7XG4gICAgICAgIG90aGVyRmlsdGVyLnB1c2goYFdpdGggUmVnaXN0cmF0aW9uIFVybGApO1xuICAgIH1cblxuICAgIGlmIChmaWx0ZXJHcm91cC5yZWFkeVN0b2NrKSB7XG4gICAgICAgIG90aGVyRmlsdGVyLnB1c2goYElzIFJlYWR5IFN0b2NrYCk7XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlckdyb3VwLmNhcjM2MFZpZXcpIHtcbiAgICAgICAgb3RoZXJGaWx0ZXIucHVzaChgV2l0aCBDYXIgMzYwIFZpZXdgKTtcbiAgICB9XG5cbiAgICBvdGhlckZpbHRlciA9IF8uY29uY2F0KG90aGVyRmlsdGVyLCByYW5nZUZpbHRlcikuam9pbignLCAnKTtcblxuICAgIHRpdGxlLnB1c2goYFNlYXJjaCAke2Zvcm1hdE51bWJlcih0b3RhbCkgfHwgMH1gKTtcbiAgICBpZiAoZmlsdGVyR3JvdXAudGl0bGUpIHtcbiAgICAgICAgdGl0bGUucHVzaChfLmNhcGl0YWxpemUoZmlsdGVyR3JvdXAudGl0bGUpKTtcbiAgICAgICAgdGl0bGUucHVzaChfLmNhcGl0YWxpemUoZmlsdGVyR3JvdXAudGl0bGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aXRsZS5wdXNoKGAke18uZ2V0KGdldENhckJyYW5kKF8uZ2V0KGZpbHRlckdyb3VwLCAnbWFrZScpKSwgJ3ZhbHVlJykgfHwgJyd9YCk7XG4gICAgICAgIHRpdGxlLnB1c2goYCR7Xy5jYXBpdGFsaXplKF8uZ2V0KGZpbHRlckdyb3VwLCAnbW9kZWwnKSB8fCAnJyl9YCk7XG4gICAgfVxuXG4gICAgdGl0bGUucHVzaChfLmNhcGl0YWxpemUoZmlsdGVyR3JvdXAuY29uZGl0aW9uIHx8ICcnKSk7XG4gICAgdGl0bGUucHVzaChfLmNhcGl0YWxpemUoZmlsdGVyR3JvdXAudHJhbnNtaXNzaW9uIHx8ICcnKSk7XG4gICAgZGVzY3JpcHRpb24gPSBfLmNsb25lRGVlcCh0aXRsZSk7XG4gICAgdGl0bGUucHVzaChgQ2FycyBmb3IgU2FsZXMgaW4gJHtsb2NhdGlvbn0gLSBDQ0FSLm15ICMxIENhciBTb2NpYWwgUGxhdGZvcm0uYCk7XG4gICAgdGl0bGUgPSBfLmNvbXBhY3QodGl0bGUpO1xuICAgIHRpdGxlID0gdGl0bGUuam9pbignICcpO1xuXG4gICAgZGVzY3JpcHRpb24ucHVzaChgQ2FycyBmb3IgU2FsZXMgaW4gJHtsb2NhdGlvbn0ke290aGVyRmlsdGVyID8gJy4nIDogJyd9YCk7XG4gICAgZGVzY3JpcHRpb24ucHVzaChvdGhlckZpbHRlcilcbiAgICBkZXNjcmlwdGlvbi5wdXNoKCctIENDQVIubXkgIzEgQ2FyIFNvY2lhbCBQbGF0Zm9ybS4nKVxuICAgIGRlc2NyaXB0aW9uID0gXy5jb21wYWN0KGRlc2NyaXB0aW9uKTtcbiAgICBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLmpvaW4oJyAnKTtcblxuXG4gICAgbGV0IGNhbm9uaWNhbCA9IGNvbnZlcnRQYXJhbWV0ZXJUb1Byb2R1Y3RMaXN0U2VvVXJsKGZpbHRlckdyb3VwKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgY2Fub25pY2FsLFxuICAgIH1cblxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9maWxlU2VvRGF0YShwcm9maWxlKSB7XG5cbiAgICBpZiAoIV8uaXNQbGFpbk9iamVjdChwcm9maWxlKSkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvZmlsZSA9IF8uY2xvbmVEZWVwKHByb2ZpbGUpXG4gICAgfVxuXG4gICAgbGV0IHRpdGxlID0gW107XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gW107XG5cbiAgICB0aXRsZS5wdXNoKGAke2dldFVzZXJOYW1lKHByb2ZpbGUsICdmdWxsTmFtZScpIHx8ICcnfWApO1xuICAgIHRpdGxlLnB1c2goYCdzIFByb2ZpbGUgLSBDQ0FSLm15ICMxIENhciBTb2NpYWwgUGxhdGZvcm0gYCk7XG4gICAgdGl0bGUgPSBfLmNvbXBhY3QodGl0bGUpO1xuICAgIHRpdGxlID0gdGl0bGUuam9pbignICcpO1xuXG4gICAgZGVzY3JpcHRpb24ucHVzaChgJHtnZXRVc2VyTmFtZShwcm9maWxlLCAnZnVsbE5hbWUnKSB8fCAnJ31gKTtcbiAgICBkZXNjcmlwdGlvbi5wdXNoKGBpcyBvbiBDQ0FSICMxIENhciBTb2NpYWwgUGxhdGZvcm0uIENvbWUgYW5kIHNoYXJlIGNhciBpbmZvIHdpdGggJHtnZXRVc2VyTmFtZShwcm9maWxlLCAnZnVsbE5hbWUnKSB8fCAnJ30gYW5kIG90aGVycy4gQ0NBUiBjb25uZWN0cyBhbGwgY2FyIGxvdmVycyB0b2dldGhlci5gKVxuICAgIGRlc2NyaXB0aW9uID0gXy5jb21wYWN0KGRlc2NyaXB0aW9uKTtcbiAgICBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLmpvaW4oJyAnKTtcblxuXG5cbiAgICBsZXQgY2Fub25pY2FsID0gYCR7Y2hlY2tFbnZSZXR1cm5DbXNVcmwoY2xpZW50LmlvLmlvLnVyaSl9L3Byb2ZpbGUvJHtwcm9maWxlLnVzZXJ1cmxJZH1gO1xuICAgIGxldCBpbWFnZXMgPSBbe1xuICAgICAgICB1cmw6IHByb2ZpbGUuYXZhdGFyLFxuICAgICAgICBhbHQ6ICdDQ0FSIFVzZXIgUHJvZmlsZSBJbWFnZSdcbiAgICB9XTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgY2Fub25pY2FsLFxuICAgICAgICBpbWFnZXMsXG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENhckZyZWFrU2VvRGF0YShkYXRhKSB7XG5cbiAgICBpZiAoIV8uaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YSA9IF8uY2xvbmVEZWVwKGRhdGEpXG4gICAgfVxuXG4gICAgbGV0IHRpdGxlID0gW107XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gW107XG5cbiAgICB0aXRsZS5wdXNoKGAke3BhcnNlVGFnU3RyaW5nVG9QbGFpblN0cmluZyhkYXRhLnRpdGxlKSB8fCAnJ31gKTtcbiAgICB0aXRsZS5wdXNoKGB8YCk7XG4gICAgdGl0bGUucHVzaChgQ2FyRnJlYWtzYCk7XG4gICAgdGl0bGUucHVzaChgLSBDQ0FSLm15ICMxIENhciBTb2NpYWwgUGxhdGZvcm1gKTtcbiAgICB0aXRsZSA9IF8uY29tcGFjdCh0aXRsZSk7XG4gICAgdGl0bGUgPSB0aXRsZS5qb2luKCcgJyk7XG5cbiAgICBkZXNjcmlwdGlvbi5wdXNoKGAke3BhcnNlVGFnU3RyaW5nVG9QbGFpblN0cmluZyhkYXRhLmNvbnRlbnQpIHx8ICcnfWApO1xuICAgIGlmIChfLmlzUGxhaW5PYmplY3QoZGF0YS51c2VySWQpICYmICFfLmlzRW1wdHkoZGF0YS51c2VySWQpKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uLnB1c2goJ3wnKTtcbiAgICAgICAgZGVzY3JpcHRpb24ucHVzaChgUG9zdGVkIEJ5ICR7Z2V0VXNlck5hbWUoZGF0YS51c2VySWQsICdmdWxsTmFtZScpIHx8ICcnfWApXG4gICAgfVxuICAgIGRlc2NyaXB0aW9uID0gXy5jb21wYWN0KGRlc2NyaXB0aW9uKTtcbiAgICBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLmpvaW4oJyAnKTtcblxuXG5cbiAgICBsZXQgY2Fub25pY2FsID0gYCR7Y2hlY2tFbnZSZXR1cm5DbXNVcmwoY2xpZW50LmlvLmlvLnVyaSl9L2Nhci1mcmVha3MvJHtkYXRhLl9pZH1gO1xuICAgIGxldCBpbWFnZXMgPSBbe1xuICAgICAgICB1cmw6IF8uZ2V0KGRhdGEsICdtZWRpYUxpc3RbMF0udXJsJykgfHwgJycsXG4gICAgICAgIGFsdDogJ0NDQVIgQ2FyRnJlYWsgSW1hZ2UnXG4gICAgfV07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGNhbm9uaWNhbCxcbiAgICAgICAgaW1hZ2VzLFxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNvY2lhbEJvYXJkU2VvRGF0YShkYXRhKSB7XG5cbiAgICBpZiAoIV8uaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YSA9IF8uY2xvbmVEZWVwKGRhdGEpXG4gICAgfVxuXG4gICAgbGV0IHRpdGxlID0gW107XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gW107XG5cbiAgICB0aXRsZS5wdXNoKGAke3BhcnNlVGFnU3RyaW5nVG9QbGFpblN0cmluZyhkYXRhLnRpdGxlKSB8fCAnJ31gKTtcbiAgICB0aXRsZS5wdXNoKGB8YCk7XG4gICAgdGl0bGUucHVzaChgU29jaWFsIEJvYXJkYCk7XG4gICAgdGl0bGUucHVzaChgLSBDQ0FSLm15ICMxIENhciBTb2NpYWwgUGxhdGZvcm1gKTtcbiAgICB0aXRsZSA9IF8uY29tcGFjdCh0aXRsZSk7XG4gICAgdGl0bGUgPSB0aXRsZS5qb2luKCcgJyk7XG5cbiAgICBkZXNjcmlwdGlvbi5wdXNoKGAke3BhcnNlVGFnU3RyaW5nVG9QbGFpblN0cmluZyhkYXRhLmNvbnRlbnQpIHx8ICcnfWApO1xuICAgIGlmIChfLmlzUGxhaW5PYmplY3QoZGF0YS51c2VySWQpICYmICFfLmlzRW1wdHkoZGF0YS51c2VySWQpKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uLnB1c2goJ3wnKTtcbiAgICAgICAgZGVzY3JpcHRpb24ucHVzaChgUG9zdGVkIEJ5ICR7Z2V0VXNlck5hbWUoZGF0YS51c2VySWQsICdmdWxsTmFtZScpIHx8ICcnfWApXG4gICAgfVxuICAgIGRlc2NyaXB0aW9uID0gXy5jb21wYWN0KGRlc2NyaXB0aW9uKTtcbiAgICBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLmpvaW4oJyAnKTtcblxuXG5cbiAgICBsZXQgY2Fub25pY2FsID0gYCR7Y2hlY2tFbnZSZXR1cm5DbXNVcmwoY2xpZW50LmlvLmlvLnVyaSl9L3NvY2lhbC1ib2FyZC8ke2RhdGEuX2lkfWA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGNhbm9uaWNhbCxcbiAgICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENsdWJTZW9EYXRhKGRhdGEpIHtcblxuICAgIGlmICghXy5pc1BsYWluT2JqZWN0KGRhdGEpKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhID0gXy5jbG9uZURlZXAoZGF0YSlcbiAgICB9XG5cbiAgICBsZXQgdGl0bGUgPSBbXTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBbXTtcblxuICAgIHRpdGxlLnB1c2goYCR7ZGF0YS5jbHViTmFtZSB8fCAnJ31gKTtcbiAgICB0aXRsZS5wdXNoKGB8YCk7XG4gICAgdGl0bGUucHVzaChgU29jaWFsIENsdWJgKTtcbiAgICB0aXRsZS5wdXNoKGAtIENDQVIubXkgIzEgQ2FyIFNvY2lhbCBQbGF0Zm9ybWApO1xuICAgIHRpdGxlID0gXy5jb21wYWN0KHRpdGxlKTtcbiAgICB0aXRsZSA9IHRpdGxlLmpvaW4oJyAnKTtcblxuICAgIGRlc2NyaXB0aW9uLnB1c2goYCR7ZGF0YS5jbHViQmlvIHx8ICcnfWApO1xuICAgIGlmIChfLmlzUGxhaW5PYmplY3QoZGF0YS51c2VySWQpICYmICFfLmlzRW1wdHkoZGF0YS51c2VySWQpKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uLnB1c2goJ3wnKTtcbiAgICAgICAgZGVzY3JpcHRpb24ucHVzaChgQ3JlYXRlZCBCeSAke2dldFVzZXJOYW1lKGRhdGEudXNlcklkLCAnZnVsbE5hbWUnKSB8fCAnJ31gKVxuICAgIH1cbiAgICBkZXNjcmlwdGlvbiA9IF8uY29tcGFjdChkZXNjcmlwdGlvbik7XG4gICAgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi5qb2luKCcgJyk7XG5cblxuXG4gICAgbGV0IGNhbm9uaWNhbCA9IGAke2NoZWNrRW52UmV0dXJuQ21zVXJsKGNsaWVudC5pby5pby51cmkpfS9zb2NpYWwtY2x1Yi8ke2RhdGEuX2lkfWA7XG4gICAgbGV0IGltYWdlcyA9IFt7XG4gICAgICAgIHVybDogXy5nZXQoZGF0YSwgJ2NsdWJBdmF0YXInKSB8fCAnJyxcbiAgICAgICAgYWx0OiAnQ0NBUiBDYXJGcmVhayBJbWFnZSdcbiAgICB9XTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgY2Fub25pY2FsLFxuICAgICAgICBpbWFnZXMsXG4gICAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxOZXdDYXJTZW9EYXRhKGRhdGEpIHtcblxuICAgIGlmICghXy5pc1BsYWluT2JqZWN0KGRhdGEpKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhID0gXy5jbG9uZURlZXAoZGF0YSlcbiAgICB9XG5cbiAgICBsZXQgdGl0bGUgPSBbXTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBbXTtcblxuICAgIHRpdGxlLnB1c2goYCR7Z2V0Q2FyQnJhbmQoZGF0YS5tYWtlKS52YWx1ZSB8fCAnJ31gKTtcbiAgICB0aXRsZS5wdXNoKGB8YCk7XG4gICAgdGl0bGUucHVzaChgJHtfLmNhcGl0YWxpemUoZGF0YS5tb2RlbCB8fCAnJyl9YCk7XG4gICAgdGl0bGUucHVzaChgfGApO1xuICAgIHRpdGxlLnB1c2goYEFsbCBOZXcgQ2FyIC0gQ0NBUi5teSAjMSBDYXIgU29jaWFsIFBsYXRmb3JtYCk7XG4gICAgdGl0bGUgPSBfLmNvbXBhY3QodGl0bGUpO1xuICAgIHRpdGxlID0gdGl0bGUuam9pbignICcpO1xuXG4gICAgZGVzY3JpcHRpb24ucHVzaChgVmlldyAke2dldENhckJyYW5kKGRhdGEubWFrZSkudmFsdWUgfHwgJyd9ICR7Xy5jYXBpdGFsaXplKGRhdGEubW9kZWwgfHwgJycpfSBBbGwgTmV3IENhciBhdCBDQ0FSLm15IG5vdyAtIENDQVIubXkgIzEgQ2FyIFNvY2lhbCBQbGF0Zm9ybSAgYCk7XG4gICAgZGVzY3JpcHRpb24gPSBfLmNvbXBhY3QoZGVzY3JpcHRpb24pO1xuICAgIGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24uam9pbignICcpO1xuXG5cblxuICAgIGxldCBjYW5vbmljYWwgPSBgJHtjaGVja0VudlJldHVybkNtc1VybChjbGllbnQuaW8uaW8udXJpKX0vbmV3Y2FyL2RldGFpbHMvJHtkYXRhLm1ha2V9LyR7ZGF0YS5tb2RlbH1gO1xuICAgIGxldCBpbWFnZXMgPSBbe1xuICAgICAgICB1cmw6IF8uZ2V0KGRhdGEsICd1cmknKSB8fCAnJyxcbiAgICAgICAgYWx0OiBgQ0NBUiAke2dldENhckJyYW5kKGRhdGEubWFrZSkudmFsdWUgfHwgJyd9ICR7Xy5jYXBpdGFsaXplKGRhdGEubW9kZWwgfHwgJycpfSBJbWFnZWBcbiAgICB9XTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgY2Fub25pY2FsLFxuICAgICAgICBpbWFnZXMsXG4gICAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaXZlU2VvRGF0YShkYXRhKSB7XG5cbiAgICBjb25zdCBhcGlEb21haW4gPSBnZXRTdHJlYW1VcmwoY2xpZW50LmlvLmlvLnVyaSlcblxuICAgIGlmICghXy5pc1BsYWluT2JqZWN0KGRhdGEpKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhID0gXy5jbG9uZURlZXAoZGF0YSlcbiAgICB9XG5cbiAgICBsZXQgdGl0bGUgPSBbXTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBbXTtcblxuICAgIHRpdGxlLnB1c2goYENDQVIgTElWRWApO1xuICAgIHRpdGxlLnB1c2goYHxgKTtcbiAgICB0aXRsZS5wdXNoKGAke18uY2FwaXRhbGl6ZShkYXRhLnVzZXIgfHwgJ0NjYXIgVXNlcicpfWApO1xuICAgIHRpdGxlLnB1c2goYC0gQ0NBUi5teSAjMSBDYXIgU29jaWFsIFBsYXRmb3JtYCk7XG4gICAgdGl0bGUgPSBfLmNvbXBhY3QodGl0bGUpO1xuICAgIHRpdGxlID0gdGl0bGUuam9pbignICcpO1xuXG4gICAgZGVzY3JpcHRpb24ucHVzaChkYXRhLnRpdGxlKTtcbiAgICBkZXNjcmlwdGlvbi5wdXNoKGBWaWV3IENhciBMaXZlIFN0cmVhbWluZyBhdCBDQ0FSLm15IG5vdyAtIENDQVIubXkgIzEgQ2FyIFNvY2lhbCBQbGF0Zm9ybSAgYCk7XG4gICAgZGVzY3JpcHRpb24gPSBfLmNvbXBhY3QoZGVzY3JpcHRpb24pO1xuICAgIGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24uam9pbignICcpO1xuXG5cblxuICAgIGxldCBjYW5vbmljYWwgPSBgJHtjaGVja0VudlJldHVybkNtc1VybChjbGllbnQuaW8uaW8udXJpKX0vbGl2ZS8ke2RhdGEuaWR9YDtcbiAgICBsZXQgaW1hZ2VzID0gW3tcbiAgICAgICAgdXJsOiBgJHthcGlEb21haW59ZGVhbGVyVmlkZW9UaHVtYm5haWxzLyR7ZGF0YS5pZH0ucG5nYCxcbiAgICAgICAgYWx0OiBgTGl2ZSBTdHJlYW1pbmcgSW1hZ2VgXG4gICAgfV07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGNhbm9uaWNhbCxcbiAgICAgICAgaW1hZ2VzLFxuICAgIH1cblxufSIsIlxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBmaW5kSW5kZXhlc09mU3RyaW5nLCBnZXRPYmplY3RJZCwgY2hlY2tPYmplY3RJZCwgZ2V0VXNlck5hbWUgfSBmcm9tICcuLi8uLi9jb21tb24tZnVuY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgY2hhdFJlc3RyaWN0VGltZSA9IDIwMDA7XG5leHBvcnQgY29uc3QgY2FyRnJlYWtHbG9iYWxTZWFyY2ggPSBbJ2NhckZyZWFrJywgJ3NvY2lhbEJvYXJkJywgJ2NsdWInLCAnZGVhbGVyJywgJ3Blb3BsZSddO1xuZXhwb3J0IGNvbnN0IHRhZ1ByZWZpeCA9ICdAJztcbmV4cG9ydCBjb25zdCBoYXNoVGFnUHJlZml4ID0gJyMnO1xuZXhwb3J0IGNvbnN0IHRhZ1ByZWZpeEhhc2hWYWx1ZSA9ICdAfiN9OnN0YXJ0JztcbmV4cG9ydCBjb25zdCBoYXNoVGFnUHJlZml4SGFzaFZhbHVlID0gJyNeOiElc3RhcnQnO1xuZXhwb3J0IGNvbnN0IHRhZ1N1ZmZpeEhhc2hWYWx1ZSA9ICdAXkB9fWVuZCc7XG5leHBvcnQgY29uc3QgaGFzaFRhZ1N1ZmZpeEhhc2hWYWx1ZSA9ICcjPl59fmVuZCc7XG5leHBvcnQgY29uc3Qgc2VwZXJhdG9ySGFzaFZhbHVlID0gJ108JXNlcGVyYXRvcj4hO18nO1xuZXhwb3J0IGNvbnN0IGNsdWJQcm9maWxlVmlld1R5cGVzID0gWydhZG1pbicsICdtZW1iZXInLCAncGVuZGluZycsICdub24tbWVtYmVyJ107XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVGFnU3RyaW5nVG9BcnJheSh0ZXh0KSB7XG4gICAgaWYgKHRleHQpIHtcbiAgICAgICAgbGV0IGZpbmFsVGV4dCA9IFtdO1xuICAgICAgICBsZXQgdGFnVGV4dCA9IHRleHQuc3BsaXQodGFnU3VmZml4SGFzaFZhbHVlKTtcbiAgICAgICAgdGFnVGV4dCA9IF8uZm9yRWFjaCh0YWdUZXh0LCBmdW5jdGlvbiAoY2hhcikge1xuXG4gICAgICAgICAgICBpZiAoY2hhci5pbmNsdWRlcyh0YWdQcmVmaXhIYXNoVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgY2hhciA9IGNoYXIuc3BsaXQodGFnUHJlZml4SGFzaFZhbHVlKTtcbiAgICAgICAgICAgICAgICAvL3NwbGl0IHByZWZpeCAsIHRoZSBwcmV2aW91cyAxIHN1cmUgaXMgb3RoZXIgdGV4dFxuICAgICAgICAgICAgICAgIGlmIChjaGFyWzBdICE9IG51bGwgJiYgY2hhclswXSAhPSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgICAgICAvL0NoZWNrIGlmIG90aGVyIHRleHQgZ290IGhhc2h0YWdcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXJbMF0uaW5jbHVkZXMoaGFzaFRhZ1ByZWZpeEhhc2hWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoYXNoVGFnQXJyID0gcGFyc2VIYXNoVGFnU3RyaW5nVG9BcnJheShjaGFyWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsVGV4dCA9IGZpbmFsVGV4dC5jb25jYXQoaGFzaFRhZ0Fycik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFRleHQucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub3JtYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2hhclswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vc3BsaXQgcHJlZml4ICwgdGhlIGFmdGVyIDEgc3VyZSBpcyB0YWcgdGV4dFxuICAgICAgICAgICAgICAgIGlmIChjaGFyWzFdICE9IG51bGwgJiYgY2hhclsxXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhclsxXSA9IGNoYXJbMV0uc3BsaXQoc2VwZXJhdG9ySGFzaFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgZmluYWxUZXh0LnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RhZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNoYXJbMV1bMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGNoYXJbMV1bMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgaGFzaFRhZ0FyciA9IHBhcnNlSGFzaFRhZ1N0cmluZ1RvQXJyYXkoY2hhcik7XG4gICAgICAgICAgICAgICAgZmluYWxUZXh0ID0gZmluYWxUZXh0LmNvbmNhdChoYXNoVGFnQXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBmaW5hbFRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZUhhc2hUYWdTdHJpbmdUb0FycmF5KHRleHQpIHtcbiAgICBpZiAodGV4dCkge1xuICAgICAgICBsZXQgZmluYWxUZXh0ID0gW107XG4gICAgICAgIGxldCB0YWdUZXh0ID0gdGV4dC5zcGxpdChoYXNoVGFnU3VmZml4SGFzaFZhbHVlKTtcbiAgICAgICAgdGFnVGV4dCA9IF8uZm9yRWFjaCh0YWdUZXh0LCBmdW5jdGlvbiAoY2hhcikge1xuXG4gICAgICAgICAgICBpZiAoY2hhci5pbmNsdWRlcyhoYXNoVGFnUHJlZml4SGFzaFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGNoYXIgPSBjaGFyLnNwbGl0KGhhc2hUYWdQcmVmaXhIYXNoVmFsdWUpO1xuICAgICAgICAgICAgICAgIC8vc3BsaXQgcHJlZml4ICwgdGhlIHByZXZpb3VzIDEgc3VyZSBpcyBvdGhlciB0ZXh0XG4gICAgICAgICAgICAgICAgaWYgKGNoYXJbMF0gIT0gbnVsbCAmJiBjaGFyWzBdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmaW5hbFRleHQucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9ybWFsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2hhclswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL3NwbGl0IHByZWZpeCAsIHRoZSBhZnRlciAxIHN1cmUgaXMgdGFnIHRleHRcbiAgICAgICAgICAgICAgICBpZiAoY2hhclsxXSAhPSBudWxsICYmIGNoYXJbMV0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJbMV0gPSBjaGFyWzFdLnNwbGl0KHNlcGVyYXRvckhhc2hWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsVGV4dC5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoYXNoVGFnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2hhclsxXVswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogY2hhclsxXVsxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgZmluYWxUZXh0LnB1c2goXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub3JtYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNoYXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gZmluYWxUZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYWdTdHJpbmcodGV4dCwgaWQsIHByZWZpeCkge1xuICAgIGlmICh0ZXh0ICYmIGlkKSB7XG4gICAgICAgIGxldCBjb2RlUHJlZml4ID0gcHJlZml4ID09ICcjJyA/IGhhc2hUYWdQcmVmaXhIYXNoVmFsdWUgOiB0YWdQcmVmaXhIYXNoVmFsdWU7XG4gICAgICAgIGxldCBjb2RlU3VmZml4ID0gcHJlZml4ID09ICcjJyA/IGhhc2hUYWdTdWZmaXhIYXNoVmFsdWUgOiB0YWdTdWZmaXhIYXNoVmFsdWU7XG4gICAgICAgIHJldHVybiBgJHtjb2RlUHJlZml4fSR7dGV4dCB8fCAnJ30ke3NlcGVyYXRvckhhc2hWYWx1ZX0ke2lkIHx8ICcnfSR7Y29kZVN1ZmZpeH1gO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVG9UYWdTdHJpbmcodGV4dCwgYWxpYXNDb2RlKSB7XG5cbiAgICBpZiAodGV4dCAmJiBfLmlzQXJyYXkoYWxpYXNDb2RlKSAmJiAhXy5pc0VtcHR5KGFsaWFzQ29kZSkpIHtcbiAgICAgICAgbGV0IGZpbmFsVGV4dCA9IHRleHQ7XG4gICAgICAgIGxldCBzb3J0ZWRBbGlhc0NvZGUgPSBfLnJldmVyc2UoXy5zb3J0QnkoYWxpYXNDb2RlLCBbJ3Bvc2l0aW9uJ10pKVxuICAgICAgICBfLmZvckVhY2goc29ydGVkQWxpYXNDb2RlLCBmdW5jdGlvbiAoY29kZSkge1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBjb2RlLm5hbWU7XG4gICAgICAgICAgICBsZXQgaW5kZXhlcyA9IGZpbmRJbmRleGVzT2ZTdHJpbmcoZmluYWxUZXh0LCBuYW1lKTtcblxuICAgICAgICAgICAgaWYgKF8uaW5jbHVkZXMoaW5kZXhlcywgY29kZS5wb3NpdGlvbikpIHtcbiAgICAgICAgICAgICAgICBsZXQgcHJlVGV4dCA9IGZpbmFsVGV4dC5zdWJzdHIoMCwgY29kZS5wb3NpdGlvbikgfHwgJyc7XG4gICAgICAgICAgICAgICAgbGV0IHBvc3RUZXh0ID0gZmluYWxUZXh0LnN1YnN0cihjb2RlLnBvc2l0aW9uICsgbmFtZS5sZW5ndGgpIHx8ICcnO1xuICAgICAgICAgICAgICAgIGZpbmFsVGV4dCA9IHByZVRleHQgKyBjb2RlLnZhbHVlICsgcG9zdFRleHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGZpbmFsVGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGlhc0NvZGVGcm9tVGV4dCh0ZXh0KSB7XG5cbiAgICBpZiAodGV4dCkge1xuXG4gICAgICAgIGxldCBhbGlhc0NvZGUgPSBbXTtcbiAgICAgICAgbGV0IHN0cnVjdGVkVGV4dCA9ICcnO1xuICAgICAgICBsZXQgdGV4dEFyciA9IHBhcnNlVGFnU3RyaW5nVG9BcnJheSh0ZXh0KTtcbiAgICAgICAgdGV4dEFyciA9IF8ubWFwKHRleHRBcnIsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS50eXBlICE9ICd0YWcnICYmIGl0ZW0udHlwZSAhPSAnaGFzaFRhZycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbS51aWQgPSBgJHt2NCgpfWA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN0cnVjdGVkVGV4dCA9IF8uY29tcGFjdChfLm1hcCh0ZXh0QXJyLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSAhPSAndGFnJyAmJiBpdGVtLnR5cGUgIT0gJ2hhc2hUYWcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0udmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtpdGVtLnVpZH0ke2l0ZW0udmFsdWV9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHN0cnVjdGVkVGV4dCA9IHN0cnVjdGVkVGV4dC5qb2luKCcnKTtcblxuXG4gICAgICAgIF8uZm9yRWFjaCh0ZXh0QXJyLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSA9PSAndGFnJyB8fCBpdGVtLnR5cGUgPT0gJ2hhc2hUYWcnKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gc3RydWN0ZWRUZXh0LmluZGV4T2YoaXRlbS51aWQpO1xuICAgICAgICAgICAgICAgIHN0cnVjdGVkVGV4dCA9IHN0cnVjdGVkVGV4dC5yZXBsYWNlKGl0ZW0udWlkLCAnJyk7XG4gICAgICAgICAgICAgICAgYWxpYXNDb2RlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBgJHtpdGVtLnR5cGUgPT0gJ3RhZycgPyB0YWdQcmVmaXhIYXNoVmFsdWUgOiBoYXNoVGFnUHJlZml4SGFzaFZhbHVlfSR7aXRlbS52YWx1ZSB8fCAnJ30ke3NlcGVyYXRvckhhc2hWYWx1ZX0ke2l0ZW0uaWQgfHwgJyd9JHtpdGVtLnR5cGUgPT0gJ3RhZycgPyB0YWdTdWZmaXhIYXNoVmFsdWUgOiBoYXNoVGFnU3VmZml4SGFzaFZhbHVlfWAsXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeDogaXRlbS50eXBlID09ICd0YWcnID8gdGFnUHJlZml4IDogaGFzaFRhZ1ByZWZpeCxcbiAgICAgICAgICAgICAgICAgICAgZW5kUG9zaXRpb246IHBvc2l0aW9uICsgaXRlbS52YWx1ZS5sZW5ndGggLSAxLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gYWxpYXNDb2RlO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVGFnU3RyaW5nVG9QbGFpblN0cmluZyh0ZXh0KSB7XG5cbiAgICBpZiAodGV4dCkge1xuICAgICAgICBsZXQgdGV4dEFyciA9IHBhcnNlVGFnU3RyaW5nVG9BcnJheSh0ZXh0KTtcbiAgICAgICAgdGV4dEFyciA9IF8ubWFwKHRleHRBcnIsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS52YWx1ZTtcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gdGV4dEFyci5qb2luKCcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnROYW1lU3RyaW5nKHVzZXJzLCBhdXRoVXNlcikge1xuICAgIGlmIChfLmlzQXJyYXkodXNlcnMpICYmICFfLmlzRW1wdHkodXNlcnMpKSB7XG5cbiAgICAgICAgbGV0IHRleHQgPSAnJztcbiAgICAgICAgbGV0IGNvdW50ID0gMztcbiAgICAgICAgaWYgKGdldE9iamVjdElkKGF1dGhVc2VyKSkge1xuICAgICAgICAgICAgdXNlcnMgPSBfLmZpbHRlcih1c2VycywgZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hlY2tPYmplY3RJZCh1c2VyLCBnZXRPYmplY3RJZChhdXRoVXNlcikpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIF8uZm9yRWFjaCh1c2VycywgZnVuY3Rpb24gKHVzZXIsIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggKyAxID09IHVzZXJzLmxlbmd0aCAmJiB1c2Vycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgdGV4dCArPSBgIGFuZCAke2dldFVzZXJOYW1lKHVzZXIsICdmdWxsTmFtZScpfWBcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbmRleCArIDEgPiBjb3VudCkge1xuICAgICAgICAgICAgICAgIHRleHQgKz0gYCBhbmQgJHt1c2Vycy5sZW5ndGggLSBjb3VudH0gb3RoZXJzYFxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IGAke2dldFVzZXJOYW1lKHVzZXIsICdmdWxsTmFtZScpfWBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgIHRleHQgKz0gYCwgJHtnZXRVc2VyTmFtZSh1c2VyLCAnZnVsbE5hbWUnKX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdDY2FyIFVzZXInO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Vmlld1R5cGUoam9pbikge1xuXG4gICAgaWYgKF8uaXNQbGFpbk9iamVjdChqb2luKSAmJiAhXy5pc0VtcHR5KGpvaW4pKSB7XG4gICAgICAgIGlmIChfLmdldChqb2luLCBbJ3N0YXR1cyddKSA9PSAnYXBwcm92ZWQnICYmIF8uZ2V0KGpvaW4sIFsncm9sZSddKSA9PSAnYWRtaW4nKSB7XG4gICAgICAgICAgICByZXR1cm4gY2x1YlByb2ZpbGVWaWV3VHlwZXNbMF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5nZXQoam9pbiwgWydzdGF0dXMnXSkgPT0gJ2FwcHJvdmVkJyAmJiBfLmdldChqb2luLCBbJ3JvbGUnXSkgPT0gJ21lbWJlcicpIHtcbiAgICAgICAgICAgIHJldHVybiBjbHViUHJvZmlsZVZpZXdUeXBlc1sxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLmdldChqb2luLCBbJ3N0YXR1cyddKSA9PSAncGVuZGluZycgJiYgXy5nZXQoam9pbiwgWydyb2xlJ10pID09ICdtZW1iZXInKSB7XG4gICAgICAgICAgICByZXR1cm4gY2x1YlByb2ZpbGVWaWV3VHlwZXNbMl07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2x1YlByb2ZpbGVWaWV3VHlwZXNbM107XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNsdWJQcm9maWxlVmlld1R5cGVzWzNdO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVWaWV3VHlwZShkYXRhKSB7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGNsdWJQcm9maWxlVmlld1R5cGVzWzNdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBfLmZpbmQoY2x1YlByb2ZpbGVWaWV3VHlwZXMsIGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZSA9PSBkYXRhO1xuICAgICAgICB9KSB8fCBjbHViUHJvZmlsZVZpZXdUeXBlc1szXTtcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24sIGFuaW1hdGVkIH0gZnJvbSBcInJlYWN0LXNwcmluZ1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVJvdXRlclwiO1xuXG5cblxuZXhwb3J0IGNvbnN0IFBhZ2VUcmFuc2l0aW9uID0gKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHRyYW5zaXRpb25zID0gdXNlVHJhbnNpdGlvbihyb3V0ZXIsIHJvdXRlciA9PiByb3V0ZXIucGF0aG5hbWUsIHtcbiAgICBmcm9tOiB7IG9wYWNpdHk6IDAgfSxcbiAgICBlbnRlcjogeyBvcGFjaXR5OiAxIH0sXG4gICAgbGVhdmU6IHtcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICB0b3A6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBvcGFjaXR5OiAwXG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7dHJhbnNpdGlvbnMubWFwKCh7IGl0ZW0sIHByb3BzOiBzdHlsZSwga2V5IH0pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UGFnZSBrZXk9e2tleX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IFBhZ2UgPSBzdHlsZWQoYW5pbWF0ZWQubWFpbilgXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG5gO1xuIiwiXG5cbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBpc1ZhbGlkTnVtYmVyLCB0b0NhbWVsQ2FzZSwgbm90RW1wdHlMZW5ndGgsIGdldFRvcEl0ZW1zICB9IGZyb20gJy4uLy4uL2NvbW1vbi1mdW5jdGlvbic7XG5cblxuZXhwb3J0IGNvbnN0IHRlc3RTdHJlYW1VcmwgPSAnaHR0cHM6Ly9zdHJlYW0tdWF0Mi5jY2FyLm15JztcbmV4cG9ydCBjb25zdCBsaXZlU3RyZWFtVXJsID0gJ2h0dHBzOi8vc3RyZWFtLmNjYXIubXknO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyZWFtVXJsKHVybCl7XG5cbiAgICBsZXQgc3RyZWFtID0gdGVzdFN0cmVhbVVybDtcbiAgICBpZiAodXJsPT09J2h0dHA6Ly9sb2NhbGhvc3Q6MzAzMC8nKXtzdHJlYW0gPSAnaHR0cDovL2xvY2FsaG9zdDozMDMwJ31cbiAgICBlbHNlIGlmICh1cmw9PT0naHR0cHM6Ly91YXQyLWFwaS5jY2FyLm15Lycpe3N0cmVhbSA9IHRlc3RTdHJlYW1Vcmx9XG4gICAgZWxzZSBpZiAodXJsPT09J2h0dHBzOi8vYXBpLmNjYXIubXkvJyl7c3RyZWFtID0gbGl2ZVN0cmVhbVVybH1cbiAgICBlbHNlIGlmICh1cmw9PT0naHR0cHM6Ly9wcmVwcm9kLWFwaS5jY2FyLm15Lycpe3N0cmVhbSA9IHRlc3RTdHJlYW1Vcmx9XG4gICAgZWxzZSAge3N0cmVhbSA9ICdodHRwOi8vbG9jYWxob3N0OjMwMzAnfSAvL2RlZmF1bHQgdGVzdGluZ1xuICAgIFxuICAgIC8vIHJldHVybiAnaHR0cDovLzE5Mi4xNjguMC4xOTE6NzA3MC8nO1xuICAgIC8vIHJldHVybiBcImh0dHBzOi8vc3RyZWFtLXVhdDIuY2Nhci5teVwiO1xuICAgIC8vIHJldHVybiAnaHR0cDovL2xvY2FsaG9zdDo3MDcwLyc7XG4gICAgLy8gcmV0dXJuICdodHRwOi8vMTkyLjE2OC4wLjE0OTozMDQxLyc7XG4gICAgcmV0dXJuIHN0cmVhbTtcbn1cblxuXG5jb25zdCBnaWZ0cyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdrb3BpLWljZScsXG4gICAgICAgIHByaWNlOiAxMCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ3doaXRlLXJpY2UnLFxuICAgICAgICBwcmljZTogMTAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdyb3RpLWNhbmFpJyxcbiAgICAgICAgcHJpY2U6IDIwLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnbmFzaS1sZW1haycsXG4gICAgICAgIHByaWNlOiAyMCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ25hc2kta2FuZGFyJyxcbiAgICAgICAgcHJpY2U6IDUwLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAncmFtbHktYnVyZ2VyJyxcbiAgICAgICAgcHJpY2U6IDUwLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnZGltc3VtJyxcbiAgICAgICAgcHJpY2U6IDEwMCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ2JpcnlhbmknLFxuICAgICAgICBwcmljZTogMTAwLFxuICAgIH0sXG5dO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRSZWFjdGlvbnMgPSBbJ2xpa2UnLCAnaGVhcnQnLCAnbGF1Z2hpbmcnLCAnY3J5aW5nJywgJ2FuZ3J5JywgJ3NsZWVwaW5nJywgJ3JvbGxpbmdFeWUnXTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0UmVhY3Rpb25zQW5pbWF0aW9uID0gWydub25lJywgJ2xlYXN0JywgJ2xlc3MnLCAnbm9ybWFsJywgJ21vcmUnLCAnbW9zdCddO1xuXG5cbmxldCB0ZW1wID0ge307XG5fLmZvckVhY2goZGVmYXVsdFJlYWN0aW9ucywgZnVuY3Rpb24gKHJlYWN0KSB7XG4gICAgdGVtcFtgJHtyZWFjdH1HaWZgXSA9IGAvYXNzZXRzL2xpdmUvJHtyZWFjdH0uZ2lmYDtcbn0pXG5cbmV4cG9ydCBjb25zdCByZWFjdGlvbkdpZiA9IHRlbXA7XG5cblxudGVtcCA9IFtdO1xudGVtcCA9IF8ubWFwKGdpZnRzLCBmdW5jdGlvbiAoZ2lmdCkge1xuICAgIGdpZnQuaWNvbiA9IGAvYXNzZXRzL2xpdmUvJHtnaWZ0Lm5hbWV9LnBuZ2A7XG4gICAgZ2lmdC5uYW1lID0gdG9DYW1lbENhc2UoZ2lmdC5uYW1lLCAnLScpO1xuICAgIHJldHVybiBnaWZ0O1xufSlcbmV4cG9ydCBjb25zdCBkZWZhdWx0R2lmdHMgPSB0ZW1wO1xuXG5leHBvcnQgY29uc3QgbGl2ZUljb24gPSAnL2Fzc2V0cy9saXZlL2xpdmUucG5nJztcbmV4cG9ydCBjb25zdCBzdXBwb3J0SWNvbiA9ICcvYXNzZXRzL2xpdmUvc3VwcG9ydC5wbmcnO1xuZXhwb3J0IGNvbnN0IGxpa2VJY29uID0gJy9hc3NldHMvbGl2ZS9saWtlLnBuZyc7XG5leHBvcnQgY29uc3QgY29tbWVudEljb24gPSAnL2Fzc2V0cy9saXZlL2NvbW1lbnQucG5nJztcbmV4cG9ydCBjb25zdCBzaGFyZUljb24gPSAnL2Fzc2V0cy9saXZlL3NoYXJlLnBuZyc7XG5leHBvcnQgY29uc3QgZ2lmdEdpZiA9ICcvYXNzZXRzL2xpdmUvZ2lmdC5naWYnO1xuZXhwb3J0IGNvbnN0IGNjb2luSWNvbiA9ICcvYXNzZXRzL2xpdmUvY2NvaW4ucG5nJztcblxuXG5leHBvcnQgY29uc3QgcmVhY3Rpb25BbmltYXRpb25UcmFuc2l0aW9ucyA9IGdlbmVyYXRlUmFuZG9tVHJhbnNpdGlvbigzMCwgNDAwLCA0LCA0KTtcblxuZXhwb3J0IGNvbnN0IExJVkVfVEVYVF9URU1QTEFURSA9IHtcbiAgICAnY2xpZW50LWpvaW5lZCc6ICdoYXMgam9pbmVkJyxcbiAgICAnY2xpZW50LWxlZnQnOiAnaGFzIGxlZnQnLFxuICAgICdjbGllbnQtdGV4dCc6ICcnLCBcbiAgICAnZGVhbGVyLXRleHQnOiAnJyxcbiAgICBcImFub255bW91cy1qb2luZWRcIjogJ2hhcyBqb2luZWQnLFxuICAgIFwiYW5vbnltb3VzLWxlZnRcIjonaGFzIGxlZnQnLFxuICB9XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbVRyYW5zaXRpb24obWF4VHJhbnNpdGlvblgsIG1heFRyYW5zaXRpb25ZLCBlYWNoVHJhbnNpdGlvbkxlbmd0aCwgZ3JvdXApIHtcblxuICAgIGxldCByZWFjdGlvbkFuaW1hdGlvblRyYW5zaXRpb25zVGVtcCA9IFtdO1xuICAgIGxldCBlYWNoVHJhbnNpdGlvbiA9IFtdO1xuXG4gICAgaWYgKCFpc1ZhbGlkTnVtYmVyKG1heFRyYW5zaXRpb25YKSkge1xuICAgICAgICBtYXhUcmFuc2l0aW9uWCA9IDMwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1heFRyYW5zaXRpb25YID0gcGFyc2VJbnQobWF4VHJhbnNpdGlvblgpO1xuICAgIH1cblxuICAgIGlmICghaXNWYWxpZE51bWJlcihtYXhUcmFuc2l0aW9uWSkpIHtcbiAgICAgICAgbWF4VHJhbnNpdGlvblkgPSA0MDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWF4VHJhbnNpdGlvblkgPSBwYXJzZUludChtYXhUcmFuc2l0aW9uWSk7XG4gICAgfVxuXG4gICAgaWYgKCFpc1ZhbGlkTnVtYmVyKGVhY2hUcmFuc2l0aW9uTGVuZ3RoKSB8fCBwYXJzZUludChlYWNoVHJhbnNpdGlvbkxlbmd0aCkgPCA0KSB7XG4gICAgICAgIGVhY2hUcmFuc2l0aW9uTGVuZ3RoID0gNDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlYWNoVHJhbnNpdGlvbkxlbmd0aCA9IHBhcnNlSW50KGVhY2hUcmFuc2l0aW9uTGVuZ3RoKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzVmFsaWROdW1iZXIoZ3JvdXApIHx8IHBhcnNlSW50KGdyb3VwKSA8IDApIHtcbiAgICAgICAgZ3JvdXAgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGdyb3VwID0gcGFyc2VJbnQoZ3JvdXApO1xuICAgIH1cblxuICAgIF8uZm9yRWFjaChfLnJhbmdlKGdyb3VwKSwgZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIGVhY2hUcmFuc2l0aW9uLnB1c2goeyB4OiAwLCB5OiAwIH0pO1xuICAgICAgICBfLmZvckVhY2goXy5yYW5nZShlYWNoVHJhbnNpdGlvbkxlbmd0aCAtIDIpLCBmdW5jdGlvbiAoaW5kZXgxKSB7XG4gICAgICAgICAgICBlYWNoVHJhbnNpdGlvbi5wdXNoKHsgeDogXy5yYW5kb20oLW1heFRyYW5zaXRpb25YLCBtYXhUcmFuc2l0aW9uWCwgZmFsc2UpLCB5OiAtKG1heFRyYW5zaXRpb25ZIC8gKGVhY2hUcmFuc2l0aW9uTGVuZ3RoIC0gaW5kZXgxKSkgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIGVhY2hUcmFuc2l0aW9uLnB1c2goeyB4OiAwLCB5OiAtbWF4VHJhbnNpdGlvblkgfSk7XG4gICAgICAgIHJlYWN0aW9uQW5pbWF0aW9uVHJhbnNpdGlvbnNUZW1wLnB1c2goZWFjaFRyYW5zaXRpb24pO1xuICAgICAgICBlYWNoVHJhbnNpdGlvbiA9IFtdO1xuICAgIH0pXG5cbiAgICByZXR1cm4gcmVhY3Rpb25BbmltYXRpb25UcmFuc2l0aW9uc1RlbXA7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvdGFsUmVhY3Rpb25zKHJlYWN0aW9ucykge1xuXG5cbiAgICBpZiAoXy5pc0FycmF5KHJlYWN0aW9ucykgJiYgbm90RW1wdHlMZW5ndGgocmVhY3Rpb25zKSkge1xuICAgICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgICBfLmZvckVhY2gocmVhY3Rpb25zLCBmdW5jdGlvbiAocmVhY3Rpb24pIHtcbiAgICAgICAgICAgIGlmICghXy5pc05hTihwYXJzZUludChyZWFjdGlvbi50b3RhbCkpKSB7XG4gICAgICAgICAgICAgICAgdG90YWwgKz0gcGFyc2VJbnQocmVhY3Rpb24udG90YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiB0b3RhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3BSZWFjdGlvbnMocmVhY3Rpb25zLCByYW5rKSB7XG5cbiAgICBpZiAoXy5pc0FycmF5KHJlYWN0aW9ucykgJiYgbm90RW1wdHlMZW5ndGgocmVhY3Rpb25zKSkge1xuICAgICAgICBpZiAoIWlzVmFsaWROdW1iZXIocmFuaykpIHtcbiAgICAgICAgICAgIHJhbmsgPSAzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmFuayA9IHBhcnNlSW50KHJhbmspO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9maWx0ZXIgb3V0IHJlYWN0aW9uIG5vdCBpbiBsaXN0XG4gICAgICAgIGxldCBmaWx0ZXJlZERhdGEgPSBfLmNvbXBhY3QoXy5tYXAocmVhY3Rpb25zLCBmdW5jdGlvbiAocmVhY3Rpb24pIHtcbiAgICAgICAgICAgIGlmIChfLmluZGV4T2YoZGVmYXVsdFJlYWN0aW9ucywgcmVhY3Rpb24udHlwZSkgIT0gLTEgJiYgaXNWYWxpZE51bWJlcihyZWFjdGlvbi50b3RhbCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVhY3Rpb247XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgLy9nZXQgdG9wIHJlYWN0aW9uc1xuICAgICAgICBmaWx0ZXJlZERhdGEgPSBnZXRUb3BJdGVtcyhmaWx0ZXJlZERhdGEsIHJhbmssICd0b3RhbCcpO1xuICAgICAgICByZXR1cm4gZmlsdGVyZWREYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9mZmVyKHNvY2tldCwgYnJvYWRjYXN0ZXIpIHtcblxuICAgIGlmICghIWJyb2FkY2FzdGVyICYmICEhc29ja2V0KSB7XG5cbiAgICAgICAgY29uc3QgcGNfY29uZmlnID0ge1xuICAgICAgICAgICAgaWNlU2VydmVyczogW3tcbiAgICAgICAgICAgICAgdXJsczogWyBcInN0dW46c3MtdHVybjIueGlyc3lzLmNvbVwiIF1cbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICB1c2VybmFtZTogXCJLN1JZSlEwaU84Nkl6VS1wYWE2Z3VYeGZMSjd2WFdoRndmV3pFM1g4OC1MT3NUMFFONHZxdXdBVXgxdnNKSm1xQUFBQUFGLXllekJqWTJGeU16RXpNUT09XCIsXG4gICAgICAgICAgICAgIGNyZWRlbnRpYWw6IFwiYTVlMzFiMTYtMjgwZC0xMWViLTg5ZTMtMDI0MmFjMTQwMDA0XCIsXG4gICAgICAgICAgICAgIHVybHM6IFtcbiAgICAgICAgICAgICAgICAgIFwidHVybjpzcy10dXJuMi54aXJzeXMuY29tOjgwP3RyYW5zcG9ydD11ZHBcIixcbiAgICAgICAgICAgICAgICAgIFwidHVybjpzcy10dXJuMi54aXJzeXMuY29tOjM0Nzg/dHJhbnNwb3J0PXVkcFwiLFxuICAgICAgICAgICAgICAgICAgXCJ0dXJuOnNzLXR1cm4yLnhpcnN5cy5jb206ODA/dHJhbnNwb3J0PXRjcFwiLFxuICAgICAgICAgICAgICAgICAgXCJ0dXJuOnNzLXR1cm4yLnhpcnN5cy5jb206MzQ3OD90cmFuc3BvcnQ9dGNwXCIsXG4gICAgICAgICAgICAgICAgICBcInR1cm5zOnNzLXR1cm4yLnhpcnN5cy5jb206NDQzP3RyYW5zcG9ydD10Y3BcIixcbiAgICAgICAgICAgICAgICAgIFwidHVybnM6c3MtdHVybjIueGlyc3lzLmNvbTo1MzQ5P3RyYW5zcG9ydD10Y3BcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgIH1dXG4gICAgICAgICAgfVxuXG4gICAgICAgIGJyb2FkY2FzdGVyLnBlZXJDb25uZWN0aW9uID0gbmV3IFJUQ1BlZXJDb25uZWN0aW9uKHBjX2NvbmZpZylcblxuICAgICAgICBicm9hZGNhc3Rlci5wZWVyQ29ubmVjdGlvbi5jcmVhdGVPZmZlcih7XG4gICAgICAgICAgICBvZmZlclRvUmVjZWl2ZVZpZGVvOiAxLFxuICAgICAgICAgICAgLy9mb3IgYXVkaW9cbiAgICAgICAgICAgIG9mZmVyVG9SZWNlaXZlQXVkaW86IDFcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHNkcCA9PiB7XG4gICAgICAgICAgICAgICAgYnJvYWRjYXN0ZXIucGVlckNvbm5lY3Rpb24uc2V0TG9jYWxEZXNjcmlwdGlvbihzZHApO1xuIFxuICAgICAgICAgICAgICAgIHNlbmRUb1BlZXIoc29ja2V0LCAnY2xpZW50UmVxdWVzdFZpZGVvV2l0aERlYWxlclNvY2tldElkJywgeyBzZHAsIGRlYWxlclNvY2tldElkOiBicm9hZGNhc3Rlci5kZWFsZXJTb2NrZXRJZCB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnJvYWRjYXN0ZXI7XG4gICAgICAgICAgICB9KS5jYXRjaCh4ID0+IHtcbiBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb2ZmZXIgZmFpbGVkJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9KTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRUb1BlZXIoc29ja2V0LCBtZXNzYWdlVHlwZSwgcGF5bG9hZCkge1xuXG4gICAgaWYgKCEhc29ja2V0KSB7XG4gICAgICAgIHNvY2tldC5lbWl0KG1lc3NhZ2VUeXBlLCB7XG4gICAgICAgICAgICBzZW5kZXJJZDogc29ja2V0LmlkLFxuICAgICAgICAgICAgcGF5bG9hZFxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlVGhlUGVlckNvbm5lY3Rpb24oc29ja2V0LCBwZWVyQ29ubmVjdGlvbiwgcHJldmlvdXNEZWFsZXJTb2NrZXRJZCkge1xuICAgIGlmICghIXBlZXJDb25uZWN0aW9uICYmICEhc29ja2V0ICYmICEhcHJldmlvdXNEZWFsZXJTb2NrZXRJZCkge1xuICAgICAgICBwZWVyQ29ubmVjdGlvbi5jbG9zZSgpO1xuICAgICAgICBzb2NrZXQuZW1pdCgnY2xvc2VDbGllbnRTb2NrZXQnLCBwcmV2aW91c0RlYWxlclNvY2tldElkKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzeW5jUmVhY3Rpb25TdW1tYXJ5KHJlYWN0aW9uTG9ncykge1xuICAgIGxldCByZWFjdGlvblN1bW1hcnkgPSBfLm1hcChkZWZhdWx0UmVhY3Rpb25zLCBmdW5jdGlvbiAocmVhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IHJlYWN0aW9uLFxuICAgICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoXy5pc0FycmF5KHJlYWN0aW9uTG9ncykgJiYgbm90RW1wdHlMZW5ndGgocmVhY3Rpb25Mb2dzKSkge1xuICAgICAgICByZWFjdGlvblN1bW1hcnkgPSBfLm1hcChyZWFjdGlvblN1bW1hcnksIGZ1bmN0aW9uIChzdW1tYXJ5KSB7XG5cbiAgICAgICAgICAgIGxldCBsb2dzID0gXy5maWx0ZXIocmVhY3Rpb25Mb2dzLCBbJ3R5cGUnLCBzdW1tYXJ5LnR5cGVdKTtcbiAgICAgICAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICAgICAgICBfLmZvckVhY2gobG9ncywgZnVuY3Rpb24gKGxvZykge1xuICAgICAgICAgICAgICAgIHRvdGFsICs9IGxvZy50b3RhbDtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogc3VtbWFyeS50eXBlLFxuICAgICAgICAgICAgICAgIHRvdGFsOiB0b3RhbCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gcmVhY3Rpb25TdW1tYXJ5O1xufVxuIiwiaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuaW1wb3J0IGZlYXRoZXJzIGZyb20gJ0BmZWF0aGVyc2pzL2ZlYXRoZXJzJztcbmltcG9ydCBzb2NrZXRpbyBmcm9tICdAZmVhdGhlcnNqcy9zb2NrZXRpby1jbGllbnQnO1xuaW1wb3J0IGF1dGhlbnRpY2F0aW9uIGZyb20gJ0BmZWF0aGVyc2pzL2F1dGhlbnRpY2F0aW9uLWNsaWVudCc7XG5cbi8vIGNvbnN0IHNvY2tldCA9IGlvKCdodHRwOi8vbG9jYWxob3N0OjMwMzAvJyk7ICAgLy8gbG9jYWwvXG4vLyBjb25zdCBzb2NrZXQgPSBpbygnaHR0cHM6Ly91YXQyLWFwaS5jY2FyLm15LycpOyAgLy91YXRcbmNvbnN0IHNvY2tldCA9IGlvKCdodHRwczovL2FwaS5jY2FyLm15LycpOyAgIC8vIGxpdmVcbi8vIGNvbnN0IHNvY2tldCA9IGlvKCdodHRwczovL3ByZXByb2QtYXBpLmNjYXIubXkvJyk7ICAgLy8gbGl2ZVxuIFxuY29uc3QgY2xpZW50ID0gZmVhdGhlcnMoKTtcblxuY2xpZW50LmNvbmZpZ3VyZShzb2NrZXRpbyhzb2NrZXQpLCB7IHBpbmdUaW1lT3V0OiA2MDAwMCB9KTtcbi8vIGNsaWVudC5jb25maWd1cmUoYXV0aGVudGljYXRpb24oe1xuLy8gICBzdG9yYWdlOiB3aW5kb3cubG9jYWxTdG9yYWdlXG4vLyB9KSk7XG5jbGllbnQuY29uZmlndXJlKGF1dGhlbnRpY2F0aW9uKCkpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGllbnQ7IiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE1vbmV5KGFtb3VudCwgZGVjaW1hbENvdW50ID0gMiwgZGVjaW1hbCA9IFwiLlwiLCB0aG91c2FuZHMgPSBcIixcIikge1xuICAgIHRyeSB7XG4gICAgICBkZWNpbWFsQ291bnQgPSBNYXRoLmFicyhkZWNpbWFsQ291bnQpO1xuICAgICAgZGVjaW1hbENvdW50ID0gaXNOYU4oZGVjaW1hbENvdW50KSA/IDIgOiBkZWNpbWFsQ291bnQ7XG4gIFxuICAgICAgY29uc3QgbmVnYXRpdmVTaWduID0gYW1vdW50IDwgMCA/IFwiLVwiIDogXCJcIjtcbiAgXG4gICAgICBsZXQgaSA9IHBhcnNlSW50KGFtb3VudCA9IE1hdGguYWJzKE51bWJlcihhbW91bnQpIHx8IDApLnRvRml4ZWQoZGVjaW1hbENvdW50KSkudG9TdHJpbmcoKTtcbiAgICAgIGxldCBqID0gKGkubGVuZ3RoID4gMykgPyBpLmxlbmd0aCAlIDMgOiAwO1xuICBcbiAgICAgIHJldHVybiBuZWdhdGl2ZVNpZ24gKyAoaiA/IGkuc3Vic3RyKDAsIGopICsgdGhvdXNhbmRzIDogJycpICsgaS5zdWJzdHIoaikucmVwbGFjZSgvKFxcZHszfSkoPz1cXGQpL2csIFwiJDFcIiArIHRob3VzYW5kcykgKyAoZGVjaW1hbENvdW50ID8gZGVjaW1hbCArIE1hdGguYWJzKGFtb3VudCAtIGkpLnRvRml4ZWQoZGVjaW1hbENvdW50KS5zbGljZSgyKSA6IFwiXCIpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiBcbiAgICB9XG4gIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxNb250aCh2KXtcbiAgICBsZXQgTG9hbkFtb3VudCA9IHYqMC45ICAvLyAxMCUgZG93biBwYXltZW50XG4gICAgbGV0IExvYW5QZXJpb2QgPSA5XG4gICAgbGV0IEludGVyZXN0ID0gM1xuICAgIGxldCB0b3RhbEludGVyZXN0ID0gSW50ZXJlc3QvMTAwICogTG9hbkFtb3VudCAqIExvYW5QZXJpb2RcbiAgICBsZXQgbW9udGhseUludGVyZXN0ID0gdG90YWxJbnRlcmVzdCAvIChMb2FuUGVyaW9kICogMTIpXG4gICAgbGV0IG1vbnRobHlJbnN0YWxtZW50ID0gKExvYW5BbW91bnQgKyB0b3RhbEludGVyZXN0KSAvIChMb2FuUGVyaW9kICogMTIpXG4gICAgcmV0dXJuIG1vbnRobHlJbnN0YWxtZW50XG4gIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE51bWJlcihhbW91bnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gTWF0aC5hYnMoYW1vdW50KSA+IDk5OSA/IE1hdGguc2lnbihhbW91bnQpICogKChNYXRoLmFicyhhbW91bnQpIC8gMTAwMCkudG9GaXhlZCgxKSkgOiBNYXRoLnNpZ24oYW1vdW50KSAqIE1hdGguYWJzKGFtb3VudClcbiAgfSBjYXRjaCAoZSkge1xuIFxuICB9XG59O1xuXG5cbiBcbmV4cG9ydCBmdW5jdGlvbiBnZXRGYWNlQm9va0lkKHVybCkge1xuIFxuICBsZXQgYXBwSWQgPScnXG5cbi8vIGFwcElkPVwiNjk0NDU4OTAxMjgzMzkxXCIgLy9mYXJhXG4vLyBhcHBJZD1cIjI3NTQ4NDUyNzE1MDk0OFwiXG4vLyAgYXBwSWQ9XCI2MTYxNzMwMjkzMTgxMzRcIiAvL3NpYW5nc2lvbmdcbi8vIGFwcElkPVwiNzQ3MTc4MDEyNzUzNDEwXCIgLy9saXZlXG4vLyBhcHBJZD1cIjE4NTIyOTA4NjA3OTE4OVwiLy9sb2NhbCA6MzAwMSAtLWNmICAgICBcbi8vIGFwcElkPVwiNzAzNzMxMTA3MjE2OTc5XCIgLy91YXQyIC0tY2YgIFxuXG4gIGlmICh1cmw9PT0naHR0cDovL2xvY2FsaG9zdDozMDMwLycpe2FwcElkID0gJzY5NDQ1ODkwMTI4MzM5MSd9XG4gIGVsc2UgaWYgKHVybD09PSdodHRwczovL3VhdDItYXBpLmNjYXIubXkvJyl7YXBwSWQgPSAnNzAzNzMxMTA3MjE2OTc5J31cbiAgZWxzZSBpZiAodXJsPT09J2h0dHBzOi8vYXBpLmNjYXIubXkvJyl7YXBwSWQgPSAnNzQ3MTc4MDEyNzUzNDEwJ31cbiAgZWxzZSBpZiAodXJsPT09J2h0dHBzOi8vcHJlcHJvZC1hcGkuY2Nhci5teS8nKXthcHBJZCA9ICc2OTQ0NTg5MDEyODMzOTEnfVxuICBlbHNlICB7YXBwSWQgPSAnNjk0NDU4OTAxMjgzMzkxJ30gLy9kZWZhdWx0IHByb2RcblxuICByZXR1cm4gIGFwcElkXG5cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHb29nbGVJZCh1cmwpIHtcbiBcbiAgbGV0IGNsaWVudElkID0nJ1xuXG4gIC8vIGNsaWVudElkPVwiODI3MTQ3OTg2NDMwLWUyOGM2M3FmdGo5MXNwNTA2cjhrbTJ2MXNuY2NudDM2LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCIgLy8gbGl2ZVxuICAvLyBjbGllbnRJZD1cIjE4MjkyNDExOTA0NC01M2szZzhjdXY0NXU1ajY3Y3RpY2V2dm8xNWc3ODQ2aS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiLy91YXQyXG5cbiAgaWYgKHVybD09PSdodHRwOi8vbG9jYWxob3N0OjMwMzAvJyl7Y2xpZW50SWQgPSAnMTgyOTI0MTE5MDQ0LTUzazNnOGN1djQ1dTVqNjdjdGljZXZ2bzE1Zzc4NDZpLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJ31cbiAgZWxzZSBpZiAodXJsPT09J2h0dHBzOi8vcHJlcHJvZC1hcGkuY2Nhci5teS8nKXtjbGllbnRJZCA9ICcxODI5MjQxMTkwNDQtNTNrM2c4Y3V2NDV1NWo2N2N0aWNldnZvMTVnNzg0NmkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nfVxuICBlbHNlIGlmICh1cmw9PT0naHR0cHM6Ly91YXQyLWFwaS5jY2FyLm15Lycpe2NsaWVudElkID0gJzE4MjkyNDExOTA0NC01M2szZzhjdXY0NXU1ajY3Y3RpY2V2dm8xNWc3ODQ2aS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSd9XG4gIGVsc2UgaWYgKHVybD09PSdodHRwczovL3ByZXByb2QtYXBpLmNjYXIubXkvJyl7Y2xpZW50SWQgPSAnMTgyOTI0MTE5MDQ0LTUzazNnOGN1djQ1dTVqNjdjdGljZXZ2bzE1Zzc4NDZpLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJ31cbiAgZWxzZSBpZiAodXJsPT09J2h0dHBzOi8vYXBpLmNjYXIubXkvJyl7Y2xpZW50SWQgPSAnODI3MTQ3OTg2NDMwLWUyOGM2M3FmdGo5MXNwNTA2cjhrbTJ2MXNuY2NudDM2LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJ31cbiAgZWxzZSB7Y2xpZW50SWQgPSAnODI3MTQ3OTg2NDMwLWUyOGM2M3FmdGo5MXNwNTA2cjhrbTJ2MXNuY2NudDM2LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJ31cblxuICByZXR1cm4gIGNsaWVudElkXG5cbn07XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlck1pbGVhZ2VSYW5nZShtaWxlYWdlLCBtaWxlYWdlMikge1xuIFxuICAgIGxldCBtaWxlYWdlUmFuZ2UgPSAwLCB1c2VNaWxlYWdlID0gJ25vJywgdXNlTWlsZWFnZTIgPSAnbm8nXG5cbiAgICBpZiAobWlsZWFnZSkge1xuICAgICAgICBpZiAobWlsZWFnZSA+IDApIHtcbiAgICAgICAgICAgIG1pbGVhZ2VSYW5nZSA9IG1pbGVhZ2VcbiAgICAgICAgICAgIHVzZU1pbGVhZ2UgPSAneWVzJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1pbGVhZ2UyKSB7XG4gICAgICAgIGlmIChtaWxlYWdlMiA+IDApIHtcbiAgICAgICAgICAgIG1pbGVhZ2VSYW5nZSA9IG1pbGVhZ2UyXG4gICAgICAgICAgICB1c2VNaWxlYWdlMiA9ICd5ZXMnXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbWlsZWFnZVJhbmdlID09PSAnc3RyaW5nJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbWlsZWFnZVJhbmdlID0gcGFyc2VGbG9hdChtaWxlYWdlUmFuZ2UpXG4gICAgICAgIH0gY2F0Y2ggKGVycikgeyByZXR1cm4gbWlsZWFnZVJhbmdlIH1cbiAgICB9XG5cbiAgICBpZiAodXNlTWlsZWFnZSA9PT0gJ3llcycpIHtcblxuICAgICAgICBpZiAodHlwZW9mIG1pbGVhZ2VSYW5nZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGxldCBtaWxlYWdlRnJvbSA9IChtaWxlYWdlUmFuZ2UgLSAyNTAwKSAvIDEwMDBcbiAgICAgICAgICAgIGxldCBtaWxlYWdlVG8gPSAobWlsZWFnZVJhbmdlICsgMjUwMCkgLyAxMDAwXG4gICAgICAgICAgICBtaWxlYWdlUmFuZ2UgPSBtaWxlYWdlRnJvbSArICctJyArIG1pbGVhZ2VUbyArICdLIEtNJ1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLmlzRW1wdHkobWlsZWFnZVJhbmdlKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgbWlsZWFnZVJhbmdlID0gJzAgS00nXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbGVhZ2VSYW5nZVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbWlsZWFnZVJhbmdlID0gbWlsZWFnZVJhbmdlIC8gMTAwMFxuICAgICAgICByZXR1cm4gbWlsZWFnZVJhbmdlICsgJyBLTSdcbiAgICB9XG4gXG59O1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0Vudih1cmwpIHtcbiAgXG4gIGxldCBlbnYgPSAnJztcbiAgaWYgKHVybD09PSdodHRwOi8vbG9jYWxob3N0OjMwMzAvJyl7ZW52ID0gJ2xvY2FsJ31cbiAgZWxzZSBpZiAodXJsPT09J2h0dHBzOi8vdWF0Mi1hcGkuY2Nhci5teS8nKXtlbnYgPSAndWF0J31cbiAgZWxzZSBpZiAodXJsPT09J2h0dHBzOi8vcHJlcHJvZC1hcGkuY2Nhci5teS8nKXtlbnYgPSAncHJlcHJvZCd9XG4gIGVsc2UgaWYgKHVybD09PSdodHRwczovL2FwaS5jY2FyLm15Lycpe2VudiA9ICdwcm9kJ31cbiAgZWxzZSAge2Vudj0ncHJvZCd9IFxuICByZXR1cm4gIGVudlxuXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tFbnZSZXR1cm5XZWJBZG1pbih1cmwpIHtcbiAgXG4gIGxldCBmcm9udEVuZFVybCA9JydcblxuICBpZiAodXJsPT09J2h0dHA6Ly9sb2NhbGhvc3Q6MzAzMC8nKVxuICB7XG4gICAgZnJvbnRFbmRVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwLydcbiAgfVxuICBlbHNlIGlmICh1cmw9PT0naHR0cHM6Ly91YXQyLWFwaS5jY2FyLm15LycpXG4gIHtcbiAgICBmcm9udEVuZFVybCA9ICdodHRwOi8vdWF0Mi1hZG0uY2Nhci5teS8nXG4gIH1cbiAgZWxzZSBpZiAodXJsPT09J2h0dHBzOi8vcHJlcHJvZC1hcGkuY2Nhci5teS8nKVxuICB7XG4gICAgZnJvbnRFbmRVcmwgPSAnaHR0cDovL3ByZXByb2QtYWRtLmNjYXIubXkvJ1xuICB9XG4gIGVsc2UgaWYgKHVybD09PSdodHRwczovL2FwaS5jY2FyLm15LycpXG4gIHtcbiAgICBmcm9udEVuZFVybCA9ICdodHRwczovL2FkbS5jY2FyLm15LydcbiAgfVxuICByZXR1cm4gIGZyb250RW5kVXJsXG5cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0VudlJldHVybkNtc1VybCh1cmwpIHtcbiAgXG4gIGxldCBmcm9udEVuZFVybCA9J2h0dHBzOi8vdWF0MnNzci5jY2FyLm15J1xuXG4gIGlmICh1cmw9PT0naHR0cDovL2xvY2FsaG9zdDozMDMwLycpXG4gIHtcbiAgICBmcm9udEVuZFVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMTEnXG4gIH1cbiAgZWxzZSBpZiAodXJsPT09J2h0dHBzOi8vdWF0Mi1hcGkuY2Nhci5teS8nKVxuICB7XG4gICAgZnJvbnRFbmRVcmwgPSAnaHR0cHM6Ly91YXQyc3NyLmNjYXIubXknXG4gIH1cbiAgZWxzZSBpZiAodXJsPT09J2h0dHBzOi8vcHJlcHJvZC1hcGkuY2Nhci5teS8nKVxuICB7XG4gICAgZnJvbnRFbmRVcmwgPSAnaHR0cHM6Ly9wcmVwcm9kLWFwaS5jY2FyLm15J1xuICB9XG4gIGVsc2UgaWYgKHVybD09PSdodHRwczovL2FwaS5jY2FyLm15LycpXG4gIHtcbiAgICBmcm9udEVuZFVybCA9ICdodHRwczovL2NjYXIubXknXG4gIH1cbiAgcmV0dXJuICBmcm9udEVuZFVybFxuXG59OyIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmNvbnN0IFByb3ZpZGVyID0gKHsgcm91dGVyLCBjaGlsZHJlbiB9KSA9PiAoXG4gIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtyb3V0ZXJ9PntjaGlsZHJlbn08L0NvbnRleHQuUHJvdmlkZXI+XG4pO1xuXG5leHBvcnQgY29uc3QgdXNlUm91dGVyID0gKCkgPT4gdXNlQ29udGV4dChDb250ZXh0KTtcbmV4cG9ydCBjb25zdCBSb3V0ZXJDb250ZXh0UHJvdmlkZXIgPSB3aXRoUm91dGVyKFByb3ZpZGVyKTtcbiIsImV4cG9ydCBjb25zdCB3cml0ZVBvc3RJY29uID0gJy9hc3NldHMvbmV3LWNhci1zY3JlZW4vY3JlYXRlLXBvc3QucG5nJ1xuZXhwb3J0IGNvbnN0IGltYWdlTm90Rm91bmRJY29uID0gJy9pbWFnZS1ub3QtZm91bmQgY29weS5wbmcnXG5cblxuXG5leHBvcnQgY29uc3QgcmFjZUZsYWdJY29uID0gJy9yYWNlLWZsYWcuanBnJ1xuZXhwb3J0IGNvbnN0IGFsbEljb24gPSAnL2dyaWQuc3ZnJ1xuXG4vL0NhckZyZWFrXG5leHBvcnQgY29uc3QgY2FyRnJlYWtMaWtlSWNvbiA9ICcvYXNzZXRzL2Nhci1mcmVhay9jYXJmcmVha3MtbGlrZS5wbmcnXG5leHBvcnQgY29uc3QgY2FyRnJlYWtMaWtlR3JleUljb24gPSAnL2Fzc2V0cy9jYXItZnJlYWsvY2FyZnJlYWtzLWxpa2UtZ3JleS5wbmcnXG5leHBvcnQgY29uc3QgY2FyRnJlYWtDb21tZW50SWNvbiA9ICcvYXNzZXRzL2Nhci1mcmVhay9jb21tZW50LnN2ZydcbmV4cG9ydCBjb25zdCBmb2xsb3dpbmdHcmV5SWNvbiA9ICcvYXNzZXRzL2Nhci1mcmVhay9mb2xsb3ctZ3JleS5wbmcnXG5leHBvcnQgY29uc3QgZm9sbG93aW5nWWVsbG93SWNvbiA9ICcvYXNzZXRzL2Nhci1mcmVhay9mb2xsb3cteWVsbG93LnBuZydcbmV4cG9ydCBjb25zdCBlYXJ0aEdyZXlJY29uID0gJy9hc3NldHMvY2FyLWZyZWFrL3B1YmxpYy1ncmV5LnBuZydcbmV4cG9ydCBjb25zdCBlYXJ0aFllbGxvd0ljb24gPSAnL2Fzc2V0cy9jYXItZnJlYWsvcHVibGljLXllbGxvdy5wbmcnXG5leHBvcnQgY29uc3QgY2x1Yk5vbk1lbWJlciA9ICcvYXNzZXRzL2Nhci1mcmVhay9ub24tbWVtYmVyLnBuZydcbmV4cG9ydCBjb25zdCB1cGxvYWRQaG90byA9ICcvYXNzZXRzL3VwbG9hZF9waG90by5wbmcnO1xuZXhwb3J0IGNvbnN0IGNhbGVuZGFySWNvbiA9ICcvYXNzZXRzL2Nhci1mcmVhay9jYWxlbmRhci5wbmcnO1xuZXhwb3J0IGNvbnN0IHBpbkljb24gPSAnL2Fzc2V0cy9jYXItZnJlYWsvcGluLnBuZyc7XG5cbi8vQ2FyIE1hcmtldFxuZXhwb3J0IGNvbnN0IGNhcnNwZWNOb3RGb3VuZEltYWdlID0gJy9jb21pbmctc29vbi5wbmcnXG5leHBvcnQgY29uc3QgZmxhbWVSZWQgPSAnL2Fzc2V0cy9DYXJMaXN0aW5nSWNvbi9GaXJlLTA0KE5vU2hhZG93KS5naWYnXG5leHBvcnQgY29uc3QgZmxhbWVSZWRTaGFkb3cgPSAnL2Fzc2V0cy9DYXJMaXN0aW5nSWNvbi9GaXJlLTA0LmdpZidcbmV4cG9ydCBjb25zdCBmbGFtZSA9ICcvYXNzZXRzL2NhckRldGFpbHMvZmxhbWUuZ2lmJ1xuZXhwb3J0IGNvbnN0IHNvbGRPdXRJY29uID0gJy9zb2xkIG91dEAzeC5wbmcnXG5leHBvcnQgY29uc3QgcmF5YUZsYW1lID0gJy9hc3NldHMvcHJvZHVjdExpc3QvRmxhbWVfMDEuZ2lmJ1xuZXhwb3J0IGNvbnN0IHJheWFGb29kID0gJy9hc3NldHMvcHJvZHVjdExpc3QvRm9vZChGaW5hbClfMS5naWYnXG5leHBvcnQgY29uc3QgcmF5YUxhbXAgPSAnL2Fzc2V0cy9wcm9kdWN0TGlzdC9MYW1wX0ZpbmFsXy5naWYnXG5leHBvcnQgY29uc3QgcmF5YU1vc3F1ZSA9ICcvYXNzZXRzL3Byb2R1Y3RMaXN0L01vc3F1ZShGaW5hbCkuZ2lmJ1xuZXhwb3J0IGNvbnN0IHJheWFQZW9wbGUgPSAnL2Fzc2V0cy9wcm9kdWN0TGlzdC9PcmFuZyhGaW5hbCkuZ2lmJ1xuXG5cblxuXG5leHBvcnQgY29uc3QgY2NhcldlYkxvZ280MDBYMTUwID0gJy9hc3NldHMvcHJvZmlsZS80MDB4MTUwLWljb24ucG5nJ1xuZXhwb3J0IGNvbnN0IGNjYXJMb2dvID0gJy9sb2dvMTkyLnBuZydcbmV4cG9ydCBjb25zdCBjY2FyTG9nbzIgPSAnL2Fzc2V0cy9DY2FyLWxvZ28ucG5nJ1xuZXhwb3J0IGNvbnN0IGNjYXJXZWJMb2dvMiA9ICcvY2Nhci13ZWItbG9nby5wbmcnXG5cbi8vTG9naW5cbmV4cG9ydCBjb25zdCBsb2dpbkJhY2tncm91bmQgPSAnL2Fzc2V0cy9sb2dpbi9yYW1hZGhhbi5wbmcnO1xuZXhwb3J0IGNvbnN0IHRiaENueSA9ICcvYXNzZXRzL2xvZ2luL3RiaC5wbmcnO1xuZXhwb3J0IGNvbnN0IHRiaDFDbnkgPSAnL2Fzc2V0cy9sb2dpbi90YmgtMDEucG5nJztcbmV4cG9ydCBjb25zdCB0YmgyQ255ID0gJy9hc3NldHMvbG9naW4vdGJoLTAyLnBuZyc7XG5leHBvcnQgY29uc3QgY255TGlvbkhlYWQgPSAnL2Fzc2V0cy9sb2dpbi9saW9uLWRhbmNlLnBuZyc7XG5leHBvcnQgY29uc3QgY255TG9nbyA9ICcvYXNzZXRzL2xvZ2luL2NjYXItY255LWxvZ28ucG5nJztcbmV4cG9ydCBjb25zdCBnb29nbGVMb2dvID0gJy9nb29nbGUucG5nJztcbmV4cG9ydCBjb25zdCBjbnlMb2dvMiA9ICcvY2NhciBjbnkgMi5zdmcnO1xuZXhwb3J0IGNvbnN0IHRiaCA9ICcvYXNzZXRzL2xvZ2luL2ZhcmEucG5nJztcblxuXG4vL1Byb2ZpbGVcbmV4cG9ydCBjb25zdCBkZWZhdWx0UHJvZmlsZUJhY2tncm91bmQgPSAnL2Fzc2V0cy9wcm9maWxlLzEyODB4NDUwLnBuZyc7XG5leHBvcnQgY29uc3QgcGhvbmUgPSBcIi9hc3NldHMvc2VsbGVyUHJvZmlsZS9waG9uZS5wbmdcIlxuZXhwb3J0IGNvbnN0IGVtYWlsID0gXCIvYXNzZXRzL3NlbGxlclByb2ZpbGUvZW1haWwucG5nXCJcbmV4cG9ydCBjb25zdCBoZWxwID0gXCIvYXNzZXRzL3NlbGxlclByb2ZpbGUvaGVscC5wbmdcIlxuZXhwb3J0IGNvbnN0IGFkZHJlc3MgPSBcIi9hc3NldHMvc2VsbGVyUHJvZmlsZS9hZGRyZXNzLWhvbWUucG5nXCJcbmV4cG9ydCBjb25zdCBsb2NhdGlvbiA9IFwiL2Fzc2V0cy9zZWxsZXJQcm9maWxlL0xvY2F0aW9uQDN4LnBuZ1wiXG5leHBvcnQgY29uc3Qgd2lzaExpc3QgPSBcIi9hc3NldHMvcHJvZmlsZS93aXNobGlzdC5wbmdcIlxuZXhwb3J0IGNvbnN0IHdpc2hsaXN0SWNvbkFjdGl2ZWQgPSBcIi9hc3NldHMvcHJvZmlsZS93aXNobGlzdC1hY3RpdmUucG5nXCI7XG5cblxuXG4vL0ZBUVxuZXhwb3J0IGNvbnN0IGZhcURpY2VCYW5uZXIgPSAnL2Fzc2V0cy9mYXEvbWFueS1mYWxsaW5nLWJsb2Nrcy13aXRoLXF1ZXN0aW9uLW1hcmtzLTNkLWlsbHVzdHJhdGlvbi5qcGcnO1xuZXhwb3J0IGNvbnN0IGZhcUJhbm5lciA9ICcvYXNzZXRzL2ZhcS9GQVEtYmcuanBnJztcbmV4cG9ydCBjb25zdCBmYXFCdXlDYXJJY29uID0gJy9hc3NldHMvZmFxL2J1eS1hLWNhci5wbmcnO1xuZXhwb3J0IGNvbnN0IGZhcUNhckZyZWFrSWNvbiA9ICcvYXNzZXRzL2ZhcS9jYXJmcmVha3MucG5nJztcbmV4cG9ydCBjb25zdCBmYXFDc3Rhckljb24gPSAnL2Fzc2V0cy9mYXEvY3N0YXIucG5nJztcbmV4cG9ydCBjb25zdCBmYXFNeUFjY291bnRJY29uID0gJy9hc3NldHMvZmFxL215LWFjY291bnQucG5nJztcbmV4cG9ydCBjb25zdCBmYXFPdXJGZWF0dXJlc0ljb24gPSAnL2Fzc2V0cy9mYXEvb3VyLWZlYXR1cmVzLnBuZyc7XG5leHBvcnQgY29uc3QgZmFxU2VsbENhckljb24gPSAnL2Fzc2V0cy9mYXEvc2VsbC1hLWNhci5wbmcnO1xuXG5cbmV4cG9ydCBjb25zdCBzZWFyY2hCb3hJbWcgPSAnL2Fzc2V0cy9mYXEvSG9tZXBhZ2UucG5nJztcbmV4cG9ydCBjb25zdCBzb3J0aW5nSW1nID0gJy9hc3NldHMvZmFxL2Nhcm1hcmtldCBmaWx0ZXIucG5nJztcbmV4cG9ydCBjb25zdCBmaWx0ZXJGb3JtSW1nID0gJy9hc3NldHMvZmFxL0Nhcm1hcmtldCBxdWljayBmaWx0ZXIgYm94LnBuZyc7XG5leHBvcnQgY29uc3QgYWxsTmV3Q2FySW1nID0gJy9hc3NldHMvZmFxL2FsbC1uZXdjYXIgYnJhbmQucG5nJztcbmV4cG9ydCBjb25zdCBjYXJCcmFuZEltZyA9ICcvYXNzZXRzL2ZhcS9zZWxsLWEtY2FyLnBuZyc7XG5leHBvcnQgY29uc3QgbmV3Q2FyRmlsdGVyRm9ybUltZyA9ICcvYXNzZXRzL2ZhcS9hbGwtbmV3Y2FyIGZpbHRlci5wbmcnO1xuZXhwb3J0IGNvbnN0IGNhck1vcmVJbmZvSW1nID0gJy9hc3NldHMvZmFxL3NlbGwtYS1jYXIucG5nJztcbmV4cG9ydCBjb25zdCBjc3Rhckxpc3RJbWcgPSAnL2Fzc2V0cy9mYXEvc2VsbC1hLWNhci5wbmcnO1xuZXhwb3J0IGNvbnN0IGNzdGFyQW5pbWF0aW9uSW1nID0gJy9hc3NldHMvZmFxL3NlbGwtYS1jYXIucG5nJztcblxuLy9Ob3RpZmljYXRpb25cbmV4cG9ydCBjb25zdCBiZWxsSW5hY3RpdmUgPSAnL2Fzc2V0cy9ub3RpZmljYXRpb24vYmVsbC5wbmcnO1xuXG5cbi8vUmV2aWV3XG5leHBvcnQgY29uc3QgcmF0aW5nQmFubmVyID0gJy9hc3NldHMvY2FyLXJldmlldy9yYXRpbmcucG5nJztcblxuLy9NZW51XG5leHBvcnQgY29uc3QgbWVudUxvZ2luID0gJy9hc3NldHMvbWVudS1pY29uL05vbG9naW4ucG5nJzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLkNvbnRhaW5lcj1Db250YWluZXI7ZXhwb3J0cy5jcmVhdGVVcmw9Y3JlYXRlVXJsO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO2V4cG9ydHMuQXBwSW5pdGlhbFByb3BzPV91dGlscy5BcHBJbml0aWFsUHJvcHM7LyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL2FzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyhfcmVmKXt2YXJ7Q29tcG9uZW50LGN0eH09X3JlZjt2YXIgcGFnZVByb3BzPWF3YWl0KDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKENvbXBvbmVudCxjdHgpO3JldHVybntwYWdlUHJvcHN9O31jbGFzcyBBcHAgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnR7Ly8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbi8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4vLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG5jb21wb25lbnREaWRDYXRjaChlcnJvcixfZXJyb3JJbmZvKXt0aHJvdyBlcnJvcjt9cmVuZGVyKCl7dmFye3JvdXRlcixDb21wb25lbnQscGFnZVByb3BzLF9fTl9TU0csX19OX1NTUH09dGhpcy5wcm9wcztyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7fSxwYWdlUHJvcHMsLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4vLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuIShfX05fU1NHfHxfX05fU1NQKT97dXJsOmNyZWF0ZVVybChyb3V0ZXIpfTp7fSkpO319ZXhwb3J0cy5kZWZhdWx0PUFwcDtBcHAub3JpZ0dldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7QXBwLmdldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7dmFyIHdhcm5Db250YWluZXI7dmFyIHdhcm5Vcmw7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3dhcm5Db250YWluZXI9KDAsX3V0aWxzLmV4ZWNPbmNlKSgoKT0+e2NvbnNvbGUud2FybihcIldhcm5pbmc6IHRoZSBgQ29udGFpbmVyYCBpbiBgX2FwcGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRcIik7fSk7d2FyblVybD0oMCxfdXRpbHMuZXhlY09uY2UpKCgpPT57Y29uc29sZS5lcnJvcihcIldhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvdXJsLWRlcHJlY2F0ZWRcIik7fSk7fS8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5mdW5jdGlvbiBDb250YWluZXIocCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FybkNvbnRhaW5lcigpO3JldHVybiBwLmNoaWxkcmVuO31mdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyKXsvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxudmFye3BhdGhuYW1lLGFzUGF0aCxxdWVyeX09cm91dGVyO3JldHVybntnZXQgcXVlcnkoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHF1ZXJ5O30sZ2V0IHBhdGhuYW1lKCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiBwYXRobmFtZTt9LGdldCBhc1BhdGgoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIGFzUGF0aDt9LGJhY2s6KCk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cm91dGVyLmJhY2soKTt9LHB1c2g6KHVybCxhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHJvdXRlci5wdXNoKHVybCxhcyk7fSxwdXNoVG86KGhyZWYsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3ZhciBwdXNoUm91dGU9YXM/aHJlZjonJzt2YXIgcHVzaFVybD1hc3x8aHJlZjtyZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLHB1c2hVcmwpO30scmVwbGFjZToodXJsLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLGFzKTt9LHJlcGxhY2VUbzooaHJlZixhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7dmFyIHJlcGxhY2VSb3V0ZT1hcz9ocmVmOicnO3ZhciByZXBsYWNlVXJsPWFzfHxocmVmO3JldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUscmVwbGFjZVVybCk7fX07fSIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9hcHAuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL2luZGV4LmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9vdmVyd3JpdGUuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL21haW4uY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL3NlbGxDYXIuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL3ZpZXdQcm9kdWN0cy5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvY29sb3IuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL2NvbW1vbi5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvYW5pbWF0aW9uLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9uZXdjYXIuY3NzJztcbmltcG9ydCAncmMtYmFubmVyLWFuaW0vYXNzZXRzL2luZGV4LmNzcyc7XG5pbXBvcnQgJ3JlYWN0LWltYWdlLWxpZ2h0Ym94L3N0eWxlLmNzcyc7XG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiO1xuaW1wb3J0ICdAYnJhaW5odWJldS9yZWFjdC1jYXJvdXNlbC9saWIvc3R5bGUuY3NzJztcbmltcG9ydCBcImVtb2ppLW1hcnQvY3NzL2Vtb2ppLW1hcnQuY3NzXCI7XG5pbXBvcnQgJ3JlYWN0LXF1aWxsL2Rpc3QvcXVpbGwuc25vdy5jc3MnOyAvLyBFUzZcblxuaW1wb3J0IHsgd3JhcHBlciwgc3RvcmUgfSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnOyBcbmltcG9ydCB3aXRoUmVkdXggZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgUGFnZVRyYW5zaXRpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL2dlbmVyYWwvUGFnZVRyYW5zaXRpb24nO1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi4vaG9va3MvdXNlUm91dGVyJztcbmltcG9ydCB7IGNoZWNrRW52UmV0dXJuQ21zVXJsIH0gZnJvbSAnLi4vZnVuY3Rpb25Db250ZW50JztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vZmVhdGhlcnMnO1xuaW1wb3J0IHsgY2NhckxvZ28yLCBjY2FyV2ViTG9nbzQwMFgxNTAgfSBmcm9tICcuLi9pY29uJztcblxuXG5cbmNvbnN0IFdyYXBwZWRBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH0pID0+IHtcblxuICBsZXQgc2VvRGF0YSA9IF8uaXNQbGFpbk9iamVjdChfLmdldChwYWdlUHJvcHMsIFsnc2VvRGF0YSddKSkgJiYgIV8uaXNFbXB0eShfLmdldChwYWdlUHJvcHMsIFsnc2VvRGF0YSddKSkgPyBfLmdldChwYWdlUHJvcHMsIFsnc2VvRGF0YSddKSA6IHt9O1xuICBsZXQgdGl0bGUgPSBfLmdldChzZW9EYXRhLCBbJ3RpdGxlJ10pIHx8ICdDQ0FSLk1ZIHwgIzEgQ2FyIFNvY2lhbCBQbGF0Zm9ybSdcbiAgbGV0IGJhc2VQYXRoID0gY2hlY2tFbnZSZXR1cm5DbXNVcmwoY2xpZW50LmlvLmlvLnVyaSk7XG4gIGxldCB1cmwgPSBzZW9EYXRhLnVybCB8fCBgJHtiYXNlUGF0aH0ke3JvdXRlci5hc1BhdGh9YDtcblxuICBpZiAoIV8uaXNBcnJheShzZW9EYXRhLmltYWdlcykpIHtcblxuICAgIGlmIChfLmlzU3RyaW5nKHNlb0RhdGEuaW1hZ2VzKSkge1xuICAgICAgc2VvRGF0YS5pbWFnZXMgPSBbe1xuICAgICAgICB1cmw6IHNlb0RhdGEuaW1hZ2VzLFxuICAgICAgICBhbHQ6ICdDQ0FSIEltYWdlIFByZXZpZXcnLFxuICAgICAgfV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlb0RhdGEuaW1hZ2VzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgdXJsOiBgJHtiYXNlUGF0aH0ke2NjYXJXZWJMb2dvNDAwWDE1MH1gLFxuICAgICAgICAgIGFsdDogYENDQVIgTG9nb2AsXG4gICAgICAgIH1cbiAgICAgIF07XG4gICAgfVxuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxOZXh0U2VvXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgZGVzY3JpcHRpb249e3Nlb0RhdGEuZGVzY3JpcHRpb259XG4gICAgICAgIGNhbm9uaWNhbD17c2VvRGF0YS5jYW5vbmljYWwgfHwgdXJsfVxuICAgICAgICBvcGVuR3JhcGg9e18uaXNQbGFpbk9iamVjdChzZW9EYXRhLm9wZW5HcmFwaCkgJiYgIV8uaXNFbXB0eShzZW9EYXRhLm9wZW5HcmFwaCkgPyBzZW9EYXRhLm9wZW5HcmFwaCA6IHtcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgZGVzY3JpcHRpb246IHNlb0RhdGEuZGVzY3JpcHRpb24sXG4gICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgdHlwZTogJ3dlYnNpdGUnLFxuICAgICAgICAgIHNpdGVfbmFtZTogJ0NDQVIgU0ROIEJIRCcsXG4gICAgICAgICAgaW1hZ2VzOiBbXG4gICAgICAgICAgICAuLi5zZW9EYXRhLmltYWdlcyxcbiAgICAgICAgICBdXG4gICAgICAgIH19XG4gICAgICAgIHR3aXR0ZXI9e3tcbiAgICAgICAgICBoYW5kbGU6ICdAaGFuZGxlJyxcbiAgICAgICAgICBzaXRlOiAnQHNpdGUnLFxuICAgICAgICAgIGNhcmRUeXBlOiAnc3VtbWFyeV9sYXJnZV9pbWFnZScsXG4gICAgICAgIH19XG4gICAgICAgIGZhY2Vib29rPXt7XG4gICAgICAgICAgYXBwSWQ6IHNlb0RhdGEuZmFjZWJvb2tBcHBJZCB8fCAnNzQ3MTc4MDEyNzUzNDEwJ1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj17Y2NhckxvZ28yIHx8IFwiaHR0cHM6Ly95dDMuZ2dwaHQuY29tL2EvQUFUWEFKeUFDQW5uazU4X3FmVlpxdmphVGthdnN4T2I4ZFNZR2VjaXY0YTc9czg4LWMtay1jMHgwMGZmZmZmZi1uby1yalwifSAvPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UaXRpbGxpdW0rV2ViOndnaHRAMzAwOzQwMDs3MDAmZmFtaWx5PVVidW50dTppdGFsQDEmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGtleT17cm91dGVyLnJvdXRlfSAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoV3JhcHBlZEFwcClcbiIsImV4cG9ydCBjb25zdCBib2R5VHlwZUxpc3QgPSBbXG4gICAge1xuICAgICAgICAnaWNvbic6IFwiL2Fzc2V0cy9jYXItdHlwZS1vcmktdmVyMi9jb2FjaC5wbmdcIixcbiAgICAgICAgJ3ZhbHVlJzogJ0NvYWNoJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBcIi9hc3NldHMvY2FyLXR5cGUtb3JpLXZlcjIvY29tcGFjdC5wbmdcIixcbiAgICAgICAgJ3ZhbHVlJzogJ0NvbXBhY3QnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IFwiL2Fzc2V0cy9jYXItdHlwZS1vcmktdmVyMi9jb252ZXJ0aWJsZS5wbmdcIixcbiAgICAgICAgJ3ZhbHVlJzogJ0NvbnZlcnRpYmxlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBcIi9hc3NldHMvY2FyLXR5cGUtb3JpLXZlcjIvY291cGUucG5nXCIsXG4gICAgICAgICd2YWx1ZSc6ICdDb3VwZScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogXCIvYXNzZXRzL2Nhci10eXBlLW9yaS12ZXIyL2Nyb3Nzb3Zlci5wbmdcIixcbiAgICAgICAgJ3ZhbHVlJzogJ0Nyb3Nzb3ZlcicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogXCIvYXNzZXRzL2Nhci10eXBlLW9yaS12ZXIyL2hhdGNoYmFjay5wbmdcIixcbiAgICAgICAgJ3ZhbHVlJzogJ0hhdGNoYmFjaycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogXCIvYXNzZXRzL2Nhci10eXBlLW9yaS12ZXIyL21wdi5wbmdcIixcbiAgICAgICAgJ3ZhbHVlJzogJ01QVicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogXCIvYXNzZXRzL2Nhci10eXBlLW9yaS12ZXIyL3BpY2t1cC10cnVjay5wbmdcIixcbiAgICAgICAgJ3ZhbHVlJzogJ1BpY2t1cHRydWNrJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBcIi9hc3NldHMvY2FyLXR5cGUtb3JpLXZlcjIvc2VkYW4ucG5nXCIsXG4gICAgICAgICd2YWx1ZSc6ICdTZWRhbicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogXCIvYXNzZXRzL2Nhci10eXBlLW9yaS12ZXIyL3Nwb3J0LWNhci5wbmdcIixcbiAgICAgICAgJ3ZhbHVlJzogJ1Nwb3J0Y2FyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBcIi9hc3NldHMvY2FyLXR5cGUtb3JpLXZlcjIvc3V2LnBuZ1wiLFxuICAgICAgICAndmFsdWUnOiAnU1VWJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBcIi9hc3NldHMvY2FyLXR5cGUtb3JpLXZlcjIvdHJ1Y2sucG5nXCIsXG4gICAgICAgICd2YWx1ZSc6ICdUcnVjaycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogXCIvYXNzZXRzL2Nhci10eXBlLW9yaS12ZXIyL3Zhbi5wbmdcIixcbiAgICAgICAgJ3ZhbHVlJzogJ1ZhbicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogXCIvYXNzZXRzL2Nhci10eXBlLW9yaS12ZXIyL3dhZ29uLnBuZ1wiLFxuICAgICAgICAndmFsdWUnOiAnV2Fnb24nLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IFwiL2Fzc2V0cy9jYXItdHlwZS1vcmktdmVyMi9zcG9ydC1jYXIucG5nXCIsXG4gICAgICAgICd2YWx1ZSc6ICdHVCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogXCIvYXNzZXRzL2Nhci10eXBlLW9yaS12ZXIyL3RydWNrLnBuZ1wiLFxuICAgICAgICAndmFsdWUnOiAnTG9ycnknLFxuICAgIH0sXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCb2R5VHlwZUljb24oYm9keVR5cGUpIHtcbiAgICBpZiAoYm9keVR5cGUpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkQm9keVR5cGUgPSBib2R5VHlwZUxpc3QuZmluZChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gYm9keVR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoc2VsZWN0ZWRCb2R5VHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkQm9keVR5cGUuaWNvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm9keVR5cGUoYm9keVR5cGUpIHtcbiBcbiAgICBpZiAoYm9keVR5cGUpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkQm9keVR5cGUgPSBib2R5VHlwZUxpc3QuZmluZChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gYm9keVR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSlcblxuIFxuICAgICAgICBpZiAoc2VsZWN0ZWRCb2R5VHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkQm9keVR5cGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICAgIGljb246IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICBpY29uOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGJvZHlUeXBlTGlzdCxcbn0iLCJcblxuY29uc3QgYWxmYVJvbWVvSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9hbGZhLXJvbWVvLnBuZ1wiXG5jb25zdCBhc2lhSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9hc2lhLnBuZ1wiXG5jb25zdCBhc3Rvbk1hcnRpbkltZyA9IFwiL2Fzc2V0cy9icmFuZHMvYXN0b24tbWFydGluLnBuZ1wiXG5jb25zdCBhdWRpSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9hdWRpLnBuZ1wiXG5jb25zdCBhdXN0aW5JbWcgPSBcIi9hc3NldHMvYnJhbmRzL2F1c3Rpbi5wbmdcIlxuY29uc3QgYmFjSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9iYWMucG5nXCJcbmNvbnN0IGJlbnRsZXlJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2JlbnRsZXkucG5nXCJcbmNvbnN0IGJtd0FscGluYUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvYm13LWFscGluYS5wbmdcIlxuY29uc3QgYm13SW1nID0gXCIvYXNzZXRzL2JyYW5kcy9ibXcucG5nXCJcbmNvbnN0IGJ1Zm9yaUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvYnVmb3JpLnBuZ1wiXG5jb25zdCBjYWRpbGxhY0ltZyA9IFwiL2Fzc2V0cy9icmFuZHMvY2FkaWxsYWMucG5nXCJcbmNvbnN0IGNhbUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvY2FtLnBuZ1wiXG5jb25zdCBjaGFuYUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvY2hhbmEucG5nXCJcbmNvbnN0IGNoYW5nYW5JbWcgPSBcIi9hc3NldHMvYnJhbmRzL2NoYW5nYW4ucG5nXCJcbmNvbnN0IGNoZXJ5SW1nID0gXCIvYXNzZXRzL2JyYW5kcy9jaGVyeS5wbmdcIlxuY29uc3QgY2hldnJvbGV0SW1nID0gXCIvYXNzZXRzL2JyYW5kcy9jaGV2cm9sZXQucG5nXCJcbmNvbnN0IGNocnlzbGVySW1nID0gXCIvYXNzZXRzL2JyYW5kcy9jaHJ5c2xlci5wbmdcIlxuY29uc3QgY2l0cm9lbkltZyA9IFwiL2Fzc2V0cy9icmFuZHMvY2l0cm9lbi5wbmdcIlxuY29uc3QgZGFpaGF0c3VJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2RhaWhhdHN1LnBuZ1wiXG5jb25zdCBkYXRzdW5JbWcgPSBcIi9hc3NldHMvYnJhbmRzL2RhdHN1bi5wbmdcIlxuY29uc3QgZG9kZ2VJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2RvZGdlLnBuZ1wiXG5jb25zdCBkb25nZmVuZ0ltZyA9IFwiL2Fzc2V0cy9icmFuZHMvZG9uZ2ZlbmcucG5nXCJcbmNvbnN0IGZlcnJhcmlJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2ZlcnJhcmkucG5nXCJcbmNvbnN0IGZpYXRJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2ZpYXQucG5nXCJcbmNvbnN0IGZvZGF5SW1nID0gXCIvYXNzZXRzL2JyYW5kcy9mb2RheS5wbmdcIlxuY29uc3QgZm9yZEltZyA9IFwiL2Fzc2V0cy9icmFuZHMvZm9yZC5wbmdcIlxuY29uc3QgZm90b25JbWcgPSBcIi9hc3NldHMvYnJhbmRzL2ZvdG9uLnBuZ1wiXG5jb25zdCBnb2xkZW5EcmFnb25JbWcgPSBcIi9hc3NldHMvYnJhbmRzL2dvbGRlbi1kcmFnb24ucG5nXCJcbmNvbnN0IGdyZWF0V2FsbEltZyA9IFwiL2Fzc2V0cy9icmFuZHMvZ3JlYXQtd2FsbC5wbmdcIlxuY29uc3QgaGF2YWxJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2hhdmFsLnBuZ1wiXG5jb25zdCBoaWNvbUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvaGljb20ucG5nXCJcbmNvbnN0IGhpbm9JbWcgPSBcIi9hc3NldHMvYnJhbmRzL2hpbm8ucG5nXCJcbmNvbnN0IGhvbmRhSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9ob25kYS5wbmdcIlxuY29uc3QgaHVtbWVySW1nID0gXCIvYXNzZXRzL2JyYW5kcy9odW1tZXIucG5nXCJcbmNvbnN0IGh5dW5kYWlJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2h5dW5kYWkucG5nXCJcbmNvbnN0IGltcHVsSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9pbXB1bC5wbmdcIlxuY29uc3QgaW5maW5pdGlJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2luZmluaXRpLnBuZ1wiXG5jb25zdCBpbm9rb21JbWcgPSBcIi9hc3NldHMvYnJhbmRzL2lub2tvbS5wbmdcIlxuY29uc3QgaXN1enVJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2lzdXp1LnBuZ1wiXG5jb25zdCBqYWd1YXJJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2phZ3Vhci5wbmdcIlxuY29uc3QgamJjSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9qYmMucG5nXCJcbmNvbnN0IGplZXBJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2plZXAucG5nXCJcbmNvbnN0IGptY0ltZyA9IFwiL2Fzc2V0cy9icmFuZHMvam1jLnBuZ1wiXG5jb25zdCBqb3lsb25nSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9qb3lsb25nLnBuZ1wiXG5jb25zdCBrYXdhc2FraUltZyA9IFwiL2Fzc2V0cy9icmFuZHMva2F3YXNha2kucG5nXCJcbmNvbnN0IGtpYUltZyA9IFwiL2Fzc2V0cy9icmFuZHMva2lhLnBuZ1wiXG5jb25zdCBraW5nTG9uZ0ltZyA9IFwiL2Fzc2V0cy9icmFuZHMva2luZy1sb25nLnBuZ1wiXG5jb25zdCBsYW1ib3JnaGluaUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvbGFtYm9yZ2hpbmkucG5nXCJcbmNvbnN0IGxhbmRSb3ZlckltZyA9IFwiL2Fzc2V0cy9icmFuZHMvbGFuZC1yb3Zlci5wbmdcIlxuY29uc3QgbGV4dXNJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2xleHVzLnBuZ1wiXG5jb25zdCBsbWdJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2xtZy5wbmdcIlxuY29uc3QgbG90dXNJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2xvdHVzLnBuZ1wiXG5jb25zdCBtYWhpbmRyYUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvbWFoaW5kcmEucG5nXCJcbmNvbnN0IG1hc2VyYXRpSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9tYXNlcmF0aS5wbmdcIlxuY29uc3QgbWF4dXNJbWcgPSBcIi9hc3NldHMvYnJhbmRzL21heHVzLnBuZ1wiXG5jb25zdCBtYXpkYUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvbWF6ZGEucG5nXCJcbmNvbnN0IG1jbGFyZW5JbWcgPSBcIi9hc3NldHMvYnJhbmRzL21jbGFyZW4ucG5nXCJcbmNvbnN0IG1lcmNlZGVzQmVuekltZyA9IFwiL2Fzc2V0cy9icmFuZHMvbWVyY2VkZXMtYmVuei5wbmdcIlxuY29uc3QgbWVyY2VkZXNNYXliYWNoSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9tZXJjZWRlcy1tYXliYWNoLnBuZ1wiXG5jb25zdCBtZ0ltZyA9IFwiL2Fzc2V0cy9icmFuZHMvbWcucG5nXCJcbmNvbnN0IG1pbmlJbWcgPSBcIi9hc3NldHMvYnJhbmRzL21pbmkucG5nXCJcbmNvbnN0IG1pdHN1YmlzaGlJbWcgPSBcIi9hc3NldHMvYnJhbmRzL21pdHN1YmlzaGkucG5nXCJcbmNvbnN0IG1pdHN1b2thSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9taXRzdW9rYS5wbmdcIlxuY29uc3QgbmF6YUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvbmF6YS5wbmdcIlxuY29uc3Qgbmlzc2FuSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9uaXNzYW4ucG5nXCJcbmNvbnN0IG9wZWxJbWcgPSBcIi9hc3NldHMvYnJhbmRzL29wZWwucG5nXCJcbmNvbnN0IHBlcm9kdWFJbWcgPSBcIi9hc3NldHMvYnJhbmRzL3Blcm9kdWEucG5nXCJcbmNvbnN0IHBldWdlb3RJbWcgPSBcIi9hc3NldHMvYnJhbmRzL3BldWdlb3QucG5nXCJcbmNvbnN0IHBvcnNjaGVJbWcgPSBcIi9hc3NldHMvYnJhbmRzL3BvcnNjaGUucG5nXCJcbmNvbnN0IHByb3RvbkltZyA9IFwiL2Fzc2V0cy9icmFuZHMvcHJvdG9uLnBuZ1wiXG5jb25zdCByYW1JbWcgPSBcIi9hc3NldHMvYnJhbmRzL3JhbS5wbmdcIlxuY29uc3QgcmVuYXVsdEltZyA9IFwiL2Fzc2V0cy9icmFuZHMvcmVuYXVsdC5wbmdcIlxuY29uc3Qgcm9sbHNSb3ljZUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvcm9sbHMtcm95Y2UucG5nXCJcbmNvbnN0IHJvdmVySW1nID0gXCIvYXNzZXRzL2JyYW5kcy9yb3Zlci5wbmdcIlxuY29uc3Qgc2FhYkltZyA9IFwiL2Fzc2V0cy9icmFuZHMvc2FhYi5wbmdcIlxuY29uc3Qgc21hcnRJbWcgPSBcIi9hc3NldHMvYnJhbmRzL3NtYXJ0LnBuZ1wiXG5jb25zdCBzc2FuZ1lvbmdJbWcgPSBcIi9hc3NldHMvYnJhbmRzL3NzYW5nLXlvbmcucG5nXCJcbmNvbnN0IHN1YmFydUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvc3ViYXJ1LnBuZ1wiXG5jb25zdCBzdXp1a2lJbWcgPSBcIi9hc3NldHMvYnJhbmRzL3N1enVraS5wbmdcIlxuY29uc3QgdGF0YUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvdGF0YS5wbmdcIlxuY29uc3QgdG95b3RhSW1nID0gXCIvYXNzZXRzL2JyYW5kcy90b3lvdGEucG5nXCJcbmNvbnN0IHR2ckltZyA9IFwiL2Fzc2V0cy9icmFuZHMvdHZyLnBuZ1wiXG5jb25zdCB2b2xrc3dhZ2VuSW1nID0gXCIvYXNzZXRzL2JyYW5kcy92b2xrc3dhZ2VuLnBuZ1wiXG5jb25zdCB2b2x2b0ltZyA9IFwiL2Fzc2V0cy9icmFuZHMvdm9sdm8ucG5nXCJcbmNvbnN0IHdhbGRJbWcgPSBcIi9hc3NldHMvYnJhbmRzL3dhbGQucG5nXCJcbmNvbnN0IHlhbWFoYUltZyA9IFwiL2Fzc2V0cy9icmFuZHMveWFtYWhhLnBuZ1wiXG5jb25zdCB6bmFJbWcgPSBcIi9hc3NldHMvYnJhbmRzL3puYS5wbmdcIlxuXG5leHBvcnQgY29uc3QgY2FyQnJhbmRzTGlzdCA9IFtcbiAge1xuICAgICdpY29uJzogYWxmYVJvbWVvSW1nLFxuICAgICd2YWx1ZSc6ICdBbGZhIFJvbWVvJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogYXNpYUltZyxcbiAgICAndmFsdWUnOiAnQXNpYScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGFzdG9uTWFydGluSW1nLFxuICAgICd2YWx1ZSc6ICdBc3RvbiBNYXJ0aW4nLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBhdWRpSW1nLFxuICAgICd2YWx1ZSc6ICdBdWRpJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogYXVzdGluSW1nLFxuICAgICd2YWx1ZSc6ICdBdXN0aW4nLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBiYWNJbWcsXG4gICAgJ3ZhbHVlJzogJ0JhYycsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGJlbnRsZXlJbWcsXG4gICAgJ3ZhbHVlJzogJ0JlbnRsZXknLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBibXdBbHBpbmFJbWcsXG4gICAgJ3ZhbHVlJzogJ0JNVyBBbHBpbmEnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBibXdJbWcsXG4gICAgJ3ZhbHVlJzogJ0JNVycsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGJ1Zm9yaUltZyxcbiAgICAndmFsdWUnOiAnQnVmb3JpJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogY2FkaWxsYWNJbWcsXG4gICAgJ3ZhbHVlJzogJ0NhZGlsbGFjJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogY2FtSW1nLFxuICAgICd2YWx1ZSc6ICdDYW0nLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBjaGFuYUltZyxcbiAgICAndmFsdWUnOiAnQ2hhbmEnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBjaGFuZ2FuSW1nLFxuICAgICd2YWx1ZSc6ICdDaGFuZ2FuJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogY2hlcnlJbWcsXG4gICAgJ3ZhbHVlJzogJ0NoZXJ5JyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogY2hldnJvbGV0SW1nLFxuICAgICd2YWx1ZSc6ICdDaGV2cm9sZXQnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBjaHJ5c2xlckltZyxcbiAgICAndmFsdWUnOiAnQ2hyeXNsZXInLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBjaXRyb2VuSW1nLFxuICAgICd2YWx1ZSc6ICdDaXRyb2VuJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogZGFpaGF0c3VJbWcsXG4gICAgJ3ZhbHVlJzogJ0RhaWhhdHN1JyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogZGF0c3VuSW1nLFxuICAgICd2YWx1ZSc6ICdEYXRzdW4nLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBkb2RnZUltZyxcbiAgICAndmFsdWUnOiAnRG9kZ2UnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBkb25nZmVuZ0ltZyxcbiAgICAndmFsdWUnOiAnRG9uZ2ZlbmcnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBmZXJyYXJpSW1nLFxuICAgICd2YWx1ZSc6ICdGZXJyYXJpJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogZmlhdEltZyxcbiAgICAndmFsdWUnOiAnRmlhdCcsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGZvZGF5SW1nLFxuICAgICd2YWx1ZSc6ICdGb2RheScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGZvcmRJbWcsXG4gICAgJ3ZhbHVlJzogJ0ZvcmQnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBmb3RvbkltZyxcbiAgICAndmFsdWUnOiAnRm90b24nLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBnb2xkZW5EcmFnb25JbWcsXG4gICAgJ3ZhbHVlJzogJ0dvbGRlbiBEcmFnb24nLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBncmVhdFdhbGxJbWcsXG4gICAgJ3ZhbHVlJzogJ0dyZWF0IFdhbGwnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBoYXZhbEltZyxcbiAgICAndmFsdWUnOiAnSGF2YWwnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBoaWNvbUltZyxcbiAgICAndmFsdWUnOiAnSGljb20nLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBoaW5vSW1nLFxuICAgICd2YWx1ZSc6ICdIaW5vJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogaG9uZGFJbWcsXG4gICAgJ3ZhbHVlJzogJ0hvbmRhJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogaHVtbWVySW1nLFxuICAgICd2YWx1ZSc6ICdIdW1tZXInLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBoeXVuZGFpSW1nLFxuICAgICd2YWx1ZSc6ICdIeXVuZGFpJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogaW1wdWxJbWcsXG4gICAgJ3ZhbHVlJzogJ0ltcHVsJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogaW5maW5pdGlJbWcsXG4gICAgJ3ZhbHVlJzogJ0luZmluaXRpJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogaW5va29tSW1nLFxuICAgICd2YWx1ZSc6ICdJbm9rb20nLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBpc3V6dUltZyxcbiAgICAndmFsdWUnOiAnSXN1enUnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBqYWd1YXJJbWcsXG4gICAgJ3ZhbHVlJzogJ0phZ3VhcicsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGpiY0ltZyxcbiAgICAndmFsdWUnOiAnSmJjJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogamVlcEltZyxcbiAgICAndmFsdWUnOiAnSmVlcCcsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGptY0ltZyxcbiAgICAndmFsdWUnOiAnSm1jJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogam95bG9uZ0ltZyxcbiAgICAndmFsdWUnOiAnSm95bG9uZycsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGthd2FzYWtpSW1nLFxuICAgICd2YWx1ZSc6ICdLYXdhc2FraScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGtpYUltZyxcbiAgICAndmFsdWUnOiAnS2lhJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzoga2luZ0xvbmdJbWcsXG4gICAgJ3ZhbHVlJzogJ0tpbmcgTG9uZycsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGxhbWJvcmdoaW5pSW1nLFxuICAgICd2YWx1ZSc6ICdMYW1ib3JnaGluaScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGxhbmRSb3ZlckltZyxcbiAgICAndmFsdWUnOiAnTGFuZCBSb3ZlcicsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGxleHVzSW1nLFxuICAgICd2YWx1ZSc6ICdMZXh1cycsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGxtZ0ltZyxcbiAgICAndmFsdWUnOiAnTG1nJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogbG90dXNJbWcsXG4gICAgJ3ZhbHVlJzogJ0xvdHVzJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogbWFoaW5kcmFJbWcsXG4gICAgJ3ZhbHVlJzogJ01haGluZHJhJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogbWFzZXJhdGlJbWcsXG4gICAgJ3ZhbHVlJzogJ01hc2VyYXRpJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogbWF4dXNJbWcsXG4gICAgJ3ZhbHVlJzogJ01heHVzJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogbWF6ZGFJbWcsXG4gICAgJ3ZhbHVlJzogJ01hemRhJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogbWNsYXJlbkltZyxcbiAgICAndmFsdWUnOiAnTWNsYXJlbicsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IG1lcmNlZGVzQmVuekltZyxcbiAgICAndmFsdWUnOiAnTWVyY2VkZXMtQmVueicsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IG1nSW1nLFxuICAgICd2YWx1ZSc6ICdNZXJjZWRlcy1NYXliYWNoJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogbWVyY2VkZXNNYXliYWNoSW1nLFxuICAgICd2YWx1ZSc6ICdNZycsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IG1pbmlJbWcsXG4gICAgJ3ZhbHVlJzogJ01pbmknLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBtaXRzdWJpc2hpSW1nLFxuICAgICd2YWx1ZSc6ICdNaXRzdWJpc2hpJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogbWl0c3Vva2FJbWcsXG4gICAgJ3ZhbHVlJzogJ01pdHN1b2thJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogbmF6YUltZyxcbiAgICAndmFsdWUnOiAnTmF6YScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IG5pc3NhbkltZyxcbiAgICAndmFsdWUnOiAnTmlzc2FuJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogb3BlbEltZyxcbiAgICAndmFsdWUnOiAnT3BlbCcsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IHBlcm9kdWFJbWcsXG4gICAgJ3ZhbHVlJzogJ1Blcm9kdWEnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBwZXVnZW90SW1nLFxuICAgICd2YWx1ZSc6ICdQZXVnZW90JyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogcG9yc2NoZUltZyxcbiAgICAndmFsdWUnOiAnUG9yc2NoZScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IHByb3RvbkltZyxcbiAgICAndmFsdWUnOiAnUHJvdG9uJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogcmFtSW1nLFxuICAgICd2YWx1ZSc6ICdSYW0nLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiByZW5hdWx0SW1nLFxuICAgICd2YWx1ZSc6ICdSZW5hdWx0JyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogcm9sbHNSb3ljZUltZyxcbiAgICAndmFsdWUnOiAnUm9sbHMtUm95Y2UnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiByb3ZlckltZyxcbiAgICAndmFsdWUnOiAnUm92ZXInLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBzYWFiSW1nLFxuICAgICd2YWx1ZSc6ICdTYWFiJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogc21hcnRJbWcsXG4gICAgJ3ZhbHVlJzogJ1NtYXJ0JyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogc3NhbmdZb25nSW1nLFxuICAgICd2YWx1ZSc6ICdTc2FuZyBZb25nJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogc3ViYXJ1SW1nLFxuICAgICd2YWx1ZSc6ICdTdWJhcnUnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBzdXp1a2lJbWcsXG4gICAgJ3ZhbHVlJzogJ1N1enVraScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IHRhdGFJbWcsXG4gICAgJ3ZhbHVlJzogJ1RhdGEnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiB0b3lvdGFJbWcsXG4gICAgJ3ZhbHVlJzogJ1RveW90YScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IHR2ckltZyxcbiAgICAndmFsdWUnOiAnVHZyJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogdm9sa3N3YWdlbkltZyxcbiAgICAndmFsdWUnOiAnVm9sa3N3YWdlbicsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IHZvbHZvSW1nLFxuICAgICd2YWx1ZSc6ICdWb2x2bycsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IHdhbGRJbWcsXG4gICAgJ3ZhbHVlJzogJ1dhbGQnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiB5YW1haGFJbWcsXG4gICAgJ3ZhbHVlJzogJ1lhbWFoYScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IHpuYUltZyxcbiAgICAndmFsdWUnOiAnWm5hJyxcbiAgfVxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FyQnJhbmRzSWNvbihkYXRhKSB7XG4gIGlmIChkYXRhKSB7XG4gICAgbGV0IHNlbGVjdGVkQnJhbmQgPSBjYXJCcmFuZHNMaXN0LmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGRhdGEudG9Mb3dlckNhc2UoKTtcbiAgICB9KVxuXG4gICAgaWYgKHNlbGVjdGVkQnJhbmQpIHtcbiAgICAgIHJldHVybiBzZWxlY3RlZEJyYW5kLmljb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FyQnJhbmQoZGF0YSkge1xuICBpZiAoZGF0YSkge1xuICAgIGxldCBzZWxlY3RlZEJyYW5kID0gY2FyQnJhbmRzTGlzdC5maW5kKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBkYXRhLnRvTG93ZXJDYXNlKCk7XG4gICAgfSlcblxuICAgIGlmIChzZWxlY3RlZEJyYW5kKSB7XG4gICAgICByZXR1cm4gc2VsZWN0ZWRCcmFuZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgIGljb24gOiBudWxsXG4gICAgICB9O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gIHtcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgaWNvbiA6IG51bGxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY2FyQnJhbmRzTGlzdCxcbn0iLCJleHBvcnQgY29uc3QgY29sb3JMaXN0ID0gW1xuICAgIHtcbiAgICAgICAgJ2NvZGUnOiAnIzAwMDAwMCcsXG4gICAgICAgICd2YWx1ZSc6ICdibGFjaycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdjb2RlJzogJyNGRkZGRkYnLFxuICAgICAgICAndmFsdWUnOiAnd2hpdGUnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnY29kZSc6ICcjRTdFN0U3JyxcbiAgICAgICAgJ3ZhbHVlJzogJ3NpbHZlcicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdjb2RlJzogJyM3NTc1NzUnLFxuICAgICAgICAndmFsdWUnOiAnZ3JleScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdjb2RlJzogJyNDQTkxMkInLFxuICAgICAgICAndmFsdWUnOiAnYnJvd24nLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnY29kZSc6ICcjNjIzMDA4JyxcbiAgICAgICAgJ3ZhbHVlJzogJ2Jyb256ZScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdjb2RlJzogJyNFM0M1N0QnLFxuICAgICAgICAndmFsdWUnOiAnZ29sZCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdjb2RlJzogJyNGMURDQzMnLFxuICAgICAgICAndmFsdWUnOiAnYmVpZ2UnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnY29kZSc6ICcjRkZGMDA5JyxcbiAgICAgICAgJ3ZhbHVlJzogJ3llbGxvdycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdjb2RlJzogJyNGODc3MTknLFxuICAgICAgICAndmFsdWUnOiAnb3JhbmdlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2NvZGUnOiAnI0RBMDAwMCcsXG4gICAgICAgICd2YWx1ZSc6ICdyZWQnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnY29kZSc6ICcjNzYwMDAwJyxcbiAgICAgICAgJ3ZhbHVlJzogJ21hcm9vbicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdjb2RlJzogJyNBQzAwNUEnLFxuICAgICAgICAndmFsdWUnOiAnbWFnZW50YScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdjb2RlJzogJyNEQzdFQTgnLFxuICAgICAgICAndmFsdWUnOiAncGluaycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdjb2RlJzogJyM2NzBEQTgnLFxuICAgICAgICAndmFsdWUnOiAncHVycGxlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2NvZGUnOiAnIzRFQzM3NScsXG4gICAgICAgICd2YWx1ZSc6ICdncmVlbicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdjb2RlJzogJyMwMTAwN0QnLFxuICAgICAgICAndmFsdWUnOiAnYmx1ZScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdjb2RlJzogJ3doaXRlJyxcbiAgICAgICAgJ3ZhbHVlJzogJ290aGVyJyxcbiAgICB9LFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29sb3JJY29uKGNvbG9yKSB7XG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZENvbG9yID0gY29sb3JMaXN0LmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGNvbG9yLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHNlbGVjdGVkQ29sb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZENvbG9yLmljb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbG9yKGNvbG9yKSB7XG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZENvbG9yID0gY29sb3JMaXN0LmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGNvbG9yLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHNlbGVjdGVkQ29sb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZENvbG9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgICBpY29uOiBudWxsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgaWNvbjogbnVsbFxuICAgICAgICB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbG9yTGlzdCxcbn0iLCJjb25zdCBkaWVzZWxJY29uID0gXCIvYXNzZXRzL2Z1ZWxUeXBlL2RpZXNlbC5wbmdcIlxuY29uc3QgZWxlY3RyaWNJY29uID0gXCIvYXNzZXRzL2Z1ZWxUeXBlL2VsZWN0cmljLnBuZ1wiXG5jb25zdCBoeWJyaWRJY29uID0gXCIvYXNzZXRzL2Z1ZWxUeXBlL2h5YnJpZC5wbmdcIlxuY29uc3QgcGV0cm9sTGVhZGVkSWNvbiA9IFwiL2Fzc2V0cy9mdWVsVHlwZS9wZXRyb2wtKGxlYWRlZCkucG5nXCJcbmNvbnN0IHBldHJvbFVubGVhZGVkSWNvbiA9IFwiL2Fzc2V0cy9mdWVsVHlwZS9wZXRyb2wtKHVubGVhZGVkKS5wbmdcIlxuXG5leHBvcnQgY29uc3QgZnVlbFR5cGVMaXN0ID0gW1xuICAgIHtcbiAgICAgICAgJ2ljb24nOiBkaWVzZWxJY29uLFxuICAgICAgICAndmFsdWUnOiAnZGllc2VsJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBoeWJyaWRJY29uLFxuICAgICAgICAndmFsdWUnOiAnaHlicmlkJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBlbGVjdHJpY0ljb24sXG4gICAgICAgICd2YWx1ZSc6ICdldicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogcGV0cm9sTGVhZGVkSWNvbixcbiAgICAgICAgJ3ZhbHVlJzogJ3BldHJvbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogcGV0cm9sTGVhZGVkSWNvbixcbiAgICAgICAgJ3ZhbHVlJzogJ3BoZXYnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IHBldHJvbFVubGVhZGVkSWNvbixcbiAgICAgICAgJ3ZhbHVlJzogJ3BldHJvbHVscCcsXG4gICAgfVxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RnVlbFR5cGVJY29uKGZ1ZWxUeXBlKSB7XG4gICAgaWYgKGZ1ZWxUeXBlKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZEZ1ZWxUeXBlID0gZnVlbFR5cGVMaXN0LmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT0gZnVlbFR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoc2VsZWN0ZWRGdWVsVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkRnVlbFR5cGUuaWNvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RnVlbFR5cGUoZnVlbFR5cGUpIHtcbiAgICBpZiAoZnVlbFR5cGUpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkRnVlbFR5cGUgPSBmdWVsVHlwZUxpc3QuZmluZChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udmFsdWUudG9Mb3dlckNhc2UoKSA9PSBmdWVsVHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChzZWxlY3RlZEZ1ZWxUeXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRGdWVsVHlwZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgICAgaWNvbjogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgIGljb246IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZnVlbFR5cGVMaXN0LFxufSIsImNvbnN0IGZlZGVyYWxUZXJyaXRvcnlJY29uID0gKFwiL2Fzc2V0cy9zdGF0ZUljb24vZmVkZXJhbCB0ZXJyaXRvcnkucG5nXCIpXG5jb25zdCBqb2hvckljb24gPSAoXCIvYXNzZXRzL3N0YXRlSWNvbi9qb2hvci5wbmdcIilcbmNvbnN0IGtlZGFoSWNvbiA9IChcIi9hc3NldHMvc3RhdGVJY29uL2tlZGFoLnBuZ1wiKVxuY29uc3Qga3VhbGFMdW1wdXJJY29uID0gKFwiL2Fzc2V0cy9zdGF0ZUljb24va3VhbGEgbHVtcHVyLnBuZ1wiKVxuY29uc3QgbGFidWFuRmVkZXJhbEljb24gPSAoXCIvYXNzZXRzL3N0YXRlSWNvbi9sYWJ1YW4tZmVkZXJhbC5wbmdcIilcbmNvbnN0IGxhYnVhbkljb24gPSAoXCIvYXNzZXRzL3N0YXRlSWNvbi9sYWJ1YW4ucG5nXCIpXG5jb25zdCBtZWxha2FJY29uID0gKFwiL2Fzc2V0cy9zdGF0ZUljb24vbWVsYWthLnBuZ1wiKVxuY29uc3QgbmVnZXJpU2VtYmlsYW5JY29uID0gKFwiL2Fzc2V0cy9zdGF0ZUljb24vbmVnZXJpLXNlbWJpbGFuLnBuZ1wiKVxuY29uc3QgcGFoYW5nSWNvbiA9IChcIi9hc3NldHMvc3RhdGVJY29uL3BhaGFuZy5wbmdcIilcbmNvbnN0IHBlbmFuZ0ljb24gPSAoXCIvYXNzZXRzL3N0YXRlSWNvbi9wZW5hbmcucG5nXCIpXG5jb25zdCBwZXJha0ljb24gPSAoXCIvYXNzZXRzL3N0YXRlSWNvbi9wZXJhay5wbmdcIilcbmNvbnN0IHBlcmxpc0ljb24gPSAoXCIvYXNzZXRzL3N0YXRlSWNvbi9wZXJsaXMucG5nXCIpXG5jb25zdCBwdXRyYWpheUZlZGVyYWxJY29uID0gKFwiL2Fzc2V0cy9zdGF0ZUljb24vcHV0cmFqYXktZmVkZXJhbC5wbmdcIilcbmNvbnN0IHNhYmFoSWNvbiA9IChcIi9hc3NldHMvc3RhdGVJY29uL3NhYmFoLnBuZ1wiKVxuY29uc3Qgc2FyYXdha0ljb24gPSAoXCIvYXNzZXRzL3N0YXRlSWNvbi9zYXJhd2FrLnBuZ1wiKVxuY29uc3Qgc2VsYW5nb3JJY29uID0gKFwiL2Fzc2V0cy9zdGF0ZUljb24vc2VsYW5nb3IucG5nXCIpXG5jb25zdCB0ZXJlbmdnYW51SWNvbiA9IChcIi9hc3NldHMvc3RhdGVJY29uL3RlcmVuZ2dhbnUucG5nXCIpXG5jb25zdCBrZWxhbnRhbkljb24gPSAoXCIvYXNzZXRzL3N0YXRlSWNvbi9rZWxhbnRhbi5wbmdcIilcblxuZXhwb3J0IGNvbnN0IFN0YXRlTGlzdCA9IFtcbiAgICB7XG4gICAgICAgICdpY29uJzogZmVkZXJhbFRlcnJpdG9yeUljb24sXG4gICAgICAgICd2YWx1ZSc6ICdGZWRlcmFsIFRlcnJpdG9yeScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogam9ob3JJY29uLFxuICAgICAgICAndmFsdWUnOiAnSm9ob3InLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IGtlZGFoSWNvbixcbiAgICAgICAgJ3ZhbHVlJzogJ0tlZGFoJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBrdWFsYUx1bXB1ckljb24sXG4gICAgICAgICd2YWx1ZSc6ICdLdWFsYSBMdW1wdXInLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IGxhYnVhbkZlZGVyYWxJY29uLFxuICAgICAgICAndmFsdWUnOiAnTGFidWFuIEZlZGVyYWwnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IGxhYnVhbkljb24sXG4gICAgICAgICd2YWx1ZSc6ICdMYWJ1YW4nLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IG1lbGFrYUljb24sXG4gICAgICAgICd2YWx1ZSc6ICdNZWxha2EnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IG5lZ2VyaVNlbWJpbGFuSWNvbixcbiAgICAgICAgJ3ZhbHVlJzogJ05lZ2VyaSBTZW1iaWxhbicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogcGFoYW5nSWNvbixcbiAgICAgICAgJ3ZhbHVlJzogJ1BhaGFuZycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogcGVuYW5nSWNvbixcbiAgICAgICAgJ3ZhbHVlJzogJ1BlbmFuZycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogcGVyYWtJY29uLFxuICAgICAgICAndmFsdWUnOiAnUGVyYWsnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IHBlcmxpc0ljb24sXG4gICAgICAgICd2YWx1ZSc6ICdQZXJsaXMnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IHB1dHJhamF5RmVkZXJhbEljb24sXG4gICAgICAgICd2YWx1ZSc6ICdQdXRyYWpheSBGZWRlcmFsJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBzYWJhaEljb24sXG4gICAgICAgICd2YWx1ZSc6ICdTYWJhaCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogc2FyYXdha0ljb24sXG4gICAgICAgICd2YWx1ZSc6ICdTYXJhd2FrJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBzZWxhbmdvckljb24sXG4gICAgICAgICd2YWx1ZSc6ICdTZWxhbmdvcicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogdGVyZW5nZ2FudUljb24sXG4gICAgICAgICd2YWx1ZSc6ICdUZXJlbmdnYW51JyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBrZWxhbnRhbkljb24sXG4gICAgICAgICd2YWx1ZSc6ICdLZWxhbnRhbicsXG4gICAgfSxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRlSWNvbihzdGF0ZSkge1xuICAgIGlmIChzdGF0ZSkge1xuICAgICAgICBsZXQgc2VsZWN0ZWRTdGF0ZSA9IFN0YXRlTGlzdC5maW5kKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS52YWx1ZS50b0xvd2VyQ2FzZSgpID09IHN0YXRlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHNlbGVjdGVkU3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZFN0YXRlLmljb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRlKHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZFN0YXRlID0gU3RhdGVMaXN0LmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT0gc3RhdGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoc2VsZWN0ZWRTdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkU3RhdGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICAgIGljb246IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICBpY29uOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQge1xuICAgIFN0YXRlTGlzdCxcbn0iLCJleHBvcnQgY29uc3QgTE9BRElORyA9ICdMT0FESU5HJztcblxuZXhwb3J0IGNvbnN0IFNFVF9JTklURURfUkVEVVggPSAnU0VUX0lOSVRFRF9SRURVWCc7XG5cbmV4cG9ydCBjb25zdCBTRVRfRElTQUJMRV9XSU5ET1dfU0NST0xMID0gJ1NFVF9ESVNBQkxFX1dJTkRPV19TQ1JPTEwnO1xuXG5leHBvcnQgY29uc3QgQURWQU5DRV9NT0RFID0gJ0FEVkFOQ0VfTU9ERSc7XG5leHBvcnQgY29uc3QgTE9HSU5fTU9ERSA9ICdMT0dJTl9NT0RFJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9NT0RFID0gJ1JFR0lTVEVSX01PREUnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9BQ1RJVkVfTUVOVSA9ICdVUERBVEVfQUNUSVZFX01FTlUnO1xuXG5leHBvcnQgY29uc3QgRklMVEVSX0NBUl9CUkFORF9NT0RFID0gJ0ZJTFRFUl9DQVJfQlJBTkRfTU9ERSc7XG5leHBvcnQgY29uc3QgRklMVEVSX0NBUl9TRUxFQ1RFRF9DQVJfQlJBTkRfUk9XID0gJ0ZJTFRFUl9DQVJfU0VMRUNURURfQ0FSX0JSQU5EX1JPVyc7XG5leHBvcnQgY29uc3QgRklMVEVSX0NBUl9TRUFSQ0hfS0VZV09SRFMgPSAnRklMVEVSX0NBUl9TRUFSQ0hfS0VZV09SRFMnO1xuXG5leHBvcnQgY29uc3QgRklMVEVSX0NBUl9NT0RFTF9NT0RFID0gJ0ZJTFRFUl9DQVJfTU9ERUxfTU9ERSc7XG5leHBvcnQgY29uc3QgRklMVEVSX0NBUl9TRUxFQ1RFRF9DQVJfTU9ERUxfUk9XID0gJ0ZJTFRFUl9DQVJfU0VMRUNURURfQ0FSX01PREVMX1JPVyc7XG5leHBvcnQgY29uc3QgRklMVEVSX0NBUl9NT0RFTF9TRUFSQ0hfS0VZV09SRFMgPSAnRklMVEVSX0NBUl9NT0RFTF9TRUFSQ0hfS0VZV09SRFMnO1xuXG5leHBvcnQgY29uc3QgRklMVEVSX0NPTE9SX01PREUgPSAnRklMVEVSX0NPTE9SX01PREUnO1xuZXhwb3J0IGNvbnN0IEZJTFRFUl9DQVJfU0VMRUNURURfQ09MT1JfTU9ERUxfUk9XID0gJ0ZJTFRFUl9DQVJfU0VMRUNURURfQ09MT1JfTU9ERUxfUk9XJztcbmV4cG9ydCBjb25zdCBGSUxURVJfQ09MT1JfTU9ERUxfU0VBUkNIX0tFWVdPUkRTID0gJ0ZJTFRFUl9DT0xPUl9NT0RFTF9TRUFSQ0hfS0VZV09SRFMnO1xuXG5leHBvcnQgY29uc3QgRklMVEVSX0JPRFlfVFlQRV9NT0RFID0gJ0ZJTFRFUl9CT0RZX1RZUEVfTU9ERSc7XG5leHBvcnQgY29uc3QgRklMVEVSX0NBUl9TRUxFQ1RFRF9CT0RZX1RZUEVfTU9ERUxfUk9XID0gJ0ZJTFRFUl9DQVJfU0VMRUNURURfQk9EWV9UWVBFX01PREVMX1JPVyc7XG5leHBvcnQgY29uc3QgRklMVEVSX0JPRFlfVFlQRV9NT0RFTF9TRUFSQ0hfS0VZV09SRFMgPSAnRklMVEVSX0JPRFlfVFlQRV9NT0RFTF9TRUFSQ0hfS0VZV09SRFMnO1xuXG5leHBvcnQgY29uc3QgRklMVEVSX0RSSVZFTl9XSEVFTFNfTU9ERSA9ICdGSUxURVJfRFJJVkVOX1dIRUVMU19NT0RFJztcbmV4cG9ydCBjb25zdCBGSUxURVJfQ0FSX1NFTEVDVEVEX0RSSVZFTl9XSEVFTFNfTU9ERUxfUk9XID0gJ0ZJTFRFUl9DQVJfU0VMRUNURURfRFJJVkVOX1dIRUVMU19NT0RFTF9ST1cnO1xuZXhwb3J0IGNvbnN0IEZJTFRFUl9EUklWRU5fV0hFRUxTX01PREVMX1NFQVJDSF9LRVlXT1JEUyA9ICdGSUxURVJfRFJJVkVOX1dIRUVMU19NT0RFTF9TRUFSQ0hfS0VZV09SRFMnO1xuXG5leHBvcnQgY29uc3QgRklMVEVSX0ZVRUxfVFlQRV9NT0RFID0gJ0ZJTFRFUl9GVUVMX1RZUEVfTU9ERSc7XG5leHBvcnQgY29uc3QgRklMVEVSX0NBUl9TRUxFQ1RFRF9GVUVMX1RZUEVfTU9ERUxfUk9XID0gJ0ZJTFRFUl9DQVJfU0VMRUNURURfRlVFTF9UWVBFX01PREVMX1JPVyc7XG5leHBvcnQgY29uc3QgRklMVEVSX0ZVRUxfVFlQRV9NT0RFTF9TRUFSQ0hfS0VZV09SRFMgPSAnRklMVEVSX0ZVRUxfVFlQRV9NT0RFTF9TRUFSQ0hfS0VZV09SRFMnO1xuXG5leHBvcnQgY29uc3QgRklMVEVSX1NUQVRFX01PREUgPSAnRklMVEVSX1NUQVRFX01PREUnO1xuZXhwb3J0IGNvbnN0IEZJTFRFUl9DQVJfU0VMRUNURURfU1RBVEVfTU9ERUxfUk9XID0gJ0ZJTFRFUl9DQVJfU0VMRUNURURfU1RBVEVfTU9ERUxfUk9XJztcbmV4cG9ydCBjb25zdCBGSUxURVJfU1RBVEVfTU9ERUxfU0VBUkNIX0tFWVdPUkRTID0gJ0ZJTFRFUl9TVEFURV9NT0RFTF9TRUFSQ0hfS0VZV09SRFMnO1xuXG5leHBvcnQgY29uc3QgUVVJQ0tfU0VBUkNIX1BST0RVQ1RTX0xJU1QgPSAnUVVJQ0tfU0VBUkNIX1BST0RVQ1RTX0xJU1QnO1xuXG5leHBvcnQgY29uc3QgU0hPV19DT05UQUNUX0xJU1QgPSAnU0hPV19DT05UQUNUX0xJU1QnO1xuXG5leHBvcnQgY29uc3QgU0VUX0FQUExZX1lFQVIgPSAnU0VUX0FQUExZX1lFQVInO1xuZXhwb3J0IGNvbnN0IFNFVF9BUFBMWV9QUklDRSA9ICdTRVRfQVBQTFlfUFJJQ0UnO1xuZXhwb3J0IGNvbnN0IFNFVF9BUFBMWV9NSUxFQUdFID0gJ1NFVF9BUFBMWV9NSUxFQUdFJztcblxuZXhwb3J0IGNvbnN0IEZJTFRFUl9DQVJfQlJBTkRTID0gJ0ZJTFRFUl9DQVJfQlJBTkRTJztcbmV4cG9ydCBjb25zdCBGSUxURVJfQ0FSX01PREVMUyA9ICdGSUxURVJfQ0FSX01PREVMUyc7XG5leHBvcnQgY29uc3QgRklMVEVSX0NPTE9SUyA9ICdGSUxURVJfQ09MT1JTJztcbmV4cG9ydCBjb25zdCBGSUxURVJfQk9EWV9UWVBFUyA9ICdGSUxURVJfQk9EWV9UWVBFUyc7XG5leHBvcnQgY29uc3QgRklMVEVSX0RSSVZFTl9XSEVFTFMgPSAnRklMVEVSX0RSSVZFTl9XSEVFTFMnO1xuZXhwb3J0IGNvbnN0IEZJTFRFUl9GVUVMX1RZUEVTID0gJ0ZJTFRFUl9GVUVMX1RZUEVTJztcbmV4cG9ydCBjb25zdCBGSUxURVJfU1RBVEVTID0gJ0ZJTFRFUl9TVEFURVMnO1xuXG5leHBvcnQgY29uc3QgU0VUX01FTlVfSEVJR0hUID0gJ1NFVF9NRU5VX0hFSUdIVCc7XG5cbmV4cG9ydCBjb25zdCBTRVRfTk9USUZJQ0FUSU9OX1RPS0VOID0gJ1NFVF9OT1RJRklDQVRJT05fVE9LRU4nO1xuZXhwb3J0IGNvbnN0IFNFVF9OT1RJRklDQVRJT05fVE9LRU5fVElNRV9PVVRfREFURSA9ICdTRVRfTk9USUZJQ0FUSU9OX1RPS0VOX1RJTUVfT1VUX0RBVEUnO1xuXG5cblxuLy9mZXRjaCBxdWljayBmaWx0ZXJcbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJDYXJCcmFuZHMoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfQ0FSX0JSQU5EUyxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJDYXJNb2RlbHMoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfQ0FSX01PREVMUyxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJDb2xvcnMoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfQ09MT1JTLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckJvZHlUeXBlcyhkYXRhKXtcbiBcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9CT0RZX1RZUEVTLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckRyaXZlbldoZWVscyhkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9EUklWRU5fV0hFRUxTLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckZ1ZWxUeXBlcyhkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9GVUVMX1RZUEVTLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlclN0YXRlcyhkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9TVEFURVMsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSlcbiAgfVxufVxuLy9lbmQgZmV0Y2ggcXVpY2sgZmlsdGVyXG5leHBvcnQgZnVuY3Rpb24gbG9hZGluZyhkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IExPQURJTkcsXG4gICAgICBwYXlsb2FkIDogZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWR2YW5jZU1vZGUoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBBRFZBTkNFX01PREUsXG4gICAgICBwYXlsb2FkOmRhdGFcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naW5Nb2RlKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogTE9HSU5fTU9ERSxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJNb2RlKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogUkVHSVNURVJfTU9ERSxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQWN0aXZlTWVudShkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFVQREFURV9BQ1RJVkVfTUVOVSxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59XG5cbi8vIGZpbHRlciBjYXJcbi8vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ2FyQnJhbmRNb2RlKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRklMVEVSX0NBUl9CUkFORF9NT0RFLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckNhclNlbGVjdGVkQ2FyQnJhbmRzUm93KGRhdGEsIGluZGV4KXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9DQVJfU0VMRUNURURfQ0FSX0JSQU5EX1JPVyxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ2FyU2VhcmNoS2V5d29yZHMoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfQ0FSX1NFQVJDSF9LRVlXT1JEUyxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59XG4vLyBlbmQgZmlsdGVyIGNhciAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cblxuLy8gZmlsdGVyIG1vZGVsXG4vLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ2FyTW9kZWxNb2RlKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRklMVEVSX0NBUl9NT0RFTF9NT0RFLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckNhclNlbGVjdGVkQ2FyTW9kZWxzUm93KGRhdGEsIGluZGV4KXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9DQVJfU0VMRUNURURfQ0FSX01PREVMX1JPVyxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ2FyTW9kZWxTZWFyY2hLZXl3b3JkcyhkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9DQVJfTU9ERUxfU0VBUkNIX0tFWVdPUkRTLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pXG4gIH1cbn1cbi8vIGVuZCBmaWx0ZXIgbW9kZWwgLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG5cbi8vIGZpbHRlciBjb2xvclxuLy8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJDb2xvck1vZGUoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfQ09MT1JfTU9ERSxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJDYXJTZWxlY3RlZENvbG9yUm93KGRhdGEsIGluZGV4KXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9DQVJfU0VMRUNURURfQ09MT1JfTU9ERUxfUk9XLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJDb2xvclNlYXJjaEtleXdvcmRzKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRklMVEVSX0NPTE9SX01PREVMX1NFQVJDSF9LRVlXT1JEUyxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59XG4vLyBlbmQgZmlsdGVyIGNvbG9yIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckJvZHlUeXBlTW9kZShkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9CT0RZX1RZUEVfTU9ERSxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJDYXJTZWxlY3RlZEJvZHlUeXBlUm93KGRhdGEsIGluZGV4KXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9DQVJfU0VMRUNURURfQk9EWV9UWVBFX01PREVMX1JPVyxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQm9keVR5cGVTZWFyY2hLZXl3b3JkcyhkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9CT0RZX1RZUEVfTU9ERUxfU0VBUkNIX0tFWVdPUkRTLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pXG4gIH1cbn1cbi8vIGVuZCBmaWx0ZXIgYm9keSB0eXBlIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuXG4vLyBmaWx0ZXIgZHJpdmVuIHdoZWVsc1xuLy8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJEcml2ZW5XaGVlbE1vZGUoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfRFJJVkVOX1dIRUVMU19NT0RFLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckNhclNlbGVjdGVkRHJpdmVuV2hlZWxSb3coZGF0YSwgaW5kZXgpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRklMVEVSX0NBUl9TRUxFQ1RFRF9EUklWRU5fV0hFRUxTX01PREVMX1JPVyxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyRHJpdmVuV2hlZWxTZWFyY2hLZXl3b3JkcyhkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9EUklWRU5fV0hFRUxTX01PREVMX1NFQVJDSF9LRVlXT1JEUyxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59XG4vLyBlbmQgZmlsdGVyIGRyaXZlbiB3aGVlbCAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cblxuLy8gZmlsdGVyIGZ1ZWwgdHlwZVxuLy8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJGdWVsVHlwZU1vZGUoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfRlVFTF9UWVBFX01PREUsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ2FyU2VsZWN0ZWRGdWVsVHlwZVJvdyhkYXRhLCBpbmRleCl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfQ0FSX1NFTEVDVEVEX0ZVRUxfVFlQRV9NT0RFTF9ST1csXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgaW5kZXg6IGluZGV4LFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckZ1ZWxUeXBlU2VhcmNoS2V5d29yZHMoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfRlVFTF9UWVBFX01PREVMX1NFQVJDSF9LRVlXT1JEUyxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59XG4vLyBlbmQgZmlsdGVyIGZ1ZWwgdHlwZSAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cblxuLy8gZmlsdGVyIHN0YXRlXG4vLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlclN0YXRlTW9kZShkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9TVEFURV9NT0RFLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckNhclNlbGVjdGVkU3RhdGVSb3coZGF0YSwgaW5kZXgpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRklMVEVSX0NBUl9TRUxFQ1RFRF9TVEFURV9NT0RFTF9ST1csXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgaW5kZXg6IGluZGV4LFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlclN0YXRlU2VhcmNoS2V5d29yZHMoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfU1RBVEVfTU9ERUxfU0VBUkNIX0tFWVdPUkRTLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pXG4gIH1cbn1cbi8vIGVuZCBmaWx0ZXIgc3RhdGUgLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja1NlYXJjaFByb2R1Y3RzTGlzdChtb2RlLCBxdWlja1NlYXJjaENhclNwZWNzRGF0YSwgcXVpY2tTZWFyY2hQcm9kdWN0YWRzRGF0YSwgdmFsdWVzKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFFVSUNLX1NFQVJDSF9QUk9EVUNUU19MSVNULFxuICAgICAgbW9kZTogbW9kZSxcbiAgICAgIHF1aWNrU2VhcmNoQ2FyU3BlY3NEYXRhLFxuICAgICAgcXVpY2tTZWFyY2hQcm9kdWN0YWRzRGF0YSxcbiAgICAgIHZhbHVlcyxcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q29udGFjdExpc3QoYm9vbGVhbil7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBTSE9XX0NPTlRBQ1RfTElTVCxcbiAgICAgIGJvb2xlYW4sXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0QXBwbHlZZWFyKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogU0VUX0FQUExZX1lFQVIsXG4gICAgICBkYXRhLFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEFwcGx5UHJpY2UoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBTRVRfQVBQTFlfUFJJQ0UsXG4gICAgICBkYXRhLFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEFwcGx5TWlsZWFnZShkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFNFVF9BUFBMWV9NSUxFQUdFLFxuICAgICAgZGF0YSxcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRNZW51SGVpZ2h0KGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogU0VUX01FTlVfSEVJR0hULFxuICAgICAgZGF0YSxcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXROb3RpZmljYXRpb25Ub2tlbihkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFNFVF9OT1RJRklDQVRJT05fVE9LRU4sXG4gICAgICBkYXRhLFxuICAgIH0pXG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXROb3RpZmljYXRpb25Ub2tlblRpbWVPdXREYXRlKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogU0VUX05PVElGSUNBVElPTl9UT0tFTl9USU1FX09VVF9EQVRFLFxuICAgICAgZGF0YSxcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRJbml0ZWRSZWR1eChkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFNFVF9JTklURURfUkVEVVgsXG4gICAgICBkYXRhLFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERpc2FibGVXaW5kb3dTY3JvbGwoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBTRVRfRElTQUJMRV9XSU5ET1dfU0NST0xMLFxuICAgICAgZGF0YSxcbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgRkVUQ0hfQ0FSUExBVEVTTElTVCA9ICdGRVRDSF9DQVJQTEFURUxJU1QnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENhclBsYXRlc0xpc3QoZGF0YSl7XG4gICAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBGRVRDSF9DQVJQTEFURVNMSVNULFxuICAgICAgICAgICAgcGF5bG9hZDpkYXRhXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBTRVRfUE9TVF9NT0RBTF9MSUtFX1JFRlJFU0hfSUQgPSAnU0VUX1BPU1RfTU9EQUxfTElLRV9SRUZSRVNIX0lEJztcbmV4cG9ydCBjb25zdCBGRVRDSF9DQVJfRlJFQUtfUE9TVFMgPSAnRkVUQ0hfQ0FSX0ZSRUFLX1BPU1RTJztcbmV4cG9ydCBjb25zdCBGRVRDSF9FRElURURfUE9TVCA9ICdGRVRDSF9FRElURURfUE9TVCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRQb3N0TW9kYWxMaWtlUmVmcmVzaElkKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogU0VUX1BPU1RfTU9EQUxfTElLRV9SRUZSRVNIX0lELFxuICAgICAgcGF5bG9hZDpkYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENhckZyZWFrUG9zdHMoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9DQVJfRlJFQUtfUE9TVFMsXG4gICAgICBwYXlsb2FkOmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoRWRpdGVkUG9zdChkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX0VESVRFRF9QT1NULFxuICAgICAgcGF5bG9hZDpkYXRhLFxuICAgIH0pO1xuICB9XG59IiwiZXhwb3J0IGNvbnN0IEZFVENIX1JFVklTSU9OX0FOU1dFUkVEX1FVRVNUSU9OUyA9ICdGRVRDSF9SRVZJU0lPTl9BTlNXRVJFRF9RVUVTVElPTlMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hSZXZpc2lvbkFuc3dlcmVkUXVlc3Rpb25zKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfUkVWSVNJT05fQU5TV0VSRURfUVVFU1RJT05TLFxuICAgICAgcGF5bG9hZDpkYXRhLFxuICAgIH0pO1xuICB9XG59IiwiZXhwb3J0IGNvbnN0IEZFVENIX0NMSUVOVF9TT0NLRVRfSU8gPSAnRkVUQ0hfQ0xJRU5UX1NPQ0tFVF9JTyc7XG5leHBvcnQgY29uc3QgQ0xFQVJfQ0xJRU5UX1NPQ0tFVF9JTyA9ICdDTEVBUl9DTElFTlRfU09DS0VUX0lPJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQ2xpZW50U29ja2V0SW8oZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9DTElFTlRfU09DS0VUX0lPLFxuICAgICAgcGF5bG9hZDpkYXRhLFxuICAgIH0pO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDbGllbnRTb2NrZXRJbyhkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IENMRUFSX0NMSUVOVF9TT0NLRVRfSU8sXG4gICAgfSk7XG4gIH1cbn0iLCJleHBvcnQgY29uc3QgRkVUQ0hfTkVXUyA9ICdGRVRDSF9ORVdTJztcbmV4cG9ydCBjb25zdCBGRVRDSF9DTFVCID0gJ0ZFVENIX0NMVUInO1xuZXhwb3J0IGNvbnN0IEZFVENIX1BSSUNFID0gJ0ZFVENIX1BSSUNFJztcbmV4cG9ydCBjb25zdCBGRVRDSF9QT1BVTEFSID0gJ0ZFVENIX1BPUFVMQVInO1xuZXhwb3J0IGNvbnN0IEZFVENIX1BPUFVMQVJDQVJTID0gJ0ZFVENIX1BPUFVMQVJDQVJTJztcbmV4cG9ydCBjb25zdCBGRVRDSF9DQVJOQU1FID0gJ0ZFVENIX0NBUk5BTUUnO1xuZXhwb3J0IGNvbnN0IEZFVENIX0NBUkRFVEFJTFMgPSAnRkVUQ0hfQ0FSREVUQUlMUyc7XG5leHBvcnQgY29uc3QgRkVUQ0hfQlJBTkRTID0gJ0ZFVENIX0JSQU5EUyc7XG5leHBvcnQgY29uc3QgRkVUQ0hfQlJBTkRERVRBSUwgPSAnRkVUQ0hfQlJBTkRERVRBSUwnO1xuZXhwb3J0IGNvbnN0IEZFVENIX0JSQU5EQ0FSUyA9ICdGRVRDSF9CUkFORENBUlMnO1xuZXhwb3J0IGNvbnN0IEZFVENIX0RFVEFJTFMgPSAnRkVUQ0hfREVUQUlMUyc7XG5leHBvcnQgY29uc3QgRkVUQ0hfRlVFTCA9ICdGRVRDSF9GVUVMJztcbmV4cG9ydCBjb25zdCBGRVRDSF9GSUxURVJFRF9DT01QQVJFX0RBVEEgPSAnRkVUQ0hfRklMVEVSRURfQ09NUEFSRV9EQVRBJztcbmV4cG9ydCBjb25zdCBGRVRDSF9QRUVSX0NPTVBBUkVfQ0FSUyA9ICdGRVRDSF9QRUVSX0NPTVBBUkVfQ0FSUyc7XG5leHBvcnQgY29uc3QgRkVUQ0hfQ09NUEFSRV9ORVdDQVJfSURTID0gJ0ZFVENIX0NPTVBBUkVfTkVXQ0FSX0lEUyc7XG5leHBvcnQgY29uc3QgQUREX0NPTVBBUkVfTkVXQ0FSX0lEID0gJ0FERF9DT01QQVJFX05FV0NBUl9JRCc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0NPTVBBUkVfTkVXQ0FSX0lEID0gJ1JFTU9WRV9DT01QQVJFX05FV0NBUl9JRCc7XG5leHBvcnQgY29uc3QgRkVUQ0hfQ09NUEFSRV9fTkVXQ0FSX0xJTUlUID0gJ0ZFVENIX0NPTVBBUkVfX05FV0NBUl9MSU1JVCc7XG5leHBvcnQgY29uc3QgRkVUQ0hfTkVXX0NBUl9GSUxURVJfR1JPVVAgPSAnRkVUQ0hfTkVXX0NBUl9GSUxURVJfR1JPVVAnO1xuZXhwb3J0IGNvbnN0IFJFU0VUX05FV19DQVJfRklMVEVSX0dST1VQID0gJ1JFU0VUX05FV19DQVJfRklMVEVSX0dST1VQJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoTmV3cyhkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX05FV1MsXG4gICAgICBwYXlsb2FkOmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQ2x1YihkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX0NMVUIsXG4gICAgICBwYXlsb2FkOmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUHJpY2UoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9QUklDRSxcbiAgICAgIHBheWxvYWQ6ZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQb3B1bGFyKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfUE9QVUxBUixcbiAgICAgIHBheWxvYWQ6ZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQb3B1bGFyQ2FycyhkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX1BPUFVMQVJDQVJTLFxuICAgICAgcGF5bG9hZDpkYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENhck5hbWUoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9DQVJOQU1FLFxuICAgICAgcGF5bG9hZDpkYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENhckRldGFpbHMoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9DQVJERVRBSUxTLFxuICAgICAgcGF5bG9hZDpkYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEJyYW5kcyhkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX0JSQU5EUyxcbiAgICAgIHBheWxvYWQ6ZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hCcmFuZERldGFpbChkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX0JSQU5EREVUQUlMLFxuICAgICAgcGF5bG9hZDpkYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEJyYW5kQ2FycyhkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX0JSQU5EQ0FSUyxcbiAgICAgIHBheWxvYWQ6ZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hEZXRhaWxzKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfREVUQUlMUyxcbiAgICAgIHBheWxvYWQ6ZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hGdWVsKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfRlVFTCxcbiAgICAgIHBheWxvYWQ6ZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyZWRDb21wYXJlRGF0YShkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX0ZJTFRFUkVEX0NPTVBBUkVfREFUQSxcbiAgICAgIHBheWxvYWQ6ZGF0YVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENvbXBhcmVOZXdDYXJJZHMoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9DT01QQVJFX05FV0NBUl9JRFMsXG4gICAgICBwYXlsb2FkOmRhdGFcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ29tcGFyZU5ld0NhcklkKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQUREX0NPTVBBUkVfTkVXQ0FSX0lELFxuICAgICAgcGF5bG9hZDpkYXRhXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNvbXBhcmVOZXdDYXJJZChkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFJFTU9WRV9DT01QQVJFX05FV0NBUl9JRCxcbiAgICAgIHBheWxvYWQ6ZGF0YVxuICAgIH0pO1xuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQ29tcGFyZU5ld0NhckxpbWl0KGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfQ09NUEFSRV9fTkVXQ0FSX0xJTUlULFxuICAgICAgcGF5bG9hZDpkYXRhXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUGVlckNvbXBhcmVDYXJzKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfUEVFUl9DT01QQVJFX0NBUlMsXG4gICAgICBwYXlsb2FkOmRhdGFcbiAgICB9KTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoTmV3Q2FyRmlsdGVyR3JvdXAoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9ORVdfQ0FSX0ZJTFRFUl9HUk9VUCxcbiAgICAgIHBheWxvYWQ6ZGF0YVxuICAgIH0pO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcmVzZXROZXdDYXJGaWx0ZXJHcm91cChkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFJFU0VUX05FV19DQVJfRklMVEVSX0dST1VQLFxuICAgIH0pO1xuICB9XG59IiwiZXhwb3J0IGNvbnN0IEZFVENIX1BST0RVQ1RTTElTVCA9ICdGRVRDSF9QUk9EVUNUU0xJU1QnO1xuZXhwb3J0IGNvbnN0IEZFVENIX1BST0RVQ1RTTElTVF9IT01FID0gJ0ZFVENIX1BST0RVQ1RTTElTVF9IT01FJztcbmV4cG9ydCBjb25zdCBQVVNIX1BST0RVQ1RTTElTVCA9ICdQVVNIX1BST0RVQ1RTTElTVCc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1BST0RVQ1RTTElTVCA9ICdSRU1PVkVfUFJPRFVDVFNMSVNUJztcbmV4cG9ydCBjb25zdCBVUERBVEVfUFJPRFVDVFNMSVNUID0gJ1VQREFURV9QUk9EVUNUU0xJU1QnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9BQ1RJVkVfSURfUFJPRFVDVFNfTElTVCA9ICdVUERBVEVfQUNUSVZFX0lEX1BST0RVQ1RTX0xJU1QnO1xuZXhwb3J0IGNvbnN0IEFERF9DT01QQVJFX19QUk9EVUNUX0lEID0gJ0FERF9DT01QQVJFX19QUk9EVUNUX0lEJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ09NUEFSRV9QUk9EVUNUX0lEID0gJ1JFTU9WRV9DT01QQVJFX1BST0RVQ1RfSUQnO1xuZXhwb3J0IGNvbnN0IENMRUFSX0NPTVBBUkVfUFJPRFVDVF9JRFMgPSAnQ0xFQVJfQ09NUEFSRV9QUk9EVUNUX0lEUyc7XG5leHBvcnQgY29uc3QgUEFUQ0hfQ09NUEFSRV9QUk9EVUNUX0lEUyA9ICdQQVRDSF9DT01QQVJFX1BST0RVQ1RfSURTJztcbmV4cG9ydCBjb25zdCBGRVRDSF9GSUxURVJFRF9DT01QQVJFX0RBVEEgPSAnRkVUQ0hfRklMVEVSRURfQ09NUEFSRV9EQVRBJztcbmV4cG9ydCBjb25zdCBGRVRDSF9GRUFUVVJFU19MSVNUID0gJ0ZFVENIX0ZFQVRVUkVTX0xJU1QnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9DSEVDS0VEX0ZFQVRVUkVTX0RBVEUgPSAnVVBEQVRFX0NIRUNLRURfRkVBVFVSRVNfREFURSc7XG5leHBvcnQgY29uc3QgRkVUQ0hfQ09NUEFSRV9MSU1JVCA9ICdGRVRDSF9DT01QQVJFX0xJTUlUJztcbmV4cG9ydCBjb25zdCBGRVRDSF9QUk9EVUNUX0ZJTFRFUl9PUFRJT05TID0gJ0ZFVENIX1BST0RVQ1RfRklMVEVSX09QVElPTlMnO1xuZXhwb3J0IGNvbnN0IENMRUFSX1BST0RVQ1RfRklMVEVSX09QVElPTlMgPSAnQ0xFQVJfUFJPRFVDVF9GSUxURVJfT1BUSU9OUyc7XG5leHBvcnQgY29uc3QgRkVUQ0hfUFJPRFVDVF9GSUxURVJfR1JPVVAgPSAnRkVUQ0hfUFJPRFVDVF9GSUxURVJfR1JPVVAnO1xuZXhwb3J0IGNvbnN0IENMRUFSX1BST0RVQ1RfRklMVEVSX0dST1VQID0gJ0NMRUFSX1BST0RVQ1RfRklMVEVSX0dST1VQJztcbmV4cG9ydCBjb25zdCBGRVRDSF9QUk9EVUNUX0ZJTFRFUl9DT05GSUcgPSAnRkVUQ0hfUFJPRFVDVF9GSUxURVJfQ09ORklHJztcbmV4cG9ydCBjb25zdCBDTEVBUl9QUk9EVUNUX0ZJTFRFUl9DT05GSUcgPSAnQ0xFQVJfUFJPRFVDVF9GSUxURVJfQ09ORklHJztcbmV4cG9ydCBjb25zdCBGRVRDSF9GSUxURVJfTU9EQUxfU1RBVEUgPSAnRkVUQ0hfRklMVEVSX01PREFMX1NUQVRFJztcbmV4cG9ydCBjb25zdCBTRVRfUFJPRFVDVF9MSVNUX0xPQURJTkcgPSAnU0VUX1BST0RVQ1RfTElTVF9MT0FESU5HJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUHJvZHVjdHNMaXN0KGRhdGEpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX1BST0RVQ1RTTElTVCxcbiAgICAgIHBheWxvYWQ6IGRhdGFcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQcm9kdWN0c0xpc3RIb21lKGRhdGEpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX1BST0RVQ1RTTElTVF9IT01FLFxuICAgICAgcGF5bG9hZDogZGF0YVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoUHJvZHVjdHNMaXN0KGRhdGEpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFBVU0hfUFJPRFVDVFNMSVNULFxuICAgICAgcGF5bG9hZDogZGF0YVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9kdWN0c0xpc3QoZGF0YSkge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogUkVNT1ZFX1BST0RVQ1RTTElTVCxcbiAgICAgIHBheWxvYWQ6IGRhdGFcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUHJvZHVjdExpc3QoZGF0YSkge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogVVBEQVRFX1BST0RVQ1RTTElTVCxcbiAgICAgIHBheWxvYWQ6IGRhdGFcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQWN0aXZlSWRQcm9kdWN0TGlzdChpZCkge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogVVBEQVRFX0FDVElWRV9JRF9QUk9EVUNUU19MSVNULFxuICAgICAgaWQsXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ29tcGFyZVByb2R1Y3RJZHMoKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBDTEVBUl9DT01QQVJFX1BST0RVQ1RfSURTLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJlZENvbXBhcmVEYXRhKGRhdGEpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX0ZJTFRFUkVEX0NPTVBBUkVfREFUQSxcbiAgICAgIHBheWxvYWQ6IGRhdGFcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hGZWF0dXJlc0xpc3QoZGF0YSkge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfRkVBVFVSRVNfTElTVCxcbiAgICAgIHBheWxvYWQ6IGRhdGFcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ2hlY2tlZEZlYXR1cmVzRGF0ZShkYXRhKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBVUERBVEVfQ0hFQ0tFRF9GRUFUVVJFU19EQVRFLFxuICAgICAgcGF5bG9hZDogZGF0YVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENvbXBhcmVDYXJMaW1pdChkYXRhKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9DT01QQVJFX0xJTUlULFxuICAgICAgcGF5bG9hZDogZGF0YVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDb21wYXJlUHJvZHVjdElkKGRhdGEpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEFERF9DT01QQVJFX19QUk9EVUNUX0lELFxuICAgICAgcGF5bG9hZDogZGF0YVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDb21wYXJlUHJvZHVjdElkKGRhdGEpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFJFTU9WRV9DT01QQVJFX1BST0RVQ1RfSUQsXG4gICAgICBwYXlsb2FkOiBkYXRhXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoQ29tcGFyZVByb2R1Y3RJZHMoZGF0YSkge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogUEFUQ0hfQ09NUEFSRV9QUk9EVUNUX0lEUyxcbiAgICAgIHBheWxvYWQ6IGRhdGFcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQcm9kdWN0RmlsdGVyT3B0aW9ucyhkYXRhKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9QUk9EVUNUX0ZJTFRFUl9PUFRJT05TLFxuICAgICAgcGF5bG9hZDogZGF0YVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclByb2R1Y3RGaWx0ZXJPcHRpb25zKGRhdGEpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IENMRUFSX1BST0RVQ1RfRklMVEVSX09QVElPTlMsXG4gICAgICBwYXlsb2FkOiB7fSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQcm9kdWN0RmlsdGVyR3JvdXAoZGF0YSkge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfUFJPRFVDVF9GSUxURVJfR1JPVVAsXG4gICAgICBwYXlsb2FkOiBkYXRhXG4gICAgfSk7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclByb2R1Y3RGaWx0ZXJHcm91cChkYXRhKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBDTEVBUl9QUk9EVUNUX0ZJTFRFUl9HUk9VUCxcbiAgICAgIHBheWxvYWQ6IHt9LFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFByb2R1Y3RGaWx0ZXJDb25maWcoZGF0YSkge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfUFJPRFVDVF9GSUxURVJfQ09ORklHLFxuICAgICAgcGF5bG9hZDogZGF0YVxuICAgIH0pO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY2xlYXJQcm9kdWN0RmlsdGVyQ29uZmlnKCkge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQ0xFQVJfUFJPRFVDVF9GSUxURVJfQ09ORklHLFxuICAgICAgcGF5bG9hZDoge30sXG4gICAgfSk7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEZpbHRlck1vZGFsU3RhdGUoZGF0YSkge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfRklMVEVSX01PREFMX1NUQVRFLFxuICAgICAgcGF5bG9hZDogZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNldFByb2R1Y3RMaXN0TG9hZGluZyhkYXRhKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBTRVRfUFJPRFVDVF9MSVNUX0xPQURJTkcsXG4gICAgICBwYXlsb2FkOiBkYXRhLFxuICAgIH0pO1xuICB9XG59IiwiLy9BY3Rpb24gVHlwZXNcbmV4cG9ydCBjb25zdCBTVEVQU19QUk9QU19DVVJSRU5UID0gJ1NURVBTX1BST1BTX0NVUlJFTlQnO1xuZXhwb3J0IGNvbnN0IEZPUk1fT05FID0gJ0ZPUk1fT05FJztcblxuLy9BY3Rpb24gQ3JlYXRvclxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzUHJvcHNDdXJyZW50KGRhdGEpe1xuICAgIHJldHVybihkaXNwYXRjaCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBTVEVQU19QUk9QU19DVVJSRU5ULFxuICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtT25lKGRhdGEpe1xuICAgIHJldHVybihkaXNwYXRjaCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBGT1JNX09ORSxcbiAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiLy9BY3Rpb24gVHlwZXNcbmV4cG9ydCBjb25zdCBVUERBVEVfU0VMTEVSX1BST0ZJTEUgPSBcIlVQREFURV9TRUxMRVJfUFJPRklMRVwiO1xuXG5cbi8vQWN0aW9uIENyZWF0b3JcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTZWxsZXJQcm9maWxlKGRhdGEpe1xuICAgIHJldHVybihkaXNwYXRjaCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBVUERBVEVfU0VMTEVSX1BST0ZJTEUsXG4gICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBVUERBVEVfU09DS0VUX0lORk8gPSAnVVBEQVRFX1NPQ0tFVF9JTkZPJztcbmV4cG9ydCBjb25zdCBERUxFVEVfU09DS0VUX0lORk8gPSAnREVMRVRFX1NPQ0tFVF9JTkZPJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVNvY2tldEluZm8oc29ja2V0SW5mbyl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBVUERBVEVfU09DS0VUX0lORk8sXG4gICAgICBwYXlsb2FkOnNvY2tldEluZm9cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlU29ja2V0SW5mbygpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogREVMRVRFX1NPQ0tFVF9JTkZPLFxuICAgICAgcGF5bG9hZDpmYWxzZVxuICAgIH0pO1xuICB9XG59IiwiZXhwb3J0IGNvbnN0IExPR0lOX1NVQ0NFU1NGVUwgPSAnTE9HSU5fU1VDQ0VTU0ZVTCc7XG5leHBvcnQgY29uc3QgTE9HT1VUX1NVQ0NFU1NGVUwgPSAnTE9HT1VUX1NVQ0NFU1NGVUwnO1xuZXhwb3J0IGNvbnN0IEFERFJFU1NfQk9PS19GT1JNID0gJ0FERFJFU1NfQk9PS19GT1JNJztcbmV4cG9ydCBjb25zdCBCQU5LX0ZPUk0gPSAnQkFOS19GT1JNJztcbmV4cG9ydCBjb25zdCBDQVJEX0ZPUk0gPSAnQ0FSRF9GT1JNJztcbmV4cG9ydCBjb25zdCBTRVRfVVNFUiA9ICdTRVRfVVNFUic7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpblN1Y2Nlc3NmdWwodXNlckluZm8pe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogTE9HSU5fU1VDQ0VTU0ZVTCxcbiAgICAgIHBheWxvYWQ6dXNlckluZm9cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nb3V0U3VjY2Vzc2Z1bCgpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogTE9HT1VUX1NVQ0NFU1NGVUwsXG4gICAgICBwYXlsb2FkOmZhbHNlXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFVzZXIodXNlckluZm8pe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogU0VUX1VTRVIsXG4gICAgICBwYXlsb2FkOnVzZXJJbmZvXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZHJlc3NCb29rRm9ybShmb3JtKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEFERFJFU1NfQk9PS19GT1JNLFxuICAgICAgcGF5bG9hZDpmb3JtXG4gICAgfSk7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBjYXJkRm9ybShmb3JtKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IENBUkRfRk9STSxcbiAgICAgIHBheWxvYWQ6Zm9ybVxuICAgIH0pO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gYmFua0Zvcm0oZm9ybSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBCQU5LX0ZPUk0sXG4gICAgICBwYXlsb2FkOmZvcm1cbiAgICB9KTtcbiAgfVxufSIsImV4cG9ydCBjb25zdCBBRERfTElLRSA9ICdBRERfTElLRSc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0xJS0UgPSAnUkVNT1ZFX0xJS0UnO1xuZXhwb3J0IGNvbnN0IEFERF9CT09LTUFSSyA9ICdBRERfQk9PS01BUksnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9CT09LTUFSSyA9ICdSRU1PVkVfQk9PS01BUksnO1xuZXhwb3J0IGNvbnN0IEFERF9MSUtFX01TRyA9ICdBRERfTElLRV9NU0cnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9MSUtFX01TRyA9ICdSRU1PVkVfTElLRV9NU0cnO1xuIFxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTGlrZSh2YWx1ZSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBBRERfTElLRSxcbiAgICAgIHZhbHVlOnZhbHVlXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUxpa2UodmFsdWUpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogUkVNT1ZFX0xJS0UsXG4gICAgICB2YWx1ZTp2YWx1ZVxuICAgIH0pO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gYWRkQm9va21hcmsodmFsdWUpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQUREX0JPT0tNQVJLLFxuICAgICAgdmFsdWU6dmFsdWVcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQm9va21hcmsodmFsdWUpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogUkVNT1ZFX0JPT0tNQVJLLFxuICAgICAgdmFsdWU6dmFsdWVcbiAgICB9KTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGFkZExpa2VNc2codmFsdWUpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQUREX0xJS0VfTVNHLFxuICAgICAgdmFsdWU6dmFsdWVcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTGlrZU1zZyh2YWx1ZSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBSRU1PVkVfTElLRV9NU0csXG4gICAgICB2YWx1ZTp2YWx1ZVxuICAgIH0pO1xuICB9XG59IiwiZXhwb3J0IGNvbnN0IEZFVENIX1ZBUklBTlQgPSAnRkVUQ0hfVkFSSUFOVCc7XG5leHBvcnQgY29uc3QgQ0xFQVJfVkFSSUFOVCA9ICdDTEVBUl9WQVJJQU5UJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoVmFyaWFudChkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX1ZBUklBTlQsXG4gICAgICBwYXlsb2FkOmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyVmFyaWFudChkYXRhKXtcbiAgICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IENMRUFSX1ZBUklBTlQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgIiwiXG5cbmltcG9ydCB7IExPR0lOX1NVQ0NFU1NGVUwsIExPR09VVF9TVUNDRVNTRlVMLCBsb2dpblN1Y2Nlc3NmdWwsIGxvZ291dFN1Y2Nlc3NmdWwsIFNFVF9VU0VSIH0gZnJvbSAnLi9hY3Rpb25zL3VzZXItYWN0aW9ucyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgRkVUQ0hfQ09NUEFSRV9MSU1JVCwgRkVUQ0hfUFJPRFVDVFNMSVNUX0hPTUUsIEFERF9DT01QQVJFX19QUk9EVUNUX0lELCBQQVRDSF9DT01QQVJFX1BST0RVQ1RfSURTLCBDTEVBUl9DT01QQVJFX1BST0RVQ1RfSURTLCBSRU1PVkVfQ09NUEFSRV9QUk9EVUNUX0lEIH0gZnJvbSAnLi9hY3Rpb25zL3Byb2R1Y3RzTGlzdC1hY3Rpb25zJztcbmltcG9ydCBsb2NhbFN0b3JhZ2UgZnJvbSAnbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgeyBGRVRDSF9DTElFTlRfU09DS0VUX0lPLCBDTEVBUl9DTElFTlRfU09DS0VUX0lPIH0gZnJvbSAnLi9hY3Rpb25zL2xpdmUtYWN0aW9uJztcbmltcG9ydCB7IFVQREFURV9TT0NLRVRfSU5GTywgREVMRVRFX1NPQ0tFVF9JTkZPIH0gZnJvbSAnLi9hY3Rpb25zL3NvY2tldFJlZnJlc2gtYWN0aW9ucyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBpc1ZhbGlkTnVtYmVyIH0gZnJvbSAnLi4vY29tbW9uLWZ1bmN0aW9uJztcblxuLy9Ob3Qgc3VwcG9ydGVkIGZvciBtdWx0aXBsZSBzYW1lIGFjdGlvbiB1cGRhdGUgeWV0XG4vL0V4LiBBRERfQ09NUEFSRV9fUFJPRFVDVF9JRCBmb3IgdHdpY2UsIGkgd2lsbCBvbmx5IHRha2UgdGhlIGxhc3QgMS4gU2FtZSBhY3Rpb25zIGJlZm9yZSBsYXN0IG9uZSB3aWxsIGJlIGlnbm9yZWQ7XG5leHBvcnQgY29uc3Qgc3RhdGVQZXJzaXN0QWN0aW9ucyA9IFtcbiAge1xuICAgIGFjdGlvbjogTE9HSU5fU1VDQ0VTU0ZVTCxcbiAgICByZWR1Y2VyOiAndXNlcicsXG4gIH0sXG4gIHtcbiAgICBhY3Rpb246IExPR09VVF9TVUNDRVNTRlVMLFxuICAgIHJlZHVjZXI6ICd1c2VyJyxcbiAgfSxcbiAge1xuICAgIGFjdGlvbjogU0VUX1VTRVIsXG4gICAgcmVkdWNlcjogJ3VzZXInLFxuICB9LFxuICB7XG4gICAgYWN0aW9uOiBGRVRDSF9DT01QQVJFX0xJTUlULFxuICAgIHJlZHVjZXI6ICdwcm9kdWN0c0xpc3QnLFxuICB9LFxuICAvLyB7XG4gIC8vICAgYWN0aW9uIDogQUREX0NPTVBBUkVfX1BST0RVQ1RfSUQsXG4gIC8vIHJlZHVjZXIgOiAncHJvZHVjdExpc3QnLFxuICAvLyB9LFxuICB7XG4gICAgYWN0aW9uOiBQQVRDSF9DT01QQVJFX1BST0RVQ1RfSURTLFxuICAgIHJlZHVjZXI6ICdwcm9kdWN0c0xpc3QnLFxuICB9LFxuICB7XG4gICAgYWN0aW9uOiBDTEVBUl9DT01QQVJFX1BST0RVQ1RfSURTLFxuICAgIHJlZHVjZXI6ICdwcm9kdWN0c0xpc3QnLFxuICB9LFxuICB7XG4gICAgYWN0aW9uOiBSRU1PVkVfQ09NUEFSRV9QUk9EVUNUX0lELFxuICAgIHJlZHVjZXI6ICdwcm9kdWN0c0xpc3QnLFxuICB9LFxuICB7XG4gICAgYWN0aW9uOiBGRVRDSF9DTElFTlRfU09DS0VUX0lPLFxuICAgIHJlZHVjZXI6ICdzb2NrZXRSZWZyZXNoJyxcbiAgfSxcbiAge1xuICAgIGFjdGlvbjogQ0xFQVJfQ0xJRU5UX1NPQ0tFVF9JTyxcbiAgICByZWR1Y2VyOiAnc29ja2V0UmVmcmVzaCcsXG4gIH0sXG4gIHtcbiAgICBhY3Rpb246IFVQREFURV9TT0NLRVRfSU5GTyxcbiAgICByZWR1Y2VyOiAnc29ja2V0UmVmcmVzaCcsXG4gIH0sXG4gIHtcbiAgICBhY3Rpb246IERFTEVURV9TT0NLRVRfSU5GTyxcbiAgICByZWR1Y2VyOiAnc29ja2V0UmVmcmVzaCcsXG4gIH0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gcGVyc2lzdFJlZHV4KHJlZHVjZXIsIGRhdGEpIHtcblxuICBpZiAocmVkdWNlciAmJiBfLmlzUGxhaW5PYmplY3QoZGF0YSkgJiYgIV8uaXNFbXB0eShkYXRhKSkge1xuICAgIGxldCByZWR1eFN0YXRlcyA9IGxvY2FsU3RvcmFnZS5nZXQoJ3JlZHV4Jyk7XG4gICAgaWYgKCFfLmlzUGxhaW5PYmplY3QocmVkdXhTdGF0ZXMpKSB7XG4gICAgICByZWR1eFN0YXRlcyA9IHt9O1xuICAgIH1cblxuICAgIHJlZHV4U3RhdGVzW3JlZHVjZXJdID0gZGF0YTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0KCdyZWR1eCcsIHJlZHV4U3RhdGVzKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJc05lZWRQZXJzaXN0KGFjdGlvbikge1xuICBpZiAoYWN0aW9uKSB7XG4gICAgcmV0dXJuIF8uc29tZShzdGF0ZVBlcnNpc3RBY3Rpb25zIHx8IFtdIHx8IFtdLCBbJ2FjdGlvbicsIGFjdGlvbl0pIHx8IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tOZWVkUGVyc2lzdChhY3Rpb24sIHJlZHVjZXIsIGRhdGEsIGlzUmVzdG9yZURhdGEpIHtcbiAgbGV0IG5lZWRQZXJzaXN0ID0gY2hlY2tJc05lZWRQZXJzaXN0KGFjdGlvbik7XG4gIGxldCBwZXJzaXN0T2JqID0gZ2V0UGVyc2lzdE9iaihhY3Rpb24pO1xuXG4gIGlmIChuZWVkUGVyc2lzdCAmJiBfLmdldChwZXJzaXN0T2JqLCAncmVkdWNlcicpID09IHJlZHVjZXIpIHtcbiAgICBsZXQgcGVyc2lzdGVkU3RhdGVzID0gZ2V0TG9jYWxTdG9yYWdlUGVyc2lzdFN0YXRlcyhfLmdldChwZXJzaXN0T2JqLCAncmVkdWNlcicpKTtcbiAgICBsZXQgc2VsZWN0ZWRQZXJzaXN0ZWRTdGF0ZSA9IF8uZmluZChwZXJzaXN0ZWRTdGF0ZXMsIHtcbiAgICAgIHBlcnNpc3RPYmo6IHtcbiAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgc2VxdWVuY2UgPSAwO1xuXG4gICAgaWYgKCFpc1Jlc3RvcmVEYXRhIHx8ICFpc1ZhbGlkTnVtYmVyKF8uZ2V0KHNlbGVjdGVkUGVyc2lzdGVkU3RhdGUsICdzZXF1ZW5jZScpKSkge1xuICAgICAgc2VxdWVuY2UgPSBfLmdldChfLm1heEJ5KHBlcnNpc3RlZFN0YXRlcyB8fCBbXSwgJ3NlcXVlbmNlJyksICdzZXF1ZW5jZScpO1xuICAgICAgaWYgKCFpc1ZhbGlkTnVtYmVyKHNlcXVlbmNlKSkge1xuICAgICAgICBzZXF1ZW5jZSA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXF1ZW5jZSA9IHBhcnNlSW50KHNlcXVlbmNlKSArIDE7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlcXVlbmNlID0gcGFyc2VJbnQoXy5nZXQoc2VsZWN0ZWRQZXJzaXN0ZWRTdGF0ZSwgJ3NlcXVlbmNlJykpO1xuICAgIH1cblxuXG4gICAgbGV0IHBlcnNpc3REYXRhID0ge1xuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHJlZHVjZXI6IF8uZ2V0KHBlcnNpc3RPYmosICdyZWR1Y2VyJyksXG4gICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICBzZXF1ZW5jZTogc2VxdWVuY2UsXG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXQoXy5nZXQocGVyc2lzdE9iaiwgWydhY3Rpb24nXSksIHBlcnNpc3REYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGVyc2lzdE9iaihhY3Rpb24pIHtcbiAgaWYgKGFjdGlvbikge1xuICAgIHJldHVybiBfLmZpbmQoc3RhdGVQZXJzaXN0QWN0aW9ucyB8fCBbXSwgWydhY3Rpb24nLCBhY3Rpb25dKSB8fCB7fTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZVBlcnNpc3RTdGF0ZXMocmVkdWNlcikge1xuXG5cbiAgbGV0IGNvb2tpZVBlcnNpc3RTdGF0ZXMgPSBbXTtcbiAgXy5mb3JFYWNoKHN0YXRlUGVyc2lzdEFjdGlvbnMsIGZ1bmN0aW9uIChzdGF0ZVBlcnNpc3RBY3Rpb24pIHtcbiAgICBsZXQgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXQoc3RhdGVQZXJzaXN0QWN0aW9uWydhY3Rpb24nXSk7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGlmICghcmVkdWNlciB8fCByZWR1Y2VyID09IF8uZ2V0KGRhdGEsICdyZWR1Y2VyJykpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb29raWVQZXJzaXN0U3RhdGVzLnB1c2goe1xuICAgICAgICAgICAgcGVyc2lzdE9iajogc3RhdGVQZXJzaXN0QWN0aW9uLFxuICAgICAgICAgICAgZGF0YTogXy5nZXQoZGF0YSwgWydkYXRhJ10pLFxuICAgICAgICAgICAgcmVkdWNlcjogXy5nZXQoZGF0YSwgWydyZWR1Y2VyJ10pLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBtb21lbnQoXy5nZXQoZGF0YSwgWydjcmVhdGVkQXQnXSkpLFxuICAgICAgICAgICAgc2VxdWVuY2U6IF8uZ2V0KGRhdGEsIFsnc2VxdWVuY2UnXSkgfHwgMCxcbiAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG4gIGNvb2tpZVBlcnNpc3RTdGF0ZXMgPSBfLnNvcnRCeShjb29raWVQZXJzaXN0U3RhdGVzLCBbJ3JlZHVjZXInLCAnc2VxdWVuY2UnXSk7XG4gIHJldHVybiBjb29raWVQZXJzaXN0U3RhdGVzIHx8IFtdO1xuXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGR5bmFtaWNEaXNwYXRjaChhY3Rpb24sIGRhdGEpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IGFjdGlvbixcbiAgICAgIHBheWxvYWQ6IGRhdGEsXG4gICAgICBpc1Jlc3RvcmVEYXRhOiB0cnVlLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBSRVNUT1JFX1JFRFVYID0gJ1JFU1RPUkVfUkVEVVgnO1xuZXhwb3J0IGZ1bmN0aW9uIHJlc3RvcmVSZWR1eChkYXRhKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBSRVNUT1JFX1JFRFVYLFxuICAgICAgcGF5bG9hZDogZGF0YSxcbiAgICB9KTtcbiAgfVxufSIsImltcG9ydCB7XG4gIExPQURJTkcsXG5cbiAgQURWQU5DRV9NT0RFLFxuICBMT0dJTl9NT0RFLFxuICBSRUdJU1RFUl9NT0RFLFxuICBVUERBVEVfQUNUSVZFX01FTlUsXG5cbiAgRklMVEVSX0NBUl9CUkFORF9NT0RFLFxuICBGSUxURVJfQ0FSX1NFTEVDVEVEX0NBUl9CUkFORF9ST1csXG4gIEZJTFRFUl9DQVJfU0VBUkNIX0tFWVdPUkRTLFxuXG4gIEZJTFRFUl9DQVJfU0VMRUNURURfQ0FSX01PREVMX1JPVyxcbiAgRklMVEVSX0NBUl9NT0RFTF9TRUFSQ0hfS0VZV09SRFMsXG4gIEZJTFRFUl9DQVJfTU9ERUxfTU9ERSxcblxuICBGSUxURVJfQ09MT1JfTU9ERSxcbiAgRklMVEVSX0NBUl9TRUxFQ1RFRF9DT0xPUl9NT0RFTF9ST1csXG4gIEZJTFRFUl9DT0xPUl9NT0RFTF9TRUFSQ0hfS0VZV09SRFMsXG5cbiAgRklMVEVSX0JPRFlfVFlQRV9NT0RFLFxuICBGSUxURVJfQ0FSX1NFTEVDVEVEX0JPRFlfVFlQRV9NT0RFTF9ST1csXG4gIEZJTFRFUl9CT0RZX1RZUEVfTU9ERUxfU0VBUkNIX0tFWVdPUkRTLFxuXG4gIEZJTFRFUl9EUklWRU5fV0hFRUxTX01PREUsXG4gIEZJTFRFUl9DQVJfU0VMRUNURURfRFJJVkVOX1dIRUVMU19NT0RFTF9ST1csXG4gIEZJTFRFUl9EUklWRU5fV0hFRUxTX01PREVMX1NFQVJDSF9LRVlXT1JEUyxcblxuICBGSUxURVJfRlVFTF9UWVBFX01PREUsXG4gIEZJTFRFUl9DQVJfU0VMRUNURURfRlVFTF9UWVBFX01PREVMX1JPVyxcbiAgRklMVEVSX0ZVRUxfVFlQRV9NT0RFTF9TRUFSQ0hfS0VZV09SRFMsXG5cbiAgRklMVEVSX1NUQVRFX01PREUsXG4gIEZJTFRFUl9DQVJfU0VMRUNURURfU1RBVEVfTU9ERUxfUk9XLFxuICBGSUxURVJfU1RBVEVfTU9ERUxfU0VBUkNIX0tFWVdPUkRTLFxuXG4gIEZJTFRFUl9DQVJfQlJBTkRTLFxuICBGSUxURVJfQ0FSX01PREVMUyxcbiAgRklMVEVSX0NPTE9SUyxcbiAgRklMVEVSX0JPRFlfVFlQRVMsXG4gIEZJTFRFUl9EUklWRU5fV0hFRUxTLFxuICBGSUxURVJfRlVFTF9UWVBFUyxcbiAgRklMVEVSX1NUQVRFUyxcblxuICBRVUlDS19TRUFSQ0hfUFJPRFVDVFNfTElTVCxcblxuICBTSE9XX0NPTlRBQ1RfTElTVCxcblxuICBTRVRfQVBQTFlfWUVBUixcbiAgU0VUX0FQUExZX1BSSUNFLFxuICBTRVRfQVBQTFlfTUlMRUFHRSxcblxuICBTRVRfTUVOVV9IRUlHSFQsXG4gIFNFVF9OT1RJRklDQVRJT05fVE9LRU4sXG4gIFNFVF9OT1RJRklDQVRJT05fVE9LRU5fVElNRV9PVVRfREFURSxcbiAgU0VUX0lOSVRFRF9SRURVWCxcbiAgU0VUX0RJU0FCTEVfV0lORE9XX1NDUk9MTCxcbn0gZnJvbSAnLi4vYWN0aW9ucy9hcHAtYWN0aW9ucyc7XG5cbmltcG9ydCBsb2NhbFN0b3JhZ2UgZnJvbSAnbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgeyBjaGVja0lzTmVlZFBlcnNpc3QsIGNoZWNrTmVlZFBlcnNpc3QsIGdldFBlcnNpc3RPYmosIHBlcnNpc3RSZWR1eCB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGFwcCBmcm9tICduZXh0L2FwcCc7XG5cblxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcbiAgbm90aWZpY2F0aW9uVG9rZW46IG51bGwsXG4gIG5vdGlmaWNhdGlvblRva2VuVGltZU91dERhdGU6IG51bGwsXG4gIGRpc2FibGVXaW5kb3dTY3JvbGw6IGZhbHNlLFxuXG4gIGluaXRlZFJlZHV4OiBmYWxzZSxcbiAgbG9hZGluZzogZmFsc2UsXG4gIGFkdmFuY2VNb2RlOiBmYWxzZSxcbiAgbG9naW5Nb2RlOiBmYWxzZSxcbiAgcmVnaXN0ZXJNb2RlOiBmYWxzZSxcblxuICBmaWx0ZXJDYXJCcmFuZE1vZGU6IGZhbHNlLFxuICBmaWx0ZXJDYXJTZWxlY3RlZENhckJyYW5kRGF0YTogJycsXG4gIGZpbHRlckNhclNlbGVjdGVkQ2FyQnJhbmRJbmRleDogJycsXG4gIGZpbHRlckNhclNlYXJjaEtleXdvcmRzOiAnJyxcblxuICBmaWx0ZXJDYXJNb2RlbE1vZGU6IGZhbHNlLFxuICBmaWx0ZXJDYXJTZWxlY3RlZENhck1vZGVsRGF0YTogJycsXG4gIGZpbHRlckNhclNlbGVjdGVkQ2FyTW9kZWxJbmRleDogJycsXG4gIGZpbHRlckNhck1vZGVsU2VhcmNoS2V5d29yZHM6ICcnLFxuXG4gIGZpbHRlckNhck1vZGVsTW9kZTogZmFsc2UsXG4gIGZpbHRlckNhclNlbGVjdGVkQ2FyTW9kZWxEYXRhOiAnJyxcbiAgZmlsdGVyQ2FyU2VsZWN0ZWRDYXJNb2RlbEluZGV4OiAnJyxcbiAgZmlsdGVyQ2FyTW9kZWxTZWFyY2hLZXl3b3JkczogJycsXG5cbiAgZmlsdGVyQ29sb3JNb2RlOiBmYWxzZSxcbiAgZmlsdGVyQ2FyU2VsZWN0ZWRDb2xvckRhdGE6ICcnLFxuICBmaWx0ZXJDYXJTZWxlY3RlZENvbG9ySW5kZXg6ICcnLFxuICBmaWx0ZXJDb2xvclNlYXJjaEtleXdvcmRzOiAnJyxcblxuICBmaWx0ZXJCb2R5VHlwZU1vZGU6IGZhbHNlLFxuICBmaWx0ZXJDYXJTZWxlY3RlZEJvZHlUeXBlRGF0YTogJycsXG4gIGZpbHRlckNhclNlbGVjdGVkQm9keVR5cGVJbmRleDogJycsXG4gIGZpbHRlckJvZHlUeXBlU2VhcmNoS2V5d29yZHM6ICcnLFxuXG4gIGZpbHRlckZ1ZWxUeXBlTW9kZTogZmFsc2UsXG4gIGZpbHRlckNhclNlbGVjdGVkRnVlbFR5cGVEYXRhOiAnJyxcbiAgZmlsdGVyQ2FyU2VsZWN0ZWRGdWVsVHlwZUluZGV4OiAnJyxcbiAgZmlsdGVyRnVlbFR5cGVTZWFyY2hLZXl3b3JkczogJycsXG5cbiAgZmlsdGVyU3RhdGVNb2RlOiBmYWxzZSxcbiAgZmlsdGVyQ2FyU2VsZWN0ZWRTdGF0ZURhdGE6ICcnLFxuICBmaWx0ZXJDYXJTZWxlY3RlZFN0YXRlSW5kZXg6ICcnLFxuICBmaWx0ZXJTdGF0ZVNlYXJjaEtleXdvcmRzOiAnJyxcblxuICBjYXJCcmFuZHM6IFtdLFxuICBjYXJNb2RlbHM6IFtdLFxuICBjb2xvcnM6IFtdLFxuICBib2R5VHlwZXM6IFtdLFxuICBkcml2ZW5XaGVlbHM6IFtdLFxuICBmdWVsVHlwZXM6IFtdLFxuICBzdGF0ZXM6IFtdLFxuXG4gIHF1aWNrU2VhcmNoTW9kZTogJycsXG4gIHF1aWNrU2VhcmNoQ2FyU3BlY3NEYXRhOiB7fSxcbiAgcXVpY2tTZWFyY2hQcm9kdWN0YWRzRGF0YToge30sXG4gIGFjdGl2ZU1lbnU6IC0xLFxuICB2YWx1ZXM6IHt9LFxuXG4gIHNob3dDb250YWN0OiBmYWxzZSxcblxuICBhcHBseVllYXI6IHVuZGVmaW5lZCxcbiAgYXBwbHlQcmljZTogdW5kZWZpbmVkLFxuICBhcHBseU1pbGVhZ2U6IHVuZGVmaW5lZCxcblxuICBtZW51SGVpZ2h0OiB1bmRlZmluZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbikge1xuXG5cbiAgLy8gY2hlY2tOZWVkUGVyc2lzdChfLmdldChhY3Rpb24sICd0eXBlJyksICdhcHAnLCBfLmdldChhY3Rpb24sICdwYXlsb2FkJyksIF8uZ2V0KGFjdGlvbiwgJ2lzUmVzdG9yZURhdGEnKSk7XG5cbiAgbGV0IHBlcnNpc3RTdGF0ZXMgPSBfLmdldChsb2NhbFN0b3JhZ2UuZ2V0KCdyZWR1eCcpIHx8IHt9LCAnYXBwJykgfHwgSU5JVElBTF9TVEFURTtcbiAgbGV0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIC4uLnBlcnNpc3RTdGF0ZXNcbiAgfVxuXG4gIGlmKCFfLmlzRXF1YWwoc3RhdGUsIG5ld1N0YXRlKSl7XG4gICAgc3RhdGUgPSBuZXdTdGF0ZTtcbiAgfVxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBMT0FESU5HOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIEFEVkFOQ0VfTU9ERTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWR2YW5jZU1vZGU6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgTE9HSU5fTU9ERTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9naW5Nb2RlOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgUkVHSVNURVJfTU9ERTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVnaXN0ZXJNb2RlOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgVVBEQVRFX0FDVElWRV9NRU5VOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhY3RpdmVNZW51OiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgLy9cbiAgICBjYXNlIEZJTFRFUl9DQVJfQlJBTkRTOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJCcmFuZHM6IGFjdGlvbi5kYXRhXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGSUxURVJfQ0FSX01PREVMUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FyTW9kZWxzOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRklMVEVSX0NPTE9SUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29sb3JzOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRklMVEVSX0JPRFlfVFlQRVM6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGJvZHlUeXBlczogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZJTFRFUl9EUklWRU5fV0hFRUxTOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkcml2ZW5XaGVlbHM6IGFjdGlvbi5kYXRhXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGSUxURVJfRlVFTF9UWVBFUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZnVlbFR5cGVzOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRklMVEVSX1NUQVRFUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc3RhdGVzOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIGZpbHRlciBjYXJcbiAgICAvLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNhc2UgRklMVEVSX0NBUl9CUkFORF9NT0RFOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWx0ZXJDYXJCcmFuZE1vZGU6IGFjdGlvbi5kYXRhXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGSUxURVJfQ0FSX1NFTEVDVEVEX0NBUl9CUkFORF9ST1c6XG4gICAgICBpZiAoYWN0aW9uLmluZGV4KSB7XG4gICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGZpbHRlckNhclNlbGVjdGVkQ2FyQnJhbmREYXRhOiBhY3Rpb24uZGF0YSxcbiAgICAgICAgICBmaWx0ZXJDYXJTZWxlY3RlZENhckJyYW5kSW5kZXg6IGFjdGlvbi5pbmRleFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGZpbHRlckNhclNlbGVjdGVkQ2FyQnJhbmREYXRhOiBhY3Rpb24uZGF0YVxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICBjYXNlIEZJTFRFUl9DQVJfU0VBUkNIX0tFWVdPUkRTOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWx0ZXJDYXJTZWFyY2hLZXl3b3JkczogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICAvLyBlbmQgZmlsdGVyIGNhciAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cblxuICAgIC8vIGZpbHRlciBjYXJcbiAgICAvLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNhc2UgRklMVEVSX0NBUl9NT0RFTF9NT0RFOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWx0ZXJDYXJNb2RlbE1vZGU6IGFjdGlvbi5kYXRhXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGSUxURVJfQ0FSX1NFTEVDVEVEX0NBUl9NT0RFTF9ST1c6XG4gICAgICBpZiAoYWN0aW9uLmluZGV4KSB7XG4gICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGZpbHRlckNhclNlbGVjdGVkQ2FyTW9kZWxEYXRhOiBhY3Rpb24uZGF0YSxcbiAgICAgICAgICBmaWx0ZXJDYXJTZWxlY3RlZENhck1vZGVsSW5kZXg6IGFjdGlvbi5pbmRleFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGZpbHRlckNhclNlbGVjdGVkQ2FyTW9kZWxEYXRhOiBhY3Rpb24uZGF0YVxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICBjYXNlIEZJTFRFUl9DQVJfTU9ERUxfU0VBUkNIX0tFWVdPUkRTOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWx0ZXJDYXJNb2RlbFNlYXJjaEtleXdvcmRzOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIGVuZCBmaWx0ZXIgbW9kZWwgLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG5cbiAgICAvLyBmaWx0ZXIgY29sb3JcbiAgICAvLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNhc2UgRklMVEVSX0NPTE9SX01PREU6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbHRlckNvbG9yTW9kZTogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZJTFRFUl9DQVJfU0VMRUNURURfQ09MT1JfTU9ERUxfUk9XOlxuICAgICAgaWYgKGFjdGlvbi5pbmRleCkge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBmaWx0ZXJDYXJTZWxlY3RlZENvbG9yRGF0YTogYWN0aW9uLmRhdGEsXG4gICAgICAgICAgZmlsdGVyQ2FyU2VsZWN0ZWRDb2xvckluZGV4OiBhY3Rpb24uaW5kZXhcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBmaWx0ZXJDYXJTZWxlY3RlZENvbG9yRGF0YTogYWN0aW9uLmRhdGFcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgY2FzZSBGSUxURVJfQ09MT1JfTU9ERUxfU0VBUkNIX0tFWVdPUkRTOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWx0ZXJDb2xvclNlYXJjaEtleXdvcmRzOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIGVuZCBmaWx0ZXIgbW9kZWwgLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG5cbiAgICAvLyBmaWx0ZXIgYm9keSB0eXBlXG4gICAgLy8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjYXNlIEZJTFRFUl9CT0RZX1RZUEVfTU9ERTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyQm9keVR5cGVNb2RlOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRklMVEVSX0NBUl9TRUxFQ1RFRF9CT0RZX1RZUEVfTU9ERUxfUk9XOlxuICAgICAgaWYgKGFjdGlvbi5pbmRleCkge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBmaWx0ZXJDYXJTZWxlY3RlZEJvZHlUeXBlRGF0YTogYWN0aW9uLmRhdGEsXG4gICAgICAgICAgZmlsdGVyQ2FyU2VsZWN0ZWRCb2R5VHlwZUluZGV4OiBhY3Rpb24uaW5kZXhcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBmaWx0ZXJDYXJTZWxlY3RlZEJvZHlUeXBlRGF0YTogYWN0aW9uLmRhdGFcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgY2FzZSBGSUxURVJfQk9EWV9UWVBFX01PREVMX1NFQVJDSF9LRVlXT1JEUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyQm9keVR5cGVTZWFyY2hLZXl3b3JkczogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICAvLyBlbmQgZmlsdGVyIG1vZGVsIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuXG4gICAgLy8gZmlsdGVyIGRyaXZlbiB3aGVlbHNcbiAgICAvLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNhc2UgRklMVEVSX0RSSVZFTl9XSEVFTFNfTU9ERTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyRHJpdmVuV2hlZWxNb2RlOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRklMVEVSX0NBUl9TRUxFQ1RFRF9EUklWRU5fV0hFRUxTX01PREVMX1JPVzpcbiAgICAgIGlmIChhY3Rpb24uaW5kZXgpIHtcbiAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgZmlsdGVyQ2FyU2VsZWN0ZWREcml2ZW5XaGVlbERhdGE6IGFjdGlvbi5kYXRhLFxuICAgICAgICAgIGZpbHRlckNhclNlbGVjdGVkRHJpdmVuV2hlZWxJbmRleDogYWN0aW9uLmluZGV4XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgZmlsdGVyQ2FyU2VsZWN0ZWREcml2ZW5XaGVlbERhdGE6IGFjdGlvbi5kYXRhXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIGNhc2UgRklMVEVSX0RSSVZFTl9XSEVFTFNfTU9ERUxfU0VBUkNIX0tFWVdPUkRTOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWx0ZXJEcml2ZW5XaGVlbFNlYXJjaEtleXdvcmRzOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIGVuZCBmaWx0ZXIgZHJpdmVuIHdoZWVscyAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cblxuICAgIC8vIGZpbHRlciBkcml2ZW4gd2hlZWxzXG4gICAgLy8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjYXNlIEZJTFRFUl9GVUVMX1RZUEVfTU9ERTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyRnVlbFR5cGVNb2RlOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRklMVEVSX0NBUl9TRUxFQ1RFRF9GVUVMX1RZUEVfTU9ERUxfUk9XOlxuICAgICAgaWYgKGFjdGlvbi5pbmRleCkge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBmaWx0ZXJDYXJTZWxlY3RlZEZ1ZWxUeXBlRGF0YTogYWN0aW9uLmRhdGEsXG4gICAgICAgICAgZmlsdGVyQ2FyU2VsZWN0ZWRGdWVsVHlwZUluZGV4OiBhY3Rpb24uaW5kZXhcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBmaWx0ZXJDYXJTZWxlY3RlZEZ1ZWxUeXBlRGF0YTogYWN0aW9uLmRhdGFcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgY2FzZSBGSUxURVJfRlVFTF9UWVBFX01PREVMX1NFQVJDSF9LRVlXT1JEUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyRnVlbFR5cGVTZWFyY2hLZXl3b3JkczogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICAvLyBlbmQgZmlsdGVyIGRyaXZlbiB3aGVlbHMgLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG5cbiAgICAvLyBmaWx0ZXIgZHJpdmVuIHdoZWVsc1xuICAgIC8vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2FzZSBGSUxURVJfU1RBVEVfTU9ERTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyU3RhdGVNb2RlOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRklMVEVSX0NBUl9TRUxFQ1RFRF9TVEFURV9NT0RFTF9ST1c6XG4gICAgICBpZiAoYWN0aW9uLmluZGV4KSB7XG4gICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGZpbHRlckNhclNlbGVjdGVkU3RhdGVEYXRhOiBhY3Rpb24uZGF0YSxcbiAgICAgICAgICBmaWx0ZXJDYXJTZWxlY3RlZFN0YXRlSW5kZXg6IGFjdGlvbi5pbmRleFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGZpbHRlckNhclNlbGVjdGVkU3RhdGVEYXRhOiBhY3Rpb24uZGF0YVxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICBjYXNlIEZJTFRFUl9TVEFURV9NT0RFTF9TRUFSQ0hfS0VZV09SRFM6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbHRlclN0YXRlU2VhcmNoS2V5d29yZHM6IGFjdGlvbi5kYXRhXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgLy8gZW5kIGZpbHRlciBkcml2ZW4gd2hlZWxzIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuXG4gICAgY2FzZSBRVUlDS19TRUFSQ0hfUFJPRFVDVFNfTElTVDpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcXVpY2tTZWFyY2hNb2RlOiBhY3Rpb24ubW9kZSxcbiAgICAgICAgcXVpY2tTZWFyY2hDYXJTcGVjc0RhdGE6IGFjdGlvbi5xdWlja1NlYXJjaENhclNwZWNzRGF0YSxcbiAgICAgICAgcXVpY2tTZWFyY2hQcm9kdWN0YWRzRGF0YTogYWN0aW9uLnF1aWNrU2VhcmNoUHJvZHVjdGFkc0RhdGEsXG4gICAgICAgIHZhbHVlczogYWN0aW9uLnZhbHVlc1xuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgU0hPV19DT05UQUNUX0xJU1Q6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNob3dDb250YWN0OiBhY3Rpb24uYm9vbGVhblxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgU0VUX0FQUExZX1lFQVI6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFwcGx5WWVhcjogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIFNFVF9BUFBMWV9QUklDRTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYXBwbHlQcmljZTogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIFNFVF9BUFBMWV9NSUxFQUdFOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhcHBseU1pbGVhZ2U6IGFjdGlvbi5kYXRhXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBTRVRfTUVOVV9IRUlHSFQ6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1lbnVIZWlnaHQ6IGFjdGlvbi5kYXRhXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBTRVRfTk9USUZJQ0FUSU9OX1RPS0VOOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBub3RpZmljYXRpb25Ub2tlbjogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIFNFVF9OT1RJRklDQVRJT05fVE9LRU5fVElNRV9PVVRfREFURTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbm90aWZpY2F0aW9uVG9rZW5UaW1lT3V0RGF0ZTogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIFNFVF9JTklURURfUkVEVVg6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGluaXRlZFJlZHV4OiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgU0VUX0RJU0FCTEVfV0lORE9XX1NDUk9MTDpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGlzYWJsZVdpbmRvd1Njcm9sbDogYWN0aW9uLmRhdGEgPT0gdHJ1ZSA/IHRydWUgOiBmYWxzZSxcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgc3RhdGUgPSBzdGF0ZVxuICAgICAgYnJlYWs7XG4gIH1cblxuXG4gIHBlcnNpc3RSZWR1eCgnYXBwJywgc3RhdGUpXG4gIHJldHVybiBzdGF0ZTtcbn0iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IEZFVENIX0NBUlBMQVRFU0xJU1QgfSBmcm9tICcuLi9hY3Rpb25zL2NhclBsYXRlc0xpc3QtYWN0aW9ucyc7XG5pbXBvcnQgbG9jYWxTdG9yYWdlIGZyb20gJ2xvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0IHsgY2hlY2tJc05lZWRQZXJzaXN0LCBjaGVja05lZWRQZXJzaXN0LCBnZXRQZXJzaXN0T2JqLCBwZXJzaXN0UmVkdXggfSBmcm9tICcuLi9jb25maWcnO1xuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICAgIGNhclBsYXRlc0xpc3Q6IFtdLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24pIHtcblxuICAgIC8vIGNoZWNrTmVlZFBlcnNpc3QoXy5nZXQoYWN0aW9uLCAndHlwZScpLCAnY2FyUGxhdGVzTGlzdCcsIF8uZ2V0KGFjdGlvbiwgJ3BheWxvYWQnKSwgXy5nZXQoYWN0aW9uLCAnaXNSZXN0b3JlRGF0YScpKTtcblxuICAgIGxldCBwZXJzaXN0U3RhdGVzID0gXy5nZXQobG9jYWxTdG9yYWdlLmdldCgncmVkdXgnKSB8fCB7fSwgJ2NhclBsYXRlc0xpc3QnKSB8fCBJTklUSUFMX1NUQVRFO1xuICAgIGxldCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLnBlcnNpc3RTdGF0ZXNcbiAgICB9XG4gICAgaWYoIV8uaXNFcXVhbChzdGF0ZSwgbmV3U3RhdGUpKXtcbiAgICAgIHN0YXRlID0gbmV3U3RhdGU7XG4gICAgfVxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBGRVRDSF9DQVJQTEFURVNMSVNUOlxuICAgICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgY2FyUGxhdGVzTGlzdDogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHN0YXRlID0gc3RhdGVcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBwZXJzaXN0UmVkdXgoJ2NhclBsYXRlc0xpc3QnLCBzdGF0ZSlcblxuICAgIHJldHVybiBzdGF0ZTtcbn0iLCJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHsgU0VUX1BPU1RfTU9EQUxfTElLRV9SRUZSRVNIX0lELCBGRVRDSF9DQVJfRlJFQUtfUE9TVFMsIEZFVENIX0VESVRFRF9QT1NUIH0gZnJvbSAnLi4vYWN0aW9ucy9jYXJmcmVhay5hY3Rpb24nO1xuaW1wb3J0IGxvY2FsU3RvcmFnZSBmcm9tICdsb2NhbC1zdG9yYWdlJztcbmltcG9ydCB7IGNoZWNrSXNOZWVkUGVyc2lzdCwgY2hlY2tOZWVkUGVyc2lzdCwgZ2V0UGVyc2lzdE9iaiwgcGVyc2lzdFJlZHV4IH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gICAgcG9zdE1vZGFsTGlrZVJlZnJlc2hJZDogJycsXG4gICAgY2FyRnJlYWtQb3N0czogW10sXG4gICAgZWRpdGVkUG9zdDoge30sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbikge1xuXG4gICAgLy8gY2hlY2tOZWVkUGVyc2lzdChfLmdldChhY3Rpb24sICd0eXBlJyksICdjYXJmcmVhaycsIF8uZ2V0KGFjdGlvbiwgJ3BheWxvYWQnKSwgXy5nZXQoYWN0aW9uLCAnaXNSZXN0b3JlRGF0YScpKTtcblxuICAgIGxldCBwZXJzaXN0U3RhdGVzID0gXy5nZXQobG9jYWxTdG9yYWdlLmdldCgncmVkdXgnKSB8fCB7fSwgJ2NhcmZyZWFrJykgfHwgSU5JVElBTF9TVEFURTtcbiAgICBsZXQgbmV3U3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi5wZXJzaXN0U3RhdGVzXG4gICAgfVxuICAgIGlmKCFfLmlzRXF1YWwoc3RhdGUsIG5ld1N0YXRlKSl7XG4gICAgICBzdGF0ZSA9IG5ld1N0YXRlO1xuICAgIH1cbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgU0VUX1BPU1RfTU9EQUxfTElLRV9SRUZSRVNIX0lEOlxuICAgICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgcG9zdE1vZGFsTGlrZVJlZnJlc2hJZDogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRkVUQ0hfQ0FSX0ZSRUFLX1BPU1RTOlxuICAgICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgY2FyRnJlYWtQb3N0czogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRkVUQ0hfRURJVEVEX1BPU1Q6XG4gICAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBlZGl0ZWRQb3N0OiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHN0YXRlID0gc3RhdGVcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHBlcnNpc3RSZWR1eCgnY2FyZnJlYWsnLCBzdGF0ZSlcblxuICAgIHJldHVybiBzdGF0ZTtcbn0iLCJpbXBvcnQgXywgeyB1cHBlckZpcnN0IH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgeyBGRVRDSF9SRVZJU0lPTl9BTlNXRVJFRF9RVUVTVElPTlMgfSBmcm9tICcuLi9hY3Rpb25zL2twcC1hY3Rpb25zJztcbmltcG9ydCB7IGlzVmFsaWROdW1iZXIgfSBmcm9tICcuLi8uLi9jb21tb24tZnVuY3Rpb24nO1xuaW1wb3J0IGxvY2FsU3RvcmFnZSBmcm9tICdsb2NhbC1zdG9yYWdlJztcbmltcG9ydCB7IGNoZWNrSXNOZWVkUGVyc2lzdCwgY2hlY2tOZWVkUGVyc2lzdCwgZ2V0UGVyc2lzdE9iaiwgcGVyc2lzdFJlZHV4IH0gZnJvbSAnLi4vY29uZmlnJztcblxuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICAgIGFuc3dlcmVkRW5SZXZpc2lvblNlY3Rpb25BUGFwZXI6IFtdLFxuICAgIGFuc3dlcmVkRW5SZXZpc2lvblNlY3Rpb25CUGFwZXI6IFtdLFxuICAgIGFuc3dlcmVkRW5SZXZpc2lvblNlY3Rpb25DUGFwZXI6IFtdLFxuICAgIGFuc3dlcmVkQm1SZXZpc2lvblNlY3Rpb25BUGFwZXI6IFtdLFxuICAgIGFuc3dlcmVkQm1SZXZpc2lvblNlY3Rpb25CUGFwZXI6IFtdLFxuICAgIGFuc3dlcmVkQm1SZXZpc2lvblNlY3Rpb25DUGFwZXI6IFtdLFxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbikge1xuXG4gICAgLy8gY2hlY2tOZWVkUGVyc2lzdChfLmdldChhY3Rpb24sICd0eXBlJyksICdrcHAnLCBfLmdldChhY3Rpb24sICdwYXlsb2FkJyksIF8uZ2V0KGFjdGlvbiwgJ2lzUmVzdG9yZURhdGEnKSk7XG5cbiAgICBsZXQgcGVyc2lzdFN0YXRlcyA9IF8uZ2V0KGxvY2FsU3RvcmFnZS5nZXQoJ3JlZHV4JykgfHwge30sICdrcHAnKSB8fCBJTklUSUFMX1NUQVRFO1xuICAgIGxldCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLnBlcnNpc3RTdGF0ZXNcbiAgICB9XG4gICAgaWYoIV8uaXNFcXVhbChzdGF0ZSwgbmV3U3RhdGUpKXtcbiAgICAgIHN0YXRlID0gbmV3U3RhdGU7XG4gICAgfVxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBGRVRDSF9SRVZJU0lPTl9BTlNXRVJFRF9RVUVTVElPTlM6XG4gICAgICAgICAgICBpZiAoIWFjdGlvbi5wYXlsb2FkIHx8ICFpc1ZhbGlkTnVtYmVyKGFjdGlvbi5wYXlsb2FkLmdyb3VwKSB8fCAhYWN0aW9uLnBheWxvYWQubGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IHN0YXRlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGF0ZVtgYW5zd2VyZWQke18udXBwZXJGaXJzdChhY3Rpb24ucGF5bG9hZC5sYW5ndWFnZSl9UmV2aXNpb25TZWN0aW9uJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgcGFyc2VJbnQoYWN0aW9uLnBheWxvYWQuZ3JvdXApKX1QYXBlcmBdID0gYWN0aW9uLnBheWxvYWQuZGF0YTtcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBzdGF0ZSA9IHN0YXRlXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcGVyc2lzdFJlZHV4KCdrcHAnLCBzdGF0ZSlcblxuICAgIHJldHVybiBzdGF0ZTtcbn0iLCJpbXBvcnQgXywgeyB1cHBlckZpcnN0IH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgeyBGRVRDSF9DTElFTlRfU09DS0VUX0lPLCBDTEVBUl9DTElFTlRfU09DS0VUX0lPIH0gZnJvbSAnLi4vYWN0aW9ucy9saXZlLWFjdGlvbic7XG5pbXBvcnQgbG9jYWxTdG9yYWdlIGZyb20gJ2xvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0IHsgY2hlY2tJc05lZWRQZXJzaXN0LCBjaGVja05lZWRQZXJzaXN0LCBnZXRQZXJzaXN0T2JqLCBwZXJzaXN0UmVkdXggfSBmcm9tICcuLi9jb25maWcnO1xuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICAgIHNvY2tldDogdW5kZWZpbmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24pIHtcblxuICAgIC8vIGNoZWNrTmVlZFBlcnNpc3QoXy5nZXQoYWN0aW9uLCAndHlwZScpLCAnbGl2ZScsIF8uZ2V0KGFjdGlvbiwgJ3BheWxvYWQnKSwgXy5nZXQoYWN0aW9uLCAnaXNSZXN0b3JlRGF0YScpKTtcblxuICAgIGxldCBwZXJzaXN0U3RhdGVzID0gXy5nZXQobG9jYWxTdG9yYWdlLmdldCgncmVkdXgnKSB8fCB7fSwgJ2xpdmUnKSB8fCBJTklUSUFMX1NUQVRFO1xuICAgIGxldCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLnBlcnNpc3RTdGF0ZXNcbiAgICB9XG4gICAgaWYoIV8uaXNFcXVhbChzdGF0ZSwgbmV3U3RhdGUpKXtcbiAgICAgIHN0YXRlID0gbmV3U3RhdGU7XG4gICAgfVxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBGRVRDSF9DTElFTlRfU09DS0VUX0lPOlxuICAgICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgc29ja2V0OiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQ0xFQVJfQ0xJRU5UX1NPQ0tFVF9JTzpcbiAgICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHNvY2tldDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHN0YXRlID0gc3RhdGVcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBwZXJzaXN0UmVkdXgoJ2xpdmUnLCBzdGF0ZSlcblxuICAgIHJldHVybiBzdGF0ZTtcbn0iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7XG4gIEZFVENIX05FV1MsXG4gIEZFVENIX0NMVUIsXG4gIEZFVENIX1BSSUNFLFxuICBGRVRDSF9QT1BVTEFSLFxuICBGRVRDSF9QT1BVTEFSQ0FSUyxcbiAgRkVUQ0hfQ0FSTkFNRSxcbiAgRkVUQ0hfQ0FSREVUQUlMUyxcbiAgRkVUQ0hfQlJBTkRTLFxuICBGRVRDSF9CUkFORERFVEFJTCxcbiAgRkVUQ0hfQlJBTkRDQVJTLFxuICBGRVRDSF9ERVRBSUxTLFxuICBGRVRDSF9GSUxURVJFRF9DT01QQVJFX0RBVEEsXG4gIEZFVENIX0ZVRUwsXG4gIEZFVENIX0NPTVBBUkVfTkVXQ0FSX0lEUyxcbiAgQUREX0NPTVBBUkVfTkVXQ0FSX0lELFxuICBSRU1PVkVfQ09NUEFSRV9ORVdDQVJfSUQsXG4gIEZFVENIX0NPTVBBUkVfX05FV0NBUl9MSU1JVCxcbiAgRkVUQ0hfUEVFUl9DT01QQVJFX0NBUlMsXG4gIEZFVENIX05FV19DQVJfRklMVEVSX0dST1VQLFxuICBSRVNFVF9ORVdfQ0FSX0ZJTFRFUl9HUk9VUCxcbn0gZnJvbSAnLi4vYWN0aW9ucy9uZXdjYXJzLWFjdGlvbnMnO1xuaW1wb3J0IGxvY2FsU3RvcmFnZSBmcm9tICdsb2NhbC1zdG9yYWdlJztcbmltcG9ydCB7IGNoZWNrSXNOZWVkUGVyc2lzdCwgY2hlY2tOZWVkUGVyc2lzdCwgZ2V0UGVyc2lzdE9iaiwgcGVyc2lzdFJlZHV4IH0gZnJvbSAnLi4vY29uZmlnJztcblxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcbiAgbmV3czogW10sXG4gIGNsdWI6IFtdLFxuICBwcmljZTogW10sXG4gIHBvcHVsYXI6IFtdLFxuICBwb3B1bGFyQ2FyczogW10sXG4gIENhck5hbWU6IHt9LFxuICBicmFuZHM6IFtdLFxuICBicmFuZERldGFpbDogW10sXG4gIGJyYW5kQ2FyczogW10sXG4gIGRldGFpbHM6IFtdLFxuICBmdWVsOiBbXSxcbiAgZmlsdGVyZWRDb21wYXJlRGF0YTogW10sXG4gIG5ld0NhckZpbHRlckdyb3VwOiB7XG4gICAgbWFrZTogJycsXG4gICAgYm9keVR5cGU6ICcnLFxuICAgIHRyYW5zbWlzc2lvbjogJycsXG4gICAgZHJpdmVud2hlZWw6ICcnLFxuICAgIHNlYXRDYXBhY2l0eTogJycsXG4gICAgZnVlbFR5cGU6ICcnLFxuICAgIGV4dGVyaW9yOiAnJyxcbiAgICBpbnRlcmlvcjogJycsXG4gICAgc2FmZXR5OiAnJyxcbiAgICBwcmljZVJhbmdlOiBbXSxcbiAgICBtb250aGx5UGF5bWVudFJhbmdlOiBbXSxcbiAgICBlbmdpbmVDYXBhY2l0eVJhbmdlOiBbXSxcbiAgfSxcbiAgcGVlckNvbXA6IFtdLFxuICBjb21wYXJlSWRzOiBbXSxcbiAgY29tcGFyZUxpbWl0OiAtMSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSB7XG5cbiAgLy8gY2hlY2tOZWVkUGVyc2lzdChfLmdldChhY3Rpb24sICd0eXBlJyksICduZXdDYXJzJywgXy5nZXQoYWN0aW9uLCAncGF5bG9hZCcpLCBfLmdldChhY3Rpb24sICdpc1Jlc3RvcmVEYXRhJykpO1xuXG4gIGxldCBwZXJzaXN0U3RhdGVzID0gXy5nZXQobG9jYWxTdG9yYWdlLmdldCgncmVkdXgnKSB8fCB7fSwgJ25ld0NhcnMnKSB8fCBJTklUSUFMX1NUQVRFO1xuICBsZXQgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgLi4ucGVyc2lzdFN0YXRlc1xuICB9XG4gIGlmKCFfLmlzRXF1YWwoc3RhdGUsIG5ld1N0YXRlKSl7XG4gICAgc3RhdGUgPSBuZXdTdGF0ZTtcbiAgfVxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBGRVRDSF9ORVdTOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBuZXdzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGRVRDSF9DTFVCOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbHViOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEZFVENIX1BSSUNFOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcmljZTogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBGRVRDSF9QT1BVTEFSOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwb3B1bGFyOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEZFVENIX1BPUFVMQVJDQVJTOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwb3B1bGFyQ2FyczogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cblxuICAgIGNhc2UgRkVUQ0hfQ0FSTkFNRTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgQ2FyTmFtZTogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBGRVRDSF9DQVJERVRBSUxTOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkZXRhaWxzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEZFVENIX0JSQU5EUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYnJhbmRzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEZFVENIX0JSQU5EREVUQUlMOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBicmFuZERldGFpbDogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBGRVRDSF9CUkFORENBUlM6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGJyYW5kQ2FyczogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRkVUQ0hfREVUQUlMUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGV0YWlsczogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBGRVRDSF9GVUVMOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmdWVsOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGRVRDSF9GSUxURVJFRF9DT01QQVJFX0RBVEE6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbHRlcmVkQ29tcGFyZURhdGE6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZFVENIX0NPTVBBUkVfTkVXQ0FSX0lEUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29tcGFyZUlkczogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRkVUQ0hfQ09NUEFSRV9fTkVXQ0FSX0xJTUlUOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb21wYXJlTGltaXQ6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIEFERF9DT01QQVJFX05FV0NBUl9JRDpcbiAgICAgIGlmIChzdGF0ZS5jb21wYXJlSWRzLmxlbmd0aCA8IHN0YXRlLmNvbXBhcmVMaW1pdCkge1xuICAgICAgICBsZXQgY2hlY2tJZkV4aXN0ID0gXy5maW5kSW5kZXgoc3RhdGUuY29tcGFyZUlkcywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICBzdGF0ZSA9IGl0ZW0gPT0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIH0pXG4gICAgICAgIGlmIChjaGVja0lmRXhpc3QgPT0gLTEpIHtcbiAgICAgICAgICBsZXQgdGVtcCA9IF8uY2xvbmVEZWVwKHN0YXRlLmNvbXBhcmVJZHMpXG4gICAgICAgICAgdGVtcC5wdXNoKGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBjb21wYXJlSWRzOiB0ZW1wXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBSRU1PVkVfQ09NUEFSRV9ORVdDQVJfSUQ6XG4gICAgICBsZXQgdGVtcCA9IHN0YXRlLmNvbXBhcmVJZHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBhY3Rpb24ucGF5bG9hZCk7XG5cbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29tcGFyZUlkczogdGVtcCxcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBGRVRDSF9QRUVSX0NPTVBBUkVfQ0FSUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcGVlckNvbXA6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZFVENIX05FV19DQVJfRklMVEVSX0dST1VQOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBuZXdDYXJGaWx0ZXJHcm91cDogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgUkVTRVRfTkVXX0NBUl9GSUxURVJfR1JPVVA6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG5ld0NhckZpbHRlckdyb3VwOiB7XG4gICAgICAgICAgbWFrZTogJycsXG4gICAgICAgICAgYm9keVR5cGU6ICcnLFxuICAgICAgICAgIHRyYW5zbWlzc2lvbjogJycsXG4gICAgICAgICAgZHJpdmVud2hlZWw6ICcnLFxuICAgICAgICAgIHNlYXRDYXBhY2l0eTogJycsXG4gICAgICAgICAgZnVlbFR5cGU6ICcnLFxuICAgICAgICAgIGV4dGVyaW9yOiAnJyxcbiAgICAgICAgICBpbnRlcmlvcjogJycsXG4gICAgICAgICAgc2FmZXR5OiAnJyxcbiAgICAgICAgICBwcmljZVJhbmdlOiBbXSxcbiAgICAgICAgICBtb250aGx5UGF5bWVudFJhbmdlOiBbXSxcbiAgICAgICAgICBlbmdpbmVDYXBhY2l0eVJhbmdlOiBbXSxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHN0YXRlID0gc3RhdGVcbiAgICAgIGJyZWFrO1xuXG4gIH1cblxuICBwZXJzaXN0UmVkdXgoJ25ld0NhcnMnLCBzdGF0ZSlcblxuICByZXR1cm4gc3RhdGU7XG59XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7XG4gIEZFVENIX1BST0RVQ1RTTElTVCxcbiAgRkVUQ0hfUFJPRFVDVFNMSVNUX0hPTUUsXG4gIFBVU0hfUFJPRFVDVFNMSVNULFxuICBSRU1PVkVfUFJPRFVDVFNMSVNULFxuICBVUERBVEVfUFJPRFVDVFNMSVNULFxuICBVUERBVEVfQUNUSVZFX0lEX1BST0RVQ1RTX0xJU1QsXG4gIEFERF9DT01QQVJFX19QUk9EVUNUX0lELFxuICBSRU1PVkVfQ09NUEFSRV9QUk9EVUNUX0lELFxuICBDTEVBUl9DT01QQVJFX1BST0RVQ1RfSURTLFxuICBQQVRDSF9DT01QQVJFX1BST0RVQ1RfSURTLFxuICBGRVRDSF9GSUxURVJFRF9DT01QQVJFX0RBVEEsXG4gIEZFVENIX0ZFQVRVUkVTX0xJU1QsXG4gIFVQREFURV9DSEVDS0VEX0ZFQVRVUkVTX0RBVEUsXG4gIEZFVENIX0NPTVBBUkVfTElNSVQsXG4gIEZFVENIX1BST0RVQ1RfRklMVEVSX09QVElPTlMsXG4gIENMRUFSX1BST0RVQ1RfRklMVEVSX09QVElPTlMsXG4gIEZFVENIX1BST0RVQ1RfRklMVEVSX0dST1VQLFxuICBDTEVBUl9QUk9EVUNUX0ZJTFRFUl9HUk9VUCxcbiAgRkVUQ0hfUFJPRFVDVF9GSUxURVJfQ09ORklHLFxuICBDTEVBUl9QUk9EVUNUX0ZJTFRFUl9DT05GSUcsXG4gIEZFVENIX0ZJTFRFUl9NT0RBTF9TVEFURSxcbiAgU0VUX1BST0RVQ1RfTElTVF9MT0FESU5HLFxufSBmcm9tICcuLi9hY3Rpb25zL3Byb2R1Y3RzTGlzdC1hY3Rpb25zJztcbmltcG9ydCBsb2NhbFN0b3JhZ2UgZnJvbSAnbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgeyBjaGVja0lzTmVlZFBlcnNpc3QsIGNoZWNrTmVlZFBlcnNpc3QsIGdldFBlcnNpc3RPYmosIHBlcnNpc3RSZWR1eCB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIHByb2R1Y3RMaXN0TG9hZGluZzogZmFsc2UsXG4gIHByb2R1Y3RzTGlzdDogW10sXG4gIHByb2R1Y3RzTGlzdEhvbWU6IFtdLFxuICBhY3RpdmVJZDogJycsXG4gIGFjdGl2ZXByb2R1Y3RMaXN0OiBbXSxcbiAgY29tcGFyZURhdGE6IFtdLFxuICBmaWx0ZXJlZENvbXBhcmVEYXRhOiBbXSxcbiAgZmVhdHVyZXNMaXN0OiBbXSxcbiAgY2hlY2tlZEZlYXR1cmVzRGF0ZTogbnVsbCxcbiAgY29tcGFyZUlkczogW10sXG4gIGNvbXBhcmVMaW1pdDogNCxcbiAgZmlsdGVyT3B0aW9uczoge30sXG4gIGZpbHRlckdyb3VwOiB7fSxcbiAgaXNGaWx0ZXJNb2RhbE9wZW46IGZhbHNlLFxuICBjb25maWc6IHt9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24pIHtcblxuICAvLyBjaGVja05lZWRQZXJzaXN0KF8uZ2V0KGFjdGlvbiwgJ3R5cGUnKSwgJ3Byb2R1Y3RzTGlzdCcsIF8uZ2V0KGFjdGlvbiwgJ3BheWxvYWQnKSwgXy5nZXQoYWN0aW9uLCAnaXNSZXN0b3JlRGF0YScpKTtcblxuICBsZXQgcGVyc2lzdFN0YXRlcyA9IF8uZ2V0KGxvY2FsU3RvcmFnZS5nZXQoJ3JlZHV4JykgfHwge30sICdwcm9kdWN0c0xpc3QnKSB8fCBJTklUSUFMX1NUQVRFO1xuICBsZXQgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgLi4ucGVyc2lzdFN0YXRlc1xuICB9XG4gIGlmICghXy5pc0VxdWFsKHN0YXRlLCBuZXdTdGF0ZSkpIHtcbiAgICBzdGF0ZSA9IG5ld1N0YXRlO1xuICB9XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEZFVENIX1BST0RVQ1RTTElTVDpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHNMaXN0OiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGRVRDSF9QUk9EVUNUU0xJU1RfSE9NRTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHNMaXN0SG9tZTogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgUFVTSF9QUk9EVUNUU0xJU1Q6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzTGlzdDogW2FjdGlvbi5wYXlsb2FkLCAuLi5zdGF0ZS5wcm9kdWN0c0xpc3RdXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFJFTU9WRV9QUk9EVUNUU0xJU1Q6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzTGlzdDogWy4uLnN0YXRlLnByb2R1Y3RzTGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uX2lkICE9PSBhY3Rpb24ucGF5bG9hZC5faWQpXVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBVUERBVEVfUFJPRFVDVFNMSVNUOlxuICAgICAgbGV0IGluZGV4ID0gXy5maW5kSW5kZXgoc3RhdGUucHJvZHVjdHNMaXN0LCB7ICdfaWQnOiBhY3Rpb24ucGF5bG9hZC5faWQgfSlcbiAgICAgIHN0YXRlLnByb2R1Y3RzTGlzdC5zcGxpY2UoaW5kZXgsIDEsIGFjdGlvbi5wYXlsb2FkKVxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0c0xpc3Q6IHN0YXRlLnByb2R1Y3RzTGlzdFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBVUERBVEVfQUNUSVZFX0lEX1BST0RVQ1RTX0xJU1Q6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFjdGl2ZUlkOiBhY3Rpb24uaWQsXG4gICAgICAgIGFjdGl2ZXByb2R1Y3RMaXN0OiBfLnBpY2soXy5maW5kKHN0YXRlLnByb2R1Y3RzTGlzdCwgeyAnX2lkJzogYWN0aW9uLmlkIH0pLCBbXG4gICAgICAgICAgJ293bmVyTW9iaWxlTnVtZXInLFxuICAgICAgICAgICdjYXJQbGF0ZU51bWJlcicsXG4gICAgICAgICAgJ3N0YXRlJyxcbiAgICAgICAgICAnY2Fyc3BlY3NBbGwnLFxuICAgICAgICAgICdvd25lckFkZHJlc3MnLFxuICAgICAgICAgICdjb21wYW55cycsXG4gICAgICAgICAgJ2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICAncHJvZHVjdFR5cGUnLFxuICAgICAgICAgICdkcml2ZW5XaGVlbCcsXG4gICAgICAgICAgJ2NhcnNwZWNzSWQnLFxuICAgICAgICAgICdjcmVhdGVkQXQnLFxuICAgICAgICAgICdjb25kaXRpb24nLFxuICAgICAgICAgICdvd25lck5hbWUnLFxuICAgICAgICAgICdjb21wYW55SWQnLFxuICAgICAgICAgICdmZWF0dXJlcycsXG4gICAgICAgICAgJ2JvZHlUeXBlJyxcbiAgICAgICAgICAnZnVlbFR5cGUnLFxuICAgICAgICAgICdtaWxlYWdlJyxcbiAgICAgICAgICAnY2FyVXJsJyxcbiAgICAgICAgICAncHJlZml4JyxcbiAgICAgICAgICAnY29sb3InLFxuICAgICAgICAgICdwcmljZScsXG4gICAgICAgICAgJ19pZCdcbiAgICAgICAgXSlcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQUREX0NPTVBBUkVfX1BST0RVQ1RfSUQ6XG5cbiAgICAgIGlmICghc3RhdGUuY29tcGFyZUlkcykge1xuICAgICAgICBzdGF0ZS5jb21wYXJlSWRzID0gW11cbiAgICAgIH1cbiAgICAgIGlmIChzdGF0ZS5jb21wYXJlSWRzLmxlbmd0aCA8IHN0YXRlLmNvbXBhcmVMaW1pdCkge1xuICAgICAgICBsZXQgY2hlY2tJZkV4aXN0ID0gXy5maW5kSW5kZXgoc3RhdGUuY29tcGFyZUlkcywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICBzdGF0ZSA9IGl0ZW0gPT0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIH0pXG4gICAgICAgIGlmIChjaGVja0lmRXhpc3QgPT0gLTEpIHtcbiAgICAgICAgICBsZXQgdGVtcCA9IF8uY2xvbmVEZWVwKHN0YXRlLmNvbXBhcmVJZHMpXG4gICAgICAgICAgdGVtcC5wdXNoKGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBjb21wYXJlSWRzOiB0ZW1wXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBSRU1PVkVfQ09NUEFSRV9QUk9EVUNUX0lEOlxuICAgICAgbGV0IHRlbXAgPSBzdGF0ZS5jb21wYXJlSWRzLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gYWN0aW9uLnBheWxvYWQpO1xuXG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbXBhcmVJZHM6IHRlbXAsXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFBBVENIX0NPTVBBUkVfUFJPRFVDVF9JRFM6XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYWN0aW9uLnBheWxvYWQpKSB7XG4gICAgICAgIGFjdGlvbi5wYXlsb2FkID0gW107XG4gICAgICB9XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbXBhcmVJZHM6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIENMRUFSX0NPTVBBUkVfUFJPRFVDVF9JRFM6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbXBhcmVJZHM6IFtdXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZFVENIX0ZJTFRFUkVEX0NPTVBBUkVfREFUQTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyZWRDb21wYXJlRGF0YTogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRkVUQ0hfRkVBVFVSRVNfTElTVDpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmVhdHVyZXNMaXN0OiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgVVBEQVRFX0NIRUNLRURfRkVBVFVSRVNfREFURTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2hlY2tlZEZlYXR1cmVzRGF0ZTogbW9tZW50KGFjdGlvbi5wYXlsb2FkKSxcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRkVUQ0hfQ09NUEFSRV9MSU1JVDpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29tcGFyZUxpbWl0OiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRkVUQ0hfUFJPRFVDVF9GSUxURVJfT1BUSU9OUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyT3B0aW9uczogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIENMRUFSX1BST0RVQ1RfRklMVEVSX09QVElPTlM6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbHRlck9wdGlvbnM6IHt9LFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGRVRDSF9QUk9EVUNUX0ZJTFRFUl9HUk9VUDpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyR3JvdXA6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBDTEVBUl9QUk9EVUNUX0ZJTFRFUl9HUk9VUDpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyR3JvdXA6IHt9LFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGRVRDSF9QUk9EVUNUX0ZJTFRFUl9DT05GSUc6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbmZpZzogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIENMRUFSX1BST0RVQ1RfRklMVEVSX0NPTkZJRzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29uZmlnOiB7fSxcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRkVUQ0hfRklMVEVSX01PREFMX1NUQVRFOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0ZpbHRlck1vZGFsT3BlbjogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFNFVF9QUk9EVUNUX0xJU1RfTE9BRElORzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdExpc3RMb2FkaW5nOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBzdGF0ZSA9IHN0YXRlO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcGVyc2lzdFJlZHV4KCdwcm9kdWN0c0xpc3QnLCBzdGF0ZSlcblxuICByZXR1cm4gc3RhdGU7XG59XG4iLCJpbXBvcnQge1xuICBTVEVQU19QUk9QU19DVVJSRU5ULFxuICBGT1JNX09ORVxufSBmcm9tICcuLi9hY3Rpb25zL3JlZ2lzdGVyLWFjdGlvbnMnO1xuaW1wb3J0IGxvY2FsU3RvcmFnZSBmcm9tICdsb2NhbC1zdG9yYWdlJztcbmltcG9ydCB7IGNoZWNrSXNOZWVkUGVyc2lzdCwgY2hlY2tOZWVkUGVyc2lzdCwgZ2V0UGVyc2lzdE9iaiwgcGVyc2lzdFJlZHV4IH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIGN1cnJlbnQ6IDAsXG4gIGZvcm1PbmU6IHt9LFxufVxuXG5jb25zdCBhcHBSZWR1Y2VyID0gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSA9PiB7XG5cblxuICAvLyBjaGVja05lZWRQZXJzaXN0KF8uZ2V0KGFjdGlvbiwgJ3R5cGUnKSwgJ3JlZ2lzdGVyJywgXy5nZXQoYWN0aW9uLCAncGF5bG9hZCcpLCBfLmdldChhY3Rpb24sICdpc1Jlc3RvcmVEYXRhJykpO1xuXG4gIGxldCBwZXJzaXN0U3RhdGVzID0gXy5nZXQobG9jYWxTdG9yYWdlLmdldCgncmVkdXgnKSB8fCB7fSwgJ3Byb2R1Y3RzTGlzdCcpIHx8IElOSVRJQUxfU1RBVEU7XG4gIGxldCBuZXdTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICAuLi5wZXJzaXN0U3RhdGVzXG4gIH1cbiAgaWYoIV8uaXNFcXVhbChzdGF0ZSwgbmV3U3RhdGUpKXtcbiAgICBzdGF0ZSA9IG5ld1N0YXRlO1xuICB9XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNURVBTX1BST1BTX0NVUlJFTlQ6XG4gICAgICBzdGF0ZSA9IHsgLi4uc3RhdGUsIGN1cnJlbnQ6IGFjdGlvbi5kYXRhIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZPUk1fT05FOlxuICAgICAgc3RhdGUgPSB7IC4uLnN0YXRlLCBmb3JtT25lOiBhY3Rpb24uZGF0YSB9O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHN0YXRlID0gc3RhdGU7XG4gICAgICBicmVhaztcbiAgfVxuICBwZXJzaXN0UmVkdXgoJ3JlZ2lzdGVyJywgc3RhdGUpXG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwUmVkdWNlcjtcbiIsImltcG9ydCB7XG4gIFVQREFURV9TRUxMRVJfUFJPRklMRVxufSBmcm9tIFwiLi4vYWN0aW9ucy9zZWxsZXJQcm9maWxlLWFjdGlvbnNcIjtcbmltcG9ydCBsb2NhbFN0b3JhZ2UgZnJvbSAnbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgeyBjaGVja0lzTmVlZFBlcnNpc3QsIGNoZWNrTmVlZFBlcnNpc3QsIGdldFBlcnNpc3RPYmosIHBlcnNpc3RSZWR1eCB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIC8vIGNvbXBhbnk6IHt9LFxuICBzZWxsZXI6IHt9LFxuICBjYXJPblNhbGVzOiBbXSxcbn1cblxuY29uc3QgYXBwUmVkdWNlciA9IChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbikgPT4ge1xuXG5cbiAgLy8gY2hlY2tOZWVkUGVyc2lzdChfLmdldChhY3Rpb24sICd0eXBlJyksICdzZWxsZXJQcm9maWxlJywgXy5nZXQoYWN0aW9uLCAncGF5bG9hZCcpLCBfLmdldChhY3Rpb24sICdpc1Jlc3RvcmVEYXRhJykpO1xuXG4gIGxldCBwZXJzaXN0U3RhdGVzID0gXy5nZXQobG9jYWxTdG9yYWdlLmdldCgncmVkdXgnKSB8fCB7fSwgJ3NlbGxlclByb2ZpbGUnKSB8fCBJTklUSUFMX1NUQVRFO1xuICBsZXQgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgLi4ucGVyc2lzdFN0YXRlc1xuICB9XG4gIGlmKCFfLmlzRXF1YWwoc3RhdGUsIG5ld1N0YXRlKSl7XG4gICAgc3RhdGUgPSBuZXdTdGF0ZTtcbiAgfVxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBVUERBVEVfU0VMTEVSX1BST0ZJTEU6XG4gICAgICAvLyBzdGF0ZSA9IHsuLi5zdGF0ZSwgY29tcGFueTogYWN0aW9uLmRhdGEgfTtcbiAgICAgIHN0YXRlID0geyAuLi5zdGF0ZSwgc2VsbGVyOiBhY3Rpb24uZGF0YSB9O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHN0YXRlID0gc3RhdGU7XG4gICAgICBicmVhaztcbiAgfVxuICBwZXJzaXN0UmVkdXgoJ3NlbGxlclByb2ZpbGUnLCBzdGF0ZSlcblxuICByZXR1cm4gc3RhdGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcHBSZWR1Y2VyO1xuIiwiaW1wb3J0IHsgVVBEQVRFX1NPQ0tFVF9JTkZPLCBERUxFVEVfU09DS0VUX0lORk8gfSBmcm9tICcuLi9hY3Rpb25zL3NvY2tldFJlZnJlc2gtYWN0aW9ucyc7XG5pbXBvcnQgbG9jYWxTdG9yYWdlIGZyb20gJ2xvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0IHsgY2hlY2tJc05lZWRQZXJzaXN0LCBjaGVja05lZWRQZXJzaXN0LCBnZXRQZXJzaXN0T2JqLCBwZXJzaXN0UmVkdXggfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24pIHtcblxuICAvLyBjaGVja05lZWRQZXJzaXN0KF8uZ2V0KGFjdGlvbiwgJ3R5cGUnKSwgJ3NvY2tldFJlZnJlc2gnLCBfLmdldChhY3Rpb24sICdwYXlsb2FkJyksIF8uZ2V0KGFjdGlvbiwgJ2lzUmVzdG9yZURhdGEnKSk7XG5cbiAgbGV0IHBlcnNpc3RTdGF0ZXMgPSBfLmdldChsb2NhbFN0b3JhZ2UuZ2V0KCdyZWR1eCcpIHx8IHt9LCAnc29ja2V0UmVmcmVzaCcpIHx8IElOSVRJQUxfU1RBVEU7XG4gIGxldCBuZXdTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICAuLi5wZXJzaXN0U3RhdGVzXG4gIH1cbiAgaWYoIV8uaXNFcXVhbChzdGF0ZSwgbmV3U3RhdGUpKXtcbiAgICBzdGF0ZSA9IG5ld1N0YXRlO1xuICB9XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFVQREFURV9TT0NLRVRfSU5GTzpcbiAgICAgIHN0YXRlID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAvLyBzdGF0ZSA9IHtcbiAgICAgIC8vICAgLi4uc3RhdGUsXG4gICAgICAvLyAgIHNob3VsZFJlZnJlc2g6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAvLyB9XG4gICAgICAvL25vdCByZWFsbHkgdXNlZCB3ZSBjYW4ganVzdCB1cGRhdGUgd2l0aCBmYWxzaFxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBERUxFVEVfU09DS0VUX0lORk86XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGVcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgc3RhdGUgPSBzdGF0ZTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHBlcnNpc3RSZWR1eCgnc29ja2V0UmVmcmVzaCcsIHN0YXRlKVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiIsImltcG9ydCB7IExPR0lOX1NVQ0NFU1NGVUwsIExPR09VVF9TVUNDRVNTRlVMLCBTRVRfVVNFUiwgQUREUkVTU19CT09LX0ZPUk0sIENBUkRfRk9STSwgQkFOS19GT1JNIH0gZnJvbSAnLi4vYWN0aW9ucy91c2VyLWFjdGlvbnMnO1xuaW1wb3J0IHsgY2hlY2tJc05lZWRQZXJzaXN0LCBjaGVja05lZWRQZXJzaXN0LCBnZXRMb2NhbFN0b3JhZ2VQZXJzaXN0U3RhdGVzLCBnZXRQZXJzaXN0T2JqLCBwZXJzaXN0UmVkdXggfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBsb2NhbFN0b3JhZ2UgZnJvbSAnbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgeyBpc1ZhbGlkTnVtYmVyIH0gZnJvbSAnLi4vLi4vY29tbW9uLWZ1bmN0aW9uJztcblxuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICBpbmZvOiB7XG4gICAgdXNlcjoge1xuICAgICAgX2lkOiBudWxsLFxuICAgIH1cbiAgfSxcbiAgYXV0aGVudGljYXRlZDogZmFsc2UsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBlcnJvcnM6IHt9LFxuICBhZGRyZXNzRm9ybToge30sXG4gIGNhcmRGb3JtOiB7fSxcbiAgYmFua0Zvcm06IHt9LFxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSB7XG5cblxuICBsZXQgcGVyc2lzdFN0YXRlcyA9IF8uZ2V0KGxvY2FsU3RvcmFnZS5nZXQoJ3JlZHV4JykgfHwge30sICd1c2VyJykgfHwgSU5JVElBTF9TVEFURTtcbiAgbGV0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIC4uLnBlcnNpc3RTdGF0ZXNcbiAgfVxuICAvLyBjaGVja05lZWRQZXJzaXN0KF8uZ2V0KGFjdGlvbiwgJ3R5cGUnKSwgJ3VzZXInLCBfLmdldChhY3Rpb24sICdwYXlsb2FkJyksIF8uZ2V0KGFjdGlvbiwgJ2lzUmVzdG9yZURhdGEnKSk7XG5cbiAgaWYoIV8uaXNFcXVhbChzdGF0ZSwgbmV3U3RhdGUpKXtcbiAgICBzdGF0ZSA9IG5ld1N0YXRlO1xuICB9XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIExPR0lOX1NVQ0NFU1NGVUw6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGF1dGhlbnRpY2F0ZWQ6IHRydWUsXG4gICAgICAgIGluZm86IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIExPR09VVF9TVUNDRVNTRlVMOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhdXRoZW50aWNhdGVkOiBmYWxzZSxcbiAgICAgICAgaW5mbzoge31cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgU0VUX1VTRVI6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGluZm86IHtcbiAgICAgICAgICAuLi5zdGF0ZS5pbmZvLFxuICAgICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIEFERFJFU1NfQk9PS19GT1JNOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhZGRyZXNzRm9ybTogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIENBUkRfRk9STTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FyZEZvcm06IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBCQU5LX0ZPUk06XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGJhbmtGb3JtOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHBlcnNpc3RSZWR1eCgndXNlcicsIHN0YXRlKTtcbiAgcmV0dXJuIHN0YXRlO1xuXG59XG4iLCJpbXBvcnQge1xuICBBRERfTElLRSxcbiAgUkVNT1ZFX0xJS0UsXG4gIEFERF9CT09LTUFSSyxcbiAgUkVNT1ZFX0JPT0tNQVJLLFxuICBBRERfTElLRV9NU0csXG4gIFJFTU9WRV9MSUtFX01TRyxcbn0gZnJvbSAnLi4vYWN0aW9ucy91c2VybGlrZXMtYWN0aW9ucyc7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCJcbmltcG9ydCBsb2NhbFN0b3JhZ2UgZnJvbSAnbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgeyBjaGVja0lzTmVlZFBlcnNpc3QsIGNoZWNrTmVlZFBlcnNpc3QsIGdldFBlcnNpc3RPYmosIHBlcnNpc3RSZWR1eCB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIGFsbExpa2U6IFtdLFxuICBhbGxCb29rbWFyazogW10sXG4gIGFsbExpa2VNc2c6IFtdLFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbikge1xuXG5cbiAgLy8gY2hlY2tOZWVkUGVyc2lzdChfLmdldChhY3Rpb24sICd0eXBlJyksICd1c2VybGlrZXMnLCBfLmdldChhY3Rpb24sICdwYXlsb2FkJyksIF8uZ2V0KGFjdGlvbiwgJ2lzUmVzdG9yZURhdGEnKSk7XG5cbiAgbGV0IHBlcnNpc3RTdGF0ZXMgPSBfLmdldChsb2NhbFN0b3JhZ2UuZ2V0KCdyZWR1eCcpIHx8IHt9LCAndXNlcmxpa2VzJykgfHwgSU5JVElBTF9TVEFURTtcbiAgbGV0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIC4uLnBlcnNpc3RTdGF0ZXNcbiAgfVxuICBpZighXy5pc0VxdWFsKHN0YXRlLCBuZXdTdGF0ZSkpe1xuICAgIHN0YXRlID0gbmV3U3RhdGU7XG4gIH1cbiAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdGF0ZSA9IHt9XG4gIH1cblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlIEFERF9MSUtFOlxuICAgICAgaWYgKCFzdGF0ZS5hbGxMaWtlKSB7IHN0YXRlLmFsbExpa2UgPSBbXSB9XG4gICAgICBzdGF0ZS5hbGxMaWtlLnB1c2goYWN0aW9uLnZhbHVlKVxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBSRU1PVkVfTElLRTpcbiAgICAgIF8ucmVtb3ZlKHN0YXRlLmFsbExpa2UsIHtcbiAgICAgICAgY2hhdElkOiBhY3Rpb24udmFsdWUuY2hhdElkLFxuICAgICAgICB1c2VySWQ6IGFjdGlvbi52YWx1ZS51c2VySWRcbiAgICAgIH0pO1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEFERF9CT09LTUFSSzpcbiAgICAgIGlmICghc3RhdGUuYWxsQm9va21hcmspIHsgc3RhdGUuYWxsQm9va21hcmsgPSBbXSB9XG5cbiAgICAgIHN0YXRlLmFsbEJvb2ttYXJrLnB1c2goYWN0aW9uLnZhbHVlKVxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBSRU1PVkVfQk9PS01BUks6XG4gICAgICBfLnJlbW92ZShzdGF0ZS5hbGxCb29rbWFyaywge1xuICAgICAgICBjaGF0SWQ6IGFjdGlvbi52YWx1ZS5jaGF0SWQsXG4gICAgICAgIHVzZXJJZDogYWN0aW9uLnZhbHVlLnVzZXJJZFxuICAgICAgfSk7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgQUREX0xJS0VfTVNHOlxuICAgICAgaWYgKCFzdGF0ZS5hbGxMaWtlTXNnKSB7IHN0YXRlLmFsbExpa2VNc2cgPSBbXSB9XG4gICAgICBzdGF0ZS5hbGxMaWtlTXNnLnB1c2goYWN0aW9uLnZhbHVlKVxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBSRU1PVkVfTElLRV9NU0c6XG4gICAgICBfLnJlbW92ZShzdGF0ZS5hbGxMaWtlTXNnLCB7XG4gICAgICAgIGNoYXRJZDogYWN0aW9uLnZhbHVlLmNoYXRJZCxcbiAgICAgICAgbWVzc2FnZUlkOiBhY3Rpb24udmFsdWUuY2hhdElkLFxuICAgICAgICB1c2VySWQ6IGFjdGlvbi52YWx1ZS51c2VySWRcbiAgICAgIH0pO1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgc3RhdGUgPSBzdGF0ZVxuICAgICAgYnJlYWs7XG4gIH1cbiAgcGVyc2lzdFJlZHV4KCd1c2VybGlrZXMnLCBzdGF0ZSlcblxuICByZXR1cm4gc3RhdGU7XG59XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IEZFVENIX1ZBUklBTlQsIENMRUFSX1ZBUklBTlQgfSBmcm9tICcuLi9hY3Rpb25zL3ZhcmlhbnQtYWN0aW9uJztcbmltcG9ydCBsb2NhbFN0b3JhZ2UgZnJvbSAnbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgeyBjaGVja0lzTmVlZFBlcnNpc3QsIGNoZWNrTmVlZFBlcnNpc3QsIGdldFBlcnNpc3RPYmosIHBlcnNpc3RSZWR1eCB9IGZyb20gJy4uL2NvbmZpZyc7XG5cblxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcbiAgICB2YXJpYW50OiB7fSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSB7XG5cbiAgICAvLyBjaGVja05lZWRQZXJzaXN0KF8uZ2V0KGFjdGlvbiwgJ3R5cGUnKSwgJ3ZhcmlhbnQnLCBfLmdldChhY3Rpb24sICdwYXlsb2FkJyksIF8uZ2V0KGFjdGlvbiwgJ2lzUmVzdG9yZURhdGEnKSk7XG5cbiAgICBsZXQgcGVyc2lzdFN0YXRlcyA9IF8uZ2V0KGxvY2FsU3RvcmFnZS5nZXQoJ3JlZHV4JykgfHwge30sICd2YXJpYW50JykgfHwgSU5JVElBTF9TVEFURTtcbiAgICBsZXQgbmV3U3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi5wZXJzaXN0U3RhdGVzXG4gICAgfVxuICAgIGlmKCFfLmlzRXF1YWwoc3RhdGUsIG5ld1N0YXRlKSl7XG4gICAgICBzdGF0ZSA9IG5ld1N0YXRlO1xuICAgIH1cbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgRkVUQ0hfVkFSSUFOVDpcbiAgICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHZhcmlhbnQ6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBDTEVBUl9WQVJJQU5UOlxuICAgICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdmFyaWFudDoge30sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc3RhdGUgPSBzdGF0ZVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICB9XG4gICAgcGVyc2lzdFJlZHV4KCd2YXJpYW50Jywgc3RhdGUpXG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IEhZRFJBVEUsIGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJ1xuaW1wb3J0IGFwcCBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9hcHAtcmVkdWNlcidcbmltcG9ydCBjYXJmcmVhayBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9jYXJmcmVhay1yZWR1Y2VyJ1xuaW1wb3J0IGNhclBsYXRlc0xpc3QgZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvY2FyUGxhdGVzTGlzdC1yZWR1Y2VyJ1xuaW1wb3J0IGtwcCBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9rcHAtcmVkdWNlcidcbmltcG9ydCBsaXZlIGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2xpdmUtcmVkdWNlcidcbmltcG9ydCBuZXdjYXJzIGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL25ld2NhcnMtcmVkdWNlcidcbmltcG9ydCBwcm9kdWN0c0xpc3QgZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvcHJvZHVjdHNMaXN0LXJlZHVjZXInXG5pbXBvcnQgcmVnaXN0ZXIgZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvcmVnaXN0ZXItcmVkdWNlcidcbmltcG9ydCBzZWxsZXJQcm9maWxlIGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL3NlbGxlclByb2ZpbGUtcmVkdWNlcidcbmltcG9ydCBzb2NrZXRSZWZyZXNoIGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL3NvY2tldFJlZnJlc2gtcmVkdWNlcidcbmltcG9ydCB1c2VyIGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL3VzZXItcmVkdWNlcidcbmltcG9ydCB1c2VybGlrZXMgZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvdXNlcmxpa2VzLXJlZHVjZXInXG5pbXBvcnQgdmFyaWFudCBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy92YXJpYW50LXJlZHVjZXInXG5cblxuXG5jb25zdCBiaW5kTWlkZGxld2FyZSA9IChtaWRkbGV3YXJlKSA9PiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gPSByZXF1aXJlKCdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nKVxuICAgIHJldHVybiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSlcbiAgfVxuICByZXR1cm4gYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpXG59XG5cbmNvbnN0IGNvbWJpbmVkUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGFwcCxcbiAgY2FyZnJlYWssXG4gIGNhclBsYXRlc0xpc3QsXG4gIGtwcCxcbiAgbGl2ZSxcbiAgbmV3Y2FycyxcbiAgcHJvZHVjdHNMaXN0LFxuICByZWdpc3RlcixcbiAgc2VsbGVyUHJvZmlsZSxcbiAgc29ja2V0UmVmcmVzaCxcbiAgdXNlcmxpa2VzLFxuICB2YXJpYW50LFxuICB1c2VyLFxufSlcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gSFlEUkFURSkge1xuICAgIGNvbnN0IG5leHRTdGF0ZSA9IHtcbiAgICAgIC4uLnN0YXRlLCAvLyB1c2UgcHJldmlvdXMgc3RhdGVcbiAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLCAvLyBhcHBseSBkZWx0YSBmcm9tIGh5ZHJhdGlvblxuICAgIH1cbiAgICBpZiAoc3RhdGUuY291bnQuY291bnQpIG5leHRTdGF0ZS5jb3VudC5jb3VudCA9IHN0YXRlLmNvdW50LmNvdW50IC8vIHByZXNlcnZlIGNvdW50IHZhbHVlIG9uIGNsaWVudCBzaWRlIG5hdmlnYXRpb25cbiAgICByZXR1cm4gbmV4dFN0YXRlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNvbWJpbmVkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKVxuICB9XG59XG5cbmNvbnN0IGluaXRTdG9yZSA9ICgpID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGJpbmRNaWRkbGV3YXJlKFt0aHVua01pZGRsZXdhcmVdKSlcbn1cblxuXG5cbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihpbml0U3RvcmUpXG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGluaXRTdG9yZSgpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZlYXRoZXJzanMvYXV0aGVudGljYXRpb24tY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmZWF0aGVyc2pzL2ZlYXRoZXJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmZWF0aGVyc2pzL3NvY2tldGlvLWNsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9jYWwtc3RvcmFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXNlb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVlcnktc3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNwcmluZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29ja2V0LmlvLWNsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=