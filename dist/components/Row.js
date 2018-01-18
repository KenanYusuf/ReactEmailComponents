'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Padding = require('./Padding');

var _Padding2 = _interopRequireDefault(_Padding);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = function Row(_ref) {
  var children = _ref.children,
      className = _ref.className,
      padding = _ref.padding,
      reverse = _ref.reverse;

  if (padding) {
    return _react2.default.createElement(
      'table',
      { className: className },
      _react2.default.createElement(
        'tbody',
        null,
        _react2.default.createElement(
          _Padding2.default,
          { padding: padding },
          _react2.default.createElement(
            'table',
            { dir: reverse && 'rtl' },
            _react2.default.createElement(
              'tbody',
              null,
              _react2.default.createElement(
                'tr',
                { dir: reverse && 'ltr' },
                children
              )
            )
          )
        )
      )
    );
  } else {
    return _react2.default.createElement(
      'table',
      {
        className: className,
        dir: reverse && 'rtl'
      },
      _react2.default.createElement(
        'tbody',
        null,
        _react2.default.createElement(
          'tr',
          { dir: reverse && 'ltr' },
          children
        )
      )
    );
  }
};

Row.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  padding: _propTypes2.default.arrayOf(_propTypes2.default.number),
  reverse: _propTypes2.default.bool
};

exports.default = Row;