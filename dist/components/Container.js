'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(_ref) {
  var children = _ref.children,
      width = _ref.width;

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: '\n        @media only screen and (max-width: ' + (width - 1) + 'px) {\n          .container__inner {\n            width: 100% !important;\n            min-width: initial !important;\n          }\n        }\n      ' } }),
    _react2.default.createElement(
      'center',
      { className: 'container' },
      _react2.default.createElement(
        'table',
        { className: 'container__inner', style: { width: width, minWidth: width } },
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
      )
    )
  );
};

Container.propTypes = {
  children: _propTypes2.default.node.isRequired,
  width: _propTypes2.default.number
};

exports.default = Container;