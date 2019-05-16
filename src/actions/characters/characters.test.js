import * as actions from '../characters'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

const mockStore = configureMockStore([thunk])
const URL_MOCK_API = 'https://gateway.marvel.com/v1/public/characters?apikey=e6dd575a751d830896bec720dea8405f&limit=20&offset=0'

const response = {
  data: {
    offset: 0,
    limit: 20,
    count: 20,
    results: [
      {
        id: 1011334,
        name: "3-D Man",
        description: "",
        modified: "2014-04-29T14:18:17-0400",
        thumbnail: {
          path: "",
          extension: "jpg"
        }
      }
    ]
  }
}

describe('Actions test', () => {
  let store

  beforeEach(() => {
    store = mockStore({
      characters: {
        offset: 0,
        limit: 20
      },
      filter: {
        filter: ''
      }
    })
  })

  afterEach(() => {
    fetchMock.restore()
  })

  test('Action cleanCharacters', () => {
    const action = actions.cleanCharacters();
    expect(action).toEqual({
      type: 'CLEAN_CHARACTERS'
    })
  })

  test('Action getCharactersRequest', () => {
    const action = actions.getCharactersRequest();
    expect(action).toEqual({
      type: 'CHARACTERS_REQUEST'
    })
  })

  test('Action getCharactersRequestSucess', () => {
    const action = actions.getCharactersRequestSucess({});
    expect(action).toEqual({
      type: 'CHARACTERS_REQUEST_SUCESS',
      payload: {}
    })
  })

  test('Action getCharactersRequestError', () => {
    const action = actions.getCharactersRequestError();
    expect(action).toEqual({
      type: 'CHARACTERS_REQUEST_ERROR'
    })
  })

  test('Action getCharacters Sucess', async () => {
    fetchMock.mock(URL_MOCK_API, response)

    const expectedActions = [
      { type: 'CHARACTERS_REQUEST' },
      {
        type: 'CHARACTERS_REQUEST_SUCESS',
        payload: {
          ...response.data
        }
      }
    ]

    await store.dispatch(actions.getCharacters())
    expect(store.getActions()).toEqual(expectedActions)
  })

  test('Action getCharacters Error', async () => {
    fetchMock.mock(URL_MOCK_API, 500)

    const expectedActions = [
      { type: 'CHARACTERS_REQUEST' },
      { type: 'CHARACTERS_REQUEST_ERROR' }
    ]

    await store.dispatch(actions.getCharacters())
    expect(store.getActions()).toEqual(expectedActions)
  })

  test('Action getCharacters isSearch = true', async () => {
    fetchMock.mock(URL_MOCK_API, response)

    const expectedActions = [
      { type: 'CLEAN_CHARACTERS' },
      { type: 'CHARACTERS_REQUEST' },
      {
        type: 'CHARACTERS_REQUEST_SUCESS',
        payload: {
          ...response.data
        }
      }
    ]

    await store.dispatch(actions.getCharacters(true))
    expect(store.getActions()).toEqual(expectedActions)
  })

})