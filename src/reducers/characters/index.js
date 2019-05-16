const initialState = {
  loading: false,
  error: false,
  items: [],
  limit: 50,
  offset: 0
}

const characters = (state = initialState, action) => {
  switch (action.type) {
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
    case 'CLEAN_CHARACTERS':
      return {
        ...state,
        items: []
      }
    default:
      return state
  }
}

export default characters