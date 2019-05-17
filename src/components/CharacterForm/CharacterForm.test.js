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

describe('CharacterComponentForm test without Redux', () => {
  let props

  beforeEach(() => {
    props = {
      match: {
        params: {
          id: '1',
          details: ''
        }
      },
      characters: [{
        id: '1',
        name: 'test',
        description: 'test description',
        thumbnail: {
          path: '',
          extension: ''
        },
        series: {
          items: []
        }
      }],
      history: {
        push: jest.fn()
      },
      postLocalCharacter: jest.fn()
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

  test('click save', () => {
    const { getByTestId, container } = render(<CharacterFormComponent {...props} />)

    const button = container.querySelector('button[name=save]')

    fireEvent.click(button)

    expect(getByTestId('characterForm')).toBeInTheDocument()
  })

  test('click cancel', () => {
    const { getByTestId, container } = render(<CharacterFormComponent {...props} />)

    const button = container.querySelector('button[name=cancel]')

    fireEvent.click(button)

    expect(getByTestId('characterForm')).toBeInTheDocument()
  })

  test('click back', () => {
    props = {
      ...props,
      match: {
        ...props.match,
        params: {
          ...props.match.params,
          details: 'details'
        }
      }
    }

    const { getByTestId, container } = render(<CharacterFormComponent {...props} />)
    const button = container.querySelector('button[name=back]')

    fireEvent.click(button)

    expect(getByTestId('characterFormDetail')).toBeInTheDocument()
  })

})