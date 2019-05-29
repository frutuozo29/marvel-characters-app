import React from 'react';
import Characters, { Characters as CharactersComponent } from '../Characters';

// Redux
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
// react router
import { BrowserRouter as Router } from "react-router-dom";

// React Testing Library
import { render, fireEvent } from 'react-testing-library'

describe('Characters test', () => {

  const mockStore = configureMockStore([thunk])

  const store = mockStore({
    characters: {
      error: false,
      items: [],
      limit: 50,
      offset: 0
    },
    filter: {
      filter: ''
    },
    localCharacters: {
      characters: []
    }
  })

  test('render component with redux', () => {

    const { getByTestId } = render(<Provider store={store}><Characters /></Provider>)

    expect(getByTestId('characters-test')).toBeInTheDocument()
  })
})

describe('Characters test', () => {
  let props

  beforeEach(() => {
    props = {
      error: false,
      characters: [],
      limit: 50,
      offset: 0,
      getCharacters: jest.fn()
    }
  })

  test('render component without redux', () => {
    props = {
      ...props,
      characters: [
        {
          id: 1,
          name: 'test',
          thumbnail: {
            path: '',
            extension: ''
          }
        }
      ],
      localCharacters: [
        {
          id: 1,
          name: 'test',
          thumbnail: {
            path: '',
            extension: ''
          }
        }
      ]
    }
    const { getByTestId } = render(<Router><CharactersComponent {...props} /></Router>)

    expect(getByTestId('characters-test')).toBeInTheDocument()
  })

  test('render component with localCharacters', () => {
    props = {
      ...props,
      characters: [
        {
          id: 1,
          name: 'test',
          thumbnail: {
            path: '',
            extension: ''
          }
        }
      ],
      localCharacters: [
        {
          id: 1,
          name: 'test',
          thumbnail: {
            path: '',
            extension: ''
          }
        },
        {
          id: 2,
          name: 'test2',
          thumbnail: {
            path: '',
            extension: ''
          }
        }
      ]

    }
    const { getByTestId } = render(<Router><CharactersComponent {...props} /></Router>)

    expect(getByTestId('characters-test')).toBeInTheDocument()
  })

  test('click load more', () => {
    const { getByTestId, container } = render(<Router><CharactersComponent {...props} /></Router>)

    const button = container.querySelector('button[name=load-more]')

    fireEvent.click(button)

    expect(getByTestId('characters-test')).toBeInTheDocument()
  })
})