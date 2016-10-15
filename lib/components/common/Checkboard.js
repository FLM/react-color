'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkboard = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkboardCache = {};

function renderCheckboard(c1, c2, size) {
  if (typeof document === 'undefined') return null; // Dont Render On Server
  var canvas = document.createElement('canvas');
  canvas.width = canvas.height = size * 2;
  var ctx = canvas.getContext('2d');
  if (!ctx) return null; // If no context can be found, return early.
  ctx.fillStyle = c1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = c2;
  ctx.fillRect(0, 0, size, size);
  ctx.translate(size, size);
  ctx.fillRect(0, 0, size, size);
  return canvas.toDataURL();
}

function getCheckboard(c1, c2, size) {
  var key = c1 + ',' + c2 + ', ' + size;
  var checkboard = renderCheckboard(c1, c2, size);

  if (checkboardCache[key]) {
    return checkboardCache[key];
  }
  checkboardCache[key] = checkboard;
  return checkboard;
}

var Checkboard = exports.Checkboard = function Checkboard(_ref) {
  var white = _ref.white;
  var grey = _ref.grey;
  var size = _ref.size;

  var styles = (0, _reactcss2.default)({
    'default': {
      grid: {
        absolute: '0px 0px 0px 0px',
        background: 'url(' + getCheckboard(white, grey, size) + ') center left'
      }
    }
  });

  return _react2.default.createElement('div', { style: styles.grid });
};

Checkboard.defaultProps = {
  size: 8,
  white: 'transparent',
  grey: 'rgba(0,0,0,.08)'
};

exports.default = Checkboard;