'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderSwatch = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SliderSwatch = exports.SliderSwatch = function SliderSwatch(_ref) {
  var hsl = _ref.hsl;
  var offset = _ref.offset;
  var onClick = _ref.onClick;
  var active = _ref.active;
  var first = _ref.first;
  var last = _ref.last;

  var styles = (0, _reactcss2.default)({
    'default': {
      swatch: {
        height: '12px',
        background: 'hsl(' + hsl.h + ', 50%, ' + offset * 100 + '%)',
        cursor: 'pointer'
      }
    },
    'first': {
      swatch: {
        borderRadius: '2px 0 0 2px'
      }
    },
    'last': {
      swatch: {
        borderRadius: '0 2px 2px 0'
      }
    },
    'active': {
      swatch: {
        transform: 'scaleY(1.8)',
        borderRadius: '3.6px/2px'
      }
    }
  }, { active: active, first: first, last: last });

  var handleClick = function handleClick() {
    onClick({
      h: hsl.h,
      s: 0.5,
      l: offset,
      source: 'hsl'
    });
  };

  return _react2.default.createElement('div', { style: styles.swatch, onClick: handleClick });
};

exports.default = SliderSwatch;