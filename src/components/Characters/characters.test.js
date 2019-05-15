import React from 'react';
import Characters, { Characters as CharactersComponent } from '../Characters';

// Redux
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

// React Testing Library
import { render } from 'react-testing-library'

describe('Characters test', () => {

  const mockStore = configureMockStore([thunk])

  const store = mockStore({
    characters: {
      error: false,
      items: [],
      limit: 50,
      offset: 0
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
      ]
    }
    const { getByTestId } = render(<CharactersComponent {...props} />)

    expect(getByTestId('characters-test')).toBeInTheDocument()
  })

  test('render component with characters', () => {
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
      ]
    }
    const { getByTestId } = render(<CharactersComponent {...props} />)

    expect(getByTestId('characters-test')).toBeInTheDocument()
  })
})