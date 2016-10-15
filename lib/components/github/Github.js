'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Github = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _lodash = require('lodash.map');

var _lodash2 = _interopRequireDefault(_lodash);

var _common = require('../common');

var _GithubSwatch = require('./GithubSwatch');

var _GithubSwatch2 = _interopRequireDefault(_GithubSwatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Github = exports.Github = function Github(_ref) {
  var width = _ref.width;
  var colors = _ref.colors;
  var onChange = _ref.onChange;

  var styles = (0, _reactcss2.default)({
    'default': {
      card: {
        width: width,
        background: '#fff',
        border: '1px solid rgba(0,0,0,0.2)',
        boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
        borderRadius: '4px',
        position: 'relative',
        padding: '5px',
        display: 'flex',
        flexWrap: 'wrap'
      },
      triangle: {
        position: 'absolute',
        border: '7px solid transparent',
        borderBottomColor: '#fff',
        top: '-14px',
        left: '10px'
      },
      triangleShadow: {
        position: 'absolute',
        border: '8px solid transparent',
        borderBottomColor: 'rgba(0,0,0,0.15)',
        top: '-16px',
        left: '9px'
      }
    }
  });

  var handleChange = function handleChange(hex) {
    onChange({ hex: hex, source: 'hex' });
  };

  return _react2.default.createElement(
    'div',
    { style: styles.card, className: 'github-picker' },
    _react2.default.createElement('div', { style: styles.triangleShadow }),
    _react2.default.createElement('div', { style: styles.triangle }),
    (0, _lodash2.default)(colors, function (c) {
      return _react2.default.createElement(_GithubSwatch2.default, { color: c, key: c, onClick: handleChange });
    })
  );
};

Github.defaultProps = {
  width: '200px',
  colors: ['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB']
};

exports.default = (0, _common.ColorWrap)(Github);