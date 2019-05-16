import React from 'react';
import TopBar, { TopBar as TopBarComponent } from '../TopBar';

// Redux
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

// React Testing Library
import { render } from 'react-testing-library'

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
      filter: ''
    }
  })

  test('render component without redux', () => {

    const { getByTestId } = render(<TopBarComponent {...props} />)

    expect(getByTestId('topbar-test')).toBeInTheDocument()
  })

})