'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _color = require('../../helpers/color');

var _Twitter = require('./Twitter');

var _Twitter2 = _interopRequireDefault(_Twitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global test, expect */

test('Twitter renders correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_Twitter2.default, _color.red)).toJSON();
  expect(tree).toMatchSnapshot();
});