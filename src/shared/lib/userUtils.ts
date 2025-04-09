import { User } from "../../types/user";

export const filterUsers = (users: User[], search: string): User[] => {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()),
    );
  };
  

  export const sortUsersByName = (
    users: User[],
    direction: 'asc' | 'desc' | 'none',
  ): User[] => {
    if (direction === 'none') return [...users]; 
    return [...users].sort((a, b) =>
      direction === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name),
    );
  };