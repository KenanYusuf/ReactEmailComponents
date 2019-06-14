import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Padding = ({ padding, children, align, alignClasses, valign, valignClasses }) => {
  const paddingTop = padding[0]
  const paddingRight = (typeof padding[1] !== 'undefined') ? padding[1] : paddingTop
  const paddingBottom = (typeof padding[2] !== 'undefined') ? padding[2] : paddingTop
  const paddingLeft = (typeof padding[3] !== 'undefined') ? padding[3] : paddingRight

  return (
    <Fragment>
      {(paddingTop !== 0) &&
        <tr>
          <td
            className="spacer"
            height={paddingTop}
          >
            <span className="padding-space" />
          </td>
        </tr>
      }

      <tr>
        <td
          valign={valign}
          className={valignClasses}
        >
          {(align || (paddingLeft !== 0) || (paddingRight !== 0)) &&
            <table
              align={align}
              className={alignClasses}
            >
              <tbody>
                <tr>
                  {(paddingLeft !== 0) &&
                    <td width={paddingLeft} />
                  }

                  <td>
                    {children}
                  </td>

                  {(paddingRight !== 0) &&
                    <td width={paddingRight} />
                  }
                </tr>
              </tbody>
            </table>
          }
          {!(align || (paddingLeft !== 0) || (paddingRight !== 0)) &&
            <Fragment>
              {children}
            </Fragment>
          }
        </td>
      </tr>

      {(paddingBottom !== 0) &&
        <tr>
          <td
            className="spacer"
            height={paddingBottom}
          >
            <span className="padding-space" />
          </td>
        </tr>
      }
    </Fragment>
  )
}

Padding.propTypes = {
  padding: PropTypes.arrayOf(PropTypes.number).isRequired,
  children: PropTypes.node,
  align: PropTypes.string,
  alignClasses: PropTypes.string,
  valign: PropTypes.string,
  valignClasses: PropTypes.string
}

export default Padding
