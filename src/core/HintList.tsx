import { useEffect } from "react";
import { useState } from "react";
import { getFilteredUsers } from "../modules/getFilteredUsers";
import { IPhotos, IUser } from "../types";
import { LoadIndicatorIcon } from "./LoadIndicatorIcon";
import { UserItem } from "./UserItem";

interface IHintProps {
  allUsers: IUser[],
  photos: IPhotos[],
  isLoad: boolean,
  searchText: string,
  setInputValue: (newValue: string) => void
}
export function HintList({
  allUsers,
  photos,
  isLoad,
  searchText,
  setInputValue
}: IHintProps) {

  const [users, setUsers] = useState<IUser[]>(
    getFilteredUsers(allUsers, searchText)
  );

  useEffect(() => {
    setUsers(getFilteredUsers(allUsers, searchText))
  }, [searchText, isLoad, allUsers])

  return (
    <div className='hintContainer'>
      {
        !isLoad ?
          <LoadIndicatorIcon />
        :
          users.map((user: IUser, index: number) => (
            <UserItem
              user={user}
              key={index}
              setInputValue={setInputValue}
              index={index}
            />
          ))
      }
    </div>
  )
}