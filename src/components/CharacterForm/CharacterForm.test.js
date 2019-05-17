import React from 'react';
import CharacterForm, { CharacterForm as CharacterFormComponent } from '../CharacterForm';

// Redux
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

// React Testing Library
import { render, fireEvent } from 'react-testing-library'

describe('CharacterForm test with Redux', () => {
  let props

  props = {
    match: {
      params: {
        id: '1'
      }
    },
    characters: []
  }

  const mockStore = configureMockStore([thunk])

  const store = mockStore({
    characters: {
      items: [
        {
          id: '1',
          name: 'test',
          description: 'test description'
        }
      ]
    },
    localCharacters: {
      characters: []
    }
  })

  test('render component with redux', () => {

    const { getByTestId } = render(<Provider store={store}><CharacterForm {...props} /></Provider>)

    expect(getByTestId('characterForm')).toBeInTheDocument()
  })
})

describe('CharacterComponent test without Redux', () => {
  let props

  beforeEach(() => {
    props = {
      match: {
        params: {
          id: '1'
        }
      },
      characters: [{
        id: '1',
        name: 'test',
        description: 'test description'
      }]
    }
  })

  test('render component without redux', () => {

    const { getByTestId } = render(<CharacterFormComponent {...props} />)

    expect(getByTestId('characterForm')).toBeInTheDocument()
  })

  test('handle input name change', () => {
    const { container } = render(<CharacterFormComponent {...props} />)

    const input = container.querySelector('input[name=name]')

    fireEvent.change(input, { target: { value: 1 } })

    expect(input.value).toEqual('1')
  })

  test('handle input description change', () => {
    const { container } = render(<CharacterFormComponent {...props} />)

    const input = container.querySelector('textarea[name=description]')

    fireEvent.change(input, { target: { value: 'test' } })

    expect(input.value).toEqual('test')
  })

})