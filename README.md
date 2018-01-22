# ReactEmailComponents
A collection of React components to help build consistent cross-client emails.

Note: This was built to work with Stylus, additional work will have to be done to get this working with vanilla CSS or another preprocessor.

# Getting started
ReactEmailComponents is split up into two modules:
- `react-email-components`
- `react-email-components-stylus`

Although they are both necessary, their setup is entirely different and therefore separated. To get started, follow the steps below for each.

## react-email-components
This module contains all of the React components necessary to get ReactEmailComponents to work.

Install using NPM or Yarn:
```
npm install react-email-components
```

Import the desired components into your React app:
```js
import { Container, Block, Row, Column, Spacer } from 'react-email-components'
```

## react-email-components-stylus
This module contains all of the Stylus necesssary to get ReactEmailComponents to work.

Install using NPM or Yarn:
```
npm install react-email-components-stylus
```

Require the Stylus module in your main stylesheet:
```stylus
@require 'react-email-components-stylus'
```

