'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlphaPicker = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = require('../common');

var _AlphaPointer = require('./AlphaPointer');

var _AlphaPointer2 = _interopRequireDefault(_AlphaPointer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlphaPicker = exports.AlphaPicker = function AlphaPicker(_ref) {
  var rgb = _ref.rgb;
  var hsl = _ref.hsl;
  var width = _ref.width;
  var height = _ref.height;
  var onChange = _ref.onChange;
  var style = _ref.style;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        position: 'relative',
        width: width,
        height: height
      },
      alpha: {
        radius: '2px',
        style: style
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.picker, className: 'alpha-picker' },
    _react2.default.createElement(_common.Alpha, _extends({}, styles.alpha, {
      rgb: rgb,
      hsl: hsl,
      pointer: _AlphaPointer2.default,
      onChange: onChange
    }))
  );
};

AlphaPicker.defaultProps = {
  width: '316px',
  height: '16px'
};

exports.default = (0, _common.ColorWrap)(AlphaPicker);