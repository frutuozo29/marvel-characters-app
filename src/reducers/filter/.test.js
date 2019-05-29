import filter from '../filter'

describe('Reducer test', () => {
  const state = {
    filter: ''
  }

  test('return default value store', () => {
    expect(filter(undefined, {})).toEqual(state)
  })

  test('return when UPDATE_FILTER', () => {
    const filterTest = 'test'
    const action = { type: 'UPDATE_FILTER', filter: filterTest }

    expect(filter(undefined, action)).toEqual({
      filter: 'test'
    })
  })

})