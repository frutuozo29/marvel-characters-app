const initialState = {
  characters: []
}

const localCharacters = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_LOCAL_CHARACTER':
      return {
        ...state,
        characters: [
          ...state.characters.filter((character) => character.id !== action.character.id),
          action.character
        ]
      }
    default:
      return state
  }
}

export default localCharacters