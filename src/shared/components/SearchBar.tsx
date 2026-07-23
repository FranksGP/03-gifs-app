import { useEffect, useState } from "react";

// import React from 'react'
interface Props {
 placeholder?: string;
 onQuery: (query: string) => void;
 };

export const SearchBar = ({ placeholder = 'Buscar', onQuery}: Props) => {

  const [query, setQuery] = useState('');

  useEffect(() => {
    
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 5000);

    return() => {
      clearTimeout(timeoutId);
    }
    
  },[query, onQuery]);

  const handleSearch = () => {
    onQuery(query);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter'){
        handleSearch(); 
        }
  };

  return (
    <div className="search-container">
        <input 
        type="text" 
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
          />
        <button>Buscar</button>
    </div>
  )
}
