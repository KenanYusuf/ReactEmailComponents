'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _juice = require('juice');

var _juice2 = _interopRequireDefault(_juice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderHTML = function renderHTML(component, specifiedOptions) {
  var defaultOptions = {
    'applyWidthAttributes': false,
    'applyHeightAttributes': false,
    'applyAttributesTableElements': false,
    'preserveImportant': true
  };

  var options = Object.assign(defaultOptions, specifiedOptions);
  var markup = _server2.default.renderToStaticMarkup(component);
  var markupWithComments = markup.replace(/<(template) data-comment\b[^>]*>(.*?)<\/\1>/gm, '$2');
  var renderedHTML = (0, _juice2.default)(markupWithComments, options);

  return renderedHTML;
};

exports.default = renderHTML;