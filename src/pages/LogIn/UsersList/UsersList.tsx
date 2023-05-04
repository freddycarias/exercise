export interface userProps {
  user: User[],
}

export interface User {
  id: number;
  userName: string;
  userPassword: string;
}

export const USERSLIST: User[] = [
  {
    id: 1,
    userName: "Freddy" , 
    userPassword: "i'm the admin"
  },
  {
    id: 2,
    userName: "Name1",
    userPassword: "password1"
  },
  {
    id: 3,
    userName: "Name2",
    userPassword: "password12"
  },
  {
    id: 4,
    userName: "Name3",
    userPassword: "password123"
  },
  {
    id: 5,
    userName: "example@gmail.com",
    userPassword: "example1"
  }
];
