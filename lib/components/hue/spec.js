'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _color = require('../../helpers/color');

var _Hue = require('./Hue');

var _Hue2 = _interopRequireDefault(_Hue);

var _HuePointer = require('./HuePointer');

var _HuePointer2 = _interopRequireDefault(_HuePointer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Hue renders correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_Hue2.default, _color.red)).toJSON();
  expect(tree).toMatchSnapshot();
}); /* global test, expect */

test('HuePointer renders correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_HuePointer2.default, null)).toJSON();
  expect(tree).toMatchSnapshot();
});