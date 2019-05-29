import * as actions from '../localCharacters'

describe('Actions test', () => {

  test('Action saveLocalCharacter', () => {
    const character = { id: 1, name: 'Wolw' }
    const actionFilter = actions.saveLocalCharacter(character);
    expect(actionFilter).toEqual({
      type: 'SAVE_LOCAL_CHARACTER',
      character
    })
  })

})