'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _Alpha = require('./Alpha');

var _Alpha2 = _interopRequireDefault(_Alpha);

var _AlphaPointer = require('./AlphaPointer');

var _AlphaPointer2 = _interopRequireDefault(_AlphaPointer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global test, expect */

test('Alpha renders correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_Alpha2.default, null)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('AlphaPointer renders correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_AlphaPointer2.default, null)).toJSON();
  expect(tree).toMatchSnapshot();
});