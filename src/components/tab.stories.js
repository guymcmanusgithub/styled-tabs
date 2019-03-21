import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, boolean} from '@storybook/addon-knobs/react'
// import { mount } from 'enzyme'
// import { specs, describe, it } from 'storybook-addon-specifications'
// import { expect } from 'chai'
// import expect from 'expect'

import NavTab from './tab.style'


storiesOf('NavTab', module)
  .addDecorator(withKnobs)

  .add('Vertical', () => {
    const story = (
      <div>
        <NavTab vertical={true} />
      </div>
    )
    return story
}) 
  .add('Horizontal', () => {
    const story = (
        <div>
            <NavTab vertical={false} />
        </div>
    )
    return story
})
