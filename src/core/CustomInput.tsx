import { useState } from 'react';
import { SearchIcon } from './SearchIcon';

export function CustomInput() {

  const [value, setValue] = useState('');

  return (
    <>
    <div className='customInputContainer'>
      <SearchIcon />

      <input 
        className='customInput'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Search'
      />
    </div>
    </>
  )
}