import React, { Component } from 'react'

import { Block, Row, Column, Spacer } from './ReactEmailComponents'

class App extends Component {
  render() {
    return (
      <div>
        React Email Components

        <Row>
          <Column padding={[ 5 ]} align="right">
            1
          </Column>
          <Column padding={[ 5 ]} align="right">
            2
          </Column>
          <Column padding={[ 5 ]} align="right">
            3
          </Column>
        </Row>
      </div>
    )
  }
}

export default App
