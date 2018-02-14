'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @param columns {Element[]}
 * @param prop {string}
 * @return {number}
 */
var getHeightSumElements = function getHeightSumElements(columns, prop) {
  var heights = columns.map(function (column) {
    return column[prop];
  });
  return heights.reduce(function (prev, cur) {
    return prev + cur;
  });
};
/**
 * @param columns {Element[]}
 * @return {number}
 */
var getClientHeightSumElements = exports.getClientHeightSumElements = function getClientHeightSumElements(columns) {
  return getHeightSumElements(columns, 'clientHeight');
};
/**
 * @param columns {Element[]}
 * @return {number}
 */
var getOffsetHeightSumElements = exports.getOffsetHeightSumElements = function getOffsetHeightSumElements(columns) {
  return getHeightSumElements(columns, 'offsetHeight');
};
/**
 * @param columns {Element[]}
 * @return {number}
 */
var getScrollHeightSumElements = exports.getScrollHeightSumElements = function getScrollHeightSumElements(columns) {
  return getHeightSumElements(columns, 'scrollHeight');
};
/**
 * @param nodeList {NodeList}
 * @return {Element[]}
 */
var nodeListToArrayElement = exports.nodeListToArrayElement = function nodeListToArrayElement(nodeList) {
  var elements = [];
  for (var i = 0; i < nodeList.length; i++) {
    elements.push(nodeList.item(i));
  }
  return elements;
};
exports.default = getHeightSumElements;