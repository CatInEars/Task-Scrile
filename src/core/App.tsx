import { useState, useEffect } from 'react';
import { loadData } from '../modules/loadData';
import { IPhotos, IUser } from '../types';
import { CustomInput } from './CustomInput';
import { HintList } from './HintList';

export function App() {
  const [inputValue, setInputValue] = useState('');
  const [isLoad, setIsLoad] = useState(false);
  const [usersData, setUsers] = useState<IUser[]>([])
  const [photosData, setPhotos] = useState<IPhotos[]>([])

  useEffect(() => {
    if (inputValue.replace(/\s/g, '') === '') return;

    if (!isLoad) {
      loadData()
        .then((responses: any) => Promise.all(responses.map((item: any) => item.json())))
        .then((serverData: IUser[] & IPhotos) => {
          // this timeout for loadIcon
          setTimeout(() => {
            setUsers(serverData[0])
            setPhotos(serverData[1])
            setIsLoad(true);
          }, 800);
        })
    }

  }, [inputValue, isLoad]);

  return (
    <>
      <CustomInput 
        value={inputValue}
        setValue={setInputValue}
      />
      {
        inputValue.replace(/\s/g, '') === '' ?
          null
        :
          <HintList 
            users={usersData}
            photos={photosData}
            isLoad={isLoad}
            searchText={inputValue}
          />
      }
    </>
  )
}