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
            &nbsp;
          </td>
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
