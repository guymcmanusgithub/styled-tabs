import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, boolean} from '@storybook/addon-knobs/react'

import NavTab from './nav-tab'


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
