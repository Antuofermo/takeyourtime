import { addDecorator } from '@storybook/react'
import React from 'react'
import GlobalStyles from '../src/components/common/GlobalStyles'

addDecorator(renderComponent => (
  <>
    <GlobalStyles />
    {renderComponent()}
  </>
))
