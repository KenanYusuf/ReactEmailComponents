'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spacer = function Spacer(_ref) {
  var height = _ref.height,
      className = _ref.className;

  return _react2.default.createElement(
    'table',
    { className: className },
    _react2.default.createElement(
      'tbody',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          {
            className: 'spacer',
            height: height
          },
          '\xA0'
        )
      )
    )
  );
};

Spacer.propTypes = {
  height: _propTypes2.default.number.isRequired,
  className: _propTypes2.default.string
};

exports.default = Spacer;