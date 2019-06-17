import React from 'react'
import PropTypes from 'prop-types'

const Spacer = ({ height, className }) => {
  return (
    <table className={className}>
      <tbody>
        <tr>
          <td
            className="spacer"
            height={height}
          >
            <span className="padding-space">
              <img src="spacer.gif" height="1" width="5" alt="spacer gif" />
            </span>          </td>
        </tr>
      </tbody>
    </table>
  )
}

Spacer.propTypes = {
  height: PropTypes.number.isRequired,
  className: PropTypes.string
}

export default Spacer
