import React from 'react'

function InputSearch({ querySearch, setQuerySearch }) {
   return (
      <input className='input__search'
         onChange={(e) => setQuerySearch(e.target.value)}
         value={querySearch}
         type="text"
         placeholder='Поиск'
      />
   )
}

export default InputSearch;