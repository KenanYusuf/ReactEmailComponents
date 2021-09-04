'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Padding = function Padding(_ref) {
  var padding = _ref.padding,
      children = _ref.children,
      align = _ref.align,
      alignClasses = _ref.alignClasses,
      valign = _ref.valign,
      valignClasses = _ref.valignClasses;

  var paddingTop = padding[0];
  var paddingRight = typeof padding[1] !== 'undefined' ? padding[1] : paddingTop;
  var paddingBottom = typeof padding[2] !== 'undefined' ? padding[2] : paddingTop;
  var paddingLeft = typeof padding[3] !== 'undefined' ? padding[3] : paddingRight;

  return _react2.default.createElement(
    _react.Fragment,
    null,
    paddingTop !== 0 && _react2.default.createElement(
      'tr',
      null,
      _react2.default.createElement(
        'td',
        {
          className: 'spacer',
          height: paddingTop
        },
        _react2.default.createElement(
          'span',
          { className: 'padding-space' },
          _react2.default.createElement('img', { src: 'spacer.gif', height: '1', width: '5', alt: 'spacer gif' })
        )
      )
    ),
    _react2.default.createElement(
      'tr',
      null,
      _react2.default.createElement(
        'td',
        {
          valign: valign,
          className: valignClasses
        },
        (align || paddingLeft !== 0 || paddingRight !== 0) && _react2.default.createElement(
          'table',
          {
            align: align,
            className: alignClasses
          },
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              paddingLeft !== 0 && _react2.default.createElement('td', { width: paddingLeft }),
              _react2.default.createElement(
                'td',
                null,
                children
              ),
              paddingRight !== 0 && _react2.default.createElement('td', { width: paddingRight })
            )
          )
        ),
        !(align || paddingLeft !== 0 || paddingRight !== 0) && _react2.default.createElement(
          _react.Fragment,
          null,
          children
        )
      )
    ),
    paddingBottom !== 0 && _react2.default.createElement(
      'tr',
      null,
      _react2.default.createElement(
        'td',
        {
          className: 'spacer',
          height: paddingBottom
        },
        _react2.default.createElement(
          'span',
          { className: 'padding-space' },
          _react2.default.createElement('img', { src: 'spacer.gif', height: '1', width: '5', alt: 'spacer gif' })
        ),
        '          '
      )
    )
  );
};

Padding.propTypes = {
  padding: _propTypes2.default.arrayOf(_propTypes2.default.number).isRequired,
  children: _propTypes2.default.node,
  align: _propTypes2.default.string,
  alignClasses: _propTypes2.default.string,
  valign: _propTypes2.default.string,
  valignClasses: _propTypes2.default.string
};

exports.default = Padding;