import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import Demo from './demo/Demo'
import registerServiceWorker from './registerServiceWorker'

const juice = require('juice')
const css = require('!css-loader!stylus-loader!./demo/Demo.styl') // eslint-disable-line import/no-webpack-loader-syntax

const juiceConfig = {
  'applyWidthAttributes': false,
  'applyHeightAttributes': false,
  'applyAttributesTableElements': false,
  'preserveImportant': true,
  'extraCss': css
}

const html = ReactDOMServer.renderToStaticMarkup(<Demo />)
const juiced = juice(html, juiceConfig)

ReactDOM.render(<div dangerouslySetInnerHTML={{ __html: juiced }} />, document.querySelector('body'))
registerServiceWorker()
