import { IPhotos, IUser } from "../types";

interface IUserItemProps {
  user: IUser,
  setInputValue: (newValue: string) => void,
  photo?: IPhotos,
  index: number
}

export function UserItem({
  user,
  photo,
  setInputValue,
  index
}: IUserItemProps) {

  function handleClick() {
    setInputValue(user.username);
  }

  return (
    <div 
      className='userContainer'
      onClick={handleClick}
    >
      <img
        src={`/images/user${user.id}.jpg`}
        className='userImage'
        alt='user'
      />
      <div className='userInfo'>
        <a 
          href='##'
        >
          {user.name}
        </a>
        <p>@{user.username}</p>
      </div>
    </div>
  )
}