import React, { useEffect } from 'react'

// redux
import { bindActionCreators } from 'redux'
// react-redux
import { connect } from 'react-redux'

import * as charactersActions from '../../actions/characters'

export const Characters = ({ error, characters, getCharacters }) => {

  // eslint-disable-next-line
  useEffect(() => { !characters.length && !error && getCharacters() }, [characters])

  return (
    <div>
      <ul>
        {characters.map((character) => <li key={character.id}>{character.id} - {character.name}</li>)}
      </ul>
    </div>
  )
}

const mapStateToProps = ({ characters }) => ({
  loading: characters.loading,
  error: characters.error,
  characters: characters.items,
  limit: characters.limit,
  offset: characters.offset
})

const mapDispatchToProps = (dispatch) => bindActionCreators(charactersActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Characters)
