import React from 'react'
import './styles.css'
// svg
import search from '../../assets/images/search.svg'

const InputSearch = ({ name, placeholder, value, onChange, onClick, onKeyDown }) => (
  <>
    <div className="input-container" data-testid="inputSearch">
      <input
        className="input"
        name={name}
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button className="btn-search" onClick={onClick}>
        <img className="btn-img" src={search} alt="imagem de lupa" />
      </button>
    </div>
  </>
)

export default InputSearch