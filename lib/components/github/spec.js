'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _color = require('../../helpers/color');

var _Github = require('./Github');

var _Github2 = _interopRequireDefault(_Github);

var _GithubSwatch = require('./GithubSwatch');

var _GithubSwatch2 = _interopRequireDefault(_GithubSwatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Github renders correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_Github2.default, _color.red)).toJSON();
  expect(tree).toMatchSnapshot();
}); /* global test, expect */

test('GithubSwatch renders correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_GithubSwatch2.default, { color: '#333' })).toJSON();
  expect(tree).toMatchSnapshot();
});