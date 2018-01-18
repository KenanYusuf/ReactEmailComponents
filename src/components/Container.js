import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Container = ({ children, width }) => {
  return (
    <Fragment>
      <style dangerouslySetInnerHTML={{__html: `
        @media only screen and (max-width: ${width - 1}px) {
          .container__inner {
            width: 100% !important;
            min-width: initial !important;
          }
        }
      `}} />

      <center className="container">
        <table className="container__inner" style={{ width: width, minWidth: width }}>
          <tbody>
            <tr>
              <td>
                {children}
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </Fragment>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number
}

export default Container
