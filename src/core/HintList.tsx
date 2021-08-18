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
  return (
    <div className='hintContainer'>
      {
        !isLoad ?
          <LoadIndicatorIcon />
        :
          users.map((user: IUser, index) => (
            <div className='userContainer'>
              <p>{user.name}</p>
            </div>
          ))
      }
    </div>
  )
}