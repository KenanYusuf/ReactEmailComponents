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
  const markupWithoutEscapedSpaces = markupWithComments.replace(/\xA0/g, '&nbsp;')
  const renderedHTML = juice(markupWithoutEscapedSpaces, options)

  return renderedHTML
}

export default renderHTML
