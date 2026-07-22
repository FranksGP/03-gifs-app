import { useState } from 'react'

import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifList } from './gifs/components/GifList'
import { mockGifs } from './mock-data/gifs.mock'


export const GifsApp = () => {
  const [previusTerms, setPreviusTerms] = useState(['dragon ball z']) // constante, funcion para actualiza, estado inicial.

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  const handleSearch = (query: string = '') =>{

    query = query.trim().toLowerCase();

    if (query.length === 0 ) return; 
    
    
    if (previusTerms.includes(query)) return;

    setPreviusTerms([query, ...previusTerms].splice(0,8))

  };

  return (
    <>
    {/* Header */}
    <CustomHeader title='Buscar Gifs' description='Descubre y comparte el gif prefecto'/>
    
    {/* Search */}
    <SearchBar  placeholder='Buscar Gif'
    onQuery = {handleSearch}/>

    {/* Busquedas previas */}
    <PreviousSearches 
    searches={previusTerms} 
    onLabelClicked={handleTermClicked}/>
    
    {/* Gifs */}
    <GifList gifs={mockGifs}/>

    </>
  )
}
