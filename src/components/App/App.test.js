import React from 'react';
import App from '../App';

// Redux
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

// React Testing Library
import { render } from 'react-testing-library'
// react router
import { BrowserRouter as Router } from "react-router-dom";

describe('App test', () => {

  const mockStore = configureMockStore([thunk])

  const store = mockStore({
    filter: {
      filter: ''
    },
    characters: {
      error: false,
      items: [],
      limit: 50,
      offset: 0
    },
    localCharacters: {
      characters: []
    }
  })

  test('render component', () => {

    const { getByTestId } = render(<Provider store={store}><Router><App /></Router></Provider>)

    expect(getByTestId('app-test')).toBeInTheDocument()
  })
})

