import React, { useMemo } from 'react';
import { useState } from 'react';

import { useGetUsersQuery } from '../../features/users/userApi';
import UserCard from '../UserCard/UserCard';

import styles from './UsersList.module.scss';
import { filterUsers, sortUsersByName } from '../../shared/lib/userUtils';
import SortSelect from '../../shared/ui/SortSelect';
import { sortOptions } from './sortData';
import Loader from '../Loader/Loader';

const UsersList = () => {
  const { data: users = [], isLoading } = useGetUsersQuery();
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | 'none'>(
    'none',
  );

  const filteredAndSorted = useMemo(() => {
    const filteredUsers = filterUsers(users, search);
    return sortUsersByName(filteredUsers, sortDirection);
  }, [users, search, sortDirection]);

  const handleSearch = () => {
    setSearch(searchInput);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    if (e.target.value === '') {
      setSearch('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSortChange = (value: string) => {
    setSortDirection(value as 'asc' | 'desc' | 'none');
  };

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button className={styles.buttonMagnifier} onClick={handleSearch}>
            <img
              src="/magnifier.png"
              alt="search"
              className={styles.magnifier}
            />
          </button>
        </div>

        <SortSelect
          value={sortDirection}
          onChange={handleSortChange}
          options={sortOptions}
        />

        {isLoading ? (
          <Loader />
        ) : filteredAndSorted.length === 0 && search !== '' ? (
          <p>Nothing was found</p>
        ) : (
          <div className={styles.cardsList}>
            {filteredAndSorted.map((u, i) => (
              <UserCard key={u.id} user={u} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersList;
