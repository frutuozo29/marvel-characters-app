import React from 'react';
import './styles.css'
import * as filterActions from '../../actions/filter'
import * as charactersActions from '../../actions/characters'

import InputSearch from '../InputSearch'

// redux
import { bindActionCreators } from 'redux'
// react-redux
import { connect } from 'react-redux'

export const TopBar = ({ filter, updateFilter, getCharacters }) => (
  <div className="container-topbar" data-testid="topbar-test">
    <h1 className="name">Marvel Characters</h1>
    <InputSearch
      name="search"
      placeholder="Find a character"
      value={filter}
      onKeyDown={({ keyCode }) => {
        keyCode === 13 && getCharacters(true)
      }}
      onChange={({ target: { value } }) => updateFilter(value)}
      onClick={(() => getCharacters(true))}
    />
  </div>
)

const mapStateToProps = ({ filter }) => ({
  filter: filter.filter
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...filterActions, ...charactersActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)
