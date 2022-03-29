import React from 'react';
import cl from './InputSearch.module.css';

function InputSearch({ querySearch, setQuerySearch }) {
   return (
      <input className={cl.input__search}
         onChange={(e) => setQuerySearch(e.target.value)}
         value={querySearch}
         type="text"
         placeholder='Пошук'
      />
   )
}

export default InputSearch;