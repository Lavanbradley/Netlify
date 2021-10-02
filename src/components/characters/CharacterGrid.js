import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'
const CharacterGrid = ({ items, isLoading }) => {
  console.log(items);
  return isLoading ? (<Spinner/>) : (<section className='cards'>{/* */}
   
   
    {items.map(item => (
      <CharacterItem key={item.char_id} item={item}/>
    ))}  {/*Note the key, its needed when map() */}
 
 
 </section>)
}

export default CharacterGrid
