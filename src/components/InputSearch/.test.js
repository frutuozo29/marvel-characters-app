import React from 'react'

import { render } from 'react-testing-library'

// component 
import InputSearch from '../InputSearch'

describe('InputSearch test', () => {
  test('render component', () => {
    const { getByTestId } = render(<InputSearch />)
    expect(getByTestId('inputSearch')).toBeInTheDocument()
  })
})