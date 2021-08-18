import { IPhotos, IUsers } from "../types";

export async function loadData() {
  const usersPromise = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((users: IUsers) => resolve(users))
    .catch(() => reject('Users load error'));
  });

  const photosPromise = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((photos: IPhotos) => resolve(photos))
    .catch(() => reject('Photos load error'));
  });

  return Promise.all([usersPromise,photosPromise]);
}