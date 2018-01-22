import React from 'react'
import PropTypes from 'prop-types'

import Padding from './Padding'

const Row = ({ children, className, padding, reverse }) => {
  if (padding) {
    return (
      <table className={className}>
        <tbody>
          <Padding padding={padding}>
            <table dir={reverse && 'rtl'}>
              <tbody>
                <tr>
                  {children}
                </tr>
              </tbody>
            </table>
          </Padding>
        </tbody>
      </table>
    )
  } else {
    return (
      <table
        className={className}
        dir={reverse && 'rtl'}
      >
        <tbody>
          <tr>
            {children}
          </tr>
        </tbody>
      </table>
    )
  }
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  padding: PropTypes.arrayOf(PropTypes.number),
  reverse: PropTypes.bool
}

export default Row
