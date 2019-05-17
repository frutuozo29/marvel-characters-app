import React from 'react';
import TopBar, { TopBar as TopBarComponent } from '../TopBar';

// Redux
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

// React Testing Library
import { render, fireEvent } from 'react-testing-library'

describe('TopBar test with Redux', () => {

  const mockStore = configureMockStore([thunk])

  const store = mockStore({
    filter: {
      filter: ''
    }
  })

  test('render component with redux', () => {

    const { getByTestId } = render(<Provider store={store}><TopBar /></Provider>)

    expect(getByTestId('topbar-test')).toBeInTheDocument()
  })
})

describe('TopBar test without Redux', () => {
  let props

  beforeEach(() => {
    props = {
      filter: '',
      updateFilter: jest.fn(),
      getCharacters: jest.fn()
    }
  })

  test('render component without redux', () => {

    const { getByTestId } = render(<TopBarComponent {...props} />)
    expect(getByTestId('topbar-test')).toBeInTheDocument()
  })

  test('handle change search', () => {

    const { container } = render(<TopBarComponent {...props} />)
    const input = container.querySelector('input[name=search]')
    fireEvent.change(input, { target: { value: 1 } })
    expect(input.value).toEqual('')
  })

  test('handle click search', () => {
    
    const { container, getByTestId } = render(<TopBarComponent {...props} />)
    const button = container.querySelector('.ant-input-search-icon')
    fireEvent.click(button)
    expect(getByTestId('topbar-test')).toBeInTheDocument()
  })


})