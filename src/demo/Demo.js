import React from 'react'
import './Demo.styl'
import { Container, Block, Row, Column, Spacer } from '../lib/react-email-components'

const App = () => {
  return (
    <Container width={600}>
      <Block padding={[ 20 ]}>
        <h1>Block heading</h1>
        <p>This is a block</p>
      </Block>

      <Spacer height={20} />

      <Row>
        <Column padding={[ 5 ]} align="center">
          <h2>Column 1</h2>
          This is a column
        </Column>

        <Column padding={[ 5 ]} align="center">
          <h2>Column 2</h2>
          This is a column
        </Column>

        <Column padding={[ 5 ]} align="center">
          <h2>Column 3</h2>
          This is a column
        </Column>
      </Row>
    </Container>
  )
}

export default App
