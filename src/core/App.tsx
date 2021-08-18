import { useState, useEffect } from 'react';
import { loadData } from '../modules/loadData';
import { CustomInput } from './CustomInput';
import { HintList } from './HintList';

export function App() {
  const [inputValue, setInputValue] = useState('');
  const [isLoad, setIsLoad] = useState(false);
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    if (inputValue === '') return;
    // let searchText = inputValue.replace(/\s/g, '');

    if (isLoad) {

    } else {
      loadData()
        .then((responses: any) => Promise.all(responses.map((item: any) => item.json())))
        .then(serverData => {
          // this timeout for loadIcon
          setTimeout(() => {
            setData(serverData)
            setIsLoad(true);
          }, 500);
        })
    }

  }, [inputValue, isLoad]);

  return (
    <>
      <CustomInput 
        value={inputValue}
        setValue={setInputValue}
      />
      <HintList 
        data={data}
        isLoad={isLoad}
        searchText={inputValue}
      />
    </>
  )
}