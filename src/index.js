import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import Demo from './demo/Demo'
import registerServiceWorker from './registerServiceWorker'

// const fs = require('fs')
// const juice = require('juice')

// const juiceConfig = {
//   'applyWidthAttributes': false,
//   'applyHeightAttributes': false,
//   'applyAttributesTableElements': false,
//   'preserveImportant': true
// }

// const html = ReactDOMServer.renderToStaticMarkup(<Demo />)
// const juiced = juice(html, juiceConfig)

// console.log(juiced)

ReactDOM.render(<Demo />, document.getElementById('root'))
registerServiceWorker()
