import React, { Component } from 'react'
import './Demo.styl'
import { Container, Block, Row, Column, Spacer } from '../ReactEmailComponents'

class App extends Component {
  render() {
    return (
      <Container>
        <Block className="test-block">
          Test block
        </Block>

        <Spacer height={20} />

        <Row>
          <Column padding={[ 5 ]} align="right">
            Col 1
          </Column>
          <Column padding={[ 5 ]} align="right">
            Col 2
          </Column>
          <Column padding={[ 5 ]} align="right">
            Col 3
          </Column>
        </Row>
      </Container>
    )
  }
}

export default App
