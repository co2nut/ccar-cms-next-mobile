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
// const socket = io('https://api.ccar.my/');   // live

const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default()('https://preprod-api.ccar.my/'); // live

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
    appId = '616173029318134';
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
/*! exports provided: writePostIcon, imageNotFoundIcon, raceFlagIcon, allIcon, carFreakLikeIcon, carFreakLikeGreyIcon, carFreakCommentIcon, followingGreyIcon, followingYellowIcon, earthGreyIcon, earthYellowIcon, clubNonMember, uploadPhoto, calendarIcon, pinIcon, createCarFreakIcon, createSocialBoardIcon, carFreakReplyIcon, carspecNotFoundImage, flameRed, flameRedShadow, flame, soldOutIcon, rayaFlame, rayaFood, rayaLamp, rayaMosque, rayaPeople, ccarWebLogo400X150, ccarLogo, ccarLogo2, ccarWebLogo2, loginBackground, tbhCny, tbh1Cny, tbh2Cny, cnyLionHead, cnyLogo, googleLogo, cnyLogo2, tbh, defaultProfileBackground, phone, email, help, address, location, wishList, wishlistIconActived, faqDiceBanner, faqBanner, faqBuyCarIcon, faqCarFreakIcon, faqCstarIcon, faqMyAccountIcon, faqOurFeaturesIcon, faqSellCarIcon, searchBoxImg, sortingImg, filterFormImg, allNewCarImg, carBrandImg, newCarFilterFormImg, carMoreInfoImg, cstarListImg, cstarAnimationImg, bellInactive, ratingBanner, threedots, menuLogin */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCarFreakIcon", function() { return createCarFreakIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSocialBoardIcon", function() { return createSocialBoardIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carFreakReplyIcon", function() { return carFreakReplyIcon; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "threedots", function() { return threedots; });
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
const pinIcon = '/assets/car-freak/pin.png';
const createCarFreakIcon = '/assets/car-freak/CarFreaks.png';
const createSocialBoardIcon = '/assets/car-freak/social-board.png';
const carFreakReplyIcon = '/assets/car-freak/reply.png'; //Car Market

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

const ratingBanner = '/assets/car-review/rating.png';
const threedots = '/3-dots.png'; //Menu

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvbW1vbi1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhckZyZWFrL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dlbmVyYWwvUGFnZVRyYW5zaXRpb24uanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGl2ZS9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vZmVhdGhlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vZnVuY3Rpb25Db250ZW50LmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZVJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9pY29uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFyYW1zL2JvZHlUeXBlTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9wYXJhbXMvY2FyQnJhbmRzTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9wYXJhbXMvY29sb3JMaXN0LmpzIiwid2VicGFjazovLy8uL3BhcmFtcy9mdWVsVHlwZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcGFyYW1zL3N0YXRlTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2FwcC1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvY2FyUGxhdGVzTGlzdC1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvY2FyZnJlYWsuYWN0aW9uLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMva3BwLWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9saXZlLWFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL25ld2NhcnMtYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3Byb2R1Y3RzTGlzdC1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvcmVnaXN0ZXItYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3NlbGxlclByb2ZpbGUtYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3NvY2tldFJlZnJlc2gtYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3VzZXItYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3VzZXJsaWtlcy1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvdmFyaWFudC1hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2FwcC1yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2NhclBsYXRlc0xpc3QtcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9jYXJmcmVhay1yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2twcC1yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2xpdmUtcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9uZXdjYXJzLXJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvcHJvZHVjdHNMaXN0LXJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvcmVnaXN0ZXItcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9zZWxsZXJQcm9maWxlLXJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvc29ja2V0UmVmcmVzaC1yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL3VzZXItcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy91c2VybGlrZXMtcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy92YXJpYW50LXJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZlYXRoZXJzanMvYXV0aGVudGljYXRpb24tY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZlYXRoZXJzanMvZmVhdGhlcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZmVhdGhlcnNqcy9zb2NrZXRpby1jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2NhbC1zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1zZW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInF1ZXJ5LXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zcHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvLWNsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXVpZFwiIl0sIm5hbWVzIjpbIm1vbWVudCIsInJlcXVpcmUiLCJkZWZhdWx0UmFuZ2VTbWFsbGVyIiwiZGVmYXVsdFJhbmdlQmlnZ2VyIiwiYXZhaWxhYmxlRmlsdGVycyIsImlzTnVtYmVyQW5kU3BhY2UiLCJ2YWx1ZSIsInNwbGl0IiwiZmlsdGVyIiwiaXRlbSIsImluZGV4IiwicGFyc2VJbnQiLCJsZW5ndGgiLCJmb3JtYXREYXRlIiwiZm9ybWF0IiwiaXNWYWxpZERhdGUiLCJmb3JtYXROdW1iZXIiLCJ1bml0Iiwicm91bmQiLCJmaXhlZFBvaW50IiwidHJpbSIsImlzTmFOIiwicGFyc2VGbG9hdCIsIm51bWJlclRvRml4ZWQiLCJ1bml0cyIsIl8iLCJmb3JFYWNoIiwicmV2ZXJzZSIsImZvcm1hdGVkVmFsdWUiLCJwcmVmaXgiLCJpbnNlcnRCZXR3ZWVuIiwicG9zdGZpeCIsInRvU3RyaW5nIiwidHJpbVN0cmluZ051bWJlciIsImZyb21Gcm9udCIsInJhbmdlIiwidG9GaXhlZCIsInNsaWNlIiwiam9pbiIsInByZWZpeEFyciIsImRvbmUiLCJzb21lIiwibnVtIiwic3Vic3RyaW5nIiwicG9zdGZpeEFyciIsInJldmVyc2VTdHJpbmciLCJzdHJBcnJheSIsImNoZWNrQ2FyZFR5cGUiLCJudW1iZXIiLCJyZXBsYWNlIiwicmUiLCJSZWdFeHAiLCJtYXRjaCIsInRlc3QiLCJyZW1vdmVOdWxsRnJvbUFycmF5Iiwibm90RW1wdHlMZW5ndGgiLCJEYXRlIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiY2FsbCIsInZhbHVlT2YiLCJjYWxjdWxhdGVUaW1lUmFuZ2UiLCJkYXRlMSIsImRhdGUyIiwicHJlY2lzZSIsImRhdGEiLCJkaWZmZXJlbmNlIiwiZGlmZiIsInNlY3Rpb25zIiwic2VsZWN0ZWRTZWN0aW9uIiwiZmluZCIsInNlY3Rpb24iLCJNYXRoIiwiYWJzIiwiY29udmVydE1pbGxpU2Vjb25kc1RvVGltZSIsIm1pbGxpc2Vjb25kIiwibWluVW5pdCIsImlzVmFsaWROdW1iZXIiLCJzZWNvbmQiLCJtaW51dGUiLCJob3VyIiwiZmluYWxUaW1lIiwiZHVyYXRpb24iLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiaXNFeHBpcmVkIiwiZGF0ZSIsImFzcGVjdCIsInRvZGF5IiwiaXNBZnRlciIsImNvbnZlcnRUb0NhcmRGb3JtYXQiLCJjb252ZXJ0VG9FeHBpcmVkRGF0ZUZvcm1hdCIsInN0ciIsInNwbGljZSIsInNwYWNlIiwiY2hhciIsImZyb21CYWNrIiwic3RvcEF0RW5kIiwib3Jpc3RyIiwiYWRkZWRzcGFjZWNvdW50IiwiY2hlY2tTdXBwb3J0ZWRDYXJkVHlwZSIsImNhcmQiLCJpc0V4cGlyeURhdGVGb3JtYXQiLCJzb3J0QnlEZXNjIiwiY29sIiwic29ydCIsImEiLCJiIiwiaXNQbGFpbk9iamVjdCIsImlzQXJyYXkiLCJzb3J0QnlEYXRlRGVzYyIsImlzQmVmb3JlIiwiZmluZERhdGEiLCJ2YWwiLCJoaWRlU3RyaW5nTnVtYmVyIiwic3RyaW5nIiwic3RhcnQiLCJlbmQiLCJzdGFydHBhcnQiLCJlbmRwYXJ0IiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwiY29udmVydHBhcnQiLCJtYXAiLCJBcnJheSIsImlzT2JqZWN0Iiwia2V5cyIsImFycmF5TGVuZ3RoQ291bnQiLCJzeW5jRGVmYXVsdERlbGl2ZXJ5IiwiaWQiLCJfaWQiLCJpc0RlZmF1bHREZWxpdmVyeSIsInN5bmNEZWZhdWx0QmlsbGluZyIsImlzRGVmYXVsdEJpbGxpbmciLCJzeW5jRGVmYXVsdENhcmQiLCJpc0RlZmF1bHRDYXJkIiwic3luY0RlZmF1bHRCYW5rIiwiaXNEZWZhdWx0QmFuayIsImlzU2F2ZWRXaXNoTGlzdCIsImNoZWNrIiwicHJvZHVjdElkIiwiaXNGb2xsb3dlZCIsImNvbXBhbnlJZCIsImRlZXBFcXVhbCIsIm9iamVjdDEiLCJvYmplY3QyIiwia2V5czEiLCJrZXlzMiIsImtleSIsInZhbDEiLCJ2YWwyIiwiYXJlT2JqZWN0cyIsIm9iamVjdCIsImRlZXBFcXVhbEFycmF5T2JqZWN0IiwiYXJyYXkxIiwiYXJyYXkyIiwieCIsInJvdW5kVG9IYWxmIiwiZGVjaW1hbCIsImludCIsInF1ZXJ5U3RyaW5naWZ5TmVzdGVkT2JqZWN0IiwiY29sTmFtZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeVN0cmluZyIsImdldEltZ1RhZ1NvdXJjZSIsInN0ckFyciIsInJlbW92ZWQiLCJjb21wYWN0IiwiY2hyIiwiaW1hZ2VzIiwiaW1hZ2UiLCJzdWJzdHIiLCJzdGFydEluZGV4IiwiaW5kZXhPZiIsImNyb3BwZWRTdHJBcnIiLCJ1cmwiLCJuYW1lIiwicmVtb3ZlSHRtbFRhZyIsImNvbnZlcnRUb1JhbmdlRm9ybWF0IiwiY2xvbmVEZWVwIiwiY29udmVydFJhbmdlRm9ybWF0QmFjayIsInZhbHVlQXJyIiwiaXNFbXB0eSIsInBhcmFtZXRlcjEiLCJwYXJhbWV0ZXIyIiwiY29udmVydFJhbmdlRm9ybWF0VG9UZXh0IiwiZm9ybWF0ZWRSYW5nZSIsInZhbHVlRm9ybWF0IiwiY29udmVydFZhbHVlIiwidGV4dCIsImNvbnZlcnRGaWx0ZXJSYW5nZSIsImZpbmFsRGF0YSIsInF1ZXJ5IiwiJGx0ZSIsInB1c2giLCIkbHQiLCIkZXEiLCIkZ3QiLCIkZ3RlIiwicXVlcnkxIiwib2JqZWN0UmVtb3ZlRW1wdHlWYWx1ZSIsInBpY2tCeSIsInByb3BlcnR5IiwiY29udmVydFByb2R1Y3RSb3V0ZVBhcmFtc1RvRmlsdGVyT2JqZWN0Iiwicm91dGVQYXJhbXMiLCJwYXJhbWV0ZXIzIiwic29ydGluZyIsInBhZ2UiLCJ2aWV3IiwibWVyZ2VPYmoiLCJwaWNrIiwicGFyc2UiLCJlcnJvciIsImdldCIsImZpbHRlckdyb3VwIiwiY29uZmlnIiwicHJpY2VSYW5nZSIsInllYXJSYW5nZSIsIm1pbGVhZ2VSYW5nZSIsImVuZ2luZUNhcGFjaXR5UmFuZ2UiLCJzdGF0ZUFyciIsInN0YXRlIiwiYXJlYSIsIm1ha2UiLCJ0b0xvd2VyIiwibW9kZWwiLCJjb252ZXJ0UGFyYW1ldGVyVG9Qcm9kdWN0TGlzdFVybCIsImJhc2VQYXRoIiwiY29uZGl0aW9uIiwibWFpblBhcmFtZXRlcnMiLCJwYXRoIiwicGFyYW1ldGVyIiwiY29udmVydFBhcmFtZXRlclRvUHJvZHVjdExpc3RTZW9VcmwiLCJjaGVja0VudlJldHVybkNtc1VybCIsImNsaWVudCIsImlvIiwidXJpIiwiZ2V0VG9wSXRlbXMiLCJyYW5rIiwicGlja2VkRGF0YSIsInRvQ2FtZWxDYXNlIiwic2VwZXJhdG9yIiwiY2FwaXRhbGl6ZSIsInRvU25ha2VDYXNlIiwibG93ZXJDYXNlIiwidXBwZXJDYXNlIiwidmlld1BvcnQiLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwieHhsIiwiZ2V0VXNlck5hbWUiLCJ1c2VyIiwidHlwZSIsInVzZXJuYW1lIiwiZnVsbE5hbWUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsIm5hbWVQcmVmaXgiLCJmcmVha0lkIiwiZ2V0UGx1cmFsIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJjb3VudCIsInNob3dDb3VudCIsImZpbmRJbmRleGVzT2ZTdHJpbmciLCJzZWFyY2giLCJpbmRleGVzIiwiY3VycmVudFBvc2l0aW9uIiwiY2hlY2tPYmplY3RJZCIsImlkRm9yQ2hlY2siLCJnZXRPYmplY3RJZCIsImdldENhck1hcmtldFNlb0RhdGEiLCJ0b3RhbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsb2NhdGlvbiIsInJhbmdlRmlsdGVyIiwib3RoZXJGaWx0ZXIiLCJnZXRTdGF0ZSIsImZpbHRlclJhbmdlcyIsImZpbHRlclJhbmdlIiwiYm9keVR5cGUiLCJnZXRCb2R5VHlwZSIsImZ1ZWxUeXBlIiwiZ2V0RnVlbFR5cGUiLCJjb2xvciIsImdldENvbG9yIiwicmVnaXN0cmF0aW9uVXJsIiwicmVhZHlTdG9jayIsImNhcjM2MFZpZXciLCJjb25jYXQiLCJnZXRDYXJCcmFuZCIsInRyYW5zbWlzc2lvbiIsImNhbm9uaWNhbCIsImdldFByb2ZpbGVTZW9EYXRhIiwicHJvZmlsZSIsInVzZXJ1cmxJZCIsImF2YXRhciIsImFsdCIsImdldENhckZyZWFrU2VvRGF0YSIsInBhcnNlVGFnU3RyaW5nVG9QbGFpblN0cmluZyIsImNvbnRlbnQiLCJ1c2VySWQiLCJnZXRTb2NpYWxCb2FyZFNlb0RhdGEiLCJnZXRDbHViU2VvRGF0YSIsImNsdWJOYW1lIiwiY2x1YkJpbyIsImdldEFsbE5ld0NhclNlb0RhdGEiLCJnZXRMaXZlU2VvRGF0YSIsImFwaURvbWFpbiIsImdldFN0cmVhbVVybCIsImNoYXRSZXN0cmljdFRpbWUiLCJjYXJGcmVha0dsb2JhbFNlYXJjaCIsInRhZ1ByZWZpeCIsImhhc2hUYWdQcmVmaXgiLCJ0YWdQcmVmaXhIYXNoVmFsdWUiLCJoYXNoVGFnUHJlZml4SGFzaFZhbHVlIiwidGFnU3VmZml4SGFzaFZhbHVlIiwiaGFzaFRhZ1N1ZmZpeEhhc2hWYWx1ZSIsInNlcGVyYXRvckhhc2hWYWx1ZSIsImNsdWJQcm9maWxlVmlld1R5cGVzIiwicGFyc2VUYWdTdHJpbmdUb0FycmF5IiwiZmluYWxUZXh0IiwidGFnVGV4dCIsImluY2x1ZGVzIiwidW5kZWZpbmVkIiwiaGFzaFRhZ0FyciIsInBhcnNlSGFzaFRhZ1N0cmluZ1RvQXJyYXkiLCJnZXRUYWdTdHJpbmciLCJjb2RlUHJlZml4IiwiY29kZVN1ZmZpeCIsInBhcnNlVG9UYWdTdHJpbmciLCJhbGlhc0NvZGUiLCJzb3J0ZWRBbGlhc0NvZGUiLCJzb3J0QnkiLCJjb2RlIiwicG9zaXRpb24iLCJwcmVUZXh0IiwicG9zdFRleHQiLCJnZXRBbGlhc0NvZGVGcm9tVGV4dCIsInN0cnVjdGVkVGV4dCIsInRleHRBcnIiLCJ1aWQiLCJ2NCIsImVuZFBvc2l0aW9uIiwiY3JlYXRlZEF0IiwiZ2V0VGltZSIsImNvbnZlcnROYW1lU3RyaW5nIiwidXNlcnMiLCJhdXRoVXNlciIsImdldFZpZXdUeXBlIiwidmFsaWRhdGVWaWV3VHlwZSIsIlBhZ2VUcmFuc2l0aW9uIiwiY2hpbGRyZW4iLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInRyYW5zaXRpb25zIiwidXNlVHJhbnNpdGlvbiIsInBhdGhuYW1lIiwiZnJvbSIsIm9wYWNpdHkiLCJlbnRlciIsImxlYXZlIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwic3R5bGUiLCJQYWdlIiwic3R5bGVkIiwiYW5pbWF0ZWQiLCJtYWluIiwidGVzdFN0cmVhbVVybCIsImxpdmVTdHJlYW1VcmwiLCJzdHJlYW0iLCJnaWZ0cyIsInByaWNlIiwiZGVmYXVsdFJlYWN0aW9ucyIsImRlZmF1bHRSZWFjdGlvbnNBbmltYXRpb24iLCJ0ZW1wIiwicmVhY3QiLCJyZWFjdGlvbkdpZiIsImdpZnQiLCJpY29uIiwiZGVmYXVsdEdpZnRzIiwibGl2ZUljb24iLCJzdXBwb3J0SWNvbiIsImxpa2VJY29uIiwiY29tbWVudEljb24iLCJzaGFyZUljb24iLCJnaWZ0R2lmIiwiY2NvaW5JY29uIiwicmVhY3Rpb25BbmltYXRpb25UcmFuc2l0aW9ucyIsImdlbmVyYXRlUmFuZG9tVHJhbnNpdGlvbiIsIkxJVkVfVEVYVF9URU1QTEFURSIsIm1heFRyYW5zaXRpb25YIiwibWF4VHJhbnNpdGlvblkiLCJlYWNoVHJhbnNpdGlvbkxlbmd0aCIsImdyb3VwIiwicmVhY3Rpb25BbmltYXRpb25UcmFuc2l0aW9uc1RlbXAiLCJlYWNoVHJhbnNpdGlvbiIsInkiLCJpbmRleDEiLCJyYW5kb20iLCJnZXRUb3RhbFJlYWN0aW9ucyIsInJlYWN0aW9ucyIsInJlYWN0aW9uIiwiZ2V0VG9wUmVhY3Rpb25zIiwiZmlsdGVyZWREYXRhIiwiY3JlYXRlT2ZmZXIiLCJzb2NrZXQiLCJicm9hZGNhc3RlciIsInBjX2NvbmZpZyIsImljZVNlcnZlcnMiLCJ1cmxzIiwiY3JlZGVudGlhbCIsInBlZXJDb25uZWN0aW9uIiwiUlRDUGVlckNvbm5lY3Rpb24iLCJvZmZlclRvUmVjZWl2ZVZpZGVvIiwib2ZmZXJUb1JlY2VpdmVBdWRpbyIsInRoZW4iLCJzZHAiLCJzZXRMb2NhbERlc2NyaXB0aW9uIiwic2VuZFRvUGVlciIsImRlYWxlclNvY2tldElkIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZVR5cGUiLCJwYXlsb2FkIiwiZW1pdCIsInNlbmRlcklkIiwiY2xvc2VUaGVQZWVyQ29ubmVjdGlvbiIsInByZXZpb3VzRGVhbGVyU29ja2V0SWQiLCJjbG9zZSIsInN5bmNSZWFjdGlvblN1bW1hcnkiLCJyZWFjdGlvbkxvZ3MiLCJyZWFjdGlvblN1bW1hcnkiLCJzdW1tYXJ5IiwibG9ncyIsImZlYXRoZXJzIiwiY29uZmlndXJlIiwic29ja2V0aW8iLCJwaW5nVGltZU91dCIsImF1dGhlbnRpY2F0aW9uIiwiZm9ybWF0TW9uZXkiLCJhbW91bnQiLCJkZWNpbWFsQ291bnQiLCJ0aG91c2FuZHMiLCJuZWdhdGl2ZVNpZ24iLCJpIiwiaiIsImUiLCJjYWxNb250aCIsInYiLCJMb2FuQW1vdW50IiwiTG9hblBlcmlvZCIsIkludGVyZXN0IiwidG90YWxJbnRlcmVzdCIsIm1vbnRobHlJbnRlcmVzdCIsIm1vbnRobHlJbnN0YWxtZW50Iiwic2lnbiIsImdldEZhY2VCb29rSWQiLCJhcHBJZCIsImdldEdvb2dsZUlkIiwiY2xpZW50SWQiLCJyZW5kZXJNaWxlYWdlUmFuZ2UiLCJtaWxlYWdlIiwibWlsZWFnZTIiLCJ1c2VNaWxlYWdlIiwidXNlTWlsZWFnZTIiLCJlcnIiLCJtaWxlYWdlRnJvbSIsIm1pbGVhZ2VUbyIsImNoZWNrRW52IiwiZW52IiwiY2hlY2tFbnZSZXR1cm5XZWJBZG1pbiIsImZyb250RW5kVXJsIiwiQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIlByb3ZpZGVyIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHRQcm92aWRlciIsIndpdGhSb3V0ZXIiLCJ3cml0ZVBvc3RJY29uIiwiaW1hZ2VOb3RGb3VuZEljb24iLCJyYWNlRmxhZ0ljb24iLCJhbGxJY29uIiwiY2FyRnJlYWtMaWtlSWNvbiIsImNhckZyZWFrTGlrZUdyZXlJY29uIiwiY2FyRnJlYWtDb21tZW50SWNvbiIsImZvbGxvd2luZ0dyZXlJY29uIiwiZm9sbG93aW5nWWVsbG93SWNvbiIsImVhcnRoR3JleUljb24iLCJlYXJ0aFllbGxvd0ljb24iLCJjbHViTm9uTWVtYmVyIiwidXBsb2FkUGhvdG8iLCJjYWxlbmRhckljb24iLCJwaW5JY29uIiwiY3JlYXRlQ2FyRnJlYWtJY29uIiwiY3JlYXRlU29jaWFsQm9hcmRJY29uIiwiY2FyRnJlYWtSZXBseUljb24iLCJjYXJzcGVjTm90Rm91bmRJbWFnZSIsImZsYW1lUmVkIiwiZmxhbWVSZWRTaGFkb3ciLCJmbGFtZSIsInNvbGRPdXRJY29uIiwicmF5YUZsYW1lIiwicmF5YUZvb2QiLCJyYXlhTGFtcCIsInJheWFNb3NxdWUiLCJyYXlhUGVvcGxlIiwiY2NhcldlYkxvZ280MDBYMTUwIiwiY2NhckxvZ28iLCJjY2FyTG9nbzIiLCJjY2FyV2ViTG9nbzIiLCJsb2dpbkJhY2tncm91bmQiLCJ0YmhDbnkiLCJ0YmgxQ255IiwidGJoMkNueSIsImNueUxpb25IZWFkIiwiY255TG9nbyIsImdvb2dsZUxvZ28iLCJjbnlMb2dvMiIsInRiaCIsImRlZmF1bHRQcm9maWxlQmFja2dyb3VuZCIsInBob25lIiwiZW1haWwiLCJoZWxwIiwiYWRkcmVzcyIsIndpc2hMaXN0Iiwid2lzaGxpc3RJY29uQWN0aXZlZCIsImZhcURpY2VCYW5uZXIiLCJmYXFCYW5uZXIiLCJmYXFCdXlDYXJJY29uIiwiZmFxQ2FyRnJlYWtJY29uIiwiZmFxQ3N0YXJJY29uIiwiZmFxTXlBY2NvdW50SWNvbiIsImZhcU91ckZlYXR1cmVzSWNvbiIsImZhcVNlbGxDYXJJY29uIiwic2VhcmNoQm94SW1nIiwic29ydGluZ0ltZyIsImZpbHRlckZvcm1JbWciLCJhbGxOZXdDYXJJbWciLCJjYXJCcmFuZEltZyIsIm5ld0NhckZpbHRlckZvcm1JbWciLCJjYXJNb3JlSW5mb0ltZyIsImNzdGFyTGlzdEltZyIsImNzdGFyQW5pbWF0aW9uSW1nIiwiYmVsbEluYWN0aXZlIiwicmF0aW5nQmFubmVyIiwidGhyZWVkb3RzIiwibWVudUxvZ2luIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiQ29udGFpbmVyIiwiY3JlYXRlVXJsIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl91dGlscyIsIkFwcEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsIl9yZWYiLCJDb21wb25lbnQiLCJjdHgiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiQXBwIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJfZXJyb3JJbmZvIiwicmVuZGVyIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJjcmVhdGVFbGVtZW50IiwiYXNzaWduIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJ3YXJuVXJsIiwiZXhlY09uY2UiLCJ3YXJuIiwicCIsImFzUGF0aCIsImJhY2siLCJhcyIsInB1c2hUbyIsImhyZWYiLCJwdXNoUm91dGUiLCJwdXNoVXJsIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsIldyYXBwZWRBcHAiLCJzZW9EYXRhIiwiaXNTdHJpbmciLCJvcGVuR3JhcGgiLCJzaXRlX25hbWUiLCJoYW5kbGUiLCJzaXRlIiwiY2FyZFR5cGUiLCJmYWNlYm9va0FwcElkIiwicm91dGUiLCJ3cmFwcGVyIiwid2l0aFJlZHV4IiwiYm9keVR5cGVMaXN0IiwiZ2V0Qm9keVR5cGVJY29uIiwic2VsZWN0ZWRCb2R5VHlwZSIsInRvTG93ZXJDYXNlIiwiYWxmYVJvbWVvSW1nIiwiYXNpYUltZyIsImFzdG9uTWFydGluSW1nIiwiYXVkaUltZyIsImF1c3RpbkltZyIsImJhY0ltZyIsImJlbnRsZXlJbWciLCJibXdBbHBpbmFJbWciLCJibXdJbWciLCJidWZvcmlJbWciLCJjYWRpbGxhY0ltZyIsImNhbUltZyIsImNoYW5hSW1nIiwiY2hhbmdhbkltZyIsImNoZXJ5SW1nIiwiY2hldnJvbGV0SW1nIiwiY2hyeXNsZXJJbWciLCJjaXRyb2VuSW1nIiwiZGFpaGF0c3VJbWciLCJkYXRzdW5JbWciLCJkb2RnZUltZyIsImRvbmdmZW5nSW1nIiwiZmVycmFyaUltZyIsImZpYXRJbWciLCJmb2RheUltZyIsImZvcmRJbWciLCJmb3RvbkltZyIsImdvbGRlbkRyYWdvbkltZyIsImdyZWF0V2FsbEltZyIsImhhdmFsSW1nIiwiaGljb21JbWciLCJoaW5vSW1nIiwiaG9uZGFJbWciLCJodW1tZXJJbWciLCJoeXVuZGFpSW1nIiwiaW1wdWxJbWciLCJpbmZpbml0aUltZyIsImlub2tvbUltZyIsImlzdXp1SW1nIiwiamFndWFySW1nIiwiamJjSW1nIiwiamVlcEltZyIsImptY0ltZyIsImpveWxvbmdJbWciLCJrYXdhc2FraUltZyIsImtpYUltZyIsImtpbmdMb25nSW1nIiwibGFtYm9yZ2hpbmlJbWciLCJsYW5kUm92ZXJJbWciLCJsZXh1c0ltZyIsImxtZ0ltZyIsImxvdHVzSW1nIiwibWFoaW5kcmFJbWciLCJtYXNlcmF0aUltZyIsIm1heHVzSW1nIiwibWF6ZGFJbWciLCJtY2xhcmVuSW1nIiwibWVyY2VkZXNCZW56SW1nIiwibWVyY2VkZXNNYXliYWNoSW1nIiwibWdJbWciLCJtaW5pSW1nIiwibWl0c3ViaXNoaUltZyIsIm1pdHN1b2thSW1nIiwibmF6YUltZyIsIm5pc3NhbkltZyIsIm9wZWxJbWciLCJwZXJvZHVhSW1nIiwicGV1Z2VvdEltZyIsInBvcnNjaGVJbWciLCJwcm90b25JbWciLCJyYW1JbWciLCJyZW5hdWx0SW1nIiwicm9sbHNSb3ljZUltZyIsInJvdmVySW1nIiwic2FhYkltZyIsInNtYXJ0SW1nIiwic3NhbmdZb25nSW1nIiwic3ViYXJ1SW1nIiwic3V6dWtpSW1nIiwidGF0YUltZyIsInRveW90YUltZyIsInR2ckltZyIsInZvbGtzd2FnZW5JbWciLCJ2b2x2b0ltZyIsIndhbGRJbWciLCJ5YW1haGFJbWciLCJ6bmFJbWciLCJjYXJCcmFuZHNMaXN0IiwiZ2V0Q2FyQnJhbmRzSWNvbiIsInNlbGVjdGVkQnJhbmQiLCJjb2xvckxpc3QiLCJnZXRDb2xvckljb24iLCJzZWxlY3RlZENvbG9yIiwiZGllc2VsSWNvbiIsImVsZWN0cmljSWNvbiIsImh5YnJpZEljb24iLCJwZXRyb2xMZWFkZWRJY29uIiwicGV0cm9sVW5sZWFkZWRJY29uIiwiZnVlbFR5cGVMaXN0IiwiZ2V0RnVlbFR5cGVJY29uIiwic2VsZWN0ZWRGdWVsVHlwZSIsImZlZGVyYWxUZXJyaXRvcnlJY29uIiwiam9ob3JJY29uIiwia2VkYWhJY29uIiwia3VhbGFMdW1wdXJJY29uIiwibGFidWFuRmVkZXJhbEljb24iLCJsYWJ1YW5JY29uIiwibWVsYWthSWNvbiIsIm5lZ2VyaVNlbWJpbGFuSWNvbiIsInBhaGFuZ0ljb24iLCJwZW5hbmdJY29uIiwicGVyYWtJY29uIiwicGVybGlzSWNvbiIsInB1dHJhamF5RmVkZXJhbEljb24iLCJzYWJhaEljb24iLCJzYXJhd2FrSWNvbiIsInNlbGFuZ29ySWNvbiIsInRlcmVuZ2dhbnVJY29uIiwia2VsYW50YW5JY29uIiwiU3RhdGVMaXN0IiwiZ2V0U3RhdGVJY29uIiwic2VsZWN0ZWRTdGF0ZSIsIkxPQURJTkciLCJTRVRfSU5JVEVEX1JFRFVYIiwiU0VUX0RJU0FCTEVfV0lORE9XX1NDUk9MTCIsIkFEVkFOQ0VfTU9ERSIsIkxPR0lOX01PREUiLCJSRUdJU1RFUl9NT0RFIiwiVVBEQVRFX0FDVElWRV9NRU5VIiwiRklMVEVSX0NBUl9CUkFORF9NT0RFIiwiRklMVEVSX0NBUl9TRUxFQ1RFRF9DQVJfQlJBTkRfUk9XIiwiRklMVEVSX0NBUl9TRUFSQ0hfS0VZV09SRFMiLCJGSUxURVJfQ0FSX01PREVMX01PREUiLCJGSUxURVJfQ0FSX1NFTEVDVEVEX0NBUl9NT0RFTF9ST1ciLCJGSUxURVJfQ0FSX01PREVMX1NFQVJDSF9LRVlXT1JEUyIsIkZJTFRFUl9DT0xPUl9NT0RFIiwiRklMVEVSX0NBUl9TRUxFQ1RFRF9DT0xPUl9NT0RFTF9ST1ciLCJGSUxURVJfQ09MT1JfTU9ERUxfU0VBUkNIX0tFWVdPUkRTIiwiRklMVEVSX0JPRFlfVFlQRV9NT0RFIiwiRklMVEVSX0NBUl9TRUxFQ1RFRF9CT0RZX1RZUEVfTU9ERUxfUk9XIiwiRklMVEVSX0JPRFlfVFlQRV9NT0RFTF9TRUFSQ0hfS0VZV09SRFMiLCJGSUxURVJfRFJJVkVOX1dIRUVMU19NT0RFIiwiRklMVEVSX0NBUl9TRUxFQ1RFRF9EUklWRU5fV0hFRUxTX01PREVMX1JPVyIsIkZJTFRFUl9EUklWRU5fV0hFRUxTX01PREVMX1NFQVJDSF9LRVlXT1JEUyIsIkZJTFRFUl9GVUVMX1RZUEVfTU9ERSIsIkZJTFRFUl9DQVJfU0VMRUNURURfRlVFTF9UWVBFX01PREVMX1JPVyIsIkZJTFRFUl9GVUVMX1RZUEVfTU9ERUxfU0VBUkNIX0tFWVdPUkRTIiwiRklMVEVSX1NUQVRFX01PREUiLCJGSUxURVJfQ0FSX1NFTEVDVEVEX1NUQVRFX01PREVMX1JPVyIsIkZJTFRFUl9TVEFURV9NT0RFTF9TRUFSQ0hfS0VZV09SRFMiLCJRVUlDS19TRUFSQ0hfUFJPRFVDVFNfTElTVCIsIlNIT1dfQ09OVEFDVF9MSVNUIiwiU0VUX0FQUExZX1lFQVIiLCJTRVRfQVBQTFlfUFJJQ0UiLCJTRVRfQVBQTFlfTUlMRUFHRSIsIkZJTFRFUl9DQVJfQlJBTkRTIiwiRklMVEVSX0NBUl9NT0RFTFMiLCJGSUxURVJfQ09MT1JTIiwiRklMVEVSX0JPRFlfVFlQRVMiLCJGSUxURVJfRFJJVkVOX1dIRUVMUyIsIkZJTFRFUl9GVUVMX1RZUEVTIiwiRklMVEVSX1NUQVRFUyIsIlNFVF9NRU5VX0hFSUdIVCIsIlNFVF9OT1RJRklDQVRJT05fVE9LRU4iLCJTRVRfTk9USUZJQ0FUSU9OX1RPS0VOX1RJTUVfT1VUX0RBVEUiLCJmaWx0ZXJDYXJCcmFuZHMiLCJkaXNwYXRjaCIsImZpbHRlckNhck1vZGVscyIsImZpbHRlckNvbG9ycyIsImZpbHRlckJvZHlUeXBlcyIsImZpbHRlckRyaXZlbldoZWVscyIsImZpbHRlckZ1ZWxUeXBlcyIsImZpbHRlclN0YXRlcyIsImxvYWRpbmciLCJhZHZhbmNlTW9kZSIsImxvZ2luTW9kZSIsInJlZ2lzdGVyTW9kZSIsInVwZGF0ZUFjdGl2ZU1lbnUiLCJmaWx0ZXJDYXJCcmFuZE1vZGUiLCJmaWx0ZXJDYXJTZWxlY3RlZENhckJyYW5kc1JvdyIsImZpbHRlckNhclNlYXJjaEtleXdvcmRzIiwiZmlsdGVyQ2FyTW9kZWxNb2RlIiwiZmlsdGVyQ2FyU2VsZWN0ZWRDYXJNb2RlbHNSb3ciLCJmaWx0ZXJDYXJNb2RlbFNlYXJjaEtleXdvcmRzIiwiZmlsdGVyQ29sb3JNb2RlIiwiZmlsdGVyQ2FyU2VsZWN0ZWRDb2xvclJvdyIsImZpbHRlckNvbG9yU2VhcmNoS2V5d29yZHMiLCJmaWx0ZXJCb2R5VHlwZU1vZGUiLCJmaWx0ZXJDYXJTZWxlY3RlZEJvZHlUeXBlUm93IiwiZmlsdGVyQm9keVR5cGVTZWFyY2hLZXl3b3JkcyIsImZpbHRlckRyaXZlbldoZWVsTW9kZSIsImZpbHRlckNhclNlbGVjdGVkRHJpdmVuV2hlZWxSb3ciLCJmaWx0ZXJEcml2ZW5XaGVlbFNlYXJjaEtleXdvcmRzIiwiZmlsdGVyRnVlbFR5cGVNb2RlIiwiZmlsdGVyQ2FyU2VsZWN0ZWRGdWVsVHlwZVJvdyIsImZpbHRlckZ1ZWxUeXBlU2VhcmNoS2V5d29yZHMiLCJmaWx0ZXJTdGF0ZU1vZGUiLCJmaWx0ZXJDYXJTZWxlY3RlZFN0YXRlUm93IiwiZmlsdGVyU3RhdGVTZWFyY2hLZXl3b3JkcyIsInF1aWNrU2VhcmNoUHJvZHVjdHNMaXN0IiwibW9kZSIsInF1aWNrU2VhcmNoQ2FyU3BlY3NEYXRhIiwicXVpY2tTZWFyY2hQcm9kdWN0YWRzRGF0YSIsInZhbHVlcyIsInNob3dDb250YWN0TGlzdCIsImJvb2xlYW4iLCJzZXRBcHBseVllYXIiLCJzZXRBcHBseVByaWNlIiwic2V0QXBwbHlNaWxlYWdlIiwic2V0TWVudUhlaWdodCIsInNldE5vdGlmaWNhdGlvblRva2VuIiwic2V0Tm90aWZpY2F0aW9uVG9rZW5UaW1lT3V0RGF0ZSIsInNldEluaXRlZFJlZHV4Iiwic2V0RGlzYWJsZVdpbmRvd1Njcm9sbCIsIkZFVENIX0NBUlBMQVRFU0xJU1QiLCJmZXRjaENhclBsYXRlc0xpc3QiLCJTRVRfUE9TVF9NT0RBTF9MSUtFX1JFRlJFU0hfSUQiLCJGRVRDSF9DQVJfRlJFQUtfUE9TVFMiLCJGRVRDSF9FRElURURfUE9TVCIsInNldFBvc3RNb2RhbExpa2VSZWZyZXNoSWQiLCJmZXRjaENhckZyZWFrUG9zdHMiLCJmZXRjaEVkaXRlZFBvc3QiLCJGRVRDSF9SRVZJU0lPTl9BTlNXRVJFRF9RVUVTVElPTlMiLCJmZXRjaFJldmlzaW9uQW5zd2VyZWRRdWVzdGlvbnMiLCJGRVRDSF9DTElFTlRfU09DS0VUX0lPIiwiQ0xFQVJfQ0xJRU5UX1NPQ0tFVF9JTyIsImZldGNoQ2xpZW50U29ja2V0SW8iLCJjbGVhckNsaWVudFNvY2tldElvIiwiRkVUQ0hfTkVXUyIsIkZFVENIX0NMVUIiLCJGRVRDSF9QUklDRSIsIkZFVENIX1BPUFVMQVIiLCJGRVRDSF9QT1BVTEFSQ0FSUyIsIkZFVENIX0NBUk5BTUUiLCJGRVRDSF9DQVJERVRBSUxTIiwiRkVUQ0hfQlJBTkRTIiwiRkVUQ0hfQlJBTkRERVRBSUwiLCJGRVRDSF9CUkFORENBUlMiLCJGRVRDSF9ERVRBSUxTIiwiRkVUQ0hfRlVFTCIsIkZFVENIX0ZJTFRFUkVEX0NPTVBBUkVfREFUQSIsIkZFVENIX1BFRVJfQ09NUEFSRV9DQVJTIiwiRkVUQ0hfQ09NUEFSRV9ORVdDQVJfSURTIiwiQUREX0NPTVBBUkVfTkVXQ0FSX0lEIiwiUkVNT1ZFX0NPTVBBUkVfTkVXQ0FSX0lEIiwiRkVUQ0hfQ09NUEFSRV9fTkVXQ0FSX0xJTUlUIiwiRkVUQ0hfTkVXX0NBUl9GSUxURVJfR1JPVVAiLCJSRVNFVF9ORVdfQ0FSX0ZJTFRFUl9HUk9VUCIsImZldGNoTmV3cyIsImZldGNoQ2x1YiIsImZldGNoUHJpY2UiLCJmZXRjaFBvcHVsYXIiLCJmZXRjaFBvcHVsYXJDYXJzIiwiZmV0Y2hDYXJOYW1lIiwiZmV0Y2hDYXJEZXRhaWxzIiwiZmV0Y2hCcmFuZHMiLCJmZXRjaEJyYW5kRGV0YWlsIiwiZmV0Y2hCcmFuZENhcnMiLCJmZXRjaERldGFpbHMiLCJmZXRjaEZ1ZWwiLCJmaWx0ZXJlZENvbXBhcmVEYXRhIiwiZmV0Y2hDb21wYXJlTmV3Q2FySWRzIiwiYWRkQ29tcGFyZU5ld0NhcklkIiwicmVtb3ZlQ29tcGFyZU5ld0NhcklkIiwiZmV0Y2hDb21wYXJlTmV3Q2FyTGltaXQiLCJmZXRjaFBlZXJDb21wYXJlQ2FycyIsImZldGNoTmV3Q2FyRmlsdGVyR3JvdXAiLCJyZXNldE5ld0NhckZpbHRlckdyb3VwIiwiRkVUQ0hfUFJPRFVDVFNMSVNUIiwiRkVUQ0hfUFJPRFVDVFNMSVNUX0hPTUUiLCJQVVNIX1BST0RVQ1RTTElTVCIsIlJFTU9WRV9QUk9EVUNUU0xJU1QiLCJVUERBVEVfUFJPRFVDVFNMSVNUIiwiVVBEQVRFX0FDVElWRV9JRF9QUk9EVUNUU19MSVNUIiwiQUREX0NPTVBBUkVfX1BST0RVQ1RfSUQiLCJSRU1PVkVfQ09NUEFSRV9QUk9EVUNUX0lEIiwiQ0xFQVJfQ09NUEFSRV9QUk9EVUNUX0lEUyIsIlBBVENIX0NPTVBBUkVfUFJPRFVDVF9JRFMiLCJGRVRDSF9GRUFUVVJFU19MSVNUIiwiVVBEQVRFX0NIRUNLRURfRkVBVFVSRVNfREFURSIsIkZFVENIX0NPTVBBUkVfTElNSVQiLCJGRVRDSF9QUk9EVUNUX0ZJTFRFUl9PUFRJT05TIiwiQ0xFQVJfUFJPRFVDVF9GSUxURVJfT1BUSU9OUyIsIkZFVENIX1BST0RVQ1RfRklMVEVSX0dST1VQIiwiQ0xFQVJfUFJPRFVDVF9GSUxURVJfR1JPVVAiLCJGRVRDSF9QUk9EVUNUX0ZJTFRFUl9DT05GSUciLCJDTEVBUl9QUk9EVUNUX0ZJTFRFUl9DT05GSUciLCJGRVRDSF9GSUxURVJfTU9EQUxfU1RBVEUiLCJTRVRfUFJPRFVDVF9MSVNUX0xPQURJTkciLCJmZXRjaFByb2R1Y3RzTGlzdCIsImZldGNoUHJvZHVjdHNMaXN0SG9tZSIsInB1c2hQcm9kdWN0c0xpc3QiLCJyZW1vdmVQcm9kdWN0c0xpc3QiLCJ1cGRhdGVQcm9kdWN0TGlzdCIsInVwZGF0ZUFjdGl2ZUlkUHJvZHVjdExpc3QiLCJjbGVhckNvbXBhcmVQcm9kdWN0SWRzIiwiZmV0Y2hGZWF0dXJlc0xpc3QiLCJ1cGRhdGVDaGVja2VkRmVhdHVyZXNEYXRlIiwiZmV0Y2hDb21wYXJlQ2FyTGltaXQiLCJhZGRDb21wYXJlUHJvZHVjdElkIiwicmVtb3ZlQ29tcGFyZVByb2R1Y3RJZCIsInBhdGNoQ29tcGFyZVByb2R1Y3RJZHMiLCJmZXRjaFByb2R1Y3RGaWx0ZXJPcHRpb25zIiwiY2xlYXJQcm9kdWN0RmlsdGVyT3B0aW9ucyIsImZldGNoUHJvZHVjdEZpbHRlckdyb3VwIiwiY2xlYXJQcm9kdWN0RmlsdGVyR3JvdXAiLCJmZXRjaFByb2R1Y3RGaWx0ZXJDb25maWciLCJjbGVhclByb2R1Y3RGaWx0ZXJDb25maWciLCJmZXRjaEZpbHRlck1vZGFsU3RhdGUiLCJzZXRQcm9kdWN0TGlzdExvYWRpbmciLCJTVEVQU19QUk9QU19DVVJSRU5UIiwiRk9STV9PTkUiLCJzdGVwc1Byb3BzQ3VycmVudCIsImZvcm1PbmUiLCJVUERBVEVfU0VMTEVSX1BST0ZJTEUiLCJ1cGRhdGVTZWxsZXJQcm9maWxlIiwiVVBEQVRFX1NPQ0tFVF9JTkZPIiwiREVMRVRFX1NPQ0tFVF9JTkZPIiwidXBkYXRlU29ja2V0SW5mbyIsInNvY2tldEluZm8iLCJkZWxldGVTb2NrZXRJbmZvIiwiTE9HSU5fU1VDQ0VTU0ZVTCIsIkxPR09VVF9TVUNDRVNTRlVMIiwiQUREUkVTU19CT09LX0ZPUk0iLCJCQU5LX0ZPUk0iLCJDQVJEX0ZPUk0iLCJTRVRfVVNFUiIsImxvZ2luU3VjY2Vzc2Z1bCIsInVzZXJJbmZvIiwibG9nb3V0U3VjY2Vzc2Z1bCIsInNldFVzZXIiLCJhZGRyZXNzQm9va0Zvcm0iLCJmb3JtIiwiY2FyZEZvcm0iLCJiYW5rRm9ybSIsIkFERF9MSUtFIiwiUkVNT1ZFX0xJS0UiLCJBRERfQk9PS01BUksiLCJSRU1PVkVfQk9PS01BUksiLCJBRERfTElLRV9NU0ciLCJSRU1PVkVfTElLRV9NU0ciLCJhZGRMaWtlIiwicmVtb3ZlTGlrZSIsImFkZEJvb2ttYXJrIiwicmVtb3ZlQm9va21hcmsiLCJhZGRMaWtlTXNnIiwicmVtb3ZlTGlrZU1zZyIsIkZFVENIX1ZBUklBTlQiLCJDTEVBUl9WQVJJQU5UIiwiZmV0Y2hWYXJpYW50IiwiY2xlYXJWYXJpYW50Iiwic3RhdGVQZXJzaXN0QWN0aW9ucyIsImFjdGlvbiIsInJlZHVjZXIiLCJwZXJzaXN0UmVkdXgiLCJyZWR1eFN0YXRlcyIsImxvY2FsU3RvcmFnZSIsInNldCIsImNoZWNrSXNOZWVkUGVyc2lzdCIsImNoZWNrTmVlZFBlcnNpc3QiLCJpc1Jlc3RvcmVEYXRhIiwibmVlZFBlcnNpc3QiLCJwZXJzaXN0T2JqIiwiZ2V0UGVyc2lzdE9iaiIsInBlcnNpc3RlZFN0YXRlcyIsImdldExvY2FsU3RvcmFnZVBlcnNpc3RTdGF0ZXMiLCJzZWxlY3RlZFBlcnNpc3RlZFN0YXRlIiwic2VxdWVuY2UiLCJtYXhCeSIsInBlcnNpc3REYXRhIiwiY29va2llUGVyc2lzdFN0YXRlcyIsInN0YXRlUGVyc2lzdEFjdGlvbiIsImR5bmFtaWNEaXNwYXRjaCIsIlJFU1RPUkVfUkVEVVgiLCJyZXN0b3JlUmVkdXgiLCJJTklUSUFMX1NUQVRFIiwibm90aWZpY2F0aW9uVG9rZW4iLCJub3RpZmljYXRpb25Ub2tlblRpbWVPdXREYXRlIiwiZGlzYWJsZVdpbmRvd1Njcm9sbCIsImluaXRlZFJlZHV4IiwiZmlsdGVyQ2FyU2VsZWN0ZWRDYXJCcmFuZERhdGEiLCJmaWx0ZXJDYXJTZWxlY3RlZENhckJyYW5kSW5kZXgiLCJmaWx0ZXJDYXJTZWxlY3RlZENhck1vZGVsRGF0YSIsImZpbHRlckNhclNlbGVjdGVkQ2FyTW9kZWxJbmRleCIsImZpbHRlckNhclNlbGVjdGVkQ29sb3JEYXRhIiwiZmlsdGVyQ2FyU2VsZWN0ZWRDb2xvckluZGV4IiwiZmlsdGVyQ2FyU2VsZWN0ZWRCb2R5VHlwZURhdGEiLCJmaWx0ZXJDYXJTZWxlY3RlZEJvZHlUeXBlSW5kZXgiLCJmaWx0ZXJDYXJTZWxlY3RlZEZ1ZWxUeXBlRGF0YSIsImZpbHRlckNhclNlbGVjdGVkRnVlbFR5cGVJbmRleCIsImZpbHRlckNhclNlbGVjdGVkU3RhdGVEYXRhIiwiZmlsdGVyQ2FyU2VsZWN0ZWRTdGF0ZUluZGV4IiwiY2FyQnJhbmRzIiwiY2FyTW9kZWxzIiwiY29sb3JzIiwiYm9keVR5cGVzIiwiZHJpdmVuV2hlZWxzIiwiZnVlbFR5cGVzIiwic3RhdGVzIiwicXVpY2tTZWFyY2hNb2RlIiwiYWN0aXZlTWVudSIsInNob3dDb250YWN0IiwiYXBwbHlZZWFyIiwiYXBwbHlQcmljZSIsImFwcGx5TWlsZWFnZSIsIm1lbnVIZWlnaHQiLCJwZXJzaXN0U3RhdGVzIiwibmV3U3RhdGUiLCJpc0VxdWFsIiwiZmlsdGVyQ2FyU2VsZWN0ZWREcml2ZW5XaGVlbERhdGEiLCJmaWx0ZXJDYXJTZWxlY3RlZERyaXZlbldoZWVsSW5kZXgiLCJjYXJQbGF0ZXNMaXN0IiwicG9zdE1vZGFsTGlrZVJlZnJlc2hJZCIsImNhckZyZWFrUG9zdHMiLCJlZGl0ZWRQb3N0IiwiYW5zd2VyZWRFblJldmlzaW9uU2VjdGlvbkFQYXBlciIsImFuc3dlcmVkRW5SZXZpc2lvblNlY3Rpb25CUGFwZXIiLCJhbnN3ZXJlZEVuUmV2aXNpb25TZWN0aW9uQ1BhcGVyIiwiYW5zd2VyZWRCbVJldmlzaW9uU2VjdGlvbkFQYXBlciIsImFuc3dlcmVkQm1SZXZpc2lvblNlY3Rpb25CUGFwZXIiLCJhbnN3ZXJlZEJtUmV2aXNpb25TZWN0aW9uQ1BhcGVyIiwibGFuZ3VhZ2UiLCJ1cHBlckZpcnN0IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwibmV3cyIsImNsdWIiLCJwb3B1bGFyIiwicG9wdWxhckNhcnMiLCJDYXJOYW1lIiwiYnJhbmRzIiwiYnJhbmREZXRhaWwiLCJicmFuZENhcnMiLCJkZXRhaWxzIiwiZnVlbCIsIm5ld0NhckZpbHRlckdyb3VwIiwiZHJpdmVud2hlZWwiLCJzZWF0Q2FwYWNpdHkiLCJleHRlcmlvciIsImludGVyaW9yIiwic2FmZXR5IiwibW9udGhseVBheW1lbnRSYW5nZSIsInBlZXJDb21wIiwiY29tcGFyZUlkcyIsImNvbXBhcmVMaW1pdCIsImNoZWNrSWZFeGlzdCIsImZpbmRJbmRleCIsInByb2R1Y3RMaXN0TG9hZGluZyIsInByb2R1Y3RzTGlzdCIsInByb2R1Y3RzTGlzdEhvbWUiLCJhY3RpdmVJZCIsImFjdGl2ZXByb2R1Y3RMaXN0IiwiY29tcGFyZURhdGEiLCJmZWF0dXJlc0xpc3QiLCJjaGVja2VkRmVhdHVyZXNEYXRlIiwiZmlsdGVyT3B0aW9ucyIsImlzRmlsdGVyTW9kYWxPcGVuIiwiY3VycmVudCIsImFwcFJlZHVjZXIiLCJzZWxsZXIiLCJjYXJPblNhbGVzIiwiaW5mbyIsImF1dGhlbnRpY2F0ZWQiLCJlcnJvcnMiLCJhZGRyZXNzRm9ybSIsImFsbExpa2UiLCJhbGxCb29rbWFyayIsImFsbExpa2VNc2ciLCJyZW1vdmUiLCJjaGF0SWQiLCJtZXNzYWdlSWQiLCJ2YXJpYW50IiwiYmluZE1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsImNvbWJpbmVkUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImFwcCIsImNhcmZyZWFrIiwia3BwIiwibGl2ZSIsIm5ld2NhcnMiLCJyZWdpc3RlciIsInNlbGxlclByb2ZpbGUiLCJzb2NrZXRSZWZyZXNoIiwidXNlcmxpa2VzIiwiSFlEUkFURSIsIm5leHRTdGF0ZSIsImluaXRTdG9yZSIsImNyZWF0ZVN0b3JlIiwidGh1bmtNaWRkbGV3YXJlIiwiY3JlYXRlV3JhcHBlciIsInN0b3JlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlBLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxzQkFBRCxDQUFwQjs7QUFFQSxNQUFNQyxtQkFBbUIsR0FBRyxJQUE1QjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLElBQTNCO0FBQ0EsTUFB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QUNFLFVBQVFDLFNBRFY7QUFFRSxXQUFTO0FBRlgsQ0E3RTJCLEVBaUYzQjtBQUNFLFVBQVFDLFFBRFY7QUFFRSxXQUFTO0FBRlgsQ0FqRjJCLEVBcUYzQjtBQUNFLFVBQVFDLFdBRFY7QUFFRSxXQUFTO0FBRlgsQ0FyRjJCLEVBeUYzQjtBQUNFLFVBQVFDLFVBRFY7QUFFRSxXQUFTO0FBRlgsQ0F6RjJCLEVBNkYzQjtBQUNFLFVBQVFDLE9BRFY7QUFFRSxXQUFTO0FBRlgsQ0E3RjJCLEVBaUczQjtBQUNFLFVBQVFDLFFBRFY7QUFFRSxXQUFTO0FBRlgsQ0FqRzJCLEVBcUczQjtBQUNFLFVBQVFDLE9BRFY7QUFFRSxXQUFTO0FBRlgsQ0FyRzJCLEVBeUczQjtBQUNFLFVBQVFDLFFBRFY7QUFFRSxXQUFTO0FBRlgsQ0F6RzJCLEVBNkczQjtBQUNFLFVBQVFDLGVBRFY7QUFFRSxXQUFTO0FBRlgsQ0E3RzJCLEVBaUgzQjtBQUNFLFVBQVFDLFlBRFY7QUFFRSxXQUFTO0FBRlgsQ0FqSDJCLEVBcUgzQjtBQUNFLFVBQVFDLFFBRFY7QUFFRSxXQUFTO0FBRlgsQ0FySDJCLEVBeUgzQjtBQUNFLFVBQVFDLFFBRFY7QUFFRSxXQUFTO0FBRlgsQ0F6SDJCLEVBNkgzQjtBQUNFLFVBQVFDLE9BRFY7QUFFRSxXQUFTO0FBRlgsQ0E3SDJCLEVBaUkzQjtBQUNFLFVBQVFDLFFBRFY7QUFFRSxXQUFTO0FBRlgsQ0FqSTJCLEVBcUkzQjtBQUNFLFVBQVFDLFNBRFY7QUFFRSxXQUFTO0FBRlgsQ0FySTJCLEVBeUkzQjtBQUNFLFVBQVFDLFVBRFY7QUFFRSxXQUFTO0FBRlgsQ0F6STJCLEVBNkkzQjtBQUNFLFVBQVFDLFFBRFY7QUFFRSxXQUFTO0FBRlgsQ0E3STJCLEVBaUozQjtBQUNFLFVBQVFDLFdBRFY7QUFFRSxXQUFTO0FBRlgsQ0FqSjJCLEVBcUozQjtBQUNFLFVBQVFDLFNBRFY7QUFFRSxXQUFTO0FBRlgsQ0FySjJCLEVBeUozQjtBQUNFLFVBQVFDLFFBRFY7QUFFRSxXQUFTO0FBRlgsQ0F6SjJCLEVBNkozQjtBQUNFLFVBQVFDLFNBRFY7QUFFRSxXQUFTO0FBRlgsQ0E3SjJCLEVBaUszQjtBQUNFLFVBQVFDLE1BRFY7QUFFRSxXQUFTO0FBRlgsQ0FqSzJCLEVBcUszQjtBQUNFLFVBQVFDLE9BRFY7QUFFRSxXQUFTO0FBRlgsQ0FySzJCLEVBeUszQjtBQUNFLFVBQVFDLE1BRFY7QUFFRSxXQUFTO0FBRlgsQ0F6SzJCLEVBNkszQjtBQUNFLFVBQVFDLFVBRFY7QUFFRSxXQUFTO0FBRlgsQ0E3SzJCLEVBaUwzQjtBQUNFLFVBQVFDLFdBRFY7QUFFRSxXQUFTO0FBRlgsQ0FqTDJCLEVBcUwzQjtBQUNFLFVBQVFDLE1BRFY7QUFFRSxXQUFTO0FBRlgsQ0FyTDJCLEVBeUwzQjtBQUNFLFVBQVFDLFdBRFY7QUFFRSxXQUFTO0FBRlgsQ0F6TDJCLEVBNkwzQjtBQUNFLFVBQVFDLGNBRFY7QUFFRSxXQUFTO0FBRlgsQ0E3TDJCLEVBaU0zQjtBQUNFLFVBQVFDLFlBRFY7QUFFRSxXQUFTO0FBRlgsQ0FqTTJCLEVBcU0zQjtBQUNFLFVBQVFDLFFBRFY7QUFFRSxXQUFTO0FBRlgsQ0FyTTJCLEVBeU0zQjtBQUNFLFVBQVFDLE1BRFY7QUFFRSxXQUFTO0FBRlgsQ0F6TTJCLEVBNk0zQjtBQUNFLFVBQVFDLFFBRFY7QUFFRSxXQUFTO0FBRlgsQ0E3TTJCLEVBaU4zQjtBQUNFLFVBQVFDLFdBRFY7QUFFRSxXQUFTO0FBRlgsQ0FqTjJCLEVBcU4zQjtBQUNFLFVBQVFDLFdBRFY7QUFFRSxXQUFTO0FBRlgsQ0FyTjJCLEVBeU4zQjtBQUNFLFVBQVFDLFFBRFY7QUFFRSxXQUFTO0FBRlgsQ0F6TjJCLEVBNk4zQjtBQUNFLFVBQVFDLFFBRFY7QUFFRSxXQUFTO0FBRlgsQ0E3TjJCLEVBaU8zQjtBQUNFLFVBQVFDLFVBRFY7QUFFRSxXQUFTO0FBRlgsQ0FqTzJCLEVBcU8zQjtBQUNFLFVBQVFDLGVBRFY7QUFFRSxXQUFTO0FBRlgsQ0FyTzJCLEVBeU8zQjtBQUNFLFVBQVFFLEtBRFY7QUFFRSxXQUFTO0FBRlgsQ0F6TzJCLEVBNk8zQjtBQUNFLFVBQVFELGtCQURWO0FBRUUsV0FBUztBQUZYLENBN08yQixFQWlQM0I7QUFDRSxVQUFRRSxPQURWO0FBRUUsV0FBUztBQUZYLENBalAyQixFQXFQM0I7QUFDRSxVQUFRQyxhQURWO0FBRUUsV0FBUztBQUZYLENBclAyQixFQXlQM0I7QUFDRSxVQUFRQyxXQURWO0FBRUUsV0FBUztBQUZYLENBelAyQixFQTZQM0I7QUFDRSxVQUFRQyxPQURWO0FBRUUsV0FBUztBQUZYLENBN1AyQixFQWlRM0I7QUFDRSxVQUFRQyxTQURWO0FBRUUsV0FBUztBQUZYLENBalEyQixFQXFRM0I7QUFDRSxVQUFRQyxPQURWO0FBRUUsV0FBUztBQUZYLENBclEyQixFQXlRM0I7QUFDRSxVQUFRQyxVQURWO0FBRUUsV0FBUztBQUZYLENBelEyQixFQTZRM0I7QUFDRSxVQUFRQyxVQURWO0FBRUUsV0FBUztBQUZYLENBN1EyQixFQWlSM0I7QUFDRSxVQUFRQyxVQURWO0FBRUUsV0FBUztBQUZYLENBalIyQixFQXFSM0I7QUFDRSxVQUFRQyxTQURWO0FBRUUsV0FBUztBQUZYLENBclIyQixFQXlSM0I7QUFDRSxVQUFRQyxNQURWO0FBRUUsV0FBUztBQUZYLENBelIyQixFQTZSM0I7QUFDRSxVQUFRQyxVQURWO0FBRUUsV0FBUztBQUZYLENBN1IyQixFQWlTM0I7QUFDRSxVQUFRQyxhQURWO0FBRUUsV0FBUztBQUZYLENBalMyQixFQXFTM0I7QUFDRSxVQUFRQyxRQURWO0FBRUUsV0FBUztBQUZYLENBclMyQixFQXlTM0I7QUFDRSxVQUFRQyxPQURWO0FBRUUsV0FBUztBQUZYLENBelMyQixFQTZTM0I7QUFDRSxVQUFRQyxRQURWO0FBRUUsV0FBUztBQUZYLENBN1MyQixFQWlUM0I7QUFDRSxVQUFRQyxZQURWO0FBRUUsV0FBUztBQUZYLENBalQyQixFQXFUM0I7QUFDRSxVQUFRQyxTQURWO0FBRUUsV0FBUztBQUZYLENBclQyQixFQXlUM0I7QUFDRSxVQUFRQyxTQURWO0FBRUUsV0FBUztBQUZYLENBelQyQixFQTZUM0I7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QUFlLENBQUNyMkIsS0FBRCxFQUFReXVCLE1BQVIsQ0FBdEI7QUFDRDtBQUNGLENBWEQ7O0FBYUEsTUFBTXlJLFNBQVMsR0FBRyxNQUFNO0FBQ3RCLFNBQU9DLHlEQUFXLENBQUN6SSxPQUFELEVBQVV1SCxjQUFjLENBQUMsQ0FBQ21CLGtEQUFELENBQUQsQ0FBeEIsQ0FBbEI7QUFDRCxDQUZEOztBQU1PLE1BQU1qZixPQUFPLEdBQUdrZix3RUFBYSxDQUFDSCxTQUFELENBQTdCO0FBRUEsTUFBTUksS0FBSyxHQUFHSixTQUFTLEVBQXZCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRVAsOEQ7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCB7IGlzSW50ZWdlciwgcmFuZ2UgfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHF1ZXJ5U3RyaW5nIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5pbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZSc7XG5pbXBvcnQgbG9jYWxTdG9yYWdlIGZyb20gJ2xvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0IHsgc3RhdGVQZXJzaXN0QWN0aW9ucyB9IGZyb20gXCIuL3JlZHV4L2NvbmZpZ1wiO1xuaW1wb3J0IHsgZ2V0Q2FyQnJhbmQgfSBmcm9tIFwiLi9wYXJhbXMvY2FyQnJhbmRzTGlzdFwiO1xuaW1wb3J0IHsgZ2V0U3RhdGUgfSBmcm9tIFwiLi9wYXJhbXMvc3RhdGVMaXN0XCI7XG5pbXBvcnQgeyBnZXRCb2R5VHlwZSB9IGZyb20gXCIuL3BhcmFtcy9ib2R5VHlwZUxpc3RcIjtcbmltcG9ydCB7IGdldEZ1ZWxUeXBlIH0gZnJvbSBcIi4vcGFyYW1zL2Z1ZWxUeXBlTGlzdFwiO1xuaW1wb3J0IHsgZ2V0Q29sb3IgfSBmcm9tIFwiLi9wYXJhbXMvY29sb3JMaXN0XCI7XG5pbXBvcnQgeyBjaGVja0VudlJldHVybkNtc1VybCB9IGZyb20gXCIuL2Z1bmN0aW9uQ29udGVudFwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi9mZWF0aGVyc1wiO1xuaW1wb3J0IHsgcGFyc2VUYWdTdHJpbmdUb1BsYWluU3RyaW5nIH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYXJGcmVhay9jb25maWdcIjtcbmltcG9ydCB7IGdldFN0cmVhbVVybCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbGl2ZS9jb25maWdcIjtcblxudmFyIG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xuXG5jb25zdCBkZWZhdWx0UmFuZ2VTbWFsbGVyID0gJzw9J1xuY29uc3QgZGVmYXVsdFJhbmdlQmlnZ2VyID0gJz49J1xuY29uc3QgYXZhaWxhYmxlRmlsdGVycyA9IFsnbWFrZScsICdtb2RlbCcsICd0aXRsZScsICdjb25kaXRpb24nLCAndHJhbnNtaXNzaW9uJywgJ3N0YXRlJywgJ2FyZWEnLCAncHJpY2VSYW5nZScsICd5ZWFyUmFuZ2UnLCAnbWlsZWFnZVJhbmdlJywgJ2VuZ2luZUNhcGFjaXR5UmFuZ2UnLCAnYm9keVR5cGUnLCAnY29sb3InLCAnZnVlbFR5cGUnLCAncmVnaXN0cmF0aW9uVXJsJywgJ3JlYWR5U3RvY2snLCAnY2FyMzYwVmlldycsICdidXNpbmVzc1R5cGUnXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyQW5kU3BhY2UodmFsdWUpIHtcblxuICAgIC8vdG8gYXJyYXlcbiAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcnKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdmFsdWUuZmlsdGVyKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuICFwYXJzZUludChpdGVtKSAmJiBwYXJzZUludChpdGVtKSAhPSAwICYmIGl0ZW0gIT0gJyAnO1xuICAgICAgICAgICAgfSkubGVuZ3RoID4gMFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZSh2YWx1ZSwgZm9ybWF0KSB7XG5cbiAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICBpZiAoIWlzVmFsaWREYXRlKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmIChmb3JtYXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZvcm1hdCA9IFwiREQvTU0vWVlZWVwiXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtb21lbnQodmFsdWUpLmZvcm1hdChmb3JtYXQpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXROdW1iZXIodmFsdWUsIHVuaXQsIHJvdW5kLCBmaXhlZFBvaW50LCB0cmltKSB7XG5cbiAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICAgICAgICAvL2RlZmF1bHQgd2lsbCBhdXRvIHJvdW5kIHVwIGlmIHJvdW5kIGRpZG4ndCBwYXNzZWQgaW5cbiAgICAgICAgICAgIC8vZGVmYXVsdCBmaXhlZFBvaW50IDBcbiAgICAgICAgICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJrXCI6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbnVtYmVyVG9GaXhlZCh2YWx1ZSAvIDEwMDAsIHJvdW5kLCBmaXhlZFBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm1cIjpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBudW1iZXJUb0ZpeGVkKHZhbHVlIC8gMTAwMDAwMCwgcm91bmQsIGZpeGVkUG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiYlwiOlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bWJlclRvRml4ZWQodmFsdWUgLyAxMDAwMDAwMDAwLCByb3VuZCwgZml4ZWRQb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJhdXRvXCI6XG4gICAgICAgICAgICAgICAgICAgIGxldCB1bml0cyA9IFtbJycsIDFdLCBbJ2snLCAxMDAwXSwgWydtJywgMTAwMDAwMF0sIFsnYicsIDEwMDAwMDAwMDBdXTtcbiAgICAgICAgICAgICAgICAgICAgLy9nZXQgY2xvc2VzdCB1bml0XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZm9yRWFjaChfLnJldmVyc2UodW5pdHMpLCBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgLyBpdGVtWzFdID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBudW1iZXJUb0ZpeGVkKHZhbHVlIC8gaXRlbVsxXSwgcm91bmQsIGZpeGVkUG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bml0ID0gaXRlbVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBudW1iZXJUb0ZpeGVkKHZhbHVlLCByb3VuZCwgZml4ZWRQb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZm9ybWF0ZWRWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgbGV0IHByZWZpeCA9IGluc2VydEJldHdlZW4ocGFyc2VJbnQodmFsdWUpLCAzLCAnLCcsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgbGV0IHBvc3RmaXggPSB2YWx1ZS50b1N0cmluZygpLnNwbGl0KCcuJylbMV07XG4gICAgICAgICAgICBmb3JtYXRlZFZhbHVlICs9IHByZWZpeDtcbiAgICAgICAgICAgIGlmIChwb3N0Zml4KSB7XG4gICAgICAgICAgICAgICAgZm9ybWF0ZWRWYWx1ZSArPSAnLicgKyBwb3N0Zml4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHJpbSkge1xuICAgICAgICAgICAgICAgIGZvcm1hdGVkVmFsdWUgPSB0cmltU3RyaW5nTnVtYmVyKGZvcm1hdGVkVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHVuaXQpIHtcbiAgICAgICAgICAgICAgICBmb3JtYXRlZFZhbHVlICs9IHVuaXQ7XG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0ZWRWYWx1ZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG51bWJlclRvRml4ZWQodmFsdWUsIHJvdW5kLCBmaXhlZFBvaW50LCBmcm9tRnJvbnQpIHtcblxuICAgIGlmICh2YWx1ZSAhPSBudWxsICYmICFpc05hTihwYXJzZUZsb2F0KHZhbHVlKSkpIHtcblxuICAgICAgICBpZiAoaXNOYU4ocGFyc2VJbnQoZml4ZWRQb2ludCkpKSB7XG4gICAgICAgICAgICAvL0RlZmF1bHRcbiAgICAgICAgICAgIGZpeGVkUG9pbnQgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZml4ZWRQb2ludCA9IHBhcnNlSW50KGZpeGVkUG9pbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJvdW5kID09IG51bGwpIHtcbiAgICAgICAgICAgIHJvdW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmcm9tRnJvbnQpIHtcbiAgICAgICAgICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZVswXSkge1xuICAgICAgICAgICAgICAgIC8vIGlmICh2YWx1ZVswXS5sZW5ndGggPiBmaXhlZFBvaW50KSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHZhbHVlWzBdID0gdmFsdWVbMF0uc2xpY2UodmFsdWVbMF0ubGVuZ3RoIC0gZml4ZWRQb2ludCk7XG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlWzBdLmxlbmd0aCA8IGZpeGVkUG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5mb3JFYWNoKF8ucmFuZ2UoZml4ZWRQb2ludCAtIHZhbHVlWzBdLmxlbmd0aCksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlWzBdID0gJzAnICsgdmFsdWVbMF07XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChyb3VuZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b0ZpeGVkKGZpeGVkUG9pbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlWzFdLmxlbmd0aCA+IGZpeGVkUG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlWzFdID0gdmFsdWVbMV0uc2xpY2UoMCwgZml4ZWRQb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVbMV0ubGVuZ3RoIDwgZml4ZWRQb2ludCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5mb3JFYWNoKF8ucmFuZ2UoZml4ZWRQb2ludCAtIHZhbHVlWzBdLmxlbmd0aCksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVswXSA9IHZhbHVlWzBdICsgJzAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlLmpvaW4oXCIuXCIpKS50b0ZpeGVkKGZpeGVkUG9pbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbn1cblxuLy9SZW1vdmUgcHJlZml4IDAgYW5kIHBvc3RmaXggMFxuZXhwb3J0IGZ1bmN0aW9uIHRyaW1TdHJpbmdOdW1iZXIodmFsdWUpIHtcblxuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG5cbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnNwbGl0KCcuJyk7XG4gICAgICAgIGxldCBwcmVmaXggPSB2YWx1ZVswXTtcbiAgICAgICAgbGV0IHBvc3RmaXggPSB2YWx1ZVsxXTtcblxuICAgICAgICBpZiAocHJlZml4ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChwcmVmaXgubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGxldCBwcmVmaXhBcnIgPSBwcmVmaXguc3BsaXQoXCJcIik7XG4gICAgICAgICAgICAgICAgbGV0IGRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBwcmVmaXhBcnIuc29tZShudW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobnVtID09ICcwJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jdXQgb3V0IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeCA9IHByZWZpeC5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9uZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3N0Zml4ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChwb3N0Zml4Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgcG9zdGZpeEFyciA9IHBvc3RmaXguc3BsaXQoXCJcIikucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgIGxldCBkb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcG9zdGZpeEFyci5zb21lKG51bSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChudW0gPT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2N1dCBvdXQgMFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdGZpeCA9IHBvc3RmaXguc3Vic3RyaW5nKDAsIHBvc3RmaXgubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9uZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zdGZpeCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeCArIFwiLlwiICsgcG9zdGZpeDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBwcmVmaXg7XG4gICAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldmVyc2VTdHJpbmcodmFsdWUpIHtcblxuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIHZhciBzdHJBcnJheSA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoXCJcIik7XG4gICAgICAgIHN0ckFycmF5ID0gc3RyQXJyYXkucmV2ZXJzZSgpO1xuICAgICAgICByZXR1cm4gc3RyQXJyYXkuam9pbihcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ2FyZFR5cGUobnVtYmVyKSB7XG4gICAgaWYgKG51bWJlciAhPSBudWxsKSB7XG5cbiAgICAgICAgbnVtYmVyID0gbnVtYmVyLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgICAgIC8vIHZpc2FcbiAgICAgICAgdmFyIHJlID0gbmV3IFJlZ0V4cChcIl40XCIpO1xuICAgICAgICBpZiAobnVtYmVyLm1hdGNoKHJlKSAhPSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIFwiVklTQVwiO1xuXG4gICAgICAgIC8vIE1hc3RlcmNhcmQgXG4gICAgICAgIC8vIFVwZGF0ZWQgZm9yIE1hc3RlcmNhcmQgMjAxNyBCSU5zIGV4cGFuc2lvblxuICAgICAgICBpZiAoL14oNVsxLTVdWzAtOV17MTR9fDIoMjJbMS05XVswLTldezEyfXwyWzMtOV1bMC05XXsxM318WzMtNl1bMC05XXsxNH18N1swLTFdWzAtOV17MTN9fDcyMFswLTldezEyfSkpJC8udGVzdChudW1iZXIpKVxuICAgICAgICAgICAgcmV0dXJuIFwiTUFTVEVSQ0FSRFwiO1xuXG4gICAgICAgIC8vIEFNRVhcbiAgICAgICAgcmUgPSBuZXcgUmVnRXhwKFwiXjNbNDddXCIpO1xuICAgICAgICBpZiAobnVtYmVyLm1hdGNoKHJlKSAhPSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIFwiQU1FUklDQU5FWFBSRVNTXCI7XG5cbiAgICAgICAgLy8gRGlzY292ZXJcbiAgICAgICAgcmUgPSBuZXcgUmVnRXhwKFwiXig2MDExfDYyMigxMls2LTldfDFbMy05XVswLTldfFsyLThdWzAtOV17Mn18OVswLTFdWzAtOV18OTJbMC01XXw2NFs0LTldKXw2NSlcIik7XG4gICAgICAgIGlmIChudW1iZXIubWF0Y2gocmUpICE9IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gXCJESVNDT1ZFUlwiO1xuXG4gICAgICAgIC8vIERpbmVyc1xuICAgICAgICByZSA9IG5ldyBSZWdFeHAoXCJeMzZcIik7XG4gICAgICAgIGlmIChudW1iZXIubWF0Y2gocmUpICE9IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gXCJESU5FUlNcIjtcblxuICAgICAgICAvLyBEaW5lcnMgLSBDYXJ0ZSBCbGFuY2hlXG4gICAgICAgIHJlID0gbmV3IFJlZ0V4cChcIl4zMFswLTVdXCIpO1xuICAgICAgICBpZiAobnVtYmVyLm1hdGNoKHJlKSAhPSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIFwiRElORVJTQ0FSVEVCTEFOQ0hFXCI7XG5cbiAgICAgICAgLy8gSkNCXG4gICAgICAgIHJlID0gbmV3IFJlZ0V4cChcIl4zNSgyWzg5XXxbMy04XVswLTldKVwiKTtcbiAgICAgICAgaWYgKG51bWJlci5tYXRjaChyZSkgIT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiBcIkpDQlwiO1xuXG4gICAgICAgIC8vIFZpc2EgRWxlY3Ryb25cbiAgICAgICAgcmUgPSBuZXcgUmVnRXhwKFwiXig0MDI2fDQxNzUwMHw0NTA4fDQ4NDR8NDkxKDN8NykpXCIpO1xuICAgICAgICBpZiAobnVtYmVyLm1hdGNoKHJlKSAhPSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIFwiVklTQUVMRUNUUk9OXCI7XG5cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOdWxsRnJvbUFycmF5KHZhbHVlKSB7XG5cbiAgICBpZiAobm90RW1wdHlMZW5ndGgodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtICE9IG51bGw7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWREYXRlKHZhbHVlKSB7XG5cbiAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBEYXRlXVwiKSB7XG4gICAgICAgICAgICAvLyBpdCBpcyBhIGRhdGVcbiAgICAgICAgICAgIGlmIChpc05hTih2YWx1ZS52YWx1ZU9mKCkpKSB7ICAvLyB2YWx1ZS52YWx1ZU9mKCkgY291bGQgYWxzbyB3b3JrXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZVRpbWVSYW5nZShkYXRlMSwgZGF0ZTIsIHVuaXQsIHByZWNpc2UpIHtcblxuICAgIGlmIChkYXRlMSAhPSBudWxsKSB7XG4gICAgICAgIGlmIChpc1ZhbGlkRGF0ZShkYXRlMSkpIHtcbiAgICAgICAgICAgIGRhdGUxID0gbW9tZW50KGRhdGUxKTtcblxuICAgICAgICAgICAgaWYgKGRhdGUyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZERhdGUoZGF0ZTIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGUyID0gbW9tZW50KGRhdGUyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGUyID0gbW9tZW50KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgICAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgICAgICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5kaWZmZXJlbmNlID0gZGF0ZTEuZGlmZihkYXRlMiwgJ3llYXJzJywgcHJlY2lzZSk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEudW5pdCA9IHVuaXQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5kaWZmZXJlbmNlID0gZGF0ZTEuZGlmZihkYXRlMiwgJ21vbnRocycsIHByZWNpc2UpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnVuaXQgPSB1bml0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICd3ZWVrJzpcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5kaWZmZXJlbmNlID0gZGF0ZTEuZGlmZihkYXRlMiwgJ3dlZWtzJywgcHJlY2lzZSk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEudW5pdCA9IHVuaXQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZGlmZmVyZW5jZSA9IGRhdGUxLmRpZmYoZGF0ZTIsICdkYXlzJywgcHJlY2lzZSk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEudW5pdCA9IHVuaXQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgICAgICAgICAgICBkYXRhLmRpZmZlcmVuY2UgPSBkYXRlMS5kaWZmKGRhdGUyLCAnaG91cnMnLCBwcmVjaXNlKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS51bml0ID0gdW5pdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbWludXRlJzpcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5kaWZmZXJlbmNlID0gZGF0ZTEuZGlmZihkYXRlMiwgJ21pbnV0ZXMnLCBwcmVjaXNlKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS51bml0ID0gdW5pdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5kaWZmZXJlbmNlID0gZGF0ZTEuZGlmZihkYXRlMiwgJ3NlY29uZHMnLCBwcmVjaXNlKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS51bml0ID0gdW5pdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAvL2F1dG8gZ2V0IG5lYXJlc3QgMVxuICAgICAgICAgICAgICAgICAgICBsZXQgc2VjdGlvbnMgPSBbJ3llYXInLCAnbW9udGgnLCAnd2VlaycsICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJ11cbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkU2VjdGlvbiA9IHNlY3Rpb25zLmZpbmQoZnVuY3Rpb24gKHNlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLmFicyhkYXRlMS5kaWZmKGRhdGUyLCBzZWN0aW9uICsgJ3MnLCB0cnVlKSkgPj0gMTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkU2VjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5kaWZmZXJlbmNlID0gZGF0ZTEuZGlmZihkYXRlMiwgc2VsZWN0ZWRTZWN0aW9uICsgJ3MnLCBwcmVjaXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudW5pdCA9IHNlbGVjdGVkU2VjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZGlmZmVyZW5jZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnVuaXQgPSAnc2Vjb25kJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0TWlsbGlTZWNvbmRzVG9UaW1lKG1pbGxpc2Vjb25kLCBtaW5Vbml0KSB7XG5cbiAgICBpZiAobWlsbGlzZWNvbmQgIT0gbnVsbCAmJiBpc1ZhbGlkTnVtYmVyKHBhcnNlSW50KG1pbGxpc2Vjb25kKSkpIHtcblxuICAgICAgICBsZXQgc2Vjb25kID0gMCwgbWludXRlID0gMCwgaG91ciA9IDA7XG4gICAgICAgIGxldCBmaW5hbFRpbWUgPSAnJztcbiAgICAgICAgbWlsbGlzZWNvbmQgPSBwYXJzZUludChtaWxsaXNlY29uZCk7XG5cbiAgICAgICAgaG91ciA9IG51bWJlclRvRml4ZWQobW9tZW50LmR1cmF0aW9uKG1pbGxpc2Vjb25kKS5ob3VycygpLCBmYWxzZSwgMiwgdHJ1ZSk7XG4gICAgICAgIG1pbnV0ZSA9IG51bWJlclRvRml4ZWQobW9tZW50LmR1cmF0aW9uKG1pbGxpc2Vjb25kKS5taW51dGVzKCksIGZhbHNlLCAyLCB0cnVlKTtcbiAgICAgICAgc2Vjb25kID0gbnVtYmVyVG9GaXhlZChtb21lbnQuZHVyYXRpb24obWlsbGlzZWNvbmQpLnNlY29uZHMoKSwgZmFsc2UsIDIsIHRydWUpO1xuXG4gICAgICAgIHN3aXRjaCAobWluVW5pdCkge1xuICAgICAgICAgICAgY2FzZSAnbWludXRlJzpcbiAgICAgICAgICAgICAgICBpZiAoaG91ciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZmluYWxUaW1lID0gYCR7aG91cn06JHttaW51dGV9OiR7c2Vjb25kfWA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmluYWxUaW1lID0gYCR7bWludXRlfToke3NlY29uZH1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgICAgICAgIGZpbmFsVGltZSA9IGAke2hvdXJ9OiR7bWludXRlfToke3NlY29uZH1gO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmIChob3VyID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBmaW5hbFRpbWUgPSBgJHtob3VyfToke21pbnV0ZX06JHtzZWNvbmR9YDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1pbnV0ZSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZmluYWxUaW1lID0gYCR7bWludXRlfToke3NlY29uZH1gO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsVGltZSA9IGAke3NlY29uZH1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmaW5hbFRpbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG59XG5leHBvcnQgZnVuY3Rpb24gaXNFeHBpcmVkKGRhdGUsIGFzcGVjdCkge1xuXG4gICAgaWYgKGFzcGVjdCA9PSBudWxsKSB7XG4gICAgICAgIGFzcGVjdCA9ICdzZWNvbmQnO1xuICAgIH1cblxuICAgIGlmIChkYXRlICE9IG51bGwgJiYgaXNWYWxpZERhdGUoZGF0ZSkpIHtcbiAgICAgICAgdmFyIHRvZGF5ID0gbW9tZW50KCk7XG4gICAgICAgIGRhdGUgPSBtb21lbnQoZGF0ZSk7XG4gICAgICAgIHJldHVybiB0b2RheS5pc0FmdGVyKGRhdGUsIGFzcGVjdCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb0NhcmRGb3JtYXQodmFsdWUpIHtcblxuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICAgICAgdmFsdWUgPSBpbnNlcnRCZXR3ZWVuKHZhbHVlLCA0LCAnICcpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvRXhwaXJlZERhdGVGb3JtYXQodmFsdWUpIHtcblxuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIHZhciBzdHIgPSB2YWx1ZS5zcGxpdCgnJyk7XG4gICAgICAgIGlmIChzdHIubGVuZ3RoIDwgMykge1xuICAgICAgICAgICAgaWYgKHN0clsxXSA9PSAnLycpIHtcbiAgICAgICAgICAgICAgICBzdHIuc3BsaWNlKDAsIDAsICcwJyk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBzdHIuam9pbihcIlwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKCcvJywgJycpO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gaW5zZXJ0QmV0d2Vlbih2YWx1ZSwgMiwgJy8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0QmV0d2Vlbih2YWx1ZSwgc3BhY2UsIGNoYXIsIGZyb21CYWNrLCBzdG9wQXRFbmQpIHtcblxuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIGlmIChpc05hTihwYXJzZUludChzcGFjZSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZnJvbUJhY2spIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHJldmVyc2VTdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG9yaXN0ciA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJycpO1xuICAgICAgICAgICAgdmFyIGxlbmd0aCA9IG9yaXN0ci5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgYWRkZWRzcGFjZWNvdW50ID0gMTtcbiAgICAgICAgICAgIHNwYWNlID0gcGFyc2VJbnQoc3BhY2UpO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPSAwICYmIChpbmRleCArIDEpICUgc3BhY2UgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcEF0RW5kICYmIGluZGV4ID09IGxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9yaXN0ci5zcGxpY2UoaW5kZXggKyBhZGRlZHNwYWNlY291bnQsIDAsIGNoYXIpO1xuICAgICAgICAgICAgICAgICAgICBhZGRlZHNwYWNlY291bnQgPSBhZGRlZHNwYWNlY291bnQgKyAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmcm9tQmFjaykge1xuICAgICAgICAgICAgICAgIG9yaXN0ciA9IG9yaXN0ci5yZXZlcnNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3Jpc3RyLmpvaW4oXCJcIik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrU3VwcG9ydGVkQ2FyZFR5cGUoY2FyZCkge1xuICAgIGlmIChjYXJkICE9IG51bGwpIHtcbiAgICAgICAgLy8gdmlzYVxuICAgICAgICBpZiAoY2FyZCA9PSAnVklTQScpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNhcmQgPT0gJ01BU1RFUkNBUkQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYXJkID09ICdWSVNBRUxFQ1RST04nKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYXJkID09ICdBTUVSSUNBTkVYUFJFU1MnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkTnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHZhbHVlKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNFeHBpcnlEYXRlRm9ybWF0KHZhbHVlKSB7XG5cbiAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAvL3RvIGFycmF5XG4gICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJycpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB2YWx1ZS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0gIT0gJy8nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAhcGFyc2VJbnQoaXRlbSkgJiYgcGFyc2VJbnQoaXRlbSkgIT0gMDtcbiAgICAgICAgICAgIH0pLmxlbmd0aCA+IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0QnlEZXNjKGRhdGEsIGNvbCkge1xuXG4gICAgaWYgKGRhdGEgJiYgY29sKSB7XG4gICAgICAgIHJldHVybiBkYXRhLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIGlmIChfLmlzUGxhaW5PYmplY3QoYSkgfHwgXy5pc1BsYWluT2JqZWN0KGIpIHx8IF8uaXNBcnJheShhKSB8fCBfLmlzQXJyYXkoYikpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbCkge1xuICAgICAgICAgICAgICAgICAgICBjb2wgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYVtjb2xdIDwgYltjb2xdKSByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICBpZiAoYVtjb2xdID4gYltjb2xdKSByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChhIDwgYikgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgaWYgKGEgPiBiKSByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0QnlEYXRlRGVzYyhkYXRhLCBjb2wpIHtcblxuICAgIGlmIChkYXRhICYmIGNvbCkge1xuICAgICAgICByZXR1cm4gZGF0YS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICBpZiAobW9tZW50KGFbY29sXSkuaXNCZWZvcmUobW9tZW50KGJbY29sXSkpKSByZXR1cm4gMTtcbiAgICAgICAgICAgIGlmIChtb21lbnQoYVtjb2xdKS5pc0FmdGVyKG1vbWVudChiW2NvbF0pKSkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRGF0YShkYXRhLCBjb2wsIHZhbCkge1xuICAgIHJldHVybiBkYXRhLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbVtjb2xdID09IHZhbDtcbiAgICB9KVxufVxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVTdHJpbmdOdW1iZXIoc3RyaW5nLCBzdGFydCwgZW5kKSB7XG4gICAgaWYgKHN0cmluZykge1xuICAgICAgICB2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcblxuICAgICAgICAvL0dldCByZXN0IHBhcnRcbiAgICAgICAgdmFyIHN0YXJ0cGFydCA9ICcnO1xuICAgICAgICB2YXIgZW5kcGFydCA9ICcnO1xuICAgICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihzdGFydCkgJiYgTnVtYmVyLmlzSW50ZWdlcihlbmQpKSB7XG4gICAgICAgICAgICBzdGFydHBhcnQgPSBzdHJpbmcuc2xpY2UoMCwgc3RhcnQpO1xuICAgICAgICAgICAgZW5kcGFydCA9IHN0cmluZy5zbGljZShsZW5ndGggLSAobGVuZ3RoIC0gZW5kKSwgbGVuZ3RoKTtcbiAgICAgICAgfSBlbHNlIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHN0YXJ0KSkge1xuICAgICAgICAgICAgc3RhcnRwYXJ0ID0gc3RyaW5nLnNsaWNlKDAsIHN0YXJ0KTtcbiAgICAgICAgICAgIGVuZHBhcnQgPSAnJztcbiAgICAgICAgfSBlbHNlIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGVuZCkpIHtcbiAgICAgICAgICAgIHN0YXJ0cGFydCA9ICcnO1xuICAgICAgICAgICAgZW5kcGFydCA9IHN0cmluZy5zbGljZShsZW5ndGggLSAobGVuZ3RoIC0gZW5kKSwgbGVuZ3RoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICAgIH1cblxuICAgICAgICAvL0dldCBkZXNpcmUgY29udmVydCBwYXJ0XG4gICAgICAgIHZhciBjb252ZXJ0cGFydCA9ICcnO1xuICAgICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihzdGFydCkgJiYgTnVtYmVyLmlzSW50ZWdlcihlbmQpKSB7XG4gICAgICAgICAgICBjb252ZXJ0cGFydCA9IHN0cmluZy5zbGljZShzdGFydCwgZW5kKTtcbiAgICAgICAgfSBlbHNlIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHN0YXJ0KSkge1xuICAgICAgICAgICAgY29udmVydHBhcnQgPSBzdHJpbmcuc2xpY2Uoc3RhcnQpXG4gICAgICAgIH0gZWxzZSBpZiAoTnVtYmVyLmlzSW50ZWdlcihlbmQpKSB7XG4gICAgICAgICAgICBjb252ZXJ0cGFydCA9IHN0cmluZy5zbGljZSgwLCBlbmQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgLy90byBhcnJheVxuICAgICAgICBjb252ZXJ0cGFydCA9IGNvbnZlcnRwYXJ0LnNwbGl0KCcnKTtcbiAgICAgICAgY29udmVydHBhcnQgPSBjb252ZXJ0cGFydC5tYXAoZnVuY3Rpb24gKGNoYXIpIHtcbiAgICAgICAgICAgIGlmIChpc05hTihwYXJzZUludChjaGFyKSkgfHwgIXBhcnNlSW50KGNoYXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoYXI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnKic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy90byBzdHJpbmdcbiAgICAgICAgY29udmVydHBhcnQgPSBjb252ZXJ0cGFydC5qb2luKFwiXCIpO1xuXG4gICAgICAgIHJldHVybiBzdGFydHBhcnQgKyBjb252ZXJ0cGFydCArIGVuZHBhcnQ7XG5cblxuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG59XG5leHBvcnQgZnVuY3Rpb24gbm90RW1wdHlMZW5ndGgoZGF0YSkge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpICYmIGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoZGF0YSkgJiYgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5TGVuZ3RoQ291bnQoZGF0YSkge1xuXG4gICAgaWYgKG5vdEVtcHR5TGVuZ3RoKGRhdGEpICYmIEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc3luY0RlZmF1bHREZWxpdmVyeShkYXRhLCBpZCkge1xuICAgIHJldHVybiBkYXRhLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoaXRlbS5faWQpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLl9pZCAhPSBpZCkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlzRGVmYXVsdERlbGl2ZXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaXNEZWZhdWx0RGVsaXZlcnkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW0uaXNEZWZhdWx0RGVsaXZlcnkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN5bmNEZWZhdWx0QmlsbGluZyhkYXRhLCBpZCkge1xuICAgIHJldHVybiBkYXRhLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoaXRlbS5faWQpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLl9pZCAhPSBpZCkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlzRGVmYXVsdEJpbGxpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pc0RlZmF1bHRCaWxsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtLmlzRGVmYXVsdEJpbGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSlcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc3luY0RlZmF1bHRDYXJkKGRhdGEsIGlkKSB7XG4gICAgcmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtLl9pZCkge1xuICAgICAgICAgICAgaWYgKGl0ZW0uX2lkICE9IGlkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaXNEZWZhdWx0Q2FyZCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmlzRGVmYXVsdENhcmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW0uaXNEZWZhdWx0Q2FyZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9KVxufVxuZXhwb3J0IGZ1bmN0aW9uIHN5bmNEZWZhdWx0QmFuayhkYXRhLCBpZCkge1xuICAgIHJldHVybiBkYXRhLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoaXRlbS5faWQpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLl9pZCAhPSBpZCkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlzRGVmYXVsdEJhbmspIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pc0RlZmF1bHRCYW5rID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtLmlzRGVmYXVsdEJhbmsgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2F2ZWRXaXNoTGlzdChkYXRhLCBpZCkge1xuICAgIGlmIChkYXRhICYmIGlkKSB7XG4gICAgICAgIHZhciBjaGVjayA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5wcm9kdWN0SWQgPT0gaWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjaGVjay5sZW5ndGggPiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRm9sbG93ZWQoZGF0YSwgaWQpIHtcbiAgICBpZiAoZGF0YSAmJiBpZCkge1xuICAgICAgICB2YXIgY2hlY2sgPSBkYXRhLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uY29tcGFueUlkID09IGlkO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY2hlY2subGVuZ3RoID4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWVwRXF1YWwob2JqZWN0MSwgb2JqZWN0Mikge1xuICAgIGlmIChvYmplY3QxICYmIG9iamVjdDIpIHtcbiAgICAgICAgY29uc3Qga2V5czEgPSBPYmplY3Qua2V5cyhvYmplY3QxKTtcbiAgICAgICAgY29uc3Qga2V5czIgPSBPYmplY3Qua2V5cyhvYmplY3QyKTtcblxuICAgICAgICBpZiAoa2V5czEubGVuZ3RoICE9PSBrZXlzMi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMxKSB7XG4gICAgICAgICAgICBjb25zdCB2YWwxID0gb2JqZWN0MVtrZXldO1xuICAgICAgICAgICAgY29uc3QgdmFsMiA9IG9iamVjdDJba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IGFyZU9iamVjdHMgPSBpc09iamVjdCh2YWwxKSAmJiBpc09iamVjdCh2YWwyKTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBhcmVPYmplY3RzICYmICFkZWVwRXF1YWwodmFsMSwgdmFsMikgfHxcbiAgICAgICAgICAgICAgICAhYXJlT2JqZWN0cyAmJiB2YWwxICE9PSB2YWwyXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3Qob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVlcEVxdWFsQXJyYXlPYmplY3QoYXJyYXkxLCBhcnJheTIpIHtcblxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyYXkxKSAmJiBBcnJheS5pc0FycmF5KGFycmF5MikpIHtcbiAgICAgICAgaWYgKGFycmF5MS5sZW5ndGggIT0gYXJyYXkyLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBhcnJheTEubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIWRlZXBFcXVhbChhcnJheTFbeF0sIGFycmF5Mlt4XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kVG9IYWxmKG51bWJlcikge1xuXG4gICAgaWYgKG51bWJlciAhPSBudWxsKSB7XG4gICAgICAgIGlmICghaXNOYU4ocGFyc2VGbG9hdChudW1iZXIpKSkge1xuICAgICAgICAgICAgdmFyIGRlY2ltYWwgPSBwYXJzZUZsb2F0KG51bWJlcik7XG4gICAgICAgICAgICB2YXIgaW50ID0gcGFyc2VJbnQobnVtYmVyKTtcblxuICAgICAgICAgICAgZGVjaW1hbCA9IGRlY2ltYWwgLSBpbnQ7XG4gICAgICAgICAgICByZXR1cm4gZGVjaW1hbCA+PSAwLjUgPyBpbnQgKyAwLjUgOiBpbnQ7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlTdHJpbmdpZnlOZXN0ZWRPYmplY3QodmFsdWUsIGNvbE5hbWUpIHtcblxuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIGlmIChjb2xOYW1lKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICAgICAgZGF0YVtjb2xOYW1lXSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBxdWVyeVN0cmluZy5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbWdUYWdTb3VyY2Uoc3RyKSB7XG4gICAgaWYgKHN0cikge1xuICAgICAgICBzdHIgPSBzdHIudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IHN0ckFyciA9IHN0ci5zcGxpdChcIlwiKTtcbiAgICAgICAgbGV0IHJlbW92ZWQgPSB0cnVlO1xuICAgICAgICAvL0dldCBodG1sIHRhZyBvbmx5XG4gICAgICAgIHN0ckFyciA9IF8uY29tcGFjdChfLm1hcChzdHJBcnIsIGZ1bmN0aW9uIChjaHIpIHtcbiAgICAgICAgICAgIGlmIChjaHIgPT0gJzwnKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBjaHI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjaHIgPT0gJz4nKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNocjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZW1vdmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2hyO1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgbGV0IGltYWdlcyA9IHN0ckFyci5qb2luKFwiXCIpLnNwbGl0KFwiPlwiKTtcbiAgICAgICAgaW1hZ2VzID0gXy5jb21wYWN0KF8ubWFwKGltYWdlcywgZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICAgICAgICBpZiAoaW1hZ2Uuc3Vic3RyKDAsIDQpID09ICc8aW1nJykge1xuICAgICAgICAgICAgICAgIC8vcG9pbnQgdG8gc3JjIHZhbHVlXG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0SW5kZXggPSBpbWFnZS5pbmRleE9mKCdzcmM9XCInKSArIDU7XG5cbiAgICAgICAgICAgICAgICAvL2Nyb3AgdW50aWwgc3JjXG4gICAgICAgICAgICAgICAgbGV0IGNyb3BwZWRTdHJBcnIgPSBpbWFnZS5zdWJzdHIoc3RhcnRJbmRleClcbiAgICAgICAgICAgICAgICBjcm9wcGVkU3RyQXJyID0gY3JvcHBlZFN0ckFyci5zcGxpdChcIlwiKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgLy9yZXRyaWV2ZSB2YWx1ZVxuICAgICAgICAgICAgICAgIGNyb3BwZWRTdHJBcnIgPSBfLmNvbXBhY3QoXy5tYXAoY3JvcHBlZFN0ckFyciwgZnVuY3Rpb24gKGNocikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hyID09ICdcIicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbW92ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjaHI7XG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdXJsOiBgLyR7Y3JvcHBlZFN0ckFyci5qb2luKFwiXCIpfWAsIG5hbWU6IGNyb3BwZWRTdHJBcnIuam9pbihcIlwiKS5zbGljZSgxMCkgfTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSkpXG4gICAgICAgIHJldHVybiBpbWFnZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVIdG1sVGFnKHN0cikge1xuICAgIGlmIChzdHIpIHtcbiAgICAgICAgc3RyID0gc3RyLnRvU3RyaW5nKCk7XG4gICAgICAgIGxldCBzdHJBcnIgPSBzdHIuc3BsaXQoXCJcIik7XG4gICAgICAgIGxldCByZW1vdmVkID0gZmFsc2U7XG4gICAgICAgIHN0ckFyciA9IF8uY29tcGFjdChfLm1hcChzdHJBcnIsIGZ1bmN0aW9uIChjaHIpIHtcbiAgICAgICAgICAgIGlmIChjaHIgPT0gJzwnKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjaHIgPT0gJz4nKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlbW92ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaHI7XG4gICAgICAgIH0pKTtcblxuICAgICAgICByZXR1cm4gc3RyQXJyLmpvaW4oXCJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9SYW5nZUZvcm1hdCh2YWx1ZSkge1xuICAgIGxldCBkYXRhID0gXy5jbG9uZURlZXAodmFsdWUpO1xuICAgIC8vQ29udmVydCBSYW5nZSBGb3JtYXRcbiAgICBpZiAobm90RW1wdHlMZW5ndGgoZGF0YSkpIHtcbiAgICAgICAgLy9SZXN0cnVjdCByYW5nZSBmb3JtYXQgdG8gY29udmVydFxuICAgICAgICBpZiAoIWRhdGFbMF0gJiYgIWRhdGFbMV0pIHtcbiAgICAgICAgfSBlbHNlIGlmICghZGF0YVswXSkge1xuICAgICAgICAgICAgZGF0YVswXSA9IGRhdGFbMV07XG4gICAgICAgICAgICBkYXRhWzFdID0gZGVmYXVsdFJhbmdlU21hbGxlclxuICAgICAgICB9IGVsc2UgaWYgKCFkYXRhWzFdKSB7XG4gICAgICAgICAgICBkYXRhWzFdID0gZGVmYXVsdFJhbmdlQmlnZ2VyXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRSYW5nZUZvcm1hdEJhY2sodmFsdWVBcnIpIHtcbiAgICBpZiAoXy5pc0FycmF5KHZhbHVlQXJyKSAmJiAhXy5pc0VtcHR5KHZhbHVlQXJyKSkge1xuICAgICAgICBsZXQgcGFyYW1ldGVyMSA9IHZhbHVlQXJyWzBdO1xuICAgICAgICBsZXQgcGFyYW1ldGVyMiA9IHZhbHVlQXJyWzFdO1xuICAgICAgICBsZXQgZGF0YSA9IFssXVxuXG4gICAgICAgIGlmIChwYXJhbWV0ZXIyID09IGRlZmF1bHRSYW5nZVNtYWxsZXIgfHwgcGFyYW1ldGVyMiA9PSBkZWZhdWx0UmFuZ2VCaWdnZXIpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXIyID09IGRlZmF1bHRSYW5nZUJpZ2dlcikge1xuICAgICAgICAgICAgICAgIGRhdGFbMF0gPSBwYXJhbWV0ZXIxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlcjIgPT0gZGVmYXVsdFJhbmdlU21hbGxlcikge1xuICAgICAgICAgICAgICAgIGRhdGFbMV0gPSBwYXJhbWV0ZXIxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVBcnI7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsdWVBcnI7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFJhbmdlRm9ybWF0VG9UZXh0KGZvcm1hdGVkUmFuZ2UsIHZhbHVlRm9ybWF0KSB7XG5cbiAgICBmdW5jdGlvbiBjb252ZXJ0VmFsdWUodmFsdWUsIGZvcm1hdCkge1xuXG4gICAgICAgIGlmIChmb3JtYXQgPT0gJ3ByaWNlJykge1xuICAgICAgICAgICAgcmV0dXJuIGBSTSAke2Zvcm1hdE51bWJlcih2YWx1ZSwgbnVsbCwgdHJ1ZSwgMiwgdHJ1ZSl9YFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvcm1hdCA9PSAnbWlsZWFnZScpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtmb3JtYXROdW1iZXIodmFsdWUsIG51bGwsIHRydWUsIDIsIHRydWUpfSBrbWBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3JtYXQgPT0gJ2VuZ2luZUNhcGFjaXR5Jykge1xuICAgICAgICAgICAgcmV0dXJuIGAke2Zvcm1hdE51bWJlcih2YWx1ZSwgbnVsbCwgdHJ1ZSwgMiwgdHJ1ZSl9IGNjYFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKF8uaXNBcnJheShmb3JtYXRlZFJhbmdlKSAmJiAhXy5pc0VtcHR5KGZvcm1hdGVkUmFuZ2UpKSB7XG4gICAgICAgIGxldCBwYXJhbWV0ZXIxID0gZm9ybWF0ZWRSYW5nZVswXTtcbiAgICAgICAgbGV0IHBhcmFtZXRlcjIgPSBmb3JtYXRlZFJhbmdlWzFdO1xuICAgICAgICBsZXQgdGV4dCA9ICcnO1xuXG4gICAgICAgIGlmIChwYXJhbWV0ZXIyID09ICc+PScgfHwgcGFyYW1ldGVyMiA9PSAnPicgfHwgKCFwYXJhbWV0ZXIyICYmIHBhcmFtZXRlcjEpKSB7XG4gICAgICAgICAgICB0ZXh0ID0gYGFib3ZlICR7Y29udmVydFZhbHVlKHBhcmFtZXRlcjEsIHZhbHVlRm9ybWF0KX1gXG4gICAgICAgIH0gZWxzZSBpZiAocGFyYW1ldGVyMiA9PSAnPD0nIHx8IHBhcmFtZXRlcjIgPT0gJzwnKSB7XG4gICAgICAgICAgICB0ZXh0ID0gYGJlbG93ICR7Y29udmVydFZhbHVlKHBhcmFtZXRlcjEsIHZhbHVlRm9ybWF0KX1gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZXh0ID0gYGJldHdlZW4gJHtjb252ZXJ0VmFsdWUocGFyYW1ldGVyMSwgdmFsdWVGb3JtYXQpfSBhbmQgJHtjb252ZXJ0VmFsdWUocGFyYW1ldGVyMiwgdmFsdWVGb3JtYXQpfWBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RmlsdGVyUmFuZ2UodmFsdWUsIG5hbWUpIHtcblxuICAgIGlmIChub3RFbXB0eUxlbmd0aCh2YWx1ZSkgJiYgbmFtZSkge1xuICAgICAgICBsZXQgcGFyYW1ldGVyMSA9IHBhcnNlRmxvYXQodmFsdWVbMF0pO1xuICAgICAgICBsZXQgcGFyYW1ldGVyMiA9IHZhbHVlWzFdO1xuICAgICAgICBsZXQgZmluYWxEYXRhID0gW107XG4gICAgICAgIGxldCBxdWVyeSA9IHt9O1xuXG4gICAgICAgIGlmICghaXNWYWxpZE51bWJlcihwYXJhbWV0ZXIxKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1ldGVyMiAhPSBudWxsKSB7XG5cbiAgICAgICAgICAgIHN3aXRjaCAocGFyYW1ldGVyMikge1xuICAgICAgICAgICAgICAgIGNhc2UgJzw9JzpcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlbYCR7bmFtZX1gXSA9IHsgJGx0ZTogKyhwYXJhbWV0ZXIxKSB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsRGF0YS5wdXNoKHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5W2Ake25hbWV9YF0gPSB7ICRsdDogKyhwYXJhbWV0ZXIxKSB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsRGF0YS5wdXNoKHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnPT0nOlxuICAgICAgICAgICAgICAgICAgICBxdWVyeVtgJHtuYW1lfWBdID0geyAkZXE6ICsocGFyYW1ldGVyMSkgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbERhdGEucHVzaChxdWVyeSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJz4nOlxuICAgICAgICAgICAgICAgICAgICBxdWVyeVtgJHtuYW1lfWBdID0geyAkZ3Q6ICsocGFyYW1ldGVyMSkgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbERhdGEucHVzaChxdWVyeSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJz49JzpcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlbYCR7bmFtZX1gXSA9IHsgJGd0ZTogKyhwYXJhbWV0ZXIxKSB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsRGF0YS5wdXNoKHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyMiA9IHBhcnNlRmxvYXQocGFyYW1ldGVyMik7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZE51bWJlcihwYXJhbWV0ZXIyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlbYCR7bmFtZX1gXSA9IHsgJGVxOiArKHBhcmFtZXRlcjEpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsRGF0YS5wdXNoKHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5W2Ake25hbWV9YF0gPSB7ICRndGU6ICsocGFyYW1ldGVyMSkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxEYXRhLnB1c2gocXVlcnkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcXVlcnkxID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTFbYCR7bmFtZX1gXSA9IHsgJGx0ZTogKyhwYXJhbWV0ZXIyKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbERhdGEucHVzaChxdWVyeTEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxdWVyeVtgJHtuYW1lfWBdID0geyAkZXE6ICsocGFyYW1ldGVyMSkgfVxuICAgICAgICAgICAgZmluYWxEYXRhLnB1c2gocXVlcnkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaW5hbERhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0UmVtb3ZlRW1wdHlWYWx1ZSh2YWx1ZSkge1xuXG4gICAgaWYgKG5vdEVtcHR5TGVuZ3RoKHZhbHVlKSAmJiBfLmlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBfLnBpY2tCeSh2YWx1ZSwgZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICAgICAgICByZXR1cm4gXy5pc0FycmF5KHByb3BlcnR5KSA/IG5vdEVtcHR5TGVuZ3RoKF8uY29tcGFjdChwcm9wZXJ0eSkpIDogXy5pc1BsYWluT2JqZWN0KHByb3BlcnR5KSA/IG5vdEVtcHR5TGVuZ3RoKG9iamVjdFJlbW92ZUVtcHR5VmFsdWUocHJvcGVydHkpKSA6IHByb3BlcnR5O1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge31cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0UHJvZHVjdFJvdXRlUGFyYW1zVG9GaWx0ZXJPYmplY3Qocm91dGVQYXJhbXMpIHtcblxuICAgIGxldCB7IHBhcmFtZXRlcjEsIHBhcmFtZXRlcjIsIHBhcmFtZXRlcjMgfSA9IHJvdXRlUGFyYW1zO1xuICAgIGxldCB7IHNvcnRpbmcsIHBhZ2UsIHZpZXcgfSA9IHJvdXRlUGFyYW1zO1xuICAgIGxldCBtZXJnZU9iaiA9IF8ucGljayhyb3V0ZVBhcmFtcywgYXZhaWxhYmxlRmlsdGVycykgfHwge307XG5cbiAgICBpZiAoIWlzVmFsaWROdW1iZXIocGFyc2VJbnQocGFnZSkpKSB7XG4gICAgICAgIHBhZ2UgPSAxO1xuICAgIH1cblxuICAgIGlmICh2aWV3ICE9ICdncmlkVmlldycgJiYgdmlldyAhPSAnbGlzdFZpZXcnKSB7XG4gICAgICAgIHZpZXcgPSAnZ3JpZFZpZXcnO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIHNvcnRpbmcgPSBKU09OLnBhcnNlKHNvcnRpbmcpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGlmICghXy5nZXQoc29ydGluZywgWydjYXJzcGVjLnllYXInXSkgJiYgIV8uZ2V0KHNvcnRpbmcsIFsnbWlsZWFnZUZpbHRlciddKSAmJiAhXy5nZXQoc29ydGluZywgWydzZWFyY2hQcmljZSddKSkge1xuICAgICAgICBzb3J0aW5nID0ge307XG4gICAgfVxuICAgIGxldCBmaW5hbERhdGEgPSB7XG4gICAgICAgIGZpbHRlckdyb3VwOiB7XG4gICAgICAgICAgICAuLi5tZXJnZU9ialxuICAgICAgICB9LFxuICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgIHBhZ2U6IHBhZ2UsXG4gICAgICAgICAgICBzb3J0aW5nOiBzb3J0aW5nLFxuICAgICAgICAgICAgdmlldzogdmlld1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBpZiAoZmluYWxEYXRhLmZpbHRlckdyb3VwLnByaWNlUmFuZ2UpIHtcbiAgICAgICAgZmluYWxEYXRhLmZpbHRlckdyb3VwLnByaWNlUmFuZ2UgPSBjb252ZXJ0UmFuZ2VGb3JtYXRCYWNrKGZpbmFsRGF0YS5maWx0ZXJHcm91cC5wcmljZVJhbmdlKTtcbiAgICB9XG4gICAgaWYgKGZpbmFsRGF0YS5maWx0ZXJHcm91cC55ZWFyUmFuZ2UpIHtcbiAgICAgICAgZmluYWxEYXRhLmZpbHRlckdyb3VwLnllYXJSYW5nZSA9IGNvbnZlcnRSYW5nZUZvcm1hdEJhY2soZmluYWxEYXRhLmZpbHRlckdyb3VwLnllYXJSYW5nZSk7XG4gICAgfVxuICAgIGlmIChmaW5hbERhdGEuZmlsdGVyR3JvdXAubWlsZWFnZVJhbmdlKSB7XG4gICAgICAgIGZpbmFsRGF0YS5maWx0ZXJHcm91cC5taWxlYWdlUmFuZ2UgPSBjb252ZXJ0UmFuZ2VGb3JtYXRCYWNrKGZpbmFsRGF0YS5maWx0ZXJHcm91cC5taWxlYWdlUmFuZ2UpO1xuICAgIH1cbiAgICBpZiAoZmluYWxEYXRhLmZpbHRlckdyb3VwLmVuZ2luZUNhcGFjaXR5UmFuZ2UpIHtcbiAgICAgICAgZmluYWxEYXRhLmZpbHRlckdyb3VwLmVuZ2luZUNhcGFjaXR5UmFuZ2UgPSBjb252ZXJ0UmFuZ2VGb3JtYXRCYWNrKGZpbmFsRGF0YS5maWx0ZXJHcm91cC5lbmdpbmVDYXBhY2l0eVJhbmdlKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1ldGVyMSAmJiAhcGFyYW1ldGVyMiAmJiAhcGFyYW1ldGVyMykge1xuICAgICAgICBsZXQgc3RhdGVBcnIgPSBwYXJhbWV0ZXIxLnNwbGl0KCdfJyk7XG4gICAgICAgIGZpbmFsRGF0YS5maWx0ZXJHcm91cC5zdGF0ZSA9IF8uaXNBcnJheShzdGF0ZUFycikgJiYgIV8uaXNFbXB0eShzdGF0ZUFycikgPyBfLmdldChzdGF0ZUFyciwgWzFdKSB8fCAnJyA6ICcnO1xuICAgICAgICBmaW5hbERhdGEuZmlsdGVyR3JvdXAuYXJlYSA9IF8uaXNBcnJheShzdGF0ZUFycikgJiYgIV8uaXNFbXB0eShzdGF0ZUFycikgPyBfLmdldChzdGF0ZUFyciwgWzJdKSB8fCAnJyA6ICcnO1xuICAgIH0gZWxzZSBpZiAocGFyYW1ldGVyMSAmJiBwYXJhbWV0ZXIyICYmICFwYXJhbWV0ZXIzKSB7XG4gICAgICAgIGZpbmFsRGF0YS5maWx0ZXJHcm91cC5tYWtlID0gXy50b0xvd2VyKHBhcmFtZXRlcjEpO1xuXG4gICAgICAgIGxldCBzdGF0ZUFyciA9IHBhcmFtZXRlcjIuc3BsaXQoJ18nKTtcbiAgICAgICAgZmluYWxEYXRhLmZpbHRlckdyb3VwLnN0YXRlID0gXy5pc0FycmF5KHN0YXRlQXJyKSAmJiAhXy5pc0VtcHR5KHN0YXRlQXJyKSA/IF8uZ2V0KHN0YXRlQXJyLCBbMV0pIHx8ICcnIDogJyc7XG4gICAgICAgIGZpbmFsRGF0YS5maWx0ZXJHcm91cC5hcmVhID0gXy5pc0FycmF5KHN0YXRlQXJyKSAmJiAhXy5pc0VtcHR5KHN0YXRlQXJyKSA/IF8uZ2V0KHN0YXRlQXJyLCBbMl0pIHx8ICcnIDogJyc7XG5cbiAgICB9IGVsc2UgaWYgKHBhcmFtZXRlcjEgJiYgcGFyYW1ldGVyMiAmJiBwYXJhbWV0ZXIzKSB7XG4gICAgICAgIGZpbmFsRGF0YS5maWx0ZXJHcm91cC5tYWtlID0gXy50b0xvd2VyKHBhcmFtZXRlcjEpO1xuICAgICAgICBmaW5hbERhdGEuZmlsdGVyR3JvdXAubW9kZWwgPSBfLnRvTG93ZXIocGFyYW1ldGVyMik7XG5cbiAgICAgICAgbGV0IHN0YXRlQXJyID0gcGFyYW1ldGVyMy5zcGxpdCgnXycpO1xuICAgICAgICBmaW5hbERhdGEuZmlsdGVyR3JvdXAuc3RhdGUgPSBfLmlzQXJyYXkoc3RhdGVBcnIpICYmICFfLmlzRW1wdHkoc3RhdGVBcnIpID8gXy5nZXQoc3RhdGVBcnIsIFsxXSkgfHwgJycgOiAnJztcbiAgICAgICAgZmluYWxEYXRhLmZpbHRlckdyb3VwLmFyZWEgPSBfLmlzQXJyYXkoc3RhdGVBcnIpICYmICFfLmlzRW1wdHkoc3RhdGVBcnIpID8gXy5nZXQoc3RhdGVBcnIsIFsyXSkgfHwgJycgOiAnJztcblxuICAgIH0gZWxzZSB7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gZmluYWxEYXRhO1xuXG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFBhcmFtZXRlclRvUHJvZHVjdExpc3RVcmwoZGF0YSwgY29uZmlnKSB7XG5cbiAgICBsZXQgbWVyZ2VPYmogPSBvYmplY3RSZW1vdmVFbXB0eVZhbHVlKGRhdGEpO1xuICAgIGxldCBiYXNlUGF0aCA9ICcnO1xuXG4gICAgaWYgKCFfLmlzUGxhaW5PYmplY3QoY29uZmlnKSB8fCBfLmlzRW1wdHkoY29uZmlnKSkge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgc29ydGluZzoge30sXG4gICAgICAgICAgICB2aWV3OiAnZ3JpZFZpZXcnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWlzVmFsaWROdW1iZXIocGFyc2VJbnQoY29uZmlnLnBhZ2UpKSkge1xuICAgICAgICBjb25maWcucGFnZSA9IDE7XG4gICAgfVxuICAgIGlmIChjb25maWcudmlldyAhPSAnZ3JpZFZpZXcnICYmIGNvbmZpZy52aWV3ICE9ICdsaXN0VmlldycpIHtcbiAgICAgICAgY29uZmlnLnZpZXcgPSAnZ3JpZFZpZXcnO1xuICAgIH1cblxuICAgIGlmICghXy5pc1BsYWluT2JqZWN0KG9iamVjdFJlbW92ZUVtcHR5VmFsdWUoY29uZmlnLnNvcnRpbmcpKSAmJiBfLmlzRW1wdHkob2JqZWN0UmVtb3ZlRW1wdHlWYWx1ZShjb25maWcuc29ydGluZykpICYmICghXy5nZXQoY29uZmlnLCBbJ3NvcnRpbmcnLCAnY2Fyc3BlYy55ZWFyJ10pICYmICFfLmdldChjb25maWcsIFsnc29ydGluZycsICdtaWxlYWdlRmlsdGVyJ10pICYmICFfLmdldChjb25maWcsIFsnc29ydGluZycsICdzZWFyY2hQcmljZSddKSkpIHtcbiAgICAgICAgY29uZmlnLnNvcnRpbmcgPSB7fTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25maWcuc29ydGluZyA9IF8ucGljayhvYmplY3RSZW1vdmVFbXB0eVZhbHVlKGNvbmZpZy5zb3J0aW5nKSwgWydjYXJzcGVjLnllYXInLCAnc2VhcmNoUHJpY2UnLCAnbWlsZWFnZUZpbHRlciddKTtcbiAgICB9XG5cblxuICAgIGlmIChub3RFbXB0eUxlbmd0aChtZXJnZU9iaikpIHtcbiAgICAgICAgbWVyZ2VPYmogPSBfLnBpY2sobWVyZ2VPYmosIGF2YWlsYWJsZUZpbHRlcnMpO1xuICAgICAgICBsZXQgY29uZGl0aW9uID0gbWVyZ2VPYmouY29uZGl0aW9uO1xuICAgICAgICBsZXQgbWFrZSA9IG1lcmdlT2JqLm1ha2U7XG4gICAgICAgIGxldCBtb2RlbCA9IG1lcmdlT2JqLm1vZGVsO1xuICAgICAgICBsZXQgc3RhdGUgPSBtZXJnZU9iai5zdGF0ZTtcbiAgICAgICAgbGV0IGFyZWEgPSBtZXJnZU9iai5hcmVhO1xuXG5cblxuICAgICAgICBpZiAoY29uZGl0aW9uICYmIGNvbmRpdGlvbiAhPSAnY2Fycy1vbi1zYWxlJyAmJiBjb25kaXRpb24gIT0gJ2FsbCcpIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbiA9IFtfLnRvTG93ZXIoY29uZGl0aW9uKSwgJ2NhcnMtb24tc2FsZSddLmpvaW4oJy0nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbiA9ICdjYXJzLW9uLXNhbGUnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXRlICYmIHN0YXRlICE9ICdtYWxheXNpYScpIHtcbiAgICAgICAgICAgIGlmIChhcmVhICYmIHN0YXRlICE9ICdtYWxheXNpYScpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IFsnbWFsYXlzaWEnLCBfLnRvTG93ZXIobWVyZ2VPYmouc3RhdGUpLCBfLnRvTG93ZXIobWVyZ2VPYmouYXJlYSldLmpvaW4oJ18nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBbJ21hbGF5c2lhJywgXy50b0xvd2VyKG1lcmdlT2JqLnN0YXRlKV0uam9pbignXycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGUgPSAnbWFsYXlzaWEnO1xuICAgICAgICB9XG5cblxuXG4gICAgICAgIC8vTWFpbiBwYXJhbWV0ZXJcbiAgICAgICAgLy9PcmRlciBpcyBpbXBvcnRhbnRcbiAgICAgICAgLy9UaGUgZmlyc3QgMSBhbHdheXMgaXMgY29uZGl0aW9uXG4gICAgICAgIC8vVGhlIGxhc3QgMSBhbHdheXMgaXMgc3RhdGVcbiAgICAgICAgbGV0IG1haW5QYXJhbWV0ZXJzID0gW21ha2UsIG1vZGVsXTtcbiAgICAgICAgbGV0IHBhdGggPSBgJHtiYXNlUGF0aH0vJHtjb25kaXRpb259YDtcblxuICAgICAgICBfLmZvckVhY2gobWFpblBhcmFtZXRlcnMsIGZ1bmN0aW9uIChwYXJhbWV0ZXIpIHtcbiAgICAgICAgICAgIGlmICghcGFyYW1ldGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IGAvJHtfLnRvTG93ZXIocGFyYW1ldGVyKX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgcGF0aCArPSBgLyR7c3RhdGV9YFxuICAgICAgICBkZWxldGUgbWVyZ2VPYmouY29uZGl0aW9uO1xuICAgICAgICBkZWxldGUgbWVyZ2VPYmoubWFrZTtcbiAgICAgICAgZGVsZXRlIG1lcmdlT2JqLm1vZGVsO1xuICAgICAgICBkZWxldGUgbWVyZ2VPYmouc3RhdGU7XG4gICAgICAgIHJldHVybiBgJHtwYXRofT92aWV3PSR7Y29uZmlnLnZpZXd9JnBhZ2U9JHtjb25maWcucGFnZX0ke18uaXNQbGFpbk9iamVjdChjb25maWcuc29ydGluZykgJiYgIV8uaXNFbXB0eShjb25maWcuc29ydGluZykgPyBgJiR7cXVlcnlTdHJpbmdpZnlOZXN0ZWRPYmplY3QoY29uZmlnLnNvcnRpbmcsICdzb3J0aW5nJyl9YCA6ICcnfSR7bm90RW1wdHlMZW5ndGgobWVyZ2VPYmopID8gYCYke3F1ZXJ5U3RyaW5naWZ5TmVzdGVkT2JqZWN0KG1lcmdlT2JqKX1gIDogJyd9YDtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgL2NhcnMtb24tc2FsZS9tYWxheXNpYT92aWV3PSR7Y29uZmlnLnZpZXd9JnBhZ2U9JHtjb25maWcucGFnZX0ke18uaXNQbGFpbk9iamVjdChjb25maWcuc29ydGluZykgJiYgIV8uaXNFbXB0eShjb25maWcuc29ydGluZykgPyBgJiR7cXVlcnlTdHJpbmdpZnlOZXN0ZWRPYmplY3QoY29uZmlnLnNvcnRpbmcsICdzb3J0aW5nJyl9YCA6ICcnfWA7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFBhcmFtZXRlclRvUHJvZHVjdExpc3RTZW9VcmwoZGF0YSkge1xuXG4gICAgbGV0IG1lcmdlT2JqID0gb2JqZWN0UmVtb3ZlRW1wdHlWYWx1ZShkYXRhKTtcbiAgICBsZXQgYmFzZVBhdGggPSBjaGVja0VudlJldHVybkNtc1VybChjbGllbnQuaW8uaW8udXJpKTs7XG5cblxuICAgIGlmIChub3RFbXB0eUxlbmd0aChtZXJnZU9iaikpIHtcbiAgICAgICAgbWVyZ2VPYmogPSBfLnBpY2sobWVyZ2VPYmosIGF2YWlsYWJsZUZpbHRlcnMpO1xuICAgICAgICBsZXQgY29uZGl0aW9uID0gbWVyZ2VPYmouY29uZGl0aW9uO1xuICAgICAgICBsZXQgbWFrZSA9IG1lcmdlT2JqLm1ha2U7XG4gICAgICAgIGxldCBtb2RlbCA9IG1lcmdlT2JqLm1vZGVsO1xuICAgICAgICBsZXQgc3RhdGUgPSBtZXJnZU9iai5zdGF0ZTtcbiAgICAgICAgbGV0IGFyZWEgPSBtZXJnZU9iai5hcmVhO1xuXG5cblxuICAgICAgICBpZiAoY29uZGl0aW9uICYmIGNvbmRpdGlvbiAhPSAnY2Fycy1vbi1zYWxlJyAmJiBjb25kaXRpb24gIT0gJ2FsbCcpIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbiA9IFtfLnRvTG93ZXIoY29uZGl0aW9uKSwgJ2NhcnMtb24tc2FsZSddLmpvaW4oJy0nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbiA9ICdjYXJzLW9uLXNhbGUnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXRlICYmIHN0YXRlICE9ICdtYWxheXNpYScpIHtcbiAgICAgICAgICAgIGlmIChhcmVhICYmIHN0YXRlICE9ICdtYWxheXNpYScpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IFsnbWFsYXlzaWEnLCBfLnRvTG93ZXIobWVyZ2VPYmouc3RhdGUpLCBfLnRvTG93ZXIobWVyZ2VPYmouYXJlYSldLmpvaW4oJ18nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBbJ21hbGF5c2lhJywgXy50b0xvd2VyKG1lcmdlT2JqLnN0YXRlKV0uam9pbignXycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGUgPSAnbWFsYXlzaWEnO1xuICAgICAgICB9XG5cblxuXG4gICAgICAgIC8vTWFpbiBwYXJhbWV0ZXJcbiAgICAgICAgLy9PcmRlciBpcyBpbXBvcnRhbnRcbiAgICAgICAgLy9UaGUgZmlyc3QgMSBhbHdheXMgaXMgY29uZGl0aW9uXG4gICAgICAgIC8vVGhlIGxhc3QgMSBhbHdheXMgaXMgc3RhdGVcbiAgICAgICAgbGV0IG1haW5QYXJhbWV0ZXJzID0gW21ha2UsIG1vZGVsXTtcbiAgICAgICAgbGV0IHBhdGggPSBgJHtiYXNlUGF0aH0vJHtjb25kaXRpb259YDtcblxuICAgICAgICBfLmZvckVhY2gobWFpblBhcmFtZXRlcnMsIGZ1bmN0aW9uIChwYXJhbWV0ZXIpIHtcbiAgICAgICAgICAgIGlmICghcGFyYW1ldGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IGAvJHtfLnRvTG93ZXIocGFyYW1ldGVyKX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgcGF0aCArPSBgLyR7c3RhdGV9YFxuICAgICAgICBkZWxldGUgbWVyZ2VPYmouY29uZGl0aW9uO1xuICAgICAgICBkZWxldGUgbWVyZ2VPYmoubWFrZTtcbiAgICAgICAgZGVsZXRlIG1lcmdlT2JqLm1vZGVsO1xuICAgICAgICBkZWxldGUgbWVyZ2VPYmouc3RhdGU7XG4gICAgICAgIHJldHVybiBgJHtwYXRofT8ke25vdEVtcHR5TGVuZ3RoKG1lcmdlT2JqKSA/IGAmJHtxdWVyeVN0cmluZ2lmeU5lc3RlZE9iamVjdChtZXJnZU9iail9YCA6ICcnfWA7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC9jYXJzLW9uLXNhbGUvbWFsYXlzaWFgO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3BJdGVtcyhkYXRhLCByYW5rLCBjb2wpIHtcbiAgICBpZiAoXy5pc0FycmF5KGRhdGEpICYmIG5vdEVtcHR5TGVuZ3RoKGRhdGEpKSB7XG4gICAgICAgIGlmICghaXNWYWxpZE51bWJlcihyYW5rKSkge1xuICAgICAgICAgICAgcmFuayA9IDM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByYW5rID0gcGFyc2VJbnQocmFuayk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGlja2VkRGF0YSA9IHNvcnRCeURlc2MoZGF0YSwgY29sKTtcbiAgICAgICAgcGlja2VkRGF0YSA9IF8uc2xpY2UocGlja2VkRGF0YSwgMCwgcmFuayk7XG4gICAgICAgIHJldHVybiBwaWNrZWREYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdG9DYW1lbENhc2UodmFsdWUsIHNlcGVyYXRvcikge1xuICAgIGlmICghdmFsdWUgfHwgIXZhbHVlLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghc2VwZXJhdG9yIHx8ICFzZXBlcmF0b3IudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgc2VwZXJhdG9yID0gJyAnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VwZXJhdG9yID0gc2VwZXJhdG9yLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnNwbGl0KHNlcGVyYXRvcik7XG4gICAgICAgIHZhbHVlID0gXy5tYXAodmFsdWUsIGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfLmNhcGl0YWxpemUoaXRlbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdmFsdWUuam9pbignJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9TbmFrZUNhc2UodmFsdWUsIHNlcGVyYXRvcikge1xuICAgIGlmICghdmFsdWUgfHwgIXZhbHVlLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghc2VwZXJhdG9yIHx8ICFzZXBlcmF0b3IudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgc2VwZXJhdG9yID0gJ18nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VwZXJhdG9yID0gc2VwZXJhdG9yLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnNwbGl0KCcnKVxuICAgICAgICBsZXQgZmluYWxEYXRhID0gW11cbiAgICAgICAgXy5mb3JFYWNoKHZhbHVlLCBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgZmluYWxEYXRhLnB1c2goXy5sb3dlckNhc2UoaXRlbSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIGlmIChpdGVtID09IF8udXBwZXJDYXNlKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsRGF0YS5wdXNoKHNlcGVyYXRvcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZmluYWxEYXRhLnB1c2goXy5sb3dlckNhc2UoaXRlbSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZpbmFsRGF0YS5qb2luKCcnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB2aWV3UG9ydCA9IHtcbiAgICB4czogNDgwLFxuICAgIHNtOiA1NzYsXG4gICAgbWQ6IDc2OCxcbiAgICBsZzogOTkyLFxuICAgIHhsOiAxMjAwLFxuICAgIHh4bDogMTYwMCxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJOYW1lKHVzZXIsIHR5cGUpIHtcbiAgICBpZiAoXy5pc1BsYWluT2JqZWN0KHVzZXIpICYmICFfLmlzRW1wdHkodXNlcikpIHtcbiAgICAgICAgbGV0IHVzZXJuYW1lID0gXy50cmltKF8uZ2V0KHVzZXIsIFsndXNlcm5hbWUnXSkgfHwgJycpO1xuICAgICAgICBsZXQgZnVsbE5hbWUgPSBfLnRyaW0oXy5nZXQodXNlciwgWydmdWxsTmFtZSddKSB8fCBgJHtfLmdldCh1c2VyLCBbJ2ZpcnN0TmFtZSddKSB8fCAnJ30gJHtfLmdldCh1c2VyLCBbJ2xhc3ROYW1lJ10pIHx8ICcnfWAgfHwgJycpO1xuICAgICAgICBsZXQgZmlyc3ROYW1lID0gXy50cmltKF8uZ2V0KHVzZXIsIFsnZmlyc3ROYW1lJ10pIHx8ICcnKTtcbiAgICAgICAgbGV0IGxhc3ROYW1lID0gXy50cmltKF8uZ2V0KHVzZXIsIFsnbGFzdE5hbWUnXSkgfHwgJycpO1xuICAgICAgICBsZXQgbmFtZVByZWZpeCA9IF8udHJpbShfLmdldCh1c2VyLCBbJ25hbWVQcmVmaXgnXSkgfHwgJycpO1xuICAgICAgICBsZXQgZnJlYWtJZCA9IF8udHJpbShfLmdldCh1c2VyLCBbJ2ZyZWFrSWQnXSkgfHwgJycpO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAndXNlcm5hbWUnOlxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VybmFtZTtcbiAgICAgICAgICAgIGNhc2UgJ2Z1bGxOYW1lJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVsbE5hbWU7XG4gICAgICAgICAgICBjYXNlICdwcmVmaXhOYW1lJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXy50cmltKGAke25hbWVQcmVmaXggPyBgJHtuYW1lUHJlZml4fWAgOiAnJ30gJHtmdWxsTmFtZSB8fCAnJ31gKTtcbiAgICAgICAgICAgIGNhc2UgJ2ZpcnN0TmFtZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpcnN0TmFtZTtcbiAgICAgICAgICAgIGNhc2UgJ2xhc3ROYW1lJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbGFzdE5hbWU7XG4gICAgICAgICAgICBjYXNlICdmcmVha0lkJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJlYWtJZDtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bGxOYW1lO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdDY2FyIFVzZXInXG4gICAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQbHVyYWwoc2luZ3VsYXIsIHBsdXJhbCwgY291bnQsIHNob3dDb3VudCkge1xuICAgIGlmIChzaW5ndWxhciAmJiBpc1ZhbGlkTnVtYmVyKHBhcnNlSW50KGNvdW50KSkpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGNvdW50KSA+IDEgP1xuICAgICAgICAgICAgc2hvd0NvdW50ID9cbiAgICAgICAgICAgICAgICBgJHtjb3VudH0gJHtwbHVyYWwgfHwgc2luZ3VsYXIgKyAncyd9YFxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICBgJHtwbHVyYWwgfHwgc2luZ3VsYXIgKyAncyd9YFxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgc2hvd0NvdW50ID9cbiAgICAgICAgICAgICAgICBgJHtmb3JtYXROdW1iZXIoY291bnQsICdhdXRvJywgdHJ1ZSwgMCwgdHJ1ZSl9ICR7c2luZ3VsYXJ9YFxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICBgJHtzaW5ndWxhcn1gXG5cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEluZGV4ZXNPZlN0cmluZyh0ZXh0LCBzZWFyY2gpIHtcbiAgICBpZiAodGV4dCAmJiBzZWFyY2gpIHtcbiAgICAgICAgbGV0IGluZGV4ZXMgPSBbXTtcbiAgICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IDA7XG4gICAgICAgIHdoaWxlIChjdXJyZW50UG9zaXRpb24gPCB0ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uID0gdGV4dC5pbmRleE9mKHNlYXJjaCwgY3VycmVudFBvc2l0aW9uKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UG9zaXRpb24gPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gPSB0ZXh0Lmxlbmd0aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGN1cnJlbnRQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uICsgc2VhcmNoLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrT2JqZWN0SWQoZGF0YSwgaWRGb3JDaGVjaywgY29sKSB7XG4gICAgaWYgKF8uaXNQbGFpbk9iamVjdChkYXRhKSAmJiAhXy5pc0VtcHR5KGRhdGEpKSB7XG4gICAgICAgIHJldHVybiBkYXRhW2Ake2NvbCB8fCAnX2lkJ31gXSA9PSBpZEZvckNoZWNrO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkYXRhID09IGlkRm9yQ2hlY2s7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2JqZWN0SWQoZGF0YSwgY29sKSB7XG4gICAgaWYgKF8uaXNQbGFpbk9iamVjdChkYXRhKSAmJiAhXy5pc0VtcHR5KGRhdGEpKSB7XG4gICAgICAgIHJldHVybiBkYXRhW2Ake2NvbCB8fCAnX2lkJ31gXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYXJNYXJrZXRTZW9EYXRhKGZpbHRlckdyb3VwLCB0b3RhbCkge1xuXG4gICAgaWYgKCFfLmlzUGxhaW5PYmplY3QoZmlsdGVyR3JvdXApKSB7XG4gICAgICAgIGZpbHRlckdyb3VwID0ge307XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZmlsdGVyR3JvdXAgPSBfLmNsb25lRGVlcChmaWx0ZXJHcm91cClcbiAgICB9XG5cbiAgICBsZXQgdGl0bGUgPSBbXTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBbXTtcbiAgICBsZXQgbG9jYXRpb24gPSBbXTtcbiAgICBsZXQgcmFuZ2VGaWx0ZXIgPSBbXTtcbiAgICBsZXQgb3RoZXJGaWx0ZXIgPSBbXTtcbiAgICBpZiAoXy5nZXQoZmlsdGVyR3JvdXAsICdzdGF0ZScpIHx8IF8uZ2V0KGZpbHRlckdyb3VwLCAnYXJlYScpKSB7XG4gICAgICAgIGxvY2F0aW9uLnB1c2goYCR7Xy5jYXBpdGFsaXplKF8uZ2V0KGZpbHRlckdyb3VwLCAnYXJlYScpIHx8ICcnKX1gKTtcbiAgICAgICAgbG9jYXRpb24ucHVzaChgJHtfLmdldChnZXRTdGF0ZShmaWx0ZXJHcm91cC5zdGF0ZSksICd2YWx1ZScpIHx8ICcnfWApO1xuICAgIH1cbiAgICBsb2NhdGlvbi5wdXNoKCdNYWxheXNpYScpO1xuICAgIGxvY2F0aW9uID0gXy5jb21wYWN0KGxvY2F0aW9uKS5qb2luKCcgJyk7XG5cbiAgICBjb25zdCBmaWx0ZXJSYW5nZXMgPSBbJ3ByaWNlJywgJ21pbGVhZ2UnLCAnZW5naW5lQ2FwYWNpdHknLCAneWVhciddO1xuICAgIF8uZm9yRWFjaChmaWx0ZXJSYW5nZXMsIGZ1bmN0aW9uIChmaWx0ZXJSYW5nZSkge1xuICAgICAgICBpZiAoZmlsdGVyR3JvdXBbZmlsdGVyUmFuZ2UgKyAnUmFuZ2UnXSkge1xuICAgICAgICAgICAgcmFuZ2VGaWx0ZXIucHVzaChgJHtfLmNhcGl0YWxpemUodG9TbmFrZUNhc2UoZmlsdGVyUmFuZ2UsICcgJykpfSAke2NvbnZlcnRSYW5nZUZvcm1hdFRvVGV4dChjb252ZXJ0VG9SYW5nZUZvcm1hdChmaWx0ZXJHcm91cFtmaWx0ZXJSYW5nZSArICdSYW5nZSddKSwgZmlsdGVyUmFuZ2UpfWApO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGlmIChmaWx0ZXJHcm91cC5ib2R5VHlwZSkge1xuICAgICAgICBvdGhlckZpbHRlci5wdXNoKF8uY2FwaXRhbGl6ZShfLmdldChnZXRCb2R5VHlwZShmaWx0ZXJHcm91cC5ib2R5VHlwZSksICd2YWx1ZScpIHx8ICcnKSk7XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlckdyb3VwLmZ1ZWxUeXBlKSB7XG4gICAgICAgIG90aGVyRmlsdGVyLnB1c2goXy5jYXBpdGFsaXplKF8uZ2V0KGdldEZ1ZWxUeXBlKGZpbHRlckdyb3VwLmZ1ZWxUeXBlKSwgJ3ZhbHVlJykgfHwgJycpKTtcbiAgICB9XG5cbiAgICBpZiAoZmlsdGVyR3JvdXAuY29sb3IpIHtcbiAgICAgICAgb3RoZXJGaWx0ZXIucHVzaChgQ29sb3IgJHtfLmNhcGl0YWxpemUoXy5nZXQoZ2V0Q29sb3IoZmlsdGVyR3JvdXAuY29sb3IpLCAndmFsdWUnKSB8fCAnJyl9YCk7XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlckdyb3VwLnJlZ2lzdHJhdGlvblVybCkge1xuICAgICAgICBvdGhlckZpbHRlci5wdXNoKGBXaXRoIFJlZ2lzdHJhdGlvbiBVcmxgKTtcbiAgICB9XG5cbiAgICBpZiAoZmlsdGVyR3JvdXAucmVhZHlTdG9jaykge1xuICAgICAgICBvdGhlckZpbHRlci5wdXNoKGBJcyBSZWFkeSBTdG9ja2ApO1xuICAgIH1cblxuICAgIGlmIChmaWx0ZXJHcm91cC5jYXIzNjBWaWV3KSB7XG4gICAgICAgIG90aGVyRmlsdGVyLnB1c2goYFdpdGggQ2FyIDM2MCBWaWV3YCk7XG4gICAgfVxuXG4gICAgb3RoZXJGaWx0ZXIgPSBfLmNvbmNhdChvdGhlckZpbHRlciwgcmFuZ2VGaWx0ZXIpLmpvaW4oJywgJyk7XG5cbiAgICB0aXRsZS5wdXNoKGBTZWFyY2ggJHtmb3JtYXROdW1iZXIodG90YWwpIHx8IDB9YCk7XG4gICAgaWYgKGZpbHRlckdyb3VwLnRpdGxlKSB7XG4gICAgICAgIHRpdGxlLnB1c2goXy5jYXBpdGFsaXplKGZpbHRlckdyb3VwLnRpdGxlKSk7XG4gICAgICAgIHRpdGxlLnB1c2goXy5jYXBpdGFsaXplKGZpbHRlckdyb3VwLnRpdGxlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGl0bGUucHVzaChgJHtfLmdldChnZXRDYXJCcmFuZChfLmdldChmaWx0ZXJHcm91cCwgJ21ha2UnKSksICd2YWx1ZScpIHx8ICcnfWApO1xuICAgICAgICB0aXRsZS5wdXNoKGAke18uY2FwaXRhbGl6ZShfLmdldChmaWx0ZXJHcm91cCwgJ21vZGVsJykgfHwgJycpfWApO1xuICAgIH1cblxuICAgIHRpdGxlLnB1c2goXy5jYXBpdGFsaXplKGZpbHRlckdyb3VwLmNvbmRpdGlvbiB8fCAnJykpO1xuICAgIHRpdGxlLnB1c2goXy5jYXBpdGFsaXplKGZpbHRlckdyb3VwLnRyYW5zbWlzc2lvbiB8fCAnJykpO1xuICAgIGRlc2NyaXB0aW9uID0gXy5jbG9uZURlZXAodGl0bGUpO1xuICAgIHRpdGxlLnB1c2goYENhcnMgZm9yIFNhbGVzIGluICR7bG9jYXRpb259IC0gQ0NBUi5teSAjMSBDYXIgU29jaWFsIFBsYXRmb3JtLmApO1xuICAgIHRpdGxlID0gXy5jb21wYWN0KHRpdGxlKTtcbiAgICB0aXRsZSA9IHRpdGxlLmpvaW4oJyAnKTtcblxuICAgIGRlc2NyaXB0aW9uLnB1c2goYENhcnMgZm9yIFNhbGVzIGluICR7bG9jYXRpb259JHtvdGhlckZpbHRlciA/ICcuJyA6ICcnfWApO1xuICAgIGRlc2NyaXB0aW9uLnB1c2gob3RoZXJGaWx0ZXIpXG4gICAgZGVzY3JpcHRpb24ucHVzaCgnLSBDQ0FSLm15ICMxIENhciBTb2NpYWwgUGxhdGZvcm0uJylcbiAgICBkZXNjcmlwdGlvbiA9IF8uY29tcGFjdChkZXNjcmlwdGlvbik7XG4gICAgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi5qb2luKCcgJyk7XG5cblxuICAgIGxldCBjYW5vbmljYWwgPSBjb252ZXJ0UGFyYW1ldGVyVG9Qcm9kdWN0TGlzdFNlb1VybChmaWx0ZXJHcm91cCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGNhbm9uaWNhbCxcbiAgICB9XG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvZmlsZVNlb0RhdGEocHJvZmlsZSkge1xuXG4gICAgaWYgKCFfLmlzUGxhaW5PYmplY3QocHJvZmlsZSkpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2ZpbGUgPSBfLmNsb25lRGVlcChwcm9maWxlKVxuICAgIH1cblxuICAgIGxldCB0aXRsZSA9IFtdO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IFtdO1xuXG4gICAgdGl0bGUucHVzaChgJHtnZXRVc2VyTmFtZShwcm9maWxlLCAnZnVsbE5hbWUnKSB8fCAnJ31gKTtcbiAgICB0aXRsZS5wdXNoKGAncyBQcm9maWxlIC0gQ0NBUi5teSAjMSBDYXIgU29jaWFsIFBsYXRmb3JtIGApO1xuICAgIHRpdGxlID0gXy5jb21wYWN0KHRpdGxlKTtcbiAgICB0aXRsZSA9IHRpdGxlLmpvaW4oJyAnKTtcblxuICAgIGRlc2NyaXB0aW9uLnB1c2goYCR7Z2V0VXNlck5hbWUocHJvZmlsZSwgJ2Z1bGxOYW1lJykgfHwgJyd9YCk7XG4gICAgZGVzY3JpcHRpb24ucHVzaChgaXMgb24gQ0NBUiAjMSBDYXIgU29jaWFsIFBsYXRmb3JtLiBDb21lIGFuZCBzaGFyZSBjYXIgaW5mbyB3aXRoICR7Z2V0VXNlck5hbWUocHJvZmlsZSwgJ2Z1bGxOYW1lJykgfHwgJyd9IGFuZCBvdGhlcnMuIENDQVIgY29ubmVjdHMgYWxsIGNhciBsb3ZlcnMgdG9nZXRoZXIuYClcbiAgICBkZXNjcmlwdGlvbiA9IF8uY29tcGFjdChkZXNjcmlwdGlvbik7XG4gICAgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi5qb2luKCcgJyk7XG5cblxuXG4gICAgbGV0IGNhbm9uaWNhbCA9IGAke2NoZWNrRW52UmV0dXJuQ21zVXJsKGNsaWVudC5pby5pby51cmkpfS9wcm9maWxlLyR7cHJvZmlsZS51c2VydXJsSWR9YDtcbiAgICBsZXQgaW1hZ2VzID0gW3tcbiAgICAgICAgdXJsOiBwcm9maWxlLmF2YXRhcixcbiAgICAgICAgYWx0OiAnQ0NBUiBVc2VyIFByb2ZpbGUgSW1hZ2UnXG4gICAgfV07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGNhbm9uaWNhbCxcbiAgICAgICAgaW1hZ2VzLFxuICAgIH1cblxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYXJGcmVha1Nlb0RhdGEoZGF0YSkge1xuXG4gICAgaWYgKCFfLmlzUGxhaW5PYmplY3QoZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEgPSBfLmNsb25lRGVlcChkYXRhKVxuICAgIH1cblxuICAgIGxldCB0aXRsZSA9IFtdO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IFtdO1xuXG4gICAgdGl0bGUucHVzaChgJHtwYXJzZVRhZ1N0cmluZ1RvUGxhaW5TdHJpbmcoZGF0YS50aXRsZSkgfHwgJyd9YCk7XG4gICAgdGl0bGUucHVzaChgfGApO1xuICAgIHRpdGxlLnB1c2goYENhckZyZWFrc2ApO1xuICAgIHRpdGxlLnB1c2goYC0gQ0NBUi5teSAjMSBDYXIgU29jaWFsIFBsYXRmb3JtYCk7XG4gICAgdGl0bGUgPSBfLmNvbXBhY3QodGl0bGUpO1xuICAgIHRpdGxlID0gdGl0bGUuam9pbignICcpO1xuXG4gICAgZGVzY3JpcHRpb24ucHVzaChgJHtwYXJzZVRhZ1N0cmluZ1RvUGxhaW5TdHJpbmcoZGF0YS5jb250ZW50KSB8fCAnJ31gKTtcbiAgICBpZiAoXy5pc1BsYWluT2JqZWN0KGRhdGEudXNlcklkKSAmJiAhXy5pc0VtcHR5KGRhdGEudXNlcklkKSkge1xuICAgICAgICBkZXNjcmlwdGlvbi5wdXNoKCd8Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnB1c2goYFBvc3RlZCBCeSAke2dldFVzZXJOYW1lKGRhdGEudXNlcklkLCAnZnVsbE5hbWUnKSB8fCAnJ31gKVxuICAgIH1cbiAgICBkZXNjcmlwdGlvbiA9IF8uY29tcGFjdChkZXNjcmlwdGlvbik7XG4gICAgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi5qb2luKCcgJyk7XG5cblxuXG4gICAgbGV0IGNhbm9uaWNhbCA9IGAke2NoZWNrRW52UmV0dXJuQ21zVXJsKGNsaWVudC5pby5pby51cmkpfS9jYXItZnJlYWtzLyR7ZGF0YS5faWR9YDtcbiAgICBsZXQgaW1hZ2VzID0gW3tcbiAgICAgICAgdXJsOiBfLmdldChkYXRhLCAnbWVkaWFMaXN0WzBdLnVybCcpIHx8ICcnLFxuICAgICAgICBhbHQ6ICdDQ0FSIENhckZyZWFrIEltYWdlJ1xuICAgIH1dO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBjYW5vbmljYWwsXG4gICAgICAgIGltYWdlcyxcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTb2NpYWxCb2FyZFNlb0RhdGEoZGF0YSkge1xuXG4gICAgaWYgKCFfLmlzUGxhaW5PYmplY3QoZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEgPSBfLmNsb25lRGVlcChkYXRhKVxuICAgIH1cblxuICAgIGxldCB0aXRsZSA9IFtdO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IFtdO1xuXG4gICAgdGl0bGUucHVzaChgJHtwYXJzZVRhZ1N0cmluZ1RvUGxhaW5TdHJpbmcoZGF0YS50aXRsZSkgfHwgJyd9YCk7XG4gICAgdGl0bGUucHVzaChgfGApO1xuICAgIHRpdGxlLnB1c2goYFNvY2lhbCBCb2FyZGApO1xuICAgIHRpdGxlLnB1c2goYC0gQ0NBUi5teSAjMSBDYXIgU29jaWFsIFBsYXRmb3JtYCk7XG4gICAgdGl0bGUgPSBfLmNvbXBhY3QodGl0bGUpO1xuICAgIHRpdGxlID0gdGl0bGUuam9pbignICcpO1xuXG4gICAgZGVzY3JpcHRpb24ucHVzaChgJHtwYXJzZVRhZ1N0cmluZ1RvUGxhaW5TdHJpbmcoZGF0YS5jb250ZW50KSB8fCAnJ31gKTtcbiAgICBpZiAoXy5pc1BsYWluT2JqZWN0KGRhdGEudXNlcklkKSAmJiAhXy5pc0VtcHR5KGRhdGEudXNlcklkKSkge1xuICAgICAgICBkZXNjcmlwdGlvbi5wdXNoKCd8Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnB1c2goYFBvc3RlZCBCeSAke2dldFVzZXJOYW1lKGRhdGEudXNlcklkLCAnZnVsbE5hbWUnKSB8fCAnJ31gKVxuICAgIH1cbiAgICBkZXNjcmlwdGlvbiA9IF8uY29tcGFjdChkZXNjcmlwdGlvbik7XG4gICAgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi5qb2luKCcgJyk7XG5cblxuXG4gICAgbGV0IGNhbm9uaWNhbCA9IGAke2NoZWNrRW52UmV0dXJuQ21zVXJsKGNsaWVudC5pby5pby51cmkpfS9zb2NpYWwtYm9hcmQvJHtkYXRhLl9pZH1gO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBjYW5vbmljYWwsXG4gICAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbHViU2VvRGF0YShkYXRhKSB7XG5cbiAgICBpZiAoIV8uaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YSA9IF8uY2xvbmVEZWVwKGRhdGEpXG4gICAgfVxuXG4gICAgbGV0IHRpdGxlID0gW107XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gW107XG5cbiAgICB0aXRsZS5wdXNoKGAke2RhdGEuY2x1Yk5hbWUgfHwgJyd9YCk7XG4gICAgdGl0bGUucHVzaChgfGApO1xuICAgIHRpdGxlLnB1c2goYFNvY2lhbCBDbHViYCk7XG4gICAgdGl0bGUucHVzaChgLSBDQ0FSLm15ICMxIENhciBTb2NpYWwgUGxhdGZvcm1gKTtcbiAgICB0aXRsZSA9IF8uY29tcGFjdCh0aXRsZSk7XG4gICAgdGl0bGUgPSB0aXRsZS5qb2luKCcgJyk7XG5cbiAgICBkZXNjcmlwdGlvbi5wdXNoKGAke2RhdGEuY2x1YkJpbyB8fCAnJ31gKTtcbiAgICBpZiAoXy5pc1BsYWluT2JqZWN0KGRhdGEudXNlcklkKSAmJiAhXy5pc0VtcHR5KGRhdGEudXNlcklkKSkge1xuICAgICAgICBkZXNjcmlwdGlvbi5wdXNoKCd8Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnB1c2goYENyZWF0ZWQgQnkgJHtnZXRVc2VyTmFtZShkYXRhLnVzZXJJZCwgJ2Z1bGxOYW1lJykgfHwgJyd9YClcbiAgICB9XG4gICAgZGVzY3JpcHRpb24gPSBfLmNvbXBhY3QoZGVzY3JpcHRpb24pO1xuICAgIGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24uam9pbignICcpO1xuXG5cblxuICAgIGxldCBjYW5vbmljYWwgPSBgJHtjaGVja0VudlJldHVybkNtc1VybChjbGllbnQuaW8uaW8udXJpKX0vc29jaWFsLWNsdWIvJHtkYXRhLl9pZH1gO1xuICAgIGxldCBpbWFnZXMgPSBbe1xuICAgICAgICB1cmw6IF8uZ2V0KGRhdGEsICdjbHViQXZhdGFyJykgfHwgJycsXG4gICAgICAgIGFsdDogJ0NDQVIgQ2FyRnJlYWsgSW1hZ2UnXG4gICAgfV07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGNhbm9uaWNhbCxcbiAgICAgICAgaW1hZ2VzLFxuICAgIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsTmV3Q2FyU2VvRGF0YShkYXRhKSB7XG5cbiAgICBpZiAoIV8uaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YSA9IF8uY2xvbmVEZWVwKGRhdGEpXG4gICAgfVxuXG4gICAgbGV0IHRpdGxlID0gW107XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gW107XG5cbiAgICB0aXRsZS5wdXNoKGAke2dldENhckJyYW5kKGRhdGEubWFrZSkudmFsdWUgfHwgJyd9YCk7XG4gICAgdGl0bGUucHVzaChgfGApO1xuICAgIHRpdGxlLnB1c2goYCR7Xy5jYXBpdGFsaXplKGRhdGEubW9kZWwgfHwgJycpfWApO1xuICAgIHRpdGxlLnB1c2goYHxgKTtcbiAgICB0aXRsZS5wdXNoKGBBbGwgTmV3IENhciAtIENDQVIubXkgIzEgQ2FyIFNvY2lhbCBQbGF0Zm9ybWApO1xuICAgIHRpdGxlID0gXy5jb21wYWN0KHRpdGxlKTtcbiAgICB0aXRsZSA9IHRpdGxlLmpvaW4oJyAnKTtcblxuICAgIGRlc2NyaXB0aW9uLnB1c2goYFZpZXcgJHtnZXRDYXJCcmFuZChkYXRhLm1ha2UpLnZhbHVlIHx8ICcnfSAke18uY2FwaXRhbGl6ZShkYXRhLm1vZGVsIHx8ICcnKX0gQWxsIE5ldyBDYXIgYXQgQ0NBUi5teSBub3cgLSBDQ0FSLm15ICMxIENhciBTb2NpYWwgUGxhdGZvcm0gIGApO1xuICAgIGRlc2NyaXB0aW9uID0gXy5jb21wYWN0KGRlc2NyaXB0aW9uKTtcbiAgICBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLmpvaW4oJyAnKTtcblxuXG5cbiAgICBsZXQgY2Fub25pY2FsID0gYCR7Y2hlY2tFbnZSZXR1cm5DbXNVcmwoY2xpZW50LmlvLmlvLnVyaSl9L25ld2Nhci9kZXRhaWxzLyR7ZGF0YS5tYWtlfS8ke2RhdGEubW9kZWx9YDtcbiAgICBsZXQgaW1hZ2VzID0gW3tcbiAgICAgICAgdXJsOiBfLmdldChkYXRhLCAndXJpJykgfHwgJycsXG4gICAgICAgIGFsdDogYENDQVIgJHtnZXRDYXJCcmFuZChkYXRhLm1ha2UpLnZhbHVlIHx8ICcnfSAke18uY2FwaXRhbGl6ZShkYXRhLm1vZGVsIHx8ICcnKX0gSW1hZ2VgXG4gICAgfV07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGNhbm9uaWNhbCxcbiAgICAgICAgaW1hZ2VzLFxuICAgIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGl2ZVNlb0RhdGEoZGF0YSkge1xuXG4gICAgY29uc3QgYXBpRG9tYWluID0gZ2V0U3RyZWFtVXJsKGNsaWVudC5pby5pby51cmkpXG5cbiAgICBpZiAoIV8uaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YSA9IF8uY2xvbmVEZWVwKGRhdGEpXG4gICAgfVxuXG4gICAgbGV0IHRpdGxlID0gW107XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gW107XG5cbiAgICB0aXRsZS5wdXNoKGBDQ0FSIExJVkVgKTtcbiAgICB0aXRsZS5wdXNoKGB8YCk7XG4gICAgdGl0bGUucHVzaChgJHtfLmNhcGl0YWxpemUoZGF0YS51c2VyIHx8ICdDY2FyIFVzZXInKX1gKTtcbiAgICB0aXRsZS5wdXNoKGAtIENDQVIubXkgIzEgQ2FyIFNvY2lhbCBQbGF0Zm9ybWApO1xuICAgIHRpdGxlID0gXy5jb21wYWN0KHRpdGxlKTtcbiAgICB0aXRsZSA9IHRpdGxlLmpvaW4oJyAnKTtcblxuICAgIGRlc2NyaXB0aW9uLnB1c2goZGF0YS50aXRsZSk7XG4gICAgZGVzY3JpcHRpb24ucHVzaChgVmlldyBDYXIgTGl2ZSBTdHJlYW1pbmcgYXQgQ0NBUi5teSBub3cgLSBDQ0FSLm15ICMxIENhciBTb2NpYWwgUGxhdGZvcm0gIGApO1xuICAgIGRlc2NyaXB0aW9uID0gXy5jb21wYWN0KGRlc2NyaXB0aW9uKTtcbiAgICBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLmpvaW4oJyAnKTtcblxuXG5cbiAgICBsZXQgY2Fub25pY2FsID0gYCR7Y2hlY2tFbnZSZXR1cm5DbXNVcmwoY2xpZW50LmlvLmlvLnVyaSl9L2xpdmUvJHtkYXRhLmlkfWA7XG4gICAgbGV0IGltYWdlcyA9IFt7XG4gICAgICAgIHVybDogYCR7YXBpRG9tYWlufWRlYWxlclZpZGVvVGh1bWJuYWlscy8ke2RhdGEuaWR9LnBuZ2AsXG4gICAgICAgIGFsdDogYExpdmUgU3RyZWFtaW5nIEltYWdlYFxuICAgIH1dO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBjYW5vbmljYWwsXG4gICAgICAgIGltYWdlcyxcbiAgICB9XG5cbn0iLCJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgZmluZEluZGV4ZXNPZlN0cmluZywgZ2V0T2JqZWN0SWQsIGNoZWNrT2JqZWN0SWQsIGdldFVzZXJOYW1lIH0gZnJvbSAnLi4vLi4vY29tbW9uLWZ1bmN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGNoYXRSZXN0cmljdFRpbWUgPSAyMDAwO1xuZXhwb3J0IGNvbnN0IGNhckZyZWFrR2xvYmFsU2VhcmNoID0gWydjYXJGcmVhaycsICdzb2NpYWxCb2FyZCcsICdjbHViJywgJ2RlYWxlcicsICdwZW9wbGUnXTtcbmV4cG9ydCBjb25zdCB0YWdQcmVmaXggPSAnQCc7XG5leHBvcnQgY29uc3QgaGFzaFRhZ1ByZWZpeCA9ICcjJztcbmV4cG9ydCBjb25zdCB0YWdQcmVmaXhIYXNoVmFsdWUgPSAnQH4jfTpzdGFydCc7XG5leHBvcnQgY29uc3QgaGFzaFRhZ1ByZWZpeEhhc2hWYWx1ZSA9ICcjXjohJXN0YXJ0JztcbmV4cG9ydCBjb25zdCB0YWdTdWZmaXhIYXNoVmFsdWUgPSAnQF5AfX1lbmQnO1xuZXhwb3J0IGNvbnN0IGhhc2hUYWdTdWZmaXhIYXNoVmFsdWUgPSAnIz5efX5lbmQnO1xuZXhwb3J0IGNvbnN0IHNlcGVyYXRvckhhc2hWYWx1ZSA9ICddPCVzZXBlcmF0b3I+ITtfJztcbmV4cG9ydCBjb25zdCBjbHViUHJvZmlsZVZpZXdUeXBlcyA9IFsnYWRtaW4nLCAnbWVtYmVyJywgJ3BlbmRpbmcnLCAnbm9uLW1lbWJlciddO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRhZ1N0cmluZ1RvQXJyYXkodGV4dCkge1xuICAgIGlmICh0ZXh0KSB7XG4gICAgICAgIGxldCBmaW5hbFRleHQgPSBbXTtcbiAgICAgICAgbGV0IHRhZ1RleHQgPSB0ZXh0LnNwbGl0KHRhZ1N1ZmZpeEhhc2hWYWx1ZSk7XG4gICAgICAgIHRhZ1RleHQgPSBfLmZvckVhY2godGFnVGV4dCwgZnVuY3Rpb24gKGNoYXIpIHtcblxuICAgICAgICAgICAgaWYgKGNoYXIuaW5jbHVkZXModGFnUHJlZml4SGFzaFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGNoYXIgPSBjaGFyLnNwbGl0KHRhZ1ByZWZpeEhhc2hWYWx1ZSk7XG4gICAgICAgICAgICAgICAgLy9zcGxpdCBwcmVmaXggLCB0aGUgcHJldmlvdXMgMSBzdXJlIGlzIG90aGVyIHRleHRcbiAgICAgICAgICAgICAgICBpZiAoY2hhclswXSAhPSBudWxsICYmIGNoYXJbMF0gIT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9DaGVjayBpZiBvdGhlciB0ZXh0IGdvdCBoYXNodGFnXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFyWzBdLmluY2x1ZGVzKGhhc2hUYWdQcmVmaXhIYXNoVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGFzaFRhZ0FyciA9IHBhcnNlSGFzaFRhZ1N0cmluZ1RvQXJyYXkoY2hhclswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFRleHQgPSBmaW5hbFRleHQuY29uY2F0KGhhc2hUYWdBcnIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxUZXh0LnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9ybWFsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNoYXJbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL3NwbGl0IHByZWZpeCAsIHRoZSBhZnRlciAxIHN1cmUgaXMgdGFnIHRleHRcbiAgICAgICAgICAgICAgICBpZiAoY2hhclsxXSAhPSBudWxsICYmIGNoYXJbMV0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJbMV0gPSBjaGFyWzFdLnNwbGl0KHNlcGVyYXRvckhhc2hWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsVGV4dC5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0YWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjaGFyWzFdWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBjaGFyWzFdWzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGhhc2hUYWdBcnIgPSBwYXJzZUhhc2hUYWdTdHJpbmdUb0FycmF5KGNoYXIpO1xuICAgICAgICAgICAgICAgIGZpbmFsVGV4dCA9IGZpbmFsVGV4dC5jb25jYXQoaGFzaFRhZ0Fycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gZmluYWxUZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VIYXNoVGFnU3RyaW5nVG9BcnJheSh0ZXh0KSB7XG4gICAgaWYgKHRleHQpIHtcbiAgICAgICAgbGV0IGZpbmFsVGV4dCA9IFtdO1xuICAgICAgICBsZXQgdGFnVGV4dCA9IHRleHQuc3BsaXQoaGFzaFRhZ1N1ZmZpeEhhc2hWYWx1ZSk7XG4gICAgICAgIHRhZ1RleHQgPSBfLmZvckVhY2godGFnVGV4dCwgZnVuY3Rpb24gKGNoYXIpIHtcblxuICAgICAgICAgICAgaWYgKGNoYXIuaW5jbHVkZXMoaGFzaFRhZ1ByZWZpeEhhc2hWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBjaGFyID0gY2hhci5zcGxpdChoYXNoVGFnUHJlZml4SGFzaFZhbHVlKTtcbiAgICAgICAgICAgICAgICAvL3NwbGl0IHByZWZpeCAsIHRoZSBwcmV2aW91cyAxIHN1cmUgaXMgb3RoZXIgdGV4dFxuICAgICAgICAgICAgICAgIGlmIChjaGFyWzBdICE9IG51bGwgJiYgY2hhclswXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmluYWxUZXh0LnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vcm1hbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNoYXJbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9zcGxpdCBwcmVmaXggLCB0aGUgYWZ0ZXIgMSBzdXJlIGlzIHRhZyB0ZXh0XG4gICAgICAgICAgICAgICAgaWYgKGNoYXJbMV0gIT0gbnVsbCAmJiBjaGFyWzFdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFyWzFdID0gY2hhclsxXS5zcGxpdChzZXBlcmF0b3JIYXNoVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBmaW5hbFRleHQucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGFzaFRhZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNoYXJbMV1bMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGNoYXJbMV1bMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIGZpbmFsVGV4dC5wdXNoKFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9ybWFsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjaGFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGZpbmFsVGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFnU3RyaW5nKHRleHQsIGlkLCBwcmVmaXgpIHtcbiAgICBpZiAodGV4dCAmJiBpZCkge1xuICAgICAgICBsZXQgY29kZVByZWZpeCA9IHByZWZpeCA9PSAnIycgPyBoYXNoVGFnUHJlZml4SGFzaFZhbHVlIDogdGFnUHJlZml4SGFzaFZhbHVlO1xuICAgICAgICBsZXQgY29kZVN1ZmZpeCA9IHByZWZpeCA9PSAnIycgPyBoYXNoVGFnU3VmZml4SGFzaFZhbHVlIDogdGFnU3VmZml4SGFzaFZhbHVlO1xuICAgICAgICByZXR1cm4gYCR7Y29kZVByZWZpeH0ke3RleHQgfHwgJyd9JHtzZXBlcmF0b3JIYXNoVmFsdWV9JHtpZCB8fCAnJ30ke2NvZGVTdWZmaXh9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRvVGFnU3RyaW5nKHRleHQsIGFsaWFzQ29kZSkge1xuXG4gICAgaWYgKHRleHQgJiYgXy5pc0FycmF5KGFsaWFzQ29kZSkgJiYgIV8uaXNFbXB0eShhbGlhc0NvZGUpKSB7XG4gICAgICAgIGxldCBmaW5hbFRleHQgPSB0ZXh0O1xuICAgICAgICBsZXQgc29ydGVkQWxpYXNDb2RlID0gXy5yZXZlcnNlKF8uc29ydEJ5KGFsaWFzQ29kZSwgWydwb3NpdGlvbiddKSlcbiAgICAgICAgXy5mb3JFYWNoKHNvcnRlZEFsaWFzQ29kZSwgZnVuY3Rpb24gKGNvZGUpIHtcbiAgICAgICAgICAgIGxldCBuYW1lID0gY29kZS5uYW1lO1xuICAgICAgICAgICAgbGV0IGluZGV4ZXMgPSBmaW5kSW5kZXhlc09mU3RyaW5nKGZpbmFsVGV4dCwgbmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChfLmluY2x1ZGVzKGluZGV4ZXMsIGNvZGUucG9zaXRpb24pKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByZVRleHQgPSBmaW5hbFRleHQuc3Vic3RyKDAsIGNvZGUucG9zaXRpb24pIHx8ICcnO1xuICAgICAgICAgICAgICAgIGxldCBwb3N0VGV4dCA9IGZpbmFsVGV4dC5zdWJzdHIoY29kZS5wb3NpdGlvbiArIG5hbWUubGVuZ3RoKSB8fCAnJztcbiAgICAgICAgICAgICAgICBmaW5hbFRleHQgPSBwcmVUZXh0ICsgY29kZS52YWx1ZSArIHBvc3RUZXh0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBmaW5hbFRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxpYXNDb2RlRnJvbVRleHQodGV4dCkge1xuXG4gICAgaWYgKHRleHQpIHtcblxuICAgICAgICBsZXQgYWxpYXNDb2RlID0gW107XG4gICAgICAgIGxldCBzdHJ1Y3RlZFRleHQgPSAnJztcbiAgICAgICAgbGV0IHRleHRBcnIgPSBwYXJzZVRhZ1N0cmluZ1RvQXJyYXkodGV4dCk7XG4gICAgICAgIHRleHRBcnIgPSBfLm1hcCh0ZXh0QXJyLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSAhPSAndGFnJyAmJiBpdGVtLnR5cGUgIT0gJ2hhc2hUYWcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW0udWlkID0gYCR7djQoKX1gO1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBzdHJ1Y3RlZFRleHQgPSBfLmNvbXBhY3QoXy5tYXAodGV4dEFyciwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgIT0gJ3RhZycgJiYgaXRlbS50eXBlICE9ICdoYXNoVGFnJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7aXRlbS51aWR9JHtpdGVtLnZhbHVlfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcblxuICAgICAgICBzdHJ1Y3RlZFRleHQgPSBzdHJ1Y3RlZFRleHQuam9pbignJyk7XG5cblxuICAgICAgICBfLmZvckVhY2godGV4dEFyciwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT0gJ3RhZycgfHwgaXRlbS50eXBlID09ICdoYXNoVGFnJykge1xuICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IHN0cnVjdGVkVGV4dC5pbmRleE9mKGl0ZW0udWlkKTtcbiAgICAgICAgICAgICAgICBzdHJ1Y3RlZFRleHQgPSBzdHJ1Y3RlZFRleHQucmVwbGFjZShpdGVtLnVpZCwgJycpO1xuICAgICAgICAgICAgICAgIGFsaWFzQ29kZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYCR7aXRlbS50eXBlID09ICd0YWcnID8gdGFnUHJlZml4SGFzaFZhbHVlIDogaGFzaFRhZ1ByZWZpeEhhc2hWYWx1ZX0ke2l0ZW0udmFsdWUgfHwgJyd9JHtzZXBlcmF0b3JIYXNoVmFsdWV9JHtpdGVtLmlkIHx8ICcnfSR7aXRlbS50eXBlID09ICd0YWcnID8gdGFnU3VmZml4SGFzaFZhbHVlIDogaGFzaFRhZ1N1ZmZpeEhhc2hWYWx1ZX1gLFxuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IGl0ZW0udHlwZSA9PSAndGFnJyA/IHRhZ1ByZWZpeCA6IGhhc2hUYWdQcmVmaXgsXG4gICAgICAgICAgICAgICAgICAgIGVuZFBvc2l0aW9uOiBwb3NpdGlvbiArIGl0ZW0udmFsdWUubGVuZ3RoIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogaXRlbS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGFsaWFzQ29kZTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRhZ1N0cmluZ1RvUGxhaW5TdHJpbmcodGV4dCkge1xuXG4gICAgaWYgKHRleHQpIHtcbiAgICAgICAgbGV0IHRleHRBcnIgPSBwYXJzZVRhZ1N0cmluZ1RvQXJyYXkodGV4dCk7XG4gICAgICAgIHRleHRBcnIgPSBfLm1hcCh0ZXh0QXJyLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udmFsdWU7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHRleHRBcnIuam9pbignJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0TmFtZVN0cmluZyh1c2VycywgYXV0aFVzZXIpIHtcbiAgICBpZiAoXy5pc0FycmF5KHVzZXJzKSAmJiAhXy5pc0VtcHR5KHVzZXJzKSkge1xuXG4gICAgICAgIGxldCB0ZXh0ID0gJyc7XG4gICAgICAgIGxldCBjb3VudCA9IDM7XG4gICAgICAgIGlmIChnZXRPYmplY3RJZChhdXRoVXNlcikpIHtcbiAgICAgICAgICAgIHVzZXJzID0gXy5maWx0ZXIodXNlcnMsIGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrT2JqZWN0SWQodXNlciwgZ2V0T2JqZWN0SWQoYXV0aFVzZXIpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBfLmZvckVhY2godXNlcnMsIGZ1bmN0aW9uICh1c2VyLCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ICsgMSA9PSB1c2Vycy5sZW5ndGggJiYgdXNlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHRleHQgKz0gYCBhbmQgJHtnZXRVc2VyTmFtZSh1c2VyLCAnZnVsbE5hbWUnKX1gXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW5kZXggKyAxID4gY291bnQpIHtcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IGAgYW5kICR7dXNlcnMubGVuZ3RoIC0gY291bnR9IG90aGVyc2BcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGV4dCArPSBgJHtnZXRVc2VyTmFtZSh1c2VyLCAnZnVsbE5hbWUnKX1gXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IGAsICR7Z2V0VXNlck5hbWUodXNlciwgJ2Z1bGxOYW1lJyl9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnQ2NhciBVc2VyJztcbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZpZXdUeXBlKGpvaW4pIHtcblxuICAgIGlmIChfLmlzUGxhaW5PYmplY3Qoam9pbikgJiYgIV8uaXNFbXB0eShqb2luKSkge1xuICAgICAgICBpZiAoXy5nZXQoam9pbiwgWydzdGF0dXMnXSkgPT0gJ2FwcHJvdmVkJyAmJiBfLmdldChqb2luLCBbJ3JvbGUnXSkgPT0gJ2FkbWluJykge1xuICAgICAgICAgICAgcmV0dXJuIGNsdWJQcm9maWxlVmlld1R5cGVzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uZ2V0KGpvaW4sIFsnc3RhdHVzJ10pID09ICdhcHByb3ZlZCcgJiYgXy5nZXQoam9pbiwgWydyb2xlJ10pID09ICdtZW1iZXInKSB7XG4gICAgICAgICAgICByZXR1cm4gY2x1YlByb2ZpbGVWaWV3VHlwZXNbMV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5nZXQoam9pbiwgWydzdGF0dXMnXSkgPT0gJ3BlbmRpbmcnICYmIF8uZ2V0KGpvaW4sIFsncm9sZSddKSA9PSAnbWVtYmVyJykge1xuICAgICAgICAgICAgcmV0dXJuIGNsdWJQcm9maWxlVmlld1R5cGVzWzJdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNsdWJQcm9maWxlVmlld1R5cGVzWzNdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjbHViUHJvZmlsZVZpZXdUeXBlc1szXTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlVmlld1R5cGUoZGF0YSkge1xuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIHJldHVybiBjbHViUHJvZmlsZVZpZXdUeXBlc1szXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXy5maW5kKGNsdWJQcm9maWxlVmlld1R5cGVzLCBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGUgPT0gZGF0YTtcbiAgICAgICAgfSkgfHwgY2x1YlByb2ZpbGVWaWV3VHlwZXNbM107XG4gICAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uLCBhbmltYXRlZCB9IGZyb20gXCJyZWFjdC1zcHJpbmdcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VSb3V0ZXJcIjtcblxuXG5cbmV4cG9ydCBjb25zdCBQYWdlVHJhbnNpdGlvbiA9ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB0cmFuc2l0aW9ucyA9IHVzZVRyYW5zaXRpb24ocm91dGVyLCByb3V0ZXIgPT4gcm91dGVyLnBhdGhuYW1lLCB7XG4gICAgZnJvbTogeyBvcGFjaXR5OiAwIH0sXG4gICAgZW50ZXI6IHsgb3BhY2l0eTogMSB9LFxuICAgIGxlYXZlOiB7XG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgdG9wOiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgb3BhY2l0eTogMFxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3RyYW5zaXRpb25zLm1hcCgoeyBpdGVtLCBwcm9wczogc3R5bGUsIGtleSB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFBhZ2Uga2V5PXtrZXl9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9QYWdlPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBQYWdlID0gc3R5bGVkKGFuaW1hdGVkLm1haW4pYFxuICBtaW4taGVpZ2h0OiAxMDAlO1xuYDtcbiIsIlxuXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaXNWYWxpZE51bWJlciwgdG9DYW1lbENhc2UsIG5vdEVtcHR5TGVuZ3RoLCBnZXRUb3BJdGVtcyAgfSBmcm9tICcuLi8uLi9jb21tb24tZnVuY3Rpb24nO1xuXG5cbmV4cG9ydCBjb25zdCB0ZXN0U3RyZWFtVXJsID0gJ2h0dHBzOi8vc3RyZWFtLXVhdDIuY2Nhci5teSc7XG5leHBvcnQgY29uc3QgbGl2ZVN0cmVhbVVybCA9ICdodHRwczovL3N0cmVhbS5jY2FyLm15JztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmVhbVVybCh1cmwpe1xuXG4gICAgbGV0IHN0cmVhbSA9IHRlc3RTdHJlYW1Vcmw7XG4gICAgaWYgKHVybD09PSdodHRwOi8vbG9jYWxob3N0OjMwMzAvJyl7c3RyZWFtID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAzMCd9XG4gICAgZWxzZSBpZiAodXJsPT09J2h0dHBzOi8vdWF0Mi1hcGkuY2Nhci5teS8nKXtzdHJlYW0gPSB0ZXN0U3RyZWFtVXJsfVxuICAgIGVsc2UgaWYgKHVybD09PSdodHRwczovL2FwaS5jY2FyLm15Lycpe3N0cmVhbSA9IGxpdmVTdHJlYW1Vcmx9XG4gICAgZWxzZSBpZiAodXJsPT09J2h0dHBzOi8vcHJlcHJvZC1hcGkuY2Nhci5teS8nKXtzdHJlYW0gPSB0ZXN0U3RyZWFtVXJsfVxuICAgIGVsc2UgIHtzdHJlYW0gPSAnaHR0cDovL2xvY2FsaG9zdDozMDMwJ30gLy9kZWZhdWx0IHRlc3RpbmdcbiAgICBcbiAgICAvLyByZXR1cm4gJ2h0dHA6Ly8xOTIuMTY4LjAuMTkxOjcwNzAvJztcbiAgICAvLyByZXR1cm4gXCJodHRwczovL3N0cmVhbS11YXQyLmNjYXIubXlcIjtcbiAgICAvLyByZXR1cm4gJ2h0dHA6Ly9sb2NhbGhvc3Q6NzA3MC8nO1xuICAgIC8vIHJldHVybiAnaHR0cDovLzE5Mi4xNjguMC4xNDk6MzA0MS8nO1xuICAgIHJldHVybiBzdHJlYW07XG59XG5cblxuY29uc3QgZ2lmdHMgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiAna29waS1pY2UnLFxuICAgICAgICBwcmljZTogMTAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICd3aGl0ZS1yaWNlJyxcbiAgICAgICAgcHJpY2U6IDEwLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAncm90aS1jYW5haScsXG4gICAgICAgIHByaWNlOiAyMCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ25hc2ktbGVtYWsnLFxuICAgICAgICBwcmljZTogMjAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICduYXNpLWthbmRhcicsXG4gICAgICAgIHByaWNlOiA1MCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ3JhbWx5LWJ1cmdlcicsXG4gICAgICAgIHByaWNlOiA1MCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ2RpbXN1bScsXG4gICAgICAgIHByaWNlOiAxMDAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdiaXJ5YW5pJyxcbiAgICAgICAgcHJpY2U6IDEwMCxcbiAgICB9LFxuXTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0UmVhY3Rpb25zID0gWydsaWtlJywgJ2hlYXJ0JywgJ2xhdWdoaW5nJywgJ2NyeWluZycsICdhbmdyeScsICdzbGVlcGluZycsICdyb2xsaW5nRXllJ107XG5leHBvcnQgY29uc3QgZGVmYXVsdFJlYWN0aW9uc0FuaW1hdGlvbiA9IFsnbm9uZScsICdsZWFzdCcsICdsZXNzJywgJ25vcm1hbCcsICdtb3JlJywgJ21vc3QnXTtcblxuXG5sZXQgdGVtcCA9IHt9O1xuXy5mb3JFYWNoKGRlZmF1bHRSZWFjdGlvbnMsIGZ1bmN0aW9uIChyZWFjdCkge1xuICAgIHRlbXBbYCR7cmVhY3R9R2lmYF0gPSBgL2Fzc2V0cy9saXZlLyR7cmVhY3R9LmdpZmA7XG59KVxuXG5leHBvcnQgY29uc3QgcmVhY3Rpb25HaWYgPSB0ZW1wO1xuXG5cbnRlbXAgPSBbXTtcbnRlbXAgPSBfLm1hcChnaWZ0cywgZnVuY3Rpb24gKGdpZnQpIHtcbiAgICBnaWZ0Lmljb24gPSBgL2Fzc2V0cy9saXZlLyR7Z2lmdC5uYW1lfS5wbmdgO1xuICAgIGdpZnQubmFtZSA9IHRvQ2FtZWxDYXNlKGdpZnQubmFtZSwgJy0nKTtcbiAgICByZXR1cm4gZ2lmdDtcbn0pXG5leHBvcnQgY29uc3QgZGVmYXVsdEdpZnRzID0gdGVtcDtcblxuZXhwb3J0IGNvbnN0IGxpdmVJY29uID0gJy9hc3NldHMvbGl2ZS9saXZlLnBuZyc7XG5leHBvcnQgY29uc3Qgc3VwcG9ydEljb24gPSAnL2Fzc2V0cy9saXZlL3N1cHBvcnQucG5nJztcbmV4cG9ydCBjb25zdCBsaWtlSWNvbiA9ICcvYXNzZXRzL2xpdmUvbGlrZS5wbmcnO1xuZXhwb3J0IGNvbnN0IGNvbW1lbnRJY29uID0gJy9hc3NldHMvbGl2ZS9jb21tZW50LnBuZyc7XG5leHBvcnQgY29uc3Qgc2hhcmVJY29uID0gJy9hc3NldHMvbGl2ZS9zaGFyZS5wbmcnO1xuZXhwb3J0IGNvbnN0IGdpZnRHaWYgPSAnL2Fzc2V0cy9saXZlL2dpZnQuZ2lmJztcbmV4cG9ydCBjb25zdCBjY29pbkljb24gPSAnL2Fzc2V0cy9saXZlL2Njb2luLnBuZyc7XG5cblxuZXhwb3J0IGNvbnN0IHJlYWN0aW9uQW5pbWF0aW9uVHJhbnNpdGlvbnMgPSBnZW5lcmF0ZVJhbmRvbVRyYW5zaXRpb24oMzAsIDQwMCwgNCwgNCk7XG5cbmV4cG9ydCBjb25zdCBMSVZFX1RFWFRfVEVNUExBVEUgPSB7XG4gICAgJ2NsaWVudC1qb2luZWQnOiAnaGFzIGpvaW5lZCcsXG4gICAgJ2NsaWVudC1sZWZ0JzogJ2hhcyBsZWZ0JyxcbiAgICAnY2xpZW50LXRleHQnOiAnJywgXG4gICAgJ2RlYWxlci10ZXh0JzogJycsXG4gICAgXCJhbm9ueW1vdXMtam9pbmVkXCI6ICdoYXMgam9pbmVkJyxcbiAgICBcImFub255bW91cy1sZWZ0XCI6J2hhcyBsZWZ0JyxcbiAgfVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21UcmFuc2l0aW9uKG1heFRyYW5zaXRpb25YLCBtYXhUcmFuc2l0aW9uWSwgZWFjaFRyYW5zaXRpb25MZW5ndGgsIGdyb3VwKSB7XG5cbiAgICBsZXQgcmVhY3Rpb25BbmltYXRpb25UcmFuc2l0aW9uc1RlbXAgPSBbXTtcbiAgICBsZXQgZWFjaFRyYW5zaXRpb24gPSBbXTtcblxuICAgIGlmICghaXNWYWxpZE51bWJlcihtYXhUcmFuc2l0aW9uWCkpIHtcbiAgICAgICAgbWF4VHJhbnNpdGlvblggPSAzMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtYXhUcmFuc2l0aW9uWCA9IHBhcnNlSW50KG1heFRyYW5zaXRpb25YKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzVmFsaWROdW1iZXIobWF4VHJhbnNpdGlvblkpKSB7XG4gICAgICAgIG1heFRyYW5zaXRpb25ZID0gNDAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1heFRyYW5zaXRpb25ZID0gcGFyc2VJbnQobWF4VHJhbnNpdGlvblkpO1xuICAgIH1cblxuICAgIGlmICghaXNWYWxpZE51bWJlcihlYWNoVHJhbnNpdGlvbkxlbmd0aCkgfHwgcGFyc2VJbnQoZWFjaFRyYW5zaXRpb25MZW5ndGgpIDwgNCkge1xuICAgICAgICBlYWNoVHJhbnNpdGlvbkxlbmd0aCA9IDQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWFjaFRyYW5zaXRpb25MZW5ndGggPSBwYXJzZUludChlYWNoVHJhbnNpdGlvbkxlbmd0aCk7XG4gICAgfVxuXG4gICAgaWYgKCFpc1ZhbGlkTnVtYmVyKGdyb3VwKSB8fCBwYXJzZUludChncm91cCkgPCAwKSB7XG4gICAgICAgIGdyb3VwID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBncm91cCA9IHBhcnNlSW50KGdyb3VwKTtcbiAgICB9XG5cbiAgICBfLmZvckVhY2goXy5yYW5nZShncm91cCksIGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBlYWNoVHJhbnNpdGlvbi5wdXNoKHsgeDogMCwgeTogMCB9KTtcbiAgICAgICAgXy5mb3JFYWNoKF8ucmFuZ2UoZWFjaFRyYW5zaXRpb25MZW5ndGggLSAyKSwgZnVuY3Rpb24gKGluZGV4MSkge1xuICAgICAgICAgICAgZWFjaFRyYW5zaXRpb24ucHVzaCh7IHg6IF8ucmFuZG9tKC1tYXhUcmFuc2l0aW9uWCwgbWF4VHJhbnNpdGlvblgsIGZhbHNlKSwgeTogLShtYXhUcmFuc2l0aW9uWSAvIChlYWNoVHJhbnNpdGlvbkxlbmd0aCAtIGluZGV4MSkpIH0pO1xuICAgICAgICB9KVxuICAgICAgICBlYWNoVHJhbnNpdGlvbi5wdXNoKHsgeDogMCwgeTogLW1heFRyYW5zaXRpb25ZIH0pO1xuICAgICAgICByZWFjdGlvbkFuaW1hdGlvblRyYW5zaXRpb25zVGVtcC5wdXNoKGVhY2hUcmFuc2l0aW9uKTtcbiAgICAgICAgZWFjaFRyYW5zaXRpb24gPSBbXTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlYWN0aW9uQW5pbWF0aW9uVHJhbnNpdGlvbnNUZW1wO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3RhbFJlYWN0aW9ucyhyZWFjdGlvbnMpIHtcblxuXG4gICAgaWYgKF8uaXNBcnJheShyZWFjdGlvbnMpICYmIG5vdEVtcHR5TGVuZ3RoKHJlYWN0aW9ucykpIHtcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcbiAgICAgICAgXy5mb3JFYWNoKHJlYWN0aW9ucywgZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAoIV8uaXNOYU4ocGFyc2VJbnQocmVhY3Rpb24udG90YWwpKSkge1xuICAgICAgICAgICAgICAgIHRvdGFsICs9IHBhcnNlSW50KHJlYWN0aW9uLnRvdGFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gdG90YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9wUmVhY3Rpb25zKHJlYWN0aW9ucywgcmFuaykge1xuXG4gICAgaWYgKF8uaXNBcnJheShyZWFjdGlvbnMpICYmIG5vdEVtcHR5TGVuZ3RoKHJlYWN0aW9ucykpIHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkTnVtYmVyKHJhbmspKSB7XG4gICAgICAgICAgICByYW5rID0gMztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJhbmsgPSBwYXJzZUludChyYW5rKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vZmlsdGVyIG91dCByZWFjdGlvbiBub3QgaW4gbGlzdFxuICAgICAgICBsZXQgZmlsdGVyZWREYXRhID0gXy5jb21wYWN0KF8ubWFwKHJlYWN0aW9ucywgZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAoXy5pbmRleE9mKGRlZmF1bHRSZWFjdGlvbnMsIHJlYWN0aW9uLnR5cGUpICE9IC0xICYmIGlzVmFsaWROdW1iZXIocmVhY3Rpb24udG90YWwpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWN0aW9uO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuXG4gICAgICAgIC8vZ2V0IHRvcCByZWFjdGlvbnNcbiAgICAgICAgZmlsdGVyZWREYXRhID0gZ2V0VG9wSXRlbXMoZmlsdGVyZWREYXRhLCByYW5rLCAndG90YWwnKTtcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkRGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPZmZlcihzb2NrZXQsIGJyb2FkY2FzdGVyKSB7XG5cbiAgICBpZiAoISFicm9hZGNhc3RlciAmJiAhIXNvY2tldCkge1xuXG4gICAgICAgIGNvbnN0IHBjX2NvbmZpZyA9IHtcbiAgICAgICAgICAgIGljZVNlcnZlcnM6IFt7XG4gICAgICAgICAgICAgIHVybHM6IFsgXCJzdHVuOnNzLXR1cm4yLnhpcnN5cy5jb21cIiBdXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgdXNlcm5hbWU6IFwiSzdSWUpRMGlPODZJelUtcGFhNmd1WHhmTEo3dlhXaEZ3Zld6RTNYODgtTE9zVDBRTjR2cXV3QVV4MXZzSkptcUFBQUFBRi15ZXpCalkyRnlNekV6TVE9PVwiLFxuICAgICAgICAgICAgICBjcmVkZW50aWFsOiBcImE1ZTMxYjE2LTI4MGQtMTFlYi04OWUzLTAyNDJhYzE0MDAwNFwiLFxuICAgICAgICAgICAgICB1cmxzOiBbXG4gICAgICAgICAgICAgICAgICBcInR1cm46c3MtdHVybjIueGlyc3lzLmNvbTo4MD90cmFuc3BvcnQ9dWRwXCIsXG4gICAgICAgICAgICAgICAgICBcInR1cm46c3MtdHVybjIueGlyc3lzLmNvbTozNDc4P3RyYW5zcG9ydD11ZHBcIixcbiAgICAgICAgICAgICAgICAgIFwidHVybjpzcy10dXJuMi54aXJzeXMuY29tOjgwP3RyYW5zcG9ydD10Y3BcIixcbiAgICAgICAgICAgICAgICAgIFwidHVybjpzcy10dXJuMi54aXJzeXMuY29tOjM0Nzg/dHJhbnNwb3J0PXRjcFwiLFxuICAgICAgICAgICAgICAgICAgXCJ0dXJuczpzcy10dXJuMi54aXJzeXMuY29tOjQ0Mz90cmFuc3BvcnQ9dGNwXCIsXG4gICAgICAgICAgICAgICAgICBcInR1cm5zOnNzLXR1cm4yLnhpcnN5cy5jb206NTM0OT90cmFuc3BvcnQ9dGNwXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICB9XVxuICAgICAgICAgIH1cblxuICAgICAgICBicm9hZGNhc3Rlci5wZWVyQ29ubmVjdGlvbiA9IG5ldyBSVENQZWVyQ29ubmVjdGlvbihwY19jb25maWcpXG5cbiAgICAgICAgYnJvYWRjYXN0ZXIucGVlckNvbm5lY3Rpb24uY3JlYXRlT2ZmZXIoe1xuICAgICAgICAgICAgb2ZmZXJUb1JlY2VpdmVWaWRlbzogMSxcbiAgICAgICAgICAgIC8vZm9yIGF1ZGlvXG4gICAgICAgICAgICBvZmZlclRvUmVjZWl2ZUF1ZGlvOiAxXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihzZHAgPT4ge1xuICAgICAgICAgICAgICAgIGJyb2FkY2FzdGVyLnBlZXJDb25uZWN0aW9uLnNldExvY2FsRGVzY3JpcHRpb24oc2RwKTtcbiBcbiAgICAgICAgICAgICAgICBzZW5kVG9QZWVyKHNvY2tldCwgJ2NsaWVudFJlcXVlc3RWaWRlb1dpdGhEZWFsZXJTb2NrZXRJZCcsIHsgc2RwLCBkZWFsZXJTb2NrZXRJZDogYnJvYWRjYXN0ZXIuZGVhbGVyU29ja2V0SWQgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJyb2FkY2FzdGVyO1xuICAgICAgICAgICAgfSkuY2F0Y2goeCA9PiB7XG4gXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29mZmVyIGZhaWxlZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZW5kVG9QZWVyKHNvY2tldCwgbWVzc2FnZVR5cGUsIHBheWxvYWQpIHtcblxuICAgIGlmICghIXNvY2tldCkge1xuICAgICAgICBzb2NrZXQuZW1pdChtZXNzYWdlVHlwZSwge1xuICAgICAgICAgICAgc2VuZGVySWQ6IHNvY2tldC5pZCxcbiAgICAgICAgICAgIHBheWxvYWRcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZVRoZVBlZXJDb25uZWN0aW9uKHNvY2tldCwgcGVlckNvbm5lY3Rpb24sIHByZXZpb3VzRGVhbGVyU29ja2V0SWQpIHtcbiAgICBpZiAoISFwZWVyQ29ubmVjdGlvbiAmJiAhIXNvY2tldCAmJiAhIXByZXZpb3VzRGVhbGVyU29ja2V0SWQpIHtcbiAgICAgICAgcGVlckNvbm5lY3Rpb24uY2xvc2UoKTtcbiAgICAgICAgc29ja2V0LmVtaXQoJ2Nsb3NlQ2xpZW50U29ja2V0JywgcHJldmlvdXNEZWFsZXJTb2NrZXRJZCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3luY1JlYWN0aW9uU3VtbWFyeShyZWFjdGlvbkxvZ3MpIHtcbiAgICBsZXQgcmVhY3Rpb25TdW1tYXJ5ID0gXy5tYXAoZGVmYXVsdFJlYWN0aW9ucywgZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiByZWFjdGlvbixcbiAgICAgICAgICAgIHRvdGFsOiAwLFxuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKF8uaXNBcnJheShyZWFjdGlvbkxvZ3MpICYmIG5vdEVtcHR5TGVuZ3RoKHJlYWN0aW9uTG9ncykpIHtcbiAgICAgICAgcmVhY3Rpb25TdW1tYXJ5ID0gXy5tYXAocmVhY3Rpb25TdW1tYXJ5LCBmdW5jdGlvbiAoc3VtbWFyeSkge1xuXG4gICAgICAgICAgICBsZXQgbG9ncyA9IF8uZmlsdGVyKHJlYWN0aW9uTG9ncywgWyd0eXBlJywgc3VtbWFyeS50eXBlXSk7XG4gICAgICAgICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgICAgICAgXy5mb3JFYWNoKGxvZ3MsIGZ1bmN0aW9uIChsb2cpIHtcbiAgICAgICAgICAgICAgICB0b3RhbCArPSBsb2cudG90YWw7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IHN1bW1hcnkudHlwZSxcbiAgICAgICAgICAgICAgICB0b3RhbDogdG90YWwsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlYWN0aW9uU3VtbWFyeTtcbn1cbiIsImltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcbmltcG9ydCBmZWF0aGVycyBmcm9tICdAZmVhdGhlcnNqcy9mZWF0aGVycyc7XG5pbXBvcnQgc29ja2V0aW8gZnJvbSAnQGZlYXRoZXJzanMvc29ja2V0aW8tY2xpZW50JztcbmltcG9ydCBhdXRoZW50aWNhdGlvbiBmcm9tICdAZmVhdGhlcnNqcy9hdXRoZW50aWNhdGlvbi1jbGllbnQnO1xuXG4vLyBjb25zdCBzb2NrZXQgPSBpbygnaHR0cDovL2xvY2FsaG9zdDozMDMwLycpOyAgIC8vIGxvY2FsL1xuLy8gY29uc3Qgc29ja2V0ID0gaW8oJ2h0dHBzOi8vdWF0Mi1hcGkuY2Nhci5teS8nKTsgIC8vdWF0XG4vLyBjb25zdCBzb2NrZXQgPSBpbygnaHR0cHM6Ly9hcGkuY2Nhci5teS8nKTsgICAvLyBsaXZlXG5jb25zdCBzb2NrZXQgPSBpbygnaHR0cHM6Ly9wcmVwcm9kLWFwaS5jY2FyLm15LycpOyAgIC8vIGxpdmVcbiBcbmNvbnN0IGNsaWVudCA9IGZlYXRoZXJzKCk7XG5cbmNsaWVudC5jb25maWd1cmUoc29ja2V0aW8oc29ja2V0KSwgeyBwaW5nVGltZU91dDogNjAwMDAgfSk7XG4vLyBjbGllbnQuY29uZmlndXJlKGF1dGhlbnRpY2F0aW9uKHtcbi8vICAgc3RvcmFnZTogd2luZG93LmxvY2FsU3RvcmFnZVxuLy8gfSkpO1xuY2xpZW50LmNvbmZpZ3VyZShhdXRoZW50aWNhdGlvbigpKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50OyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRNb25leShhbW91bnQsIGRlY2ltYWxDb3VudCA9IDIsIGRlY2ltYWwgPSBcIi5cIiwgdGhvdXNhbmRzID0gXCIsXCIpIHtcbiAgICB0cnkge1xuICAgICAgZGVjaW1hbENvdW50ID0gTWF0aC5hYnMoZGVjaW1hbENvdW50KTtcbiAgICAgIGRlY2ltYWxDb3VudCA9IGlzTmFOKGRlY2ltYWxDb3VudCkgPyAyIDogZGVjaW1hbENvdW50O1xuICBcbiAgICAgIGNvbnN0IG5lZ2F0aXZlU2lnbiA9IGFtb3VudCA8IDAgPyBcIi1cIiA6IFwiXCI7XG4gIFxuICAgICAgbGV0IGkgPSBwYXJzZUludChhbW91bnQgPSBNYXRoLmFicyhOdW1iZXIoYW1vdW50KSB8fCAwKS50b0ZpeGVkKGRlY2ltYWxDb3VudCkpLnRvU3RyaW5nKCk7XG4gICAgICBsZXQgaiA9IChpLmxlbmd0aCA+IDMpID8gaS5sZW5ndGggJSAzIDogMDtcbiAgXG4gICAgICByZXR1cm4gbmVnYXRpdmVTaWduICsgKGogPyBpLnN1YnN0cigwLCBqKSArIHRob3VzYW5kcyA6ICcnKSArIGkuc3Vic3RyKGopLnJlcGxhY2UoLyhcXGR7M30pKD89XFxkKS9nLCBcIiQxXCIgKyB0aG91c2FuZHMpICsgKGRlY2ltYWxDb3VudCA/IGRlY2ltYWwgKyBNYXRoLmFicyhhbW91bnQgLSBpKS50b0ZpeGVkKGRlY2ltYWxDb3VudCkuc2xpY2UoMikgOiBcIlwiKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gXG4gICAgfVxuICB9O1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsTW9udGgodil7XG4gICAgbGV0IExvYW5BbW91bnQgPSB2KjAuOSAgLy8gMTAlIGRvd24gcGF5bWVudFxuICAgIGxldCBMb2FuUGVyaW9kID0gOVxuICAgIGxldCBJbnRlcmVzdCA9IDNcbiAgICBsZXQgdG90YWxJbnRlcmVzdCA9IEludGVyZXN0LzEwMCAqIExvYW5BbW91bnQgKiBMb2FuUGVyaW9kXG4gICAgbGV0IG1vbnRobHlJbnRlcmVzdCA9IHRvdGFsSW50ZXJlc3QgLyAoTG9hblBlcmlvZCAqIDEyKVxuICAgIGxldCBtb250aGx5SW5zdGFsbWVudCA9IChMb2FuQW1vdW50ICsgdG90YWxJbnRlcmVzdCkgLyAoTG9hblBlcmlvZCAqIDEyKVxuICAgIHJldHVybiBtb250aGx5SW5zdGFsbWVudFxuICB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXROdW1iZXIoYW1vdW50KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKGFtb3VudCkgPiA5OTkgPyBNYXRoLnNpZ24oYW1vdW50KSAqICgoTWF0aC5hYnMoYW1vdW50KSAvIDEwMDApLnRvRml4ZWQoMSkpIDogTWF0aC5zaWduKGFtb3VudCkgKiBNYXRoLmFicyhhbW91bnQpXG4gIH0gY2F0Y2ggKGUpIHtcbiBcbiAgfVxufTtcblxuXG4gXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmFjZUJvb2tJZCh1cmwpIHtcbiBcbiAgbGV0IGFwcElkID0nJ1xuXG4vLyBhcHBJZD1cIjY5NDQ1ODkwMTI4MzM5MVwiIC8vZmFyYVxuLy8gYXBwSWQ9XCIyNzU0ODQ1MjcxNTA5NDhcIlxuLy8gIGFwcElkPVwiNjE2MTczMDI5MzE4MTM0XCIgLy9zaWFuZ3Npb25nXG4vLyBhcHBJZD1cIjc0NzE3ODAxMjc1MzQxMFwiIC8vbGl2ZVxuLy8gYXBwSWQ9XCIxODUyMjkwODYwNzkxODlcIi8vbG9jYWwgOjMwMDEgLS1jZiAgICAgXG4vLyBhcHBJZD1cIjcwMzczMTEwNzIxNjk3OVwiIC8vdWF0MiAtLWNmICBcblxuICBpZiAodXJsPT09J2h0dHA6Ly9sb2NhbGhvc3Q6MzAzMC8nKXthcHBJZCA9ICc2MTYxNzMwMjkzMTgxMzQnfVxuICBlbHNlIGlmICh1cmw9PT0naHR0cHM6Ly91YXQyLWFwaS5jY2FyLm15Lycpe2FwcElkID0gJzcwMzczMTEwNzIxNjk3OSd9XG4gIGVsc2UgaWYgKHVybD09PSdodHRwczovL2FwaS5jY2FyLm15Lycpe2FwcElkID0gJzc0NzE3ODAxMjc1MzQxMCd9XG4gIGVsc2UgaWYgKHVybD09PSdodHRwczovL3ByZXByb2QtYXBpLmNjYXIubXkvJyl7YXBwSWQgPSAnNjk0NDU4OTAxMjgzMzkxJ31cbiAgZWxzZSAge2FwcElkID0gJzY5NDQ1ODkwMTI4MzM5MSd9IC8vZGVmYXVsdCBwcm9kXG5cbiAgcmV0dXJuICBhcHBJZFxuXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0R29vZ2xlSWQodXJsKSB7XG4gXG4gIGxldCBjbGllbnRJZCA9JydcblxuICAvLyBjbGllbnRJZD1cIjgyNzE0Nzk4NjQzMC1lMjhjNjNxZnRqOTFzcDUwNnI4a20ydjFzbmNjbnQzNi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiIC8vIGxpdmVcbiAgLy8gY2xpZW50SWQ9XCIxODI5MjQxMTkwNDQtNTNrM2c4Y3V2NDV1NWo2N2N0aWNldnZvMTVnNzg0NmkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIi8vdWF0MlxuXG4gIGlmICh1cmw9PT0naHR0cDovL2xvY2FsaG9zdDozMDMwLycpe2NsaWVudElkID0gJzE4MjkyNDExOTA0NC01M2szZzhjdXY0NXU1ajY3Y3RpY2V2dm8xNWc3ODQ2aS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSd9XG4gIGVsc2UgaWYgKHVybD09PSdodHRwczovL3ByZXByb2QtYXBpLmNjYXIubXkvJyl7Y2xpZW50SWQgPSAnMTgyOTI0MTE5MDQ0LTUzazNnOGN1djQ1dTVqNjdjdGljZXZ2bzE1Zzc4NDZpLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJ31cbiAgZWxzZSBpZiAodXJsPT09J2h0dHBzOi8vdWF0Mi1hcGkuY2Nhci5teS8nKXtjbGllbnRJZCA9ICcxODI5MjQxMTkwNDQtNTNrM2c4Y3V2NDV1NWo2N2N0aWNldnZvMTVnNzg0NmkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nfVxuICBlbHNlIGlmICh1cmw9PT0naHR0cHM6Ly9wcmVwcm9kLWFwaS5jY2FyLm15Lycpe2NsaWVudElkID0gJzE4MjkyNDExOTA0NC01M2szZzhjdXY0NXU1ajY3Y3RpY2V2dm8xNWc3ODQ2aS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSd9XG4gIGVsc2UgaWYgKHVybD09PSdodHRwczovL2FwaS5jY2FyLm15Lycpe2NsaWVudElkID0gJzgyNzE0Nzk4NjQzMC1lMjhjNjNxZnRqOTFzcDUwNnI4a20ydjFzbmNjbnQzNi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSd9XG4gIGVsc2Uge2NsaWVudElkID0gJzgyNzE0Nzk4NjQzMC1lMjhjNjNxZnRqOTFzcDUwNnI4a20ydjFzbmNjbnQzNi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSd9XG5cbiAgcmV0dXJuICBjbGllbnRJZFxuXG59O1xuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJNaWxlYWdlUmFuZ2UobWlsZWFnZSwgbWlsZWFnZTIpIHtcbiBcbiAgICBsZXQgbWlsZWFnZVJhbmdlID0gMCwgdXNlTWlsZWFnZSA9ICdubycsIHVzZU1pbGVhZ2UyID0gJ25vJ1xuXG4gICAgaWYgKG1pbGVhZ2UpIHtcbiAgICAgICAgaWYgKG1pbGVhZ2UgPiAwKSB7XG4gICAgICAgICAgICBtaWxlYWdlUmFuZ2UgPSBtaWxlYWdlXG4gICAgICAgICAgICB1c2VNaWxlYWdlID0gJ3llcydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtaWxlYWdlMikge1xuICAgICAgICBpZiAobWlsZWFnZTIgPiAwKSB7XG4gICAgICAgICAgICBtaWxlYWdlUmFuZ2UgPSBtaWxlYWdlMlxuICAgICAgICAgICAgdXNlTWlsZWFnZTIgPSAneWVzJ1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG1pbGVhZ2VSYW5nZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG1pbGVhZ2VSYW5nZSA9IHBhcnNlRmxvYXQobWlsZWFnZVJhbmdlKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHsgcmV0dXJuIG1pbGVhZ2VSYW5nZSB9XG4gICAgfVxuXG4gICAgaWYgKHVzZU1pbGVhZ2UgPT09ICd5ZXMnKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBtaWxlYWdlUmFuZ2UgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBsZXQgbWlsZWFnZUZyb20gPSAobWlsZWFnZVJhbmdlIC0gMjUwMCkgLyAxMDAwXG4gICAgICAgICAgICBsZXQgbWlsZWFnZVRvID0gKG1pbGVhZ2VSYW5nZSArIDI1MDApIC8gMTAwMFxuICAgICAgICAgICAgbWlsZWFnZVJhbmdlID0gbWlsZWFnZUZyb20gKyAnLScgKyBtaWxlYWdlVG8gKyAnSyBLTSdcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5pc0VtcHR5KG1pbGVhZ2VSYW5nZSkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIG1pbGVhZ2VSYW5nZSA9ICcwIEtNJ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaWxlYWdlUmFuZ2VcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG1pbGVhZ2VSYW5nZSA9IG1pbGVhZ2VSYW5nZSAvIDEwMDBcbiAgICAgICAgcmV0dXJuIG1pbGVhZ2VSYW5nZSArICcgS00nXG4gICAgfVxuIFxufTtcblxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tFbnYodXJsKSB7XG4gIFxuICBsZXQgZW52ID0gJyc7XG4gIGlmICh1cmw9PT0naHR0cDovL2xvY2FsaG9zdDozMDMwLycpe2VudiA9ICdsb2NhbCd9XG4gIGVsc2UgaWYgKHVybD09PSdodHRwczovL3VhdDItYXBpLmNjYXIubXkvJyl7ZW52ID0gJ3VhdCd9XG4gIGVsc2UgaWYgKHVybD09PSdodHRwczovL3ByZXByb2QtYXBpLmNjYXIubXkvJyl7ZW52ID0gJ3ByZXByb2QnfVxuICBlbHNlIGlmICh1cmw9PT0naHR0cHM6Ly9hcGkuY2Nhci5teS8nKXtlbnYgPSAncHJvZCd9XG4gIGVsc2UgIHtlbnY9J3Byb2QnfSBcbiAgcmV0dXJuICBlbnZcblxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRW52UmV0dXJuV2ViQWRtaW4odXJsKSB7XG4gIFxuICBsZXQgZnJvbnRFbmRVcmwgPScnXG5cbiAgaWYgKHVybD09PSdodHRwOi8vbG9jYWxob3N0OjMwMzAvJylcbiAge1xuICAgIGZyb250RW5kVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nXG4gIH1cbiAgZWxzZSBpZiAodXJsPT09J2h0dHBzOi8vdWF0Mi1hcGkuY2Nhci5teS8nKVxuICB7XG4gICAgZnJvbnRFbmRVcmwgPSAnaHR0cDovL3VhdDItYWRtLmNjYXIubXkvJ1xuICB9XG4gIGVsc2UgaWYgKHVybD09PSdodHRwczovL3ByZXByb2QtYXBpLmNjYXIubXkvJylcbiAge1xuICAgIGZyb250RW5kVXJsID0gJ2h0dHA6Ly9wcmVwcm9kLWFkbS5jY2FyLm15LydcbiAgfVxuICBlbHNlIGlmICh1cmw9PT0naHR0cHM6Ly9hcGkuY2Nhci5teS8nKVxuICB7XG4gICAgZnJvbnRFbmRVcmwgPSAnaHR0cHM6Ly9hZG0uY2Nhci5teS8nXG4gIH1cbiAgcmV0dXJuICBmcm9udEVuZFVybFxuXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tFbnZSZXR1cm5DbXNVcmwodXJsKSB7XG4gIFxuICBsZXQgZnJvbnRFbmRVcmwgPSdodHRwczovL3VhdDJzc3IuY2Nhci5teSdcblxuICBpZiAodXJsPT09J2h0dHA6Ly9sb2NhbGhvc3Q6MzAzMC8nKVxuICB7XG4gICAgZnJvbnRFbmRVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDExJ1xuICB9XG4gIGVsc2UgaWYgKHVybD09PSdodHRwczovL3VhdDItYXBpLmNjYXIubXkvJylcbiAge1xuICAgIGZyb250RW5kVXJsID0gJ2h0dHBzOi8vdWF0MnNzci5jY2FyLm15J1xuICB9XG4gIGVsc2UgaWYgKHVybD09PSdodHRwczovL3ByZXByb2QtYXBpLmNjYXIubXkvJylcbiAge1xuICAgIGZyb250RW5kVXJsID0gJ2h0dHBzOi8vcHJlcHJvZC1hcGkuY2Nhci5teSdcbiAgfVxuICBlbHNlIGlmICh1cmw9PT0naHR0cHM6Ly9hcGkuY2Nhci5teS8nKVxuICB7XG4gICAgZnJvbnRFbmRVcmwgPSAnaHR0cHM6Ly9jY2FyLm15J1xuICB9XG4gIHJldHVybiAgZnJvbnRFbmRVcmxcblxufTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBQcm92aWRlciA9ICh7IHJvdXRlciwgY2hpbGRyZW4gfSkgPT4gKFxuICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17cm91dGVyfT57Y2hpbGRyZW59PC9Db250ZXh0LlByb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGNvbnN0IHVzZVJvdXRlciA9ICgpID0+IHVzZUNvbnRleHQoQ29udGV4dCk7XG5leHBvcnQgY29uc3QgUm91dGVyQ29udGV4dFByb3ZpZGVyID0gd2l0aFJvdXRlcihQcm92aWRlcik7XG4iLCJleHBvcnQgY29uc3Qgd3JpdGVQb3N0SWNvbiA9ICcvYXNzZXRzL25ldy1jYXItc2NyZWVuL2NyZWF0ZS1wb3N0LnBuZydcbmV4cG9ydCBjb25zdCBpbWFnZU5vdEZvdW5kSWNvbiA9ICcvaW1hZ2Utbm90LWZvdW5kIGNvcHkucG5nJ1xuXG5cblxuZXhwb3J0IGNvbnN0IHJhY2VGbGFnSWNvbiA9ICcvcmFjZS1mbGFnLmpwZydcbmV4cG9ydCBjb25zdCBhbGxJY29uID0gJy9ncmlkLnN2ZydcblxuLy9DYXJGcmVha1xuZXhwb3J0IGNvbnN0IGNhckZyZWFrTGlrZUljb24gPSAnL2Fzc2V0cy9jYXItZnJlYWsvY2FyZnJlYWtzLWxpa2UucG5nJ1xuZXhwb3J0IGNvbnN0IGNhckZyZWFrTGlrZUdyZXlJY29uID0gJy9hc3NldHMvY2FyLWZyZWFrL2NhcmZyZWFrcy1saWtlLWdyZXkucG5nJ1xuZXhwb3J0IGNvbnN0IGNhckZyZWFrQ29tbWVudEljb24gPSAnL2Fzc2V0cy9jYXItZnJlYWsvY29tbWVudC5zdmcnXG5leHBvcnQgY29uc3QgZm9sbG93aW5nR3JleUljb24gPSAnL2Fzc2V0cy9jYXItZnJlYWsvZm9sbG93LWdyZXkucG5nJ1xuZXhwb3J0IGNvbnN0IGZvbGxvd2luZ1llbGxvd0ljb24gPSAnL2Fzc2V0cy9jYXItZnJlYWsvZm9sbG93LXllbGxvdy5wbmcnXG5leHBvcnQgY29uc3QgZWFydGhHcmV5SWNvbiA9ICcvYXNzZXRzL2Nhci1mcmVhay9wdWJsaWMtZ3JleS5wbmcnXG5leHBvcnQgY29uc3QgZWFydGhZZWxsb3dJY29uID0gJy9hc3NldHMvY2FyLWZyZWFrL3B1YmxpYy15ZWxsb3cucG5nJ1xuZXhwb3J0IGNvbnN0IGNsdWJOb25NZW1iZXIgPSAnL2Fzc2V0cy9jYXItZnJlYWsvbm9uLW1lbWJlci5wbmcnXG5leHBvcnQgY29uc3QgdXBsb2FkUGhvdG8gPSAnL2Fzc2V0cy91cGxvYWRfcGhvdG8ucG5nJztcbmV4cG9ydCBjb25zdCBjYWxlbmRhckljb24gPSAnL2Fzc2V0cy9jYXItZnJlYWsvY2FsZW5kYXIucG5nJztcbmV4cG9ydCBjb25zdCBwaW5JY29uID0gJy9hc3NldHMvY2FyLWZyZWFrL3Bpbi5wbmcnO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUNhckZyZWFrSWNvbiA9ICcvYXNzZXRzL2Nhci1mcmVhay9DYXJGcmVha3MucG5nJztcbmV4cG9ydCBjb25zdCBjcmVhdGVTb2NpYWxCb2FyZEljb24gPSAnL2Fzc2V0cy9jYXItZnJlYWsvc29jaWFsLWJvYXJkLnBuZyc7XG5leHBvcnQgY29uc3QgY2FyRnJlYWtSZXBseUljb24gPSAnL2Fzc2V0cy9jYXItZnJlYWsvcmVwbHkucG5nJztcblxuLy9DYXIgTWFya2V0XG5leHBvcnQgY29uc3QgY2Fyc3BlY05vdEZvdW5kSW1hZ2UgPSAnL2NvbWluZy1zb29uLnBuZydcbmV4cG9ydCBjb25zdCBmbGFtZVJlZCA9ICcvYXNzZXRzL0Nhckxpc3RpbmdJY29uL0ZpcmUtMDQoTm9TaGFkb3cpLmdpZidcbmV4cG9ydCBjb25zdCBmbGFtZVJlZFNoYWRvdyA9ICcvYXNzZXRzL0Nhckxpc3RpbmdJY29uL0ZpcmUtMDQuZ2lmJ1xuZXhwb3J0IGNvbnN0IGZsYW1lID0gJy9hc3NldHMvY2FyRGV0YWlscy9mbGFtZS5naWYnXG5leHBvcnQgY29uc3Qgc29sZE91dEljb24gPSAnL3NvbGQgb3V0QDN4LnBuZydcbmV4cG9ydCBjb25zdCByYXlhRmxhbWUgPSAnL2Fzc2V0cy9wcm9kdWN0TGlzdC9GbGFtZV8wMS5naWYnXG5leHBvcnQgY29uc3QgcmF5YUZvb2QgPSAnL2Fzc2V0cy9wcm9kdWN0TGlzdC9Gb29kKEZpbmFsKV8xLmdpZidcbmV4cG9ydCBjb25zdCByYXlhTGFtcCA9ICcvYXNzZXRzL3Byb2R1Y3RMaXN0L0xhbXBfRmluYWxfLmdpZidcbmV4cG9ydCBjb25zdCByYXlhTW9zcXVlID0gJy9hc3NldHMvcHJvZHVjdExpc3QvTW9zcXVlKEZpbmFsKS5naWYnXG5leHBvcnQgY29uc3QgcmF5YVBlb3BsZSA9ICcvYXNzZXRzL3Byb2R1Y3RMaXN0L09yYW5nKEZpbmFsKS5naWYnXG5cblxuXG5cbmV4cG9ydCBjb25zdCBjY2FyV2ViTG9nbzQwMFgxNTAgPSAnL2Fzc2V0cy9wcm9maWxlLzQwMHgxNTAtaWNvbi5wbmcnXG5leHBvcnQgY29uc3QgY2NhckxvZ28gPSAnL2xvZ28xOTIucG5nJ1xuZXhwb3J0IGNvbnN0IGNjYXJMb2dvMiA9ICcvYXNzZXRzL0NjYXItbG9nby5wbmcnXG5leHBvcnQgY29uc3QgY2NhcldlYkxvZ28yID0gJy9jY2FyLXdlYi1sb2dvLnBuZydcblxuLy9Mb2dpblxuZXhwb3J0IGNvbnN0IGxvZ2luQmFja2dyb3VuZCA9ICcvYXNzZXRzL2xvZ2luL3JhbWFkaGFuLnBuZyc7XG5leHBvcnQgY29uc3QgdGJoQ255ID0gJy9hc3NldHMvbG9naW4vdGJoLnBuZyc7XG5leHBvcnQgY29uc3QgdGJoMUNueSA9ICcvYXNzZXRzL2xvZ2luL3RiaC0wMS5wbmcnO1xuZXhwb3J0IGNvbnN0IHRiaDJDbnkgPSAnL2Fzc2V0cy9sb2dpbi90YmgtMDIucG5nJztcbmV4cG9ydCBjb25zdCBjbnlMaW9uSGVhZCA9ICcvYXNzZXRzL2xvZ2luL2xpb24tZGFuY2UucG5nJztcbmV4cG9ydCBjb25zdCBjbnlMb2dvID0gJy9hc3NldHMvbG9naW4vY2Nhci1jbnktbG9nby5wbmcnO1xuZXhwb3J0IGNvbnN0IGdvb2dsZUxvZ28gPSAnL2dvb2dsZS5wbmcnO1xuZXhwb3J0IGNvbnN0IGNueUxvZ28yID0gJy9jY2FyIGNueSAyLnN2Zyc7XG5leHBvcnQgY29uc3QgdGJoID0gJy9hc3NldHMvbG9naW4vZmFyYS5wbmcnO1xuXG5cbi8vUHJvZmlsZVxuZXhwb3J0IGNvbnN0IGRlZmF1bHRQcm9maWxlQmFja2dyb3VuZCA9ICcvYXNzZXRzL3Byb2ZpbGUvMTI4MHg0NTAucG5nJztcbmV4cG9ydCBjb25zdCBwaG9uZSA9IFwiL2Fzc2V0cy9zZWxsZXJQcm9maWxlL3Bob25lLnBuZ1wiXG5leHBvcnQgY29uc3QgZW1haWwgPSBcIi9hc3NldHMvc2VsbGVyUHJvZmlsZS9lbWFpbC5wbmdcIlxuZXhwb3J0IGNvbnN0IGhlbHAgPSBcIi9hc3NldHMvc2VsbGVyUHJvZmlsZS9oZWxwLnBuZ1wiXG5leHBvcnQgY29uc3QgYWRkcmVzcyA9IFwiL2Fzc2V0cy9zZWxsZXJQcm9maWxlL2FkZHJlc3MtaG9tZS5wbmdcIlxuZXhwb3J0IGNvbnN0IGxvY2F0aW9uID0gXCIvYXNzZXRzL3NlbGxlclByb2ZpbGUvTG9jYXRpb25AM3gucG5nXCJcbmV4cG9ydCBjb25zdCB3aXNoTGlzdCA9IFwiL2Fzc2V0cy9wcm9maWxlL3dpc2hsaXN0LnBuZ1wiXG5leHBvcnQgY29uc3Qgd2lzaGxpc3RJY29uQWN0aXZlZCA9IFwiL2Fzc2V0cy9wcm9maWxlL3dpc2hsaXN0LWFjdGl2ZS5wbmdcIjtcblxuXG5cbi8vRkFRXG5leHBvcnQgY29uc3QgZmFxRGljZUJhbm5lciA9ICcvYXNzZXRzL2ZhcS9tYW55LWZhbGxpbmctYmxvY2tzLXdpdGgtcXVlc3Rpb24tbWFya3MtM2QtaWxsdXN0cmF0aW9uLmpwZyc7XG5leHBvcnQgY29uc3QgZmFxQmFubmVyID0gJy9hc3NldHMvZmFxL0ZBUS1iZy5qcGcnO1xuZXhwb3J0IGNvbnN0IGZhcUJ1eUNhckljb24gPSAnL2Fzc2V0cy9mYXEvYnV5LWEtY2FyLnBuZyc7XG5leHBvcnQgY29uc3QgZmFxQ2FyRnJlYWtJY29uID0gJy9hc3NldHMvZmFxL2NhcmZyZWFrcy5wbmcnO1xuZXhwb3J0IGNvbnN0IGZhcUNzdGFySWNvbiA9ICcvYXNzZXRzL2ZhcS9jc3Rhci5wbmcnO1xuZXhwb3J0IGNvbnN0IGZhcU15QWNjb3VudEljb24gPSAnL2Fzc2V0cy9mYXEvbXktYWNjb3VudC5wbmcnO1xuZXhwb3J0IGNvbnN0IGZhcU91ckZlYXR1cmVzSWNvbiA9ICcvYXNzZXRzL2ZhcS9vdXItZmVhdHVyZXMucG5nJztcbmV4cG9ydCBjb25zdCBmYXFTZWxsQ2FySWNvbiA9ICcvYXNzZXRzL2ZhcS9zZWxsLWEtY2FyLnBuZyc7XG5cblxuZXhwb3J0IGNvbnN0IHNlYXJjaEJveEltZyA9ICcvYXNzZXRzL2ZhcS9Ib21lcGFnZS5wbmcnO1xuZXhwb3J0IGNvbnN0IHNvcnRpbmdJbWcgPSAnL2Fzc2V0cy9mYXEvY2FybWFya2V0IGZpbHRlci5wbmcnO1xuZXhwb3J0IGNvbnN0IGZpbHRlckZvcm1JbWcgPSAnL2Fzc2V0cy9mYXEvQ2FybWFya2V0IHF1aWNrIGZpbHRlciBib3gucG5nJztcbmV4cG9ydCBjb25zdCBhbGxOZXdDYXJJbWcgPSAnL2Fzc2V0cy9mYXEvYWxsLW5ld2NhciBicmFuZC5wbmcnO1xuZXhwb3J0IGNvbnN0IGNhckJyYW5kSW1nID0gJy9hc3NldHMvZmFxL3NlbGwtYS1jYXIucG5nJztcbmV4cG9ydCBjb25zdCBuZXdDYXJGaWx0ZXJGb3JtSW1nID0gJy9hc3NldHMvZmFxL2FsbC1uZXdjYXIgZmlsdGVyLnBuZyc7XG5leHBvcnQgY29uc3QgY2FyTW9yZUluZm9JbWcgPSAnL2Fzc2V0cy9mYXEvc2VsbC1hLWNhci5wbmcnO1xuZXhwb3J0IGNvbnN0IGNzdGFyTGlzdEltZyA9ICcvYXNzZXRzL2ZhcS9zZWxsLWEtY2FyLnBuZyc7XG5leHBvcnQgY29uc3QgY3N0YXJBbmltYXRpb25JbWcgPSAnL2Fzc2V0cy9mYXEvc2VsbC1hLWNhci5wbmcnO1xuXG4vL05vdGlmaWNhdGlvblxuZXhwb3J0IGNvbnN0IGJlbGxJbmFjdGl2ZSA9ICcvYXNzZXRzL25vdGlmaWNhdGlvbi9iZWxsLnBuZyc7XG5cblxuLy9SZXZpZXdcbmV4cG9ydCBjb25zdCByYXRpbmdCYW5uZXIgPSAnL2Fzc2V0cy9jYXItcmV2aWV3L3JhdGluZy5wbmcnO1xuZXhwb3J0IGNvbnN0IHRocmVlZG90cyA9ICcvMy1kb3RzLnBuZydcblxuLy9NZW51XG5leHBvcnQgY29uc3QgbWVudUxvZ2luID0gJy9hc3NldHMvbWVudS1pY29uL05vbG9naW4ucG5nJzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLkNvbnRhaW5lcj1Db250YWluZXI7ZXhwb3J0cy5jcmVhdGVVcmw9Y3JlYXRlVXJsO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO2V4cG9ydHMuQXBwSW5pdGlhbFByb3BzPV91dGlscy5BcHBJbml0aWFsUHJvcHM7LyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL2FzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyhfcmVmKXt2YXJ7Q29tcG9uZW50LGN0eH09X3JlZjt2YXIgcGFnZVByb3BzPWF3YWl0KDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKENvbXBvbmVudCxjdHgpO3JldHVybntwYWdlUHJvcHN9O31jbGFzcyBBcHAgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnR7Ly8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbi8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4vLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG5jb21wb25lbnREaWRDYXRjaChlcnJvcixfZXJyb3JJbmZvKXt0aHJvdyBlcnJvcjt9cmVuZGVyKCl7dmFye3JvdXRlcixDb21wb25lbnQscGFnZVByb3BzLF9fTl9TU0csX19OX1NTUH09dGhpcy5wcm9wcztyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7fSxwYWdlUHJvcHMsLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4vLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuIShfX05fU1NHfHxfX05fU1NQKT97dXJsOmNyZWF0ZVVybChyb3V0ZXIpfTp7fSkpO319ZXhwb3J0cy5kZWZhdWx0PUFwcDtBcHAub3JpZ0dldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7QXBwLmdldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7dmFyIHdhcm5Db250YWluZXI7dmFyIHdhcm5Vcmw7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3dhcm5Db250YWluZXI9KDAsX3V0aWxzLmV4ZWNPbmNlKSgoKT0+e2NvbnNvbGUud2FybihcIldhcm5pbmc6IHRoZSBgQ29udGFpbmVyYCBpbiBgX2FwcGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRcIik7fSk7d2FyblVybD0oMCxfdXRpbHMuZXhlY09uY2UpKCgpPT57Y29uc29sZS5lcnJvcihcIldhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvdXJsLWRlcHJlY2F0ZWRcIik7fSk7fS8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5mdW5jdGlvbiBDb250YWluZXIocCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FybkNvbnRhaW5lcigpO3JldHVybiBwLmNoaWxkcmVuO31mdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyKXsvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxudmFye3BhdGhuYW1lLGFzUGF0aCxxdWVyeX09cm91dGVyO3JldHVybntnZXQgcXVlcnkoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHF1ZXJ5O30sZ2V0IHBhdGhuYW1lKCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiBwYXRobmFtZTt9LGdldCBhc1BhdGgoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIGFzUGF0aDt9LGJhY2s6KCk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cm91dGVyLmJhY2soKTt9LHB1c2g6KHVybCxhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHJvdXRlci5wdXNoKHVybCxhcyk7fSxwdXNoVG86KGhyZWYsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3ZhciBwdXNoUm91dGU9YXM/aHJlZjonJzt2YXIgcHVzaFVybD1hc3x8aHJlZjtyZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLHB1c2hVcmwpO30scmVwbGFjZToodXJsLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLGFzKTt9LHJlcGxhY2VUbzooaHJlZixhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7dmFyIHJlcGxhY2VSb3V0ZT1hcz9ocmVmOicnO3ZhciByZXBsYWNlVXJsPWFzfHxocmVmO3JldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUscmVwbGFjZVVybCk7fX07fSIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9hcHAuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL2luZGV4LmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9vdmVyd3JpdGUuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL21haW4uY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL3NlbGxDYXIuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL3ZpZXdQcm9kdWN0cy5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvY29sb3IuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL2NvbW1vbi5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvYW5pbWF0aW9uLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9uZXdjYXIuY3NzJztcbmltcG9ydCAncmMtYmFubmVyLWFuaW0vYXNzZXRzL2luZGV4LmNzcyc7XG5pbXBvcnQgJ3JlYWN0LWltYWdlLWxpZ2h0Ym94L3N0eWxlLmNzcyc7XG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiO1xuaW1wb3J0ICdAYnJhaW5odWJldS9yZWFjdC1jYXJvdXNlbC9saWIvc3R5bGUuY3NzJztcbmltcG9ydCBcImVtb2ppLW1hcnQvY3NzL2Vtb2ppLW1hcnQuY3NzXCI7XG5pbXBvcnQgJ3JlYWN0LXF1aWxsL2Rpc3QvcXVpbGwuc25vdy5jc3MnOyAvLyBFUzZcblxuaW1wb3J0IHsgd3JhcHBlciwgc3RvcmUgfSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnOyBcbmltcG9ydCB3aXRoUmVkdXggZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgUGFnZVRyYW5zaXRpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL2dlbmVyYWwvUGFnZVRyYW5zaXRpb24nO1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi4vaG9va3MvdXNlUm91dGVyJztcbmltcG9ydCB7IGNoZWNrRW52UmV0dXJuQ21zVXJsIH0gZnJvbSAnLi4vZnVuY3Rpb25Db250ZW50JztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vZmVhdGhlcnMnO1xuaW1wb3J0IHsgY2NhckxvZ28yLCBjY2FyV2ViTG9nbzQwMFgxNTAgfSBmcm9tICcuLi9pY29uJztcblxuXG5cbmNvbnN0IFdyYXBwZWRBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH0pID0+IHtcblxuICBsZXQgc2VvRGF0YSA9IF8uaXNQbGFpbk9iamVjdChfLmdldChwYWdlUHJvcHMsIFsnc2VvRGF0YSddKSkgJiYgIV8uaXNFbXB0eShfLmdldChwYWdlUHJvcHMsIFsnc2VvRGF0YSddKSkgPyBfLmdldChwYWdlUHJvcHMsIFsnc2VvRGF0YSddKSA6IHt9O1xuICBsZXQgdGl0bGUgPSBfLmdldChzZW9EYXRhLCBbJ3RpdGxlJ10pIHx8ICdDQ0FSLk1ZIHwgIzEgQ2FyIFNvY2lhbCBQbGF0Zm9ybSdcbiAgbGV0IGJhc2VQYXRoID0gY2hlY2tFbnZSZXR1cm5DbXNVcmwoY2xpZW50LmlvLmlvLnVyaSk7XG4gIGxldCB1cmwgPSBzZW9EYXRhLnVybCB8fCBgJHtiYXNlUGF0aH0ke3JvdXRlci5hc1BhdGh9YDtcblxuICBpZiAoIV8uaXNBcnJheShzZW9EYXRhLmltYWdlcykpIHtcblxuICAgIGlmIChfLmlzU3RyaW5nKHNlb0RhdGEuaW1hZ2VzKSkge1xuICAgICAgc2VvRGF0YS5pbWFnZXMgPSBbe1xuICAgICAgICB1cmw6IHNlb0RhdGEuaW1hZ2VzLFxuICAgICAgICBhbHQ6ICdDQ0FSIEltYWdlIFByZXZpZXcnLFxuICAgICAgfV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlb0RhdGEuaW1hZ2VzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgdXJsOiBgJHtiYXNlUGF0aH0ke2NjYXJXZWJMb2dvNDAwWDE1MH1gLFxuICAgICAgICAgIGFsdDogYENDQVIgTG9nb2AsXG4gICAgICAgIH1cbiAgICAgIF07XG4gICAgfVxuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxOZXh0U2VvXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgZGVzY3JpcHRpb249e3Nlb0RhdGEuZGVzY3JpcHRpb259XG4gICAgICAgIGNhbm9uaWNhbD17c2VvRGF0YS5jYW5vbmljYWwgfHwgdXJsfVxuICAgICAgICBvcGVuR3JhcGg9e18uaXNQbGFpbk9iamVjdChzZW9EYXRhLm9wZW5HcmFwaCkgJiYgIV8uaXNFbXB0eShzZW9EYXRhLm9wZW5HcmFwaCkgPyBzZW9EYXRhLm9wZW5HcmFwaCA6IHtcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgZGVzY3JpcHRpb246IHNlb0RhdGEuZGVzY3JpcHRpb24sXG4gICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgdHlwZTogJ3dlYnNpdGUnLFxuICAgICAgICAgIHNpdGVfbmFtZTogJ0NDQVIgU0ROIEJIRCcsXG4gICAgICAgICAgaW1hZ2VzOiBbXG4gICAgICAgICAgICAuLi5zZW9EYXRhLmltYWdlcyxcbiAgICAgICAgICBdXG4gICAgICAgIH19XG4gICAgICAgIHR3aXR0ZXI9e3tcbiAgICAgICAgICBoYW5kbGU6ICdAaGFuZGxlJyxcbiAgICAgICAgICBzaXRlOiAnQHNpdGUnLFxuICAgICAgICAgIGNhcmRUeXBlOiAnc3VtbWFyeV9sYXJnZV9pbWFnZScsXG4gICAgICAgIH19XG4gICAgICAgIGZhY2Vib29rPXt7XG4gICAgICAgICAgYXBwSWQ6IHNlb0RhdGEuZmFjZWJvb2tBcHBJZCB8fCAnNzQ3MTc4MDEyNzUzNDEwJ1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj17Y2NhckxvZ28yIHx8IFwiaHR0cHM6Ly95dDMuZ2dwaHQuY29tL2EvQUFUWEFKeUFDQW5uazU4X3FmVlpxdmphVGthdnN4T2I4ZFNZR2VjaXY0YTc9czg4LWMtay1jMHgwMGZmZmZmZi1uby1yalwifSAvPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UaXRpbGxpdW0rV2ViOndnaHRAMzAwOzQwMDs3MDAmZmFtaWx5PVVidW50dTppdGFsQDEmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGtleT17cm91dGVyLnJvdXRlfSAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoV3JhcHBlZEFwcClcbiIsImV4cG9ydCBjb25zdCBib2R5VHlwZUxpc3QgPSBbXG4gICAge1xuICAgICAgICAnaWNvbic6IFwiL2Fzc2V0cy9jYXItdHlwZS1vcmktdmVyMi9jb2FjaC5wbmdcIixcbiAgICAgICAgJ3ZhbHVlJzogJ0NvYWNoJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBcIi9hc3NldHMvY2FyLXR5cGUtb3JpLXZlcjIvY29tcGFjdC5wbmdcIixcbiAgICAgICAgJ3ZhbHVlJzogJ0NvbXBhY3QnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IFwiL2Fzc2V0cy9jYXItdHlwZS1vcmktdmVyMi9jb252ZXJ0aWJsZS5wbmdcIixcbiAgICAgICAgJ3ZhbHVlJzogJ0NvbnZlcnRpYmxlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBcIi9hc3NldHMvY2FyLXR5cGUtb3JpLXZlcjIvY291cGUucG5nXCIsXG4gICAgICAgICd2YWx1ZSc6ICdDb3VwZScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogXCIvYXNzZXRzL2Nhci10eXBlLW9yaS12ZXIyL2Nyb3Nzb3Zlci5wbmdcIixcbiAgICAgICAgJ3ZhbHVlJzogJ0Nyb3Nzb3ZlcicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogXCIvYXNzZXRzL2Nhci10eXBlLW9yaS12ZXIyL2hhdGNoYmFjay5wbmdcIixcbiAgICAgICAgJ3ZhbHVlJzogJ0hhdGNoYmFjaycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogXCIvYXNzZXRzL2Nhci10eXBlLW9yaS12ZXIyL21wdi5wbmdcIixcbiAgICAgICAgJ3ZhbHVlJzogJ01QVicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogXCIvYXNzZXRzL2Nhci10eXBlLW9yaS12ZXIyL3BpY2t1cC10cnVjay5wbmdcIixcbiAgICAgICAgJ3ZhbHVlJzogJ1BpY2t1cHRydWNrJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBcIi9hc3NldHMvY2FyLXR5cGUtb3JpLXZlcjIvc2VkYW4ucG5nXCIsXG4gICAgICAgICd2YWx1ZSc6ICdTZWRhbicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogXCIvYXNzZXRzL2Nhci10eXBlLW9yaS12ZXIyL3Nwb3J0LWNhci5wbmdcIixcbiAgICAgICAgJ3ZhbHVlJzogJ1Nwb3J0Y2FyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBcIi9hc3NldHMvY2FyLXR5cGUtb3JpLXZlcjIvc3V2LnBuZ1wiLFxuICAgICAgICAndmFsdWUnOiAnU1VWJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBcIi9hc3NldHMvY2FyLXR5cGUtb3JpLXZlcjIvdHJ1Y2sucG5nXCIsXG4gICAgICAgICd2YWx1ZSc6ICdUcnVjaycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogXCIvYXNzZXRzL2Nhci10eXBlLW9yaS12ZXIyL3Zhbi5wbmdcIixcbiAgICAgICAgJ3ZhbHVlJzogJ1ZhbicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogXCIvYXNzZXRzL2Nhci10eXBlLW9yaS12ZXIyL3dhZ29uLnBuZ1wiLFxuICAgICAgICAndmFsdWUnOiAnV2Fnb24nLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IFwiL2Fzc2V0cy9jYXItdHlwZS1vcmktdmVyMi9zcG9ydC1jYXIucG5nXCIsXG4gICAgICAgICd2YWx1ZSc6ICdHVCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogXCIvYXNzZXRzL2Nhci10eXBlLW9yaS12ZXIyL3RydWNrLnBuZ1wiLFxuICAgICAgICAndmFsdWUnOiAnTG9ycnknLFxuICAgIH0sXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCb2R5VHlwZUljb24oYm9keVR5cGUpIHtcbiAgICBpZiAoYm9keVR5cGUpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkQm9keVR5cGUgPSBib2R5VHlwZUxpc3QuZmluZChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gYm9keVR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoc2VsZWN0ZWRCb2R5VHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkQm9keVR5cGUuaWNvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm9keVR5cGUoYm9keVR5cGUpIHtcbiBcbiAgICBpZiAoYm9keVR5cGUpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkQm9keVR5cGUgPSBib2R5VHlwZUxpc3QuZmluZChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gYm9keVR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSlcblxuIFxuICAgICAgICBpZiAoc2VsZWN0ZWRCb2R5VHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkQm9keVR5cGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICAgIGljb246IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICBpY29uOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGJvZHlUeXBlTGlzdCxcbn0iLCJcblxuY29uc3QgYWxmYVJvbWVvSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9hbGZhLXJvbWVvLnBuZ1wiXG5jb25zdCBhc2lhSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9hc2lhLnBuZ1wiXG5jb25zdCBhc3Rvbk1hcnRpbkltZyA9IFwiL2Fzc2V0cy9icmFuZHMvYXN0b24tbWFydGluLnBuZ1wiXG5jb25zdCBhdWRpSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9hdWRpLnBuZ1wiXG5jb25zdCBhdXN0aW5JbWcgPSBcIi9hc3NldHMvYnJhbmRzL2F1c3Rpbi5wbmdcIlxuY29uc3QgYmFjSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9iYWMucG5nXCJcbmNvbnN0IGJlbnRsZXlJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2JlbnRsZXkucG5nXCJcbmNvbnN0IGJtd0FscGluYUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvYm13LWFscGluYS5wbmdcIlxuY29uc3QgYm13SW1nID0gXCIvYXNzZXRzL2JyYW5kcy9ibXcucG5nXCJcbmNvbnN0IGJ1Zm9yaUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvYnVmb3JpLnBuZ1wiXG5jb25zdCBjYWRpbGxhY0ltZyA9IFwiL2Fzc2V0cy9icmFuZHMvY2FkaWxsYWMucG5nXCJcbmNvbnN0IGNhbUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvY2FtLnBuZ1wiXG5jb25zdCBjaGFuYUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvY2hhbmEucG5nXCJcbmNvbnN0IGNoYW5nYW5JbWcgPSBcIi9hc3NldHMvYnJhbmRzL2NoYW5nYW4ucG5nXCJcbmNvbnN0IGNoZXJ5SW1nID0gXCIvYXNzZXRzL2JyYW5kcy9jaGVyeS5wbmdcIlxuY29uc3QgY2hldnJvbGV0SW1nID0gXCIvYXNzZXRzL2JyYW5kcy9jaGV2cm9sZXQucG5nXCJcbmNvbnN0IGNocnlzbGVySW1nID0gXCIvYXNzZXRzL2JyYW5kcy9jaHJ5c2xlci5wbmdcIlxuY29uc3QgY2l0cm9lbkltZyA9IFwiL2Fzc2V0cy9icmFuZHMvY2l0cm9lbi5wbmdcIlxuY29uc3QgZGFpaGF0c3VJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2RhaWhhdHN1LnBuZ1wiXG5jb25zdCBkYXRzdW5JbWcgPSBcIi9hc3NldHMvYnJhbmRzL2RhdHN1bi5wbmdcIlxuY29uc3QgZG9kZ2VJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2RvZGdlLnBuZ1wiXG5jb25zdCBkb25nZmVuZ0ltZyA9IFwiL2Fzc2V0cy9icmFuZHMvZG9uZ2ZlbmcucG5nXCJcbmNvbnN0IGZlcnJhcmlJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2ZlcnJhcmkucG5nXCJcbmNvbnN0IGZpYXRJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2ZpYXQucG5nXCJcbmNvbnN0IGZvZGF5SW1nID0gXCIvYXNzZXRzL2JyYW5kcy9mb2RheS5wbmdcIlxuY29uc3QgZm9yZEltZyA9IFwiL2Fzc2V0cy9icmFuZHMvZm9yZC5wbmdcIlxuY29uc3QgZm90b25JbWcgPSBcIi9hc3NldHMvYnJhbmRzL2ZvdG9uLnBuZ1wiXG5jb25zdCBnb2xkZW5EcmFnb25JbWcgPSBcIi9hc3NldHMvYnJhbmRzL2dvbGRlbi1kcmFnb24ucG5nXCJcbmNvbnN0IGdyZWF0V2FsbEltZyA9IFwiL2Fzc2V0cy9icmFuZHMvZ3JlYXQtd2FsbC5wbmdcIlxuY29uc3QgaGF2YWxJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2hhdmFsLnBuZ1wiXG5jb25zdCBoaWNvbUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvaGljb20ucG5nXCJcbmNvbnN0IGhpbm9JbWcgPSBcIi9hc3NldHMvYnJhbmRzL2hpbm8ucG5nXCJcbmNvbnN0IGhvbmRhSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9ob25kYS5wbmdcIlxuY29uc3QgaHVtbWVySW1nID0gXCIvYXNzZXRzL2JyYW5kcy9odW1tZXIucG5nXCJcbmNvbnN0IGh5dW5kYWlJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2h5dW5kYWkucG5nXCJcbmNvbnN0IGltcHVsSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9pbXB1bC5wbmdcIlxuY29uc3QgaW5maW5pdGlJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2luZmluaXRpLnBuZ1wiXG5jb25zdCBpbm9rb21JbWcgPSBcIi9hc3NldHMvYnJhbmRzL2lub2tvbS5wbmdcIlxuY29uc3QgaXN1enVJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2lzdXp1LnBuZ1wiXG5jb25zdCBqYWd1YXJJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2phZ3Vhci5wbmdcIlxuY29uc3QgamJjSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9qYmMucG5nXCJcbmNvbnN0IGplZXBJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2plZXAucG5nXCJcbmNvbnN0IGptY0ltZyA9IFwiL2Fzc2V0cy9icmFuZHMvam1jLnBuZ1wiXG5jb25zdCBqb3lsb25nSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9qb3lsb25nLnBuZ1wiXG5jb25zdCBrYXdhc2FraUltZyA9IFwiL2Fzc2V0cy9icmFuZHMva2F3YXNha2kucG5nXCJcbmNvbnN0IGtpYUltZyA9IFwiL2Fzc2V0cy9icmFuZHMva2lhLnBuZ1wiXG5jb25zdCBraW5nTG9uZ0ltZyA9IFwiL2Fzc2V0cy9icmFuZHMva2luZy1sb25nLnBuZ1wiXG5jb25zdCBsYW1ib3JnaGluaUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvbGFtYm9yZ2hpbmkucG5nXCJcbmNvbnN0IGxhbmRSb3ZlckltZyA9IFwiL2Fzc2V0cy9icmFuZHMvbGFuZC1yb3Zlci5wbmdcIlxuY29uc3QgbGV4dXNJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2xleHVzLnBuZ1wiXG5jb25zdCBsbWdJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2xtZy5wbmdcIlxuY29uc3QgbG90dXNJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2xvdHVzLnBuZ1wiXG5jb25zdCBtYWhpbmRyYUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvbWFoaW5kcmEucG5nXCJcbmNvbnN0IG1hc2VyYXRpSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9tYXNlcmF0aS5wbmdcIlxuY29uc3QgbWF4dXNJbWcgPSBcIi9hc3NldHMvYnJhbmRzL21heHVzLnBuZ1wiXG5jb25zdCBtYXpkYUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvbWF6ZGEucG5nXCJcbmNvbnN0IG1jbGFyZW5JbWcgPSBcIi9hc3NldHMvYnJhbmRzL21jbGFyZW4ucG5nXCJcbmNvbnN0IG1lcmNlZGVzQmVuekltZyA9IFwiL2Fzc2V0cy9icmFuZHMvbWVyY2VkZXMtYmVuei5wbmdcIlxuY29uc3QgbWVyY2VkZXNNYXliYWNoSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9tZXJjZWRlcy1tYXliYWNoLnBuZ1wiXG5jb25zdCBtZ0ltZyA9IFwiL2Fzc2V0cy9icmFuZHMvbWcucG5nXCJcbmNvbnN0IG1pbmlJbWcgPSBcIi9hc3NldHMvYnJhbmRzL21pbmkucG5nXCJcbmNvbnN0IG1pdHN1YmlzaGlJbWcgPSBcIi9hc3NldHMvYnJhbmRzL21pdHN1YmlzaGkucG5nXCJcbmNvbnN0IG1pdHN1b2thSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9taXRzdW9rYS5wbmdcIlxuY29uc3QgbmF6YUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvbmF6YS5wbmdcIlxuY29uc3Qgbmlzc2FuSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9uaXNzYW4ucG5nXCJcbmNvbnN0IG9wZWxJbWcgPSBcIi9hc3NldHMvYnJhbmRzL29wZWwucG5nXCJcbmNvbnN0IHBlcm9kdWFJbWcgPSBcIi9hc3NldHMvYnJhbmRzL3Blcm9kdWEucG5nXCJcbmNvbnN0IHBldWdlb3RJbWcgPSBcIi9hc3NldHMvYnJhbmRzL3BldWdlb3QucG5nXCJcbmNvbnN0IHBvcnNjaGVJbWcgPSBcIi9hc3NldHMvYnJhbmRzL3BvcnNjaGUucG5nXCJcbmNvbnN0IHByb3RvbkltZyA9IFwiL2Fzc2V0cy9icmFuZHMvcHJvdG9uLnBuZ1wiXG5jb25zdCByYW1JbWcgPSBcIi9hc3NldHMvYnJhbmRzL3JhbS5wbmdcIlxuY29uc3QgcmVuYXVsdEltZyA9IFwiL2Fzc2V0cy9icmFuZHMvcmVuYXVsdC5wbmdcIlxuY29uc3Qgcm9sbHNSb3ljZUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvcm9sbHMtcm95Y2UucG5nXCJcbmNvbnN0IHJvdmVySW1nID0gXCIvYXNzZXRzL2JyYW5kcy9yb3Zlci5wbmdcIlxuY29uc3Qgc2FhYkltZyA9IFwiL2Fzc2V0cy9icmFuZHMvc2FhYi5wbmdcIlxuY29uc3Qgc21hcnRJbWcgPSBcIi9hc3NldHMvYnJhbmRzL3NtYXJ0LnBuZ1wiXG5jb25zdCBzc2FuZ1lvbmdJbWcgPSBcIi9hc3NldHMvYnJhbmRzL3NzYW5nLXlvbmcucG5nXCJcbmNvbnN0IHN1YmFydUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvc3ViYXJ1LnBuZ1wiXG5jb25zdCBzdXp1a2lJbWcgPSBcIi9hc3NldHMvYnJhbmRzL3N1enVraS5wbmdcIlxuY29uc3QgdGF0YUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvdGF0YS5wbmdcIlxuY29uc3QgdG95b3RhSW1nID0gXCIvYXNzZXRzL2JyYW5kcy90b3lvdGEucG5nXCJcbmNvbnN0IHR2ckltZyA9IFwiL2Fzc2V0cy9icmFuZHMvdHZyLnBuZ1wiXG5jb25zdCB2b2xrc3dhZ2VuSW1nID0gXCIvYXNzZXRzL2JyYW5kcy92b2xrc3dhZ2VuLnBuZ1wiXG5jb25zdCB2b2x2b0ltZyA9IFwiL2Fzc2V0cy9icmFuZHMvdm9sdm8ucG5nXCJcbmNvbnN0IHdhbGRJbWcgPSBcIi9hc3NldHMvYnJhbmRzL3dhbGQucG5nXCJcbmNvbnN0IHlhbWFoYUltZyA9IFwiL2Fzc2V0cy9icmFuZHMveWFtYWhhLnBuZ1wiXG5jb25zdCB6bmFJbWcgPSBcIi9hc3NldHMvYnJhbmRzL3puYS5wbmdcIlxuXG5leHBvcnQgY29uc3QgY2FyQnJhbmRzTGlzdCA9IFtcbiAge1xuICAgICdpY29uJzogYWxmYVJvbWVvSW1nLFxuICAgICd2YWx1ZSc6ICdBbGZhIFJvbWVvJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogYXNpYUltZyxcbiAgICAndmFsdWUnOiAnQXNpYScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGFzdG9uTWFydGluSW1nLFxuICAgICd2YWx1ZSc6ICdBc3RvbiBNYXJ0aW4nLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBhdWRpSW1nLFxuICAgICd2YWx1ZSc6ICdBdWRpJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogYXVzdGluSW1nLFxuICAgICd2YWx1ZSc6ICdBdXN0aW4nLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBiYWNJbWcsXG4gICAgJ3ZhbHVlJzogJ0JhYycsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGJlbnRsZXlJbWcsXG4gICAgJ3ZhbHVlJzogJ0JlbnRsZXknLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBibXdBbHBpbmFJbWcsXG4gICAgJ3ZhbHVlJzogJ0JNVyBBbHBpbmEnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBibXdJbWcsXG4gICAgJ3ZhbHVlJzogJ0JNVycsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGJ1Zm9yaUltZyxcbiAgICAndmFsdWUnOiAnQnVmb3JpJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogY2FkaWxsYWNJbWcsXG4gICAgJ3ZhbHVlJzogJ0NhZGlsbGFjJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogY2FtSW1nLFxuICAgICd2YWx1ZSc6ICdDYW0nLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBjaGFuYUltZyxcbiAgICAndmFsdWUnOiAnQ2hhbmEnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBjaGFuZ2FuSW1nLFxuICAgICd2YWx1ZSc6ICdDaGFuZ2FuJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogY2hlcnlJbWcsXG4gICAgJ3ZhbHVlJzogJ0NoZXJ5JyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogY2hldnJvbGV0SW1nLFxuICAgICd2YWx1ZSc6ICdDaGV2cm9sZXQnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBjaHJ5c2xlckltZyxcbiAgICAndmFsdWUnOiAnQ2hyeXNsZXInLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBjaXRyb2VuSW1nLFxuICAgICd2YWx1ZSc6ICdDaXRyb2VuJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogZGFpaGF0c3VJbWcsXG4gICAgJ3ZhbHVlJzogJ0RhaWhhdHN1JyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogZGF0c3VuSW1nLFxuICAgICd2YWx1ZSc6ICdEYXRzdW4nLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBkb2RnZUltZyxcbiAgICAndmFsdWUnOiAnRG9kZ2UnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBkb25nZmVuZ0ltZyxcbiAgICAndmFsdWUnOiAnRG9uZ2ZlbmcnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBmZXJyYXJpSW1nLFxuICAgICd2YWx1ZSc6ICdGZXJyYXJpJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogZmlhdEltZyxcbiAgICAndmFsdWUnOiAnRmlhdCcsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGZvZGF5SW1nLFxuICAgICd2YWx1ZSc6ICdGb2RheScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGZvcmRJbWcsXG4gICAgJ3ZhbHVlJzogJ0ZvcmQnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBmb3RvbkltZyxcbiAgICAndmFsdWUnOiAnRm90b24nLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBnb2xkZW5EcmFnb25JbWcsXG4gICAgJ3ZhbHVlJzogJ0dvbGRlbiBEcmFnb24nLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBncmVhdFdhbGxJbWcsXG4gICAgJ3ZhbHVlJzogJ0dyZWF0IFdhbGwnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBoYXZhbEltZyxcbiAgICAndmFsdWUnOiAnSGF2YWwnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBoaWNvbUltZyxcbiAgICAndmFsdWUnOiAnSGljb20nLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBoaW5vSW1nLFxuICAgICd2YWx1ZSc6ICdIaW5vJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogaG9uZGFJbWcsXG4gICAgJ3ZhbHVlJzogJ0hvbmRhJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogaHVtbWVySW1nLFxuICAgICd2YWx1ZSc6ICdIdW1tZXInLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBoeXVuZGFpSW1nLFxuICAgICd2YWx1ZSc6ICdIeXVuZGFpJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogaW1wdWxJbWcsXG4gICAgJ3ZhbHVlJzogJ0ltcHVsJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogaW5maW5pdGlJbWcsXG4gICAgJ3ZhbHVlJzogJ0luZmluaXRpJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogaW5va29tSW1nLFxuICAgICd2YWx1ZSc6ICdJbm9rb20nLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBpc3V6dUltZyxcbiAgICAndmFsdWUnOiAnSXN1enUnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBqYWd1YXJJbWcsXG4gICAgJ3ZhbHVlJzogJ0phZ3VhcicsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGpiY0ltZyxcbiAgICAndmFsdWUnOiAnSmJjJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogamVlcEltZyxcbiAgICAndmFsdWUnOiAnSmVlcCcsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGptY0ltZyxcbiAgICAndmFsdWUnOiAnSm1jJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogam95bG9uZ0ltZyxcbiAgICAndmFsdWUnOiAnSm95bG9uZycsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGthd2FzYWtpSW1nLFxuICAgICd2YWx1ZSc6ICdLYXdhc2FraScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGtpYUltZyxcbiAgICAndmFsdWUnOiAnS2lhJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzoga2luZ0xvbmdJbWcsXG4gICAgJ3ZhbHVlJzogJ0tpbmcgTG9uZycsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGxhbWJvcmdoaW5pSW1nLFxuICAgICd2YWx1ZSc6ICdMYW1ib3JnaGluaScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGxhbmRSb3ZlckltZyxcbiAgICAndmFsdWUnOiAnTGFuZCBSb3ZlcicsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGxleHVzSW1nLFxuICAgICd2YWx1ZSc6ICdMZXh1cycsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGxtZ0ltZyxcbiAgICAndmFsdWUnOiAnTG1nJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogbG90dXNJbWcsXG4gICAgJ3ZhbHVlJzogJ0xvdHVzJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogbWFoaW5kcmFJbWcsXG4gICAgJ3ZhbHVlJzogJ01haGluZHJhJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogbWFzZXJhdGlJbWcsXG4gICAgJ3ZhbHVlJzogJ01hc2VyYXRpJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogbWF4dXNJbWcsXG4gICAgJ3ZhbHVlJzogJ01heHVzJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogbWF6ZGFJbWcsXG4gICAgJ3ZhbHVlJzogJ01hemRhJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogbWNsYXJlbkltZyxcbiAgICAndmFsdWUnOiAnTWNsYXJlbicsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IG1lcmNlZGVzQmVuekltZyxcbiAgICAndmFsdWUnOiAnTWVyY2VkZXMtQmVueicsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IG1nSW1nLFxuICAgICd2YWx1ZSc6ICdNZXJjZWRlcy1NYXliYWNoJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogbWVyY2VkZXNNYXliYWNoSW1nLFxuICAgICd2YWx1ZSc6ICdNZycsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IG1pbmlJbWcsXG4gICAgJ3ZhbHVlJzogJ01pbmknLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBtaXRzdWJpc2hpSW1nLFxuICAgICd2YWx1ZSc6ICdNaXRzdWJpc2hpJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogbWl0c3Vva2FJbWcsXG4gICAgJ3ZhbHVlJzogJ01pdHN1b2thJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogbmF6YUltZyxcbiAgICAndmFsdWUnOiAnTmF6YScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IG5pc3NhbkltZyxcbiAgICAndmFsdWUnOiAnTmlzc2FuJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogb3BlbEltZyxcbiAgICAndmFsdWUnOiAnT3BlbCcsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IHBlcm9kdWFJbWcsXG4gICAgJ3ZhbHVlJzogJ1Blcm9kdWEnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBwZXVnZW90SW1nLFxuICAgICd2YWx1ZSc6ICdQZXVnZW90JyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogcG9yc2NoZUltZyxcbiAgICAndmFsdWUnOiAnUG9yc2NoZScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IHByb3RvbkltZyxcbiAgICAndmFsdWUnOiAnUHJvdG9uJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogcmFtSW1nLFxuICAgICd2YWx1ZSc6ICdSYW0nLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiByZW5hdWx0SW1nLFxuICAgICd2YWx1ZSc6ICdSZW5hdWx0JyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogcm9sbHNSb3ljZUltZyxcbiAgICAndmFsdWUnOiAnUm9sbHMtUm95Y2UnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiByb3ZlckltZyxcbiAgICAndmFsdWUnOiAnUm92ZXInLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBzYWFiSW1nLFxuICAgICd2YWx1ZSc6ICdTYWFiJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogc21hcnRJbWcsXG4gICAgJ3ZhbHVlJzogJ1NtYXJ0JyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogc3NhbmdZb25nSW1nLFxuICAgICd2YWx1ZSc6ICdTc2FuZyBZb25nJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogc3ViYXJ1SW1nLFxuICAgICd2YWx1ZSc6ICdTdWJhcnUnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBzdXp1a2lJbWcsXG4gICAgJ3ZhbHVlJzogJ1N1enVraScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IHRhdGFJbWcsXG4gICAgJ3ZhbHVlJzogJ1RhdGEnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiB0b3lvdGFJbWcsXG4gICAgJ3ZhbHVlJzogJ1RveW90YScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IHR2ckltZyxcbiAgICAndmFsdWUnOiAnVHZyJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogdm9sa3N3YWdlbkltZyxcbiAgICAndmFsdWUnOiAnVm9sa3N3YWdlbicsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IHZvbHZvSW1nLFxuICAgICd2YWx1ZSc6ICdWb2x2bycsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IHdhbGRJbWcsXG4gICAgJ3ZhbHVlJzogJ1dhbGQnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiB5YW1haGFJbWcsXG4gICAgJ3ZhbHVlJzogJ1lhbWFoYScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IHpuYUltZyxcbiAgICAndmFsdWUnOiAnWm5hJyxcbiAgfVxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FyQnJhbmRzSWNvbihkYXRhKSB7XG4gIGlmIChkYXRhKSB7XG4gICAgbGV0IHNlbGVjdGVkQnJhbmQgPSBjYXJCcmFuZHNMaXN0LmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGRhdGEudG9Mb3dlckNhc2UoKTtcbiAgICB9KVxuXG4gICAgaWYgKHNlbGVjdGVkQnJhbmQpIHtcbiAgICAgIHJldHVybiBzZWxlY3RlZEJyYW5kLmljb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FyQnJhbmQoZGF0YSkge1xuICBpZiAoZGF0YSkge1xuICAgIGxldCBzZWxlY3RlZEJyYW5kID0gY2FyQnJhbmRzTGlzdC5maW5kKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBkYXRhLnRvTG93ZXJDYXNlKCk7XG4gICAgfSlcblxuICAgIGlmIChzZWxlY3RlZEJyYW5kKSB7XG4gICAgICByZXR1cm4gc2VsZWN0ZWRCcmFuZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgIGljb24gOiBudWxsXG4gICAgICB9O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gIHtcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgaWNvbiA6IG51bGxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY2FyQnJhbmRzTGlzdCxcbn0iLCJleHBvcnQgY29uc3QgY29sb3JMaXN0ID0gW1xuICAgIHtcbiAgICAgICAgJ2NvZGUnOiAnIzAwMDAwMCcsXG4gICAgICAgICd2YWx1ZSc6ICdibGFjaycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdjb2RlJzogJyNGRkZGRkYnLFxuICAgICAgICAndmFsdWUnOiAnd2hpdGUnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnY29kZSc6ICcjRTdFN0U3JyxcbiAgICAgICAgJ3ZhbHVlJzogJ3NpbHZlcicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdjb2RlJzogJyM3NTc1NzUnLFxuICAgICAgICAndmFsdWUnOiAnZ3JleScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdjb2RlJzogJyNDQTkxMkInLFxuICAgICAgICAndmFsdWUnOiAnYnJvd24nLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnY29kZSc6ICcjNjIzMDA4JyxcbiAgICAgICAgJ3ZhbHVlJzogJ2Jyb256ZScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdjb2RlJzogJyNFM0M1N0QnLFxuICAgICAgICAndmFsdWUnOiAnZ29sZCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdjb2RlJzogJyNGMURDQzMnLFxuICAgICAgICAndmFsdWUnOiAnYmVpZ2UnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnY29kZSc6ICcjRkZGMDA5JyxcbiAgICAgICAgJ3ZhbHVlJzogJ3llbGxvdycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdjb2RlJzogJyNGODc3MTknLFxuICAgICAgICAndmFsdWUnOiAnb3JhbmdlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2NvZGUnOiAnI0RBMDAwMCcsXG4gICAgICAgICd2YWx1ZSc6ICdyZWQnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnY29kZSc6ICcjNzYwMDAwJyxcbiAgICAgICAgJ3ZhbHVlJzogJ21hcm9vbicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdjb2RlJzogJyNBQzAwNUEnLFxuICAgICAgICAndmFsdWUnOiAnbWFnZW50YScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdjb2RlJzogJyNEQzdFQTgnLFxuICAgICAgICAndmFsdWUnOiAncGluaycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdjb2RlJzogJyM2NzBEQTgnLFxuICAgICAgICAndmFsdWUnOiAncHVycGxlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2NvZGUnOiAnIzRFQzM3NScsXG4gICAgICAgICd2YWx1ZSc6ICdncmVlbicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdjb2RlJzogJyMwMTAwN0QnLFxuICAgICAgICAndmFsdWUnOiAnYmx1ZScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdjb2RlJzogJ3doaXRlJyxcbiAgICAgICAgJ3ZhbHVlJzogJ290aGVyJyxcbiAgICB9LFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29sb3JJY29uKGNvbG9yKSB7XG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZENvbG9yID0gY29sb3JMaXN0LmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGNvbG9yLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHNlbGVjdGVkQ29sb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZENvbG9yLmljb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbG9yKGNvbG9yKSB7XG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZENvbG9yID0gY29sb3JMaXN0LmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGNvbG9yLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHNlbGVjdGVkQ29sb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZENvbG9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgICBpY29uOiBudWxsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgaWNvbjogbnVsbFxuICAgICAgICB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbG9yTGlzdCxcbn0iLCJjb25zdCBkaWVzZWxJY29uID0gXCIvYXNzZXRzL2Z1ZWxUeXBlL2RpZXNlbC5wbmdcIlxuY29uc3QgZWxlY3RyaWNJY29uID0gXCIvYXNzZXRzL2Z1ZWxUeXBlL2VsZWN0cmljLnBuZ1wiXG5jb25zdCBoeWJyaWRJY29uID0gXCIvYXNzZXRzL2Z1ZWxUeXBlL2h5YnJpZC5wbmdcIlxuY29uc3QgcGV0cm9sTGVhZGVkSWNvbiA9IFwiL2Fzc2V0cy9mdWVsVHlwZS9wZXRyb2wtKGxlYWRlZCkucG5nXCJcbmNvbnN0IHBldHJvbFVubGVhZGVkSWNvbiA9IFwiL2Fzc2V0cy9mdWVsVHlwZS9wZXRyb2wtKHVubGVhZGVkKS5wbmdcIlxuXG5leHBvcnQgY29uc3QgZnVlbFR5cGVMaXN0ID0gW1xuICAgIHtcbiAgICAgICAgJ2ljb24nOiBkaWVzZWxJY29uLFxuICAgICAgICAndmFsdWUnOiAnZGllc2VsJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBoeWJyaWRJY29uLFxuICAgICAgICAndmFsdWUnOiAnaHlicmlkJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBlbGVjdHJpY0ljb24sXG4gICAgICAgICd2YWx1ZSc6ICdldicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogcGV0cm9sTGVhZGVkSWNvbixcbiAgICAgICAgJ3ZhbHVlJzogJ3BldHJvbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogcGV0cm9sTGVhZGVkSWNvbixcbiAgICAgICAgJ3ZhbHVlJzogJ3BoZXYnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IHBldHJvbFVubGVhZGVkSWNvbixcbiAgICAgICAgJ3ZhbHVlJzogJ3BldHJvbHVscCcsXG4gICAgfVxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RnVlbFR5cGVJY29uKGZ1ZWxUeXBlKSB7XG4gICAgaWYgKGZ1ZWxUeXBlKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZEZ1ZWxUeXBlID0gZnVlbFR5cGVMaXN0LmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT0gZnVlbFR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoc2VsZWN0ZWRGdWVsVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkRnVlbFR5cGUuaWNvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RnVlbFR5cGUoZnVlbFR5cGUpIHtcbiAgICBpZiAoZnVlbFR5cGUpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkRnVlbFR5cGUgPSBmdWVsVHlwZUxpc3QuZmluZChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udmFsdWUudG9Mb3dlckNhc2UoKSA9PSBmdWVsVHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChzZWxlY3RlZEZ1ZWxUeXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRGdWVsVHlwZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgICAgaWNvbjogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgIGljb246IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZnVlbFR5cGVMaXN0LFxufSIsImNvbnN0IGZlZGVyYWxUZXJyaXRvcnlJY29uID0gKFwiL2Fzc2V0cy9zdGF0ZUljb24vZmVkZXJhbCB0ZXJyaXRvcnkucG5nXCIpXG5jb25zdCBqb2hvckljb24gPSAoXCIvYXNzZXRzL3N0YXRlSWNvbi9qb2hvci5wbmdcIilcbmNvbnN0IGtlZGFoSWNvbiA9IChcIi9hc3NldHMvc3RhdGVJY29uL2tlZGFoLnBuZ1wiKVxuY29uc3Qga3VhbGFMdW1wdXJJY29uID0gKFwiL2Fzc2V0cy9zdGF0ZUljb24va3VhbGEgbHVtcHVyLnBuZ1wiKVxuY29uc3QgbGFidWFuRmVkZXJhbEljb24gPSAoXCIvYXNzZXRzL3N0YXRlSWNvbi9sYWJ1YW4tZmVkZXJhbC5wbmdcIilcbmNvbnN0IGxhYnVhbkljb24gPSAoXCIvYXNzZXRzL3N0YXRlSWNvbi9sYWJ1YW4ucG5nXCIpXG5jb25zdCBtZWxha2FJY29uID0gKFwiL2Fzc2V0cy9zdGF0ZUljb24vbWVsYWthLnBuZ1wiKVxuY29uc3QgbmVnZXJpU2VtYmlsYW5JY29uID0gKFwiL2Fzc2V0cy9zdGF0ZUljb24vbmVnZXJpLXNlbWJpbGFuLnBuZ1wiKVxuY29uc3QgcGFoYW5nSWNvbiA9IChcIi9hc3NldHMvc3RhdGVJY29uL3BhaGFuZy5wbmdcIilcbmNvbnN0IHBlbmFuZ0ljb24gPSAoXCIvYXNzZXRzL3N0YXRlSWNvbi9wZW5hbmcucG5nXCIpXG5jb25zdCBwZXJha0ljb24gPSAoXCIvYXNzZXRzL3N0YXRlSWNvbi9wZXJhay5wbmdcIilcbmNvbnN0IHBlcmxpc0ljb24gPSAoXCIvYXNzZXRzL3N0YXRlSWNvbi9wZXJsaXMucG5nXCIpXG5jb25zdCBwdXRyYWpheUZlZGVyYWxJY29uID0gKFwiL2Fzc2V0cy9zdGF0ZUljb24vcHV0cmFqYXktZmVkZXJhbC5wbmdcIilcbmNvbnN0IHNhYmFoSWNvbiA9IChcIi9hc3NldHMvc3RhdGVJY29uL3NhYmFoLnBuZ1wiKVxuY29uc3Qgc2FyYXdha0ljb24gPSAoXCIvYXNzZXRzL3N0YXRlSWNvbi9zYXJhd2FrLnBuZ1wiKVxuY29uc3Qgc2VsYW5nb3JJY29uID0gKFwiL2Fzc2V0cy9zdGF0ZUljb24vc2VsYW5nb3IucG5nXCIpXG5jb25zdCB0ZXJlbmdnYW51SWNvbiA9IChcIi9hc3NldHMvc3RhdGVJY29uL3RlcmVuZ2dhbnUucG5nXCIpXG5jb25zdCBrZWxhbnRhbkljb24gPSAoXCIvYXNzZXRzL3N0YXRlSWNvbi9rZWxhbnRhbi5wbmdcIilcblxuZXhwb3J0IGNvbnN0IFN0YXRlTGlzdCA9IFtcbiAgICB7XG4gICAgICAgICdpY29uJzogZmVkZXJhbFRlcnJpdG9yeUljb24sXG4gICAgICAgICd2YWx1ZSc6ICdGZWRlcmFsIFRlcnJpdG9yeScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogam9ob3JJY29uLFxuICAgICAgICAndmFsdWUnOiAnSm9ob3InLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IGtlZGFoSWNvbixcbiAgICAgICAgJ3ZhbHVlJzogJ0tlZGFoJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBrdWFsYUx1bXB1ckljb24sXG4gICAgICAgICd2YWx1ZSc6ICdLdWFsYSBMdW1wdXInLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IGxhYnVhbkZlZGVyYWxJY29uLFxuICAgICAgICAndmFsdWUnOiAnTGFidWFuIEZlZGVyYWwnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IGxhYnVhbkljb24sXG4gICAgICAgICd2YWx1ZSc6ICdMYWJ1YW4nLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IG1lbGFrYUljb24sXG4gICAgICAgICd2YWx1ZSc6ICdNZWxha2EnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IG5lZ2VyaVNlbWJpbGFuSWNvbixcbiAgICAgICAgJ3ZhbHVlJzogJ05lZ2VyaSBTZW1iaWxhbicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogcGFoYW5nSWNvbixcbiAgICAgICAgJ3ZhbHVlJzogJ1BhaGFuZycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogcGVuYW5nSWNvbixcbiAgICAgICAgJ3ZhbHVlJzogJ1BlbmFuZycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogcGVyYWtJY29uLFxuICAgICAgICAndmFsdWUnOiAnUGVyYWsnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IHBlcmxpc0ljb24sXG4gICAgICAgICd2YWx1ZSc6ICdQZXJsaXMnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IHB1dHJhamF5RmVkZXJhbEljb24sXG4gICAgICAgICd2YWx1ZSc6ICdQdXRyYWpheSBGZWRlcmFsJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBzYWJhaEljb24sXG4gICAgICAgICd2YWx1ZSc6ICdTYWJhaCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogc2FyYXdha0ljb24sXG4gICAgICAgICd2YWx1ZSc6ICdTYXJhd2FrJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBzZWxhbmdvckljb24sXG4gICAgICAgICd2YWx1ZSc6ICdTZWxhbmdvcicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogdGVyZW5nZ2FudUljb24sXG4gICAgICAgICd2YWx1ZSc6ICdUZXJlbmdnYW51JyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBrZWxhbnRhbkljb24sXG4gICAgICAgICd2YWx1ZSc6ICdLZWxhbnRhbicsXG4gICAgfSxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRlSWNvbihzdGF0ZSkge1xuICAgIGlmIChzdGF0ZSkge1xuICAgICAgICBsZXQgc2VsZWN0ZWRTdGF0ZSA9IFN0YXRlTGlzdC5maW5kKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS52YWx1ZS50b0xvd2VyQ2FzZSgpID09IHN0YXRlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHNlbGVjdGVkU3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZFN0YXRlLmljb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRlKHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZFN0YXRlID0gU3RhdGVMaXN0LmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT0gc3RhdGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoc2VsZWN0ZWRTdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkU3RhdGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICAgIGljb246IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICBpY29uOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQge1xuICAgIFN0YXRlTGlzdCxcbn0iLCJleHBvcnQgY29uc3QgTE9BRElORyA9ICdMT0FESU5HJztcblxuZXhwb3J0IGNvbnN0IFNFVF9JTklURURfUkVEVVggPSAnU0VUX0lOSVRFRF9SRURVWCc7XG5cbmV4cG9ydCBjb25zdCBTRVRfRElTQUJMRV9XSU5ET1dfU0NST0xMID0gJ1NFVF9ESVNBQkxFX1dJTkRPV19TQ1JPTEwnO1xuXG5leHBvcnQgY29uc3QgQURWQU5DRV9NT0RFID0gJ0FEVkFOQ0VfTU9ERSc7XG5leHBvcnQgY29uc3QgTE9HSU5fTU9ERSA9ICdMT0dJTl9NT0RFJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9NT0RFID0gJ1JFR0lTVEVSX01PREUnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9BQ1RJVkVfTUVOVSA9ICdVUERBVEVfQUNUSVZFX01FTlUnO1xuXG5leHBvcnQgY29uc3QgRklMVEVSX0NBUl9CUkFORF9NT0RFID0gJ0ZJTFRFUl9DQVJfQlJBTkRfTU9ERSc7XG5leHBvcnQgY29uc3QgRklMVEVSX0NBUl9TRUxFQ1RFRF9DQVJfQlJBTkRfUk9XID0gJ0ZJTFRFUl9DQVJfU0VMRUNURURfQ0FSX0JSQU5EX1JPVyc7XG5leHBvcnQgY29uc3QgRklMVEVSX0NBUl9TRUFSQ0hfS0VZV09SRFMgPSAnRklMVEVSX0NBUl9TRUFSQ0hfS0VZV09SRFMnO1xuXG5leHBvcnQgY29uc3QgRklMVEVSX0NBUl9NT0RFTF9NT0RFID0gJ0ZJTFRFUl9DQVJfTU9ERUxfTU9ERSc7XG5leHBvcnQgY29uc3QgRklMVEVSX0NBUl9TRUxFQ1RFRF9DQVJfTU9ERUxfUk9XID0gJ0ZJTFRFUl9DQVJfU0VMRUNURURfQ0FSX01PREVMX1JPVyc7XG5leHBvcnQgY29uc3QgRklMVEVSX0NBUl9NT0RFTF9TRUFSQ0hfS0VZV09SRFMgPSAnRklMVEVSX0NBUl9NT0RFTF9TRUFSQ0hfS0VZV09SRFMnO1xuXG5leHBvcnQgY29uc3QgRklMVEVSX0NPTE9SX01PREUgPSAnRklMVEVSX0NPTE9SX01PREUnO1xuZXhwb3J0IGNvbnN0IEZJTFRFUl9DQVJfU0VMRUNURURfQ09MT1JfTU9ERUxfUk9XID0gJ0ZJTFRFUl9DQVJfU0VMRUNURURfQ09MT1JfTU9ERUxfUk9XJztcbmV4cG9ydCBjb25zdCBGSUxURVJfQ09MT1JfTU9ERUxfU0VBUkNIX0tFWVdPUkRTID0gJ0ZJTFRFUl9DT0xPUl9NT0RFTF9TRUFSQ0hfS0VZV09SRFMnO1xuXG5leHBvcnQgY29uc3QgRklMVEVSX0JPRFlfVFlQRV9NT0RFID0gJ0ZJTFRFUl9CT0RZX1RZUEVfTU9ERSc7XG5leHBvcnQgY29uc3QgRklMVEVSX0NBUl9TRUxFQ1RFRF9CT0RZX1RZUEVfTU9ERUxfUk9XID0gJ0ZJTFRFUl9DQVJfU0VMRUNURURfQk9EWV9UWVBFX01PREVMX1JPVyc7XG5leHBvcnQgY29uc3QgRklMVEVSX0JPRFlfVFlQRV9NT0RFTF9TRUFSQ0hfS0VZV09SRFMgPSAnRklMVEVSX0JPRFlfVFlQRV9NT0RFTF9TRUFSQ0hfS0VZV09SRFMnO1xuXG5leHBvcnQgY29uc3QgRklMVEVSX0RSSVZFTl9XSEVFTFNfTU9ERSA9ICdGSUxURVJfRFJJVkVOX1dIRUVMU19NT0RFJztcbmV4cG9ydCBjb25zdCBGSUxURVJfQ0FSX1NFTEVDVEVEX0RSSVZFTl9XSEVFTFNfTU9ERUxfUk9XID0gJ0ZJTFRFUl9DQVJfU0VMRUNURURfRFJJVkVOX1dIRUVMU19NT0RFTF9ST1cnO1xuZXhwb3J0IGNvbnN0IEZJTFRFUl9EUklWRU5fV0hFRUxTX01PREVMX1NFQVJDSF9LRVlXT1JEUyA9ICdGSUxURVJfRFJJVkVOX1dIRUVMU19NT0RFTF9TRUFSQ0hfS0VZV09SRFMnO1xuXG5leHBvcnQgY29uc3QgRklMVEVSX0ZVRUxfVFlQRV9NT0RFID0gJ0ZJTFRFUl9GVUVMX1RZUEVfTU9ERSc7XG5leHBvcnQgY29uc3QgRklMVEVSX0NBUl9TRUxFQ1RFRF9GVUVMX1RZUEVfTU9ERUxfUk9XID0gJ0ZJTFRFUl9DQVJfU0VMRUNURURfRlVFTF9UWVBFX01PREVMX1JPVyc7XG5leHBvcnQgY29uc3QgRklMVEVSX0ZVRUxfVFlQRV9NT0RFTF9TRUFSQ0hfS0VZV09SRFMgPSAnRklMVEVSX0ZVRUxfVFlQRV9NT0RFTF9TRUFSQ0hfS0VZV09SRFMnO1xuXG5leHBvcnQgY29uc3QgRklMVEVSX1NUQVRFX01PREUgPSAnRklMVEVSX1NUQVRFX01PREUnO1xuZXhwb3J0IGNvbnN0IEZJTFRFUl9DQVJfU0VMRUNURURfU1RBVEVfTU9ERUxfUk9XID0gJ0ZJTFRFUl9DQVJfU0VMRUNURURfU1RBVEVfTU9ERUxfUk9XJztcbmV4cG9ydCBjb25zdCBGSUxURVJfU1RBVEVfTU9ERUxfU0VBUkNIX0tFWVdPUkRTID0gJ0ZJTFRFUl9TVEFURV9NT0RFTF9TRUFSQ0hfS0VZV09SRFMnO1xuXG5leHBvcnQgY29uc3QgUVVJQ0tfU0VBUkNIX1BST0RVQ1RTX0xJU1QgPSAnUVVJQ0tfU0VBUkNIX1BST0RVQ1RTX0xJU1QnO1xuXG5leHBvcnQgY29uc3QgU0hPV19DT05UQUNUX0xJU1QgPSAnU0hPV19DT05UQUNUX0xJU1QnO1xuXG5leHBvcnQgY29uc3QgU0VUX0FQUExZX1lFQVIgPSAnU0VUX0FQUExZX1lFQVInO1xuZXhwb3J0IGNvbnN0IFNFVF9BUFBMWV9QUklDRSA9ICdTRVRfQVBQTFlfUFJJQ0UnO1xuZXhwb3J0IGNvbnN0IFNFVF9BUFBMWV9NSUxFQUdFID0gJ1NFVF9BUFBMWV9NSUxFQUdFJztcblxuZXhwb3J0IGNvbnN0IEZJTFRFUl9DQVJfQlJBTkRTID0gJ0ZJTFRFUl9DQVJfQlJBTkRTJztcbmV4cG9ydCBjb25zdCBGSUxURVJfQ0FSX01PREVMUyA9ICdGSUxURVJfQ0FSX01PREVMUyc7XG5leHBvcnQgY29uc3QgRklMVEVSX0NPTE9SUyA9ICdGSUxURVJfQ09MT1JTJztcbmV4cG9ydCBjb25zdCBGSUxURVJfQk9EWV9UWVBFUyA9ICdGSUxURVJfQk9EWV9UWVBFUyc7XG5leHBvcnQgY29uc3QgRklMVEVSX0RSSVZFTl9XSEVFTFMgPSAnRklMVEVSX0RSSVZFTl9XSEVFTFMnO1xuZXhwb3J0IGNvbnN0IEZJTFRFUl9GVUVMX1RZUEVTID0gJ0ZJTFRFUl9GVUVMX1RZUEVTJztcbmV4cG9ydCBjb25zdCBGSUxURVJfU1RBVEVTID0gJ0ZJTFRFUl9TVEFURVMnO1xuXG5leHBvcnQgY29uc3QgU0VUX01FTlVfSEVJR0hUID0gJ1NFVF9NRU5VX0hFSUdIVCc7XG5cbmV4cG9ydCBjb25zdCBTRVRfTk9USUZJQ0FUSU9OX1RPS0VOID0gJ1NFVF9OT1RJRklDQVRJT05fVE9LRU4nO1xuZXhwb3J0IGNvbnN0IFNFVF9OT1RJRklDQVRJT05fVE9LRU5fVElNRV9PVVRfREFURSA9ICdTRVRfTk9USUZJQ0FUSU9OX1RPS0VOX1RJTUVfT1VUX0RBVEUnO1xuXG5cblxuLy9mZXRjaCBxdWljayBmaWx0ZXJcbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJDYXJCcmFuZHMoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfQ0FSX0JSQU5EUyxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJDYXJNb2RlbHMoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfQ0FSX01PREVMUyxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJDb2xvcnMoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfQ09MT1JTLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckJvZHlUeXBlcyhkYXRhKXtcbiBcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9CT0RZX1RZUEVTLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckRyaXZlbldoZWVscyhkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9EUklWRU5fV0hFRUxTLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckZ1ZWxUeXBlcyhkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9GVUVMX1RZUEVTLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlclN0YXRlcyhkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9TVEFURVMsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSlcbiAgfVxufVxuLy9lbmQgZmV0Y2ggcXVpY2sgZmlsdGVyXG5leHBvcnQgZnVuY3Rpb24gbG9hZGluZyhkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IExPQURJTkcsXG4gICAgICBwYXlsb2FkIDogZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWR2YW5jZU1vZGUoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBBRFZBTkNFX01PREUsXG4gICAgICBwYXlsb2FkOmRhdGFcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naW5Nb2RlKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogTE9HSU5fTU9ERSxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJNb2RlKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogUkVHSVNURVJfTU9ERSxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQWN0aXZlTWVudShkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFVQREFURV9BQ1RJVkVfTUVOVSxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59XG5cbi8vIGZpbHRlciBjYXJcbi8vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ2FyQnJhbmRNb2RlKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRklMVEVSX0NBUl9CUkFORF9NT0RFLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckNhclNlbGVjdGVkQ2FyQnJhbmRzUm93KGRhdGEsIGluZGV4KXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9DQVJfU0VMRUNURURfQ0FSX0JSQU5EX1JPVyxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ2FyU2VhcmNoS2V5d29yZHMoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfQ0FSX1NFQVJDSF9LRVlXT1JEUyxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59XG4vLyBlbmQgZmlsdGVyIGNhciAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cblxuLy8gZmlsdGVyIG1vZGVsXG4vLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ2FyTW9kZWxNb2RlKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRklMVEVSX0NBUl9NT0RFTF9NT0RFLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckNhclNlbGVjdGVkQ2FyTW9kZWxzUm93KGRhdGEsIGluZGV4KXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9DQVJfU0VMRUNURURfQ0FSX01PREVMX1JPVyxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ2FyTW9kZWxTZWFyY2hLZXl3b3JkcyhkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9DQVJfTU9ERUxfU0VBUkNIX0tFWVdPUkRTLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pXG4gIH1cbn1cbi8vIGVuZCBmaWx0ZXIgbW9kZWwgLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG5cbi8vIGZpbHRlciBjb2xvclxuLy8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJDb2xvck1vZGUoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfQ09MT1JfTU9ERSxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJDYXJTZWxlY3RlZENvbG9yUm93KGRhdGEsIGluZGV4KXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9DQVJfU0VMRUNURURfQ09MT1JfTU9ERUxfUk9XLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJDb2xvclNlYXJjaEtleXdvcmRzKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRklMVEVSX0NPTE9SX01PREVMX1NFQVJDSF9LRVlXT1JEUyxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59XG4vLyBlbmQgZmlsdGVyIGNvbG9yIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckJvZHlUeXBlTW9kZShkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9CT0RZX1RZUEVfTU9ERSxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJDYXJTZWxlY3RlZEJvZHlUeXBlUm93KGRhdGEsIGluZGV4KXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9DQVJfU0VMRUNURURfQk9EWV9UWVBFX01PREVMX1JPVyxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQm9keVR5cGVTZWFyY2hLZXl3b3JkcyhkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9CT0RZX1RZUEVfTU9ERUxfU0VBUkNIX0tFWVdPUkRTLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pXG4gIH1cbn1cbi8vIGVuZCBmaWx0ZXIgYm9keSB0eXBlIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuXG4vLyBmaWx0ZXIgZHJpdmVuIHdoZWVsc1xuLy8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJEcml2ZW5XaGVlbE1vZGUoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfRFJJVkVOX1dIRUVMU19NT0RFLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckNhclNlbGVjdGVkRHJpdmVuV2hlZWxSb3coZGF0YSwgaW5kZXgpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRklMVEVSX0NBUl9TRUxFQ1RFRF9EUklWRU5fV0hFRUxTX01PREVMX1JPVyxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyRHJpdmVuV2hlZWxTZWFyY2hLZXl3b3JkcyhkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9EUklWRU5fV0hFRUxTX01PREVMX1NFQVJDSF9LRVlXT1JEUyxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59XG4vLyBlbmQgZmlsdGVyIGRyaXZlbiB3aGVlbCAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cblxuLy8gZmlsdGVyIGZ1ZWwgdHlwZVxuLy8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJGdWVsVHlwZU1vZGUoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfRlVFTF9UWVBFX01PREUsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ2FyU2VsZWN0ZWRGdWVsVHlwZVJvdyhkYXRhLCBpbmRleCl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfQ0FSX1NFTEVDVEVEX0ZVRUxfVFlQRV9NT0RFTF9ST1csXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgaW5kZXg6IGluZGV4LFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckZ1ZWxUeXBlU2VhcmNoS2V5d29yZHMoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfRlVFTF9UWVBFX01PREVMX1NFQVJDSF9LRVlXT1JEUyxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59XG4vLyBlbmQgZmlsdGVyIGZ1ZWwgdHlwZSAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cblxuLy8gZmlsdGVyIHN0YXRlXG4vLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlclN0YXRlTW9kZShkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9TVEFURV9NT0RFLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckNhclNlbGVjdGVkU3RhdGVSb3coZGF0YSwgaW5kZXgpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRklMVEVSX0NBUl9TRUxFQ1RFRF9TVEFURV9NT0RFTF9ST1csXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgaW5kZXg6IGluZGV4LFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlclN0YXRlU2VhcmNoS2V5d29yZHMoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfU1RBVEVfTU9ERUxfU0VBUkNIX0tFWVdPUkRTLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pXG4gIH1cbn1cbi8vIGVuZCBmaWx0ZXIgc3RhdGUgLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja1NlYXJjaFByb2R1Y3RzTGlzdChtb2RlLCBxdWlja1NlYXJjaENhclNwZWNzRGF0YSwgcXVpY2tTZWFyY2hQcm9kdWN0YWRzRGF0YSwgdmFsdWVzKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFFVSUNLX1NFQVJDSF9QUk9EVUNUU19MSVNULFxuICAgICAgbW9kZTogbW9kZSxcbiAgICAgIHF1aWNrU2VhcmNoQ2FyU3BlY3NEYXRhLFxuICAgICAgcXVpY2tTZWFyY2hQcm9kdWN0YWRzRGF0YSxcbiAgICAgIHZhbHVlcyxcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q29udGFjdExpc3QoYm9vbGVhbil7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBTSE9XX0NPTlRBQ1RfTElTVCxcbiAgICAgIGJvb2xlYW4sXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0QXBwbHlZZWFyKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogU0VUX0FQUExZX1lFQVIsXG4gICAgICBkYXRhLFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEFwcGx5UHJpY2UoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBTRVRfQVBQTFlfUFJJQ0UsXG4gICAgICBkYXRhLFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEFwcGx5TWlsZWFnZShkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFNFVF9BUFBMWV9NSUxFQUdFLFxuICAgICAgZGF0YSxcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRNZW51SGVpZ2h0KGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogU0VUX01FTlVfSEVJR0hULFxuICAgICAgZGF0YSxcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXROb3RpZmljYXRpb25Ub2tlbihkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFNFVF9OT1RJRklDQVRJT05fVE9LRU4sXG4gICAgICBkYXRhLFxuICAgIH0pXG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXROb3RpZmljYXRpb25Ub2tlblRpbWVPdXREYXRlKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogU0VUX05PVElGSUNBVElPTl9UT0tFTl9USU1FX09VVF9EQVRFLFxuICAgICAgZGF0YSxcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRJbml0ZWRSZWR1eChkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFNFVF9JTklURURfUkVEVVgsXG4gICAgICBkYXRhLFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERpc2FibGVXaW5kb3dTY3JvbGwoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBTRVRfRElTQUJMRV9XSU5ET1dfU0NST0xMLFxuICAgICAgZGF0YSxcbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgRkVUQ0hfQ0FSUExBVEVTTElTVCA9ICdGRVRDSF9DQVJQTEFURUxJU1QnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENhclBsYXRlc0xpc3QoZGF0YSl7XG4gICAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBGRVRDSF9DQVJQTEFURVNMSVNULFxuICAgICAgICAgICAgcGF5bG9hZDpkYXRhXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBTRVRfUE9TVF9NT0RBTF9MSUtFX1JFRlJFU0hfSUQgPSAnU0VUX1BPU1RfTU9EQUxfTElLRV9SRUZSRVNIX0lEJztcbmV4cG9ydCBjb25zdCBGRVRDSF9DQVJfRlJFQUtfUE9TVFMgPSAnRkVUQ0hfQ0FSX0ZSRUFLX1BPU1RTJztcbmV4cG9ydCBjb25zdCBGRVRDSF9FRElURURfUE9TVCA9ICdGRVRDSF9FRElURURfUE9TVCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRQb3N0TW9kYWxMaWtlUmVmcmVzaElkKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogU0VUX1BPU1RfTU9EQUxfTElLRV9SRUZSRVNIX0lELFxuICAgICAgcGF5bG9hZDpkYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENhckZyZWFrUG9zdHMoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9DQVJfRlJFQUtfUE9TVFMsXG4gICAgICBwYXlsb2FkOmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoRWRpdGVkUG9zdChkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX0VESVRFRF9QT1NULFxuICAgICAgcGF5bG9hZDpkYXRhLFxuICAgIH0pO1xuICB9XG59IiwiZXhwb3J0IGNvbnN0IEZFVENIX1JFVklTSU9OX0FOU1dFUkVEX1FVRVNUSU9OUyA9ICdGRVRDSF9SRVZJU0lPTl9BTlNXRVJFRF9RVUVTVElPTlMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hSZXZpc2lvbkFuc3dlcmVkUXVlc3Rpb25zKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfUkVWSVNJT05fQU5TV0VSRURfUVVFU1RJT05TLFxuICAgICAgcGF5bG9hZDpkYXRhLFxuICAgIH0pO1xuICB9XG59IiwiZXhwb3J0IGNvbnN0IEZFVENIX0NMSUVOVF9TT0NLRVRfSU8gPSAnRkVUQ0hfQ0xJRU5UX1NPQ0tFVF9JTyc7XG5leHBvcnQgY29uc3QgQ0xFQVJfQ0xJRU5UX1NPQ0tFVF9JTyA9ICdDTEVBUl9DTElFTlRfU09DS0VUX0lPJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQ2xpZW50U29ja2V0SW8oZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9DTElFTlRfU09DS0VUX0lPLFxuICAgICAgcGF5bG9hZDpkYXRhLFxuICAgIH0pO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDbGllbnRTb2NrZXRJbyhkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IENMRUFSX0NMSUVOVF9TT0NLRVRfSU8sXG4gICAgfSk7XG4gIH1cbn0iLCJleHBvcnQgY29uc3QgRkVUQ0hfTkVXUyA9ICdGRVRDSF9ORVdTJztcbmV4cG9ydCBjb25zdCBGRVRDSF9DTFVCID0gJ0ZFVENIX0NMVUInO1xuZXhwb3J0IGNvbnN0IEZFVENIX1BSSUNFID0gJ0ZFVENIX1BSSUNFJztcbmV4cG9ydCBjb25zdCBGRVRDSF9QT1BVTEFSID0gJ0ZFVENIX1BPUFVMQVInO1xuZXhwb3J0IGNvbnN0IEZFVENIX1BPUFVMQVJDQVJTID0gJ0ZFVENIX1BPUFVMQVJDQVJTJztcbmV4cG9ydCBjb25zdCBGRVRDSF9DQVJOQU1FID0gJ0ZFVENIX0NBUk5BTUUnO1xuZXhwb3J0IGNvbnN0IEZFVENIX0NBUkRFVEFJTFMgPSAnRkVUQ0hfQ0FSREVUQUlMUyc7XG5leHBvcnQgY29uc3QgRkVUQ0hfQlJBTkRTID0gJ0ZFVENIX0JSQU5EUyc7XG5leHBvcnQgY29uc3QgRkVUQ0hfQlJBTkRERVRBSUwgPSAnRkVUQ0hfQlJBTkRERVRBSUwnO1xuZXhwb3J0IGNvbnN0IEZFVENIX0JSQU5EQ0FSUyA9ICdGRVRDSF9CUkFORENBUlMnO1xuZXhwb3J0IGNvbnN0IEZFVENIX0RFVEFJTFMgPSAnRkVUQ0hfREVUQUlMUyc7XG5leHBvcnQgY29uc3QgRkVUQ0hfRlVFTCA9ICdGRVRDSF9GVUVMJztcbmV4cG9ydCBjb25zdCBGRVRDSF9GSUxURVJFRF9DT01QQVJFX0RBVEEgPSAnRkVUQ0hfRklMVEVSRURfQ09NUEFSRV9EQVRBJztcbmV4cG9ydCBjb25zdCBGRVRDSF9QRUVSX0NPTVBBUkVfQ0FSUyA9ICdGRVRDSF9QRUVSX0NPTVBBUkVfQ0FSUyc7XG5leHBvcnQgY29uc3QgRkVUQ0hfQ09NUEFSRV9ORVdDQVJfSURTID0gJ0ZFVENIX0NPTVBBUkVfTkVXQ0FSX0lEUyc7XG5leHBvcnQgY29uc3QgQUREX0NPTVBBUkVfTkVXQ0FSX0lEID0gJ0FERF9DT01QQVJFX05FV0NBUl9JRCc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0NPTVBBUkVfTkVXQ0FSX0lEID0gJ1JFTU9WRV9DT01QQVJFX05FV0NBUl9JRCc7XG5leHBvcnQgY29uc3QgRkVUQ0hfQ09NUEFSRV9fTkVXQ0FSX0xJTUlUID0gJ0ZFVENIX0NPTVBBUkVfX05FV0NBUl9MSU1JVCc7XG5leHBvcnQgY29uc3QgRkVUQ0hfTkVXX0NBUl9GSUxURVJfR1JPVVAgPSAnRkVUQ0hfTkVXX0NBUl9GSUxURVJfR1JPVVAnO1xuZXhwb3J0IGNvbnN0IFJFU0VUX05FV19DQVJfRklMVEVSX0dST1VQID0gJ1JFU0VUX05FV19DQVJfRklMVEVSX0dST1VQJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoTmV3cyhkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX05FV1MsXG4gICAgICBwYXlsb2FkOmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQ2x1YihkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX0NMVUIsXG4gICAgICBwYXlsb2FkOmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUHJpY2UoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9QUklDRSxcbiAgICAgIHBheWxvYWQ6ZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQb3B1bGFyKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfUE9QVUxBUixcbiAgICAgIHBheWxvYWQ6ZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQb3B1bGFyQ2FycyhkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX1BPUFVMQVJDQVJTLFxuICAgICAgcGF5bG9hZDpkYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENhck5hbWUoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9DQVJOQU1FLFxuICAgICAgcGF5bG9hZDpkYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENhckRldGFpbHMoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9DQVJERVRBSUxTLFxuICAgICAgcGF5bG9hZDpkYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEJyYW5kcyhkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX0JSQU5EUyxcbiAgICAgIHBheWxvYWQ6ZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hCcmFuZERldGFpbChkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX0JSQU5EREVUQUlMLFxuICAgICAgcGF5bG9hZDpkYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEJyYW5kQ2FycyhkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX0JSQU5EQ0FSUyxcbiAgICAgIHBheWxvYWQ6ZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hEZXRhaWxzKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfREVUQUlMUyxcbiAgICAgIHBheWxvYWQ6ZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hGdWVsKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfRlVFTCxcbiAgICAgIHBheWxvYWQ6ZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyZWRDb21wYXJlRGF0YShkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX0ZJTFRFUkVEX0NPTVBBUkVfREFUQSxcbiAgICAgIHBheWxvYWQ6ZGF0YVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENvbXBhcmVOZXdDYXJJZHMoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9DT01QQVJFX05FV0NBUl9JRFMsXG4gICAgICBwYXlsb2FkOmRhdGFcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ29tcGFyZU5ld0NhcklkKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQUREX0NPTVBBUkVfTkVXQ0FSX0lELFxuICAgICAgcGF5bG9hZDpkYXRhXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNvbXBhcmVOZXdDYXJJZChkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFJFTU9WRV9DT01QQVJFX05FV0NBUl9JRCxcbiAgICAgIHBheWxvYWQ6ZGF0YVxuICAgIH0pO1xuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQ29tcGFyZU5ld0NhckxpbWl0KGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfQ09NUEFSRV9fTkVXQ0FSX0xJTUlULFxuICAgICAgcGF5bG9hZDpkYXRhXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUGVlckNvbXBhcmVDYXJzKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfUEVFUl9DT01QQVJFX0NBUlMsXG4gICAgICBwYXlsb2FkOmRhdGFcbiAgICB9KTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoTmV3Q2FyRmlsdGVyR3JvdXAoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9ORVdfQ0FSX0ZJTFRFUl9HUk9VUCxcbiAgICAgIHBheWxvYWQ6ZGF0YVxuICAgIH0pO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcmVzZXROZXdDYXJGaWx0ZXJHcm91cChkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFJFU0VUX05FV19DQVJfRklMVEVSX0dST1VQLFxuICAgIH0pO1xuICB9XG59IiwiZXhwb3J0IGNvbnN0IEZFVENIX1BST0RVQ1RTTElTVCA9ICdGRVRDSF9QUk9EVUNUU0xJU1QnO1xuZXhwb3J0IGNvbnN0IEZFVENIX1BST0RVQ1RTTElTVF9IT01FID0gJ0ZFVENIX1BST0RVQ1RTTElTVF9IT01FJztcbmV4cG9ydCBjb25zdCBQVVNIX1BST0RVQ1RTTElTVCA9ICdQVVNIX1BST0RVQ1RTTElTVCc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1BST0RVQ1RTTElTVCA9ICdSRU1PVkVfUFJPRFVDVFNMSVNUJztcbmV4cG9ydCBjb25zdCBVUERBVEVfUFJPRFVDVFNMSVNUID0gJ1VQREFURV9QUk9EVUNUU0xJU1QnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9BQ1RJVkVfSURfUFJPRFVDVFNfTElTVCA9ICdVUERBVEVfQUNUSVZFX0lEX1BST0RVQ1RTX0xJU1QnO1xuZXhwb3J0IGNvbnN0IEFERF9DT01QQVJFX19QUk9EVUNUX0lEID0gJ0FERF9DT01QQVJFX19QUk9EVUNUX0lEJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ09NUEFSRV9QUk9EVUNUX0lEID0gJ1JFTU9WRV9DT01QQVJFX1BST0RVQ1RfSUQnO1xuZXhwb3J0IGNvbnN0IENMRUFSX0NPTVBBUkVfUFJPRFVDVF9JRFMgPSAnQ0xFQVJfQ09NUEFSRV9QUk9EVUNUX0lEUyc7XG5leHBvcnQgY29uc3QgUEFUQ0hfQ09NUEFSRV9QUk9EVUNUX0lEUyA9ICdQQVRDSF9DT01QQVJFX1BST0RVQ1RfSURTJztcbmV4cG9ydCBjb25zdCBGRVRDSF9GSUxURVJFRF9DT01QQVJFX0RBVEEgPSAnRkVUQ0hfRklMVEVSRURfQ09NUEFSRV9EQVRBJztcbmV4cG9ydCBjb25zdCBGRVRDSF9GRUFUVVJFU19MSVNUID0gJ0ZFVENIX0ZFQVRVUkVTX0xJU1QnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9DSEVDS0VEX0ZFQVRVUkVTX0RBVEUgPSAnVVBEQVRFX0NIRUNLRURfRkVBVFVSRVNfREFURSc7XG5leHBvcnQgY29uc3QgRkVUQ0hfQ09NUEFSRV9MSU1JVCA9ICdGRVRDSF9DT01QQVJFX0xJTUlUJztcbmV4cG9ydCBjb25zdCBGRVRDSF9QUk9EVUNUX0ZJTFRFUl9PUFRJT05TID0gJ0ZFVENIX1BST0RVQ1RfRklMVEVSX09QVElPTlMnO1xuZXhwb3J0IGNvbnN0IENMRUFSX1BST0RVQ1RfRklMVEVSX09QVElPTlMgPSAnQ0xFQVJfUFJPRFVDVF9GSUxURVJfT1BUSU9OUyc7XG5leHBvcnQgY29uc3QgRkVUQ0hfUFJPRFVDVF9GSUxURVJfR1JPVVAgPSAnRkVUQ0hfUFJPRFVDVF9GSUxURVJfR1JPVVAnO1xuZXhwb3J0IGNvbnN0IENMRUFSX1BST0RVQ1RfRklMVEVSX0dST1VQID0gJ0NMRUFSX1BST0RVQ1RfRklMVEVSX0dST1VQJztcbmV4cG9ydCBjb25zdCBGRVRDSF9QUk9EVUNUX0ZJTFRFUl9DT05GSUcgPSAnRkVUQ0hfUFJPRFVDVF9GSUxURVJfQ09ORklHJztcbmV4cG9ydCBjb25zdCBDTEVBUl9QUk9EVUNUX0ZJTFRFUl9DT05GSUcgPSAnQ0xFQVJfUFJPRFVDVF9GSUxURVJfQ09ORklHJztcbmV4cG9ydCBjb25zdCBGRVRDSF9GSUxURVJfTU9EQUxfU1RBVEUgPSAnRkVUQ0hfRklMVEVSX01PREFMX1NUQVRFJztcbmV4cG9ydCBjb25zdCBTRVRfUFJPRFVDVF9MSVNUX0xPQURJTkcgPSAnU0VUX1BST0RVQ1RfTElTVF9MT0FESU5HJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUHJvZHVjdHNMaXN0KGRhdGEpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX1BST0RVQ1RTTElTVCxcbiAgICAgIHBheWxvYWQ6IGRhdGFcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQcm9kdWN0c0xpc3RIb21lKGRhdGEpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX1BST0RVQ1RTTElTVF9IT01FLFxuICAgICAgcGF5bG9hZDogZGF0YVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoUHJvZHVjdHNMaXN0KGRhdGEpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFBVU0hfUFJPRFVDVFNMSVNULFxuICAgICAgcGF5bG9hZDogZGF0YVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9kdWN0c0xpc3QoZGF0YSkge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogUkVNT1ZFX1BST0RVQ1RTTElTVCxcbiAgICAgIHBheWxvYWQ6IGRhdGFcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUHJvZHVjdExpc3QoZGF0YSkge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogVVBEQVRFX1BST0RVQ1RTTElTVCxcbiAgICAgIHBheWxvYWQ6IGRhdGFcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQWN0aXZlSWRQcm9kdWN0TGlzdChpZCkge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogVVBEQVRFX0FDVElWRV9JRF9QUk9EVUNUU19MSVNULFxuICAgICAgaWQsXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ29tcGFyZVByb2R1Y3RJZHMoKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBDTEVBUl9DT01QQVJFX1BST0RVQ1RfSURTLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJlZENvbXBhcmVEYXRhKGRhdGEpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX0ZJTFRFUkVEX0NPTVBBUkVfREFUQSxcbiAgICAgIHBheWxvYWQ6IGRhdGFcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hGZWF0dXJlc0xpc3QoZGF0YSkge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfRkVBVFVSRVNfTElTVCxcbiAgICAgIHBheWxvYWQ6IGRhdGFcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ2hlY2tlZEZlYXR1cmVzRGF0ZShkYXRhKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBVUERBVEVfQ0hFQ0tFRF9GRUFUVVJFU19EQVRFLFxuICAgICAgcGF5bG9hZDogZGF0YVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENvbXBhcmVDYXJMaW1pdChkYXRhKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9DT01QQVJFX0xJTUlULFxuICAgICAgcGF5bG9hZDogZGF0YVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDb21wYXJlUHJvZHVjdElkKGRhdGEpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEFERF9DT01QQVJFX19QUk9EVUNUX0lELFxuICAgICAgcGF5bG9hZDogZGF0YVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDb21wYXJlUHJvZHVjdElkKGRhdGEpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFJFTU9WRV9DT01QQVJFX1BST0RVQ1RfSUQsXG4gICAgICBwYXlsb2FkOiBkYXRhXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoQ29tcGFyZVByb2R1Y3RJZHMoZGF0YSkge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogUEFUQ0hfQ09NUEFSRV9QUk9EVUNUX0lEUyxcbiAgICAgIHBheWxvYWQ6IGRhdGFcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQcm9kdWN0RmlsdGVyT3B0aW9ucyhkYXRhKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9QUk9EVUNUX0ZJTFRFUl9PUFRJT05TLFxuICAgICAgcGF5bG9hZDogZGF0YVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclByb2R1Y3RGaWx0ZXJPcHRpb25zKGRhdGEpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IENMRUFSX1BST0RVQ1RfRklMVEVSX09QVElPTlMsXG4gICAgICBwYXlsb2FkOiB7fSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQcm9kdWN0RmlsdGVyR3JvdXAoZGF0YSkge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfUFJPRFVDVF9GSUxURVJfR1JPVVAsXG4gICAgICBwYXlsb2FkOiBkYXRhXG4gICAgfSk7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclByb2R1Y3RGaWx0ZXJHcm91cChkYXRhKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBDTEVBUl9QUk9EVUNUX0ZJTFRFUl9HUk9VUCxcbiAgICAgIHBheWxvYWQ6IHt9LFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFByb2R1Y3RGaWx0ZXJDb25maWcoZGF0YSkge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfUFJPRFVDVF9GSUxURVJfQ09ORklHLFxuICAgICAgcGF5bG9hZDogZGF0YVxuICAgIH0pO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY2xlYXJQcm9kdWN0RmlsdGVyQ29uZmlnKCkge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQ0xFQVJfUFJPRFVDVF9GSUxURVJfQ09ORklHLFxuICAgICAgcGF5bG9hZDoge30sXG4gICAgfSk7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEZpbHRlck1vZGFsU3RhdGUoZGF0YSkge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfRklMVEVSX01PREFMX1NUQVRFLFxuICAgICAgcGF5bG9hZDogZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNldFByb2R1Y3RMaXN0TG9hZGluZyhkYXRhKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBTRVRfUFJPRFVDVF9MSVNUX0xPQURJTkcsXG4gICAgICBwYXlsb2FkOiBkYXRhLFxuICAgIH0pO1xuICB9XG59IiwiLy9BY3Rpb24gVHlwZXNcbmV4cG9ydCBjb25zdCBTVEVQU19QUk9QU19DVVJSRU5UID0gJ1NURVBTX1BST1BTX0NVUlJFTlQnO1xuZXhwb3J0IGNvbnN0IEZPUk1fT05FID0gJ0ZPUk1fT05FJztcblxuLy9BY3Rpb24gQ3JlYXRvclxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzUHJvcHNDdXJyZW50KGRhdGEpe1xuICAgIHJldHVybihkaXNwYXRjaCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBTVEVQU19QUk9QU19DVVJSRU5ULFxuICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtT25lKGRhdGEpe1xuICAgIHJldHVybihkaXNwYXRjaCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBGT1JNX09ORSxcbiAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiLy9BY3Rpb24gVHlwZXNcbmV4cG9ydCBjb25zdCBVUERBVEVfU0VMTEVSX1BST0ZJTEUgPSBcIlVQREFURV9TRUxMRVJfUFJPRklMRVwiO1xuXG5cbi8vQWN0aW9uIENyZWF0b3JcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTZWxsZXJQcm9maWxlKGRhdGEpe1xuICAgIHJldHVybihkaXNwYXRjaCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBVUERBVEVfU0VMTEVSX1BST0ZJTEUsXG4gICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBVUERBVEVfU09DS0VUX0lORk8gPSAnVVBEQVRFX1NPQ0tFVF9JTkZPJztcbmV4cG9ydCBjb25zdCBERUxFVEVfU09DS0VUX0lORk8gPSAnREVMRVRFX1NPQ0tFVF9JTkZPJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVNvY2tldEluZm8oc29ja2V0SW5mbyl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBVUERBVEVfU09DS0VUX0lORk8sXG4gICAgICBwYXlsb2FkOnNvY2tldEluZm9cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlU29ja2V0SW5mbygpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogREVMRVRFX1NPQ0tFVF9JTkZPLFxuICAgICAgcGF5bG9hZDpmYWxzZVxuICAgIH0pO1xuICB9XG59IiwiZXhwb3J0IGNvbnN0IExPR0lOX1NVQ0NFU1NGVUwgPSAnTE9HSU5fU1VDQ0VTU0ZVTCc7XG5leHBvcnQgY29uc3QgTE9HT1VUX1NVQ0NFU1NGVUwgPSAnTE9HT1VUX1NVQ0NFU1NGVUwnO1xuZXhwb3J0IGNvbnN0IEFERFJFU1NfQk9PS19GT1JNID0gJ0FERFJFU1NfQk9PS19GT1JNJztcbmV4cG9ydCBjb25zdCBCQU5LX0ZPUk0gPSAnQkFOS19GT1JNJztcbmV4cG9ydCBjb25zdCBDQVJEX0ZPUk0gPSAnQ0FSRF9GT1JNJztcbmV4cG9ydCBjb25zdCBTRVRfVVNFUiA9ICdTRVRfVVNFUic7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpblN1Y2Nlc3NmdWwodXNlckluZm8pe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogTE9HSU5fU1VDQ0VTU0ZVTCxcbiAgICAgIHBheWxvYWQ6dXNlckluZm9cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nb3V0U3VjY2Vzc2Z1bCgpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogTE9HT1VUX1NVQ0NFU1NGVUwsXG4gICAgICBwYXlsb2FkOmZhbHNlXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFVzZXIodXNlckluZm8pe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogU0VUX1VTRVIsXG4gICAgICBwYXlsb2FkOnVzZXJJbmZvXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZHJlc3NCb29rRm9ybShmb3JtKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEFERFJFU1NfQk9PS19GT1JNLFxuICAgICAgcGF5bG9hZDpmb3JtXG4gICAgfSk7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBjYXJkRm9ybShmb3JtKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IENBUkRfRk9STSxcbiAgICAgIHBheWxvYWQ6Zm9ybVxuICAgIH0pO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gYmFua0Zvcm0oZm9ybSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBCQU5LX0ZPUk0sXG4gICAgICBwYXlsb2FkOmZvcm1cbiAgICB9KTtcbiAgfVxufSIsImV4cG9ydCBjb25zdCBBRERfTElLRSA9ICdBRERfTElLRSc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0xJS0UgPSAnUkVNT1ZFX0xJS0UnO1xuZXhwb3J0IGNvbnN0IEFERF9CT09LTUFSSyA9ICdBRERfQk9PS01BUksnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9CT09LTUFSSyA9ICdSRU1PVkVfQk9PS01BUksnO1xuZXhwb3J0IGNvbnN0IEFERF9MSUtFX01TRyA9ICdBRERfTElLRV9NU0cnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9MSUtFX01TRyA9ICdSRU1PVkVfTElLRV9NU0cnO1xuIFxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTGlrZSh2YWx1ZSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBBRERfTElLRSxcbiAgICAgIHZhbHVlOnZhbHVlXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUxpa2UodmFsdWUpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogUkVNT1ZFX0xJS0UsXG4gICAgICB2YWx1ZTp2YWx1ZVxuICAgIH0pO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gYWRkQm9va21hcmsodmFsdWUpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQUREX0JPT0tNQVJLLFxuICAgICAgdmFsdWU6dmFsdWVcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQm9va21hcmsodmFsdWUpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogUkVNT1ZFX0JPT0tNQVJLLFxuICAgICAgdmFsdWU6dmFsdWVcbiAgICB9KTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGFkZExpa2VNc2codmFsdWUpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQUREX0xJS0VfTVNHLFxuICAgICAgdmFsdWU6dmFsdWVcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTGlrZU1zZyh2YWx1ZSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBSRU1PVkVfTElLRV9NU0csXG4gICAgICB2YWx1ZTp2YWx1ZVxuICAgIH0pO1xuICB9XG59IiwiZXhwb3J0IGNvbnN0IEZFVENIX1ZBUklBTlQgPSAnRkVUQ0hfVkFSSUFOVCc7XG5leHBvcnQgY29uc3QgQ0xFQVJfVkFSSUFOVCA9ICdDTEVBUl9WQVJJQU5UJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoVmFyaWFudChkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX1ZBUklBTlQsXG4gICAgICBwYXlsb2FkOmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyVmFyaWFudChkYXRhKXtcbiAgICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IENMRUFSX1ZBUklBTlQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgIiwiXG5cbmltcG9ydCB7IExPR0lOX1NVQ0NFU1NGVUwsIExPR09VVF9TVUNDRVNTRlVMLCBsb2dpblN1Y2Nlc3NmdWwsIGxvZ291dFN1Y2Nlc3NmdWwsIFNFVF9VU0VSIH0gZnJvbSAnLi9hY3Rpb25zL3VzZXItYWN0aW9ucyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgRkVUQ0hfQ09NUEFSRV9MSU1JVCwgRkVUQ0hfUFJPRFVDVFNMSVNUX0hPTUUsIEFERF9DT01QQVJFX19QUk9EVUNUX0lELCBQQVRDSF9DT01QQVJFX1BST0RVQ1RfSURTLCBDTEVBUl9DT01QQVJFX1BST0RVQ1RfSURTLCBSRU1PVkVfQ09NUEFSRV9QUk9EVUNUX0lEIH0gZnJvbSAnLi9hY3Rpb25zL3Byb2R1Y3RzTGlzdC1hY3Rpb25zJztcbmltcG9ydCBsb2NhbFN0b3JhZ2UgZnJvbSAnbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgeyBGRVRDSF9DTElFTlRfU09DS0VUX0lPLCBDTEVBUl9DTElFTlRfU09DS0VUX0lPIH0gZnJvbSAnLi9hY3Rpb25zL2xpdmUtYWN0aW9uJztcbmltcG9ydCB7IFVQREFURV9TT0NLRVRfSU5GTywgREVMRVRFX1NPQ0tFVF9JTkZPIH0gZnJvbSAnLi9hY3Rpb25zL3NvY2tldFJlZnJlc2gtYWN0aW9ucyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBpc1ZhbGlkTnVtYmVyIH0gZnJvbSAnLi4vY29tbW9uLWZ1bmN0aW9uJztcblxuLy9Ob3Qgc3VwcG9ydGVkIGZvciBtdWx0aXBsZSBzYW1lIGFjdGlvbiB1cGRhdGUgeWV0XG4vL0V4LiBBRERfQ09NUEFSRV9fUFJPRFVDVF9JRCBmb3IgdHdpY2UsIGkgd2lsbCBvbmx5IHRha2UgdGhlIGxhc3QgMS4gU2FtZSBhY3Rpb25zIGJlZm9yZSBsYXN0IG9uZSB3aWxsIGJlIGlnbm9yZWQ7XG5leHBvcnQgY29uc3Qgc3RhdGVQZXJzaXN0QWN0aW9ucyA9IFtcbiAge1xuICAgIGFjdGlvbjogTE9HSU5fU1VDQ0VTU0ZVTCxcbiAgICByZWR1Y2VyOiAndXNlcicsXG4gIH0sXG4gIHtcbiAgICBhY3Rpb246IExPR09VVF9TVUNDRVNTRlVMLFxuICAgIHJlZHVjZXI6ICd1c2VyJyxcbiAgfSxcbiAge1xuICAgIGFjdGlvbjogU0VUX1VTRVIsXG4gICAgcmVkdWNlcjogJ3VzZXInLFxuICB9LFxuICB7XG4gICAgYWN0aW9uOiBGRVRDSF9DT01QQVJFX0xJTUlULFxuICAgIHJlZHVjZXI6ICdwcm9kdWN0c0xpc3QnLFxuICB9LFxuICAvLyB7XG4gIC8vICAgYWN0aW9uIDogQUREX0NPTVBBUkVfX1BST0RVQ1RfSUQsXG4gIC8vIHJlZHVjZXIgOiAncHJvZHVjdExpc3QnLFxuICAvLyB9LFxuICB7XG4gICAgYWN0aW9uOiBQQVRDSF9DT01QQVJFX1BST0RVQ1RfSURTLFxuICAgIHJlZHVjZXI6ICdwcm9kdWN0c0xpc3QnLFxuICB9LFxuICB7XG4gICAgYWN0aW9uOiBDTEVBUl9DT01QQVJFX1BST0RVQ1RfSURTLFxuICAgIHJlZHVjZXI6ICdwcm9kdWN0c0xpc3QnLFxuICB9LFxuICB7XG4gICAgYWN0aW9uOiBSRU1PVkVfQ09NUEFSRV9QUk9EVUNUX0lELFxuICAgIHJlZHVjZXI6ICdwcm9kdWN0c0xpc3QnLFxuICB9LFxuICB7XG4gICAgYWN0aW9uOiBGRVRDSF9DTElFTlRfU09DS0VUX0lPLFxuICAgIHJlZHVjZXI6ICdzb2NrZXRSZWZyZXNoJyxcbiAgfSxcbiAge1xuICAgIGFjdGlvbjogQ0xFQVJfQ0xJRU5UX1NPQ0tFVF9JTyxcbiAgICByZWR1Y2VyOiAnc29ja2V0UmVmcmVzaCcsXG4gIH0sXG4gIHtcbiAgICBhY3Rpb246IFVQREFURV9TT0NLRVRfSU5GTyxcbiAgICByZWR1Y2VyOiAnc29ja2V0UmVmcmVzaCcsXG4gIH0sXG4gIHtcbiAgICBhY3Rpb246IERFTEVURV9TT0NLRVRfSU5GTyxcbiAgICByZWR1Y2VyOiAnc29ja2V0UmVmcmVzaCcsXG4gIH0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gcGVyc2lzdFJlZHV4KHJlZHVjZXIsIGRhdGEpIHtcblxuICBpZiAocmVkdWNlciAmJiBfLmlzUGxhaW5PYmplY3QoZGF0YSkgJiYgIV8uaXNFbXB0eShkYXRhKSkge1xuICAgIGxldCByZWR1eFN0YXRlcyA9IGxvY2FsU3RvcmFnZS5nZXQoJ3JlZHV4Jyk7XG4gICAgaWYgKCFfLmlzUGxhaW5PYmplY3QocmVkdXhTdGF0ZXMpKSB7XG4gICAgICByZWR1eFN0YXRlcyA9IHt9O1xuICAgIH1cblxuICAgIHJlZHV4U3RhdGVzW3JlZHVjZXJdID0gZGF0YTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0KCdyZWR1eCcsIHJlZHV4U3RhdGVzKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJc05lZWRQZXJzaXN0KGFjdGlvbikge1xuICBpZiAoYWN0aW9uKSB7XG4gICAgcmV0dXJuIF8uc29tZShzdGF0ZVBlcnNpc3RBY3Rpb25zIHx8IFtdIHx8IFtdLCBbJ2FjdGlvbicsIGFjdGlvbl0pIHx8IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tOZWVkUGVyc2lzdChhY3Rpb24sIHJlZHVjZXIsIGRhdGEsIGlzUmVzdG9yZURhdGEpIHtcbiAgbGV0IG5lZWRQZXJzaXN0ID0gY2hlY2tJc05lZWRQZXJzaXN0KGFjdGlvbik7XG4gIGxldCBwZXJzaXN0T2JqID0gZ2V0UGVyc2lzdE9iaihhY3Rpb24pO1xuXG4gIGlmIChuZWVkUGVyc2lzdCAmJiBfLmdldChwZXJzaXN0T2JqLCAncmVkdWNlcicpID09IHJlZHVjZXIpIHtcbiAgICBsZXQgcGVyc2lzdGVkU3RhdGVzID0gZ2V0TG9jYWxTdG9yYWdlUGVyc2lzdFN0YXRlcyhfLmdldChwZXJzaXN0T2JqLCAncmVkdWNlcicpKTtcbiAgICBsZXQgc2VsZWN0ZWRQZXJzaXN0ZWRTdGF0ZSA9IF8uZmluZChwZXJzaXN0ZWRTdGF0ZXMsIHtcbiAgICAgIHBlcnNpc3RPYmo6IHtcbiAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgc2VxdWVuY2UgPSAwO1xuXG4gICAgaWYgKCFpc1Jlc3RvcmVEYXRhIHx8ICFpc1ZhbGlkTnVtYmVyKF8uZ2V0KHNlbGVjdGVkUGVyc2lzdGVkU3RhdGUsICdzZXF1ZW5jZScpKSkge1xuICAgICAgc2VxdWVuY2UgPSBfLmdldChfLm1heEJ5KHBlcnNpc3RlZFN0YXRlcyB8fCBbXSwgJ3NlcXVlbmNlJyksICdzZXF1ZW5jZScpO1xuICAgICAgaWYgKCFpc1ZhbGlkTnVtYmVyKHNlcXVlbmNlKSkge1xuICAgICAgICBzZXF1ZW5jZSA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXF1ZW5jZSA9IHBhcnNlSW50KHNlcXVlbmNlKSArIDE7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlcXVlbmNlID0gcGFyc2VJbnQoXy5nZXQoc2VsZWN0ZWRQZXJzaXN0ZWRTdGF0ZSwgJ3NlcXVlbmNlJykpO1xuICAgIH1cblxuXG4gICAgbGV0IHBlcnNpc3REYXRhID0ge1xuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHJlZHVjZXI6IF8uZ2V0KHBlcnNpc3RPYmosICdyZWR1Y2VyJyksXG4gICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICBzZXF1ZW5jZTogc2VxdWVuY2UsXG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXQoXy5nZXQocGVyc2lzdE9iaiwgWydhY3Rpb24nXSksIHBlcnNpc3REYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGVyc2lzdE9iaihhY3Rpb24pIHtcbiAgaWYgKGFjdGlvbikge1xuICAgIHJldHVybiBfLmZpbmQoc3RhdGVQZXJzaXN0QWN0aW9ucyB8fCBbXSwgWydhY3Rpb24nLCBhY3Rpb25dKSB8fCB7fTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZVBlcnNpc3RTdGF0ZXMocmVkdWNlcikge1xuXG5cbiAgbGV0IGNvb2tpZVBlcnNpc3RTdGF0ZXMgPSBbXTtcbiAgXy5mb3JFYWNoKHN0YXRlUGVyc2lzdEFjdGlvbnMsIGZ1bmN0aW9uIChzdGF0ZVBlcnNpc3RBY3Rpb24pIHtcbiAgICBsZXQgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXQoc3RhdGVQZXJzaXN0QWN0aW9uWydhY3Rpb24nXSk7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGlmICghcmVkdWNlciB8fCByZWR1Y2VyID09IF8uZ2V0KGRhdGEsICdyZWR1Y2VyJykpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb29raWVQZXJzaXN0U3RhdGVzLnB1c2goe1xuICAgICAgICAgICAgcGVyc2lzdE9iajogc3RhdGVQZXJzaXN0QWN0aW9uLFxuICAgICAgICAgICAgZGF0YTogXy5nZXQoZGF0YSwgWydkYXRhJ10pLFxuICAgICAgICAgICAgcmVkdWNlcjogXy5nZXQoZGF0YSwgWydyZWR1Y2VyJ10pLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBtb21lbnQoXy5nZXQoZGF0YSwgWydjcmVhdGVkQXQnXSkpLFxuICAgICAgICAgICAgc2VxdWVuY2U6IF8uZ2V0KGRhdGEsIFsnc2VxdWVuY2UnXSkgfHwgMCxcbiAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG4gIGNvb2tpZVBlcnNpc3RTdGF0ZXMgPSBfLnNvcnRCeShjb29raWVQZXJzaXN0U3RhdGVzLCBbJ3JlZHVjZXInLCAnc2VxdWVuY2UnXSk7XG4gIHJldHVybiBjb29raWVQZXJzaXN0U3RhdGVzIHx8IFtdO1xuXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGR5bmFtaWNEaXNwYXRjaChhY3Rpb24sIGRhdGEpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IGFjdGlvbixcbiAgICAgIHBheWxvYWQ6IGRhdGEsXG4gICAgICBpc1Jlc3RvcmVEYXRhOiB0cnVlLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBSRVNUT1JFX1JFRFVYID0gJ1JFU1RPUkVfUkVEVVgnO1xuZXhwb3J0IGZ1bmN0aW9uIHJlc3RvcmVSZWR1eChkYXRhKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBSRVNUT1JFX1JFRFVYLFxuICAgICAgcGF5bG9hZDogZGF0YSxcbiAgICB9KTtcbiAgfVxufSIsImltcG9ydCB7XG4gIExPQURJTkcsXG5cbiAgQURWQU5DRV9NT0RFLFxuICBMT0dJTl9NT0RFLFxuICBSRUdJU1RFUl9NT0RFLFxuICBVUERBVEVfQUNUSVZFX01FTlUsXG5cbiAgRklMVEVSX0NBUl9CUkFORF9NT0RFLFxuICBGSUxURVJfQ0FSX1NFTEVDVEVEX0NBUl9CUkFORF9ST1csXG4gIEZJTFRFUl9DQVJfU0VBUkNIX0tFWVdPUkRTLFxuXG4gIEZJTFRFUl9DQVJfU0VMRUNURURfQ0FSX01PREVMX1JPVyxcbiAgRklMVEVSX0NBUl9NT0RFTF9TRUFSQ0hfS0VZV09SRFMsXG4gIEZJTFRFUl9DQVJfTU9ERUxfTU9ERSxcblxuICBGSUxURVJfQ09MT1JfTU9ERSxcbiAgRklMVEVSX0NBUl9TRUxFQ1RFRF9DT0xPUl9NT0RFTF9ST1csXG4gIEZJTFRFUl9DT0xPUl9NT0RFTF9TRUFSQ0hfS0VZV09SRFMsXG5cbiAgRklMVEVSX0JPRFlfVFlQRV9NT0RFLFxuICBGSUxURVJfQ0FSX1NFTEVDVEVEX0JPRFlfVFlQRV9NT0RFTF9ST1csXG4gIEZJTFRFUl9CT0RZX1RZUEVfTU9ERUxfU0VBUkNIX0tFWVdPUkRTLFxuXG4gIEZJTFRFUl9EUklWRU5fV0hFRUxTX01PREUsXG4gIEZJTFRFUl9DQVJfU0VMRUNURURfRFJJVkVOX1dIRUVMU19NT0RFTF9ST1csXG4gIEZJTFRFUl9EUklWRU5fV0hFRUxTX01PREVMX1NFQVJDSF9LRVlXT1JEUyxcblxuICBGSUxURVJfRlVFTF9UWVBFX01PREUsXG4gIEZJTFRFUl9DQVJfU0VMRUNURURfRlVFTF9UWVBFX01PREVMX1JPVyxcbiAgRklMVEVSX0ZVRUxfVFlQRV9NT0RFTF9TRUFSQ0hfS0VZV09SRFMsXG5cbiAgRklMVEVSX1NUQVRFX01PREUsXG4gIEZJTFRFUl9DQVJfU0VMRUNURURfU1RBVEVfTU9ERUxfUk9XLFxuICBGSUxURVJfU1RBVEVfTU9ERUxfU0VBUkNIX0tFWVdPUkRTLFxuXG4gIEZJTFRFUl9DQVJfQlJBTkRTLFxuICBGSUxURVJfQ0FSX01PREVMUyxcbiAgRklMVEVSX0NPTE9SUyxcbiAgRklMVEVSX0JPRFlfVFlQRVMsXG4gIEZJTFRFUl9EUklWRU5fV0hFRUxTLFxuICBGSUxURVJfRlVFTF9UWVBFUyxcbiAgRklMVEVSX1NUQVRFUyxcblxuICBRVUlDS19TRUFSQ0hfUFJPRFVDVFNfTElTVCxcblxuICBTSE9XX0NPTlRBQ1RfTElTVCxcblxuICBTRVRfQVBQTFlfWUVBUixcbiAgU0VUX0FQUExZX1BSSUNFLFxuICBTRVRfQVBQTFlfTUlMRUFHRSxcblxuICBTRVRfTUVOVV9IRUlHSFQsXG4gIFNFVF9OT1RJRklDQVRJT05fVE9LRU4sXG4gIFNFVF9OT1RJRklDQVRJT05fVE9LRU5fVElNRV9PVVRfREFURSxcbiAgU0VUX0lOSVRFRF9SRURVWCxcbiAgU0VUX0RJU0FCTEVfV0lORE9XX1NDUk9MTCxcbn0gZnJvbSAnLi4vYWN0aW9ucy9hcHAtYWN0aW9ucyc7XG5cbmltcG9ydCBsb2NhbFN0b3JhZ2UgZnJvbSAnbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgeyBjaGVja0lzTmVlZFBlcnNpc3QsIGNoZWNrTmVlZFBlcnNpc3QsIGdldFBlcnNpc3RPYmosIHBlcnNpc3RSZWR1eCB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGFwcCBmcm9tICduZXh0L2FwcCc7XG5cblxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcbiAgbm90aWZpY2F0aW9uVG9rZW46IG51bGwsXG4gIG5vdGlmaWNhdGlvblRva2VuVGltZU91dERhdGU6IG51bGwsXG4gIGRpc2FibGVXaW5kb3dTY3JvbGw6IGZhbHNlLFxuXG4gIGluaXRlZFJlZHV4OiBmYWxzZSxcbiAgbG9hZGluZzogZmFsc2UsXG4gIGFkdmFuY2VNb2RlOiBmYWxzZSxcbiAgbG9naW5Nb2RlOiBmYWxzZSxcbiAgcmVnaXN0ZXJNb2RlOiBmYWxzZSxcblxuICBmaWx0ZXJDYXJCcmFuZE1vZGU6IGZhbHNlLFxuICBmaWx0ZXJDYXJTZWxlY3RlZENhckJyYW5kRGF0YTogJycsXG4gIGZpbHRlckNhclNlbGVjdGVkQ2FyQnJhbmRJbmRleDogJycsXG4gIGZpbHRlckNhclNlYXJjaEtleXdvcmRzOiAnJyxcblxuICBmaWx0ZXJDYXJNb2RlbE1vZGU6IGZhbHNlLFxuICBmaWx0ZXJDYXJTZWxlY3RlZENhck1vZGVsRGF0YTogJycsXG4gIGZpbHRlckNhclNlbGVjdGVkQ2FyTW9kZWxJbmRleDogJycsXG4gIGZpbHRlckNhck1vZGVsU2VhcmNoS2V5d29yZHM6ICcnLFxuXG4gIGZpbHRlckNhck1vZGVsTW9kZTogZmFsc2UsXG4gIGZpbHRlckNhclNlbGVjdGVkQ2FyTW9kZWxEYXRhOiAnJyxcbiAgZmlsdGVyQ2FyU2VsZWN0ZWRDYXJNb2RlbEluZGV4OiAnJyxcbiAgZmlsdGVyQ2FyTW9kZWxTZWFyY2hLZXl3b3JkczogJycsXG5cbiAgZmlsdGVyQ29sb3JNb2RlOiBmYWxzZSxcbiAgZmlsdGVyQ2FyU2VsZWN0ZWRDb2xvckRhdGE6ICcnLFxuICBmaWx0ZXJDYXJTZWxlY3RlZENvbG9ySW5kZXg6ICcnLFxuICBmaWx0ZXJDb2xvclNlYXJjaEtleXdvcmRzOiAnJyxcblxuICBmaWx0ZXJCb2R5VHlwZU1vZGU6IGZhbHNlLFxuICBmaWx0ZXJDYXJTZWxlY3RlZEJvZHlUeXBlRGF0YTogJycsXG4gIGZpbHRlckNhclNlbGVjdGVkQm9keVR5cGVJbmRleDogJycsXG4gIGZpbHRlckJvZHlUeXBlU2VhcmNoS2V5d29yZHM6ICcnLFxuXG4gIGZpbHRlckZ1ZWxUeXBlTW9kZTogZmFsc2UsXG4gIGZpbHRlckNhclNlbGVjdGVkRnVlbFR5cGVEYXRhOiAnJyxcbiAgZmlsdGVyQ2FyU2VsZWN0ZWRGdWVsVHlwZUluZGV4OiAnJyxcbiAgZmlsdGVyRnVlbFR5cGVTZWFyY2hLZXl3b3JkczogJycsXG5cbiAgZmlsdGVyU3RhdGVNb2RlOiBmYWxzZSxcbiAgZmlsdGVyQ2FyU2VsZWN0ZWRTdGF0ZURhdGE6ICcnLFxuICBmaWx0ZXJDYXJTZWxlY3RlZFN0YXRlSW5kZXg6ICcnLFxuICBmaWx0ZXJTdGF0ZVNlYXJjaEtleXdvcmRzOiAnJyxcblxuICBjYXJCcmFuZHM6IFtdLFxuICBjYXJNb2RlbHM6IFtdLFxuICBjb2xvcnM6IFtdLFxuICBib2R5VHlwZXM6IFtdLFxuICBkcml2ZW5XaGVlbHM6IFtdLFxuICBmdWVsVHlwZXM6IFtdLFxuICBzdGF0ZXM6IFtdLFxuXG4gIHF1aWNrU2VhcmNoTW9kZTogJycsXG4gIHF1aWNrU2VhcmNoQ2FyU3BlY3NEYXRhOiB7fSxcbiAgcXVpY2tTZWFyY2hQcm9kdWN0YWRzRGF0YToge30sXG4gIGFjdGl2ZU1lbnU6IC0xLFxuICB2YWx1ZXM6IHt9LFxuXG4gIHNob3dDb250YWN0OiBmYWxzZSxcblxuICBhcHBseVllYXI6IHVuZGVmaW5lZCxcbiAgYXBwbHlQcmljZTogdW5kZWZpbmVkLFxuICBhcHBseU1pbGVhZ2U6IHVuZGVmaW5lZCxcblxuICBtZW51SGVpZ2h0OiB1bmRlZmluZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbikge1xuXG5cbiAgLy8gY2hlY2tOZWVkUGVyc2lzdChfLmdldChhY3Rpb24sICd0eXBlJyksICdhcHAnLCBfLmdldChhY3Rpb24sICdwYXlsb2FkJyksIF8uZ2V0KGFjdGlvbiwgJ2lzUmVzdG9yZURhdGEnKSk7XG5cbiAgbGV0IHBlcnNpc3RTdGF0ZXMgPSBfLmdldChsb2NhbFN0b3JhZ2UuZ2V0KCdyZWR1eCcpIHx8IHt9LCAnYXBwJykgfHwgSU5JVElBTF9TVEFURTtcbiAgbGV0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIC4uLnBlcnNpc3RTdGF0ZXNcbiAgfVxuXG4gIGlmKCFfLmlzRXF1YWwoc3RhdGUsIG5ld1N0YXRlKSl7XG4gICAgc3RhdGUgPSBuZXdTdGF0ZTtcbiAgfVxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBMT0FESU5HOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIEFEVkFOQ0VfTU9ERTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWR2YW5jZU1vZGU6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgTE9HSU5fTU9ERTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9naW5Nb2RlOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgUkVHSVNURVJfTU9ERTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVnaXN0ZXJNb2RlOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgVVBEQVRFX0FDVElWRV9NRU5VOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhY3RpdmVNZW51OiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgLy9cbiAgICBjYXNlIEZJTFRFUl9DQVJfQlJBTkRTOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJCcmFuZHM6IGFjdGlvbi5kYXRhXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGSUxURVJfQ0FSX01PREVMUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FyTW9kZWxzOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRklMVEVSX0NPTE9SUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29sb3JzOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRklMVEVSX0JPRFlfVFlQRVM6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGJvZHlUeXBlczogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZJTFRFUl9EUklWRU5fV0hFRUxTOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkcml2ZW5XaGVlbHM6IGFjdGlvbi5kYXRhXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGSUxURVJfRlVFTF9UWVBFUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZnVlbFR5cGVzOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRklMVEVSX1NUQVRFUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc3RhdGVzOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIGZpbHRlciBjYXJcbiAgICAvLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNhc2UgRklMVEVSX0NBUl9CUkFORF9NT0RFOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWx0ZXJDYXJCcmFuZE1vZGU6IGFjdGlvbi5kYXRhXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGSUxURVJfQ0FSX1NFTEVDVEVEX0NBUl9CUkFORF9ST1c6XG4gICAgICBpZiAoYWN0aW9uLmluZGV4KSB7XG4gICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGZpbHRlckNhclNlbGVjdGVkQ2FyQnJhbmREYXRhOiBhY3Rpb24uZGF0YSxcbiAgICAgICAgICBmaWx0ZXJDYXJTZWxlY3RlZENhckJyYW5kSW5kZXg6IGFjdGlvbi5pbmRleFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGZpbHRlckNhclNlbGVjdGVkQ2FyQnJhbmREYXRhOiBhY3Rpb24uZGF0YVxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICBjYXNlIEZJTFRFUl9DQVJfU0VBUkNIX0tFWVdPUkRTOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWx0ZXJDYXJTZWFyY2hLZXl3b3JkczogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICAvLyBlbmQgZmlsdGVyIGNhciAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cblxuICAgIC8vIGZpbHRlciBjYXJcbiAgICAvLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNhc2UgRklMVEVSX0NBUl9NT0RFTF9NT0RFOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWx0ZXJDYXJNb2RlbE1vZGU6IGFjdGlvbi5kYXRhXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGSUxURVJfQ0FSX1NFTEVDVEVEX0NBUl9NT0RFTF9ST1c6XG4gICAgICBpZiAoYWN0aW9uLmluZGV4KSB7XG4gICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGZpbHRlckNhclNlbGVjdGVkQ2FyTW9kZWxEYXRhOiBhY3Rpb24uZGF0YSxcbiAgICAgICAgICBmaWx0ZXJDYXJTZWxlY3RlZENhck1vZGVsSW5kZXg6IGFjdGlvbi5pbmRleFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGZpbHRlckNhclNlbGVjdGVkQ2FyTW9kZWxEYXRhOiBhY3Rpb24uZGF0YVxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICBjYXNlIEZJTFRFUl9DQVJfTU9ERUxfU0VBUkNIX0tFWVdPUkRTOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWx0ZXJDYXJNb2RlbFNlYXJjaEtleXdvcmRzOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIGVuZCBmaWx0ZXIgbW9kZWwgLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG5cbiAgICAvLyBmaWx0ZXIgY29sb3JcbiAgICAvLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNhc2UgRklMVEVSX0NPTE9SX01PREU6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbHRlckNvbG9yTW9kZTogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZJTFRFUl9DQVJfU0VMRUNURURfQ09MT1JfTU9ERUxfUk9XOlxuICAgICAgaWYgKGFjdGlvbi5pbmRleCkge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBmaWx0ZXJDYXJTZWxlY3RlZENvbG9yRGF0YTogYWN0aW9uLmRhdGEsXG4gICAgICAgICAgZmlsdGVyQ2FyU2VsZWN0ZWRDb2xvckluZGV4OiBhY3Rpb24uaW5kZXhcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBmaWx0ZXJDYXJTZWxlY3RlZENvbG9yRGF0YTogYWN0aW9uLmRhdGFcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgY2FzZSBGSUxURVJfQ09MT1JfTU9ERUxfU0VBUkNIX0tFWVdPUkRTOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWx0ZXJDb2xvclNlYXJjaEtleXdvcmRzOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIGVuZCBmaWx0ZXIgbW9kZWwgLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG5cbiAgICAvLyBmaWx0ZXIgYm9keSB0eXBlXG4gICAgLy8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjYXNlIEZJTFRFUl9CT0RZX1RZUEVfTU9ERTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyQm9keVR5cGVNb2RlOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRklMVEVSX0NBUl9TRUxFQ1RFRF9CT0RZX1RZUEVfTU9ERUxfUk9XOlxuICAgICAgaWYgKGFjdGlvbi5pbmRleCkge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBmaWx0ZXJDYXJTZWxlY3RlZEJvZHlUeXBlRGF0YTogYWN0aW9uLmRhdGEsXG4gICAgICAgICAgZmlsdGVyQ2FyU2VsZWN0ZWRCb2R5VHlwZUluZGV4OiBhY3Rpb24uaW5kZXhcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBmaWx0ZXJDYXJTZWxlY3RlZEJvZHlUeXBlRGF0YTogYWN0aW9uLmRhdGFcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgY2FzZSBGSUxURVJfQk9EWV9UWVBFX01PREVMX1NFQVJDSF9LRVlXT1JEUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyQm9keVR5cGVTZWFyY2hLZXl3b3JkczogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICAvLyBlbmQgZmlsdGVyIG1vZGVsIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuXG4gICAgLy8gZmlsdGVyIGRyaXZlbiB3aGVlbHNcbiAgICAvLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNhc2UgRklMVEVSX0RSSVZFTl9XSEVFTFNfTU9ERTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyRHJpdmVuV2hlZWxNb2RlOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRklMVEVSX0NBUl9TRUxFQ1RFRF9EUklWRU5fV0hFRUxTX01PREVMX1JPVzpcbiAgICAgIGlmIChhY3Rpb24uaW5kZXgpIHtcbiAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgZmlsdGVyQ2FyU2VsZWN0ZWREcml2ZW5XaGVlbERhdGE6IGFjdGlvbi5kYXRhLFxuICAgICAgICAgIGZpbHRlckNhclNlbGVjdGVkRHJpdmVuV2hlZWxJbmRleDogYWN0aW9uLmluZGV4XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgZmlsdGVyQ2FyU2VsZWN0ZWREcml2ZW5XaGVlbERhdGE6IGFjdGlvbi5kYXRhXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIGNhc2UgRklMVEVSX0RSSVZFTl9XSEVFTFNfTU9ERUxfU0VBUkNIX0tFWVdPUkRTOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWx0ZXJEcml2ZW5XaGVlbFNlYXJjaEtleXdvcmRzOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIGVuZCBmaWx0ZXIgZHJpdmVuIHdoZWVscyAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cblxuICAgIC8vIGZpbHRlciBkcml2ZW4gd2hlZWxzXG4gICAgLy8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjYXNlIEZJTFRFUl9GVUVMX1RZUEVfTU9ERTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyRnVlbFR5cGVNb2RlOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRklMVEVSX0NBUl9TRUxFQ1RFRF9GVUVMX1RZUEVfTU9ERUxfUk9XOlxuICAgICAgaWYgKGFjdGlvbi5pbmRleCkge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBmaWx0ZXJDYXJTZWxlY3RlZEZ1ZWxUeXBlRGF0YTogYWN0aW9uLmRhdGEsXG4gICAgICAgICAgZmlsdGVyQ2FyU2VsZWN0ZWRGdWVsVHlwZUluZGV4OiBhY3Rpb24uaW5kZXhcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBmaWx0ZXJDYXJTZWxlY3RlZEZ1ZWxUeXBlRGF0YTogYWN0aW9uLmRhdGFcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgY2FzZSBGSUxURVJfRlVFTF9UWVBFX01PREVMX1NFQVJDSF9LRVlXT1JEUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyRnVlbFR5cGVTZWFyY2hLZXl3b3JkczogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICAvLyBlbmQgZmlsdGVyIGRyaXZlbiB3aGVlbHMgLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG5cbiAgICAvLyBmaWx0ZXIgZHJpdmVuIHdoZWVsc1xuICAgIC8vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2FzZSBGSUxURVJfU1RBVEVfTU9ERTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyU3RhdGVNb2RlOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRklMVEVSX0NBUl9TRUxFQ1RFRF9TVEFURV9NT0RFTF9ST1c6XG4gICAgICBpZiAoYWN0aW9uLmluZGV4KSB7XG4gICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGZpbHRlckNhclNlbGVjdGVkU3RhdGVEYXRhOiBhY3Rpb24uZGF0YSxcbiAgICAgICAgICBmaWx0ZXJDYXJTZWxlY3RlZFN0YXRlSW5kZXg6IGFjdGlvbi5pbmRleFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGZpbHRlckNhclNlbGVjdGVkU3RhdGVEYXRhOiBhY3Rpb24uZGF0YVxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICBjYXNlIEZJTFRFUl9TVEFURV9NT0RFTF9TRUFSQ0hfS0VZV09SRFM6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbHRlclN0YXRlU2VhcmNoS2V5d29yZHM6IGFjdGlvbi5kYXRhXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgLy8gZW5kIGZpbHRlciBkcml2ZW4gd2hlZWxzIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuXG4gICAgY2FzZSBRVUlDS19TRUFSQ0hfUFJPRFVDVFNfTElTVDpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcXVpY2tTZWFyY2hNb2RlOiBhY3Rpb24ubW9kZSxcbiAgICAgICAgcXVpY2tTZWFyY2hDYXJTcGVjc0RhdGE6IGFjdGlvbi5xdWlja1NlYXJjaENhclNwZWNzRGF0YSxcbiAgICAgICAgcXVpY2tTZWFyY2hQcm9kdWN0YWRzRGF0YTogYWN0aW9uLnF1aWNrU2VhcmNoUHJvZHVjdGFkc0RhdGEsXG4gICAgICAgIHZhbHVlczogYWN0aW9uLnZhbHVlc1xuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgU0hPV19DT05UQUNUX0xJU1Q6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNob3dDb250YWN0OiBhY3Rpb24uYm9vbGVhblxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgU0VUX0FQUExZX1lFQVI6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFwcGx5WWVhcjogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIFNFVF9BUFBMWV9QUklDRTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYXBwbHlQcmljZTogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIFNFVF9BUFBMWV9NSUxFQUdFOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhcHBseU1pbGVhZ2U6IGFjdGlvbi5kYXRhXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBTRVRfTUVOVV9IRUlHSFQ6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1lbnVIZWlnaHQ6IGFjdGlvbi5kYXRhXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBTRVRfTk9USUZJQ0FUSU9OX1RPS0VOOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBub3RpZmljYXRpb25Ub2tlbjogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIFNFVF9OT1RJRklDQVRJT05fVE9LRU5fVElNRV9PVVRfREFURTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbm90aWZpY2F0aW9uVG9rZW5UaW1lT3V0RGF0ZTogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIFNFVF9JTklURURfUkVEVVg6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGluaXRlZFJlZHV4OiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgU0VUX0RJU0FCTEVfV0lORE9XX1NDUk9MTDpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGlzYWJsZVdpbmRvd1Njcm9sbDogYWN0aW9uLmRhdGEgPT0gdHJ1ZSA/IHRydWUgOiBmYWxzZSxcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgc3RhdGUgPSBzdGF0ZVxuICAgICAgYnJlYWs7XG4gIH1cblxuXG4gIHBlcnNpc3RSZWR1eCgnYXBwJywgc3RhdGUpXG4gIHJldHVybiBzdGF0ZTtcbn0iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IEZFVENIX0NBUlBMQVRFU0xJU1QgfSBmcm9tICcuLi9hY3Rpb25zL2NhclBsYXRlc0xpc3QtYWN0aW9ucyc7XG5pbXBvcnQgbG9jYWxTdG9yYWdlIGZyb20gJ2xvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0IHsgY2hlY2tJc05lZWRQZXJzaXN0LCBjaGVja05lZWRQZXJzaXN0LCBnZXRQZXJzaXN0T2JqLCBwZXJzaXN0UmVkdXggfSBmcm9tICcuLi9jb25maWcnO1xuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICAgIGNhclBsYXRlc0xpc3Q6IFtdLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24pIHtcblxuICAgIC8vIGNoZWNrTmVlZFBlcnNpc3QoXy5nZXQoYWN0aW9uLCAndHlwZScpLCAnY2FyUGxhdGVzTGlzdCcsIF8uZ2V0KGFjdGlvbiwgJ3BheWxvYWQnKSwgXy5nZXQoYWN0aW9uLCAnaXNSZXN0b3JlRGF0YScpKTtcblxuICAgIGxldCBwZXJzaXN0U3RhdGVzID0gXy5nZXQobG9jYWxTdG9yYWdlLmdldCgncmVkdXgnKSB8fCB7fSwgJ2NhclBsYXRlc0xpc3QnKSB8fCBJTklUSUFMX1NUQVRFO1xuICAgIGxldCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLnBlcnNpc3RTdGF0ZXNcbiAgICB9XG4gICAgaWYoIV8uaXNFcXVhbChzdGF0ZSwgbmV3U3RhdGUpKXtcbiAgICAgIHN0YXRlID0gbmV3U3RhdGU7XG4gICAgfVxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBGRVRDSF9DQVJQTEFURVNMSVNUOlxuICAgICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgY2FyUGxhdGVzTGlzdDogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHN0YXRlID0gc3RhdGVcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBwZXJzaXN0UmVkdXgoJ2NhclBsYXRlc0xpc3QnLCBzdGF0ZSlcblxuICAgIHJldHVybiBzdGF0ZTtcbn0iLCJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHsgU0VUX1BPU1RfTU9EQUxfTElLRV9SRUZSRVNIX0lELCBGRVRDSF9DQVJfRlJFQUtfUE9TVFMsIEZFVENIX0VESVRFRF9QT1NUIH0gZnJvbSAnLi4vYWN0aW9ucy9jYXJmcmVhay5hY3Rpb24nO1xuaW1wb3J0IGxvY2FsU3RvcmFnZSBmcm9tICdsb2NhbC1zdG9yYWdlJztcbmltcG9ydCB7IGNoZWNrSXNOZWVkUGVyc2lzdCwgY2hlY2tOZWVkUGVyc2lzdCwgZ2V0UGVyc2lzdE9iaiwgcGVyc2lzdFJlZHV4IH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gICAgcG9zdE1vZGFsTGlrZVJlZnJlc2hJZDogJycsXG4gICAgY2FyRnJlYWtQb3N0czogW10sXG4gICAgZWRpdGVkUG9zdDoge30sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbikge1xuXG4gICAgLy8gY2hlY2tOZWVkUGVyc2lzdChfLmdldChhY3Rpb24sICd0eXBlJyksICdjYXJmcmVhaycsIF8uZ2V0KGFjdGlvbiwgJ3BheWxvYWQnKSwgXy5nZXQoYWN0aW9uLCAnaXNSZXN0b3JlRGF0YScpKTtcblxuICAgIGxldCBwZXJzaXN0U3RhdGVzID0gXy5nZXQobG9jYWxTdG9yYWdlLmdldCgncmVkdXgnKSB8fCB7fSwgJ2NhcmZyZWFrJykgfHwgSU5JVElBTF9TVEFURTtcbiAgICBsZXQgbmV3U3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi5wZXJzaXN0U3RhdGVzXG4gICAgfVxuICAgIGlmKCFfLmlzRXF1YWwoc3RhdGUsIG5ld1N0YXRlKSl7XG4gICAgICBzdGF0ZSA9IG5ld1N0YXRlO1xuICAgIH1cbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgU0VUX1BPU1RfTU9EQUxfTElLRV9SRUZSRVNIX0lEOlxuICAgICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgcG9zdE1vZGFsTGlrZVJlZnJlc2hJZDogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRkVUQ0hfQ0FSX0ZSRUFLX1BPU1RTOlxuICAgICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgY2FyRnJlYWtQb3N0czogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRkVUQ0hfRURJVEVEX1BPU1Q6XG4gICAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBlZGl0ZWRQb3N0OiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHN0YXRlID0gc3RhdGVcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHBlcnNpc3RSZWR1eCgnY2FyZnJlYWsnLCBzdGF0ZSlcblxuICAgIHJldHVybiBzdGF0ZTtcbn0iLCJpbXBvcnQgXywgeyB1cHBlckZpcnN0IH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgeyBGRVRDSF9SRVZJU0lPTl9BTlNXRVJFRF9RVUVTVElPTlMgfSBmcm9tICcuLi9hY3Rpb25zL2twcC1hY3Rpb25zJztcbmltcG9ydCB7IGlzVmFsaWROdW1iZXIgfSBmcm9tICcuLi8uLi9jb21tb24tZnVuY3Rpb24nO1xuaW1wb3J0IGxvY2FsU3RvcmFnZSBmcm9tICdsb2NhbC1zdG9yYWdlJztcbmltcG9ydCB7IGNoZWNrSXNOZWVkUGVyc2lzdCwgY2hlY2tOZWVkUGVyc2lzdCwgZ2V0UGVyc2lzdE9iaiwgcGVyc2lzdFJlZHV4IH0gZnJvbSAnLi4vY29uZmlnJztcblxuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICAgIGFuc3dlcmVkRW5SZXZpc2lvblNlY3Rpb25BUGFwZXI6IFtdLFxuICAgIGFuc3dlcmVkRW5SZXZpc2lvblNlY3Rpb25CUGFwZXI6IFtdLFxuICAgIGFuc3dlcmVkRW5SZXZpc2lvblNlY3Rpb25DUGFwZXI6IFtdLFxuICAgIGFuc3dlcmVkQm1SZXZpc2lvblNlY3Rpb25BUGFwZXI6IFtdLFxuICAgIGFuc3dlcmVkQm1SZXZpc2lvblNlY3Rpb25CUGFwZXI6IFtdLFxuICAgIGFuc3dlcmVkQm1SZXZpc2lvblNlY3Rpb25DUGFwZXI6IFtdLFxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbikge1xuXG4gICAgLy8gY2hlY2tOZWVkUGVyc2lzdChfLmdldChhY3Rpb24sICd0eXBlJyksICdrcHAnLCBfLmdldChhY3Rpb24sICdwYXlsb2FkJyksIF8uZ2V0KGFjdGlvbiwgJ2lzUmVzdG9yZURhdGEnKSk7XG5cbiAgICBsZXQgcGVyc2lzdFN0YXRlcyA9IF8uZ2V0KGxvY2FsU3RvcmFnZS5nZXQoJ3JlZHV4JykgfHwge30sICdrcHAnKSB8fCBJTklUSUFMX1NUQVRFO1xuICAgIGxldCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLnBlcnNpc3RTdGF0ZXNcbiAgICB9XG4gICAgaWYoIV8uaXNFcXVhbChzdGF0ZSwgbmV3U3RhdGUpKXtcbiAgICAgIHN0YXRlID0gbmV3U3RhdGU7XG4gICAgfVxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBGRVRDSF9SRVZJU0lPTl9BTlNXRVJFRF9RVUVTVElPTlM6XG4gICAgICAgICAgICBpZiAoIWFjdGlvbi5wYXlsb2FkIHx8ICFpc1ZhbGlkTnVtYmVyKGFjdGlvbi5wYXlsb2FkLmdyb3VwKSB8fCAhYWN0aW9uLnBheWxvYWQubGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IHN0YXRlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGF0ZVtgYW5zd2VyZWQke18udXBwZXJGaXJzdChhY3Rpb24ucGF5bG9hZC5sYW5ndWFnZSl9UmV2aXNpb25TZWN0aW9uJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgcGFyc2VJbnQoYWN0aW9uLnBheWxvYWQuZ3JvdXApKX1QYXBlcmBdID0gYWN0aW9uLnBheWxvYWQuZGF0YTtcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBzdGF0ZSA9IHN0YXRlXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcGVyc2lzdFJlZHV4KCdrcHAnLCBzdGF0ZSlcblxuICAgIHJldHVybiBzdGF0ZTtcbn0iLCJpbXBvcnQgXywgeyB1cHBlckZpcnN0IH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgeyBGRVRDSF9DTElFTlRfU09DS0VUX0lPLCBDTEVBUl9DTElFTlRfU09DS0VUX0lPIH0gZnJvbSAnLi4vYWN0aW9ucy9saXZlLWFjdGlvbic7XG5pbXBvcnQgbG9jYWxTdG9yYWdlIGZyb20gJ2xvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0IHsgY2hlY2tJc05lZWRQZXJzaXN0LCBjaGVja05lZWRQZXJzaXN0LCBnZXRQZXJzaXN0T2JqLCBwZXJzaXN0UmVkdXggfSBmcm9tICcuLi9jb25maWcnO1xuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICAgIHNvY2tldDogdW5kZWZpbmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24pIHtcblxuICAgIC8vIGNoZWNrTmVlZFBlcnNpc3QoXy5nZXQoYWN0aW9uLCAndHlwZScpLCAnbGl2ZScsIF8uZ2V0KGFjdGlvbiwgJ3BheWxvYWQnKSwgXy5nZXQoYWN0aW9uLCAnaXNSZXN0b3JlRGF0YScpKTtcblxuICAgIGxldCBwZXJzaXN0U3RhdGVzID0gXy5nZXQobG9jYWxTdG9yYWdlLmdldCgncmVkdXgnKSB8fCB7fSwgJ2xpdmUnKSB8fCBJTklUSUFMX1NUQVRFO1xuICAgIGxldCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLnBlcnNpc3RTdGF0ZXNcbiAgICB9XG4gICAgaWYoIV8uaXNFcXVhbChzdGF0ZSwgbmV3U3RhdGUpKXtcbiAgICAgIHN0YXRlID0gbmV3U3RhdGU7XG4gICAgfVxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBGRVRDSF9DTElFTlRfU09DS0VUX0lPOlxuICAgICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgc29ja2V0OiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQ0xFQVJfQ0xJRU5UX1NPQ0tFVF9JTzpcbiAgICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHNvY2tldDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHN0YXRlID0gc3RhdGVcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBwZXJzaXN0UmVkdXgoJ2xpdmUnLCBzdGF0ZSlcblxuICAgIHJldHVybiBzdGF0ZTtcbn0iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7XG4gIEZFVENIX05FV1MsXG4gIEZFVENIX0NMVUIsXG4gIEZFVENIX1BSSUNFLFxuICBGRVRDSF9QT1BVTEFSLFxuICBGRVRDSF9QT1BVTEFSQ0FSUyxcbiAgRkVUQ0hfQ0FSTkFNRSxcbiAgRkVUQ0hfQ0FSREVUQUlMUyxcbiAgRkVUQ0hfQlJBTkRTLFxuICBGRVRDSF9CUkFORERFVEFJTCxcbiAgRkVUQ0hfQlJBTkRDQVJTLFxuICBGRVRDSF9ERVRBSUxTLFxuICBGRVRDSF9GSUxURVJFRF9DT01QQVJFX0RBVEEsXG4gIEZFVENIX0ZVRUwsXG4gIEZFVENIX0NPTVBBUkVfTkVXQ0FSX0lEUyxcbiAgQUREX0NPTVBBUkVfTkVXQ0FSX0lELFxuICBSRU1PVkVfQ09NUEFSRV9ORVdDQVJfSUQsXG4gIEZFVENIX0NPTVBBUkVfX05FV0NBUl9MSU1JVCxcbiAgRkVUQ0hfUEVFUl9DT01QQVJFX0NBUlMsXG4gIEZFVENIX05FV19DQVJfRklMVEVSX0dST1VQLFxuICBSRVNFVF9ORVdfQ0FSX0ZJTFRFUl9HUk9VUCxcbn0gZnJvbSAnLi4vYWN0aW9ucy9uZXdjYXJzLWFjdGlvbnMnO1xuaW1wb3J0IGxvY2FsU3RvcmFnZSBmcm9tICdsb2NhbC1zdG9yYWdlJztcbmltcG9ydCB7IGNoZWNrSXNOZWVkUGVyc2lzdCwgY2hlY2tOZWVkUGVyc2lzdCwgZ2V0UGVyc2lzdE9iaiwgcGVyc2lzdFJlZHV4IH0gZnJvbSAnLi4vY29uZmlnJztcblxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcbiAgbmV3czogW10sXG4gIGNsdWI6IFtdLFxuICBwcmljZTogW10sXG4gIHBvcHVsYXI6IFtdLFxuICBwb3B1bGFyQ2FyczogW10sXG4gIENhck5hbWU6IHt9LFxuICBicmFuZHM6IFtdLFxuICBicmFuZERldGFpbDogW10sXG4gIGJyYW5kQ2FyczogW10sXG4gIGRldGFpbHM6IFtdLFxuICBmdWVsOiBbXSxcbiAgZmlsdGVyZWRDb21wYXJlRGF0YTogW10sXG4gIG5ld0NhckZpbHRlckdyb3VwOiB7XG4gICAgbWFrZTogJycsXG4gICAgYm9keVR5cGU6ICcnLFxuICAgIHRyYW5zbWlzc2lvbjogJycsXG4gICAgZHJpdmVud2hlZWw6ICcnLFxuICAgIHNlYXRDYXBhY2l0eTogJycsXG4gICAgZnVlbFR5cGU6ICcnLFxuICAgIGV4dGVyaW9yOiAnJyxcbiAgICBpbnRlcmlvcjogJycsXG4gICAgc2FmZXR5OiAnJyxcbiAgICBwcmljZVJhbmdlOiBbXSxcbiAgICBtb250aGx5UGF5bWVudFJhbmdlOiBbXSxcbiAgICBlbmdpbmVDYXBhY2l0eVJhbmdlOiBbXSxcbiAgfSxcbiAgcGVlckNvbXA6IFtdLFxuICBjb21wYXJlSWRzOiBbXSxcbiAgY29tcGFyZUxpbWl0OiAtMSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSB7XG5cbiAgLy8gY2hlY2tOZWVkUGVyc2lzdChfLmdldChhY3Rpb24sICd0eXBlJyksICduZXdDYXJzJywgXy5nZXQoYWN0aW9uLCAncGF5bG9hZCcpLCBfLmdldChhY3Rpb24sICdpc1Jlc3RvcmVEYXRhJykpO1xuXG4gIGxldCBwZXJzaXN0U3RhdGVzID0gXy5nZXQobG9jYWxTdG9yYWdlLmdldCgncmVkdXgnKSB8fCB7fSwgJ25ld0NhcnMnKSB8fCBJTklUSUFMX1NUQVRFO1xuICBsZXQgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgLi4ucGVyc2lzdFN0YXRlc1xuICB9XG4gIGlmKCFfLmlzRXF1YWwoc3RhdGUsIG5ld1N0YXRlKSl7XG4gICAgc3RhdGUgPSBuZXdTdGF0ZTtcbiAgfVxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBGRVRDSF9ORVdTOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBuZXdzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGRVRDSF9DTFVCOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbHViOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEZFVENIX1BSSUNFOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcmljZTogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBGRVRDSF9QT1BVTEFSOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwb3B1bGFyOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEZFVENIX1BPUFVMQVJDQVJTOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwb3B1bGFyQ2FyczogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cblxuICAgIGNhc2UgRkVUQ0hfQ0FSTkFNRTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgQ2FyTmFtZTogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBGRVRDSF9DQVJERVRBSUxTOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkZXRhaWxzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEZFVENIX0JSQU5EUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYnJhbmRzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEZFVENIX0JSQU5EREVUQUlMOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBicmFuZERldGFpbDogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBGRVRDSF9CUkFORENBUlM6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGJyYW5kQ2FyczogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRkVUQ0hfREVUQUlMUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGV0YWlsczogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBGRVRDSF9GVUVMOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmdWVsOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGRVRDSF9GSUxURVJFRF9DT01QQVJFX0RBVEE6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbHRlcmVkQ29tcGFyZURhdGE6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZFVENIX0NPTVBBUkVfTkVXQ0FSX0lEUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29tcGFyZUlkczogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRkVUQ0hfQ09NUEFSRV9fTkVXQ0FSX0xJTUlUOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb21wYXJlTGltaXQ6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIEFERF9DT01QQVJFX05FV0NBUl9JRDpcbiAgICAgIGlmIChzdGF0ZS5jb21wYXJlSWRzLmxlbmd0aCA8IHN0YXRlLmNvbXBhcmVMaW1pdCkge1xuICAgICAgICBsZXQgY2hlY2tJZkV4aXN0ID0gXy5maW5kSW5kZXgoc3RhdGUuY29tcGFyZUlkcywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICBzdGF0ZSA9IGl0ZW0gPT0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIH0pXG4gICAgICAgIGlmIChjaGVja0lmRXhpc3QgPT0gLTEpIHtcbiAgICAgICAgICBsZXQgdGVtcCA9IF8uY2xvbmVEZWVwKHN0YXRlLmNvbXBhcmVJZHMpXG4gICAgICAgICAgdGVtcC5wdXNoKGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBjb21wYXJlSWRzOiB0ZW1wXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBSRU1PVkVfQ09NUEFSRV9ORVdDQVJfSUQ6XG4gICAgICBsZXQgdGVtcCA9IHN0YXRlLmNvbXBhcmVJZHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBhY3Rpb24ucGF5bG9hZCk7XG5cbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29tcGFyZUlkczogdGVtcCxcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBGRVRDSF9QRUVSX0NPTVBBUkVfQ0FSUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcGVlckNvbXA6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZFVENIX05FV19DQVJfRklMVEVSX0dST1VQOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBuZXdDYXJGaWx0ZXJHcm91cDogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgUkVTRVRfTkVXX0NBUl9GSUxURVJfR1JPVVA6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG5ld0NhckZpbHRlckdyb3VwOiB7XG4gICAgICAgICAgbWFrZTogJycsXG4gICAgICAgICAgYm9keVR5cGU6ICcnLFxuICAgICAgICAgIHRyYW5zbWlzc2lvbjogJycsXG4gICAgICAgICAgZHJpdmVud2hlZWw6ICcnLFxuICAgICAgICAgIHNlYXRDYXBhY2l0eTogJycsXG4gICAgICAgICAgZnVlbFR5cGU6ICcnLFxuICAgICAgICAgIGV4dGVyaW9yOiAnJyxcbiAgICAgICAgICBpbnRlcmlvcjogJycsXG4gICAgICAgICAgc2FmZXR5OiAnJyxcbiAgICAgICAgICBwcmljZVJhbmdlOiBbXSxcbiAgICAgICAgICBtb250aGx5UGF5bWVudFJhbmdlOiBbXSxcbiAgICAgICAgICBlbmdpbmVDYXBhY2l0eVJhbmdlOiBbXSxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHN0YXRlID0gc3RhdGVcbiAgICAgIGJyZWFrO1xuXG4gIH1cblxuICBwZXJzaXN0UmVkdXgoJ25ld0NhcnMnLCBzdGF0ZSlcblxuICByZXR1cm4gc3RhdGU7XG59XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7XG4gIEZFVENIX1BST0RVQ1RTTElTVCxcbiAgRkVUQ0hfUFJPRFVDVFNMSVNUX0hPTUUsXG4gIFBVU0hfUFJPRFVDVFNMSVNULFxuICBSRU1PVkVfUFJPRFVDVFNMSVNULFxuICBVUERBVEVfUFJPRFVDVFNMSVNULFxuICBVUERBVEVfQUNUSVZFX0lEX1BST0RVQ1RTX0xJU1QsXG4gIEFERF9DT01QQVJFX19QUk9EVUNUX0lELFxuICBSRU1PVkVfQ09NUEFSRV9QUk9EVUNUX0lELFxuICBDTEVBUl9DT01QQVJFX1BST0RVQ1RfSURTLFxuICBQQVRDSF9DT01QQVJFX1BST0RVQ1RfSURTLFxuICBGRVRDSF9GSUxURVJFRF9DT01QQVJFX0RBVEEsXG4gIEZFVENIX0ZFQVRVUkVTX0xJU1QsXG4gIFVQREFURV9DSEVDS0VEX0ZFQVRVUkVTX0RBVEUsXG4gIEZFVENIX0NPTVBBUkVfTElNSVQsXG4gIEZFVENIX1BST0RVQ1RfRklMVEVSX09QVElPTlMsXG4gIENMRUFSX1BST0RVQ1RfRklMVEVSX09QVElPTlMsXG4gIEZFVENIX1BST0RVQ1RfRklMVEVSX0dST1VQLFxuICBDTEVBUl9QUk9EVUNUX0ZJTFRFUl9HUk9VUCxcbiAgRkVUQ0hfUFJPRFVDVF9GSUxURVJfQ09ORklHLFxuICBDTEVBUl9QUk9EVUNUX0ZJTFRFUl9DT05GSUcsXG4gIEZFVENIX0ZJTFRFUl9NT0RBTF9TVEFURSxcbiAgU0VUX1BST0RVQ1RfTElTVF9MT0FESU5HLFxufSBmcm9tICcuLi9hY3Rpb25zL3Byb2R1Y3RzTGlzdC1hY3Rpb25zJztcbmltcG9ydCBsb2NhbFN0b3JhZ2UgZnJvbSAnbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgeyBjaGVja0lzTmVlZFBlcnNpc3QsIGNoZWNrTmVlZFBlcnNpc3QsIGdldFBlcnNpc3RPYmosIHBlcnNpc3RSZWR1eCB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIHByb2R1Y3RMaXN0TG9hZGluZzogZmFsc2UsXG4gIHByb2R1Y3RzTGlzdDogW10sXG4gIHByb2R1Y3RzTGlzdEhvbWU6IFtdLFxuICBhY3RpdmVJZDogJycsXG4gIGFjdGl2ZXByb2R1Y3RMaXN0OiBbXSxcbiAgY29tcGFyZURhdGE6IFtdLFxuICBmaWx0ZXJlZENvbXBhcmVEYXRhOiBbXSxcbiAgZmVhdHVyZXNMaXN0OiBbXSxcbiAgY2hlY2tlZEZlYXR1cmVzRGF0ZTogbnVsbCxcbiAgY29tcGFyZUlkczogW10sXG4gIGNvbXBhcmVMaW1pdDogNCxcbiAgZmlsdGVyT3B0aW9uczoge30sXG4gIGZpbHRlckdyb3VwOiB7fSxcbiAgaXNGaWx0ZXJNb2RhbE9wZW46IGZhbHNlLFxuICBjb25maWc6IHt9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24pIHtcblxuICAvLyBjaGVja05lZWRQZXJzaXN0KF8uZ2V0KGFjdGlvbiwgJ3R5cGUnKSwgJ3Byb2R1Y3RzTGlzdCcsIF8uZ2V0KGFjdGlvbiwgJ3BheWxvYWQnKSwgXy5nZXQoYWN0aW9uLCAnaXNSZXN0b3JlRGF0YScpKTtcblxuICBsZXQgcGVyc2lzdFN0YXRlcyA9IF8uZ2V0KGxvY2FsU3RvcmFnZS5nZXQoJ3JlZHV4JykgfHwge30sICdwcm9kdWN0c0xpc3QnKSB8fCBJTklUSUFMX1NUQVRFO1xuICBsZXQgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgLi4ucGVyc2lzdFN0YXRlc1xuICB9XG4gIGlmICghXy5pc0VxdWFsKHN0YXRlLCBuZXdTdGF0ZSkpIHtcbiAgICBzdGF0ZSA9IG5ld1N0YXRlO1xuICB9XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEZFVENIX1BST0RVQ1RTTElTVDpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHNMaXN0OiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGRVRDSF9QUk9EVUNUU0xJU1RfSE9NRTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHNMaXN0SG9tZTogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgUFVTSF9QUk9EVUNUU0xJU1Q6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzTGlzdDogW2FjdGlvbi5wYXlsb2FkLCAuLi5zdGF0ZS5wcm9kdWN0c0xpc3RdXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFJFTU9WRV9QUk9EVUNUU0xJU1Q6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzTGlzdDogWy4uLnN0YXRlLnByb2R1Y3RzTGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uX2lkICE9PSBhY3Rpb24ucGF5bG9hZC5faWQpXVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBVUERBVEVfUFJPRFVDVFNMSVNUOlxuICAgICAgbGV0IGluZGV4ID0gXy5maW5kSW5kZXgoc3RhdGUucHJvZHVjdHNMaXN0LCB7ICdfaWQnOiBhY3Rpb24ucGF5bG9hZC5faWQgfSlcbiAgICAgIHN0YXRlLnByb2R1Y3RzTGlzdC5zcGxpY2UoaW5kZXgsIDEsIGFjdGlvbi5wYXlsb2FkKVxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0c0xpc3Q6IHN0YXRlLnByb2R1Y3RzTGlzdFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBVUERBVEVfQUNUSVZFX0lEX1BST0RVQ1RTX0xJU1Q6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFjdGl2ZUlkOiBhY3Rpb24uaWQsXG4gICAgICAgIGFjdGl2ZXByb2R1Y3RMaXN0OiBfLnBpY2soXy5maW5kKHN0YXRlLnByb2R1Y3RzTGlzdCwgeyAnX2lkJzogYWN0aW9uLmlkIH0pLCBbXG4gICAgICAgICAgJ293bmVyTW9iaWxlTnVtZXInLFxuICAgICAgICAgICdjYXJQbGF0ZU51bWJlcicsXG4gICAgICAgICAgJ3N0YXRlJyxcbiAgICAgICAgICAnY2Fyc3BlY3NBbGwnLFxuICAgICAgICAgICdvd25lckFkZHJlc3MnLFxuICAgICAgICAgICdjb21wYW55cycsXG4gICAgICAgICAgJ2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICAncHJvZHVjdFR5cGUnLFxuICAgICAgICAgICdkcml2ZW5XaGVlbCcsXG4gICAgICAgICAgJ2NhcnNwZWNzSWQnLFxuICAgICAgICAgICdjcmVhdGVkQXQnLFxuICAgICAgICAgICdjb25kaXRpb24nLFxuICAgICAgICAgICdvd25lck5hbWUnLFxuICAgICAgICAgICdjb21wYW55SWQnLFxuICAgICAgICAgICdmZWF0dXJlcycsXG4gICAgICAgICAgJ2JvZHlUeXBlJyxcbiAgICAgICAgICAnZnVlbFR5cGUnLFxuICAgICAgICAgICdtaWxlYWdlJyxcbiAgICAgICAgICAnY2FyVXJsJyxcbiAgICAgICAgICAncHJlZml4JyxcbiAgICAgICAgICAnY29sb3InLFxuICAgICAgICAgICdwcmljZScsXG4gICAgICAgICAgJ19pZCdcbiAgICAgICAgXSlcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQUREX0NPTVBBUkVfX1BST0RVQ1RfSUQ6XG5cbiAgICAgIGlmICghc3RhdGUuY29tcGFyZUlkcykge1xuICAgICAgICBzdGF0ZS5jb21wYXJlSWRzID0gW11cbiAgICAgIH1cbiAgICAgIGlmIChzdGF0ZS5jb21wYXJlSWRzLmxlbmd0aCA8IHN0YXRlLmNvbXBhcmVMaW1pdCkge1xuICAgICAgICBsZXQgY2hlY2tJZkV4aXN0ID0gXy5maW5kSW5kZXgoc3RhdGUuY29tcGFyZUlkcywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICBzdGF0ZSA9IGl0ZW0gPT0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIH0pXG4gICAgICAgIGlmIChjaGVja0lmRXhpc3QgPT0gLTEpIHtcbiAgICAgICAgICBsZXQgdGVtcCA9IF8uY2xvbmVEZWVwKHN0YXRlLmNvbXBhcmVJZHMpXG4gICAgICAgICAgdGVtcC5wdXNoKGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBjb21wYXJlSWRzOiB0ZW1wXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBSRU1PVkVfQ09NUEFSRV9QUk9EVUNUX0lEOlxuICAgICAgbGV0IHRlbXAgPSBzdGF0ZS5jb21wYXJlSWRzLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gYWN0aW9uLnBheWxvYWQpO1xuXG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbXBhcmVJZHM6IHRlbXAsXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFBBVENIX0NPTVBBUkVfUFJPRFVDVF9JRFM6XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYWN0aW9uLnBheWxvYWQpKSB7XG4gICAgICAgIGFjdGlvbi5wYXlsb2FkID0gW107XG4gICAgICB9XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbXBhcmVJZHM6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIENMRUFSX0NPTVBBUkVfUFJPRFVDVF9JRFM6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbXBhcmVJZHM6IFtdXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZFVENIX0ZJTFRFUkVEX0NPTVBBUkVfREFUQTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyZWRDb21wYXJlRGF0YTogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRkVUQ0hfRkVBVFVSRVNfTElTVDpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmVhdHVyZXNMaXN0OiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgVVBEQVRFX0NIRUNLRURfRkVBVFVSRVNfREFURTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2hlY2tlZEZlYXR1cmVzRGF0ZTogbW9tZW50KGFjdGlvbi5wYXlsb2FkKSxcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRkVUQ0hfQ09NUEFSRV9MSU1JVDpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29tcGFyZUxpbWl0OiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRkVUQ0hfUFJPRFVDVF9GSUxURVJfT1BUSU9OUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyT3B0aW9uczogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIENMRUFSX1BST0RVQ1RfRklMVEVSX09QVElPTlM6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbHRlck9wdGlvbnM6IHt9LFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGRVRDSF9QUk9EVUNUX0ZJTFRFUl9HUk9VUDpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyR3JvdXA6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBDTEVBUl9QUk9EVUNUX0ZJTFRFUl9HUk9VUDpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyR3JvdXA6IHt9LFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGRVRDSF9QUk9EVUNUX0ZJTFRFUl9DT05GSUc6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbmZpZzogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIENMRUFSX1BST0RVQ1RfRklMVEVSX0NPTkZJRzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29uZmlnOiB7fSxcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRkVUQ0hfRklMVEVSX01PREFMX1NUQVRFOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0ZpbHRlck1vZGFsT3BlbjogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFNFVF9QUk9EVUNUX0xJU1RfTE9BRElORzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdExpc3RMb2FkaW5nOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBzdGF0ZSA9IHN0YXRlO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcGVyc2lzdFJlZHV4KCdwcm9kdWN0c0xpc3QnLCBzdGF0ZSlcblxuICByZXR1cm4gc3RhdGU7XG59XG4iLCJpbXBvcnQge1xuICBTVEVQU19QUk9QU19DVVJSRU5ULFxuICBGT1JNX09ORVxufSBmcm9tICcuLi9hY3Rpb25zL3JlZ2lzdGVyLWFjdGlvbnMnO1xuaW1wb3J0IGxvY2FsU3RvcmFnZSBmcm9tICdsb2NhbC1zdG9yYWdlJztcbmltcG9ydCB7IGNoZWNrSXNOZWVkUGVyc2lzdCwgY2hlY2tOZWVkUGVyc2lzdCwgZ2V0UGVyc2lzdE9iaiwgcGVyc2lzdFJlZHV4IH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIGN1cnJlbnQ6IDAsXG4gIGZvcm1PbmU6IHt9LFxufVxuXG5jb25zdCBhcHBSZWR1Y2VyID0gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSA9PiB7XG5cblxuICAvLyBjaGVja05lZWRQZXJzaXN0KF8uZ2V0KGFjdGlvbiwgJ3R5cGUnKSwgJ3JlZ2lzdGVyJywgXy5nZXQoYWN0aW9uLCAncGF5bG9hZCcpLCBfLmdldChhY3Rpb24sICdpc1Jlc3RvcmVEYXRhJykpO1xuXG4gIGxldCBwZXJzaXN0U3RhdGVzID0gXy5nZXQobG9jYWxTdG9yYWdlLmdldCgncmVkdXgnKSB8fCB7fSwgJ3Byb2R1Y3RzTGlzdCcpIHx8IElOSVRJQUxfU1RBVEU7XG4gIGxldCBuZXdTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICAuLi5wZXJzaXN0U3RhdGVzXG4gIH1cbiAgaWYoIV8uaXNFcXVhbChzdGF0ZSwgbmV3U3RhdGUpKXtcbiAgICBzdGF0ZSA9IG5ld1N0YXRlO1xuICB9XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNURVBTX1BST1BTX0NVUlJFTlQ6XG4gICAgICBzdGF0ZSA9IHsgLi4uc3RhdGUsIGN1cnJlbnQ6IGFjdGlvbi5kYXRhIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZPUk1fT05FOlxuICAgICAgc3RhdGUgPSB7IC4uLnN0YXRlLCBmb3JtT25lOiBhY3Rpb24uZGF0YSB9O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHN0YXRlID0gc3RhdGU7XG4gICAgICBicmVhaztcbiAgfVxuICBwZXJzaXN0UmVkdXgoJ3JlZ2lzdGVyJywgc3RhdGUpXG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwUmVkdWNlcjtcbiIsImltcG9ydCB7XG4gIFVQREFURV9TRUxMRVJfUFJPRklMRVxufSBmcm9tIFwiLi4vYWN0aW9ucy9zZWxsZXJQcm9maWxlLWFjdGlvbnNcIjtcbmltcG9ydCBsb2NhbFN0b3JhZ2UgZnJvbSAnbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgeyBjaGVja0lzTmVlZFBlcnNpc3QsIGNoZWNrTmVlZFBlcnNpc3QsIGdldFBlcnNpc3RPYmosIHBlcnNpc3RSZWR1eCB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIC8vIGNvbXBhbnk6IHt9LFxuICBzZWxsZXI6IHt9LFxuICBjYXJPblNhbGVzOiBbXSxcbn1cblxuY29uc3QgYXBwUmVkdWNlciA9IChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbikgPT4ge1xuXG5cbiAgLy8gY2hlY2tOZWVkUGVyc2lzdChfLmdldChhY3Rpb24sICd0eXBlJyksICdzZWxsZXJQcm9maWxlJywgXy5nZXQoYWN0aW9uLCAncGF5bG9hZCcpLCBfLmdldChhY3Rpb24sICdpc1Jlc3RvcmVEYXRhJykpO1xuXG4gIGxldCBwZXJzaXN0U3RhdGVzID0gXy5nZXQobG9jYWxTdG9yYWdlLmdldCgncmVkdXgnKSB8fCB7fSwgJ3NlbGxlclByb2ZpbGUnKSB8fCBJTklUSUFMX1NUQVRFO1xuICBsZXQgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgLi4ucGVyc2lzdFN0YXRlc1xuICB9XG4gIGlmKCFfLmlzRXF1YWwoc3RhdGUsIG5ld1N0YXRlKSl7XG4gICAgc3RhdGUgPSBuZXdTdGF0ZTtcbiAgfVxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBVUERBVEVfU0VMTEVSX1BST0ZJTEU6XG4gICAgICAvLyBzdGF0ZSA9IHsuLi5zdGF0ZSwgY29tcGFueTogYWN0aW9uLmRhdGEgfTtcbiAgICAgIHN0YXRlID0geyAuLi5zdGF0ZSwgc2VsbGVyOiBhY3Rpb24uZGF0YSB9O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHN0YXRlID0gc3RhdGU7XG4gICAgICBicmVhaztcbiAgfVxuICBwZXJzaXN0UmVkdXgoJ3NlbGxlclByb2ZpbGUnLCBzdGF0ZSlcblxuICByZXR1cm4gc3RhdGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcHBSZWR1Y2VyO1xuIiwiaW1wb3J0IHsgVVBEQVRFX1NPQ0tFVF9JTkZPLCBERUxFVEVfU09DS0VUX0lORk8gfSBmcm9tICcuLi9hY3Rpb25zL3NvY2tldFJlZnJlc2gtYWN0aW9ucyc7XG5pbXBvcnQgbG9jYWxTdG9yYWdlIGZyb20gJ2xvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0IHsgY2hlY2tJc05lZWRQZXJzaXN0LCBjaGVja05lZWRQZXJzaXN0LCBnZXRQZXJzaXN0T2JqLCBwZXJzaXN0UmVkdXggfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24pIHtcblxuICAvLyBjaGVja05lZWRQZXJzaXN0KF8uZ2V0KGFjdGlvbiwgJ3R5cGUnKSwgJ3NvY2tldFJlZnJlc2gnLCBfLmdldChhY3Rpb24sICdwYXlsb2FkJyksIF8uZ2V0KGFjdGlvbiwgJ2lzUmVzdG9yZURhdGEnKSk7XG5cbiAgbGV0IHBlcnNpc3RTdGF0ZXMgPSBfLmdldChsb2NhbFN0b3JhZ2UuZ2V0KCdyZWR1eCcpIHx8IHt9LCAnc29ja2V0UmVmcmVzaCcpIHx8IElOSVRJQUxfU1RBVEU7XG4gIGxldCBuZXdTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICAuLi5wZXJzaXN0U3RhdGVzXG4gIH1cbiAgaWYoIV8uaXNFcXVhbChzdGF0ZSwgbmV3U3RhdGUpKXtcbiAgICBzdGF0ZSA9IG5ld1N0YXRlO1xuICB9XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFVQREFURV9TT0NLRVRfSU5GTzpcbiAgICAgIHN0YXRlID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAvLyBzdGF0ZSA9IHtcbiAgICAgIC8vICAgLi4uc3RhdGUsXG4gICAgICAvLyAgIHNob3VsZFJlZnJlc2g6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAvLyB9XG4gICAgICAvL25vdCByZWFsbHkgdXNlZCB3ZSBjYW4ganVzdCB1cGRhdGUgd2l0aCBmYWxzaFxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBERUxFVEVfU09DS0VUX0lORk86XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGVcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgc3RhdGUgPSBzdGF0ZTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHBlcnNpc3RSZWR1eCgnc29ja2V0UmVmcmVzaCcsIHN0YXRlKVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiIsImltcG9ydCB7IExPR0lOX1NVQ0NFU1NGVUwsIExPR09VVF9TVUNDRVNTRlVMLCBTRVRfVVNFUiwgQUREUkVTU19CT09LX0ZPUk0sIENBUkRfRk9STSwgQkFOS19GT1JNIH0gZnJvbSAnLi4vYWN0aW9ucy91c2VyLWFjdGlvbnMnO1xuaW1wb3J0IHsgY2hlY2tJc05lZWRQZXJzaXN0LCBjaGVja05lZWRQZXJzaXN0LCBnZXRMb2NhbFN0b3JhZ2VQZXJzaXN0U3RhdGVzLCBnZXRQZXJzaXN0T2JqLCBwZXJzaXN0UmVkdXggfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBsb2NhbFN0b3JhZ2UgZnJvbSAnbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgeyBpc1ZhbGlkTnVtYmVyIH0gZnJvbSAnLi4vLi4vY29tbW9uLWZ1bmN0aW9uJztcblxuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICBpbmZvOiB7XG4gICAgdXNlcjoge1xuICAgICAgX2lkOiBudWxsLFxuICAgIH1cbiAgfSxcbiAgYXV0aGVudGljYXRlZDogZmFsc2UsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBlcnJvcnM6IHt9LFxuICBhZGRyZXNzRm9ybToge30sXG4gIGNhcmRGb3JtOiB7fSxcbiAgYmFua0Zvcm06IHt9LFxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSB7XG5cblxuICBsZXQgcGVyc2lzdFN0YXRlcyA9IF8uZ2V0KGxvY2FsU3RvcmFnZS5nZXQoJ3JlZHV4JykgfHwge30sICd1c2VyJykgfHwgSU5JVElBTF9TVEFURTtcbiAgbGV0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIC4uLnBlcnNpc3RTdGF0ZXNcbiAgfVxuICAvLyBjaGVja05lZWRQZXJzaXN0KF8uZ2V0KGFjdGlvbiwgJ3R5cGUnKSwgJ3VzZXInLCBfLmdldChhY3Rpb24sICdwYXlsb2FkJyksIF8uZ2V0KGFjdGlvbiwgJ2lzUmVzdG9yZURhdGEnKSk7XG5cbiAgaWYoIV8uaXNFcXVhbChzdGF0ZSwgbmV3U3RhdGUpKXtcbiAgICBzdGF0ZSA9IG5ld1N0YXRlO1xuICB9XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIExPR0lOX1NVQ0NFU1NGVUw6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGF1dGhlbnRpY2F0ZWQ6IHRydWUsXG4gICAgICAgIGluZm86IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIExPR09VVF9TVUNDRVNTRlVMOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhdXRoZW50aWNhdGVkOiBmYWxzZSxcbiAgICAgICAgaW5mbzoge31cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgU0VUX1VTRVI6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGluZm86IHtcbiAgICAgICAgICAuLi5zdGF0ZS5pbmZvLFxuICAgICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIEFERFJFU1NfQk9PS19GT1JNOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhZGRyZXNzRm9ybTogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIENBUkRfRk9STTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FyZEZvcm06IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBCQU5LX0ZPUk06XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGJhbmtGb3JtOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHBlcnNpc3RSZWR1eCgndXNlcicsIHN0YXRlKTtcbiAgcmV0dXJuIHN0YXRlO1xuXG59XG4iLCJpbXBvcnQge1xuICBBRERfTElLRSxcbiAgUkVNT1ZFX0xJS0UsXG4gIEFERF9CT09LTUFSSyxcbiAgUkVNT1ZFX0JPT0tNQVJLLFxuICBBRERfTElLRV9NU0csXG4gIFJFTU9WRV9MSUtFX01TRyxcbn0gZnJvbSAnLi4vYWN0aW9ucy91c2VybGlrZXMtYWN0aW9ucyc7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCJcbmltcG9ydCBsb2NhbFN0b3JhZ2UgZnJvbSAnbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgeyBjaGVja0lzTmVlZFBlcnNpc3QsIGNoZWNrTmVlZFBlcnNpc3QsIGdldFBlcnNpc3RPYmosIHBlcnNpc3RSZWR1eCB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIGFsbExpa2U6IFtdLFxuICBhbGxCb29rbWFyazogW10sXG4gIGFsbExpa2VNc2c6IFtdLFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbikge1xuXG5cbiAgLy8gY2hlY2tOZWVkUGVyc2lzdChfLmdldChhY3Rpb24sICd0eXBlJyksICd1c2VybGlrZXMnLCBfLmdldChhY3Rpb24sICdwYXlsb2FkJyksIF8uZ2V0KGFjdGlvbiwgJ2lzUmVzdG9yZURhdGEnKSk7XG5cbiAgbGV0IHBlcnNpc3RTdGF0ZXMgPSBfLmdldChsb2NhbFN0b3JhZ2UuZ2V0KCdyZWR1eCcpIHx8IHt9LCAndXNlcmxpa2VzJykgfHwgSU5JVElBTF9TVEFURTtcbiAgbGV0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIC4uLnBlcnNpc3RTdGF0ZXNcbiAgfVxuICBpZighXy5pc0VxdWFsKHN0YXRlLCBuZXdTdGF0ZSkpe1xuICAgIHN0YXRlID0gbmV3U3RhdGU7XG4gIH1cbiAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdGF0ZSA9IHt9XG4gIH1cblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlIEFERF9MSUtFOlxuICAgICAgaWYgKCFzdGF0ZS5hbGxMaWtlKSB7IHN0YXRlLmFsbExpa2UgPSBbXSB9XG4gICAgICBzdGF0ZS5hbGxMaWtlLnB1c2goYWN0aW9uLnZhbHVlKVxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBSRU1PVkVfTElLRTpcbiAgICAgIF8ucmVtb3ZlKHN0YXRlLmFsbExpa2UsIHtcbiAgICAgICAgY2hhdElkOiBhY3Rpb24udmFsdWUuY2hhdElkLFxuICAgICAgICB1c2VySWQ6IGFjdGlvbi52YWx1ZS51c2VySWRcbiAgICAgIH0pO1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEFERF9CT09LTUFSSzpcbiAgICAgIGlmICghc3RhdGUuYWxsQm9va21hcmspIHsgc3RhdGUuYWxsQm9va21hcmsgPSBbXSB9XG5cbiAgICAgIHN0YXRlLmFsbEJvb2ttYXJrLnB1c2goYWN0aW9uLnZhbHVlKVxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBSRU1PVkVfQk9PS01BUks6XG4gICAgICBfLnJlbW92ZShzdGF0ZS5hbGxCb29rbWFyaywge1xuICAgICAgICBjaGF0SWQ6IGFjdGlvbi52YWx1ZS5jaGF0SWQsXG4gICAgICAgIHVzZXJJZDogYWN0aW9uLnZhbHVlLnVzZXJJZFxuICAgICAgfSk7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgQUREX0xJS0VfTVNHOlxuICAgICAgaWYgKCFzdGF0ZS5hbGxMaWtlTXNnKSB7IHN0YXRlLmFsbExpa2VNc2cgPSBbXSB9XG4gICAgICBzdGF0ZS5hbGxMaWtlTXNnLnB1c2goYWN0aW9uLnZhbHVlKVxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBSRU1PVkVfTElLRV9NU0c6XG4gICAgICBfLnJlbW92ZShzdGF0ZS5hbGxMaWtlTXNnLCB7XG4gICAgICAgIGNoYXRJZDogYWN0aW9uLnZhbHVlLmNoYXRJZCxcbiAgICAgICAgbWVzc2FnZUlkOiBhY3Rpb24udmFsdWUuY2hhdElkLFxuICAgICAgICB1c2VySWQ6IGFjdGlvbi52YWx1ZS51c2VySWRcbiAgICAgIH0pO1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgc3RhdGUgPSBzdGF0ZVxuICAgICAgYnJlYWs7XG4gIH1cbiAgcGVyc2lzdFJlZHV4KCd1c2VybGlrZXMnLCBzdGF0ZSlcblxuICByZXR1cm4gc3RhdGU7XG59XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IEZFVENIX1ZBUklBTlQsIENMRUFSX1ZBUklBTlQgfSBmcm9tICcuLi9hY3Rpb25zL3ZhcmlhbnQtYWN0aW9uJztcbmltcG9ydCBsb2NhbFN0b3JhZ2UgZnJvbSAnbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgeyBjaGVja0lzTmVlZFBlcnNpc3QsIGNoZWNrTmVlZFBlcnNpc3QsIGdldFBlcnNpc3RPYmosIHBlcnNpc3RSZWR1eCB9IGZyb20gJy4uL2NvbmZpZyc7XG5cblxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcbiAgICB2YXJpYW50OiB7fSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSB7XG5cbiAgICAvLyBjaGVja05lZWRQZXJzaXN0KF8uZ2V0KGFjdGlvbiwgJ3R5cGUnKSwgJ3ZhcmlhbnQnLCBfLmdldChhY3Rpb24sICdwYXlsb2FkJyksIF8uZ2V0KGFjdGlvbiwgJ2lzUmVzdG9yZURhdGEnKSk7XG5cbiAgICBsZXQgcGVyc2lzdFN0YXRlcyA9IF8uZ2V0KGxvY2FsU3RvcmFnZS5nZXQoJ3JlZHV4JykgfHwge30sICd2YXJpYW50JykgfHwgSU5JVElBTF9TVEFURTtcbiAgICBsZXQgbmV3U3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi5wZXJzaXN0U3RhdGVzXG4gICAgfVxuICAgIGlmKCFfLmlzRXF1YWwoc3RhdGUsIG5ld1N0YXRlKSl7XG4gICAgICBzdGF0ZSA9IG5ld1N0YXRlO1xuICAgIH1cbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgRkVUQ0hfVkFSSUFOVDpcbiAgICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHZhcmlhbnQ6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBDTEVBUl9WQVJJQU5UOlxuICAgICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdmFyaWFudDoge30sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc3RhdGUgPSBzdGF0ZVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICB9XG4gICAgcGVyc2lzdFJlZHV4KCd2YXJpYW50Jywgc3RhdGUpXG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IEhZRFJBVEUsIGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJ1xuaW1wb3J0IGFwcCBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9hcHAtcmVkdWNlcidcbmltcG9ydCBjYXJmcmVhayBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9jYXJmcmVhay1yZWR1Y2VyJ1xuaW1wb3J0IGNhclBsYXRlc0xpc3QgZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvY2FyUGxhdGVzTGlzdC1yZWR1Y2VyJ1xuaW1wb3J0IGtwcCBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9rcHAtcmVkdWNlcidcbmltcG9ydCBsaXZlIGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2xpdmUtcmVkdWNlcidcbmltcG9ydCBuZXdjYXJzIGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL25ld2NhcnMtcmVkdWNlcidcbmltcG9ydCBwcm9kdWN0c0xpc3QgZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvcHJvZHVjdHNMaXN0LXJlZHVjZXInXG5pbXBvcnQgcmVnaXN0ZXIgZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvcmVnaXN0ZXItcmVkdWNlcidcbmltcG9ydCBzZWxsZXJQcm9maWxlIGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL3NlbGxlclByb2ZpbGUtcmVkdWNlcidcbmltcG9ydCBzb2NrZXRSZWZyZXNoIGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL3NvY2tldFJlZnJlc2gtcmVkdWNlcidcbmltcG9ydCB1c2VyIGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL3VzZXItcmVkdWNlcidcbmltcG9ydCB1c2VybGlrZXMgZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvdXNlcmxpa2VzLXJlZHVjZXInXG5pbXBvcnQgdmFyaWFudCBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy92YXJpYW50LXJlZHVjZXInXG5cblxuXG5jb25zdCBiaW5kTWlkZGxld2FyZSA9IChtaWRkbGV3YXJlKSA9PiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gPSByZXF1aXJlKCdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nKVxuICAgIHJldHVybiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSlcbiAgfVxuICByZXR1cm4gYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpXG59XG5cbmNvbnN0IGNvbWJpbmVkUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGFwcCxcbiAgY2FyZnJlYWssXG4gIGNhclBsYXRlc0xpc3QsXG4gIGtwcCxcbiAgbGl2ZSxcbiAgbmV3Y2FycyxcbiAgcHJvZHVjdHNMaXN0LFxuICByZWdpc3RlcixcbiAgc2VsbGVyUHJvZmlsZSxcbiAgc29ja2V0UmVmcmVzaCxcbiAgdXNlcmxpa2VzLFxuICB2YXJpYW50LFxuICB1c2VyLFxufSlcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gSFlEUkFURSkge1xuICAgIGNvbnN0IG5leHRTdGF0ZSA9IHtcbiAgICAgIC4uLnN0YXRlLCAvLyB1c2UgcHJldmlvdXMgc3RhdGVcbiAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLCAvLyBhcHBseSBkZWx0YSBmcm9tIGh5ZHJhdGlvblxuICAgIH1cbiAgICBpZiAoc3RhdGUuY291bnQuY291bnQpIG5leHRTdGF0ZS5jb3VudC5jb3VudCA9IHN0YXRlLmNvdW50LmNvdW50IC8vIHByZXNlcnZlIGNvdW50IHZhbHVlIG9uIGNsaWVudCBzaWRlIG5hdmlnYXRpb25cbiAgICByZXR1cm4gbmV4dFN0YXRlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNvbWJpbmVkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKVxuICB9XG59XG5cbmNvbnN0IGluaXRTdG9yZSA9ICgpID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGJpbmRNaWRkbGV3YXJlKFt0aHVua01pZGRsZXdhcmVdKSlcbn1cblxuXG5cbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihpbml0U3RvcmUpXG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGluaXRTdG9yZSgpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZlYXRoZXJzanMvYXV0aGVudGljYXRpb24tY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmZWF0aGVyc2pzL2ZlYXRoZXJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmZWF0aGVyc2pzL3NvY2tldGlvLWNsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9jYWwtc3RvcmFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXNlb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVlcnktc3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNwcmluZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29ja2V0LmlvLWNsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=