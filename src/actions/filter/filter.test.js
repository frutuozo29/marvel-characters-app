import * as actions from '../characters'

describe('Actions test', () => {

  test('Action updateFilter', () => {
    const actionFilter = actions.updateFilter();
    expect(actionFilter).toEqual({
      type: 'UPDATE_FILTER',
      filter: undefined
    })
  })

  test('Action updateFilter with value', () => {
    const actionFilter = actions.updateFilter('test');
    expect(actionFilter).toEqual({
      type: 'UPDATE_FILTER',
      filter: 'test'
    })
  })

})