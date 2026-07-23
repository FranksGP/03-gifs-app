import { useState } from 'react'

import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifList } from './gifs/components/GifList'
import { getGifsByQuery } from './gifs/actions/get-gifs-by-qyety.action'
import type { Gif } from './gifs/interface/gif.interface'


export const GifsApp = () => {

  const [gifs, setGifs] = useState<Gif[]>([])
  const [previusTerms, setPreviusTerms] = useState<string[]>([]) // constante, funcion para actualiza, estado inicial.

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  const handleSearch = async(query: string = '') =>{

    query = query.trim().toLowerCase();

    if (query.length === 0 ) return; 
    
    
    if (previusTerms.includes(query)) return;

    setPreviusTerms([query, ...previusTerms].splice(0,8))

    const gifs = await getGifsByQuery(query);
  
    setGifs(gifs);
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
    <GifList gifs={gifs}/>

    </>
  )
}
