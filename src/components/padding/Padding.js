import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Padding = ({ padding, children, align, alignClasses, valign, valignClasses }) => {
  const paddingTop = padding[0]
  const paddingRight = (typeof padding[1] !== 'undefined') ? padding[1] : paddingTop
  const paddingBottom = (typeof padding[2] !== 'undefined') ? padding[2] : paddingTop
  const paddingLeft = (typeof padding[3] !== 'undefined') ? padding[3] : paddingRight

  return (
    <Fragment>
      {paddingTop &&
        <tr>
          <td
            className="spacer"
            height={paddingTop}
          >
            &nbsp;
          </td>
        </tr>
      }

      <tr>
        <td
          valign={valign}
          className={valignClasses}
        >
          {(align || paddingLeft || paddingRight) &&
            <table
              align={align}
              className={alignClasses}
            >
              <tbody>
                <tr>
                  {paddingLeft &&
                    <td width={paddingLeft} />
                  }

                  <td>
                    {children}
                  </td>

                  {paddingRight &&
                    <td width={paddingRight} />
                  }
                </tr>
              </tbody>
            </table>
          }
          {!(align || paddingLeft || paddingRight) &&
            <Fragment>
              {children}
            </Fragment>
          }
        </td>
      </tr>

      {paddingBottom &&
        <tr>
          <td
            className="spacer"
            height={paddingBottom}
          >
            &nbsp;
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
