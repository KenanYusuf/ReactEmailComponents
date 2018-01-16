import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Padding from '../padding/Padding'

const Column = ({ children, className, padding, align, valign }) => {
  const alignClasses = align ? `align align--${align}` : null
  const valignClasses = valign ? `valign valign--${valign}` : null

  return (
    <Fragment>
      <th
        className={classNames(className, alignClasses, valignClasses)}
        valign={valign}
      >
        {padding &&
          <table>
            <tbody>
              <Padding
                padding={padding}
                align={align}
                alignClasses={alignClasses}
              >
                {children}
              </Padding>
            </tbody>
          </table>
        }

        {(!padding && align) &&
          <table
            align={align}
            className={alignClasses}
          >
            <tbody>
              <tr>
                <td>
                  {children}
                </td>
              </tr>
            </tbody>
          </table>
        }

        {(!padding && !align) &&
          <Fragment>
            {children}
          </Fragment>
        }
      </th>
    </Fragment>
  )
}

Column.propTypes = {
}

export default Column
