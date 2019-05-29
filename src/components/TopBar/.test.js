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

  test('handle change inputSearch', () => {
    const { container } = render(<TopBarComponent {...props} />)
    fireEvent.change(container.querySelector('input[name=search]'), { target: { value: 1 } })
    expect(props.updateFilter).toBeCalledWith('1')
  })

  test('handle change search and keyDown', () => {
    const { container } = render(<TopBarComponent {...props} />)
    fireEvent.keyDown(container.querySelector('input[name=search]'), { keyCode: 13 })
    expect(props.getCharacters).toBeCalledWith(true)
  })

  test('handle click search', () => {

    const { container } = render(<TopBarComponent {...props} />)
    fireEvent.click(container.querySelector('.btn-search'))
    expect(props.getCharacters).toBeCalledWith(true)
  })


})