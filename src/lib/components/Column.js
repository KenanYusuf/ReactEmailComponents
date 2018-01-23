import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Padding from './Padding'

const Column = ({ children, className, padding, align, valign, fullDesktop }) => {
  const alignClasses = align ? `align align--${align}` : null
  const valignClasses = valign ? `valign valign--${valign}` : null

  return (
    <Fragment>
      <th
        className={classNames('column', className, alignClasses, valignClasses)}
        valign={valign}
        dir="ltr"
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

      {fullDesktop &&
        <Fragment>
          <template data-comment dangerouslySetInnerHTML={{ __html: '<!--[if lt mso 9]></tr></table><table style="width: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;"><tr><![endif]-->' }} />
          <template data-comment dangerouslySetInnerHTML={{ __html: '<!--[if gte mso 9]></tr></table><table style="width: 100%; border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;"><tr><![endif]-->' }} />
        </Fragment>
      }
    </Fragment>
  )
}

Column.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  padding: PropTypes.arrayOf(PropTypes.number),
  align: PropTypes.string,
  valign: PropTypes.string
}

export default Column
