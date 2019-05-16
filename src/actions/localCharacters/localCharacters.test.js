import * as actions from '../localCharacters'

describe('Actions test', () => {

  test('Action postLocalCharacter', () => {
    const character = { id: 1, name: 'Wolw' }
    const actionFilter = actions.postLocalCharacter(character);
    expect(actionFilter).toEqual({
      type: 'POST_LOCAL_CHARACTER',
      character
    })
  })

})