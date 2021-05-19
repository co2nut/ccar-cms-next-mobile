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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvbW1vbi1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhckZyZWFrL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dlbmVyYWwvUGFnZVRyYW5zaXRpb24uanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGl2ZS9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vZmVhdGhlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vZnVuY3Rpb25Db250ZW50LmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZVJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9pY29uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFyYW1zL2JvZHlUeXBlTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9wYXJhbXMvY2FyQnJhbmRzTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9wYXJhbXMvY29sb3JMaXN0LmpzIiwid2VicGFjazovLy8uL3BhcmFtcy9mdWVsVHlwZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcGFyYW1zL3N0YXRlTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2FwcC1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvY2FyUGxhdGVzTGlzdC1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvY2FyZnJlYWsuYWN0aW9uLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMva3BwLWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9saXZlLWFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL25ld2NhcnMtYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3Byb2R1Y3RzTGlzdC1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvcmVnaXN0ZXItYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3NlbGxlclByb2ZpbGUtYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3NvY2tldFJlZnJlc2gtYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3VzZXItYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3VzZXJsaWtlcy1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvdmFyaWFudC1hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2FwcC1yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2NhclBsYXRlc0xpc3QtcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9jYXJmcmVhay1yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2twcC1yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2xpdmUtcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9uZXdjYXJzLXJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvcHJvZHVjdHNMaXN0LXJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvcmVnaXN0ZXItcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9zZWxsZXJQcm9maWxlLXJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvc29ja2V0UmVmcmVzaC1yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL3VzZXItcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy91c2VybGlrZXMtcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy92YXJpYW50LXJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZlYXRoZXJzanMvYXV0aGVudGljYXRpb24tY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZlYXRoZXJzanMvZmVhdGhlcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZmVhdGhlcnNqcy9zb2NrZXRpby1jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2NhbC1zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1zZW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInF1ZXJ5LXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zcHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvLWNsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXVpZFwiIl0sIm5hbWVzIjpbIm1vbWVudCIsInJlcXVpcmUiLCJkZWZhdWx0UmFuZ2VTbWFsbGVyIiwiZGVmYXVsdFJhbmdlQmlnZ2VyIiwiYXZhaWxhYmxlRmlsdGVycyIsImlzTnVtYmVyQW5kU3BhY2UiLCJ2YWx1ZSIsInNwbGl0IiwiZmlsdGVyIiwiaXRlbSIsImluZGV4IiwicGFyc2VJbnQiLCJsZW5ndGgiLCJmb3JtYXREYXRlIiwiZm9ybWF0IiwiaXNWYWxpZERhdGUiLCJmb3JtYXROdW1iZXIiLCJ1bml0Iiwicm91bmQiLCJmaXhlZFBvaW50IiwidHJpbSIsImlzTmFOIiwicGFyc2VGbG9hdCIsIm51bWJlclRvRml4ZWQiLCJ1bml0cyIsIl8iLCJmb3JFYWNoIiwicmV2ZXJzZSIsImZvcm1hdGVkVmFsdWUiLCJwcmVmaXgiLCJpbnNlcnRCZXR3ZWVuIiwicG9zdGZpeCIsInRvU3RyaW5nIiwidHJpbVN0cmluZ051bWJlciIsImZyb21Gcm9udCIsInJhbmdlIiwidG9GaXhlZCIsInNsaWNlIiwiam9pbiIsInByZWZpeEFyciIsImRvbmUiLCJzb21lIiwibnVtIiwic3Vic3RyaW5nIiwicG9zdGZpeEFyciIsInJldmVyc2VTdHJpbmciLCJzdHJBcnJheSIsImNoZWNrQ2FyZFR5cGUiLCJudW1iZXIiLCJyZXBsYWNlIiwicmUiLCJSZWdFeHAiLCJtYXRjaCIsInRlc3QiLCJyZW1vdmVOdWxsRnJvbUFycmF5Iiwibm90RW1wdHlMZW5ndGgiLCJEYXRlIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiY2FsbCIsInZhbHVlT2YiLCJjYWxjdWxhdGVUaW1lUmFuZ2UiLCJkYXRlMSIsImRhdGUyIiwicHJlY2lzZSIsImRhdGEiLCJkaWZmZXJlbmNlIiwiZGlmZiIsInNlY3Rpb25zIiwic2VsZWN0ZWRTZWN0aW9uIiwiZmluZCIsInNlY3Rpb24iLCJNYXRoIiwiYWJzIiwiY29udmVydE1pbGxpU2Vjb25kc1RvVGltZSIsIm1pbGxpc2Vjb25kIiwibWluVW5pdCIsImlzVmFsaWROdW1iZXIiLCJzZWNvbmQiLCJtaW51dGUiLCJob3VyIiwiZmluYWxUaW1lIiwiZHVyYXRpb24iLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiaXNFeHBpcmVkIiwiZGF0ZSIsImFzcGVjdCIsInRvZGF5IiwiaXNBZnRlciIsImNvbnZlcnRUb0NhcmRGb3JtYXQiLCJjb252ZXJ0VG9FeHBpcmVkRGF0ZUZvcm1hdCIsInN0ciIsInNwbGljZSIsInNwYWNlIiwiY2hhciIsImZyb21CYWNrIiwic3RvcEF0RW5kIiwib3Jpc3RyIiwiYWRkZWRzcGFjZWNvdW50IiwiY2hlY2tTdXBwb3J0ZWRDYXJkVHlwZSIsImNhcmQiLCJpc0V4cGlyeURhdGVGb3JtYXQiLCJzb3J0QnlEZXNjIiwiY29sIiwic29ydCIsImEiLCJiIiwiaXNQbGFpbk9iamVjdCIsImlzQXJyYXkiLCJzb3J0QnlEYXRlRGVzYyIsImlzQmVmb3JlIiwiZmluZERhdGEiLCJ2YWwiLCJoaWRlU3RyaW5nTnVtYmVyIiwic3RyaW5nIiwic3RhcnQiLCJlbmQiLCJzdGFydHBhcnQiLCJlbmRwYXJ0IiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwiY29udmVydHBhcnQiLCJtYXAiLCJBcnJheSIsImlzT2JqZWN0Iiwia2V5cyIsImFycmF5TGVuZ3RoQ291bnQiLCJzeW5jRGVmYXVsdERlbGl2ZXJ5IiwiaWQiLCJfaWQiLCJpc0RlZmF1bHREZWxpdmVyeSIsInN5bmNEZWZhdWx0QmlsbGluZyIsImlzRGVmYXVsdEJpbGxpbmciLCJzeW5jRGVmYXVsdENhcmQiLCJpc0RlZmF1bHRDYXJkIiwic3luY0RlZmF1bHRCYW5rIiwiaXNEZWZhdWx0QmFuayIsImlzU2F2ZWRXaXNoTGlzdCIsImNoZWNrIiwicHJvZHVjdElkIiwiaXNGb2xsb3dlZCIsImNvbXBhbnlJZCIsImRlZXBFcXVhbCIsIm9iamVjdDEiLCJvYmplY3QyIiwia2V5czEiLCJrZXlzMiIsImtleSIsInZhbDEiLCJ2YWwyIiwiYXJlT2JqZWN0cyIsIm9iamVjdCIsImRlZXBFcXVhbEFycmF5T2JqZWN0IiwiYXJyYXkxIiwiYXJyYXkyIiwieCIsInJvdW5kVG9IYWxmIiwiZGVjaW1hbCIsImludCIsInF1ZXJ5U3RyaW5naWZ5TmVzdGVkT2JqZWN0IiwiY29sTmFtZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeVN0cmluZyIsImdldEltZ1RhZ1NvdXJjZSIsInN0ckFyciIsInJlbW92ZWQiLCJjb21wYWN0IiwiY2hyIiwiaW1hZ2VzIiwiaW1hZ2UiLCJzdWJzdHIiLCJzdGFydEluZGV4IiwiaW5kZXhPZiIsImNyb3BwZWRTdHJBcnIiLCJ1cmwiLCJuYW1lIiwicmVtb3ZlSHRtbFRhZyIsImNvbnZlcnRUb1JhbmdlRm9ybWF0IiwiY2xvbmVEZWVwIiwiY29udmVydFJhbmdlRm9ybWF0QmFjayIsInZhbHVlQXJyIiwiaXNFbXB0eSIsInBhcmFtZXRlcjEiLCJwYXJhbWV0ZXIyIiwiY29udmVydFJhbmdlRm9ybWF0VG9UZXh0IiwiZm9ybWF0ZWRSYW5nZSIsInZhbHVlRm9ybWF0IiwiY29udmVydFZhbHVlIiwidGV4dCIsImNvbnZlcnRGaWx0ZXJSYW5nZSIsImZpbmFsRGF0YSIsInF1ZXJ5IiwiJGx0ZSIsInB1c2giLCIkbHQiLCIkZXEiLCIkZ3QiLCIkZ3RlIiwicXVlcnkxIiwib2JqZWN0UmVtb3ZlRW1wdHlWYWx1ZSIsInBpY2tCeSIsInByb3BlcnR5IiwiY29udmVydFByb2R1Y3RSb3V0ZVBhcmFtc1RvRmlsdGVyT2JqZWN0Iiwicm91dGVQYXJhbXMiLCJwYXJhbWV0ZXIzIiwic29ydGluZyIsInBhZ2UiLCJ2aWV3IiwibWVyZ2VPYmoiLCJwaWNrIiwicGFyc2UiLCJlcnJvciIsImdldCIsImZpbHRlckdyb3VwIiwiY29uZmlnIiwicHJpY2VSYW5nZSIsInllYXJSYW5nZSIsIm1pbGVhZ2VSYW5nZSIsImVuZ2luZUNhcGFjaXR5UmFuZ2UiLCJzdGF0ZUFyciIsInN0YXRlIiwiYXJlYSIsIm1ha2UiLCJ0b0xvd2VyIiwibW9kZWwiLCJjb252ZXJ0UGFyYW1ldGVyVG9Qcm9kdWN0TGlzdFVybCIsImJhc2VQYXRoIiwiY29uZGl0aW9uIiwibWFpblBhcmFtZXRlcnMiLCJwYXRoIiwicGFyYW1ldGVyIiwiY29udmVydFBhcmFtZXRlclRvUHJvZHVjdExpc3RTZW9VcmwiLCJjaGVja0VudlJldHVybkNtc1VybCIsImNsaWVudCIsImlvIiwidXJpIiwiZ2V0VG9wSXRlbXMiLCJyYW5rIiwicGlja2VkRGF0YSIsInRvQ2FtZWxDYXNlIiwic2VwZXJhdG9yIiwiY2FwaXRhbGl6ZSIsInRvU25ha2VDYXNlIiwibG93ZXJDYXNlIiwidXBwZXJDYXNlIiwidmlld1BvcnQiLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwieHhsIiwiZ2V0VXNlck5hbWUiLCJ1c2VyIiwidHlwZSIsInVzZXJuYW1lIiwiZnVsbE5hbWUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsIm5hbWVQcmVmaXgiLCJmcmVha0lkIiwiZ2V0UGx1cmFsIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJjb3VudCIsInNob3dDb3VudCIsImZpbmRJbmRleGVzT2ZTdHJpbmciLCJzZWFyY2giLCJpbmRleGVzIiwiY3VycmVudFBvc2l0aW9uIiwiY2hlY2tPYmplY3RJZCIsImlkRm9yQ2hlY2siLCJnZXRPYmplY3RJZCIsImdldENhck1hcmtldFNlb0RhdGEiLCJ0b3RhbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsb2NhdGlvbiIsInJhbmdlRmlsdGVyIiwib3RoZXJGaWx0ZXIiLCJnZXRTdGF0ZSIsImZpbHRlclJhbmdlcyIsImZpbHRlclJhbmdlIiwiYm9keVR5cGUiLCJnZXRCb2R5VHlwZSIsImZ1ZWxUeXBlIiwiZ2V0RnVlbFR5cGUiLCJjb2xvciIsImdldENvbG9yIiwicmVnaXN0cmF0aW9uVXJsIiwicmVhZHlTdG9jayIsImNhcjM2MFZpZXciLCJjb25jYXQiLCJnZXRDYXJCcmFuZCIsInRyYW5zbWlzc2lvbiIsImNhbm9uaWNhbCIsImdldFByb2ZpbGVTZW9EYXRhIiwicHJvZmlsZSIsInVzZXJ1cmxJZCIsImF2YXRhciIsImFsdCIsImdldENhckZyZWFrU2VvRGF0YSIsInBhcnNlVGFnU3RyaW5nVG9QbGFpblN0cmluZyIsImNvbnRlbnQiLCJ1c2VySWQiLCJnZXRTb2NpYWxCb2FyZFNlb0RhdGEiLCJnZXRDbHViU2VvRGF0YSIsImNsdWJOYW1lIiwiY2x1YkJpbyIsImdldEFsbE5ld0NhclNlb0RhdGEiLCJnZXRMaXZlU2VvRGF0YSIsImFwaURvbWFpbiIsImdldFN0cmVhbVVybCIsImNoYXRSZXN0cmljdFRpbWUiLCJjYXJGcmVha0dsb2JhbFNlYXJjaCIsInRhZ1ByZWZpeCIsImhhc2hUYWdQcmVmaXgiLCJ0YWdQcmVmaXhIYXNoVmFsdWUiLCJoYXNoVGFnUHJlZml4SGFzaFZhbHVlIiwidGFnU3VmZml4SGFzaFZhbHVlIiwiaGFzaFRhZ1N1ZmZpeEhhc2hWYWx1ZSIsInNlcGVyYXRvckhhc2hWYWx1ZSIsImNsdWJQcm9maWxlVmlld1R5cGVzIiwicGFyc2VUYWdTdHJpbmdUb0FycmF5IiwiZmluYWxUZXh0IiwidGFnVGV4dCIsImluY2x1ZGVzIiwidW5kZWZpbmVkIiwiaGFzaFRhZ0FyciIsInBhcnNlSGFzaFRhZ1N0cmluZ1RvQXJyYXkiLCJnZXRUYWdTdHJpbmciLCJjb2RlUHJlZml4IiwiY29kZVN1ZmZpeCIsInBhcnNlVG9UYWdTdHJpbmciLCJhbGlhc0NvZGUiLCJzb3J0ZWRBbGlhc0NvZGUiLCJzb3J0QnkiLCJjb2RlIiwicG9zaXRpb24iLCJwcmVUZXh0IiwicG9zdFRleHQiLCJnZXRBbGlhc0NvZGVGcm9tVGV4dCIsInN0cnVjdGVkVGV4dCIsInRleHRBcnIiLCJ1aWQiLCJ2NCIsImVuZFBvc2l0aW9uIiwiY3JlYXRlZEF0IiwiZ2V0VGltZSIsImNvbnZlcnROYW1lU3RyaW5nIiwidXNlcnMiLCJhdXRoVXNlciIsImdldFZpZXdUeXBlIiwidmFsaWRhdGVWaWV3VHlwZSIsIlBhZ2VUcmFuc2l0aW9uIiwiY2hpbGRyZW4iLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInRyYW5zaXRpb25zIiwidXNlVHJhbnNpdGlvbiIsInBhdGhuYW1lIiwiZnJvbSIsIm9wYWNpdHkiLCJlbnRlciIsImxlYXZlIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwic3R5bGUiLCJQYWdlIiwic3R5bGVkIiwiYW5pbWF0ZWQiLCJtYWluIiwidGVzdFN0cmVhbVVybCIsImxpdmVTdHJlYW1VcmwiLCJzdHJlYW0iLCJnaWZ0cyIsInByaWNlIiwiZGVmYXVsdFJlYWN0aW9ucyIsImRlZmF1bHRSZWFjdGlvbnNBbmltYXRpb24iLCJ0ZW1wIiwicmVhY3QiLCJyZWFjdGlvbkdpZiIsImdpZnQiLCJpY29uIiwiZGVmYXVsdEdpZnRzIiwibGl2ZUljb24iLCJzdXBwb3J0SWNvbiIsImxpa2VJY29uIiwiY29tbWVudEljb24iLCJzaGFyZUljb24iLCJnaWZ0R2lmIiwiY2NvaW5JY29uIiwicmVhY3Rpb25BbmltYXRpb25UcmFuc2l0aW9ucyIsImdlbmVyYXRlUmFuZG9tVHJhbnNpdGlvbiIsIkxJVkVfVEVYVF9URU1QTEFURSIsIm1heFRyYW5zaXRpb25YIiwibWF4VHJhbnNpdGlvblkiLCJlYWNoVHJhbnNpdGlvbkxlbmd0aCIsImdyb3VwIiwicmVhY3Rpb25BbmltYXRpb25UcmFuc2l0aW9uc1RlbXAiLCJlYWNoVHJhbnNpdGlvbiIsInkiLCJpbmRleDEiLCJyYW5kb20iLCJnZXRUb3RhbFJlYWN0aW9ucyIsInJlYWN0aW9ucyIsInJlYWN0aW9uIiwiZ2V0VG9wUmVhY3Rpb25zIiwiZmlsdGVyZWREYXRhIiwiY3JlYXRlT2ZmZXIiLCJzb2NrZXQiLCJicm9hZGNhc3RlciIsInBjX2NvbmZpZyIsImljZVNlcnZlcnMiLCJ1cmxzIiwiY3JlZGVudGlhbCIsInBlZXJDb25uZWN0aW9uIiwiUlRDUGVlckNvbm5lY3Rpb24iLCJvZmZlclRvUmVjZWl2ZVZpZGVvIiwib2ZmZXJUb1JlY2VpdmVBdWRpbyIsInRoZW4iLCJzZHAiLCJzZXRMb2NhbERlc2NyaXB0aW9uIiwic2VuZFRvUGVlciIsImRlYWxlclNvY2tldElkIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZVR5cGUiLCJwYXlsb2FkIiwiZW1pdCIsInNlbmRlcklkIiwiY2xvc2VUaGVQZWVyQ29ubmVjdGlvbiIsInByZXZpb3VzRGVhbGVyU29ja2V0SWQiLCJjbG9zZSIsInN5bmNSZWFjdGlvblN1bW1hcnkiLCJyZWFjdGlvbkxvZ3MiLCJyZWFjdGlvblN1bW1hcnkiLCJzdW1tYXJ5IiwibG9ncyIsImZlYXRoZXJzIiwiY29uZmlndXJlIiwic29ja2V0aW8iLCJwaW5nVGltZU91dCIsImF1dGhlbnRpY2F0aW9uIiwiZm9ybWF0TW9uZXkiLCJhbW91bnQiLCJkZWNpbWFsQ291bnQiLCJ0aG91c2FuZHMiLCJuZWdhdGl2ZVNpZ24iLCJpIiwiaiIsImUiLCJjYWxNb250aCIsInYiLCJMb2FuQW1vdW50IiwiTG9hblBlcmlvZCIsIkludGVyZXN0IiwidG90YWxJbnRlcmVzdCIsIm1vbnRobHlJbnRlcmVzdCIsIm1vbnRobHlJbnN0YWxtZW50Iiwic2lnbiIsImdldEZhY2VCb29rSWQiLCJhcHBJZCIsImdldEdvb2dsZUlkIiwiY2xpZW50SWQiLCJyZW5kZXJNaWxlYWdlUmFuZ2UiLCJtaWxlYWdlIiwibWlsZWFnZTIiLCJ1c2VNaWxlYWdlIiwidXNlTWlsZWFnZTIiLCJlcnIiLCJtaWxlYWdlRnJvbSIsIm1pbGVhZ2VUbyIsImNoZWNrRW52IiwiZW52IiwiY2hlY2tFbnZSZXR1cm5XZWJBZG1pbiIsImZyb250RW5kVXJsIiwiQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIlByb3ZpZGVyIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHRQcm92aWRlciIsIndpdGhSb3V0ZXIiLCJ3cml0ZVBvc3RJY29uIiwiaW1hZ2VOb3RGb3VuZEljb24iLCJyYWNlRmxhZ0ljb24iLCJhbGxJY29uIiwiY2FyRnJlYWtMaWtlSWNvbiIsImNhckZyZWFrTGlrZUdyZXlJY29uIiwiY2FyRnJlYWtDb21tZW50SWNvbiIsImZvbGxvd2luZ0dyZXlJY29uIiwiZm9sbG93aW5nWWVsbG93SWNvbiIsImVhcnRoR3JleUljb24iLCJlYXJ0aFllbGxvd0ljb24iLCJjbHViTm9uTWVtYmVyIiwidXBsb2FkUGhvdG8iLCJjYWxlbmRhckljb24iLCJwaW5JY29uIiwiY2Fyc3BlY05vdEZvdW5kSW1hZ2UiLCJmbGFtZVJlZCIsImZsYW1lUmVkU2hhZG93IiwiZmxhbWUiLCJzb2xkT3V0SWNvbiIsInJheWFGbGFtZSIsInJheWFGb29kIiwicmF5YUxhbXAiLCJyYXlhTW9zcXVlIiwicmF5YVBlb3BsZSIsImNjYXJXZWJMb2dvNDAwWDE1MCIsImNjYXJMb2dvIiwiY2NhckxvZ28yIiwiY2NhcldlYkxvZ28yIiwibG9naW5CYWNrZ3JvdW5kIiwidGJoQ255IiwidGJoMUNueSIsInRiaDJDbnkiLCJjbnlMaW9uSGVhZCIsImNueUxvZ28iLCJnb29nbGVMb2dvIiwiY255TG9nbzIiLCJ0YmgiLCJkZWZhdWx0UHJvZmlsZUJhY2tncm91bmQiLCJwaG9uZSIsImVtYWlsIiwiaGVscCIsImFkZHJlc3MiLCJ3aXNoTGlzdCIsIndpc2hsaXN0SWNvbkFjdGl2ZWQiLCJmYXFEaWNlQmFubmVyIiwiZmFxQmFubmVyIiwiZmFxQnV5Q2FySWNvbiIsImZhcUNhckZyZWFrSWNvbiIsImZhcUNzdGFySWNvbiIsImZhcU15QWNjb3VudEljb24iLCJmYXFPdXJGZWF0dXJlc0ljb24iLCJmYXFTZWxsQ2FySWNvbiIsInNlYXJjaEJveEltZyIsInNvcnRpbmdJbWciLCJmaWx0ZXJGb3JtSW1nIiwiYWxsTmV3Q2FySW1nIiwiY2FyQnJhbmRJbWciLCJuZXdDYXJGaWx0ZXJGb3JtSW1nIiwiY2FyTW9yZUluZm9JbWciLCJjc3Rhckxpc3RJbWciLCJjc3RhckFuaW1hdGlvbkltZyIsImJlbGxJbmFjdGl2ZSIsInJhdGluZ0Jhbm5lciIsIm1lbnVMb2dpbiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsIkNvbnRhaW5lciIsImNyZWF0ZVVybCIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXRpbHMiLCJBcHBJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJfcmVmIiwiQ29tcG9uZW50IiwiY3R4IiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIkFwcCIsImNvbXBvbmVudERpZENhdGNoIiwiX2Vycm9ySW5mbyIsInJlbmRlciIsIl9fTl9TU0ciLCJfX05fU1NQIiwiY3JlYXRlRWxlbWVudCIsImFzc2lnbiIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwid2FyblVybCIsImV4ZWNPbmNlIiwid2FybiIsInAiLCJhc1BhdGgiLCJiYWNrIiwiYXMiLCJwdXNoVG8iLCJocmVmIiwicHVzaFJvdXRlIiwicHVzaFVybCIsInJlcGxhY2VUbyIsInJlcGxhY2VSb3V0ZSIsInJlcGxhY2VVcmwiLCJXcmFwcGVkQXBwIiwic2VvRGF0YSIsImlzU3RyaW5nIiwib3BlbkdyYXBoIiwic2l0ZV9uYW1lIiwiaGFuZGxlIiwic2l0ZSIsImNhcmRUeXBlIiwiZmFjZWJvb2tBcHBJZCIsInJvdXRlIiwid3JhcHBlciIsIndpdGhSZWR1eCIsImJvZHlUeXBlTGlzdCIsImdldEJvZHlUeXBlSWNvbiIsInNlbGVjdGVkQm9keVR5cGUiLCJ0b0xvd2VyQ2FzZSIsImFsZmFSb21lb0ltZyIsImFzaWFJbWciLCJhc3Rvbk1hcnRpbkltZyIsImF1ZGlJbWciLCJhdXN0aW5JbWciLCJiYWNJbWciLCJiZW50bGV5SW1nIiwiYm13QWxwaW5hSW1nIiwiYm13SW1nIiwiYnVmb3JpSW1nIiwiY2FkaWxsYWNJbWciLCJjYW1JbWciLCJjaGFuYUltZyIsImNoYW5nYW5JbWciLCJjaGVyeUltZyIsImNoZXZyb2xldEltZyIsImNocnlzbGVySW1nIiwiY2l0cm9lbkltZyIsImRhaWhhdHN1SW1nIiwiZGF0c3VuSW1nIiwiZG9kZ2VJbWciLCJkb25nZmVuZ0ltZyIsImZlcnJhcmlJbWciLCJmaWF0SW1nIiwiZm9kYXlJbWciLCJmb3JkSW1nIiwiZm90b25JbWciLCJnb2xkZW5EcmFnb25JbWciLCJncmVhdFdhbGxJbWciLCJoYXZhbEltZyIsImhpY29tSW1nIiwiaGlub0ltZyIsImhvbmRhSW1nIiwiaHVtbWVySW1nIiwiaHl1bmRhaUltZyIsImltcHVsSW1nIiwiaW5maW5pdGlJbWciLCJpbm9rb21JbWciLCJpc3V6dUltZyIsImphZ3VhckltZyIsImpiY0ltZyIsImplZXBJbWciLCJqbWNJbWciLCJqb3lsb25nSW1nIiwia2F3YXNha2lJbWciLCJraWFJbWciLCJraW5nTG9uZ0ltZyIsImxhbWJvcmdoaW5pSW1nIiwibGFuZFJvdmVySW1nIiwibGV4dXNJbWciLCJsbWdJbWciLCJsb3R1c0ltZyIsIm1haGluZHJhSW1nIiwibWFzZXJhdGlJbWciLCJtYXh1c0ltZyIsIm1hemRhSW1nIiwibWNsYXJlbkltZyIsIm1lcmNlZGVzQmVuekltZyIsIm1lcmNlZGVzTWF5YmFjaEltZyIsIm1nSW1nIiwibWluaUltZyIsIm1pdHN1YmlzaGlJbWciLCJtaXRzdW9rYUltZyIsIm5hemFJbWciLCJuaXNzYW5JbWciLCJvcGVsSW1nIiwicGVyb2R1YUltZyIsInBldWdlb3RJbWciLCJwb3JzY2hlSW1nIiwicHJvdG9uSW1nIiwicmFtSW1nIiwicmVuYXVsdEltZyIsInJvbGxzUm95Y2VJbWciLCJyb3ZlckltZyIsInNhYWJJbWciLCJzbWFydEltZyIsInNzYW5nWW9uZ0ltZyIsInN1YmFydUltZyIsInN1enVraUltZyIsInRhdGFJbWciLCJ0b3lvdGFJbWciLCJ0dnJJbWciLCJ2b2xrc3dhZ2VuSW1nIiwidm9sdm9JbWciLCJ3YWxkSW1nIiwieWFtYWhhSW1nIiwiem5hSW1nIiwiY2FyQnJhbmRzTGlzdCIsImdldENhckJyYW5kc0ljb24iLCJzZWxlY3RlZEJyYW5kIiwiY29sb3JMaXN0IiwiZ2V0Q29sb3JJY29uIiwic2VsZWN0ZWRDb2xvciIsImRpZXNlbEljb24iLCJlbGVjdHJpY0ljb24iLCJoeWJyaWRJY29uIiwicGV0cm9sTGVhZGVkSWNvbiIsInBldHJvbFVubGVhZGVkSWNvbiIsImZ1ZWxUeXBlTGlzdCIsImdldEZ1ZWxUeXBlSWNvbiIsInNlbGVjdGVkRnVlbFR5cGUiLCJmZWRlcmFsVGVycml0b3J5SWNvbiIsImpvaG9ySWNvbiIsImtlZGFoSWNvbiIsImt1YWxhTHVtcHVySWNvbiIsImxhYnVhbkZlZGVyYWxJY29uIiwibGFidWFuSWNvbiIsIm1lbGFrYUljb24iLCJuZWdlcmlTZW1iaWxhbkljb24iLCJwYWhhbmdJY29uIiwicGVuYW5nSWNvbiIsInBlcmFrSWNvbiIsInBlcmxpc0ljb24iLCJwdXRyYWpheUZlZGVyYWxJY29uIiwic2FiYWhJY29uIiwic2FyYXdha0ljb24iLCJzZWxhbmdvckljb24iLCJ0ZXJlbmdnYW51SWNvbiIsImtlbGFudGFuSWNvbiIsIlN0YXRlTGlzdCIsImdldFN0YXRlSWNvbiIsInNlbGVjdGVkU3RhdGUiLCJMT0FESU5HIiwiU0VUX0lOSVRFRF9SRURVWCIsIlNFVF9ESVNBQkxFX1dJTkRPV19TQ1JPTEwiLCJBRFZBTkNFX01PREUiLCJMT0dJTl9NT0RFIiwiUkVHSVNURVJfTU9ERSIsIlVQREFURV9BQ1RJVkVfTUVOVSIsIkZJTFRFUl9DQVJfQlJBTkRfTU9ERSIsIkZJTFRFUl9DQVJfU0VMRUNURURfQ0FSX0JSQU5EX1JPVyIsIkZJTFRFUl9DQVJfU0VBUkNIX0tFWVdPUkRTIiwiRklMVEVSX0NBUl9NT0RFTF9NT0RFIiwiRklMVEVSX0NBUl9TRUxFQ1RFRF9DQVJfTU9ERUxfUk9XIiwiRklMVEVSX0NBUl9NT0RFTF9TRUFSQ0hfS0VZV09SRFMiLCJGSUxURVJfQ09MT1JfTU9ERSIsIkZJTFRFUl9DQVJfU0VMRUNURURfQ09MT1JfTU9ERUxfUk9XIiwiRklMVEVSX0NPTE9SX01PREVMX1NFQVJDSF9LRVlXT1JEUyIsIkZJTFRFUl9CT0RZX1RZUEVfTU9ERSIsIkZJTFRFUl9DQVJfU0VMRUNURURfQk9EWV9UWVBFX01PREVMX1JPVyIsIkZJTFRFUl9CT0RZX1RZUEVfTU9ERUxfU0VBUkNIX0tFWVdPUkRTIiwiRklMVEVSX0RSSVZFTl9XSEVFTFNfTU9ERSIsIkZJTFRFUl9DQVJfU0VMRUNURURfRFJJVkVOX1dIRUVMU19NT0RFTF9ST1ciLCJGSUxURVJfRFJJVkVOX1dIRUVMU19NT0RFTF9TRUFSQ0hfS0VZV09SRFMiLCJGSUxURVJfRlVFTF9UWVBFX01PREUiLCJGSUxURVJfQ0FSX1NFTEVDVEVEX0ZVRUxfVFlQRV9NT0RFTF9ST1ciLCJGSUxURVJfRlVFTF9UWVBFX01PREVMX1NFQVJDSF9LRVlXT1JEUyIsIkZJTFRFUl9TVEFURV9NT0RFIiwiRklMVEVSX0NBUl9TRUxFQ1RFRF9TVEFURV9NT0RFTF9ST1ciLCJGSUxURVJfU1RBVEVfTU9ERUxfU0VBUkNIX0tFWVdPUkRTIiwiUVVJQ0tfU0VBUkNIX1BST0RVQ1RTX0xJU1QiLCJTSE9XX0NPTlRBQ1RfTElTVCIsIlNFVF9BUFBMWV9ZRUFSIiwiU0VUX0FQUExZX1BSSUNFIiwiU0VUX0FQUExZX01JTEVBR0UiLCJGSUxURVJfQ0FSX0JSQU5EUyIsIkZJTFRFUl9DQVJfTU9ERUxTIiwiRklMVEVSX0NPTE9SUyIsIkZJTFRFUl9CT0RZX1RZUEVTIiwiRklMVEVSX0RSSVZFTl9XSEVFTFMiLCJGSUxURVJfRlVFTF9UWVBFUyIsIkZJTFRFUl9TVEFURVMiLCJTRVRfTUVOVV9IRUlHSFQiLCJTRVRfTk9USUZJQ0FUSU9OX1RPS0VOIiwiU0VUX05PVElGSUNBVElPTl9UT0tFTl9USU1FX09VVF9EQVRFIiwiZmlsdGVyQ2FyQnJhbmRzIiwiZGlzcGF0Y2giLCJmaWx0ZXJDYXJNb2RlbHMiLCJmaWx0ZXJDb2xvcnMiLCJmaWx0ZXJCb2R5VHlwZXMiLCJmaWx0ZXJEcml2ZW5XaGVlbHMiLCJmaWx0ZXJGdWVsVHlwZXMiLCJmaWx0ZXJTdGF0ZXMiLCJsb2FkaW5nIiwiYWR2YW5jZU1vZGUiLCJsb2dpbk1vZGUiLCJyZWdpc3Rlck1vZGUiLCJ1cGRhdGVBY3RpdmVNZW51IiwiZmlsdGVyQ2FyQnJhbmRNb2RlIiwiZmlsdGVyQ2FyU2VsZWN0ZWRDYXJCcmFuZHNSb3ciLCJmaWx0ZXJDYXJTZWFyY2hLZXl3b3JkcyIsImZpbHRlckNhck1vZGVsTW9kZSIsImZpbHRlckNhclNlbGVjdGVkQ2FyTW9kZWxzUm93IiwiZmlsdGVyQ2FyTW9kZWxTZWFyY2hLZXl3b3JkcyIsImZpbHRlckNvbG9yTW9kZSIsImZpbHRlckNhclNlbGVjdGVkQ29sb3JSb3ciLCJmaWx0ZXJDb2xvclNlYXJjaEtleXdvcmRzIiwiZmlsdGVyQm9keVR5cGVNb2RlIiwiZmlsdGVyQ2FyU2VsZWN0ZWRCb2R5VHlwZVJvdyIsImZpbHRlckJvZHlUeXBlU2VhcmNoS2V5d29yZHMiLCJmaWx0ZXJEcml2ZW5XaGVlbE1vZGUiLCJmaWx0ZXJDYXJTZWxlY3RlZERyaXZlbldoZWVsUm93IiwiZmlsdGVyRHJpdmVuV2hlZWxTZWFyY2hLZXl3b3JkcyIsImZpbHRlckZ1ZWxUeXBlTW9kZSIsImZpbHRlckNhclNlbGVjdGVkRnVlbFR5cGVSb3ciLCJmaWx0ZXJGdWVsVHlwZVNlYXJjaEtleXdvcmRzIiwiZmlsdGVyU3RhdGVNb2RlIiwiZmlsdGVyQ2FyU2VsZWN0ZWRTdGF0ZVJvdyIsImZpbHRlclN0YXRlU2VhcmNoS2V5d29yZHMiLCJxdWlja1NlYXJjaFByb2R1Y3RzTGlzdCIsIm1vZGUiLCJxdWlja1NlYXJjaENhclNwZWNzRGF0YSIsInF1aWNrU2VhcmNoUHJvZHVjdGFkc0RhdGEiLCJ2YWx1ZXMiLCJzaG93Q29udGFjdExpc3QiLCJib29sZWFuIiwic2V0QXBwbHlZZWFyIiwic2V0QXBwbHlQcmljZSIsInNldEFwcGx5TWlsZWFnZSIsInNldE1lbnVIZWlnaHQiLCJzZXROb3RpZmljYXRpb25Ub2tlbiIsInNldE5vdGlmaWNhdGlvblRva2VuVGltZU91dERhdGUiLCJzZXRJbml0ZWRSZWR1eCIsInNldERpc2FibGVXaW5kb3dTY3JvbGwiLCJGRVRDSF9DQVJQTEFURVNMSVNUIiwiZmV0Y2hDYXJQbGF0ZXNMaXN0IiwiU0VUX1BPU1RfTU9EQUxfTElLRV9SRUZSRVNIX0lEIiwiRkVUQ0hfQ0FSX0ZSRUFLX1BPU1RTIiwiRkVUQ0hfRURJVEVEX1BPU1QiLCJzZXRQb3N0TW9kYWxMaWtlUmVmcmVzaElkIiwiZmV0Y2hDYXJGcmVha1Bvc3RzIiwiZmV0Y2hFZGl0ZWRQb3N0IiwiRkVUQ0hfUkVWSVNJT05fQU5TV0VSRURfUVVFU1RJT05TIiwiZmV0Y2hSZXZpc2lvbkFuc3dlcmVkUXVlc3Rpb25zIiwiRkVUQ0hfQ0xJRU5UX1NPQ0tFVF9JTyIsIkNMRUFSX0NMSUVOVF9TT0NLRVRfSU8iLCJmZXRjaENsaWVudFNvY2tldElvIiwiY2xlYXJDbGllbnRTb2NrZXRJbyIsIkZFVENIX05FV1MiLCJGRVRDSF9DTFVCIiwiRkVUQ0hfUFJJQ0UiLCJGRVRDSF9QT1BVTEFSIiwiRkVUQ0hfUE9QVUxBUkNBUlMiLCJGRVRDSF9DQVJOQU1FIiwiRkVUQ0hfQ0FSREVUQUlMUyIsIkZFVENIX0JSQU5EUyIsIkZFVENIX0JSQU5EREVUQUlMIiwiRkVUQ0hfQlJBTkRDQVJTIiwiRkVUQ0hfREVUQUlMUyIsIkZFVENIX0ZVRUwiLCJGRVRDSF9GSUxURVJFRF9DT01QQVJFX0RBVEEiLCJGRVRDSF9QRUVSX0NPTVBBUkVfQ0FSUyIsIkZFVENIX0NPTVBBUkVfTkVXQ0FSX0lEUyIsIkFERF9DT01QQVJFX05FV0NBUl9JRCIsIlJFTU9WRV9DT01QQVJFX05FV0NBUl9JRCIsIkZFVENIX0NPTVBBUkVfX05FV0NBUl9MSU1JVCIsIkZFVENIX05FV19DQVJfRklMVEVSX0dST1VQIiwiUkVTRVRfTkVXX0NBUl9GSUxURVJfR1JPVVAiLCJmZXRjaE5ld3MiLCJmZXRjaENsdWIiLCJmZXRjaFByaWNlIiwiZmV0Y2hQb3B1bGFyIiwiZmV0Y2hQb3B1bGFyQ2FycyIsImZldGNoQ2FyTmFtZSIsImZldGNoQ2FyRGV0YWlscyIsImZldGNoQnJhbmRzIiwiZmV0Y2hCcmFuZERldGFpbCIsImZldGNoQnJhbmRDYXJzIiwiZmV0Y2hEZXRhaWxzIiwiZmV0Y2hGdWVsIiwiZmlsdGVyZWRDb21wYXJlRGF0YSIsImZldGNoQ29tcGFyZU5ld0NhcklkcyIsImFkZENvbXBhcmVOZXdDYXJJZCIsInJlbW92ZUNvbXBhcmVOZXdDYXJJZCIsImZldGNoQ29tcGFyZU5ld0NhckxpbWl0IiwiZmV0Y2hQZWVyQ29tcGFyZUNhcnMiLCJmZXRjaE5ld0NhckZpbHRlckdyb3VwIiwicmVzZXROZXdDYXJGaWx0ZXJHcm91cCIsIkZFVENIX1BST0RVQ1RTTElTVCIsIkZFVENIX1BST0RVQ1RTTElTVF9IT01FIiwiUFVTSF9QUk9EVUNUU0xJU1QiLCJSRU1PVkVfUFJPRFVDVFNMSVNUIiwiVVBEQVRFX1BST0RVQ1RTTElTVCIsIlVQREFURV9BQ1RJVkVfSURfUFJPRFVDVFNfTElTVCIsIkFERF9DT01QQVJFX19QUk9EVUNUX0lEIiwiUkVNT1ZFX0NPTVBBUkVfUFJPRFVDVF9JRCIsIkNMRUFSX0NPTVBBUkVfUFJPRFVDVF9JRFMiLCJQQVRDSF9DT01QQVJFX1BST0RVQ1RfSURTIiwiRkVUQ0hfRkVBVFVSRVNfTElTVCIsIlVQREFURV9DSEVDS0VEX0ZFQVRVUkVTX0RBVEUiLCJGRVRDSF9DT01QQVJFX0xJTUlUIiwiRkVUQ0hfUFJPRFVDVF9GSUxURVJfT1BUSU9OUyIsIkNMRUFSX1BST0RVQ1RfRklMVEVSX09QVElPTlMiLCJGRVRDSF9QUk9EVUNUX0ZJTFRFUl9HUk9VUCIsIkNMRUFSX1BST0RVQ1RfRklMVEVSX0dST1VQIiwiRkVUQ0hfUFJPRFVDVF9GSUxURVJfQ09ORklHIiwiQ0xFQVJfUFJPRFVDVF9GSUxURVJfQ09ORklHIiwiRkVUQ0hfRklMVEVSX01PREFMX1NUQVRFIiwiU0VUX1BST0RVQ1RfTElTVF9MT0FESU5HIiwiZmV0Y2hQcm9kdWN0c0xpc3QiLCJmZXRjaFByb2R1Y3RzTGlzdEhvbWUiLCJwdXNoUHJvZHVjdHNMaXN0IiwicmVtb3ZlUHJvZHVjdHNMaXN0IiwidXBkYXRlUHJvZHVjdExpc3QiLCJ1cGRhdGVBY3RpdmVJZFByb2R1Y3RMaXN0IiwiY2xlYXJDb21wYXJlUHJvZHVjdElkcyIsImZldGNoRmVhdHVyZXNMaXN0IiwidXBkYXRlQ2hlY2tlZEZlYXR1cmVzRGF0ZSIsImZldGNoQ29tcGFyZUNhckxpbWl0IiwiYWRkQ29tcGFyZVByb2R1Y3RJZCIsInJlbW92ZUNvbXBhcmVQcm9kdWN0SWQiLCJwYXRjaENvbXBhcmVQcm9kdWN0SWRzIiwiZmV0Y2hQcm9kdWN0RmlsdGVyT3B0aW9ucyIsImNsZWFyUHJvZHVjdEZpbHRlck9wdGlvbnMiLCJmZXRjaFByb2R1Y3RGaWx0ZXJHcm91cCIsImNsZWFyUHJvZHVjdEZpbHRlckdyb3VwIiwiZmV0Y2hQcm9kdWN0RmlsdGVyQ29uZmlnIiwiY2xlYXJQcm9kdWN0RmlsdGVyQ29uZmlnIiwiZmV0Y2hGaWx0ZXJNb2RhbFN0YXRlIiwic2V0UHJvZHVjdExpc3RMb2FkaW5nIiwiU1RFUFNfUFJPUFNfQ1VSUkVOVCIsIkZPUk1fT05FIiwic3RlcHNQcm9wc0N1cnJlbnQiLCJmb3JtT25lIiwiVVBEQVRFX1NFTExFUl9QUk9GSUxFIiwidXBkYXRlU2VsbGVyUHJvZmlsZSIsIlVQREFURV9TT0NLRVRfSU5GTyIsIkRFTEVURV9TT0NLRVRfSU5GTyIsInVwZGF0ZVNvY2tldEluZm8iLCJzb2NrZXRJbmZvIiwiZGVsZXRlU29ja2V0SW5mbyIsIkxPR0lOX1NVQ0NFU1NGVUwiLCJMT0dPVVRfU1VDQ0VTU0ZVTCIsIkFERFJFU1NfQk9PS19GT1JNIiwiQkFOS19GT1JNIiwiQ0FSRF9GT1JNIiwiU0VUX1VTRVIiLCJsb2dpblN1Y2Nlc3NmdWwiLCJ1c2VySW5mbyIsImxvZ291dFN1Y2Nlc3NmdWwiLCJzZXRVc2VyIiwiYWRkcmVzc0Jvb2tGb3JtIiwiZm9ybSIsImNhcmRGb3JtIiwiYmFua0Zvcm0iLCJBRERfTElLRSIsIlJFTU9WRV9MSUtFIiwiQUREX0JPT0tNQVJLIiwiUkVNT1ZFX0JPT0tNQVJLIiwiQUREX0xJS0VfTVNHIiwiUkVNT1ZFX0xJS0VfTVNHIiwiYWRkTGlrZSIsInJlbW92ZUxpa2UiLCJhZGRCb29rbWFyayIsInJlbW92ZUJvb2ttYXJrIiwiYWRkTGlrZU1zZyIsInJlbW92ZUxpa2VNc2ciLCJGRVRDSF9WQVJJQU5UIiwiQ0xFQVJfVkFSSUFOVCIsImZldGNoVmFyaWFudCIsImNsZWFyVmFyaWFudCIsInN0YXRlUGVyc2lzdEFjdGlvbnMiLCJhY3Rpb24iLCJyZWR1Y2VyIiwicGVyc2lzdFJlZHV4IiwicmVkdXhTdGF0ZXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXQiLCJjaGVja0lzTmVlZFBlcnNpc3QiLCJjaGVja05lZWRQZXJzaXN0IiwiaXNSZXN0b3JlRGF0YSIsIm5lZWRQZXJzaXN0IiwicGVyc2lzdE9iaiIsImdldFBlcnNpc3RPYmoiLCJwZXJzaXN0ZWRTdGF0ZXMiLCJnZXRMb2NhbFN0b3JhZ2VQZXJzaXN0U3RhdGVzIiwic2VsZWN0ZWRQZXJzaXN0ZWRTdGF0ZSIsInNlcXVlbmNlIiwibWF4QnkiLCJwZXJzaXN0RGF0YSIsImNvb2tpZVBlcnNpc3RTdGF0ZXMiLCJzdGF0ZVBlcnNpc3RBY3Rpb24iLCJkeW5hbWljRGlzcGF0Y2giLCJSRVNUT1JFX1JFRFVYIiwicmVzdG9yZVJlZHV4IiwiSU5JVElBTF9TVEFURSIsIm5vdGlmaWNhdGlvblRva2VuIiwibm90aWZpY2F0aW9uVG9rZW5UaW1lT3V0RGF0ZSIsImRpc2FibGVXaW5kb3dTY3JvbGwiLCJpbml0ZWRSZWR1eCIsImZpbHRlckNhclNlbGVjdGVkQ2FyQnJhbmREYXRhIiwiZmlsdGVyQ2FyU2VsZWN0ZWRDYXJCcmFuZEluZGV4IiwiZmlsdGVyQ2FyU2VsZWN0ZWRDYXJNb2RlbERhdGEiLCJmaWx0ZXJDYXJTZWxlY3RlZENhck1vZGVsSW5kZXgiLCJmaWx0ZXJDYXJTZWxlY3RlZENvbG9yRGF0YSIsImZpbHRlckNhclNlbGVjdGVkQ29sb3JJbmRleCIsImZpbHRlckNhclNlbGVjdGVkQm9keVR5cGVEYXRhIiwiZmlsdGVyQ2FyU2VsZWN0ZWRCb2R5VHlwZUluZGV4IiwiZmlsdGVyQ2FyU2VsZWN0ZWRGdWVsVHlwZURhdGEiLCJmaWx0ZXJDYXJTZWxlY3RlZEZ1ZWxUeXBlSW5kZXgiLCJmaWx0ZXJDYXJTZWxlY3RlZFN0YXRlRGF0YSIsImZpbHRlckNhclNlbGVjdGVkU3RhdGVJbmRleCIsImNhckJyYW5kcyIsImNhck1vZGVscyIsImNvbG9ycyIsImJvZHlUeXBlcyIsImRyaXZlbldoZWVscyIsImZ1ZWxUeXBlcyIsInN0YXRlcyIsInF1aWNrU2VhcmNoTW9kZSIsImFjdGl2ZU1lbnUiLCJzaG93Q29udGFjdCIsImFwcGx5WWVhciIsImFwcGx5UHJpY2UiLCJhcHBseU1pbGVhZ2UiLCJtZW51SGVpZ2h0IiwicGVyc2lzdFN0YXRlcyIsIm5ld1N0YXRlIiwiaXNFcXVhbCIsImZpbHRlckNhclNlbGVjdGVkRHJpdmVuV2hlZWxEYXRhIiwiZmlsdGVyQ2FyU2VsZWN0ZWREcml2ZW5XaGVlbEluZGV4IiwiY2FyUGxhdGVzTGlzdCIsInBvc3RNb2RhbExpa2VSZWZyZXNoSWQiLCJjYXJGcmVha1Bvc3RzIiwiZWRpdGVkUG9zdCIsImFuc3dlcmVkRW5SZXZpc2lvblNlY3Rpb25BUGFwZXIiLCJhbnN3ZXJlZEVuUmV2aXNpb25TZWN0aW9uQlBhcGVyIiwiYW5zd2VyZWRFblJldmlzaW9uU2VjdGlvbkNQYXBlciIsImFuc3dlcmVkQm1SZXZpc2lvblNlY3Rpb25BUGFwZXIiLCJhbnN3ZXJlZEJtUmV2aXNpb25TZWN0aW9uQlBhcGVyIiwiYW5zd2VyZWRCbVJldmlzaW9uU2VjdGlvbkNQYXBlciIsImxhbmd1YWdlIiwidXBwZXJGaXJzdCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm5ld3MiLCJjbHViIiwicG9wdWxhciIsInBvcHVsYXJDYXJzIiwiQ2FyTmFtZSIsImJyYW5kcyIsImJyYW5kRGV0YWlsIiwiYnJhbmRDYXJzIiwiZGV0YWlscyIsImZ1ZWwiLCJuZXdDYXJGaWx0ZXJHcm91cCIsImRyaXZlbndoZWVsIiwic2VhdENhcGFjaXR5IiwiZXh0ZXJpb3IiLCJpbnRlcmlvciIsInNhZmV0eSIsIm1vbnRobHlQYXltZW50UmFuZ2UiLCJwZWVyQ29tcCIsImNvbXBhcmVJZHMiLCJjb21wYXJlTGltaXQiLCJjaGVja0lmRXhpc3QiLCJmaW5kSW5kZXgiLCJwcm9kdWN0TGlzdExvYWRpbmciLCJwcm9kdWN0c0xpc3QiLCJwcm9kdWN0c0xpc3RIb21lIiwiYWN0aXZlSWQiLCJhY3RpdmVwcm9kdWN0TGlzdCIsImNvbXBhcmVEYXRhIiwiZmVhdHVyZXNMaXN0IiwiY2hlY2tlZEZlYXR1cmVzRGF0ZSIsImZpbHRlck9wdGlvbnMiLCJpc0ZpbHRlck1vZGFsT3BlbiIsImN1cnJlbnQiLCJhcHBSZWR1Y2VyIiwic2VsbGVyIiwiY2FyT25TYWxlcyIsImluZm8iLCJhdXRoZW50aWNhdGVkIiwiZXJyb3JzIiwiYWRkcmVzc0Zvcm0iLCJhbGxMaWtlIiwiYWxsQm9va21hcmsiLCJhbGxMaWtlTXNnIiwicmVtb3ZlIiwiY2hhdElkIiwibWVzc2FnZUlkIiwidmFyaWFudCIsImJpbmRNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJhcHAiLCJjYXJmcmVhayIsImtwcCIsImxpdmUiLCJuZXdjYXJzIiwicmVnaXN0ZXIiLCJzZWxsZXJQcm9maWxlIiwic29ja2V0UmVmcmVzaCIsInVzZXJsaWtlcyIsIkhZRFJBVEUiLCJuZXh0U3RhdGUiLCJpbml0U3RvcmUiLCJjcmVhdGVTdG9yZSIsInRodW5rTWlkZGxld2FyZSIsImNyZWF0ZVdyYXBwZXIiLCJzdG9yZSJdLCJtYXBwaW5n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Q0FiMkIsRUFpQjNCO0FBQ0UsVUFBUUMsU0FEVjtBQUVFLFdBQVM7QUFGWCxDQWpCMkIsRUFxQjNCO0FBQ0UsVUFBUUMsTUFEVjtBQUVFLFdBQVM7QUFGWCxDQXJCMkIsRUF5QjNCO0FBQ0UsVUFBUUMsVUFEVjtBQUVFLFdBQVM7QUFGWCxDQXpCMkIsRUE2QjNCO0FBQ0UsVUFBUUMsWUFEVjtBQUVFLFdBQVM7QUFGWCxDQTdCMkIsRUFpQzNCO0FBQ0UsVUFBUUMsTUFEVjtBQUVFLFdBQVM7QUFGWCxDQWpDMkIsRUFxQzNCO0FBQ0UsVUFBUUMsU0FEVjtBQUVFLFdBQVM7QUFGWCxDQXJDMkIsRUF5QzNCO0FBQ0UsVUFBUUMsV0FEVjtBQUVFLFdBQVM7QUFGWCxDQXpDMkIsRUE2QzNCO0FBQ0UsVUFBUUMsTUFEVjtBQUVFLFdBQVM7QUFGWCxDQTdDMkIsRUFpRDNCO0FBQ0UsVUFBUUMsUUFEVjtBQUVFLFdBQVM7QUFGWCxDQWpEMkIsRUFxRDNCO0FBQ0UsVUFBUUMsVUFEVjtBQUVFLFdBQVM7QUFGWCxDQXJEMkIsRUF5RDNCO0FBQ0UsVUFBUUMsUUFEVjtBQUVFLFdBQVM7QUFGWCxDQXpEMkIsRUE2RDNCO0FBQ0UsVUFBUUMsWUFEVjtBQUVFLFdBQVM7QUFGWCxDQTdEMkIsRUFpRTNCO0FBQ0UsVUFBUUMsV0FEVjtBQUVFLFdBQVM7QUFGWCxDQWpFMkIsRUFxRTNCO0FBQ0UsVUFBUUMsVUFEVjtBQUVFLFdBQVM7QUFGWCxDQXJFMkIsRUF5RTNCO0FBQ0UsVUFBUUMsV0FEVjtBQUVFLFdBQVM7QUFGWCxDQXpFMkIsRUE2RTNCO0FBQ0UsVUFBUUMsU0FEVjtBQUVFLFdBQVM7QUFGWCxDQTdFMkIsRUFpRjNCO0FBQ0UsVUFBUUMsUUFEVjtBQUVFLFdBQVM7QUFGWCxDQWpGMkIsRUFxRjNCO0FBQ0UsVUFBUUMsV0FEVjtBQUVFLFdBQVM7QUFGWCxDQXJGMkIsRUF5RjNCO0FBQ0UsVUFBUUMsVUFEVjtBQUVFLFdBQVM7QUFGWCxDQXpGMkIsRUE2RjNCO0FBQ0UsVUFBUUMsT0FEVjtBQUVFLFdBQVM7QUFGWCxDQTdGMkIsRUFpRzNCO0FBQ0UsVUFBUUMsUUFEVjtBQUVFLFdBQVM7QUFGWCxDQWpHMkIsRUFxRzNCO0FBQ0UsVUFBUUMsT0FEVjtBQUVFLFdBQVM7QUFGWCxDQXJHMkIsRUF5RzNCO0FBQ0UsVUFBUUMsUUFEVjtBQUVFLFdBQVM7QUFGWCxDQXpHMkIsRUE2RzNCO0FBQ0UsVUFBUUMsZUFEVjtBQUVFLFdBQVM7QUFGWCxDQTdHMkIsRUFpSDNCO0FBQ0UsVUFBUUMsWUFEVjtBQUVFLFdBQVM7QUFGWCxDQWpIMkIsRUFxSDNCO0FBQ0UsVUFBUUMsUUFEVjtBQUVFLFdBQVM7QUFGWCxDQXJIMkIsRUF5SDNCO0FBQ0UsVUFBUUMsUUFEVjtBQUVFLFdBQVM7QUFGWCxDQXpIMkIsRUE2SDNCO0FBQ0UsVUFBUUMsT0FEVjtBQUVFLFdBQVM7QUFGWCxDQTdIMkIsRUFpSTNCO0FBQ0UsVUFBUUMsUUFEVjtBQUVFLFdBQVM7QUFGWCxDQWpJMkIsRUFxSTNCO0FBQ0UsVUFBUUMsU0FEVjtBQUVFLFdBQVM7QUFGWCxDQXJJMkIsRUF5STNCO0FBQ0UsVUFBUUMsVUFEVjtBQUVFLFdBQVM7QUFGWCxDQXpJMkIsRUE2STNCO0FBQ0UsVUFBUUMsUUFEVjtBQUVFLFdBQVM7QUFGWCxDQTdJMkIsRUFpSjNCO0FBQ0UsVUFBUUMsV0FEVjtBQUVFLFdBQVM7QUFGWCxDQWpKMkIsRUFxSjNCO0FBQ0UsVUFBUUMsU0FEVjtBQUVFLFdBQVM7QUFGWCxDQXJKMkIsRUF5SjNCO0FBQ0UsVUFBUUMsUUFEVjtBQUVFLFdBQVM7QUFGWCxDQXpKMkIsRUE2SjNCO0FBQ0UsVUFBUUMsU0FEVjtBQUVFLFdBQVM7QUFGWCxDQTdKMkIsRUFpSzNCO0FBQ0UsVUFBUUMsTUFEVjtBQUVFLFdBQVM7QUFGWCxDQWpLMkIsRUFxSzNCO0FBQ0UsVUFBUUMsT0FEVjtBQUVFLFdBQVM7QUFGWCxDQXJLMkIsRUF5SzNCO0FBQ0UsVUFBUUMsTUFEVjtBQUVFLFdBQVM7QUFGWCxDQXpLMkIsRUE2SzNCO0FBQ0UsVUFBUUMsVUFEVjtBQUVFLFdBQVM7QUFGWCxDQTdLMkIsRUFpTDNCO0FBQ0UsVUFBUUMsV0FEVjtBQUVFLFdBQVM7QUFGWCxDQWpMMkIsRUFxTDNCO0FBQ0UsVUFBUUMsTUFEVjtBQUVFLFdBQVM7QUFGWCxDQXJMMkIsRUF5TDNCO0FBQ0UsVUFBUUMsV0FEVjtBQUVFLFdBQVM7QUFGWCxDQXpMMkIsRUE2TDNCO0FBQ0UsVUFBUUMsY0FEVjtBQUVFLFdBQVM7QUFGWCxDQTdMMkIsRUFpTTNCO0FBQ0UsVUFBUUMsWUFEVjtBQUVFLFdBQVM7QUFGWCxDQWpNMkIsRUFxTTNCO0FBQ0UsVUFBUUMsUUFEVjtBQUVFLFdBQVM7QUFGWCxDQXJNMkIsRUF5TTNCO0FBQ0UsVUFBUUMsTUFEVjtBQUVFLFdBQVM7QUFGWCxDQXpNMkIsRUE2TTNCO0FBQ0UsVUFBUUMsUUFEVjtBQUVFLFdBQVM7QUFGWCxDQTdNMkIsRUFpTjNCO0FBQ0UsVUFBUUMsV0FEVjtBQUVFLFdBQVM7QUFGWCxDQWpOMkIsRUFxTjNCO0FBQ0UsVUFBUUMsV0FEVjtBQUVFLFdBQVM7QUFGWCxDQXJOMkIsRUF5TjNCO0FBQ0UsVUFBUUMsUUFEVjtBQUVFLFdBQVM7QUFGWCxDQXpOMkIsRUE2TjNCO0FBQ0UsVUFBUUMsUUFEVjtBQUVFLFdBQVM7QUFGWCxDQTdOMkIsRUFpTzNCO0FBQ0UsVUFBUUMsVUFEVjtBQUVFLFdBQVM7QUFGWCxDQWpPMkIsRUFxTzNCO0FBQ0UsVUFBUUMsZUFEVjtBQUVFLFdBQVM7QUFGWCxDQXJPMkIsRUF5TzNCO0FBQ0UsVUFBUUUsS0FEVjtBQUVFLFdBQVM7QUFGWCxDQXpPMkIsRUE2TzNCO0FBQ0UsVUFBUUQsa0JBRFY7QUFFRSxXQUFTO0FBRlgsQ0E3TzJCLEVBaVAzQjtBQUNFLFVBQVFFLE9BRFY7QUFFRSxXQUFTO0FBRlgsQ0FqUDJCLEVBcVAzQjtBQUNFLFVBQVFDLGFBRFY7QUFFRSxXQUFTO0FBRlgsQ0FyUDJCLEVBeVAzQjtBQUNFLFVBQVFDLFdBRFY7QUFFRSxXQUFTO0FBRlgsQ0F6UDJCLEVBNlAzQjtBQUNFLFVBQVFDLE9BRFY7QUFFRSxXQUFTO0FBRlgsQ0E3UDJCLEVBaVEzQjtBQUNFLFVBQVFDLFNBRFY7QUFFRSxXQUFTO0FBRlgsQ0FqUTJCLEVBcVEzQjtBQUNFLFVBQVFDLE9BRFY7QUFFRSxXQUFTO0FBRlgsQ0FyUTJCLEVBeVEzQjtBQUNFLFVBQVFDLFVBRFY7QUFFRSxXQUFTO0FBRlgsQ0F6UTJCLEVBNlEzQjtBQUNFLFVBQVFDLFVBRFY7QUFFRSxXQUFTO0FBRlgsQ0E3UTJCLEVBaVIzQjtBQUNFLFVBQVFDLFVBRFY7QUFFRSxXQUFTO0FBRlgsQ0FqUjJCLEVBcVIzQjtBQUNFLFVBQVFDLFNBRFY7QUFFRSxXQUFTO0FBRlgsQ0FyUjJCLEVBeVIzQjtBQUNFLFVBQVFDLE1BRFY7QUFFRSxXQUFTO0FBRlgsQ0F6UjJCLEVBNlIzQjtBQUNFLFVBQVFDLFVBRFY7QUFFRSxXQUFTO0FBRlgsQ0E3UjJCLEVBaVMzQjtBQUNFLFVBQVFDLGFBRFY7QUFFRSxXQUFTO0FBRlgsQ0FqUzJCLEVBcVMzQjtBQUNFLFVBQVFDLFFBRFY7QUFFRSxXQUFTO0FBRlgsQ0FyUzJCLEVBeVMzQjtBQUNFLFVBQVFDLE9BRFY7QUFFRSxXQUFTO0FBRlgsQ0F6UzJCLEVBNlMzQjtBQUNFLFVBQVFDLFFBRFY7QUFFRSxXQUFTO0FBRlgsQ0E3UzJCLEVBaVQzQjtBQUNFLFVBQVFDLFlBRFY7QUFFRSxXQUFTO0FBRlgsQ0FqVDJCLEVBcVQzQjtBQUNFLFVBQVFDLFNBRFY7QUFFRSxXQUFTO0FBRlgsQ0FyVDJCLEVBeVQzQjtBQUNFLFVBQVFDLFNBRFY7QUFFRSxXQUFTO0FBRlgsQ0F6VDJCLEVBNlQzQjtBQUNFLFVBQVFDLE9BRFY7QUFFRSxXQUFTO0FBRlgsQ0E3VDJCLEVBaVUzQjtBQUNFLFVBQVFDLFNBRFY7QUFFRSxXQUFTO0FBRlgsQ0FqVTJCLEVBcVUzQjtBQUNFLFVBQVFDLE1BRFY7QUFFRSxXQUFTO0FBRlgsQ0FyVTJCLEVBeVUzQjtBQUNFLFVBQVFDLGFBRFY7QUFFRSxXQUFTO0FBRlgsQ0F6VTJCLEVBNlUzQjtBQUNFLFVBQVFDLFFBRFY7QUFFRSxXQUFTO0FBRlgsQ0E3VTJCLEVBaVYzQjtBQUNFLFVBQVFDLE9BRFY7QUFFRSxXQUFTO0FBRlgsQ0FqVjJCLEVBcVYzQjtBQUNFLFVBQVFDLFNBRFY7QUFFRSxXQUFTO0FBRlgsQ0FyVjJCLEVBeVYzQjtBQUNFLFVBQVFDLE1BRFY7QUFFRSxXQUFTO0FBRlgsQ0F6VjJCLENBQXRCO0FBK1ZBLFNBQVNFLGdCQUFULENBQTBCM25CLElBQTFCLEVBQWdDO0FBQ3JDLE1BQUlBLElBQUosRUFBVTtBQUNSLFFBQUk0bkIsYUFBYSxHQUFHRixhQUFhLENBQUNybkIsSUFBZCxDQUFtQixVQUFVN0QsSUFBVixFQUFnQjtBQUNyRCxhQUFPQSxJQUFJLENBQUNILEtBQUwsQ0FBVzZsQixXQUFYLE9BQTZCbGlCLElBQUksQ0FBQ2tpQixXQUFMLEVBQXBDO0FBQ0QsS0FGbUIsQ0FBcEI7O0FBSUEsUUFBSTBGLGFBQUosRUFBbUI7QUFDakIsYUFBT0EsYUFBYSxDQUFDeFQsSUFBckI7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPLElBQVA7QUFDRDtBQUNGLEdBVkQsTUFVTztBQUNMLFdBQU8sSUFBUDtBQUNEO0FBQ0Y7QUFFTSxTQUFTN0YsV0FBVCxDQUFxQnZPLElBQXJCLEVBQTJCO0FBQ2hDLE1BQUlBLElBQUosRUFBVTtBQUNSLFFBQUk0bkIsYUFBYSxHQUFHRixhQUFhLENBQUNybkIsSUFBZCxDQUFtQixVQUFVN0QsSUFBVixFQUFnQjtBQUNyRCxhQUFPQSxJQUFJLENBQUNILEtBQUwsQ0FBVzZsQixXQUFYLE9BQTZCbGlCLElBQUksQ0FBQ2tpQixXQUFMLEVBQXBDO0FBQ0QsS0FGbUIsQ0FBcEI7O0FBSUEsUUFBSTBGLGFBQUosRUFBbUI7QUFDakIsYUFBT0EsYUFBUDtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU87QUFDTHZyQixhQUFLLEVBQUUsSUFERjtBQUVMK1gsWUFBSSxFQUFHO0FBRkYsT0FBUDtBQUlEO0FBQ0YsR0FiRCxNQWFPO0FBQ0wsV0FBUTtBQUNOL1gsV0FBSyxFQUFFLElBREQ7QUFFTitYLFVBQUksRUFBRztBQUZELEtBQVI7QUFJRDtBQUNGO0FBRWM7QUFDYnNUO0FBRGEsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUMvZEE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNRyxTQUFTLEdBQUcsQ0FDckI7QUFDSSxVQUFRLFNBRFo7QUFFSSxXQUFTO0FBRmIsQ0FEcUIsRUFLckI7QUFDSSxVQUFRLFNBRFo7QUFFSSxXQUFTO0FBRmIsQ0FMcUIsRUFTckI7QUFDSSxVQUFRLFNBRFo7QUFFSSxXQUFTO0FBRmIsQ0FUcUIsRUFhckI7QUFDSSxVQUFRLFNBRFo7QUFFSSxXQUFTO0FBRmIsQ0FicUIsRUFpQnJCO0FBQ0ksVUFBUSxTQURaO0FBRUksV0FBUztBQUZiLENBakJxQixFQXFCckI7QUFDSSxVQUFRLFNBRFo7QUFFSSxXQUFTO0FBRmIsQ0FyQnFCLEVBeUJyQjtBQUNJLFVBQVEsU0FEWjtBQUVJLFdBQVM7QUFGYixDQXpCcUIsRUE2QnJCO0FBQ0ksVUFBUSxTQURaO0FBRUksV0FBUztBQUZiLENBN0JxQixFQWlDckI7QUFDSSxVQUFRLFNBRFo7QUFFSSxXQUFTO0FBRmIsQ0FqQ3FCLEVBcUNyQjtBQUNJLFVBQVEsU0FEWjtBQUVJLFdBQVM7QUFGYixDQXJDcUIsRUF5Q3JCO0FBQ0ksVUFBUSxTQURaO0FBRUksV0FBUztBQUZiLENBekNxQixFQTZDckI7QUFDSSxVQUFRLFNBRFo7QUFFSSxXQUFTO0FBRmIsQ0E3Q3FCLEVBaURyQjtBQUNJLFVBQVEsU0FEWjtBQUVJLFdBQVM7QUFGYixDQWpEcUIsRUFxRHJCO0FBQ0ksVUFBUSxTQURaO0FBRUksV0FBUztBQUZiLENBckRxQixFQXlEckI7QUFDSSxVQUFRLFNBRFo7QUFFSSxXQUFTO0FBRmIsQ0F6RHFCLEVBNkRyQjtBQUNJLFVBQVEsU0FEWjtBQUVJLFdBQVM7QUFGYixDQTdEcUIsRUFpRXJCO0FBQ0ksVUFBUSxTQURaO0FBRUksV0FBUztBQUZiLENBakVxQixFQXFFckI7QUFDSSxVQUFRLE9BRFo7QUFFSSxXQUFTO0FBRmIsQ0FyRXFCLENBQWxCO0FBMkVBLFNBQVNDLFlBQVQsQ0FBc0I3WixLQUF0QixFQUE2QjtBQUNoQyxNQUFJQSxLQUFKLEVBQVc7QUFDUCxRQUFJOFosYUFBYSxHQUFHRixTQUFTLENBQUN4bkIsSUFBVixDQUFlLFVBQVU3RCxJQUFWLEVBQWdCO0FBQy9DLGFBQU9BLElBQUksQ0FBQ0gsS0FBTCxDQUFXNmxCLFdBQVgsT0FBNkJqVSxLQUFLLENBQUNpVSxXQUFOLEVBQXBDO0FBQ0gsS0FGbUIsQ0FBcEI7O0FBSUEsUUFBSTZGLGFBQUosRUFBbUI7QUFDZixhQUFPQSxhQUFhLENBQUMzVCxJQUFyQjtBQUNILEtBRkQsTUFFTztBQUNILGFBQU8sSUFBUDtBQUNIO0FBQ0osR0FWRCxNQVVPO0FBQ0gsV0FBTyxJQUFQO0FBQ0g7QUFDSjtBQUVNLFNBQVNsRyxRQUFULENBQWtCRCxLQUFsQixFQUF5QjtBQUM1QixNQUFJQSxLQUFKLEVBQVc7QUFDUCxRQUFJOFosYUFBYSxHQUFHRixTQUFTLENBQUN4bkIsSUFBVixDQUFlLFVBQVU3RCxJQUFWLEVBQWdCO0FBQy9DLGFBQU9BLElBQUksQ0FBQ0gsS0FBTCxDQUFXNmxCLFdBQVgsT0FBNkJqVSxLQUFLLENBQUNpVSxXQUFOLEVBQXBDO0FBQ0gsS0FGbUIsQ0FBcEI7O0FBSUEsUUFBSTZGLGFBQUosRUFBbUI7QUFDZixhQUFPQSxhQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsYUFBTztBQUNIMXJCLGFBQUssRUFBRSxJQURKO0FBRUgrWCxZQUFJLEVBQUU7QUFGSCxPQUFQO0FBSUg7QUFDSixHQWJELE1BYU87QUFDSCxXQUFPO0FBQ0gvWCxXQUFLLEVBQUUsSUFESjtBQUVIK1gsVUFBSSxFQUFFO0FBRkgsS0FBUDtBQUlIO0FBQ0o7QUFFYztBQUNYeVQ7QUFEVyxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ2pIQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU1HLFVBQVUsR0FBRyw2QkFBbkI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsK0JBQXJCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLDZCQUFuQjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLHNDQUF6QjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLHdDQUEzQjtBQUVPLE1BQU1DLFlBQVksR0FBRyxDQUN4QjtBQUNJLFVBQVFMLFVBRFo7QUFFSSxXQUFTO0FBRmIsQ0FEd0IsRUFLeEI7QUFDSSxVQUFRRSxVQURaO0FBRUksV0FBUztBQUZiLENBTHdCLEVBU3hCO0FBQ0ksVUFBUUQsWUFEWjtBQUVJLFdBQVM7QUFGYixDQVR3QixFQWF4QjtBQUNJLFVBQVFFLGdCQURaO0FBRUksV0FBUztBQUZiLENBYndCLEVBaUJ4QjtBQUNJLFVBQVFBLGdCQURaO0FBRUksV0FBUztBQUZiLENBakJ3QixFQXFCeEI7QUFDSSxVQUFRQyxrQkFEWjtBQUVJLFdBQVM7QUFGYixDQXJCd0IsQ0FBckI7QUEyQkEsU0FBU0UsZUFBVCxDQUF5QnZhLFFBQXpCLEVBQW1DO0FBQ3RDLE1BQUlBLFFBQUosRUFBYztBQUNWLFFBQUl3YSxnQkFBZ0IsR0FBR0YsWUFBWSxDQUFDaG9CLElBQWIsQ0FBa0IsVUFBVTdELElBQVYsRUFBZ0I7QUFDckQsYUFBT0EsSUFBSSxDQUFDSCxLQUFMLENBQVc2bEIsV0FBWCxNQUE0Qm5VLFFBQVEsQ0FBQ21VLFdBQVQsRUFBbkM7QUFDSCxLQUZzQixDQUF2Qjs7QUFJQSxRQUFJcUcsZ0JBQUosRUFBc0I7QUFDbEIsYUFBT0EsZ0JBQWdCLENBQUNuVSxJQUF4QjtBQUNILEtBRkQsTUFFTztBQUNILGFBQU8sSUFBUDtBQUNIO0FBQ0osR0FWRCxNQVVPO0FBQ0gsV0FBTyxJQUFQO0FBQ0g7QUFDSjtBQUVNLFNBQVNwRyxXQUFULENBQXFCRCxRQUFyQixFQUErQjtBQUNsQyxNQUFJQSxRQUFKLEVBQWM7QUFDVixRQUFJd2EsZ0JBQWdCLEdBQUdGLFlBQVksQ0FBQ2hvQixJQUFiLENBQWtCLFVBQVU3RCxJQUFWLEVBQWdCO0FBQ3JELGFBQU9BLElBQUksQ0FBQ0gsS0FBTCxDQUFXNmxCLFdBQVgsTUFBNEJuVSxRQUFRLENBQUNtVSxXQUFULEVBQW5DO0FBQ0gsS0FGc0IsQ0FBdkI7O0FBSUEsUUFBSXFHLGdCQUFKLEVBQXNCO0FBQ2xCLGFBQU9BLGdCQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsYUFBTztBQUNIbHNCLGFBQUssRUFBRSxJQURKO0FBRUgrWCxZQUFJLEVBQUU7QUFGSCxPQUFQO0FBSUg7QUFDSixHQWJELE1BYU87QUFDSCxXQUFPO0FBQ0gvWCxXQUFLLEVBQUUsSUFESjtBQUVIK1gsVUFBSSxFQUFFO0FBRkgsS0FBUDtBQUlIO0FBQ0o7QUFDYztBQUNYaVU7QUFEVyxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ3RFQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU1HLG9CQUFvQixHQUFJLHlDQUE5QjtBQUNBLE1BQU1DLFNBQVMsR0FBSSw2QkFBbkI7QUFDQSxNQUFNQyxTQUFTLEdBQUksNkJBQW5CO0FBQ0EsTUFBTUMsZUFBZSxHQUFJLG9DQUF6QjtBQUNBLE1BQU1DLGlCQUFpQixHQUFJLHNDQUEzQjtBQUNBLE1BQU1DLFVBQVUsR0FBSSw4QkFBcEI7QUFDQSxNQUFNQyxVQUFVLEdBQUksOEJBQXBCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUksdUNBQTVCO0FBQ0EsTUFBTUMsVUFBVSxHQUFJLDhCQUFwQjtBQUNBLE1BQU1DLFVBQVUsR0FBSSw4QkFBcEI7QUFDQSxNQUFNQyxTQUFTLEdBQUksNkJBQW5CO0FBQ0EsTUFBTUMsVUFBVSxHQUFJLDhCQUFwQjtBQUNBLE1BQU1DLG1CQUFtQixHQUFJLHdDQUE3QjtBQUNBLE1BQU1DLFNBQVMsR0FBSSw2QkFBbkI7QUFDQSxNQUFNQyxXQUFXLEdBQUksK0JBQXJCO0FBQ0EsTUFBTUMsWUFBWSxHQUFJLGdDQUF0QjtBQUNBLE1BQU1DLGNBQWMsR0FBSSxrQ0FBeEI7QUFDQSxNQUFNQyxZQUFZLEdBQUksZ0NBQXRCO0FBRU8sTUFBTUMsU0FBUyxHQUFHLENBQ3JCO0FBQ0ksVUFBUWxCLG9CQURaO0FBRUksV0FBUztBQUZiLENBRHFCLEVBS3JCO0FBQ0ksVUFBUUMsU0FEWjtBQUVJLFdBQVM7QUFGYixDQUxxQixFQVNyQjtBQUNJLFVBQVFDLFNBRFo7QUFFSSxXQUFTO0FBRmIsQ0FUcUIsRUFhckI7QUFDSSxVQUFRQyxlQURaO0FBRUksV0FBUztBQUZiLENBYnFCLEVBaUJyQjtBQUNJLFVBQVFDLGlCQURaO0FBRUksV0FBUztBQUZiLENBakJxQixFQXFCckI7QUFDSSxVQUFRQyxVQURaO0FBRUksV0FBUztBQUZiLENBckJxQixFQXlCckI7QUFDSSxVQUFRQyxVQURaO0FBRUksV0FBUztBQUZiLENBekJxQixFQTZCckI7QUFDSSxVQUFRQyxrQkFEWjtBQUVJLFdBQVM7QUFGYixDQTdCcUIsRUFpQ3JCO0FBQ0ksVUFBUUMsVUFEWjtBQUVJLFdBQVM7QUFGYixDQWpDcUIsRUFxQ3JCO0FBQ0ksVUFBUUMsVUFEWjtBQUVJLFdBQVM7QUFGYixDQXJDcUIsRUF5Q3JCO0FBQ0ksVUFBUUMsU0FEWjtBQUVJLFdBQVM7QUFGYixDQXpDcUIsRUE2Q3JCO0FBQ0ksVUFBUUMsVUFEWjtBQUVJLFdBQVM7QUFGYixDQTdDcUIsRUFpRHJCO0FBQ0ksVUFBUUMsbUJBRFo7QUFFSSxXQUFTO0FBRmIsQ0FqRHFCLEVBcURyQjtBQUNJLFVBQVFDLFNBRFo7QUFFSSxXQUFTO0FBRmIsQ0FyRHFCLEVBeURyQjtBQUNJLFVBQVFDLFdBRFo7QUFFSSxXQUFTO0FBRmIsQ0F6RHFCLEVBNkRyQjtBQUNJLFVBQVFDLFlBRFo7QUFFSSxXQUFTO0FBRmIsQ0E3RHFCLEVBaUVyQjtBQUNJLFVBQVFDLGNBRFo7QUFFSSxXQUFTO0FBRmIsQ0FqRXFCLEVBcUVyQjtBQUNJLFVBQVFDLFlBRFo7QUFFSSxXQUFTO0FBRmIsQ0FyRXFCLENBQWxCO0FBMkVBLFNBQVNFLFlBQVQsQ0FBc0I3ZixLQUF0QixFQUE2QjtBQUNoQyxNQUFJQSxLQUFKLEVBQVc7QUFDUCxRQUFJOGYsYUFBYSxHQUFHRixTQUFTLENBQUNycEIsSUFBVixDQUFlLFVBQVU3RCxJQUFWLEVBQWdCO0FBQy9DLGFBQU9BLElBQUksQ0FBQ0gsS0FBTCxDQUFXNmxCLFdBQVgsTUFBNEJwWSxLQUFLLENBQUNvWSxXQUFOLEVBQW5DO0FBQ0gsS0FGbUIsQ0FBcEI7O0FBSUEsUUFBSTBILGFBQUosRUFBbUI7QUFDZixhQUFPQSxhQUFhLENBQUN4VixJQUFyQjtBQUNILEtBRkQsTUFFTztBQUNILGFBQU8sSUFBUDtBQUNIO0FBQ0osR0FWRCxNQVVPO0FBQ0gsV0FBTyxJQUFQO0FBQ0g7QUFDSjtBQUVNLFNBQVMxRyxRQUFULENBQWtCNUQsS0FBbEIsRUFBeUI7QUFDNUIsTUFBSUEsS0FBSixFQUFXO0FBQ1AsUUFBSThmLGFBQWEsR0FBR0YsU0FBUyxDQUFDcnBCLElBQVYsQ0FBZSxVQUFVN0QsSUFBVixFQUFnQjtBQUMvQyxhQUFPQSxJQUFJLENBQUNILEtBQUwsQ0FBVzZsQixXQUFYLE1BQTRCcFksS0FBSyxDQUFDb1ksV0FBTixFQUFuQztBQUNILEtBRm1CLENBQXBCOztBQUlBLFFBQUkwSCxhQUFKLEVBQW1CO0FBQ2YsYUFBT0EsYUFBUDtBQUNILEtBRkQsTUFFTztBQUNILGFBQU87QUFDSHZ0QixhQUFLLEVBQUUsSUFESjtBQUVIK1gsWUFBSSxFQUFFO0FBRkgsT0FBUDtBQUlIO0FBQ0osR0FiRCxNQWFPO0FBQ0gsV0FBTztBQUNIL1gsV0FBSyxFQUFFLElBREo7QUFFSCtYLFVBQUksRUFBRTtBQUZILEtBQVA7QUFJSDtBQUNKO0FBQ2M7QUFDWHNWO0FBRFcsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNuSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUcsT0FBTyxHQUFHLFNBQWhCO0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBRUEsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBRUEsTUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFlBQW5CO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLGVBQXRCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBRUEsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMsaUNBQWlDLEdBQUcsbUNBQTFDO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBRUEsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMsaUNBQWlDLEdBQUcsbUNBQTFDO0FBQ0EsTUFBTUMsZ0NBQWdDLEdBQUcsa0NBQXpDO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsbUNBQW1DLEdBQUcscUNBQTVDO0FBQ0EsTUFBTUMsa0NBQWtDLEdBQUcsb0NBQTNDO0FBRUEsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMsdUNBQXVDLEdBQUcseUNBQWhEO0FBQ0EsTUFBTUMsc0NBQXNDLEdBQUcsd0NBQS9DO0FBRUEsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMsMkNBQTJDLEdBQUcsNkNBQXBEO0FBQ0EsTUFBTUMsMENBQTBDLEdBQUcsNENBQW5EO0FBRUEsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMsdUNBQXVDLEdBQUcseUNBQWhEO0FBQ0EsTUFBTUMsc0NBQXNDLEdBQUcsd0NBQS9DO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsbUNBQW1DLEdBQUcscUNBQTVDO0FBQ0EsTUFBTUMsa0NBQWtDLEdBQUcsb0NBQTNDO0FBRUEsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFFQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsZUFBdEI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsZUFBdEI7QUFFQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsb0NBQW9DLEdBQUcsc0NBQTdDLEMsQ0FJUDs7QUFDTyxTQUFTQyxlQUFULENBQXlCeHNCLElBQXpCLEVBQThCO0FBQ25DLFNBQVF5c0IsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUU4ZixpQkFEQztBQUVQOXJCLFVBQUksRUFBRUE7QUFGQyxLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQ7QUFFTSxTQUFTMHNCLGVBQVQsQ0FBeUIxc0IsSUFBekIsRUFBOEI7QUFDbkMsU0FBUXlzQixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRStmLGlCQURDO0FBRVAvckIsVUFBSSxFQUFFQTtBQUZDLEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRDtBQUVNLFNBQVMyc0IsWUFBVCxDQUFzQjNzQixJQUF0QixFQUEyQjtBQUNoQyxTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFZ2dCLGFBREM7QUFFUGhzQixVQUFJLEVBQUVBO0FBRkMsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1EO0FBRU0sU0FBUzRzQixlQUFULENBQXlCNXNCLElBQXpCLEVBQThCO0FBRW5DLFNBQVF5c0IsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUVpZ0IsaUJBREM7QUFFUGpzQixVQUFJLEVBQUVBO0FBRkMsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1EO0FBRU0sU0FBUzZzQixrQkFBVCxDQUE0QjdzQixJQUE1QixFQUFpQztBQUN0QyxTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFa2dCLG9CQURDO0FBRVBsc0IsVUFBSSxFQUFFQTtBQUZDLEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRDtBQUVNLFNBQVM4c0IsZUFBVCxDQUF5QjlzQixJQUF6QixFQUE4QjtBQUNuQyxTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFbWdCLGlCQURDO0FBRVBuc0IsVUFBSSxFQUFFQTtBQUZDLEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRDtBQUVNLFNBQVMrc0IsWUFBVCxDQUFzQi9zQixJQUF0QixFQUEyQjtBQUNoQyxTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFb2dCLGFBREM7QUFFUHBzQixVQUFJLEVBQUVBO0FBRkMsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1ELEMsQ0FDRDs7QUFDTyxTQUFTZ3RCLE9BQVQsQ0FBaUJodEIsSUFBakIsRUFBc0I7QUFDM0IsU0FBUXlzQixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRTZkLE9BREM7QUFFUDNTLGFBQU8sRUFBR2xYO0FBRkgsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1EO0FBRU0sU0FBU2l0QixXQUFULENBQXFCanRCLElBQXJCLEVBQTBCO0FBQy9CLFNBQVF5c0IsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUVnZSxZQURDO0FBRVA5UyxhQUFPLEVBQUNsWDtBQUZELEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRDtBQUVNLFNBQVNrdEIsU0FBVCxDQUFtQmx0QixJQUFuQixFQUF3QjtBQUM3QixTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFaWUsVUFEQztBQUVQanFCLFVBQUksRUFBRUE7QUFGQyxLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQ7QUFBQTtBQUVNLFNBQVNtdEIsWUFBVCxDQUFzQm50QixJQUF0QixFQUEyQjtBQUNoQyxTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFa2UsYUFEQztBQUVQbHFCLFVBQUksRUFBRUE7QUFGQyxLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQ7QUFBQTtBQUVNLFNBQVNvdEIsZ0JBQVQsQ0FBMEJwdEIsSUFBMUIsRUFBK0I7QUFDcEMsU0FBUXlzQixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRW1lLGtCQURDO0FBRVBucUIsVUFBSSxFQUFFQTtBQUZDLEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRCxDLENBRUQ7QUFDQTs7QUFDTyxTQUFTcXRCLGtCQUFULENBQTRCcnRCLElBQTVCLEVBQWlDO0FBQ3RDLFNBQVF5c0IsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUVvZSxxQkFEQztBQUVQcHFCLFVBQUksRUFBRUE7QUFGQyxLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQ7QUFFTSxTQUFTc3RCLDZCQUFULENBQXVDdHRCLElBQXZDLEVBQTZDdkQsS0FBN0MsRUFBbUQ7QUFDeEQsU0FBUWd3QixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRXFlLGlDQURDO0FBRVBycUIsVUFBSSxFQUFFQSxJQUZDO0FBR1B2RCxXQUFLLEVBQUVBO0FBSEEsS0FBRCxDQUFSO0FBS0QsR0FORDtBQU9EO0FBRU0sU0FBUzh3Qix1QkFBVCxDQUFpQ3Z0QixJQUFqQyxFQUFzQztBQUMzQyxTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFc2UsMEJBREM7QUFFUHRxQixVQUFJLEVBQUVBO0FBRkMsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1ELEMsQ0FDRDtBQUVBO0FBQ0E7O0FBRU8sU0FBU3d0QixrQkFBVCxDQUE0Qnh0QixJQUE1QixFQUFpQztBQUN0QyxTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFdWUscUJBREM7QUFFUHZxQixVQUFJLEVBQUVBO0FBRkMsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1EO0FBRU0sU0FBU3l0Qiw2QkFBVCxDQUF1Q3p0QixJQUF2QyxFQUE2Q3ZELEtBQTdDLEVBQW1EO0FBQ3hELFNBQVFnd0IsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUV3ZSxpQ0FEQztBQUVQeHFCLFVBQUksRUFBRUEsSUFGQztBQUdQdkQsV0FBSyxFQUFFQTtBQUhBLEtBQUQsQ0FBUjtBQUtELEdBTkQ7QUFPRDtBQUVNLFNBQVNpeEIsNEJBQVQsQ0FBc0MxdEIsSUFBdEMsRUFBMkM7QUFDaEQsU0FBUXlzQixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRXllLGdDQURDO0FBRVB6cUIsVUFBSSxFQUFFQTtBQUZDLEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRCxDLENBQ0Q7QUFFQTtBQUNBOztBQUNPLFNBQVMydEIsZUFBVCxDQUF5QjN0QixJQUF6QixFQUE4QjtBQUNuQyxTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFMGUsaUJBREM7QUFFUDFxQixVQUFJLEVBQUVBO0FBRkMsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1EO0FBRU0sU0FBUzR0Qix5QkFBVCxDQUFtQzV0QixJQUFuQyxFQUF5Q3ZELEtBQXpDLEVBQStDO0FBQ3BELFNBQVFnd0IsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUUyZSxtQ0FEQztBQUVQM3FCLFVBQUksRUFBRUEsSUFGQztBQUdQdkQsV0FBSyxFQUFFQTtBQUhBLEtBQUQsQ0FBUjtBQUtELEdBTkQ7QUFPRDtBQUVNLFNBQVNveEIseUJBQVQsQ0FBbUM3dEIsSUFBbkMsRUFBd0M7QUFDN0MsU0FBUXlzQixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRTRlLGtDQURDO0FBRVA1cUIsVUFBSSxFQUFFQTtBQUZDLEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRCxDLENBQ0Q7O0FBQ08sU0FBUzh0QixrQkFBVCxDQUE0Qjl0QixJQUE1QixFQUFpQztBQUN0QyxTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFNmUscUJBREM7QUFFUDdxQixVQUFJLEVBQUVBO0FBRkMsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1EO0FBRU0sU0FBUyt0Qiw0QkFBVCxDQUFzQy90QixJQUF0QyxFQUE0Q3ZELEtBQTVDLEVBQWtEO0FBQ3ZELFNBQVFnd0IsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUU4ZSx1Q0FEQztBQUVQOXFCLFVBQUksRUFBRUEsSUFGQztBQUdQdkQsV0FBSyxFQUFFQTtBQUhBLEtBQUQsQ0FBUjtBQUtELEdBTkQ7QUFPRDtBQUVNLFNBQVN1eEIsNEJBQVQsQ0FBc0NodUIsSUFBdEMsRUFBMkM7QUFDaEQsU0FBUXlzQixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRStlLHNDQURDO0FBRVAvcUIsVUFBSSxFQUFFQTtBQUZDLEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRCxDLENBQ0Q7QUFFQTtBQUNBOztBQUNPLFNBQVNpdUIscUJBQVQsQ0FBK0JqdUIsSUFBL0IsRUFBb0M7QUFDekMsU0FBUXlzQixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRWdmLHlCQURDO0FBRVBockIsVUFBSSxFQUFFQTtBQUZDLEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRDtBQUVNLFNBQVNrdUIsK0JBQVQsQ0FBeUNsdUIsSUFBekMsRUFBK0N2RCxLQUEvQyxFQUFxRDtBQUMxRCxTQUFRZ3dCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFaWYsMkNBREM7QUFFUGpyQixVQUFJLEVBQUVBLElBRkM7QUFHUHZELFdBQUssRUFBRUE7QUFIQSxLQUFELENBQVI7QUFLRCxHQU5EO0FBT0Q7QUFFTSxTQUFTMHhCLCtCQUFULENBQXlDbnVCLElBQXpDLEVBQThDO0FBQ25ELFNBQVF5c0IsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUVrZiwwQ0FEQztBQUVQbHJCLFVBQUksRUFBRUE7QUFGQyxLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQsQyxDQUNEO0FBRUE7QUFDQTs7QUFDTyxTQUFTb3VCLGtCQUFULENBQTRCcHVCLElBQTVCLEVBQWlDO0FBQ3RDLFNBQVF5c0IsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUVtZixxQkFEQztBQUVQbnJCLFVBQUksRUFBRUE7QUFGQyxLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQ7QUFFTSxTQUFTcXVCLDRCQUFULENBQXNDcnVCLElBQXRDLEVBQTRDdkQsS0FBNUMsRUFBa0Q7QUFDdkQsU0FBUWd3QixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRW9mLHVDQURDO0FBRVBwckIsVUFBSSxFQUFFQSxJQUZDO0FBR1B2RCxXQUFLLEVBQUVBO0FBSEEsS0FBRCxDQUFSO0FBS0QsR0FORDtBQU9EO0FBRU0sU0FBUzZ4Qiw0QkFBVCxDQUFzQ3R1QixJQUF0QyxFQUEyQztBQUNoRCxTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFcWYsc0NBREM7QUFFUHJyQixVQUFJLEVBQUVBO0FBRkMsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1ELEMsQ0FDRDtBQUVBO0FBQ0E7O0FBQ08sU0FBU3V1QixlQUFULENBQXlCdnVCLElBQXpCLEVBQThCO0FBQ25DLFNBQVF5c0IsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUVzZixpQkFEQztBQUVQdHJCLFVBQUksRUFBRUE7QUFGQyxLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQ7QUFFTSxTQUFTd3VCLHlCQUFULENBQW1DeHVCLElBQW5DLEVBQXlDdkQsS0FBekMsRUFBK0M7QUFDcEQsU0FBUWd3QixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRXVmLG1DQURDO0FBRVB2ckIsVUFBSSxFQUFFQSxJQUZDO0FBR1B2RCxXQUFLLEVBQUVBO0FBSEEsS0FBRCxDQUFSO0FBS0QsR0FORDtBQU9EO0FBRU0sU0FBU2d5Qix5QkFBVCxDQUFtQ3p1QixJQUFuQyxFQUF3QztBQUM3QyxTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFd2Ysa0NBREM7QUFFUHhyQixVQUFJLEVBQUVBO0FBRkMsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1ELEMsQ0FDRDs7QUFFTyxTQUFTMHVCLHVCQUFULENBQWlDQyxJQUFqQyxFQUF1Q0MsdUJBQXZDLEVBQWdFQyx5QkFBaEUsRUFBMkZDLE1BQTNGLEVBQWtHO0FBQ3ZHLFNBQVFyQyxRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRXlmLDBCQURDO0FBRVBrRCxVQUFJLEVBQUVBLElBRkM7QUFHUEMsNkJBSE87QUFJUEMsK0JBSk87QUFLUEM7QUFMTyxLQUFELENBQVI7QUFPRCxHQVJEO0FBU0Q7QUFFTSxTQUFTQyxlQUFULENBQXlCQyxPQUF6QixFQUFpQztBQUN0QyxTQUFRdkMsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUUwZixpQkFEQztBQUVQc0Q7QUFGTyxLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQ7QUFFTSxTQUFTQyxZQUFULENBQXNCanZCLElBQXRCLEVBQTJCO0FBQ2hDLFNBQVF5c0IsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUUyZixjQURDO0FBRVAzckI7QUFGTyxLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQ7QUFFTSxTQUFTa3ZCLGFBQVQsQ0FBdUJsdkIsSUFBdkIsRUFBNEI7QUFDakMsU0FBUXlzQixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRTRmLGVBREM7QUFFUDVyQjtBQUZPLEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRDtBQUVNLFNBQVNtdkIsZUFBVCxDQUF5Qm52QixJQUF6QixFQUE4QjtBQUNuQyxTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFNmYsaUJBREM7QUFFUDdyQjtBQUZPLEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRDtBQUVNLFNBQVNvdkIsYUFBVCxDQUF1QnB2QixJQUF2QixFQUE0QjtBQUNqQyxTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFcWdCLGVBREM7QUFFUHJzQjtBQUZPLEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRDtBQUVNLFNBQVNxdkIsb0JBQVQsQ0FBOEJydkIsSUFBOUIsRUFBbUM7QUFDeEMsU0FBUXlzQixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRXNnQixzQkFEQztBQUVQdHNCO0FBRk8sS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1EO0FBQ00sU0FBU3N2QiwrQkFBVCxDQUF5Q3R2QixJQUF6QyxFQUE4QztBQUNuRCxTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFdWdCLG9DQURDO0FBRVB2c0I7QUFGTyxLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQ7QUFFTSxTQUFTdXZCLGNBQVQsQ0FBd0J2dkIsSUFBeEIsRUFBNkI7QUFDbEMsU0FBUXlzQixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRThkLGdCQURDO0FBRVA5cEI7QUFGTyxLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQ7QUFFTSxTQUFTd3ZCLHNCQUFULENBQWdDeHZCLElBQWhDLEVBQXFDO0FBQzFDLFNBQVF5c0IsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUUrZCx5QkFEQztBQUVQL3BCO0FBRk8sS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1ELEM7Ozs7Ozs7Ozs7OztBQzdkRDtBQUFBO0FBQUE7QUFBTyxNQUFNeXZCLG1CQUFtQixHQUFHLG9CQUE1QjtBQUdBLFNBQVNDLGtCQUFULENBQTRCMXZCLElBQTVCLEVBQWlDO0FBQ3BDLFNBQVF5c0IsUUFBRCxJQUFjO0FBQ2pCQSxZQUFRLENBQUM7QUFDTHpnQixVQUFJLEVBQUV5akIsbUJBREQ7QUFFTHZZLGFBQU8sRUFBQ2xYO0FBRkgsS0FBRCxDQUFSO0FBSUgsR0FMRDtBQU1ILEM7Ozs7Ozs7Ozs7OztBQ1ZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTTJ2Qiw4QkFBOEIsR0FBRyxnQ0FBdkM7QUFDQSxNQUFNQyxxQkFBcUIsR0FBRyx1QkFBOUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFFQSxTQUFTQyx5QkFBVCxDQUFtQzl2QixJQUFuQyxFQUF3QztBQUM3QyxTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFMmpCLDhCQURDO0FBRVB6WSxhQUFPLEVBQUNsWDtBQUZELEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRDtBQUVNLFNBQVMrdkIsa0JBQVQsQ0FBNEIvdkIsSUFBNUIsRUFBaUM7QUFDdEMsU0FBUXlzQixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRTRqQixxQkFEQztBQUVQMVksYUFBTyxFQUFDbFg7QUFGRCxLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQ7QUFFTSxTQUFTZ3dCLGVBQVQsQ0FBeUJod0IsSUFBekIsRUFBOEI7QUFDbkMsU0FBUXlzQixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRTZqQixpQkFEQztBQUVQM1ksYUFBTyxFQUFDbFg7QUFGRCxLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQsQzs7Ozs7Ozs7Ozs7O0FDN0JEO0FBQUE7QUFBQTtBQUFPLE1BQU1pd0IsaUNBQWlDLEdBQUcsbUNBQTFDO0FBRUEsU0FBU0MsOEJBQVQsQ0FBd0Nsd0IsSUFBeEMsRUFBNkM7QUFDbEQsU0FBUXlzQixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRWlrQixpQ0FEQztBQUVQL1ksYUFBTyxFQUFDbFg7QUFGRCxLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQsQzs7Ozs7Ozs7Ozs7O0FDVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1td0Isc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBRUEsU0FBU0MsbUJBQVQsQ0FBNkJyd0IsSUFBN0IsRUFBa0M7QUFDdkMsU0FBUXlzQixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRW1rQixzQkFEQztBQUVQalosYUFBTyxFQUFDbFg7QUFGRCxLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQ7QUFDTSxTQUFTc3dCLG1CQUFULENBQTZCdHdCLElBQTdCLEVBQWtDO0FBQ3ZDLFNBQVF5c0IsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUVva0I7QUFEQyxLQUFELENBQVI7QUFHRCxHQUpEO0FBS0QsQzs7Ozs7Ozs7Ozs7O0FDakJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNRyxVQUFVLEdBQUcsWUFBbkI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsWUFBbkI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsYUFBcEI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsZUFBdEI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsZUFBdEI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLGVBQXRCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFlBQW5CO0FBQ0EsTUFBTUMsMkJBQTJCLEdBQUcsNkJBQXBDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsMkJBQTJCLEdBQUcsNkJBQXBDO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBRUEsU0FBU0MsU0FBVCxDQUFtQjN4QixJQUFuQixFQUF3QjtBQUM3QixTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFdWtCLFVBREM7QUFFUHJaLGFBQU8sRUFBQ2xYO0FBRkQsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1EO0FBRU0sU0FBUzR4QixTQUFULENBQW1CNXhCLElBQW5CLEVBQXdCO0FBQzdCLFNBQVF5c0IsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUV3a0IsVUFEQztBQUVQdFosYUFBTyxFQUFDbFg7QUFGRCxLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQ7QUFFTSxTQUFTNnhCLFVBQVQsQ0FBb0I3eEIsSUFBcEIsRUFBeUI7QUFDOUIsU0FBUXlzQixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRXlrQixXQURDO0FBRVB2WixhQUFPLEVBQUNsWDtBQUZELEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRDtBQUVNLFNBQVM4eEIsWUFBVCxDQUFzQjl4QixJQUF0QixFQUEyQjtBQUNoQyxTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFMGtCLGFBREM7QUFFUHhaLGFBQU8sRUFBQ2xYO0FBRkQsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1EO0FBRU0sU0FBUyt4QixnQkFBVCxDQUEwQi94QixJQUExQixFQUErQjtBQUNwQyxTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFMmtCLGlCQURDO0FBRVB6WixhQUFPLEVBQUNsWDtBQUZELEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRDtBQUVNLFNBQVNneUIsWUFBVCxDQUFzQmh5QixJQUF0QixFQUEyQjtBQUNoQyxTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFNGtCLGFBREM7QUFFUDFaLGFBQU8sRUFBQ2xYO0FBRkQsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1EO0FBRU0sU0FBU2l5QixlQUFULENBQXlCanlCLElBQXpCLEVBQThCO0FBQ25DLFNBQVF5c0IsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUU2a0IsZ0JBREM7QUFFUDNaLGFBQU8sRUFBQ2xYO0FBRkQsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1EO0FBRU0sU0FBU2t5QixXQUFULENBQXFCbHlCLElBQXJCLEVBQTBCO0FBQy9CLFNBQVF5c0IsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUU4a0IsWUFEQztBQUVQNVosYUFBTyxFQUFDbFg7QUFGRCxLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQ7QUFFTSxTQUFTbXlCLGdCQUFULENBQTBCbnlCLElBQTFCLEVBQStCO0FBQ3BDLFNBQVF5c0IsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUUra0IsaUJBREM7QUFFUDdaLGFBQU8sRUFBQ2xYO0FBRkQsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1EO0FBRU0sU0FBU295QixjQUFULENBQXdCcHlCLElBQXhCLEVBQTZCO0FBQ2xDLFNBQVF5c0IsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUVnbEIsZUFEQztBQUVQOVosYUFBTyxFQUFDbFg7QUFGRCxLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQ7QUFFTSxTQUFTcXlCLFlBQVQsQ0FBc0JyeUIsSUFBdEIsRUFBMkI7QUFDaEMsU0FBUXlzQixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRWlsQixhQURDO0FBRVAvWixhQUFPLEVBQUNsWDtBQUZELEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRDtBQUVNLFNBQVNzeUIsU0FBVCxDQUFtQnR5QixJQUFuQixFQUF3QjtBQUM3QixTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFa2xCLFVBREM7QUFFUGhhLGFBQU8sRUFBQ2xYO0FBRkQsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1EO0FBRU0sU0FBU3V5QixtQkFBVCxDQUE2QnZ5QixJQUE3QixFQUFrQztBQUN2QyxTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFbWxCLDJCQURDO0FBRVBqYSxhQUFPLEVBQUNsWDtBQUZELEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRDtBQUVNLFNBQVN3eUIscUJBQVQsQ0FBK0J4eUIsSUFBL0IsRUFBb0M7QUFDekMsU0FBUXlzQixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRXFsQix3QkFEQztBQUVQbmEsYUFBTyxFQUFDbFg7QUFGRCxLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQ7QUFFTSxTQUFTeXlCLGtCQUFULENBQTRCenlCLElBQTVCLEVBQWlDO0FBQ3RDLFNBQVF5c0IsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUVzbEIscUJBREM7QUFFUHBhLGFBQU8sRUFBQ2xYO0FBRkQsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1EO0FBRU0sU0FBUzB5QixxQkFBVCxDQUErQjF5QixJQUEvQixFQUFvQztBQUN6QyxTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFdWxCLHdCQURDO0FBRVByYSxhQUFPLEVBQUNsWDtBQUZELEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRDtBQUdNLFNBQVMyeUIsdUJBQVQsQ0FBaUMzeUIsSUFBakMsRUFBc0M7QUFDM0MsU0FBUXlzQixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRXdsQiwyQkFEQztBQUVQdGEsYUFBTyxFQUFDbFg7QUFGRCxLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQ7QUFFTSxTQUFTNHlCLG9CQUFULENBQThCNXlCLElBQTlCLEVBQW1DO0FBQ3hDLFNBQVF5c0IsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUVvbEIsdUJBREM7QUFFUGxhLGFBQU8sRUFBQ2xYO0FBRkQsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1EO0FBQ00sU0FBUzZ5QixzQkFBVCxDQUFnQzd5QixJQUFoQyxFQUFxQztBQUMxQyxTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFeWxCLDBCQURDO0FBRVB2YSxhQUFPLEVBQUNsWDtBQUZELEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRDtBQUNNLFNBQVM4eUIsc0JBQVQsQ0FBZ0M5eUIsSUFBaEMsRUFBcUM7QUFDMUMsU0FBUXlzQixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRTBsQjtBQURDLEtBQUQsQ0FBUjtBQUdELEdBSkQ7QUFLRCxDOzs7Ozs7Ozs7Ozs7QUNyTUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTXFCLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLDhCQUE4QixHQUFHLGdDQUF2QztBQUNBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLE1BQU1DLHlCQUF5QixHQUFHLDJCQUFsQztBQUNBLE1BQU1DLHlCQUF5QixHQUFHLDJCQUFsQztBQUNBLE1BQU1DLHlCQUF5QixHQUFHLDJCQUFsQztBQUNBLE1BQU1yQywyQkFBMkIsR0FBRyw2QkFBcEM7QUFDQSxNQUFNc0MsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsNEJBQTRCLEdBQUcsOEJBQXJDO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsNEJBQTRCLEdBQUcsOEJBQXJDO0FBQ0EsTUFBTUMsNEJBQTRCLEdBQUcsOEJBQXJDO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsTUFBTUMsMkJBQTJCLEdBQUcsNkJBQXBDO0FBQ0EsTUFBTUMsMkJBQTJCLEdBQUcsNkJBQXBDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBRUEsU0FBU0MsaUJBQVQsQ0FBMkJwMEIsSUFBM0IsRUFBaUM7QUFDdEMsU0FBUXlzQixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRSttQixrQkFEQztBQUVQN2IsYUFBTyxFQUFFbFg7QUFGRixLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQ7QUFFTSxTQUFTcTBCLHFCQUFULENBQStCcjBCLElBQS9CLEVBQXFDO0FBQzFDLFNBQVF5c0IsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUVnbkIsdUJBREM7QUFFUDliLGFBQU8sRUFBRWxYO0FBRkYsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1EO0FBRU0sU0FBU3MwQixnQkFBVCxDQUEwQnQwQixJQUExQixFQUFnQztBQUNyQyxTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFaW5CLGlCQURDO0FBRVAvYixhQUFPLEVBQUVsWDtBQUZGLEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRDtBQUVNLFNBQVN1MEIsa0JBQVQsQ0FBNEJ2MEIsSUFBNUIsRUFBa0M7QUFDdkMsU0FBUXlzQixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRWtuQixtQkFEQztBQUVQaGMsYUFBTyxFQUFFbFg7QUFGRixLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQ7QUFFTSxTQUFTdzBCLGlCQUFULENBQTJCeDBCLElBQTNCLEVBQWlDO0FBQ3RDLFNBQVF5c0IsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUVtbkIsbUJBREM7QUFFUGpjLGFBQU8sRUFBRWxYO0FBRkYsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1EO0FBRU0sU0FBU3kwQix5QkFBVCxDQUFtQ3h3QixFQUFuQyxFQUF1QztBQUM1QyxTQUFRd29CLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFb25CLDhCQURDO0FBRVBudkI7QUFGTyxLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQ7QUFFTSxTQUFTeXdCLHNCQUFULEdBQWtDO0FBQ3ZDLFNBQVFqSSxRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRXVuQjtBQURDLEtBQUQsQ0FBUjtBQUdELEdBSkQ7QUFLRDtBQUVNLFNBQVNoQixtQkFBVCxDQUE2QnZ5QixJQUE3QixFQUFtQztBQUN4QyxTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFbWxCLDJCQURDO0FBRVBqYSxhQUFPLEVBQUVsWDtBQUZGLEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRDtBQUVNLFNBQVMyMEIsaUJBQVQsQ0FBMkIzMEIsSUFBM0IsRUFBaUM7QUFDdEMsU0FBUXlzQixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRXluQixtQkFEQztBQUVQdmMsYUFBTyxFQUFFbFg7QUFGRixLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQ7QUFFTSxTQUFTNDBCLHlCQUFULENBQW1DNTBCLElBQW5DLEVBQXlDO0FBQzlDLFNBQVF5c0IsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUUwbkIsNEJBREM7QUFFUHhjLGFBQU8sRUFBRWxYO0FBRkYsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1EO0FBRU0sU0FBUzYwQixvQkFBVCxDQUE4QjcwQixJQUE5QixFQUFvQztBQUN6QyxTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFMm5CLG1CQURDO0FBRVB6YyxhQUFPLEVBQUVsWDtBQUZGLEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRDtBQUVNLFNBQVM4MEIsbUJBQVQsQ0FBNkI5MEIsSUFBN0IsRUFBbUM7QUFDeEMsU0FBUXlzQixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRXFuQix1QkFEQztBQUVQbmMsYUFBTyxFQUFFbFg7QUFGRixLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQ7QUFFTSxTQUFTKzBCLHNCQUFULENBQWdDLzBCLElBQWhDLEVBQXNDO0FBQzNDLFNBQVF5c0IsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUVzbkIseUJBREM7QUFFUHBjLGFBQU8sRUFBRWxYO0FBRkYsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1EO0FBRU0sU0FBU2cxQixzQkFBVCxDQUFnQ2gxQixJQUFoQyxFQUFzQztBQUMzQyxTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFd25CLHlCQURDO0FBRVB0YyxhQUFPLEVBQUVsWDtBQUZGLEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRDtBQUVNLFNBQVNpMUIseUJBQVQsQ0FBbUNqMUIsSUFBbkMsRUFBeUM7QUFDOUMsU0FBUXlzQixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRTRuQiw0QkFEQztBQUVQMWMsYUFBTyxFQUFFbFg7QUFGRixLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQ7QUFFTSxTQUFTazFCLHlCQUFULENBQW1DbDFCLElBQW5DLEVBQXlDO0FBQzlDLFNBQVF5c0IsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUU2bkIsNEJBREM7QUFFUDNjLGFBQU8sRUFBRTtBQUZGLEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRDtBQUVNLFNBQVNpZSx1QkFBVCxDQUFpQ24xQixJQUFqQyxFQUF1QztBQUM1QyxTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFOG5CLDBCQURDO0FBRVA1YyxhQUFPLEVBQUVsWDtBQUZGLEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRDtBQUNNLFNBQVNvMUIsdUJBQVQsQ0FBaUNwMUIsSUFBakMsRUFBdUM7QUFDNUMsU0FBUXlzQixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRStuQiwwQkFEQztBQUVQN2MsYUFBTyxFQUFFO0FBRkYsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1EO0FBRU0sU0FBU21lLHdCQUFULENBQWtDcjFCLElBQWxDLEVBQXdDO0FBQzdDLFNBQVF5c0IsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUVnb0IsMkJBREM7QUFFUDljLGFBQU8sRUFBRWxYO0FBRkYsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1EO0FBQ00sU0FBU3MxQix3QkFBVCxHQUFvQztBQUN6QyxTQUFRN0ksUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUVpb0IsMkJBREM7QUFFUC9jLGFBQU8sRUFBRTtBQUZGLEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRDtBQUNNLFNBQVNxZSxxQkFBVCxDQUErQnYxQixJQUEvQixFQUFxQztBQUMxQyxTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFa29CLHdCQURDO0FBRVBoZCxhQUFPLEVBQUVsWDtBQUZGLEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRDtBQUNNLFNBQVN3MUIscUJBQVQsQ0FBK0J4MUIsSUFBL0IsRUFBcUM7QUFDMUMsU0FBUXlzQixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRW1vQix3QkFEQztBQUVQamQsYUFBTyxFQUFFbFg7QUFGRixLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQsQzs7Ozs7Ozs7Ozs7O0FDdE5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPLE1BQU15MUIsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFVBQWpCLEMsQ0FFUDs7QUFDTyxTQUFTQyxpQkFBVCxDQUEyQjMxQixJQUEzQixFQUFnQztBQUNuQyxTQUFPeXNCLFFBQUQsSUFBYztBQUNoQkEsWUFBUSxDQUFDO0FBQ0x6Z0IsVUFBSSxFQUFFeXBCLG1CQUREO0FBRUx6MUIsVUFBSSxFQUFFQTtBQUZELEtBQUQsQ0FBUjtBQUlILEdBTEQ7QUFNSDtBQUVNLFNBQVM0MUIsT0FBVCxDQUFpQjUxQixJQUFqQixFQUFzQjtBQUN6QixTQUFPeXNCLFFBQUQsSUFBYztBQUNoQkEsWUFBUSxDQUFDO0FBQ0x6Z0IsVUFBSSxFQUFFMHBCLFFBREQ7QUFFTDExQixVQUFJLEVBQUVBO0FBRkQsS0FBRCxDQUFSO0FBSUgsR0FMRDtBQU1ILEM7Ozs7Ozs7Ozs7OztBQ3JCRDtBQUFBO0FBQUE7QUFBQTtBQUNPLE1BQU02MUIscUJBQXFCLEdBQUcsdUJBQTlCLEMsQ0FHUDs7QUFDTyxTQUFTQyxtQkFBVCxDQUE2QjkxQixJQUE3QixFQUFrQztBQUNyQyxTQUFPeXNCLFFBQUQsSUFBYztBQUNoQkEsWUFBUSxDQUFDO0FBQ0x6Z0IsVUFBSSxFQUFFNnBCLHFCQUREO0FBRUw3MUIsVUFBSSxFQUFFQTtBQUZELEtBQUQsQ0FBUjtBQUlILEdBTEQ7QUFNSCxDOzs7Ozs7Ozs7Ozs7QUNaRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTSsxQixrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFFQSxTQUFTQyxnQkFBVCxDQUEwQkMsVUFBMUIsRUFBcUM7QUFDMUMsU0FBUXpKLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFK3BCLGtCQURDO0FBRVA3ZSxhQUFPLEVBQUNnZjtBQUZELEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRDtBQUVNLFNBQVNDLGdCQUFULEdBQTJCO0FBQ2hDLFNBQVExSixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRWdxQixrQkFEQztBQUVQOWUsYUFBTyxFQUFDO0FBRkQsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1ELEM7Ozs7Ozs7Ozs7OztBQ25CRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1rZixnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxTQUFTLEdBQUcsV0FBbEI7QUFDQSxNQUFNQyxTQUFTLEdBQUcsV0FBbEI7QUFDQSxNQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFFQSxTQUFTQyxlQUFULENBQXlCQyxRQUF6QixFQUFrQztBQUN2QyxTQUFRbEssUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUVvcUIsZ0JBREM7QUFFUGxmLGFBQU8sRUFBQ3lmO0FBRkQsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1EO0FBRU0sU0FBU0MsZ0JBQVQsR0FBMkI7QUFDaEMsU0FBUW5LLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFcXFCLGlCQURDO0FBRVBuZixhQUFPLEVBQUM7QUFGRCxLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQ7QUFFTSxTQUFTMmYsT0FBVCxDQUFpQkYsUUFBakIsRUFBMEI7QUFDL0IsU0FBUWxLLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFeXFCLFFBREM7QUFFUHZmLGFBQU8sRUFBQ3lmO0FBRkQsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1EO0FBRU0sU0FBU0csZUFBVCxDQUF5QkMsSUFBekIsRUFBOEI7QUFDbkMsU0FBUXRLLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFc3FCLGlCQURDO0FBRVBwZixhQUFPLEVBQUM2ZjtBQUZELEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRDtBQUNNLFNBQVNDLFFBQVQsQ0FBa0JELElBQWxCLEVBQXVCO0FBQzVCLFNBQVF0SyxRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRXdxQixTQURDO0FBRVB0ZixhQUFPLEVBQUM2ZjtBQUZELEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRDtBQUNNLFNBQVNFLFFBQVQsQ0FBa0JGLElBQWxCLEVBQXVCO0FBQzVCLFNBQVF0SyxRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRXVxQixTQURDO0FBRVByZixhQUFPLEVBQUM2ZjtBQUZELEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRCxDOzs7Ozs7Ozs7Ozs7QUN6REQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNRyxRQUFRLEdBQUcsVUFBakI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsYUFBcEI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUdBLFNBQVNDLE9BQVQsQ0FBaUJuN0IsS0FBakIsRUFBdUI7QUFDNUIsU0FBUW93QixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRWtyQixRQURDO0FBRVA3NkIsV0FBSyxFQUFDQTtBQUZDLEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRDtBQUVNLFNBQVNvN0IsVUFBVCxDQUFvQnA3QixLQUFwQixFQUEwQjtBQUMvQixTQUFRb3dCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFbXJCLFdBREM7QUFFUDk2QixXQUFLLEVBQUNBO0FBRkMsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1EO0FBQ00sU0FBU3E3QixXQUFULENBQXFCcjdCLEtBQXJCLEVBQTJCO0FBQ2hDLFNBQVFvd0IsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUVvckIsWUFEQztBQUVQLzZCLFdBQUssRUFBQ0E7QUFGQyxLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQ7QUFFTSxTQUFTczdCLGNBQVQsQ0FBd0J0N0IsS0FBeEIsRUFBOEI7QUFDbkMsU0FBUW93QixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRXFyQixlQURDO0FBRVBoN0IsV0FBSyxFQUFDQTtBQUZDLEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRDtBQUNNLFNBQVN1N0IsVUFBVCxDQUFvQnY3QixLQUFwQixFQUEwQjtBQUMvQixTQUFRb3dCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFc3JCLFlBREM7QUFFUGo3QixXQUFLLEVBQUNBO0FBRkMsS0FBRCxDQUFSO0FBSUQsR0FMRDtBQU1EO0FBRU0sU0FBU3c3QixhQUFULENBQXVCeDdCLEtBQXZCLEVBQTZCO0FBQ2xDLFNBQVFvd0IsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUV1ckIsZUFEQztBQUVQbDdCLFdBQUssRUFBQ0E7QUFGQyxLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQsQzs7Ozs7Ozs7Ozs7O0FDMUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNeTdCLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxlQUF0QjtBQUVBLFNBQVNDLFlBQVQsQ0FBc0JoNEIsSUFBdEIsRUFBMkI7QUFDaEMsU0FBUXlzQixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRThyQixhQURDO0FBRVA1Z0IsYUFBTyxFQUFDbFg7QUFGRCxLQUFELENBQVI7QUFJRCxHQUxEO0FBTUQ7QUFFTSxTQUFTaTRCLFlBQVQsQ0FBc0JqNEIsSUFBdEIsRUFBMkI7QUFDOUIsU0FBUXlzQixRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQztBQUNQemdCLFVBQUksRUFBRStyQjtBQURDLEtBQUQsQ0FBUjtBQUdELEdBSkQ7QUFLRCxDOzs7Ozs7Ozs7Ozs7QUNoQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBOztBQUNPLE1BQU1HLG1CQUFtQixHQUFHLENBQ2pDO0FBQ0VDLFFBQU0sRUFBRS9CLHNFQURWO0FBRUVnQyxTQUFPLEVBQUU7QUFGWCxDQURpQyxFQUtqQztBQUNFRCxRQUFNLEVBQUU5Qix1RUFEVjtBQUVFK0IsU0FBTyxFQUFFO0FBRlgsQ0FMaUMsRUFTakM7QUFDRUQsUUFBTSxFQUFFMUIsOERBRFY7QUFFRTJCLFNBQU8sRUFBRTtBQUZYLENBVGlDLEVBYWpDO0FBQ0VELFFBQU0sRUFBRXhFLGlGQURWO0FBRUV5RSxTQUFPLEVBQUU7QUFGWCxDQWJpQyxFQWlCakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFRCxRQUFNLEVBQUUzRSx1RkFEVjtBQUVFNEUsU0FBTyxFQUFFO0FBRlgsQ0FyQmlDLEVBeUJqQztBQUNFRCxRQUFNLEVBQUU1RSx1RkFEVjtBQUVFNkUsU0FBTyxFQUFFO0FBRlgsQ0F6QmlDLEVBNkJqQztBQUNFRCxRQUFNLEVBQUU3RSx1RkFEVjtBQUVFOEUsU0FBTyxFQUFFO0FBRlgsQ0E3QmlDLEVBaUNqQztBQUNFRCxRQUFNLEVBQUVoSSwyRUFEVjtBQUVFaUksU0FBTyxFQUFFO0FBRlgsQ0FqQ2lDLEVBcUNqQztBQUNFRCxRQUFNLEVBQUUvSCwyRUFEVjtBQUVFZ0ksU0FBTyxFQUFFO0FBRlgsQ0FyQ2lDLEVBeUNqQztBQUNFRCxRQUFNLEVBQUVwQyxpRkFEVjtBQUVFcUMsU0FBTyxFQUFFO0FBRlgsQ0F6Q2lDLEVBNkNqQztBQUNFRCxRQUFNLEVBQUVuQyxpRkFEVjtBQUVFb0MsU0FBTyxFQUFFO0FBRlgsQ0E3Q2lDLENBQTVCO0FBbURBLFNBQVNDLFlBQVQsQ0FBc0JELE9BQXRCLEVBQStCcDRCLElBQS9CLEVBQXFDO0FBRTFDLE1BQUlvNEIsT0FBTyxJQUFJNTZCLDZDQUFDLENBQUNvRixhQUFGLENBQWdCNUMsSUFBaEIsQ0FBWCxJQUFvQyxDQUFDeEMsNkNBQUMsQ0FBQytKLE9BQUYsQ0FBVXZILElBQVYsQ0FBekMsRUFBMEQ7QUFDeEQsUUFBSXM0QixXQUFXLEdBQUdDLG9EQUFZLENBQUNqdkIsR0FBYixDQUFpQixPQUFqQixDQUFsQjs7QUFDQSxRQUFJLENBQUM5TCw2Q0FBQyxDQUFDb0YsYUFBRixDQUFnQjAxQixXQUFoQixDQUFMLEVBQW1DO0FBQ2pDQSxpQkFBVyxHQUFHLEVBQWQ7QUFDRDs7QUFFREEsZUFBVyxDQUFDRixPQUFELENBQVgsR0FBdUJwNEIsSUFBdkI7QUFDQXU0Qix3REFBWSxDQUFDQyxHQUFiLENBQWlCLE9BQWpCLEVBQTBCRixXQUExQjtBQUNEO0FBQ0Y7QUFFTSxTQUFTRyxrQkFBVCxDQUE0Qk4sTUFBNUIsRUFBb0M7QUFDekMsTUFBSUEsTUFBSixFQUFZO0FBQ1YsV0FBTzM2Qiw2Q0FBQyxDQUFDZ0IsSUFBRixDQUFPMDVCLG1CQUFtQixJQUFJLEVBQXZCLElBQTZCLEVBQXBDLEVBQXdDLENBQUMsUUFBRCxFQUFXQyxNQUFYLENBQXhDLEtBQStELEtBQXRFO0FBQ0Q7O0FBRUQsU0FBTyxLQUFQO0FBQ0Q7QUFFTSxTQUFTTyxnQkFBVCxDQUEwQlAsTUFBMUIsRUFBa0NDLE9BQWxDLEVBQTJDcDRCLElBQTNDLEVBQWlEMjRCLGFBQWpELEVBQWdFO0FBQ3JFLE1BQUlDLFdBQVcsR0FBR0gsa0JBQWtCLENBQUNOLE1BQUQsQ0FBcEM7QUFDQSxNQUFJVSxVQUFVLEdBQUdDLGFBQWEsQ0FBQ1gsTUFBRCxDQUE5Qjs7QUFFQSxNQUFJUyxXQUFXLElBQUlwN0IsNkNBQUMsQ0FBQzhMLEdBQUYsQ0FBTXV2QixVQUFOLEVBQWtCLFNBQWxCLEtBQWdDVCxPQUFuRCxFQUE0RDtBQUMxRCxRQUFJVyxlQUFlLEdBQUdDLDRCQUE0QixDQUFDeDdCLDZDQUFDLENBQUM4TCxHQUFGLENBQU11dkIsVUFBTixFQUFrQixTQUFsQixDQUFELENBQWxEOztBQUNBLFFBQUlJLHNCQUFzQixHQUFHejdCLDZDQUFDLENBQUM2QyxJQUFGLENBQU8wNEIsZUFBUCxFQUF3QjtBQUNuREYsZ0JBQVUsRUFBRTtBQUNWVixjQUFNLEVBQUVBO0FBREU7QUFEdUMsS0FBeEIsQ0FBN0I7O0FBS0EsUUFBSWUsUUFBUSxHQUFHLENBQWY7O0FBRUEsUUFBSSxDQUFDUCxhQUFELElBQWtCLENBQUMvM0Isc0VBQWEsQ0FBQ3BELDZDQUFDLENBQUM4TCxHQUFGLENBQU0ydkIsc0JBQU4sRUFBOEIsVUFBOUIsQ0FBRCxDQUFwQyxFQUFpRjtBQUMvRUMsY0FBUSxHQUFHMTdCLDZDQUFDLENBQUM4TCxHQUFGLENBQU05TCw2Q0FBQyxDQUFDMjdCLEtBQUYsQ0FBUUosZUFBZSxJQUFJLEVBQTNCLEVBQStCLFVBQS9CLENBQU4sRUFBa0QsVUFBbEQsQ0FBWDs7QUFDQSxVQUFJLENBQUNuNEIsc0VBQWEsQ0FBQ3M0QixRQUFELENBQWxCLEVBQThCO0FBQzVCQSxnQkFBUSxHQUFHLENBQVg7QUFDRCxPQUZELE1BRU87QUFDTEEsZ0JBQVEsR0FBR3g4QixRQUFRLENBQUN3OEIsUUFBRCxDQUFSLEdBQXFCLENBQWhDO0FBQ0Q7QUFDRixLQVBELE1BT087QUFDTEEsY0FBUSxHQUFHeDhCLFFBQVEsQ0FBQ2MsNkNBQUMsQ0FBQzhMLEdBQUYsQ0FBTTJ2QixzQkFBTixFQUE4QixVQUE5QixDQUFELENBQW5CO0FBQ0Q7O0FBR0QsUUFBSUcsV0FBVyxHQUFHO0FBQ2hCcDVCLFVBQUksRUFBRUEsSUFEVTtBQUVoQm80QixhQUFPLEVBQUU1NkIsNkNBQUMsQ0FBQzhMLEdBQUYsQ0FBTXV2QixVQUFOLEVBQWtCLFNBQWxCLENBRk87QUFHaEJobkIsZUFBUyxFQUFFLElBQUl0UyxJQUFKLEVBSEs7QUFJaEIyNUIsY0FBUSxFQUFFQTtBQUpNLEtBQWxCO0FBTUFYLHdEQUFZLENBQUNDLEdBQWIsQ0FBaUJoN0IsNkNBQUMsQ0FBQzhMLEdBQUYsQ0FBTXV2QixVQUFOLEVBQWtCLENBQUMsUUFBRCxDQUFsQixDQUFqQixFQUFnRE8sV0FBaEQ7QUFDRDtBQUNGO0FBRU0sU0FBU04sYUFBVCxDQUF1QlgsTUFBdkIsRUFBK0I7QUFDcEMsTUFBSUEsTUFBSixFQUFZO0FBQ1YsV0FBTzM2Qiw2Q0FBQyxDQUFDNkMsSUFBRixDQUFPNjNCLG1CQUFtQixJQUFJLEVBQTlCLEVBQWtDLENBQUMsUUFBRCxFQUFXQyxNQUFYLENBQWxDLEtBQXlELEVBQWhFO0FBQ0Q7O0FBRUQsU0FBTyxLQUFQO0FBQ0Q7QUFFTSxTQUFTYSw0QkFBVCxDQUFzQ1osT0FBdEMsRUFBK0M7QUFHcEQsTUFBSWlCLG1CQUFtQixHQUFHLEVBQTFCOztBQUNBNzdCLCtDQUFDLENBQUNDLE9BQUYsQ0FBVXk2QixtQkFBVixFQUErQixVQUFVb0Isa0JBQVYsRUFBOEI7QUFDM0QsUUFBSXQ1QixJQUFJLEdBQUd1NEIsb0RBQVksQ0FBQ2p2QixHQUFiLENBQWlCZ3dCLGtCQUFrQixDQUFDLFFBQUQsQ0FBbkMsQ0FBWDs7QUFDQSxRQUFJdDVCLElBQUosRUFBVTtBQUNSLFVBQUksQ0FBQ280QixPQUFELElBQVlBLE9BQU8sSUFBSTU2Qiw2Q0FBQyxDQUFDOEwsR0FBRixDQUFNdEosSUFBTixFQUFZLFNBQVosQ0FBM0IsRUFBbUQ7QUFDakQsWUFBSTtBQUNGcTVCLDZCQUFtQixDQUFDbHhCLElBQXBCLENBQXlCO0FBQ3ZCMHdCLHNCQUFVLEVBQUVTLGtCQURXO0FBRXZCdDVCLGdCQUFJLEVBQUV4Qyw2Q0FBQyxDQUFDOEwsR0FBRixDQUFNdEosSUFBTixFQUFZLENBQUMsTUFBRCxDQUFaLENBRmlCO0FBR3ZCbzRCLG1CQUFPLEVBQUU1NkIsNkNBQUMsQ0FBQzhMLEdBQUYsQ0FBTXRKLElBQU4sRUFBWSxDQUFDLFNBQUQsQ0FBWixDQUhjO0FBSXZCNlIscUJBQVMsRUFBRTlWLDZDQUFNLENBQUN5Qiw2Q0FBQyxDQUFDOEwsR0FBRixDQUFNdEosSUFBTixFQUFZLENBQUMsV0FBRCxDQUFaLENBQUQsQ0FKTTtBQUt2Qms1QixvQkFBUSxFQUFFMTdCLDZDQUFDLENBQUM4TCxHQUFGLENBQU10SixJQUFOLEVBQVksQ0FBQyxVQUFELENBQVosS0FBNkI7QUFMaEIsV0FBekI7QUFPRCxTQVJELENBUUUsT0FBT3FKLEtBQVAsRUFBYyxDQUVmO0FBQ0Y7QUFDRjtBQUNGLEdBakJEOztBQWtCQWd3QixxQkFBbUIsR0FBRzc3Qiw2Q0FBQyxDQUFDMFQsTUFBRixDQUFTbW9CLG1CQUFULEVBQThCLENBQUMsU0FBRCxFQUFZLFVBQVosQ0FBOUIsQ0FBdEI7QUFDQSxTQUFPQSxtQkFBbUIsSUFBSSxFQUE5QjtBQUVEO0FBR00sU0FBU0UsZUFBVCxDQUF5QnBCLE1BQXpCLEVBQWlDbjRCLElBQWpDLEVBQXVDO0FBQzVDLFNBQVF5c0IsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM7QUFDUHpnQixVQUFJLEVBQUVtc0IsTUFEQztBQUVQamhCLGFBQU8sRUFBRWxYLElBRkY7QUFHUDI0QixtQkFBYSxFQUFFO0FBSFIsS0FBRCxDQUFSO0FBS0QsR0FORDtBQU9EO0FBRU0sTUFBTWEsYUFBYSxHQUFHLGVBQXRCO0FBQ0EsU0FBU0MsWUFBVCxDQUFzQno1QixJQUF0QixFQUE0QjtBQUNqQyxTQUFReXNCLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDO0FBQ1B6Z0IsVUFBSSxFQUFFd3RCLGFBREM7QUFFUHRpQixhQUFPLEVBQUVsWDtBQUZGLEtBQUQsQ0FBUjtBQUlELEdBTEQ7QUFNRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5S0Q7QUEyREE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxNQUFNMDVCLGFBQWEsR0FBRztBQUNwQkMsbUJBQWlCLEVBQUUsSUFEQztBQUVwQkMsOEJBQTRCLEVBQUUsSUFGVjtBQUdwQkMscUJBQW1CLEVBQUUsS0FIRDtBQUtwQkMsYUFBVyxFQUFFLEtBTE87QUFNcEI5TSxTQUFPLEVBQUUsS0FOVztBQU9wQkMsYUFBVyxFQUFFLEtBUE87QUFRcEJDLFdBQVMsRUFBRSxLQVJTO0FBU3BCQyxjQUFZLEVBQUUsS0FUTTtBQVdwQkUsb0JBQWtCLEVBQUUsS0FYQTtBQVlwQjBNLCtCQUE2QixFQUFFLEVBWlg7QUFhcEJDLGdDQUE4QixFQUFFLEVBYlo7QUFjcEJ6TSx5QkFBdUIsRUFBRSxFQWRMO0FBZ0JwQkMsb0JBQWtCLEVBQUUsS0FoQkE7QUFpQnBCeU0sK0JBQTZCLEVBQUUsRUFqQlg7QUFrQnBCQyxnQ0FBOEIsRUFBRSxFQWxCWjtBQW1CcEJ4TSw4QkFBNEIsRUFBRSxFQW5CVjtBQXFCcEJGLG9CQUFrQixFQUFFLEtBckJBO0FBc0JwQnlNLCtCQUE2QixFQUFFLEVBdEJYO0FBdUJwQkMsZ0NBQThCLEVBQUUsRUF2Qlo7QUF3QnBCeE0sOEJBQTRCLEVBQUUsRUF4QlY7QUEwQnBCQyxpQkFBZSxFQUFFLEtBMUJHO0FBMkJwQndNLDRCQUEwQixFQUFFLEVBM0JSO0FBNEJwQkMsNkJBQTJCLEVBQUUsRUE1QlQ7QUE2QnBCdk0sMkJBQXlCLEVBQUUsRUE3QlA7QUErQnBCQyxvQkFBa0IsRUFBRSxLQS9CQTtBQWdDcEJ1TSwrQkFBNkIsRUFBRSxFQWhDWDtBQWlDcEJDLGdDQUE4QixFQUFFLEVBakNaO0FBa0NwQnRNLDhCQUE0QixFQUFFLEVBbENWO0FBb0NwQkksb0JBQWtCLEVBQUUsS0FwQ0E7QUFxQ3BCbU0sK0JBQTZCLEVBQUUsRUFyQ1g7QUFzQ3BCQyxnQ0FBOEIsRUFBRSxFQXRDWjtBQXVDcEJsTSw4QkFBNEIsRUFBRSxFQXZDVjtBQXlDcEJDLGlCQUFlLEVBQUUsS0F6Q0c7QUEwQ3BCa00sNEJBQTBCLEVBQUUsRUExQ1I7QUEyQ3BCQyw2QkFBMkIsRUFBRSxFQTNDVDtBQTRDcEJqTSwyQkFBeUIsRUFBRSxFQTVDUDtBQThDcEJrTSxXQUFTLEVBQUUsRUE5Q1M7QUErQ3BCQyxXQUFTLEVBQUUsRUEvQ1M7QUFnRHBCQyxRQUFNLEVBQUUsRUFoRFk7QUFpRHBCQyxXQUFTLEVBQUUsRUFqRFM7QUFrRHBCQyxjQUFZLEVBQUUsRUFsRE07QUFtRHBCQyxXQUFTLEVBQUUsRUFuRFM7QUFvRHBCQyxRQUFNLEVBQUUsRUFwRFk7QUFzRHBCQyxpQkFBZSxFQUFFLEVBdERHO0FBdURwQnRNLHlCQUF1QixFQUFFLEVBdkRMO0FBd0RwQkMsMkJBQXlCLEVBQUUsRUF4RFA7QUF5RHBCc00sWUFBVSxFQUFFLENBQUMsQ0F6RE87QUEwRHBCck0sUUFBTSxFQUFFLEVBMURZO0FBNERwQnNNLGFBQVcsRUFBRSxLQTVETztBQThEcEJDLFdBQVMsRUFBRTVxQixTQTlEUztBQStEcEI2cUIsWUFBVSxFQUFFN3FCLFNBL0RRO0FBZ0VwQjhxQixjQUFZLEVBQUU5cUIsU0FoRU07QUFrRXBCK3FCLFlBQVUsRUFBRS9xQjtBQWxFUSxDQUF0QjtBQXFFZSx5RUFBVTNHLEtBQUssR0FBRzR2QixhQUFsQixFQUFpQ3ZCLE1BQWpDLEVBQXlDO0FBR3REO0FBRUEsTUFBSXNELGFBQWEsR0FBR2orQiw2Q0FBQyxDQUFDOEwsR0FBRixDQUFNaXZCLG9EQUFZLENBQUNqdkIsR0FBYixDQUFpQixPQUFqQixLQUE2QixFQUFuQyxFQUF1QyxLQUF2QyxLQUFpRG93QixhQUFyRTs7QUFDQSxNQUFJZ0MsUUFBUSxtQ0FDUDV4QixLQURPLEdBRVAyeEIsYUFGTyxDQUFaOztBQUtBLE1BQUcsQ0FBQ2orQiw2Q0FBQyxDQUFDbStCLE9BQUYsQ0FBVTd4QixLQUFWLEVBQWlCNHhCLFFBQWpCLENBQUosRUFBK0I7QUFDN0I1eEIsU0FBSyxHQUFHNHhCLFFBQVI7QUFDRDs7QUFDRCxVQUFRdkQsTUFBTSxDQUFDbnNCLElBQWY7QUFDRSxTQUFLNmQsNERBQUw7QUFDRS9mLFdBQUssbUNBQ0FBLEtBREE7QUFFSGtqQixlQUFPLEVBQUVtTCxNQUFNLENBQUNqaEI7QUFGYixRQUFMO0FBSUE7O0FBQ0YsU0FBSzhTLGlFQUFMO0FBQ0VsZ0IsV0FBSyxtQ0FDQUEsS0FEQTtBQUVIbWpCLG1CQUFXLEVBQUVrTCxNQUFNLENBQUNqaEI7QUFGakIsUUFBTDtBQUlBOztBQUNGLFNBQUsrUywrREFBTDtBQUNFbmdCLFdBQUssbUNBQ0FBLEtBREE7QUFFSG9qQixpQkFBUyxFQUFFaUwsTUFBTSxDQUFDbjRCO0FBRmYsUUFBTDtBQUlBOztBQUNGLFNBQUtrcUIsa0VBQUw7QUFDRXBnQixXQUFLLG1DQUNBQSxLQURBO0FBRUhxakIsb0JBQVksRUFBRWdMLE1BQU0sQ0FBQ240QjtBQUZsQixRQUFMO0FBSUE7O0FBQ0YsU0FBS21xQix1RUFBTDtBQUNFcmdCLFdBQUssbUNBQ0FBLEtBREE7QUFFSHF4QixrQkFBVSxFQUFFaEQsTUFBTSxDQUFDbjRCO0FBRmhCLFFBQUw7QUFJQTtBQUVGOztBQUNBLFNBQUs4ckIsc0VBQUw7QUFDRWhpQixXQUFLLG1DQUNBQSxLQURBO0FBRUg2d0IsaUJBQVMsRUFBRXhDLE1BQU0sQ0FBQ240QjtBQUZmLFFBQUw7QUFJQTs7QUFDRixTQUFLK3JCLHNFQUFMO0FBQ0VqaUIsV0FBSyxtQ0FDQUEsS0FEQTtBQUVIOHdCLGlCQUFTLEVBQUV6QyxNQUFNLENBQUNuNEI7QUFGZixRQUFMO0FBSUE7O0FBQ0YsU0FBS2dzQixrRUFBTDtBQUNFbGlCLFdBQUssbUNBQ0FBLEtBREE7QUFFSCt3QixjQUFNLEVBQUUxQyxNQUFNLENBQUNuNEI7QUFGWixRQUFMO0FBSUE7O0FBQ0YsU0FBS2lzQixzRUFBTDtBQUNFbmlCLFdBQUssbUNBQ0FBLEtBREE7QUFFSGd4QixpQkFBUyxFQUFFM0MsTUFBTSxDQUFDbjRCO0FBRmYsUUFBTDtBQUlBOztBQUNGLFNBQUtrc0IseUVBQUw7QUFDRXBpQixXQUFLLG1DQUNBQSxLQURBO0FBRUhpeEIsb0JBQVksRUFBRTVDLE1BQU0sQ0FBQ240QjtBQUZsQixRQUFMO0FBSUE7O0FBQ0YsU0FBS21zQixzRUFBTDtBQUNFcmlCLFdBQUssbUNBQ0FBLEtBREE7QUFFSGt4QixpQkFBUyxFQUFFN0MsTUFBTSxDQUFDbjRCO0FBRmYsUUFBTDtBQUlBOztBQUNGLFNBQUtvc0Isa0VBQUw7QUFDRXRpQixXQUFLLG1DQUNBQSxLQURBO0FBRUhteEIsY0FBTSxFQUFFOUMsTUFBTSxDQUFDbjRCO0FBRlosUUFBTDtBQUlBO0FBQ0Y7QUFDQTs7QUFDQSxTQUFLb3FCLDBFQUFMO0FBQ0V0Z0IsV0FBSyxtQ0FDQUEsS0FEQTtBQUVIdWpCLDBCQUFrQixFQUFFOEssTUFBTSxDQUFDbjRCO0FBRnhCLFFBQUw7QUFJQTs7QUFDRixTQUFLcXFCLHNGQUFMO0FBQ0UsVUFBSThOLE1BQU0sQ0FBQzE3QixLQUFYLEVBQWtCO0FBQ2hCcU4sYUFBSyxtQ0FDQUEsS0FEQTtBQUVIaXdCLHVDQUE2QixFQUFFNUIsTUFBTSxDQUFDbjRCLElBRm5DO0FBR0hnNkIsd0NBQThCLEVBQUU3QixNQUFNLENBQUMxN0I7QUFIcEMsVUFBTDtBQUtBO0FBQ0QsT0FQRCxNQU9PO0FBQ0xxTixhQUFLLG1DQUNBQSxLQURBO0FBRUhpd0IsdUNBQTZCLEVBQUU1QixNQUFNLENBQUNuNEI7QUFGbkMsVUFBTDtBQUlBO0FBQ0Q7O0FBQ0gsU0FBS3NxQiwrRUFBTDtBQUNFeGdCLFdBQUssbUNBQ0FBLEtBREE7QUFFSHlqQiwrQkFBdUIsRUFBRTRLLE1BQU0sQ0FBQ240QjtBQUY3QixRQUFMO0FBSUE7QUFDRjtBQUVBO0FBQ0E7O0FBQ0EsU0FBS3VxQiwwRUFBTDtBQUNFemdCLFdBQUssbUNBQ0FBLEtBREE7QUFFSDBqQiwwQkFBa0IsRUFBRTJLLE1BQU0sQ0FBQ240QjtBQUZ4QixRQUFMO0FBSUE7O0FBQ0YsU0FBS3dxQixzRkFBTDtBQUNFLFVBQUkyTixNQUFNLENBQUMxN0IsS0FBWCxFQUFrQjtBQUNoQnFOLGFBQUssbUNBQ0FBLEtBREE7QUFFSG13Qix1Q0FBNkIsRUFBRTlCLE1BQU0sQ0FBQ240QixJQUZuQztBQUdIazZCLHdDQUE4QixFQUFFL0IsTUFBTSxDQUFDMTdCO0FBSHBDLFVBQUw7QUFLQTtBQUNELE9BUEQsTUFPTztBQUNMcU4sYUFBSyxtQ0FDQUEsS0FEQTtBQUVIbXdCLHVDQUE2QixFQUFFOUIsTUFBTSxDQUFDbjRCO0FBRm5DLFVBQUw7QUFJQTtBQUNEOztBQUNILFNBQUt5cUIscUZBQUw7QUFDRTNnQixXQUFLLG1DQUNBQSxLQURBO0FBRUg0akIsb0NBQTRCLEVBQUV5SyxNQUFNLENBQUNuNEI7QUFGbEMsUUFBTDtBQUlBO0FBQ0Y7QUFFQTtBQUNBOztBQUNBLFNBQUswcUIsc0VBQUw7QUFDRTVnQixXQUFLLG1DQUNBQSxLQURBO0FBRUg2akIsdUJBQWUsRUFBRXdLLE1BQU0sQ0FBQ240QjtBQUZyQixRQUFMO0FBSUE7O0FBQ0YsU0FBSzJxQix3RkFBTDtBQUNFLFVBQUl3TixNQUFNLENBQUMxN0IsS0FBWCxFQUFrQjtBQUNoQnFOLGFBQUssbUNBQ0FBLEtBREE7QUFFSHF3QixvQ0FBMEIsRUFBRWhDLE1BQU0sQ0FBQ240QixJQUZoQztBQUdIbzZCLHFDQUEyQixFQUFFakMsTUFBTSxDQUFDMTdCO0FBSGpDLFVBQUw7QUFLQTtBQUNELE9BUEQsTUFPTztBQUNMcU4sYUFBSyxtQ0FDQUEsS0FEQTtBQUVIcXdCLG9DQUEwQixFQUFFaEMsTUFBTSxDQUFDbjRCO0FBRmhDLFVBQUw7QUFJQTtBQUNEOztBQUNILFNBQUs0cUIsdUZBQUw7QUFDRTlnQixXQUFLLG1DQUNBQSxLQURBO0FBRUgrakIsaUNBQXlCLEVBQUVzSyxNQUFNLENBQUNuNEI7QUFGL0IsUUFBTDtBQUlBO0FBQ0Y7QUFFQTtBQUNBOztBQUNBLFNBQUs2cUIsMEVBQUw7QUFDRS9nQixXQUFLLG1DQUNBQSxLQURBO0FBRUhna0IsMEJBQWtCLEVBQUVxSyxNQUFNLENBQUNuNEI7QUFGeEIsUUFBTDtBQUlBOztBQUNGLFNBQUs4cUIsNEZBQUw7QUFDRSxVQUFJcU4sTUFBTSxDQUFDMTdCLEtBQVgsRUFBa0I7QUFDaEJxTixhQUFLLG1DQUNBQSxLQURBO0FBRUh1d0IsdUNBQTZCLEVBQUVsQyxNQUFNLENBQUNuNEIsSUFGbkM7QUFHSHM2Qix3Q0FBOEIsRUFBRW5DLE1BQU0sQ0FBQzE3QjtBQUhwQyxVQUFMO0FBS0E7QUFDRCxPQVBELE1BT087QUFDTHFOLGFBQUssbUNBQ0FBLEtBREE7QUFFSHV3Qix1Q0FBNkIsRUFBRWxDLE1BQU0sQ0FBQ240QjtBQUZuQyxVQUFMO0FBSUE7QUFDRDs7QUFDSCxTQUFLK3FCLDJGQUFMO0FBQ0VqaEIsV0FBSyxtQ0FDQUEsS0FEQTtBQUVIa2tCLG9DQUE0QixFQUFFbUssTUFBTSxDQUFDbjRCO0FBRmxDLFFBQUw7QUFJQTtBQUNGO0FBRUE7QUFDQTs7QUFDQSxTQUFLZ3JCLDhFQUFMO0FBQ0VsaEIsV0FBSyxtQ0FDQUEsS0FEQTtBQUVIbWtCLDZCQUFxQixFQUFFa0ssTUFBTSxDQUFDbjRCO0FBRjNCLFFBQUw7QUFJQTs7QUFDRixTQUFLaXJCLGdHQUFMO0FBQ0UsVUFBSWtOLE1BQU0sQ0FBQzE3QixLQUFYLEVBQWtCO0FBQ2hCcU4sYUFBSyxtQ0FDQUEsS0FEQTtBQUVIOHhCLDBDQUFnQyxFQUFFekQsTUFBTSxDQUFDbjRCLElBRnRDO0FBR0g2N0IsMkNBQWlDLEVBQUUxRCxNQUFNLENBQUMxN0I7QUFIdkMsVUFBTDtBQUtBO0FBQ0QsT0FQRCxNQU9PO0FBQ0xxTixhQUFLLG1DQUNBQSxLQURBO0FBRUg4eEIsMENBQWdDLEVBQUV6RCxNQUFNLENBQUNuNEI7QUFGdEMsVUFBTDtBQUlBO0FBQ0Q7O0FBQ0gsU0FBS2tyQiwrRkFBTDtBQUNFcGhCLFdBQUssbUNBQ0FBLEtBREE7QUFFSHFrQix1Q0FBK0IsRUFBRWdLLE1BQU0sQ0FBQ240QjtBQUZyQyxRQUFMO0FBSUE7QUFDRjtBQUVBO0FBQ0E7O0FBQ0EsU0FBS21yQiwwRUFBTDtBQUNFcmhCLFdBQUssbUNBQ0FBLEtBREE7QUFFSHNrQiwwQkFBa0IsRUFBRStKLE1BQU0sQ0FBQ240QjtBQUZ4QixRQUFMO0FBSUE7O0FBQ0YsU0FBS29yQiw0RkFBTDtBQUNFLFVBQUkrTSxNQUFNLENBQUMxN0IsS0FBWCxFQUFrQjtBQUNoQnFOLGFBQUssbUNBQ0FBLEtBREE7QUFFSHl3Qix1Q0FBNkIsRUFBRXBDLE1BQU0sQ0FBQ240QixJQUZuQztBQUdIdzZCLHdDQUE4QixFQUFFckMsTUFBTSxDQUFDMTdCO0FBSHBDLFVBQUw7QUFLQTtBQUNELE9BUEQsTUFPTztBQUNMcU4sYUFBSyxtQ0FDQUEsS0FEQTtBQUVIeXdCLHVDQUE2QixFQUFFcEMsTUFBTSxDQUFDbjRCO0FBRm5DLFVBQUw7QUFJQTtBQUNEOztBQUNILFNBQUtxckIsMkZBQUw7QUFDRXZoQixXQUFLLG1DQUNBQSxLQURBO0FBRUh3a0Isb0NBQTRCLEVBQUU2SixNQUFNLENBQUNuNEI7QUFGbEMsUUFBTDtBQUlBO0FBQ0Y7QUFFQTtBQUNBOztBQUNBLFNBQUtzckIsc0VBQUw7QUFDRXhoQixXQUFLLG1DQUNBQSxLQURBO0FBRUh5a0IsdUJBQWUsRUFBRTRKLE1BQU0sQ0FBQ240QjtBQUZyQixRQUFMO0FBSUE7O0FBQ0YsU0FBS3VyQix3RkFBTDtBQUNFLFVBQUk0TSxNQUFNLENBQUMxN0IsS0FBWCxFQUFrQjtBQUNoQnFOLGFBQUssbUNBQ0FBLEtBREE7QUFFSDJ3QixvQ0FBMEIsRUFBRXRDLE1BQU0sQ0FBQ240QixJQUZoQztBQUdIMDZCLHFDQUEyQixFQUFFdkMsTUFBTSxDQUFDMTdCO0FBSGpDLFVBQUw7QUFLQTtBQUNELE9BUEQsTUFPTztBQUNMcU4sYUFBSyxtQ0FDQUEsS0FEQTtBQUVIMndCLG9DQUEwQixFQUFFdEMsTUFBTSxDQUFDbjRCO0FBRmhDLFVBQUw7QUFJQTtBQUNEOztBQUNILFNBQUt3ckIsdUZBQUw7QUFDRTFoQixXQUFLLG1DQUNBQSxLQURBO0FBRUgya0IsaUNBQXlCLEVBQUUwSixNQUFNLENBQUNuNEI7QUFGL0IsUUFBTDtBQUlBO0FBQ0Y7O0FBRUEsU0FBS3lyQiwrRUFBTDtBQUNFM2hCLFdBQUssbUNBQ0FBLEtBREE7QUFFSG94Qix1QkFBZSxFQUFFL0MsTUFBTSxDQUFDeEosSUFGckI7QUFHSEMsK0JBQXVCLEVBQUV1SixNQUFNLENBQUN2Six1QkFIN0I7QUFJSEMsaUNBQXlCLEVBQUVzSixNQUFNLENBQUN0Six5QkFKL0I7QUFLSEMsY0FBTSxFQUFFcUosTUFBTSxDQUFDcko7QUFMWixRQUFMO0FBT0E7O0FBQ0YsU0FBS3BELHNFQUFMO0FBQ0U1aEIsV0FBSyxtQ0FDQUEsS0FEQTtBQUVIc3hCLG1CQUFXLEVBQUVqRCxNQUFNLENBQUNuSjtBQUZqQixRQUFMO0FBSUE7O0FBQ0YsU0FBS3JELG1FQUFMO0FBQ0U3aEIsV0FBSyxtQ0FDQUEsS0FEQTtBQUVIdXhCLGlCQUFTLEVBQUVsRCxNQUFNLENBQUNuNEI7QUFGZixRQUFMO0FBSUE7O0FBQ0YsU0FBSzRyQixvRUFBTDtBQUNFOWhCLFdBQUssbUNBQ0FBLEtBREE7QUFFSHd4QixrQkFBVSxFQUFFbkQsTUFBTSxDQUFDbjRCO0FBRmhCLFFBQUw7QUFJQTs7QUFDRixTQUFLNnJCLHNFQUFMO0FBQ0UvaEIsV0FBSyxtQ0FDQUEsS0FEQTtBQUVIeXhCLG9CQUFZLEVBQUVwRCxNQUFNLENBQUNuNEI7QUFGbEIsUUFBTDtBQUlBOztBQUNGLFNBQUtxc0Isb0VBQUw7QUFDRXZpQixXQUFLLG1DQUNBQSxLQURBO0FBRUgweEIsa0JBQVUsRUFBRXJELE1BQU0sQ0FBQ240QjtBQUZoQixRQUFMO0FBSUE7O0FBQ0YsU0FBS3NzQiwyRUFBTDtBQUNFeGlCLFdBQUssbUNBQ0FBLEtBREE7QUFFSDZ2Qix5QkFBaUIsRUFBRXhCLE1BQU0sQ0FBQ240QjtBQUZ2QixRQUFMO0FBSUE7O0FBQ0YsU0FBS3VzQix5RkFBTDtBQUNFemlCLFdBQUssbUNBQ0FBLEtBREE7QUFFSDh2QixvQ0FBNEIsRUFBRXpCLE1BQU0sQ0FBQ240QjtBQUZsQyxRQUFMO0FBSUE7O0FBQ0YsU0FBSzhwQixxRUFBTDtBQUNFaGdCLFdBQUssbUNBQ0FBLEtBREE7QUFFSGd3QixtQkFBVyxFQUFFM0IsTUFBTSxDQUFDbjRCO0FBRmpCLFFBQUw7QUFJQTs7QUFDRixTQUFLK3BCLDhFQUFMO0FBQ0VqZ0IsV0FBSyxtQ0FDQUEsS0FEQTtBQUVIK3ZCLDJCQUFtQixFQUFFMUIsTUFBTSxDQUFDbjRCLElBQVAsSUFBZSxJQUFmLEdBQXNCLElBQXRCLEdBQTZCO0FBRi9DLFFBQUw7QUFJQTs7QUFDRjtBQUNFOEosV0FBSyxHQUFHQSxLQUFSO0FBQ0E7QUFyV0o7O0FBeVdBdXVCLDhEQUFZLENBQUMsS0FBRCxFQUFRdnVCLEtBQVIsQ0FBWjtBQUNBLFNBQU9BLEtBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvZkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU00dkIsYUFBYSxHQUFHO0FBQ2xCb0MsZUFBYSxFQUFFO0FBREcsQ0FBdEI7QUFJZSx5RUFBVWh5QixLQUFLLEdBQUc0dkIsYUFBbEIsRUFBaUN2QixNQUFqQyxFQUF5QztBQUVwRDtBQUVBLE1BQUlzRCxhQUFhLEdBQUdqK0IsNkNBQUMsQ0FBQzhMLEdBQUYsQ0FBTWl2QixvREFBWSxDQUFDanZCLEdBQWIsQ0FBaUIsT0FBakIsS0FBNkIsRUFBbkMsRUFBdUMsZUFBdkMsS0FBMkRvd0IsYUFBL0U7O0FBQ0EsTUFBSWdDLFFBQVEsbUNBQ0w1eEIsS0FESyxHQUVMMnhCLGFBRkssQ0FBWjs7QUFJQSxNQUFHLENBQUNqK0IsNkNBQUMsQ0FBQ20rQixPQUFGLENBQVU3eEIsS0FBVixFQUFpQjR4QixRQUFqQixDQUFKLEVBQStCO0FBQzdCNXhCLFNBQUssR0FBRzR4QixRQUFSO0FBQ0Q7O0FBQ0QsVUFBUXZELE1BQU0sQ0FBQ25zQixJQUFmO0FBQ0ksU0FBS3lqQixrRkFBTDtBQUNJM2xCLFdBQUssbUNBQ0VBLEtBREY7QUFFRGd5QixxQkFBYSxFQUFFM0QsTUFBTSxDQUFDamhCO0FBRnJCLFFBQUw7QUFJQTs7QUFDSjtBQUNJcE4sV0FBSyxHQUFHQSxLQUFSO0FBQ0E7QUFUUjs7QUFXQXV1Qiw4REFBWSxDQUFDLGVBQUQsRUFBa0J2dUIsS0FBbEIsQ0FBWjtBQUVBLFNBQU9BLEtBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU00dkIsYUFBYSxHQUFHO0FBQ2xCcUMsd0JBQXNCLEVBQUUsRUFETjtBQUVsQkMsZUFBYSxFQUFFLEVBRkc7QUFHbEJDLFlBQVUsRUFBRTtBQUhNLENBQXRCO0FBTWUseUVBQVVueUIsS0FBSyxHQUFHNHZCLGFBQWxCLEVBQWlDdkIsTUFBakMsRUFBeUM7QUFFcEQ7QUFFQSxNQUFJc0QsYUFBYSxHQUFHaitCLDZDQUFDLENBQUM4TCxHQUFGLENBQU1pdkIsb0RBQVksQ0FBQ2p2QixHQUFiLENBQWlCLE9BQWpCLEtBQTZCLEVBQW5DLEVBQXVDLFVBQXZDLEtBQXNEb3dCLGFBQTFFOztBQUNBLE1BQUlnQyxRQUFRLG1DQUNMNXhCLEtBREssR0FFTDJ4QixhQUZLLENBQVo7O0FBSUEsTUFBRyxDQUFDaitCLDZDQUFDLENBQUNtK0IsT0FBRixDQUFVN3hCLEtBQVYsRUFBaUI0eEIsUUFBakIsQ0FBSixFQUErQjtBQUM3QjV4QixTQUFLLEdBQUc0eEIsUUFBUjtBQUNEOztBQUNELFVBQVF2RCxNQUFNLENBQUNuc0IsSUFBZjtBQUNJLFNBQUsyakIsdUZBQUw7QUFDSTdsQixXQUFLLG1DQUNFQSxLQURGO0FBRURpeUIsOEJBQXNCLEVBQUU1RCxNQUFNLENBQUNqaEI7QUFGOUIsUUFBTDtBQUlBOztBQUNKLFNBQUswWSw4RUFBTDtBQUNJOWxCLFdBQUssbUNBQ0VBLEtBREY7QUFFRGt5QixxQkFBYSxFQUFFN0QsTUFBTSxDQUFDamhCO0FBRnJCLFFBQUw7QUFJQTs7QUFDSixTQUFLMlksMEVBQUw7QUFDSS9sQixXQUFLLG1DQUNFQSxLQURGO0FBRURteUIsa0JBQVUsRUFBRTlELE1BQU0sQ0FBQ2poQjtBQUZsQixRQUFMO0FBSUE7O0FBQ0o7QUFDSXBOLFdBQUssR0FBR0EsS0FBUjtBQUNBO0FBckJSOztBQXdCQXV1Qiw4REFBWSxDQUFDLFVBQUQsRUFBYXZ1QixLQUFiLENBQVo7QUFFQSxTQUFPQSxLQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BERDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxNQUFNNHZCLGFBQWEsR0FBRztBQUNsQndDLGlDQUErQixFQUFFLEVBRGY7QUFFbEJDLGlDQUErQixFQUFFLEVBRmY7QUFHbEJDLGlDQUErQixFQUFFLEVBSGY7QUFJbEJDLGlDQUErQixFQUFFLEVBSmY7QUFLbEJDLGlDQUErQixFQUFFLEVBTGY7QUFNbEJDLGlDQUErQixFQUFFO0FBTmYsQ0FBdEI7QUFVZSx5RUFBVXp5QixLQUFLLEdBQUc0dkIsYUFBbEIsRUFBaUN2QixNQUFqQyxFQUF5QztBQUVwRDtBQUVBLE1BQUlzRCxhQUFhLEdBQUdqK0IsNkNBQUMsQ0FBQzhMLEdBQUYsQ0FBTWl2QixvREFBWSxDQUFDanZCLEdBQWIsQ0FBaUIsT0FBakIsS0FBNkIsRUFBbkMsRUFBdUMsS0FBdkMsS0FBaURvd0IsYUFBckU7O0FBQ0EsTUFBSWdDLFFBQVEsbUNBQ0w1eEIsS0FESyxHQUVMMnhCLGFBRkssQ0FBWjs7QUFJQSxNQUFHLENBQUNqK0IsNkNBQUMsQ0FBQ20rQixPQUFGLENBQVU3eEIsS0FBVixFQUFpQjR4QixRQUFqQixDQUFKLEVBQStCO0FBQzdCNXhCLFNBQUssR0FBRzR4QixRQUFSO0FBQ0Q7O0FBQ0QsVUFBUXZELE1BQU0sQ0FBQ25zQixJQUFmO0FBQ0ksU0FBS2lrQixzRkFBTDtBQUNJLFVBQUksQ0FBQ2tJLE1BQU0sQ0FBQ2poQixPQUFSLElBQW1CLENBQUN0VyxzRUFBYSxDQUFDdTNCLE1BQU0sQ0FBQ2poQixPQUFQLENBQWUvQixLQUFoQixDQUFqQyxJQUEyRCxDQUFDZ2pCLE1BQU0sQ0FBQ2poQixPQUFQLENBQWVzbEIsUUFBL0UsRUFBeUY7QUFDckYxeUIsYUFBSyxHQUFHQSxLQUFSO0FBQ0gsT0FGRCxNQUVPO0FBQ0hBLGFBQUssQ0FBRSxXQUFVdE0sNkNBQUMsQ0FBQ2kvQixVQUFGLENBQWF0RSxNQUFNLENBQUNqaEIsT0FBUCxDQUFlc2xCLFFBQTVCLENBQXNDLGtCQUFpQkUsTUFBTSxDQUFDQyxZQUFQLENBQW9CLEtBQUtqZ0MsUUFBUSxDQUFDeTdCLE1BQU0sQ0FBQ2poQixPQUFQLENBQWUvQixLQUFoQixDQUFqQyxDQUF5RCxPQUE1SCxDQUFMLEdBQTJJZ2pCLE1BQU0sQ0FBQ2poQixPQUFQLENBQWVsWCxJQUExSjtBQUNBOEosYUFBSyxxQkFDRUEsS0FERixDQUFMO0FBR0g7O0FBQ0Q7O0FBQ0o7QUFDSUEsV0FBSyxHQUFHQSxLQUFSO0FBQ0E7QUFiUjs7QUFlQXV1Qiw4REFBWSxDQUFDLEtBQUQsRUFBUXZ1QixLQUFSLENBQVo7QUFFQSxTQUFPQSxLQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNNHZCLGFBQWEsR0FBRztBQUNsQjNqQixRQUFNLEVBQUV0RjtBQURVLENBQXRCO0FBSWUseUVBQVUzRyxLQUFLLEdBQUc0dkIsYUFBbEIsRUFBaUN2QixNQUFqQyxFQUF5QztBQUVwRDtBQUVBLE1BQUlzRCxhQUFhLEdBQUdqK0IsNkNBQUMsQ0FBQzhMLEdBQUYsQ0FBTWl2QixvREFBWSxDQUFDanZCLEdBQWIsQ0FBaUIsT0FBakIsS0FBNkIsRUFBbkMsRUFBdUMsTUFBdkMsS0FBa0Rvd0IsYUFBdEU7O0FBQ0EsTUFBSWdDLFFBQVEsbUNBQ0w1eEIsS0FESyxHQUVMMnhCLGFBRkssQ0FBWjs7QUFJQSxNQUFHLENBQUNqK0IsNkNBQUMsQ0FBQ20rQixPQUFGLENBQVU3eEIsS0FBVixFQUFpQjR4QixRQUFqQixDQUFKLEVBQStCO0FBQzdCNXhCLFNBQUssR0FBRzR4QixRQUFSO0FBQ0Q7O0FBQ0QsVUFBUXZELE1BQU0sQ0FBQ25zQixJQUFmO0FBQ0ksU0FBS21rQiwyRUFBTDtBQUNJcm1CLFdBQUssbUNBQ0VBLEtBREY7QUFFRGlNLGNBQU0sRUFBRW9pQixNQUFNLENBQUNqaEI7QUFGZCxRQUFMO0FBSUE7O0FBQ0osU0FBS2taLDJFQUFMO0FBQ0l0bUIsV0FBSyxtQ0FDRUEsS0FERjtBQUVEaU0sY0FBTSxFQUFFdEY7QUFGUCxRQUFMO0FBSUE7O0FBQ0o7QUFDSTNHLFdBQUssR0FBR0EsS0FBUjtBQUNBO0FBZlI7O0FBaUJBdXVCLDhEQUFZLENBQUMsTUFBRCxFQUFTdnVCLEtBQVQsQ0FBWjtBQUVBLFNBQU9BLEtBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0Q7QUFDQTtBQUNBO0FBc0JBO0FBQ0E7QUFFQSxNQUFNNHZCLGFBQWEsR0FBRztBQUNwQmtELE1BQUksRUFBRSxFQURjO0FBRXBCQyxNQUFJLEVBQUUsRUFGYztBQUdwQmhwQixPQUFLLEVBQUUsRUFIYTtBQUlwQmlwQixTQUFPLEVBQUUsRUFKVztBQUtwQkMsYUFBVyxFQUFFLEVBTE87QUFNcEJDLFNBQU8sRUFBRSxFQU5XO0FBT3BCQyxRQUFNLEVBQUUsRUFQWTtBQVFwQkMsYUFBVyxFQUFFLEVBUk87QUFTcEJDLFdBQVMsRUFBRSxFQVRTO0FBVXBCQyxTQUFPLEVBQUUsRUFWVztBQVdwQkMsTUFBSSxFQUFFLEVBWGM7QUFZcEI5SyxxQkFBbUIsRUFBRSxFQVpEO0FBYXBCK0ssbUJBQWlCLEVBQUU7QUFDakJ0ekIsUUFBSSxFQUFFLEVBRFc7QUFFakI2RCxZQUFRLEVBQUUsRUFGTztBQUdqQlcsZ0JBQVksRUFBRSxFQUhHO0FBSWpCK3VCLGVBQVcsRUFBRSxFQUpJO0FBS2pCQyxnQkFBWSxFQUFFLEVBTEc7QUFNakJ6dkIsWUFBUSxFQUFFLEVBTk87QUFPakIwdkIsWUFBUSxFQUFFLEVBUE87QUFRakJDLFlBQVEsRUFBRSxFQVJPO0FBU2pCQyxVQUFNLEVBQUUsRUFUUztBQVVqQmwwQixjQUFVLEVBQUUsRUFWSztBQVdqQm0wQix1QkFBbUIsRUFBRSxFQVhKO0FBWWpCaDBCLHVCQUFtQixFQUFFO0FBWkosR0FiQztBQTJCcEJpMEIsVUFBUSxFQUFFLEVBM0JVO0FBNEJwQkMsWUFBVSxFQUFFLEVBNUJRO0FBNkJwQkMsY0FBWSxFQUFFLENBQUM7QUE3QkssQ0FBdEI7QUFnQ2UseUVBQVVqMEIsS0FBSyxHQUFHNHZCLGFBQWxCLEVBQWlDdkIsTUFBakMsRUFBeUM7QUFFdEQ7QUFFQSxNQUFJc0QsYUFBYSxHQUFHaitCLDZDQUFDLENBQUM4TCxHQUFGLENBQU1pdkIsb0RBQVksQ0FBQ2p2QixHQUFiLENBQWlCLE9BQWpCLEtBQTZCLEVBQW5DLEVBQXVDLFNBQXZDLEtBQXFEb3dCLGFBQXpFOztBQUNBLE1BQUlnQyxRQUFRLG1DQUNQNXhCLEtBRE8sR0FFUDJ4QixhQUZPLENBQVo7O0FBSUEsTUFBRyxDQUFDaitCLDZDQUFDLENBQUNtK0IsT0FBRixDQUFVN3hCLEtBQVYsRUFBaUI0eEIsUUFBakIsQ0FBSixFQUErQjtBQUM3QjV4QixTQUFLLEdBQUc0eEIsUUFBUjtBQUNEOztBQUNELFVBQVF2RCxNQUFNLENBQUNuc0IsSUFBZjtBQUNFLFNBQUt1a0IsbUVBQUw7QUFDRXptQixXQUFLLG1DQUNBQSxLQURBO0FBRUg4eUIsWUFBSSxFQUFFekUsTUFBTSxDQUFDamhCO0FBRlYsUUFBTDtBQUlBOztBQUNGLFNBQUtzWixtRUFBTDtBQUNFMW1CLFdBQUssbUNBQ0FBLEtBREE7QUFFSCt5QixZQUFJLEVBQUUxRSxNQUFNLENBQUNqaEI7QUFGVixRQUFMO0FBSUE7O0FBRUYsU0FBS3VaLG9FQUFMO0FBQ0UzbUIsV0FBSyxtQ0FDQUEsS0FEQTtBQUVIK0osYUFBSyxFQUFFc2tCLE1BQU0sQ0FBQ2poQjtBQUZYLFFBQUw7QUFJQTs7QUFFRixTQUFLd1osc0VBQUw7QUFDRTVtQixXQUFLLG1DQUNBQSxLQURBO0FBRUhnekIsZUFBTyxFQUFFM0UsTUFBTSxDQUFDamhCO0FBRmIsUUFBTDtBQUlBOztBQUVGLFNBQUt5WiwwRUFBTDtBQUNFN21CLFdBQUssbUNBQ0FBLEtBREE7QUFFSGl6QixtQkFBVyxFQUFFNUUsTUFBTSxDQUFDamhCO0FBRmpCLFFBQUw7O0FBS0YsU0FBSzBaLHNFQUFMO0FBQ0U5bUIsV0FBSyxtQ0FDQUEsS0FEQTtBQUVIa3pCLGVBQU8sRUFBRTdFLE1BQU0sQ0FBQ2poQjtBQUZiLFFBQUw7QUFJQTs7QUFFRixTQUFLMloseUVBQUw7QUFDRS9tQixXQUFLLG1DQUNBQSxLQURBO0FBRUhzekIsZUFBTyxFQUFFakYsTUFBTSxDQUFDamhCO0FBRmIsUUFBTDtBQUlBOztBQUVGLFNBQUs0WixxRUFBTDtBQUNFaG5CLFdBQUssbUNBQ0FBLEtBREE7QUFFSG16QixjQUFNLEVBQUU5RSxNQUFNLENBQUNqaEI7QUFGWixRQUFMO0FBSUE7O0FBRUYsU0FBSzZaLDBFQUFMO0FBQ0VqbkIsV0FBSyxtQ0FDQUEsS0FEQTtBQUVIb3pCLG1CQUFXLEVBQUUvRSxNQUFNLENBQUNqaEI7QUFGakIsUUFBTDtBQUlBOztBQUVGLFNBQUs4Wix3RUFBTDtBQUNFbG5CLFdBQUssbUNBQ0FBLEtBREE7QUFFSHF6QixpQkFBUyxFQUFFaEYsTUFBTSxDQUFDamhCO0FBRmYsUUFBTDtBQUlBOztBQUNGLFNBQUsrWixzRUFBTDtBQUNFbm5CLFdBQUssbUNBQ0FBLEtBREE7QUFFSHN6QixlQUFPLEVBQUVqRixNQUFNLENBQUNqaEI7QUFGYixRQUFMO0FBSUE7O0FBRUYsU0FBS2dhLG1FQUFMO0FBQ0VwbkIsV0FBSyxtQ0FDQUEsS0FEQTtBQUVIdXpCLFlBQUksRUFBRWxGLE1BQU0sQ0FBQ2poQjtBQUZWLFFBQUw7QUFJQTs7QUFDRixTQUFLaWEsb0ZBQUw7QUFDRXJuQixXQUFLLG1DQUNBQSxLQURBO0FBRUh5b0IsMkJBQW1CLEVBQUU0RixNQUFNLENBQUNqaEI7QUFGekIsUUFBTDtBQUlBOztBQUNGLFNBQUttYSxpRkFBTDtBQUNFdm5CLFdBQUssbUNBQ0FBLEtBREE7QUFFSGcwQixrQkFBVSxFQUFFM0YsTUFBTSxDQUFDamhCO0FBRmhCLFFBQUw7QUFJQTs7QUFDRixTQUFLc2Esb0ZBQUw7QUFDRTFuQixXQUFLLG1DQUNBQSxLQURBO0FBRUhpMEIsb0JBQVksRUFBRTVGLE1BQU0sQ0FBQ2poQjtBQUZsQixRQUFMO0FBSUE7O0FBQ0YsU0FBS29hLDhFQUFMO0FBQ0UsVUFBSXhuQixLQUFLLENBQUNnMEIsVUFBTixDQUFpQm5oQyxNQUFqQixHQUEwQm1OLEtBQUssQ0FBQ2kwQixZQUFwQyxFQUFrRDtBQUNoRCxZQUFJQyxZQUFZLEdBQUd4Z0MsNkNBQUMsQ0FBQ3lnQyxTQUFGLENBQVluMEIsS0FBSyxDQUFDZzBCLFVBQWxCLEVBQThCLFVBQVV0aEMsSUFBVixFQUFnQjtBQUMvRHNOLGVBQUssR0FBR3ROLElBQUksSUFBSTI3QixNQUFNLENBQUNqaEIsT0FBdkI7QUFDRCxTQUZrQixDQUFuQjs7QUFHQSxZQUFJOG1CLFlBQVksSUFBSSxDQUFDLENBQXJCLEVBQXdCO0FBQ3RCLGNBQUlocUIsSUFBSSxHQUFHeFcsNkNBQUMsQ0FBQzRKLFNBQUYsQ0FBWTBDLEtBQUssQ0FBQ2cwQixVQUFsQixDQUFYOztBQUNBOXBCLGNBQUksQ0FBQzdMLElBQUwsQ0FBVWd3QixNQUFNLENBQUNqaEIsT0FBakI7QUFDQXBOLGVBQUssbUNBQ0FBLEtBREE7QUFFSGcwQixzQkFBVSxFQUFFOXBCO0FBRlQsWUFBTDtBQUlELFNBUEQsTUFPTztBQUNMbEssZUFBSyxxQkFDQUEsS0FEQSxDQUFMO0FBR0Q7QUFDRixPQWhCRCxNQWdCTztBQUNMQSxhQUFLLHFCQUNBQSxLQURBLENBQUw7QUFHRDs7QUFDRDs7QUFDRixTQUFLeW5CLGlGQUFMO0FBQ0UsVUFBSXZkLElBQUksR0FBR2xLLEtBQUssQ0FBQ2cwQixVQUFOLENBQWlCdmhDLE1BQWpCLENBQXlCQyxJQUFELElBQVVBLElBQUksS0FBSzI3QixNQUFNLENBQUNqaEIsT0FBbEQsQ0FBWDtBQUVBcE4sV0FBSyxtQ0FDQUEsS0FEQTtBQUVIZzBCLGtCQUFVLEVBQUU5cEI7QUFGVCxRQUFMO0FBSUE7O0FBRUYsU0FBS29kLGdGQUFMO0FBQ0V0bkIsV0FBSyxtQ0FDQUEsS0FEQTtBQUVIK3pCLGdCQUFRLEVBQUUxRixNQUFNLENBQUNqaEI7QUFGZCxRQUFMO0FBSUE7O0FBQ0YsU0FBS3VhLG1GQUFMO0FBQ0UzbkIsV0FBSyxtQ0FDQUEsS0FEQTtBQUVId3pCLHlCQUFpQixFQUFFbkYsTUFBTSxDQUFDamhCO0FBRnZCLFFBQUw7QUFJQTs7QUFDRixTQUFLd2EsbUZBQUw7QUFDRTVuQixXQUFLLG1DQUNBQSxLQURBO0FBRUh3ekIseUJBQWlCLEVBQUU7QUFDakJ0ekIsY0FBSSxFQUFFLEVBRFc7QUFFakI2RCxrQkFBUSxFQUFFLEVBRk87QUFHakJXLHNCQUFZLEVBQUUsRUFIRztBQUlqQit1QixxQkFBVyxFQUFFLEVBSkk7QUFLakJDLHNCQUFZLEVBQUUsRUFMRztBQU1qQnp2QixrQkFBUSxFQUFFLEVBTk87QUFPakIwdkIsa0JBQVEsRUFBRSxFQVBPO0FBUWpCQyxrQkFBUSxFQUFFLEVBUk87QUFTakJDLGdCQUFNLEVBQUUsRUFUUztBQVVqQmwwQixvQkFBVSxFQUFFLEVBVks7QUFXakJtMEIsNkJBQW1CLEVBQUUsRUFYSjtBQVlqQmgwQiw2QkFBbUIsRUFBRTtBQVpKO0FBRmhCLFFBQUw7QUFpQkE7O0FBRUY7QUFDRUUsV0FBSyxHQUFHQSxLQUFSO0FBQ0E7QUFyS0o7O0FBeUtBdXVCLDhEQUFZLENBQUMsU0FBRCxFQUFZdnVCLEtBQVosQ0FBWjtBQUVBLFNBQU9BLEtBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuUEQ7QUFDQTtBQUNBO0FBd0JBO0FBQ0E7QUFFQSxNQUFNNHZCLGFBQWEsR0FBRztBQUNwQndFLG9CQUFrQixFQUFFLEtBREE7QUFFcEJDLGNBQVksRUFBRSxFQUZNO0FBR3BCQyxrQkFBZ0IsRUFBRSxFQUhFO0FBSXBCQyxVQUFRLEVBQUUsRUFKVTtBQUtwQkMsbUJBQWlCLEVBQUUsRUFMQztBQU1wQkMsYUFBVyxFQUFFLEVBTk87QUFPcEJoTSxxQkFBbUIsRUFBRSxFQVBEO0FBUXBCaU0sY0FBWSxFQUFFLEVBUk07QUFTcEJDLHFCQUFtQixFQUFFLElBVEQ7QUFVcEJYLFlBQVUsRUFBRSxFQVZRO0FBV3BCQyxjQUFZLEVBQUUsQ0FYTTtBQVlwQlcsZUFBYSxFQUFFLEVBWks7QUFhcEJuMUIsYUFBVyxFQUFFLEVBYk87QUFjcEJvMUIsbUJBQWlCLEVBQUUsS0FkQztBQWVwQm4xQixRQUFNLEVBQUU7QUFmWSxDQUF0QjtBQWtCZSx5RUFBVU0sS0FBSyxHQUFHNHZCLGFBQWxCLEVBQWlDdkIsTUFBakMsRUFBeUM7QUFFdEQ7QUFFQSxNQUFJc0QsYUFBYSxHQUFHaitCLDZDQUFDLENBQUM4TCxHQUFGLENBQU1pdkIsb0RBQVksQ0FBQ2p2QixHQUFiLENBQWlCLE9BQWpCLEtBQTZCLEVBQW5DLEVBQXVDLGNBQXZDLEtBQTBEb3dCLGFBQTlFOztBQUNBLE1BQUlnQyxRQUFRLG1DQUNQNXhCLEtBRE8sR0FFUDJ4QixhQUZPLENBQVo7O0FBSUEsTUFBSSxDQUFDaitCLDZDQUFDLENBQUNtK0IsT0FBRixDQUFVN3hCLEtBQVYsRUFBaUI0eEIsUUFBakIsQ0FBTCxFQUFpQztBQUMvQjV4QixTQUFLLEdBQUc0eEIsUUFBUjtBQUNEOztBQUNELFVBQVF2RCxNQUFNLENBQUNuc0IsSUFBZjtBQUNFLFNBQUsrbUIsZ0ZBQUw7QUFDRWpwQixXQUFLLG1DQUNBQSxLQURBO0FBRUhxMEIsb0JBQVksRUFBRWhHLE1BQU0sQ0FBQ2poQjtBQUZsQixRQUFMO0FBSUE7O0FBQ0YsU0FBSzhiLHFGQUFMO0FBQ0VscEIsV0FBSyxtQ0FDQUEsS0FEQTtBQUVIczBCLHdCQUFnQixFQUFFakcsTUFBTSxDQUFDamhCO0FBRnRCLFFBQUw7QUFJQTs7QUFDRixTQUFLK2IsK0VBQUw7QUFDRW5wQixXQUFLLG1DQUNBQSxLQURBO0FBRUhxMEIsb0JBQVksRUFBRSxDQUFDaEcsTUFBTSxDQUFDamhCLE9BQVIsRUFBaUIsR0FBR3BOLEtBQUssQ0FBQ3EwQixZQUExQjtBQUZYLFFBQUw7QUFJQTs7QUFDRixTQUFLakwsaUZBQUw7QUFDRXBwQixXQUFLLG1DQUNBQSxLQURBO0FBRUhxMEIsb0JBQVksRUFBRSxDQUFDLEdBQUdyMEIsS0FBSyxDQUFDcTBCLFlBQU4sQ0FBbUI1aEMsTUFBbkIsQ0FBMkJDLElBQUQsSUFBVUEsSUFBSSxDQUFDMEgsR0FBTCxLQUFhaTBCLE1BQU0sQ0FBQ2poQixPQUFQLENBQWVoVCxHQUFoRSxDQUFKO0FBRlgsUUFBTDtBQUlBOztBQUNGLFNBQUtpdkIsaUZBQUw7QUFDRSxVQUFJMTJCLEtBQUssR0FBR2UsNkNBQUMsQ0FBQ3lnQyxTQUFGLENBQVluMEIsS0FBSyxDQUFDcTBCLFlBQWxCLEVBQWdDO0FBQUUsZUFBT2hHLE1BQU0sQ0FBQ2poQixPQUFQLENBQWVoVDtBQUF4QixPQUFoQyxDQUFaOztBQUNBNEYsV0FBSyxDQUFDcTBCLFlBQU4sQ0FBbUJ0OEIsTUFBbkIsQ0FBMEJwRixLQUExQixFQUFpQyxDQUFqQyxFQUFvQzA3QixNQUFNLENBQUNqaEIsT0FBM0M7QUFDQXBOLFdBQUssbUNBQ0FBLEtBREE7QUFFSHEwQixvQkFBWSxFQUFFcjBCLEtBQUssQ0FBQ3EwQjtBQUZqQixRQUFMO0FBSUE7O0FBQ0YsU0FBSy9LLDRGQUFMO0FBQ0V0cEIsV0FBSyxtQ0FDQUEsS0FEQTtBQUVIdTBCLGdCQUFRLEVBQUVsRyxNQUFNLENBQUNsMEIsRUFGZDtBQUdIcTZCLHlCQUFpQixFQUFFOWdDLDZDQUFDLENBQUMyTCxJQUFGLENBQU8zTCw2Q0FBQyxDQUFDNkMsSUFBRixDQUFPeUosS0FBSyxDQUFDcTBCLFlBQWIsRUFBMkI7QUFBRSxpQkFBT2hHLE1BQU0sQ0FBQ2wwQjtBQUFoQixTQUEzQixDQUFQLEVBQXlELENBQzFFLGtCQUQwRSxFQUUxRSxnQkFGMEUsRUFHMUUsT0FIMEUsRUFJMUUsYUFKMEUsRUFLMUUsY0FMMEUsRUFNMUUsVUFOMEUsRUFPMUUsYUFQMEUsRUFRMUUsYUFSMEUsRUFTMUUsYUFUMEUsRUFVMUUsWUFWMEUsRUFXMUUsV0FYMEUsRUFZMUUsV0FaMEUsRUFhMUUsV0FiMEUsRUFjMUUsV0FkMEUsRUFlMUUsVUFmMEUsRUFnQjFFLFVBaEIwRSxFQWlCMUUsVUFqQjBFLEVBa0IxRSxTQWxCMEUsRUFtQjFFLFFBbkIwRSxFQW9CMUUsUUFwQjBFLEVBcUIxRSxPQXJCMEUsRUFzQjFFLE9BdEIwRSxFQXVCMUUsS0F2QjBFLENBQXpEO0FBSGhCLFFBQUw7QUE2QkE7O0FBQ0YsU0FBS292QixxRkFBTDtBQUVFLFVBQUksQ0FBQ3ZwQixLQUFLLENBQUNnMEIsVUFBWCxFQUF1QjtBQUNyQmgwQixhQUFLLENBQUNnMEIsVUFBTixHQUFtQixFQUFuQjtBQUNEOztBQUNELFVBQUloMEIsS0FBSyxDQUFDZzBCLFVBQU4sQ0FBaUJuaEMsTUFBakIsR0FBMEJtTixLQUFLLENBQUNpMEIsWUFBcEMsRUFBa0Q7QUFDaEQsWUFBSUMsWUFBWSxHQUFHeGdDLDZDQUFDLENBQUN5Z0MsU0FBRixDQUFZbjBCLEtBQUssQ0FBQ2cwQixVQUFsQixFQUE4QixVQUFVdGhDLElBQVYsRUFBZ0I7QUFDL0RzTixlQUFLLEdBQUd0TixJQUFJLElBQUkyN0IsTUFBTSxDQUFDamhCLE9BQXZCO0FBQ0QsU0FGa0IsQ0FBbkI7O0FBR0EsWUFBSThtQixZQUFZLElBQUksQ0FBQyxDQUFyQixFQUF3QjtBQUN0QixjQUFJaHFCLElBQUksR0FBR3hXLDZDQUFDLENBQUM0SixTQUFGLENBQVkwQyxLQUFLLENBQUNnMEIsVUFBbEIsQ0FBWDs7QUFDQTlwQixjQUFJLENBQUM3TCxJQUFMLENBQVVnd0IsTUFBTSxDQUFDamhCLE9BQWpCO0FBQ0FwTixlQUFLLG1DQUNBQSxLQURBO0FBRUhnMEIsc0JBQVUsRUFBRTlwQjtBQUZULFlBQUw7QUFJRCxTQVBELE1BT087QUFDTGxLLGVBQUsscUJBQ0FBLEtBREEsQ0FBTDtBQUdEO0FBQ0YsT0FoQkQsTUFnQk87QUFDTEEsYUFBSyxxQkFDQUEsS0FEQSxDQUFMO0FBR0Q7O0FBQ0Q7O0FBQ0YsU0FBS3dwQix1RkFBTDtBQUNFLFVBQUl0ZixJQUFJLEdBQUdsSyxLQUFLLENBQUNnMEIsVUFBTixDQUFpQnZoQyxNQUFqQixDQUF5QkMsSUFBRCxJQUFVQSxJQUFJLEtBQUsyN0IsTUFBTSxDQUFDamhCLE9BQWxELENBQVg7QUFFQXBOLFdBQUssbUNBQ0FBLEtBREE7QUFFSGcwQixrQkFBVSxFQUFFOXBCO0FBRlQsUUFBTDtBQUlBOztBQUNGLFNBQUt3Zix1RkFBTDtBQUNFLFVBQUksQ0FBQzV2QixLQUFLLENBQUNmLE9BQU4sQ0FBY3MxQixNQUFNLENBQUNqaEIsT0FBckIsQ0FBTCxFQUFvQztBQUNsQ2loQixjQUFNLENBQUNqaEIsT0FBUCxHQUFpQixFQUFqQjtBQUNEOztBQUNEcE4sV0FBSyxtQ0FDQUEsS0FEQTtBQUVIZzBCLGtCQUFVLEVBQUUzRixNQUFNLENBQUNqaEI7QUFGaEIsUUFBTDtBQUlBOztBQUNGLFNBQUtxYyx1RkFBTDtBQUNFenBCLFdBQUssbUNBQ0FBLEtBREE7QUFFSGcwQixrQkFBVSxFQUFFO0FBRlQsUUFBTDtBQUlBOztBQUNGLFNBQUszTSx5RkFBTDtBQUNFcm5CLFdBQUssbUNBQ0FBLEtBREE7QUFFSHlvQiwyQkFBbUIsRUFBRTRGLE1BQU0sQ0FBQ2poQjtBQUZ6QixRQUFMO0FBSUE7O0FBQ0YsU0FBS3VjLGlGQUFMO0FBQ0UzcEIsV0FBSyxtQ0FDQUEsS0FEQTtBQUVIMDBCLG9CQUFZLEVBQUVyRyxNQUFNLENBQUNqaEI7QUFGbEIsUUFBTDtBQUlBOztBQUNGLFNBQUt3YywwRkFBTDtBQUNFNXBCLFdBQUssbUNBQ0FBLEtBREE7QUFFSDIwQiwyQkFBbUIsRUFBRTFpQyw2Q0FBTSxDQUFDbzhCLE1BQU0sQ0FBQ2poQixPQUFSO0FBRnhCLFFBQUw7QUFJQTs7QUFDRixTQUFLeWMsaUZBQUw7QUFDRTdwQixXQUFLLG1DQUNBQSxLQURBO0FBRUhpMEIsb0JBQVksRUFBRTVGLE1BQU0sQ0FBQ2poQjtBQUZsQixRQUFMO0FBSUE7O0FBQ0YsU0FBSzBjLDBGQUFMO0FBQ0U5cEIsV0FBSyxtQ0FDQUEsS0FEQTtBQUVINDBCLHFCQUFhLEVBQUV2RyxNQUFNLENBQUNqaEI7QUFGbkIsUUFBTDtBQUlBOztBQUNGLFNBQUsyYywwRkFBTDtBQUNFL3BCLFdBQUssbUNBQ0FBLEtBREE7QUFFSDQwQixxQkFBYSxFQUFFO0FBRlosUUFBTDtBQUlBOztBQUNGLFNBQUs1Syx3RkFBTDtBQUNFaHFCLFdBQUssbUNBQ0FBLEtBREE7QUFFSFAsbUJBQVcsRUFBRTR1QixNQUFNLENBQUNqaEI7QUFGakIsUUFBTDtBQUlBOztBQUNGLFNBQUs2Yyx3RkFBTDtBQUNFanFCLFdBQUssbUNBQ0FBLEtBREE7QUFFSFAsbUJBQVcsRUFBRTtBQUZWLFFBQUw7QUFJQTs7QUFDRixTQUFLeXFCLHlGQUFMO0FBQ0VscUIsV0FBSyxtQ0FDQUEsS0FEQTtBQUVITixjQUFNLEVBQUUydUIsTUFBTSxDQUFDamhCO0FBRlosUUFBTDtBQUlBOztBQUNGLFNBQUsrYyx5RkFBTDtBQUNFbnFCLFdBQUssbUNBQ0FBLEtBREE7QUFFSE4sY0FBTSxFQUFFO0FBRkwsUUFBTDtBQUlBOztBQUNGLFNBQUswcUIsc0ZBQUw7QUFDRXBxQixXQUFLLG1DQUNBQSxLQURBO0FBRUg2MEIseUJBQWlCLEVBQUV4RyxNQUFNLENBQUNqaEI7QUFGdkIsUUFBTDtBQUlBOztBQUNGLFNBQUtpZCxzRkFBTDtBQUNFcnFCLFdBQUssbUNBQ0FBLEtBREE7QUFFSG8wQiwwQkFBa0IsRUFBRS9GLE1BQU0sQ0FBQ2poQjtBQUZ4QixRQUFMO0FBSUE7O0FBQ0Y7QUFDRXBOLFdBQUssR0FBR0EsS0FBUjtBQUNBO0FBNUxKOztBQThMQXV1Qiw4REFBWSxDQUFDLGNBQUQsRUFBaUJ2dUIsS0FBakIsQ0FBWjtBQUVBLFNBQU9BLEtBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVBEO0FBSUE7QUFDQTtBQUNBO0FBRUEsTUFBTTR2QixhQUFhLEdBQUc7QUFDcEJrRixTQUFPLEVBQUUsQ0FEVztBQUVwQmhKLFNBQU8sRUFBRTtBQUZXLENBQXRCOztBQUtBLE1BQU1pSixVQUFVLEdBQUcsQ0FBQy8wQixLQUFLLEdBQUc0dkIsYUFBVCxFQUF3QnZCLE1BQXhCLEtBQW1DO0FBR3BEO0FBRUEsTUFBSXNELGFBQWEsR0FBR2orQiw2Q0FBQyxDQUFDOEwsR0FBRixDQUFNaXZCLG9EQUFZLENBQUNqdkIsR0FBYixDQUFpQixPQUFqQixLQUE2QixFQUFuQyxFQUF1QyxjQUF2QyxLQUEwRG93QixhQUE5RTs7QUFDQSxNQUFJZ0MsUUFBUSxtQ0FDUDV4QixLQURPLEdBRVAyeEIsYUFGTyxDQUFaOztBQUlBLE1BQUcsQ0FBQ2orQiw2Q0FBQyxDQUFDbStCLE9BQUYsQ0FBVTd4QixLQUFWLEVBQWlCNHhCLFFBQWpCLENBQUosRUFBK0I7QUFDN0I1eEIsU0FBSyxHQUFHNHhCLFFBQVI7QUFDRDs7QUFDRCxVQUFRdkQsTUFBTSxDQUFDbnNCLElBQWY7QUFDRSxTQUFLeXBCLDZFQUFMO0FBQ0UzckIsV0FBSyxtQ0FBUUEsS0FBUjtBQUFlODBCLGVBQU8sRUFBRXpHLE1BQU0sQ0FBQ240QjtBQUEvQixRQUFMO0FBQ0E7O0FBQ0YsU0FBSzAxQixrRUFBTDtBQUNFNXJCLFdBQUssbUNBQVFBLEtBQVI7QUFBZThyQixlQUFPLEVBQUV1QyxNQUFNLENBQUNuNEI7QUFBL0IsUUFBTDtBQUNBOztBQUNGO0FBQ0U4SixXQUFLLEdBQUdBLEtBQVI7QUFDQTtBQVRKOztBQVdBdXVCLDhEQUFZLENBQUMsVUFBRCxFQUFhdnVCLEtBQWIsQ0FBWjtBQUVBLFNBQU9BLEtBQVA7QUFDRCxDQTNCRDs7QUE2QmUrMEIseUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBLE1BQU1uRixhQUFhLEdBQUc7QUFDcEI7QUFDQW9GLFFBQU0sRUFBRSxFQUZZO0FBR3BCQyxZQUFVLEVBQUU7QUFIUSxDQUF0Qjs7QUFNQSxNQUFNRixVQUFVLEdBQUcsQ0FBQy8wQixLQUFLLEdBQUc0dkIsYUFBVCxFQUF3QnZCLE1BQXhCLEtBQW1DO0FBR3BEO0FBRUEsTUFBSXNELGFBQWEsR0FBR2orQiw2Q0FBQyxDQUFDOEwsR0FBRixDQUFNaXZCLG9EQUFZLENBQUNqdkIsR0FBYixDQUFpQixPQUFqQixLQUE2QixFQUFuQyxFQUF1QyxlQUF2QyxLQUEyRG93QixhQUEvRTs7QUFDQSxNQUFJZ0MsUUFBUSxtQ0FDUDV4QixLQURPLEdBRVAyeEIsYUFGTyxDQUFaOztBQUlBLE1BQUcsQ0FBQ2orQiw2Q0FBQyxDQUFDbStCLE9BQUYsQ0FBVTd4QixLQUFWLEVBQWlCNHhCLFFBQWpCLENBQUosRUFBK0I7QUFDN0I1eEIsU0FBSyxHQUFHNHhCLFFBQVI7QUFDRDs7QUFDRCxVQUFRdkQsTUFBTSxDQUFDbnNCLElBQWY7QUFDRSxTQUFLNnBCLG9GQUFMO0FBQ0U7QUFDQS9yQixXQUFLLG1DQUFRQSxLQUFSO0FBQWVnMUIsY0FBTSxFQUFFM0csTUFBTSxDQUFDbjRCO0FBQTlCLFFBQUw7QUFDQTs7QUFDRjtBQUNFOEosV0FBSyxHQUFHQSxLQUFSO0FBQ0E7QUFQSjs7QUFTQXV1Qiw4REFBWSxDQUFDLGVBQUQsRUFBa0J2dUIsS0FBbEIsQ0FBWjtBQUVBLFNBQU9BLEtBQVA7QUFDRCxDQXpCRDs7QUEyQmUrMEIseUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1uRixhQUFhLEdBQUcsRUFBdEI7QUFJZSx5RUFBVTV2QixLQUFLLEdBQUc0dkIsYUFBbEIsRUFBaUN2QixNQUFqQyxFQUF5QztBQUV0RDtBQUVBLE1BQUlzRCxhQUFhLEdBQUdqK0IsNkNBQUMsQ0FBQzhMLEdBQUYsQ0FBTWl2QixvREFBWSxDQUFDanZCLEdBQWIsQ0FBaUIsT0FBakIsS0FBNkIsRUFBbkMsRUFBdUMsZUFBdkMsS0FBMkRvd0IsYUFBL0U7O0FBQ0EsTUFBSWdDLFFBQVEsbUNBQ1A1eEIsS0FETyxHQUVQMnhCLGFBRk8sQ0FBWjs7QUFJQSxNQUFHLENBQUNqK0IsNkNBQUMsQ0FBQ20rQixPQUFGLENBQVU3eEIsS0FBVixFQUFpQjR4QixRQUFqQixDQUFKLEVBQStCO0FBQzdCNXhCLFNBQUssR0FBRzR4QixRQUFSO0FBQ0Q7O0FBQ0QsVUFBUXZELE1BQU0sQ0FBQ25zQixJQUFmO0FBQ0UsU0FBSytwQixpRkFBTDtBQUNFanNCLFdBQUssR0FBR3F1QixNQUFNLENBQUNqaEIsT0FBZixDQURGLENBRUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDRixTQUFLOGUsaUZBQUw7QUFDRWxzQixXQUFLLHFCQUNBQSxLQURBLENBQUw7QUFHQTs7QUFDRjtBQUNFQSxXQUFLLEdBQUdBLEtBQVI7QUFDQTtBQWhCSjs7QUFrQkF1dUIsOERBQVksQ0FBQyxlQUFELEVBQWtCdnVCLEtBQWxCLENBQVo7QUFFQSxTQUFPQSxLQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLE1BQU00dkIsYUFBYSxHQUFHO0FBQ3BCc0YsTUFBSSxFQUFFO0FBQ0pqekIsUUFBSSxFQUFFO0FBQ0o3SCxTQUFHLEVBQUU7QUFERDtBQURGLEdBRGM7QUFNcEIrNkIsZUFBYSxFQUFFLEtBTks7QUFPcEJqUyxTQUFPLEVBQUUsS0FQVztBQVFwQmtTLFFBQU0sRUFBRSxFQVJZO0FBU3BCQyxhQUFXLEVBQUUsRUFUTztBQVVwQm5JLFVBQVEsRUFBRSxFQVZVO0FBV3BCQyxVQUFRLEVBQUU7QUFYVSxDQUF0QjtBQWFlLHlFQUFVbnRCLEtBQUssR0FBRzR2QixhQUFsQixFQUFpQ3ZCLE1BQWpDLEVBQXlDO0FBR3RELE1BQUlzRCxhQUFhLEdBQUdqK0IsNkNBQUMsQ0FBQzhMLEdBQUYsQ0FBTWl2QixvREFBWSxDQUFDanZCLEdBQWIsQ0FBaUIsT0FBakIsS0FBNkIsRUFBbkMsRUFBdUMsTUFBdkMsS0FBa0Rvd0IsYUFBdEU7O0FBQ0EsTUFBSWdDLFFBQVEsbUNBQ1A1eEIsS0FETyxHQUVQMnhCLGFBRk8sQ0FBWixDQUpzRCxDQVF0RDs7O0FBRUEsTUFBRyxDQUFDaitCLDZDQUFDLENBQUNtK0IsT0FBRixDQUFVN3hCLEtBQVYsRUFBaUI0eEIsUUFBakIsQ0FBSixFQUErQjtBQUM3QjV4QixTQUFLLEdBQUc0eEIsUUFBUjtBQUNEOztBQUNELFVBQVF2RCxNQUFNLENBQUNuc0IsSUFBZjtBQUNFLFNBQUtvcUIsc0VBQUw7QUFDRXRzQixXQUFLLG1DQUNBQSxLQURBO0FBRUhtMUIscUJBQWEsRUFBRSxJQUZaO0FBR0hELFlBQUksRUFBRTdHLE1BQU0sQ0FBQ2poQjtBQUhWLFFBQUw7QUFLQTs7QUFDRixTQUFLbWYsdUVBQUw7QUFDRXZzQixXQUFLLG1DQUNBQSxLQURBO0FBRUhtMUIscUJBQWEsRUFBRSxLQUZaO0FBR0hELFlBQUksRUFBRTtBQUhILFFBQUw7QUFLQTs7QUFDRixTQUFLdkksOERBQUw7QUFDRTNzQixXQUFLLG1DQUNBQSxLQURBO0FBRUhrMUIsWUFBSSxrQ0FDQ2wxQixLQUFLLENBQUNrMUIsSUFEUDtBQUVGanpCLGNBQUksRUFBRW9zQixNQUFNLENBQUNqaEI7QUFGWDtBQUZELFFBQUw7QUFPQTs7QUFDRixTQUFLb2YsdUVBQUw7QUFDRXhzQixXQUFLLG1DQUNBQSxLQURBO0FBRUhxMUIsbUJBQVcsRUFBRWhILE1BQU0sQ0FBQ2poQjtBQUZqQixRQUFMO0FBSUE7O0FBQ0YsU0FBS3NmLCtEQUFMO0FBQ0Uxc0IsV0FBSyxtQ0FDQUEsS0FEQTtBQUVIa3RCLGdCQUFRLEVBQUVtQixNQUFNLENBQUNqaEI7QUFGZCxRQUFMO0FBSUE7O0FBQ0YsU0FBS3FmLCtEQUFMO0FBQ0V6c0IsV0FBSyxtQ0FDQUEsS0FEQTtBQUVIbXRCLGdCQUFRLEVBQUVrQixNQUFNLENBQUNqaEI7QUFGZCxRQUFMO0FBSUE7O0FBQ0Y7QUFDRTtBQTNDSjs7QUE4Q0FtaEIsOERBQVksQ0FBQyxNQUFELEVBQVN2dUIsS0FBVCxDQUFaO0FBQ0EsU0FBT0EsS0FBUDtBQUVELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkQ7QUFRQTtBQUNBO0FBQ0E7QUFFQSxNQUFNNHZCLGFBQWEsR0FBRztBQUNwQjBGLFNBQU8sRUFBRSxFQURXO0FBRXBCQyxhQUFXLEVBQUUsRUFGTztBQUdwQkMsWUFBVSxFQUFFO0FBSFEsQ0FBdEI7QUFPZSx5RUFBVXgxQixLQUFLLEdBQUc0dkIsYUFBbEIsRUFBaUN2QixNQUFqQyxFQUF5QztBQUd0RDtBQUVBLE1BQUlzRCxhQUFhLEdBQUdqK0IsNkNBQUMsQ0FBQzhMLEdBQUYsQ0FBTWl2QixvREFBWSxDQUFDanZCLEdBQWIsQ0FBaUIsT0FBakIsS0FBNkIsRUFBbkMsRUFBdUMsV0FBdkMsS0FBdURvd0IsYUFBM0U7O0FBQ0EsTUFBSWdDLFFBQVEsbUNBQ1A1eEIsS0FETyxHQUVQMnhCLGFBRk8sQ0FBWjs7QUFJQSxNQUFHLENBQUNqK0IsNkNBQUMsQ0FBQ20rQixPQUFGLENBQVU3eEIsS0FBVixFQUFpQjR4QixRQUFqQixDQUFKLEVBQStCO0FBQzdCNXhCLFNBQUssR0FBRzR4QixRQUFSO0FBQ0Q7O0FBQ0QsTUFBSSxPQUFPNXhCLEtBQVAsS0FBaUIsV0FBckIsRUFBa0M7QUFDaENBLFNBQUssR0FBRyxFQUFSO0FBQ0Q7O0FBRUQsVUFBUXF1QixNQUFNLENBQUNuc0IsSUFBZjtBQUVFLFNBQUtrckIsbUVBQUw7QUFDRSxVQUFJLENBQUNwdEIsS0FBSyxDQUFDczFCLE9BQVgsRUFBb0I7QUFBRXQxQixhQUFLLENBQUNzMUIsT0FBTixHQUFnQixFQUFoQjtBQUFvQjs7QUFDMUN0MUIsV0FBSyxDQUFDczFCLE9BQU4sQ0FBY2ozQixJQUFkLENBQW1CZ3dCLE1BQU0sQ0FBQzk3QixLQUExQjtBQUNBeU4sV0FBSyxxQkFDQUEsS0FEQSxDQUFMO0FBR0E7O0FBQ0YsU0FBS3F0QixzRUFBTDtBQUNFMzVCLG1EQUFDLENBQUMraEMsTUFBRixDQUFTejFCLEtBQUssQ0FBQ3MxQixPQUFmLEVBQXdCO0FBQ3RCSSxjQUFNLEVBQUVySCxNQUFNLENBQUM5N0IsS0FBUCxDQUFhbWpDLE1BREM7QUFFdEJ0d0IsY0FBTSxFQUFFaXBCLE1BQU0sQ0FBQzk3QixLQUFQLENBQWE2UztBQUZDLE9BQXhCOztBQUlBcEYsV0FBSyxxQkFDQUEsS0FEQSxDQUFMO0FBR0E7O0FBRUYsU0FBS3N0Qix1RUFBTDtBQUNFLFVBQUksQ0FBQ3R0QixLQUFLLENBQUN1MUIsV0FBWCxFQUF3QjtBQUFFdjFCLGFBQUssQ0FBQ3UxQixXQUFOLEdBQW9CLEVBQXBCO0FBQXdCOztBQUVsRHYxQixXQUFLLENBQUN1MUIsV0FBTixDQUFrQmwzQixJQUFsQixDQUF1Qmd3QixNQUFNLENBQUM5N0IsS0FBOUI7QUFDQXlOLFdBQUsscUJBQ0FBLEtBREEsQ0FBTDtBQUdBOztBQUNGLFNBQUt1dEIsMEVBQUw7QUFDRTc1QixtREFBQyxDQUFDK2hDLE1BQUYsQ0FBU3oxQixLQUFLLENBQUN1MUIsV0FBZixFQUE0QjtBQUMxQkcsY0FBTSxFQUFFckgsTUFBTSxDQUFDOTdCLEtBQVAsQ0FBYW1qQyxNQURLO0FBRTFCdHdCLGNBQU0sRUFBRWlwQixNQUFNLENBQUM5N0IsS0FBUCxDQUFhNlM7QUFGSyxPQUE1Qjs7QUFJQXBGLFdBQUsscUJBQ0FBLEtBREEsQ0FBTDtBQUdBOztBQUVGLFNBQUt3dEIsdUVBQUw7QUFDRSxVQUFJLENBQUN4dEIsS0FBSyxDQUFDdzFCLFVBQVgsRUFBdUI7QUFBRXgxQixhQUFLLENBQUN3MUIsVUFBTixHQUFtQixFQUFuQjtBQUF1Qjs7QUFDaER4MUIsV0FBSyxDQUFDdzFCLFVBQU4sQ0FBaUJuM0IsSUFBakIsQ0FBc0Jnd0IsTUFBTSxDQUFDOTdCLEtBQTdCO0FBQ0F5TixXQUFLLHFCQUNBQSxLQURBLENBQUw7QUFHQTs7QUFDRixTQUFLeXRCLDBFQUFMO0FBQ0UvNUIsbURBQUMsQ0FBQytoQyxNQUFGLENBQVN6MUIsS0FBSyxDQUFDdzFCLFVBQWYsRUFBMkI7QUFDekJFLGNBQU0sRUFBRXJILE1BQU0sQ0FBQzk3QixLQUFQLENBQWFtakMsTUFESTtBQUV6QkMsaUJBQVMsRUFBRXRILE1BQU0sQ0FBQzk3QixLQUFQLENBQWFtakMsTUFGQztBQUd6QnR3QixjQUFNLEVBQUVpcEIsTUFBTSxDQUFDOTdCLEtBQVAsQ0FBYTZTO0FBSEksT0FBM0I7O0FBS0FwRixXQUFLLHFCQUNBQSxLQURBLENBQUw7QUFJQTs7QUFDRjtBQUNFQSxXQUFLLEdBQUdBLEtBQVI7QUFDQTtBQXpESjs7QUEyREF1dUIsOERBQVksQ0FBQyxXQUFELEVBQWN2dUIsS0FBZCxDQUFaO0FBRUEsU0FBT0EsS0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsTUFBTTR2QixhQUFhLEdBQUc7QUFDbEJnRyxTQUFPLEVBQUU7QUFEUyxDQUF0QjtBQUllLHlFQUFVNTFCLEtBQUssR0FBRzR2QixhQUFsQixFQUFpQ3ZCLE1BQWpDLEVBQXlDO0FBRXBEO0FBRUEsTUFBSXNELGFBQWEsR0FBR2orQiw2Q0FBQyxDQUFDOEwsR0FBRixDQUFNaXZCLG9EQUFZLENBQUNqdkIsR0FBYixDQUFpQixPQUFqQixLQUE2QixFQUFuQyxFQUF1QyxTQUF2QyxLQUFxRG93QixhQUF6RTs7QUFDQSxNQUFJZ0MsUUFBUSxtQ0FDTDV4QixLQURLLEdBRUwyeEIsYUFGSyxDQUFaOztBQUlBLE1BQUcsQ0FBQ2orQiw2Q0FBQyxDQUFDbStCLE9BQUYsQ0FBVTd4QixLQUFWLEVBQWlCNHhCLFFBQWpCLENBQUosRUFBK0I7QUFDN0I1eEIsU0FBSyxHQUFHNHhCLFFBQVI7QUFDRDs7QUFDRCxVQUFRdkQsTUFBTSxDQUFDbnNCLElBQWY7QUFDSSxTQUFLOHJCLHFFQUFMO0FBQ0lodUIsV0FBSyxtQ0FDRUEsS0FERjtBQUVENDFCLGVBQU8sRUFBRXZILE1BQU0sQ0FBQ2poQjtBQUZmLFFBQUw7QUFJQTs7QUFDSixTQUFLNmdCLHFFQUFMO0FBQ0lqdUIsV0FBSyxtQ0FDRUEsS0FERjtBQUVENDFCLGVBQU8sRUFBRTtBQUZSLFFBQUw7QUFJQTs7QUFFSjtBQUNJNTFCLFdBQUssR0FBR0EsS0FBUjtBQUNBO0FBaEJSOztBQW1CQXV1Qiw4REFBWSxDQUFDLFNBQUQsRUFBWXZ1QixLQUFaLENBQVo7QUFFQSxTQUFPQSxLQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxNQUFNNjFCLGNBQWMsR0FBSUMsVUFBRCxJQUFnQjtBQUNyQyxZQUEyQztBQUN6QyxVQUFNO0FBQUVDO0FBQUYsUUFBMEI3akMsbUJBQU8sQ0FBQywwREFBRCxDQUF2Qzs7QUFDQSxXQUFPNmpDLG1CQUFtQixDQUFDQyw2REFBZSxDQUFDLEdBQUdGLFVBQUosQ0FBaEIsQ0FBMUI7QUFDRDs7QUFDRCxTQUFPRSw2REFBZSxDQUFDLEdBQUdGLFVBQUosQ0FBdEI7QUFDRCxDQU5EOztBQVFBLE1BQU1HLGVBQWUsR0FBR0MsNkRBQWUsQ0FBQztBQUN0Q0MsMEVBRHNDO0FBRXRDQyxvRkFGc0M7QUFHdENwRSw4RkFIc0M7QUFJdENxRSwwRUFKc0M7QUFLdENDLDRFQUxzQztBQU10Q0Msa0ZBTnNDO0FBT3RDbEMsNEZBUHNDO0FBUXRDbUMscUZBUnNDO0FBU3RDQywrRkFUc0M7QUFVdENDLCtGQVZzQztBQVd0Q0MsdUZBWHNDO0FBWXRDZixtRkFac0M7QUFhdEMzekIsNkVBQUlBO0FBYmtDLENBQUQsQ0FBdkM7O0FBZ0JBLE1BQU1xc0IsT0FBTyxHQUFHLENBQUN0dUIsS0FBRCxFQUFRcXVCLE1BQVIsS0FBbUI7QUFDakMsTUFBSUEsTUFBTSxDQUFDbnNCLElBQVAsS0FBZ0IwMEIsMERBQXBCLEVBQTZCO0FBQzNCLFVBQU1DLFNBQVMsbUNBQ1Y3MkIsS0FEVSxHQUVWcXVCLE1BQU0sQ0FBQ2poQixPQUZHLENBQWY7O0FBSUEsUUFBSXBOLEtBQUssQ0FBQzRDLEtBQU4sQ0FBWUEsS0FBaEIsRUFBdUJpMEIsU0FBUyxDQUFDajBCLEtBQVYsQ0FBZ0JBLEtBQWhCLEdBQXdCNUMsS0FBSyxDQUFDNEMsS0FBTixDQUFZQSxLQUFwQyxDQUxJLENBS3NDOztBQUNqRSxXQUFPaTBCLFNBQVA7QUFDRCxHQVBELE1BT087QUFDTCxXQUFPWixlQUFlLENBQUNqMkIsS0FBRCxFQUFRcXVCLE1BQVIsQ0FBdEI7QUFDRDtBQUNGLENBWEQ7O0FBYUEsTUFBTXlJLFNBQVMsR0FBRyxNQUFNO0FBQ3RCLFNBQU9DLHlEQUFXLENBQUN6SSxPQUFELEVBQVV1SCxjQUFjLENBQUMsQ0FBQ21CLGtEQUFELENBQUQsQ0FBeEIsQ0FBbEI7QUFDRCxDQUZEOztBQU1PLE1BQU1qZixPQUFPLEdBQUdrZix3RUFBYSxDQUFDSCxTQUFELENBQTdCO0FBRUEsTUFBTUksS0FBSyxHQUFHSixTQUFTLEVBQXZCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRVAsOEQ7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCB7IGlzSW50ZWdlciwgcmFuZ2UgfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHF1ZXJ5U3RyaW5nIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5pbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZSc7XG5pbXBvcnQgbG9jYWxTdG9yYWdlIGZyb20gJ2xvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0IHsgc3RhdGVQZXJzaXN0QWN0aW9ucyB9IGZyb20gXCIuL3JlZHV4L2NvbmZpZ1wiO1xuaW1wb3J0IHsgZ2V0Q2FyQnJhbmQgfSBmcm9tIFwiLi9wYXJhbXMvY2FyQnJhbmRzTGlzdFwiO1xuaW1wb3J0IHsgZ2V0U3RhdGUgfSBmcm9tIFwiLi9wYXJhbXMvc3RhdGVMaXN0XCI7XG5pbXBvcnQgeyBnZXRCb2R5VHlwZSB9IGZyb20gXCIuL3BhcmFtcy9ib2R5VHlwZUxpc3RcIjtcbmltcG9ydCB7IGdldEZ1ZWxUeXBlIH0gZnJvbSBcIi4vcGFyYW1zL2Z1ZWxUeXBlTGlzdFwiO1xuaW1wb3J0IHsgZ2V0Q29sb3IgfSBmcm9tIFwiLi9wYXJhbXMvY29sb3JMaXN0XCI7XG5pbXBvcnQgeyBjaGVja0VudlJldHVybkNtc1VybCB9IGZyb20gXCIuL2Z1bmN0aW9uQ29udGVudFwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi9mZWF0aGVyc1wiO1xuaW1wb3J0IHsgcGFyc2VUYWdTdHJpbmdUb1BsYWluU3RyaW5nIH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYXJGcmVhay9jb25maWdcIjtcbmltcG9ydCB7IGdldFN0cmVhbVVybCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbGl2ZS9jb25maWdcIjtcblxudmFyIG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xuXG5jb25zdCBkZWZhdWx0UmFuZ2VTbWFsbGVyID0gJzw9J1xuY29uc3QgZGVmYXVsdFJhbmdlQmlnZ2VyID0gJz49J1xuY29uc3QgYXZhaWxhYmxlRmlsdGVycyA9IFsnbWFrZScsICdtb2RlbCcsICd0aXRsZScsICdjb25kaXRpb24nLCAndHJhbnNtaXNzaW9uJywgJ3N0YXRlJywgJ2FyZWEnLCAncHJpY2VSYW5nZScsICd5ZWFyUmFuZ2UnLCAnbWlsZWFnZVJhbmdlJywgJ2VuZ2luZUNhcGFjaXR5UmFuZ2UnLCAnYm9keVR5cGUnLCAnY29sb3InLCAnZnVlbFR5cGUnLCAncmVnaXN0cmF0aW9uVXJsJywgJ3JlYWR5U3RvY2snLCAnY2FyMzYwVmlldycsICdidXNpbmVzc1R5cGUnXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyQW5kU3BhY2UodmFsdWUpIHtcblxuICAgIC8vdG8gYXJyYXlcbiAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcnKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdmFsdWUuZmlsdGVyKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuICFwYXJzZUludChpdGVtKSAmJiBwYXJzZUludChpdGVtKSAhPSAwICYmIGl0ZW0gIT0gJyAnO1xuICAgICAgICAgICAgfSkubGVuZ3RoID4gMFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZSh2YWx1ZSwgZm9ybWF0KSB7XG5cbiAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICBpZiAoIWlzVmFsaWREYXRlKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmIChmb3JtYXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZvcm1hdCA9IFwiREQvTU0vWVlZWVwiXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtb21lbnQodmFsdWUpLmZvcm1hdChmb3JtYXQpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXROdW1iZXIodmFsdWUsIHVuaXQsIHJvdW5kLCBmaXhlZFBvaW50LCB0cmltKSB7XG5cbiAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICAgICAgICAvL2RlZmF1bHQgd2lsbCBhdXRvIHJvdW5kIHVwIGlmIHJvdW5kIGRpZG4ndCBwYXNzZWQgaW5cbiAgICAgICAgICAgIC8vZGVmYXVsdCBmaXhlZFBvaW50IDBcbiAgICAgICAgICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJrXCI6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbnVtYmVyVG9GaXhlZCh2YWx1ZSAvIDEwMDAsIHJvdW5kLCBmaXhlZFBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm1cIjpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBudW1iZXJUb0ZpeGVkKHZhbHVlIC8gMTAwMDAwMCwgcm91bmQsIGZpeGVkUG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiYlwiOlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bWJlclRvRml4ZWQodmFsdWUgLyAxMDAwMDAwMDAwLCByb3VuZCwgZml4ZWRQb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJhdXRvXCI6XG4gICAgICAgICAgICAgICAgICAgIGxldCB1bml0cyA9IFtbJycsIDFdLCBbJ2snLCAxMDAwXSwgWydtJywgMTAwMDAwMF0sIFsnYicsIDEwMDAwMDAwMDBdXTtcbiAgICAgICAgICAgICAgICAgICAgLy9nZXQgY2xvc2VzdCB1bml0XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZm9yRWFjaChfLnJldmVyc2UodW5pdHMpLCBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgLyBpdGVtWzFdID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBudW1iZXJUb0ZpeGVkKHZhbHVlIC8gaXRlbVsxXSwgcm91bmQsIGZpeGVkUG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bml0ID0gaXRlbVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBudW1iZXJUb0ZpeGVkKHZhbHVlLCByb3VuZCwgZml4ZWRQb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZm9ybWF0ZWRWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgbGV0IHByZWZpeCA9IGluc2VydEJldHdlZW4ocGFyc2VJbnQodmFsdWUpLCAzLCAnLCcsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgbGV0IHBvc3RmaXggPSB2YWx1ZS50b1N0cmluZygpLnNwbGl0KCcuJylbMV07XG4gICAgICAgICAgICBmb3JtYXRlZFZhbHVlICs9IHByZWZpeDtcbiAgICAgICAgICAgIGlmIChwb3N0Zml4KSB7XG4gICAgICAgICAgICAgICAgZm9ybWF0ZWRWYWx1ZSArPSAnLicgKyBwb3N0Zml4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHJpbSkge1xuICAgICAgICAgICAgICAgIGZvcm1hdGVkVmFsdWUgPSB0cmltU3RyaW5nTnVtYmVyKGZvcm1hdGVkVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHVuaXQpIHtcbiAgICAgICAgICAgICAgICBmb3JtYXRlZFZhbHVlICs9IHVuaXQ7XG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0ZWRWYWx1ZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG51bWJlclRvRml4ZWQodmFsdWUsIHJvdW5kLCBmaXhlZFBvaW50LCBmcm9tRnJvbnQpIHtcblxuICAgIGlmICh2YWx1ZSAhPSBudWxsICYmICFpc05hTihwYXJzZUZsb2F0KHZhbHVlKSkpIHtcblxuICAgICAgICBpZiAoaXNOYU4ocGFyc2VJbnQoZml4ZWRQb2ludCkpKSB7XG4gICAgICAgICAgICAvL0RlZmF1bHRcbiAgICAgICAgICAgIGZpeGVkUG9pbnQgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZml4ZWRQb2ludCA9IHBhcnNlSW50KGZpeGVkUG9pbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJvdW5kID09IG51bGwpIHtcbiAgICAgICAgICAgIHJvdW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmcm9tRnJvbnQpIHtcbiAgICAgICAgICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZVswXSkge1xuICAgICAgICAgICAgICAgIC8vIGlmICh2YWx1ZVswXS5sZW5ndGggPiBmaXhlZFBvaW50KSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHZhbHVlWzBdID0gdmFsdWVbMF0uc2xpY2UodmFsdWVbMF0ubGVuZ3RoIC0gZml4ZWRQb2ludCk7XG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlWzBdLmxlbmd0aCA8IGZpeGVkUG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5mb3JFYWNoKF8ucmFuZ2UoZml4ZWRQb2ludCAtIHZhbHVlWzBdLmxlbmd0aCksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlWzBdID0gJzAnICsgdmFsdWVbMF07XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChyb3VuZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b0ZpeGVkKGZpeGVkUG9pbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlWzFdLmxlbmd0aCA+IGZpeGVkUG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlWzFdID0gdmFsdWVbMV0uc2xpY2UoMCwgZml4ZWRQb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVbMV0ubGVuZ3RoIDwgZml4ZWRQb2ludCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5mb3JFYWNoKF8ucmFuZ2UoZml4ZWRQb2ludCAtIHZhbHVlWzBdLmxlbmd0aCksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVswXSA9IHZhbHVlWzBdICsgJzAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlLmpvaW4oXCIuXCIpKS50b0ZpeGVkKGZpeGVkUG9pbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbn1cblxuLy9SZW1vdmUgcHJlZml4IDAgYW5kIHBvc3RmaXggMFxuZXhwb3J0IGZ1bmN0aW9uIHRyaW1TdHJpbmdOdW1iZXIodmFsdWUpIHtcblxuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG5cbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnNwbGl0KCcuJyk7XG4gICAgICAgIGxldCBwcmVmaXggPSB2YWx1ZVswXTtcbiAgICAgICAgbGV0IHBvc3RmaXggPSB2YWx1ZVsxXTtcblxuICAgICAgICBpZiAocHJlZml4ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChwcmVmaXgubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGxldCBwcmVmaXhBcnIgPSBwcmVmaXguc3BsaXQoXCJcIik7XG4gICAgICAgICAgICAgICAgbGV0IGRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBwcmVmaXhBcnIuc29tZShudW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobnVtID09ICcwJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jdXQgb3V0IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeCA9IHByZWZpeC5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9uZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3N0Zml4ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChwb3N0Zml4Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgcG9zdGZpeEFyciA9IHBvc3RmaXguc3BsaXQoXCJcIikucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgIGxldCBkb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcG9zdGZpeEFyci5zb21lKG51bSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChudW0gPT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2N1dCBvdXQgMFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdGZpeCA9IHBvc3RmaXguc3Vic3RyaW5nKDAsIHBvc3RmaXgubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9uZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zdGZpeCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeCArIFwiLlwiICsgcG9zdGZpeDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBwcmVmaXg7XG4gICAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldmVyc2VTdHJpbmcodmFsdWUpIHtcblxuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIHZhciBzdHJBcnJheSA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoXCJcIik7XG4gICAgICAgIHN0ckFycmF5ID0gc3RyQXJyYXkucmV2ZXJzZSgpO1xuICAgICAgICByZXR1cm4gc3RyQXJyYXkuam9pbihcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ2FyZFR5cGUobnVtYmVyKSB7XG4gICAgaWYgKG51bWJlciAhPSBudWxsKSB7XG5cbiAgICAgICAgbnVtYmVyID0gbnVtYmVyLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgICAgIC8vIHZpc2FcbiAgICAgICAgdmFyIHJlID0gbmV3IFJlZ0V4cChcIl40XCIpO1xuICAgICAgICBpZiAobnVtYmVyLm1hdGNoKHJlKSAhPSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIFwiVklTQVwiO1xuXG4gICAgICAgIC8vIE1hc3RlcmNhcmQgXG4gICAgICAgIC8vIFVwZGF0ZWQgZm9yIE1hc3RlcmNhcmQgMjAxNyBCSU5zIGV4cGFuc2lvblxuICAgICAgICBpZiAoL14oNVsxLTVdWzAtOV17MTR9fDIoMjJbMS05XVswLTldezEyfXwyWzMtOV1bMC05XXsxM318WzMtNl1bMC05XXsxNH18N1swLTFdWzAtOV17MTN9fDcyMFswLTldezEyfSkpJC8udGVzdChudW1iZXIpKVxuICAgICAgICAgICAgcmV0dXJuIFwiTUFTVEVSQ0FSRFwiO1xuXG4gICAgICAgIC8vIEFNRVhcbiAgICAgICAgcmUgPSBuZXcgUmVnRXhwKFwiXjNbNDddXCIpO1xuICAgICAgICBpZiAobnVtYmVyLm1hdGNoKHJlKSAhPSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIFwiQU1FUklDQU5FWFBSRVNTXCI7XG5cbiAgICAgICAgLy8gRGlzY292ZXJcbiAgICAgICAgcmUgPSBuZXcgUmVnRXhwKFwiXig2MDExfDYyMigxMls2LTldfDFbMy05XVswLTldfFsyLThdWzAtOV17Mn18OVswLTFdWzAtOV18OTJbMC01XXw2NFs0LTldKXw2NSlcIik7XG4gICAgICAgIGlmIChudW1iZXIubWF0Y2gocmUpICE9IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gXCJESVNDT1ZFUlwiO1xuXG4gICAgICAgIC8vIERpbmVyc1xuICAgICAgICByZSA9IG5ldyBSZWdFeHAoXCJeMzZcIik7XG4gICAgICAgIGlmIChudW1iZXIubWF0Y2gocmUpICE9IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gXCJESU5FUlNcIjtcblxuICAgICAgICAvLyBEaW5lcnMgLSBDYXJ0ZSBCbGFuY2hlXG4gICAgICAgIHJlID0gbmV3IFJlZ0V4cChcIl4zMFswLTVdXCIpO1xuICAgICAgICBpZiAobnVtYmVyLm1hdGNoKHJlKSAhPSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIFwiRElORVJTQ0FSVEVCTEFOQ0hFXCI7XG5cbiAgICAgICAgLy8gSkNCXG4gICAgICAgIHJlID0gbmV3IFJlZ0V4cChcIl4zNSgyWzg5XXxbMy04XVswLTldKVwiKTtcbiAgICAgICAgaWYgKG51bWJlci5tYXRjaChyZSkgIT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiBcIkpDQlwiO1xuXG4gICAgICAgIC8vIFZpc2EgRWxlY3Ryb25cbiAgICAgICAgcmUgPSBuZXcgUmVnRXhwKFwiXig0MDI2fDQxNzUwMHw0NTA4fDQ4NDR8NDkxKDN8NykpXCIpO1xuICAgICAgICBpZiAobnVtYmVyLm1hdGNoKHJlKSAhPSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIFwiVklTQUVMRUNUUk9OXCI7XG5cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOdWxsRnJvbUFycmF5KHZhbHVlKSB7XG5cbiAgICBpZiAobm90RW1wdHlMZW5ndGgodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtICE9IG51bGw7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWREYXRlKHZhbHVlKSB7XG5cbiAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBEYXRlXVwiKSB7XG4gICAgICAgICAgICAvLyBpdCBpcyBhIGRhdGVcbiAgICAgICAgICAgIGlmIChpc05hTih2YWx1ZS52YWx1ZU9mKCkpKSB7ICAvLyB2YWx1ZS52YWx1ZU9mKCkgY291bGQgYWxzbyB3b3JrXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZVRpbWVSYW5nZShkYXRlMSwgZGF0ZTIsIHVuaXQsIHByZWNpc2UpIHtcblxuICAgIGlmIChkYXRlMSAhPSBudWxsKSB7XG4gICAgICAgIGlmIChpc1ZhbGlkRGF0ZShkYXRlMSkpIHtcbiAgICAgICAgICAgIGRhdGUxID0gbW9tZW50KGRhdGUxKTtcblxuICAgICAgICAgICAgaWYgKGRhdGUyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZERhdGUoZGF0ZTIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGUyID0gbW9tZW50KGRhdGUyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGUyID0gbW9tZW50KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgICAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgICAgICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5kaWZmZXJlbmNlID0gZGF0ZTEuZGlmZihkYXRlMiwgJ3llYXJzJywgcHJlY2lzZSk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEudW5pdCA9IHVuaXQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5kaWZmZXJlbmNlID0gZGF0ZTEuZGlmZihkYXRlMiwgJ21vbnRocycsIHByZWNpc2UpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnVuaXQgPSB1bml0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICd3ZWVrJzpcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5kaWZmZXJlbmNlID0gZGF0ZTEuZGlmZihkYXRlMiwgJ3dlZWtzJywgcHJlY2lzZSk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEudW5pdCA9IHVuaXQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZGlmZmVyZW5jZSA9IGRhdGUxLmRpZmYoZGF0ZTIsICdkYXlzJywgcHJlY2lzZSk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEudW5pdCA9IHVuaXQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgICAgICAgICAgICBkYXRhLmRpZmZlcmVuY2UgPSBkYXRlMS5kaWZmKGRhdGUyLCAnaG91cnMnLCBwcmVjaXNlKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS51bml0ID0gdW5pdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbWludXRlJzpcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5kaWZmZXJlbmNlID0gZGF0ZTEuZGlmZihkYXRlMiwgJ21pbnV0ZXMnLCBwcmVjaXNlKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS51bml0ID0gdW5pdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5kaWZmZXJlbmNlID0gZGF0ZTEuZGlmZihkYXRlMiwgJ3NlY29uZHMnLCBwcmVjaXNlKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS51bml0ID0gdW5pdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAvL2F1dG8gZ2V0IG5lYXJlc3QgMVxuICAgICAgICAgICAgICAgICAgICBsZXQgc2VjdGlvbnMgPSBbJ3llYXInLCAnbW9udGgnLCAnd2VlaycsICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJ11cbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkU2VjdGlvbiA9IHNlY3Rpb25zLmZpbmQoZnVuY3Rpb24gKHNlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLmFicyhkYXRlMS5kaWZmKGRhdGUyLCBzZWN0aW9uICsgJ3MnLCB0cnVlKSkgPj0gMTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkU2VjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5kaWZmZXJlbmNlID0gZGF0ZTEuZGlmZihkYXRlMiwgc2VsZWN0ZWRTZWN0aW9uICsgJ3MnLCBwcmVjaXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudW5pdCA9IHNlbGVjdGVkU2VjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZGlmZmVyZW5jZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnVuaXQgPSAnc2Vjb25kJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0TWlsbGlTZWNvbmRzVG9UaW1lKG1pbGxpc2Vjb25kLCBtaW5Vbml0KSB7XG5cbiAgICBpZiAobWlsbGlzZWNvbmQgIT0gbnVsbCAmJiBpc1ZhbGlkTnVtYmVyKHBhcnNlSW50KG1pbGxpc2Vjb25kKSkpIHtcblxuICAgICAgICBsZXQgc2Vjb25kID0gMCwgbWludXRlID0gMCwgaG91ciA9IDA7XG4gICAgICAgIGxldCBmaW5hbFRpbWUgPSAnJztcbiAgICAgICAgbWlsbGlzZWNvbmQgPSBwYXJzZUludChtaWxsaXNlY29uZCk7XG5cbiAgICAgICAgaG91ciA9IG51bWJlclRvRml4ZWQobW9tZW50LmR1cmF0aW9uKG1pbGxpc2Vjb25kKS5ob3VycygpLCBmYWxzZSwgMiwgdHJ1ZSk7XG4gICAgICAgIG1pbnV0ZSA9IG51bWJlclRvRml4ZWQobW9tZW50LmR1cmF0aW9uKG1pbGxpc2Vjb25kKS5taW51dGVzKCksIGZhbHNlLCAyLCB0cnVlKTtcbiAgICAgICAgc2Vjb25kID0gbnVtYmVyVG9GaXhlZChtb21lbnQuZHVyYXRpb24obWlsbGlzZWNvbmQpLnNlY29uZHMoKSwgZmFsc2UsIDIsIHRydWUpO1xuXG4gICAgICAgIHN3aXRjaCAobWluVW5pdCkge1xuICAgICAgICAgICAgY2FzZSAnbWludXRlJzpcbiAgICAgICAgICAgICAgICBpZiAoaG91ciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZmluYWxUaW1lID0gYCR7aG91cn06JHttaW51dGV9OiR7c2Vjb25kfWA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmluYWxUaW1lID0gYCR7bWludXRlfToke3NlY29uZH1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgICAgICAgIGZpbmFsVGltZSA9IGAke2hvdXJ9OiR7bWludXRlfToke3NlY29uZH1gO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmIChob3VyID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBmaW5hbFRpbWUgPSBgJHtob3VyfToke21pbnV0ZX06JHtzZWNvbmR9YDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1pbnV0ZSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZmluYWxUaW1lID0gYCR7bWludXRlfToke3NlY29uZH1gO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsVGltZSA9IGAke3NlY29uZH1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmaW5hbFRpbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG59XG5leHBvcnQgZnVuY3Rpb24gaXNFeHBpcmVkKGRhdGUsIGFzcGVjdCkge1xuXG4gICAgaWYgKGFzcGVjdCA9PSBudWxsKSB7XG4gICAgICAgIGFzcGVjdCA9ICdzZWNvbmQnO1xuICAgIH1cblxuICAgIGlmIChkYXRlICE9IG51bGwgJiYgaXNWYWxpZERhdGUoZGF0ZSkpIHtcbiAgICAgICAgdmFyIHRvZGF5ID0gbW9tZW50KCk7XG4gICAgICAgIGRhdGUgPSBtb21lbnQoZGF0ZSk7XG4gICAgICAgIHJldHVybiB0b2RheS5pc0FmdGVyKGRhdGUsIGFzcGVjdCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb0NhcmRGb3JtYXQodmFsdWUpIHtcblxuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICAgICAgdmFsdWUgPSBpbnNlcnRCZXR3ZWVuKHZhbHVlLCA0LCAnICcpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvRXhwaXJlZERhdGVGb3JtYXQodmFsdWUpIHtcblxuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIHZhciBzdHIgPSB2YWx1ZS5zcGxpdCgnJyk7XG4gICAgICAgIGlmIChzdHIubGVuZ3RoIDwgMykge1xuICAgICAgICAgICAgaWYgKHN0clsxXSA9PSAnLycpIHtcbiAgICAgICAgICAgICAgICBzdHIuc3BsaWNlKDAsIDAsICcwJyk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBzdHIuam9pbihcIlwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKCcvJywgJycpO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gaW5zZXJ0QmV0d2Vlbih2YWx1ZSwgMiwgJy8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0QmV0d2Vlbih2YWx1ZSwgc3BhY2UsIGNoYXIsIGZyb21CYWNrLCBzdG9wQXRFbmQpIHtcblxuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIGlmIChpc05hTihwYXJzZUludChzcGFjZSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZnJvbUJhY2spIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHJldmVyc2VTdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG9yaXN0ciA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJycpO1xuICAgICAgICAgICAgdmFyIGxlbmd0aCA9IG9yaXN0ci5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgYWRkZWRzcGFjZWNvdW50ID0gMTtcbiAgICAgICAgICAgIHNwYWNlID0gcGFyc2VJbnQoc3BhY2UpO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPSAwICYmIChpbmRleCArIDEpICUgc3BhY2UgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcEF0RW5kICYmIGluZGV4ID09IGxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9yaXN0ci5zcGxpY2UoaW5kZXggKyBhZGRlZHNwYWNlY291bnQsIDAsIGNoYXIpO1xuICAgICAgICAgICAgICAgICAgICBhZGRlZHNwYWNlY291bnQgPSBhZGRlZHNwYWNlY291bnQgKyAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmcm9tQmFjaykge1xuICAgICAgICAgICAgICAgIG9yaXN0ciA9IG9yaXN0ci5yZXZlcnNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3Jpc3RyLmpvaW4oXCJcIik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrU3VwcG9ydGVkQ2FyZFR5cGUoY2FyZCkge1xuICAgIGlmIChjYXJkICE9IG51bGwpIHtcbiAgICAgICAgLy8gdmlzYVxuICAgICAgICBpZiAoY2FyZCA9PSAnVklTQScpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNhcmQgPT0gJ01BU1RFUkNBUkQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYXJkID09ICdWSVNBRUxFQ1RST04nKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYXJkID09ICdBTUVSSUNBTkVYUFJFU1MnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkTnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHZhbHVlKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNFeHBpcnlEYXRlRm9ybWF0KHZhbHVlKSB7XG5cbiAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAvL3RvIGFycmF5XG4gICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJycpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB2YWx1ZS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0gIT0gJy8nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAhcGFyc2VJbnQoaXRlbSkgJiYgcGFyc2VJbnQoaXRlbSkgIT0gMDtcbiAgICAgICAgICAgIH0pLmxlbmd0aCA+IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0QnlEZXNjKGRhdGEsIGNvbCkge1xuXG4gICAgaWYgKGRhdGEgJiYgY29sKSB7XG4gICAgICAgIHJldHVybiBkYXRhLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIGlmIChfLmlzUGxhaW5PYmplY3QoYSkgfHwgXy5pc1BsYWluT2JqZWN0KGIpIHx8IF8uaXNBcnJheShhKSB8fCBfLmlzQXJyYXkoYikpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbCkge1xuICAgICAgICAgICAgICAgICAgICBjb2wgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYVtjb2xdIDwgYltjb2xdKSByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICBpZiAoYVtjb2xdID4gYltjb2xdKSByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChhIDwgYikgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgaWYgKGEgPiBiKSByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0QnlEYXRlRGVzYyhkYXRhLCBjb2wpIHtcblxuICAgIGlmIChkYXRhICYmIGNvbCkge1xuICAgICAgICByZXR1cm4gZGF0YS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICBpZiAobW9tZW50KGFbY29sXSkuaXNCZWZvcmUobW9tZW50KGJbY29sXSkpKSByZXR1cm4gMTtcbiAgICAgICAgICAgIGlmIChtb21lbnQoYVtjb2xdKS5pc0FmdGVyKG1vbWVudChiW2NvbF0pKSkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRGF0YShkYXRhLCBjb2wsIHZhbCkge1xuICAgIHJldHVybiBkYXRhLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbVtjb2xdID09IHZhbDtcbiAgICB9KVxufVxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVTdHJpbmdOdW1iZXIoc3RyaW5nLCBzdGFydCwgZW5kKSB7XG4gICAgaWYgKHN0cmluZykge1xuICAgICAgICB2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcblxuICAgICAgICAvL0dldCByZXN0IHBhcnRcbiAgICAgICAgdmFyIHN0YXJ0cGFydCA9ICcnO1xuICAgICAgICB2YXIgZW5kcGFydCA9ICcnO1xuICAgICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihzdGFydCkgJiYgTnVtYmVyLmlzSW50ZWdlcihlbmQpKSB7XG4gICAgICAgICAgICBzdGFydHBhcnQgPSBzdHJpbmcuc2xpY2UoMCwgc3RhcnQpO1xuICAgICAgICAgICAgZW5kcGFydCA9IHN0cmluZy5zbGljZShsZW5ndGggLSAobGVuZ3RoIC0gZW5kKSwgbGVuZ3RoKTtcbiAgICAgICAgfSBlbHNlIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHN0YXJ0KSkge1xuICAgICAgICAgICAgc3RhcnRwYXJ0ID0gc3RyaW5nLnNsaWNlKDAsIHN0YXJ0KTtcbiAgICAgICAgICAgIGVuZHBhcnQgPSAnJztcbiAgICAgICAgfSBlbHNlIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGVuZCkpIHtcbiAgICAgICAgICAgIHN0YXJ0cGFydCA9ICcnO1xuICAgICAgICAgICAgZW5kcGFydCA9IHN0cmluZy5zbGljZShsZW5ndGggLSAobGVuZ3RoIC0gZW5kKSwgbGVuZ3RoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICAgIH1cblxuICAgICAgICAvL0dldCBkZXNpcmUgY29udmVydCBwYXJ0XG4gICAgICAgIHZhciBjb252ZXJ0cGFydCA9ICcnO1xuICAgICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihzdGFydCkgJiYgTnVtYmVyLmlzSW50ZWdlcihlbmQpKSB7XG4gICAgICAgICAgICBjb252ZXJ0cGFydCA9IHN0cmluZy5zbGljZShzdGFydCwgZW5kKTtcbiAgICAgICAgfSBlbHNlIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHN0YXJ0KSkge1xuICAgICAgICAgICAgY29udmVydHBhcnQgPSBzdHJpbmcuc2xpY2Uoc3RhcnQpXG4gICAgICAgIH0gZWxzZSBpZiAoTnVtYmVyLmlzSW50ZWdlcihlbmQpKSB7XG4gICAgICAgICAgICBjb252ZXJ0cGFydCA9IHN0cmluZy5zbGljZSgwLCBlbmQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgLy90byBhcnJheVxuICAgICAgICBjb252ZXJ0cGFydCA9IGNvbnZlcnRwYXJ0LnNwbGl0KCcnKTtcbiAgICAgICAgY29udmVydHBhcnQgPSBjb252ZXJ0cGFydC5tYXAoZnVuY3Rpb24gKGNoYXIpIHtcbiAgICAgICAgICAgIGlmIChpc05hTihwYXJzZUludChjaGFyKSkgfHwgIXBhcnNlSW50KGNoYXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoYXI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnKic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy90byBzdHJpbmdcbiAgICAgICAgY29udmVydHBhcnQgPSBjb252ZXJ0cGFydC5qb2luKFwiXCIpO1xuXG4gICAgICAgIHJldHVybiBzdGFydHBhcnQgKyBjb252ZXJ0cGFydCArIGVuZHBhcnQ7XG5cblxuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG59XG5leHBvcnQgZnVuY3Rpb24gbm90RW1wdHlMZW5ndGgoZGF0YSkge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpICYmIGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoZGF0YSkgJiYgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5TGVuZ3RoQ291bnQoZGF0YSkge1xuXG4gICAgaWYgKG5vdEVtcHR5TGVuZ3RoKGRhdGEpICYmIEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc3luY0RlZmF1bHREZWxpdmVyeShkYXRhLCBpZCkge1xuICAgIHJldHVybiBkYXRhLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoaXRlbS5faWQpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLl9pZCAhPSBpZCkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlzRGVmYXVsdERlbGl2ZXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaXNEZWZhdWx0RGVsaXZlcnkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW0uaXNEZWZhdWx0RGVsaXZlcnkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN5bmNEZWZhdWx0QmlsbGluZyhkYXRhLCBpZCkge1xuICAgIHJldHVybiBkYXRhLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoaXRlbS5faWQpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLl9pZCAhPSBpZCkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlzRGVmYXVsdEJpbGxpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pc0RlZmF1bHRCaWxsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtLmlzRGVmYXVsdEJpbGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSlcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc3luY0RlZmF1bHRDYXJkKGRhdGEsIGlkKSB7XG4gICAgcmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtLl9pZCkge1xuICAgICAgICAgICAgaWYgKGl0ZW0uX2lkICE9IGlkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaXNEZWZhdWx0Q2FyZCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmlzRGVmYXVsdENhcmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW0uaXNEZWZhdWx0Q2FyZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9KVxufVxuZXhwb3J0IGZ1bmN0aW9uIHN5bmNEZWZhdWx0QmFuayhkYXRhLCBpZCkge1xuICAgIHJldHVybiBkYXRhLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoaXRlbS5faWQpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLl9pZCAhPSBpZCkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlzRGVmYXVsdEJhbmspIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pc0RlZmF1bHRCYW5rID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtLmlzRGVmYXVsdEJhbmsgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2F2ZWRXaXNoTGlzdChkYXRhLCBpZCkge1xuICAgIGlmIChkYXRhICYmIGlkKSB7XG4gICAgICAgIHZhciBjaGVjayA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5wcm9kdWN0SWQgPT0gaWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjaGVjay5sZW5ndGggPiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRm9sbG93ZWQoZGF0YSwgaWQpIHtcbiAgICBpZiAoZGF0YSAmJiBpZCkge1xuICAgICAgICB2YXIgY2hlY2sgPSBkYXRhLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uY29tcGFueUlkID09IGlkO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY2hlY2subGVuZ3RoID4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWVwRXF1YWwob2JqZWN0MSwgb2JqZWN0Mikge1xuICAgIGlmIChvYmplY3QxICYmIG9iamVjdDIpIHtcbiAgICAgICAgY29uc3Qga2V5czEgPSBPYmplY3Qua2V5cyhvYmplY3QxKTtcbiAgICAgICAgY29uc3Qga2V5czIgPSBPYmplY3Qua2V5cyhvYmplY3QyKTtcblxuICAgICAgICBpZiAoa2V5czEubGVuZ3RoICE9PSBrZXlzMi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMxKSB7XG4gICAgICAgICAgICBjb25zdCB2YWwxID0gb2JqZWN0MVtrZXldO1xuICAgICAgICAgICAgY29uc3QgdmFsMiA9IG9iamVjdDJba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IGFyZU9iamVjdHMgPSBpc09iamVjdCh2YWwxKSAmJiBpc09iamVjdCh2YWwyKTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBhcmVPYmplY3RzICYmICFkZWVwRXF1YWwodmFsMSwgdmFsMikgfHxcbiAgICAgICAgICAgICAgICAhYXJlT2JqZWN0cyAmJiB2YWwxICE9PSB2YWwyXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3Qob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVlcEVxdWFsQXJyYXlPYmplY3QoYXJyYXkxLCBhcnJheTIpIHtcblxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyYXkxKSAmJiBBcnJheS5pc0FycmF5KGFycmF5MikpIHtcbiAgICAgICAgaWYgKGFycmF5MS5sZW5ndGggIT0gYXJyYXkyLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBhcnJheTEubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIWRlZXBFcXVhbChhcnJheTFbeF0sIGFycmF5Mlt4XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kVG9IYWxmKG51bWJlcikge1xuXG4gICAgaWYgKG51bWJlciAhPSBudWxsKSB7XG4gICAgICAgIGlmICghaXNOYU4ocGFyc2VGbG9hdChudW1iZXIpKSkge1xuICAgICAgICAgICAgdmFyIGRlY2ltYWwgPSBwYXJzZUZsb2F0KG51bWJlcik7XG4gICAgICAgICAgICB2YXIgaW50ID0gcGFyc2VJbnQobnVtYmVyKTtcblxuICAgICAgICAgICAgZGVjaW1hbCA9IGRlY2ltYWwgLSBpbnQ7XG4gICAgICAgICAgICByZXR1cm4gZGVjaW1hbCA+PSAwLjUgPyBpbnQgKyAwLjUgOiBpbnQ7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlTdHJpbmdpZnlOZXN0ZWRPYmplY3QodmFsdWUsIGNvbE5hbWUpIHtcblxuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIGlmIChjb2xOYW1lKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICAgICAgZGF0YVtjb2xOYW1lXSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBxdWVyeVN0cmluZy5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbWdUYWdTb3VyY2Uoc3RyKSB7XG4gICAgaWYgKHN0cikge1xuICAgICAgICBzdHIgPSBzdHIudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IHN0ckFyciA9IHN0ci5zcGxpdChcIlwiKTtcbiAgICAgICAgbGV0IHJlbW92ZWQgPSB0cnVlO1xuICAgICAgICAvL0dldCBodG1sIHRhZyBvbmx5XG4gICAgICAgIHN0ckFyciA9IF8uY29tcGFjdChfLm1hcChzdHJBcnIsIGZ1bmN0aW9uIChjaHIpIHtcbiAgICAgICAgICAgIGlmIChjaHIgPT0gJzwnKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBjaHI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjaHIgPT0gJz4nKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNocjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZW1vdmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2hyO1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgbGV0IGltYWdlcyA9IHN0ckFyci5qb2luKFwiXCIpLnNwbGl0KFwiPlwiKTtcbiAgICAgICAgaW1hZ2VzID0gXy5jb21wYWN0KF8ubWFwKGltYWdlcywgZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICAgICAgICBpZiAoaW1hZ2Uuc3Vic3RyKDAsIDQpID09ICc8aW1nJykge1xuICAgICAgICAgICAgICAgIC8vcG9pbnQgdG8gc3JjIHZhbHVlXG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0SW5kZXggPSBpbWFnZS5pbmRleE9mKCdzcmM9XCInKSArIDU7XG5cbiAgICAgICAgICAgICAgICAvL2Nyb3AgdW50aWwgc3JjXG4gICAgICAgICAgICAgICAgbGV0IGNyb3BwZWRTdHJBcnIgPSBpbWFnZS5zdWJzdHIoc3RhcnRJbmRleClcbiAgICAgICAgICAgICAgICBjcm9wcGVkU3RyQXJyID0gY3JvcHBlZFN0ckFyci5zcGxpdChcIlwiKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgLy9yZXRyaWV2ZSB2YWx1ZVxuICAgICAgICAgICAgICAgIGNyb3BwZWRTdHJBcnIgPSBfLmNvbXBhY3QoXy5tYXAoY3JvcHBlZFN0ckFyciwgZnVuY3Rpb24gKGNocikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hyID09ICdcIicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbW92ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjaHI7XG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdXJsOiBgLyR7Y3JvcHBlZFN0ckFyci5qb2luKFwiXCIpfWAsIG5hbWU6IGNyb3BwZWRTdHJBcnIuam9pbihcIlwiKS5zbGljZSgxMCkgfTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSkpXG4gICAgICAgIHJldHVybiBpbWFnZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVIdG1sVGFnKHN0cikge1xuICAgIGlmIChzdHIpIHtcbiAgICAgICAgc3RyID0gc3RyLnRvU3RyaW5nKCk7XG4gICAgICAgIGxldCBzdHJBcnIgPSBzdHIuc3BsaXQoXCJcIik7XG4gICAgICAgIGxldCByZW1vdmVkID0gZmFsc2U7XG4gICAgICAgIHN0ckFyciA9IF8uY29tcGFjdChfLm1hcChzdHJBcnIsIGZ1bmN0aW9uIChjaHIpIHtcbiAgICAgICAgICAgIGlmIChjaHIgPT0gJzwnKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjaHIgPT0gJz4nKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlbW92ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaHI7XG4gICAgICAgIH0pKTtcblxuICAgICAgICByZXR1cm4gc3RyQXJyLmpvaW4oXCJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9SYW5nZUZvcm1hdCh2YWx1ZSkge1xuICAgIGxldCBkYXRhID0gXy5jbG9uZURlZXAodmFsdWUpO1xuICAgIC8vQ29udmVydCBSYW5nZSBGb3JtYXRcbiAgICBpZiAobm90RW1wdHlMZW5ndGgoZGF0YSkpIHtcbiAgICAgICAgLy9SZXN0cnVjdCByYW5nZSBmb3JtYXQgdG8gY29udmVydFxuICAgICAgICBpZiAoIWRhdGFbMF0gJiYgIWRhdGFbMV0pIHtcbiAgICAgICAgfSBlbHNlIGlmICghZGF0YVswXSkge1xuICAgICAgICAgICAgZGF0YVswXSA9IGRhdGFbMV07XG4gICAgICAgICAgICBkYXRhWzFdID0gZGVmYXVsdFJhbmdlU21hbGxlclxuICAgICAgICB9IGVsc2UgaWYgKCFkYXRhWzFdKSB7XG4gICAgICAgICAgICBkYXRhWzFdID0gZGVmYXVsdFJhbmdlQmlnZ2VyXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRSYW5nZUZvcm1hdEJhY2sodmFsdWVBcnIpIHtcbiAgICBpZiAoXy5pc0FycmF5KHZhbHVlQXJyKSAmJiAhXy5pc0VtcHR5KHZhbHVlQXJyKSkge1xuICAgICAgICBsZXQgcGFyYW1ldGVyMSA9IHZhbHVlQXJyWzBdO1xuICAgICAgICBsZXQgcGFyYW1ldGVyMiA9IHZhbHVlQXJyWzFdO1xuICAgICAgICBsZXQgZGF0YSA9IFssXVxuXG4gICAgICAgIGlmIChwYXJhbWV0ZXIyID09IGRlZmF1bHRSYW5nZVNtYWxsZXIgfHwgcGFyYW1ldGVyMiA9PSBkZWZhdWx0UmFuZ2VCaWdnZXIpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXIyID09IGRlZmF1bHRSYW5nZUJpZ2dlcikge1xuICAgICAgICAgICAgICAgIGRhdGFbMF0gPSBwYXJhbWV0ZXIxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlcjIgPT0gZGVmYXVsdFJhbmdlU21hbGxlcikge1xuICAgICAgICAgICAgICAgIGRhdGFbMV0gPSBwYXJhbWV0ZXIxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVBcnI7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsdWVBcnI7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFJhbmdlRm9ybWF0VG9UZXh0KGZvcm1hdGVkUmFuZ2UsIHZhbHVlRm9ybWF0KSB7XG5cbiAgICBmdW5jdGlvbiBjb252ZXJ0VmFsdWUodmFsdWUsIGZvcm1hdCkge1xuXG4gICAgICAgIGlmIChmb3JtYXQgPT0gJ3ByaWNlJykge1xuICAgICAgICAgICAgcmV0dXJuIGBSTSAke2Zvcm1hdE51bWJlcih2YWx1ZSwgbnVsbCwgdHJ1ZSwgMiwgdHJ1ZSl9YFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvcm1hdCA9PSAnbWlsZWFnZScpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtmb3JtYXROdW1iZXIodmFsdWUsIG51bGwsIHRydWUsIDIsIHRydWUpfSBrbWBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3JtYXQgPT0gJ2VuZ2luZUNhcGFjaXR5Jykge1xuICAgICAgICAgICAgcmV0dXJuIGAke2Zvcm1hdE51bWJlcih2YWx1ZSwgbnVsbCwgdHJ1ZSwgMiwgdHJ1ZSl9IGNjYFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKF8uaXNBcnJheShmb3JtYXRlZFJhbmdlKSAmJiAhXy5pc0VtcHR5KGZvcm1hdGVkUmFuZ2UpKSB7XG4gICAgICAgIGxldCBwYXJhbWV0ZXIxID0gZm9ybWF0ZWRSYW5nZVswXTtcbiAgICAgICAgbGV0IHBhcmFtZXRlcjIgPSBmb3JtYXRlZFJhbmdlWzFdO1xuICAgICAgICBsZXQgdGV4dCA9ICcnO1xuXG4gICAgICAgIGlmIChwYXJhbWV0ZXIyID09ICc+PScgfHwgcGFyYW1ldGVyMiA9PSAnPicgfHwgKCFwYXJhbWV0ZXIyICYmIHBhcmFtZXRlcjEpKSB7XG4gICAgICAgICAgICB0ZXh0ID0gYGFib3ZlICR7Y29udmVydFZhbHVlKHBhcmFtZXRlcjEsIHZhbHVlRm9ybWF0KX1gXG4gICAgICAgIH0gZWxzZSBpZiAocGFyYW1ldGVyMiA9PSAnPD0nIHx8IHBhcmFtZXRlcjIgPT0gJzwnKSB7XG4gICAgICAgICAgICB0ZXh0ID0gYGJlbG93ICR7Y29udmVydFZhbHVlKHBhcmFtZXRlcjEsIHZhbHVlRm9ybWF0KX1gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZXh0ID0gYGJldHdlZW4gJHtjb252ZXJ0VmFsdWUocGFyYW1ldGVyMSwgdmFsdWVGb3JtYXQpfSBhbmQgJHtjb252ZXJ0VmFsdWUocGFyYW1ldGVyMiwgdmFsdWVGb3JtYXQpfWBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RmlsdGVyUmFuZ2UodmFsdWUsIG5hbWUpIHtcblxuICAgIGlmIChub3RFbXB0eUxlbmd0aCh2YWx1ZSkgJiYgbmFtZSkge1xuICAgICAgICBsZXQgcGFyYW1ldGVyMSA9IHBhcnNlRmxvYXQodmFsdWVbMF0pO1xuICAgICAgICBsZXQgcGFyYW1ldGVyMiA9IHZhbHVlWzFdO1xuICAgICAgICBsZXQgZmluYWxEYXRhID0gW107XG4gICAgICAgIGxldCBxdWVyeSA9IHt9O1xuXG4gICAgICAgIGlmICghaXNWYWxpZE51bWJlcihwYXJhbWV0ZXIxKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1ldGVyMiAhPSBudWxsKSB7XG5cbiAgICAgICAgICAgIHN3aXRjaCAocGFyYW1ldGVyMikge1xuICAgICAgICAgICAgICAgIGNhc2UgJzw9JzpcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlbYCR7bmFtZX1gXSA9IHsgJGx0ZTogKyhwYXJhbWV0ZXIxKSB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsRGF0YS5wdXNoKHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5W2Ake25hbWV9YF0gPSB7ICRsdDogKyhwYXJhbWV0ZXIxKSB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsRGF0YS5wdXNoKHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnPT0nOlxuICAgICAgICAgICAgICAgICAgICBxdWVyeVtgJHtuYW1lfWBdID0geyAkZXE6ICsocGFyYW1ldGVyMSkgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbERhdGEucHVzaChxdWVyeSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJz4nOlxuICAgICAgICAgICAgICAgICAgICBxdWVyeVtgJHtuYW1lfWBdID0geyAkZ3Q6ICsocGFyYW1ldGVyMSkgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbERhdGEucHVzaChxdWVyeSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJz49JzpcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlbYCR7bmFtZX1gXSA9IHsgJGd0ZTogKyhwYXJhbWV0ZXIxKSB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsRGF0YS5wdXNoKHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyMiA9IHBhcnNlRmxvYXQocGFyYW1ldGVyMik7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZE51bWJlcihwYXJhbWV0ZXIyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlbYCR7bmFtZX1gXSA9IHsgJGVxOiArKHBhcmFtZXRlcjEpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsRGF0YS5wdXNoKHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5W2Ake25hbWV9YF0gPSB7ICRndGU6ICsocGFyYW1ldGVyMSkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxEYXRhLnB1c2gocXVlcnkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcXVlcnkxID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTFbYCR7bmFtZX1gXSA9IHsgJGx0ZTogKyhwYXJhbWV0ZXIyKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbERhdGEucHVzaChxdWVyeTEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxdWVyeVtgJHtuYW1lfWBdID0geyAkZXE6ICsocGFyYW1ldGVyMSkgfVxuICAgICAgICAgICAgZmluYWxEYXRhLnB1c2gocXVlcnkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaW5hbERhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0UmVtb3ZlRW1wdHlWYWx1ZSh2YWx1ZSkge1xuXG4gICAgaWYgKG5vdEVtcHR5TGVuZ3RoKHZhbHVlKSAmJiBfLmlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBfLnBpY2tCeSh2YWx1ZSwgZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICAgICAgICByZXR1cm4gXy5pc0FycmF5KHByb3BlcnR5KSA/IG5vdEVtcHR5TGVuZ3RoKF8uY29tcGFjdChwcm9wZXJ0eSkpIDogXy5pc1BsYWluT2JqZWN0KHByb3BlcnR5KSA/IG5vdEVtcHR5TGVuZ3RoKG9iamVjdFJlbW92ZUVtcHR5VmFsdWUocHJvcGVydHkpKSA6IHByb3BlcnR5O1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge31cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0UHJvZHVjdFJvdXRlUGFyYW1zVG9GaWx0ZXJPYmplY3Qocm91dGVQYXJhbXMpIHtcblxuICAgIGxldCB7IHBhcmFtZXRlcjEsIHBhcmFtZXRlcjIsIHBhcmFtZXRlcjMgfSA9IHJvdXRlUGFyYW1zO1xuICAgIGxldCB7IHNvcnRpbmcsIHBhZ2UsIHZpZXcgfSA9IHJvdXRlUGFyYW1zO1xuICAgIGxldCBtZXJnZU9iaiA9IF8ucGljayhyb3V0ZVBhcmFtcywgYXZhaWxhYmxlRmlsdGVycykgfHwge307XG5cbiAgICBpZiAoIWlzVmFsaWROdW1iZXIocGFyc2VJbnQocGFnZSkpKSB7XG4gICAgICAgIHBhZ2UgPSAxO1xuICAgIH1cblxuICAgIGlmICh2aWV3ICE9ICdncmlkVmlldycgJiYgdmlldyAhPSAnbGlzdFZpZXcnKSB7XG4gICAgICAgIHZpZXcgPSAnZ3JpZFZpZXcnO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIHNvcnRpbmcgPSBKU09OLnBhcnNlKHNvcnRpbmcpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGlmICghXy5nZXQoc29ydGluZywgWydjYXJzcGVjLnllYXInXSkgJiYgIV8uZ2V0KHNvcnRpbmcsIFsnbWlsZWFnZUZpbHRlciddKSAmJiAhXy5nZXQoc29ydGluZywgWydzZWFyY2hQcmljZSddKSkge1xuICAgICAgICBzb3J0aW5nID0ge307XG4gICAgfVxuICAgIGxldCBmaW5hbERhdGEgPSB7XG4gICAgICAgIGZpbHRlckdyb3VwOiB7XG4gICAgICAgICAgICAuLi5tZXJnZU9ialxuICAgICAgICB9LFxuICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgIHBhZ2U6IHBhZ2UsXG4gICAgICAgICAgICBzb3J0aW5nOiBzb3J0aW5nLFxuICAgICAgICAgICAgdmlldzogdmlld1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBpZiAoZmluYWxEYXRhLmZpbHRlckdyb3VwLnByaWNlUmFuZ2UpIHtcbiAgICAgICAgZmluYWxEYXRhLmZpbHRlckdyb3VwLnByaWNlUmFuZ2UgPSBjb252ZXJ0UmFuZ2VGb3JtYXRCYWNrKGZpbmFsRGF0YS5maWx0ZXJHcm91cC5wcmljZVJhbmdlKTtcbiAgICB9XG4gICAgaWYgKGZpbmFsRGF0YS5maWx0ZXJHcm91cC55ZWFyUmFuZ2UpIHtcbiAgICAgICAgZmluYWxEYXRhLmZpbHRlckdyb3VwLnllYXJSYW5nZSA9IGNvbnZlcnRSYW5nZUZvcm1hdEJhY2soZmluYWxEYXRhLmZpbHRlckdyb3VwLnllYXJSYW5nZSk7XG4gICAgfVxuICAgIGlmIChmaW5hbERhdGEuZmlsdGVyR3JvdXAubWlsZWFnZVJhbmdlKSB7XG4gICAgICAgIGZpbmFsRGF0YS5maWx0ZXJHcm91cC5taWxlYWdlUmFuZ2UgPSBjb252ZXJ0UmFuZ2VGb3JtYXRCYWNrKGZpbmFsRGF0YS5maWx0ZXJHcm91cC5taWxlYWdlUmFuZ2UpO1xuICAgIH1cbiAgICBpZiAoZmluYWxEYXRhLmZpbHRlckdyb3VwLmVuZ2luZUNhcGFjaXR5UmFuZ2UpIHtcbiAgICAgICAgZmluYWxEYXRhLmZpbHRlckdyb3VwLmVuZ2luZUNhcGFjaXR5UmFuZ2UgPSBjb252ZXJ0UmFuZ2VGb3JtYXRCYWNrKGZpbmFsRGF0YS5maWx0ZXJHcm91cC5lbmdpbmVDYXBhY2l0eVJhbmdlKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1ldGVyMSAmJiAhcGFyYW1ldGVyMiAmJiAhcGFyYW1ldGVyMykge1xuICAgICAgICBsZXQgc3RhdGVBcnIgPSBwYXJhbWV0ZXIxLnNwbGl0KCdfJyk7XG4gICAgICAgIGZpbmFsRGF0YS5maWx0ZXJHcm91cC5zdGF0ZSA9IF8uaXNBcnJheShzdGF0ZUFycikgJiYgIV8uaXNFbXB0eShzdGF0ZUFycikgPyBfLmdldChzdGF0ZUFyciwgWzFdKSB8fCAnJyA6ICcnO1xuICAgICAgICBmaW5hbERhdGEuZmlsdGVyR3JvdXAuYXJlYSA9IF8uaXNBcnJheShzdGF0ZUFycikgJiYgIV8uaXNFbXB0eShzdGF0ZUFycikgPyBfLmdldChzdGF0ZUFyciwgWzJdKSB8fCAnJyA6ICcnO1xuICAgIH0gZWxzZSBpZiAocGFyYW1ldGVyMSAmJiBwYXJhbWV0ZXIyICYmICFwYXJhbWV0ZXIzKSB7XG4gICAgICAgIGZpbmFsRGF0YS5maWx0ZXJHcm91cC5tYWtlID0gXy50b0xvd2VyKHBhcmFtZXRlcjEpO1xuXG4gICAgICAgIGxldCBzdGF0ZUFyciA9IHBhcmFtZXRlcjIuc3BsaXQoJ18nKTtcbiAgICAgICAgZmluYWxEYXRhLmZpbHRlckdyb3VwLnN0YXRlID0gXy5pc0FycmF5KHN0YXRlQXJyKSAmJiAhXy5pc0VtcHR5KHN0YXRlQXJyKSA/IF8uZ2V0KHN0YXRlQXJyLCBbMV0pIHx8ICcnIDogJyc7XG4gICAgICAgIGZpbmFsRGF0YS5maWx0ZXJHcm91cC5hcmVhID0gXy5pc0FycmF5KHN0YXRlQXJyKSAmJiAhXy5pc0VtcHR5KHN0YXRlQXJyKSA/IF8uZ2V0KHN0YXRlQXJyLCBbMl0pIHx8ICcnIDogJyc7XG5cbiAgICB9IGVsc2UgaWYgKHBhcmFtZXRlcjEgJiYgcGFyYW1ldGVyMiAmJiBwYXJhbWV0ZXIzKSB7XG4gICAgICAgIGZpbmFsRGF0YS5maWx0ZXJHcm91cC5tYWtlID0gXy50b0xvd2VyKHBhcmFtZXRlcjEpO1xuICAgICAgICBmaW5hbERhdGEuZmlsdGVyR3JvdXAubW9kZWwgPSBfLnRvTG93ZXIocGFyYW1ldGVyMik7XG5cbiAgICAgICAgbGV0IHN0YXRlQXJyID0gcGFyYW1ldGVyMy5zcGxpdCgnXycpO1xuICAgICAgICBmaW5hbERhdGEuZmlsdGVyR3JvdXAuc3RhdGUgPSBfLmlzQXJyYXkoc3RhdGVBcnIpICYmICFfLmlzRW1wdHkoc3RhdGVBcnIpID8gXy5nZXQoc3RhdGVBcnIsIFsxXSkgfHwgJycgOiAnJztcbiAgICAgICAgZmluYWxEYXRhLmZpbHRlckdyb3VwLmFyZWEgPSBfLmlzQXJyYXkoc3RhdGVBcnIpICYmICFfLmlzRW1wdHkoc3RhdGVBcnIpID8gXy5nZXQoc3RhdGVBcnIsIFsyXSkgfHwgJycgOiAnJztcblxuICAgIH0gZWxzZSB7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gZmluYWxEYXRhO1xuXG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFBhcmFtZXRlclRvUHJvZHVjdExpc3RVcmwoZGF0YSwgY29uZmlnKSB7XG5cbiAgICBsZXQgbWVyZ2VPYmogPSBvYmplY3RSZW1vdmVFbXB0eVZhbHVlKGRhdGEpO1xuICAgIGxldCBiYXNlUGF0aCA9ICcnO1xuXG4gICAgaWYgKCFfLmlzUGxhaW5PYmplY3QoY29uZmlnKSB8fCBfLmlzRW1wdHkoY29uZmlnKSkge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgc29ydGluZzoge30sXG4gICAgICAgICAgICB2aWV3OiAnZ3JpZFZpZXcnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWlzVmFsaWROdW1iZXIocGFyc2VJbnQoY29uZmlnLnBhZ2UpKSkge1xuICAgICAgICBjb25maWcucGFnZSA9IDE7XG4gICAgfVxuICAgIGlmIChjb25maWcudmlldyAhPSAnZ3JpZFZpZXcnICYmIGNvbmZpZy52aWV3ICE9ICdsaXN0VmlldycpIHtcbiAgICAgICAgY29uZmlnLnZpZXcgPSAnZ3JpZFZpZXcnO1xuICAgIH1cblxuICAgIGlmICghXy5pc1BsYWluT2JqZWN0KG9iamVjdFJlbW92ZUVtcHR5VmFsdWUoY29uZmlnLnNvcnRpbmcpKSAmJiBfLmlzRW1wdHkob2JqZWN0UmVtb3ZlRW1wdHlWYWx1ZShjb25maWcuc29ydGluZykpICYmICghXy5nZXQoY29uZmlnLCBbJ3NvcnRpbmcnLCAnY2Fyc3BlYy55ZWFyJ10pICYmICFfLmdldChjb25maWcsIFsnc29ydGluZycsICdtaWxlYWdlRmlsdGVyJ10pICYmICFfLmdldChjb25maWcsIFsnc29ydGluZycsICdzZWFyY2hQcmljZSddKSkpIHtcbiAgICAgICAgY29uZmlnLnNvcnRpbmcgPSB7fTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25maWcuc29ydGluZyA9IF8ucGljayhvYmplY3RSZW1vdmVFbXB0eVZhbHVlKGNvbmZpZy5zb3J0aW5nKSwgWydjYXJzcGVjLnllYXInLCAnc2VhcmNoUHJpY2UnLCAnbWlsZWFnZUZpbHRlciddKTtcbiAgICB9XG5cblxuICAgIGlmIChub3RFbXB0eUxlbmd0aChtZXJnZU9iaikpIHtcbiAgICAgICAgbWVyZ2VPYmogPSBfLnBpY2sobWVyZ2VPYmosIGF2YWlsYWJsZUZpbHRlcnMpO1xuICAgICAgICBsZXQgY29uZGl0aW9uID0gbWVyZ2VPYmouY29uZGl0aW9uO1xuICAgICAgICBsZXQgbWFrZSA9IG1lcmdlT2JqLm1ha2U7XG4gICAgICAgIGxldCBtb2RlbCA9IG1lcmdlT2JqLm1vZGVsO1xuICAgICAgICBsZXQgc3RhdGUgPSBtZXJnZU9iai5zdGF0ZTtcbiAgICAgICAgbGV0IGFyZWEgPSBtZXJnZU9iai5hcmVhO1xuXG5cblxuICAgICAgICBpZiAoY29uZGl0aW9uICYmIGNvbmRpdGlvbiAhPSAnY2Fycy1vbi1zYWxlJyAmJiBjb25kaXRpb24gIT0gJ2FsbCcpIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbiA9IFtfLnRvTG93ZXIoY29uZGl0aW9uKSwgJ2NhcnMtb24tc2FsZSddLmpvaW4oJy0nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbiA9ICdjYXJzLW9uLXNhbGUnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXRlICYmIHN0YXRlICE9ICdtYWxheXNpYScpIHtcbiAgICAgICAgICAgIGlmIChhcmVhICYmIHN0YXRlICE9ICdtYWxheXNpYScpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IFsnbWFsYXlzaWEnLCBfLnRvTG93ZXIobWVyZ2VPYmouc3RhdGUpLCBfLnRvTG93ZXIobWVyZ2VPYmouYXJlYSldLmpvaW4oJ18nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBbJ21hbGF5c2lhJywgXy50b0xvd2VyKG1lcmdlT2JqLnN0YXRlKV0uam9pbignXycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGUgPSAnbWFsYXlzaWEnO1xuICAgICAgICB9XG5cblxuXG4gICAgICAgIC8vTWFpbiBwYXJhbWV0ZXJcbiAgICAgICAgLy9PcmRlciBpcyBpbXBvcnRhbnRcbiAgICAgICAgLy9UaGUgZmlyc3QgMSBhbHdheXMgaXMgY29uZGl0aW9uXG4gICAgICAgIC8vVGhlIGxhc3QgMSBhbHdheXMgaXMgc3RhdGVcbiAgICAgICAgbGV0IG1haW5QYXJhbWV0ZXJzID0gW21ha2UsIG1vZGVsXTtcbiAgICAgICAgbGV0IHBhdGggPSBgJHtiYXNlUGF0aH0vJHtjb25kaXRpb259YDtcblxuICAgICAgICBfLmZvckVhY2gobWFpblBhcmFtZXRlcnMsIGZ1bmN0aW9uIChwYXJhbWV0ZXIpIHtcbiAgICAgICAgICAgIGlmICghcGFyYW1ldGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IGAvJHtfLnRvTG93ZXIocGFyYW1ldGVyKX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgcGF0aCArPSBgLyR7c3RhdGV9YFxuICAgICAgICBkZWxldGUgbWVyZ2VPYmouY29uZGl0aW9uO1xuICAgICAgICBkZWxldGUgbWVyZ2VPYmoubWFrZTtcbiAgICAgICAgZGVsZXRlIG1lcmdlT2JqLm1vZGVsO1xuICAgICAgICBkZWxldGUgbWVyZ2VPYmouc3RhdGU7XG4gICAgICAgIHJldHVybiBgJHtwYXRofT92aWV3PSR7Y29uZmlnLnZpZXd9JnBhZ2U9JHtjb25maWcucGFnZX0ke18uaXNQbGFpbk9iamVjdChjb25maWcuc29ydGluZykgJiYgIV8uaXNFbXB0eShjb25maWcuc29ydGluZykgPyBgJiR7cXVlcnlTdHJpbmdpZnlOZXN0ZWRPYmplY3QoY29uZmlnLnNvcnRpbmcsICdzb3J0aW5nJyl9YCA6ICcnfSR7bm90RW1wdHlMZW5ndGgobWVyZ2VPYmopID8gYCYke3F1ZXJ5U3RyaW5naWZ5TmVzdGVkT2JqZWN0KG1lcmdlT2JqKX1gIDogJyd9YDtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgL2NhcnMtb24tc2FsZS9tYWxheXNpYT92aWV3PSR7Y29uZmlnLnZpZXd9JnBhZ2U9JHtjb25maWcucGFnZX0ke18uaXNQbGFpbk9iamVjdChjb25maWcuc29ydGluZykgJiYgIV8uaXNFbXB0eShjb25maWcuc29ydGluZykgPyBgJiR7cXVlcnlTdHJpbmdpZnlOZXN0ZWRPYmplY3QoY29uZmlnLnNvcnRpbmcsICdzb3J0aW5nJyl9YCA6ICcnfWA7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFBhcmFtZXRlclRvUHJvZHVjdExpc3RTZW9VcmwoZGF0YSkge1xuXG4gICAgbGV0IG1lcmdlT2JqID0gb2JqZWN0UmVtb3ZlRW1wdHlWYWx1ZShkYXRhKTtcbiAgICBsZXQgYmFzZVBhdGggPSBjaGVja0VudlJldHVybkNtc1VybChjbGllbnQuaW8uaW8udXJpKTs7XG5cblxuICAgIGlmIChub3RFbXB0eUxlbmd0aChtZXJnZU9iaikpIHtcbiAgICAgICAgbWVyZ2VPYmogPSBfLnBpY2sobWVyZ2VPYmosIGF2YWlsYWJsZUZpbHRlcnMpO1xuICAgICAgICBsZXQgY29uZGl0aW9uID0gbWVyZ2VPYmouY29uZGl0aW9uO1xuICAgICAgICBsZXQgbWFrZSA9IG1lcmdlT2JqLm1ha2U7XG4gICAgICAgIGxldCBtb2RlbCA9IG1lcmdlT2JqLm1vZGVsO1xuICAgICAgICBsZXQgc3RhdGUgPSBtZXJnZU9iai5zdGF0ZTtcbiAgICAgICAgbGV0IGFyZWEgPSBtZXJnZU9iai5hcmVhO1xuXG5cblxuICAgICAgICBpZiAoY29uZGl0aW9uICYmIGNvbmRpdGlvbiAhPSAnY2Fycy1vbi1zYWxlJyAmJiBjb25kaXRpb24gIT0gJ2FsbCcpIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbiA9IFtfLnRvTG93ZXIoY29uZGl0aW9uKSwgJ2NhcnMtb24tc2FsZSddLmpvaW4oJy0nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbiA9ICdjYXJzLW9uLXNhbGUnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXRlICYmIHN0YXRlICE9ICdtYWxheXNpYScpIHtcbiAgICAgICAgICAgIGlmIChhcmVhICYmIHN0YXRlICE9ICdtYWxheXNpYScpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IFsnbWFsYXlzaWEnLCBfLnRvTG93ZXIobWVyZ2VPYmouc3RhdGUpLCBfLnRvTG93ZXIobWVyZ2VPYmouYXJlYSldLmpvaW4oJ18nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBbJ21hbGF5c2lhJywgXy50b0xvd2VyKG1lcmdlT2JqLnN0YXRlKV0uam9pbignXycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGUgPSAnbWFsYXlzaWEnO1xuICAgICAgICB9XG5cblxuXG4gICAgICAgIC8vTWFpbiBwYXJhbWV0ZXJcbiAgICAgICAgLy9PcmRlciBpcyBpbXBvcnRhbnRcbiAgICAgICAgLy9UaGUgZmlyc3QgMSBhbHdheXMgaXMgY29uZGl0aW9uXG4gICAgICAgIC8vVGhlIGxhc3QgMSBhbHdheXMgaXMgc3RhdGVcbiAgICAgICAgbGV0IG1haW5QYXJhbWV0ZXJzID0gW21ha2UsIG1vZGVsXTtcbiAgICAgICAgbGV0IHBhdGggPSBgJHtiYXNlUGF0aH0vJHtjb25kaXRpb259YDtcblxuICAgICAgICBfLmZvckVhY2gobWFpblBhcmFtZXRlcnMsIGZ1bmN0aW9uIChwYXJhbWV0ZXIpIHtcbiAgICAgICAgICAgIGlmICghcGFyYW1ldGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IGAvJHtfLnRvTG93ZXIocGFyYW1ldGVyKX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgcGF0aCArPSBgLyR7c3RhdGV9YFxuICAgICAgICBkZWxldGUgbWVyZ2VPYmouY29uZGl0aW9uO1xuICAgICAgICBkZWxldGUgbWVyZ2VPYmoubWFrZTtcbiAgICAgICAgZGVsZXRlIG1lcmdlT2JqLm1vZGVsO1xuICAgICAgICBkZWxldGUgbWVyZ2VPYmouc3RhdGU7XG4gICAgICAgIHJldHVybiBgJHtwYXRofT8ke25vdEVtcHR5TGVuZ3RoKG1lcmdlT2JqKSA/IGAmJHtxdWVyeVN0cmluZ2lmeU5lc3RlZE9iamVjdChtZXJnZU9iail9YCA6ICcnfWA7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC9jYXJzLW9uLXNhbGUvbWFsYXlzaWFgO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3BJdGVtcyhkYXRhLCByYW5rLCBjb2wpIHtcbiAgICBpZiAoXy5pc0FycmF5KGRhdGEpICYmIG5vdEVtcHR5TGVuZ3RoKGRhdGEpKSB7XG4gICAgICAgIGlmICghaXNWYWxpZE51bWJlcihyYW5rKSkge1xuICAgICAgICAgICAgcmFuayA9IDM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByYW5rID0gcGFyc2VJbnQocmFuayk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGlja2VkRGF0YSA9IHNvcnRCeURlc2MoZGF0YSwgY29sKTtcbiAgICAgICAgcGlja2VkRGF0YSA9IF8uc2xpY2UocGlja2VkRGF0YSwgMCwgcmFuayk7XG4gICAgICAgIHJldHVybiBwaWNrZWREYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdG9DYW1lbENhc2UodmFsdWUsIHNlcGVyYXRvcikge1xuICAgIGlmICghdmFsdWUgfHwgIXZhbHVlLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghc2VwZXJhdG9yIHx8ICFzZXBlcmF0b3IudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgc2VwZXJhdG9yID0gJyAnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VwZXJhdG9yID0gc2VwZXJhdG9yLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnNwbGl0KHNlcGVyYXRvcik7XG4gICAgICAgIHZhbHVlID0gXy5tYXAodmFsdWUsIGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfLmNhcGl0YWxpemUoaXRlbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdmFsdWUuam9pbignJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9TbmFrZUNhc2UodmFsdWUsIHNlcGVyYXRvcikge1xuICAgIGlmICghdmFsdWUgfHwgIXZhbHVlLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghc2VwZXJhdG9yIHx8ICFzZXBlcmF0b3IudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgc2VwZXJhdG9yID0gJ18nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VwZXJhdG9yID0gc2VwZXJhdG9yLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnNwbGl0KCcnKVxuICAgICAgICBsZXQgZmluYWxEYXRhID0gW11cbiAgICAgICAgXy5mb3JFYWNoKHZhbHVlLCBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgZmluYWxEYXRhLnB1c2goXy5sb3dlckNhc2UoaXRlbSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIGlmIChpdGVtID09IF8udXBwZXJDYXNlKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsRGF0YS5wdXNoKHNlcGVyYXRvcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZmluYWxEYXRhLnB1c2goXy5sb3dlckNhc2UoaXRlbSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZpbmFsRGF0YS5qb2luKCcnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB2aWV3UG9ydCA9IHtcbiAgICB4czogNDgwLFxuICAgIHNtOiA1NzYsXG4gICAgbWQ6IDc2OCxcbiAgICBsZzogOTkyLFxuICAgIHhsOiAxMjAwLFxuICAgIHh4bDogMTYwMCxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJOYW1lKHVzZXIsIHR5cGUpIHtcbiAgICBpZiAoXy5pc1BsYWluT2JqZWN0KHVzZXIpICYmICFfLmlzRW1wdHkodXNlcikpIHtcbiAgICAgICAgbGV0IHVzZXJuYW1lID0gXy50cmltKF8uZ2V0KHVzZXIsIFsndXNlcm5hbWUnXSkgfHwgJycpO1xuICAgICAgICBsZXQgZnVsbE5hbWUgPSBfLnRyaW0oXy5nZXQodXNlciwgWydmdWxsTmFtZSddKSB8fCBgJHtfLmdldCh1c2VyLCBbJ2ZpcnN0TmFtZSddKSB8fCAnJ30gJHtfLmdldCh1c2VyLCBbJ2xhc3ROYW1lJ10pIHx8ICcnfWAgfHwgJycpO1xuICAgICAgICBsZXQgZmlyc3ROYW1lID0gXy50cmltKF8uZ2V0KHVzZXIsIFsnZmlyc3ROYW1lJ10pIHx8ICcnKTtcbiAgICAgICAgbGV0IGxhc3ROYW1lID0gXy50cmltKF8uZ2V0KHVzZXIsIFsnbGFzdE5hbWUnXSkgfHwgJycpO1xuICAgICAgICBsZXQgbmFtZVByZWZpeCA9IF8udHJpbShfLmdldCh1c2VyLCBbJ25hbWVQcmVmaXgnXSkgfHwgJycpO1xuICAgICAgICBsZXQgZnJlYWtJZCA9IF8udHJpbShfLmdldCh1c2VyLCBbJ2ZyZWFrSWQnXSkgfHwgJycpO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAndXNlcm5hbWUnOlxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VybmFtZTtcbiAgICAgICAgICAgIGNhc2UgJ2Z1bGxOYW1lJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVsbE5hbWU7XG4gICAgICAgICAgICBjYXNlICdwcmVmaXhOYW1lJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXy50cmltKGAke25hbWVQcmVmaXggPyBgJHtuYW1lUHJlZml4fWAgOiAnJ30gJHtmdWxsTmFtZSB8fCAnJ31gKTtcbiAgICAgICAgICAgIGNhc2UgJ2ZpcnN0TmFtZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpcnN0TmFtZTtcbiAgICAgICAgICAgIGNhc2UgJ2xhc3ROYW1lJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbGFzdE5hbWU7XG4gICAgICAgICAgICBjYXNlICdmcmVha0lkJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJlYWtJZDtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bGxOYW1lO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdDY2FyIFVzZXInXG4gICAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQbHVyYWwoc2luZ3VsYXIsIHBsdXJhbCwgY291bnQsIHNob3dDb3VudCkge1xuICAgIGlmIChzaW5ndWxhciAmJiBpc1ZhbGlkTnVtYmVyKHBhcnNlSW50KGNvdW50KSkpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGNvdW50KSA+IDEgP1xuICAgICAgICAgICAgc2hvd0NvdW50ID9cbiAgICAgICAgICAgICAgICBgJHtjb3VudH0gJHtwbHVyYWwgfHwgc2luZ3VsYXIgKyAncyd9YFxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICBgJHtwbHVyYWwgfHwgc2luZ3VsYXIgKyAncyd9YFxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgc2hvd0NvdW50ID9cbiAgICAgICAgICAgICAgICBgJHtmb3JtYXROdW1iZXIoY291bnQsICdhdXRvJywgdHJ1ZSwgMCwgdHJ1ZSl9ICR7c2luZ3VsYXJ9YFxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICBgJHtzaW5ndWxhcn1gXG5cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEluZGV4ZXNPZlN0cmluZyh0ZXh0LCBzZWFyY2gpIHtcbiAgICBpZiAodGV4dCAmJiBzZWFyY2gpIHtcbiAgICAgICAgbGV0IGluZGV4ZXMgPSBbXTtcbiAgICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IDA7XG4gICAgICAgIHdoaWxlIChjdXJyZW50UG9zaXRpb24gPCB0ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uID0gdGV4dC5pbmRleE9mKHNlYXJjaCwgY3VycmVudFBvc2l0aW9uKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UG9zaXRpb24gPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gPSB0ZXh0Lmxlbmd0aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGN1cnJlbnRQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uICsgc2VhcmNoLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrT2JqZWN0SWQoZGF0YSwgaWRGb3JDaGVjaywgY29sKSB7XG4gICAgaWYgKF8uaXNQbGFpbk9iamVjdChkYXRhKSAmJiAhXy5pc0VtcHR5KGRhdGEpKSB7XG4gICAgICAgIHJldHVybiBkYXRhW2Ake2NvbCB8fCAnX2lkJ31gXSA9PSBpZEZvckNoZWNrO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkYXRhID09IGlkRm9yQ2hlY2s7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2JqZWN0SWQoZGF0YSwgY29sKSB7XG4gICAgaWYgKF8uaXNQbGFpbk9iamVjdChkYXRhKSAmJiAhXy5pc0VtcHR5KGRhdGEpKSB7XG4gICAgICAgIHJldHVybiBkYXRhW2Ake2NvbCB8fCAnX2lkJ31gXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYXJNYXJrZXRTZW9EYXRhKGZpbHRlckdyb3VwLCB0b3RhbCkge1xuXG4gICAgaWYgKCFfLmlzUGxhaW5PYmplY3QoZmlsdGVyR3JvdXApKSB7XG4gICAgICAgIGZpbHRlckdyb3VwID0ge307XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZmlsdGVyR3JvdXAgPSBfLmNsb25lRGVlcChmaWx0ZXJHcm91cClcbiAgICB9XG5cbiAgICBsZXQgdGl0bGUgPSBbXTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBbXTtcbiAgICBsZXQgbG9jYXRpb24gPSBbXTtcbiAgICBsZXQgcmFuZ2VGaWx0ZXIgPSBbXTtcbiAgICBsZXQgb3RoZXJGaWx0ZXIgPSBbXTtcbiAgICBpZiAoXy5nZXQoZmlsdGVyR3JvdXAsICdzdGF0ZScpIHx8IF8uZ2V0KGZpbHRlckdyb3VwLCAnYXJlYScpKSB7XG4gICAgICAgIGxvY2F0aW9uLnB1c2goYCR7Xy5jYXBpdGFsaXplKF8uZ2V0KGZpbHRlckdyb3VwLCAnYXJlYScpIHx8ICcnKX1gKTtcbiAgICAgICAgbG9jYXRpb24ucHVzaChgJHtfLmdldChnZXRTdGF0ZShmaWx0ZXJHcm91cC5zdGF0ZSksICd2YWx1ZScpIHx8ICcnfWApO1xuICAgIH1cbiAgICBsb2NhdGlvbi5wdXNoKCdNYWxheXNpYScpO1xuICAgIGxvY2F0aW9uID0gXy5jb21wYWN0KGxvY2F0aW9uKS5qb2luKCcgJyk7XG5cbiAgICBjb25zdCBmaWx0ZXJSYW5nZXMgPSBbJ3ByaWNlJywgJ21pbGVhZ2UnLCAnZW5naW5lQ2FwYWNpdHknLCAneWVhciddO1xuICAgIF8uZm9yRWFjaChmaWx0ZXJSYW5nZXMsIGZ1bmN0aW9uIChmaWx0ZXJSYW5nZSkge1xuICAgICAgICBpZiAoZmlsdGVyR3JvdXBbZmlsdGVyUmFuZ2UgKyAnUmFuZ2UnXSkge1xuICAgICAgICAgICAgcmFuZ2VGaWx0ZXIucHVzaChgJHtfLmNhcGl0YWxpemUodG9TbmFrZUNhc2UoZmlsdGVyUmFuZ2UsICcgJykpfSAke2NvbnZlcnRSYW5nZUZvcm1hdFRvVGV4dChjb252ZXJ0VG9SYW5nZUZvcm1hdChmaWx0ZXJHcm91cFtmaWx0ZXJSYW5nZSArICdSYW5nZSddKSwgZmlsdGVyUmFuZ2UpfWApO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGlmIChmaWx0ZXJHcm91cC5ib2R5VHlwZSkge1xuICAgICAgICBvdGhlckZpbHRlci5wdXNoKF8uY2FwaXRhbGl6ZShfLmdldChnZXRCb2R5VHlwZShmaWx0ZXJHcm91cC5ib2R5VHlwZSksICd2YWx1ZScpIHx8ICcnKSk7XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlckdyb3VwLmZ1ZWxUeXBlKSB7XG4gICAgICAgIG90aGVyRmlsdGVyLnB1c2goXy5jYXBpdGFsaXplKF8uZ2V0KGdldEZ1ZWxUeXBlKGZpbHRlckdyb3VwLmZ1ZWxUeXBlKSwgJ3ZhbHVlJykgfHwgJycpKTtcbiAgICB9XG5cbiAgICBpZiAoZmlsdGVyR3JvdXAuY29sb3IpIHtcbiAgICAgICAgb3RoZXJGaWx0ZXIucHVzaChgQ29sb3IgJHtfLmNhcGl0YWxpemUoXy5nZXQoZ2V0Q29sb3IoZmlsdGVyR3JvdXAuY29sb3IpLCAndmFsdWUnKSB8fCAnJyl9YCk7XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlckdyb3VwLnJlZ2lzdHJhdGlvblVybCkge1xuICAgICAgICBvdGhlckZpbHRlci5wdXNoKGBXaXRoIFJlZ2lzdHJhdGlvbiBVcmxgKTtcbiAgICB9XG5cbiAgICBpZiAoZmlsdGVyR3JvdXAucmVhZHlTdG9jaykge1xuICAgICAgICBvdGhlckZpbHRlci5wdXNoKGBJcyBSZWFkeSBTdG9ja2ApO1xuICAgIH1cblxuICAgIGlmIChmaWx0ZXJHcm91cC5jYXIzNjBWaWV3KSB7XG4gICAgICAgIG90aGVyRmlsdGVyLnB1c2goYFdpdGggQ2FyIDM2MCBWaWV3YCk7XG4gICAgfVxuXG4gICAgb3RoZXJGaWx0ZXIgPSBfLmNvbmNhdChvdGhlckZpbHRlciwgcmFuZ2VGaWx0ZXIpLmpvaW4oJywgJyk7XG5cbiAgICB0aXRsZS5wdXNoKGBTZWFyY2ggJHtmb3JtYXROdW1iZXIodG90YWwpIHx8IDB9YCk7XG4gICAgaWYgKGZpbHRlckdyb3VwLnRpdGxlKSB7XG4gICAgICAgIHRpdGxlLnB1c2goXy5jYXBpdGFsaXplKGZpbHRlckdyb3VwLnRpdGxlKSk7XG4gICAgICAgIHRpdGxlLnB1c2goXy5jYXBpdGFsaXplKGZpbHRlckdyb3VwLnRpdGxlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGl0bGUucHVzaChgJHtfLmdldChnZXRDYXJCcmFuZChfLmdldChmaWx0ZXJHcm91cCwgJ21ha2UnKSksICd2YWx1ZScpIHx8ICcnfWApO1xuICAgICAgICB0aXRsZS5wdXNoKGAke18uY2FwaXRhbGl6ZShfLmdldChmaWx0ZXJHcm91cCwgJ21vZGVsJykgfHwgJycpfWApO1xuICAgIH1cblxuICAgIHRpdGxlLnB1c2goXy5jYXBpdGFsaXplKGZpbHRlckdyb3VwLmNvbmRpdGlvbiB8fCAnJykpO1xuICAgIHRpdGxlLnB1c2goXy5jYXBpdGFsaXplKGZpbHRlckdyb3VwLnRyYW5zbWlzc2lvbiB8fCAnJykpO1xuICAgIGRlc2NyaXB0aW9uID0gXy5jbG9uZURlZXAodGl0bGUpO1xuICAgIHRpdGxlLnB1c2goYENhcnMgZm9yIFNhbGVzIGluICR7bG9jYXRpb259IC0gQ0NBUi5teSAjMSBDYXIgU29jaWFsIFBsYXRmb3JtLmApO1xuICAgIHRpdGxlID0gXy5jb21wYWN0KHRpdGxlKTtcbiAgICB0aXRsZSA9IHRpdGxlLmpvaW4oJyAnKTtcblxuICAgIGRlc2NyaXB0aW9uLnB1c2goYENhcnMgZm9yIFNhbGVzIGluICR7bG9jYXRpb259JHtvdGhlckZpbHRlciA/ICcuJyA6ICcnfWApO1xuICAgIGRlc2NyaXB0aW9uLnB1c2gob3RoZXJGaWx0ZXIpXG4gICAgZGVzY3JpcHRpb24ucHVzaCgnLSBDQ0FSLm15ICMxIENhciBTb2NpYWwgUGxhdGZvcm0uJylcbiAgICBkZXNjcmlwdGlvbiA9IF8uY29tcGFjdChkZXNjcmlwdGlvbik7XG4gICAgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi5qb2luKCcgJyk7XG5cblxuICAgIGxldCBjYW5vbmljYWwgPSBjb252ZXJ0UGFyYW1ldGVyVG9Qcm9kdWN0TGlzdFNlb1VybChmaWx0ZXJHcm91cCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGNhbm9uaWNhbCxcbiAgICB9XG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvZmlsZVNlb0RhdGEocHJvZmlsZSkge1xuXG4gICAgaWYgKCFfLmlzUGxhaW5PYmplY3QocHJvZmlsZSkpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2ZpbGUgPSBfLmNsb25lRGVlcChwcm9maWxlKVxuICAgIH1cblxuICAgIGxldCB0aXRsZSA9IFtdO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IFtdO1xuXG4gICAgdGl0bGUucHVzaChgJHtnZXRVc2VyTmFtZShwcm9maWxlLCAnZnVsbE5hbWUnKSB8fCAnJ31gKTtcbiAgICB0aXRsZS5wdXNoKGAncyBQcm9maWxlIC0gQ0NBUi5teSAjMSBDYXIgU29jaWFsIFBsYXRmb3JtIGApO1xuICAgIHRpdGxlID0gXy5jb21wYWN0KHRpdGxlKTtcbiAgICB0aXRsZSA9IHRpdGxlLmpvaW4oJyAnKTtcblxuICAgIGRlc2NyaXB0aW9uLnB1c2goYCR7Z2V0VXNlck5hbWUocHJvZmlsZSwgJ2Z1bGxOYW1lJykgfHwgJyd9YCk7XG4gICAgZGVzY3JpcHRpb24ucHVzaChgaXMgb24gQ0NBUiAjMSBDYXIgU29jaWFsIFBsYXRmb3JtLiBDb21lIGFuZCBzaGFyZSBjYXIgaW5mbyB3aXRoICR7Z2V0VXNlck5hbWUocHJvZmlsZSwgJ2Z1bGxOYW1lJykgfHwgJyd9IGFuZCBvdGhlcnMuIENDQVIgY29ubmVjdHMgYWxsIGNhciBsb3ZlcnMgdG9nZXRoZXIuYClcbiAgICBkZXNjcmlwdGlvbiA9IF8uY29tcGFjdChkZXNjcmlwdGlvbik7XG4gICAgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi5qb2luKCcgJyk7XG5cblxuXG4gICAgbGV0IGNhbm9uaWNhbCA9IGAke2NoZWNrRW52UmV0dXJuQ21zVXJsKGNsaWVudC5pby5pby51cmkpfS9wcm9maWxlLyR7cHJvZmlsZS51c2VydXJsSWR9YDtcbiAgICBsZXQgaW1hZ2VzID0gW3tcbiAgICAgICAgdXJsOiBwcm9maWxlLmF2YXRhcixcbiAgICAgICAgYWx0OiAnQ0NBUiBVc2VyIFByb2ZpbGUgSW1hZ2UnXG4gICAgfV07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGNhbm9uaWNhbCxcbiAgICAgICAgaW1hZ2VzLFxuICAgIH1cblxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYXJGcmVha1Nlb0RhdGEoZGF0YSkge1xuXG4gICAgaWYgKCFfLmlzUGxhaW5PYmplY3QoZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEgPSBfLmNsb25lRGVlcChkYXRhKVxuICAgIH1cblxuICAgIGxldCB0aXRsZSA9IFtdO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IFtdO1xuXG4gICAgdGl0bGUucHVzaChgJHtwYXJzZVRhZ1N0cmluZ1RvUGxhaW5TdHJpbmcoZGF0YS50aXRsZSkgfHwgJyd9YCk7XG4gICAgdGl0bGUucHVzaChgfGApO1xuICAgIHRpdGxlLnB1c2goYENhckZyZWFrc2ApO1xuICAgIHRpdGxlLnB1c2goYC0gQ0NBUi5teSAjMSBDYXIgU29jaWFsIFBsYXRmb3JtYCk7XG4gICAgdGl0bGUgPSBfLmNvbXBhY3QodGl0bGUpO1xuICAgIHRpdGxlID0gdGl0bGUuam9pbignICcpO1xuXG4gICAgZGVzY3JpcHRpb24ucHVzaChgJHtwYXJzZVRhZ1N0cmluZ1RvUGxhaW5TdHJpbmcoZGF0YS5jb250ZW50KSB8fCAnJ31gKTtcbiAgICBpZiAoXy5pc1BsYWluT2JqZWN0KGRhdGEudXNlcklkKSAmJiAhXy5pc0VtcHR5KGRhdGEudXNlcklkKSkge1xuICAgICAgICBkZXNjcmlwdGlvbi5wdXNoKCd8Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnB1c2goYFBvc3RlZCBCeSAke2dldFVzZXJOYW1lKGRhdGEudXNlcklkLCAnZnVsbE5hbWUnKSB8fCAnJ31gKVxuICAgIH1cbiAgICBkZXNjcmlwdGlvbiA9IF8uY29tcGFjdChkZXNjcmlwdGlvbik7XG4gICAgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi5qb2luKCcgJyk7XG5cblxuXG4gICAgbGV0IGNhbm9uaWNhbCA9IGAke2NoZWNrRW52UmV0dXJuQ21zVXJsKGNsaWVudC5pby5pby51cmkpfS9jYXItZnJlYWtzLyR7ZGF0YS5faWR9YDtcbiAgICBsZXQgaW1hZ2VzID0gW3tcbiAgICAgICAgdXJsOiBfLmdldChkYXRhLCAnbWVkaWFMaXN0WzBdLnVybCcpIHx8ICcnLFxuICAgICAgICBhbHQ6ICdDQ0FSIENhckZyZWFrIEltYWdlJ1xuICAgIH1dO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBjYW5vbmljYWwsXG4gICAgICAgIGltYWdlcyxcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTb2NpYWxCb2FyZFNlb0RhdGEoZGF0YSkge1xuXG4gICAgaWYgKCFfLmlzUGxhaW5PYmplY3QoZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEgPSBfLmNsb25lRGVlcChkYXRhKVxuICAgIH1cblxuICAgIGxldCB0aXRsZSA9IFtdO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IFtdO1xuXG4gICAgdGl0bGUucHVzaChgJHtwYXJzZVRhZ1N0cmluZ1RvUGxhaW5TdHJpbmcoZGF0YS50aXRsZSkgfHwgJyd9YCk7XG4gICAgdGl0bGUucHVzaChgfGApO1xuICAgIHRpdGxlLnB1c2goYFNvY2lhbCBCb2FyZGApO1xuICAgIHRpdGxlLnB1c2goYC0gQ0NBUi5teSAjMSBDYXIgU29jaWFsIFBsYXRmb3JtYCk7XG4gICAgdGl0bGUgPSBfLmNvbXBhY3QodGl0bGUpO1xuICAgIHRpdGxlID0gdGl0bGUuam9pbignICcpO1xuXG4gICAgZGVzY3JpcHRpb24ucHVzaChgJHtwYXJzZVRhZ1N0cmluZ1RvUGxhaW5TdHJpbmcoZGF0YS5jb250ZW50KSB8fCAnJ31gKTtcbiAgICBpZiAoXy5pc1BsYWluT2JqZWN0KGRhdGEudXNlcklkKSAmJiAhXy5pc0VtcHR5KGRhdGEudXNlcklkKSkge1xuICAgICAgICBkZXNjcmlwdGlvbi5wdXNoKCd8Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnB1c2goYFBvc3RlZCBCeSAke2dldFVzZXJOYW1lKGRhdGEudXNlcklkLCAnZnVsbE5hbWUnKSB8fCAnJ31gKVxuICAgIH1cbiAgICBkZXNjcmlwdGlvbiA9IF8uY29tcGFjdChkZXNjcmlwdGlvbik7XG4gICAgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi5qb2luKCcgJyk7XG5cblxuXG4gICAgbGV0IGNhbm9uaWNhbCA9IGAke2NoZWNrRW52UmV0dXJuQ21zVXJsKGNsaWVudC5pby5pby51cmkpfS9zb2NpYWwtYm9hcmQvJHtkYXRhLl9pZH1gO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBjYW5vbmljYWwsXG4gICAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbHViU2VvRGF0YShkYXRhKSB7XG5cbiAgICBpZiAoIV8uaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YSA9IF8uY2xvbmVEZWVwKGRhdGEpXG4gICAgfVxuXG4gICAgbGV0IHRpdGxlID0gW107XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gW107XG5cbiAgICB0aXRsZS5wdXNoKGAke2RhdGEuY2x1Yk5hbWUgfHwgJyd9YCk7XG4gICAgdGl0bGUucHVzaChgfGApO1xuICAgIHRpdGxlLnB1c2goYFNvY2lhbCBDbHViYCk7XG4gICAgdGl0bGUucHVzaChgLSBDQ0FSLm15ICMxIENhciBTb2NpYWwgUGxhdGZvcm1gKTtcbiAgICB0aXRsZSA9IF8uY29tcGFjdCh0aXRsZSk7XG4gICAgdGl0bGUgPSB0aXRsZS5qb2luKCcgJyk7XG5cbiAgICBkZXNjcmlwdGlvbi5wdXNoKGAke2RhdGEuY2x1YkJpbyB8fCAnJ31gKTtcbiAgICBpZiAoXy5pc1BsYWluT2JqZWN0KGRhdGEudXNlcklkKSAmJiAhXy5pc0VtcHR5KGRhdGEudXNlcklkKSkge1xuICAgICAgICBkZXNjcmlwdGlvbi5wdXNoKCd8Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnB1c2goYENyZWF0ZWQgQnkgJHtnZXRVc2VyTmFtZShkYXRhLnVzZXJJZCwgJ2Z1bGxOYW1lJykgfHwgJyd9YClcbiAgICB9XG4gICAgZGVzY3JpcHRpb24gPSBfLmNvbXBhY3QoZGVzY3JpcHRpb24pO1xuICAgIGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24uam9pbignICcpO1xuXG5cblxuICAgIGxldCBjYW5vbmljYWwgPSBgJHtjaGVja0VudlJldHVybkNtc1VybChjbGllbnQuaW8uaW8udXJpKX0vc29jaWFsLWNsdWIvJHtkYXRhLl9pZH1gO1xuICAgIGxldCBpbWFnZXMgPSBbe1xuICAgICAgICB1cmw6IF8uZ2V0KGRhdGEsICdjbHViQXZhdGFyJykgfHwgJycsXG4gICAgICAgIGFsdDogJ0NDQVIgQ2FyRnJlYWsgSW1hZ2UnXG4gICAgfV07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGNhbm9uaWNhbCxcbiAgICAgICAgaW1hZ2VzLFxuICAgIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsTmV3Q2FyU2VvRGF0YShkYXRhKSB7XG5cbiAgICBpZiAoIV8uaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YSA9IF8uY2xvbmVEZWVwKGRhdGEpXG4gICAgfVxuXG4gICAgbGV0IHRpdGxlID0gW107XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gW107XG5cbiAgICB0aXRsZS5wdXNoKGAke2dldENhckJyYW5kKGRhdGEubWFrZSkudmFsdWUgfHwgJyd9YCk7XG4gICAgdGl0bGUucHVzaChgfGApO1xuICAgIHRpdGxlLnB1c2goYCR7Xy5jYXBpdGFsaXplKGRhdGEubW9kZWwgfHwgJycpfWApO1xuICAgIHRpdGxlLnB1c2goYHxgKTtcbiAgICB0aXRsZS5wdXNoKGBBbGwgTmV3IENhciAtIENDQVIubXkgIzEgQ2FyIFNvY2lhbCBQbGF0Zm9ybWApO1xuICAgIHRpdGxlID0gXy5jb21wYWN0KHRpdGxlKTtcbiAgICB0aXRsZSA9IHRpdGxlLmpvaW4oJyAnKTtcblxuICAgIGRlc2NyaXB0aW9uLnB1c2goYFZpZXcgJHtnZXRDYXJCcmFuZChkYXRhLm1ha2UpLnZhbHVlIHx8ICcnfSAke18uY2FwaXRhbGl6ZShkYXRhLm1vZGVsIHx8ICcnKX0gQWxsIE5ldyBDYXIgYXQgQ0NBUi5teSBub3cgLSBDQ0FSLm15ICMxIENhciBTb2NpYWwgUGxhdGZvcm0gIGApO1xuICAgIGRlc2NyaXB0aW9uID0gXy5jb21wYWN0KGRlc2NyaXB0aW9uKTtcbiAgICBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLmpvaW4oJyAnKTtcblxuXG5cbiAgICBsZXQgY2Fub25pY2FsID0gYCR7Y2hlY2tFbnZSZXR1cm5DbXNVcmwoY2xpZW50LmlvLmlvLnVyaSl9L25ld2Nhci9kZXRhaWxzLyR7ZGF0YS5tYWtlfS8ke2RhdGEubW9kZWx9YDtcbiAgICBsZXQgaW1hZ2VzID0gW3tcbiAgICAgICAgdXJsOiBfLmdldChkYXRhLCAndXJpJykgfHwgJycsXG4gICAgICAgIGFsdDogYENDQVIgJHtnZXRDYXJCcmFuZChkYXRhLm1ha2UpLnZhbHVlIHx8ICcnfSAke18uY2FwaXRhbGl6ZShkYXRhLm1vZGVsIHx8ICcnKX0gSW1hZ2VgXG4gICAgfV07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGNhbm9uaWNhbCxcbiAgICAgICAgaW1hZ2VzLFxuICAgIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGl2ZVNlb0RhdGEoZGF0YSkge1xuXG4gICAgY29uc3QgYXBpRG9tYWluID0gZ2V0U3RyZWFtVXJsKGNsaWVudC5pby5pby51cmkpXG5cbiAgICBpZiAoIV8uaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YSA9IF8uY2xvbmVEZWVwKGRhdGEpXG4gICAgfVxuXG4gICAgbGV0IHRpdGxlID0gW107XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gW107XG5cbiAgICB0aXRsZS5wdXNoKGBDQ0FSIExJVkVgKTtcbiAgICB0aXRsZS5wdXNoKGB8YCk7XG4gICAgdGl0bGUucHVzaChgJHtfLmNhcGl0YWxpemUoZGF0YS51c2VyIHx8ICdDY2FyIFVzZXInKX1gKTtcbiAgICB0aXRsZS5wdXNoKGAtIENDQVIubXkgIzEgQ2FyIFNvY2lhbCBQbGF0Zm9ybWApO1xuICAgIHRpdGxlID0gXy5jb21wYWN0KHRpdGxlKTtcbiAgICB0aXRsZSA9IHRpdGxlLmpvaW4oJyAnKTtcblxuICAgIGRlc2NyaXB0aW9uLnB1c2goZGF0YS50aXRsZSk7XG4gICAgZGVzY3JpcHRpb24ucHVzaChgVmlldyBDYXIgTGl2ZSBTdHJlYW1pbmcgYXQgQ0NBUi5teSBub3cgLSBDQ0FSLm15ICMxIENhciBTb2NpYWwgUGxhdGZvcm0gIGApO1xuICAgIGRlc2NyaXB0aW9uID0gXy5jb21wYWN0KGRlc2NyaXB0aW9uKTtcbiAgICBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLmpvaW4oJyAnKTtcblxuXG5cbiAgICBsZXQgY2Fub25pY2FsID0gYCR7Y2hlY2tFbnZSZXR1cm5DbXNVcmwoY2xpZW50LmlvLmlvLnVyaSl9L2xpdmUvJHtkYXRhLmlkfWA7XG4gICAgbGV0IGltYWdlcyA9IFt7XG4gICAgICAgIHVybDogYCR7YXBpRG9tYWlufWRlYWxlclZpZGVvVGh1bWJuYWlscy8ke2RhdGEuaWR9LnBuZ2AsXG4gICAgICAgIGFsdDogYExpdmUgU3RyZWFtaW5nIEltYWdlYFxuICAgIH1dO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBjYW5vbmljYWwsXG4gICAgICAgIGltYWdlcyxcbiAgICB9XG5cbn0iLCJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgZmluZEluZGV4ZXNPZlN0cmluZywgZ2V0T2JqZWN0SWQsIGNoZWNrT2JqZWN0SWQsIGdldFVzZXJOYW1lIH0gZnJvbSAnLi4vLi4vY29tbW9uLWZ1bmN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGNoYXRSZXN0cmljdFRpbWUgPSAyMDAwO1xuZXhwb3J0IGNvbnN0IGNhckZyZWFrR2xvYmFsU2VhcmNoID0gWydjYXJGcmVhaycsICdzb2NpYWxCb2FyZCcsICdjbHViJywgJ2RlYWxlcicsICdwZW9wbGUnXTtcbmV4cG9ydCBjb25zdCB0YWdQcmVmaXggPSAnQCc7XG5leHBvcnQgY29uc3QgaGFzaFRhZ1ByZWZpeCA9ICcjJztcbmV4cG9ydCBjb25zdCB0YWdQcmVmaXhIYXNoVmFsdWUgPSAnQH4jfTpzdGFydCc7XG5leHBvcnQgY29uc3QgaGFzaFRhZ1ByZWZpeEhhc2hWYWx1ZSA9ICcjXjohJXN0YXJ0JztcbmV4cG9ydCBjb25zdCB0YWdTdWZmaXhIYXNoVmFsdWUgPSAnQF5AfX1lbmQnO1xuZXhwb3J0IGNvbnN0IGhhc2hUYWdTdWZmaXhIYXNoVmFsdWUgPSAnIz5efX5lbmQnO1xuZXhwb3J0IGNvbnN0IHNlcGVyYXRvckhhc2hWYWx1ZSA9ICddPCVzZXBlcmF0b3I+ITtfJztcbmV4cG9ydCBjb25zdCBjbHViUHJvZmlsZVZpZXdUeXBlcyA9IFsnYWRtaW4nLCAnbWVtYmVyJywgJ3BlbmRpbmcnLCAnbm9uLW1lbWJlciddO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRhZ1N0cmluZ1RvQXJyYXkodGV4dCkge1xuICAgIGlmICh0ZXh0KSB7XG4gICAgICAgIGxldCBmaW5hbFRleHQgPSBbXTtcbiAgICAgICAgbGV0IHRhZ1RleHQgPSB0ZXh0LnNwbGl0KHRhZ1N1ZmZpeEhhc2hWYWx1ZSk7XG4gICAgICAgIHRhZ1RleHQgPSBfLmZvckVhY2godGFnVGV4dCwgZnVuY3Rpb24gKGNoYXIpIHtcblxuICAgICAgICAgICAgaWYgKGNoYXIuaW5jbHVkZXModGFnUHJlZml4SGFzaFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGNoYXIgPSBjaGFyLnNwbGl0KHRhZ1ByZWZpeEhhc2hWYWx1ZSk7XG4gICAgICAgICAgICAgICAgLy9zcGxpdCBwcmVmaXggLCB0aGUgcHJldmlvdXMgMSBzdXJlIGlzIG90aGVyIHRleHRcbiAgICAgICAgICAgICAgICBpZiAoY2hhclswXSAhPSBudWxsICYmIGNoYXJbMF0gIT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9DaGVjayBpZiBvdGhlciB0ZXh0IGdvdCBoYXNodGFnXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFyWzBdLmluY2x1ZGVzKGhhc2hUYWdQcmVmaXhIYXNoVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGFzaFRhZ0FyciA9IHBhcnNlSGFzaFRhZ1N0cmluZ1RvQXJyYXkoY2hhclswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFRleHQgPSBmaW5hbFRleHQuY29uY2F0KGhhc2hUYWdBcnIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxUZXh0LnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9ybWFsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNoYXJbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL3NwbGl0IHByZWZpeCAsIHRoZSBhZnRlciAxIHN1cmUgaXMgdGFnIHRleHRcbiAgICAgICAgICAgICAgICBpZiAoY2hhclsxXSAhPSBudWxsICYmIGNoYXJbMV0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJbMV0gPSBjaGFyWzFdLnNwbGl0KHNlcGVyYXRvckhhc2hWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsVGV4dC5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0YWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjaGFyWzFdWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBjaGFyWzFdWzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGhhc2hUYWdBcnIgPSBwYXJzZUhhc2hUYWdTdHJpbmdUb0FycmF5KGNoYXIpO1xuICAgICAgICAgICAgICAgIGZpbmFsVGV4dCA9IGZpbmFsVGV4dC5jb25jYXQoaGFzaFRhZ0Fycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gZmluYWxUZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VIYXNoVGFnU3RyaW5nVG9BcnJheSh0ZXh0KSB7XG4gICAgaWYgKHRleHQpIHtcbiAgICAgICAgbGV0IGZpbmFsVGV4dCA9IFtdO1xuICAgICAgICBsZXQgdGFnVGV4dCA9IHRleHQuc3BsaXQoaGFzaFRhZ1N1ZmZpeEhhc2hWYWx1ZSk7XG4gICAgICAgIHRhZ1RleHQgPSBfLmZvckVhY2godGFnVGV4dCwgZnVuY3Rpb24gKGNoYXIpIHtcblxuICAgICAgICAgICAgaWYgKGNoYXIuaW5jbHVkZXMoaGFzaFRhZ1ByZWZpeEhhc2hWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBjaGFyID0gY2hhci5zcGxpdChoYXNoVGFnUHJlZml4SGFzaFZhbHVlKTtcbiAgICAgICAgICAgICAgICAvL3NwbGl0IHByZWZpeCAsIHRoZSBwcmV2aW91cyAxIHN1cmUgaXMgb3RoZXIgdGV4dFxuICAgICAgICAgICAgICAgIGlmIChjaGFyWzBdICE9IG51bGwgJiYgY2hhclswXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmluYWxUZXh0LnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vcm1hbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNoYXJbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9zcGxpdCBwcmVmaXggLCB0aGUgYWZ0ZXIgMSBzdXJlIGlzIHRhZyB0ZXh0XG4gICAgICAgICAgICAgICAgaWYgKGNoYXJbMV0gIT0gbnVsbCAmJiBjaGFyWzFdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFyWzFdID0gY2hhclsxXS5zcGxpdChzZXBlcmF0b3JIYXNoVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBmaW5hbFRleHQucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGFzaFRhZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNoYXJbMV1bMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGNoYXJbMV1bMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIGZpbmFsVGV4dC5wdXNoKFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9ybWFsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjaGFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGZpbmFsVGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFnU3RyaW5nKHRleHQsIGlkLCBwcmVmaXgpIHtcbiAgICBpZiAodGV4dCAmJiBpZCkge1xuICAgICAgICBsZXQgY29kZVByZWZpeCA9IHByZWZpeCA9PSAnIycgPyBoYXNoVGFnUHJlZml4SGFzaFZhbHVlIDogdGFnUHJlZml4SGFzaFZhbHVlO1xuICAgICAgICBsZXQgY29kZVN1ZmZpeCA9IHByZWZpeCA9PSAnIycgPyBoYXNoVGFnU3VmZml4SGFzaFZhbHVlIDogdGFnU3VmZml4SGFzaFZhbHVlO1xuICAgICAgICByZXR1cm4gYCR7Y29kZVByZWZpeH0ke3RleHQgfHwgJyd9JHtzZXBlcmF0b3JIYXNoVmFsdWV9JHtpZCB8fCAnJ30ke2NvZGVTdWZmaXh9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRvVGFnU3RyaW5nKHRleHQsIGFsaWFzQ29kZSkge1xuXG4gICAgaWYgKHRleHQgJiYgXy5pc0FycmF5KGFsaWFzQ29kZSkgJiYgIV8uaXNFbXB0eShhbGlhc0NvZGUpKSB7XG4gICAgICAgIGxldCBmaW5hbFRleHQgPSB0ZXh0O1xuICAgICAgICBsZXQgc29ydGVkQWxpYXNDb2RlID0gXy5yZXZlcnNlKF8uc29ydEJ5KGFsaWFzQ29kZSwgWydwb3NpdGlvbiddKSlcbiAgICAgICAgXy5mb3JFYWNoKHNvcnRlZEFsaWFzQ29kZSwgZnVuY3Rpb24gKGNvZGUpIHtcbiAgICAgICAgICAgIGxldCBuYW1lID0gY29kZS5uYW1lO1xuICAgICAgICAgICAgbGV0IGluZGV4ZXMgPSBmaW5kSW5kZXhlc09mU3RyaW5nKGZpbmFsVGV4dCwgbmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChfLmluY2x1ZGVzKGluZGV4ZXMsIGNvZGUucG9zaXRpb24pKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByZVRleHQgPSBmaW5hbFRleHQuc3Vic3RyKDAsIGNvZGUucG9zaXRpb24pIHx8ICcnO1xuICAgICAgICAgICAgICAgIGxldCBwb3N0VGV4dCA9IGZpbmFsVGV4dC5zdWJzdHIoY29kZS5wb3NpdGlvbiArIG5hbWUubGVuZ3RoKSB8fCAnJztcbiAgICAgICAgICAgICAgICBmaW5hbFRleHQgPSBwcmVUZXh0ICsgY29kZS52YWx1ZSArIHBvc3RUZXh0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBmaW5hbFRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxpYXNDb2RlRnJvbVRleHQodGV4dCkge1xuXG4gICAgaWYgKHRleHQpIHtcblxuICAgICAgICBsZXQgYWxpYXNDb2RlID0gW107XG4gICAgICAgIGxldCBzdHJ1Y3RlZFRleHQgPSAnJztcbiAgICAgICAgbGV0IHRleHRBcnIgPSBwYXJzZVRhZ1N0cmluZ1RvQXJyYXkodGV4dCk7XG4gICAgICAgIHRleHRBcnIgPSBfLm1hcCh0ZXh0QXJyLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSAhPSAndGFnJyAmJiBpdGVtLnR5cGUgIT0gJ2hhc2hUYWcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW0udWlkID0gYCR7djQoKX1gO1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBzdHJ1Y3RlZFRleHQgPSBfLmNvbXBhY3QoXy5tYXAodGV4dEFyciwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgIT0gJ3RhZycgJiYgaXRlbS50eXBlICE9ICdoYXNoVGFnJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7aXRlbS51aWR9JHtpdGVtLnZhbHVlfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcblxuICAgICAgICBzdHJ1Y3RlZFRleHQgPSBzdHJ1Y3RlZFRleHQuam9pbignJyk7XG5cblxuICAgICAgICBfLmZvckVhY2godGV4dEFyciwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT0gJ3RhZycgfHwgaXRlbS50eXBlID09ICdoYXNoVGFnJykge1xuICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IHN0cnVjdGVkVGV4dC5pbmRleE9mKGl0ZW0udWlkKTtcbiAgICAgICAgICAgICAgICBzdHJ1Y3RlZFRleHQgPSBzdHJ1Y3RlZFRleHQucmVwbGFjZShpdGVtLnVpZCwgJycpO1xuICAgICAgICAgICAgICAgIGFsaWFzQ29kZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYCR7aXRlbS50eXBlID09ICd0YWcnID8gdGFnUHJlZml4SGFzaFZhbHVlIDogaGFzaFRhZ1ByZWZpeEhhc2hWYWx1ZX0ke2l0ZW0udmFsdWUgfHwgJyd9JHtzZXBlcmF0b3JIYXNoVmFsdWV9JHtpdGVtLmlkIHx8ICcnfSR7aXRlbS50eXBlID09ICd0YWcnID8gdGFnU3VmZml4SGFzaFZhbHVlIDogaGFzaFRhZ1N1ZmZpeEhhc2hWYWx1ZX1gLFxuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IGl0ZW0udHlwZSA9PSAndGFnJyA/IHRhZ1ByZWZpeCA6IGhhc2hUYWdQcmVmaXgsXG4gICAgICAgICAgICAgICAgICAgIGVuZFBvc2l0aW9uOiBwb3NpdGlvbiArIGl0ZW0udmFsdWUubGVuZ3RoIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogaXRlbS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGFsaWFzQ29kZTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRhZ1N0cmluZ1RvUGxhaW5TdHJpbmcodGV4dCkge1xuXG4gICAgaWYgKHRleHQpIHtcbiAgICAgICAgbGV0IHRleHRBcnIgPSBwYXJzZVRhZ1N0cmluZ1RvQXJyYXkodGV4dCk7XG4gICAgICAgIHRleHRBcnIgPSBfLm1hcCh0ZXh0QXJyLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udmFsdWU7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHRleHRBcnIuam9pbignJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0TmFtZVN0cmluZyh1c2VycywgYXV0aFVzZXIpIHtcbiAgICBpZiAoXy5pc0FycmF5KHVzZXJzKSAmJiAhXy5pc0VtcHR5KHVzZXJzKSkge1xuXG4gICAgICAgIGxldCB0ZXh0ID0gJyc7XG4gICAgICAgIGxldCBjb3VudCA9IDM7XG4gICAgICAgIGlmIChnZXRPYmplY3RJZChhdXRoVXNlcikpIHtcbiAgICAgICAgICAgIHVzZXJzID0gXy5maWx0ZXIodXNlcnMsIGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrT2JqZWN0SWQodXNlciwgZ2V0T2JqZWN0SWQoYXV0aFVzZXIpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBfLmZvckVhY2godXNlcnMsIGZ1bmN0aW9uICh1c2VyLCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ICsgMSA9PSB1c2Vycy5sZW5ndGggJiYgdXNlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHRleHQgKz0gYCBhbmQgJHtnZXRVc2VyTmFtZSh1c2VyLCAnZnVsbE5hbWUnKX1gXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW5kZXggKyAxID4gY291bnQpIHtcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IGAgYW5kICR7dXNlcnMubGVuZ3RoIC0gY291bnR9IG90aGVyc2BcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGV4dCArPSBgJHtnZXRVc2VyTmFtZSh1c2VyLCAnZnVsbE5hbWUnKX1gXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IGAsICR7Z2V0VXNlck5hbWUodXNlciwgJ2Z1bGxOYW1lJyl9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnQ2NhciBVc2VyJztcbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZpZXdUeXBlKGpvaW4pIHtcblxuICAgIGlmIChfLmlzUGxhaW5PYmplY3Qoam9pbikgJiYgIV8uaXNFbXB0eShqb2luKSkge1xuICAgICAgICBpZiAoXy5nZXQoam9pbiwgWydzdGF0dXMnXSkgPT0gJ2FwcHJvdmVkJyAmJiBfLmdldChqb2luLCBbJ3JvbGUnXSkgPT0gJ2FkbWluJykge1xuICAgICAgICAgICAgcmV0dXJuIGNsdWJQcm9maWxlVmlld1R5cGVzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uZ2V0KGpvaW4sIFsnc3RhdHVzJ10pID09ICdhcHByb3ZlZCcgJiYgXy5nZXQoam9pbiwgWydyb2xlJ10pID09ICdtZW1iZXInKSB7XG4gICAgICAgICAgICByZXR1cm4gY2x1YlByb2ZpbGVWaWV3VHlwZXNbMV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5nZXQoam9pbiwgWydzdGF0dXMnXSkgPT0gJ3BlbmRpbmcnICYmIF8uZ2V0KGpvaW4sIFsncm9sZSddKSA9PSAnbWVtYmVyJykge1xuICAgICAgICAgICAgcmV0dXJuIGNsdWJQcm9maWxlVmlld1R5cGVzWzJdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNsdWJQcm9maWxlVmlld1R5cGVzWzNdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjbHViUHJvZmlsZVZpZXdUeXBlc1szXTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlVmlld1R5cGUoZGF0YSkge1xuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIHJldHVybiBjbHViUHJvZmlsZVZpZXdUeXBlc1szXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXy5maW5kKGNsdWJQcm9maWxlVmlld1R5cGVzLCBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGUgPT0gZGF0YTtcbiAgICAgICAgfSkgfHwgY2x1YlByb2ZpbGVWaWV3VHlwZXNbM107XG4gICAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uLCBhbmltYXRlZCB9IGZyb20gXCJyZWFjdC1zcHJpbmdcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VSb3V0ZXJcIjtcblxuXG5cbmV4cG9ydCBjb25zdCBQYWdlVHJhbnNpdGlvbiA9ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB0cmFuc2l0aW9ucyA9IHVzZVRyYW5zaXRpb24ocm91dGVyLCByb3V0ZXIgPT4gcm91dGVyLnBhdGhuYW1lLCB7XG4gICAgZnJvbTogeyBvcGFjaXR5OiAwIH0sXG4gICAgZW50ZXI6IHsgb3BhY2l0eTogMSB9LFxuICAgIGxlYXZlOiB7XG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgdG9wOiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgb3BhY2l0eTogMFxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3RyYW5zaXRpb25zLm1hcCgoeyBpdGVtLCBwcm9wczogc3R5bGUsIGtleSB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFBhZ2Uga2V5PXtrZXl9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9QYWdlPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBQYWdlID0gc3R5bGVkKGFuaW1hdGVkLm1haW4pYFxuICBtaW4taGVpZ2h0OiAxMDAlO1xuYDtcbiIsIlxuXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaXNWYWxpZE51bWJlciwgdG9DYW1lbENhc2UsIG5vdEVtcHR5TGVuZ3RoLCBnZXRUb3BJdGVtcyAgfSBmcm9tICcuLi8uLi9jb21tb24tZnVuY3Rpb24nO1xuXG5cbmV4cG9ydCBjb25zdCB0ZXN0U3RyZWFtVXJsID0gJ2h0dHBzOi8vc3RyZWFtLXVhdDIuY2Nhci5teSc7XG5leHBvcnQgY29uc3QgbGl2ZVN0cmVhbVVybCA9ICdodHRwczovL3N0cmVhbS5jY2FyLm15JztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmVhbVVybCh1cmwpe1xuXG4gICAgbGV0IHN0cmVhbSA9IHRlc3RTdHJlYW1Vcmw7XG4gICAgaWYgKHVybD09PSdodHRwOi8vbG9jYWxob3N0OjMwMzAvJyl7c3RyZWFtID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAzMCd9XG4gICAgZWxzZSBpZiAodXJsPT09J2h0dHBzOi8vdWF0Mi1hcGkuY2Nhci5teS8nKXtzdHJlYW0gPSB0ZXN0U3RyZWFtVXJsfVxuICAgIGVsc2UgaWYgKHVybD09PSdodHRwczovL2FwaS5jY2FyLm15Lycpe3N0cmVhbSA9IGxpdmVTdHJlYW1Vcmx9XG4gICAgZWxzZSBpZiAodXJsPT09J2h0dHBzOi8vcHJlcHJvZC1hcGkuY2Nhci5teS8nKXtzdHJlYW0gPSB0ZXN0U3RyZWFtVXJsfVxuICAgIGVsc2UgIHtzdHJlYW0gPSAnaHR0cDovL2xvY2FsaG9zdDozMDMwJ30gLy9kZWZhdWx0IHRlc3RpbmdcbiAgICBcbiAgICAvLyByZXR1cm4gJ2h0dHA6Ly8xOTIuMTY4LjAuMTkxOjcwNzAvJztcbiAgICAvLyByZXR1cm4gXCJodHRwczovL3N0cmVhbS11YXQyLmNjYXIubXlcIjtcbiAgICAvLyByZXR1cm4gJ2h0dHA6Ly9sb2NhbGhvc3Q6NzA3MC8nO1xuICAgIC8vIHJldHVybiAnaHR0cDovLzE5Mi4xNjguMC4xNDk6MzA0MS8nO1xuICAgIHJldHVybiBzdHJlYW07XG59XG5cblxuY29uc3QgZ2lmdHMgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiAna29waS1pY2UnLFxuICAgICAgICBwcmljZTogMTAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICd3aGl0ZS1yaWNlJyxcbiAgICAgICAgcHJpY2U6IDEwLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAncm90aS1jYW5haScsXG4gICAgICAgIHByaWNlOiAyMCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ25hc2ktbGVtYWsnLFxuICAgICAgICBwcmljZTogMjAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICduYXNpLWthbmRhcicsXG4gICAgICAgIHByaWNlOiA1MCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ3JhbWx5LWJ1cmdlcicsXG4gICAgICAgIHByaWNlOiA1MCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ2RpbXN1bScsXG4gICAgICAgIHByaWNlOiAxMDAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdiaXJ5YW5pJyxcbiAgICAgICAgcHJpY2U6IDEwMCxcbiAgICB9LFxuXTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0UmVhY3Rpb25zID0gWydsaWtlJywgJ2hlYXJ0JywgJ2xhdWdoaW5nJywgJ2NyeWluZycsICdhbmdyeScsICdzbGVlcGluZycsICdyb2xsaW5nRXllJ107XG5leHBvcnQgY29uc3QgZGVmYXVsdFJlYWN0aW9uc0FuaW1hdGlvbiA9IFsnbm9uZScsICdsZWFzdCcsICdsZXNzJywgJ25vcm1hbCcsICdtb3JlJywgJ21vc3QnXTtcblxuXG5sZXQgdGVtcCA9IHt9O1xuXy5mb3JFYWNoKGRlZmF1bHRSZWFjdGlvbnMsIGZ1bmN0aW9uIChyZWFjdCkge1xuICAgIHRlbXBbYCR7cmVhY3R9R2lmYF0gPSBgL2Fzc2V0cy9saXZlLyR7cmVhY3R9LmdpZmA7XG59KVxuXG5leHBvcnQgY29uc3QgcmVhY3Rpb25HaWYgPSB0ZW1wO1xuXG5cbnRlbXAgPSBbXTtcbnRlbXAgPSBfLm1hcChnaWZ0cywgZnVuY3Rpb24gKGdpZnQpIHtcbiAgICBnaWZ0Lmljb24gPSBgL2Fzc2V0cy9saXZlLyR7Z2lmdC5uYW1lfS5wbmdgO1xuICAgIGdpZnQubmFtZSA9IHRvQ2FtZWxDYXNlKGdpZnQubmFtZSwgJy0nKTtcbiAgICByZXR1cm4gZ2lmdDtcbn0pXG5leHBvcnQgY29uc3QgZGVmYXVsdEdpZnRzID0gdGVtcDtcblxuZXhwb3J0IGNvbnN0IGxpdmVJY29uID0gJy9hc3NldHMvbGl2ZS9saXZlLnBuZyc7XG5leHBvcnQgY29uc3Qgc3VwcG9ydEljb24gPSAnL2Fzc2V0cy9saXZlL3N1cHBvcnQucG5nJztcbmV4cG9ydCBjb25zdCBsaWtlSWNvbiA9ICcvYXNzZXRzL2xpdmUvbGlrZS5wbmcnO1xuZXhwb3J0IGNvbnN0IGNvbW1lbnRJY29uID0gJy9hc3NldHMvbGl2ZS9jb21tZW50LnBuZyc7XG5leHBvcnQgY29uc3Qgc2hhcmVJY29uID0gJy9hc3NldHMvbGl2ZS9zaGFyZS5wbmcnO1xuZXhwb3J0IGNvbnN0IGdpZnRHaWYgPSAnL2Fzc2V0cy9saXZlL2dpZnQuZ2lmJztcbmV4cG9ydCBjb25zdCBjY29pbkljb24gPSAnL2Fzc2V0cy9saXZlL2Njb2luLnBuZyc7XG5cblxuZXhwb3J0IGNvbnN0IHJlYWN0aW9uQW5pbWF0aW9uVHJhbnNpdGlvbnMgPSBnZW5lcmF0ZVJhbmRvbVRyYW5zaXRpb24oMzAsIDQwMCwgNCwgNCk7XG5cbmV4cG9ydCBjb25zdCBMSVZFX1RFWFRfVEVNUExBVEUgPSB7XG4gICAgJ2NsaWVudC1qb2luZWQnOiAnaGFzIGpvaW5lZCcsXG4gICAgJ2NsaWVudC1sZWZ0JzogJ2hhcyBsZWZ0JyxcbiAgICAnY2xpZW50LXRleHQnOiAnJywgXG4gICAgJ2RlYWxlci10ZXh0JzogJycsXG4gICAgXCJhbm9ueW1vdXMtam9pbmVkXCI6ICdoYXMgam9pbmVkJyxcbiAgICBcImFub255bW91cy1sZWZ0XCI6J2hhcyBsZWZ0JyxcbiAgfVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21UcmFuc2l0aW9uKG1heFRyYW5zaXRpb25YLCBtYXhUcmFuc2l0aW9uWSwgZWFjaFRyYW5zaXRpb25MZW5ndGgsIGdyb3VwKSB7XG5cbiAgICBsZXQgcmVhY3Rpb25BbmltYXRpb25UcmFuc2l0aW9uc1RlbXAgPSBbXTtcbiAgICBsZXQgZWFjaFRyYW5zaXRpb24gPSBbXTtcblxuICAgIGlmICghaXNWYWxpZE51bWJlcihtYXhUcmFuc2l0aW9uWCkpIHtcbiAgICAgICAgbWF4VHJhbnNpdGlvblggPSAzMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtYXhUcmFuc2l0aW9uWCA9IHBhcnNlSW50KG1heFRyYW5zaXRpb25YKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzVmFsaWROdW1iZXIobWF4VHJhbnNpdGlvblkpKSB7XG4gICAgICAgIG1heFRyYW5zaXRpb25ZID0gNDAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1heFRyYW5zaXRpb25ZID0gcGFyc2VJbnQobWF4VHJhbnNpdGlvblkpO1xuICAgIH1cblxuICAgIGlmICghaXNWYWxpZE51bWJlcihlYWNoVHJhbnNpdGlvbkxlbmd0aCkgfHwgcGFyc2VJbnQoZWFjaFRyYW5zaXRpb25MZW5ndGgpIDwgNCkge1xuICAgICAgICBlYWNoVHJhbnNpdGlvbkxlbmd0aCA9IDQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWFjaFRyYW5zaXRpb25MZW5ndGggPSBwYXJzZUludChlYWNoVHJhbnNpdGlvbkxlbmd0aCk7XG4gICAgfVxuXG4gICAgaWYgKCFpc1ZhbGlkTnVtYmVyKGdyb3VwKSB8fCBwYXJzZUludChncm91cCkgPCAwKSB7XG4gICAgICAgIGdyb3VwID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBncm91cCA9IHBhcnNlSW50KGdyb3VwKTtcbiAgICB9XG5cbiAgICBfLmZvckVhY2goXy5yYW5nZShncm91cCksIGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBlYWNoVHJhbnNpdGlvbi5wdXNoKHsgeDogMCwgeTogMCB9KTtcbiAgICAgICAgXy5mb3JFYWNoKF8ucmFuZ2UoZWFjaFRyYW5zaXRpb25MZW5ndGggLSAyKSwgZnVuY3Rpb24gKGluZGV4MSkge1xuICAgICAgICAgICAgZWFjaFRyYW5zaXRpb24ucHVzaCh7IHg6IF8ucmFuZG9tKC1tYXhUcmFuc2l0aW9uWCwgbWF4VHJhbnNpdGlvblgsIGZhbHNlKSwgeTogLShtYXhUcmFuc2l0aW9uWSAvIChlYWNoVHJhbnNpdGlvbkxlbmd0aCAtIGluZGV4MSkpIH0pO1xuICAgICAgICB9KVxuICAgICAgICBlYWNoVHJhbnNpdGlvbi5wdXNoKHsgeDogMCwgeTogLW1heFRyYW5zaXRpb25ZIH0pO1xuICAgICAgICByZWFjdGlvbkFuaW1hdGlvblRyYW5zaXRpb25zVGVtcC5wdXNoKGVhY2hUcmFuc2l0aW9uKTtcbiAgICAgICAgZWFjaFRyYW5zaXRpb24gPSBbXTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlYWN0aW9uQW5pbWF0aW9uVHJhbnNpdGlvbnNUZW1wO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3RhbFJlYWN0aW9ucyhyZWFjdGlvbnMpIHtcblxuXG4gICAgaWYgKF8uaXNBcnJheShyZWFjdGlvbnMpICYmIG5vdEVtcHR5TGVuZ3RoKHJlYWN0aW9ucykpIHtcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcbiAgICAgICAgXy5mb3JFYWNoKHJlYWN0aW9ucywgZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAoIV8uaXNOYU4ocGFyc2VJbnQocmVhY3Rpb24udG90YWwpKSkge1xuICAgICAgICAgICAgICAgIHRvdGFsICs9IHBhcnNlSW50KHJlYWN0aW9uLnRvdGFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gdG90YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9wUmVhY3Rpb25zKHJlYWN0aW9ucywgcmFuaykge1xuXG4gICAgaWYgKF8uaXNBcnJheShyZWFjdGlvbnMpICYmIG5vdEVtcHR5TGVuZ3RoKHJlYWN0aW9ucykpIHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkTnVtYmVyKHJhbmspKSB7XG4gICAgICAgICAgICByYW5rID0gMztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJhbmsgPSBwYXJzZUludChyYW5rKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vZmlsdGVyIG91dCByZWFjdGlvbiBub3QgaW4gbGlzdFxuICAgICAgICBsZXQgZmlsdGVyZWREYXRhID0gXy5jb21wYWN0KF8ubWFwKHJlYWN0aW9ucywgZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAoXy5pbmRleE9mKGRlZmF1bHRSZWFjdGlvbnMsIHJlYWN0aW9uLnR5cGUpICE9IC0xICYmIGlzVmFsaWROdW1iZXIocmVhY3Rpb24udG90YWwpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWN0aW9uO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuXG4gICAgICAgIC8vZ2V0IHRvcCByZWFjdGlvbnNcbiAgICAgICAgZmlsdGVyZWREYXRhID0gZ2V0VG9wSXRlbXMoZmlsdGVyZWREYXRhLCByYW5rLCAndG90YWwnKTtcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkRGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPZmZlcihzb2NrZXQsIGJyb2FkY2FzdGVyKSB7XG5cbiAgICBpZiAoISFicm9hZGNhc3RlciAmJiAhIXNvY2tldCkge1xuXG4gICAgICAgIGNvbnN0IHBjX2NvbmZpZyA9IHtcbiAgICAgICAgICAgIGljZVNlcnZlcnM6IFt7XG4gICAgICAgICAgICAgIHVybHM6IFsgXCJzdHVuOnNzLXR1cm4yLnhpcnN5cy5jb21cIiBdXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgdXNlcm5hbWU6IFwiSzdSWUpRMGlPODZJelUtcGFhNmd1WHhmTEo3dlhXaEZ3Zld6RTNYODgtTE9zVDBRTjR2cXV3QVV4MXZzSkptcUFBQUFBRi15ZXpCalkyRnlNekV6TVE9PVwiLFxuICAgICAgICAgICAgICBjcmVkZW50aWFsOiBcImE1ZTMxYjE2LTI4MGQtMTFlYi04OWUzLTAyNDJhYzE0MDAwNFwiLFxuICAgICAgICAgICAgICB1cmxzOiBbXG4gICAgICAgICAgICAgICAgICBcInR1cm46c3MtdHVybjIueGlyc3lzLmNvbTo4MD90cmFuc3BvcnQ9dWRwXCIsXG4gICAgICAgICAgICAgICAgICBcInR1cm46c3MtdHVybjIueGlyc3lzLmNvbTozNDc4P3RyYW5zcG9ydD11ZHBcIixcbiAgICAgICAgICAgICAgICAgIFwidHVybjpzcy10dXJuMi54aXJzeXMuY29tOjgwP3RyYW5zcG9ydD10Y3BcIixcbiAgICAgICAgICAgICAgICAgIFwidHVybjpzcy10dXJuMi54aXJzeXMuY29tOjM0Nzg/dHJhbnNwb3J0PXRjcFwiLFxuICAgICAgICAgICAgICAgICAgXCJ0dXJuczpzcy10dXJuMi54aXJzeXMuY29tOjQ0Mz90cmFuc3BvcnQ9dGNwXCIsXG4gICAgICAgICAgICAgICAgICBcInR1cm5zOnNzLXR1cm4yLnhpcnN5cy5jb206NTM0OT90cmFuc3BvcnQ9dGNwXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICB9XVxuICAgICAgICAgIH1cblxuICAgICAgICBicm9hZGNhc3Rlci5wZWVyQ29ubmVjdGlvbiA9IG5ldyBSVENQZWVyQ29ubmVjdGlvbihwY19jb25maWcpXG5cbiAgICAgICAgYnJvYWRjYXN0ZXIucGVlckNvbm5lY3Rpb24uY3JlYXRlT2ZmZXIoe1xuICAgICAgICAgICAgb2ZmZXJUb1JlY2VpdmVWaWRlbzogMSxcbiAgICAgICAgICAgIC8vZm9yIGF1ZGlvXG4gICAgICAgICAgICBvZmZlclRvUmVjZWl2ZUF1ZGlvOiAxXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihzZHAgPT4ge1xuICAgICAgICAgICAgICAgIGJyb2FkY2FzdGVyLnBlZXJDb25uZWN0aW9uLnNldExvY2FsRGVzY3JpcHRpb24oc2RwKTtcbiBcbiAgICAgICAgICAgICAgICBzZW5kVG9QZWVyKHNvY2tldCwgJ2NsaWVudFJlcXVlc3RWaWRlb1dpdGhEZWFsZXJTb2NrZXRJZCcsIHsgc2RwLCBkZWFsZXJTb2NrZXRJZDogYnJvYWRjYXN0ZXIuZGVhbGVyU29ja2V0SWQgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJyb2FkY2FzdGVyO1xuICAgICAgICAgICAgfSkuY2F0Y2goeCA9PiB7XG4gXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29mZmVyIGZhaWxlZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZW5kVG9QZWVyKHNvY2tldCwgbWVzc2FnZVR5cGUsIHBheWxvYWQpIHtcblxuICAgIGlmICghIXNvY2tldCkge1xuICAgICAgICBzb2NrZXQuZW1pdChtZXNzYWdlVHlwZSwge1xuICAgICAgICAgICAgc2VuZGVySWQ6IHNvY2tldC5pZCxcbiAgICAgICAgICAgIHBheWxvYWRcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZVRoZVBlZXJDb25uZWN0aW9uKHNvY2tldCwgcGVlckNvbm5lY3Rpb24sIHByZXZpb3VzRGVhbGVyU29ja2V0SWQpIHtcbiAgICBpZiAoISFwZWVyQ29ubmVjdGlvbiAmJiAhIXNvY2tldCAmJiAhIXByZXZpb3VzRGVhbGVyU29ja2V0SWQpIHtcbiAgICAgICAgcGVlckNvbm5lY3Rpb24uY2xvc2UoKTtcbiAgICAgICAgc29ja2V0LmVtaXQoJ2Nsb3NlQ2xpZW50U29ja2V0JywgcHJldmlvdXNEZWFsZXJTb2NrZXRJZCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3luY1JlYWN0aW9uU3VtbWFyeShyZWFjdGlvbkxvZ3MpIHtcbiAgICBsZXQgcmVhY3Rpb25TdW1tYXJ5ID0gXy5tYXAoZGVmYXVsdFJlYWN0aW9ucywgZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiByZWFjdGlvbixcbiAgICAgICAgICAgIHRvdGFsOiAwLFxuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKF8uaXNBcnJheShyZWFjdGlvbkxvZ3MpICYmIG5vdEVtcHR5TGVuZ3RoKHJlYWN0aW9uTG9ncykpIHtcbiAgICAgICAgcmVhY3Rpb25TdW1tYXJ5ID0gXy5tYXAocmVhY3Rpb25TdW1tYXJ5LCBmdW5jdGlvbiAoc3VtbWFyeSkge1xuXG4gICAgICAgICAgICBsZXQgbG9ncyA9IF8uZmlsdGVyKHJlYWN0aW9uTG9ncywgWyd0eXBlJywgc3VtbWFyeS50eXBlXSk7XG4gICAgICAgICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgICAgICAgXy5mb3JFYWNoKGxvZ3MsIGZ1bmN0aW9uIChsb2cpIHtcbiAgICAgICAgICAgICAgICB0b3RhbCArPSBsb2cudG90YWw7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IHN1bW1hcnkudHlwZSxcbiAgICAgICAgICAgICAgICB0b3RhbDogdG90YWwsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlYWN0aW9uU3VtbWFyeTtcbn1cbiIsImltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcbmltcG9ydCBmZWF0aGVycyBmcm9tICdAZmVhdGhlcnNqcy9mZWF0aGVycyc7XG5pbXBvcnQgc29ja2V0aW8gZnJvbSAnQGZlYXRoZXJzanMvc29ja2V0aW8tY2xpZW50JztcbmltcG9ydCBhdXRoZW50aWNhdGlvbiBmcm9tICdAZmVhdGhlcnNqcy9hdXRoZW50aWNhdGlvbi1jbGllbnQnO1xuXG5jb25zdCBzb2NrZXQgPSBpbygnaHR0cDovL2xvY2FsaG9zdDozMDMwLycpOyAgIC8vIGxvY2FsL1xuLy8gY29uc3Qgc29ja2V0ID0gaW8oJ2h0dHBzOi8vdWF0Mi1hcGkuY2Nhci5teS8nKTsgIC8vdWF0XG4vLyBjb25zdCBzb2NrZXQgPSBpbygnaHR0cHM6Ly9hcGkuY2Nhci5teS8nKTsgICAvLyBsaXZlXG4vLyBjb25zdCBzb2NrZXQgPSBpbygnaHR0cHM6Ly9wcmVwcm9kLWFwaS5jY2FyLm15LycpOyAgIC8vIGxpdmVcbiBcbmNvbnN0IGNsaWVudCA9IGZlYXRoZXJzKCk7XG5cbmNsaWVudC5jb25maWd1cmUoc29ja2V0aW8oc29ja2V0KSwgeyBwaW5nVGltZU91dDogNjAwMDAgfSk7XG4vLyBjbGllbnQuY29uZmlndXJlKGF1dGhlbnRpY2F0aW9uKHtcbi8vICAgc3RvcmFnZTogd2luZG93LmxvY2FsU3RvcmFnZVxuLy8gfSkpO1xuY2xpZW50LmNvbmZpZ3VyZShhdXRoZW50aWNhdGlvbigpKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50OyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRNb25leShhbW91bnQsIGRlY2ltYWxDb3VudCA9IDIsIGRlY2ltYWwgPSBcIi5cIiwgdGhvdXNhbmRzID0gXCIsXCIpIHtcbiAgICB0cnkge1xuICAgICAgZGVjaW1hbENvdW50ID0gTWF0aC5hYnMoZGVjaW1hbENvdW50KTtcbiAgICAgIGRlY2ltYWxDb3VudCA9IGlzTmFOKGRlY2ltYWxDb3VudCkgPyAyIDogZGVjaW1hbENvdW50O1xuICBcbiAgICAgIGNvbnN0IG5lZ2F0aXZlU2lnbiA9IGFtb3VudCA8IDAgPyBcIi1cIiA6IFwiXCI7XG4gIFxuICAgICAgbGV0IGkgPSBwYXJzZUludChhbW91bnQgPSBNYXRoLmFicyhOdW1iZXIoYW1vdW50KSB8fCAwKS50b0ZpeGVkKGRlY2ltYWxDb3VudCkpLnRvU3RyaW5nKCk7XG4gICAgICBsZXQgaiA9IChpLmxlbmd0aCA+IDMpID8gaS5sZW5ndGggJSAzIDogMDtcbiAgXG4gICAgICByZXR1cm4gbmVnYXRpdmVTaWduICsgKGogPyBpLnN1YnN0cigwLCBqKSArIHRob3VzYW5kcyA6ICcnKSArIGkuc3Vic3RyKGopLnJlcGxhY2UoLyhcXGR7M30pKD89XFxkKS9nLCBcIiQxXCIgKyB0aG91c2FuZHMpICsgKGRlY2ltYWxDb3VudCA/IGRlY2ltYWwgKyBNYXRoLmFicyhhbW91bnQgLSBpKS50b0ZpeGVkKGRlY2ltYWxDb3VudCkuc2xpY2UoMikgOiBcIlwiKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gXG4gICAgfVxuICB9O1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsTW9udGgodil7XG4gICAgbGV0IExvYW5BbW91bnQgPSB2KjAuOSAgLy8gMTAlIGRvd24gcGF5bWVudFxuICAgIGxldCBMb2FuUGVyaW9kID0gOVxuICAgIGxldCBJbnRlcmVzdCA9IDNcbiAgICBsZXQgdG90YWxJbnRlcmVzdCA9IEludGVyZXN0LzEwMCAqIExvYW5BbW91bnQgKiBMb2FuUGVyaW9kXG4gICAgbGV0IG1vbnRobHlJbnRlcmVzdCA9IHRvdGFsSW50ZXJlc3QgLyAoTG9hblBlcmlvZCAqIDEyKVxuICAgIGxldCBtb250aGx5SW5zdGFsbWVudCA9IChMb2FuQW1vdW50ICsgdG90YWxJbnRlcmVzdCkgLyAoTG9hblBlcmlvZCAqIDEyKVxuICAgIHJldHVybiBtb250aGx5SW5zdGFsbWVudFxuICB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXROdW1iZXIoYW1vdW50KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKGFtb3VudCkgPiA5OTkgPyBNYXRoLnNpZ24oYW1vdW50KSAqICgoTWF0aC5hYnMoYW1vdW50KSAvIDEwMDApLnRvRml4ZWQoMSkpIDogTWF0aC5zaWduKGFtb3VudCkgKiBNYXRoLmFicyhhbW91bnQpXG4gIH0gY2F0Y2ggKGUpIHtcbiBcbiAgfVxufTtcblxuXG4gXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmFjZUJvb2tJZCh1cmwpIHtcbiBcbiAgbGV0IGFwcElkID0nJ1xuXG4vLyBhcHBJZD1cIjY5NDQ1ODkwMTI4MzM5MVwiIC8vZmFyYVxuLy8gYXBwSWQ9XCIyNzU0ODQ1MjcxNTA5NDhcIlxuLy8gIGFwcElkPVwiNjE2MTczMDI5MzE4MTM0XCIgLy9zaWFuZ3Npb25nXG4vLyBhcHBJZD1cIjc0NzE3ODAxMjc1MzQxMFwiIC8vbGl2ZVxuLy8gYXBwSWQ9XCIxODUyMjkwODYwNzkxODlcIi8vbG9jYWwgOjMwMDEgLS1jZiAgICAgXG4vLyBhcHBJZD1cIjcwMzczMTEwNzIxNjk3OVwiIC8vdWF0MiAtLWNmICBcblxuICBpZiAodXJsPT09J2h0dHA6Ly9sb2NhbGhvc3Q6MzAzMC8nKXthcHBJZCA9ICc2OTQ0NTg5MDEyODMzOTEnfVxuICBlbHNlIGlmICh1cmw9PT0naHR0cHM6Ly91YXQyLWFwaS5jY2FyLm15Lycpe2FwcElkID0gJzcwMzczMTEwNzIxNjk3OSd9XG4gIGVsc2UgaWYgKHVybD09PSdodHRwczovL2FwaS5jY2FyLm15Lycpe2FwcElkID0gJzc0NzE3ODAxMjc1MzQxMCd9XG4gIGVsc2UgaWYgKHVybD09PSdodHRwczovL3ByZXByb2QtYXBpLmNjYXIubXkvJyl7YXBwSWQgPSAnNjk0NDU4OTAxMjgzMzkxJ31cbiAgZWxzZSAge2FwcElkID0gJzY5NDQ1ODkwMTI4MzM5MSd9IC8vZGVmYXVsdCBwcm9kXG5cbiAgcmV0dXJuICBhcHBJZFxuXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0R29vZ2xlSWQodXJsKSB7XG4gXG4gIGxldCBjbGllbnRJZCA9JydcblxuICAvLyBjbGllbnRJZD1cIjgyNzE0Nzk4NjQzMC1lMjhjNjNxZnRqOTFzcDUwNnI4a20ydjFzbmNjbnQzNi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiIC8vIGxpdmVcbiAgLy8gY2xpZW50SWQ9XCIxODI5MjQxMTkwNDQtNTNrM2c4Y3V2NDV1NWo2N2N0aWNldnZvMTVnNzg0NmkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIi8vdWF0MlxuXG4gIGlmICh1cmw9PT0naHR0cDovL2xvY2FsaG9zdDozMDMwLycpe2NsaWVudElkID0gJzE4MjkyNDExOTA0NC01M2szZzhjdXY0NXU1ajY3Y3RpY2V2dm8xNWc3ODQ2aS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSd9XG4gIGVsc2UgaWYgKHVybD09PSdodHRwczovL3ByZXByb2QtYXBpLmNjYXIubXkvJyl7Y2xpZW50SWQgPSAnMTgyOTI0MTE5MDQ0LTUzazNnOGN1djQ1dTVqNjdjdGljZXZ2bzE1Zzc4NDZpLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJ31cbiAgZWxzZSBpZiAodXJsPT09J2h0dHBzOi8vdWF0Mi1hcGkuY2Nhci5teS8nKXtjbGllbnRJZCA9ICcxODI5MjQxMTkwNDQtNTNrM2c4Y3V2NDV1NWo2N2N0aWNldnZvMTVnNzg0NmkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nfVxuICBlbHNlIGlmICh1cmw9PT0naHR0cHM6Ly9wcmVwcm9kLWFwaS5jY2FyLm15Lycpe2NsaWVudElkID0gJzE4MjkyNDExOTA0NC01M2szZzhjdXY0NXU1ajY3Y3RpY2V2dm8xNWc3ODQ2aS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSd9XG4gIGVsc2UgaWYgKHVybD09PSdodHRwczovL2FwaS5jY2FyLm15Lycpe2NsaWVudElkID0gJzgyNzE0Nzk4NjQzMC1lMjhjNjNxZnRqOTFzcDUwNnI4a20ydjFzbmNjbnQzNi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSd9XG4gIGVsc2Uge2NsaWVudElkID0gJzgyNzE0Nzk4NjQzMC1lMjhjNjNxZnRqOTFzcDUwNnI4a20ydjFzbmNjbnQzNi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSd9XG5cbiAgcmV0dXJuICBjbGllbnRJZFxuXG59O1xuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJNaWxlYWdlUmFuZ2UobWlsZWFnZSwgbWlsZWFnZTIpIHtcbiBcbiAgICBsZXQgbWlsZWFnZVJhbmdlID0gMCwgdXNlTWlsZWFnZSA9ICdubycsIHVzZU1pbGVhZ2UyID0gJ25vJ1xuXG4gICAgaWYgKG1pbGVhZ2UpIHtcbiAgICAgICAgaWYgKG1pbGVhZ2UgPiAwKSB7XG4gICAgICAgICAgICBtaWxlYWdlUmFuZ2UgPSBtaWxlYWdlXG4gICAgICAgICAgICB1c2VNaWxlYWdlID0gJ3llcydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtaWxlYWdlMikge1xuICAgICAgICBpZiAobWlsZWFnZTIgPiAwKSB7XG4gICAgICAgICAgICBtaWxlYWdlUmFuZ2UgPSBtaWxlYWdlMlxuICAgICAgICAgICAgdXNlTWlsZWFnZTIgPSAneWVzJ1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG1pbGVhZ2VSYW5nZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG1pbGVhZ2VSYW5nZSA9IHBhcnNlRmxvYXQobWlsZWFnZVJhbmdlKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHsgcmV0dXJuIG1pbGVhZ2VSYW5nZSB9XG4gICAgfVxuXG4gICAgaWYgKHVzZU1pbGVhZ2UgPT09ICd5ZXMnKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBtaWxlYWdlUmFuZ2UgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBsZXQgbWlsZWFnZUZyb20gPSAobWlsZWFnZVJhbmdlIC0gMjUwMCkgLyAxMDAwXG4gICAgICAgICAgICBsZXQgbWlsZWFnZVRvID0gKG1pbGVhZ2VSYW5nZSArIDI1MDApIC8gMTAwMFxuICAgICAgICAgICAgbWlsZWFnZVJhbmdlID0gbWlsZWFnZUZyb20gKyAnLScgKyBtaWxlYWdlVG8gKyAnSyBLTSdcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5pc0VtcHR5KG1pbGVhZ2VSYW5nZSkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIG1pbGVhZ2VSYW5nZSA9ICcwIEtNJ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaWxlYWdlUmFuZ2VcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG1pbGVhZ2VSYW5nZSA9IG1pbGVhZ2VSYW5nZSAvIDEwMDBcbiAgICAgICAgcmV0dXJuIG1pbGVhZ2VSYW5nZSArICcgS00nXG4gICAgfVxuIFxufTtcblxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tFbnYodXJsKSB7XG4gIFxuICBsZXQgZW52ID0gJyc7XG4gIGlmICh1cmw9PT0naHR0cDovL2xvY2FsaG9zdDozMDMwLycpe2VudiA9ICdsb2NhbCd9XG4gIGVsc2UgaWYgKHVybD09PSdodHRwczovL3VhdDItYXBpLmNjYXIubXkvJyl7ZW52ID0gJ3VhdCd9XG4gIGVsc2UgaWYgKHVybD09PSdodHRwczovL3ByZXByb2QtYXBpLmNjYXIubXkvJyl7ZW52ID0gJ3ByZXByb2QnfVxuICBlbHNlIGlmICh1cmw9PT0naHR0cHM6Ly9hcGkuY2Nhci5teS8nKXtlbnYgPSAncHJvZCd9XG4gIGVsc2UgIHtlbnY9J3Byb2QnfSBcbiAgcmV0dXJuICBlbnZcblxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRW52UmV0dXJuV2ViQWRtaW4odXJsKSB7XG4gIFxuICBsZXQgZnJvbnRFbmRVcmwgPScnXG5cbiAgaWYgKHVybD09PSdodHRwOi8vbG9jYWxob3N0OjMwMzAvJylcbiAge1xuICAgIGZyb250RW5kVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nXG4gIH1cbiAgZWxzZSBpZiAodXJsPT09J2h0dHBzOi8vdWF0Mi1hcGkuY2Nhci5teS8nKVxuICB7XG4gICAgZnJvbnRFbmRVcmwgPSAnaHR0cDovL3VhdDItYWRtLmNjYXIubXkvJ1xuICB9XG4gIGVsc2UgaWYgKHVybD09PSdodHRwczovL3ByZXByb2QtYXBpLmNjYXIubXkvJylcbiAge1xuICAgIGZyb250RW5kVXJsID0gJ2h0dHA6Ly9wcmVwcm9kLWFkbS5jY2FyLm15LydcbiAgfVxuICBlbHNlIGlmICh1cmw9PT0naHR0cHM6Ly9hcGkuY2Nhci5teS8nKVxuICB7XG4gICAgZnJvbnRFbmRVcmwgPSAnaHR0cHM6Ly9hZG0uY2Nhci5teS8nXG4gIH1cbiAgcmV0dXJuICBmcm9udEVuZFVybFxuXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tFbnZSZXR1cm5DbXNVcmwodXJsKSB7XG4gIFxuICBsZXQgZnJvbnRFbmRVcmwgPSdodHRwczovL3VhdDJzc3IuY2Nhci5teSdcblxuICBpZiAodXJsPT09J2h0dHA6Ly9sb2NhbGhvc3Q6MzAzMC8nKVxuICB7XG4gICAgZnJvbnRFbmRVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDExJ1xuICB9XG4gIGVsc2UgaWYgKHVybD09PSdodHRwczovL3VhdDItYXBpLmNjYXIubXkvJylcbiAge1xuICAgIGZyb250RW5kVXJsID0gJ2h0dHBzOi8vdWF0MnNzci5jY2FyLm15J1xuICB9XG4gIGVsc2UgaWYgKHVybD09PSdodHRwczovL3ByZXByb2QtYXBpLmNjYXIubXkvJylcbiAge1xuICAgIGZyb250RW5kVXJsID0gJ2h0dHBzOi8vcHJlcHJvZC1hcGkuY2Nhci5teSdcbiAgfVxuICBlbHNlIGlmICh1cmw9PT0naHR0cHM6Ly9hcGkuY2Nhci5teS8nKVxuICB7XG4gICAgZnJvbnRFbmRVcmwgPSAnaHR0cHM6Ly9jY2FyLm15J1xuICB9XG4gIHJldHVybiAgZnJvbnRFbmRVcmxcblxufTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBQcm92aWRlciA9ICh7IHJvdXRlciwgY2hpbGRyZW4gfSkgPT4gKFxuICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17cm91dGVyfT57Y2hpbGRyZW59PC9Db250ZXh0LlByb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGNvbnN0IHVzZVJvdXRlciA9ICgpID0+IHVzZUNvbnRleHQoQ29udGV4dCk7XG5leHBvcnQgY29uc3QgUm91dGVyQ29udGV4dFByb3ZpZGVyID0gd2l0aFJvdXRlcihQcm92aWRlcik7XG4iLCJleHBvcnQgY29uc3Qgd3JpdGVQb3N0SWNvbiA9ICcvYXNzZXRzL25ldy1jYXItc2NyZWVuL2NyZWF0ZS1wb3N0LnBuZydcbmV4cG9ydCBjb25zdCBpbWFnZU5vdEZvdW5kSWNvbiA9ICcvaW1hZ2Utbm90LWZvdW5kIGNvcHkucG5nJ1xuXG5cblxuZXhwb3J0IGNvbnN0IHJhY2VGbGFnSWNvbiA9ICcvcmFjZS1mbGFnLmpwZydcbmV4cG9ydCBjb25zdCBhbGxJY29uID0gJy9ncmlkLnN2ZydcblxuLy9DYXJGcmVha1xuZXhwb3J0IGNvbnN0IGNhckZyZWFrTGlrZUljb24gPSAnL2Fzc2V0cy9jYXItZnJlYWsvY2FyZnJlYWtzLWxpa2UucG5nJ1xuZXhwb3J0IGNvbnN0IGNhckZyZWFrTGlrZUdyZXlJY29uID0gJy9hc3NldHMvY2FyLWZyZWFrL2NhcmZyZWFrcy1saWtlLWdyZXkucG5nJ1xuZXhwb3J0IGNvbnN0IGNhckZyZWFrQ29tbWVudEljb24gPSAnL2Fzc2V0cy9jYXItZnJlYWsvY29tbWVudC5zdmcnXG5leHBvcnQgY29uc3QgZm9sbG93aW5nR3JleUljb24gPSAnL2Fzc2V0cy9jYXItZnJlYWsvZm9sbG93LWdyZXkucG5nJ1xuZXhwb3J0IGNvbnN0IGZvbGxvd2luZ1llbGxvd0ljb24gPSAnL2Fzc2V0cy9jYXItZnJlYWsvZm9sbG93LXllbGxvdy5wbmcnXG5leHBvcnQgY29uc3QgZWFydGhHcmV5SWNvbiA9ICcvYXNzZXRzL2Nhci1mcmVhay9wdWJsaWMtZ3JleS5wbmcnXG5leHBvcnQgY29uc3QgZWFydGhZZWxsb3dJY29uID0gJy9hc3NldHMvY2FyLWZyZWFrL3B1YmxpYy15ZWxsb3cucG5nJ1xuZXhwb3J0IGNvbnN0IGNsdWJOb25NZW1iZXIgPSAnL2Fzc2V0cy9jYXItZnJlYWsvbm9uLW1lbWJlci5wbmcnXG5leHBvcnQgY29uc3QgdXBsb2FkUGhvdG8gPSAnL2Fzc2V0cy91cGxvYWRfcGhvdG8ucG5nJztcbmV4cG9ydCBjb25zdCBjYWxlbmRhckljb24gPSAnL2Fzc2V0cy9jYXItZnJlYWsvY2FsZW5kYXIucG5nJztcbmV4cG9ydCBjb25zdCBwaW5JY29uID0gJy9hc3NldHMvY2FyLWZyZWFrL3Bpbi5wbmcnO1xuXG4vL0NhciBNYXJrZXRcbmV4cG9ydCBjb25zdCBjYXJzcGVjTm90Rm91bmRJbWFnZSA9ICcvY29taW5nLXNvb24ucG5nJ1xuZXhwb3J0IGNvbnN0IGZsYW1lUmVkID0gJy9hc3NldHMvQ2FyTGlzdGluZ0ljb24vRmlyZS0wNChOb1NoYWRvdykuZ2lmJ1xuZXhwb3J0IGNvbnN0IGZsYW1lUmVkU2hhZG93ID0gJy9hc3NldHMvQ2FyTGlzdGluZ0ljb24vRmlyZS0wNC5naWYnXG5leHBvcnQgY29uc3QgZmxhbWUgPSAnL2Fzc2V0cy9jYXJEZXRhaWxzL2ZsYW1lLmdpZidcbmV4cG9ydCBjb25zdCBzb2xkT3V0SWNvbiA9ICcvc29sZCBvdXRAM3gucG5nJ1xuZXhwb3J0IGNvbnN0IHJheWFGbGFtZSA9ICcvYXNzZXRzL3Byb2R1Y3RMaXN0L0ZsYW1lXzAxLmdpZidcbmV4cG9ydCBjb25zdCByYXlhRm9vZCA9ICcvYXNzZXRzL3Byb2R1Y3RMaXN0L0Zvb2QoRmluYWwpXzEuZ2lmJ1xuZXhwb3J0IGNvbnN0IHJheWFMYW1wID0gJy9hc3NldHMvcHJvZHVjdExpc3QvTGFtcF9GaW5hbF8uZ2lmJ1xuZXhwb3J0IGNvbnN0IHJheWFNb3NxdWUgPSAnL2Fzc2V0cy9wcm9kdWN0TGlzdC9Nb3NxdWUoRmluYWwpLmdpZidcbmV4cG9ydCBjb25zdCByYXlhUGVvcGxlID0gJy9hc3NldHMvcHJvZHVjdExpc3QvT3JhbmcoRmluYWwpLmdpZidcblxuXG5cblxuZXhwb3J0IGNvbnN0IGNjYXJXZWJMb2dvNDAwWDE1MCA9ICcvYXNzZXRzL3Byb2ZpbGUvNDAweDE1MC1pY29uLnBuZydcbmV4cG9ydCBjb25zdCBjY2FyTG9nbyA9ICcvbG9nbzE5Mi5wbmcnXG5leHBvcnQgY29uc3QgY2NhckxvZ28yID0gJy9hc3NldHMvQ2Nhci1sb2dvLnBuZydcbmV4cG9ydCBjb25zdCBjY2FyV2ViTG9nbzIgPSAnL2NjYXItd2ViLWxvZ28ucG5nJ1xuXG4vL0xvZ2luXG5leHBvcnQgY29uc3QgbG9naW5CYWNrZ3JvdW5kID0gJy9hc3NldHMvbG9naW4vcmFtYWRoYW4ucG5nJztcbmV4cG9ydCBjb25zdCB0YmhDbnkgPSAnL2Fzc2V0cy9sb2dpbi90YmgucG5nJztcbmV4cG9ydCBjb25zdCB0YmgxQ255ID0gJy9hc3NldHMvbG9naW4vdGJoLTAxLnBuZyc7XG5leHBvcnQgY29uc3QgdGJoMkNueSA9ICcvYXNzZXRzL2xvZ2luL3RiaC0wMi5wbmcnO1xuZXhwb3J0IGNvbnN0IGNueUxpb25IZWFkID0gJy9hc3NldHMvbG9naW4vbGlvbi1kYW5jZS5wbmcnO1xuZXhwb3J0IGNvbnN0IGNueUxvZ28gPSAnL2Fzc2V0cy9sb2dpbi9jY2FyLWNueS1sb2dvLnBuZyc7XG5leHBvcnQgY29uc3QgZ29vZ2xlTG9nbyA9ICcvZ29vZ2xlLnBuZyc7XG5leHBvcnQgY29uc3QgY255TG9nbzIgPSAnL2NjYXIgY255IDIuc3ZnJztcbmV4cG9ydCBjb25zdCB0YmggPSAnL2Fzc2V0cy9sb2dpbi9mYXJhLnBuZyc7XG5cblxuLy9Qcm9maWxlXG5leHBvcnQgY29uc3QgZGVmYXVsdFByb2ZpbGVCYWNrZ3JvdW5kID0gJy9hc3NldHMvcHJvZmlsZS8xMjgweDQ1MC5wbmcnO1xuZXhwb3J0IGNvbnN0IHBob25lID0gXCIvYXNzZXRzL3NlbGxlclByb2ZpbGUvcGhvbmUucG5nXCJcbmV4cG9ydCBjb25zdCBlbWFpbCA9IFwiL2Fzc2V0cy9zZWxsZXJQcm9maWxlL2VtYWlsLnBuZ1wiXG5leHBvcnQgY29uc3QgaGVscCA9IFwiL2Fzc2V0cy9zZWxsZXJQcm9maWxlL2hlbHAucG5nXCJcbmV4cG9ydCBjb25zdCBhZGRyZXNzID0gXCIvYXNzZXRzL3NlbGxlclByb2ZpbGUvYWRkcmVzcy1ob21lLnBuZ1wiXG5leHBvcnQgY29uc3QgbG9jYXRpb24gPSBcIi9hc3NldHMvc2VsbGVyUHJvZmlsZS9Mb2NhdGlvbkAzeC5wbmdcIlxuZXhwb3J0IGNvbnN0IHdpc2hMaXN0ID0gXCIvYXNzZXRzL3Byb2ZpbGUvd2lzaGxpc3QucG5nXCJcbmV4cG9ydCBjb25zdCB3aXNobGlzdEljb25BY3RpdmVkID0gXCIvYXNzZXRzL3Byb2ZpbGUvd2lzaGxpc3QtYWN0aXZlLnBuZ1wiO1xuXG5cblxuLy9GQVFcbmV4cG9ydCBjb25zdCBmYXFEaWNlQmFubmVyID0gJy9hc3NldHMvZmFxL21hbnktZmFsbGluZy1ibG9ja3Mtd2l0aC1xdWVzdGlvbi1tYXJrcy0zZC1pbGx1c3RyYXRpb24uanBnJztcbmV4cG9ydCBjb25zdCBmYXFCYW5uZXIgPSAnL2Fzc2V0cy9mYXEvRkFRLWJnLmpwZyc7XG5leHBvcnQgY29uc3QgZmFxQnV5Q2FySWNvbiA9ICcvYXNzZXRzL2ZhcS9idXktYS1jYXIucG5nJztcbmV4cG9ydCBjb25zdCBmYXFDYXJGcmVha0ljb24gPSAnL2Fzc2V0cy9mYXEvY2FyZnJlYWtzLnBuZyc7XG5leHBvcnQgY29uc3QgZmFxQ3N0YXJJY29uID0gJy9hc3NldHMvZmFxL2NzdGFyLnBuZyc7XG5leHBvcnQgY29uc3QgZmFxTXlBY2NvdW50SWNvbiA9ICcvYXNzZXRzL2ZhcS9teS1hY2NvdW50LnBuZyc7XG5leHBvcnQgY29uc3QgZmFxT3VyRmVhdHVyZXNJY29uID0gJy9hc3NldHMvZmFxL291ci1mZWF0dXJlcy5wbmcnO1xuZXhwb3J0IGNvbnN0IGZhcVNlbGxDYXJJY29uID0gJy9hc3NldHMvZmFxL3NlbGwtYS1jYXIucG5nJztcblxuXG5leHBvcnQgY29uc3Qgc2VhcmNoQm94SW1nID0gJy9hc3NldHMvZmFxL0hvbWVwYWdlLnBuZyc7XG5leHBvcnQgY29uc3Qgc29ydGluZ0ltZyA9ICcvYXNzZXRzL2ZhcS9jYXJtYXJrZXQgZmlsdGVyLnBuZyc7XG5leHBvcnQgY29uc3QgZmlsdGVyRm9ybUltZyA9ICcvYXNzZXRzL2ZhcS9DYXJtYXJrZXQgcXVpY2sgZmlsdGVyIGJveC5wbmcnO1xuZXhwb3J0IGNvbnN0IGFsbE5ld0NhckltZyA9ICcvYXNzZXRzL2ZhcS9hbGwtbmV3Y2FyIGJyYW5kLnBuZyc7XG5leHBvcnQgY29uc3QgY2FyQnJhbmRJbWcgPSAnL2Fzc2V0cy9mYXEvc2VsbC1hLWNhci5wbmcnO1xuZXhwb3J0IGNvbnN0IG5ld0NhckZpbHRlckZvcm1JbWcgPSAnL2Fzc2V0cy9mYXEvYWxsLW5ld2NhciBmaWx0ZXIucG5nJztcbmV4cG9ydCBjb25zdCBjYXJNb3JlSW5mb0ltZyA9ICcvYXNzZXRzL2ZhcS9zZWxsLWEtY2FyLnBuZyc7XG5leHBvcnQgY29uc3QgY3N0YXJMaXN0SW1nID0gJy9hc3NldHMvZmFxL3NlbGwtYS1jYXIucG5nJztcbmV4cG9ydCBjb25zdCBjc3RhckFuaW1hdGlvbkltZyA9ICcvYXNzZXRzL2ZhcS9zZWxsLWEtY2FyLnBuZyc7XG5cbi8vTm90aWZpY2F0aW9uXG5leHBvcnQgY29uc3QgYmVsbEluYWN0aXZlID0gJy9hc3NldHMvbm90aWZpY2F0aW9uL2JlbGwucG5nJztcblxuXG4vL1Jldmlld1xuZXhwb3J0IGNvbnN0IHJhdGluZ0Jhbm5lciA9ICcvYXNzZXRzL2Nhci1yZXZpZXcvcmF0aW5nLnBuZyc7XG5cbi8vTWVudVxuZXhwb3J0IGNvbnN0IG1lbnVMb2dpbiA9ICcvYXNzZXRzL21lbnUtaWNvbi9Ob2xvZ2luLnBuZyc7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5Db250YWluZXI9Q29udGFpbmVyO2V4cG9ydHMuY3JlYXRlVXJsPWNyZWF0ZVVybDtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTtleHBvcnRzLkFwcEluaXRpYWxQcm9wcz1fdXRpbHMuQXBwSW5pdGlhbFByb3BzOy8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoX3JlZil7dmFye0NvbXBvbmVudCxjdHh9PV9yZWY7dmFyIHBhZ2VQcm9wcz1hd2FpdCgwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShDb21wb25lbnQsY3R4KTtyZXR1cm57cGFnZVByb3BzfTt9Y2xhc3MgQXBwIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50ey8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4vLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsX2Vycm9ySW5mbyl7dGhyb3cgZXJyb3I7fXJlbmRlcigpe3Zhcntyb3V0ZXIsQ29tcG9uZW50LHBhZ2VQcm9wcyxfX05fU1NHLF9fTl9TU1B9PXRoaXMucHJvcHM7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe30scGFnZVByb3BzLC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiEoX19OX1NTR3x8X19OX1NTUCk/e3VybDpjcmVhdGVVcmwocm91dGVyKX06e30pKTt9fWV4cG9ydHMuZGVmYXVsdD1BcHA7QXBwLm9yaWdHZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO0FwcC5nZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO3ZhciB3YXJuQ29udGFpbmVyO3ZhciB3YXJuVXJsO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt3YXJuQ29udGFpbmVyPSgwLF91dGlscy5leGVjT25jZSkoKCk9Pntjb25zb2xlLndhcm4oXCJXYXJuaW5nOiB0aGUgYENvbnRhaW5lcmAgaW4gYF9hcHBgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkXCIpO30pO3dhcm5Vcmw9KDAsX3V0aWxzLmV4ZWNPbmNlKSgoKT0+e2NvbnNvbGUuZXJyb3IoXCJXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3VybC1kZXByZWNhdGVkXCIpO30pO30vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZnVuY3Rpb24gQ29udGFpbmVyKHApe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5Db250YWluZXIoKTtyZXR1cm4gcC5jaGlsZHJlbjt9ZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcil7Ly8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbnZhcntwYXRobmFtZSxhc1BhdGgscXVlcnl9PXJvdXRlcjtyZXR1cm57Z2V0IHF1ZXJ5KCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiBxdWVyeTt9LGdldCBwYXRobmFtZSgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcGF0aG5hbWU7fSxnZXQgYXNQYXRoKCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiBhc1BhdGg7fSxiYWNrOigpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JvdXRlci5iYWNrKCk7fSxwdXNoOih1cmwsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiByb3V0ZXIucHVzaCh1cmwsYXMpO30scHVzaFRvOihocmVmLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTt2YXIgcHVzaFJvdXRlPWFzP2hyZWY6Jyc7dmFyIHB1c2hVcmw9YXN8fGhyZWY7cmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSxwdXNoVXJsKTt9LHJlcGxhY2U6KHVybCxhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCxhcyk7fSxyZXBsYWNlVG86KGhyZWYsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3ZhciByZXBsYWNlUm91dGU9YXM/aHJlZjonJzt2YXIgcmVwbGFjZVVybD1hc3x8aHJlZjtyZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLHJlcGxhY2VVcmwpO319O30iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsIlxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvYXBwLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvb3ZlcndyaXRlLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9tYWluLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9zZWxsQ2FyLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy92aWV3UHJvZHVjdHMuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL2NvbG9yLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9jb21tb24uY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL2FuaW1hdGlvbi5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvbmV3Y2FyLmNzcyc7XG5pbXBvcnQgJ3JjLWJhbm5lci1hbmltL2Fzc2V0cy9pbmRleC5jc3MnO1xuaW1wb3J0ICdyZWFjdC1pbWFnZS1saWdodGJveC9zdHlsZS5jc3MnO1xuaW1wb3J0IFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3NcIjtcbmltcG9ydCAnQGJyYWluaHViZXUvcmVhY3QtY2Fyb3VzZWwvbGliL3N0eWxlLmNzcyc7XG5pbXBvcnQgXCJlbW9qaS1tYXJ0L2Nzcy9lbW9qaS1tYXJ0LmNzc1wiO1xuaW1wb3J0ICdyZWFjdC1xdWlsbC9kaXN0L3F1aWxsLnNub3cuY3NzJzsgLy8gRVM2XG5cbmltcG9ydCB7IHdyYXBwZXIsIHN0b3JlIH0gZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSAnbmV4dC1zZW8nO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJzsgXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IFBhZ2VUcmFuc2l0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9nZW5lcmFsL1BhZ2VUcmFuc2l0aW9uJztcbmltcG9ydCB7IFJvdXRlckNvbnRleHRQcm92aWRlciB9IGZyb20gJy4uL2hvb2tzL3VzZVJvdXRlcic7XG5pbXBvcnQgeyBjaGVja0VudlJldHVybkNtc1VybCB9IGZyb20gJy4uL2Z1bmN0aW9uQ29udGVudCc7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4uL2ZlYXRoZXJzJztcbmltcG9ydCB7IGNjYXJMb2dvMiwgY2NhcldlYkxvZ280MDBYMTUwIH0gZnJvbSAnLi4vaWNvbic7XG5cblxuXG5jb25zdCBXcmFwcGVkQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlciB9KSA9PiB7XG5cbiAgbGV0IHNlb0RhdGEgPSBfLmlzUGxhaW5PYmplY3QoXy5nZXQocGFnZVByb3BzLCBbJ3Nlb0RhdGEnXSkpICYmICFfLmlzRW1wdHkoXy5nZXQocGFnZVByb3BzLCBbJ3Nlb0RhdGEnXSkpID8gXy5nZXQocGFnZVByb3BzLCBbJ3Nlb0RhdGEnXSkgOiB7fTtcbiAgbGV0IHRpdGxlID0gXy5nZXQoc2VvRGF0YSwgWyd0aXRsZSddKSB8fCAnQ0NBUi5NWSB8ICMxIENhciBTb2NpYWwgUGxhdGZvcm0nXG4gIGxldCBiYXNlUGF0aCA9IGNoZWNrRW52UmV0dXJuQ21zVXJsKGNsaWVudC5pby5pby51cmkpO1xuICBsZXQgdXJsID0gc2VvRGF0YS51cmwgfHwgYCR7YmFzZVBhdGh9JHtyb3V0ZXIuYXNQYXRofWA7XG5cbiAgaWYgKCFfLmlzQXJyYXkoc2VvRGF0YS5pbWFnZXMpKSB7XG5cbiAgICBpZiAoXy5pc1N0cmluZyhzZW9EYXRhLmltYWdlcykpIHtcbiAgICAgIHNlb0RhdGEuaW1hZ2VzID0gW3tcbiAgICAgICAgdXJsOiBzZW9EYXRhLmltYWdlcyxcbiAgICAgICAgYWx0OiAnQ0NBUiBJbWFnZSBQcmV2aWV3JyxcbiAgICAgIH1dO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZW9EYXRhLmltYWdlcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHVybDogYCR7YmFzZVBhdGh9JHtjY2FyV2ViTG9nbzQwMFgxNTB9YCxcbiAgICAgICAgICBhbHQ6IGBDQ0FSIExvZ29gLFxuICAgICAgICB9XG4gICAgICBdO1xuICAgIH1cbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8TmV4dFNlb1xuICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtzZW9EYXRhLmRlc2NyaXB0aW9ufVxuICAgICAgICBjYW5vbmljYWw9e3Nlb0RhdGEuY2Fub25pY2FsIHx8IHVybH1cbiAgICAgICAgb3BlbkdyYXBoPXtfLmlzUGxhaW5PYmplY3Qoc2VvRGF0YS5vcGVuR3JhcGgpICYmICFfLmlzRW1wdHkoc2VvRGF0YS5vcGVuR3JhcGgpID8gc2VvRGF0YS5vcGVuR3JhcGggOiB7XG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBzZW9EYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgIHR5cGU6ICd3ZWJzaXRlJyxcbiAgICAgICAgICBzaXRlX25hbWU6ICdDQ0FSIFNETiBCSEQnLFxuICAgICAgICAgIGltYWdlczogW1xuICAgICAgICAgICAgLi4uc2VvRGF0YS5pbWFnZXMsXG4gICAgICAgICAgXVxuICAgICAgICB9fVxuICAgICAgICB0d2l0dGVyPXt7XG4gICAgICAgICAgaGFuZGxlOiAnQGhhbmRsZScsXG4gICAgICAgICAgc2l0ZTogJ0BzaXRlJyxcbiAgICAgICAgICBjYXJkVHlwZTogJ3N1bW1hcnlfbGFyZ2VfaW1hZ2UnLFxuICAgICAgICB9fVxuICAgICAgICBmYWNlYm9vaz17e1xuICAgICAgICAgIGFwcElkOiBzZW9EYXRhLmZhY2Vib29rQXBwSWQgfHwgJzc0NzE3ODAxMjc1MzQxMCdcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9e2NjYXJMb2dvMiB8fCBcImh0dHBzOi8veXQzLmdncGh0LmNvbS9hL0FBVFhBSnlBQ0Fubms1OF9xZlZacXZqYVRrYXZzeE9iOGRTWUdlY2l2NGE3PXM4OC1jLWstYzB4MDBmZmZmZmYtbm8tcmpcIn0gLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VGl0aWxsaXVtK1dlYjp3Z2h0QDMwMDs0MDA7NzAwJmZhbWlseT1VYnVudHU6aXRhbEAxJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBrZXk9e3JvdXRlci5yb3V0ZX0gLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KFdyYXBwZWRBcHApXG4iLCJleHBvcnQgY29uc3QgYm9keVR5cGVMaXN0ID0gW1xuICAgIHtcbiAgICAgICAgJ2ljb24nOiBcIi9hc3NldHMvY2FyLXR5cGUtb3JpLXZlcjIvY29hY2gucG5nXCIsXG4gICAgICAgICd2YWx1ZSc6ICdDb2FjaCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogXCIvYXNzZXRzL2Nhci10eXBlLW9yaS12ZXIyL2NvbXBhY3QucG5nXCIsXG4gICAgICAgICd2YWx1ZSc6ICdDb21wYWN0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBcIi9hc3NldHMvY2FyLXR5cGUtb3JpLXZlcjIvY29udmVydGlibGUucG5nXCIsXG4gICAgICAgICd2YWx1ZSc6ICdDb252ZXJ0aWJsZScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogXCIvYXNzZXRzL2Nhci10eXBlLW9yaS12ZXIyL2NvdXBlLnBuZ1wiLFxuICAgICAgICAndmFsdWUnOiAnQ291cGUnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IFwiL2Fzc2V0cy9jYXItdHlwZS1vcmktdmVyMi9jcm9zc292ZXIucG5nXCIsXG4gICAgICAgICd2YWx1ZSc6ICdDcm9zc292ZXInLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IFwiL2Fzc2V0cy9jYXItdHlwZS1vcmktdmVyMi9oYXRjaGJhY2sucG5nXCIsXG4gICAgICAgICd2YWx1ZSc6ICdIYXRjaGJhY2snLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IFwiL2Fzc2V0cy9jYXItdHlwZS1vcmktdmVyMi9tcHYucG5nXCIsXG4gICAgICAgICd2YWx1ZSc6ICdNUFYnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IFwiL2Fzc2V0cy9jYXItdHlwZS1vcmktdmVyMi9waWNrdXAtdHJ1Y2sucG5nXCIsXG4gICAgICAgICd2YWx1ZSc6ICdQaWNrdXB0cnVjaycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogXCIvYXNzZXRzL2Nhci10eXBlLW9yaS12ZXIyL3NlZGFuLnBuZ1wiLFxuICAgICAgICAndmFsdWUnOiAnU2VkYW4nLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IFwiL2Fzc2V0cy9jYXItdHlwZS1vcmktdmVyMi9zcG9ydC1jYXIucG5nXCIsXG4gICAgICAgICd2YWx1ZSc6ICdTcG9ydGNhcicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogXCIvYXNzZXRzL2Nhci10eXBlLW9yaS12ZXIyL3N1di5wbmdcIixcbiAgICAgICAgJ3ZhbHVlJzogJ1NVVicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogXCIvYXNzZXRzL2Nhci10eXBlLW9yaS12ZXIyL3RydWNrLnBuZ1wiLFxuICAgICAgICAndmFsdWUnOiAnVHJ1Y2snLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IFwiL2Fzc2V0cy9jYXItdHlwZS1vcmktdmVyMi92YW4ucG5nXCIsXG4gICAgICAgICd2YWx1ZSc6ICdWYW4nLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IFwiL2Fzc2V0cy9jYXItdHlwZS1vcmktdmVyMi93YWdvbi5wbmdcIixcbiAgICAgICAgJ3ZhbHVlJzogJ1dhZ29uJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBcIi9hc3NldHMvY2FyLXR5cGUtb3JpLXZlcjIvc3BvcnQtY2FyLnBuZ1wiLFxuICAgICAgICAndmFsdWUnOiAnR1QnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IFwiL2Fzc2V0cy9jYXItdHlwZS1vcmktdmVyMi90cnVjay5wbmdcIixcbiAgICAgICAgJ3ZhbHVlJzogJ0xvcnJ5JyxcbiAgICB9LFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm9keVR5cGVJY29uKGJvZHlUeXBlKSB7XG4gICAgaWYgKGJvZHlUeXBlKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZEJvZHlUeXBlID0gYm9keVR5cGVMaXN0LmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGJvZHlUeXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHNlbGVjdGVkQm9keVR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZEJvZHlUeXBlLmljb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJvZHlUeXBlKGJvZHlUeXBlKSB7XG4gXG4gICAgaWYgKGJvZHlUeXBlKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZEJvZHlUeXBlID0gYm9keVR5cGVMaXN0LmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGJvZHlUeXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0pXG5cbiBcbiAgICAgICAgaWYgKHNlbGVjdGVkQm9keVR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZEJvZHlUeXBlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgICBpY29uOiBudWxsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgaWNvbjogbnVsbFxuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBib2R5VHlwZUxpc3QsXG59IiwiXG5cbmNvbnN0IGFsZmFSb21lb0ltZyA9IFwiL2Fzc2V0cy9icmFuZHMvYWxmYS1yb21lby5wbmdcIlxuY29uc3QgYXNpYUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvYXNpYS5wbmdcIlxuY29uc3QgYXN0b25NYXJ0aW5JbWcgPSBcIi9hc3NldHMvYnJhbmRzL2FzdG9uLW1hcnRpbi5wbmdcIlxuY29uc3QgYXVkaUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvYXVkaS5wbmdcIlxuY29uc3QgYXVzdGluSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9hdXN0aW4ucG5nXCJcbmNvbnN0IGJhY0ltZyA9IFwiL2Fzc2V0cy9icmFuZHMvYmFjLnBuZ1wiXG5jb25zdCBiZW50bGV5SW1nID0gXCIvYXNzZXRzL2JyYW5kcy9iZW50bGV5LnBuZ1wiXG5jb25zdCBibXdBbHBpbmFJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2Jtdy1hbHBpbmEucG5nXCJcbmNvbnN0IGJtd0ltZyA9IFwiL2Fzc2V0cy9icmFuZHMvYm13LnBuZ1wiXG5jb25zdCBidWZvcmlJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2J1Zm9yaS5wbmdcIlxuY29uc3QgY2FkaWxsYWNJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2NhZGlsbGFjLnBuZ1wiXG5jb25zdCBjYW1JbWcgPSBcIi9hc3NldHMvYnJhbmRzL2NhbS5wbmdcIlxuY29uc3QgY2hhbmFJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2NoYW5hLnBuZ1wiXG5jb25zdCBjaGFuZ2FuSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9jaGFuZ2FuLnBuZ1wiXG5jb25zdCBjaGVyeUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvY2hlcnkucG5nXCJcbmNvbnN0IGNoZXZyb2xldEltZyA9IFwiL2Fzc2V0cy9icmFuZHMvY2hldnJvbGV0LnBuZ1wiXG5jb25zdCBjaHJ5c2xlckltZyA9IFwiL2Fzc2V0cy9icmFuZHMvY2hyeXNsZXIucG5nXCJcbmNvbnN0IGNpdHJvZW5JbWcgPSBcIi9hc3NldHMvYnJhbmRzL2NpdHJvZW4ucG5nXCJcbmNvbnN0IGRhaWhhdHN1SW1nID0gXCIvYXNzZXRzL2JyYW5kcy9kYWloYXRzdS5wbmdcIlxuY29uc3QgZGF0c3VuSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9kYXRzdW4ucG5nXCJcbmNvbnN0IGRvZGdlSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9kb2RnZS5wbmdcIlxuY29uc3QgZG9uZ2ZlbmdJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2RvbmdmZW5nLnBuZ1wiXG5jb25zdCBmZXJyYXJpSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9mZXJyYXJpLnBuZ1wiXG5jb25zdCBmaWF0SW1nID0gXCIvYXNzZXRzL2JyYW5kcy9maWF0LnBuZ1wiXG5jb25zdCBmb2RheUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvZm9kYXkucG5nXCJcbmNvbnN0IGZvcmRJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2ZvcmQucG5nXCJcbmNvbnN0IGZvdG9uSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9mb3Rvbi5wbmdcIlxuY29uc3QgZ29sZGVuRHJhZ29uSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9nb2xkZW4tZHJhZ29uLnBuZ1wiXG5jb25zdCBncmVhdFdhbGxJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2dyZWF0LXdhbGwucG5nXCJcbmNvbnN0IGhhdmFsSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9oYXZhbC5wbmdcIlxuY29uc3QgaGljb21JbWcgPSBcIi9hc3NldHMvYnJhbmRzL2hpY29tLnBuZ1wiXG5jb25zdCBoaW5vSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9oaW5vLnBuZ1wiXG5jb25zdCBob25kYUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvaG9uZGEucG5nXCJcbmNvbnN0IGh1bW1lckltZyA9IFwiL2Fzc2V0cy9icmFuZHMvaHVtbWVyLnBuZ1wiXG5jb25zdCBoeXVuZGFpSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9oeXVuZGFpLnBuZ1wiXG5jb25zdCBpbXB1bEltZyA9IFwiL2Fzc2V0cy9icmFuZHMvaW1wdWwucG5nXCJcbmNvbnN0IGluZmluaXRpSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9pbmZpbml0aS5wbmdcIlxuY29uc3QgaW5va29tSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9pbm9rb20ucG5nXCJcbmNvbnN0IGlzdXp1SW1nID0gXCIvYXNzZXRzL2JyYW5kcy9pc3V6dS5wbmdcIlxuY29uc3QgamFndWFySW1nID0gXCIvYXNzZXRzL2JyYW5kcy9qYWd1YXIucG5nXCJcbmNvbnN0IGpiY0ltZyA9IFwiL2Fzc2V0cy9icmFuZHMvamJjLnBuZ1wiXG5jb25zdCBqZWVwSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9qZWVwLnBuZ1wiXG5jb25zdCBqbWNJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2ptYy5wbmdcIlxuY29uc3Qgam95bG9uZ0ltZyA9IFwiL2Fzc2V0cy9icmFuZHMvam95bG9uZy5wbmdcIlxuY29uc3Qga2F3YXNha2lJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2thd2FzYWtpLnBuZ1wiXG5jb25zdCBraWFJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2tpYS5wbmdcIlxuY29uc3Qga2luZ0xvbmdJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2tpbmctbG9uZy5wbmdcIlxuY29uc3QgbGFtYm9yZ2hpbmlJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2xhbWJvcmdoaW5pLnBuZ1wiXG5jb25zdCBsYW5kUm92ZXJJbWcgPSBcIi9hc3NldHMvYnJhbmRzL2xhbmQtcm92ZXIucG5nXCJcbmNvbnN0IGxleHVzSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9sZXh1cy5wbmdcIlxuY29uc3QgbG1nSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9sbWcucG5nXCJcbmNvbnN0IGxvdHVzSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9sb3R1cy5wbmdcIlxuY29uc3QgbWFoaW5kcmFJbWcgPSBcIi9hc3NldHMvYnJhbmRzL21haGluZHJhLnBuZ1wiXG5jb25zdCBtYXNlcmF0aUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvbWFzZXJhdGkucG5nXCJcbmNvbnN0IG1heHVzSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9tYXh1cy5wbmdcIlxuY29uc3QgbWF6ZGFJbWcgPSBcIi9hc3NldHMvYnJhbmRzL21hemRhLnBuZ1wiXG5jb25zdCBtY2xhcmVuSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9tY2xhcmVuLnBuZ1wiXG5jb25zdCBtZXJjZWRlc0JlbnpJbWcgPSBcIi9hc3NldHMvYnJhbmRzL21lcmNlZGVzLWJlbnoucG5nXCJcbmNvbnN0IG1lcmNlZGVzTWF5YmFjaEltZyA9IFwiL2Fzc2V0cy9icmFuZHMvbWVyY2VkZXMtbWF5YmFjaC5wbmdcIlxuY29uc3QgbWdJbWcgPSBcIi9hc3NldHMvYnJhbmRzL21nLnBuZ1wiXG5jb25zdCBtaW5pSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9taW5pLnBuZ1wiXG5jb25zdCBtaXRzdWJpc2hpSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9taXRzdWJpc2hpLnBuZ1wiXG5jb25zdCBtaXRzdW9rYUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvbWl0c3Vva2EucG5nXCJcbmNvbnN0IG5hemFJbWcgPSBcIi9hc3NldHMvYnJhbmRzL25hemEucG5nXCJcbmNvbnN0IG5pc3NhbkltZyA9IFwiL2Fzc2V0cy9icmFuZHMvbmlzc2FuLnBuZ1wiXG5jb25zdCBvcGVsSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9vcGVsLnBuZ1wiXG5jb25zdCBwZXJvZHVhSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9wZXJvZHVhLnBuZ1wiXG5jb25zdCBwZXVnZW90SW1nID0gXCIvYXNzZXRzL2JyYW5kcy9wZXVnZW90LnBuZ1wiXG5jb25zdCBwb3JzY2hlSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9wb3JzY2hlLnBuZ1wiXG5jb25zdCBwcm90b25JbWcgPSBcIi9hc3NldHMvYnJhbmRzL3Byb3Rvbi5wbmdcIlxuY29uc3QgcmFtSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9yYW0ucG5nXCJcbmNvbnN0IHJlbmF1bHRJbWcgPSBcIi9hc3NldHMvYnJhbmRzL3JlbmF1bHQucG5nXCJcbmNvbnN0IHJvbGxzUm95Y2VJbWcgPSBcIi9hc3NldHMvYnJhbmRzL3JvbGxzLXJveWNlLnBuZ1wiXG5jb25zdCByb3ZlckltZyA9IFwiL2Fzc2V0cy9icmFuZHMvcm92ZXIucG5nXCJcbmNvbnN0IHNhYWJJbWcgPSBcIi9hc3NldHMvYnJhbmRzL3NhYWIucG5nXCJcbmNvbnN0IHNtYXJ0SW1nID0gXCIvYXNzZXRzL2JyYW5kcy9zbWFydC5wbmdcIlxuY29uc3Qgc3NhbmdZb25nSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9zc2FuZy15b25nLnBuZ1wiXG5jb25zdCBzdWJhcnVJbWcgPSBcIi9hc3NldHMvYnJhbmRzL3N1YmFydS5wbmdcIlxuY29uc3Qgc3V6dWtpSW1nID0gXCIvYXNzZXRzL2JyYW5kcy9zdXp1a2kucG5nXCJcbmNvbnN0IHRhdGFJbWcgPSBcIi9hc3NldHMvYnJhbmRzL3RhdGEucG5nXCJcbmNvbnN0IHRveW90YUltZyA9IFwiL2Fzc2V0cy9icmFuZHMvdG95b3RhLnBuZ1wiXG5jb25zdCB0dnJJbWcgPSBcIi9hc3NldHMvYnJhbmRzL3R2ci5wbmdcIlxuY29uc3Qgdm9sa3N3YWdlbkltZyA9IFwiL2Fzc2V0cy9icmFuZHMvdm9sa3N3YWdlbi5wbmdcIlxuY29uc3Qgdm9sdm9JbWcgPSBcIi9hc3NldHMvYnJhbmRzL3ZvbHZvLnBuZ1wiXG5jb25zdCB3YWxkSW1nID0gXCIvYXNzZXRzL2JyYW5kcy93YWxkLnBuZ1wiXG5jb25zdCB5YW1haGFJbWcgPSBcIi9hc3NldHMvYnJhbmRzL3lhbWFoYS5wbmdcIlxuY29uc3Qgem5hSW1nID0gXCIvYXNzZXRzL2JyYW5kcy96bmEucG5nXCJcblxuZXhwb3J0IGNvbnN0IGNhckJyYW5kc0xpc3QgPSBbXG4gIHtcbiAgICAnaWNvbic6IGFsZmFSb21lb0ltZyxcbiAgICAndmFsdWUnOiAnQWxmYSBSb21lbycsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGFzaWFJbWcsXG4gICAgJ3ZhbHVlJzogJ0FzaWEnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBhc3Rvbk1hcnRpbkltZyxcbiAgICAndmFsdWUnOiAnQXN0b24gTWFydGluJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogYXVkaUltZyxcbiAgICAndmFsdWUnOiAnQXVkaScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGF1c3RpbkltZyxcbiAgICAndmFsdWUnOiAnQXVzdGluJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogYmFjSW1nLFxuICAgICd2YWx1ZSc6ICdCYWMnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBiZW50bGV5SW1nLFxuICAgICd2YWx1ZSc6ICdCZW50bGV5JyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogYm13QWxwaW5hSW1nLFxuICAgICd2YWx1ZSc6ICdCTVcgQWxwaW5hJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogYm13SW1nLFxuICAgICd2YWx1ZSc6ICdCTVcnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBidWZvcmlJbWcsXG4gICAgJ3ZhbHVlJzogJ0J1Zm9yaScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGNhZGlsbGFjSW1nLFxuICAgICd2YWx1ZSc6ICdDYWRpbGxhYycsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGNhbUltZyxcbiAgICAndmFsdWUnOiAnQ2FtJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogY2hhbmFJbWcsXG4gICAgJ3ZhbHVlJzogJ0NoYW5hJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogY2hhbmdhbkltZyxcbiAgICAndmFsdWUnOiAnQ2hhbmdhbicsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGNoZXJ5SW1nLFxuICAgICd2YWx1ZSc6ICdDaGVyeScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGNoZXZyb2xldEltZyxcbiAgICAndmFsdWUnOiAnQ2hldnJvbGV0JyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogY2hyeXNsZXJJbWcsXG4gICAgJ3ZhbHVlJzogJ0NocnlzbGVyJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogY2l0cm9lbkltZyxcbiAgICAndmFsdWUnOiAnQ2l0cm9lbicsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGRhaWhhdHN1SW1nLFxuICAgICd2YWx1ZSc6ICdEYWloYXRzdScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGRhdHN1bkltZyxcbiAgICAndmFsdWUnOiAnRGF0c3VuJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogZG9kZ2VJbWcsXG4gICAgJ3ZhbHVlJzogJ0RvZGdlJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogZG9uZ2ZlbmdJbWcsXG4gICAgJ3ZhbHVlJzogJ0RvbmdmZW5nJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogZmVycmFyaUltZyxcbiAgICAndmFsdWUnOiAnRmVycmFyaScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGZpYXRJbWcsXG4gICAgJ3ZhbHVlJzogJ0ZpYXQnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBmb2RheUltZyxcbiAgICAndmFsdWUnOiAnRm9kYXknLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBmb3JkSW1nLFxuICAgICd2YWx1ZSc6ICdGb3JkJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogZm90b25JbWcsXG4gICAgJ3ZhbHVlJzogJ0ZvdG9uJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogZ29sZGVuRHJhZ29uSW1nLFxuICAgICd2YWx1ZSc6ICdHb2xkZW4gRHJhZ29uJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogZ3JlYXRXYWxsSW1nLFxuICAgICd2YWx1ZSc6ICdHcmVhdCBXYWxsJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogaGF2YWxJbWcsXG4gICAgJ3ZhbHVlJzogJ0hhdmFsJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogaGljb21JbWcsXG4gICAgJ3ZhbHVlJzogJ0hpY29tJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogaGlub0ltZyxcbiAgICAndmFsdWUnOiAnSGlubycsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGhvbmRhSW1nLFxuICAgICd2YWx1ZSc6ICdIb25kYScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGh1bW1lckltZyxcbiAgICAndmFsdWUnOiAnSHVtbWVyJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogaHl1bmRhaUltZyxcbiAgICAndmFsdWUnOiAnSHl1bmRhaScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGltcHVsSW1nLFxuICAgICd2YWx1ZSc6ICdJbXB1bCcsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGluZmluaXRpSW1nLFxuICAgICd2YWx1ZSc6ICdJbmZpbml0aScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGlub2tvbUltZyxcbiAgICAndmFsdWUnOiAnSW5va29tJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogaXN1enVJbWcsXG4gICAgJ3ZhbHVlJzogJ0lzdXp1JyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogamFndWFySW1nLFxuICAgICd2YWx1ZSc6ICdKYWd1YXInLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBqYmNJbWcsXG4gICAgJ3ZhbHVlJzogJ0piYycsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGplZXBJbWcsXG4gICAgJ3ZhbHVlJzogJ0plZXAnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBqbWNJbWcsXG4gICAgJ3ZhbHVlJzogJ0ptYycsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGpveWxvbmdJbWcsXG4gICAgJ3ZhbHVlJzogJ0pveWxvbmcnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBrYXdhc2FraUltZyxcbiAgICAndmFsdWUnOiAnS2F3YXNha2knLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBraWFJbWcsXG4gICAgJ3ZhbHVlJzogJ0tpYScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGtpbmdMb25nSW1nLFxuICAgICd2YWx1ZSc6ICdLaW5nIExvbmcnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBsYW1ib3JnaGluaUltZyxcbiAgICAndmFsdWUnOiAnTGFtYm9yZ2hpbmknLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBsYW5kUm92ZXJJbWcsXG4gICAgJ3ZhbHVlJzogJ0xhbmQgUm92ZXInLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBsZXh1c0ltZyxcbiAgICAndmFsdWUnOiAnTGV4dXMnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBsbWdJbWcsXG4gICAgJ3ZhbHVlJzogJ0xtZycsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IGxvdHVzSW1nLFxuICAgICd2YWx1ZSc6ICdMb3R1cycsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IG1haGluZHJhSW1nLFxuICAgICd2YWx1ZSc6ICdNYWhpbmRyYScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IG1hc2VyYXRpSW1nLFxuICAgICd2YWx1ZSc6ICdNYXNlcmF0aScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IG1heHVzSW1nLFxuICAgICd2YWx1ZSc6ICdNYXh1cycsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IG1hemRhSW1nLFxuICAgICd2YWx1ZSc6ICdNYXpkYScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IG1jbGFyZW5JbWcsXG4gICAgJ3ZhbHVlJzogJ01jbGFyZW4nLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBtZXJjZWRlc0JlbnpJbWcsXG4gICAgJ3ZhbHVlJzogJ01lcmNlZGVzLUJlbnonLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBtZ0ltZyxcbiAgICAndmFsdWUnOiAnTWVyY2VkZXMtTWF5YmFjaCcsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IG1lcmNlZGVzTWF5YmFjaEltZyxcbiAgICAndmFsdWUnOiAnTWcnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBtaW5pSW1nLFxuICAgICd2YWx1ZSc6ICdNaW5pJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogbWl0c3ViaXNoaUltZyxcbiAgICAndmFsdWUnOiAnTWl0c3ViaXNoaScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IG1pdHN1b2thSW1nLFxuICAgICd2YWx1ZSc6ICdNaXRzdW9rYScsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IG5hemFJbWcsXG4gICAgJ3ZhbHVlJzogJ05hemEnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBuaXNzYW5JbWcsXG4gICAgJ3ZhbHVlJzogJ05pc3NhbicsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IG9wZWxJbWcsXG4gICAgJ3ZhbHVlJzogJ09wZWwnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBwZXJvZHVhSW1nLFxuICAgICd2YWx1ZSc6ICdQZXJvZHVhJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogcGV1Z2VvdEltZyxcbiAgICAndmFsdWUnOiAnUGV1Z2VvdCcsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IHBvcnNjaGVJbWcsXG4gICAgJ3ZhbHVlJzogJ1BvcnNjaGUnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiBwcm90b25JbWcsXG4gICAgJ3ZhbHVlJzogJ1Byb3RvbicsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IHJhbUltZyxcbiAgICAndmFsdWUnOiAnUmFtJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogcmVuYXVsdEltZyxcbiAgICAndmFsdWUnOiAnUmVuYXVsdCcsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IHJvbGxzUm95Y2VJbWcsXG4gICAgJ3ZhbHVlJzogJ1JvbGxzLVJveWNlJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogcm92ZXJJbWcsXG4gICAgJ3ZhbHVlJzogJ1JvdmVyJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogc2FhYkltZyxcbiAgICAndmFsdWUnOiAnU2FhYicsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IHNtYXJ0SW1nLFxuICAgICd2YWx1ZSc6ICdTbWFydCcsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IHNzYW5nWW9uZ0ltZyxcbiAgICAndmFsdWUnOiAnU3NhbmcgWW9uZycsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IHN1YmFydUltZyxcbiAgICAndmFsdWUnOiAnU3ViYXJ1JyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogc3V6dWtpSW1nLFxuICAgICd2YWx1ZSc6ICdTdXp1a2knLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiB0YXRhSW1nLFxuICAgICd2YWx1ZSc6ICdUYXRhJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogdG95b3RhSW1nLFxuICAgICd2YWx1ZSc6ICdUb3lvdGEnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiB0dnJJbWcsXG4gICAgJ3ZhbHVlJzogJ1R2cicsXG4gIH0sXG4gIHtcbiAgICAnaWNvbic6IHZvbGtzd2FnZW5JbWcsXG4gICAgJ3ZhbHVlJzogJ1ZvbGtzd2FnZW4nLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiB2b2x2b0ltZyxcbiAgICAndmFsdWUnOiAnVm9sdm8nLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiB3YWxkSW1nLFxuICAgICd2YWx1ZSc6ICdXYWxkJyxcbiAgfSxcbiAge1xuICAgICdpY29uJzogeWFtYWhhSW1nLFxuICAgICd2YWx1ZSc6ICdZYW1haGEnLFxuICB9LFxuICB7XG4gICAgJ2ljb24nOiB6bmFJbWcsXG4gICAgJ3ZhbHVlJzogJ1puYScsXG4gIH1cbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENhckJyYW5kc0ljb24oZGF0YSkge1xuICBpZiAoZGF0YSkge1xuICAgIGxldCBzZWxlY3RlZEJyYW5kID0gY2FyQnJhbmRzTGlzdC5maW5kKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBkYXRhLnRvTG93ZXJDYXNlKCk7XG4gICAgfSlcblxuICAgIGlmIChzZWxlY3RlZEJyYW5kKSB7XG4gICAgICByZXR1cm4gc2VsZWN0ZWRCcmFuZC5pY29uO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENhckJyYW5kKGRhdGEpIHtcbiAgaWYgKGRhdGEpIHtcbiAgICBsZXQgc2VsZWN0ZWRCcmFuZCA9IGNhckJyYW5kc0xpc3QuZmluZChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0udmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZGF0YS50b0xvd2VyQ2FzZSgpO1xuICAgIH0pXG5cbiAgICBpZiAoc2VsZWN0ZWRCcmFuZCkge1xuICAgICAgcmV0dXJuIHNlbGVjdGVkQnJhbmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICBpY29uIDogbnVsbFxuICAgICAgfTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICB7XG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIGljb24gOiBudWxsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNhckJyYW5kc0xpc3QsXG59IiwiZXhwb3J0IGNvbnN0IGNvbG9yTGlzdCA9IFtcbiAgICB7XG4gICAgICAgICdjb2RlJzogJyMwMDAwMDAnLFxuICAgICAgICAndmFsdWUnOiAnYmxhY2snLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnY29kZSc6ICcjRkZGRkZGJyxcbiAgICAgICAgJ3ZhbHVlJzogJ3doaXRlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2NvZGUnOiAnI0U3RTdFNycsXG4gICAgICAgICd2YWx1ZSc6ICdzaWx2ZXInLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnY29kZSc6ICcjNzU3NTc1JyxcbiAgICAgICAgJ3ZhbHVlJzogJ2dyZXknLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnY29kZSc6ICcjQ0E5MTJCJyxcbiAgICAgICAgJ3ZhbHVlJzogJ2Jyb3duJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2NvZGUnOiAnIzYyMzAwOCcsXG4gICAgICAgICd2YWx1ZSc6ICdicm9uemUnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnY29kZSc6ICcjRTNDNTdEJyxcbiAgICAgICAgJ3ZhbHVlJzogJ2dvbGQnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnY29kZSc6ICcjRjFEQ0MzJyxcbiAgICAgICAgJ3ZhbHVlJzogJ2JlaWdlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2NvZGUnOiAnI0ZGRjAwOScsXG4gICAgICAgICd2YWx1ZSc6ICd5ZWxsb3cnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnY29kZSc6ICcjRjg3NzE5JyxcbiAgICAgICAgJ3ZhbHVlJzogJ29yYW5nZScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdjb2RlJzogJyNEQTAwMDAnLFxuICAgICAgICAndmFsdWUnOiAncmVkJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2NvZGUnOiAnIzc2MDAwMCcsXG4gICAgICAgICd2YWx1ZSc6ICdtYXJvb24nLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnY29kZSc6ICcjQUMwMDVBJyxcbiAgICAgICAgJ3ZhbHVlJzogJ21hZ2VudGEnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnY29kZSc6ICcjREM3RUE4JyxcbiAgICAgICAgJ3ZhbHVlJzogJ3BpbmsnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnY29kZSc6ICcjNjcwREE4JyxcbiAgICAgICAgJ3ZhbHVlJzogJ3B1cnBsZScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdjb2RlJzogJyM0RUMzNzUnLFxuICAgICAgICAndmFsdWUnOiAnZ3JlZW4nLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnY29kZSc6ICcjMDEwMDdEJyxcbiAgICAgICAgJ3ZhbHVlJzogJ2JsdWUnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnY29kZSc6ICd3aGl0ZScsXG4gICAgICAgICd2YWx1ZSc6ICdvdGhlcicsXG4gICAgfSxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbG9ySWNvbihjb2xvcikge1xuICAgIGlmIChjb2xvcikge1xuICAgICAgICBsZXQgc2VsZWN0ZWRDb2xvciA9IGNvbG9yTGlzdC5maW5kKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBjb2xvci50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChzZWxlY3RlZENvbG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRDb2xvci5pY29uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb2xvcihjb2xvcikge1xuICAgIGlmIChjb2xvcikge1xuICAgICAgICBsZXQgc2VsZWN0ZWRDb2xvciA9IGNvbG9yTGlzdC5maW5kKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBjb2xvci50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChzZWxlY3RlZENvbG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRDb2xvcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgICAgaWNvbjogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgIGljb246IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb2xvckxpc3QsXG59IiwiY29uc3QgZGllc2VsSWNvbiA9IFwiL2Fzc2V0cy9mdWVsVHlwZS9kaWVzZWwucG5nXCJcbmNvbnN0IGVsZWN0cmljSWNvbiA9IFwiL2Fzc2V0cy9mdWVsVHlwZS9lbGVjdHJpYy5wbmdcIlxuY29uc3QgaHlicmlkSWNvbiA9IFwiL2Fzc2V0cy9mdWVsVHlwZS9oeWJyaWQucG5nXCJcbmNvbnN0IHBldHJvbExlYWRlZEljb24gPSBcIi9hc3NldHMvZnVlbFR5cGUvcGV0cm9sLShsZWFkZWQpLnBuZ1wiXG5jb25zdCBwZXRyb2xVbmxlYWRlZEljb24gPSBcIi9hc3NldHMvZnVlbFR5cGUvcGV0cm9sLSh1bmxlYWRlZCkucG5nXCJcblxuZXhwb3J0IGNvbnN0IGZ1ZWxUeXBlTGlzdCA9IFtcbiAgICB7XG4gICAgICAgICdpY29uJzogZGllc2VsSWNvbixcbiAgICAgICAgJ3ZhbHVlJzogJ2RpZXNlbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogaHlicmlkSWNvbixcbiAgICAgICAgJ3ZhbHVlJzogJ2h5YnJpZCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogZWxlY3RyaWNJY29uLFxuICAgICAgICAndmFsdWUnOiAnZXYnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IHBldHJvbExlYWRlZEljb24sXG4gICAgICAgICd2YWx1ZSc6ICdwZXRyb2wnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IHBldHJvbExlYWRlZEljb24sXG4gICAgICAgICd2YWx1ZSc6ICdwaGV2JyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBwZXRyb2xVbmxlYWRlZEljb24sXG4gICAgICAgICd2YWx1ZSc6ICdwZXRyb2x1bHAnLFxuICAgIH1cbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZ1ZWxUeXBlSWNvbihmdWVsVHlwZSkge1xuICAgIGlmIChmdWVsVHlwZSkge1xuICAgICAgICBsZXQgc2VsZWN0ZWRGdWVsVHlwZSA9IGZ1ZWxUeXBlTGlzdC5maW5kKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS52YWx1ZS50b0xvd2VyQ2FzZSgpID09IGZ1ZWxUeXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHNlbGVjdGVkRnVlbFR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZEZ1ZWxUeXBlLmljb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZ1ZWxUeXBlKGZ1ZWxUeXBlKSB7XG4gICAgaWYgKGZ1ZWxUeXBlKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZEZ1ZWxUeXBlID0gZnVlbFR5cGVMaXN0LmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT0gZnVlbFR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoc2VsZWN0ZWRGdWVsVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkRnVlbFR5cGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICAgIGljb246IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICBpY29uOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGZ1ZWxUeXBlTGlzdCxcbn0iLCJjb25zdCBmZWRlcmFsVGVycml0b3J5SWNvbiA9IChcIi9hc3NldHMvc3RhdGVJY29uL2ZlZGVyYWwgdGVycml0b3J5LnBuZ1wiKVxuY29uc3Qgam9ob3JJY29uID0gKFwiL2Fzc2V0cy9zdGF0ZUljb24vam9ob3IucG5nXCIpXG5jb25zdCBrZWRhaEljb24gPSAoXCIvYXNzZXRzL3N0YXRlSWNvbi9rZWRhaC5wbmdcIilcbmNvbnN0IGt1YWxhTHVtcHVySWNvbiA9IChcIi9hc3NldHMvc3RhdGVJY29uL2t1YWxhIGx1bXB1ci5wbmdcIilcbmNvbnN0IGxhYnVhbkZlZGVyYWxJY29uID0gKFwiL2Fzc2V0cy9zdGF0ZUljb24vbGFidWFuLWZlZGVyYWwucG5nXCIpXG5jb25zdCBsYWJ1YW5JY29uID0gKFwiL2Fzc2V0cy9zdGF0ZUljb24vbGFidWFuLnBuZ1wiKVxuY29uc3QgbWVsYWthSWNvbiA9IChcIi9hc3NldHMvc3RhdGVJY29uL21lbGFrYS5wbmdcIilcbmNvbnN0IG5lZ2VyaVNlbWJpbGFuSWNvbiA9IChcIi9hc3NldHMvc3RhdGVJY29uL25lZ2VyaS1zZW1iaWxhbi5wbmdcIilcbmNvbnN0IHBhaGFuZ0ljb24gPSAoXCIvYXNzZXRzL3N0YXRlSWNvbi9wYWhhbmcucG5nXCIpXG5jb25zdCBwZW5hbmdJY29uID0gKFwiL2Fzc2V0cy9zdGF0ZUljb24vcGVuYW5nLnBuZ1wiKVxuY29uc3QgcGVyYWtJY29uID0gKFwiL2Fzc2V0cy9zdGF0ZUljb24vcGVyYWsucG5nXCIpXG5jb25zdCBwZXJsaXNJY29uID0gKFwiL2Fzc2V0cy9zdGF0ZUljb24vcGVybGlzLnBuZ1wiKVxuY29uc3QgcHV0cmFqYXlGZWRlcmFsSWNvbiA9IChcIi9hc3NldHMvc3RhdGVJY29uL3B1dHJhamF5LWZlZGVyYWwucG5nXCIpXG5jb25zdCBzYWJhaEljb24gPSAoXCIvYXNzZXRzL3N0YXRlSWNvbi9zYWJhaC5wbmdcIilcbmNvbnN0IHNhcmF3YWtJY29uID0gKFwiL2Fzc2V0cy9zdGF0ZUljb24vc2FyYXdhay5wbmdcIilcbmNvbnN0IHNlbGFuZ29ySWNvbiA9IChcIi9hc3NldHMvc3RhdGVJY29uL3NlbGFuZ29yLnBuZ1wiKVxuY29uc3QgdGVyZW5nZ2FudUljb24gPSAoXCIvYXNzZXRzL3N0YXRlSWNvbi90ZXJlbmdnYW51LnBuZ1wiKVxuY29uc3Qga2VsYW50YW5JY29uID0gKFwiL2Fzc2V0cy9zdGF0ZUljb24va2VsYW50YW4ucG5nXCIpXG5cbmV4cG9ydCBjb25zdCBTdGF0ZUxpc3QgPSBbXG4gICAge1xuICAgICAgICAnaWNvbic6IGZlZGVyYWxUZXJyaXRvcnlJY29uLFxuICAgICAgICAndmFsdWUnOiAnRmVkZXJhbCBUZXJyaXRvcnknLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IGpvaG9ySWNvbixcbiAgICAgICAgJ3ZhbHVlJzogJ0pvaG9yJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBrZWRhaEljb24sXG4gICAgICAgICd2YWx1ZSc6ICdLZWRhaCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzoga3VhbGFMdW1wdXJJY29uLFxuICAgICAgICAndmFsdWUnOiAnS3VhbGEgTHVtcHVyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBsYWJ1YW5GZWRlcmFsSWNvbixcbiAgICAgICAgJ3ZhbHVlJzogJ0xhYnVhbiBGZWRlcmFsJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBsYWJ1YW5JY29uLFxuICAgICAgICAndmFsdWUnOiAnTGFidWFuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBtZWxha2FJY29uLFxuICAgICAgICAndmFsdWUnOiAnTWVsYWthJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBuZWdlcmlTZW1iaWxhbkljb24sXG4gICAgICAgICd2YWx1ZSc6ICdOZWdlcmkgU2VtYmlsYW4nLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IHBhaGFuZ0ljb24sXG4gICAgICAgICd2YWx1ZSc6ICdQYWhhbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IHBlbmFuZ0ljb24sXG4gICAgICAgICd2YWx1ZSc6ICdQZW5hbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IHBlcmFrSWNvbixcbiAgICAgICAgJ3ZhbHVlJzogJ1BlcmFrJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBwZXJsaXNJY29uLFxuICAgICAgICAndmFsdWUnOiAnUGVybGlzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2ljb24nOiBwdXRyYWpheUZlZGVyYWxJY29uLFxuICAgICAgICAndmFsdWUnOiAnUHV0cmFqYXkgRmVkZXJhbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogc2FiYWhJY29uLFxuICAgICAgICAndmFsdWUnOiAnU2FiYWgnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IHNhcmF3YWtJY29uLFxuICAgICAgICAndmFsdWUnOiAnU2FyYXdhaycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzogc2VsYW5nb3JJY29uLFxuICAgICAgICAndmFsdWUnOiAnU2VsYW5nb3InLFxuICAgIH0sXG4gICAge1xuICAgICAgICAnaWNvbic6IHRlcmVuZ2dhbnVJY29uLFxuICAgICAgICAndmFsdWUnOiAnVGVyZW5nZ2FudScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpY29uJzoga2VsYW50YW5JY29uLFxuICAgICAgICAndmFsdWUnOiAnS2VsYW50YW4nLFxuICAgIH0sXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0ZUljb24oc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkU3RhdGUgPSBTdGF0ZUxpc3QuZmluZChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udmFsdWUudG9Mb3dlckNhc2UoKSA9PSBzdGF0ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChzZWxlY3RlZFN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRTdGF0ZS5pY29uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0ZShzdGF0ZSkge1xuICAgIGlmIChzdGF0ZSkge1xuICAgICAgICBsZXQgc2VsZWN0ZWRTdGF0ZSA9IFN0YXRlTGlzdC5maW5kKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS52YWx1ZS50b0xvd2VyQ2FzZSgpID09IHN0YXRlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHNlbGVjdGVkU3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZFN0YXRlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgICBpY29uOiBudWxsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgaWNvbjogbnVsbFxuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBTdGF0ZUxpc3QsXG59IiwiZXhwb3J0IGNvbnN0IExPQURJTkcgPSAnTE9BRElORyc7XG5cbmV4cG9ydCBjb25zdCBTRVRfSU5JVEVEX1JFRFVYID0gJ1NFVF9JTklURURfUkVEVVgnO1xuXG5leHBvcnQgY29uc3QgU0VUX0RJU0FCTEVfV0lORE9XX1NDUk9MTCA9ICdTRVRfRElTQUJMRV9XSU5ET1dfU0NST0xMJztcblxuZXhwb3J0IGNvbnN0IEFEVkFOQ0VfTU9ERSA9ICdBRFZBTkNFX01PREUnO1xuZXhwb3J0IGNvbnN0IExPR0lOX01PREUgPSAnTE9HSU5fTU9ERSc7XG5leHBvcnQgY29uc3QgUkVHSVNURVJfTU9ERSA9ICdSRUdJU1RFUl9NT0RFJztcbmV4cG9ydCBjb25zdCBVUERBVEVfQUNUSVZFX01FTlUgPSAnVVBEQVRFX0FDVElWRV9NRU5VJztcblxuZXhwb3J0IGNvbnN0IEZJTFRFUl9DQVJfQlJBTkRfTU9ERSA9ICdGSUxURVJfQ0FSX0JSQU5EX01PREUnO1xuZXhwb3J0IGNvbnN0IEZJTFRFUl9DQVJfU0VMRUNURURfQ0FSX0JSQU5EX1JPVyA9ICdGSUxURVJfQ0FSX1NFTEVDVEVEX0NBUl9CUkFORF9ST1cnO1xuZXhwb3J0IGNvbnN0IEZJTFRFUl9DQVJfU0VBUkNIX0tFWVdPUkRTID0gJ0ZJTFRFUl9DQVJfU0VBUkNIX0tFWVdPUkRTJztcblxuZXhwb3J0IGNvbnN0IEZJTFRFUl9DQVJfTU9ERUxfTU9ERSA9ICdGSUxURVJfQ0FSX01PREVMX01PREUnO1xuZXhwb3J0IGNvbnN0IEZJTFRFUl9DQVJfU0VMRUNURURfQ0FSX01PREVMX1JPVyA9ICdGSUxURVJfQ0FSX1NFTEVDVEVEX0NBUl9NT0RFTF9ST1cnO1xuZXhwb3J0IGNvbnN0IEZJTFRFUl9DQVJfTU9ERUxfU0VBUkNIX0tFWVdPUkRTID0gJ0ZJTFRFUl9DQVJfTU9ERUxfU0VBUkNIX0tFWVdPUkRTJztcblxuZXhwb3J0IGNvbnN0IEZJTFRFUl9DT0xPUl9NT0RFID0gJ0ZJTFRFUl9DT0xPUl9NT0RFJztcbmV4cG9ydCBjb25zdCBGSUxURVJfQ0FSX1NFTEVDVEVEX0NPTE9SX01PREVMX1JPVyA9ICdGSUxURVJfQ0FSX1NFTEVDVEVEX0NPTE9SX01PREVMX1JPVyc7XG5leHBvcnQgY29uc3QgRklMVEVSX0NPTE9SX01PREVMX1NFQVJDSF9LRVlXT1JEUyA9ICdGSUxURVJfQ09MT1JfTU9ERUxfU0VBUkNIX0tFWVdPUkRTJztcblxuZXhwb3J0IGNvbnN0IEZJTFRFUl9CT0RZX1RZUEVfTU9ERSA9ICdGSUxURVJfQk9EWV9UWVBFX01PREUnO1xuZXhwb3J0IGNvbnN0IEZJTFRFUl9DQVJfU0VMRUNURURfQk9EWV9UWVBFX01PREVMX1JPVyA9ICdGSUxURVJfQ0FSX1NFTEVDVEVEX0JPRFlfVFlQRV9NT0RFTF9ST1cnO1xuZXhwb3J0IGNvbnN0IEZJTFRFUl9CT0RZX1RZUEVfTU9ERUxfU0VBUkNIX0tFWVdPUkRTID0gJ0ZJTFRFUl9CT0RZX1RZUEVfTU9ERUxfU0VBUkNIX0tFWVdPUkRTJztcblxuZXhwb3J0IGNvbnN0IEZJTFRFUl9EUklWRU5fV0hFRUxTX01PREUgPSAnRklMVEVSX0RSSVZFTl9XSEVFTFNfTU9ERSc7XG5leHBvcnQgY29uc3QgRklMVEVSX0NBUl9TRUxFQ1RFRF9EUklWRU5fV0hFRUxTX01PREVMX1JPVyA9ICdGSUxURVJfQ0FSX1NFTEVDVEVEX0RSSVZFTl9XSEVFTFNfTU9ERUxfUk9XJztcbmV4cG9ydCBjb25zdCBGSUxURVJfRFJJVkVOX1dIRUVMU19NT0RFTF9TRUFSQ0hfS0VZV09SRFMgPSAnRklMVEVSX0RSSVZFTl9XSEVFTFNfTU9ERUxfU0VBUkNIX0tFWVdPUkRTJztcblxuZXhwb3J0IGNvbnN0IEZJTFRFUl9GVUVMX1RZUEVfTU9ERSA9ICdGSUxURVJfRlVFTF9UWVBFX01PREUnO1xuZXhwb3J0IGNvbnN0IEZJTFRFUl9DQVJfU0VMRUNURURfRlVFTF9UWVBFX01PREVMX1JPVyA9ICdGSUxURVJfQ0FSX1NFTEVDVEVEX0ZVRUxfVFlQRV9NT0RFTF9ST1cnO1xuZXhwb3J0IGNvbnN0IEZJTFRFUl9GVUVMX1RZUEVfTU9ERUxfU0VBUkNIX0tFWVdPUkRTID0gJ0ZJTFRFUl9GVUVMX1RZUEVfTU9ERUxfU0VBUkNIX0tFWVdPUkRTJztcblxuZXhwb3J0IGNvbnN0IEZJTFRFUl9TVEFURV9NT0RFID0gJ0ZJTFRFUl9TVEFURV9NT0RFJztcbmV4cG9ydCBjb25zdCBGSUxURVJfQ0FSX1NFTEVDVEVEX1NUQVRFX01PREVMX1JPVyA9ICdGSUxURVJfQ0FSX1NFTEVDVEVEX1NUQVRFX01PREVMX1JPVyc7XG5leHBvcnQgY29uc3QgRklMVEVSX1NUQVRFX01PREVMX1NFQVJDSF9LRVlXT1JEUyA9ICdGSUxURVJfU1RBVEVfTU9ERUxfU0VBUkNIX0tFWVdPUkRTJztcblxuZXhwb3J0IGNvbnN0IFFVSUNLX1NFQVJDSF9QUk9EVUNUU19MSVNUID0gJ1FVSUNLX1NFQVJDSF9QUk9EVUNUU19MSVNUJztcblxuZXhwb3J0IGNvbnN0IFNIT1dfQ09OVEFDVF9MSVNUID0gJ1NIT1dfQ09OVEFDVF9MSVNUJztcblxuZXhwb3J0IGNvbnN0IFNFVF9BUFBMWV9ZRUFSID0gJ1NFVF9BUFBMWV9ZRUFSJztcbmV4cG9ydCBjb25zdCBTRVRfQVBQTFlfUFJJQ0UgPSAnU0VUX0FQUExZX1BSSUNFJztcbmV4cG9ydCBjb25zdCBTRVRfQVBQTFlfTUlMRUFHRSA9ICdTRVRfQVBQTFlfTUlMRUFHRSc7XG5cbmV4cG9ydCBjb25zdCBGSUxURVJfQ0FSX0JSQU5EUyA9ICdGSUxURVJfQ0FSX0JSQU5EUyc7XG5leHBvcnQgY29uc3QgRklMVEVSX0NBUl9NT0RFTFMgPSAnRklMVEVSX0NBUl9NT0RFTFMnO1xuZXhwb3J0IGNvbnN0IEZJTFRFUl9DT0xPUlMgPSAnRklMVEVSX0NPTE9SUyc7XG5leHBvcnQgY29uc3QgRklMVEVSX0JPRFlfVFlQRVMgPSAnRklMVEVSX0JPRFlfVFlQRVMnO1xuZXhwb3J0IGNvbnN0IEZJTFRFUl9EUklWRU5fV0hFRUxTID0gJ0ZJTFRFUl9EUklWRU5fV0hFRUxTJztcbmV4cG9ydCBjb25zdCBGSUxURVJfRlVFTF9UWVBFUyA9ICdGSUxURVJfRlVFTF9UWVBFUyc7XG5leHBvcnQgY29uc3QgRklMVEVSX1NUQVRFUyA9ICdGSUxURVJfU1RBVEVTJztcblxuZXhwb3J0IGNvbnN0IFNFVF9NRU5VX0hFSUdIVCA9ICdTRVRfTUVOVV9IRUlHSFQnO1xuXG5leHBvcnQgY29uc3QgU0VUX05PVElGSUNBVElPTl9UT0tFTiA9ICdTRVRfTk9USUZJQ0FUSU9OX1RPS0VOJztcbmV4cG9ydCBjb25zdCBTRVRfTk9USUZJQ0FUSU9OX1RPS0VOX1RJTUVfT1VUX0RBVEUgPSAnU0VUX05PVElGSUNBVElPTl9UT0tFTl9USU1FX09VVF9EQVRFJztcblxuXG5cbi8vZmV0Y2ggcXVpY2sgZmlsdGVyXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ2FyQnJhbmRzKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRklMVEVSX0NBUl9CUkFORFMsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ2FyTW9kZWxzKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRklMVEVSX0NBUl9NT0RFTFMsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ29sb3JzKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRklMVEVSX0NPTE9SUyxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJCb2R5VHlwZXMoZGF0YSl7XG4gXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfQk9EWV9UWVBFUyxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJEcml2ZW5XaGVlbHMoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfRFJJVkVOX1dIRUVMUyxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJGdWVsVHlwZXMoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfRlVFTF9UWVBFUyxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJTdGF0ZXMoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfU1RBVEVTLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pXG4gIH1cbn1cbi8vZW5kIGZldGNoIHF1aWNrIGZpbHRlclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRpbmcoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBMT0FESU5HLFxuICAgICAgcGF5bG9hZCA6IGRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkdmFuY2VNb2RlKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQURWQU5DRV9NT0RFLFxuICAgICAgcGF5bG9hZDpkYXRhXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luTW9kZShkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IExPR0lOX01PREUsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSlcbiAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTW9kZShkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFJFR0lTVEVSX01PREUsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSlcbiAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFjdGl2ZU1lbnUoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBVUERBVEVfQUNUSVZFX01FTlUsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSlcbiAgfVxufVxuXG4vLyBmaWx0ZXIgY2FyXG4vLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckNhckJyYW5kTW9kZShkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9DQVJfQlJBTkRfTU9ERSxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJDYXJTZWxlY3RlZENhckJyYW5kc1JvdyhkYXRhLCBpbmRleCl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfQ0FSX1NFTEVDVEVEX0NBUl9CUkFORF9ST1csXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgaW5kZXg6IGluZGV4LFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckNhclNlYXJjaEtleXdvcmRzKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRklMVEVSX0NBUl9TRUFSQ0hfS0VZV09SRFMsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSlcbiAgfVxufVxuLy8gZW5kIGZpbHRlciBjYXIgLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG5cbi8vIGZpbHRlciBtb2RlbFxuLy8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckNhck1vZGVsTW9kZShkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9DQVJfTU9ERUxfTU9ERSxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJDYXJTZWxlY3RlZENhck1vZGVsc1JvdyhkYXRhLCBpbmRleCl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfQ0FSX1NFTEVDVEVEX0NBUl9NT0RFTF9ST1csXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgaW5kZXg6IGluZGV4LFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckNhck1vZGVsU2VhcmNoS2V5d29yZHMoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfQ0FSX01PREVMX1NFQVJDSF9LRVlXT1JEUyxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59XG4vLyBlbmQgZmlsdGVyIG1vZGVsIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuXG4vLyBmaWx0ZXIgY29sb3Jcbi8vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ29sb3JNb2RlKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRklMVEVSX0NPTE9SX01PREUsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ2FyU2VsZWN0ZWRDb2xvclJvdyhkYXRhLCBpbmRleCl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfQ0FSX1NFTEVDVEVEX0NPTE9SX01PREVMX1JPVyxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ29sb3JTZWFyY2hLZXl3b3JkcyhkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9DT0xPUl9NT0RFTF9TRUFSQ0hfS0VZV09SRFMsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSlcbiAgfVxufVxuLy8gZW5kIGZpbHRlciBjb2xvciAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJCb2R5VHlwZU1vZGUoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfQk9EWV9UWVBFX01PREUsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ2FyU2VsZWN0ZWRCb2R5VHlwZVJvdyhkYXRhLCBpbmRleCl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfQ0FSX1NFTEVDVEVEX0JPRFlfVFlQRV9NT0RFTF9ST1csXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgaW5kZXg6IGluZGV4LFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckJvZHlUeXBlU2VhcmNoS2V5d29yZHMoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfQk9EWV9UWVBFX01PREVMX1NFQVJDSF9LRVlXT1JEUyxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59XG4vLyBlbmQgZmlsdGVyIGJvZHkgdHlwZSAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cblxuLy8gZmlsdGVyIGRyaXZlbiB3aGVlbHNcbi8vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyRHJpdmVuV2hlZWxNb2RlKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRklMVEVSX0RSSVZFTl9XSEVFTFNfTU9ERSxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJDYXJTZWxlY3RlZERyaXZlbldoZWVsUm93KGRhdGEsIGluZGV4KXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9DQVJfU0VMRUNURURfRFJJVkVOX1dIRUVMU19NT0RFTF9ST1csXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgaW5kZXg6IGluZGV4LFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckRyaXZlbldoZWVsU2VhcmNoS2V5d29yZHMoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfRFJJVkVOX1dIRUVMU19NT0RFTF9TRUFSQ0hfS0VZV09SRFMsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSlcbiAgfVxufVxuLy8gZW5kIGZpbHRlciBkcml2ZW4gd2hlZWwgLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG5cbi8vIGZpbHRlciBmdWVsIHR5cGVcbi8vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyRnVlbFR5cGVNb2RlKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRklMVEVSX0ZVRUxfVFlQRV9NT0RFLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckNhclNlbGVjdGVkRnVlbFR5cGVSb3coZGF0YSwgaW5kZXgpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRklMVEVSX0NBUl9TRUxFQ1RFRF9GVUVMX1RZUEVfTU9ERUxfUk9XLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJGdWVsVHlwZVNlYXJjaEtleXdvcmRzKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRklMVEVSX0ZVRUxfVFlQRV9NT0RFTF9TRUFSQ0hfS0VZV09SRFMsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSlcbiAgfVxufVxuLy8gZW5kIGZpbHRlciBmdWVsIHR5cGUgLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG5cbi8vIGZpbHRlciBzdGF0ZVxuLy8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJTdGF0ZU1vZGUoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGSUxURVJfU1RBVEVfTU9ERSxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJDYXJTZWxlY3RlZFN0YXRlUm93KGRhdGEsIGluZGV4KXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZJTFRFUl9DQVJfU0VMRUNURURfU1RBVEVfTU9ERUxfUk9XLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJTdGF0ZVNlYXJjaEtleXdvcmRzKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRklMVEVSX1NUQVRFX01PREVMX1NFQVJDSF9LRVlXT1JEUyxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuICB9XG59XG4vLyBlbmQgZmlsdGVyIHN0YXRlIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tTZWFyY2hQcm9kdWN0c0xpc3QobW9kZSwgcXVpY2tTZWFyY2hDYXJTcGVjc0RhdGEsIHF1aWNrU2VhcmNoUHJvZHVjdGFkc0RhdGEsIHZhbHVlcyl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBRVUlDS19TRUFSQ0hfUFJPRFVDVFNfTElTVCxcbiAgICAgIG1vZGU6IG1vZGUsXG4gICAgICBxdWlja1NlYXJjaENhclNwZWNzRGF0YSxcbiAgICAgIHF1aWNrU2VhcmNoUHJvZHVjdGFkc0RhdGEsXG4gICAgICB2YWx1ZXMsXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0NvbnRhY3RMaXN0KGJvb2xlYW4pe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogU0hPV19DT05UQUNUX0xJU1QsXG4gICAgICBib29sZWFuLFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEFwcGx5WWVhcihkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFNFVF9BUFBMWV9ZRUFSLFxuICAgICAgZGF0YSxcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRBcHBseVByaWNlKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogU0VUX0FQUExZX1BSSUNFLFxuICAgICAgZGF0YSxcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRBcHBseU1pbGVhZ2UoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBTRVRfQVBQTFlfTUlMRUFHRSxcbiAgICAgIGRhdGEsXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TWVudUhlaWdodChkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFNFVF9NRU5VX0hFSUdIVCxcbiAgICAgIGRhdGEsXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Tm90aWZpY2F0aW9uVG9rZW4oZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBTRVRfTk9USUZJQ0FUSU9OX1RPS0VOLFxuICAgICAgZGF0YSxcbiAgICB9KVxuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0Tm90aWZpY2F0aW9uVG9rZW5UaW1lT3V0RGF0ZShkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFNFVF9OT1RJRklDQVRJT05fVE9LRU5fVElNRV9PVVRfREFURSxcbiAgICAgIGRhdGEsXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SW5pdGVkUmVkdXgoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBTRVRfSU5JVEVEX1JFRFVYLFxuICAgICAgZGF0YSxcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREaXNhYmxlV2luZG93U2Nyb2xsKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogU0VUX0RJU0FCTEVfV0lORE9XX1NDUk9MTCxcbiAgICAgIGRhdGEsXG4gICAgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IEZFVENIX0NBUlBMQVRFU0xJU1QgPSAnRkVUQ0hfQ0FSUExBVEVMSVNUJztcblxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hDYXJQbGF0ZXNMaXN0KGRhdGEpe1xuICAgIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogRkVUQ0hfQ0FSUExBVEVTTElTVCxcbiAgICAgICAgICAgIHBheWxvYWQ6ZGF0YVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgU0VUX1BPU1RfTU9EQUxfTElLRV9SRUZSRVNIX0lEID0gJ1NFVF9QT1NUX01PREFMX0xJS0VfUkVGUkVTSF9JRCc7XG5leHBvcnQgY29uc3QgRkVUQ0hfQ0FSX0ZSRUFLX1BPU1RTID0gJ0ZFVENIX0NBUl9GUkVBS19QT1NUUyc7XG5leHBvcnQgY29uc3QgRkVUQ0hfRURJVEVEX1BPU1QgPSAnRkVUQ0hfRURJVEVEX1BPU1QnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0UG9zdE1vZGFsTGlrZVJlZnJlc2hJZChkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFNFVF9QT1NUX01PREFMX0xJS0VfUkVGUkVTSF9JRCxcbiAgICAgIHBheWxvYWQ6ZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hDYXJGcmVha1Bvc3RzKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfQ0FSX0ZSRUFLX1BPU1RTLFxuICAgICAgcGF5bG9hZDpkYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEVkaXRlZFBvc3QoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9FRElURURfUE9TVCxcbiAgICAgIHBheWxvYWQ6ZGF0YSxcbiAgICB9KTtcbiAgfVxufSIsImV4cG9ydCBjb25zdCBGRVRDSF9SRVZJU0lPTl9BTlNXRVJFRF9RVUVTVElPTlMgPSAnRkVUQ0hfUkVWSVNJT05fQU5TV0VSRURfUVVFU1RJT05TJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUmV2aXNpb25BbnN3ZXJlZFF1ZXN0aW9ucyhkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX1JFVklTSU9OX0FOU1dFUkVEX1FVRVNUSU9OUyxcbiAgICAgIHBheWxvYWQ6ZGF0YSxcbiAgICB9KTtcbiAgfVxufSIsImV4cG9ydCBjb25zdCBGRVRDSF9DTElFTlRfU09DS0VUX0lPID0gJ0ZFVENIX0NMSUVOVF9TT0NLRVRfSU8nO1xuZXhwb3J0IGNvbnN0IENMRUFSX0NMSUVOVF9TT0NLRVRfSU8gPSAnQ0xFQVJfQ0xJRU5UX1NPQ0tFVF9JTyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENsaWVudFNvY2tldElvKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfQ0xJRU5UX1NPQ0tFVF9JTyxcbiAgICAgIHBheWxvYWQ6ZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ2xpZW50U29ja2V0SW8oZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBDTEVBUl9DTElFTlRfU09DS0VUX0lPLFxuICAgIH0pO1xuICB9XG59IiwiZXhwb3J0IGNvbnN0IEZFVENIX05FV1MgPSAnRkVUQ0hfTkVXUyc7XG5leHBvcnQgY29uc3QgRkVUQ0hfQ0xVQiA9ICdGRVRDSF9DTFVCJztcbmV4cG9ydCBjb25zdCBGRVRDSF9QUklDRSA9ICdGRVRDSF9QUklDRSc7XG5leHBvcnQgY29uc3QgRkVUQ0hfUE9QVUxBUiA9ICdGRVRDSF9QT1BVTEFSJztcbmV4cG9ydCBjb25zdCBGRVRDSF9QT1BVTEFSQ0FSUyA9ICdGRVRDSF9QT1BVTEFSQ0FSUyc7XG5leHBvcnQgY29uc3QgRkVUQ0hfQ0FSTkFNRSA9ICdGRVRDSF9DQVJOQU1FJztcbmV4cG9ydCBjb25zdCBGRVRDSF9DQVJERVRBSUxTID0gJ0ZFVENIX0NBUkRFVEFJTFMnO1xuZXhwb3J0IGNvbnN0IEZFVENIX0JSQU5EUyA9ICdGRVRDSF9CUkFORFMnO1xuZXhwb3J0IGNvbnN0IEZFVENIX0JSQU5EREVUQUlMID0gJ0ZFVENIX0JSQU5EREVUQUlMJztcbmV4cG9ydCBjb25zdCBGRVRDSF9CUkFORENBUlMgPSAnRkVUQ0hfQlJBTkRDQVJTJztcbmV4cG9ydCBjb25zdCBGRVRDSF9ERVRBSUxTID0gJ0ZFVENIX0RFVEFJTFMnO1xuZXhwb3J0IGNvbnN0IEZFVENIX0ZVRUwgPSAnRkVUQ0hfRlVFTCc7XG5leHBvcnQgY29uc3QgRkVUQ0hfRklMVEVSRURfQ09NUEFSRV9EQVRBID0gJ0ZFVENIX0ZJTFRFUkVEX0NPTVBBUkVfREFUQSc7XG5leHBvcnQgY29uc3QgRkVUQ0hfUEVFUl9DT01QQVJFX0NBUlMgPSAnRkVUQ0hfUEVFUl9DT01QQVJFX0NBUlMnO1xuZXhwb3J0IGNvbnN0IEZFVENIX0NPTVBBUkVfTkVXQ0FSX0lEUyA9ICdGRVRDSF9DT01QQVJFX05FV0NBUl9JRFMnO1xuZXhwb3J0IGNvbnN0IEFERF9DT01QQVJFX05FV0NBUl9JRCA9ICdBRERfQ09NUEFSRV9ORVdDQVJfSUQnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9DT01QQVJFX05FV0NBUl9JRCA9ICdSRU1PVkVfQ09NUEFSRV9ORVdDQVJfSUQnO1xuZXhwb3J0IGNvbnN0IEZFVENIX0NPTVBBUkVfX05FV0NBUl9MSU1JVCA9ICdGRVRDSF9DT01QQVJFX19ORVdDQVJfTElNSVQnO1xuZXhwb3J0IGNvbnN0IEZFVENIX05FV19DQVJfRklMVEVSX0dST1VQID0gJ0ZFVENIX05FV19DQVJfRklMVEVSX0dST1VQJztcbmV4cG9ydCBjb25zdCBSRVNFVF9ORVdfQ0FSX0ZJTFRFUl9HUk9VUCA9ICdSRVNFVF9ORVdfQ0FSX0ZJTFRFUl9HUk9VUCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaE5ld3MoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9ORVdTLFxuICAgICAgcGF5bG9hZDpkYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENsdWIoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9DTFVCLFxuICAgICAgcGF5bG9hZDpkYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFByaWNlKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfUFJJQ0UsXG4gICAgICBwYXlsb2FkOmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUG9wdWxhcihkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX1BPUFVMQVIsXG4gICAgICBwYXlsb2FkOmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUG9wdWxhckNhcnMoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9QT1BVTEFSQ0FSUyxcbiAgICAgIHBheWxvYWQ6ZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hDYXJOYW1lKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfQ0FSTkFNRSxcbiAgICAgIHBheWxvYWQ6ZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hDYXJEZXRhaWxzKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfQ0FSREVUQUlMUyxcbiAgICAgIHBheWxvYWQ6ZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hCcmFuZHMoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9CUkFORFMsXG4gICAgICBwYXlsb2FkOmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQnJhbmREZXRhaWwoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9CUkFORERFVEFJTCxcbiAgICAgIHBheWxvYWQ6ZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hCcmFuZENhcnMoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9CUkFORENBUlMsXG4gICAgICBwYXlsb2FkOmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoRGV0YWlscyhkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX0RFVEFJTFMsXG4gICAgICBwYXlsb2FkOmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoRnVlbChkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX0ZVRUwsXG4gICAgICBwYXlsb2FkOmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcmVkQ29tcGFyZURhdGEoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9GSUxURVJFRF9DT01QQVJFX0RBVEEsXG4gICAgICBwYXlsb2FkOmRhdGFcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hDb21wYXJlTmV3Q2FySWRzKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfQ09NUEFSRV9ORVdDQVJfSURTLFxuICAgICAgcGF5bG9hZDpkYXRhXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENvbXBhcmVOZXdDYXJJZChkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEFERF9DT01QQVJFX05FV0NBUl9JRCxcbiAgICAgIHBheWxvYWQ6ZGF0YVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDb21wYXJlTmV3Q2FySWQoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBSRU1PVkVfQ09NUEFSRV9ORVdDQVJfSUQsXG4gICAgICBwYXlsb2FkOmRhdGFcbiAgICB9KTtcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENvbXBhcmVOZXdDYXJMaW1pdChkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX0NPTVBBUkVfX05FV0NBUl9MSU1JVCxcbiAgICAgIHBheWxvYWQ6ZGF0YVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFBlZXJDb21wYXJlQ2FycyhkYXRhKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX1BFRVJfQ09NUEFSRV9DQVJTLFxuICAgICAgcGF5bG9hZDpkYXRhXG4gICAgfSk7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaE5ld0NhckZpbHRlckdyb3VwKGRhdGEpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfTkVXX0NBUl9GSUxURVJfR1JPVVAsXG4gICAgICBwYXlsb2FkOmRhdGFcbiAgICB9KTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0TmV3Q2FyRmlsdGVyR3JvdXAoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBSRVNFVF9ORVdfQ0FSX0ZJTFRFUl9HUk9VUCxcbiAgICB9KTtcbiAgfVxufSIsImV4cG9ydCBjb25zdCBGRVRDSF9QUk9EVUNUU0xJU1QgPSAnRkVUQ0hfUFJPRFVDVFNMSVNUJztcbmV4cG9ydCBjb25zdCBGRVRDSF9QUk9EVUNUU0xJU1RfSE9NRSA9ICdGRVRDSF9QUk9EVUNUU0xJU1RfSE9NRSc7XG5leHBvcnQgY29uc3QgUFVTSF9QUk9EVUNUU0xJU1QgPSAnUFVTSF9QUk9EVUNUU0xJU1QnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QUk9EVUNUU0xJU1QgPSAnUkVNT1ZFX1BST0RVQ1RTTElTVCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BST0RVQ1RTTElTVCA9ICdVUERBVEVfUFJPRFVDVFNMSVNUJztcbmV4cG9ydCBjb25zdCBVUERBVEVfQUNUSVZFX0lEX1BST0RVQ1RTX0xJU1QgPSAnVVBEQVRFX0FDVElWRV9JRF9QUk9EVUNUU19MSVNUJztcbmV4cG9ydCBjb25zdCBBRERfQ09NUEFSRV9fUFJPRFVDVF9JRCA9ICdBRERfQ09NUEFSRV9fUFJPRFVDVF9JRCc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0NPTVBBUkVfUFJPRFVDVF9JRCA9ICdSRU1PVkVfQ09NUEFSRV9QUk9EVUNUX0lEJztcbmV4cG9ydCBjb25zdCBDTEVBUl9DT01QQVJFX1BST0RVQ1RfSURTID0gJ0NMRUFSX0NPTVBBUkVfUFJPRFVDVF9JRFMnO1xuZXhwb3J0IGNvbnN0IFBBVENIX0NPTVBBUkVfUFJPRFVDVF9JRFMgPSAnUEFUQ0hfQ09NUEFSRV9QUk9EVUNUX0lEUyc7XG5leHBvcnQgY29uc3QgRkVUQ0hfRklMVEVSRURfQ09NUEFSRV9EQVRBID0gJ0ZFVENIX0ZJTFRFUkVEX0NPTVBBUkVfREFUQSc7XG5leHBvcnQgY29uc3QgRkVUQ0hfRkVBVFVSRVNfTElTVCA9ICdGRVRDSF9GRUFUVVJFU19MSVNUJztcbmV4cG9ydCBjb25zdCBVUERBVEVfQ0hFQ0tFRF9GRUFUVVJFU19EQVRFID0gJ1VQREFURV9DSEVDS0VEX0ZFQVRVUkVTX0RBVEUnO1xuZXhwb3J0IGNvbnN0IEZFVENIX0NPTVBBUkVfTElNSVQgPSAnRkVUQ0hfQ09NUEFSRV9MSU1JVCc7XG5leHBvcnQgY29uc3QgRkVUQ0hfUFJPRFVDVF9GSUxURVJfT1BUSU9OUyA9ICdGRVRDSF9QUk9EVUNUX0ZJTFRFUl9PUFRJT05TJztcbmV4cG9ydCBjb25zdCBDTEVBUl9QUk9EVUNUX0ZJTFRFUl9PUFRJT05TID0gJ0NMRUFSX1BST0RVQ1RfRklMVEVSX09QVElPTlMnO1xuZXhwb3J0IGNvbnN0IEZFVENIX1BST0RVQ1RfRklMVEVSX0dST1VQID0gJ0ZFVENIX1BST0RVQ1RfRklMVEVSX0dST1VQJztcbmV4cG9ydCBjb25zdCBDTEVBUl9QUk9EVUNUX0ZJTFRFUl9HUk9VUCA9ICdDTEVBUl9QUk9EVUNUX0ZJTFRFUl9HUk9VUCc7XG5leHBvcnQgY29uc3QgRkVUQ0hfUFJPRFVDVF9GSUxURVJfQ09ORklHID0gJ0ZFVENIX1BST0RVQ1RfRklMVEVSX0NPTkZJRyc7XG5leHBvcnQgY29uc3QgQ0xFQVJfUFJPRFVDVF9GSUxURVJfQ09ORklHID0gJ0NMRUFSX1BST0RVQ1RfRklMVEVSX0NPTkZJRyc7XG5leHBvcnQgY29uc3QgRkVUQ0hfRklMVEVSX01PREFMX1NUQVRFID0gJ0ZFVENIX0ZJTFRFUl9NT0RBTF9TVEFURSc7XG5leHBvcnQgY29uc3QgU0VUX1BST0RVQ1RfTElTVF9MT0FESU5HID0gJ1NFVF9QUk9EVUNUX0xJU1RfTE9BRElORyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFByb2R1Y3RzTGlzdChkYXRhKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9QUk9EVUNUU0xJU1QsXG4gICAgICBwYXlsb2FkOiBkYXRhXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUHJvZHVjdHNMaXN0SG9tZShkYXRhKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9QUk9EVUNUU0xJU1RfSE9NRSxcbiAgICAgIHBheWxvYWQ6IGRhdGFcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaFByb2R1Y3RzTGlzdChkYXRhKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBQVVNIX1BST0RVQ1RTTElTVCxcbiAgICAgIHBheWxvYWQ6IGRhdGFcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvZHVjdHNMaXN0KGRhdGEpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFJFTU9WRV9QUk9EVUNUU0xJU1QsXG4gICAgICBwYXlsb2FkOiBkYXRhXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3RMaXN0KGRhdGEpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFVQREFURV9QUk9EVUNUU0xJU1QsXG4gICAgICBwYXlsb2FkOiBkYXRhXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFjdGl2ZUlkUHJvZHVjdExpc3QoaWQpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFVQREFURV9BQ1RJVkVfSURfUFJPRFVDVFNfTElTVCxcbiAgICAgIGlkLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckNvbXBhcmVQcm9kdWN0SWRzKCkge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQ0xFQVJfQ09NUEFSRV9QUk9EVUNUX0lEUyxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyZWRDb21wYXJlRGF0YShkYXRhKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9GSUxURVJFRF9DT01QQVJFX0RBVEEsXG4gICAgICBwYXlsb2FkOiBkYXRhXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoRmVhdHVyZXNMaXN0KGRhdGEpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX0ZFQVRVUkVTX0xJU1QsXG4gICAgICBwYXlsb2FkOiBkYXRhXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNoZWNrZWRGZWF0dXJlc0RhdGUoZGF0YSkge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogVVBEQVRFX0NIRUNLRURfRkVBVFVSRVNfREFURSxcbiAgICAgIHBheWxvYWQ6IGRhdGFcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hDb21wYXJlQ2FyTGltaXQoZGF0YSkge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfQ09NUEFSRV9MSU1JVCxcbiAgICAgIHBheWxvYWQ6IGRhdGFcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ29tcGFyZVByb2R1Y3RJZChkYXRhKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBBRERfQ09NUEFSRV9fUFJPRFVDVF9JRCxcbiAgICAgIHBheWxvYWQ6IGRhdGFcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ29tcGFyZVByb2R1Y3RJZChkYXRhKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBSRU1PVkVfQ09NUEFSRV9QUk9EVUNUX0lELFxuICAgICAgcGF5bG9hZDogZGF0YVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaENvbXBhcmVQcm9kdWN0SWRzKGRhdGEpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFBBVENIX0NPTVBBUkVfUFJPRFVDVF9JRFMsXG4gICAgICBwYXlsb2FkOiBkYXRhXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUHJvZHVjdEZpbHRlck9wdGlvbnMoZGF0YSkge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfUFJPRFVDVF9GSUxURVJfT1BUSU9OUyxcbiAgICAgIHBheWxvYWQ6IGRhdGFcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJQcm9kdWN0RmlsdGVyT3B0aW9ucyhkYXRhKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBDTEVBUl9QUk9EVUNUX0ZJTFRFUl9PUFRJT05TLFxuICAgICAgcGF5bG9hZDoge30sXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUHJvZHVjdEZpbHRlckdyb3VwKGRhdGEpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX1BST0RVQ1RfRklMVEVSX0dST1VQLFxuICAgICAgcGF5bG9hZDogZGF0YVxuICAgIH0pO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY2xlYXJQcm9kdWN0RmlsdGVyR3JvdXAoZGF0YSkge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQ0xFQVJfUFJPRFVDVF9GSUxURVJfR1JPVVAsXG4gICAgICBwYXlsb2FkOiB7fSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQcm9kdWN0RmlsdGVyQ29uZmlnKGRhdGEpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX1BST0RVQ1RfRklMVEVSX0NPTkZJRyxcbiAgICAgIHBheWxvYWQ6IGRhdGFcbiAgICB9KTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyUHJvZHVjdEZpbHRlckNvbmZpZygpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IENMRUFSX1BST0RVQ1RfRklMVEVSX0NPTkZJRyxcbiAgICAgIHBheWxvYWQ6IHt9LFxuICAgIH0pO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hGaWx0ZXJNb2RhbFN0YXRlKGRhdGEpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX0ZJTFRFUl9NT0RBTF9TVEFURSxcbiAgICAgIHBheWxvYWQ6IGRhdGEsXG4gICAgfSk7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRQcm9kdWN0TGlzdExvYWRpbmcoZGF0YSkge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogU0VUX1BST0RVQ1RfTElTVF9MT0FESU5HLFxuICAgICAgcGF5bG9hZDogZGF0YSxcbiAgICB9KTtcbiAgfVxufSIsIi8vQWN0aW9uIFR5cGVzXG5leHBvcnQgY29uc3QgU1RFUFNfUFJPUFNfQ1VSUkVOVCA9ICdTVEVQU19QUk9QU19DVVJSRU5UJztcbmV4cG9ydCBjb25zdCBGT1JNX09ORSA9ICdGT1JNX09ORSc7XG5cbi8vQWN0aW9uIENyZWF0b3JcbmV4cG9ydCBmdW5jdGlvbiBzdGVwc1Byb3BzQ3VycmVudChkYXRhKXtcbiAgICByZXR1cm4oZGlzcGF0Y2gpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogU1RFUFNfUFJPUFNfQ1VSUkVOVCxcbiAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybU9uZShkYXRhKXtcbiAgICByZXR1cm4oZGlzcGF0Y2gpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogRk9STV9PTkUsXG4gICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIi8vQWN0aW9uIFR5cGVzXG5leHBvcnQgY29uc3QgVVBEQVRFX1NFTExFUl9QUk9GSUxFID0gXCJVUERBVEVfU0VMTEVSX1BST0ZJTEVcIjtcblxuXG4vL0FjdGlvbiBDcmVhdG9yXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU2VsbGVyUHJvZmlsZShkYXRhKXtcbiAgICByZXR1cm4oZGlzcGF0Y2gpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogVVBEQVRFX1NFTExFUl9QUk9GSUxFLFxuICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgVVBEQVRFX1NPQ0tFVF9JTkZPID0gJ1VQREFURV9TT0NLRVRfSU5GTyc7XG5leHBvcnQgY29uc3QgREVMRVRFX1NPQ0tFVF9JTkZPID0gJ0RFTEVURV9TT0NLRVRfSU5GTyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTb2NrZXRJbmZvKHNvY2tldEluZm8pe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogVVBEQVRFX1NPQ0tFVF9JTkZPLFxuICAgICAgcGF5bG9hZDpzb2NrZXRJbmZvXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVNvY2tldEluZm8oKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IERFTEVURV9TT0NLRVRfSU5GTyxcbiAgICAgIHBheWxvYWQ6ZmFsc2VcbiAgICB9KTtcbiAgfVxufSIsImV4cG9ydCBjb25zdCBMT0dJTl9TVUNDRVNTRlVMID0gJ0xPR0lOX1NVQ0NFU1NGVUwnO1xuZXhwb3J0IGNvbnN0IExPR09VVF9TVUNDRVNTRlVMID0gJ0xPR09VVF9TVUNDRVNTRlVMJztcbmV4cG9ydCBjb25zdCBBRERSRVNTX0JPT0tfRk9STSA9ICdBRERSRVNTX0JPT0tfRk9STSc7XG5leHBvcnQgY29uc3QgQkFOS19GT1JNID0gJ0JBTktfRk9STSc7XG5leHBvcnQgY29uc3QgQ0FSRF9GT1JNID0gJ0NBUkRfRk9STSc7XG5leHBvcnQgY29uc3QgU0VUX1VTRVIgPSAnU0VUX1VTRVInO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9naW5TdWNjZXNzZnVsKHVzZXJJbmZvKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IExPR0lOX1NVQ0NFU1NGVUwsXG4gICAgICBwYXlsb2FkOnVzZXJJbmZvXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ291dFN1Y2Nlc3NmdWwoKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IExPR09VVF9TVUNDRVNTRlVMLFxuICAgICAgcGF5bG9hZDpmYWxzZVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRVc2VyKHVzZXJJbmZvKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFNFVF9VU0VSLFxuICAgICAgcGF5bG9hZDp1c2VySW5mb1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRyZXNzQm9va0Zvcm0oZm9ybSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBBRERSRVNTX0JPT0tfRk9STSxcbiAgICAgIHBheWxvYWQ6Zm9ybVxuICAgIH0pO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY2FyZEZvcm0oZm9ybSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBDQVJEX0ZPUk0sXG4gICAgICBwYXlsb2FkOmZvcm1cbiAgICB9KTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGJhbmtGb3JtKGZvcm0pe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQkFOS19GT1JNLFxuICAgICAgcGF5bG9hZDpmb3JtXG4gICAgfSk7XG4gIH1cbn0iLCJleHBvcnQgY29uc3QgQUREX0xJS0UgPSAnQUREX0xJS0UnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9MSUtFID0gJ1JFTU9WRV9MSUtFJztcbmV4cG9ydCBjb25zdCBBRERfQk9PS01BUksgPSAnQUREX0JPT0tNQVJLJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfQk9PS01BUksgPSAnUkVNT1ZFX0JPT0tNQVJLJztcbmV4cG9ydCBjb25zdCBBRERfTElLRV9NU0cgPSAnQUREX0xJS0VfTVNHJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfTElLRV9NU0cgPSAnUkVNT1ZFX0xJS0VfTVNHJztcbiBcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExpa2UodmFsdWUpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQUREX0xJS0UsXG4gICAgICB2YWx1ZTp2YWx1ZVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVMaWtlKHZhbHVlKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFJFTU9WRV9MSUtFLFxuICAgICAgdmFsdWU6dmFsdWVcbiAgICB9KTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJvb2ttYXJrKHZhbHVlKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEFERF9CT09LTUFSSyxcbiAgICAgIHZhbHVlOnZhbHVlXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUJvb2ttYXJrKHZhbHVlKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFJFTU9WRV9CT09LTUFSSyxcbiAgICAgIHZhbHVlOnZhbHVlXG4gICAgfSk7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRMaWtlTXNnKHZhbHVlKXtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEFERF9MSUtFX01TRyxcbiAgICAgIHZhbHVlOnZhbHVlXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUxpa2VNc2codmFsdWUpe1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogUkVNT1ZFX0xJS0VfTVNHLFxuICAgICAgdmFsdWU6dmFsdWVcbiAgICB9KTtcbiAgfVxufSIsImV4cG9ydCBjb25zdCBGRVRDSF9WQVJJQU5UID0gJ0ZFVENIX1ZBUklBTlQnO1xuZXhwb3J0IGNvbnN0IENMRUFSX1ZBUklBTlQgPSAnQ0xFQVJfVkFSSUFOVCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFZhcmlhbnQoZGF0YSl7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9WQVJJQU5ULFxuICAgICAgcGF5bG9hZDpkYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclZhcmlhbnQoZGF0YSl7XG4gICAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBDTEVBUl9WQVJJQU5ULFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gICIsIlxuXG5pbXBvcnQgeyBMT0dJTl9TVUNDRVNTRlVMLCBMT0dPVVRfU1VDQ0VTU0ZVTCwgbG9naW5TdWNjZXNzZnVsLCBsb2dvdXRTdWNjZXNzZnVsLCBTRVRfVVNFUiB9IGZyb20gJy4vYWN0aW9ucy91c2VyLWFjdGlvbnMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEZFVENIX0NPTVBBUkVfTElNSVQsIEZFVENIX1BST0RVQ1RTTElTVF9IT01FLCBBRERfQ09NUEFSRV9fUFJPRFVDVF9JRCwgUEFUQ0hfQ09NUEFSRV9QUk9EVUNUX0lEUywgQ0xFQVJfQ09NUEFSRV9QUk9EVUNUX0lEUywgUkVNT1ZFX0NPTVBBUkVfUFJPRFVDVF9JRCB9IGZyb20gJy4vYWN0aW9ucy9wcm9kdWN0c0xpc3QtYWN0aW9ucyc7XG5pbXBvcnQgbG9jYWxTdG9yYWdlIGZyb20gJ2xvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0IHsgRkVUQ0hfQ0xJRU5UX1NPQ0tFVF9JTywgQ0xFQVJfQ0xJRU5UX1NPQ0tFVF9JTyB9IGZyb20gJy4vYWN0aW9ucy9saXZlLWFjdGlvbic7XG5pbXBvcnQgeyBVUERBVEVfU09DS0VUX0lORk8sIERFTEVURV9TT0NLRVRfSU5GTyB9IGZyb20gJy4vYWN0aW9ucy9zb2NrZXRSZWZyZXNoLWFjdGlvbnMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgaXNWYWxpZE51bWJlciB9IGZyb20gJy4uL2NvbW1vbi1mdW5jdGlvbic7XG5cbi8vTm90IHN1cHBvcnRlZCBmb3IgbXVsdGlwbGUgc2FtZSBhY3Rpb24gdXBkYXRlIHlldFxuLy9FeC4gQUREX0NPTVBBUkVfX1BST0RVQ1RfSUQgZm9yIHR3aWNlLCBpIHdpbGwgb25seSB0YWtlIHRoZSBsYXN0IDEuIFNhbWUgYWN0aW9ucyBiZWZvcmUgbGFzdCBvbmUgd2lsbCBiZSBpZ25vcmVkO1xuZXhwb3J0IGNvbnN0IHN0YXRlUGVyc2lzdEFjdGlvbnMgPSBbXG4gIHtcbiAgICBhY3Rpb246IExPR0lOX1NVQ0NFU1NGVUwsXG4gICAgcmVkdWNlcjogJ3VzZXInLFxuICB9LFxuICB7XG4gICAgYWN0aW9uOiBMT0dPVVRfU1VDQ0VTU0ZVTCxcbiAgICByZWR1Y2VyOiAndXNlcicsXG4gIH0sXG4gIHtcbiAgICBhY3Rpb246IFNFVF9VU0VSLFxuICAgIHJlZHVjZXI6ICd1c2VyJyxcbiAgfSxcbiAge1xuICAgIGFjdGlvbjogRkVUQ0hfQ09NUEFSRV9MSU1JVCxcbiAgICByZWR1Y2VyOiAncHJvZHVjdHNMaXN0JyxcbiAgfSxcbiAgLy8ge1xuICAvLyAgIGFjdGlvbiA6IEFERF9DT01QQVJFX19QUk9EVUNUX0lELFxuICAvLyByZWR1Y2VyIDogJ3Byb2R1Y3RMaXN0JyxcbiAgLy8gfSxcbiAge1xuICAgIGFjdGlvbjogUEFUQ0hfQ09NUEFSRV9QUk9EVUNUX0lEUyxcbiAgICByZWR1Y2VyOiAncHJvZHVjdHNMaXN0JyxcbiAgfSxcbiAge1xuICAgIGFjdGlvbjogQ0xFQVJfQ09NUEFSRV9QUk9EVUNUX0lEUyxcbiAgICByZWR1Y2VyOiAncHJvZHVjdHNMaXN0JyxcbiAgfSxcbiAge1xuICAgIGFjdGlvbjogUkVNT1ZFX0NPTVBBUkVfUFJPRFVDVF9JRCxcbiAgICByZWR1Y2VyOiAncHJvZHVjdHNMaXN0JyxcbiAgfSxcbiAge1xuICAgIGFjdGlvbjogRkVUQ0hfQ0xJRU5UX1NPQ0tFVF9JTyxcbiAgICByZWR1Y2VyOiAnc29ja2V0UmVmcmVzaCcsXG4gIH0sXG4gIHtcbiAgICBhY3Rpb246IENMRUFSX0NMSUVOVF9TT0NLRVRfSU8sXG4gICAgcmVkdWNlcjogJ3NvY2tldFJlZnJlc2gnLFxuICB9LFxuICB7XG4gICAgYWN0aW9uOiBVUERBVEVfU09DS0VUX0lORk8sXG4gICAgcmVkdWNlcjogJ3NvY2tldFJlZnJlc2gnLFxuICB9LFxuICB7XG4gICAgYWN0aW9uOiBERUxFVEVfU09DS0VUX0lORk8sXG4gICAgcmVkdWNlcjogJ3NvY2tldFJlZnJlc2gnLFxuICB9LFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNpc3RSZWR1eChyZWR1Y2VyLCBkYXRhKSB7XG5cbiAgaWYgKHJlZHVjZXIgJiYgXy5pc1BsYWluT2JqZWN0KGRhdGEpICYmICFfLmlzRW1wdHkoZGF0YSkpIHtcbiAgICBsZXQgcmVkdXhTdGF0ZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0KCdyZWR1eCcpO1xuICAgIGlmICghXy5pc1BsYWluT2JqZWN0KHJlZHV4U3RhdGVzKSkge1xuICAgICAgcmVkdXhTdGF0ZXMgPSB7fTtcbiAgICB9XG5cbiAgICByZWR1eFN0YXRlc1tyZWR1Y2VyXSA9IGRhdGE7XG4gICAgbG9jYWxTdG9yYWdlLnNldCgncmVkdXgnLCByZWR1eFN0YXRlcyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSXNOZWVkUGVyc2lzdChhY3Rpb24pIHtcbiAgaWYgKGFjdGlvbikge1xuICAgIHJldHVybiBfLnNvbWUoc3RhdGVQZXJzaXN0QWN0aW9ucyB8fCBbXSB8fCBbXSwgWydhY3Rpb24nLCBhY3Rpb25dKSB8fCBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTmVlZFBlcnNpc3QoYWN0aW9uLCByZWR1Y2VyLCBkYXRhLCBpc1Jlc3RvcmVEYXRhKSB7XG4gIGxldCBuZWVkUGVyc2lzdCA9IGNoZWNrSXNOZWVkUGVyc2lzdChhY3Rpb24pO1xuICBsZXQgcGVyc2lzdE9iaiA9IGdldFBlcnNpc3RPYmooYWN0aW9uKTtcblxuICBpZiAobmVlZFBlcnNpc3QgJiYgXy5nZXQocGVyc2lzdE9iaiwgJ3JlZHVjZXInKSA9PSByZWR1Y2VyKSB7XG4gICAgbGV0IHBlcnNpc3RlZFN0YXRlcyA9IGdldExvY2FsU3RvcmFnZVBlcnNpc3RTdGF0ZXMoXy5nZXQocGVyc2lzdE9iaiwgJ3JlZHVjZXInKSk7XG4gICAgbGV0IHNlbGVjdGVkUGVyc2lzdGVkU3RhdGUgPSBfLmZpbmQocGVyc2lzdGVkU3RhdGVzLCB7XG4gICAgICBwZXJzaXN0T2JqOiB7XG4gICAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgICB9XG4gICAgfSk7XG4gICAgbGV0IHNlcXVlbmNlID0gMDtcblxuICAgIGlmICghaXNSZXN0b3JlRGF0YSB8fCAhaXNWYWxpZE51bWJlcihfLmdldChzZWxlY3RlZFBlcnNpc3RlZFN0YXRlLCAnc2VxdWVuY2UnKSkpIHtcbiAgICAgIHNlcXVlbmNlID0gXy5nZXQoXy5tYXhCeShwZXJzaXN0ZWRTdGF0ZXMgfHwgW10sICdzZXF1ZW5jZScpLCAnc2VxdWVuY2UnKTtcbiAgICAgIGlmICghaXNWYWxpZE51bWJlcihzZXF1ZW5jZSkpIHtcbiAgICAgICAgc2VxdWVuY2UgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VxdWVuY2UgPSBwYXJzZUludChzZXF1ZW5jZSkgKyAxO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXF1ZW5jZSA9IHBhcnNlSW50KF8uZ2V0KHNlbGVjdGVkUGVyc2lzdGVkU3RhdGUsICdzZXF1ZW5jZScpKTtcbiAgICB9XG5cblxuICAgIGxldCBwZXJzaXN0RGF0YSA9IHtcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICByZWR1Y2VyOiBfLmdldChwZXJzaXN0T2JqLCAncmVkdWNlcicpLFxuICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxuICAgICAgc2VxdWVuY2U6IHNlcXVlbmNlLFxuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0KF8uZ2V0KHBlcnNpc3RPYmosIFsnYWN0aW9uJ10pLCBwZXJzaXN0RGF0YSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBlcnNpc3RPYmooYWN0aW9uKSB7XG4gIGlmIChhY3Rpb24pIHtcbiAgICByZXR1cm4gXy5maW5kKHN0YXRlUGVyc2lzdEFjdGlvbnMgfHwgW10sIFsnYWN0aW9uJywgYWN0aW9uXSkgfHwge307XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2VQZXJzaXN0U3RhdGVzKHJlZHVjZXIpIHtcblxuXG4gIGxldCBjb29raWVQZXJzaXN0U3RhdGVzID0gW107XG4gIF8uZm9yRWFjaChzdGF0ZVBlcnNpc3RBY3Rpb25zLCBmdW5jdGlvbiAoc3RhdGVQZXJzaXN0QWN0aW9uKSB7XG4gICAgbGV0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0KHN0YXRlUGVyc2lzdEFjdGlvblsnYWN0aW9uJ10pO1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBpZiAoIXJlZHVjZXIgfHwgcmVkdWNlciA9PSBfLmdldChkYXRhLCAncmVkdWNlcicpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29va2llUGVyc2lzdFN0YXRlcy5wdXNoKHtcbiAgICAgICAgICAgIHBlcnNpc3RPYmo6IHN0YXRlUGVyc2lzdEFjdGlvbixcbiAgICAgICAgICAgIGRhdGE6IF8uZ2V0KGRhdGEsIFsnZGF0YSddKSxcbiAgICAgICAgICAgIHJlZHVjZXI6IF8uZ2V0KGRhdGEsIFsncmVkdWNlciddKSxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbW9tZW50KF8uZ2V0KGRhdGEsIFsnY3JlYXRlZEF0J10pKSxcbiAgICAgICAgICAgIHNlcXVlbmNlOiBfLmdldChkYXRhLCBbJ3NlcXVlbmNlJ10pIHx8IDAsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KVxuICBjb29raWVQZXJzaXN0U3RhdGVzID0gXy5zb3J0QnkoY29va2llUGVyc2lzdFN0YXRlcywgWydyZWR1Y2VyJywgJ3NlcXVlbmNlJ10pO1xuICByZXR1cm4gY29va2llUGVyc2lzdFN0YXRlcyB8fCBbXTtcblxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBkeW5hbWljRGlzcGF0Y2goYWN0aW9uLCBkYXRhKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBhY3Rpb24sXG4gICAgICBwYXlsb2FkOiBkYXRhLFxuICAgICAgaXNSZXN0b3JlRGF0YTogdHJ1ZSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgUkVTVE9SRV9SRURVWCA9ICdSRVNUT1JFX1JFRFVYJztcbmV4cG9ydCBmdW5jdGlvbiByZXN0b3JlUmVkdXgoZGF0YSkge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogUkVTVE9SRV9SRURVWCxcbiAgICAgIHBheWxvYWQ6IGRhdGEsXG4gICAgfSk7XG4gIH1cbn0iLCJpbXBvcnQge1xuICBMT0FESU5HLFxuXG4gIEFEVkFOQ0VfTU9ERSxcbiAgTE9HSU5fTU9ERSxcbiAgUkVHSVNURVJfTU9ERSxcbiAgVVBEQVRFX0FDVElWRV9NRU5VLFxuXG4gIEZJTFRFUl9DQVJfQlJBTkRfTU9ERSxcbiAgRklMVEVSX0NBUl9TRUxFQ1RFRF9DQVJfQlJBTkRfUk9XLFxuICBGSUxURVJfQ0FSX1NFQVJDSF9LRVlXT1JEUyxcblxuICBGSUxURVJfQ0FSX1NFTEVDVEVEX0NBUl9NT0RFTF9ST1csXG4gIEZJTFRFUl9DQVJfTU9ERUxfU0VBUkNIX0tFWVdPUkRTLFxuICBGSUxURVJfQ0FSX01PREVMX01PREUsXG5cbiAgRklMVEVSX0NPTE9SX01PREUsXG4gIEZJTFRFUl9DQVJfU0VMRUNURURfQ09MT1JfTU9ERUxfUk9XLFxuICBGSUxURVJfQ09MT1JfTU9ERUxfU0VBUkNIX0tFWVdPUkRTLFxuXG4gIEZJTFRFUl9CT0RZX1RZUEVfTU9ERSxcbiAgRklMVEVSX0NBUl9TRUxFQ1RFRF9CT0RZX1RZUEVfTU9ERUxfUk9XLFxuICBGSUxURVJfQk9EWV9UWVBFX01PREVMX1NFQVJDSF9LRVlXT1JEUyxcblxuICBGSUxURVJfRFJJVkVOX1dIRUVMU19NT0RFLFxuICBGSUxURVJfQ0FSX1NFTEVDVEVEX0RSSVZFTl9XSEVFTFNfTU9ERUxfUk9XLFxuICBGSUxURVJfRFJJVkVOX1dIRUVMU19NT0RFTF9TRUFSQ0hfS0VZV09SRFMsXG5cbiAgRklMVEVSX0ZVRUxfVFlQRV9NT0RFLFxuICBGSUxURVJfQ0FSX1NFTEVDVEVEX0ZVRUxfVFlQRV9NT0RFTF9ST1csXG4gIEZJTFRFUl9GVUVMX1RZUEVfTU9ERUxfU0VBUkNIX0tFWVdPUkRTLFxuXG4gIEZJTFRFUl9TVEFURV9NT0RFLFxuICBGSUxURVJfQ0FSX1NFTEVDVEVEX1NUQVRFX01PREVMX1JPVyxcbiAgRklMVEVSX1NUQVRFX01PREVMX1NFQVJDSF9LRVlXT1JEUyxcblxuICBGSUxURVJfQ0FSX0JSQU5EUyxcbiAgRklMVEVSX0NBUl9NT0RFTFMsXG4gIEZJTFRFUl9DT0xPUlMsXG4gIEZJTFRFUl9CT0RZX1RZUEVTLFxuICBGSUxURVJfRFJJVkVOX1dIRUVMUyxcbiAgRklMVEVSX0ZVRUxfVFlQRVMsXG4gIEZJTFRFUl9TVEFURVMsXG5cbiAgUVVJQ0tfU0VBUkNIX1BST0RVQ1RTX0xJU1QsXG5cbiAgU0hPV19DT05UQUNUX0xJU1QsXG5cbiAgU0VUX0FQUExZX1lFQVIsXG4gIFNFVF9BUFBMWV9QUklDRSxcbiAgU0VUX0FQUExZX01JTEVBR0UsXG5cbiAgU0VUX01FTlVfSEVJR0hULFxuICBTRVRfTk9USUZJQ0FUSU9OX1RPS0VOLFxuICBTRVRfTk9USUZJQ0FUSU9OX1RPS0VOX1RJTUVfT1VUX0RBVEUsXG4gIFNFVF9JTklURURfUkVEVVgsXG4gIFNFVF9ESVNBQkxFX1dJTkRPV19TQ1JPTEwsXG59IGZyb20gJy4uL2FjdGlvbnMvYXBwLWFjdGlvbnMnO1xuXG5pbXBvcnQgbG9jYWxTdG9yYWdlIGZyb20gJ2xvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0IHsgY2hlY2tJc05lZWRQZXJzaXN0LCBjaGVja05lZWRQZXJzaXN0LCBnZXRQZXJzaXN0T2JqLCBwZXJzaXN0UmVkdXggfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBhcHAgZnJvbSAnbmV4dC9hcHAnO1xuXG5cbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIG5vdGlmaWNhdGlvblRva2VuOiBudWxsLFxuICBub3RpZmljYXRpb25Ub2tlblRpbWVPdXREYXRlOiBudWxsLFxuICBkaXNhYmxlV2luZG93U2Nyb2xsOiBmYWxzZSxcblxuICBpbml0ZWRSZWR1eDogZmFsc2UsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBhZHZhbmNlTW9kZTogZmFsc2UsXG4gIGxvZ2luTW9kZTogZmFsc2UsXG4gIHJlZ2lzdGVyTW9kZTogZmFsc2UsXG5cbiAgZmlsdGVyQ2FyQnJhbmRNb2RlOiBmYWxzZSxcbiAgZmlsdGVyQ2FyU2VsZWN0ZWRDYXJCcmFuZERhdGE6ICcnLFxuICBmaWx0ZXJDYXJTZWxlY3RlZENhckJyYW5kSW5kZXg6ICcnLFxuICBmaWx0ZXJDYXJTZWFyY2hLZXl3b3JkczogJycsXG5cbiAgZmlsdGVyQ2FyTW9kZWxNb2RlOiBmYWxzZSxcbiAgZmlsdGVyQ2FyU2VsZWN0ZWRDYXJNb2RlbERhdGE6ICcnLFxuICBmaWx0ZXJDYXJTZWxlY3RlZENhck1vZGVsSW5kZXg6ICcnLFxuICBmaWx0ZXJDYXJNb2RlbFNlYXJjaEtleXdvcmRzOiAnJyxcblxuICBmaWx0ZXJDYXJNb2RlbE1vZGU6IGZhbHNlLFxuICBmaWx0ZXJDYXJTZWxlY3RlZENhck1vZGVsRGF0YTogJycsXG4gIGZpbHRlckNhclNlbGVjdGVkQ2FyTW9kZWxJbmRleDogJycsXG4gIGZpbHRlckNhck1vZGVsU2VhcmNoS2V5d29yZHM6ICcnLFxuXG4gIGZpbHRlckNvbG9yTW9kZTogZmFsc2UsXG4gIGZpbHRlckNhclNlbGVjdGVkQ29sb3JEYXRhOiAnJyxcbiAgZmlsdGVyQ2FyU2VsZWN0ZWRDb2xvckluZGV4OiAnJyxcbiAgZmlsdGVyQ29sb3JTZWFyY2hLZXl3b3JkczogJycsXG5cbiAgZmlsdGVyQm9keVR5cGVNb2RlOiBmYWxzZSxcbiAgZmlsdGVyQ2FyU2VsZWN0ZWRCb2R5VHlwZURhdGE6ICcnLFxuICBmaWx0ZXJDYXJTZWxlY3RlZEJvZHlUeXBlSW5kZXg6ICcnLFxuICBmaWx0ZXJCb2R5VHlwZVNlYXJjaEtleXdvcmRzOiAnJyxcblxuICBmaWx0ZXJGdWVsVHlwZU1vZGU6IGZhbHNlLFxuICBmaWx0ZXJDYXJTZWxlY3RlZEZ1ZWxUeXBlRGF0YTogJycsXG4gIGZpbHRlckNhclNlbGVjdGVkRnVlbFR5cGVJbmRleDogJycsXG4gIGZpbHRlckZ1ZWxUeXBlU2VhcmNoS2V5d29yZHM6ICcnLFxuXG4gIGZpbHRlclN0YXRlTW9kZTogZmFsc2UsXG4gIGZpbHRlckNhclNlbGVjdGVkU3RhdGVEYXRhOiAnJyxcbiAgZmlsdGVyQ2FyU2VsZWN0ZWRTdGF0ZUluZGV4OiAnJyxcbiAgZmlsdGVyU3RhdGVTZWFyY2hLZXl3b3JkczogJycsXG5cbiAgY2FyQnJhbmRzOiBbXSxcbiAgY2FyTW9kZWxzOiBbXSxcbiAgY29sb3JzOiBbXSxcbiAgYm9keVR5cGVzOiBbXSxcbiAgZHJpdmVuV2hlZWxzOiBbXSxcbiAgZnVlbFR5cGVzOiBbXSxcbiAgc3RhdGVzOiBbXSxcblxuICBxdWlja1NlYXJjaE1vZGU6ICcnLFxuICBxdWlja1NlYXJjaENhclNwZWNzRGF0YToge30sXG4gIHF1aWNrU2VhcmNoUHJvZHVjdGFkc0RhdGE6IHt9LFxuICBhY3RpdmVNZW51OiAtMSxcbiAgdmFsdWVzOiB7fSxcblxuICBzaG93Q29udGFjdDogZmFsc2UsXG5cbiAgYXBwbHlZZWFyOiB1bmRlZmluZWQsXG4gIGFwcGx5UHJpY2U6IHVuZGVmaW5lZCxcbiAgYXBwbHlNaWxlYWdlOiB1bmRlZmluZWQsXG5cbiAgbWVudUhlaWdodDogdW5kZWZpbmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24pIHtcblxuXG4gIC8vIGNoZWNrTmVlZFBlcnNpc3QoXy5nZXQoYWN0aW9uLCAndHlwZScpLCAnYXBwJywgXy5nZXQoYWN0aW9uLCAncGF5bG9hZCcpLCBfLmdldChhY3Rpb24sICdpc1Jlc3RvcmVEYXRhJykpO1xuXG4gIGxldCBwZXJzaXN0U3RhdGVzID0gXy5nZXQobG9jYWxTdG9yYWdlLmdldCgncmVkdXgnKSB8fCB7fSwgJ2FwcCcpIHx8IElOSVRJQUxfU1RBVEU7XG4gIGxldCBuZXdTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICAuLi5wZXJzaXN0U3RhdGVzXG4gIH1cblxuICBpZighXy5pc0VxdWFsKHN0YXRlLCBuZXdTdGF0ZSkpe1xuICAgIHN0YXRlID0gbmV3U3RhdGU7XG4gIH1cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgTE9BRElORzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBBRFZBTkNFX01PREU6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFkdmFuY2VNb2RlOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIExPR0lOX01PREU6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvZ2luTW9kZTogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIFJFR0lTVEVSX01PREU6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlZ2lzdGVyTW9kZTogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIFVQREFURV9BQ1RJVkVfTUVOVTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWN0aXZlTWVudTogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIC8vXG4gICAgY2FzZSBGSUxURVJfQ0FSX0JSQU5EUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FyQnJhbmRzOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRklMVEVSX0NBUl9NT0RFTFM6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhck1vZGVsczogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZJTFRFUl9DT0xPUlM6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbG9yczogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZJTFRFUl9CT0RZX1RZUEVTOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBib2R5VHlwZXM6IGFjdGlvbi5kYXRhXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGSUxURVJfRFJJVkVOX1dIRUVMUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZHJpdmVuV2hlZWxzOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRklMVEVSX0ZVRUxfVFlQRVM6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZ1ZWxUeXBlczogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZJTFRFUl9TVEFURVM6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHN0YXRlczogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICAvLyBmaWx0ZXIgY2FyXG4gICAgLy8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjYXNlIEZJTFRFUl9DQVJfQlJBTkRfTU9ERTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyQ2FyQnJhbmRNb2RlOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRklMVEVSX0NBUl9TRUxFQ1RFRF9DQVJfQlJBTkRfUk9XOlxuICAgICAgaWYgKGFjdGlvbi5pbmRleCkge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBmaWx0ZXJDYXJTZWxlY3RlZENhckJyYW5kRGF0YTogYWN0aW9uLmRhdGEsXG4gICAgICAgICAgZmlsdGVyQ2FyU2VsZWN0ZWRDYXJCcmFuZEluZGV4OiBhY3Rpb24uaW5kZXhcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBmaWx0ZXJDYXJTZWxlY3RlZENhckJyYW5kRGF0YTogYWN0aW9uLmRhdGFcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgY2FzZSBGSUxURVJfQ0FSX1NFQVJDSF9LRVlXT1JEUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyQ2FyU2VhcmNoS2V5d29yZHM6IGFjdGlvbi5kYXRhXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgLy8gZW5kIGZpbHRlciBjYXIgLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG5cbiAgICAvLyBmaWx0ZXIgY2FyXG4gICAgLy8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjYXNlIEZJTFRFUl9DQVJfTU9ERUxfTU9ERTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyQ2FyTW9kZWxNb2RlOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRklMVEVSX0NBUl9TRUxFQ1RFRF9DQVJfTU9ERUxfUk9XOlxuICAgICAgaWYgKGFjdGlvbi5pbmRleCkge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBmaWx0ZXJDYXJTZWxlY3RlZENhck1vZGVsRGF0YTogYWN0aW9uLmRhdGEsXG4gICAgICAgICAgZmlsdGVyQ2FyU2VsZWN0ZWRDYXJNb2RlbEluZGV4OiBhY3Rpb24uaW5kZXhcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBmaWx0ZXJDYXJTZWxlY3RlZENhck1vZGVsRGF0YTogYWN0aW9uLmRhdGFcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgY2FzZSBGSUxURVJfQ0FSX01PREVMX1NFQVJDSF9LRVlXT1JEUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyQ2FyTW9kZWxTZWFyY2hLZXl3b3JkczogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICAvLyBlbmQgZmlsdGVyIG1vZGVsIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuXG4gICAgLy8gZmlsdGVyIGNvbG9yXG4gICAgLy8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjYXNlIEZJTFRFUl9DT0xPUl9NT0RFOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWx0ZXJDb2xvck1vZGU6IGFjdGlvbi5kYXRhXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGSUxURVJfQ0FSX1NFTEVDVEVEX0NPTE9SX01PREVMX1JPVzpcbiAgICAgIGlmIChhY3Rpb24uaW5kZXgpIHtcbiAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgZmlsdGVyQ2FyU2VsZWN0ZWRDb2xvckRhdGE6IGFjdGlvbi5kYXRhLFxuICAgICAgICAgIGZpbHRlckNhclNlbGVjdGVkQ29sb3JJbmRleDogYWN0aW9uLmluZGV4XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgZmlsdGVyQ2FyU2VsZWN0ZWRDb2xvckRhdGE6IGFjdGlvbi5kYXRhXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIGNhc2UgRklMVEVSX0NPTE9SX01PREVMX1NFQVJDSF9LRVlXT1JEUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyQ29sb3JTZWFyY2hLZXl3b3JkczogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICAvLyBlbmQgZmlsdGVyIG1vZGVsIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuXG4gICAgLy8gZmlsdGVyIGJvZHkgdHlwZVxuICAgIC8vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2FzZSBGSUxURVJfQk9EWV9UWVBFX01PREU6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbHRlckJvZHlUeXBlTW9kZTogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZJTFRFUl9DQVJfU0VMRUNURURfQk9EWV9UWVBFX01PREVMX1JPVzpcbiAgICAgIGlmIChhY3Rpb24uaW5kZXgpIHtcbiAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgZmlsdGVyQ2FyU2VsZWN0ZWRCb2R5VHlwZURhdGE6IGFjdGlvbi5kYXRhLFxuICAgICAgICAgIGZpbHRlckNhclNlbGVjdGVkQm9keVR5cGVJbmRleDogYWN0aW9uLmluZGV4XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgZmlsdGVyQ2FyU2VsZWN0ZWRCb2R5VHlwZURhdGE6IGFjdGlvbi5kYXRhXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIGNhc2UgRklMVEVSX0JPRFlfVFlQRV9NT0RFTF9TRUFSQ0hfS0VZV09SRFM6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbHRlckJvZHlUeXBlU2VhcmNoS2V5d29yZHM6IGFjdGlvbi5kYXRhXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgLy8gZW5kIGZpbHRlciBtb2RlbCAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cblxuICAgIC8vIGZpbHRlciBkcml2ZW4gd2hlZWxzXG4gICAgLy8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBjYXNlIEZJTFRFUl9EUklWRU5fV0hFRUxTX01PREU6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbHRlckRyaXZlbldoZWVsTW9kZTogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZJTFRFUl9DQVJfU0VMRUNURURfRFJJVkVOX1dIRUVMU19NT0RFTF9ST1c6XG4gICAgICBpZiAoYWN0aW9uLmluZGV4KSB7XG4gICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGZpbHRlckNhclNlbGVjdGVkRHJpdmVuV2hlZWxEYXRhOiBhY3Rpb24uZGF0YSxcbiAgICAgICAgICBmaWx0ZXJDYXJTZWxlY3RlZERyaXZlbldoZWVsSW5kZXg6IGFjdGlvbi5pbmRleFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGZpbHRlckNhclNlbGVjdGVkRHJpdmVuV2hlZWxEYXRhOiBhY3Rpb24uZGF0YVxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICBjYXNlIEZJTFRFUl9EUklWRU5fV0hFRUxTX01PREVMX1NFQVJDSF9LRVlXT1JEUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyRHJpdmVuV2hlZWxTZWFyY2hLZXl3b3JkczogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICAvLyBlbmQgZmlsdGVyIGRyaXZlbiB3aGVlbHMgLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG5cbiAgICAvLyBmaWx0ZXIgZHJpdmVuIHdoZWVsc1xuICAgIC8vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2FzZSBGSUxURVJfRlVFTF9UWVBFX01PREU6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbHRlckZ1ZWxUeXBlTW9kZTogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZJTFRFUl9DQVJfU0VMRUNURURfRlVFTF9UWVBFX01PREVMX1JPVzpcbiAgICAgIGlmIChhY3Rpb24uaW5kZXgpIHtcbiAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgZmlsdGVyQ2FyU2VsZWN0ZWRGdWVsVHlwZURhdGE6IGFjdGlvbi5kYXRhLFxuICAgICAgICAgIGZpbHRlckNhclNlbGVjdGVkRnVlbFR5cGVJbmRleDogYWN0aW9uLmluZGV4XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgZmlsdGVyQ2FyU2VsZWN0ZWRGdWVsVHlwZURhdGE6IGFjdGlvbi5kYXRhXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIGNhc2UgRklMVEVSX0ZVRUxfVFlQRV9NT0RFTF9TRUFSQ0hfS0VZV09SRFM6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbHRlckZ1ZWxUeXBlU2VhcmNoS2V5d29yZHM6IGFjdGlvbi5kYXRhXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgLy8gZW5kIGZpbHRlciBkcml2ZW4gd2hlZWxzIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuXG4gICAgLy8gZmlsdGVyIGRyaXZlbiB3aGVlbHNcbiAgICAvLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGNhc2UgRklMVEVSX1NUQVRFX01PREU6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbHRlclN0YXRlTW9kZTogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZJTFRFUl9DQVJfU0VMRUNURURfU1RBVEVfTU9ERUxfUk9XOlxuICAgICAgaWYgKGFjdGlvbi5pbmRleCkge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBmaWx0ZXJDYXJTZWxlY3RlZFN0YXRlRGF0YTogYWN0aW9uLmRhdGEsXG4gICAgICAgICAgZmlsdGVyQ2FyU2VsZWN0ZWRTdGF0ZUluZGV4OiBhY3Rpb24uaW5kZXhcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBmaWx0ZXJDYXJTZWxlY3RlZFN0YXRlRGF0YTogYWN0aW9uLmRhdGFcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgY2FzZSBGSUxURVJfU1RBVEVfTU9ERUxfU0VBUkNIX0tFWVdPUkRTOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWx0ZXJTdGF0ZVNlYXJjaEtleXdvcmRzOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIGVuZCBmaWx0ZXIgZHJpdmVuIHdoZWVscyAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cblxuICAgIGNhc2UgUVVJQ0tfU0VBUkNIX1BST0RVQ1RTX0xJU1Q6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHF1aWNrU2VhcmNoTW9kZTogYWN0aW9uLm1vZGUsXG4gICAgICAgIHF1aWNrU2VhcmNoQ2FyU3BlY3NEYXRhOiBhY3Rpb24ucXVpY2tTZWFyY2hDYXJTcGVjc0RhdGEsXG4gICAgICAgIHF1aWNrU2VhcmNoUHJvZHVjdGFkc0RhdGE6IGFjdGlvbi5xdWlja1NlYXJjaFByb2R1Y3RhZHNEYXRhLFxuICAgICAgICB2YWx1ZXM6IGFjdGlvbi52YWx1ZXNcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIFNIT1dfQ09OVEFDVF9MSVNUOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzaG93Q29udGFjdDogYWN0aW9uLmJvb2xlYW5cbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIFNFVF9BUFBMWV9ZRUFSOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhcHBseVllYXI6IGFjdGlvbi5kYXRhXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBTRVRfQVBQTFlfUFJJQ0U6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFwcGx5UHJpY2U6IGFjdGlvbi5kYXRhXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBTRVRfQVBQTFlfTUlMRUFHRTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYXBwbHlNaWxlYWdlOiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgU0VUX01FTlVfSEVJR0hUOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtZW51SGVpZ2h0OiBhY3Rpb24uZGF0YVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgU0VUX05PVElGSUNBVElPTl9UT0tFTjpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbm90aWZpY2F0aW9uVG9rZW46IGFjdGlvbi5kYXRhXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBTRVRfTk9USUZJQ0FUSU9OX1RPS0VOX1RJTUVfT1VUX0RBVEU6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG5vdGlmaWNhdGlvblRva2VuVGltZU91dERhdGU6IGFjdGlvbi5kYXRhXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBTRVRfSU5JVEVEX1JFRFVYOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpbml0ZWRSZWR1eDogYWN0aW9uLmRhdGFcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIFNFVF9ESVNBQkxFX1dJTkRPV19TQ1JPTEw6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRpc2FibGVXaW5kb3dTY3JvbGw6IGFjdGlvbi5kYXRhID09IHRydWUgPyB0cnVlIDogZmFsc2UsXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHN0YXRlID0gc3RhdGVcbiAgICAgIGJyZWFrO1xuICB9XG5cblxuICBwZXJzaXN0UmVkdXgoJ2FwcCcsIHN0YXRlKVxuICByZXR1cm4gc3RhdGU7XG59IiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgeyBGRVRDSF9DQVJQTEFURVNMSVNUIH0gZnJvbSAnLi4vYWN0aW9ucy9jYXJQbGF0ZXNMaXN0LWFjdGlvbnMnO1xuaW1wb3J0IGxvY2FsU3RvcmFnZSBmcm9tICdsb2NhbC1zdG9yYWdlJztcbmltcG9ydCB7IGNoZWNrSXNOZWVkUGVyc2lzdCwgY2hlY2tOZWVkUGVyc2lzdCwgZ2V0UGVyc2lzdE9iaiwgcGVyc2lzdFJlZHV4IH0gZnJvbSAnLi4vY29uZmlnJztcblxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcbiAgICBjYXJQbGF0ZXNMaXN0OiBbXSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSB7XG5cbiAgICAvLyBjaGVja05lZWRQZXJzaXN0KF8uZ2V0KGFjdGlvbiwgJ3R5cGUnKSwgJ2NhclBsYXRlc0xpc3QnLCBfLmdldChhY3Rpb24sICdwYXlsb2FkJyksIF8uZ2V0KGFjdGlvbiwgJ2lzUmVzdG9yZURhdGEnKSk7XG5cbiAgICBsZXQgcGVyc2lzdFN0YXRlcyA9IF8uZ2V0KGxvY2FsU3RvcmFnZS5nZXQoJ3JlZHV4JykgfHwge30sICdjYXJQbGF0ZXNMaXN0JykgfHwgSU5JVElBTF9TVEFURTtcbiAgICBsZXQgbmV3U3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi5wZXJzaXN0U3RhdGVzXG4gICAgfVxuICAgIGlmKCFfLmlzRXF1YWwoc3RhdGUsIG5ld1N0YXRlKSl7XG4gICAgICBzdGF0ZSA9IG5ld1N0YXRlO1xuICAgIH1cbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgRkVUQ0hfQ0FSUExBVEVTTElTVDpcbiAgICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGNhclBsYXRlc0xpc3Q6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBzdGF0ZSA9IHN0YXRlXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcGVyc2lzdFJlZHV4KCdjYXJQbGF0ZXNMaXN0Jywgc3RhdGUpXG5cbiAgICByZXR1cm4gc3RhdGU7XG59IiwiXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IFNFVF9QT1NUX01PREFMX0xJS0VfUkVGUkVTSF9JRCwgRkVUQ0hfQ0FSX0ZSRUFLX1BPU1RTLCBGRVRDSF9FRElURURfUE9TVCB9IGZyb20gJy4uL2FjdGlvbnMvY2FyZnJlYWsuYWN0aW9uJztcbmltcG9ydCBsb2NhbFN0b3JhZ2UgZnJvbSAnbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgeyBjaGVja0lzTmVlZFBlcnNpc3QsIGNoZWNrTmVlZFBlcnNpc3QsIGdldFBlcnNpc3RPYmosIHBlcnNpc3RSZWR1eCB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICAgIHBvc3RNb2RhbExpa2VSZWZyZXNoSWQ6ICcnLFxuICAgIGNhckZyZWFrUG9zdHM6IFtdLFxuICAgIGVkaXRlZFBvc3Q6IHt9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24pIHtcblxuICAgIC8vIGNoZWNrTmVlZFBlcnNpc3QoXy5nZXQoYWN0aW9uLCAndHlwZScpLCAnY2FyZnJlYWsnLCBfLmdldChhY3Rpb24sICdwYXlsb2FkJyksIF8uZ2V0KGFjdGlvbiwgJ2lzUmVzdG9yZURhdGEnKSk7XG5cbiAgICBsZXQgcGVyc2lzdFN0YXRlcyA9IF8uZ2V0KGxvY2FsU3RvcmFnZS5nZXQoJ3JlZHV4JykgfHwge30sICdjYXJmcmVhaycpIHx8IElOSVRJQUxfU1RBVEU7XG4gICAgbGV0IG5ld1N0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4ucGVyc2lzdFN0YXRlc1xuICAgIH1cbiAgICBpZighXy5pc0VxdWFsKHN0YXRlLCBuZXdTdGF0ZSkpe1xuICAgICAgc3RhdGUgPSBuZXdTdGF0ZTtcbiAgICB9XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFNFVF9QT1NUX01PREFMX0xJS0VfUkVGUkVTSF9JRDpcbiAgICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHBvc3RNb2RhbExpa2VSZWZyZXNoSWQ6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEZFVENIX0NBUl9GUkVBS19QT1NUUzpcbiAgICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGNhckZyZWFrUG9zdHM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEZFVENIX0VESVRFRF9QT1NUOlxuICAgICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgZWRpdGVkUG9zdDogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBzdGF0ZSA9IHN0YXRlXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBwZXJzaXN0UmVkdXgoJ2NhcmZyZWFrJywgc3RhdGUpXG5cbiAgICByZXR1cm4gc3RhdGU7XG59IiwiaW1wb3J0IF8sIHsgdXBwZXJGaXJzdCB9IGZyb20gJ2xvZGFzaCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHsgRkVUQ0hfUkVWSVNJT05fQU5TV0VSRURfUVVFU1RJT05TIH0gZnJvbSAnLi4vYWN0aW9ucy9rcHAtYWN0aW9ucyc7XG5pbXBvcnQgeyBpc1ZhbGlkTnVtYmVyIH0gZnJvbSAnLi4vLi4vY29tbW9uLWZ1bmN0aW9uJztcbmltcG9ydCBsb2NhbFN0b3JhZ2UgZnJvbSAnbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgeyBjaGVja0lzTmVlZFBlcnNpc3QsIGNoZWNrTmVlZFBlcnNpc3QsIGdldFBlcnNpc3RPYmosIHBlcnNpc3RSZWR1eCB9IGZyb20gJy4uL2NvbmZpZyc7XG5cblxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcbiAgICBhbnN3ZXJlZEVuUmV2aXNpb25TZWN0aW9uQVBhcGVyOiBbXSxcbiAgICBhbnN3ZXJlZEVuUmV2aXNpb25TZWN0aW9uQlBhcGVyOiBbXSxcbiAgICBhbnN3ZXJlZEVuUmV2aXNpb25TZWN0aW9uQ1BhcGVyOiBbXSxcbiAgICBhbnN3ZXJlZEJtUmV2aXNpb25TZWN0aW9uQVBhcGVyOiBbXSxcbiAgICBhbnN3ZXJlZEJtUmV2aXNpb25TZWN0aW9uQlBhcGVyOiBbXSxcbiAgICBhbnN3ZXJlZEJtUmV2aXNpb25TZWN0aW9uQ1BhcGVyOiBbXSxcblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24pIHtcblxuICAgIC8vIGNoZWNrTmVlZFBlcnNpc3QoXy5nZXQoYWN0aW9uLCAndHlwZScpLCAna3BwJywgXy5nZXQoYWN0aW9uLCAncGF5bG9hZCcpLCBfLmdldChhY3Rpb24sICdpc1Jlc3RvcmVEYXRhJykpO1xuXG4gICAgbGV0IHBlcnNpc3RTdGF0ZXMgPSBfLmdldChsb2NhbFN0b3JhZ2UuZ2V0KCdyZWR1eCcpIHx8IHt9LCAna3BwJykgfHwgSU5JVElBTF9TVEFURTtcbiAgICBsZXQgbmV3U3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi5wZXJzaXN0U3RhdGVzXG4gICAgfVxuICAgIGlmKCFfLmlzRXF1YWwoc3RhdGUsIG5ld1N0YXRlKSl7XG4gICAgICBzdGF0ZSA9IG5ld1N0YXRlO1xuICAgIH1cbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgRkVUQ0hfUkVWSVNJT05fQU5TV0VSRURfUVVFU1RJT05TOlxuICAgICAgICAgICAgaWYgKCFhY3Rpb24ucGF5bG9hZCB8fCAhaXNWYWxpZE51bWJlcihhY3Rpb24ucGF5bG9hZC5ncm91cCkgfHwgIWFjdGlvbi5wYXlsb2FkLmxhbmd1YWdlKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhdGVbYGFuc3dlcmVkJHtfLnVwcGVyRmlyc3QoYWN0aW9uLnBheWxvYWQubGFuZ3VhZ2UpfVJldmlzaW9uU2VjdGlvbiR7U3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIHBhcnNlSW50KGFjdGlvbi5wYXlsb2FkLmdyb3VwKSl9UGFwZXJgXSA9IGFjdGlvbi5wYXlsb2FkLmRhdGE7XG4gICAgICAgICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc3RhdGUgPSBzdGF0ZVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHBlcnNpc3RSZWR1eCgna3BwJywgc3RhdGUpXG5cbiAgICByZXR1cm4gc3RhdGU7XG59IiwiaW1wb3J0IF8sIHsgdXBwZXJGaXJzdCB9IGZyb20gJ2xvZGFzaCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHsgRkVUQ0hfQ0xJRU5UX1NPQ0tFVF9JTywgQ0xFQVJfQ0xJRU5UX1NPQ0tFVF9JTyB9IGZyb20gJy4uL2FjdGlvbnMvbGl2ZS1hY3Rpb24nO1xuaW1wb3J0IGxvY2FsU3RvcmFnZSBmcm9tICdsb2NhbC1zdG9yYWdlJztcbmltcG9ydCB7IGNoZWNrSXNOZWVkUGVyc2lzdCwgY2hlY2tOZWVkUGVyc2lzdCwgZ2V0UGVyc2lzdE9iaiwgcGVyc2lzdFJlZHV4IH0gZnJvbSAnLi4vY29uZmlnJztcblxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcbiAgICBzb2NrZXQ6IHVuZGVmaW5lZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSB7XG5cbiAgICAvLyBjaGVja05lZWRQZXJzaXN0KF8uZ2V0KGFjdGlvbiwgJ3R5cGUnKSwgJ2xpdmUnLCBfLmdldChhY3Rpb24sICdwYXlsb2FkJyksIF8uZ2V0KGFjdGlvbiwgJ2lzUmVzdG9yZURhdGEnKSk7XG5cbiAgICBsZXQgcGVyc2lzdFN0YXRlcyA9IF8uZ2V0KGxvY2FsU3RvcmFnZS5nZXQoJ3JlZHV4JykgfHwge30sICdsaXZlJykgfHwgSU5JVElBTF9TVEFURTtcbiAgICBsZXQgbmV3U3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi5wZXJzaXN0U3RhdGVzXG4gICAgfVxuICAgIGlmKCFfLmlzRXF1YWwoc3RhdGUsIG5ld1N0YXRlKSl7XG4gICAgICBzdGF0ZSA9IG5ld1N0YXRlO1xuICAgIH1cbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgRkVUQ0hfQ0xJRU5UX1NPQ0tFVF9JTzpcbiAgICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHNvY2tldDogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIENMRUFSX0NMSUVOVF9TT0NLRVRfSU86XG4gICAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBzb2NrZXQ6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBzdGF0ZSA9IHN0YXRlXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcGVyc2lzdFJlZHV4KCdsaXZlJywgc3RhdGUpXG5cbiAgICByZXR1cm4gc3RhdGU7XG59IiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQge1xuICBGRVRDSF9ORVdTLFxuICBGRVRDSF9DTFVCLFxuICBGRVRDSF9QUklDRSxcbiAgRkVUQ0hfUE9QVUxBUixcbiAgRkVUQ0hfUE9QVUxBUkNBUlMsXG4gIEZFVENIX0NBUk5BTUUsXG4gIEZFVENIX0NBUkRFVEFJTFMsXG4gIEZFVENIX0JSQU5EUyxcbiAgRkVUQ0hfQlJBTkRERVRBSUwsXG4gIEZFVENIX0JSQU5EQ0FSUyxcbiAgRkVUQ0hfREVUQUlMUyxcbiAgRkVUQ0hfRklMVEVSRURfQ09NUEFSRV9EQVRBLFxuICBGRVRDSF9GVUVMLFxuICBGRVRDSF9DT01QQVJFX05FV0NBUl9JRFMsXG4gIEFERF9DT01QQVJFX05FV0NBUl9JRCxcbiAgUkVNT1ZFX0NPTVBBUkVfTkVXQ0FSX0lELFxuICBGRVRDSF9DT01QQVJFX19ORVdDQVJfTElNSVQsXG4gIEZFVENIX1BFRVJfQ09NUEFSRV9DQVJTLFxuICBGRVRDSF9ORVdfQ0FSX0ZJTFRFUl9HUk9VUCxcbiAgUkVTRVRfTkVXX0NBUl9GSUxURVJfR1JPVVAsXG59IGZyb20gJy4uL2FjdGlvbnMvbmV3Y2Fycy1hY3Rpb25zJztcbmltcG9ydCBsb2NhbFN0b3JhZ2UgZnJvbSAnbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgeyBjaGVja0lzTmVlZFBlcnNpc3QsIGNoZWNrTmVlZFBlcnNpc3QsIGdldFBlcnNpc3RPYmosIHBlcnNpc3RSZWR1eCB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIG5ld3M6IFtdLFxuICBjbHViOiBbXSxcbiAgcHJpY2U6IFtdLFxuICBwb3B1bGFyOiBbXSxcbiAgcG9wdWxhckNhcnM6IFtdLFxuICBDYXJOYW1lOiB7fSxcbiAgYnJhbmRzOiBbXSxcbiAgYnJhbmREZXRhaWw6IFtdLFxuICBicmFuZENhcnM6IFtdLFxuICBkZXRhaWxzOiBbXSxcbiAgZnVlbDogW10sXG4gIGZpbHRlcmVkQ29tcGFyZURhdGE6IFtdLFxuICBuZXdDYXJGaWx0ZXJHcm91cDoge1xuICAgIG1ha2U6ICcnLFxuICAgIGJvZHlUeXBlOiAnJyxcbiAgICB0cmFuc21pc3Npb246ICcnLFxuICAgIGRyaXZlbndoZWVsOiAnJyxcbiAgICBzZWF0Q2FwYWNpdHk6ICcnLFxuICAgIGZ1ZWxUeXBlOiAnJyxcbiAgICBleHRlcmlvcjogJycsXG4gICAgaW50ZXJpb3I6ICcnLFxuICAgIHNhZmV0eTogJycsXG4gICAgcHJpY2VSYW5nZTogW10sXG4gICAgbW9udGhseVBheW1lbnRSYW5nZTogW10sXG4gICAgZW5naW5lQ2FwYWNpdHlSYW5nZTogW10sXG4gIH0sXG4gIHBlZXJDb21wOiBbXSxcbiAgY29tcGFyZUlkczogW10sXG4gIGNvbXBhcmVMaW1pdDogLTEsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbikge1xuXG4gIC8vIGNoZWNrTmVlZFBlcnNpc3QoXy5nZXQoYWN0aW9uLCAndHlwZScpLCAnbmV3Q2FycycsIF8uZ2V0KGFjdGlvbiwgJ3BheWxvYWQnKSwgXy5nZXQoYWN0aW9uLCAnaXNSZXN0b3JlRGF0YScpKTtcblxuICBsZXQgcGVyc2lzdFN0YXRlcyA9IF8uZ2V0KGxvY2FsU3RvcmFnZS5nZXQoJ3JlZHV4JykgfHwge30sICduZXdDYXJzJykgfHwgSU5JVElBTF9TVEFURTtcbiAgbGV0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIC4uLnBlcnNpc3RTdGF0ZXNcbiAgfVxuICBpZighXy5pc0VxdWFsKHN0YXRlLCBuZXdTdGF0ZSkpe1xuICAgIHN0YXRlID0gbmV3U3RhdGU7XG4gIH1cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgRkVUQ0hfTkVXUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbmV3czogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRkVUQ0hfQ0xVQjpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2x1YjogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBGRVRDSF9QUklDRTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJpY2U6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgRkVUQ0hfUE9QVUxBUjpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcG9wdWxhcjogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBGRVRDSF9QT1BVTEFSQ0FSUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcG9wdWxhckNhcnM6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG5cbiAgICBjYXNlIEZFVENIX0NBUk5BTUU6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIENhck5hbWU6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgRkVUQ0hfQ0FSREVUQUlMUzpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGV0YWlsczogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBGRVRDSF9CUkFORFM6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGJyYW5kczogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBGRVRDSF9CUkFORERFVEFJTDpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYnJhbmREZXRhaWw6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgRkVUQ0hfQlJBTkRDQVJTOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBicmFuZENhcnM6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZFVENIX0RFVEFJTFM6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRldGFpbHM6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgRkVUQ0hfRlVFTDpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZnVlbDogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRkVUQ0hfRklMVEVSRURfQ09NUEFSRV9EQVRBOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWx0ZXJlZENvbXBhcmVEYXRhOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGRVRDSF9DT01QQVJFX05FV0NBUl9JRFM6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbXBhcmVJZHM6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZFVENIX0NPTVBBUkVfX05FV0NBUl9MSU1JVDpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29tcGFyZUxpbWl0OiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBBRERfQ09NUEFSRV9ORVdDQVJfSUQ6XG4gICAgICBpZiAoc3RhdGUuY29tcGFyZUlkcy5sZW5ndGggPCBzdGF0ZS5jb21wYXJlTGltaXQpIHtcbiAgICAgICAgbGV0IGNoZWNrSWZFeGlzdCA9IF8uZmluZEluZGV4KHN0YXRlLmNvbXBhcmVJZHMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgc3RhdGUgPSBpdGVtID09IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICB9KVxuICAgICAgICBpZiAoY2hlY2tJZkV4aXN0ID09IC0xKSB7XG4gICAgICAgICAgbGV0IHRlbXAgPSBfLmNsb25lRGVlcChzdGF0ZS5jb21wYXJlSWRzKVxuICAgICAgICAgIHRlbXAucHVzaChhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgY29tcGFyZUlkczogdGVtcFxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgUkVNT1ZFX0NPTVBBUkVfTkVXQ0FSX0lEOlxuICAgICAgbGV0IHRlbXAgPSBzdGF0ZS5jb21wYXJlSWRzLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gYWN0aW9uLnBheWxvYWQpO1xuXG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbXBhcmVJZHM6IHRlbXAsXG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgRkVUQ0hfUEVFUl9DT01QQVJFX0NBUlM6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBlZXJDb21wOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGRVRDSF9ORVdfQ0FSX0ZJTFRFUl9HUk9VUDpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbmV3Q2FyRmlsdGVyR3JvdXA6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFJFU0VUX05FV19DQVJfRklMVEVSX0dST1VQOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBuZXdDYXJGaWx0ZXJHcm91cDoge1xuICAgICAgICAgIG1ha2U6ICcnLFxuICAgICAgICAgIGJvZHlUeXBlOiAnJyxcbiAgICAgICAgICB0cmFuc21pc3Npb246ICcnLFxuICAgICAgICAgIGRyaXZlbndoZWVsOiAnJyxcbiAgICAgICAgICBzZWF0Q2FwYWNpdHk6ICcnLFxuICAgICAgICAgIGZ1ZWxUeXBlOiAnJyxcbiAgICAgICAgICBleHRlcmlvcjogJycsXG4gICAgICAgICAgaW50ZXJpb3I6ICcnLFxuICAgICAgICAgIHNhZmV0eTogJycsXG4gICAgICAgICAgcHJpY2VSYW5nZTogW10sXG4gICAgICAgICAgbW9udGhseVBheW1lbnRSYW5nZTogW10sXG4gICAgICAgICAgZW5naW5lQ2FwYWNpdHlSYW5nZTogW10sXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBzdGF0ZSA9IHN0YXRlXG4gICAgICBicmVhaztcblxuICB9XG5cbiAgcGVyc2lzdFJlZHV4KCduZXdDYXJzJywgc3RhdGUpXG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQge1xuICBGRVRDSF9QUk9EVUNUU0xJU1QsXG4gIEZFVENIX1BST0RVQ1RTTElTVF9IT01FLFxuICBQVVNIX1BST0RVQ1RTTElTVCxcbiAgUkVNT1ZFX1BST0RVQ1RTTElTVCxcbiAgVVBEQVRFX1BST0RVQ1RTTElTVCxcbiAgVVBEQVRFX0FDVElWRV9JRF9QUk9EVUNUU19MSVNULFxuICBBRERfQ09NUEFSRV9fUFJPRFVDVF9JRCxcbiAgUkVNT1ZFX0NPTVBBUkVfUFJPRFVDVF9JRCxcbiAgQ0xFQVJfQ09NUEFSRV9QUk9EVUNUX0lEUyxcbiAgUEFUQ0hfQ09NUEFSRV9QUk9EVUNUX0lEUyxcbiAgRkVUQ0hfRklMVEVSRURfQ09NUEFSRV9EQVRBLFxuICBGRVRDSF9GRUFUVVJFU19MSVNULFxuICBVUERBVEVfQ0hFQ0tFRF9GRUFUVVJFU19EQVRFLFxuICBGRVRDSF9DT01QQVJFX0xJTUlULFxuICBGRVRDSF9QUk9EVUNUX0ZJTFRFUl9PUFRJT05TLFxuICBDTEVBUl9QUk9EVUNUX0ZJTFRFUl9PUFRJT05TLFxuICBGRVRDSF9QUk9EVUNUX0ZJTFRFUl9HUk9VUCxcbiAgQ0xFQVJfUFJPRFVDVF9GSUxURVJfR1JPVVAsXG4gIEZFVENIX1BST0RVQ1RfRklMVEVSX0NPTkZJRyxcbiAgQ0xFQVJfUFJPRFVDVF9GSUxURVJfQ09ORklHLFxuICBGRVRDSF9GSUxURVJfTU9EQUxfU1RBVEUsXG4gIFNFVF9QUk9EVUNUX0xJU1RfTE9BRElORyxcbn0gZnJvbSAnLi4vYWN0aW9ucy9wcm9kdWN0c0xpc3QtYWN0aW9ucyc7XG5pbXBvcnQgbG9jYWxTdG9yYWdlIGZyb20gJ2xvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0IHsgY2hlY2tJc05lZWRQZXJzaXN0LCBjaGVja05lZWRQZXJzaXN0LCBnZXRQZXJzaXN0T2JqLCBwZXJzaXN0UmVkdXggfSBmcm9tICcuLi9jb25maWcnO1xuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICBwcm9kdWN0TGlzdExvYWRpbmc6IGZhbHNlLFxuICBwcm9kdWN0c0xpc3Q6IFtdLFxuICBwcm9kdWN0c0xpc3RIb21lOiBbXSxcbiAgYWN0aXZlSWQ6ICcnLFxuICBhY3RpdmVwcm9kdWN0TGlzdDogW10sXG4gIGNvbXBhcmVEYXRhOiBbXSxcbiAgZmlsdGVyZWRDb21wYXJlRGF0YTogW10sXG4gIGZlYXR1cmVzTGlzdDogW10sXG4gIGNoZWNrZWRGZWF0dXJlc0RhdGU6IG51bGwsXG4gIGNvbXBhcmVJZHM6IFtdLFxuICBjb21wYXJlTGltaXQ6IDQsXG4gIGZpbHRlck9wdGlvbnM6IHt9LFxuICBmaWx0ZXJHcm91cDoge30sXG4gIGlzRmlsdGVyTW9kYWxPcGVuOiBmYWxzZSxcbiAgY29uZmlnOiB7fSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSB7XG5cbiAgLy8gY2hlY2tOZWVkUGVyc2lzdChfLmdldChhY3Rpb24sICd0eXBlJyksICdwcm9kdWN0c0xpc3QnLCBfLmdldChhY3Rpb24sICdwYXlsb2FkJyksIF8uZ2V0KGFjdGlvbiwgJ2lzUmVzdG9yZURhdGEnKSk7XG5cbiAgbGV0IHBlcnNpc3RTdGF0ZXMgPSBfLmdldChsb2NhbFN0b3JhZ2UuZ2V0KCdyZWR1eCcpIHx8IHt9LCAncHJvZHVjdHNMaXN0JykgfHwgSU5JVElBTF9TVEFURTtcbiAgbGV0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIC4uLnBlcnNpc3RTdGF0ZXNcbiAgfVxuICBpZiAoIV8uaXNFcXVhbChzdGF0ZSwgbmV3U3RhdGUpKSB7XG4gICAgc3RhdGUgPSBuZXdTdGF0ZTtcbiAgfVxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBGRVRDSF9QUk9EVUNUU0xJU1Q6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzTGlzdDogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRkVUQ0hfUFJPRFVDVFNMSVNUX0hPTUU6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzTGlzdEhvbWU6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFBVU0hfUFJPRFVDVFNMSVNUOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0c0xpc3Q6IFthY3Rpb24ucGF5bG9hZCwgLi4uc3RhdGUucHJvZHVjdHNMaXN0XVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBSRU1PVkVfUFJPRFVDVFNMSVNUOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0c0xpc3Q6IFsuLi5zdGF0ZS5wcm9kdWN0c0xpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLl9pZCAhPT0gYWN0aW9uLnBheWxvYWQuX2lkKV1cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgVVBEQVRFX1BST0RVQ1RTTElTVDpcbiAgICAgIGxldCBpbmRleCA9IF8uZmluZEluZGV4KHN0YXRlLnByb2R1Y3RzTGlzdCwgeyAnX2lkJzogYWN0aW9uLnBheWxvYWQuX2lkIH0pXG4gICAgICBzdGF0ZS5wcm9kdWN0c0xpc3Quc3BsaWNlKGluZGV4LCAxLCBhY3Rpb24ucGF5bG9hZClcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHNMaXN0OiBzdGF0ZS5wcm9kdWN0c0xpc3RcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgVVBEQVRFX0FDVElWRV9JRF9QUk9EVUNUU19MSVNUOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhY3RpdmVJZDogYWN0aW9uLmlkLFxuICAgICAgICBhY3RpdmVwcm9kdWN0TGlzdDogXy5waWNrKF8uZmluZChzdGF0ZS5wcm9kdWN0c0xpc3QsIHsgJ19pZCc6IGFjdGlvbi5pZCB9KSwgW1xuICAgICAgICAgICdvd25lck1vYmlsZU51bWVyJyxcbiAgICAgICAgICAnY2FyUGxhdGVOdW1iZXInLFxuICAgICAgICAgICdzdGF0ZScsXG4gICAgICAgICAgJ2NhcnNwZWNzQWxsJyxcbiAgICAgICAgICAnb3duZXJBZGRyZXNzJyxcbiAgICAgICAgICAnY29tcGFueXMnLFxuICAgICAgICAgICdkZXNjcmlwdGlvbicsXG4gICAgICAgICAgJ3Byb2R1Y3RUeXBlJyxcbiAgICAgICAgICAnZHJpdmVuV2hlZWwnLFxuICAgICAgICAgICdjYXJzcGVjc0lkJyxcbiAgICAgICAgICAnY3JlYXRlZEF0JyxcbiAgICAgICAgICAnY29uZGl0aW9uJyxcbiAgICAgICAgICAnb3duZXJOYW1lJyxcbiAgICAgICAgICAnY29tcGFueUlkJyxcbiAgICAgICAgICAnZmVhdHVyZXMnLFxuICAgICAgICAgICdib2R5VHlwZScsXG4gICAgICAgICAgJ2Z1ZWxUeXBlJyxcbiAgICAgICAgICAnbWlsZWFnZScsXG4gICAgICAgICAgJ2NhclVybCcsXG4gICAgICAgICAgJ3ByZWZpeCcsXG4gICAgICAgICAgJ2NvbG9yJyxcbiAgICAgICAgICAncHJpY2UnLFxuICAgICAgICAgICdfaWQnXG4gICAgICAgIF0pXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIEFERF9DT01QQVJFX19QUk9EVUNUX0lEOlxuXG4gICAgICBpZiAoIXN0YXRlLmNvbXBhcmVJZHMpIHtcbiAgICAgICAgc3RhdGUuY29tcGFyZUlkcyA9IFtdXG4gICAgICB9XG4gICAgICBpZiAoc3RhdGUuY29tcGFyZUlkcy5sZW5ndGggPCBzdGF0ZS5jb21wYXJlTGltaXQpIHtcbiAgICAgICAgbGV0IGNoZWNrSWZFeGlzdCA9IF8uZmluZEluZGV4KHN0YXRlLmNvbXBhcmVJZHMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgc3RhdGUgPSBpdGVtID09IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICB9KVxuICAgICAgICBpZiAoY2hlY2tJZkV4aXN0ID09IC0xKSB7XG4gICAgICAgICAgbGV0IHRlbXAgPSBfLmNsb25lRGVlcChzdGF0ZS5jb21wYXJlSWRzKVxuICAgICAgICAgIHRlbXAucHVzaChhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgY29tcGFyZUlkczogdGVtcFxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgUkVNT1ZFX0NPTVBBUkVfUFJPRFVDVF9JRDpcbiAgICAgIGxldCB0ZW1wID0gc3RhdGUuY29tcGFyZUlkcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IGFjdGlvbi5wYXlsb2FkKTtcblxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb21wYXJlSWRzOiB0ZW1wLFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBQQVRDSF9DT01QQVJFX1BST0RVQ1RfSURTOlxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFjdGlvbi5wYXlsb2FkKSkge1xuICAgICAgICBhY3Rpb24ucGF5bG9hZCA9IFtdO1xuICAgICAgfVxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb21wYXJlSWRzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBDTEVBUl9DT01QQVJFX1BST0RVQ1RfSURTOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb21wYXJlSWRzOiBbXVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGRVRDSF9GSUxURVJFRF9DT01QQVJFX0RBVEE6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbHRlcmVkQ29tcGFyZURhdGE6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZFVENIX0ZFQVRVUkVTX0xJU1Q6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZlYXR1cmVzTGlzdDogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFVQREFURV9DSEVDS0VEX0ZFQVRVUkVTX0RBVEU6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNoZWNrZWRGZWF0dXJlc0RhdGU6IG1vbWVudChhY3Rpb24ucGF5bG9hZCksXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZFVENIX0NPTVBBUkVfTElNSVQ6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbXBhcmVMaW1pdDogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZFVENIX1BST0RVQ1RfRklMVEVSX09QVElPTlM6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbHRlck9wdGlvbnM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBDTEVBUl9QUk9EVUNUX0ZJTFRFUl9PUFRJT05TOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWx0ZXJPcHRpb25zOiB7fSxcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRkVUQ0hfUFJPRFVDVF9GSUxURVJfR1JPVVA6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbHRlckdyb3VwOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQ0xFQVJfUFJPRFVDVF9GSUxURVJfR1JPVVA6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbHRlckdyb3VwOiB7fSxcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRkVUQ0hfUFJPRFVDVF9GSUxURVJfQ09ORklHOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb25maWc6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBDTEVBUl9QUk9EVUNUX0ZJTFRFUl9DT05GSUc6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbmZpZzoge30sXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZFVENIX0ZJTFRFUl9NT0RBTF9TVEFURTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNGaWx0ZXJNb2RhbE9wZW46IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBTRVRfUFJPRFVDVF9MSVNUX0xPQURJTkc6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RMaXN0TG9hZGluZzogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgc3RhdGUgPSBzdGF0ZTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHBlcnNpc3RSZWR1eCgncHJvZHVjdHNMaXN0Jywgc3RhdGUpXG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIiwiaW1wb3J0IHtcbiAgU1RFUFNfUFJPUFNfQ1VSUkVOVCxcbiAgRk9STV9PTkVcbn0gZnJvbSAnLi4vYWN0aW9ucy9yZWdpc3Rlci1hY3Rpb25zJztcbmltcG9ydCBsb2NhbFN0b3JhZ2UgZnJvbSAnbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgeyBjaGVja0lzTmVlZFBlcnNpc3QsIGNoZWNrTmVlZFBlcnNpc3QsIGdldFBlcnNpc3RPYmosIHBlcnNpc3RSZWR1eCB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICBjdXJyZW50OiAwLFxuICBmb3JtT25lOiB7fSxcbn1cblxuY29uc3QgYXBwUmVkdWNlciA9IChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbikgPT4ge1xuXG5cbiAgLy8gY2hlY2tOZWVkUGVyc2lzdChfLmdldChhY3Rpb24sICd0eXBlJyksICdyZWdpc3RlcicsIF8uZ2V0KGFjdGlvbiwgJ3BheWxvYWQnKSwgXy5nZXQoYWN0aW9uLCAnaXNSZXN0b3JlRGF0YScpKTtcblxuICBsZXQgcGVyc2lzdFN0YXRlcyA9IF8uZ2V0KGxvY2FsU3RvcmFnZS5nZXQoJ3JlZHV4JykgfHwge30sICdwcm9kdWN0c0xpc3QnKSB8fCBJTklUSUFMX1NUQVRFO1xuICBsZXQgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgLi4ucGVyc2lzdFN0YXRlc1xuICB9XG4gIGlmKCFfLmlzRXF1YWwoc3RhdGUsIG5ld1N0YXRlKSl7XG4gICAgc3RhdGUgPSBuZXdTdGF0ZTtcbiAgfVxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTVEVQU19QUk9QU19DVVJSRU5UOlxuICAgICAgc3RhdGUgPSB7IC4uLnN0YXRlLCBjdXJyZW50OiBhY3Rpb24uZGF0YSB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGT1JNX09ORTpcbiAgICAgIHN0YXRlID0geyAuLi5zdGF0ZSwgZm9ybU9uZTogYWN0aW9uLmRhdGEgfTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBzdGF0ZSA9IHN0YXRlO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcGVyc2lzdFJlZHV4KCdyZWdpc3RlcicsIHN0YXRlKVxuXG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFwcFJlZHVjZXI7XG4iLCJpbXBvcnQge1xuICBVUERBVEVfU0VMTEVSX1BST0ZJTEVcbn0gZnJvbSBcIi4uL2FjdGlvbnMvc2VsbGVyUHJvZmlsZS1hY3Rpb25zXCI7XG5pbXBvcnQgbG9jYWxTdG9yYWdlIGZyb20gJ2xvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0IHsgY2hlY2tJc05lZWRQZXJzaXN0LCBjaGVja05lZWRQZXJzaXN0LCBnZXRQZXJzaXN0T2JqLCBwZXJzaXN0UmVkdXggfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICAvLyBjb21wYW55OiB7fSxcbiAgc2VsbGVyOiB7fSxcbiAgY2FyT25TYWxlczogW10sXG59XG5cbmNvbnN0IGFwcFJlZHVjZXIgPSAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24pID0+IHtcblxuXG4gIC8vIGNoZWNrTmVlZFBlcnNpc3QoXy5nZXQoYWN0aW9uLCAndHlwZScpLCAnc2VsbGVyUHJvZmlsZScsIF8uZ2V0KGFjdGlvbiwgJ3BheWxvYWQnKSwgXy5nZXQoYWN0aW9uLCAnaXNSZXN0b3JlRGF0YScpKTtcblxuICBsZXQgcGVyc2lzdFN0YXRlcyA9IF8uZ2V0KGxvY2FsU3RvcmFnZS5nZXQoJ3JlZHV4JykgfHwge30sICdzZWxsZXJQcm9maWxlJykgfHwgSU5JVElBTF9TVEFURTtcbiAgbGV0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIC4uLnBlcnNpc3RTdGF0ZXNcbiAgfVxuICBpZighXy5pc0VxdWFsKHN0YXRlLCBuZXdTdGF0ZSkpe1xuICAgIHN0YXRlID0gbmV3U3RhdGU7XG4gIH1cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgVVBEQVRFX1NFTExFUl9QUk9GSUxFOlxuICAgICAgLy8gc3RhdGUgPSB7Li4uc3RhdGUsIGNvbXBhbnk6IGFjdGlvbi5kYXRhIH07XG4gICAgICBzdGF0ZSA9IHsgLi4uc3RhdGUsIHNlbGxlcjogYWN0aW9uLmRhdGEgfTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBzdGF0ZSA9IHN0YXRlO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcGVyc2lzdFJlZHV4KCdzZWxsZXJQcm9maWxlJywgc3RhdGUpXG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwUmVkdWNlcjtcbiIsImltcG9ydCB7IFVQREFURV9TT0NLRVRfSU5GTywgREVMRVRFX1NPQ0tFVF9JTkZPIH0gZnJvbSAnLi4vYWN0aW9ucy9zb2NrZXRSZWZyZXNoLWFjdGlvbnMnO1xuaW1wb3J0IGxvY2FsU3RvcmFnZSBmcm9tICdsb2NhbC1zdG9yYWdlJztcbmltcG9ydCB7IGNoZWNrSXNOZWVkUGVyc2lzdCwgY2hlY2tOZWVkUGVyc2lzdCwgZ2V0UGVyc2lzdE9iaiwgcGVyc2lzdFJlZHV4IH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSB7XG5cbiAgLy8gY2hlY2tOZWVkUGVyc2lzdChfLmdldChhY3Rpb24sICd0eXBlJyksICdzb2NrZXRSZWZyZXNoJywgXy5nZXQoYWN0aW9uLCAncGF5bG9hZCcpLCBfLmdldChhY3Rpb24sICdpc1Jlc3RvcmVEYXRhJykpO1xuXG4gIGxldCBwZXJzaXN0U3RhdGVzID0gXy5nZXQobG9jYWxTdG9yYWdlLmdldCgncmVkdXgnKSB8fCB7fSwgJ3NvY2tldFJlZnJlc2gnKSB8fCBJTklUSUFMX1NUQVRFO1xuICBsZXQgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgLi4ucGVyc2lzdFN0YXRlc1xuICB9XG4gIGlmKCFfLmlzRXF1YWwoc3RhdGUsIG5ld1N0YXRlKSl7XG4gICAgc3RhdGUgPSBuZXdTdGF0ZTtcbiAgfVxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBVUERBVEVfU09DS0VUX0lORk86XG4gICAgICBzdGF0ZSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgLy8gc3RhdGUgPSB7XG4gICAgICAvLyAgIC4uLnN0YXRlLFxuICAgICAgLy8gICBzaG91bGRSZWZyZXNoOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgLy8gfVxuICAgICAgLy9ub3QgcmVhbGx5IHVzZWQgd2UgY2FuIGp1c3QgdXBkYXRlIHdpdGggZmFsc2hcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgREVMRVRFX1NPQ0tFVF9JTkZPOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHN0YXRlID0gc3RhdGU7XG4gICAgICBicmVhaztcbiAgfVxuICBwZXJzaXN0UmVkdXgoJ3NvY2tldFJlZnJlc2gnLCBzdGF0ZSlcblxuICByZXR1cm4gc3RhdGU7XG59XG4iLCJpbXBvcnQgeyBMT0dJTl9TVUNDRVNTRlVMLCBMT0dPVVRfU1VDQ0VTU0ZVTCwgU0VUX1VTRVIsIEFERFJFU1NfQk9PS19GT1JNLCBDQVJEX0ZPUk0sIEJBTktfRk9STSB9IGZyb20gJy4uL2FjdGlvbnMvdXNlci1hY3Rpb25zJztcbmltcG9ydCB7IGNoZWNrSXNOZWVkUGVyc2lzdCwgY2hlY2tOZWVkUGVyc2lzdCwgZ2V0TG9jYWxTdG9yYWdlUGVyc2lzdFN0YXRlcywgZ2V0UGVyc2lzdE9iaiwgcGVyc2lzdFJlZHV4IH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbG9jYWxTdG9yYWdlIGZyb20gJ2xvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0IHsgaXNWYWxpZE51bWJlciB9IGZyb20gJy4uLy4uL2NvbW1vbi1mdW5jdGlvbic7XG5cblxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcbiAgaW5mbzoge1xuICAgIHVzZXI6IHtcbiAgICAgIF9pZDogbnVsbCxcbiAgICB9XG4gIH0sXG4gIGF1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgZXJyb3JzOiB7fSxcbiAgYWRkcmVzc0Zvcm06IHt9LFxuICBjYXJkRm9ybToge30sXG4gIGJhbmtGb3JtOiB7fSxcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbikge1xuXG5cbiAgbGV0IHBlcnNpc3RTdGF0ZXMgPSBfLmdldChsb2NhbFN0b3JhZ2UuZ2V0KCdyZWR1eCcpIHx8IHt9LCAndXNlcicpIHx8IElOSVRJQUxfU1RBVEU7XG4gIGxldCBuZXdTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICAuLi5wZXJzaXN0U3RhdGVzXG4gIH1cbiAgLy8gY2hlY2tOZWVkUGVyc2lzdChfLmdldChhY3Rpb24sICd0eXBlJyksICd1c2VyJywgXy5nZXQoYWN0aW9uLCAncGF5bG9hZCcpLCBfLmdldChhY3Rpb24sICdpc1Jlc3RvcmVEYXRhJykpO1xuXG4gIGlmKCFfLmlzRXF1YWwoc3RhdGUsIG5ld1N0YXRlKSl7XG4gICAgc3RhdGUgPSBuZXdTdGF0ZTtcbiAgfVxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBMT0dJTl9TVUNDRVNTRlVMOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhdXRoZW50aWNhdGVkOiB0cnVlLFxuICAgICAgICBpbmZvOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBMT0dPVVRfU1VDQ0VTU0ZVTDpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYXV0aGVudGljYXRlZDogZmFsc2UsXG4gICAgICAgIGluZm86IHt9XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFNFVF9VU0VSOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgLi4uc3RhdGUuaW5mbyxcbiAgICAgICAgICB1c2VyOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBBRERSRVNTX0JPT0tfRk9STTpcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWRkcmVzc0Zvcm06IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBDQVJEX0ZPUk06XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcmRGb3JtOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQkFOS19GT1JNOlxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBiYW5rRm9ybTogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cblxuICBwZXJzaXN0UmVkdXgoJ3VzZXInLCBzdGF0ZSk7XG4gIHJldHVybiBzdGF0ZTtcblxufVxuIiwiaW1wb3J0IHtcbiAgQUREX0xJS0UsXG4gIFJFTU9WRV9MSUtFLFxuICBBRERfQk9PS01BUkssXG4gIFJFTU9WRV9CT09LTUFSSyxcbiAgQUREX0xJS0VfTVNHLFxuICBSRU1PVkVfTElLRV9NU0csXG59IGZyb20gJy4uL2FjdGlvbnMvdXNlcmxpa2VzLWFjdGlvbnMnO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgbG9jYWxTdG9yYWdlIGZyb20gJ2xvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0IHsgY2hlY2tJc05lZWRQZXJzaXN0LCBjaGVja05lZWRQZXJzaXN0LCBnZXRQZXJzaXN0T2JqLCBwZXJzaXN0UmVkdXggfSBmcm9tICcuLi9jb25maWcnO1xuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICBhbGxMaWtlOiBbXSxcbiAgYWxsQm9va21hcms6IFtdLFxuICBhbGxMaWtlTXNnOiBbXSxcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24pIHtcblxuXG4gIC8vIGNoZWNrTmVlZFBlcnNpc3QoXy5nZXQoYWN0aW9uLCAndHlwZScpLCAndXNlcmxpa2VzJywgXy5nZXQoYWN0aW9uLCAncGF5bG9hZCcpLCBfLmdldChhY3Rpb24sICdpc1Jlc3RvcmVEYXRhJykpO1xuXG4gIGxldCBwZXJzaXN0U3RhdGVzID0gXy5nZXQobG9jYWxTdG9yYWdlLmdldCgncmVkdXgnKSB8fCB7fSwgJ3VzZXJsaWtlcycpIHx8IElOSVRJQUxfU1RBVEU7XG4gIGxldCBuZXdTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICAuLi5wZXJzaXN0U3RhdGVzXG4gIH1cbiAgaWYoIV8uaXNFcXVhbChzdGF0ZSwgbmV3U3RhdGUpKXtcbiAgICBzdGF0ZSA9IG5ld1N0YXRlO1xuICB9XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RhdGUgPSB7fVxuICB9XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSBBRERfTElLRTpcbiAgICAgIGlmICghc3RhdGUuYWxsTGlrZSkgeyBzdGF0ZS5hbGxMaWtlID0gW10gfVxuICAgICAgc3RhdGUuYWxsTGlrZS5wdXNoKGFjdGlvbi52YWx1ZSlcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgUkVNT1ZFX0xJS0U6XG4gICAgICBfLnJlbW92ZShzdGF0ZS5hbGxMaWtlLCB7XG4gICAgICAgIGNoYXRJZDogYWN0aW9uLnZhbHVlLmNoYXRJZCxcbiAgICAgICAgdXNlcklkOiBhY3Rpb24udmFsdWUudXNlcklkXG4gICAgICB9KTtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBBRERfQk9PS01BUks6XG4gICAgICBpZiAoIXN0YXRlLmFsbEJvb2ttYXJrKSB7IHN0YXRlLmFsbEJvb2ttYXJrID0gW10gfVxuXG4gICAgICBzdGF0ZS5hbGxCb29rbWFyay5wdXNoKGFjdGlvbi52YWx1ZSlcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgUkVNT1ZFX0JPT0tNQVJLOlxuICAgICAgXy5yZW1vdmUoc3RhdGUuYWxsQm9va21hcmssIHtcbiAgICAgICAgY2hhdElkOiBhY3Rpb24udmFsdWUuY2hhdElkLFxuICAgICAgICB1c2VySWQ6IGFjdGlvbi52YWx1ZS51c2VySWRcbiAgICAgIH0pO1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEFERF9MSUtFX01TRzpcbiAgICAgIGlmICghc3RhdGUuYWxsTGlrZU1zZykgeyBzdGF0ZS5hbGxMaWtlTXNnID0gW10gfVxuICAgICAgc3RhdGUuYWxsTGlrZU1zZy5wdXNoKGFjdGlvbi52YWx1ZSlcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgUkVNT1ZFX0xJS0VfTVNHOlxuICAgICAgXy5yZW1vdmUoc3RhdGUuYWxsTGlrZU1zZywge1xuICAgICAgICBjaGF0SWQ6IGFjdGlvbi52YWx1ZS5jaGF0SWQsXG4gICAgICAgIG1lc3NhZ2VJZDogYWN0aW9uLnZhbHVlLmNoYXRJZCxcbiAgICAgICAgdXNlcklkOiBhY3Rpb24udmFsdWUudXNlcklkXG4gICAgICB9KTtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHN0YXRlID0gc3RhdGVcbiAgICAgIGJyZWFrO1xuICB9XG4gIHBlcnNpc3RSZWR1eCgndXNlcmxpa2VzJywgc3RhdGUpXG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgeyBGRVRDSF9WQVJJQU5ULCBDTEVBUl9WQVJJQU5UIH0gZnJvbSAnLi4vYWN0aW9ucy92YXJpYW50LWFjdGlvbic7XG5pbXBvcnQgbG9jYWxTdG9yYWdlIGZyb20gJ2xvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0IHsgY2hlY2tJc05lZWRQZXJzaXN0LCBjaGVja05lZWRQZXJzaXN0LCBnZXRQZXJzaXN0T2JqLCBwZXJzaXN0UmVkdXggfSBmcm9tICcuLi9jb25maWcnO1xuXG5cbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gICAgdmFyaWFudDoge30sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbikge1xuXG4gICAgLy8gY2hlY2tOZWVkUGVyc2lzdChfLmdldChhY3Rpb24sICd0eXBlJyksICd2YXJpYW50JywgXy5nZXQoYWN0aW9uLCAncGF5bG9hZCcpLCBfLmdldChhY3Rpb24sICdpc1Jlc3RvcmVEYXRhJykpO1xuXG4gICAgbGV0IHBlcnNpc3RTdGF0ZXMgPSBfLmdldChsb2NhbFN0b3JhZ2UuZ2V0KCdyZWR1eCcpIHx8IHt9LCAndmFyaWFudCcpIHx8IElOSVRJQUxfU1RBVEU7XG4gICAgbGV0IG5ld1N0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4ucGVyc2lzdFN0YXRlc1xuICAgIH1cbiAgICBpZighXy5pc0VxdWFsKHN0YXRlLCBuZXdTdGF0ZSkpe1xuICAgICAgc3RhdGUgPSBuZXdTdGF0ZTtcbiAgICB9XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEZFVENIX1ZBUklBTlQ6XG4gICAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB2YXJpYW50OiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQ0xFQVJfVkFSSUFOVDpcbiAgICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHZhcmlhbnQ6IHt9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHN0YXRlID0gc3RhdGVcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgfVxuICAgIHBlcnNpc3RSZWR1eCgndmFyaWFudCcsIHN0YXRlKVxuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBIWURSQVRFLCBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCBhcHAgZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvYXBwLXJlZHVjZXInXG5pbXBvcnQgY2FyZnJlYWsgZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvY2FyZnJlYWstcmVkdWNlcidcbmltcG9ydCBjYXJQbGF0ZXNMaXN0IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2NhclBsYXRlc0xpc3QtcmVkdWNlcidcbmltcG9ydCBrcHAgZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMva3BwLXJlZHVjZXInXG5pbXBvcnQgbGl2ZSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9saXZlLXJlZHVjZXInXG5pbXBvcnQgbmV3Y2FycyBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9uZXdjYXJzLXJlZHVjZXInXG5pbXBvcnQgcHJvZHVjdHNMaXN0IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL3Byb2R1Y3RzTGlzdC1yZWR1Y2VyJ1xuaW1wb3J0IHJlZ2lzdGVyIGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL3JlZ2lzdGVyLXJlZHVjZXInXG5pbXBvcnQgc2VsbGVyUHJvZmlsZSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9zZWxsZXJQcm9maWxlLXJlZHVjZXInXG5pbXBvcnQgc29ja2V0UmVmcmVzaCBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9zb2NrZXRSZWZyZXNoLXJlZHVjZXInXG5pbXBvcnQgdXNlciBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy91c2VyLXJlZHVjZXInXG5pbXBvcnQgdXNlcmxpa2VzIGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL3VzZXJsaWtlcy1yZWR1Y2VyJ1xuaW1wb3J0IHZhcmlhbnQgZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvdmFyaWFudC1yZWR1Y2VyJ1xuXG5cblxuY29uc3QgYmluZE1pZGRsZXdhcmUgPSAobWlkZGxld2FyZSkgPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9ID0gcmVxdWlyZSgncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJylcbiAgICByZXR1cm4gY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpXG4gIH1cbiAgcmV0dXJuIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKVxufVxuXG5jb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBhcHAsXG4gIGNhcmZyZWFrLFxuICBjYXJQbGF0ZXNMaXN0LFxuICBrcHAsXG4gIGxpdmUsXG4gIG5ld2NhcnMsXG4gIHByb2R1Y3RzTGlzdCxcbiAgcmVnaXN0ZXIsXG4gIHNlbGxlclByb2ZpbGUsXG4gIHNvY2tldFJlZnJlc2gsXG4gIHVzZXJsaWtlcyxcbiAgdmFyaWFudCxcbiAgdXNlcixcbn0pXG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgPT09IEhZRFJBVEUpIHtcbiAgICBjb25zdCBuZXh0U3RhdGUgPSB7XG4gICAgICAuLi5zdGF0ZSwgLy8gdXNlIHByZXZpb3VzIHN0YXRlXG4gICAgICAuLi5hY3Rpb24ucGF5bG9hZCwgLy8gYXBwbHkgZGVsdGEgZnJvbSBoeWRyYXRpb25cbiAgICB9XG4gICAgaWYgKHN0YXRlLmNvdW50LmNvdW50KSBuZXh0U3RhdGUuY291bnQuY291bnQgPSBzdGF0ZS5jb3VudC5jb3VudCAvLyBwcmVzZXJ2ZSBjb3VudCB2YWx1ZSBvbiBjbGllbnQgc2lkZSBuYXZpZ2F0aW9uXG4gICAgcmV0dXJuIG5leHRTdGF0ZVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsIGFjdGlvbilcbiAgfVxufVxuXG5jb25zdCBpbml0U3RvcmUgPSAoKSA9PiB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBiaW5kTWlkZGxld2FyZShbdGh1bmtNaWRkbGV3YXJlXSkpXG59XG5cblxuXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoaW5pdFN0b3JlKVxuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBpbml0U3RvcmUoKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmZWF0aGVyc2pzL2F1dGhlbnRpY2F0aW9uLWNsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZmVhdGhlcnNqcy9mZWF0aGVyc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZmVhdGhlcnNqcy9zb2NrZXRpby1jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvY2FsLXN0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1zZW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5LXN0cmluZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zcHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pby1jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9