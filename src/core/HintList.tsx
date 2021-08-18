import { IPhotos, IUser } from "../types";
import { LoadIndicatorIcon } from "./LoadIndicatorIcon";

interface IHintProps {
  users: IUser[],
  photos: IPhotos[],
  isLoad: boolean,
  searchText: string
}
export function HintList({
  users,
  photos,
  isLoad,
  searchText
}: IHintProps) {
  console.log(users)
  return (
    <div className='hintContainer'>
      {
        !isLoad ?
          <LoadIndicatorIcon />
        :
          users.map((user: IUser, index) => (
            <div className='userContainer'>
              <div 
                className='userImage'
              />
              <div className='userInfo'>
                <a href='#'>{user.name}</a>
                <p>@{user.username}</p>
              </div>
            </div>
          ))
      }
    </div>
  )
}