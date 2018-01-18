'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Padding = require('./Padding');

var _Padding2 = _interopRequireDefault(_Padding);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Block = function Block(_ref) {
  var children = _ref.children,
      className = _ref.className,
      padding = _ref.padding,
      align = _ref.align,
      valign = _ref.valign;

  var alignClasses = align ? 'align align--' + align : null;
  var valignClasses = valign ? 'valign valign--' + valign : null;

  if (padding) {
    return _react2.default.createElement(
      'table',
      { className: className },
      _react2.default.createElement(
        'tbody',
        null,
        _react2.default.createElement(
          _Padding2.default,
          {
            padding: padding,
            align: align,
            alignClasses: alignClasses,
            valign: valign,
            valignClasses: valignClasses
          },
          children
        )
      )
    );
  } else {
    return _react2.default.createElement(
      'table',
      {
        className: (0, _classnames2.default)(className, alignClasses, valignClasses),
        align: align
      },
      _react2.default.createElement(
        'tbody',
        null,
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            {
              className: valignClasses,
              valign: valign
            },
            children
          )
        )
      )
    );
  }
};

Block.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  padding: _propTypes2.default.arrayOf(_propTypes2.default.number),
  align: _propTypes2.default.string,
  valign: _propTypes2.default.string
};

exports.default = Block;