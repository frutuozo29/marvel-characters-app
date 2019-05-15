import characters from '../characters'

describe('Reducer test', () => {
  const state = {
    loading: false,
    error: false,
    items: [],
    limit: 50,
    offset: 0
  }

  test('return default value store', () => {
    expect(characters(undefined, {})).toEqual(state)
  })

  test('return when CHARACTERS_REQUEST', () => {
    const action = { type: 'CHARACTERS_REQUEST' }

    expect(characters(undefined, action)).toEqual({
      ...state,
      loading: true,
      error: false
    })
  })

  test('return when CHARACTERS_REQUEST_SUCESS', () => {
    const action = { type: 'CHARACTERS_REQUEST_SUCESS', payload: { results: [{}], count: 0 } }

    expect(characters(undefined, action)).toEqual({
      ...state,
      loading: false,
      error: false,
      items: action.payload.results,
      offset: action.payload.count
    })
  })

  test('return when CHARACTERS_REQUEST_ERROR', () => {
    const action = { type: 'CHARACTERS_REQUEST_ERROR' }

    expect(characters(undefined, action)).toEqual({
      ...state,
      loading: false,
      error: true,
      items: [],
      offset: 0
    })
  })
})