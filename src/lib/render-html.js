import ReactDOMServer from 'react-dom/server'
import juice from 'juice'

const renderHTML = (component, specifiedOptions) => {
  const defaultOptions = {
    'applyWidthAttributes': false,
    'applyHeightAttributes': false,
    'applyAttributesTableElements': false,
    'preserveImportant': true
  }

  const options = Object.assign(defaultOptions, specifiedOptions)
  const markup = ReactDOMServer.renderToStaticMarkup(component)
  const markupWithComments = markup.replace(/<(template) data-comment\b[^>]*>(.*?)<\/\1>/gm, '$2')
  const renderedHTML = juice(markupWithComments, options)

  return renderedHTML
}

export default renderHTML
