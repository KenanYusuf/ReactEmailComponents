import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Padding from '../padding/Padding'

const Block = ({ children, className, padding, align, valign }) => {
  const alignClasses = align ? `align align--${align}` : null
  const valignClasses = valign ? `valign valign--${valign}` : null

  if (padding) {
    return (
      <table className={className}>
        <tbody>
          <Padding
            padding={padding}
            align={align}
            alignClasses={alignClasses}
            valign={valign}
            valignClasses={valignClasses}
          >
            {children}
          </Padding>
        </tbody>
      </table>
    )
  } else {
    return (
      <table
        className={classNames(className, alignClasses, valignClasses)}
        align={align}
      >
        <tbody>
          <tr>
            <td
              className={valignClasses}
              valign={valign}
            >
              {children}
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

Block.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  padding: PropTypes.arrayOf(PropTypes.number),
  align: PropTypes.string,
  valign: PropTypes.string
}

export default Block
