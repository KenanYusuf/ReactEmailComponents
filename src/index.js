import React from 'react'
import ReactDOM from 'react-dom'
import Demo from './demo/Demo'
import registerServiceWorker from './registerServiceWorker'
import { renderHTML } from './lib/clock-react-email-components'

const css = require('!css-loader!stylus-loader!./demo/Demo.styl') // eslint-disable-line import/no-webpack-loader-syntax
const options = { extraCss: css }
const html = renderHTML(<Demo />, options)

ReactDOM.render(<div dangerouslySetInnerHTML={{ __html: html }} />, document.querySelector('body'))
registerServiceWorker()
