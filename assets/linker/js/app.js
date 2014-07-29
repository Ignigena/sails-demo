'use strict';

/**
 * The main Sails Angular app module
 *
 * @type {angular.Module}
 */
var app = angular.module('app', ['sails.io']);

function findIndexByPropertyValue(arr, property, value) {
  var index = null;
  for (var i in arr) {
    if (arr[i][property] == value) {
      index = i;
      break;
    }
  }
  return index;
}
