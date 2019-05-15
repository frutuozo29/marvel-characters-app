const initialState = {
  loading: false,
  error: false,
  items: [],
  limit: 50,
  offset: 0
}

const Characters = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DADOS':
      return {
        ...state,
        items: action.payload
      }
    case 'CHARACTERS_REQUEST':
      return {
        ...state,
        loading: true,
        error: false
      }
    case 'CHARACTERS_REQUEST_SUCESS':
      return {
        ...state,
        loading: false,
        error: false,
        items: [...state.items, ...action.payload.results],
        offset: state.items.length + action.payload.count
      }
    case 'CHARACTERS_REQUEST_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
        items: [],
        offset: 0
      }
    default:
      return state
  }
}

export default Characters