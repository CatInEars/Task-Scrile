import { SearchIcon } from './SearchIcon';

interface IInputProps {
  value: string,
  setValue: (newValue: string) => void
}

export function CustomInput({ 
  value,
  setValue
}: IInputProps) {

  return (
    <div className='customInputContainer'>
      <SearchIcon />

      <input 
        className='customInput'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Search'
        data-testid="search-input"
      />
    </div>
  )
}