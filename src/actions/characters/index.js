export const API_URL = 'https://gateway.marvel.com:443/v1/public/characters'
const API_KEY = 'e6dd575a751d830896bec720dea8405f'

export const getCharactersRequest = () => ({ type: 'CHARACTERS_REQUEST' })

export const getCharactersRequestSucess = (payload) => ({ type: 'CHARACTERS_REQUEST_SUCESS', payload })

export const getCharactersRequestError = () => ({ type: 'CHARACTERS_REQUEST_ERROR' })

export const getCharacters = () => (dispacth, getState) => {
  dispacth(getCharactersRequest())

  const { filter } = getState().filter
  const { offset, limit } = getState().characters
  const queryFilter = filter ? `&nameStartsWith=${filter}` : ''

  return fetch(`${API_URL}?apikey=${API_KEY}&limit=${limit}&offset=${offset}`)
    .then(response => {
      if (!response.ok) throw Error()

      return response
    })
    .then(response => response.json())
    .then(response => dispacth(getCharactersRequestSucess(response.data)))
    .catch(() => dispacth(getCharactersRequestError()))
}
