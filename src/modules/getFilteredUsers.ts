import { IUser } from "../types"

export function getFilteredUsers(allUsers: IUser[], searchText: string) {
  return allUsers.filter((user: IUser) => {
    return (
      user.name.toLowerCase().includes(searchText.toLowerCase()) || 
      user.username.toLowerCase().includes(searchText.toLowerCase())
    )
  })
}