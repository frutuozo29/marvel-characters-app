import * as actions from '../characters'

describe('Actions test', () => {

  test('Action updateFilter', () => {
    const action = actions.updateFilter('test');
    expect(action).toEqual({
      type: 'UPDATE_FILTER',
      filter: 'test'
    })
  })

})