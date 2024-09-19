import React from 'react'
import { useState } from 'react';
const SearchBar = () => {

  const [searchText, setSearchText] = useState("");

  return (
    <div>
        <input className='w-[860px] h-[48px] border-r-2 border-[1px] justify-center'
        type='text'
        placeholder='Search for restaurants and Food'
        value={searchText}
        onChange={(e) => {
            setSearchText(e.target.value)
        }}
        />
        <h1 className=' font-bold text-[#3d4152]'>Popular cuisines</h1>
        
    </div>
  )
}

export default SearchBar