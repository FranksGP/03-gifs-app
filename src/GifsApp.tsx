import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifList } from './gifs/components/GifList'
import { mockGifs } from './mock-data/gifs.mock'

export const GifsApp = () => {
  return (
    <>
    {/* Header */}
    <CustomHeader title='Buscar Gifs' description='Descubre y comparte el gif prefecto'/>
    
    {/* Search */}
    <SearchBar type='text' placeholder='Buscar Gif' text='Buscar' />

    {/* Busquedas previas */}
    <PreviousSearches/>
    
    {/* Gifs */}
    <GifList gifs={mockGifs}/>

    </>
  )
}
