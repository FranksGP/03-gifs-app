// import React from 'react'
interface Props {
 text: string;
 placeholder?: string;
 type: string;
}

export const SearchBar = ({text, placeholder = 'Buscar', type}: Props) => {
  return (
    <div className="search-container">
        <input type={type} placeholder={placeholder}  />
        <button>{text}</button>
    </div>
  )
}
