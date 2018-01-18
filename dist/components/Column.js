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

var Column = function Column(_ref) {
  var children = _ref.children,
      className = _ref.className,
      padding = _ref.padding,
      align = _ref.align,
      valign = _ref.valign,
      fullDesktop = _ref.fullDesktop;

  var alignClasses = align ? 'align align--' + align : null;
  var valignClasses = valign ? 'valign valign--' + valign : null;

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      'th',
      {
        className: (0, _classnames2.default)(className, alignClasses, valignClasses),
        valign: valign
      },
      padding && _react2.default.createElement(
        'table',
        null,
        _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            _Padding2.default,
            {
              padding: padding,
              align: align,
              alignClasses: alignClasses
            },
            children
          )
        )
      ),
      !padding && align && _react2.default.createElement(
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
            _react2.default.createElement(
              'td',
              null,
              children
            )
          )
        )
      ),
      !padding && !align && _react2.default.createElement(
        _react.Fragment,
        null,
        children
      )
    ),
    fullDesktop && _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement('template', { 'data-comment': true, dangerouslySetInnerHTML: { __html: '<!--[if lt mso 9]></tr></table><table style="width: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;"><tr><![endif]-->' } }),
      _react2.default.createElement('template', { 'data-comment': true, dangerouslySetInnerHTML: { __html: '<!--[if gte mso 9]></tr></table><table style="width: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;"><tr><![endif]-->' } })
    )
  );
};

Column.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  padding: _propTypes2.default.arrayOf(_propTypes2.default.number),
  align: _propTypes2.default.string,
  valign: _propTypes2.default.string
};

exports.default = Column;