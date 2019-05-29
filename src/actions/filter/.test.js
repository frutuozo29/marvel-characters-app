import * as actions from '../filter'

describe('Actions test', () => {

  test('Action updateFilter', () => {
    const actionFilter = actions.updateFilter();
    expect(actionFilter).toEqual({
      type: 'UPDATE_FILTER',
      filter: ''
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