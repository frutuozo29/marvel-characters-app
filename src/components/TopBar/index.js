import React from 'react';
import './topbar.css'
import * as filterActions from '../../actions/filter'
import * as charactersActions from '../../actions/characters'

// redux
import { bindActionCreators } from 'redux'
// react-redux
import { connect } from 'react-redux'
// svg
import lupa from '../../assets/images/lupa.svg'

export const TopBar = ({ filter, updateFilter, getCharacters }) => (
  <div className="container-topbar" data-testid="topbar-test">
    <h1 className="name">Marvel Characters</h1>
    <div className="item-input">
      <input
        autoFocus
        className="input"
        name="search"
        type="search"
        placeholder="Find a character"
        value={filter}
        onChange={({ target: { value } }) => updateFilter(value)}
        onKeyDown={({ keyCode }) => {
          keyCode === 13 && getCharacters(true)
        }}
      />
      <button className="btn-search">
        <img className="btn-img" src={lupa} alt="imagem de lupa" />
      </button>
    </div>
  </div>
)

const mapStateToProps = ({ filter }) => ({
  filter: filter.filter
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...filterActions, ...charactersActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)
