import localCharacters from '../localCharacters'

describe('Reducer test', () => {


  test('return default value store', () => {
    const state = {
      characters: []
    }

    expect(localCharacters(undefined, {})).toEqual(state)
  })

  test('return when POST_LOCAL_CHARACTER', () => {
    const character = {
      id: 1,
      name: 'Wolw'
    }
    const action = { type: 'POST_LOCAL_CHARACTER', character }

    expect(localCharacters(undefined, action)).toEqual({
      characters: [{
        id: 1,
        name: 'Wolw'
      }]
    })
  })

  test('return when POST_LOCAL_CHARACTER with contains character', () => {
    const character = { id: 1, name: 'Wolw' }
    const newCharacter = { id: 2, name: 'test' }

    const stateLocal = { characters: [character] }
    const newStateLocal = { characters: [character, newCharacter] }

    const action = { type: 'POST_LOCAL_CHARACTER', character: newCharacter }

    expect(localCharacters(stateLocal, action)).toEqual(newStateLocal)
  })

})