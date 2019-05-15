import React from 'react';
import App from '../App';

// Redux
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

// React Testing Library
import { render } from 'react-testing-library'

describe('App test', () => {

  const mockStore = configureMockStore([thunk])

  const store = mockStore({
    characters: {
      error: false,
      items: [],
      limit: 50,
      offset: 0
    }
  })

  test('render component', () => {

    const { getByTestId } = render(<Provider store={store}><App /></Provider>)

    expect(getByTestId('app-test')).toBeInTheDocument()
  })
})

