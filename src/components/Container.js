import React from 'react'
import PropTypes from 'prop-types'

import Block from './Block'

const Container = ({ children, width }) => {
  return (
    <center className="container">
      <Block className="container__inner" >
        {children}
      </Block>
    </center>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number,
}

export default Container
